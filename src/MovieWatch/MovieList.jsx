import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movies, rateMovie, toggleWatch, deleteMovie }) => {
  return (
    <div>
      {movies.length === 0 ? (
        <p className="bg-red-200 text-red-500 text-2xl px-2 py-7 rounded-xl text-center">
          No movies in you watch list. Add some
        </p>
      ) : (
        <ul className="space-y-3">
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              rateMovie={rateMovie}
              toggleWatch={toggleWatch}
              deleteMovie={deleteMovie}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  rateMovie: PropTypes.func.isRequired,
  toggleWatch: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};
