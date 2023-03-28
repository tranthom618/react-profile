import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Footer.css";

// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="footer">
        <div className="links">
          <Link to ="github.com/tranthom618">Github ──── </Link>
          <Link to ="www.linkedin.com/in/thomas-tran-750488246/"> LinkedIn ──── </Link>
          <Link to ="tranthom618@gmail.com"> tranthom618@gmail.com </Link>
        </div>
      </div>
  )
}

export default Footer