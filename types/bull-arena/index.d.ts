// Type definitions for bull-arena 3.0
// Project: https://github.com/bee-queue/arena/
// Definitions by: Levi Bostian <https://github.com/levibostian>
//                 Gaurav Sharma <https://github.com/gtpan77>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

import { RequestHandler } from "express";
import { ClientOpts } from "redis";
import { Redis } from "ioredis";

declare function Arena(
    options: BullArena.MiddlewareOptions,
    listenOptions?: BullArena.MiddlewareListenOptions
): RequestHandler;

declare namespace BullArena {
    interface MiddlewareOptions {
        Bull?: QueueConstructor | undefined;
        Bee?: QueueConstructor | undefined;
        BullMQ?: QueueConstructor | undefined;
        queues: Array<QueueOptions & ConnectionOptions>;
    }

    interface QueueConstructor {
        new (queueName: string, opts?: QueueOptions): Queue;
    }

    interface Queue {
        // Interface of Queue is much larger and
        // inconsistent between different packages.
        // We are using an example method here
        // that is consistent across all providers.
        getJob(jobId: string): Promise<unknown>;
    }

    interface MiddlewareListenOptions {
        port?: number | undefined;
        host?: string | undefined;
        basePath?: string | undefined;
        disableListen?: boolean | undefined;
        useCdn?: boolean | undefined;
    }

    interface QueueOptions {
        name: string;
        hostId?: string | undefined;
        type?: "bull" | "bee" | "bullmq" | string | undefined;
        prefix?: "bull" | "bq" | string | undefined;
    }

    type ConnectionOptions =
        | PortHostConnectionOptions
        | RedisUrlConnectionOptions
        | RedisClientConnectionOptions;

    interface PortHostConnectionOptions {
        host: string;
        port?: number | undefined;
        password?: string | undefined;
        db?: string | undefined;
    }

    interface RedisUrlConnectionOptions {
        url: string;
    }

    interface RedisClientConnectionOptions {
        redis: ClientOpts | Redis;
    }
}

export = Arena;
