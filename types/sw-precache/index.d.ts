// Type definitions for sw-precache 5.2
// Project: https://github.com/googlechrome/sw-precache
// Definitions by: JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import {
    Handler as SwToolboxHanlder,
    Options as SwToolboxOptions,
} from 'sw-toolbox';

export type Handler =
    | 'networkFirst'
    | 'cacheFirst'
    | 'fastest'
    | 'cacheOnly'
    | 'networkOnly'
    | SwToolboxHanlder;

export type Method = 'get' | 'post' | 'put' | 'delete' | 'head';

export interface Options {
    cacheId?: string;
    clientsClaim?: boolean;
    directoryIndex?: string;
    dontCacheBustUrlsMatching?: RegExp;
    dynamicUrlToDependencies?: {
        [url: string]: string | Buffer | string[];
    };
    handleFetch?: boolean;
    ignoreUrlParametersMatching?: RegExp[];
    importScripts?: string[];
    logger?: Console['log'];
    maximumFileSizeToCacheInBytes?: number;
    navigateFallback?: string;
    navigateFallbackWhitelist?: RegExp[];
    replacePrefix?: string;
    runtimeCaching?: Array<{
        urlPattern: RegExp | string;
        handler: Handler;
        method?: Method;
        options?: SwToolboxOptions;
    }>;
    skipWaiting?: boolean;
    staticFileGlobs?: string[];
    stripPrefix?: string;
    stripPrefixMulti?: {
        [path: string]: string;
    };
    templateFilePath?: string;
    verbose?: boolean;
}

export type Generate = (
    options?: Options,
    callback?: (
        error: NodeJS.ErrnoException,
        serviceWorkerString: string,
    ) => void,
) => Promise<string>;

export type Write = (
    filePath: string,
    options?: Options,
    callback?: (error: NodeJS.ErrnoException) => void,
) => Promise<string>;

export const generate: Generate;
export const write: Write;
