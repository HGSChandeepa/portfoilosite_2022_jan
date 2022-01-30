import Aboutme from "./aboutme/Aboutme";
import Resume from "./myresume/Resume";
import Contact from "./contact/Contact";
import Portfolio from "./myportfolio/Portfolio";

import "./App.css";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutme" element={<Aboutme />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
