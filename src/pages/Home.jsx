import React, { useState } from "react";
import MoviesCard from "../components/MoviesCard";
import "../css/home.css";
const Home = () => {
  const [search, setSearch] = useState("");
  const movies = [
    { id: 1, title: "John wick 1", release_data: "21/2/2025" },
    { id: 2, title: "Terminator", release_data: "21/2/2025" },
    { id: 3, title: "Matrix", release_data: "21/2/2025" },
    { id: 4, title: "Hitmans Bodyguard", release_data: "21/2/2025" },
    { id: 5, title: "Loki", release_data: "21/2/2025" },
    { id: 6, title: "Hanumman", release_data: "21/2/2025" },
    { id: 7, title: "Sholey", release_data: "21/2/2025" },
    { id: 8, title: "Indian", release_data: "21/2/2025" },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(search);
    setSearch(e.target.value);
    setSearch("");
  };
  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for movies"
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {movies?.map((movie) => (
          // movie?.title?.toLowerCase()?.startsWith(search) &&
          <MoviesCard key={movie.id} movies={movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
