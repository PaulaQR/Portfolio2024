import { useRef } from "react";
import "./contact.scss";
import { animate, motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';
import	{ useState } from "react";


const variants = {

	initial: {
		y: 500,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			straggerChildren: "0.1",
		},
	},
};

const Contact = () => {

	const ref = useRef();
	const formRef = useRef();
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const isIview = useInView(ref, { magin: "-100px" });

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			'service_jc9aovt',
			'template_dx72pba',
			formRef.current,
			'Bxl6dvfOuWCMRTBmZ'
		)
			.then(
				(result) => {
					setSuccess(true);
				},
				(error) => {
					setError(true);
				}
			);
	};

	return (
		<motion.div
			ref={ref}
			className="contact" variants={variants} initial="initial" whileInView="animate">
			<motion.div className="textContainer" variants={variants}>
				<motion.h1 variants={variants}>Trabajemos Juntos</motion.h1>
				<motion.div className="item">
					<h2>Correo</h2>
					<span>mquinterorodriguez22@gmail.com</span>
				</motion.div>
				<motion.div className="item">
					<h2>Pais</h2>
					<span>Colombia - Bogota D.C</span>
				</motion.div>
				<motion.div className="item">
					<h2>Telefono</h2>
					<span>+57 321-992-37-21</span>
				</motion.div>
			</motion.div>
			<div className="formContainer">
				<motion.div className="logoSvg"
					initial={{ opacity: 1 }}
					whileInView={{ opacity: 0 }}
					transition={{ delay: 3, duration: 1 }} >
					<svg
						width="600" height="300" viewBox="0 0 301 230" fill="none" xmlns="http://www.w3.org/2000/svg"
					>
						<motion.path
							strokeWidth={0.2}
							fill="none"
							initial={{ pathLength: 0 }}
							animate={isIview && { pathLength: 1 }}
							transition={{ duration: 3 }}
							d="M146.293 42.9236C146.859 42.4354 147.698 42.4382 148.26 42.9302L253.215 134.716C253.902 135.316 253.898 136.385 253.208 136.981L147.523 228.171C146.958 228.659 146.119 228.656 145.556 228.164L40.5884 136.378C39.9019 135.778 39.9055 134.709 40.596 134.113L146.293 42.9236Z" stroke="white" />
						<motion.path
							strokeWidth={0.2}
							fill="none"
							initial={{ pathLength: 0 }}
							animate={isIview && { pathLength: 1 }}
							transition={{ duration: 3 }}
							d="M290.022 9.58458C291.133 9.34613 292.095 10.3803 291.777 11.4707L257.47 129.231C257.164 130.285 255.866 130.663 255.041 129.939L153.935 41.2579C153.008 40.4448 153.403 38.9226 154.609 38.6637L290.022 9.58458Z" stroke="white" />
						<motion.path

							d="M139.327 38.6029C140.527 38.8739 140.909 40.3955 139.978 41.2006L38.5622 128.919C37.7364 129.633 36.4485 129.254 36.1415 128.206L1.43554 9.75668C1.11395 8.65912 2.08972 7.61986 3.20535 7.87173L139.327 38.6029Z" stroke="white" />
						<motion.path
							strokeWidth={0.2}
							fill="none"
							initial={{ pathLength: 0 }}
							animate={isIview && { pathLength: 1 }}
							transition={{ duration: 3 }}
							d="M53.1534 138.708C52.0747 137.81 52.7096 136.055 54.113 136.055H239.545C240.958 136.055 241.587 137.831 240.489 138.72L146.525 214.846C145.968 215.297 145.171 215.292 144.621 214.834L53.1534 138.708Z" stroke="white" />
						<motion.path
							strokeWidth={0.2}
							fill="none"
							initial={{ pathLength: 0 }}
							animate={isIview && { pathLength: 1 }}
							transition={{ duration: 3 }}
							d="M274.544 24.3246C275.692 24.0367 276.722 25.0868 276.376 26.193L261.622 73.385C261.283 74.4676 259.875 74.7933 259.072 73.9747L224.846 39.0663C224.043 38.2477 224.439 36.8899 225.563 36.6082L274.544 24.3246Z" stroke="white" />
					</svg>

				</motion.div>
				<motion.form
					ref={formRef}
					onSubmit={sendEmail}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 4, duration: 1 }} >
					<input type="text" required placeholder="Nombre" name="name" />
					<input type="email" required placeholder="Email" name="email" />
					<textarea rows={8} placeholder="Dejame un mensaje" name="message" />
					<button>Enviar</button>
					{error && "Error"}
					{success && "Success"}
				</motion.form>
			</div>
		</motion.div>
	);
};

export default Contact;