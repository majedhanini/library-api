const { Book, Author } = require("../models");

const createBook = async (req, res) => {
  try {
    const { title, description, price, authorId } = req.body;

    const author = await Author.findByPk(authorId);

    if (!author) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    const book = await Book.create({
      title,
      description,
      price,
      authorId,
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({
      message: "Error creating book",
      error: error.message,
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: Author,
    });

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching books",
      error: error.message,
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id, {
      include: Author,
    });

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching book",
      error: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, authorId } = req.body;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    if (authorId) {
      const author = await Author.findByPk(authorId);

      if (!author) {
        return res.status(404).json({
          message: "Author not found",
        });
      }
    }

    await book.update({
      title,
      description,
      price,
      authorId,
    });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      message: "Error updating book",
      error: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    await book.destroy();

    res.status(200).json({
      message: "Book deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting book",
      error: error.message,
    });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
