import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const testimonials = [
      {
        name: 'Jane Smith',
        text: 'I absolutely love this game! It has become my new addiction.',
        image: '.'
      },
      {
        name: 'Jessica Johnson',
        text: 'I never thought a mobile game could be so much fun. Highly recommend!',
        image: '1.jpg'
      },
      {
        name: 'James Williams',
        text: 'This game has the perfect balance of challenge and enjoyment.',
        image: '1.jpg'
      }
    ];
  
    const handlePrevClick = () => {
      if (currentIndex === 0) {
        setCurrentIndex(testimonials.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    const handleNextClick = () => {
      if (currentIndex === testimonials.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    return (
      <div className="testimonial-page">
        <button className='b1' onClick={handlePrevClick}>Prev</button>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="testimonial-card"
        >
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
          <h3>{testimonials[currentIndex].name}</h3>
          <p>{testimonials[currentIndex].text}</p>
        </motion.div>
        
        <button className='b1' onClick={handleNextClick}>Next</button>
      </div>
    );
  };
  
  export default TestimonialPage;