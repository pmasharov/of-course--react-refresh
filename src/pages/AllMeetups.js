import { MeetupList } from "components";
import { useEffect, useState } from "react";

const useFetchMeetups = () => {
	const [meetups, setMeetups] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			"https://of-course--react-refresh-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
		)
			.then((response) => response.json())
			.then((meetupsObj) => {
				const meetupsList = [];
				for (const meetupId in meetupsObj) {
					meetupsList.push({
						id: meetupId,
						...meetupsObj[meetupId],
					});
				}
				return meetupsList;
			})
			.then((meetupsList) => setMeetups(meetupsList))
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return [meetups, isLoading];
};

const AllMeetupsPage = () => {
	const [meetups, isLoading] = useFetchMeetups();

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<>
			All meetups
			<MeetupList meetups={meetups} />
		</>
	);
};

export { AllMeetupsPage };
