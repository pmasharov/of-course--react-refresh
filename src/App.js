import { Route, Routes } from "react-router-dom";
import { Layout } from "components";
import {
	AllMeetupsPage,
	FavoritesPage,
	NewMeetupPage,
	NotFoundPage,
} from "pages";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<AllMeetupsPage />} />
				<Route path="favorites" element={<FavoritesPage />} />
				<Route path="new-meetup" element={<NewMeetupPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};

export default App;
