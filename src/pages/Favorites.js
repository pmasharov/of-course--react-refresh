import { MeetupList } from "components";
import { useContext } from "react";
import { FavoritesContext } from "store/favorites";

const FavoritesPage = () => {
	const favoritesCtx = useContext(FavoritesContext);

	const content =
		favoritesCtx.totalFavorites === 0 ? (
			<p>You got no favorite meetups yet</p>
		) : (
			<MeetupList meetups={favoritesCtx.favorites} />
		);

	return (
		<section>
			<h1>Favorites</h1>
			{content}
		</section>
	);
};

export { FavoritesPage };
