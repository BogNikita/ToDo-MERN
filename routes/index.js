const express = require('express');
const auth = require('./auth');
const main = require('./task')

const router = express.Router();

router.use('/api/auth/', auth);
router.use('/api/main/', main);

module.exports = router;