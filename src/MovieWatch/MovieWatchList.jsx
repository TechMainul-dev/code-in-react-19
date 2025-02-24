import { useState } from 'react';
import { Filter } from './Filter';
import { Heading } from './Heading';
import { MovieForm } from './MovieForm';
import { MovieList } from './MovieList';

const movieLocalList = localStorage.getItem('movieLocalList');
console.log('movieLocalList', movieLocalList);

export const MovieWatchList = () => {
  const [movies, setMovies] = useState(JSON.parse(movieLocalList) || []);
  const [filter, setFilter] = useState('all');

  movies.length
    ? localStorage.setItem('movieLocalList', JSON.stringify(movies))
    : localStorage.removeItem('movieLocalList');

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
    <div className="grid justify-center gap-5 px-4 py-8 bg-gray-200 dark:bg-slate-600 m-5 rounded-2xl">
      <Heading />
      <MovieForm addMovie={addMovie} />
      {movies?.length > 0 && (
        <>
          <Filter filter={filter} setFilter={setFilter} />
        </>
      )}
      <MovieList
        movies={
          filter.toLowerCase() == 'all'
            ? movies
            : movies.filter(
                (movie) => movie.watched == (filter.toLowerCase() == 'watched'),
              )
        }
        filter={filter}
        rateMovie={rateMovie}
        toggleWatched={toggleWatched}
        deleteMovie={deleteMovie}
      />
    </div>
  );
};
