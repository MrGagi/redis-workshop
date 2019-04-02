const express = require('express');
const redis = require('../redis');
const app = express();
const port = process.env.APP_PORT;

app.get('/game/start', (req, res) => {
  const userId = Math.random();
  const gameId = Math.random() * userId + 1;
  const key = `games/sessions/${gameId}`;

  redis.hset(key, 'player_1', userId);
  redis.hset(key, 'name', req.query.gameName);
  res.send(`Game ${gameId} created`);
});

app.get(`/game/:gameId/join`, (req, res) => {
  const userId = Math.random();
  const key = `games/sessions/${req.params.gameId}`;

  isRoomEmpty(key).then(() => {
    redis.hset(key, 'player_2', userId);
    redis.hgetall(key, function(err, { name, player_1 }) {
      res.send(`You have been joined to the ${name} with player ${player_1}`);
    });
  }).catch(() => {
    res.send('Room is full or doesnt exists');
  });
});

app.get(`/game/:gameId/stop`, (req, res) => {
  const key = `games/sessions/${req.params.gameId}`;

  redis.del(key, function(err, response) {
    if (response === 1) {
      res.send(`Game has been stoped`);
    }
    res.send(`Game doesnt exists`);
  });
});

function isRoomEmpty(key) {
  return new Promise((resolve, reject) => {
    redis.hexists(key, 'player_2', function(err, response) {
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
