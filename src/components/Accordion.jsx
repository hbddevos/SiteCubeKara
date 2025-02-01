import React, { useState } from "react";

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
      answer:
        "Je dois trouver un moyen pour afficher une liste ici",
    },
    {
      id: "accordion3",
      question: "Pourquoi choisir nos services ?",
      answer:
        "Autres informations a remplir",
    },
  ];

  return (
    <div className="relative flex flex-col gap-1 w-full mx-auto overflow-hidden text-sm font-normaldivide-y divide-gray-200 rounded-2xl text-white">
      {accordionItems.map((item) => (
        <div key={item.id} className="cursor-pointer group rounded-2xl border bg-gray-800">
          <button
            onClick={() => toggleAccordion(item.id)}
            className="flex items-center justify-between w-full p-4 text-left select-none group-hover:underline text-2xl font-bold tracking-tighter -leading-3 uppercase"
          >
            <span>{item.question}</span>
            <svg
              className={`w-4 h-4 duration-200 ease-out ${
                activeAccordion === item.id ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          {activeAccordion === item.id && (
            <div className="p-4 pt-0 opacity-70">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
