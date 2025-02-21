import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {Skills} from "./components/Skills";

// pages*************
import About from "./pages/About"; 
import Jacquard from "./pages/Jaccquard.jsx";
import Classic from "./pages/Classic";
import TissuPlat from "./pages/TissuPlat";
import JacquardDiamond from "./pages/JacquardDiamond.jsx";
import Chevron from "./pages/Chevron.jsx";
import GrainDecafe from "./pages/Stripe.jsx";
import Echarpe from "./pages/Echarpe.jsx";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<>
          <Banner />
          <Skills/>
          <Projects />
          <Contact />
          <Footer />
        </>} />
        <Route path="/About" element={<About />} />
        <Route path="/Jacquard" element={<Jacquard />} />
        <Route path="/Classic" element={<Classic />} />
        <Route path="/tissuplat" element={<TissuPlat />} />
        <Route path="/JacquardDiamond" element={<JacquardDiamond />} />
        <Route path="/Chevron" element={<Chevron />} />
        <Route path="/grainDecafe" element={<GrainDecafe/>} />
        <Route path="/Echarpe" element={<Echarpe/>}/>
      </Routes>
    </div>
  );
}

export default App;
