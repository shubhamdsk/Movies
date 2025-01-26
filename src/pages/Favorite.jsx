import React from "react";
import { Link } from "react-router-dom";
import "../css/favorites.css";

const Favorite = () => {
  return (
    <div className="favorites-empty">
      <h1>No favourite movies here</h1>
      <p>Start adding movies to your favorites and they will appear here....</p>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Favorite;
