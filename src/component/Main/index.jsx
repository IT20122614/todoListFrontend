import styles from "./styles.module.css";

const Main = () => {
	const emails = window.localStorage.getItem("token");
	console.log(emails);
	const handleLogout = () => {
		// localStorage.removeItem("token");
		// window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>

			<div>
				<h1>
					Email
				</h1>
				<p>{emails}</p>
			</div>
		</div>
	);
};

export default Main;
