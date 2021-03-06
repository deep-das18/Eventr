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
import Checkout from "./components/Checkout";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
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
        <Route path="/category/:url" element={<CategoryGallery />} />
        <Route path="/place-order" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/product-page" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
