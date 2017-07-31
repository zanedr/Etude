const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = (process.env.PORT || 3001);
const app = express();

const router = require('./server/router');

app.use(bodyParser.json());
app.use('/api/v1', router);
app.use(express.static('public'));
app.get('/', (request, response) => response.sendFile(path.join(__dirname, './public/index.html')));
app.get('*', (request, response) => response.sendFile(path.join(__dirname, './public/index.html')));

app.listen(port, () => {
  console.log(`Etude server listening on port ${port}!`);
});

module.exports = app;
