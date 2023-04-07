import { IncomingMessage, ServerResponse } from 'http';
import { DeltaResult, Module, ReadOnlyGraph, ReportableEvent, SerializerOptions, Server, TransformResult } from 'metro';
import {
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
    WatcherConfigT,
} from 'metro-config';

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
    entryPoints,
    options,
    getDependenciesOf,
) => {
    return Promise.resolve(extraTransformOptions);
};

export const getTransformOptionsPartial: GetTransformOptions = (
    entryPoints,
    options,
    getDependenciesOf,
) => {
    return Promise.resolve({
        transform: {
            experimentalImportSupport: true,
            inlineRequires: false,
        },
    });
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
    disableHierarchicalLookup: false,
    extraNodeModules: {},
    emptyModulePath: 'metro-runtime/src/modules/empty-module',
    nodeModulesPaths: [],
    platforms: ['ios'],
    resolverMainFields: ['main'],
    sourceExts: ['.js', '.jsx'],
    unstable_enableSymlinks: false,
    unstable_conditionNames: ['import', 'require'],
    unstable_conditionsByPlatform: {
        web: ['browser'],
    },
    unstable_enablePackageExports: false,
    useWatchman: true,
    requireCycleIgnorePatterns: [],
};

export const serializerConfig: SerializerConfigT = {
    createModuleIdFactory:
        () =>
        (path: string): number => {
            return 123;
        },
    customSerializer: async (
        entryPoint: string,
        preModules: ReadonlyArray<Module>,
        graph: ReadOnlyGraph,
        options: SerializerOptions,
    ): Promise<string> => {
        return '';
    },
    experimentalSerializerHook: (graph: ReadOnlyGraph, delta: DeltaResult): unknown => {
        return graph;
    },
    getModulesRunBeforeMainModule: (entryFilePath: string): string[] => {
        return ['a'];
    },
    getPolyfills: (options: { platform: string | null }): ReadonlyArray<string> => {
        return ['polyfill'];
    },
    getRunModuleStatement: (moduleId: number | string): string => {
        return 'run statement';
    },
    polyfillModuleNames: ['modulename'],
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
    getTransformOptions: async (entryPoints, options, getDependenciesOf) => {
        return {
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        };
    },
    transformVariants: {},
    workerPath: 'worker',
    unstable_allowRequireContext: false,
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
    experimentalImportBundleSupport: false,
    port: 1234,
    rewriteRequestUrl: (url: string): string => {
        return 'hello world';
    },
    runInspectorProxy: false,
    unstable_serverRoot: null,
    useGlobalHotkey: false,
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

export const watcherConfig: WatcherConfigT = {
    additionalExts: ['cjs', 'mjs'],
    watchman: {
        deferStates: [],
    },
    healthCheck: {
        enabled: false,
        interval: 1000,
        timeout: 1000,
        filePrefix: '',
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
    watcher: watcherConfig,
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
