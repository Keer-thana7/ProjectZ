// Dummy AI logic for now
const predictLabel = async (imagePath) => {
  console.log('Pretending to analyze image:', imagePath);
  // TODO: Replace with real call to Sun's predict.py
  return 'Nike Sneakers';
};

module.exports = { predictLabel };
