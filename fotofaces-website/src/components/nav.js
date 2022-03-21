import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Nav(){

  const navStyle={
    textDecoration: 'none'
  }

  return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" style={navStyle} id="nav_item">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/documentation" style={navStyle} id="nav_item">
                <a className="nav-link">Documentation</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/team" style={navStyle} id="nav_item">
                <a className="nav-link">Team</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Nav;
