import React from 'react'
import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section className="md:flex justify-between items-center md:gap-5 mt-28 md:mt-2">
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h1 className="px-2 title mt-5 text-balance leading-none tracking-tighter uppercase">
          De <span className="text_gradient">l'idée</span> au monde, nous
          entrepreunons <span className="text_gradient">l'impossible</span>
        </h1>
        <p className="p-2 content mt-5 mb-5">
          Nous sommes une équipe spécialisée dans la conceprion de solution
          sur mésure pour toute personne et pour tout type d'entreprise.{" "}
          <br />
          Nous Intervenons dans tout ce qui est accompagnement d'entreprise
          et de formation a l'utlisation es outils technologiques
        </p>{" "}
        <br />
        <motion.a
          href="#"
          className="p-5 button text-white text-xl rounded-2xl mx-2 mb-10 inline-block"
          whileHover={{ scale: 1.05, backgroundColor: '#f2a900' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Nous contacter
        </motion.a>
      </motion.div>
      <motion.div 
        className="w-full md:w-1/2 backdrop-blur-xl bg-transparent mt-8 rounded-2xl mx-5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
      >
        <img
          className="w-full h-full object-cover"
          src="/assets/images/dev-mark.png"
          alt="hero-img"
        />
      </motion.div>
    </section>
  )
}
