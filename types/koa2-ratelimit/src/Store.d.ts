import { RateLimitOptions } from '..';

declare abstract class Store {
    abstract incr(
        key: string,
        options: RateLimitOptions,
        weight: number,
    ): Promise<{ counter: number; dateEnd: number }>;
    abstract decrement(key: string, options: RateLimitOptions, weight: number): Promise<void>;
    abstract saveAbuse(options: RateLimitOptions & { key: string; ip: string; user_id: any }): Promise<void> | void;
}

export = Store;
