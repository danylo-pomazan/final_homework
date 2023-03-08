import React, { useState, useEffect } from "react";
import "../assets/css/footer.css";
import logo from "../assets/images/logo.png";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import insta from "../assets/images/insta.svg";
import linkedin from "../assets/images/linkedin.svg";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const [response, setResponse] = useState("");
  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then(
        (result) => {
          setResponse(result.fact);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__first-column">
          <img className="footer__first-column-logo" src={logo} alt="logo" />
          <p className="footer__first-column-text">
            But i must explain to you all this mistaken idea of dencouncing
            pleasure.
          </p>
        </div>
        <div className="footer__second-column">
          <p className="footer__column-title">Quick Links</p>
          <a className="footer__column-tixt-item" href="#about">
            About Our Company
          </a>
          <a className="footer__column-tixt-item" href="#serv">
            Services WE provide
          </a>
          <p className="footer__column-tixt-item">Career & Opportunity</p>
          <p className="footer__column-tixt-item">Privacy & policy</p>
          <a className="footer__column-tixt-item" href="#sign">
            Contact US
          </a>
        </div>
        <div className="footer__third-column">
          <p className="footer__column-title">Company</p>
          <a className="footer__column-tixt-item" href="#about">
            About Company
          </a>
          <a className="footer__column-tixt-item" href="#testim">
            Our Testimonials
          </a>
          <a className="footer__column-tixt-item" href="#blog">
            Latest News
          </a>
          <a className="footer__column-tixt-item" href="#about">
            Our misson
          </a>
          <p className="footer__column-tixt-item">Get a free Quot</p>
        </div>
        <div className="footer__fourth-column">
          <p className="footer__column-title">Contact us</p>
          <p className="footer__column-tixt-item">Sagrada Familia, Herba</p>
          <p className="footer__column-tixt-item">Street Front USA</p>
          <p className="footer__column-tixt-item">brandoxide@gmail.com</p>
          <p className="footer__column-tixt-item">002-568423591</p>
        </div>
        <div className="footer__fifth-column">
          <p className="footer__column-title">Follow Us</p>
          <div className="footer__social-container">
            <a className="footer__social-link" href="https://www.facebook.com/">
              <img src={facebook} alt="FB" className="footer__social-logo" />
            </a>
            <a className="footer__social-link" href="https://twitter.com/">
              <img src={twitter} alt="TW" className="footer__social-logo" />
            </a>
            <a
              className="footer__social-link"
              href="https://www.instagram.com/"
            >
              <img src={insta} alt="INST" className="footer__social-logo" />
            </a>
            <a className="footer__social-link" href="https://www.linkedin.com/">
              <img src={linkedin} alt="IN" className="footer__social-logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__cat-fact">
        Interesting fact about cats: {response}{" "}
      </div>
      <hr className="footer__line" />
      <div className="footer__copyright">
        Copyright @ {year} Brandoxide.all right reserved.
      </div>
    </footer>
  );
}

export default Footer;
