import "./contact.scss"

const Contact = () => {
		return (
				<div className="contact">
				<div className="textContainer">
					<h1>¡Comunicate conmigo!</h1>
				<div className="item">
					<h2>Email</h2>
					<span>mquinterorodriguez22@gmail.com</span>
					</div>
					<div className="item">
						<h2>Ciudad</h2>
						<span>Bogotá, Colombia</span>
				</div>
				<div className="item">
					<h2>Telefono</h2>
					<span>+57 321 992 37 21</span>
				</div>
					</div>
				<div className="formContainer">
					<form>
						<input type="text" required placeholder="Nombre" />
						<input type="text"  required placeholder="Email" />
						<textarea rows={8} placeholder="Mensaje"></textarea>
						<button>Enviar</button>
					</form>
					</div>	
				</div>
		);
};

export default Contact