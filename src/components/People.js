// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function People({ id, profile_path, name, original, populairty, known_for }) {
  return (
    <div className=" flex flex-row ">
      <Link to={`/people/${id}`}>
        <div className=" flex flex-row justify-between w-full gap-3">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${profile_path}`}
            alt={name}
            className="rounded-xl h-60 hover:transform hover:scale-105 transition-transform duration-300"
          />
          <div className=" text-white leading-6rounded-xl">
            <h1 className=" font-bold">{name}</h1>

            <p className="mt-3 text-sm">
              <ul className=" font-bold"></ul>
              {known_for.map((known, index) =>
                known.title ? (
                  <li key={index} className="list-inside">
                    {known.title}
                  </li>
                ) : (
                  <li className="list-none"></li>
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
