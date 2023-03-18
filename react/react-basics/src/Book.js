import React from "react";

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.image} alt="" height="350px" width="500px" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

export default Book;
