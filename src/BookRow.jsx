import BookDetails from './BookDetails';
import FeatureBook from './FeatureBook';
import PropTypes from 'prop-types';

function BookRow({ book, onFeatureBook }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
      <BookDetails title={book.title} author={book.author} />
      <FeatureBook book={book} onFeatureBook={onFeatureBook} />
    </div>
  );
}

BookRow.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onFeatureBook: PropTypes.func.isRequired,
};

export default BookRow;
