const express = require('express');
const redis = require('../redis');
const app = express();
const port = process.env.APP_PORT;

const USER_ID = '1234567890';

app.get('/products/count', (req, res) => {
  const date = new Date();

  /*
  * 💡Remeber that your user is most important stuff for key
  */
  const key = ``;

  /**
  * 🏃Where should redis start
  * 💡Remember that we need all products that user saw in past hour
  */
 const minScore = SET_MIN_SCORE;

  /**
  * 🏁At which score redis should stop looking?
  * 🤔Can it look in the future? Can redis do time traveling?
  */
  const maxScore = SET_MAX_SCORE;

  /**
  * 🔥Since you now have everything you can pull data from Redis
  * 💡There is command in redis for that https://redis.io/commands/ZCOUNT
  * 😱Remember that Redis client for node doesn't have promises
  */
  redis.SOME_FUNCITON(
  );
});

app.get('/products/:productId', (req, res) => {
  // Store user visits of single product page
  const productId = req.params.productId;
  /*
  * 🤔You need to format a key. What's the most important thing about your user?
  *   That's the thing you are looking for
  */
  const key = ``;

  /*
  * 💡You need a score for Sorted Sets in Redis
  *   you can get this from time
  */
  const score = INSERT_CURREN_TIME;

  /*
  * 🔥After you got everything (key, score) you now need to store information in redis
  *   since you need to use Sorted Sets, that can be done with
  *   https://redis.io/commands/ZADD
  */
  redis.SOME_FUNCITON(

  );
  res.send(`User ${USER_ID} just visited ${productId}`);
});

app.get('/products', (req, res) => {
  const date = new Date();

  /*
  * 💡Remeber that your user is most important stuff for key
  */
  const key = ``;

  /**
  * 🏃Where should redis start
  * 💡Remember that we need all products that user saw in past hour
  */
 const minScore = SET_MIN_SCORE;

  /**
  * 🏁At which score redis should stop looking?
  * 🤔Can it look in the future? Can redis do time traveling?
  */
  const maxScore = SET_MAX_SCORE;

  /**
  * 🔥Since you now have everything you can pull data from Redis
  * 💡There is command in redis for that https://redis.io/commands/ZRANGEBYSCORE
  * 😱Remember that Redis client for node doesn't have promises
  */
  redis.SOME_FUNCITON(
  );
});

app.listen(port, () => {
  console.log(`starting server at ${port}`);
});
