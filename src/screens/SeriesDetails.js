import React, { useEffect } from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import TitleTile from "../components/TitleTile/TitleTile";
import axios from "axios";
import ErrorScreen from "./ErrorScreen";
import LoadingScreen from "./LoadingScreen";

function Moviedetails() {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const url =
    "https://raw.githubusercontent.com/amawalla/js-coding-challenge/master/feed/sample.json";

  const getMovies = () => {
    try {
      axios.get(url).then((res) => {
        setMovies(
          // returning movies whose release year is greater than or equal to 2010
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
    getMovies();
  }, []);

  // slicing on the movies in order to return only the first 21 movies
  var moviesSliced = movies.slice(0, 21);

  //   function to sort the movies alphabetically
  function sortMovies(movies) {
    return movies.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
  //sorting the movies and assigning them to the moviesSliced variable
  moviesSliced = sortMovies(moviesSliced);

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
            {/* displaying only the first 21 movies whose year is greater than 2010*/}

            {moviesSliced.map((movie) => (
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
