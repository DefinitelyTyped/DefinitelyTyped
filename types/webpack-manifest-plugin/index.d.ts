import { SyncWaterfallHook } from "tapable";
import { Chunk, Compiler, WebpackPluginInstance } from "webpack";

export const WebpackManifestPlugin: {
    new(options?: Options): WebpackPluginInstance;
};

export interface FileDescriptor {
    /** Only available if isChunk is true. */
    chunk?: Chunk | undefined;
    isAsset: boolean;
    isChunk: boolean;
    /** Is required to run you app. Cannot be true if isChunk is false. */
    isInitial: boolean;
    /** Is required by a module. Cannot be true if isAsset is false. */
    isModuleAsset: boolean;
    name: string | null;
    path: string;
}

export interface Options {
    /**
     * A path prefix for all keys. Useful for including your output path in the manifest.
     * Default: ''
     */
    basePath?: string | undefined;

    /**
     * The manifest filename in your output directory.
     * Default: 'manifest.json'
     */
    fileName?: string | undefined;

    /**
     * Filter out files which make up the manifest. Return true to keep the file, false to remove it.
     */
    filter?: ((file: FileDescriptor) => boolean) | undefined;

    /**
     * Create the manifest. It can return anything as long as it's serializable by JSON.stringify.
     */
    generate?: ((seed: object, files: FileDescriptor[], entries: Record<string, string[]>) => object) | undefined;

    /**
     * Modify file details before the manifest is created.
     */
    map?: ((file: FileDescriptor) => FileDescriptor) | undefined;

    /**
     * A path prefix that will be added to values of the manifest.
     * Default: output.publicPath
     */
    publicPath?: string | undefined;

    /**
     * Remove hashes from manifest keys. Defaults to Webpack's md5 hash.
     * Default: /([a-f0-9]{32}\.?)/gi
     */
    removeKeyHash?: RegExp | boolean | undefined;

    /**
     * A cache of key/value pairs to used to seed the manifest.
     * Default: {}
     */
    seed?: object | undefined;

    /**
     * Output manifest file in different format then json (i.e. yaml).
     */
    serialize?: ((manifest: object) => string) | undefined;

    /**
     * Sort files before they are passed to generate.
     */
    sort?: ((fileA: FileDescriptor, fileB: FileDescriptor) => number) | undefined;

    /**
     * If true, the keys specified in the entry property will be used as keys in the manifest.
     * Default: false
     */
    useEntryKeys?: boolean | undefined;

    /**
     * If set to true will emit to build folder and memory in combination with webpack-dev-server.
     * Default: false
     */
    writeToFileEmit?: boolean | undefined;
}

export function getCompilerHooks(compiler: Compiler): { afterEmit: SyncWaterfallHook; beforeEmit: SyncWaterfallHook };
