import PropTypes from 'prop-types';

//* keep the state in the parent of the component that renders because of the state change
function Search({ searchTerm, onSearchBook }) {
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search Books..."
        onChange={(event) => onSearchBook(event.target.value)}
        className="mb-4 border rounded-md p-1 w-full px-3"
      />
    </form>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired,
};

export default Search;
