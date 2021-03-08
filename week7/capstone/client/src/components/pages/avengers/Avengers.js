import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/DataProvider";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import AvengersData from "./AvengersData";

function Avengers() {
  const { getAvengerData, dataState } = useContext(UserContext);

  useEffect(() => {
    getAvengerData();
  }, []);

  return (
    <div className="av_bg">
      <Header />
      {dataState ? (
        <div>
          {dataState.map((avenger) => (
            <AvengersData data={avenger} />
          ))}
          {console.log(dataState)}
        </div>
      ) : (
        <h2 className="inner_data">Loading...</h2>
      )}
      <Footer />
    </div>
  );
}

export default Avengers;
