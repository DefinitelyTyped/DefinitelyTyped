import { SourceLocation } from '@babel/code-frame';
import { JsTransformOptions } from 'metro-transform-worker';

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

    readonly data: {
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
    };
}

export interface Dependency {
    readonly absolutePath: string;
    readonly data: TransformResultDependency;
    [key: string]: unknown;
}

export interface Module<T = MixedOutput> {
    readonly dependencies: Map<string, Dependency>;
    readonly inverseDependencies: Set<string>;
    readonly output: ReadonlyArray<T>;
    readonly path: string;
    readonly getSource: () => Buffer;
}

export type Dependencies<T = MixedOutput> = Map<string, Module<T>>;

export type TransformInputOptions = Omit<JsTransformOptions, 'inlinePlatform' | 'inlineRequires'>;

export interface Graph<T = MixedOutput> {
    dependencies: Dependencies<T>;
    importBundleNames: Set<string>;
    readonly entryPoints: ReadonlyArray<string>;
    readonly transformOptions: TransformInputOptions;
}

export interface AllowOptionalDependenciesWithOptions {
    readonly exclude: string[];
}

export type AllowOptionalDependencies = boolean | AllowOptionalDependenciesWithOptions;

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
    readonly inlineSourceMap?: boolean;
    readonly modulesOnly: boolean;
    readonly processModuleFilter: (module: Module<T>) => boolean;
    readonly projectRoot: string;
    readonly runBeforeMainModule: ReadonlyArray<string>;
    readonly runModule: boolean;
    readonly sourceMapUrl?: string;
    readonly sourceUrl?: string;
}
