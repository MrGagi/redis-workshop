
const express = require('express');
const redis = require('../redis');
const app = express();
const port = process.env.APP_PORT;

const USER_ID = '1234567890';

app.get('/products/count', (req, res) => {
  const date = new Date();
  const key = `product:user:${USER_ID}`;
  const maxScore = date.getTime();
  const minScore = date.setHours(date.getHours() - 1);
  redis.zcount(
    key,
    minScore,
    maxScore,
    (err, numberOfProducts) => {
      res.send(`Use saw ${numberOfProducts} products in past hour`);
    }
  );
});

app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const key = `product:user:${USER_ID}`;

  const score = new Date().getTime();

  redis.zadd(
    key,
    score,
    JSON.stringify({ productId })
  );
  res.send(`User ${USER_ID} just visited ${productId}`);
});

app.get('/products', (req, res) => {
  let response = '';
  const date = new Date();
  const key = `product:user:${USER_ID}`;
  const maxScore = date.getTime();
  const minScore = date.setHours(date.getHours() - 1);
  redis.zrangebyscore(
    key,
    minScore,
    maxScore,
    (err, products) => {
      response = products.map((product) => {
        return `Hey it looks like you visited ${JSON.parse(product).productId}`
      });
      res.send(response);
    }
  );
});


app.listen(port, () => {
  console.log(`starting server at ${port}`);
});
