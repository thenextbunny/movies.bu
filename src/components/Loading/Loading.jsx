import styles from "./Loading.module.css";

import Logo from "../../assets/logo.svg";

const Loading = () => {
	return (
		<div className={styles.loading}>
			<img src={Logo} alt="movies.bu" />
			<p>Loading...</p>
		</div>
	);
};

export default Loading;
