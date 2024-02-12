// import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movie({
  id,
  title,
  original,
  overview,
  rating,
  vote,
  imgPath,
  release,
  genres,
}) {
  return (
    <div className=" shadow-gray-300 shadow-[1px_1px_5px_1px] flex flex-col bg-slate-400 max-w-96 hover:transform hover:scale-105 transition-transform duration-500">
      <Link to={`/movie/${id}`}>
        <div className="m-1">
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${imgPath}`}
            alt={title}
            className="w-full px-2 pt-2"
          />
        </div>
        <div className=" min-h-80 m-3 leading-6 bg-white p-2  shadow-gray-900 shadow-[0px_0px_25px_1px] rounded-xl">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="mt-3">
            <span className=" font-bold">Original Title:</span> {original}
          </p>
          <p className="font-mono text-sm tracking-tight mt-3">
            {overview.length > 80 ? `${overview.slice(0, 80)}...` : overview}
          </p>
          <p className="mt-3">
            <span className=" font-bold">Date released:</span> {release}
          </p>
          <p className="mt-3">
            <span className=" font-bold">Rating:</span> {rating}
          </p>
          <p className="mt-3">
            <span className=" font-bold">Vote Count:</span> {vote}
          </p>
          <p className="mt-3">
            <span className=" font-bold">Genres:</span>
            {genres.map((genre, index) => (
              <span key={index}> {genre} |</span>
            ))}
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
