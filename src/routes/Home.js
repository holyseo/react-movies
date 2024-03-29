import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import Tv from "../components/Tv";

import Footer from "../components/Footer";
import Header from "../components/Header";

import Slider from "react-slick";
import People from "../components/People";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [people, setPeople] = useState([]);

  const APIKEY = process.env.REACT_APP_APIKEY;
  const movieUrl = "https://api.themoviedb.org/3/discover/movie";
  const tvUrl = "https://api.themoviedb.org/3/discover/tv";

  const getMovieData = async () => {
    const json = await (await fetch(`${movieUrl}?api_key=${APIKEY}`)).json();
    setMovies(json.results);
    setLoading(false);
  };

  const getTvData = async () => {
    const json = await (await fetch(`${tvUrl}?api_key=${APIKEY}`)).json();
    setTvs(json.results);
    setLoading(false);
  };

  const getGenres = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}`
      )
    ).json();
    setGenreList(json);
    setLoading(false);
  };

  const getPeople = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${APIKEY}`
      )
    ).json();
    setPeople(json.results);
    setLoading(false);
    console.log(people);
  };

  useEffect(() => {
    getMovieData();
    getGenres();
    getTvData();
    getPeople();
    console.log(people);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplayspeed: 3000,
    pauseonhover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings_people = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Header />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="bg-gray-800 p-10 ">
          <div className="m-10 text-4xl font-semibold text-white ">
            Popular Movies
          </div>
          {/* <div className="flex flex-row flex-wrap justify-center"> */}
          <div className="slider-container px-5">
            <Slider {...settings}>
              {movies.map((movie) => (
                <div className=" px-5">
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
                </div>
              ))}
            </Slider>
          </div>
          <div className=" border-sky-300 bg-gray-800 border-t-2 rounded-lg my-20"></div>
          <div className="m-10 text-4xl font-semibold text-white ">
            Popular TV Shows
          </div>
          <div className="slider-container px-5">
            <Slider {...settings}>
              {tvs.map((tv) => (
                <div className=" px-5">
                  <Tv
                    key={tv.id}
                    id={tv.id}
                    poster_path={tv.poster_path}
                    title={tv.name}
                    original={tv.original_title}
                    overview={tv.overview}
                    rating={tv.vote_average}
                    vote={tv.vote_count}
                    homepage={tv.homepage}
                    release={tv.release_date}
                    genres={tv.genre_ids.map((g) =>
                      genreList.genres.map((genre) =>
                        genre.id === g ? genre.name : null
                      )
                    )}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className=" border-sky-300 bg-gray-800 border-t-2 rounded-lg my-20"></div>
          <div className="m-10 text-4xl font-semibold text-white ">
            Popular people
          </div>
          <div className="slider-container px-20">
            <Slider {...settings_people}>
              {people.map((person) => (
                <div className="hover:transform hover:scale-95 transition-transform duration-300 px-5">
                  <People
                    key={person.id}
                    id={person.id}
                    profile_path={person.profile_path}
                    name={person.name}
                    original={person.original_name}
                    popularity={person.popularity}
                    known_for={person.known_for}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
export default Home;
