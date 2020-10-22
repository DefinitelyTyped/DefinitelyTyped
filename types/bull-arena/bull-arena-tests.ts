import Arena from 'bull-arena';
import express from 'express';

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
});
router.use('/', arena);
