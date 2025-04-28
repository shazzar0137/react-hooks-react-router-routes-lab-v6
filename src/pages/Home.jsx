import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";  // Ensure this import

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/movies`)
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie}>
            {/* Add the Link to Movie Info */}
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </MovieCard>
        ))}
      </main>
    </>
  );
}

export default Home;
