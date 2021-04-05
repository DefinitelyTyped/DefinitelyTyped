import Arena from 'bull-arena';
import express from 'express';
import Bull from 'bull';
import Redis from 'ioredis';

const connection = new Redis();
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
        {
            name: 'QueueOptions-RedisClientConnectionOptions2',
            redis: connection,
        },
    ],
    Bull,
});
router.use('/', arena);
