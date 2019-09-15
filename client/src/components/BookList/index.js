import React from "react";

export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
