// Type definitions for bull-arena 3.0
// Project: https://github.com/bee-queue/arena/
// Definitions by: Levi Bostian <https://github.com/levibostian>
//                 Eli Skeggs <https://github.com/skeggse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import BeeQueue = require('bee-queue');
import BullQueue = require('bull');
import { RequestHandler } from 'express';
import { ClientOpts } from 'redis';

declare function Arena(
    options: BullArena.MiddlewareBeeOptions | BullArena.MiddlewareBullOptions | BullArena.MiddlewareOptions,
    listenOptions?: BullArena.MiddlewareListenOptions,
): RequestHandler;

declare namespace BullArena {
    type NonEmptyArray<T> = [T, ...T[]];

    interface MiddlewareBeeOptions {
        Bee: typeof BeeQueue;
        Bull?: typeof BullQueue;
        queues: NonEmptyArray<BeeQueueOptions & ConnectionOptions>;
    }

    interface MiddlewareBullOptions {
        Bee?: typeof BeeQueue;
        Bull: typeof BullQueue;
        queues: NonEmptyArray<BullQueueOptions & ConnectionOptions>;
    }

    interface MiddlewareOptions {
        Bee: typeof BeeQueue;
        Bull: typeof BullQueue;
        queues: NonEmptyArray<QueueOptions & ConnectionOptions>;
    }

    interface MiddlewareListenOptions {
        readonly port?: number;
        readonly host?: string;
        readonly basePath?: string;
        readonly disableListen?: boolean;
        readonly useCdn?: boolean;
    }

    interface QueueOptions {
        readonly name: string;
        readonly hostId?: string;
        readonly type?: 'bull' | 'bee';
        readonly prefix?: 'bull' | 'bq' | string;
    }

    interface BeeQueueOptions extends QueueOptions {
        readonly type: 'bee';
    }

    interface BullQueueOptions extends QueueOptions {
        readonly type?: 'bull';
    }

    type ConnectionOptions = PortHostConnectionOptions | RedisUrlConnectionOptions | RedisClientConnectionOptions;

    interface PortHostConnectionOptions {
        host: string;
        port?: number;
        password?: string;
        db?: string;
    }

    interface RedisUrlConnectionOptions {
        url: string;
    }

    interface RedisClientConnectionOptions {
        redis: ClientOpts;
    }
}

export = Arena;
