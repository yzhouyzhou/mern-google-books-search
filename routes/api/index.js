const router = require("express").Router();
const bookRoutes = require("./books");
const searchRoutes = require("./searchR");

// Book routes
router.use("/books", bookRoutes);
router.use("/searchR", searchRoutes);
module.exports = router;

