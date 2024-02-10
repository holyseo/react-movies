import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gray-800 p-16 flex flex-row justify-between">
      <div className="w-80">
        <Link to="/">
          <img
            alt="poster"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          />
        </Link>
      </div>
      <div className="flex flex-row w-1/3 flex-wrap justify-between items-center text-white text-2xl">
        <div>Movies</div>
        <div>TV Shows</div>
        <div>People</div>
        <div>More</div>
      </div>
    </div>
  );
}

export default Header;
