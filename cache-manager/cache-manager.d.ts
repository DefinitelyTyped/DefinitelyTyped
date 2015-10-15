// Type definitions for cache-manager v1.2.0
// Project: https://github.com/BryanDonovan/node-cache-manager
// Definitions by: Simon Gausmann www.gausmann-media.de
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare module 'cache-manager' {


    interface ICachingConfig {
        ttl: number;
    }
    interface IStoreConfig extends ICachingConfig {
        store:string;
        max?: number;
        isCacheableValue?:(value:any)=>boolean;
    }
    interface ICache {
        set<T>(key:string, value:T, options:ICachingConfig, callback?:(error:any)=>void):void;
        set<T>(key:string, value:T, ttl:number, callback?:(error:any)=>void):void;

        wrap<T>(key:string, wrapper:(callback:(error:any, result:T)=>void)=>void, options:ICachingConfig, callback:(error:any, result:T)=>void):void;
        wrap<T>(key:string, wrapper:(callback:(error:any, result:T)=>void)=>void, callback:(error:any, result:T)=>void):void;

        get<T>(key:string, callback:(error:any, result:T)=>void):void;

        del(key:string, callback?:(error:any)=>void):void;
    }


    module cacheManager {
        function caching(ICongig:IStoreConfig):ICache;

        function multiCaching(Caches:ICache[]):ICache;
    }

    export = cacheManager;
}