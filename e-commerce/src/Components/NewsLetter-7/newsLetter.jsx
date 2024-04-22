import React from "react";
import "./newsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>get Exclusive offers on your email</h1>
      <p>subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id"></input>
        <button>subscribe</button>
      </div>
    </div>

  );
};

export default NewsLetter;
