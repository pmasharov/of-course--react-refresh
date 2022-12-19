import styles from "./styles.module.scss";
import { Card } from "components";

const MeetupItem = ({ imageSrc, title, address, description }) => {
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
					<button>To favorites</button>
				</div>
			</Card>
		</li>
	);
};

export { MeetupItem };
