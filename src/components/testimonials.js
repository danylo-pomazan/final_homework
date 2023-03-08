import "../assets/css/testimonials.css";
import Testimonial from "./testim";

function Testimonials() {
  return (
    <div id="testim" className="testimonials">
      <h3 className="testimonials__subtitle">TESTIMONIALS</h3>
      <h2 className="testimonials__title">Client says about us</h2>
      <button className="testimonials__button testimonials__button--inactive">
        &lt;
      </button>
      <button className="testimonials__button testimonials__button--active">
        &gt;
      </button>
      <div className="testimonials__testim-container">
        <Testimonial
          name="Louis Saville"
          job="/CEO at Google inc"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing 
    elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua."
          img="photo1.png"
        />
        <Testimonial
          name="Rekha Varadwaz"
          job="/Manager at Nike inc"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua."
          img="photo2.png"
        />
      </div>
    </div>
  );
}

export default Testimonials;
