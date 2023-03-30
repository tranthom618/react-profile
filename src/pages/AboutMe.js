import React from 'react'
import "../styles/AboutMe.css";
import ProfilePic from "../Profile.png";

function AboutMe() {
  return (
    <div className = "home">
      <div className = "about">
        <h2> Hello! I'm Thomas!</h2>
        <div className = "shortbio">A new full stack developer, trying to learn everything there is to coding!</div>
      </div>
      <div className = "skills">
      <img src={ProfilePic} alt="ProfilePicture" /><span>I'm a brand new full stack developer, currently in the early stages of learning the rope to coding! Here, you'll see my journey as I gain more practice and experience to hopefully one day get an opportunity to have this as a career!</span>
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