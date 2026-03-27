import React from "react";
import { motion } from "motion/react";

export default function TestimonialCard() {
  return (
    <motion.div 
      className="relative w-96 border flex-shrink-0 p-6 rounded-2xl bg-[#004d4d14] shadow-lg hover:shadow-2xl transition-shadow"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <motion.div 
        className="absolute w-40 flex justify-center backdrop-blur-lg items-center bg-[#004d4d14] rounded-2xl left-1/2 -translate-x-1/2 -top-8 py-1 shadow-lg"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
      >
        <div className="mr-1">
          <motion.img
            className="h-16 w-16 rounded-full object-cover"
            src="/assets/images/img.jpg"
            alt=""
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
        </div>
        <motion.div 
          className="h-16 w-16 rounded-full flex justify-center items-center text-4xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          💌
        </motion.div>
      </motion.div>
      <motion.div 
        className="mt-6 mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        stars
      </motion.div>
      <motion.p 
        className="mb-3 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <q>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, deleniti
          saepe. Amet nostrum maxime illo ducimus. Sapiente autem aut eum
          tempora beatae ut ab
        </q>
      </motion.p>
      <motion.h4 
        className="mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        NOM
      </motion.h4>
      <motion.h5
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        taf
      </motion.h5>
    </motion.div>
  );
}
