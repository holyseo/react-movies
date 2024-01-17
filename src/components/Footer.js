import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div>
        <Link to="/">
          <img
            alt="logo"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          />
        </Link>
      </div>
      <div>Movies</div>
      <div>TV Shows</div>
      <div>People</div>
      <div>More</div>
    </footer>
  );
}

export default Footer;
