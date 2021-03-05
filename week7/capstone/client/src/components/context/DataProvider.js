import React, { useState } from "react";
import axios from "axios";
export const UserContext = React.createContext();

export default function DataProvider(props) {
  
  const [dataState, setDataState] = useState();

  const getAvengerData = () => {
    axios
      .get("/avengers_tbl")
      .then((res) => {
        setDataState(res.data)
      })
      .catch((err) => console.log(err));
  };
  const getDcData = () => {
    axios
      .get("/dc_heroes")
      .then((res) => {
        setDataState(res.data)
      })
      .catch((err) => console.log(err));
  };
  const getHeroData = () => {
    axios
      .get("/heroes")
      .then((res) => {
        setDataState(res.data)
      })
      .catch((err) => console.log(err));
  };


  return (
    <UserContext.Provider value={{ getAvengerData, getDcData, getHeroData, dataState }}>
      {props.children}
    </UserContext.Provider>
  );
}