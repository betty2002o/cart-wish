import React from "react";
import { NavLink } from "react-router-dom";
import "./LinkWithIcon.css";

const LinkWithIcon = ({ link, emoji, title }) => {
  return (
    <NavLink to={link} className="align_center">
      {title}
      <img src={emoji} alt="" className="link_emoji"></img>
    </NavLink>
  );
};

export default LinkWithIcon;
