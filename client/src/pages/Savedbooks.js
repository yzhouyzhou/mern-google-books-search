import React, { Component } from "react";
import { ViewBtn, DeleteBtn } from "../components/Btn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import Thumbnail from "../components/Thumbnail";

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
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleViewSubmit = link => {
    console.log("the book is going to view " + link);
    window.open(`${link}`);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>

            {!this.state.books.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (

                <BookList>
                  <h1><u>Saved Books</u></h1>
                  {this.state.books.map(book => {
                    return (
                      <BookListItem key={book._id}>
                        <Container>
                          <Row>
                            <Col size="md-7">
                              <h3>{book.title}</h3>
                              <h6>Writen by : {book.author}</h6>
                            </Col>
                            <Col size="md-2">
                              <ViewBtn
                                onClick={() => this.handleViewSubmit(book.link)}
                              />
                            </Col>
                            <Col size="md-2">
                              <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                            </Col>
                          </Row>
                          <Row>
                            <Col size="xs-4 sm-2">
                              <Thumbnail src={(book.image) ? book.image : ""} />
                            </Col>
                            <Col size="xs-8 sm-9">
                              <p>
                                <strong>Description: </strong>
                                {book.description}
                              </p>
                            </Col>
                          </Row>
                        </Container>
                      </BookListItem>
                    )
                  })}
                </BookList>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Savedbooks;
