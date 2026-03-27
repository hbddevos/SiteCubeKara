import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const accordionItems = [
    {
      id: "accordion1",
      question: "Qui sommes nous ?",
      answer: "Nous sommes une entreprise spécialisé dans l'accompagnement de personnes désireux de creer une entreprise et dans l'accompagnement de personne désireux de digitaliser",
    },
    {
      id: "accordion2",
      question: "Nos valeurs",
      answer: "Je dois trouver un moyen pour afficher une liste ici",
    },
    {
      id: "accordion3",
      question: "Pourquoi choisir nos services ?",
      answer: "Autres informations a remplir",
    },
  ];

  return (
    <motion.div 
      className="relative flex flex-col gap-1 w-full mx-auto overflow-hidden text-sm font-normal divide-y divide-gray-200 rounded-2xl text-black"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {accordionItems.map((item, index) => (
        <motion.div 
          key={item.id} 
          className="cursor-pointer group rounded-2xl border bg-[#004d4d14]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.02, backgroundColor: '#004d4d24' }}
        >
          <button
            onClick={() => toggleAccordion(item.id)}
            className="flex items-center justify-between w-full p-4 text-left select-none group-hover:underline text-2xl font-bold tracking-tighter -leading-3 uppercase"
          >
            <span>{item.question}</span>
            <motion.svg
              className="w-4 h-4"
              animate={{ rotate: activeAccordion === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </motion.svg>
          </button>
          <AnimatePresence>
            {activeAccordion === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 0.7 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 pt-0"
              >
                {item.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}
