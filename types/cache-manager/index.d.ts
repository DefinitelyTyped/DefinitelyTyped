// Type definitions for cache-manager v4.0.1
// Project: https://github.com/BryanDonovan/node-cache-manager
// Definitions by: Dominik Einkemmer <https://github.com/dominikeinkemmer>
//                 Eduard Marbach <https://github.com/BlackDark>
//                 Bryan Donovan <https://github.com/BryanDonovan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export interface CachingConfig {
    ttl?: number | TtlFunction;
}

export interface TtlFunction {
    (result: any): number;
}

export interface Store {
    // These functions will just be bound to the Cache object if they exist so args can be anything
    get<T>(...args: any[]): Promise<any>;
    set<T>(...args: any[]): Promise<any>;

    mget?<T>(...args: any[]): Promise<any>;
    mset?<T>(...args: any[]): Promise<any>;
    del?<T>(...args: any[]): Promise<any>;
    setex?<T>(...args: any[]): Promise<any>;
    reset?<T>(...args: any[]): Promise<any>;
    keys?<T>(...args: any[]): Promise<any>;
    ttl?<T>(...args: any[]): Promise<any>;
}

export interface StoreConfig extends CachingConfig {
    store:
        | 'memory'
        | 'none'
        | Store
        | {
              create(...args: any[]): Store;
          };
    max?: number;
    maxSize?: number;
    sizeCalculation?: (value: any, key: any) => number;

    /**
     * You may pass in any other arguments these will be passed on to the `create` method of your store,
     * otherwise they will be ignored.
     */
    [key: string]: any;
}

export interface CacheOptions {
    /**
     * Promise library to replace global.Promise
     */
    promiseDependency?: any;
    isCacheableValue?(value: any): boolean;
}

export type CallbackFunc<T> = (error: any, result: T) => void;
export type WrapArgsType<T> =
    | string
    | ((callback: CallbackFunc<T>) => void)
    | CachingConfig
    | CallbackFunc<T>
    | (() => PromiseLike<T> | T);

export interface Cache {
    set<T>(key: string, value: T, options?: CachingConfig): Promise<T>;
    set<T>(key: string, value: T, ttl: number): Promise<T>;
    set<T>(key: string, value: T, options: CachingConfig, callback: (error: any) => void): void;
    set<T>(key: string, value: T, ttl: number, callback: (error: any) => void): void;

    // 2021-01-14: This could be updated with TypeScript 4.2 https://devblogs.microsoft.com/typescript/announcing-typescript-4-2-beta/#leading-middle-rest-elements-in-tuple-types
    // Because the library accepts multiple keys as arguments but not as an array and rather as individual parameters
    // of the function, the type definition had to be changed to this rather than specific ones
    // actual definitions would looks like this (impossible in typescript):
    // wrap<T>(...keys: string[], work: (callback: (error: any, result: T) => void) => void, options: CachingConfig, callback: (error: any, result: T) => void): void
    // wrap<T>(...keys: string[], work: (callback: (error: any, result: T) => void) => void, callback: (error: any, result: T) => void): void
    // wrap<T>(...keys: string[], work: (callback: (error: any, result: T) => void) => void, options: CachingConfig): void
    // wrap<T>(...keys: string[], work: (callback: (error: any, result: T) => void) => void): Promise<any>;
    wrap<T>(...args: WrapArgsType<T>[]): Promise<T>;

    get<T>(key: string, callback: (error: any, result: T | undefined) => void): void;
    get<T>(key: string): Promise<T | undefined>;

    del(key: string, callback: (error: any) => void): void;
    del(key: string): Promise<any>;

    reset(): Promise<void>;
    reset(cb: () => void): void;

    store: Store;
}

export interface MultiCache {
    set<T>(key: string, value: T, options?: CachingConfig): Promise<T>;
    set<T>(key: string, value: T, ttl: number): Promise<T>;
    set<T>(key: string, value: T, options: CachingConfig, callback: (error: any) => void): void;
    set<T>(key: string, value: T, ttl: number, callback: (error: any) => void): void;

    // 2021-01-14: This could be updated with TypeScript 4.2 https://devblogs.microsoft.com/typescript/announcing-typescript-4-2-beta/#leading-middle-rest-elements-in-tuple-types
    // Because the library accepts multiple keys as arguments but not as an array and rather as individual parameters
    // of the function, the type definition had to be changed to this rather than specific ones
    // actual definitions would looks like this (impossible in typescript):
    // wrap<T>(...keys: string[], work: (callback: (error: any, result: T) => void) => void, options: CachingConfig, callback: (error: any, result: T) => void): void
    // wrap<T>(...keys: string[], work: (callback: (error: any, result: T) => void) => void, callback: (error: any, result: T) => void): void
    // wrap<T>(...keys: string[], work: (callback: (error: any, result: T) => void) => void, options: CachingConfig): void
    // wrap<T>(...keys: string[], work: (callback: (error: any, result: T) => void) => void): Promise<any>;
    wrap<T>(...args: WrapArgsType<T>[]): Promise<T>;

    get<T>(key: string, callback: (error: any, result: T | undefined) => void): void;
    get<T>(key: string): Promise<T | undefined>;

    del(key: string, callback: (error: any) => void): void;
    del(key: string): Promise<any>;

    reset(cb: () => void): void;
}

export function caching(IConfig: StoreConfig & CacheOptions): Cache;
export function multiCaching(Caches: Cache[], options?: CacheOptions): MultiCache;
