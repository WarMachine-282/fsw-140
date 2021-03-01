import React  from "react";
import "./Data.css";


const Data = (props) => {
  const { name, gender, year, yearsSinceJoining, death1 } = props.data
  return (
        <div className="Data-Container">
          <p className="inner_data">Name: {name}</p>
          <p className="inner_data">Gender: {gender}</p>
          <p className="inner_data">Year Started: {year}</p>
          <p className="inner_data">Duration: {yearsSinceJoining}</p>
          <p className="inner_data">Death: {death1}</p>
        </div>

  );
};

export default Data;
