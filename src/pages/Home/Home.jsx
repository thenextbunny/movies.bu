import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import MovieCard from "../../components/MovieCard/MovieCard";

const apiTMDBUrl = import.meta.env.VITE_API;
const apiTMDBKey = import.meta.env.VITE_API_KEY;

import "../MoviesGrid.css";

const Home = () => {
	// TODO: Transformar em Hook
	const [topRatedMovies, setTopRatedMovies] = useState([]);

	const getTopRatedMovies = async (url) => {
		const response = await fetch(url);
		const data = await response.json();

		setTopRatedMovies(data.results);
	};

	useEffect(() => {
		const topRatedMoviesUrl = `${apiTMDBUrl}top_rated?${apiTMDBKey}`;

		getTopRatedMovies(topRatedMoviesUrl);
	}, []);

	return (
		<>
			<section>
				<h2>The best movies</h2>
				<div className="movies-container">
					{topRatedMovies.length === 0 && <Loading />}
					{topRatedMovies.length > 0 && topRatedMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
				</div>
			</section>
		</>
	);
};

export default Home;
