import React from "react";
import "../NavBar/NavBar.css";
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
        <NavLink to="/" className="align_center">
          Home
          <img src="/src/assets/rocket.png" alt="" class="link_emoji"></img>
        </NavLink>
        <NavLink to="/products" className="align_center">
          Products
          <img
            src="/src/assets/glowing-star.png"
            alt=""
            class="link_emoji"
          ></img>
        </NavLink>
        <NavLink to="/login" className="align_center">
          LogIn
          <img
            src="/src/assets/id-button.png"
            alt=""
            className="link_emoji"
          ></img>
        </NavLink>
        <NavLink to="signup" className="align_center">
          SignUp
          <img src="/src/assets/memo.png" alt="" className="link_emoji"></img>
        </NavLink>
        <NavLink to="/myorders" className="align_center">
          My Orders
          <img
            src="/src/assets/package.png"
            alt=""
            className="link_emoji"
          ></img>
        </NavLink>
        <NavLink to="/logout" className="align_center">
          LogOut
          <img src="/src/assets/locked.png" alt="" className="link_emoji"></img>
        </NavLink>
        <NavLink to="/cart" className="align_center">
          Cart
          <p class="align_center cart_counts">0</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
