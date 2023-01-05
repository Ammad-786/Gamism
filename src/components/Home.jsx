import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Home = () => {
  const [isOpen] = useCycle(false, true);

  return (
    <div className="w-full flex flex-col mx-auto h-screen justify-center items-center">
      <motion.div
        className="perspective-1000 rounded-2xl transform rotate-y-10 z-0 m-20 p-12 text-center md:shadow-transparent  text-white  glassmorphism h-[300px] w-[400px] shadow-2xl"
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        <div className="   text-white ">
          <p className="mb-4 text-2xl card-text">Lorem ipsum dolor sit amet.</p>
          <h1 className="text-4xl font-serif mb-4 card-text">GAMISM</h1>
          <p className="text-xl p-8 md:p-4 card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum at ornare dolor. Suspendisse potenti.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="mx-auto "
        initial={false}
        animate={isOpen ? "open" : "closed"}
        style={{
          display: "grid",
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