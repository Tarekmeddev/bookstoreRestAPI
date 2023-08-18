const express = require("express");
const controllers = require("../controllers/controllers");
const router = express.Router();

router.get("/", controllers.getAllBooks);
router.post("/newbook", controllers.addBook);
router.delete("/allbooks", controllers.deleteAllBooks);

module.exports = router;
