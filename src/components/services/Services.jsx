import "./services.scss";
import	{ useRef } from "react";
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
						<motion.b whileHover={{color:"#0197af"}}> Diseño </motion.b> atractivo,
					</h1>
				</div>
				<div className="title">
					<h1>
						<motion.b whileHover={{color:"#0197af"}}> funcional </motion.b> y centrado	en el usuario
					</h1>
					<button>¿Cómo?</button>
				</div>
			</motion.div>
			<motion.div className="listContainer" variants={variants}>
				<motion.div className="box" whileHover={{ backgroundColor: "#e81ea483", color: "white", borderRadius: "50px" }}>
					<h2>Branding</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Et reprehenderit commodi totam iure molestias quos illum dolorum nobis dolores dolor consequatur cum rem,
						voluptas recusandae mollitia quo voluptate facilis soluta.</p>
					<button>Go</button>
				</motion.div>
				<motion.div className="box" whileHover={{ backgroundColor: "#e81ea483", color: "white", borderRadius: "50px" }}>
					<h2>Branding</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Et reprehenderit commodi totam iure molestias quos illum dolorum nobis dolores dolor consequatur cum rem,
						voluptas recusandae mollitia quo voluptate facilis soluta.</p>
					<button>Go</button>
				</motion.div>
				<motion.div className="box" whileHover={{ backgroundColor: "#e81ea483", color: "white", borderRadius: "50px" }}>
					<h2>Branding</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Et reprehenderit commodi totam iure molestias quos illum dolorum nobis dolores dolor consequatur cum rem,
						voluptas recusandae mollitia quo voluptate facilis soluta.</p>
					<button>Go</button>
				</motion.div>
				<motion.div className="box" whileHover={{ backgroundColor: "#e81ea483", color: "white", borderRadius: "50px" }}>
					<h2>Branding</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Et reprehenderit commodi totam iure molestias quos illum dolorum nobis dolores dolor consequatur cum rem,
						voluptas recusandae mollitia quo voluptate facilis soluta.</p>
					<button>Go</button>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}; 

export default Services;