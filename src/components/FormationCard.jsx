import React from "react";
import { motion } from "motion/react";

function FormationCard({ title, description, image, link }) {
  return (
    <motion.div 
      className="flex flex-col rounded-2xl shadow-md bg-[#004d4d14]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
    >
      <motion.div 
        className="h-60 w-full flex justify-center items-center bg-gradient-to-br from-[#008080] to-[#004d4d14] rounded-t-2xl overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          className="h-full object-cover"
          src="/assets/images/lara3d.png"
          alt=""
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
      <motion.div 
        className="rounded-2xl w-full p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex justify-between items-center flex-wrap">
          <h4 className="mb-3">
            <motion.span 
              className="border border-[#008080] rounded-xl p-1 mr-2 inline-block"
              whileHover={{ scale: 1.1, backgroundColor: '#008080', color: 'white' }}
            >
              8séance
            </motion.span>
            <motion.span 
              className="border border-[#008080] rounded-xl p-1 mr-2 inline-block"
              whileHover={{ scale: 1.1, backgroundColor: '#008080', color: 'white' }}
            >
              30000fcfa
            </motion.span>
            <motion.span 
              className="border border-[#008080] rounded-xl p-1 inline-block"
              whileHover={{ scale: 1.1, backgroundColor: '#008080', color: 'white' }}
            >
              30h
            </motion.span>
          </h4>
          <motion.button 
            className="border border-[#008080] rounded-xl p-2"
            whileHover={{ scale: 1.1, backgroundColor: '#008080' }}
            whileTap={{ scale: 0.95 }}
          >
            icon
          </motion.button>
        </div>
        <h2 className="text-3xl font-bold title">Title</h2>
        <h4 className="mt-5 mb-5">
          Objectif : Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Non doloribus est, ut totam deleniti commodi{" "}
        </h4>
        <h4>
          Prérequis: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Hic eum ab non distinctio! Corrupti perferendis totam ex accusamus
          veritatis sit?
        </h4>
      </motion.div>
    </motion.div>
  );
}

export default FormationCard;
