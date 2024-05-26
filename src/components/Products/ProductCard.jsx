import React from "react";
import "./ProductCard.css";
import star from "../../assets/white-star.png";
import basket from "../../assets/basket.png";
import { NavLink } from "react-router-dom";

const ProductCard = ({ id }) => {
  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink to={`/products/${id}`}>
          <img
            src="https://cartwish-backend-29v7.onrender.com/products/iphone14pro-1.jpg"
            alt="product image"
          />
        </NavLink>
      </div>
      <div className="product_detail">
        <div className="product_price">$1299</div>
        <div className="product_title">iPhone 14 Pro</div>
        <footer className="product_info_footer align_center">
          <div className="align_center">
            <p className="product_rating align_center">
              <img src={star}></img> 5
            </p>
            <p className="product_review_count"> 50</p>
          </div>
          <button className="add_to_cart">
            <img src={basket} alt="" />
          </button>
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
