import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { FaHome, FaInfo, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemIds = [0, 1, 2, 3, 4];
const icons = [FaHome, FaInfo, FaProjectDiagram, FaTools, FaEnvelope];
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const listNames = ["Home", "About Us", "Projects", "Services", "Contact"];

export const Navigation = (props) => (
    <motion.ul
      style={{ display: props.isOpen ? "block" : "none" }}
      variants={variants}
    >
      {itemIds.map(i => (
        <MenuItem i={i} key={i} colors={colors} />
        ))}
    </motion.ul>
  );
  
  const MenuItem = ({ i, colors }) => {
    const style = { border: `2px solid ${colors[i]}` };
    return (
      <li className="text-lg font-semibold" style={{color: colors[i]}}>
        <motion.div
          className="flex items-center justify-center w-16 h-16 rounded-full mr-6"
          style={style}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {React.createElement(icons[i])}
        </motion.div>
        <motion.div
          className="text-placeholder mx-auto justify-center items-center text-center p-2 "
          style={style}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {listNames[i]}
        </motion.div>
      </li>
    );
  };
  
  const sidebar = {
    open: (height = 200) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };
  
  export const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
  
    return (
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation isOpen={isOpen} toggleOpen={toggleOpen} />
        <MenuToggle toggle={toggleOpen} />
      </motion.nav>
    );
  };