import React from "react";
import "./ProductsPage.css";
import LinkWithIcon from "./../NavBar/LinkWithIcon";

const ProductsPage = () => {
  return (
    <section className="products_page">
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
      <section>product card list</section>
    </section>
  );
};

export default ProductsPage;
