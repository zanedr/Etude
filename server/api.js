// const environment = process.env.NODE_ENV || 'development';
// const configuration = require('../knexfile')[environment];
// const database = require('knex')(configuration);

//**************GET REQUESTS***********************//
const getSongs = (req, res) => {
  console.log('yoyoyo')
  res.send('hi dare');

  database('songs').select()
  .then(songs => {
    songs.length ? res.status(200).json(songs) : res.status(404).send('No songs were found');
  })
  .catch(error => res.status(500).send(error));
}

const postSong = (req, res) => {
  const { artist, title, timestamps, audio, tab, priority } = req.body;

  if(!title.length) {
    return res.status(422).send({
        error: 'Please include a song title.',
      });
  }
  database('songs')
    .where(database.raw('lower("title")'), title.toLowerCase())
  .then((singleSong) => {
    if (artistFound[0] && singleSong[0]) {
      return res.status(422).send({
        error: 'Song is already in the database under that artist',
      });
    } else {
      database('songs').insert({ title,
        artist},
        'id')
      .then((newArtist) => {
        return res.status(201).send({
          success: `Song ${title} added to database.`,
        });
      });
    }
  })
}

const deleteSong = (req, res) => {
  const title = req.query.title;

  database('songs').where('title', title).del()
  .then(() => {
    return res.status(204).send({
      success: `Song entitled ${title} has been deleted from database`,
    });
  })
    .catch(() => {
      return res.status(500);
    });
});
}

module.exports = {
  getSongs
}
