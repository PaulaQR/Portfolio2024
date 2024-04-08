import "./services.scss";
import { useRef } from "react";
import { motion, useInView, } from "framer-motion";

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChikdren: 0.1,
		},
	},
};


const Services = () => {

	const ref = useRef();

	const isInView = useInView(ref, { margin: "-100px" });

	return (
		<motion.div
			className="services"
			variants={variants}
			initial="initial"
			//animate="animate"  
			// whileInView="animate"
			ref={ref}
			animate={"animate"}

		>
			<motion.div className="textContainer" variants={variants}>
				<p>
					Tengo conocimientos basicos en  programación, creando experiencias visuales llamatiivas y funcionales para los usuarios.
					<br />
				</p>
				<hr />
			</motion.div>
			<motion.div className="titleContainer" variants={variants}>
				<div className="title">
					<img src="/work.png" alt="Wallpaper set up" />
					<h1>
						<motion.b whileHover={{ color: "#0197af" }}> Diseño </motion.b> Atractivo,
					</h1>
				</div>
				<div className="title">
					<h1>
						<motion.b whileHover={{ color: "#0197af" }}> Funcional </motion.b> y Centrado	en el usuario
					</h1>
				</div>
			</motion.div>
			<motion.div className="listContainer" variants={variants}>
				<motion.div className="box" whileHover={{ color: "white", borderRadius: "50px" }}>
					<h2>Funcional</h2>
					<p>Poseo habilidades versátiles en áreas como desarrollo de software,
						diseño de productos y gestión de proyectos. Destaco por mi capacidad para trabajar en equipo,
						comunicarme eficazmente y resolver problemas de manera creativa.
						Mi enfoque en la mejora continua y el aprendizaje constante me permite mantenerme actualizado en mi campo.</p>
				</motion.div>
				<motion.div className="box" whileHover={{ color: "white", borderRadius: "50px" }}>
					<h2>Centrado al usuario</h2>
					<p>Me comprometo a comprender profundamente las necesidades y deseos de los usuarios finales y utilizar esa comprensión para informar el diseño y desarrollo de productos y servicios que realmente resuelvan problemas y agreguen valor.
						Identifico oportunidades para mejorar la experiencia del usuario y optimizar la usabilidad mediante métodos de investigación, pruebas de usabilidad y análisis de datos.</p>
				</motion.div>
				<motion.div className="box" whileHover={{ color: "white", borderRadius: "50px" }}>
					<h2>Branding</h2>
					<p> Tengo experiencia en desarrollo de identidades de marca sólidas
						mensajes claros y coherentes que resuenan con el público objetivo.
						A través de campañas creativas y estrategias de marketing innovadoras,
						contribuyo al crecimiento y éxito de diversas marcas. Además, estoy versado en diseño gráfico, gestión de redes sociales, SEO y publicidad digital.</p>

				</motion.div>
				<motion.div className="box" whileHover={{color: "white", borderRadius: "50px" }}>
					<h2>Metodologías Agiles</h2>
					<p>Soy experto en la ejecución eficiente de proyectos,
						combinando habilidades de gestión del tiempo, organización y liderazgo.
						He trabajado en entornos ágiles, utilizando metodologías como Scrum y Kanban para gestionar proyectos de manera flexible y adaptativa.
						Mi capacidad para tomar decisiones rápidas y mantener la calidad del trabajo bajo presión me ha permitido cumplir con los plazos y superar las expectativas del cliente.
					</p>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Services;