import { RateLimitOptions } from '..';
import Store = require('./Store');

export = MemoryStore;

declare class MemoryStore extends Store {
    incr(key: string, options: RateLimitOptions, weight: number): Promise<{ counter: number; dateEnd: number }>;
    decrement(key: string, options: RateLimitOptions, weight: number): Promise<void>;
    saveAbuse(options: RateLimitOptions & { key: string; ip: string; user_id: any }): Promise<void>;

    static cleanAll(): void;
}
