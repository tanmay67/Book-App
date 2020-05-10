import React, { createContext, useState } from 'react';
import uuid from 'uuid/dist/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'almost home', author: 'something 1', id: 1 },
    { title: 'memory gospel', author: 'something 2', id: 2 },
    { title: 'this wild darkness', author: 'something 3', id: 3 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
