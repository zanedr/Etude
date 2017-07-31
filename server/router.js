const environment = process.env.NODE_ENV || 'production';
const config = require('./knexfile.js')[environment];
const database = require('knex')(config);

const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/songs', api.getSongs);

router.post('/songs', api.getSongs);

router.delete('/songs', api.getSongs);

module.exports = router;
