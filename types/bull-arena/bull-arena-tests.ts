import Arena from 'bull-arena';
import express from 'express';
import Bull from 'bull';

const router = express.Router();

const arena = Arena({
    queues: [
        {
            name: 'QueueOptions-PortHostConnectionOptions',
            host: 'host',
        },
        {
            name: 'QueueOptions-RedisUrlConnectionOptions',
            url: 'url',
        },
        {
            name: 'QueueOptions-RedisClientConnectionOptions',
            redis: {},
        },
    ],
    Bull,
});
router.use('/', arena);
