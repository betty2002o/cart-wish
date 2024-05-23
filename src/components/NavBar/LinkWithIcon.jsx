import React from "react";
import { NavLink } from "react-router-dom";
import "./LinkWithIcon.css";

const LinkWithIcon = ({ link, emoji, title, sidebar }) => {
  return (
    <NavLink
      to={link}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title}
      <img src={emoji} alt="" className="link_emoji"></img>
    </NavLink>
  );
};

export default LinkWithIcon;
