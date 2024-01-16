// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, title, overview, rating, imgPath, release }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.container}>
        <div className={styles.poster}>
          <img
            className={styles.poster}
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${imgPath}`}
            alt={title}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>

          <p>
            {overview.length > 80 ? `${overview.slice(0, 80)}...` : overview}
          </p>
          <p>Date released: {release}</p>
          <p>Rating: {rating}</p>

          {/* <p>setGenres: {genres}</p> */}
        </div>
      </div>
    </Link>
  );
}
// Movie.propTypes = {
//
// title: PropTypes.string.isRequired,
//   overview: PropTypes.string.isRequired,
//   imgPath: PropTypes.string.isRequired,
// };

export default Movie;
