import { IncomingMessage, ServerResponse } from 'http';
import {
    DeltaResult,
    Graph,
    Module,
    Reporter,
    SerializerOptions,
    Server,
    TransformResult,
    TransformVariants,
} from 'metro';
import { CacheStore, MetroCache } from 'metro-cache';
import { MixedSourceMap } from 'metro-source-map';
import { CustomResolver } from 'metro-resolver';
import { JsTransformerConfig } from 'metro-transform-worker';

export type PostProcessBundleSourcemap = (args: {
    code: Buffer | string;
    map: MixedSourceMap;
    outFileName: string;
}) => {
    code: Buffer | string;
    map: MixedSourceMap | string;
};

export type ExtraTransformOptions = Partial<{
    readonly preloadedModules: { [path: string]: true } | false;
    readonly ramGroups: string[];
    readonly transform: {
        readonly experimentalImportSupport: boolean;
        readonly inlineRequires: { blockList: { [path: string]: true } } | boolean;
        readonly nonInlinedRequires?: ReadonlyArray<string>;
        readonly unstable_disableES6Transforms?: boolean;
    };
}>;

export interface GetTransformOptionsOpts {
    dev: boolean;
    hot: boolean;
    platform?: string;
}

export type GetTransformOptions = (
    entryPoints: ReadonlyArray<string>,
    options: GetTransformOptionsOpts,
    getDependenciesOf: (filePath: string) => Promise<string[]>,
) => Promise<ExtraTransformOptions>;

export type Middleware = (
    incomingMessage: IncomingMessage,
    serverResponse: ServerResponse,
    error: (e?: Error) => unknown,
) => unknown;

export interface ResolverConfigT {
    assetExts: ReadonlyArray<string>;
    assetResolutions: ReadonlyArray<string>;
    blacklistRE?: RegExp | RegExp[];
    blockList: RegExp | RegExp[];
    dependencyExtractor?: string;
    extraNodeModules: { [name: string]: string };
    hasteImplModulePath?: string;
    nodeModulesPaths: ReadonlyArray<string>;
    platforms: ReadonlyArray<string>;
    resolveRequest?: CustomResolver;
    resolverMainFields: ReadonlyArray<string>;
    sourceExts: ReadonlyArray<string>;
    useWatchman: boolean;
}

export interface SerializerConfigT {
    createModuleIdFactory: () => (path: string) => number;
    customSerializer?: (
        entryPoint: string,
        preModules: ReadonlyArray<Module>,
        graph: Graph,
        options: SerializerOptions,
    ) => Promise<string | { code: string; map: string }>;
    experimentalSerializerHook: (graph: Graph, delta: DeltaResult) => unknown;
    getModulesRunBeforeMainModule: (entryFilePath: string) => string[];
    getPolyfills: (options: { platform?: string }) => ReadonlyArray<string>;
    getRunModuleStatement: (moduleId: number | string) => string;
    polyfillModuleNames: ReadonlyArray<string>;
    postProcessBundleSourcemap: PostProcessBundleSourcemap;
    processModuleFilter: (modules: Module) => boolean;
}

export interface TransformerConfigT extends JsTransformerConfig {
    getTransformOptions: GetTransformOptions;
    transformVariants: TransformVariants;
    workerPath: string;
    publicPath: string;
    experimentalImportBundleSupport: boolean;
}

export interface MetalConfigT {
    cacheStores: ReadonlyArray<CacheStore<TransformResult>>;
    cacheVersion: string;
    hasteMapCacheDirectory?: string;
    maxWorkers: number;
    projectRoot: string;
    stickyWorkers: boolean;
    transformerPath: string;
    reporter: Reporter;
    resetCache: boolean;
    watchFolders: ReadonlyArray<string>;
}

export interface ServerConfigT {
    enhanceMiddleware: (middleware: Middleware, server: Server) => Middleware;
    useGlobalHotkey: boolean;
    port: number;
    rewriteRequestUrl: (url: string) => string;
    runInspectorProxy: boolean;
    verifyConnections: boolean;
}

export interface SymbolicatorConfigT {
    customizeFrame: (frame: {
        readonly file?: string;
        readonly lineNumber?: number;
        readonly column?: number;
        readonly methodName?: string;
    }) => { readonly collapse?: boolean } | undefined | Promise<{ readonly collapse?: boolean }> | Promise<undefined>;
}

export interface InputConfigT extends Omit<MetalConfigT, "cacheStores"> {
    readonly cacheStores:
        | ReadonlyArray<CacheStore<TransformResult>>
        | ((metroCache: MetroCache) => ReadonlyArray<CacheStore<TransformResult>>);
    readonly resolver: ResolverConfigT;
    readonly server: ServerConfigT;
    readonly serializer: SerializerConfigT;
    readonly symbolicator: SymbolicatorConfigT;
    readonly transformer: TransformerConfigT;
}

export interface IntermediateConfigT extends MetalConfigT {
    resolver: ResolverConfigT;
    server: ServerConfigT;
    serializer: SerializerConfigT;
    symbolicator: SymbolicatorConfigT;
    transformer: TransformerConfigT;
}

export interface ConfigT extends Readonly<MetalConfigT> {
    readonly resolver: Readonly<ResolverConfigT>;
    readonly server: Readonly<ServerConfigT>;
    readonly serializer: Readonly<SerializerConfigT>;
    readonly symbolicator: Readonly<SymbolicatorConfigT>;
    readonly transformer: Readonly<TransformerConfigT>;
}

export interface YargArguments {
    config?: string;
    cwd?: string;
    port?: string | number;
    host?: string;
    projectRoot?: string;
    watchFolders?: string[];
    assetExts?: string[];
    sourceExts?: string[];
    platforms?: string[];
    'max-workers'?: string | number;
    maxWorkers?: string | number;
    transformer?: string;
    'reset-cache'?: boolean;
    resetCache?: boolean;
    runInspectorProxy?: boolean;
    verbose?: boolean;
}
