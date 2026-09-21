import React from "react";

import Navbar from "./component/Navbar";

import About from "./pages/About";
import Contactme from "./pages/Contactme";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contactme />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
