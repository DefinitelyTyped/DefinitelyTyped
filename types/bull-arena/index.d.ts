// Type definitions for bull-arena 3.0
// Project: https://github.com/bee-queue/arena/
// Definitions by: Levi Bostian <https://github.com/levibostian>
//                 Gaurav Sharma <https://github.com/gtpan77>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

import { RequestHandler } from "express";
import { ClientOpts } from "redis";
import Bull = require("bull");
import Bee = require("bee-queue");
import { Queue } from "bullmq";

declare function Arena(
    options: BullArena.MiddlewareOptions,
    listenOptions?: BullArena.MiddlewareListenOptions
): RequestHandler;

declare namespace BullArena {
    interface MiddlewareOptions {
        Bull?: typeof Bull;
        Bee?: typeof Bee;
        BullMQ?: typeof Queue;
        queues: Array<QueueOptions & ConnectionOptions>;
    }

    interface MiddlewareListenOptions {
        port?: number;
        host?: string;
        basePath?: string;
        disableListen?: boolean;
        useCdn?: boolean;
    }

    interface QueueOptions {
        name: string;
        hostId?: string;
        type?: "bull" | "bee" | "bullmq" | string;
        prefix?: "bull" | "bq" | string;
    }

    type ConnectionOptions =
        | PortHostConnectionOptions
        | RedisUrlConnectionOptions
        | RedisClientConnectionOptions;

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
