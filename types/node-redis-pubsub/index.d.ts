// Type definitions for node-redis-pubsub 3.0
// Project: https://github.com/louischatriot/node-redis-pubsub#readme
// Definitions by: Rene Keijzer <https://github.com/renekeijzer>
//                 Martin Loeper <https://github.com/MartinLoeper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Callback, RedisClient } from "redis";

declare function NRP(options?: NRP.RedisPubsubOptions): NRP.NodeRedisPubSub;
declare namespace NRP {
    interface RedisPubsubOptions {
        port?: number;
        scope?: string;
        emitter?: RedisClient;
        receiver?: RedisClient;
        auth?: string;
    }
    function initClient(options?: RedisPubsubOptions): NodeRedisPubSub;
    class NodeRedisPubSub {
        constructor(options?: RedisPubsubOptions);
        getRedisClient(): RedisClient;
        on<T>(
            channel: string,
            handler: (message: T, channel: string) => void,
            callback?: () => void,
        ): () => Callback<any>;
        subscribe<T>(
            channel: string,
            handler: (message: T, channel: string) => void,
            callback?: () => void,
        ): () => Callback<any>;
        emit<T>(channel: string, message: T): boolean;
        publish<T>(channel: string, message: T): boolean;
        quit(): void;
        end(): void;
    }
}

export = NRP;
