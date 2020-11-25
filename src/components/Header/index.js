import React, { useState } from "react";
import "./style.css";
import logo from "./images/logo.svg";
import close from "./images/icon-close.svg";
import hamburger from "./images/icon-hamburger.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`header ${isOpen ? "isOpen" : ""}`}>
      <div
        className={`navbar__icon ${isOpen ? "isOpen" : ""}`}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <img src={hamburger} alt="" />
      </div>

      {<img src={logo} alt="" className={`logo ${isOpen ? "isOpen" : ""}`} />}
      <div
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <img src={close} alt="" className={`close ${isOpen ? "isOpen" : ""}`} />
      </div>
      <div className={`navbar ${isOpen ? "isOpen" : ""}`}>
        <div>
          <a
            href="#home"
            className="nav-link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            home
          </a>
        </div>
        <div>
          <a href="#shop" className="nav-link">
            shop
          </a>
        </div>
        <div>
          <a
            href="#about"
            className="nav-link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            about
          </a>
        </div>
        <div>
          <a href="#contact" className="nav-link">
            contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
