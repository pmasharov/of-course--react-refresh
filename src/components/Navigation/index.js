import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "store/favorites";
import styles from "./styles.module.scss";

const Navigation = () => {
	const favoritesCtx = useContext(FavoritesContext);

	return (
		<nav className={styles.navigation}>
			<ul>
				<li>
					<Link to={"/"}>All meetups</Link>
				</li>
				<li>
					<Link to={"new-meetup"}>Add new meetup</Link>
				</li>
				<li>
					<Link
						to={"favorites"}
						className={styles.withBadge}
						data-count={favoritesCtx.totalFavorites}
					>
						Favorites
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export { Navigation };
