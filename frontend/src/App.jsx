import { useEffect, useState } from "react";
import { getAllBooks } from "./api";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(setBooks);
  }, []);

  return (
    <div className="app">
      <h1 className="title">Library Book Management</h1>

      <div className="grid">
        {books.map((book) => (
          <div key={book._id} className="card">
            <h2>{book.title}</h2>

            <p><span>Author:</span> {book.author}</p>
            <p><span>Category:</span> {book.category}</p>
            <p><span>Published:</span> {book.publishedYear}</p>

            <div className="copies">
              Available Copies: {book.availableCopies}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
