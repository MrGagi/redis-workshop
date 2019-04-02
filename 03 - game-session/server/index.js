const express = require('express');
const redis = require('../redis');
const app = express();
const port = process.env.APP_PORT;

/**
 * Hint
 */

app.get('/game/start', (req, res) => {
  const gameName = req.query.gameName;
});

app.get(`/game/:gameId/join`, (req, res) => {

});

app.get(`/game/:gameId/stop`, (req, res) => {

});

app.listen(port, () => {
  console.log(`starting server at ${port}`);
});
