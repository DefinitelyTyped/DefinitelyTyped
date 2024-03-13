/// <reference types="node" />

import File = require("vinyl");
import { PluginError } from "gulp-util";
import { Transform } from "stream";

declare namespace gc {
    type Predicate<T> = (arg: T) => boolean;

    interface IGulpCacheOptions {
        /**
         * The cache instance to use for caching.
         */
        fileCache?: IGulpCache | undefined;

        /**
         * The name of the bucket which stores the cached objects.
         * Default value = 'default'
         */
        name?: string | undefined;

        /**
         * The hash generator to use.
         */
        key?: ((file: File, callback?: (err: any, result: string) => void) => string | Promise<string>) | undefined;

        /**
         * Value representing the success of a task.
         */
        success?: boolean | Predicate<any> | undefined;

        /**
         * Content that is to be cached.
         */
        value?: ((result: any) => Object | Promise<Object> | string) | undefined;
    }

    interface ICacheOptions {
        /**
         * Specifies the name of the directory where the cache
         * is to be stored.
         */
        cacheDirName: string;
    }

    interface IGulpCacheStatic {
        /**
         * Caches the result of a task.
         * @param task The task whose result is to be cached.
         */
        (task: NodeJS.ReadWriteStream): Transform;

        /**
         * Caches the result of a task.
         * @param task Task whose result is to be cached.
         * @param options Override values for available settings.
         */
        (task: NodeJS.ReadWriteStream, options: IGulpCacheOptions): Transform;

        clear(options: IGulpCacheOptions): Transform;

        /**
         * Represents a cache store.
         */
        Cache: IGulpCache;

        /**
         * Purges the cache.
         * @param err PluginError instance in case of a plugin error.
         *            If callback is not specified an exception of type
         *            'PluginError' is thrown.
         */
        clearAll(callback?: (err: PluginError) => void): void;
    }

    /**
     * Represents a cach store.
     */
    interface IGulpCache {
        new(options: ICacheOptions): any;
    }
}

declare const _: gc.IGulpCacheStatic;
export = _;
