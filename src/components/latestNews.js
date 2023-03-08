import React from "react";
import "../assets/css/latestNews.css";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";
import Button from "./button";

function LatestNews() {
  window.addEventListener("scroll", function () {
    const element = document.querySelector(".news");
    const nextElement = document.querySelector(".sign-up");
    const positionTop = element.getBoundingClientRect().top;
    const positionBottom = nextElement.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    if (positionTop < windowHeight && positionBottom > windowHeight) {
      element.style.opacity = "1";
    } else {
      element.style.opacity = "0";
    }
  });
  return (
    <div id="blog" className="news">
      <h3 className="news__subtitle">LETEST NEWS</h3>
      <h2 className="news__title">From Our Blog</h2>
      <div className="news__container">
        <div className="news__container-column">
          <div className="news__img-box">
            <img src={news1} alt="news1" className="news__img" />
          </div>
          <h4 className="news__name">2020 Interior Design Trends</h4>
          <p className="news__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua.
          </p>
          <Button text="CONTINUE READING...." width="271" />
        </div>
        <div className="news__container-column">
          <div className="news__img-box">
            <img src={news2} alt="news1" className="news__img" />
          </div>
          <h4 className="news__name">
            28 Notable Product at ARC Interior Design
          </h4>
          <p className="news__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua.
          </p>
          <Button text="CONTINUE READING...." width="271" />
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
