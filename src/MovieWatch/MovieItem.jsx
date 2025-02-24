import PropTypes from 'prop-types';
import { Star } from 'lucide-react';
import ReactStars from 'react-stars'

export const MovieItem = ({ movie, rateMovie, toggleWatch, deleteMovie }) => {
  const ratingChange = (newRating) => {
    rateMovie(movie.id, newRating);
  };

  return (
    <li className="text-xl border rounded-lg p-3 m-2">
      Movie Title:
      <span className="text-blue-700 dark:text-amber-500">{movie.title} </span>
      Platform:
      <span className="text-blue-700 dark:text-amber-500">{movie.ott} </span>
      <span className="text-blue-700 dark:text-amber-500">
        {movie.rating && (
          <>
            <Star size={16} /> {movie.rating + '/5'}
          </>
        )}
      </span>
      <div className="flex gap-2">
        <ReactStars
          count={5}
          value={movie?.rating}
          onChange={ratingChange}
          size={24}
          activeColor="#ffd700"
        />
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
  toggleWatch: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};
