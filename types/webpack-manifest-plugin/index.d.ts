// Type definitions for webpack-manifest-plugin 2.1
// Project: https://github.com/danethurber/webpack-manifest-plugin
// Definitions by: Andrew Makarov <https://github.com/r3nya>, Jeremy Monson <https://github.com/monsonjeremy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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

    interface FileDescriptor {
        path: string;
        name: string | null;
        /** Is required to run you app. Cannot be true if isChunk is false. */
        isInitial: boolean;
        isChunk: boolean;
        /** Only available is isChunk is true. */
        chunk?: Chunk;
        isAsset: boolean;
        /** Is required by a module. Cannot be true if isAsset is false. */
        isModuleAsset: boolean;
    }

    interface Options {
        /**
         * The manifest filename in your output directory.
         * Default: manifest.json
         */
        fileName?: string;

        /**
         * A path prefix that will be added to values of the manifest.
         * Default: output.publicPath
         */
        publicPath?: string;

        /**
         * A path prefix for all keys. Useful for including your output path in the manifest.
         */
        basePath?: string;

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
        filter?: (file: FileDescriptor) => boolean;

        /**
         * Modify files details before the manifest is created.
         */
        map?: (file: FileDescriptor) => FileDescriptor;

        /**
         * Sort files before they are passed to generate.
         */
        sort?: (a: FileDescriptor, b: FileDescriptor) => number;

        /**
         * Create the manifest. It can return anything as long as it's serialisable by JSON.stringify.
         */
        generate?: (seed: object, files: FileDescriptor[], entrypoints: { [key: string]: string[] }) => object;

        /**
         * Output manifest file in different format then json (i.e. yaml).
         */
        serialize?: (manifest: object) => string;
    }
}
