import "./index.css";
import ServiceCard from "./components/ServiceCard.jsx";
import FormationCard from "./components/FormationCard.jsx";
import TestimonialCard from "./components/TestimonialCard.jsx";
import Accordion from "./components/Accordion.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { motion } from "motion/react";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Partenaires */}
      <motion.section 
        className="relative px-5 py-12 md:py-16 flex overflow-scroll [&>img]:h-28 gap-x-4 justify-between items-center bg-[#004d4d14] rounded-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {[
          { src: "/assets/Logo_CUBE.png", alt: "Logo_CUBE" },
          { src: "/assets/Logo_Prime_Classpng.png", alt: "Logo_Prime_Class" },
          { src: "/assets/CUBE_dev.jpeg.jpg", alt: "CUBE_dev" }
        ].map((logo, index) => (
          <motion.img
            key={logo.alt}
            className=""
            src={logo.src}
            alt={logo.alt}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          />
        ))}
      </motion.section>

      {/* A-propos */}
      <section id="about" className="py-10 md:py-16">
        <div
          className="flex items-start md:items-center justify-around md:flex-row
            flex-col gap-2 mb-10 mt-5"
        >
          <motion.h2
            className="title text-left tracking-tighter mt-5 md:mb-14 flex items-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="block p-2">A propos</span>
            <motion.div 
              className="ml-10 w-16 h-1 bg-white md:inline-block hidden border"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            ></motion.div>
          </motion.h2>
          <motion.p 
            className="md:w-1/2 p-2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            quia, ipsa quo ex facere architecto perspiciatis? Aliquam, vel
            maiores explicabo amet perspiciatis consectetur provident iste.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-2 px-2">
          <motion.div
            className="w-full h-full mx-auto rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <video
              className="w-full h-full mx-auto rounded-lg"
              controls
              autoPlay
            >
              <source src="/assets/rebour.mp4" />
            </video>
          </motion.div>

          <Accordion />
        </div>
      </section>

      {/* Services */}
      <section className="mb-16 py-10 md:py-16">
        <div className="mb-10">
          <motion.h2 
            className="title mb-10"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Nos <span>services</span>
          </motion.h2>
          <motion.p 
            className="px-2 content mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nous avons les meilleurs offres de services sur le marché et sommes
            disponibles à tout moment avec vous.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 mx-auto px-2">
          <ServiceCard ordre="1" />
          <ServiceCard ordre="2" />
          <ServiceCard ordre="3" />
        </div>
      </section>

      {/* Formations */}
      <section className="py-10 md:py-16">
        <div className="mb-16">
          <motion.h2 
            className="title mb-8 px-2"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Nos <span className="">formations</span>
          </motion.h2>
          <motion.h4 
            className="subtitle mb-10 px-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            🌟 <span className="text_gradient">Transformez</span> votre avenir avec nos formations expertes ! 🌟
          </motion.h4>
          <motion.p 
            className="px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Vous rêvez de maîtriser les compétences les plus demandées dans le
            domaine du numérique ? Que ce soit pour devenir un as du
            développement web, créer des applications mobiles innovantes, ou
            simplement vous initier aux outils informatiques essentiels, CUBE
            est là pour vous guider à chaque étape.
          </motion.p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto p-2">
          <FormationCard />
          <FormationCard />
          <FormationCard />
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-10 md:py-16">
        <motion.h2 
          className="title pb-12 px-2"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Témoignages
        </motion.h2>
        <motion.div 
          className="flex justify-between items-center py-16 overflow-x-scroll gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </motion.div>
      </section>
    </>
  );
}

export default App;
