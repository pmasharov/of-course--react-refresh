import { MeetupItem } from "../MeetupItem";
import styles from "./styles.module.scss";

const MeetupList = ({ meetups }) => {
	return (
		<ul className={styles.list}>
			{meetups.map((meetup) => (
				<MeetupItem key={meetup.id} {...meetup} />
			))}
		</ul>
	);
};

export { MeetupList };
