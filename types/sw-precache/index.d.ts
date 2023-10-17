/// <reference types="node" />

import { Handler as SwToolboxHanlder, Options as SwToolboxOptions } from "sw-toolbox";

export type Handler =
    | "networkFirst"
    | "cacheFirst"
    | "fastest"
    | "cacheOnly"
    | "networkOnly"
    | SwToolboxHanlder;

export type Method = "get" | "post" | "put" | "delete" | "head";

export interface Options {
    cacheId?: string | undefined;
    clientsClaim?: boolean | undefined;
    directoryIndex?: string | undefined;
    dontCacheBustUrlsMatching?: RegExp | undefined;
    dynamicUrlToDependencies?: {
        [url: string]: string | Buffer | string[];
    } | undefined;
    handleFetch?: boolean | undefined;
    ignoreUrlParametersMatching?: RegExp[] | undefined;
    importScripts?: string[] | undefined;
    logger?: Console["log"] | undefined;
    maximumFileSizeToCacheInBytes?: number | undefined;
    navigateFallback?: string | undefined;
    navigateFallbackWhitelist?: RegExp[] | undefined;
    replacePrefix?: string | undefined;
    runtimeCaching?:
        | Array<{
            urlPattern: RegExp | string;
            handler: Handler;
            method?: Method | undefined;
            options?: SwToolboxOptions | undefined;
        }>
        | undefined;
    skipWaiting?: boolean | undefined;
    staticFileGlobs?: string[] | undefined;
    stripPrefix?: string | undefined;
    stripPrefixMulti?: {
        [path: string]: string;
    } | undefined;
    templateFilePath?: string | undefined;
    verbose?: boolean | undefined;
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
