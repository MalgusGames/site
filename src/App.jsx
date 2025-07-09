import { useState } from "react";
import "./App.css";
import HeroSection from "./assets/components/HeroSection";
import Nav from "./assets/components/Nav";
import ContentSection from "./assets/components/ContentSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="content-container">
      <Nav />
      <HeroSection />
      <ContentSection />
    </div>
  );
}

export default App;
