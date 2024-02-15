// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Tv({
  id,
  title,
  original,
  overview,
  rating,
  vote,
  poster_path,
  release,
  genres,
}) {
  return (
    <div className=" w-80 flex flex-col bg-slate-200 rounded-md max-w-96 hover:transform hover:scale-95 transition-transform duration-200">
      <Link to={`/tv/${id}`}>
        <div className="m-1">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
            alt={title}
            className="rounded-md"
          />
        </div>
      </Link>
    </div>
  );
}

export default Tv;
