// Type definitions for webpack-assets-manifest 4.0
// Project: https://github.com/webdeveric/webpack-assets-manifest
// Definitions by: Franklin Tse <https://github.com/FranklinWhale>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { compilation, Compiler, loader, Plugin, Stats } from 'webpack';
import { AsyncSeriesHook, SyncHook, SyncWaterfallHook } from 'tapable';

declare class WebpackAssetsManifest extends Plugin {
    constructor(options?: WebpackAssetsManifest.Options);

    /** https://github.com/webdeveric/webpack-assets-manifest#hooks */
    hooks: {
        apply: SyncHook<WebpackAssetsManifest>;

        /**
         * The `SyncWaterfallHook` class supports 3 type parameters only but this hook actually has 4 parameters.
         * The type of 4th parameter is `compilation.Asset | null` with integrity added to info field.
         *
         * Refer to https://github.com/webdeveric/webpack-assets-manifest#hooks for details
         */
        customize: SyncWaterfallHook<WebpackAssetsManifest.Entry, WebpackAssetsManifest.Entry, WebpackAssetsManifest>;

        transform: SyncWaterfallHook<WebpackAssetsManifest.Assets, WebpackAssetsManifest>;

        done: AsyncSeriesHook<WebpackAssetsManifest, Stats>;

        options: SyncWaterfallHook<WebpackAssetsManifest.Options>;

        afterOptions: SyncHook<WebpackAssetsManifest.Options>;
    };

    /** https://github.com/webdeveric/webpack-assets-manifest#options-read-the-schema */
    options: WebpackAssetsManifest.Options;

    /** This is what gets JSON stringified */
    assets: WebpackAssetsManifest.Assets;

    /** original filename : hashed filename */
    assetNames: Map<string, string>;

    /** This is passed to the customize() hook */
    currentAsset: compilation.Asset | null;

    /** The Webpack compiler instance */
    compiler: Compiler | null;

    /** https://github.com/webdeveric/webpack-assets-manifest#options-read-the-schema */
    get defaultOptions(): WebpackAssetsManifest.Options;

    /** Determine if the manifest data is currently being merged */
    get isMerging(): boolean;

    /** Get the file extension */
    getExtension(filename: string): string;

    /** Replace backslash with forward slash */
    fixKey(key: string): string;

    /** Add item to assets without modifying the key or value */
    setRaw(key: string, value: unknown): this;

    /** Add an item to the manifest */
    set(key: string, value: unknown): this;

    /** Determine if an item exist in the manifest */
    has(key: string): boolean;

    /** Get an item from the manifest */
    get(key: string, defaultValue?: unknown): unknown;

    /** Delete an item from the manifest */
    delete(key: string): boolean;

    /** Process compilation assets */
    processAssetsByChunkName(
        assets: Record<string, string | ReadonlyArray<string>>,
        hmrFiles?: Set<string>,
    ): this['assetNames'];

    /** Get the data for `JSON.stringify()` */
    toJSON(): unknown;

    /** `JSON.stringify()` the manifest */
    toString(): string;

    /** Merge data if the output file already exists */
    maybeMerge(): void;

    /** Emit the assets manifest */
    emitAssetsManifest(compilation: compilation.Compilation): Promise<void>;

    /** Get assets and hot module replacement files from a compilation object */
    getCompilationAssets(compilation: compilation.Compilation): { assets: compilation.Asset[]; hmrFiles: Set<string> };

    /** Handle the `emit` event */
    handleEmit(compilation: compilation.Compilation): Promise<void>;

    /** Get the parsed output path. [hash] is supported. */
    getManifestPath(compilation: compilation.Compilation, filename: string): string;

    /** Write the asset manifest to the file system */
    writeTo(destination: string): Promise<void>;

    clear(): void;

    /** Cleanup before running Webpack */
    handleWatchRun(): void;

    /** Determine if the manifest should be written to disk with fs */
    shouldWriteToDisk(compilation: compilation.Compilation): boolean;

    /** Last chance to write the manifest to disk */
    handleAfterEmit(compilation: compilation.Compilation): Promise<void>;

    /** Record asset names */
    handleNormalModuleLoader(
        compilation: compilation.Compilation,
        loaderContext: loader.LoaderContext,
        module: compilation.Module,
    ): void;

    /** Add the SRI hash to the assetsInfo map */
    recordSubresourceIntegrity(compilation: compilation.Compilation): void;

    /** Hook into the compilation object */
    handleCompilation(compilation: compilation.Compilation): void;

    /**
     * Determine if webpack-dev-server is being used
     *
     * The WEBPACK_DEV_SERVER / WEBPACK_SERVE env vars cannot be relied upon.
     * See issue {@link https://github.com/webdeveric/webpack-assets-manifest/issues/125|#125}
     */
    inDevServer(): boolean;

    /** Get the file system path to the manifest */
    getOutputPath(): string;

    /** Get the public path for the filename */
    getPublicPath(filename: string): string;

    /**
     * Get a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler|Proxy} for the manifest.
     * This allows you to use `[]` to manage entries.
     *
     * @param raw - Should the proxy use `setRaw` instead of `set`?
     */
    getProxy(raw?: boolean): WebpackAssetsManifest.Assets;
}

declare namespace WebpackAssetsManifest {
    interface Options {
        /** https://github.com/webdeveric/webpack-assets-manifest#enabled */
        enabled?: boolean | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#assets */
        assets?: Assets | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#output */
        output?: string | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#replacer */
        replacer?:
            | ((this: unknown, key: string, value: unknown) => unknown)
            | ReadonlyArray<string | number>
            | null
            | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#space */
        space?: number | string | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#writetodisk */
        writeToDisk?: boolean | 'auto' | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#fileextregex */
        fileExtRegex?: RegExp | null | false | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#sortmanifest */
        sortManifest?: boolean | ((this: WebpackAssetsManifest, a: string, b: string) => number) | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#merge */
        merge?: boolean | 'customize' | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#publicpath */
        publicPath?:
            | string
            | boolean
            | null
            | ((filename: string, manifest: WebpackAssetsManifest) => string)
            | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#contextrelativekeys */
        contextRelativeKeys?: boolean | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#apply */
        apply?: ((manifest: WebpackAssetsManifest) => void) | null | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#customize */
        customize?:
            | ((
                  entry: Entry,
                  original: Entry,
                  manifest: WebpackAssetsManifest,
                  asset: (compilation.Asset & { info: Record<string, any> }) | null,
              ) => Entry | false)
            | null
            | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#transform */
        transform?: ((assets: Assets, manifest: WebpackAssetsManifest) => unknown) | null | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#done */
        done?: ((manifest: WebpackAssetsManifest, stats: Stats) => void) | null | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#entrypoints */
        entrypoints?: boolean | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#entrypointskey */
        entrypointsKey?: string | false | undefined;

        /** https://github.com/webdeveric/webpack-assets-manifest#entrypointsuseassets */
        entrypointsUseAssets?: boolean | undefined;

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

    interface Assets {
        [key: string]: unknown;
    }
}

export = WebpackAssetsManifest;
