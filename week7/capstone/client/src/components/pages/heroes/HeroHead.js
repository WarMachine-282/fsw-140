import React from "react";
import { Link } from "react-router-dom";

const HeroHead = () => {
  return (
    <div className="hero_head">
      <h1 className="inner_hero_head">Your Heroes</h1>
      <h5 className="hero_head_info">
        This is a place where you can create your own database of heroes or go{" "}
        <Link className="back_link" path to="/">
          back
        </Link>
      </h5>
    </div>
  );
};

export default HeroHead;
