import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import { CircleLoader } from "react-spinners"; // Correct import
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  // Trigger search whenever searchQuery changes
  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      if (!searchQuery.trim()) {
        // When searchQuery is empty, show popular movies again
        try {
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies);
          setError(null);
        } catch (err) {
          console.error(err);
          setError("Failed to load popular movies...");
        } finally {
          setLoading(false);
        }
        return;
      }

      try {
        const searchResults = await searchMovies(searchQuery);
        if (searchResults.length === 0) {
          setError("No result found for searched movie"); // Display error message if no movies are found
        } else {
          setMovies(searchResults);
          setError(null);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to search movies...");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className="home">
      <input
        type="text"
        placeholder="Search for movies..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {error && <div className="error-message">{error}</div>}

      {loading && (
        <div className="loader-container">
          <CircleLoader size={100} color="#36d7b7" />
        </div>
      )}

      {movies.length > 0 && !loading ? (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : !loading && !error ? (
        <div className="no-movies-message">No movies found</div> // Show this message if no movies found
      ) : null}
    </div>
  );
}

export default Home;
