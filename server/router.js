
const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/api/v1/songs', api.getSongs);

router.post('/api/v1/songs', api.postSong);

router.patch('/api/v1/songs', api.patchSong);

router.delete('/api/v1/songs', api.deleteSong);

module.exports = router;
