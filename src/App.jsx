import { useState } from "react";
import malguslogo from "./assets/Malgus Logo.png";
import viteLogo from "/vite.svg";
import "./App.css";
import Socials from "./assets/components/Socials";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img className="logo" src={malguslogo} alt="" />
      </div>
      <h1>Under Construction</h1>
      <p className="read-the-docs">
        Our site is undergoing a much needed facelift. It may be many a
        fortnight before we're back up, but feel free to check us out on our
        socials in the meanwhile!
      </p>
      <Socials />
    </>
  );
}

export default App;
