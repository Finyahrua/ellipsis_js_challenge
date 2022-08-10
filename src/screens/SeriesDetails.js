import React, { useEffect } from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import TitleTile from "../components/TitleTile/TitleTile";
import axios from "axios";
import ErrorScreen from "./ErrorScreen";
import LoadingScreen from "./LoadingScreen";

function Moviedetails() {
  const [series, setSeries] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const url =
    "https://raw.githubusercontent.com/amawalla/js-coding-challenge/master/feed/sample.json";

  const getSeries = () => {
    try {
      axios.get(url).then((res) => {
        setSeries(
          // returning series whose release year is greater than or equal to 2010
          res.data.entries.filter(
            (movie) =>
              movie.programType === "series" && movie.releaseYear >= "2010"
          )
        );
      });
      setLoading(true);
    } catch (error) {
      <ErrorScreen />;
    }
  };
  useEffect(() => {
    getSeries();
  }, []);

  // slicing on the series in order to return only the first 21 series
  var seriesSliced = series.slice(0, 21);

  //   function to sort the series alphabetically
  function sortSeries(series) {
    return series.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
  //sorting the series and assigning them to the seriesSliced variable
  seriesSliced = sortSeries(seriesSliced);

  return (
    <>
      {loading ? (
        <div>
          <NavBar />
          <Banner title="Popular Series" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
              marginLeft: "10rem",
              marginRight: "6rem",
            }}
          >
            {/* displaying only the first 21 series whose year is greater than 2010*/}

            {seriesSliced.map((movie) => (
              <TitleTile
                title={movie.title}
                image={movie.images["Poster Art"].url}
              />
            ))}
          </div>
          <div style={{ position: "relative", bottom: 0, width: "100%" }}>
            <Footer />
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default Moviedetails;
