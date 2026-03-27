import React from "react";
import { motion } from "motion/react";

function ServiceCard({ ordre }) {
  return (
    <motion.div 
      className="rounded-2xl p-6 md:pt-8 lg:pt-10 pb-4 relative shadow-lg mx-auto flex flex-col bg-[#004d4d14]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: ordre * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="subtitle">
          Développement <span className="text_gradient">Web & Mobile </span> sur mesure
        </h2>
        <ul className="px-2 mt-3 mb-2 flex flex-wrap gap-1 [&>li]:p-2 [&>li]:border [&>li]:border-[#008080] [&>li]:rounded-2xl">
          {['Sites vitrine', 'App de gestion', 'Application hybride', 'E-commerce', 'Blog'].map((tag, index) => (
            <motion.li
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
              whileHover={{ backgroundColor: '#008080', color: 'white' }}
            >
              {tag}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div 
        className="flex items-end justify-end mt-5"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4, type: "spring", stiffness: 200 }}
      >
        <button className="h-20 w-20 rounded-full flex items-center justify-center bg-[#008080] text-white p-2">
          icone
        </button>
      </motion.div>
    </motion.div>
  );
}

export default ServiceCard;
