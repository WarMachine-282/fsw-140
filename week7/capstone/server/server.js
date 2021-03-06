const express = require("express");
const mysql = require("mysql");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "avengers",
  port: 3306,
  parseJSON: true,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Database Connection Established Successfully!");
});

// DISPLAY DATA FROM TABLES-----------------------------------------------------------------------------------------
app.get("/avengers_tbl", (req, res) => {
  let sql =
    "SELECT name, gender, year, yearsSinceJoining, alive FROM avengers_tbl LIMIT 20";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});
app.get("/dc_heroes", (req, res) => {
  let sql =
    "SELECT name, gender, year, yearsSinceJoining, alive FROM dc_heroes LIMIT 20";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});
// -----------------------------------------------------------------------------------------------------------------
// ------3RD PAGE WHICH IS CRUD ------------------------------------------------------------------------------------
app.get("/heroes", (req, res) => {
  let sql =
    "SELECT name, gender, year, yearsSinceJoining, alive FROM heroes LIMIT 20";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

// POST
// app.post("/heroes", (req, res) => {
  // const { name, gender, year, yearsSinceJoining, alive } = req.body;
  // let thisHero = {name:req.body.name, gender:req.body.gender, year:req.body.year, yearsSinceJoining:req.body.yearsSinceJoining, alive:req.body.alive } 
  // let sql = `INSERT INTO heroes (name, gender, year, yearsSinceJoining, alive) VALUES ("${name}","${gender}","${year}","${yearsSinceJoining}","${alive}")`;
  // let sql = "INSERT INTO heroes SET ?"
  // db.query(sql, thisHero, (err, res) => {
  //   if (err) {
  //     throw err
  //   }
    // let displayHeroes = "SELECT * FROM heroes";
    // db.query(displayHeroes, (err, result) => {
    //   if (err) {
    //     throw err
    //   }
      // res.send(result[res -1])
//       console.log(result)
//       res.send(result)
//     })
//   })
// });
app.post('/heroes', (req, res) => {
  let sql = 'INSERT INTO heroes SET ?';
  db.query(sql, req.body, (err, result) => {
      if(err) {
          throw err;
      }
      res.send(result);
  })
})
// --------------------------------------------------------------------------------------------------------------------
app.listen(9000, () => {
  console.log("Server is listening on port 9000!");
});
