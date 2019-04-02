const RSMQWorker = require('rsmq-worker');
const worker = new RSMQWorker('email-queue', {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  redisPrefix: 'queue-worker'
});

worker.on('message', function(msg, next, id) {
  console.log(`Got messaage ${msg} with id ${id}, processed by ${process.env.PROCESS_NAME}`);
  next();
});

worker.start();