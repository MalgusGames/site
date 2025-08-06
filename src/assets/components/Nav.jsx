import Socials from "../components/Socials";
import logo from "/src/assets/Nav-Home-Icon.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navigation">
      <Link to="/">
        <div className="nav-home">
          <a href="https://www.malgusgames.com/" className="homepage-name">
            <img className="nav-home-icon" src={logo} alt="" />
            Malgus Games
          </a>
        </div>
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/allies">
          Allies
        </Link>
        {/* <a
          href="https://www.threadless.com/@MalgusGames"
          className="nav-link"
          target="_blank"
        >
          Merch
        </a> */}
        <Socials />
      </div>
    </div>
  );
}
