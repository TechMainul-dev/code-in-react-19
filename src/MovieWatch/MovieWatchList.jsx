import { useState } from 'react';
import { Heading } from './Heading';
import { MovieForm } from './MovieForm';
import { MovieList } from './MovieList';

export const MovieWatchList = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = ({ title, ott }) => {
    const newMovie = {
      id: crypto.randomUUID(),
      title,
      ott,
      rating: null,
      watched: false,
    };

    setMovies([...movies, newMovie]);
  };

  const rateMovie = (id, rating) => {
    console.log(id, rating);

    setMovies(
      movies.map((movie) => (movie.id == id ? { ...movie, rating } : movie)),
    );
  };

  const toggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id == id ? { ...movie, watched: !movie.watched } : movie,
      ),
    );
  };
  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="p-4 bg-gray-200 dark:bg-slate-600">
      <Heading />
      <MovieForm addMovie={addMovie} />
      <MovieList
        movies={movies}
        rateMovie={rateMovie}
        toggleWatched={toggleWatched}
        deleteMovie={deleteMovie}
      />
    </div>
  );
};
