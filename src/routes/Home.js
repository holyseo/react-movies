import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

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
      <header className={styles.header}>
        <div>
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
        </div>
        <div>Movies</div>
        <div>TV Shows</div>
        <div>People</div>
        <div>More</div>
      </header>
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
      <footer>
        <div>
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
        </div>
        <div>Movies</div>
        <div>TV Shows</div>
        <div>People</div>
        <div>More</div>
      </footer>
    </div>
  );
}
export default Home;
