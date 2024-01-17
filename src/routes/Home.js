import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovieData = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=45dab8ebaef45e3e385533111422f6e2&primary_release_year=2023`
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovieData();

    // fetch(
    //   `https://api.themoviedb.org/3/movie/now_playing?api_key=45dab8ebaef45e3e385533111422f6e2&language=en-US&page=1`
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setMovies(json.results);
    //     setLoading(false);
    //   });
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.container}>
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                imgPath={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                rating={movie.vote_average}
                homepage={movie.homepage}
                release={movie.release_date}
                genres={movie.genre_ids.map((g) => (
                  <li>{g}</li>
                ))}
              />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
export default Home;
