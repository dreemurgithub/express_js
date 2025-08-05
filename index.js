const express = require('express');
const app = express();
const port = 4000;

// Middleware
app.use(express.json());

// Routes
const productRoutes = require('./routes/products');

// Use product routes
app.use('/products', productRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Products API' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
  