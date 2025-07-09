import heroImage from "/src/assets/Hero-Images-All.png";
import CallToAction from "./CallToAction";

export default function HeroSection() {
  return (
    <div className="section-container center-text">
      <div>
        <img className="hero-image" src={heroImage} alt="hero-image" />
      </div>
      <div className="layout">
        <div className="layout header-subtext">
          <h1>Homebrewed TTRPG Content</h1>
          <p className="subtext">From My Table To Yours</p>
        </div>
        <p className="hero-copy">
          Welcome to Malgus Games, a hobby that has slowly grown into an
          obsession. Most of my work has centered around making materials and
          assets for my home games, and now I want to share that with all of
          you! So stay awhile, grab an ale, and please, have a look around!
        </p>
        <div className="ctas">
          <CallToAction text="Browse Content" link="#magic-items" theme="red" />
          <CallToAction
            text="Buy Me A Coffee"
            link="https://ko-fi.com/malgusgames"
            theme="white"
            icon="yes"
          />
        </div>
      </div>
    </div>
  );
}
