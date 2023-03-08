import "../assets/css/whatWeDo.css";
import React from "react";
import designImg from "../assets/images/sr.png";
import arcImg from "../assets/images/ere.png";
import planImg from "../assets/images/sd.png";

function WhatWeDo() {
  return (
    <section id="serv" className="what-we-do">
      <h4 className="what-we-do__subtitle">WHAT WE DO</h4>
      <h2 className="what-we-do__title">Our Service</h2>
      <div className="what-we-do__button-container">
        <button className="what-we-do__button">ALL</button>
        <button className="what-we-do__button">INTERIOR DESIGN</button>
        <button className="what-we-do__button">ARCHITECTURE</button>
        <button className="what-we-do__button">PLANNING</button>
      </div>
      <div className="services">
        <div className="services__card services__card--white">
          <img className="services__img" src={designImg} alt="design" />
          <div className="services__text-container">
            <h3 className="services__title">Interior Design1</h3>
            <p className="services__text">
              Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
              tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className="services__card services__card--brown">
          <img className="services__img" src={arcImg} alt="architect" />
          <div className="services__text-container">
            <h3 className="services__title services__title--white">
              Architecture 1
            </h3>
            <p className="services__text services__text--white">
              Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
              tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className="services__card services__card--white">
          <img className="services__img" src={planImg} alt="planning" />
          <div className="services__text-container">
            <h3 className="services__title">Planning 1</h3>
            <p className="services__text">
              Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
              tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
