import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Footer.css";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
// import StackOverflowIcon from "@material-ui/icons/St";

function Footer() {
  return (
    <div className="footer">
        <div className="links">
          <Link to ="github.com/tranthom618"><GitHubIcon /></Link>
          <Link to ="www.linkedin.com/in/thomas-tran-750488246/"><LinkedInIcon /></Link>
          {/* <Link to ="tranthom618@gmail.com"><StackOverflowIcon /></Link> */}
        </div>
      </div>
  )
}

export default Footer