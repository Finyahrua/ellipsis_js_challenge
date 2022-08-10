import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

function ErrorScreen() {
  return (
    <div>
      <NavBar />
      <Banner title="Popular Titles" />
      <div style={{ display: "flex", padding: "0 10rem", marginTop: "20px" }}>
        <p>Loading...</p>
      </div>
      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default ErrorScreen;
