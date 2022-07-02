import { Connection, Model } from 'mongoose';

import { RateLimitOptions } from '..';
import Store = require('./Store');

export = MongodbStore;

declare class MongodbStore extends Store {
    collectionName: string;
    collectionAbuseName: string;
    Ratelimits: Model<any>;
    Abuse: Model<any>;

    constructor(mongodb: Connection, options?: Partial<MongodbStore.MongodbStoreOptions>);

    incr(key: string, options: RateLimitOptions, weight: number): Promise<{ counter: number; dateEnd: number }>;
    decrement(key: string, options: RateLimitOptions, weight: number): Promise<void>;
    saveAbuse(options: RateLimitOptions & { key: string; ip: string; user_id: any }): Promise<void>;
}

declare namespace MongodbStore {
    interface MongodbStoreOptions {
        collectionName: string;
        collectionAbuseName: string;
    }
}
