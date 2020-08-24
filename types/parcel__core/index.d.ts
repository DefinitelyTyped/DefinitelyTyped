// Type definitions for @parcel/core 2.0
// Project: https://github.com/parcel-bundler/parcel#readme
// Definitions by: Arjun Barrett <https://github.com/101arrowz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7
/// <reference types="node" />
// For AbortSignal
/// <reference lib="dom" />

// All type literals are intentional to encourage exact types
// tslint:disable:interface-over-type-literal

import { Diagnostic } from '@parcel/diagnostic';
import { FileSystem } from '@parcel/fs';
import { ParcelWatcherSubscription } from '@parcel/watcher';
import WorkerFarm, { FarmOptions } from '@parcel/workers';
import { PackageManager } from '@parcel/package-manager';
import SourceMap from '@parcel/source-map';
import { Readable } from 'stream';

type ParcelJSONValue = string | number | boolean | null | ParcelJSONValue[] | ParcelJSONObject;
interface ParcelJSONObject {
    [k: string]: ParcelJSONValue;
}
/**
 * A file as seen by Parcel
 */
export type ParcelFile = {
    filePath: string;
    hash?: string;
};

/**
 * Arbitrary data passed in assets
 */
export type Meta = ParcelJSONObject;
/**
 * Engines to target in the build
 */
export type Engines = Readonly<{
    /**
     * Browsers to target, in the form of a browserlist query
     */
    browsers?: string | string[];
    /**
     * Electron versions to target as a semver string
     */
    electron?: string;
    /**
     * Node versions to target as a semver string
     */
    node?: string;
    /**
     * Parcel versions to target as a semver string.
     * Mainly applies to Parcel plugins.
     */
    parcel?: string;
}>;
/**
 * Location of a code block in a file
 */
export type SourceLocation = Readonly<{
    filePath: string;
    /** inclusive */
    start: Readonly<{
        line: number;
        column: number;
    }>;
    /** exclusive */
    end: Readonly<{
        line: number;
        column: number;
    }>;
}>;
/**
 * Options for source mapping
 */
export type SourceMapOptions = {
    sourceRoot?: string;
    inline?: boolean;
    inlineSources?: boolean;
};
/**
 * The module format for the JavaScript in the bundle output
 */
export type OutputFormat = 'esmodule' | 'commonjs' | 'global';
/**
 * The build mode (acts like `process.env.NODE_ENV`)
 */
export type BuildMode = 'development' | 'production' | string;
/**
 * The logging level
 */
export type LogLevel = 'none' | 'error' | 'warn' | 'info' | 'verbose';
/**
 * The HMR options
 */
export type HMROptions = {
    port: number;
    host: string;
};
/**
 * Options for serving bundles with HTTPS
 */
export type HTTPSOptions = {
    /**
     * The path to the SSL/TLS certificate
     */
    cert: string;
    /**
     * The path to the certificate key
     */
    key: string;
};
/**
 * Options for serving a browser-target build
 */
export type ServerOptions = Readonly<{
    /**
     * The path at which to host the application
     */
    publicUrl?: string;
    host?: string;
    port?: number;
    /**
     * HTTPS options.
     * If a boolean, enables/disables HTTPS.
     * Otherwise, specifies the certificate options for HTTPS support.
     */
    https?: boolean | HTTPSOptions;
}>;

/**
 * The execution context of the JavaScript
 */
export type EnvironmentContext =
    | 'browser'
    | 'web-worker'
    | 'service-worker'
    | 'node'
    | 'electron-main'
    | 'electron-renderer';
/**
 * The environment for an output bundle
 */
export type Environment = Readonly<{
    context: EnvironmentContext;
    engines: Engines;
    includeNodeModules: boolean | string[] | { [name: string]: boolean };
    outputFormat: OutputFormat;
    isLibrary: boolean;
    minify: boolean;
    scopeHoist: boolean;
    isBrowser(): boolean;
    isNode(): boolean;
    isElectron(): boolean;
    isWorker(): boolean;
    /** Isolated means unable to access parent bundles */
    isIsolated(): boolean;
    matchesEngines(minVersions: { [browser: string]: string }): boolean;
}>;
/**
 * The parsed target information
 */
export interface Target
    extends Readonly<{
        distEntry?: string | null;
        distDir: string;
        env: Environment;
        sourceMap?: SourceMapOptions | null;
        name: string;
        publicUrl: string;
        loc?: SourceLocation | null;
    }> {}
/**
 * A callback called during a graph traversal
 */
export type GraphTraversalCallback<N, C> = (
    node: N,
    context: C | null,
    actions: {
        skipChildren(): void;
        stop(): void;
    },
) => C | null;
/**
 * A visitor in a graph of assets, bundles, etc.
 */
export type GraphVisitor<N, C> =
    | GraphTraversalCallback<N, C>
    | {
          enter?: GraphTraversalCallback<N, C>;
          exit?: GraphTraversalCallback<N, C>;
      };
/**
 * A structure that allows simultaneous traversal of assets and dependencies
 */
export type BundleTraversable =
    | {
          type: 'asset';
          value: Asset;
      }
    | {
          type: 'dependency';
          value: Dependency;
      };
/**
 * Stats for a processed asset
 */
export type BuildStats = {
    time: number;
    size: number;
};
/**
 * Map of exports to their bindings
 */
export type Symbols = Iterable<[string, { local: string; loc?: SourceLocation | null }]> & {
    get(
        exportSymbol: string,
    ): {
        local: string;
        loc?: SourceLocation | null;
    };
    hasExportSymbol(exportSymbol: string): boolean;
    hasLocalSymbol(local: string): boolean;
    readonly isCleared: boolean;
};
/**
 * Mutable map of exports to their bindings
 */
export type MutableSymbols = Symbols & {
    clear(): void;
    set(exportSymbol: string, local: string, loc?: SourceLocation | null): void;
};
/**
 * A symbol within an asset
 */
export type SymbolResolution = Readonly<{
    asset: Asset;
    exportSymbol: string;
    symbol?: null | string;
    loc?: SourceLocation | null;
}>;
/**
 * An exported symbol within an asset
 */
export type ExportSymbolResolution = SymbolResolution &
    Readonly<{
        exportAs: string;
    }>;
/**
 * A dependency between two assets in the asset graph
 */
export interface Dependency
    extends Readonly<{
        id: string;
        moduleSpecifier: string;
        isAsync: boolean;
        isEntry?: boolean | null;
        isOptional: boolean;
        isURL: boolean;
        isWeak?: boolean | null;
        isIsolated: boolean;
        loc?: SourceLocation | null;
        env: Environment;
        meta: Meta;
        target?: Target | null;
        sourceAssetId?: string | null;
        sourcePath?: string | null;
        pipeline?: string | null;
        symbols: MutableSymbols;
    }> {}
/**
 * The base form of an asset
 */
export interface BaseAsset<A = any>
    extends Readonly<{
        env: Environment;
        fs: FileSystem;
        filePath: string;
        id: string;
        meta: Meta;
        isIsolated: boolean;
        /** Whether this asset will be inserted back into the importer */
        isInline: boolean;
        isSplittable?: boolean | null;
        /**
         * Whether this asset is part of the user's project (i.e. should be
         * transpiled)
         */
        isSource: boolean;
        /** Usually corresponds to the file extension */
        type: string;
        sideEffects: boolean;
        /** Unique identifier for child assets */
        uniqueKey?: string | null;
        /** The AST version and type */
        astGenerator: { type: string; version: string };
        pipeline?: string | null;
        symbols: Symbols;
        getAST(): Promise<A | null>;
        getCode(): Promise<string>;
        getBuffer(): Promise<Buffer>;
        getStream(): Readable;
        getMap(): Promise<SourceMap | null>;
        getMapBuffer(): Promise<Buffer | null>;
        getIncludedFiles(): ReadonlyArray<File>;
        getDependencies(): ReadonlyArray<Dependency>;
        // Deprecated getConfig, getPackage not included
    }> {}
/**
 * An asset represents a source file (i.e. the unaltered source code)
 */
export interface Asset<A = any>
    extends Omit<BaseAsset<A>, 'getAST'>,
        Readonly<{
            /** Throws if AST is missing */
            getAST(): Promise<A>;
            stats: BuildStats;
        }> {}
/**
 * A bundle represents the packaged result of Parcel's transformations on
 * the source code.
 */
export interface Bundle
    extends Readonly<{
        id: string;
        hashReference: string;
        type: string;
        env: Environment;
        filePath?: string | null;
        isEntry?: boolean | null;
        isInline?: boolean | null;
        isSplittable?: boolean | null;
        target: Target;
        stats: BuildStats;
        getEntryAssets(): Asset[];
        getMainEntry(): Asset | null;
        hasAsset(asset: Asset): boolean;
        traverseAssets<C>(visit: GraphVisitor<Asset, C>): C | null;
        traverse<C>(visit: GraphVisitor<BundleTraversable, C>): C | null;
    }> {}
/**
 * A bundle that has been named by a namer
 */
export interface NamedBundle
    extends Omit<Bundle, 'filePath'>,
        Readonly<{
            publicId: string;
            filePath: string;
            name: string;
            displayName: string;
        }> {}
/**
 * Contains info about a group of sibling bundles loaded together
 */
export type BundleGroup = {
    target: Target;
    entryAssetId: string;
    bundleIds: string[];
};
/**
 * A bundle graph contains bundles, assets, dependencies, and bundle groups
 */
export interface BundleGraph<B extends Bundle = Bundle> {
    getAssetById(id: string): Asset;
    getAssetPublicId(asset: Asset): string;
    getBundles(): B[];
    getBundleGroupsContainingBundle(bundle: Bundle): BundleGroup[];
    getBundlesInBundleGroup(bundleGroup: BundleGroup): B[];
    getChildBundles(bundle: Bundle): B[];
    getParentBundles(bundle: Bundle): B[];
    getSiblingBundles(bundle: Bundle): B[];
    getReferencedBundles(bundle: Bundle): B[];
    getDependencies(asset: Asset): Dependency[];
    getIncomingDependencies(asset: Asset): Dependency[];
    resolveAsyncDependency(
        dep: Dependency,
        bundle?: Bundle | null,
    ):
        | {
              type: 'bundle_group';
              value: BundleGroup;
          }
        | {
              type: 'asset';
              value: Asset;
          }
        | null;
    isDependencyDeferred(dep: Dependency): boolean;
    getDependencyResolution(dep: Dependency, bundle?: Bundle | null): Asset | null;
    getReferencedBundle(dep: Dependency, bundle: Bundle): B | null;
    findBundlesWithAsset(asset: Asset): B[];
    findBundlesWithDependency(dep: Dependency): B[];
    isAssetReachableFromBundle(asset: Asset, bundle: Bundle): boolean;
    findReachableBundleWithAsset(bundle: Bundle, asset: Asset): B | null;
    isAssetReferenced(asset: Asset): boolean;
    isAssetReferencedByDependant(bundle: Bundle, asset: Asset): boolean;
    hasParentBundleOfType(bundle: Bundle, type: string): boolean;
    resolveSymbol(asset: Asset, symbol: string, boundary?: Bundle | null): SymbolResolution;
    getExportedSymbols(asset: Asset): ExportSymbolResolution[];
    traverseBundles<C>(visit: GraphVisitor<B, C>, startBundle?: Bundle | null): C | null;
}
/**
 * A log event for progress
 */
export type ProgressLogEvent = Readonly<{
    type: 'log';
    level: 'progress';
    phase?: string;
    message: string;
}>;

/**
 * A log event with a rich diagnostic
 */
export type DiagnosticLogEvent = Readonly<{
    type: 'log';
    level: 'error' | 'warn' | 'info' | 'verbose';
    diagnostics: Diagnostic[];
}>;

/**
 * A success log event
 */
export type TextLogEvent = Readonly<{
    type: 'log';
    level: 'success';
    message: string;
}>;

/**
 * Any log event
 */
export type LogEvent = ProgressLogEvent | DiagnosticLogEvent | TextLogEvent;

/**
 * Event triggered on build start
 */
export type BuildStartEvent = {
    readonly type: 'buildStart';
};

/**
 * Event triggered on build start in watch mode
 */
export type WatchStartEvent = {
    readonly type: 'watchStart';
};

/**
 * Event triggered on build end  in watch mode
 */
export type WatchEndEvent = {
    readonly type: 'watchEnd';
};

/**
 * Event triggered on dependency resolution
 */
export type ResolvingProgressEvent = Readonly<{
    type: 'buildProgress';
    phase: 'resolving';
    dependency: Dependency;
}>;

/**
 * Event triggered on asset transformation
 */
export type TransformingProgressEvent = Readonly<{
    type: 'buildProgress';
    phase: 'transforming';
    filePath: string;
}>;

/**
 * Event triggered on bundle graph generation
 */
export type BundlingProgressEvent = Readonly<{
    type: 'buildProgress';
    phase: 'bundling';
}>;

/**
 * Event triggered on bundle packaging
 */
export type PackagingProgressEvent = Readonly<{
    type: 'buildProgress';
    phase: 'packaging';
    bundle: NamedBundle;
}>;

/**
 * Event triggered on bundle optimization
 */
export type OptimizingProgressEvent = Readonly<{
    type: 'buildProgress';
    phase: 'optimizing';
    bundle: NamedBundle;
}>;

/**
 * Any progress event
 */
export type BuildProgressEvent =
    | ResolvingProgressEvent
    | TransformingProgressEvent
    | BundlingProgressEvent
    | PackagingProgressEvent
    | OptimizingProgressEvent;

/**
 * Event triggered on successful build
 */
export type BuildSuccessEvent = Readonly<{
    type: 'buildSuccess';
    bundleGraph: BundleGraph<NamedBundle>;
    buildTime: number;
    changedAssets: Map<string, Asset>;
}>;

/**
 * Event triggered on failed build
 */
export type BuildFailureEvent = Readonly<{
    type: 'buildFailure';
    diagnostics: Diagnostic[];
}>;

/**
 * Any build end event
 */
export type BuildEvent = BuildFailureEvent | BuildSuccessEvent;

/**
 * Event triggered on file validation
 */
export type ValidationEvent = Readonly<{
    type: 'validation';
    filePath: string;
}>;

/**
 * Any reporter event
 */
export type ReporterEvent =
    | LogEvent
    | BuildStartEvent
    | BuildProgressEvent
    | BuildSuccessEvent
    | BuildFailureEvent
    | WatchStartEvent
    | WatchEndEvent
    | ValidationEvent;
/**
 * Options when calling `parcel.build()`
 */
export type BuildOptions = {
    signal?: AbortSignal;
    startTime?: number;
};
/**
 * Plugin configuration for Parcel
 */
export interface PluginConfig {
    /**
     * Parcel plugin config files or packages to extend
     */
    extends?: string | string[];
    /**
     * List of resolver packages to be used
     */
    resolvers?: string[];
    /**
     * Map of filename globs to the list of transformer packages to be used
     */
    transformers?: { [glob: string]: string[] };
    /**
     * Bundler package to be used
     */
    bundler?: string;
    /**
     * List of namer packages to be used
     */
    namers?: string[];
    /**
     * Map of execution contexts to the list of runtime packages to be used
     */
    runtimes?: { [env in EnvironmentContext]: string[] };
    /**
     * Map of filename globs to the packager package to be used
     */
    packagers?: { [glob: string]: string };
    /**
     * Map of filename globs to the list of optimizer packages to be used
     */
    optimizers?: { [glob: string]: string[] };
    /**
     * List of reporter packages to be used
     */
    reporters?: string[];
    /**
     * Map of filename globs to the list of validator packages to be used
     */
    validators?: { [glob: string]: string[] };
}
/**
 * A plugin config read from the filesystem
 */
export interface ResolvedPluginConfig
    extends PluginConfig,
        Readonly<{
            /**
             * Location of the config file
             */
            filePath: string;
            /**
             * Which directory to resolve the config file path from (if relative)
             */
            resolveFrom?: string;
        }> {}
/**
 * Describes a target to build the project for
 */
export type TargetDescriptor = Readonly<{
    /**
     * Final execution context of the JavaScript code
     */
    context?: EnvironmentContext;
    /**
     * Engines to target in the build
     */
    engines?: Engines;
    /**
     * Packages from `node_modules` to include.
     * A boolean specifies whether or not to bundle any packages.
     * An array of package names specifies the packages to include.
     * A map of package names to booleans works similarly to an array for
     * true values.
     */
    includeNodeModules?: boolean | string[] | { [name: string]: boolean };
    /**
     * The module format for the generated JavaScript
     */
    outputFormat?: OutputFormat;
    /**
     * The base path for the website. Will be used as a prefix in the
     * links between most bundles.
     * Does not apply for Node.js or Electron targets.
     */
    publicUrl?: string;
    /**
     * The directory at which the generated bundles will be located
     */
    distDir: string;
    /**
     * Source map configuration.
     * If a boolean, whether or not to use sourcemaps.
     * Otherwise, specifies the source map configuration.
     */
    sourceMap?: boolean | SourceMapOptions;
    /**
     * Whether or not this target will be used as a library (i.e. a package
     * in `node_modules`)
     */
    isLibrary?: boolean;
    /**
     * Whether or not to minify the code
     */
    minify?: boolean;
    /**
     * Whether or not to enable scope hoisting for smaller builds.
     * Typically only applies to JavaScript.
     */
    scopeHoist?: boolean;
}>;
/**
 * The options used in the creation of a Parcel instance
 */
export interface ParcelOptions
    extends Readonly<{
        /**
         * Entry assets for Parcel to process, e.g. index.html
         */
        entries?: string | string[];
        /**
         * Root directory from which to resolve the entries, e.g. src/
         */
        entryRoot?: string;
        /**
         * Plugin configuration for Parcel to use
         */
        config?: ResolvedPluginConfig;
        /**
         * Default plugin configuration for Parcel to merge with the config
         */
        defaultConfig?: ResolvedPluginConfig;
        /**
         * Environment variables to use in combination with `process.env`
         */
        env?: NodeJS.ProcessEnv;
        /**
         * Targets to process.
         * If an array of target names, Parcel will get the configuration for
         * each target from package.json.
         */
        targets?: string[] | { [name: string]: TargetDescriptor };
        /**
         * Whether or not to disable caching
         */
        disableCache?: boolean;
        /**
         * The directory at which the cache will be stored
         */
        cacheDir?: string;
        /**
         * Whether or not to kill the worker processes used by Parcel after the
         * build completes.
         * You usually won't need to set this.
         */
        killWorkers?: boolean;
        /**
         * The build mode (acts like `process.env.NODE_ENV`)
         */
        mode?: BuildMode;
        /**
         * Whether to minify the code.
         * Overridden by the minify option of each target.
         */
        minify?: boolean;
        /**
         * Whether to use scope hosting.
         * Overridden by the scope hoisting option of each target.
         * Typically only applies to JavaScript.
         */
        scopeHoist?: boolean;
        /**
         * Whether or not to enable source mapping.
         * Overridden by the source mapping options of each target.
         */
        sourceMaps?: boolean;
        /**
         * The public URL used to link assets in any browser targets.
         * Overridden by the public URL specified in each target.
         */
        publicUrl?: string;
        /**
         * The output directory for the implicit target. Only applies if no
         * targets are specified.
         */
        distDir?: string;
        /**
         * Hot module replacement options
         */
        hot?: HMROptions | null;
        /**
         * Whether to enable content hashing for bundle filename fingerprints
         */
        contentHash?: boolean;
        /**
         * Options for serving the bundle after building it
         */
        serve?: ServerOptions | false;
        /**
         * Whether or not to autoinstall missing packages
         */
        autoinstall?: boolean;
        /**
         * The level of logging that Parcel should do. 'none' means no logging,
         * 'verbose' means Parcel will log as information much as it can.
         */
        logLevel?: LogLevel;
        /**
         * Whether or not to enable Chrome DevTools profiling.
         * Only applies to browser builds that contain JavaScript code.
         */
        profile?: boolean;
        /**
         * Whether or not to overwrite the methods of the global `console`
         * object (i.e. `console.info`, `console.log`, etc.) with their
         * counterparts from Parcel's internal logger.
         * You usually won't need to set this.
         */
        patchConsole?: boolean;
        /**
         * The input filesystem from which to read the assets, package.json,
         * etc.
         */
        inputFS?: FileSystem;
        /**
         * The output fileystem at which the bundles will be generated
         */
        outputFS?: FileSystem;
        /**
         * The worker farm that Parcel should use for bundling
         */
        workerFarm?: WorkerFarm;
        /**
         * The package manager to use for the bundling
         */
        packageManager?: PackageManager;
        /**
         * The default engines to target.
         * Overridden by the engines specified in each target.
         */
        defaultEngines?: Engines;
        /**
         * Detailed report generation option.
         * If a number, generates a detailed report for the largest N assets
         * in each bundle.
         * If true, N defaults to 10; if false, no detailed report is
         * generated.
         */
        detailedReport?: number | boolean;
        // Possible in the future: throwErrors, global (?)
    }> {}

/**
 * The Parcel Node.js API
 */
declare class Parcel {
    /**
     * Creates a new instance of Parcel
     * @param options The options to create this instance of Parcel with
     */
    constructor(options: ParcelOptions);
    /**
     * Initializes the asynchronous portions of the Parcel instance internally
     */
    init(): Promise<void>;
    /**
     * Bundles the entry assets and returns the generated bundle graph
     */
    run(): Promise<BundleGraph<NamedBundle>>;
    /**
     * Runs Parcel in watch mode
     * @param cb The callback to run on a build event
     */
    watch(cb: (err: Error | null, event: BuildEvent) => unknown): Promise<ParcelWatcherSubscription>;
    build(opts: BuildOptions): Promise<BuildEvent>;
    startNextBuild(): Promise<void>;
    startProfiling(): Promise<void>;
    stopProfiling(): Promise<void>;
}

export default Parcel;

/**
 * An error thrown when Parcel fails to bundle
 */
export abstract class BuildError {
    name: 'BuildError';
    diagnostics: Diagnostic[];
}

export function createWorkerFarm(opts?: FarmOptions): WorkerFarm;
