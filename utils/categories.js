/**
 * Serialize a single category object
 * @param {Object} category - The category object to serialize
 * @returns {Object} - The serialized category object
 */
const serializeCategory = (category) => {
  // Create a copy of the category to avoid mutating the original
  const serializedCategory = { ...category };
  
  return serializedCategory;
};

/**
 * Serialize an array of categories
 * @param {Array} categories - The array of category objects to serialize
 * @returns {Array} - The array of serialized category objects
 */
const serializeCategories = (categories) => {
  if (!Array.isArray(categories)) {
    return [];
  }
  
  return categories.map(serializeCategory);
};

module.exports = {
  serializeCategory,
  serializeCategories
};
