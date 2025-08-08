const express = require('express');
const { getCartById,getCartAll } = require('../controllers/cart');

const router = express.Router();

router.get('/:id', getCartById);
router.get('/', getCartAll);

module.exports = router;
