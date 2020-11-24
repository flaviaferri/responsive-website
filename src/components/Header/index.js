import React, { useState } from "react";
import "./style.css";
import logo from "./logo.svg";
import close from "./icon-close.svg";
import hamburger from "./icon-hamburger.svg";

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
          <a href="#" className="nav-link">
            home
          </a>
        </div>
        <div>
          <a href="#" className="nav-link">
            shop
          </a>
        </div>
        <div>
          <a href="#" className="nav-link">
            about
          </a>
        </div>
        <div>
          <a href="#" className="nav-link">
            contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
