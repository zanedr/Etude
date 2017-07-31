// const environment = process.env.NODE_ENV || 'development';
// const configuration = require('../knexfile')[environment];
// const database = require('knex')(configuration);

//**************GET REQUESTS***********************//
const getSongs = (req, res) => {
  console.log('yoyoyo')
  res.send('hi dare');

  // database('songs').select()
  // .then(songs => {
  //   songs.length ? res.status(200).json(songs) : res.status(404).send('No songs were found');
  // })
  // .catch(error => res.status(500).send(error));
}

module.exports = {
  getSongs
}
