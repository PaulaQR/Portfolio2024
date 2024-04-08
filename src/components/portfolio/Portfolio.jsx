import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Tikipal",
        img: "/1.png",
        desc: "Actualmente trabajo con el equipo de Tikipal como Diseñadora UX UI y creadora de contenido para sus Redes sociales",
        href: "https://tikipal.com.co/",
    },
    {
        id: 2,
        title: "Bootcamp Laboratoria",
        img: "/2.png",
        desc: "Estuve  6 meses  en el Bootcamp de Laboratoria, donde aprendí a programar en HTML, CSS, JavaScript, React, Node.js, Firebase, Git, GitHub, entre otros.",
        href: "https://www.laboratoria.la/",
    },
    {
        id: 3,
        title: "CoderHouse",
        img: "/3.png",
        desc: "Fue un curso que realicé en coderhouse, donde aprendí a diseñar una app en Figma,  y a crear un prototipo de alta fidelidad. Además terminé toda la carrera de diseño UX/UI.",
        href: "https://www.coderhouse.com/",
    },
    {
        id: 4,
        title: "Panaderia | Sass | CoderHouse",
        img: "/4.png",
        desc: "Curso que hace parte de la carrera de coderhouse, donde aprendí a crear una página web con Sass, y a utilizar sus diferentes funcionalidades.",
        href: "https://panaderiacol.netlify.app/",
    },
    
];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref} >
                        <img    src={item.img} alt="" />
                    </div>
                    <img src={item.img} alt="" />
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.href} target="_blank" rel="noopener noreferrer"><button>Ver</button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Trabajos Destacados</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>

    );
};

export default Portfolio 