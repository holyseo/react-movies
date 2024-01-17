import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    <div className={styles.layout}>
      <Header />
      <div className={styles.menu}>
        <div className={styles.header}>
          <Link to={`/`}>
            <p>🎬 Go back to MAIN</p>
          </Link>
        </div>
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
          <p className={styles.release}>Release Date: {movie.release_date}</p>
          <h2>Website</h2>
          <p className={styles.homepage}>
            <a href={movie.homepage} target="_blank">
              {movie.homepage ? movie.homepage : "Not avaiable at this time"}
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Detail;
