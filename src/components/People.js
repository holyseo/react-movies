// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function People({ id, profile_path, name, original, populairty, known_for }) {
  return (
    <div className=" w-80 shadow-gray-300 shadow-[1px_1px_5px_1px] flex flex-col bg-slate-400 max-w-96 hover:transform hover:scale-95 transition-transform duration-200">
      <Link to={`/people/${id}`}>
        <div className="m-1">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${profile_path}`}
            alt={name}
            className="px-2 pt-2"
          />
        </div>
        <div className=" min-h-80 m-3 leading-6 bg-white p-2  shadow-gray-900 shadow-[0px_0px_25px_1px] rounded-xl">
          <h1 className="font-bold text-lg">{name}</h1>

          <p className="mt-3">
            <span className=" font-bold">Date released:</span> {original}
          </p>
          <p className="mt-3">
            <span className=" font-bold">Rating:</span> {populairty}
          </p>

          {/* <p className="mt-3">
            <span className=" font-bold">Genres:</span>
            {known_for.map((known, index) => (
              <span key={index}> {known} |</span>
            ))}
          </p> */}
        </div>
      </Link>
    </div>
  );
}

export default People;
