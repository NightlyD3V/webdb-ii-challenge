const PORT = process.env.PORT || 4000;
const express = require('express');
const server = express();
const carRouter = require('./data/cars/carRouter.js.js');

server.use(express.json());
server.use(helmet());
server.use('/api/cars/', carRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server is running!'
    });
});

server.listen(PORT, () => {
    console.log(`***Server is listening on port: ${PORT}***`)
});

module.exports = server;