import { useState } from 'react';
import BookList from './BookList';
import Header from './Header';
import Search from './Search'; //ToDo: This is state

const BOOKS = [
  {
    id: 1,
    title: '1984',
    author: 'George Orwell',
    featured: true,
  },
  {
    id: 2,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    featured: false,
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    featured: true,
  },
  {
    id: 4,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    featured: false,
  },
  {
    id: 5,
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    featured: true,
  },
  {
    id: 6,
    title: 'Moby-Dick',
    author: 'Herman Melville',
    featured: false,
  },
  {
    id: 7,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    featured: true,
  },
  {
    id: 8,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    featured: false,
  },
  {
    id: 9,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    featured: true,
  },
  {
    id: 10,
    title: 'Animal Farm',
    author: 'George Orwell',
    featured: false,
  },
]; //? Application reusable data should be kept as higher as possible in the hierarchy

function Boimela() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState(BOOKS);

  const toggleFeatured = (id) => {
    setBooks(
      books.map((book) =>
        book.id == id ? { ...book, featured: !book.featured } : book,
      ),
    );
  };
  console.log(books);

  return (
    <div className="mx-auto p-4">
      <Header />
      <Search searchTerm={searchTerm} onSearchBook={setSearchTerm} />
      {/* The data we pass from one component to another props */}
      <BookList
        searchTerm={searchTerm}
        books={books}
        onFeatureBook={toggleFeatured}
      />
    </div>
  );
}

export default Boimela;
