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

  return (
    <div className="p-4 bg-gray-200 dark:bg-slate-600">
      <Heading />
      <MovieForm addMovie={addMovie} />
      <MovieList movies={movies} />
    </div>
  );
};
