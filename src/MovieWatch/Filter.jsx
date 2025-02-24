import PropTypes from 'prop-types';

export const Filter = ({ filter, setFilter }) => {
  const btnClasses =
    ' min-w-[120px] border text-white rounded-full px-5 py-1 text-xl';

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={() => setFilter('all')}
        className={`${btnClasses} ${
          filter === 'all' ? 'bg-cyan-300' : 'bg-cyan-400 hover:bg-cyan-500'
        } text-[#000!important]`}
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
