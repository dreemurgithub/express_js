const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
const variantRoutes = require('./routes/variants');
const cartRoutes = require('./routes/cart');

// Use product routes
app.use('/products', productRoutes);
// Use category routes
app.use('/categories', categoryRoutes);
// Use variant routes
app.use('/variants', variantRoutes);
// Use cart routes
app.use('/cart', cartRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Products API' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
