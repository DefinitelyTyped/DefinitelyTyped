// Type definitions for node-redis-pubsub 3.0
// Project: https://github.com/louischatriot/node-redis-pubsub#readme
// Definitions by: Rene Keijzer <https://github.com/renekeijzer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as redis from "redis";

declare function NRP(options: object): NRP.NodeRedisPubSub;
declare namespace NRP {
    function initClient(options: object): NodeRedisPubSub;
    class NodeRedisPubSub {
        constructor(options: object);
        getRedisClient(): redis.RedisClient;
        on(
            channel: string,
            handler: (data: string, channel: string) => void,
            callback?: () => void
        ): () => void;
        subscribe(
            channel: string,
            handler: (data: string, channel: string) => void,
            callback?: () => void
        ): () => void;
        emit(channel: string, message: string): void;
        publish(channel: string, message: string): void;
        quit(): void;
        end(): void;
    }
}

export = NRP;
