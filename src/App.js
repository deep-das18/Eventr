import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MerchantPage from "./pages/MerchantPage";
import MerchantRegister from "./pages/MerchantRegister";
import MerchantLogin from "./pages/MerchantLogin";
import CategoryGallery from "./pages/CategoryGallery";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/merchant-page" element={<MerchantPage />} />
        <Route path="/merchant-register" element={<MerchantRegister />} />
        <Route path="/merchant-login" element={<MerchantLogin />} />
        <Route path="/:url" element={<CategoryGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}
