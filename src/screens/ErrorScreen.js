import React from 'react'
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";


function ErrorScreen() {
  return (
    <div>
      <NavBar />
      <Banner title="Popular Titles" />
      <div style={{ display: "flex", padding: "0 10rem",marginTop:"20px" }}>
        <p>Oops, Something went wrong...</p>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorScreen