import "./CartPage.css";
import React from "react";
import remove from "../../assets/remove.png";
import Table from "./../Common/Table";
import QuantityInput from "./../SingleProductPage/QuantityInput";

const CartPage = () => {
  return (
    <section className="cart_page align_center">
      <div className="user_info align_center">
        <p className="user_name">name</p>
        <p>abc@gmail.com</p>
      </div>
      <Table heading={["Item", "Price", "Quantity", "Total", "Remove"]}>
        <tbody>
          <tr>
            <td>123</td>
            <td>123</td>
            <td className="align_center table_quantity_input">
              <QuantityInput quantity={1} />
            </td>
            <td>123dasdsa</td>
            <td>
              <img
                src={remove}
                alt="remove icon"
                className="cart_remove_icon"
                // onClick={() => removeFromCart(product._id)}
              />
            </td>
          </tr>
          <tr>
            <td>Samsung Galaxy A54</td>
            <td>123</td>
            <td className="align_center table_quantity_input">
              <QuantityInput quantity={1} />
            </td>
            <td>123dasdsa</td>
            <td>
              <img
                src={remove}
                alt="remove icon"
                className="cart_remove_icon"
                // onClick={() => removeFromCart(product._id)}
              />
            </td>
          </tr>
        </tbody>
      </Table>
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
