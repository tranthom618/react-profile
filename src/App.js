// Import Modules and CSS
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

// Import Pages
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path = "/" element ={<AboutMe />} />
          <Route path = "/portfolio" element ={<Portfolio />} />
          <Route path = "/contact" element ={<Contact />} />
          <Route path = "/resume" element ={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
