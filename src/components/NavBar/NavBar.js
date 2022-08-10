import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="logo">DEMO Streaming</h1>
        </Link>
      </div>
      <div className="auth-section">
        <p className="log-in">Log in</p>
        <p className="trial">Start your free trial</p>
      </div>
    </div>
  );
}

export default NavBar;
