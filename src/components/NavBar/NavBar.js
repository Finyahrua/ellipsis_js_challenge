import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <div>
        <h1 className="logo">DEMO Streaming</h1>
      </div>
      <div className="auth-section">
        <p className="log-in">Log in</p>
        <p className="trial">Start your free trial</p>
      </div>
    </div>
  );
}

export default NavBar;
