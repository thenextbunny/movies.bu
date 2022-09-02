import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiTMDBUrl = import.meta.env.VITE_API;
const apiTMDBKey = import.meta.env.VITE_API_KEY;
const imageTMDBUrl = import.meta.env.VITE_IMG;

import styles from "./Movie.module.css";

import NotFound from "../../assets/notfound.png";
import Loading from "../../components/Loading/Loading";

const Movie = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);

	const getMovie = async (url) => {
		const res = await fetch(url);
		const data = await res.json();
		setMovie(data);
	};

	useEffect(() => {
		const movieUrl = `${apiTMDBUrl}${id}?${apiTMDBKey}`;
		getMovie(movieUrl);
	}, []);

	return (
		<>
			{!movie && <Loading />}
			{movie && (
				<article className={styles.article}>
					<div className={styles.image}>
						<img src={movie.poster_path ? imageTMDBUrl + movie.poster_path : NotFound} alt="" />
					</div>
					<div className={styles.content}>
						<div className={styles.details}>
							<h1>{movie.title}</h1>
							<p>{movie.overview}</p>
						</div>
						<div className={styles.genres}>
							<h2>Genres</h2>
							<p>{movie.genres.length > 0 ? movie.genres.map((genres) => <span key={genres.id}>{genres.name}</span>).reduce((prev, curr) => [prev, ", ", curr]) : "No genres listed"}</p>
							<h2>Runtime</h2>
							<p>{movie.runtime} minutes</p>
							<h2>Release date</h2>
							<p>{movie.release_date ? movie.release_date.replaceAll("-", "/") : "No date has been specified"}</p>
						</div>
					</div>
				</article>
			)}
		</>
	);
};

export default Movie;
