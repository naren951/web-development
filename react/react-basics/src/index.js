import React from "react";
import * as ReactDOMClient from "react-dom/client";

// CSS
import "./index.css";
// vars
import { data } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {data.map((book, index) => {
        return (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        );
      })}
    </section>
  );
}

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<BookList />);
