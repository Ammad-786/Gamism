import * as React from "react";
import { useState } from "react";
import { motion, useCycle } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import sliderimg from "../assets/Slider1.png"
import slider1 from "../assets/slider1.jpg"
import ReactAudioPlayer from 'react-audio-player';
import song from "../assets/track1.mp3"


const Home = () => {
  const [slide, setSlide] = useState(false);
  
  const slideStyle = {
    position: 'fixed',
    top: 0,
    left: slide ? '100%' : 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.448)',
    transition: 'left 0.5s'
  };

  const [isOpen] = useCycle(false, true);

  return (
    <div>
      <div id="slider-container">
        <div className="w-full lg:flex sm:grid sm:grid-cols-1 h-[100vh]  md:flex md:flex-row 100vh  mx-auto ">
          <div className="slider1">
            <div className="myDivStyles1 mx-auto flex flex-col items-center justify-center text-center">  
              <motion.div
                className="perspective-1000 flex  rounded-2xl transform rotate-y-10 z-0 m-20 p-12 text-center md:shadow-black  text-white  glassmorphism h-[300px] w-[400px] shadow-md"
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
              >
                <div className="text-white ">
                  <p className="mb-4 text-2xl card-text">Lorem ipsum dolor sit amet.</p>
                  <h1 className="text-4xl font-serif mb-4 card-text">GAMISM</h1>
                  <p className="text-xl p-8 md:p-4 card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum at ornare dolor. Suspendisse potenti.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="mx-auto justify-center"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                style={{
                  display: "flex",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridGap: "16px",
                  alignItems: "center",
                }}
              >
                <MenuButton
                  icon={<FaFacebook className="text-white m-6" />}
                  bgColor="#3b5998"
                  onClick={() => console.log("Facebook")}
                />
                <MenuButton
                  icon={<FaTwitter className="text-white m-6" />}
                  bgColor="#1da1f2"
                  onClick={() => console.log("Twitter")}
                />
                <MenuButton
                  icon={<FaInstagram className="text-white m-6" />}
                  bgColor="#e4405f"
                  onClick={() => console.log("Instagram")}
                />
              </motion.div>
            </div>
          </div>
        

          <div className="slider2 justify-center mx-auto items-center text-center flex flex-col ">
            <div className="myDivStyles2 mx-auto flex flex-col flex-wrap items-center justify-center text-center">
                <motion.div
                    className="glassmorphism h-300 w-300 rounded-md shadow-black shadow-md music-card"
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                >
                    <div className="p-6 text-white music-card-header bg-black">
                        <h3 className=" text-4xl font-medium">Music Player</h3>
                        <p>Beats</p>
                    </div>
                    <div className="p-6 ">
                        <img
                            src={slider1}
                            alt="album art"
                            className="w-[250px] h-[250px]  rounded-full"
                        />
                    </div>
                    <ReactAudioPlayer
                        src={song}
                        controls
                        className="music-card-player w-full pb-6 px-6"
                    />
                </motion.div>
            </div>
          </div>
        
          <motion.div
            id="slider"
            style={slideStyle}
            className="glassmorphism rounded-3xl mx-auto flex flex-col justify-end items-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className=" text-white ">
              <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-6xl h1font mb-2 card-text">GAMISM</h1>
                <h3 className="text-2xl  mb-4 card-text cursor-pointer pb-2 pt-2 pr-4 pl-4 hover:bg-white bg-black rounded-tl-2xl rounded-br-2xl shadow hover:text-black shadow-white"  onClick={() => setSlide(true)}>Get Started</h3>
              </div>
              <img className="h-[500px] w-full" src={sliderimg} alt="/"/>
            </div>
          </motion.div>
        </div>
      </div>
    </div> 
  );
};

const MenuButton = ({ icon, bgColor, onClick }) => (
<motion.div
  className="w-16 h-16 rounded-full shadow-inner bg-black hover:bg-gray-800"
  style={{ backgroundColor: bgColor }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onClick={onClick}
>
  {icon}
</motion.div>
);

export default Home;