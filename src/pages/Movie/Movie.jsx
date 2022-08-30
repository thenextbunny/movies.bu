import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiTMDBUrl = import.meta.env.VITE_API;
const apiTMDBKey = import.meta.env.VITE_API_KEY;
const imageTMDBUrl = import.meta.env.VITE_IMG;

import styles from "./Movie.module.css";

const Movie = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);

	const getMovie = async (url) => {
		const res = await fetch(url);
		const data = await res.json();
		console.log(data);
		setMovie(data);
	};

	useEffect(() => {
		const movieUrl = `${apiTMDBUrl}${id}?${apiTMDBKey}`;
		getMovie(movieUrl);
	}, []);

	console.log(movie);

	return (
		movie && (
			<article className={styles.article}>
				<div>
					<img src={movie.poster_path ? imageTMDBUrl + movie.poster_path : NotFound} alt="" />
				</div>
				<div className={styles.content}>
					<div className={styles.details}>
						<h1>{movie.title}</h1>
						<p>{movie.overview}</p>
					</div>
					<div>
						<h2>Genres</h2>
						<p>
							{movie.genres.map(({ name }) => (
								<span key={name}>{name}</span>
							))}
						</p>
					</div>
					<div>
						<h2>Duration</h2>
						<p>{movie.runtime} minutes</p>
					</div>
					<div>
						<h2>Relase date</h2>
						<p>{movie.release_date.replaceAll("-", "/")}</p>
					</div>
				</div>
			</article>
		)
	);
};

export default Movie;
