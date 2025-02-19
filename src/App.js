import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {Skills} from "./components/Skills";

// pages*************
import About from "./components/About"; 
import  Products  from "./components/products";
import Classic from "./components/Classic";

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
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Classic" element={<Classic />} />
  
      </Routes>
    </div>
  );
}

export default App;
