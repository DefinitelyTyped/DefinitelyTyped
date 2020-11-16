import * as queue from 'mongodb-queue';
import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient('mongodb://localhost:27017');
mongoClient.connect().then(() => {
    const deadQueue = queue(mongoClient.db('test'), 'test-deadqueue');
    const opts: queue.QueueOptions = {
        deadQueue,
        delay: 0,
        maxRetries: 5,
        visibility: 30,
    };
    const mongoQueue = queue(mongoClient.db('test'), 'test-queue', opts);

    mongoQueue.add('foo', (err, res) => {
        if (err) {
            console.log('error: ' + err);
        } else {
            const msgId: string = res;
            console.log('msgId: ' + msgId);
        }
    });

    mongoQueue.get((err, res) => {
        if (err) {
            console.log('error: ' + err);
        } else {
            if (res) {
                const msg: queue.QueueMessage = res;
                console.log('msg: ' + JSON.stringify(msg));
            } else {
                console.log('no messages available');
            }
        }
    });

    mongoQueue.ping('testAck', (err, res) => {
        if (err) {
            console.log('error: ' + err);
        } else {
            const msgId: string = res;
            console.log('msgId: ' + msgId);
        }
    });

    mongoQueue.ack('testAck', (err, res) => {
        if (err) {
            console.log('error: ' + err);
        } else {
            const msgId: string = res;
            console.log('msgId: ' + msgId);
        }
    });

    mongoQueue.total((err, res) => {
        if (err) {
            console.log('error: ' + err);
        } else {
            const total: number = res;
            console.log('total: ' + total);
        }
    });

    mongoQueue.size((err, res) => {
        if (err) {
            console.log('error: ' + err);
        } else {
            const size: number = res;
            console.log('size: ' + size);
        }
    });

    mongoQueue.inflight((err, res) => {
        if (err) {
            console.log('error: ' + err);
        } else {
            const inflight: number = res;
            console.log('inflight: ' + inflight);
        }
    });

    mongoQueue.done((err, res) => {
        if (err) {
            console.log('error: ' + err);
        } else {
            const done: number = res;
            console.log('done: ' + done);
        }
    });
});
