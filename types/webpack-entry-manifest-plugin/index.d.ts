// Type definitions for webpack-entry-manifest-plugin 2.0
// Project: https://github.com/nuintun/webpack-entry-manifest-plugin#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';

/**
 * Webpack plugin for generating an asset manifest with grouped entry chunks
 */
declare class WebpackEntryManifestPlugin extends Plugin {
    name: 'WebpackEntryManifestPlugin';
    constructor(options?: WebpackEntryManifestPlugin.Options);
}

declare namespace WebpackEntryManifestPlugin {
    interface Options {
        /**
         * Assets manifest filename
         * @default 'manifest.json'
         */
        filename?: string | undefined;

        /**
         * Assets path map function
         * @default path => path
         */
        map?: ((path: string, chunk: string) => string) | undefined;

        /**
         * Assets path filter function
         * @default () => true
         */
        filter?: ((path: string, chunk: string) => boolean) | undefined;

        /**
         * Assets manifest serialize function
         * @default manifest => JSON.stringify(manifest)
         */
        serialize?: ((manifest: any) => string) | undefined;
    }
}

export = WebpackEntryManifestPlugin;
