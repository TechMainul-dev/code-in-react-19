import BookRow from './BookRow';

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
];

function BookList() {
  return (
    <ul className="space-y-4">
      {BOOKS.map((book) => (
        <li
          key={book.id}
          className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
        >
          <BookRow book={book} />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
