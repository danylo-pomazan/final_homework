import React, { useState } from "react";
import "../assets/css/signUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!/^[A-Z][a-z]*$/.test(name)) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!/^[A-Z][a-z]*$/.test(surname)) {
      setSurnameError(true);
    } else {
      setSurnameError(false);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("email", email);
  };

  return (
    <div id="sign" className="sign-up">
      <h2 className="sign-up__title">DON’T FORGET TO SIGN UP</h2>
      <div className="sign-up__line"></div>
      <p className="sign-up__text">
        Find out early about all upcoming promotions and new product releases
        with our newsletter.
      </p>
      <form className="sign-up__form" onSubmit={handleSubmit}>
        <div className="sign-up__input-container">
          <input
            type="text"
            className={`sign-up__input sign-up__input--name ${
              nameError ? "sign-up__input--error" : ""
            }`}
            placeholder="Enter your name..."
            required
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            className={`sign-up__input sign-up__input--surname ${
              surnameError ? "sign-up__input--error" : ""
            }`}
            placeholder="Enter your surname..."
            required
            value={surname}
            onChange={handleSurnameChange}
          />
        </div>
        <input
          type="email"
          className={`sign-up__input sign-up__input--mail ${
            emailError ? "sign-up__input--error" : ""
          }`}
          placeholder="Enter your e-mail..."
          required
          value={email}
          onChange={handleEmailChange}
        />
        <input className="sign-up__submit" type="submit" value="SUBSCRIBE" />
      </form>
    </div>
  );
}

export default SignUp;
