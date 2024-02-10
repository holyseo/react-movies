import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" border-sky-300 bg-gray-800 border-t-2 ">
      <div className=" p-8 flex flex-col gap-8 items-center">
        <div className="w-56">
          <Link to="/">
            <img
              alt="poster"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            />
          </Link>
        </div>
        <div className="flex flex-row w-1/5 flex-wrap justify-between items-center text-white text-lg">
          <div>Movies</div>
          <div>TV Shows</div>
          <div>People</div>
          <div>More</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
