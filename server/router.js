
const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/songs', api.getSongs);

router.post('/songs', api.getSongs);

router.patch('/songs', api.getSongs);

router.delete('/songs', api.getSongs);

module.exports = router;
