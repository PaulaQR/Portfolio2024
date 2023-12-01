import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
	return (
		<div className="navbar">
			{/*Sidebar*/}
			<Sidebar />
			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}>PAUPIXEL</motion.span>
				<div className="social">
					<a href="#"><img src="/facebook.png" alt="logo facebook" /> </a>
					<a href="#"><img src="/instagram.png" alt="logo instagram" /> </a>
					<a href="#"><img src="/linkedin.png" altVB="logo linkedin" /> </a>
					<a href="#"><img src="/behance.png" alt="logo behance" /> </a>
				</div>
			</div>
		</div>
	)
}

export default Navbar