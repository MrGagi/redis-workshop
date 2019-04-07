const express = require('express');
const redis = require('../redis');
const app = express();
const port = process.env.APP_PORT;

const USER_ID = '1234567890';

app.get('/products/count', (req, res) => {
  const date = new Date();

  /**
  * 💡There is command in redis for that https://redis.io/commands/ZCOUNT
  *  You can use Date and Date#setHour method to get timestamp for score (min and max)
  */
  redis.SOME_FUNCITON(
  );
});

app.get('/products/:productId', (req, res) => {
  // Store user visits of single product page
  const productId = req.params.productId;

  res.send(`User ${USER_ID} just visited ${productId}`);
});

app.get('/products', (req, res) => {
  const date = new Date();
});

app.listen(port, () => {
  console.log(`starting server at ${port}`);
});
