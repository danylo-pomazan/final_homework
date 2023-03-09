import "../assets/css/whatWeDo.css";
import React from "react";
import data from "../assets/data/data.json";

function WhatWeDo() {
  const [category, setCategory] = React.useState("all");

  const handleCategoryClick = (cat) => {
    setCategory(cat);
  };

  let filteredData = data;
  if (category !== "all") {
    filteredData = data.filter((item) => item.category === category);
  }

  if (category === "all") {
    filteredData = filteredData.slice(0, 3);
  } else {
    filteredData = filteredData.slice(0, 5);
  }

  return (
    <section id="serv" className="what-we-do">
      <h4 className="what-we-do__subtitle">WHAT WE DO</h4>
      <h2 className="what-we-do__title">Our Service</h2>
      <div className="what-we-do__button-container">
        <button
          className="what-we-do__button"
          onClick={() => handleCategoryClick("all")}
        >
          ALL
        </button>
        <button
          className="what-we-do__button"
          onClick={() => handleCategoryClick("Interior Design")}
        >
          INTERIOR DESIGN
        </button>
        <button
          className="what-we-do__button"
          onClick={() => handleCategoryClick("Architecture")}
        >
          ARCHITECTURE
        </button>
        <button
          className="what-we-do__button"
          onClick={() => handleCategoryClick("Planning")}
        >
          PLANNING
        </button>
      </div>
      <div className="services">
        {filteredData.slice(0, 5).map((item) => (
          <div
            className={`services__card ${
              item.category === "Architecture"
                ? "services__card--brown"
                : "services__card--white"
            }`}
            key={item.id}
          >
            <img
              className="services__img"
              src={require(`../assets/images/${item.image}`)}
              alt={item.title}
            />
            <div className="services__text-container">
              <h3
                className={`services__title ${
                  item.category === "Architecture"
                    ? "services__title--white"
                    : ""
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`services__text ${
                  item.category === "Architecture"
                    ? "services__text--white"
                    : ""
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeDo;
