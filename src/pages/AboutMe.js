import React from 'react'
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className = "home">
      <div className = "about">
        <h2> Hello! I'm Thomas!</h2>
        <div className = "shortbio">A new full stack developer, trying to learn everything there is to coding!</div>
      </div>
      <div className = "skills">
        <h1>Skills</h1>
        <ol className= "list">
          <li className = "item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI, TailwindCSS</span>
          </li>
          <li className = "item">
            <h2>Back-End</h2>
            <span>NodeJS, JavaScript, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default AboutMe