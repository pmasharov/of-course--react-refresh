import { MeetupList } from "components";
import { useEffect, useState } from "react";

const AllMeetupsPage = () => {
	const [meetups, setMeetups] = useState([]);

	useEffect(() => {
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
			.then((meetupsList) => setMeetups(meetupsList));
	}, []);

	return (
		<>
			All meetups
			<MeetupList meetups={meetups} />
		</>
	);
};

export { AllMeetupsPage };
