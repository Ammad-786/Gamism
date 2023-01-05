import React from 'react';
import aboutbg from "../assets/bg.jpg"
 
const AboutUs = () => {
  return (
    <div className=' h-screen'>
      <img id="about-bg" src={aboutbg} alt="/"/>
      <h1>About Us</h1>
      <p>We are a team of cat lovers dedicated to spreading joy and feline appreciation through our website.</p>
      <div className="h-20 w-20 cat-img-container">
        {/* <img src={catImg} alt="cat sitting on wall" className="cat-img" /> */}
      </div>
    </div>
  );
}

export default AboutUs;