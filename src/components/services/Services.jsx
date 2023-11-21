import "./services.scss";
import {motion} from "framer-motion";

const Services = () => {
		return (
				<motion.div className="services">
					<motion.div className="textContainer">
						<p>
							I focus on helping you brand grow
							<br/> and move forward
						</p>
						<hr />
					</motion.div>
					<motion.div className="titleContainer">
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
					<motion.div className="listContainer">
						<motion.div className="box" whileHover={{color:"white", borderRadius:"50px"}}>
							<h2>Branding</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								 Et reprehenderit commodi totam iure molestias quos illum dolorum nobis dolores dolor consequatur cum rem,
								 voluptas recusandae mollitia quo voluptate facilis soluta.</p>
									<button>Go</button>
						</motion.div>
						<motion.div className="box"  whileHover={{ color:"white",  borderRadius:"50px"}}>
							<h2>Branding</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								 Et reprehenderit commodi totam iure molestias quos illum dolorum nobis dolores dolor consequatur cum rem,
								 voluptas recusandae mollitia quo voluptate facilis soluta.</p>
									<button>Go</button>
						</motion.div>
						<motion.div className="box"  whileHover={{color:"white",  borderRadius:"50px"}}>
							<h2>Branding</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
								 Et reprehenderit commodi totam iure molestias quos illum dolorum nobis dolores dolor consequatur cum rem,
								 voluptas recusandae mollitia quo voluptate facilis soluta.</p>
									<button>Go</button>
						</motion.div>
						<motion.div className="box"  whileHover={{color:"white",  borderRadius:"50px"}}>
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