import React from "react";
import "../css/moviescard.css";
const MoviesCard = ({ movies }) => {
  const handleFavorite = () => {
    alert("added");
  };
  return (
    <div>
      <div className="movie-card">
        <div className="movie-poster">
          <img src={movies?.url} alt={movies?.title} />
          <div className="movie-overlay">
            <button className="favorite-btn" onClick={handleFavorite}>
              💝
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movies?.title}</h3>
          <p>{movies?.release_data}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
