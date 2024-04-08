import Test from "./Test";
import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor..";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Inicio">
        <Navbar />
        <Hero />
      </section>
      <section id="Servicios">
        <Parallax type="servicios" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portafolio" >
        <Parallax type="portafolio" />
      </section>
      <Portfolio />
      <section id="Contacto">
        <Contact />
      </section>
      {/* <Test />
    <Test /> */}
    </div>
  );
};

export default App;
