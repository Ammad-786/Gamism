import { motion } from 'framer-motion';
import { RiGroupLine } from 'react-icons/ri';
import { FaHeart } from 'react-icons/fa';
import { TiLocationOutline } from 'react-icons/ti';

const About = () => {
  return (
    <div className=' h-screen w-full '>
      <div className="bg-black h-screen p-4 flex flex-wrap flex-col justify-center items-center mx-auto">
        <motion.div initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ delay: 0.5 }}>
          <h1 className="text-5xl text-white font-bold text-center mb-4">About Us</h1>
        </motion.div>
        <div className="flex flex-wrap justify-center p-4">
          <motion.div className="w-full md:w-1/3 p-4" whileHover={{ scale: 1.1 }}>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <RiGroupLine className="text-5xl mb-4 text-gray-600" />
              <h2 className="text-lg font-medium text-center mb-2">Our Team</h2>
              <p className="text-sm text-gray-600 text-center">We are a team of dedicated professionals with a passion for building great products.</p>
            </div>
          </motion.div>
          <motion.div className="w-full md:w-1/3 p-2" whileHover={{ scale: 1.1 }}>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <FaHeart className="text-5xl mb-4 text-gray-600" />
              <h2 className="text-lg font-medium text-center mb-2">Our Passion</h2>
              <p className="text-sm text-gray-600 text-center">We are passionate about creating innovative and user-friendly products that make a difference in people's lives.</p>
            </div>
          </motion.div>
          <motion.div className="w-full md:w-1/3 p-4" whileHover={{ scale: 1.1 }}>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <TiLocationOutline className="text-5xl mb-4 text-gray-600" />
              <h2 className="text-lg font-medium text-center mb-2">Our Location</h2>
              <p className="text-sm text-gray-600 text-center">We are located in the heart of the city, easily accessible for all our clients and partners.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
