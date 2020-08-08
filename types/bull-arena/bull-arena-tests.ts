import Arena from 'bull-arena';
import express from 'express';

import BeeQueue = require('bee-queue');
import BullQueue = require('bull');

// $ExpectError
Arena({ queues: [] });

// $ExpectError
Arena({ Bee: BeeQueue, queues: [] });

// $ExpectError
Arena({ Bull: BullQueue, queues: [] });

// $ExpectError
Arena({ Bee: BeeQueue, Bull: BullQueue, queues: [] });

// $ExpectError
Arena({ Bee: BeeQueue, queues: [{}] });

// $ExpectError
Arena({ Bull: BullQueue, queues: [{}] });

Arena({ Bee: BeeQueue, queues: [{ name: 'test', type: 'bee', url: 'redis://' }] });

Arena({
    Bull: BullQueue,
    queues: [
        { name: 'test', url: 'redis://' },
        { name: 'test', type: 'bull', url: 'redis://' },
    ],
});

Arena({
    Bee: BeeQueue,
    Bull: BullQueue,
    queues: [
        { name: 'test', url: 'redis://' },
        { name: 'test', type: 'bee', url: 'redis://' },
    ],
});

// $ExpectError
Arena({
    Bee: BeeQueue,
    queues: [
        { name: 'test', url: 'redis://' },
        { name: 'test', type: 'bee', url: 'redis://' },
    ],
});

// $ExpectError
Arena({
    Bull: BullQueue,
    queues: [
        { name: 'test', url: 'redis://' },
        { name: 'test', type: 'bee', url: 'redis://' },
    ],
});

const router = express.Router();

const arena = Arena({
    Bull: BullQueue,
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
