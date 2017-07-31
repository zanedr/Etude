const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/songs', api.getSongs);

module.exports = router;
