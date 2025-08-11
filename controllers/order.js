// Controller for order routes
const { orders } = require('../services/order');

// GET /order - Return all orders or filter by username if provided
const getAllOrders = (req, res) => {
  const { username } = req.query;
  
  if (username) {
    const userOrders = orders.filter(order => order.username === username);
    return res.json(userOrders);
  }
  
  res.json(orders);
};

// GET /order/:id - Return a specific order by ID
const getOrderById = (req, res) => {
  const orderId = req.params.id;
  const order = orders.find(order => order.id === orderId);
  
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  
  res.json(order);
};

// POST /order - Return the request body (as specified)
const createOrder = (req, res) => {
  res.json(req.body);
};

// PUT /order/:id - Return the request body (as specified)
const updateOrder = (req, res) => {
  res.json(req.body);
};

// DELETE /order/:id - Delete an order by ID
const deleteOrder = (req, res) => {
  const orderId = req.params.id;
  const orderIndex = orders.findIndex(order => order.id === orderId);
  
  if (orderIndex === -1) {
    return res.status(404).json({ message: 'Order not found' });
  }
  
  orders.splice(orderIndex, 1);
  res.status(204).send();
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
};
