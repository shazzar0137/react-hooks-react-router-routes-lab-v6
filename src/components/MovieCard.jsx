import { Link } from "react-router-dom";

function MovieCard({ movie, children }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>Duration: {movie.time} mins</p>
      <div>
        Genres: {movie.genres.map((genre, index) => (
          <span key={index}>{genre}{index < movie.genres.length - 1 ? ', ' : ''}</span>
        ))}
      </div>
      {/* Render the children */}
      {children}
    </div>
  );
}

export default MovieCard;