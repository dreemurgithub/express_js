// Sample data - in a real app, this would come from a database
const { products } = require('../services/products');
const { serializeProduct, serializeProducts } = require('../utils/products');

// Get all products
const getAllProducts = (req, res) => {
    res.json({ products: serializeProducts(products) });
};

// Get product by ID
const getProductById = (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ product: serializeProduct(product) });
};

// Create a new product
const createProduct = (req, res) => {
    const { name, price, description } = req.body;

    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        price,
        description: description || ''
    };

    products.push(newProduct);

    res.status(201).json({ message: 'Product created', product: serializeProduct(newProduct) });
};

// Update a product
const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;

    const productIndex = products.findIndex(p => p.id === parseInt(id));

    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    // Update product properties
    if (name) products[productIndex].name = name;
    if (price) products[productIndex].price = price;
    if (description !== undefined) products[productIndex].description = description;

    res.json({ message: 'Product updated', product: serializeProduct(products[productIndex]) });
};

// Delete a product
const deleteProduct = (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(p => p.id === parseInt(id));

    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }

    const deletedProduct = products.splice(productIndex, 1);
    res.json({ message: 'Product deleted', product: serializeProduct(deletedProduct[0]) });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
