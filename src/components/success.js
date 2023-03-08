import React from "react";
import "../assets/css/success.css";
import successImg from "../assets/images/success_img.png";
import Button from "./button";

function Success() {
  return (
    <section className="success" id="proj">
      <div className="success__container">
        <div className="success__text-container">
          <div className="success__extra-title-back">
            <h2 className="success__extra-title">20</h2>
          </div>
          <h2 className="success__title">
            Years Of Successful Working The Market
          </h2>
          <Button text="READ MORE" width="175" />
        </div>
        <div className="success__image-container">
          <img
            src={successImg}
            className="success__image"
            alt="gorgeous design"
          />
        </div>
      </div>
    </section>
  );
}

export default Success;
