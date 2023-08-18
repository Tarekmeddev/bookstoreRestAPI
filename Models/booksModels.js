const mongoose = require("mongoose");

// Schema
const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  disc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// model

const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;
