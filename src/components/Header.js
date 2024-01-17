import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img
            alt="poster"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          />
        </Link>
      </div>
      <div>Movies</div>
      <div>TV Shows</div>
      <div>People</div>
      <div>More</div>
    </header>
  );
}

export default Header;
