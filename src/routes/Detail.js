import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}}?api_key=45dab8ebaef45e3e385533111422f6e2&append_to_response=videos`
      )
    ).json();
    setMovie(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <header>
        <div>
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
        </div>
        <div>Movies</div>
        <div>TV Shows</div>
        <div>People</div>
        <div>More</div>
      </header>
      <div className={styles.menu}>
        <div className={styles.header}>
          <Link to={`/`}>🎬 Go back to MAIN page</Link>
        </div>
        <div
          className={styles.container}
          style={{
            backgroundImage: `url("https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}")`,
          }}
        >
          <div className={styles.poster}>
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
              alt="movie.title"
            />
          </div>
          <div className={styles.main}>
            <h2 className={styles.title}>{movie.title}</h2>
            <p>
              {movie.genres ? (
                movie.genres.map((genre) => <span>{genre.name} | </span>)
              ) : (
                <p>Loading...</p>
              )}
            </p>
            <p className={styles.runtime}> Runtime: {movie.runtime} minutes</p>
            <h2>Overview</h2>
            <p className={styles.overview}>{movie.overview}</p>
            <p className={styles.rating}> Rating: {movie.vote_average}</p>
            <p className={styles.release}>
              {" "}
              Release Date: {movie.release_date}
            </p>
            <h2>Website</h2>
            <p className={styles.homepage}>
              <a href={movie.homepage} target="_blank">
                {movie.homepage}
              </a>
            </p>
          </div>
        </div>
      </div>
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
export default Detail;
