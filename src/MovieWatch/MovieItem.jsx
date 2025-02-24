import PropTypes from 'prop-types';
import { Star } from 'lucide-react';
import ReactStars from 'react-stars';

export const MovieItem = ({ movie, rateMovie, toggleWatched, deleteMovie }) => {
  const ratingChange = (newRating) => {
    rateMovie(movie.id, newRating);
  };

  return (
    <li className="flex flex-col gap-2 text-md border rounded-lg p-3 m-2">
      <ul
        className={`flex gap-2 ${
          !movie.watched && 'line-through text-gray-400'
        }`}
      >
        <li>
          Movie Title:{' '}
          <span className="text-blue-700 dark:text-amber-500">
            {movie.title}
          </span>
        </li>

        <li>
          Platform:{' '}
          <span className="text-blue-700 dark:text-amber-500">{movie.ott}</span>
        </li>
        <li className="inline-flex items-center gap-1 text-blue-700 dark:text-amber-500">
          {' '}
          Rating
          {movie.rating && (
            <>
              <Star size={16} fill="#ffd700" /> {movie.rating + '/5'}
            </>
          )}
        </li>
      </ul>
      <div className="inline-flex items-center gap-2">
        <ReactStars
          count={5}
          value={movie?.rating}
          onChange={ratingChange}
          size={24}
          activeColor="#ffd700"
        />
        <button
          onClick={() => toggleWatched(movie.id)}
          className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-2xl min-w-28"
        >
          {movie.watched ? 'Unwatched' : 'Watched'}
        </button>
        <button
          onClick={() => deleteMovie(movie.id)}
          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-2xl min-w-28"
        >
          Delete
        </button>
      </div>
      <span className="text-blue-700 dark:text-amber-500">
        {movie.watched}{' '}
      </span>
    </li>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      ott: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      watched: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  rateMovie: PropTypes.func.isRequired,
  toggleWatched: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};
