import { useState, createContext } from "react";

const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
	add: (meetup) => {},
	remove: (meetupId) => {},
	check: (meetupId) => {},
});

const FavoritesContextProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);

	const addFavorite = (meetup) => {
		setFavorites((prev) => prev.concat(meetup));
	};
	const removeFavorite = (meetupId) => {
		setFavorites((prev) => prev.filter((meetup) => meetup.id !== meetupId));
	};
	const checkIsFavorite = (meetupId) =>
		favorites.some((meetup) => meetup.id === meetupId);

	const context = {
		favorites,
		totalFavorites: favorites.length,
		add: addFavorite,
		remove: removeFavorite,
		check: checkIsFavorite,
	};

	return (
		<FavoritesContext.Provider value={context}>
			{children}
		</FavoritesContext.Provider>
	);
};

export { FavoritesContext, FavoritesContextProvider };
