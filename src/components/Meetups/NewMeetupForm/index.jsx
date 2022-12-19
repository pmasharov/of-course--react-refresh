import { useRef } from "react";
import styles from "./styles.module.scss";
import { Card } from "components";

const NewMeetupForm = ({ onSave }) => {
	const titleRef = useRef();
	const imageSrcRef = useRef();
	const addressRef = useRef();
	const descriptionRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const newMeetupData = {
			title: titleRef.current.value,
			imageSrc: imageSrcRef.current.value,
			address: addressRef.current.value,
			description: descriptionRef.current.value,
		};

		onSave(newMeetupData);
	};

	return (
		<Card>
			<form className={styles.form} onSubmit={submitHandler}>
				<label>
					Title
					<input type="text" required ref={titleRef} />
				</label>
				<label>
					Image source
					<input type="text" required ref={imageSrcRef} />
				</label>
				<label>
					Address
					<input type="text" required ref={addressRef} />
				</label>
				<label>
					Description
					<textarea required rows={5} ref={descriptionRef} />
				</label>
				<div className={styles.actions}>
					<button>Add meetup</button>
				</div>
			</form>
		</Card>
	);
};

export { NewMeetupForm };
