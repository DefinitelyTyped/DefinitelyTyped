import { IncomingMessage, ServerResponse } from 'http';
import { DeltaResult, Graph, Module, ReportableEvent, Server, TransformResult } from 'metro';
import {
    PostProcessBundleSourcemap,
    ExtraTransformOptions,
    GetTransformOptionsOpts,
    GetTransformOptions,
    Middleware,
    ResolverConfigT,
    SerializerConfigT,
    TransformerConfigT,
    MetalConfigT,
    ServerConfigT,
    SymbolicatorConfigT,
    InputConfigT,
    IntermediateConfigT,
    ConfigT,
    YargArguments,
} from 'metro-config';
import { MixedSourceMap } from 'metro-source-map';

export const postProcessBundleSourceMap: PostProcessBundleSourcemap = (args: {
    code: Buffer | string;
    map: MixedSourceMap;
    outFileName: string;
}): {
    code: Buffer | string;
    map: MixedSourceMap | string;
} => {
    return {
        code: 'code',
        map: 'map',
    };
};

export const extraTransformOptions: ExtraTransformOptions = {
    preloadedModules: {
        m1: true,
    },
    ramGroups: ['g1'],
    transform: {
        experimentalImportSupport: true,
        inlineRequires: false,
    },
};

export const getTransformOptionsOpts: GetTransformOptionsOpts = {
    dev: true,
    hot: true,
    platform: 'windows',
};

export const getTransformOptions: GetTransformOptions = (
    entryPoints: ReadonlyArray<string>,
    options: GetTransformOptionsOpts,
    getDependenciesOf: (filePath: string) => Promise<string[]>,
): Promise<ExtraTransformOptions> => {
    return Promise.resolve(extraTransformOptions);
};

export const middleware: Middleware = (
    incomingMessage: IncomingMessage,
    serverResponse: ServerResponse,
    error: (e?: Error) => unknown,
): unknown => {
    return {};
};

export const resolverConfig: ResolverConfigT = {
    assetExts: ['.png'],
    assetResolutions: [],
    blockList: [],
    extraNodeModules: {},
    nodeModulesPaths: [],
    platforms: ['ios'],
    resolverMainFields: ['main'],
    sourceExts: ['.js', '.jsx'],
    useWatchman: true,
};

export const serializerConfig: SerializerConfigT = {
    createModuleIdFactory:
        () =>
        (path: string): number => {
            return 123;
        },
    experimentalSerializerHook: (graph: Graph, delta: DeltaResult): unknown => {
        return graph;
    },
    getModulesRunBeforeMainModule: (entryFilePath: string): string[] => {
        return ['a'];
    },
    getPolyfills: (options: { platform?: string }): ReadonlyArray<string> => {
        return ['polyfill'];
    },
    getRunModuleStatement: (moduleId: number | string): string => {
        return 'run statement';
    },
    polyfillModuleNames: ['modulename'],
    postProcessBundleSourcemap: (args: {
        code: Buffer | string;
        map: MixedSourceMap;
        outFileName: string;
    }): {
        code: Buffer | string;
        map: MixedSourceMap | string;
    } => {
        return { code: 'code', map: 'map' };
    },
    processModuleFilter: (modules: Module): boolean => {
        return true;
    },
};

export const transformerConfig: TransformerConfigT = {
    assetPlugins: [],
    assetRegistryPath: 'registry',
    asyncRequireModulePath: 'module-require',
    babelTransformerPath: 'babel',
    dynamicDepsInPackages: 'throwAtRuntime',
    enableBabelRCLookup: true,
    enableBabelRuntime: true,
    experimentalImportBundleSupport: true,
    globalPrefix: 'global',
    hermesParser: true,
    minifierConfig: {},
    minifierPath: 'minifier',
    optimizationSizeLimit: 12345,
    publicPath: 'public',
    allowOptionalDependencies: true,
    unstable_collectDependenciesPath: 'collect-deps',
    unstable_disableModuleWrapping: true,
    unstable_disableNormalizePseudoGlobals: true,
    unstable_compactOutput: true,
    getTransformOptions: (
        entryPoints: ReadonlyArray<string>,
        options: GetTransformOptionsOpts,
        getDependenciesOf: (filePath: string) => Promise<string[]>,
    ): Promise<ExtraTransformOptions> => {
        return Promise.resolve({});
    },
    transformVariants: {},
    workerPath: 'worker',
};

export const metalConfig: MetalConfigT = {
    cacheStores: [],
    cacheVersion: '1',
    maxWorkers: 5,
    projectRoot: 'root',
    stickyWorkers: false,
    transformerPath: 'transformer',
    reporter: { update: (event: ReportableEvent): void => {} },
    resetCache: false,
    watchFolders: ['folder1'],
};

export const serverConfig: ServerConfigT = {
    enhanceMiddleware: (middleware: Middleware, server: Server): Middleware => {
        return middleware;
    },
    useGlobalHotkey: true,
    port: 1234,
    rewriteRequestUrl: (url: string): string => {
        return 'hello world';
    },
    runInspectorProxy: false,
    verifyConnections: true,
};

export const symbolicatorConfig: SymbolicatorConfigT = {
    customizeFrame: (frame: {
        readonly file?: string;
        readonly lineNumber?: number;
        readonly column?: number;
        readonly methodName?: string;
    }): { readonly collapse?: boolean } | undefined | Promise<{ readonly collapse?: boolean }> | Promise<undefined> => {
        return undefined;
    },
};

export const inputConfig: InputConfigT = {
    ...metalConfig,
    cacheStores: [
        {
            get: (key: Buffer): TransformResult | undefined | Promise<TransformResult> | Promise<undefined> =>
                undefined,
            set: (key: Buffer, value: TransformResult): void | Promise<void> => {},
            clear: (): void | Promise<void> => {},
        },
    ],
    resolver: resolverConfig,
    server: serverConfig,
    serializer: serializerConfig,
    symbolicator: symbolicatorConfig,
    transformer: transformerConfig,
};

export const intermediateConfig: IntermediateConfigT = {
    ...metalConfig,
    resolver: resolverConfig,
    server: serverConfig,
    serializer: serializerConfig,
    symbolicator: symbolicatorConfig,
    transformer: transformerConfig,
};

export const config: ConfigT = {
    ...intermediateConfig,
};

export const yargArguments: YargArguments = {
    config: 'config',
    cwd: 'cwd',
    port: 1234,
    host: 'host',
    projectRoot: 'root',
    watchFolders: ['watch'],
    assetExts: ['asset'],
    sourceExts: ['ext'],
    platforms: ['ios'],
    'max-workers': 5,
    maxWorkers: 5,
    transformer: 'transformer',
    'reset-cache': false,
    resetCache: false,
    runInspectorProxy: false,
    verbose: true,
};
