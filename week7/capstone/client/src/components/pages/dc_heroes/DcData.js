import React from "react";
import "./Dc.css";

const DcData = (props) => {
  const { name, gender, year, yearsSinceJoining, alive } = props.data;
  return (
    <div className="Data-Container">
      <p className="inner_data_title">Name</p>
      <p className="inner_data"> {name}</p>
      <p className="inner_data_title">Gender</p>
      <p className="inner_data">{gender}</p>
      <p className="inner_data_title">Year Started</p>
      <p className="inner_data">{year}</p>
      <p className="inner_data_title">Duration</p>
      <p className="inner_data">{yearsSinceJoining}YRS.</p>
      <p className="inner_data_title">Alive?</p>
      <p className="inner_data">{alive}</p>
    </div>
  );
};

export default DcData;
