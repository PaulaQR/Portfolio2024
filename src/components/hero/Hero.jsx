import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity
		}
	},
};

const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-220%",
		transition: {
			repeat: Infinity,
			repeatType: "mirror",
			duration: 20,
		},
	},
};

const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="textContainer"
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					<motion.h2 variants={textVariants}>PAUPIXEL</motion.h2>
					<motion.h1 variants={textVariants}>DISEÑADORA UX | UI</motion.h1>
					<motion.div variants={textVariants} className="buttons">
						<motion.a href="#Portafolio" variants={textVariants}>
							<motion.button variants={textVariants}>Proyectos</motion.button></motion.a>
							<motion.a href="#Contacto" variants={textVariants}>
						<motion.button variants={textVariants}>Contactame</motion.button></motion.a>
					</motion.div>
					<motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll" />
				</motion.div>
			</div>0
			<motion.div
				className="slidingTextContainer"
				variants={sliderVariants}
				initial="initial"
				animate="animate"
			>
			 DISEÑADORA UX | UI  
			</motion.div>
			<div className="imageContainer">
				<img src="/hero.png" alt="Imagen Home" />
			</div>
		</div>
	)
}

export default Hero