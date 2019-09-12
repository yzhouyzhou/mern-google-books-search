const axios = require("axios");
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const aa = "https://www.googleapis.com/books/v1/volumes?q=burger";

module.exports = {
  findAll: function (req, res) {
    console.log("googleSearch findAll ", req.params.bookTitle);
    axios.get(BASEURL + req.params.bookTitle)
      .then(results => {
        // console.log(results.data);
        res.json(results.data);
      })
      .catch(err => res.status(422).json(err));
  }
}
