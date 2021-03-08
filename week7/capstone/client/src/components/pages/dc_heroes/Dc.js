import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/DataProvider";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import DcData from "./DcData";

function Dc() {
  const { getDcData, dataState } = useContext(UserContext);

  useEffect(() => {
    getDcData();
  }, []);

  return (
    <div className="dc_bg">
      <Header />
      {dataState ? (
        <div>
          {dataState.map((dc) => (
            <DcData data={dc} />
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

export default Dc;
