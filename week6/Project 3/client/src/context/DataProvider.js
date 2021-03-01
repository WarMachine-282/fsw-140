import React, { useState } from "react";
import axios from "axios";
export const UserContext = React.createContext();

export default function DataProvider(props) {
  
  const [dataState, setDataState] = useState();

  const getData = () => {
    axios
      .get("/avengers")
      .then((res) => {
        setDataState(res.data)
        // console.log(res.data)
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ getData, dataState }}>
      {props.children}
    </UserContext.Provider>
  );
}
