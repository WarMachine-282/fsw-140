import React, { useState } from "react";
import axios from "axios";
export const UserContext = React.createContext();

export default function DataProvider(props) {
  const [dataState, setDataState] = useState();

  const getAvengerData = () => {
    axios
      .get("/avengers_tbl")
      .then((res) => {
        setDataState(res.data);
      })
      .catch((err) => console.log(err));
  };
  const getDcData = () => {
    axios
      .get("/dc_heroes")
      .then((res) => {
        setDataState(res.data);
      })
      .catch((err) => console.log(err));
  };

  // CRUD PORTION-----------------------------------------------------------------------------

  const getHeroData = () => {
    axios
      .get("/heroes")
      .then((res) => {
        setDataState(res.data);
      })
      .catch((err) => console.log(err));
  };
  const heroPost = (newHero) => {
    axios
      .post("/heroes", newHero)
      .then((res) => {
        setDataState((prevState) => [...prevState, res.data]);
      })
      .catch((err) => console.log(err));
      getHeroData();
  };

  // -------------------------------------------------------------------------------------------------

  return (
    <UserContext.Provider
      value={{ getAvengerData, getDcData, getHeroData, heroPost, dataState }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
