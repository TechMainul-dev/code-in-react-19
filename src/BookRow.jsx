import BookDetails from './BookDetails';
import FeatureBook from './FeatureBook';
import PropTypes from 'prop-types';

function BookRow(book) {
  return (
    <>
      <BookDetails title={book.title} author={book.author} />
      <FeatureBook />
    </>
  );
}

BookRow.PropTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookRow;
