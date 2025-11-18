const Book = require('../models/Book')

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        if(allBooks) {
            res.status(200).json({
                success: true,
                message: "All listed Books . Check All  Books",
                data:allBooks
            })
        } else {
            res.status(404).json({
                success: false,
                message: "Have some issue , can not find your listed books"
            })
        }
    } catch (error) {
        console.log(error);
    }
}
const getBookById = async (req, res) => {

    try {
        const id = req.params.id;
        const bookListByID = await Book.findById(id);
        if(bookListByID) {
            res.status(200).json({
                success: true,
                message: "Book found by ID",
                data: bookListByID
            })
        } else {
            res.status(404).json({
                success: false,
                message: "Book not found with this ID"
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const addNewBook = async (req, res) => {
    try{

        const newBookFormData = req.body;
        const newBook = await Book.create(newBookFormData);
        if(newBook) {
            res.status(201).json({
                success: true,
                message: "New Book Added Successfully!! ",
                data: newBook
            })
        }
    } catch(error){
        console.error("Error in adding new Book", error);
    }
}   
const updateBook = async (req, res) => {
    try {
        const id = req.params.id;
        const updateBookData = req.body;
        const updatedBook = await Book.findByIdAndUpdate(id, updateBookData, 
            { new: true, runValidators: true });
        if(updatedBook) {
            res.status(200).json({
                success: true,
                message: "Book Updated Successfully",
                data: updatedBook
            })
        } else {
            res.status(404).json({
                success: false,
                message: "Book not found with this ID to update"
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(deletedBook) {
            res.status(200).json({
                success: true,
                message: "Book Deleted Successfully",
                data: deletedBook
            })
        } else {
            res.status(404).json({
                success: false,
                message: "Book not found with this ID to delete"
            })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    addNewBook,
    updateBook,
    deleteBook
}