// Type definitions for route-cache 0.5
// Project: https://github.com/bradoyler/route-cache
// Definitions by: yutak23 <https://github.com/yutak23>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as express from "express";

export function config(options: ConfigOptions): RouteCache;
export function cacheSeconds(secondsTTL: number, cacheKey: string | CacheKeyFunc): express.RequestHandler;
export function removeCache(url: string): void;

export const cacheStore: Store;

export interface RouteCache {
    config(options: ConfigOptions): RouteCache;
    cacheSeconds(secondsTTL: number, cacheKey: string | CacheKeyFunc): express.RequestHandler;
    removeCache(url: string): void;
    cacheStore: Store;
}

export interface CacheKeyFunc {
    (req: express.Request, res: express.Response): string | null;
}

export interface ConfigOptions {
    max?: number;
    cacheStore?: Store;
}

export interface Store {
    get(key: string): Promise<any>;
    set(key: string, value: any, ttlMillis: number): Promise<"OK"> | Promise<boolean>;
    del(key: string): Promise<number> | Promise<void>;
}
