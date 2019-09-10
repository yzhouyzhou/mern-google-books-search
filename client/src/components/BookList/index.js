import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
// import Btn from "../Btn"


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
            <p>
              <strong>Description: </strong>
              {description}
            </p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
