import React from "react";
import "../assets/css/completed.css";
import line1 from "../assets/images/success_line1.png";
import line2 from "../assets/images/success_line2.png";
import line3 from "../assets/images/success_line3.png";

function Completed() {
  return (
    <div className="completed">
      <h2 className="completed__title">
        3000+ Completed Work
        <br />
        Which WE have Successfully Done
      </h2>
      <div className="completed__container">
        <div className="completed__card completed__card--to-top">
          <h3 className="completed__card-number">980</h3>
          <span className="completed__card-text">Project</span>
        </div>
        <img className="completed__line" src={line1} alt="some line" />
        <div className="completed__card completed__card--to-bottom">
          <h3 className="completed__card-number">520</h3>
          <span className="completed__card-text">Happy Client</span>
        </div>
        <img className="completed__line" src={line2} alt="some line" />
        <div className="completed__card completed__card--to-top">
          <h3 className="completed__card-number">330</h3>
          <span className="completed__card-text">Winners</span>
        </div>
        <img className="completed__line" src={line3} alt="some line" />
        <div className="completed__card completed__card--to-bottom">
          <h3 className="completed__card-number">120</h3>
          <span className="completed__card-text">Recommend</span>
        </div>
      </div>
    </div>
  );
}

export default Completed;
