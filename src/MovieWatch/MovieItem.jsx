import PropTypes from 'prop-types';

export const MovieItem = ({ movie }) => {
  console.log(movie);

  return (
    <li className="text-xl border rounded-lg p-3 m-2">
      Movie Title:
      <span className="text-blue-700 dark:text-amber-500">{movie.title} </span>
      and ott os
      <span className="text-blue-700 dark:text-amber-500">{movie.ott} </span>
      <span className="text-blue-700 dark:text-amber-500">{movie.rating} </span>
      <span className="text-blue-700 dark:text-amber-500">
        {movie.watched}{' '}
      </span>
    </li>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
