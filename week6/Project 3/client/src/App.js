import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./context/DataProvider";
import Header from "./components/Header";
import Data from "./components/Data";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  const { getData, dataState } = useContext(UserContext);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="App">
        <Header />
        {dataState ? (
          <div>
            {dataState.map((avenger) => (
              <Data data={avenger} />
            ))}
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
