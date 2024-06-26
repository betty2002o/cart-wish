import React from "react";
import { Route, Routes } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import Home from "../Home/Home";
import ProductsPage from "../Products/ProductsPage";
import SingleProductPage from "../SingleProductPage/SingleProductPage";
import CartPage from "../Cart/CartPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myorders" element={<MyOrders />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default Routing;
