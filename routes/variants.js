const express = require('express');
const router = express.Router();
const {
  getAllVariants,
  getVariantById,
  createVariant,
  updateVariant,
  deleteVariant
} = require('../controllers/variants');

// GET /variants - Get all variants
router.get('/', getAllVariants);

// GET /variants/:id - Get a specific variant by ID
router.get('/:id', getVariantById);

// POST /variants - Create a new variant
router.post('/', createVariant);

// PUT /variants/:id - Update a variant
router.put('/:id', updateVariant);

// DELETE /variants/:id - Delete a variant
router.delete('/:id', deleteVariant);

module.exports = router;
