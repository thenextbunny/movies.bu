import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// Icons
import { BiSearchAlt2 } from "react-icons/bi";
import Logo from "../../assets/logo.svg";

import styles from "./NavBar.module.css";

const NavBar = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate(); // Redirecionamento

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!search) return;

		navigate(`/movies.bu/search?q=${search}`);
		setSearch("");
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link to="/movies.bu/">
						<img src={Logo} alt="" />
						movies.bu
					</Link>
				</div>
				<form onSubmit={handleSubmit}>
					<input type="text" name="search" id="search" placeholder="Find a movie" onChange={(event) => setSearch(event.target.value)} value={search} />
					<button type="submit">
						<BiSearchAlt2 />
					</button>
				</form>
			</div>
		</nav>
	);
};

export default NavBar;
