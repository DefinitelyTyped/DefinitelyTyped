// Type definitions for simple-url-cache
// Project: https://github.com/a-lucas/simple-url-cache
// Definitions by: Antoine LUCAS <https://github.com/a-lucas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="redis" />

declare module 'simple-url-cache' {
    import redis = require("redis");

    export class CacheEngine {
        constructor(storageConfig: FileStorageConfig, cacheRules: CacheRules);
        constructor(storageConfig: RedisStorageConfig, cacheRules: CacheRules);
        url(url: string): FileStorage;
        url(url: string): RedisStorage;
    }

    export interface RegexRule {
        regex:RegExp
    }

    export interface MaxAgeRegexRule extends RegexRule {
        maxAge:number
    }

    export interface CacheRules {
        cacheMaxAge:MaxAgeRegexRule[],
        cacheAlways:RegexRule[],
        cacheNever:RegexRule[],
        default:string
    }

    export interface FileStorageConfig extends privateN.StorageConfig {
        dir:string;
    }

    export interface RedisStorageConfig extends privateN.StorageConfig {
        host:string;
        port:number;
        path?:string;
        url?:string;
        socket_keepalive?:boolean;
        password?:string;
        db?:string;
    }

    namespace privateN {
        interface StorageConfig {
            type:string
        }

        interface CacheStorage {
            isCached():Promise<boolean>;
            removeUrl():Promise<boolean>;
            getUrl():Promise<string>;
            cache(html:string):Promise<boolean>;
            cache(html:string, force:boolean):Promise<boolean>;
            destroy(): void;
        }

        abstract class CacheCategory {
            constructor(currentUrl:string, _config:CacheRules) ;
            private getRegexTest(u:RegexRule):boolean;
            private getCacheCategory():string;
            public getCategory():string;
            public getCurrentUrl():string;
        }

        module RedisPool {
            export function connect(config:RedisStorageConfig): redis.RedisClient;
            export function isOnline():boolean;
            export function kill():void;
        }
    }

    export class FileStorage extends privateN.CacheCategory implements privateN.CacheStorage {
        constructor(_url:string, _storageConfig: FileStorageConfig, _regexRules: CacheRules);
        isCached():Promise<boolean>;
        removeUrl():Promise<boolean>;
        getUrl():Promise<string>;
        cache(html:string):Promise<boolean>
        cache(html:string, force:boolean):Promise<boolean>;
        destroy(): void;
    }

    export class RedisStorage extends privateN.CacheCategory implements privateN.CacheStorage {
        constructor(_url:string, _storageConfig: RedisStorageConfig, _regexRules: CacheRules);
        isCached():Promise<boolean>;
        removeUrl():Promise<boolean>;
        getUrl():Promise<string>;
        cache(html:string):Promise<boolean>;
        cache(html:string, force:boolean):Promise<boolean>;
        destroy(): void;
    }
}
