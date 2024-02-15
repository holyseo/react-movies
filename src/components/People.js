// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function People({ id, profile_path, name, original, populairty, known_for }) {
  return (
    <div className=" border-gray-300 shadow-lg shadow-white border-2  flex flex-row mx-3 ">
      <Link to={`/people/${id}`}>
        <div className=" flex flex-col justify-between w-full">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${profile_path}`}
            alt={name}
            className=""
          />
          <div className="min-h-24 p-2 text-white bg-slate-900 leading-6rounded-xl">
            <h1 className=" font-bold">{name}</h1>
            <p className="mt-3 text-sm">
              {known_for.map((known, index) =>
                known.title ? (
                  <span key={index} className="list-inside">
                    {known.title} <span> | </span>
                  </span>
                ) : (
                  <span className="list-none"></span>
                )
              )}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default People;
