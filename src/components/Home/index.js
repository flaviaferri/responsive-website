import React, { useState } from "react";
import "./style.css";
import imageHome1 from "./desktop-image-hero-1.jpg";
import imageHome2 from "./desktop-image-hero-2.jpg";
import imageHome3 from "./desktop-image-hero-3.jpg";
import imageMobile1 from "./mobile-image-hero-1.jpg";
import imageMobile2 from "./mobile-image-hero-2.jpg";
import imageMobile3 from "./mobile-image-hero-3.jpg";
import imageArrowShop from "./icon-arrow.svg";
import imageAngleLeft from "./icon-angle-left.svg";
import imageAngleRight from "./icon-angle-right.svg";

const bannersInfo = [
  {
    title: "Discover innovative ways to decorate",
    text: `We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.`,
    image: imageHome1,
    imageMobile: imageMobile1,
  },
  {
    title: "We are available all across the globe",
    text: `With stores all over the world, it's easy for you to find furniture
          for your home or place of business. Locally, we’re in most major
          cities throughout the country. Find the branch nearest you using our
          store locator. Any questions? Don't hesitate to contact us today.`,
    image: imageHome2,
    imageMobile: imageMobile2,
  },
  {
    title: "Manufactured with the best materials",
    text: `Our modern furniture store provide a high level of quality. Our
          company has invested in advanced technology to ensure that every
          product is made as perfect and as consistent as possible. With three
          decades of experience in this industry, we understand what customers
          want for their home and office.`,
    image: imageHome3,
    imageMobile: imageMobile3,
  },
];
function Home() {
  const [bannerPosition, setBannerPosition] = useState(0);
  const handleClick = (arrowPosition) => {
    if (arrowPosition === "left") {
      const value =
        bannerPosition - 1 < 0 ? bannersInfo.length - 1 : bannerPosition - 1;
      setBannerPosition(value);
    }
    if (arrowPosition === "rigth") {
      const value =
        bannerPosition + 1 > bannersInfo.length - 1 ? 0 : bannerPosition + 1;
      setBannerPosition(value);
    }
  };

  return (
    <div className="banner">
      <picture>
        <source
          media="(min-width:650px)"
          srcset={bannersInfo[bannerPosition].image}
        ></source>
        <source
          media="(min-width:465px)"
          srcset={bannersInfo[bannerPosition].imageMobile}
        ></source>

        <img
          width="100%"
          src={bannersInfo[bannerPosition].imageMobile}
          alt="Banner"
        ></img>
      </picture>

      <div className="home">
        <h2 className="home__title">{bannersInfo[bannerPosition].title}</h2>
        <p className="home__text">{bannersInfo[bannerPosition].text}</p>
        <p className="home__button">
          <span className="home__button">
            SHOP NOW <img src={imageArrowShop} alt="" />
          </span>
        </p>
        <div className="angle">
          <span
            onClick={() => {
              handleClick("left");
            }}
            className="home__button__angle"
          >
            <img src={imageAngleLeft} alt="" className="imageAngle" />
          </span>
          <span
            onClick={() => {
              handleClick("rigth");
            }}
            className="home__button__angle"
          >
            <img src={imageAngleRight} alt="" className="imageAngle" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
