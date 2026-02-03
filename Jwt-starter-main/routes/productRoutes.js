const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
  res.json({
    message: "Data produk berhasil diakses",
    user: req.user
  });
});

module.exports = router;