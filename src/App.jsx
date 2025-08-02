import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { PageHome } from "./assets/pages/PageHome";
import { PageAllies } from "./assets/pages/PageAllies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/allies" element={<PageAllies />} />
      </Routes>
    </Router>
  );
}

export default App;
