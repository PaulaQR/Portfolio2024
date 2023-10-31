import "./Hero.scss"

const Hero = () => {
		return (
				<div className="hero">
					<div	className="wrapper">
					<div className="textContainer">
						<h2>PAULA QUINTERO</h2>
						<h1>Web designer</h1>
						<div className="buttons">
							<button>See the latest Works</button>
							<button>Contact Me</button>
							</div>
						</div>
						<img src="/scroll.png" alt="scroll" />
					</div>
					<div className="imageContainer">
						<img	src="/hero.png" alt="Imagen Home" />
					</div>
					</div>
		)
}

export default Hero