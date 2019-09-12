const router = require("express").Router();
const googleSearchController = require("../../controllers/googleSearchController");

router.route("/")
  .get(googleSearchController.findAll);

router.route("/:bookTitle")
  .get(googleSearchController.findAll);

module.exports = router;
