exports.seed = function(knex, Promise) {
  return knex('songs').del()
  .then(() => {
    let songPromises = createSong(knex)
    return Promise.all([...songPromises])
  });
};

const createSong = (knex) => {
  return songArray.map((song) => {
    const {title, artist, priority, tab, audio, timestamps } = song;

    return knex('songs').insert({
      title, artist, priority, tab, audio, timestamps
    });
  });
};
