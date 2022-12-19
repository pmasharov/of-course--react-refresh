import styles from "./styles.module.scss";

const Card = ({ children }) => {
	return <div className={styles.card}>{children}</div>;
};

export { Card };
