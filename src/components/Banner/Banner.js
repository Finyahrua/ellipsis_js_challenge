import React from "react";
import "./Banner.css";

function Banner({title}) {
  return (
    <div className="banner">
      <h3>{title}</h3>
    </div>
  );
}

export default Banner;
