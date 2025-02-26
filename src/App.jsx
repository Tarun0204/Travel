import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Destinations from "./components/Destinations";
import DestDetails from "./components/DestDetails";
import MaasaiMara from "./components/MaasaiMara";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/:city" element={<DestDetails />} />
        <Route path="/maasai-mara" element={<MaasaiMara />} />
      </Routes>
    </Router>
  );
};

export default App;
