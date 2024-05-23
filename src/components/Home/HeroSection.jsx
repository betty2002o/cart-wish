import React from "react";
import "./HeroSection.css";

const HeroSection = ({ title, subtitle, link, image }) => {
  return (
    <div className="hero_section">
      <div className="align_center">
        <h2 className="hero_title">{title}</h2>
        <p className="hero_subtitle ">{subtitle}</p>
        <a className="hero_link" href={link}>
          Buy Now
        </a>
      </div>
      <div className="align_center">
        <img src={image} alt="" className="hero_image "></img>
      </div>
    </div>
  );
};

export default HeroSection;
