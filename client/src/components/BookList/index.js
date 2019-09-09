import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";


export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookListItem({
  image = "https://placehold.it/300x300",
  title,
  author,
  description,
  link
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h6>Writen by : {author}</h6>
            <p>Description: {description}</p>
            {/* <a rel="noreferrer noopener" target="_blank" href={link}>
              Go to book details!
            </a>             */}
          </Col>
        </Row>
      </Container>
    </li>
  );
}
