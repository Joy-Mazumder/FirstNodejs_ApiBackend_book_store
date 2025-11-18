const express = require("express");
const router = express.Router();
const { getAllBooks, getBookById, addNewBook, updateBook, deleteBook } = require("../controllers/book-controller");

// All the routes that are related to books
router.get('/get', getAllBooks);
router.get('/get/:id', getBookById);
router.post('/add', addNewBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);   

module.exports = router;