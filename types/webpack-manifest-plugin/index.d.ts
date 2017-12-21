// Type definitions for webpack-manifest-plugin 1.3
// Project: https://github.com/danethurber/webpack-manifest-plugin
// Definitions by: Andrew Makarov <https://github.com/r3nya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Plugin } from 'webpack';

export = WebpackManifestPlugin;

declare class WebpackManifestPlugin extends Plugin {
    constructor(options?: WebpackManifestPlugin.Options);
}

declare namespace WebpackManifestPlugin {
    interface Chunk {
        id: string;
        parents: string[];
        [propName: string]: any;
    }

    interface HooksOptions {
        path: string;
        chunk: Chunk;
        name: string | null;
        isChunk: boolean;
        isInitial: boolean;
        isAsset: boolean;
        isModuleAsset: boolean;
    }

    interface Options {
        /**
         * The manifest filename in your output directory.
         * Default: manifest.json
         */
        fileName?: string;

        /**
         * A path prefix for all file references. Useful for including your output path in the manifest.
         */
        basePath?: string;

        /**
         * A path prefix used only on output files, similar to Webpack's output.publicPath. Ignored if basePath was also provided.
         */
        publicPath?: string;

        /**
         * If set to true will emit to build folder and memory in combination with webpack-dev-server
         * Default: false
         */
        writeToFileEmit?: boolean;

        /**
         * A cache of key/value pairs to used to seed the manifest. This may include a set of custom key/value pairs to include in your manifest,
         * or may be used to combine manifests across compilations in multi-compiler mode.
         * To combine manifests, pass a shared seed object to each compiler's ManifestPlugin instance.
         * Default: {}
         */
        seed?: object;

        /**
         * Filter out files.
         */
        filter?: (options: HooksOptions) => void;

        /**
         * Modify files details before the manifest is created.
         */
        map?: (options: HooksOptions) => void;

        /**
         * Create the manifest. It can return anything as long as it's serialisable by JSON.stringify. Use the seed options to populate manifest.
         * Default: (manifest, {name, path}) => ({...manifest, [name]: path})
         */
        reduce?: (manifest: any, options: HooksOptions) => void;
    }
}
