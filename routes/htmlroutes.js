var path = require("path");
const express = require("express");
const router = express.router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..public/index.html'));
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

module.exports = router;