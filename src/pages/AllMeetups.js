import { MeetupList } from "components";
const meetups = [
	{
		id: "m1",
		title: "This is a first meetup",
		imageSrc:
			"https://static.nationalgeographic.co.uk/files/styles/image_3200/public/warsawhero.jpg?w=1600&h=1067&q=100",
		address: "street 3, 12345 Meetup City",
		description:
			"This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
	},
	{
		id: "m2",
		title: "This is a second meetup",
		imageSrc:
			"https://italiantripabroad.it/Blog/wp-content/uploads/2020/12/Warsaw-in-winter-Christmas-Market-of-Warsaw-Square.jpg",
		address: "street 5, 12345 Meetup City",
		description:
			"This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
	},
];

const AllMeetupsPage = () => {
	return (
		<>
			All meetups
			<MeetupList meetups={meetups} />
		</>
	);
};

export { AllMeetupsPage };
