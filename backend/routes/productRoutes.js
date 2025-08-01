const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { handleProductUpload } = require('../controllers/productController');

// Set up multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});
const upload = multer({ storage: storage });

// POST /api/products/upload
router.post('/upload', upload.single('image'), handleProductUpload);

module.exports = router;
