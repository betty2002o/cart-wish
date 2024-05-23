import React from "react";
import "../NavBar/NavBar.css";
import LinkWithIcon from "./LinkWithIcon";
import rocket from "../../assets/rocket.png";
import star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import memo from "../../assets/memo.png";
import order from "../../assets/package.png";
import lock from "../../assets/locked.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">CartWish</h1>
        <form className=" align_center navbar_form">
          <input
            type="text"
            placeholder="Search Products"
            className="navbar_search"
          ></input>
          <button type="submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <LinkWithIcon link="/" emoji={rocket} title="Home" />
        <LinkWithIcon link="/products" emoji={star} title="Products" />
        <LinkWithIcon
          link="/login"
          emoji={idButton}
          title="LogIn"
        ></LinkWithIcon>
        <LinkWithIcon link="/signup" emoji={memo} title="SignUp" />
        {/* <LinkWithIcon link="/myorders" emoji={order} title="My Orders" /> */}
        {/* <LinkWithIcon link="/logout" emoji={lock} title="LogOut" /> */}
        {/* <NavLink to="/cart" className="align_center">
          Cart
          <p className="align_center cart_counts">0</p>
        </NavLink> */}
      </div>
    </div>
  );
};

export default NavBar;
