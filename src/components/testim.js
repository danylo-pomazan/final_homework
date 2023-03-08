import "../assets/css/testim.css";
import quotes from "../assets/images/quotes.png";

function Testimonial(props) {
  let face = require(`../assets/images/${props.img}`);
  return (
    <div className="testimonial">
      <img className="testimonial__face" src={face} alt="face" />
      <div className="testimonial__text-container">
        <p className="testimonial__title">
          <span className="testimonial__name">{props.name}</span>
          <span className="testimonial__job">{props.job}</span>
        </p>
        <p className="testimonial__text">{props.text}</p>
      </div>
      <img className="testimonial__quotes" src={quotes} alt="quotes" />
    </div>
  );
}

export default Testimonial;
