import { div } from "motion/react-client";
import React from "react";

function FormationCard({ title, description, image, link }) {
  return (
    // <div className="relative">
    //   <div className={`rounded-lg bg-[url('/assets/images/${ image }')] bg-cover bg-center absolute inset-0`}>
    //   {/* <img className="w-full h-full object-cover" src={`/assets/images/${ image }`} alt="" /> */}
    //   </div>
    //   <div className="absolute inset-0 bg-black bg-opacity-65 rounded-lg z-20"></div>
    //   <div className="relative z-40 p-6 text-white">
    //     <h3 className="text-left font-bold text-3xl mb-3">{title}</h3>
    //     <p className="mt-2 text-left text-xl">{description}</p>
    //     <a href={link} className="inline-block mt-4 py-3 px-6 rounded-2xl">
    //       Nous contacter
    //     </a>
    //   </div>
    // </div>
    // <div className="w-full border h-80 md:h-80 rounded-2xl text-white relative z-10 bg-[url(/assets/images/lara3d.png)] card_gradient bg-no-repeat bg-cover bg-center ">
    // <div className="w-full flex border h-80 md:h-80 lg:h-96 rounded-2xl text-white relative z-10 bg- card_gradient">
    //   <div className="sm:w-1/2 -z-10 h-full absolute sm:static inset-0">
    //     <img
    //       className="h-full object-cover aspect-square md:object-right"
    //       src="/assets/images/lara3d.png"
    //       alt=""
    //     />
    //   </div>
    //   {/* <div className="absolute inset-0 z-20  backdrop-blur-sm rounded-2xl sm:right-0 sm:top-0 sm:w-1/2 lg:w-2/4 p-5 "></div> */}
    //   <div className="bg-black bg-opacity-80  rounded-2xl sm:right-0 sm:top-0 sm:w-2/3 lg:w-3/4 p-5">
    //     <div className="flex justify-between items-center flex-wrap">
    //       <h4 className="mb-3">
    //         <span className="border rounded-xl p-1 mr-2">8séance</span>
    //         <span className="border rounded-xl p-1 mr-2">30000fcfa</span>
    //         <span className="border rounded-xl p-1">30h</span>
    //       </h4>
    //       <button className="border rounded-xl p-2">icon</button>
    //     </div>
    //     <h2 className="text-3xl font-bold">Title</h2>
    //     <h4 className="mt-5 mb-5">
    //       Objectif : Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //       Non doloribus est, ut totam deleniti commodi{" "}
    //     </h4>
    //     <h4>
    //       Prérequis: Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //       Hic eum ab non distinctio! Corrupti perferendis totam ex accusamus
    //       veritatis sit?
    //     </h4>
    //   </div>
    // </div>

    <div className="flex flex-col rounded-2xl shadow-md bg-[#004d4d14]">
      <div className="h-60 w-full flex justify-center items-center [&>img]:hover:scale-125 bg-gradient-to-br from-[#008080] to-[#004d4d14] rounded-t-2xl">
        <img
          className="h-full object-cover transition"
          src="/assets/images/lara3d.png"
          alt=""
        />
      </div>
      <div className="rounded-2xl w-full p-8">
        <div className="flex justify-between items-center flex-wrap">
          <h4 className="mb-3">
            <span className="border border-[#008080] rounded-xl p-1 mr-2">8séance</span>
            <span className="border border-[#008080] rounded-xl p-1 mr-2">30000fcfa</span>
            <span className="border border-[#008080] rounded-xl p-1">30h</span>
          </h4>
          <button className="border border-[#008080] rounded-xl p-2">icon</button>
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
      </div>
    </div>
  );
}

export default FormationCard;
