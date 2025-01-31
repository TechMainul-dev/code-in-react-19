import PropTypes from 'prop-types';
import BookRow from './BookRow';

function BookList({ searchTerm, books, onFeatureBook }) {
  const rows = [];
  books.forEach((book) => {
    if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    rows.push(
      <BookRow key={book.id} book={book} onFeatureBook={onFeatureBook} />,
    );
  });

  return (
    <div className="space-y-4 grid gap-2 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {rows}
    </div>
  );
}

BookList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onFeatureBook: PropTypes.func.isRequired,
};

export default BookList;
