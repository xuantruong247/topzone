import React from "react";
import Home from "./../Pages/Home";
import Product from "./../Pages/Product";
import ProductDetail from "./../Pages/ProductDetail";
import Cart from "./../Pages/Cart";
import Login from "./../Pages/Login";
import Checkout from "./../Pages/Checkout";
import Signup from "./../Pages/Signup";
import { Navigate, Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
