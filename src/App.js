// Navigation
import Navbar from "./Components/Partials/Navbar/Navbar";

// Pages
import Home from "./Components/Pages/Home/Home";
import Galeri from "./Components/Pages/Galeri/Galeri";
import Events from "./Components/Pages/Events/Events";
import Karya from "./Components/Pages/Karya/Karya";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";

// Utility
import { Route, Routes } from "react-router-dom";
import './index.css'
import WebFont from 'webfontloader';
import { useEffect } from "react";


function App() {
  
  useEffect(()=>{
    WebFont.load({
      google:{
        families: ['Lato']
      }
    })
  })
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/events" element={<Events />} />
        <Route path="/karya" element={<Karya />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
