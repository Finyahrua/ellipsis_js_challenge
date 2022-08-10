import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Title from "../components/Titles/Titles";

function HomeScreen() {
  return (
    <div>
      <NavBar />
      <Banner />
      <div style={{ display: "flex", padding: "0 10rem" }}>
        <Title title="SERIES" subtitle="Popular Series" />
        <Title title="MOVIES" subtitle="Popular Movies" />
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
