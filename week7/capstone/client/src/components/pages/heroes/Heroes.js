import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/DataProvider";
import HeroHead from "./HeroHead";
import Footer from "../../footer/Footer";
import HeroesData from "./HeroesData";

function Heroes() {
  const { getHeroData, dataState } = useContext(UserContext);

  useEffect(() => {
    getHeroData();
  }, []);

  return (
    <div className="hero_bg">
      <HeroHead/>
      <br/>
      <br/>
      <br/>
      <br/>      <br/>
      <br/>
      <br/>
      <br/>      <br/>
      <br/>
      <br/>
      <br/>      <br/>
      <br/>
      <br/>
      <br/>      <br/>
      <br/>
      <br/>
      <br/>

      {dataState ? (
        <div>
          {dataState.map((hero) => (
            <HeroesData data={hero} />
          ))}
          {console.log(dataState)}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
      <Footer />
    </div>
  );
}

export default Heroes;