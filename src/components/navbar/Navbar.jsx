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
					<a href="https://www.facebook.com/profile.php?id=100049483710983&sk=photos"><img src="/facebook.png" alt="logo facebook" /> </a>
					<a href="https://www.instagram.com/pau.pixel/?hl=es"><img src="/instagram.png" alt="logo instagram" /> </a>
					<a href="https://www.linkedin.com/in/paulaquinteror/"><img src="/linkedin.png" alt="logo linkedin" /> </a>
					<a href="https://www.behance.net/marapquinter1"><img src="/behance.png" alt="logo behance" /> </a>
				</div>
			</div>
		</div>
	)
}

export default Navbar