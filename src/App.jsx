import "./index.css";
import ServiceCard from "./components/ServiceCard.jsx";
import FormationCard from "./components/FormationCard.jsx";
import TestimonialCard from "./components/TestimonialCard.jsx";
import Accordion from "./components/Accordion.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

function App() {

  
  // window.addEventListener('scroll', () => {
  //   console.log(window.scrollY)
  // })

  return (
    <>
      <div className="relative">
        {/* Header */}
        <Header />

        {/* Hero */}
        <Hero />

        {/* Partenaires */}
        <section className="mt-20 mb-10 px-5 flex  overflow-x-scroll [&>img]:h-28 gap-x-4 justify-between items-center bg-gray-100 py-5">
          <img className="" src="/assets/Logo_CUBE.png" alt="Logo_CUBE" />
          <img className="" src="/assets/Logo_Prime_Classpng.png" alt="Logo_Prime_Class" />
          <img className="" src="/assets/CUBE_dev.jpeg.jpg" alt="CUBE_dev" />
        </section>

        {/* A-propos */}
        <section id="about" className="">
          <div className="flex items-center justify-around gap-2 mb-10 mt-5">
            <h2
              className="title relative
            mt-5 mb-14
            flex items-center
            "
            >
              <span className="block p-2">A propos</span>
              <div className="ml-10 w-16 h-1 bg-white md:inline-block  hidden border"></div>
            </h2>
            <p className="w-1/2 p-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              quia, ipsa quo ex facere architecto perspiciatis? Aliquam, vel
              maiores explicabo amet perspiciatis consectetur provident iste.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            <video
              className="w-full  h-full mx-auto rounded-lg"
              controls
              autoPlay
              
            >
              <source src="/assets/rebour.mp4" />
            </video>

            <Accordion />
          </div>
        </section>

        {/* Services */}
        <section className="mt-5 mb-16">
          <div className="mb-10">
            <h2 className="title2 mb-5 px-2">
              Nos{" "}
              <span className="bg-gradient-to-r from-red-700 to-blue-800 text-transparent bg-clip-text">
                services
              </span>
            </h2>
            <p className="px-2 content mb-5">
              Nous avons les meilleurs offres de services sur le marché et
              sommes disponibles à tout moment avec vous.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-2 mx-auto px-2">
            <ServiceCard ordre="1" />
            <ServiceCard ordre="2" />
            <ServiceCard ordre="3" />
            {/* <ServiceCard /> */}
          </div>
        </section>

        {/* Formations */}
        <section className="mt-5">
          <div className="mb-16">
            <h2 className="title2 mb-5 px-2">
              Nos <span className="text_gradient">formations</span>
            </h2>
            <h4 className="subtitle mb-5 px-2">
              🌟 Transformez votre avenir avec nos formations expertes ! 🌟
            </h4>
            <p className="px-2">
              Vous rêvez de maîtriser les compétences les plus demandées dans le
              domaine du numérique ? Que ce soit pour devenir un as du
              développement web, créer des applications mobiles innovantes, ou
              simplement vous initier aux outils informatiques essentiels, CUBE
              est là pour vous guider à chaque étape.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto p-2">
            <FormationCard />
            <FormationCard />
          </div>
        </section>

        {/* Testimonial */}
        <section className="mt-12">
          <h2 className="title2 mb-10 px-2">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-2 lg:grid-cols-3 p-2">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
