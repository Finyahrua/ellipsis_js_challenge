import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Title from "../components/Titles/Titles";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      <NavBar />
      <Banner title="Popular Titles" />
      <div style={{ display: "flex", padding: "0 10rem" }}>
        <Link to="/error" style={{ textDecoration: "none", color: "black" }}>
          <Title title="SERIES" subtitle="Popular Series" />
        </Link>
        <Link
          to="/movie-details"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Title title="MOVIES" subtitle="Popular Movies" />
        </Link>
      </div>
      <div style={{ position: "fixed",bottom: 0,width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default HomeScreen;
