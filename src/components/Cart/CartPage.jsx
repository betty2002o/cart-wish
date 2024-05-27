import "./CartPage.css";
import React from "react";

const CartPage = () => {
  return (
    <section className="cart_page align_center">
      <div className="user_info align_center">
        <p className="user_name">name</p>
        <p>abc@gmail.com</p>
      </div>

      <table className="common_table">
        <thead>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </thead>
        <tbody>
          <tr>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123dasdsa</td>
            <td>123</td>
          </tr>
          <tr>
            <td>123</td>
            <td>123</td>
            <td>123</td>
            <td>123dasdsa</td>
            <td>123</td>
          </tr>
        </tbody>
      </table>

      <table className="cart_bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>$13123</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>$5</td>
          </tr>
          <tr className="cart_bill_final">
            <td>Total</td>
            <td>$dsakjaisdj</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CartPage;
