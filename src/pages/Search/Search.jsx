import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const apiIMDBSearchUrl = import.meta.env.VITE_SEARCH;
const apiTMDBKey = import.meta.env.VITE_API_KEY;

import "../MoviesGrid.css";

import MovieCard from "../../components/MovieCard/MovieCard";
import Loading from "../../components/Loading/Loading";

const Search = () => {
	const [searchParams] = useSearchParams();

	const [movies, setMovies] = useState([]);
	const query = searchParams.get("q");

	const getSearchedMovies = async (url) => {
		const response = await fetch(url);
		const data = await response.json();

		setMovies(data.results);
	};

	useEffect(() => {
		const searchWithQueryUrl = `${apiIMDBSearchUrl}?${apiTMDBKey}&query=${query}`;

		getSearchedMovies(searchWithQueryUrl);
	}, [query]);

	return (
		<section>
			<h2>
				Results for: <span className="query-text">{query}</span>
			</h2>
			<div className="movies-container">
				{movies.length === 0 && <Loading />}
				{movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
			</div>
		</section>
	);
};

export default Search;
