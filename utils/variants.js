/**
 * Serialize a single variant object
 * @param {Object} variant - The variant object to serialize
 * @returns {Object} - The serialized variant object
 */
const serializeVariant = (variant) => {
  // Create a copy of the variant to avoid mutating the original
  const serializedVariant = { ...variant };
  
  // Ensure options is always an array
  if (serializedVariant.options && Array.isArray(serializedVariant.options)) {
    serializedVariant.options = serializedVariant.options.map(option => {
      const serializedOption = { ...option };
      
      // Format priceChange if it exists
      if (serializedOption.priceChange) {
        const priceChange = { ...serializedOption.priceChange };
        
        if (priceChange.type === 'percent' && typeof priceChange.percent === 'number') {
          priceChange.percent = parseFloat(priceChange.percent.toFixed(2));
        } else if (priceChange.type === 'fixed' && typeof priceChange.amount === 'number') {
          priceChange.amount = parseFloat(priceChange.amount.toFixed(2));
        }
        
        serializedOption.priceChange = priceChange;
      }
      
      return serializedOption;
    });
  }
  
  return serializedVariant;
};

/**
 * Serialize an array of variants
 * @param {Array} variants - The array of variant objects to serialize
 * @returns {Array} - The array of serialized variant objects
 */
const serializeVariants = (variants) => {
  if (!Array.isArray(variants)) {
    return [];
  }
  
  return variants.map(serializeVariant);
};

module.exports = {
  serializeVariant,
  serializeVariants
};
