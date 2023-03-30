import React from "react";
import cv from "../Thomas-Tran.pdf";

function Resume() {
  return (
    <div>
      <h3>Resume Download Link</h3>
      <button className="button">
        <a className="button" href={cv} download="Thomas-Tran.pdf">
          Download Resume
        </a>
      </button>
      <h2>Front-End</h2>
      <span>ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI, TailwindCSS</span>
      <h2>Back-End</h2>
      <span>NodeJS, JavaScript, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB</span>
    </div>
  );
}

export default Resume;
