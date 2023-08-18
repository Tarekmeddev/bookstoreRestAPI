const mongoose = require("mongoose");
const book = require("../Models/booksModels");
// find ALL
const getAllBooks = async (req, res) => {
  try {
    const Allbooks = await book.find();
    if (!Allbooks) {
      return res
        .status(404)
        .json({ message: "Error when fetching pokemons", data: {} });
    }
    return res
      .status(200)
      .json({ message: "Fetched succesfully", data: Allbooks });
  } catch (error) {
    return res.status(500).json({ message: "Internal  error", data: {} });
  }
};
// find a book by id
const findOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBook = await book.findById(id);
    return res.status(200).json(oneBook);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
// post a new book
const addBook = async (req, res) => {
  try {
    const newBook = await book.create(req.body);
    if (!newBook) {
      return res.status(404).json({ message: "we do not find book", data: {} });
    }
    return res.status(200).json(newBook);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
// update a book
const upBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBook = await book.findByIdAndUpdate(id, req.body);
    return res.status(200).json(updateBook);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
// delete all books
const deleteAllBooks = async (req, res) => {
  try {
    const books = await book.deleteMany();
    if (!books) {
      return res.status(404).json({ message: "undifind", data: {} });
    }
    return res.status(200).json({ message: "Deleted", data: books });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = { getAllBooks, addBook, deleteAllBooks, findOneBook, upBook };
