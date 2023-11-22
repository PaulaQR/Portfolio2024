import "./services.scss";
import {motion} from "framer-motion";

const variants = {
	initial:{
		x:-500,
		y:100,
		opacuty:0
	},
	animate:{
		x:0,
		opacity: 1,
		y:0,
		transition:{
			duration:1,
			staggerChikdren:0.1,
	 },
 },
};


const Services = () => {
		return (
				<motion.div className="services" variants={variants} initial="initial" animate="animate" >
					<motion.div className="textContainer" variants={variants}>
						<p>
							I focus on helping you brand grow
							<br/> and move forward
						</p>
						<hr />
					</motion.div>
					<motion.div className="titleContainer" variants={variants}>
						<div className="title">
							<img src="/work.png" alt="Wallpaper set up" />
							<h1>
								<b>Unique</b> Ideas
							</h1>
							</div>
							<div className="title">
							<h1>
								<b>For You</b> Business.
							</h1>
							<button>WHAT WE DO?</button>
						</div>
						</motion.div>
					<motion.div className="listContainer" variants={variants}>
						<motion.div className="box" whileHover={{backgroundColor:"#e81ea483", color:"white", borderRadius:"50px"}}>
							<h2>Branding</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								 Et reprehenderit commodi totam iure molestias quos illum dolorum nobis dolores dolor consequatur cum rem,
								 voluptas recusandae mollitia quo voluptate facilis soluta.</p>
									<button>Go</button>
						</motion.div>
						<motion.div className="box"  whileHover={{backgroundColor:"#e81ea483",  color:"white",  borderRadius:"50px"}}>
							<h2>Branding</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								 Et reprehenderit commodi totam iure molestias quos illum dolorum nobis dolores dolor consequatur cum rem,
								 voluptas recusandae mollitia quo voluptate facilis soluta.</p>
									<button>Go</button>
						</motion.div>
						<motion.div className="box"  whileHover={{backgroundColor:"#e81ea483", color:"white",  borderRadius:"50px"}}>
							<h2>Branding</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								 Et reprehenderit commodi totam iure molestias quos illum dolorum nobis dolores dolor consequatur cum rem,
								 voluptas recusandae mollitia quo voluptate facilis soluta.</p>
									<button>Go</button>
						</motion.div>
						<motion.div className="box"  whileHover={{backgroundColor:"#e81ea483", color:"white",  borderRadius:"50px"}}>
							<h2>Branding</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								 Et reprehenderit commodi totam iure molestias quos illum dolorum nobis dolores dolor consequatur cum rem,
								 voluptas recusandae mollitia quo voluptate facilis soluta.</p>
									<button>Go</button>
						</motion.div>
					</motion.div>
					</motion.div>
		)
}

export default Services