import React from 'react';
import { motion } from 'framer-motion';

const ServicesCard = () => {
  return (
    <motion.div
      className="relative bg-white rounded-lg overflow-hidden shadow-lg"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative p-6">
        <h2 className="text-xl font-medium text-gray-800">Service Name</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur, nulla sit amet euismod tristique, augue risus tincidunt
          velit, vel tincidunt velit velit vel est.
        </p>
      </div>
      <div className="relative p-6">
        <h2 className="text-xl font-medium text-gray-800">Service Name</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur, nulla sit amet euismod tristique, augue risus tincidunt
          velit, vel tincidunt velit velit vel est.
        </p>
      </div>
      <div className="relative p-6">
        <h2 className="text-xl font-medium text-gray-800">Service Name</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur, nulla sit amet euismod tristique, augue risus tincidunt
          velit, vel tincidunt velit velit vel est.
        </p>
      </div>
    </motion.div>
  );
};

export default ServicesCard;