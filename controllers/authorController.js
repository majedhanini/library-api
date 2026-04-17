const { Author } = require("../models");

const createAuthor = async (req, res) => {
  try {
    const { name, email, bio } = req.body;

    const author = await Author.create({
      name,
      email,
      bio,
    });

    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({
      message: "Error creating author",
      error: error.message,
    });
  }
};

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching authors",
      error: error.message,
    });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;

    const author = await Author.findByPk(id);

    if (!author) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching author",
      error: error.message,
    });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, bio } = req.body;

    const author = await Author.findByPk(id);

    if (!author) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    await author.update({
      name,
      email,
      bio,
    });

    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({
      message: "Error updating author",
      error: error.message,
    });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const author = await Author.findByPk(id);

    if (!author) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    await author.destroy();

    res.status(200).json({
      message: "Author deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting author",
      error: error.message,
    });
  }
};

module.exports = {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
};
