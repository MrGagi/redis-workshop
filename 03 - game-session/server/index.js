const express = require('express');
const redis = require('../redis');
const app = express();
const port = process.env.APP_PORT;

/**
 * We need to build the simulation of game sessions
 * All data are kept in redis, every session can contain
 * only two users, so it's 1vs1 game session
 */

app.get('/game/start', (req, res) => {
  const gameName = req.query.gameName;
});

app.get(`/game/:gameId/join`, (req, res) => {
  const gameId = req.params.gameId;
});

app.get(`/game/:gameId/stop`, (req, res) => {
  const gameId = req.params.gameId;
});

app.listen(port, () => {
  console.log(`starting server at ${port}`);
});
