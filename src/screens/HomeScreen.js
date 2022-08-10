import React from "react";
import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";
import Title from "../components/Titles/Titles";

function HomeScreen() {
  return (
    <div>
      <NavBar />
      <Banner />
      <div style={{  display: "flex",padding: "0 10rem"}}>
        <Title title="SERIES" />
        <Title title="MOVIES" />
      </div>
    </div>
  );
}

export default HomeScreen;
