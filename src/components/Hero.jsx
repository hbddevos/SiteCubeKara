import React from 'react'

export default function Hero() {
  return (
    <section className="md:flex justify-between items-center md:gap-5">
          <div className="md:w-1/2">
            <h1 className="title mt-5 p-5 leading-none uppercase">
              De <span className="text_gradient">l'idée</span> au monde, nous
              entrepreunons <span className="text_gradient">l'impossible</span>
              {/* Nous Créons des <span className="text_gradient">solutions</span>{" "}
              sur mésure pour vous et pour votre entreprise */}
            </h1>
            <p className="p-5 content">
              Nous sommes une équipe spécialisée dans la conceprion de solution
              sur mésure pour toute personne et pour tout type d'entreprise.{" "}
              <br />
              Nous Intervenons dans tout ce qui est accompagnement d'entreprise
              et de formation a l'utlisation es outils technologiques
            </p>{" "}
            <br />
            <a
              href="#"
              className="p-5 button text-white text-xl rounded-2xl m-5"
            >
              Nous contacter
            </a>
          </div>
          <div className="w-full md:w-1/2 backdrop-blur-xl bg-transparent mt-8 rounded-2xl mx-5">
            <img
              className="w-full h-full object-cover"
              src="/assets/images/dev-mark.png"
              alt="hero-img"
            />
          </div>
        </section>
  )
}
