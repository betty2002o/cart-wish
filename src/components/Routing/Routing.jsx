import React from "react";
import { Route, Routes } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import Home from "../Home/Home";
import ProductsPage from "../Products/ProductsPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myorders" element={<MyOrders />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};

export default Routing;
