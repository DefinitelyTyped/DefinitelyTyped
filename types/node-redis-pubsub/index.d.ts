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
            callback?: () => void,
        ): () => void;
        subscribe(
            channel: string,
            handler: (data: string, channel: string) => void,
            callback?: () => void,
        ): () => void;
        emit(channel: string, message: string): void;
        publish(channel: string, message: string): void;
        quit(): void;
        end(): void;
    }
}

export = NRP;
