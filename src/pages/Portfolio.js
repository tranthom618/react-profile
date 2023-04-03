import React from "react";
import "../styles/Portfolio.css";
import ProjectPic1 from "../ProjectPic1.png";

function Portfolio() {
  return (
    <div>
      <a href="https://oracle-online.herokuapp.com/">
        <img src={ProjectPic1} alt="ProjectPicture1" />
      </a>
      <figcaption>Oracle (Full MERN Stack Collaboration Project)</figcaption>
    </div>
  );
}

export default Portfolio;
