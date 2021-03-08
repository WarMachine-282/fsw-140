import React from "react";
import "./Heroes.css";

const HeroesData = (props) => {
  const { name, gender, year, yearsSinceJoining, alive } = props.data;
  return (
    <div>
      <div className="Hero-Container">
        <p className="inner_hero_title_top">Name</p>
        <p className="inner_hero_data"> {name}</p>
        <p className="inner_hero_title">Gender</p>
        <p className="inner_hero_data">{gender}</p>
        <p className="inner_hero_title">Year Started</p>
        <p className="inner_hero_data">{year}</p>
        <p className="inner_hero_title">Duration</p>
        <p className="inner_hero_data">{yearsSinceJoining}YRS.</p>
        <p className="inner_hero_title">Alive?</p>
        <p className="inner_hero_data_btm">{alive}</p>
      </div>
    </div>
  );
};

export default HeroesData;
