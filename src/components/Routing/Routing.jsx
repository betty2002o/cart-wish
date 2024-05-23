import React from "react";
import { Route, Routes } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import Home from "../Home/Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myorders" element={<MyOrders />} />
    </Routes>
  );
};

export default Routing;
