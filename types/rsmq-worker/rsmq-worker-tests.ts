import * as RedisSMQ from 'rsmq';
import RSMQWorker = require('rsmq-worker');

var worker: RSMQWorker.Client;

worker = new RSMQWorker("my-queue");
worker.changeInterval(1);
worker.changeInterval([0, 1, 5, 10]);

worker.on('message', (message: RedisSMQ.Message, next: Function) => {
   console.log('received message: "' + message.message + "'");
    next();
});
worker.start();

worker.send('message1');
worker.send('message2', 1, (e: Error, id:string) => {
    worker.del(id);
});
worker.send('message3', () => {});

worker.stop();
