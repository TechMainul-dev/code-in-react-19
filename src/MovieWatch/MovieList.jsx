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
        <p className="bg-red-200 text-red-500 text-2xl px-2 py-7 rounded-xl text-center">
          No movies in you {filter || 'watch'} list. Add some
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
