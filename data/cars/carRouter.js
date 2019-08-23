const express = require('express');

const router = express.Router();
const db = require('../dbConfig.js');

router.get('/',(req, res) => {
    res.status(200).json(res);
});

module.exports = router;