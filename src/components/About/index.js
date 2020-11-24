import React from "react";
import "./style.css";
import imageDark from "./images/image-about-dark.jpg";
import imageLigth from "./images/image-about-light.jpg";

function About() {
  return (
    <div className="main" id="about">
      {<img src={imageDark} alt="" className="imageDark" />}
      <div className="about">
        <p className="about__title">About our furniture</p>
        <p className="about__text">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space
        </p>
      </div>
      <img src={imageLigth} alt="" className="imageLight" />
    </div>
  );
}

export default About;
