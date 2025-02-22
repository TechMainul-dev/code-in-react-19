import { useState } from 'react';
import PropTypes from 'prop-types';

export const MovieForm = ({ addMovie }) => {
  const [movieData, setMovieData] = useState({
    title: ' ',
    ott: ' ',
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setMovieData({ ...movieData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movieData?.title.trim() || !movieData?.ott.trim()) return;

    addMovie(movieData);
    setMovieData({ ...movieData, title: '', ott: '' });
  };

  const formControl =
    'flex-1 h-10 p-2 border border-gray-700 dark:bg-gray-800 rounded mb-5 me-2';

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="">
        <input
          type="text"
          placeholder="Enter movie name..."
          name="title"
          value={movieData?.title}
          onChange={handleChange}
          className={`${formControl}`}
        />
        <select
          name="ott"
          value={movieData?.ott}
          onChange={handleChange}
          className={`${formControl}`}
        >
          <option value="">Select an OTT</option>
          <option value="Netflix">Netflix</option>
          <option value="Amazon Prime">Amazon Prime</option>
          <option value="Hoichoi">Hoichoi</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <button
        type="submit"
        className="border bg-blue-600 hover:to-blue-700 text-white rounded-full px-3 py-1"
      >
        Add{' '}
      </button>
    </form>
  );
};

MovieForm.propTypes = {
  addMovie: PropTypes.func.isRequired,
};
