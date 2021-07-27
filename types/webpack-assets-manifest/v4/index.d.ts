// Type definitions for webpack-assets-manifest 4.0
// Project: https://github.com/webdeveric/webpack-assets-manifest
// Definitions by: Franklin Tse <https://github.com/FranklinWhale>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from "webpack";
import { SyncHook, SyncWaterfallHook } from "tapable";

declare class WebpackAssetsManifest extends Plugin {
    constructor(options?: WebpackAssetsManifest.Options);

    /** https://github.com/webdeveric/webpack-assets-manifest#hooks */
    hooks: {
        apply: SyncHook<WebpackAssetsManifest>;

        /**
         * The `SyncWaterfallHook` class supports 3 type parameters only but this hook actually has 4 parameters. The type of 4th parameter is `AnyObject`.
         *
         * Refer to https://github.com/webdeveric/webpack-assets-manifest#hooks for details
         */
        customize: SyncWaterfallHook<WebpackAssetsManifest.Entry, WebpackAssetsManifest.AnyObject, WebpackAssetsManifest>;

        transform: SyncWaterfallHook<WebpackAssetsManifest.AnyObject, WebpackAssetsManifest>;

        done: SyncHook<WebpackAssetsManifest, WebpackAssetsManifest.AnyObject>;

        options: SyncWaterfallHook<WebpackAssetsManifest.Options>;

        afterOptions: SyncHook<WebpackAssetsManifest.Options>;
    };

    /** https://github.com/webdeveric/webpack-assets-manifest#options-read-the-schema */
    options: WebpackAssetsManifest.Options;

    /** https://github.com/webdeveric/webpack-assets-manifest#options-read-the-schema */
    defaultOptions: WebpackAssetsManifest.Options;

    /** Determine if the manifest data is currently being merged */
    isMerging: boolean;

    /** Get the file extension */
    getExtension(filename: string): string;

    /** Replace backslash with forward slash */
    fixKey(key: string): string;

    /** Determine if the filename matches the HMR filename pattern */
    isHMR(filename: string): boolean;

    /** Add item to assets without modifying the key or value */
    setRaw(key: string, value: string): this;

    /** Add an item to the manifest */
    set(key: string, value: string): this;

    /** Determine if an item exist in the manifest */
    has(key: string): boolean;

    /** Get an item from the manifest */
    get(key: string, defaultValue?: string): any;

    /** Delete an item from the manifest */
    delete(key: string): boolean;

    /** Get the file system path to the manifest */
    getOutputPath(): string;

    /** Get the public path for the filename */
    getPublicPath(filename: string): string;

    /**
     * Get a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler) for the manifest
     *
     * @param raw - Use `setRaw` instead of `set`
     */
    getProxy(raw?: boolean): ProxyHandler<WebpackAssetsManifest>;
}

declare namespace WebpackAssetsManifest {
    interface Options {
        /** https://github.com/webdeveric/webpack-assets-manifest#assets */
        assets?: object | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#output */
        output?: string | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#replacer */
        replacer?: null | ReadonlyArray<string> | ((key: string, value: string) => number | string | boolean | null | object | undefined) | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#space */
        space?: number | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#writetodisk */
        writeToDisk?: boolean | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#fileextregex */
        fileExtRegex?: RegExp | null | false | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#sortmanifest */
        sortManifest?: boolean | ((this: WebpackAssetsManifest, a: string, b: string) => number) | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#merge */
        merge?: boolean | "customize" | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#publicpath */
        publicPath?: string | boolean | null | (((filename: string, manifest: WebpackAssetsManifest) => string)) | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#apply */
        apply?: ((manifest: WebpackAssetsManifest) => void) | null | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#customize */
        customize?: ((entry: Entry, original: AnyObject, manifest: WebpackAssetsManifest, asset: AnyObject) => Entry | false) | null | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#transform */
        transform?: ((assets: AnyObject, manifest: WebpackAssetsManifest) => any) | null | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#done */
        done?: ((manifest: WebpackAssetsManifest, stats: AnyObject) => void) | null | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#entrypoints */
        entrypoints?: boolean | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#entrypointskey */
        entrypointsKey?: string | false | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#integrity */
        integrity?: boolean | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#integrityhashes */
        integrityHashes?: ReadonlyArray<string> | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#integritypropertyname */
        integrityPropertyName?: string | undefined;
    }

    interface Entry {
        key: string;
        value: string;
    }

    interface AnyObject extends Object {
        [index: string]: any;
    }
}

export = WebpackAssetsManifest;
