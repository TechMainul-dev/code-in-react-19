import PropTypes from 'prop-types';

export const Filter = ({ filter, setFilter }) => {
  const btnClasses = 'border text-white rounded-full px-5 py-1 text-xl';

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={() => setFilter('all')}
        className={`${btnClasses} ${
          filter === 'all' ? 'bg-gray-700' : 'bg-gray-600 hover:bg-gray-700'
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('watched')}
        className={`${btnClasses} ${
          filter === 'watched'
            ? 'bg-green-700'
            : 'bg-green-600 hover:bg-green-700'
        }`}
      >
        Watched
      </button>
      <button
        onClick={() => setFilter('unwatched')}
        className={`${btnClasses} ${
          filter === 'unwatched'
            ? 'bg-blue-700'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        Unwatched
      </button>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.string.isRequired,
};
