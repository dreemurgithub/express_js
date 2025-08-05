const { categories } = require('../services/categories');
const { serializeCategory, serializeCategories } = require('../utils/categories');

// Get all categories
const getAllCategories = (req, res) => {
    res.json({ categories: serializeCategories(categories) });
};

// Get category by ID
const getCategoryById = (req, res) => {
    const { id } = req.params;
    const category = categories.find(c => c.id === id);

    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }

    res.json({ category: serializeCategory(category) });
};

// Create a new category
const createCategory = (req, res) => {
    const { id, name, icon } = req.body;

    if (!id || !name) {
        return res.status(400).json({ message: 'ID and name are required' });
    }

    // Check if category with this ID already exists
    const existingCategory = categories.find(c => c.id === id);
    if (existingCategory) {
        return res.status(400).json({ message: 'Category with this ID already exists' });
    }

    const newCategory = {
        id,
        name,
        icon: icon || ''
    };

    categories.push(newCategory);

    res.status(201).json({ message: 'Category created', category: serializeCategory(newCategory) });
};

// Update a category
const updateCategory = (req, res) => {
    const { id } = req.params;
    const { name, icon } = req.body;

    const categoryIndex = categories.findIndex(c => c.id === id);

    if (categoryIndex === -1) {
        return res.status(404).json({ message: 'Category not found' });
    }

    // Update category properties
    if (name) categories[categoryIndex].name = name;
    if (icon !== undefined) categories[categoryIndex].icon = icon;

    res.json({ message: 'Category updated', category: serializeCategory(categories[categoryIndex]) });
};

// Delete a category
const deleteCategory = (req, res) => {
    const { id } = req.params;
    const categoryIndex = categories.findIndex(c => c.id === id);

    if (categoryIndex === -1) {
        return res.status(404).json({ message: 'Category not found' });
    }

    const deletedCategory = categories.splice(categoryIndex, 1);
    res.json({ message: 'Category deleted', category: serializeCategory(deletedCategory[0]) });
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};
