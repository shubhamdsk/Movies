import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage on component mount
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs)); // Load favorites if available in localStorage
        }
    }, []);

    // Save favorites to localStorage whenever favorites state changes
    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } else {
            // If favorites are empty, clear it from localStorage
            localStorage.removeItem("favorites");
        }
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites((prev) => {
            const updatedFavorites = [...prev, movie];
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Update localStorage immediately
            return updatedFavorites;
        });
    };

    const removeFromFavorites = (movieId) => {
        setFavorites((prev) => {
            const updatedFavorites = prev.filter((movie) => movie.id !== movieId);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Update localStorage immediately
            return updatedFavorites;
        });
    };

    const isFavorite = (movieId) => {
        return favorites.some((movie) => movie.id === movieId);
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    };

    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
