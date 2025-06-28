import Socials from "../components/Socials";
import logo from "/src/assets/Nav-Home-Icon.png";

export default function Nav() {
  return (
    <div className="navigation">
      <div className="nav-home">
        <a href="https://www.malgusgames.com/" className="homepage-name">
          <img className="nav-home-icon" src={logo} alt="" />
          Malgus Games
        </a>
      </div>
      <div className="nav-links">
        <a href="" className="nav-link">
          Merch
        </a>
        <Socials />
      </div>
    </div>
  );
}
