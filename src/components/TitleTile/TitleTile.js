import React from "react";
import "./TitleTile.css";

function TitleTile({ title, image }) {
  return (
    <div className="title-tile">
      <img src={image} alt="" className="tile-image" />
      <p>{title}</p>
    </div>
  );
}

export default TitleTile;
