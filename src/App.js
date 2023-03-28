// Import Components
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pages from "./components/Pages";

import Navigation from "./components/Navigation";

import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path = "/" element ={<AboutMe />} />
          <Route path = "/" element ={<Portfolio />} />
          <Route path = "/" element ={<Contact />} />
          <Route path = "/" element ={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
