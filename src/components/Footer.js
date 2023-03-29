import React from 'react'
import "../styles/Footer.css";

// Material Icons Package Imports - For Social Media Icons
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import StackOverflowIcon from "@material-ui/icons/Layers";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <a href="https://github.com/tranthom618"><GitHubIcon /></a>
          <a href="https://linkedin.com/in/thomas-tran-750488246/"><LinkedInIcon /></a>
          <a href="https://stackoverflow.com/users/21516331/thomas-tran"><StackOverflowIcon /></a>
        </div>
        <p> &copy; 2023 tranthom618@gmail.com</p>
      </div>
  )
}

export default Footer