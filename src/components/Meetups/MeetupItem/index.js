import styles from "./styles.module.scss";
import { Card } from "components";
import { useContext } from "react";
import { FavoritesContext } from "store/favorites";

const MeetupItem = ({ id, imageSrc, title, address, description }) => {
	const favoritesCtx = useContext(FavoritesContext);
	const isFavorite = favoritesCtx.check(id);

	const toggleFavorite = (id) => {
		if (isFavorite) favoritesCtx.remove(id);
		else favoritesCtx.add({ id, imageSrc, title, address, description });
	};

	return (
		<li className={styles.item}>
			<Card>
				<div className={styles.image}>
					<img src={imageSrc} alt={title} />
				</div>
				<div className={styles.content}>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
				</div>
				<div className={styles.actions}>
					<button onClick={() => toggleFavorite(id)}>
						{isFavorite ? "Remove from favorites" : "Add to favorites"}
					</button>
				</div>
			</Card>
		</li>
	);
};

export { MeetupItem };
