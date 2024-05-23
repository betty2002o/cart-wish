import React from "react";
import "./FeaturedProducts.css";
import ProductCard from "../Products/ProductCard";

const FeaturedProducts = () => {
  return (
    <div className="featured_products">
      <h2>Featured Products</h2>
      <div className="featured_products_list align_center">
        {/* // map */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;
