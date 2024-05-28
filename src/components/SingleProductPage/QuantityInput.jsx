import React from "react";
import "./QuantityInput.css";

const QuantityInput = ({ quantity }) => {
  return (
    <>
      <button className="quantity_input_button" disabled={quantity <= 1}>
        -
      </button>
      <p className="quantity_input_count">{quantity}</p>
      <button className="quantity_input_button"> +</button>
    </>
  );
};

export default QuantityInput;
