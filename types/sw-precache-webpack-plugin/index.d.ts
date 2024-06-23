import { Options as SwPrecacheOptions } from "sw-precache";
import { Plugin } from "webpack";

// workaround to override parent types
interface _Options extends SwPrecacheOptions {
    importScripts?: any;
}

declare namespace SWPrecacheWebpackPlugin {
    interface Options extends _Options {
        filename?: string | undefined;
        filepath?: string | undefined;
        staticFileGlobsIgnorePatterns?: RegExp[] | undefined;
        mergeStaticsConfig?: boolean | undefined;
        minify?: boolean | undefined;

        // override sw-precache options
        importScripts?:
            | Array<
                | string
                | {
                    chunkName?: string | undefined;
                    filename?: string | undefined;
                }
            >
            | undefined;
    }
}

declare class SWPrecacheWebpackPlugin extends Plugin {
    constructor(options?: SWPrecacheWebpackPlugin.Options);
}

export = SWPrecacheWebpackPlugin;
