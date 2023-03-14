import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectGallery from "./pages/ProjectGallery";
import Contacts from "./pages/Contacts";
import PortfolioWrapper from "./components/PortfolioWrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <PortfolioWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/project-gallery" element={<ProjectGallery />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </PortfolioWrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
