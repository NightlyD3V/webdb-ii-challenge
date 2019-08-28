const express = require('express');

const router = express.Router();
const db = require('../dbConfig.js');

/* GET: /api/cars/ */
router.get('/', (req, res) => {
    db('car-dealer')
    .then((cars) => {
        res.status(200).json(cars);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            message: 'Error getting all cars!'
        })
    });
});

/* POST: /api/cars/ */
router.post('/', (req,res) => {
    const carData = req.body;
    db('car-dealer').insert(carData)
    .then((post) => {
        req.status(200).json(post);
    })
    .catch((err) => {
        console.log(err);
        req.status(500).json({
            message: 'Error creating new car!'
        });
    });
});

module.exports = router;