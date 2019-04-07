# Recently Viewed Products

We need to show recently viewed products for one user.
Also, we are going to use **Redis** as our data storage.

## Usage

User is going to hit your url [Product 1](http://localhost:3000/products/1)
when user hits that url you need to store that information into the Redis.

User can go to the [Products](http://localhost:3000/products) and there we need to list the products that user saw in the past hour.

## Hint

You can start looking at the server/index.js, there is application

![How it works](https://raw.githubusercontent.com/MrGagi/redis-workshop/master/diagrams/02%20-%20recently-viewed/Recently%20Viewed%20Products-Recently%20Viewed%20Products.png)

![How it looks](https://raw.githubusercontent.com/MrGagi/redis-workshop/master/diagrams/02%20-%20recently-viewed/Recently%20Viewed%20Products-Look%20in%20redis.png)

## Solution

You can find solution in **solution** folder, there is index.js file which contains code.