import React, { useState } from "react";
import "./Heroes.css";

const HeroForm = (props) => {
  const { heroPost } = props;
  const initInputs = {
    name: "",
    gender: "",
    year: "",
    yearsSinceJoining: "",
    alive: "",
  };

  const [inputs, setInputs] = useState(initInputs);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    heroPost(inputs);
  };
  
  return (
    <div className="Hero-Container">
      <form onSubmit={handleSubmit} >
        <p className="inner_hero_title_top">Name</p>
        <input
          id="name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          type="text"
          className="inner_hero_input"
          placeholder="enter to submit"
        />
        <p className="inner_hero_title">Gender</p>
        <input
          id="gender"
          name="gender"
          value={inputs.gender}
          onChange={handleChange}
          type="text"
          className="inner_hero_input"
          placeholder="enter to submit"
        />
        <p className="inner_hero_title">Year Started</p>
        <input
          maxLength="4"
          id="year"
          name="year"
          value={inputs.year}
          onChange={handleChange}
          type="text"
          className="inner_hero_input"
          placeholder="enter to submit"
        />
        <p className="inner_hero_title">Duration</p>
        <input
          maxLength="4"
          id="yearsSinceJoining"
          name="yearsSinceJoining"
          value={inputs.yearsSinceJoining}
          onChange={handleChange}
          type="text"
          className="inner_hero_input"
          placeholder="enter to submit"
        />
        <p className="inner_hero_title">Alive?</p>
        <input
          maxLength="3"
          id="alive"
          name="alive"
          value={inputs.alive}
          onChange={handleChange}
          type="text"
          className="inner_hero_input"
          placeholder="enter to submit"
        />
        <div>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default HeroForm;
