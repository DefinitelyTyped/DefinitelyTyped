// Type definitions for async-redis 1.1
// Project: https://github.com/moaxaca/async-redis
// Definitions by: philipp-sapronov <https://github.com/philipp-sapronov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

import { Commands, RedisClient, ClientOpts } from 'redis';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Omitted = Omit<RedisClient, keyof Commands<boolean>>;

interface Promisified<T = RedisClient>
    extends Omitted,
        Commands<Promise<boolean>> {}

interface AsyncRedisConstructor {
  new (port: number, host?: string, options?: ClientOpts): Promisified;
  new (unix_socket: string, options?: ClientOpts): Promisified;
  new (redis_url: string, options?: ClientOpts): Promisified;
  new (options?: ClientOpts): Promisified;

  createClient(port: number, host?: string, options?: ClientOpts): Promisified;
  createClient(unix_socket: string, options?: ClientOpts): Promisified;
  createClient(redis_url: string, options?: ClientOpts): Promisified;
  createClient(options?: ClientOpts): Promisified;

  decorate: (client: RedisClient) => Promisified;
}

declare const AsyncRedis: AsyncRedisConstructor;
export = AsyncRedis;
