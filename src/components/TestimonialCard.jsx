import React from "react";

export default function TestimonialCard() {
  return (
    <div className="w-2/3 p-2 rounded-2xl mx-auto md:w-1/3 shadow-inner shado shadow-white button drop-shadow-sm relative">
      <div className="absolute -top-10 right-2 w-20 h-20 rounded-full border shpape_circle button">
        <img
          className="w-full h-full object-cover"
          src="../src/assets/images/lara3d.png"
          alt=""
        />
      </div>
      <div className="">
        <div>Etoiles</div>
        <h6 className="font-bold italic mb-3">Author name</h6>
        <q>
          CUBE kara fourni d'excellents services et d'excellentes formations
        </q>
      </div>
    </div>
  );
}
