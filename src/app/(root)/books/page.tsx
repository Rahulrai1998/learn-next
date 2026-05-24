import React from "react";

const BooksPage = async () => {
  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json(); //convert response into usable object format.
  return (
    <div>
      {books.map((book: { id: string; name: string }) => (
        <p>{book.name}</p>
      ))}
    </div>
  );
};

export default BooksPage;
