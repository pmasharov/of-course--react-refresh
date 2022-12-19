import { Outlet } from "react-router-dom";
import { Navigation } from "components";
import styles from "./styles.module.scss";

const Layout = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.logo}>Meetups</div>
				<Navigation />
			</header>
			<main className={styles.main}>
				<Outlet />
			</main>
		</>
	);
};

export { Layout };
