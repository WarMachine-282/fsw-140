import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/DataProvider";
import HeroHead from "./HeroHead";
import HeroForm from "./HeroForm"
import HeroesData from "./HeroesData";
import Footer from "../../footer/Footer";

function Heroes() {
  const { getHeroData, dataState, heroPost } = useContext(UserContext);

  useEffect(() => {
    getHeroData();
  }, []);

  return (
    <div className="hero_bg">
      <HeroHead />
      <HeroForm
          heroPost={heroPost}/>
      {dataState ? (
        <div>
          {dataState.map((hero) => (
            <HeroesData data={hero} />
          ))}
          {console.log(dataState)}
        </div>
      ) : (
        <h2 className="inner_hero_input">Loading...</h2>
      )}
      <Footer />
    </div>
  );
}

export default Heroes;
