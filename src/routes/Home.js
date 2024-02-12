import { useState, useEffect } from "react";
import Movie from "../components/Movie";

import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const APIKEY = process.env.REACT_APP_APIKEY;

  const getMovieData = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&primary_release_year=2024`
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
    console.log(movies);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div className="">
      <Header />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="bg-gray-800 p-10">
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                imgPath={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                rating={movie.vote_average}
                homepage={movie.homepage}
                release={movie.release_date}
                genres={movie.genre_ids.map((g) => (
                  <li>{g}</li>
                ))}
              />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
export default Home;
