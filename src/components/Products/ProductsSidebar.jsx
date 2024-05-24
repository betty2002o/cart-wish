import React from "react";
import "./ProductsSidebar.css";
import LinkWithIcon from "./../NavBar/LinkWithIcon";

const ProductsSidebar = () => {
  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        <LinkWithIcon
          link="/products?category"
          emoji=""
          title="Gaming Consoles"
          className="align_center"
          sidebar={true}
        />
        <LinkWithIcon
          link="/products?category"
          emoji=""
          title="Headphones"
          className="align_center"
          sidebar={true}
        />
        <LinkWithIcon
          link="/products?category"
          emoji=""
          title="Laptops"
          className="align_center"
          sidebar={true}
        />
        <LinkWithIcon
          link="/products?category"
          emoji=""
          title="SmartPhones"
          className="align_center"
          sidebar={true}
        />
        <LinkWithIcon
          link="/products?category"
          emoji=""
          title="SmartWatches"
          className="align_center"
          sidebar={true}
        />
      </div>
    </aside>
  );
};

export default ProductsSidebar;
