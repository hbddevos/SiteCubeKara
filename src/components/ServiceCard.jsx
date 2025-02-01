import { div } from "motion/react-client";
import React from "react";

function ServiceCard({ordre}) {
let pos1 = ordre%2==0 ? 2 : 1;
  return (
    // <div className="md:col-span-2 w-[400px] md:w-full mx-auto md:flex gap-5 md:justify-between px-5 py-4 bg-[#F07167] bg-opacity-30 rounded-2xl">
    //   <div className="card md:w-3/5">
    //     <h2 className="subtitle text-left mb-4">
    //       Développement Web et Mobile sur mesure
    //     </h2>
    //     <p className="text-left text-base">
    //       <ul className="flex flex-col gap-5">
    //         <li className="flex gap-2">
    //           <span className="flex justify-center items-center font-bold text-white h-6 p-2 w-6 md:h-10 md:w-10 rounded-full bg-red-900">
    //             1
    //           </span>
    //           Nous créons des sites professionnels et optimisés pour présenter
    //           votre activité ou votre entreprise
    //         </li>
    //         <li className="flex gap-2">
    //           <span className="flex justify-center items-center font-bold text-white h-6 p-2 w-6 md:h-10 md:w-10 rounded-full bg-red-900">
    //             2
    //           </span>
    //           Création d'application web personnalisée, gestion de boutique,
    //           gestion de stock, gestion de restaurant etc....
    //         </li>
    //         <li className="flex justify-start gap-2">
    //           <span className="flex justify-center items-center font-bold text-white h-6 p-2 w-6 md:h-10 md:w-10 rounded-full bg-red-900">
    //             1
    //           </span>
    //           Création d'application IOS & Android
    //         </li>
    //       </ul>
    //     </p>
    //   </div>
    //   <div className="mt-8 md:w-56 h-64">
    //     <img
    //       className="rounded-2xl h-full w-full  object-cover "
    //       src="/assets/images/dev-mark.jpg"
    //       alt=""
    //     />
    //   </div>
    // </div>

    <div className="border-[0.001rem] border-gray-400 rounded-2xl h-[480px] w-[484px] md:w-full mx-auto flex flex-col card_gradient">
      <div className={`relative h-1/2 order-${ pos1 }`}>
        <h2 className="text-xl font-bold p-2">
          Développement <span className="text_gradient">Web & Mobile </span> sur mesure
        </h2>
        <ul className="mt-3 mb-2 p-2 flex flex-wrap gap-1 [&>li]:p-2 [&>li]:border [&>li]:rounded-2xl">
          <li>Sites vitrine</li>
          <li>App de gestion</li>
          <li>Application hybride</li>
          <li>E-commerce</li>
          <li>Blog</li>
        </ul>
        <button className="absolute bottom-2 right-2 bg-gray-900 text-white p-3 rounded-2xl">
          icone
        </button>
      </div>
      <div className={`relative h-1/2`}>
        <img
          className="rounded-2xl h-full w-full  object-cover"
          src="/assets/images/dev-mark.jpg"
          alt="service image"
        />
      </div>
    </div>
  );
}

export default ServiceCard;
