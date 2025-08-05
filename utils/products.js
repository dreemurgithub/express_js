/**
 * Serialize a single product object
 * @param {Object} product - The product object to serialize
 * @returns {Object} - The serialized product object
 */
const serializeProduct = (product) => {
  // Create a copy of the product to avoid mutating the original
  const serializedProduct = { ...product };
  
  // Format price if it exists
  if (serializedProduct.price && typeof serializedProduct.price === 'number') {
    serializedProduct.price = parseFloat(serializedProduct.price.toFixed(2));
  }
  
  // Format sale information if it exists
  if (serializedProduct.sale) {
    const sale = { ...serializedProduct.sale };
    
    if (sale.type === 'percent' && typeof sale.percent === 'number') {
      sale.percent = parseFloat(sale.percent.toFixed(2));
    } else if (sale.type === 'fixed' && typeof sale.amount === 'number') {
      sale.amount = parseFloat(sale.amount.toFixed(2));
    }
    
    serializedProduct.sale = sale;
  }
  
  // Ensure categoryId is always an array
  if (serializedProduct.categoryId && !Array.isArray(serializedProduct.categoryId)) {
    serializedProduct.categoryId = [serializedProduct.categoryId];
  }
  
  // Ensure variantId is always an array
  if (serializedProduct.variantId && !Array.isArray(serializedProduct.variantId)) {
    serializedProduct.variantId = [serializedProduct.variantId];
  }
  
  return serializedProduct;
};

/**
 * Serialize an array of products
 * @param {Array} products - The array of product objects to serialize
 * @returns {Array} - The array of serialized product objects
 */
const serializeProducts = (products) => {
  if (!Array.isArray(products)) {
    return [];
  }
  
  return products.map(serializeProduct);
};

module.exports = {
  serializeProduct,
  serializeProducts
};
