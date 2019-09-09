import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import { Input, FormBtn } from "../components/Form";
import SavedBtn from "../components/SaveBtn";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.searchBooks(this.state.title)
      .then(res =>
        this.setState({ books: res.data.items, title: "", author: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
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
    // var req={query:this.state.title};
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
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
    alert(`Saved the Book [ ${info.title} ]`);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Think before you speak. Read before you think.</h1>
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
                  {this.state.books.map(book => {
                    return (
                      <div>                        
                        <BookListItem
                          key={book.volumeInfo.title}
                          title={book.volumeInfo.title}
                          author={book.volumeInfo.authors ? book.volumeInfo.authors.join(",  ") : ""}
                          description={book.volumeInfo.description}
                          image={(book.volumeInfo.imageLinks.thumbnail) ? book.volumeInfo.imageLinks.thumbnail : ""}
                          link={book.volumeInfo.previewLink}
                        />
                        <SavedBtn
                          onClick={() => this.handleSaveSubmit(book.volumeInfo)}
                        />                       
                      </div>
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
