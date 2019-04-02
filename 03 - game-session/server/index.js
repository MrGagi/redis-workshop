const express = require('express');
const redis = require('../redis');
const app = express();
const port = process.env.APP_PORT;

app.get('/game/start', (req, res) => {
  const userId = Math.random();
  const gameId = Math.random() * userId + 1;
  const key = `games/sessions/${gameId}`;

  /**
   * 💡You need to store player id and name
   *   You can get name by req.query.gameName
   */
  redis.INSERT_COMMAND( );
  redis.INSERT_COMMAND( );
  res.send(`Game ${gameId} created`);
});

app.get(`/game/:gameId/join`, (req, res) => {
  const userId = Math.random();
  const key = `games/sessions/${req.params.gameId}`;

  isRoomEmpty(key).then(() => {
    /**
     * 💡After you know that user can join the session
     * you need to write some information to the redis
     * about user that is joining
     */
  }).catch(() => {
    res.send('Room is full or doesnt exists');
  });
});

app.get(`/game/:gameId/stop`, (req, res) => {
  const key = `games/sessions/${req.params.gameId}`;

  redis.DELETE_COMMAND();
});

function isRoomEmpty(key) {
  return new Promise((resolve, reject) => {
    /**
     * 💡You need to check does key already exists
     * remember that redis will return 1 if it exists
     */
    redis.EXISTS_COMMAND(SOME_KEY, SOME_KEY, function(err, response) {
      if (err || response === 1) {
        reject();
      }

      resolve();
    });
  });
}

app.listen(port, () => {
  console.log(`starting server at ${port}`);
});
