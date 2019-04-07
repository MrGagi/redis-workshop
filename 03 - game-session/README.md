# Game Session

We need to build the game session, players can join to that game session and it can be deleted.
User should be able to hit different API urls and do something with game session.

## Usage

User is going to hit your url [Create Session](http://localhost:3000/game/start?gameName=Game)
you need to store some information in redis that are related to the game session

Other uses can join the game session through url [Join Session](http://localhost:3000/game/:gameId:/join)

And game can be deleted with url [Delete Session](http://localhost:3000/game/:gameId/stop)

All endpoints are GET methods for sake of simplicity.

## Hint

You need to start looking at **server** folder

![Start session](https://raw.githubusercontent.com/MrGagi/redis-workshop/master/diagrams/03%20-%20game-session/Redis%20-%20Game%20Session-Game%20Session%20-%20Start.png)

![Join session](https://raw.githubusercontent.com/MrGagi/redis-workshop/master/diagrams/03%20-%20game-session/Redis%20-%20Game%20Session-Game%20Session%20-%20Join.png)

![Delete session](https://raw.githubusercontent.com/MrGagi/redis-workshop/master/diagrams/03%20-%20game-session/Redis%20-%20Game%20Session-Game%20Session%20-%20Stop.png)

## Solution

You can find solution in **solution** folder, there is index.js file which contains code.