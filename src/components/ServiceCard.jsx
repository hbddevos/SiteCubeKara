import { div } from "motion/react-client";
import React from "react";

function ServiceCard({ ordre }) {
  // let pos1 = ordre % 2 == 0 ? 2 : 1;
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

    <div className="rounded-2xl p-6 md:pt-8 lg:pt-10 pb-4 relative shadow-lg mx-auto flex flex-col bg-[#004d4d14]">
      <div className={` `}>
        <h2 className="subtitle">
          Développement <span className="text_gradient">Web & Mobile </span> sur
          mesure
        </h2>
        <ul className="px-2 mt-3 mb-2 flex flex-wrap gap-1 [&>li]:p-2 [&>li]:border [&>li]:border-[#008080] [&>li]:rounded-2xl">
          <li>Sites vitrine</li>
          <li>App de gestion</li>
          <li>Application hybride</li>
          <li>E-commerce</li>
          <li>Blog</li>
        </ul>
      </div>
        <div className="flex items-end justify-end mt-5">
        <button className="h-20 w-20 rounded-full flex items-center justify-center bg-[#008080] text-white p-2">
          icone
        </button>
        </div>
      {/* <div className={`relative h-1/2`}>
        <img
          className="rounded-2xl h-full w-full  object-cover"
          src="/assets/images/dev-mark.jpg"
          alt="service image"
        />
      </div> */}
    </div>
  );
}

export default ServiceCard;
