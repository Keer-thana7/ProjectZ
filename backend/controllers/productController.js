const path = require('path');
const aiService = require('../services/aiService');
const scraper = require('../services/scraper');

const handleProductUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    const imagePath = path.join(__dirname, '..', req.file.path);
    console.log("Image received:", imagePath);

    // Step 1: Predict label from image
    const label = await aiService.predictLabel(imagePath);

    // Step 2: Use label to scrape websites
    const results = await scraper.scrapeWebsites(label);

    return res.json(results);
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { handleProductUpload };
