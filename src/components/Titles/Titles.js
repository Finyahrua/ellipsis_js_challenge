import React from "react";
import "./Titles.css";

function Title({ title, subtitle }) {
  return (
    <div>
      <div className="container">
        <img
          src="https://github.com/amawalla/js-coding-challenge/blob/master/assets/placeholder.png?raw=true"
          alt="img"
        />
        <h1 className="titles">{title}</h1>
      </div>
      <p className="sub-title">{subtitle}</p>
    </div>
  );
}

export default Title;
