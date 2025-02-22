import PropTypes from 'prop-types';

export const MovieItem = ({ movie }) => {
  console.log(movie);

  return (
    <li className="text-xl border rounded-lg p-3 m-2">
      Movie Title:
      <span>{movie.title}</span>
      and ott os
      <span>{movie.ott}</span>
      <span>{movie.rating}</span>
      <span>{movie.watched}</span>
    </li>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
