import { useState } from "react";
import "./App.css";
import HeroSection from "./assets/components/HeroSection";
import Nav from "./assets/components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="content-container">
      <Nav />
      <HeroSection />
    </div>
  );
}

export default App;
