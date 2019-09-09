import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.book.title}
              </h1>
              <h4>{this.state.book.author}</h4>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <a rel="noreferrer noopener" target="_blank" href={this.state.book.link}>
                To google book store ←
              </a>
              <p>
                {this.state.book.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-5">
            <Link to="/savedbooks">← Back to Saved Book List</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
