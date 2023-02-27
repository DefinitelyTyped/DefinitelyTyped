import type { SourceLocation } from '@babel/code-frame';
import type { JsTransformOptions } from 'metro-transform-worker';
import type { RequireContextParams } from '../../ModuleGraph/worker/collectDependencies';
import type { RequireContext } from '../../lib/contextModule';
import type CountingSet from '../../lib/CountingSet';
import type { Graph } from './Graph';

export interface MixedOutput {
    readonly data: { code: string };
    readonly type: string;
}

export type AsyncDependencyType = 'async' | 'prefetch';

export interface TransformResultDependency {
    /**
     * The literal name provided to a require or import call. For example 'foo' in
     * case of `require('foo')`.
     */
    readonly name: string;

    /**
     * Extra data returned by the dependency extractor.
     */
    readonly data: {
        /**
         * A locally unique key for this dependency within the current module.
         */
        readonly key: string;

        /**
         * If not null, this dependency is due to a dynamic `import()` or `__prefetchImport()` call.
         */
        readonly asyncType: AsyncDependencyType | null;

        /**
         * The condition for splitting on this dependency edge.
         */
        readonly splitCondition?: {
            readonly mobileConfigName: string;
        };

        /**
         * The dependency is enclosed in a try/catch block.
         */
        readonly isOptional?: boolean;

        readonly locs: ReadonlyArray<SourceLocation>;

        /** Context for requiring a collection of modules. */
        readonly contextParams?: RequireContextParams;
    };
}

export interface Dependency {
    readonly absolutePath: string;
    readonly data: TransformResultDependency;
    [key: string]: unknown;
}

export interface Module<T = MixedOutput> {
    readonly dependencies: Map<string, Dependency>;
    readonly inverseDependencies: CountingSet<string>;
    readonly output: ReadonlyArray<T>;
    readonly path: string;
    readonly getSource: () => Buffer;
}

export type Dependencies<T = MixedOutput> = Map<string, Module<T>>;
export type ReadOnlyDependencies<T = MixedOutput> = ReadonlyMap<string, Module<T>>;

export type TransformInputOptions = Omit<JsTransformOptions, 'inlinePlatform' | 'inlineRequires'>;

export type GraphInputOptions = Readonly<{
    entryPoints: ReadonlySet<string>;
    // Unused in core but useful for custom serializers / experimentalSerializerHook
    transformOptions: TransformInputOptions;
}>;

export interface ReadOnlyGraph<T = MixedOutput> {
    readonly entryPoints: ReadonlySet<string>;
    // Unused in core but useful for custom serializers / experimentalSerializerHook
    readonly transformOptions: Readonly<TransformInputOptions>;
    readonly dependencies: ReadOnlyDependencies<T>;
}

export type { Graph };

export interface TransformResult<T = MixedOutput> {
    dependencies: ReadonlyArray<TransformResultDependency>;
    output: ReadonlyArray<T>;
}

export interface TransformResultWithSource<T = MixedOutput> extends TransformResult<T> {
    getSource: () => Buffer;
}

export type TransformFn<T = MixedOutput> = (
    modulePath: string,
    requireContext: RequireContext | null,
) => Promise<TransformResultWithSource<T>>;

export interface AllowOptionalDependenciesWithOptions {
    readonly exclude: string[];
}

export type AllowOptionalDependencies = boolean | AllowOptionalDependenciesWithOptions;

export interface BundlerResolution {
    readonly type: 'sourceFile';
    readonly filePath: string;
}

export interface Options<T = MixedOutput> {
    readonly resolve: (from: string, to: string) => string;
    readonly transform: TransformFn<T>;
    readonly transformOptions: TransformInputOptions;
    readonly onProgress: ((numProcessed: number, total: number) => unknown) | null;
    readonly experimentalImportBundleSupport: boolean;
    readonly unstable_allowRequireContext: boolean;
    readonly shallow: boolean;
}

export interface DeltaResult<T = MixedOutput> {
    readonly added: Map<string, Module<T>>;
    readonly modified: Map<string, Module<T>>;
    readonly deleted: Set<string>;
    readonly reset: boolean;
}

export interface SerializerOptions<T = MixedOutput> {
    readonly asyncRequireModulePath: string;
    readonly createModuleId: (filePath: string) => number;
    readonly dev: boolean;
    readonly getRunModuleStatement: (moduleId: string | number) => string;
    readonly includeAsyncPaths: boolean;
    readonly inlineSourceMap?: boolean;
    readonly modulesOnly: boolean;
    readonly processModuleFilter: (module: Module<T>) => boolean;
    readonly projectRoot: string;
    readonly runBeforeMainModule: ReadonlyArray<string>;
    readonly runModule: boolean;
    readonly serverRoot: string;
    readonly sourceMapUrl?: string;
    readonly sourceUrl?: string;
}
