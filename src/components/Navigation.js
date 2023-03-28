import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div className="navbar">
        <div classname="toggleButton">
          <button></button>
        </div>
        <div className="links">
          <Link to ="/">About Me</Link>
          <Link to ="/portfolio">Portfolio</Link>
          <Link to ="/contact">Contact</Link>
          <Link to ="/resume">Resume</Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
