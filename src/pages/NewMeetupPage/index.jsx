import { NewMeetupForm } from "components";
import { useNavigate } from "react-router-dom";

const NewMeetupPage = () => {
	const navigate = useNavigate();

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
		)
			.then(() => {
				navigate("/", { replace: true });
			})
			.catch((e) => {
				console.error(e);
			});
	};

	return (
		<section>
			<h1>Add new meetup</h1>
			<NewMeetupForm onSave={saveMeetup} />
		</section>
	);
};

export { NewMeetupPage };
