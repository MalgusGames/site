import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import ReferenceCard from "../components/ReferenceCard";
import Allies from "../components/Allies.json";

export function PageAllies() {
  //   const [count, setCount] = useState(0);

  const pageContent = {
    page: "allies",
    alt: "allies",
    heroImage: "/src/assets/Hero-Images-Alliesl.png",
    title: "Follow TTRPG Content Creators",
    subtext: "The Friends We Made Along The Way",
    copy: "Throughout any adventure, you’ll run into many different characters. Some of them will be friendly, others will become your sworn enemies. But every so often, you’ll find another adventurer whose values and mission put them on the same path as you. They don’t always join your party, but in moments of need, you can count on them as your allies.",
  };
  return (
    <div className="content-container">
      <Nav />
      <HeroSection page={pageContent} />
      <div className="section-container" id="magic-items">
        <div className="layout-mini">
          <h2>Bannermen</h2>
          <p>
            On my game design journey, I’ve met many creators who not only
            create amazing content but also stand for the same values as I do:
            diversity, inclusiveness, social equity, and human rights. If this
            seems like the adventure you’d embark on, and you’re looking for
            homebrew content or tools for your tabletop game, go check them out!
          </p>
        </div>
        <div className="card-container">
          <ReferenceCard ally={Allies[0]} />
          <ReferenceCard ally={Allies[1]} />
        </div>
      </div>
    </div>
  );
}
