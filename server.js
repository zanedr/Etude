const express = require('express');
const path = require('path');
const router = require('./server/router');
const bodyParser = require('body-parser');

const port = (process.env.PORT || 3001);
const app = express();


app.use(bodyParser.json());

app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`etude server listening on port ${port}!`);
});

module.exports = app;
