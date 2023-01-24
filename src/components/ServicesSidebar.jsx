import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaCog, FaUsers } from 'react-icons/fa';

const ServicesSidebar = () => {
  return (
    <motion.div
      className="absolute flex top-0 left-0 w-16 h-full bg-gray-200"
      initial={{ x: -16 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative p-6">
        <FaGamepad className="text-3xl text-gray-800" />
        <FaCog className="text-3xl text-gray-800 mt-4" />
        <FaUsers className="text-3xl text-gray-800 mt-4" />
      </div>
    </motion.div>
  );
};

export default ServicesSidebar;