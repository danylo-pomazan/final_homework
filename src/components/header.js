import React, { useState } from "react";
import "../assets/css/header.css";
import logo from "../assets/images/logo.png";
import headerImg from "../assets/images/header_img.png";
import Button from "./button";
import ScrollProgressBar from "./progressbar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header id="home" className="header">
      <nav className="nav-menu">
        <img src={logo} alt="logo" className="header__logo" />
        <div>
          <button className="nav-menu__toggle" onClick={handleToggle}>
            {isOpen ? "Close menu" : "Open menu"}
          </button>
          <ul
            className={`nav-menu__container ${
              isOpen ? "nav-menu__container--show" : ""
            }`}
          >
            <li className="nav-menu__item">
              <a href="#home" className="nav-menu__link">
                HOME
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="#serv" className="nav-menu__link">
                SERVICES
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="#about" className="nav-menu__link">
                ABOUT
              </a>
            </li>
            <li className="nav-menu__item">
              <a href="#blog" className="nav-menu__link">
                BLOG
              </a>
            </li>
            <li className="nav-menu__button">
              <a href="#sign" className="nav-menu__button-link">
                SIGN UP
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ScrollProgressBar />
      <div className="header__container">
        <div className="header__text-container">
          <h3 className="header__subtitle">MODERN INTERIOR</h3>
          <h1 className="header__title">Create Your Interior Design.</h1>
          <p className="header__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <Button text="CONTACT" width="149" />
        </div>
        <div className="header__image-container">
          <img
            src={headerImg}
            className="header__image"
            alt="gorgeous design"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
