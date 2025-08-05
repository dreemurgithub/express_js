const express = require('express');
const router = express.Router();
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categories');

// GET /categories - Get all categories
router.get('/', getAllCategories);

// GET /categories/:id - Get a specific category by ID
router.get('/:id', getCategoryById);

// POST /categories - Create a new category
router.post('/', createCategory);

// PUT /categories/:id - Update a category
router.put('/:id', updateCategory);

// DELETE /categories/:id - Delete a category
router.delete('/:id', deleteCategory);

module.exports = router;
