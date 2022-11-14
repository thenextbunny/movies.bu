import { Link } from "react-router-dom";

// Icons
import { FaStar } from "react-icons/fa";
import NotFound from "../../assets/notfound.png";

import "./MovieCard.css";

const imageTMDBUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
	return (
		<div className="movie-card">
			<img src={movie.poster_path ? imageTMDBUrl + movie.poster_path : NotFound} alt="" />
			<h2>{movie.title}</h2>
			<p>
				<FaStar /> {movie.vote_average}/10
			</p>
			{showLink && <Link to={`/movies.bu/movie/${movie.id}`}>Details</Link>}
		</div>
	);
};

export default MovieCard;
