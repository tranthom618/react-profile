import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  // const [expandNavbar, setExpandNavbar] = React.useState(false);

  return (
    <div>
      <div className="navbar">
        <div classname="toggleButton">
          {/* <button onClick ={() => {
            setExpandNavbar((prev) => !prev)
          }}>➕</button> */}
        </div>
        <div className="links">
          <Link to ="/"> About Me </Link>
          <Link to ="/portfolio"> Portfolio </Link>
          <Link to ="/contact"> Contact </Link>
          <Link to ="/resume"> Resume </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
