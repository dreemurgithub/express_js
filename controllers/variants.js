const { variants } = require('../services/variants');
const { serializeVariant, serializeVariants } = require('../utils/variants');

// Get all variants
const getAllVariants = (req, res) => {
    res.json({ variants: serializeVariants(variants) });
};

// Get variant by ID
const getVariantById = (req, res) => {
    const { id } = req.params;
    const variant = variants.find(v => v.id === id);

    if (!variant) {
        return res.status(404).json({ message: 'Variant not found' });
    }

    res.json({ variant: serializeVariant(variant) });
};

// Create a new variant
const createVariant = (req, res) => {
    const { id, label, type, default: defaultValue, options } = req.body;

    if (!id || !label || !type) {
        return res.status(400).json({ message: 'ID, label, and type are required' });
    }

    // Check if variant with this ID already exists
    const existingVariant = variants.find(v => v.id === id);
    if (existingVariant) {
        return res.status(409).json({ message: 'Variant with this ID already exists' });
    }

    const newVariant = {
        id,
        label,
        type,
        default: defaultValue,
        options: options || []
    };

    variants.push(newVariant);

    res.status(201).json({ message: 'Variant created', variant: serializeVariant(newVariant) });
};

// Update a variant
const updateVariant = (req, res) => {
    const { id } = req.params;
    const { label, type, default: defaultValue, options } = req.body;

    const variantIndex = variants.findIndex(v => v.id === id);

    if (variantIndex === -1) {
        return res.status(404).json({ message: 'Variant not found' });
    }

    // Update variant properties
    if (label) variants[variantIndex].label = label;
    if (type) variants[variantIndex].type = type;
    if (defaultValue !== undefined) variants[variantIndex].default = defaultValue;
    if (options !== undefined) variants[variantIndex].options = options;

    res.json({ message: 'Variant updated', variant: serializeVariant(variants[variantIndex]) });
};

// Delete a variant
const deleteVariant = (req, res) => {
    const { id } = req.params;
    const variantIndex = variants.findIndex(v => v.id === id);

    if (variantIndex === -1) {
        return res.status(404).json({ message: 'Variant not found' });
    }

    const deletedVariant = variants.splice(variantIndex, 1);
    res.json({ message: 'Variant deleted', variant: serializeVariant(deletedVariant[0]) });
};

module.exports = {
    getAllVariants,
    getVariantById,
    createVariant,
    updateVariant,
    deleteVariant
};
