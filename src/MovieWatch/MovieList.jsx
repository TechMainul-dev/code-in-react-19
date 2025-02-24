import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';

export const MovieList = ({
  movies,
  rateMovie,
  toggleWatched,
  deleteMovie,
  filter,
}) => {
  return (
    <div className="w-ful">
      {movies.length === 0 ? (
        <p
          className={`${
            filter.toLowerCase() == 'all'
              ? 'bg-red-200 text-red-500'
              : filter.toLowerCase() == 'watched'
              ? 'text-green-400'
              : 'text-blue-400'
          } text-3xl font-bold px-2 py-7 rounded-xl text-center`}
        >
          No movies in your {filter.toLowerCase() == 'all' ? 'watch' : filter}
          &nbsp; list. Add some
        </p>
      ) : (
        <ul className="space-y-3 flex flex-wrap">
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              rateMovie={rateMovie}
              toggleWatched={toggleWatched}
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
  toggleWatched: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
