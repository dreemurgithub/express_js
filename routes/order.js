const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
} = require('../controllers/order');

// GET /order - Get all orders
router.get('/', getAllOrders);

// GET /order/:id - Get a specific order by ID
router.get('/:id', getOrderById);

// POST /order - Create a new order (just returns req.body as specified)
router.post('/', createOrder);

// PUT /order/:id - Update an order (just returns req.body as specified)
router.put('/:id', updateOrder);

// DELETE /order/:id - Delete an order by ID
router.delete('/:id', deleteOrder);

module.exports = router;
