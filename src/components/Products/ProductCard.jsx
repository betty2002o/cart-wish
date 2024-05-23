import React from "react";
import "./ProductCard.css";
import star from "../../assets/white-star.png";

const ProductCard = () => {
  return (
    <article className="product_card">
      <div className="product_image">
        <a href="">
          <img
            src="https://cartwish-backend-29v7.onrender.com/products/iphone14pro-1.jpg"
            alt="product image"
          />
        </a>
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
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
