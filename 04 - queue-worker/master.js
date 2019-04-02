const RedisSMQ = require('rsmq');
const rsmq = new RedisSMQ({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  ns: 'queue-worker'
});

rsmq.createQueueAsync({ qname: 'email-queue' }, function() {
  setInterval(() => {
    rsmq.sendMessageAsync({ qname: 'email-queue', message: 'Test' });
  }, 2000);
});
