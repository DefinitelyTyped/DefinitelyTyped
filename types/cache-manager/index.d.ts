// Type definitions for cache-manager v1.2.0
// Project: https://github.com/BryanDonovan/node-cache-manager
// Definitions by: Simon Gausmann <https://github.com/GausSim>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface CachingConfig {
    ttl: number;
}

interface StoreConfig extends CachingConfig {
    store: string;
    max?: number;
    isCacheableValue?: (value: any) => boolean;
}

interface Cache {
    set<T>(key: string, value: T, options: CachingConfig, callback?: (error: any) => void): void;
    set<T>(key: string, value: T, ttl: number, callback?: (error: any) => void): void;
    set<T>(key: string, value: T, options: CachingConfig): Promise<any>;
    set<T>(key: string, value: T, ttl: number): Promise<any>;

    wrap<T>(key: string, wrapper: (callback: (error: any, result: T) => void) => void, options: CachingConfig, callback: (error: any, result: T) => void): void;
    wrap<T>(key: string, wrapper: (callback: (error: any, result: T) => void) => void, callback: (error: any, result: T) => void): void;
    wrap<T>(key: string, wrapper: (callback: (error: any, result: T) => void) => any, options: CachingConfig): Promise<any>;
    wrap<T>(key: string, wrapper: (callback: (error: any, result: T) => void) => void): Promise<any>;

    get<T>(key: string, callback: (error: any, result: T) => void): void;
    get<T>(key: string): Promise<any>;

    del(key: string, callback: (error: any) => void): void;
    del(key: string): Promise<any>;
}



declare namespace cacheManager {
    function caching(IConfig: StoreConfig): Cache;
    function multiCaching(Caches: Cache[]): Cache;
}

export = cacheManager;

