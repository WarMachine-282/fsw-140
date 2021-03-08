import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  return (
    <div className="header">
      {location.pathname === "/dc" ? (
        // onClick={() => setToggle(true)}
        <div>
          <Link path to="/avengers" className="inner_header">
            <h1>DC superheroes</h1>
          </Link>
          <h5 className="header_info">
            Click title for Avengers Database or{" "}
            <Link className="heroes_link" path to="/heroes">
              here
            </Link>{" "}
            to create a database
          </h5>
        </div>
      ) : (
        <div>
          <Link path to="/dc" className="inner_header">
            <h1>Avengers</h1>
          </Link>
          <h5 className="header_info">
            Click title for DC Database or{" "}
            <Link className="heroes_link" path to="/heroes">
              here
            </Link>{" "}
            to create a database
          </h5>
        </div>
      )}
    </div>
  );
};

export default Header;
