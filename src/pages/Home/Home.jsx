import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

const apiTMDBUrl = import.meta.env.VITE_API;
const apiTMDBKey = import.meta.env.VITE_API_KEY;

import "../MoviesGrid.css";

const Home = () => {
	// Transformar em Hook
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
				<h2>Melhores filmes:</h2>
				<div className="movies-container">
					{topRatedMovies.length === 0 && <p>Carregando...</p>}
					{topRatedMovies.length > 0 && topRatedMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
				</div>
			</section>
		</>
	);
};

export default Home;
