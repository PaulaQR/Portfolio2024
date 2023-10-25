import Links from "./links/Links";
import "./sidebar.scss"
import ToggleButton from "./toggleButton/toggleButton";

function Sidebar() {
	return <div className="sidebar">
		<div className="bg">
			<Links />
		</div>
		<ToggleButton />
	</div>;

}

export default Sidebar;