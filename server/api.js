const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

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

//**************POST REQUESTS***********************//
const postSong = (req, res) => {
  const title = req.body.title
  const artist = req.body.artist || '';
  const audio = req.body.audio || '';
  const tab = req.body.tab || '';
  const priority = req.body.priority || 5;
  const timestamps = req.body.timestamps || '';
 
  if(!title.length) {
    return res.status(422).send({
        error: 'Please include a song title.',
    });
  }
  database('songs').insert({ title,
    artist, timestamps, audio, tab, priority},
    'id')
  .then((newArtist) => {
    return res.status(201).send({
      success: `Song ${title} added to database.`,
    });
  });
};

//**************PATCH REQUESTS***********************//

const patchSong = (req, res) => {
  const title = req.body.title
  const artist = req.body.artist || '';
  const audio = req.body.audio || '';
  const tab = req.body.tab || '';
  const priority = req.body.priority || 5;
  const timestamps = req.body.timestamps || '';
  const id = req.body.id;

  database('songs').where('id', id)
    .update('title', title)
    .update('artist', artist)
    .update('audio', audio)
    .update('tab', tab)
    .update('priority', priority)
    .update('timestamps', timestamps)
    .then(() => {
      return res.status(201).send({
        success: `Song entitled ${title} updated to reflect changes.`
      })
    })

};

//**************DELETE REQUESTS***********************//
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
