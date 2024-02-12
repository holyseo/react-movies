import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const APIKEY = process.env.REACT_APP_APIKEY;

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}}?api_key=${APIKEY}&append_to_response=videos`
      )
    ).json();
    setMovie(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="bg-gray-800">
      <Header />

      <div className="mb-10 bg-gray-600 p-5 text-white flex flex-row justify-between mx-auto w-3/5 shadow-gray-500 shadow-[6px_6px_8px_0.1px]">
        <div className="mx-auto flex flex-col gap-5 ">
          <div className="my-3 uppercase font-semibold tracking-wide">
            <Link to={`/`}>
              <p>🎬 Go back to MAIN</p>
            </Link>
          </div>
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
            alt="movie.title"
            className="w-96  "
          />
        </div>
        <div className="w-3/5 mt-14 font-mono leading-9 text-lg ">
          <h2 className="text-4xl font-extrabold mt-5">{movie.title}</h2>
          <p className="font-bold mt-5">
            Genre:
            {movie.genres ? (
              movie.genres.map((genre, index) => (
                <span key={index}> {genre.name} | </span>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </p>
          <p className="font-bold mt-5"> Runtime:</p>
          <span> {movie.runtime} minutes</span>
          <h2 className="font-bold mt-5">Original title:</h2>
          <p>{movie.original_title}</p>
          <h2 className="font-bold mt-5">Overview:</h2>
          <p>{movie.overview}</p>
          <p className="font-bold mt-5"> Rating: </p>
          <span>{movie.vote_average}</span>
          <p className="font-bold mt-5">Release Date: </p>
          <span>{movie.release_date}</span>
          <h2 className="font-bold mt-5">Website</h2>
          <p>
            <a href={movie.homepage} target="_blank" rel="noreferrer">
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
