import BullBoard from 'bull-board';
import express from 'express';
import Queue from 'bull';

const redis = 'redis://127.0.0.1:6379';

const queueList = [new Queue('video transcoding', redis), new Queue('audio transcoding', redis)];
const queue = BullBoard.createQueues(redis);
const app = express();

BullBoard.setQueues(queueList);

app.use('/queues', BullBoard.UI);
queue.add('pdf transcoding', { redis: { host: redis } });
