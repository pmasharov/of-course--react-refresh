import { NewMeetupForm } from "components";

const NewMeetupPage = () => {
	const saveMeetup = (meetupData) => {
		fetch(
			"https://of-course--react-refresh-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
			{
				method: "POST",
				body: JSON.stringify(meetupData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	};

	return (
		<section>
			<h1>Add new meetup</h1>
			<NewMeetupForm onSave={saveMeetup} />
		</section>
	);
};

export { NewMeetupPage };
