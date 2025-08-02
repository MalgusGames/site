import { useState } from "react";
import HeroSection from "../components/HeroSection.jsx";
import Nav from "../components/Nav.jsx";
import ContentSection from "../components/ContentSection";

export function PageHome() {
  const [count, setCount] = useState(0);

  return (
    <div className="content-container">
      <Nav />
      <HeroSection />
      <ContentSection />
    </div>
  );
}
