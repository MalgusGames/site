import { useState } from "react";
import HeroSection from "../components/HeroSection.jsx";
import Nav from "../components/Nav.jsx";
import ContentSection from "../components/ContentSection";
import MagicItems from "../components/MagicItems.json";

export function PageHome() {
  const [count, setCount] = useState(0);

  const pageContent = {
    page: "home",
    alt: "malgus games",
    heroImage: "Hero-Images-All.png",
    title: "Homebrewed TTRPG Content",
    subtext: "From My Table To Yours",
    copy: "Welcome to Malgus Games, a hobby that has slowly grown into an obsession. Most of my work has centered around making materials and assets for my home games, and now I want to share that with all of you! So stay awhile, grab an ale, and please, have a look around!",
  };
  return (
    <div className="content-container">
      <Nav />
      <HeroSection page={pageContent} />
      <ContentSection cards={MagicItems} />
    </div>
  );
}
