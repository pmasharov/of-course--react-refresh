import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<li>
				<Link to={"/"}>All meetups</Link>
			</li>
			<li>
				<Link to={"/favorites"}>Favorites</Link>
			</li>
			<li>
				<Link to={"new-meetup"}>New meetup</Link>
			</li>
		</nav>
	);
};

export { Navigation };
