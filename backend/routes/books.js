const express = require("express");
const router = express.Router();
const Book = require("../models/Book");


// INSERT MINIMUM 7 BOOKS
router.post("/seed", async (req, res) => {
  try {
    const books = await Book.insertMany([
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        publishedYear: 2016,
        availableCopies: 5,
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self Help",
        publishedYear: 2018,
        availableCopies: 7,
      },
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "Programming",
        publishedYear: 2008,
        availableCopies: 3,
      },
      {
        title: "Deep Work",
        author: "Cal Newport",
        category: "Productivity",
        publishedYear: 2017,
        availableCopies: 4,
      },
      {
        title: "Ikigai",
        author: "Hector Garcia",
        category: "Self Help",
        publishedYear: 2016,
        availableCopies: 6,
      },
      {
        title: "You Don’t Know JS",
        author: "Kyle Simpson",
        category: "Programming",
        publishedYear: 2019,
        availableCopies: 2,
      },
      {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "History",
        publishedYear: 2015,
        availableCopies: 1,
      },
    ]);

    res.status(201).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// READ OPERATIONS

// All books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Books by category
router.get("/category/:category", async (req, res) => {
  const books = await Book.find({ category: req.params.category });
  res.json(books);
});

// Books after year 2015
router.get("/after/2015", async (req, res) => {
  const books = await Book.find({ publishedYear: { $gt: 2015 } });
  res.json(books);
});


// UPDATE OPERATIONS

// Increase / decrease copies
router.patch("/:id/copies", async (req, res) => {
  const { change } = req.body;

  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  if (book.availableCopies + change < 0) {
    return res.status(400).json({ message: "Negative stock not allowed" });
  }

  book.availableCopies += change;
  await book.save();

  res.json(book);
});

// Change category
router.patch("/:id/category", async (req, res) => {
  const { category } = req.body;

  if (!category) {
    return res.status(400).json({ message: "Invalid update" });
  }

  const book = await Book.findByIdAndUpdate(
    req.params.id,
    { category },
    { new: true }
  );

  if (!book) return res.status(404).json({ message: "Book not found" });

  res.json(book);
});


//DELETE OPERATION

// Remove book if copies = 0
router.delete("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) return res.status(404).json({ message: "Book not found" });

  if (book.availableCopies !== 0) {
    return res
      .status(400)
      .json({ message: "Cannot delete book with available copies" });
  }

  await book.deleteOne();
  res.json({ message: "Book removed successfully" });
});

module.exports = router;
