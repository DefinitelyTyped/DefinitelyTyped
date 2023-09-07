import { Redis } from 'ioredis';
import { Store } from './index';

export = IoRedisStore;

declare class IoRedisStore extends Store {
    client: Redis;

    constructor(redisClient: Redis);

    get(key: string): Promise<any>;
    set(key: string, value: any, ttlMillis: number): Promise<'OK'>;
    del(key: string): Promise<number>;
}
