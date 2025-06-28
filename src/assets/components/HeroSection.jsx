export default function HeroSection() {
  return (
    <div className="section-container">
      <div>
        <img
          className="hero-image"
          src="./src\assets\Hero-Images-All.png"
          alt="hero-image"
        />
      </div>
      <div className="layout">
        <div className="layout header-subtext">
          <h1>
            {/* Homebrewed TTRPG Content */}
            Under Construction
          </h1>
          <p className="subtext">
            {/* From My Tabletop To Yours */}
            Under Construction
          </p>
        </div>
        <p className="hero-copy">
          {/* Welcome to Malgus Games, a hobby that has slowly grown into an
          obsession. Most of my work has centered around making materials and
          assets for my home games, and now I want to share that with all of
          you! So stay awhile, grab an ale, and please, have a look around! */}
          Our site is undergoing a much needed facelift. It may be many a
          fortnight before we're back up, but feel free to check us out on our
          socials in the meanwhile!
        </p>
      </div>
    </div>
  );
}
