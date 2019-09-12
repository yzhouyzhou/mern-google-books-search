import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import { Input, FormBtn } from "../components/Form";
import { SaveBtn, ViewBtn } from "../components/Btn";
import Thumbnail from "../components/Thumbnail";

class Search extends Component {
  state = {
    books: [],
    title: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    if (this.state.title.length !== 0) {
      API.searchBooks(this.state.title)
        .then(res =>
          this.setState({ books: res.data.items, title: "", author: "", description: "" })
        )
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.searchBooks(this.state.title)
      .then(res => {
        this.setState({ books: res.data.items })
        console.log(this.state.books);
      }
      )
      .catch(err => console.log(err));
  };

  handleSaveSubmit = info => {
    console.log("the book is going to save " + info.title);
    if (info.title) {
      API.saveBook({
        title: info.title,
        author: info.authors ? info.authors.join(", ") : info.authors,
        description: info.description,
        image: info.imageLinks.thumbnail ? info.imageLinks.thumbnail : "",
        link: info.previewLink
      })
        .then(res => alert(`Saved the Book [ ${info.title} ]`))
        .catch(err => console.log(err));
    }
  };

  handleViewSubmit = info => {
    console.log("the book is going to view " + info.title);
    window.open(`${info.previewLink}`);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Think before you speak. Read before you think.</h1>
              <h4>Search for and Save Books of Interest</h4>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Harry Potter (eg)"
              />
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleSearchSubmit}
              >
                Search Book
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!this.state.books.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (
                <BookList>
                  <h1><u>Results</u></h1>
                  {this.state.books.map(book => {
                    return (
                      <BookListItem key={book.id}>
                        <Container>
                          <Row>
                            <Col size="md-7">
                              <h3>{book.volumeInfo.title}</h3>
                              <h6>Writen by : {book.volumeInfo.authors ? book.volumeInfo.authors.join(",  ") : ""}</h6>
                            </Col>
                            <Col size="md-2">
                              <ViewBtn
                                onClick={() => this.handleViewSubmit(book.volumeInfo)}
                              />
                            </Col>
                            <Col size="md-2">
                              <SaveBtn
                                onClick={() => this.handleSaveSubmit(book.volumeInfo)}
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col size="xs-4 sm-2">
                              <Thumbnail src={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : ""} />
                            </Col>
                            <Col size="xs-8 sm-9">
                              <p>
                                <strong>Description: </strong>
                                {book.volumeInfo.description}
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

export default Search;
