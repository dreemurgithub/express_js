const { cartService } = require("../services/cart");

const getCartById = (req, res) => {
  const { id } = req.params;
  const cart = cartService.find((c) => c.id === parseInt(id));

  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  res.json(cart);
};

const getCartAll = (req, res) => {
  res.json(cartService);
};

module.exports = {
  getCartById,
  getCartAll
};
