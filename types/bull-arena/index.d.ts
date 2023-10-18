import { RequestHandler } from "express";
import { Redis } from "ioredis";
import { ClientOpts } from "redis";

declare function Arena(
    options: BullArena.MiddlewareOptions,
    listenOptions?: BullArena.MiddlewareListenOptions,
): RequestHandler;

declare namespace BullArena {
    interface MiddlewareOptions {
        Bull?: QueueConstructor | undefined;
        Bee?: QueueConstructor | undefined;
        BullMQ?: QueueConstructor | undefined;
        queues: Array<QueueOptions & ConnectionOptions>;
    }

    interface QueueConstructor {
        new(queueName: string, opts?: QueueOptions): Queue;
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
