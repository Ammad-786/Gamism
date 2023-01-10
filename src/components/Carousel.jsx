import React from 'react';
import img1 from "../assets/slider1.jpg"

const Carousel = () => {
  return (
    <div className="carousel relative overflow-hidden bg-gray-900">
      <div className="carousel-inner relative w-full overflow-hidden">
        <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
        <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
        <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
        <div className="carousel-item absolute opacity-0" style={{height: '400px', backgroundImage:img1}}></div>
        <div className="carousel-item absolute opacity-0" style={{height: '400px', backgroundImage: 'url(https://via.placeholder.com/800x400)'}}></div>
        <div className="carousel-item absolute opacity-0" style={{height: '400px', backgroundImage: 'url(https://via.placeholder.com/800x400)'}}></div>
        <label htmlFor="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-gray-500 md:text-white rounded-full hover:bg-white hover:text-gray-900">‹</label>
        <label htmlFor="carousel-2" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-gray-500 md:text-white rounded-full hover:bg-white hover:text-gray-900">‹</label>
        <label htmlFor="carousel-1" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-gray-500 md:text-white rounded-full hover:bg-white hover:text-gray-900">‹</label>
        <label htmlFor="carousel-1" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer text-3xl font-bold text-gray-500 md:text-white rounded-full hover:bg-white hover:text-gray-900">›</label>
        <label htmlFor="carousel-2" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-gray-500 md:text-white rounded-full hover:bg-white hover:text-gray-900">›</label>
        <label htmlFor="carousel-3" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-gray-500 md:text-white rounded-full hover:bg-white hover:text-gray-900">›</label>
        <div className="carousel-item-content">
          <div className="h-full flex flex-col justify-end p-8 md:p-16 text-white">
            <p className="text-2xl md:text-3xl font-bold leading-tight mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p className="text-base md:text-lg leading-tight mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="btn bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-full">Button</button>
          </div>
        </div>
        <label htmlFor="carousel-1" className="dot control-1 absolute bottom-0 right-0 mr-2 mb-2 w-6 h-6 text-white rounded-full bg-white hover:bg-gray-100 cursor-pointer">•</label>
        <label htmlFor="carousel-2" className="dot control-2 absolute bottom-0 right-0 mr-2 mb-2 w-6 h-6 text-white rounded-full hover:bg-gray-100 cursor-pointer">•</label>
        <label htmlFor="carousel-3" className="dot control-3 absolute bottom-0 right-0 mr-2 mb-2 w-6 h-6 text-white rounded-full hover:bg-gray-100 cursor-pointer">•</label>
      </div>
    </div>
  );
}

export default Carousel