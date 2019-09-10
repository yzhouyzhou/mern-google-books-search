import React, { Component } from "react";
import { DeleteBtn } from "../components/Btn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { SavedList, SavedListItem } from "../components/SavedList";

class Savedbooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <SavedList>
                <h1><u>Saved Books</u></h1>
                {this.state.books.map(book => (
                  <SavedListItem key={book._id}>
                    <a style={{ float: "left", color: "darkgreen" }} rel="noreferrer noopener" target="_blank" href={book.link}>
                      <strong>{book.title} </strong>
                      by {book.author}
                    </a>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </SavedListItem>
                ))}
              </SavedList>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Savedbooks;
