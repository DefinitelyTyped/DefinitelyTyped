// Type definitions for simple-url-cache
// Project: https://github.com/a-lucas/simple-url-cache
// Definitions by: Antoine LUCAS <https://github.com/a-lucas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redis/redis.d.ts" />


declare module 'simple-url-cache' {
    import redis = require("redis");

    namespace SimpleUrlCache {
        
        interface RegexRule {
            regex:RegExp
        }

        interface MaxAgeRegexRule extends RegexRule {
            maxAge:number
        }

        interface CacheRules {
            cacheMaxAge:MaxAgeRegexRule[],
            cacheAlways:RegexRule[],
            cacheNever:RegexRule[],
            default:string
        }

        interface StorageConfig {
            type:string
        }

        interface FileStorageConfig extends StorageConfig {
            dir:string;
        }

        interface RedisStorageConfig extends StorageConfig {
            host:string;
            port:number;
            path?:string;
            url?:string;
            socket_keepalive?:boolean;
            password?:string;
            db?:string;
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


    export class FileStorage extends SimpleUrlCache.CacheCategory implements SimpleUrlCache.CacheStorage {
        constructor(_url:string, _storageConfig: SimpleUrlCache.FileStorageConfig, _regexRules: SimpleUrlCache.CacheRules);

        isCached():Promise<boolean>;
        removeUrl():Promise<boolean>;
        getUrl():Promise<string>;
        cache(html:string):Promise<boolean>
        cache(html:string, force:boolean):Promise<boolean>;

        destroy(): void;
    }

    export class RedisStorage extends SimpleUrlCache.CacheCategory implements SimpleUrlCache.CacheStorage {
        constructor(_url:string, _storageConfig: SimpleUrlCache.RedisStorageConfig, _regexRules: SimpleUrlCache.CacheRules);

        isCached():Promise<boolean>;
        removeUrl():Promise<boolean>;
        getUrl():Promise<string>;
        cache(html:string):Promise<boolean>;
        cache(html:string, force:boolean):Promise<boolean>;
        destroy(): void;
    }

    export class CacheEngine {
        constructor(storageConfig: SimpleUrlCache.FileStorageConfig, cacheRules: SimpleUrlCache.CacheRules);
        constructor(storageConfig: SimpleUrlCache.RedisStorageConfig, cacheRules: SimpleUrlCache.CacheRules);
        url(url: string): FileStorage;
        url(url: string): RedisStorage;
    }


}
