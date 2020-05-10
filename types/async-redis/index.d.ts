// Type definitions for async-redis 1.1
// Project: https://github.com/moaxaca/async-redis
// Definitions by: philipp-sapronov <https://github.com/philipp-sapronov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

import { Commands, RedisClient, ClientOpts } from 'redis';

type MethodsToPromisify = keyof Commands<boolean>;

type Promisified<T = RedisClient> = {
  [K in keyof T]: K extends MethodsToPromisify
    ? T[K] extends (...args: infer A) => infer R
      ? (...args: A) => Promise<R>
      : T[K]
    : T[K];
};

interface AsyncRedisConstructor {
  new (port: number, host?: string, options?: ClientOpts): Promisified;
  new (unix_socket: string, options?: ClientOpts): Promisified;
  new (redis_url: string, options?: ClientOpts): Promisified;
  new (options?: ClientOpts): Promisified;
  decorate: (client: RedisClient) => Promisified;
  createClient(port: number, host?: string, options?: ClientOpts): Promisified;
  createClient(unix_socket: string, options?: ClientOpts): Promisified;
  createClient(redis_url: string, options?: ClientOpts): Promisified;
  createClient(options?: ClientOpts): Promisified;
}

declare const AsyncRedis: AsyncRedisConstructor;
export = AsyncRedis;
