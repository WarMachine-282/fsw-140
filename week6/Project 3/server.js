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

app.get("/avengers", (req, res) => {
  let sql =
    "SELECT name, gender, year, yearsSinceJoining, death1 FROM avengers LIMIT 20";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

app.listen(9000, () => {
  console.log("Server is listening on port 9000!");
});
