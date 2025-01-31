import { Star } from 'lucide-react';
import PropTypes from 'prop-types';

function FeatureBook({ book, onFeatureBook }) {
  return (
    <button onClick={() => onFeatureBook(book.id)}>
      <Star color={book.featured ? 'green' : 'black'} />
    </button>
  );
}

FeatureBook.propTypes = {
  book: PropTypes.object.isRequired,
  onFeatureBook: PropTypes.func.isRequired,
};

export default FeatureBook;
