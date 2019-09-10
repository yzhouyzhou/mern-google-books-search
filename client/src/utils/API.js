import axios from "axios";

// const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = ":keyes&key=AIzaSyCmueHczoF3X1KE2SwsY2evRxEzsixB8Ts";
// const APIKEY = ":keyes&key=" + process.env.GOOGLE_API_KEY;

export default {

  searchBooks: function (query) {
    console.log(query, "searchBooks");
    return axios.get(BASEURL + query + APIKEY);
  },

  // searchBooks: function(query) {
  //   console.log(query, "searchBooks");
  //   return axios.get("/api/search" + query);
  // },

  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    console.log("saving the book " + bookData.title)
    return axios.post("/api/books", bookData);
  }
};
