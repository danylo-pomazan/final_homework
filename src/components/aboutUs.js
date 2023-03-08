import React from "react";
import "../assets/css/aboutUs.css";
import headerImg from "../assets/images/about_us_img.png";
import Button from "./button";

function AboutUs() {
  return (
    <section id="about" className="about-us">
      <div className="about-us__container">
        <div className="about-us__image-container">
          <img
            src={headerImg}
            className="about-us__image"
            alt="gorgeous design"
          />
        </div>
        <div className="about-us__text-container">
          <h3 className="about-us__subtitle">ABOUT US</h3>
          <h2 className="about-us__title">
            Interioris The Will of An Epoch Mextreo
            <span className="about-us__span"></span>
          </h2>
          <p className="about-us__text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form injected humour,
            or randomised words which don't look even slightly believable.If you
            are going to use a passage of Lorem Ipsum, sure there isn't anything
            embarrassing hidden the middleof text. All the Lorem Ipsum
            generators on the Internettend to repeat predefined chunks as
            necessary,making this the first true generator on the Internet.
          </p>
          <Button text="LEARN MORE" width="149" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
