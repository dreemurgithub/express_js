/**
 * Randomly changes the order status to one of three types
 * @param {Object} order - The order object to modify
 * @returns {Object} The order object with updated status
 */
function randomizeOrderStatus(order) {
  // Create a copy of the order object to avoid mutating the original
  const modifiedOrder = { ...order };
  
  // Define the possible status types
  const statusTypes = ["Đã đặt", "Đang chuẩn bị", "Đã phục vụ"];
  
  // Randomly select one of the status types
  const randomIndex = Math.floor(Math.random() * statusTypes.length);
  
  // Update the order status
  modifiedOrder.status = statusTypes[randomIndex];
  
  return modifiedOrder;
}

module.exports = {
  randomizeOrderStatus
};
