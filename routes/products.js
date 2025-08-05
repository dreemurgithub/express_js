const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products');

// GET /products - Get all products
router.get('/', getAllProducts);

// GET /products/:id - Get a specific product by ID
router.get('/:id', getProductById);

// POST /products - Create a new product
router.post('/', createProduct);

// PUT /products/:id - Update a product
router.put('/:id', updateProduct);

// DELETE /products/:id - Delete a product
router.delete('/:id', deleteProduct);

module.exports = router;
