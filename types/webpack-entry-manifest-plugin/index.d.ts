// Type definitions for webpack-entry-manifest-plugin 2.0
// Project: https://github.com/nuintun/webpack-entry-manifest-plugin#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        filename?: string;

        /**
         * Assets path map function
         * @default path => path
         */
        map?: (path: string, chunk: string) => string;

        /**
         * Assets path filter function
         * @default () => true
         */
        filter?: (path: string, chunk: string) => boolean;

        /**
         * Assets manifest serialize function
         * @default manifest => JSON.stringify(manifest)
         */
        serialize?: (manifest: any) => string;
    }
}

export = WebpackEntryManifestPlugin;
