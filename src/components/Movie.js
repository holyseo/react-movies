// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, overview, rating, imgPath, release }) {
  return (
    <div className=" flex flex-col bg-slate-400 max-w-96 hover:transform hover:scale-105 transition-transform duration-500">
      <Link to={`/movie/${id}`}>
        <div className="m-1 self-center">
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${imgPath}`}
            alt={title}
            className="w-full"
          />
        </div>
        <div className="m-4 leading-6">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="font-mono text-sm tracking-tight mt-3">
            {overview.length > 90 ? `${overview.slice(0, 90)}...` : overview}
          </p>
          <p className="mt-3">
            <span className=" font-bold">Date released:</span> {release}
          </p>
          <p className="mt-3">
            <span className=" font-bold">Rating:</span> {rating}
          </p>

          {/* <p>setGenres: {genres}</p> */}
        </div>
      </Link>
    </div>
  );
}
// Movie.propTypes = {
//
// title: PropTypes.string.isRequired,
//   overview: PropTypes.string.isRequired,
//   imgPath: PropTypes.string.isRequired,
// };

export default Movie;
