import React from "react";
import "./QuantityInput.css";

const QuantityInput = ({ stock }) => {
  return (
    <>
      <button className="quantity_input_button"> - </button>
      <p className="quantity_input_count">{stock}</p>
      <button className="quantity_input_button"> +</button>
    </>
  );
};

export default QuantityInput;
