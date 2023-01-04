import React from 'react';
import catImg from '../assets/cat.png'; // import the cat image

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>We are a team of cat lovers dedicated to spreading joy and feline appreciation through our website.</p>
      <div className="cat-img-container">
        <img src={catImg} alt="cat sitting on wall" className="cat-img" />
      </div>
    </div>
  );
}

export default AboutUs;