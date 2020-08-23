// Type definitions for @parcel/plugin 2.0
// Project: https://github.com/parcel-bundler/parcel#readme
// Definitions by: Arjun Barrett <https://github.com/101arrowz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import {
    SourceLocation,
    EnvironmentContext,
    Engines,
    OutputFormat,
    Meta,
    BaseAsset,
    File,
    MutableSymbols,
    Environment,
    TargetDescriptor,
    BundleGraph,
    Asset,
    Bundle,
    BundleGroup,
    Dependency,
    Target,
    GraphVisitor,
    BundleTraversable,
    BuildMode,
    HMROptions,
    ServerOptions,
    LogLevel,
    NamedBundle,
    ReporterEvent
} from 'parcel__core';
import { Logger } from 'parcel__logger';
import { FileSystem } from 'parcel__fs';
import { PackageManager } from 'parcel__package-manager';
import SourceMap from 'parcel__source-map';
import { Readable } from 'stream';
import { Diagnostic } from 'parcel__diagnostic';

type _EnvironmentOptions = Readonly<{
    context?: EnvironmentContext,
    engines?: Engines,
    includeNodeModules?: boolean | string[] | {
      [name: string]: boolean
    },
    outputFormat?: OutputFormat,
    isLibrary?: boolean,
    minify?: boolean,
    scopeHoist?: boolean,
}>;

type _DependencyOptions = Readonly<{
    moduleSpecifier: string;
    isAsync?: boolean;
    isEntry?: boolean;
    isOptional?: boolean;
    isURL?: boolean;
    isWeak?: boolean;
    isIsolated?: boolean;
    loc?: SourceLocation;
    env?: _EnvironmentOptions;
    meta?: Meta
}>;


type _MutableAsset = Omit<
    BaseAsset,
    'isIsolated' | 'isInline' | 'isSplittable'
    > & {
    isIsolated: boolean;
    isInline: boolean;
    isSplittable?: boolean | null;
    type: string;
    addDependency(dep: _DependencyOptions): string;
    addIncludedFile(file: File): void;
    addURLDependency(url: string, opts: Omit<_DependencyOptions, 'moduleSpecifier'> & {
        readonly moduleSpecifier?: string;
    }): string;
    readonly symbols: MutableSymbols;
    isASTDirty(): boolean;
    /** Returns null if AST missing */
    getAST(): Promise<any>;
    setAST(ast: any): void;
    setBuffer(buf: Buffer): void;
    setCode(code: string): void;
    /** Throws if the AST is dirty */
    getCode(): Promise<string>;
    setEnvironment(opts: _EnvironmentOptions): void;
    setMap(map?: SourceMap | null): void;
    setStream(stream: Readable): void;
};

type _CreateBundleOptions = Readonly<{
    uniqueKey?: string;
    entryAsset: Asset;
    target: Target;
    isEntry?: boolean;
    isInline?: boolean;
    isSplittable?: boolean;
    type?: string;
    env?: Environment;
    pipeline?: string;
} | {
    uniqueKey: string;
    entryAsset?: Asset;
    target: Target;
    isEntry?: boolean;
    isInline?: boolean;
    isSplittable?: boolean;
    type: string;
    env: Environment;
    pipeline?: string;
}>;
type _MutableBundleGraph = BundleGraph & {
    addAssetGraphToBundle(asset: Asset, bundle: Bundle): void;
    addEntryToBundle(asset: Asset, bundle: Bundle): void,
    addBundleToBundleGroup(bundle: Bundle, bundleGroup: BundleGroup): void,
    createAssetReference(dep: Dependency, asset: Asset): void,
    createBundleReference(b1: Bundle, b2: Bundle): void,
    createBundle(opts: _CreateBundleOptions): Bundle,
    createBundleGroup(dep: Dependency, target: Target): BundleGroup,
    getDependencyAssets(dep: Dependency): Array<Asset>,
    getParentBundlesOfBundleGroup(bundleGroup: BundleGroup): Array<Bundle>,
    getTotalSize(asset: Asset): number,
    removeAssetGraphFromBundle(asset: Asset, bundle: Bundle): void,
    removeBundleGroup(bundleGroup: BundleGroup): void,
    internalizeAsyncDependency(bundle: Bundle, dependency: Dependency): void,
    traverse<C>(visit: GraphVisitor<BundleTraversable, C>): C | null,
    traverseContents<C>(visit: GraphVisitor<BundleTraversable, C>): C | null,
};

declare module '@parcel/core' {
    /**
     * Options used to create an environment
     */
    export type EnvironmentOptions = _EnvironmentOptions
    /**
     * Options used to create a dependency
     */
    export type DependencyOptions = _DependencyOptions
    /**
     * A modifiable asset for use with transformers
     */
    export type MutableAsset = _MutableAsset;
    /**
     * Options used to create a bundle
     */
    export type CreateBundleOptions = _CreateBundleOptions;
    /**
     * A modifiable bundle graph for use with bundlers
     */
    export type MutableBundleGraph = _MutableBundleGraph;
}
/**
 * A config result found from the filesystem
 */
export type FSConfigResult = {
    contents: any;
    filePath: string;
};
/**
 * Format of `package.json`
 */
export type PackageJSON = {
    name: string,
    version: string,
    main?: string,
    module?: string,
    types?: string,
    browser?: string | {
        [path: string]: string | boolean,
    },
    source?: string | {
        [path: string]: string,
    },
    alias?: {
        [alias: string]: string,
    },
    browserslist?: string[],
    engines?: Engines,
    targets?: {
        [name: string]: TargetDescriptor
    },
    dependencies?: {
        [dep: string]: string
    },
    devDependencies?: {
        [devDep: string]: string
    },
    peerDependencies?: {
        [peerDep: string]: string
    },
    sideEffects?: boolean | string | string[]
};
/**
 * An object that allows plugins to configure themselves
 */
export type Config = Readonly<{
    isSource: boolean;
    searchPath: string;
    result: any;
    env: Environment;
    includedFiles: Set<string>;
    setResult(result: any): void;
    setResultHash(resultHash: string): void;
    addIncludedFile(filePath: string): void;
    addDevDependency(name: string, version: string): void;
    setWatchGlob(glob: string): void;
    getConfigFrom(searchPath: string, filePaths: string[], option?: {
        packageKey?: string;
        parse?: boolean;
        exclude?: boolean;
    }): Promise<FSConfigResult | null>;
    getConfig(filePaths: string[], option?: {
        packageKey?: string;
        parse?: boolean;
        exclude?: boolean;
    }): Promise<FSConfigResult | null>;
    getPackage(): Promise<PackageJSON | null>;
    shouldRehydrate(): void;
    shouldReload(): void;
    shouldInvalidateOnStartup(): void;
}>;
/**
 * The options passed to each plugin
 */
export type PluginOptions = Readonly<{
    mode: BuildMode;
    sourceMaps: boolean;
    env: NodeJS.ProcessEnv;
    hot?: HMROptions | null;
    serve: ServerOptions | false;
    autoinstall: boolean;
    logLevel: LogLevel;
    rootDir: string;
    projectRoot: string;
    cacheDir: string;
    inputFS: FileSystem;
    outputFS: FileSystem;
    packageManager: PackageManager;
    instanceId: string;
    detailedReport: number;
}>;

type Async<T> = T | Promise<T>;

type ResolveFn = (from: string, to: string) => Promise<string>;

/**
 * Data that will be used to create a new asset
 */
export type TransformerResult = Readonly<{
    ast?: any;
    content?: string | Buffer | Readable;
    dependencies?: ReadonlyArray<_DependencyOptions>;
    env?: _EnvironmentOptions;
    filePath?: string;
    includedFiles?: ReadonlyArray<File>;
    isInline?: boolean;
    isIsolated?: boolean;
    isSource?: boolean;
    isSplittable?: boolean;
    map?: SourceMap;
    meta?: Meta;
    pipeline?: string;
    sideEffects?: boolean;
    symbols?: ReadonlyMap<string, {
        local: string;
        loc?: SourceLocation;
    }>;
    symbolsConfident?: boolean;
    type: string;
    uniqueKey?: string;
}>;

/**
 * The result from the `generate` method of `Transformer`
 */
export type TransformerGenerateResult = {
    content: string | Buffer | Readable;
    map?: SourceMap;
};

/**
 * Options for creating a transformer
 */
export type TransformerOpts = {
    canReuseAST?: (opts: {
        ast: any;
        options: PluginOptions;
        logger: Logger;
    }) => Async<boolean>;
    loadConfig?: (opts: {
        config: Config;
        options: PluginOptions;
        logger: Logger
    }) => Async<void>;
    preSerializeConfig?: (opts: {
        config: Config;
        options: PluginOptions;
    }) => Async<void>;
    postDeserializeConfig?: (opts: {
        config: Config;
        options: PluginOptions;
        logger: Logger;
    }) => Async<void>;
    parse?: (opts: {
        asset: _MutableAsset;
        config: any | null;
        resolve: ResolveFn;
        options: PluginOptions;
        logger: Logger;
    }) => Async<any | null>;
    transform(opts: {
        asset: _MutableAsset;
        config: any | null;
        resolve: ResolveFn;
        options: PluginOptions;
        logger: Logger
    }): Async<(TransformerResult | _MutableAsset)[]>;
    generate?: (opts: {
        asset: Asset;
        ast: any;
        options: PluginOptions;
        logger: Logger;
    }) => Async<TransformerGenerateResult>;
    postProcess?: (opts: {
        assets: _MutableAsset[];
        config: any | null;
        resolve: ResolveFn;
        options: PluginOptions;
        logger: Logger;
    }) => Async<TransformerResult[]>;
};

/**
 * A transformer plugin
 */
export class Transformer {
    constructor(opts: TransformerOpts);
}

/**
 * Result from a resolver plugin's resolution
 */
export type ResolveResult = Readonly<{
    filePath?: string;
    isExcluded?: boolean;
    sideEffects?: boolean;
    code?: string;
}>;

/**
 * Options for creating a resolver
 */
export type ResolverOpts = {
    resolve(opts: {
        dependency: Dependency;
        options: PluginOptions;
        logger: Logger;
        filePath: string;
    }): Async<ResolveResult | null | void>;
};

/**
 * A resolver plugin
 */
export class Resolver {
    constructor(opts: ResolverOpts);
}

/**
 * The return value of `loadConfig` that allows for config-loading in bundlers
 */
export type ConfigOutput = {
    config: any;
    files: File[];
};

/**
 * Options for creating a bundler
 */
export type BundlerOpts = {
    loadConfig?: (opts: {
        options: PluginOptions;
        logger: Logger
    }) => Async<ConfigOutput>;
    bundle(opts: {
        bundleGraph: _MutableBundleGraph;
        config: any | null;
        options: PluginOptions;
        logger: Logger;
    }): Async<void>;
    optimize(opts: {
        bundleGraph: _MutableBundleGraph;
        config: any | null;
        options: PluginOptions;
        logger: Logger;
    }): Async<void>;
};

/**
 * A bundler plugin
 */
export class Bundler {
    constructor(opts: BundlerOpts);
}

/**
 * Options for creating a namer
 */
export type NamerOpts = {
    name(opts: {
        bundle: Bundle;
        bundleGraph: BundleGraph<Bundle>;
        options: PluginOptions;
        logger: Logger;
    }): Async<string | null | void>;
};

/**
 * A namer plugin
 */
export class Namer {
    constructor(opts: NamerOpts);
}

/**
 * Return value of a runtime; converted to asset and inserted into bundle
 */
export type RuntimeAsset = Readonly<{
    filePath?: string;
    code: string;
    dependency?: Dependency;
    isEntry?: boolean;
}>;

/**
 * Options for creating a runtime
 */
export type RuntimeOpts = {
    apply(opts: {
        bundle: NamedBundle;
        bundleGraph: BundleGraph<NamedBundle>;
        options: PluginOptions;
        logger: Logger
    }): Async<void | RuntimeAsset | RuntimeAsset[]>;
};

/**
 * A runtime plugin
 */
export class Runtime {
    constructor(opts: RuntimeOpts);
}

/**
 * The result of packaging the bundle
 */
export type BundleResult = Readonly<{
    contents: string | Buffer | Readable;
    ast?: any;
    map?: SourceMap;
    type?: string;
}>;

/**
 * Options for creating a packager
 */
export type PackagerOpts = {
    package(opts: {
        bundle: NamedBundle;
        bundleGraph: BundleGraph<NamedBundle>;
        options: PluginOptions;
        logger: Logger,
        getInlineBundleContents: (
            bundle: Bundle,
            bundleGraph: BundleGraph<NamedBundle>
        ) => Async<{ contents: string | Buffer | Readable; }>;
        getSourceMapReference: (map?: SourceMap) => Async<string | null>;
    }): Async<BundleResult>;
};

/**
 * A packager plugin
 */
export class Packager {
    constructor(opts: PackagerOpts);
}

/**
 * Options for creating an optimizer
 */
export type OptimizerOpts = {
    optimize(opts: {
        bundle: NamedBundle;
        bundleGraph: BundleGraph<NamedBundle>;
        contents: string | Buffer | Readable;
        map?: SourceMap | null;
        options: PluginOptions;
        logger: Logger,
        getSourceMapReference: (map?: SourceMap) => Async<string | null>;
    }): Async<BundleResult>;
};

/**
 * An optimizer plugin
 */
export class Optimizer {
    constructor(opts: OptimizerOpts);
}

/**
 * Options for creating a reporter
 */
export type ReporterOpts = {
    report(opts: {
        event: ReporterEvent;
        options: PluginOptions;
        logger: Logger;
    }): Async<void>;
};

/**
 * A reporter plugin
 */
export class Reporter {
    constructor(opts: ReporterOpts);
}

/**
 * The result of validating an asset
 */
export type ValidateResult = {
    warnings: Diagnostic[];
    errors: Diagnostic[];
};

/**
 * Function to resolve a config file
 */
export type ResolveConfigFn = (
    configNames: string[]
) => Promise<string | null>;

/**
 * Function to resolve a config file relative to the path to an asset
 */
export type ResolveConfigWithPathFn = (
    configNames: string[],
    assetFilePath: string
) => Promise<string | null>;

/**
 * Options to create a validator
 */
export type ValidatorOpts = {
    validate(opts: {
        asset: Asset;
        config: any | void;
        options: PluginOptions;
        logger: Logger;
    }): Async<ValidateResult | void>;
    getConfig?: (opts: {
        asset: Asset;
        resolveConfig: ResolveConfigFn;
        options: PluginOptions;
        logger: Logger;
    }) => Async<any | void>;
} | {
    validateAll(opts: {
        assets: Asset[];
        resolveConfigWithPath: ResolveConfigWithPathFn;
        options: PluginOptions;
        logger: Logger;
    }): Async<(ValidateResult | null | void)[]>;
};

/**
 * A validator plugin
 */
export class Validator {
    constructor(opts: ValidatorOpts);
}