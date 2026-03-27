import React, { useState } from "react";
import { motion } from "motion/react";

export default function Header() {
  const [isNavBarMobileOpen, setIsNavBarMobileOpen] = useState(false);
  
  const toggleClassVisible = () => {
    setIsNavBarMobileOpen(!isNavBarMobileOpen);
  };

  return (
    <motion.header
      className="h-24 text-white fixed top-0 left-0 right-0 z-30 bg-[#008080] p-5 flex justify-between items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.a 
        href="/" 
        className="h-full w-40 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <img src="/Logo_CUBE.svg" alt="Logo" />
      </motion.a>

      <div id="menu_icon" className="md:hidden cursor-pointer" onClick={toggleClassVisible}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </div>
      <motion.div 
        className="hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <ul className="flex [&>li]:mx-2 [&>li>a]:max-w-max text-xl">
          {['Home', 'A-propos', 'services', 'Contacts', 'Button'].map((item, index) => (
            <motion.li 
              key={item}
              className="hover:text-[#004d4d] hover:underline hover:underline-offset-4 transition"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
            >
              <a href="#">{item}</a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      {/* NavbarMobile */}
      <motion.div
        className={`absolute transition-all right-2 top-2 w-8/12 p-6 bg-gradient-to-br bg-opacity-15 from-[#2c99a8] to-[#053e49] backdrop-blur-3xl rounded-2xl text-white ${isNavBarMobileOpen ? '' : 'hidden'}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isNavBarMobileOpen ? 1 : 0, scale: isNavBarMobileOpen ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="transition-all [&>li]:my-5 [&>li>a]:max-w-max text-3xl links">
          <div className="flex justify-end cursor-pointer" onClick={toggleClassVisible}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </div>
          {['Home', 'A-propos', 'services', 'Contacts', 'Button'].map((item) => (
            <motion.li 
              key={item}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="#">{item}</a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
}
