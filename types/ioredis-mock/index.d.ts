/// <reference types="node" />

import ioredis = require("ioredis");

export type RedisOptions = { data?: Record<string, unknown> } & ioredis.RedisOptions;

export type RedisClusterOptions = {
    redisOptions: Omit<
        RedisOptions,
        "port" | "host" | "path" | "sentinels" | "retryStrategy" | "enableOfflineQueue" | "readOnly"
    >;
} & ioredis.ClusterOptions;

export interface ClusterConstructor {
    new(startupNodes: ioredis.ClusterNode[], options?: RedisClusterOptions): ioredis.Cluster;
}

export interface Constructor {
    new(port: number, host: string, options: RedisOptions): ioredis.Redis;
    new(path: string, options: RedisOptions): ioredis.Redis;
    new(port: number, options: RedisOptions): ioredis.Redis;
    new(port: number, host: string): ioredis.Redis;
    new(options: RedisOptions): ioredis.Redis;
    new(port: number): ioredis.Redis;
    new(path: string): ioredis.Redis;
    new(): ioredis.Redis;
    Cluster: ClusterConstructor;
}

export const redisMock: Constructor;
export { redisMock as default };
