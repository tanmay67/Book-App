import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const NewBookForm = (props) => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button type="submit" value="Add Book" className="form-control">
          Add Book
        </button>
      </div>
    </form>
  );
};

export default NewBookForm;
