import { useState, useEffect } from "react";
import Movie from "../components/Movie";

import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genreList, setGenreList] = useState([]);

  const APIKEY = process.env.REACT_APP_APIKEY;
  const movieUrl = "https://api.themoviedb.org/3/discover/movie";

  const getMovieData = async () => {
    const json = await (await fetch(`${movieUrl}?api_key=${APIKEY}`)).json();
    setMovies(json.results);
    setLoading(false);
    console.log(movies);
  };

  const getGenres = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}`
      )
    ).json();
    setGenreList(json);
    console.log(genreList);
  };

  useEffect(() => {
    getMovieData();
    getGenres();
    console.log(genreList);
  }, []);

  return (
    <div className="">
      <Header />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="bg-gray-800 p-10 ">
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                imgPath={movie.poster_path}
                title={movie.title}
                original={movie.original_title}
                overview={movie.overview}
                rating={movie.vote_average}
                vote={movie.vote_count}
                homepage={movie.homepage}
                release={movie.release_date}
                genres={movie.genre_ids.map((g) =>
                  genreList.genres.map((genre) =>
                    genre.id === g ? genre.name : null
                  )
                )}
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
