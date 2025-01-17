import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Slideshow from "./components/Slideshow";
import Products from "./components/Products";
import Categories from "./components/Categories";
import MobileAccessories from "./components/MobileAccessories";
import LoginPage from "./pages/LoginPage"; 
import RegisterPage from "./pages/RegisterPage"; 
const App = () => {
  return (
    <Router>
      <Navbar />
      <Slideshow />
      <Products />
      <Categories/>
      <MobileAccessories/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App;
