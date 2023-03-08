import "../assets/css/testimonials.css";
import Testimonial from "./testim";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Louis Saville",
    job: "/CEO at Google inc",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "photo1.png",
  },
  {
    id: 2,
    name: "Rekha Varadwaz",
    job: "/Manager at Nike inc",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "photo2.png",
  },
  {
    id: 3,
    name: "Vasyl",
    job: "/Manager at Nike inc",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "photo2.png",
  },
  {
    id: 4,
    name: "Petro",
    job: "/Manager at Nike inc",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "photo1.png",
  },
  {
    id: 5,
    name: "Iryna",
    job: "/CEO at Google inc",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "photo2.png",
  },
  {
    id: 6,
    name: "Louis Saville",
    job: "/cleaner",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "photo2.png",
  },
];

function Testimonials() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setSliderIndex(index);
    },
  };
  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };
  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div id="testim" className="testimonials">
      <h3 className="testimonials__subtitle">TESTIMONIALS</h3>
      <h2 className="testimonials__title">Client says about us</h2>
      <button
        className="testimonials__button testimonials__button--inactive"
        onClick={handlePrevClick}
      >
        &lt;
      </button>
      <button
        className="testimonials__button testimonials__button--active"
        onClick={handleNextClick}
      >
        &gt;
      </button>
      <Slider {...settings} ref={sliderRef}>
        {reviews.map((review, index) => {
          if (index % 2 === 0) {
            return (
              <div className="testimonials__testim-container" key={review.id}>
                <div className="testimonials__testim-pair">
                  <Testimonial
                    name={review.name}
                    job={review.job}
                    text={review.text}
                    img={review.photo}
                  />
                  {index + 1 < reviews.length && (
                    <Testimonial
                      name={reviews[index + 1].name}
                      job={reviews[index + 1].job}
                      text={reviews[index + 1].text}
                      img={reviews[index + 1].photo}
                      style={{ display: "none" }}
                      onLoad={(event) => {
                        event.target.style.display = "block";
                      }}
                    />
                  )}
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </Slider>
    </div>
  );
}

export default Testimonials;
