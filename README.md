# Movie App

A movie app that allows users to search for movies, add them to their favorites, and view their favorite movies even after page reload, thanks to local storage.

This app is built using **React** and **Context API** for state management.

## Features

- **Search for Movies**: Search movies by title and see the results.
- **Add to Favorites**: Add movies to your favorite list and store them in local storage.
- **Remove from Favorites**: Remove movies from your favorite list, and it will be reflected immediately.
- **Persistent Data**: Favorite movies persist even after page refresh using **localStorage**.

## Technologies Used

- **React** - JavaScript library for building user interfaces.
- **React Context API** - For managing global state (favorites in this case).
- **localStorage** - For persisting favorite movies across page reloads.
- **CSS** - Basic styling for UI.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shubhamdsk/Movies
   ```
2. Navigate to the project folder:
   ```bash
   cd Movies
   ```
3. Create a .env file in the root directory and add the following keys:
   ```makefile
   VITE_API_KEY=your_api_key_here
   VITE_API_URL=https://api.themoviedb.org/3
   ```
   - You can get your VITE_API_KEY from [The Movie Database (TMDb)](https://www.themoviedb.org/) API API.
4. Install dependencies:
   ```bash
   npm i
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the app in your browser at http://localhost:5173

## Usage

1. **Search for Movies:** Enter the movie name in the search bar and click _Search_. The results will be displayed below.
2. **Add to Favorites:** Click on the heart icon on any movie card to add it to your favorites.
3. **View Favorites:** Navigate to the "Favorites" page to see all your saved movies.
4. **Remove from Favorites:** Click on the heart icon again to remove a movie from your favorites.

### Example of Using the App

- Open the app in your browser.
- Use the search functionality to find a movie.
- Add the movie to your favorites.
- Navigate to the Favorites page to see the list of favorite movies.
- Remove a movie from favorites, and the app will update accordingly.

## Local Storage

Favorites are saved in the browser's localStorage, meaning the data persists even after refreshing the page.

- The list of favorite movies is stored as a JSON string.
- You can check your browser's local storage to see the data using the following in the browser console:
  ```bash
  localStorage.getItem("favorites");
  ```

## Contributing

We welcome contributions! If you have an idea for a feature, bug fix, or improvement, feel free to open an issue or submit a pull request.

## Acknowledgements

- Thanks to [The Movie Database (TMDb)](https://www.themoviedb.org/) API for movie data.
- Inspiration and learning from various React tutorials and the community.


### What's Changed:
- I added a new section under **Installation** with instructions for creating a `.env` file and adding the required API key and URL.
- Users now need to create the `.env` file in the root of the project and replace `your_api_key_here` with their actual TMDb API key.

This should provide all the necessary information for users to properly set up and run your app!
