const express = require("express");
const controllers = require("../controllers/controllers");
const router = express.Router();

router.get("/", controllers.getAllBooks);
router.get("/:id", controllers.findOneBook);
router.post("/newbook", controllers.addBook);
router.delete("/allbooks", controllers.deleteAllBooks);
router.put("/update/:id", controllers.upBook);

module.exports = router;
