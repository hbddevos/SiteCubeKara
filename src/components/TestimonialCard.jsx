import { div } from "motion/react-client";
import React from "react";

export default function TestimonialCard() {
  return (
    // <div className="p-5 md:p-8 rounded-2xl mx-auto bg-[#004d4d14] drop-shadow-sm relative mb-12 mb:0">
    //   <div className="absolute -top-10 right-2 w-20 h-20 rounded-full border shpape_circle">
    //     <img
    //       className="w-full h-full object-cover"
    //       src="/assets/images/lara3d.png"
    //       alt=""
    //     />
    //   </div>
    //   <div className="">
    //     <div>Etoiles</div>
    //     <h6 className="font-bold mb-3">Author name</h6>
    //     <q className="italic">
    //       CUBE kara fourni d'excellents services et d'excellentes formations
    //     </q>
    //   </div>
    // </div>

    <div className="relative w-96 border flex-shrink-0 p-6 rounded-2xl bg-[#004d4d14] shadow-lg hover:shadow-2xl transition-shadow">
      <div className="absolute w-40 flex justify-center backdrop-blur-lg items-center bg-[#004d4d14] rounded-2xl left-1/2 -translate-x-1/2 -top-8 py-1 shadow-lg">
        <div className="mr-1">
          <img
            className="h-16 w-16 rounded-full object-cover "
            src="/assets/images/img.jpg"
            alt=""
          />
        </div>
        <div className="h-16 w-16 rounded-full flex justify-center items-center text-4xl">
          💌
        </div>
      </div>
      <div className="mt-6 mb-3">stars</div>
      <p className="mb-3 italic">
        <q>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, deleniti
          saepe. Amet nostrum maxime illo ducimus. Sapiente autem aut eum
          tempora beatae ut ab
        </q>
      </p>
      <h4 className="mb-3">NOM</h4>
      <h5>taf</h5>
    </div>
  );
}
