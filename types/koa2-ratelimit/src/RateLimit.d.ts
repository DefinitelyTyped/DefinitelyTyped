import { Context, Next } from 'koa';
import { RateLimitOptions, TimeKeyObject } from '..';
import Store = require('./Store');

declare class RateLimit {
    options: RateLimitOptions;
    store: Store;
    get middleware(): RateLimit['_rateLimit'];

    constructor(options?: Partial<RateLimitOptions>);

    static timeToMs(time: TimeKeyObject | number): number;
    keyGenerator(ctx: Context): Promise<string>;
    weight(ctx: Context): Promise<number>;
    skip(ctx: Context): Promise<boolean>;
    getUserId(ctx: Context): Promise<any>;
    handler(ctx: Context): Promise<void>;
    onLimitReached(ctx: Context): Promise<void>;

    protected _rateLimit(ctx: Context, next: Next): Promise<any>;
    protected _isWhitelisted(key: string): boolean;
}

declare const Export: {
    RateLimit: typeof RateLimit;
    middleware(options?: Partial<RateLimitOptions>): RateLimit['_rateLimit'];
    defaultOptions(options?: Partial<RateLimitOptions>): void;
};

export = Export;
