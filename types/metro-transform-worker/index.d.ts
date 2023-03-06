// Type definitions for metro-transform-worker 0.66
// Project: https://github.com/facebook/metro
// Definitions by: Adam Foxman <https://github.com/afoxman>
//                 Tommy Nguyen <https://github.com/tido64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AllowOptionalDependencies, DynamicRequiresBehavior, TransformResultDependency } from 'metro';
import { CustomTransformOptions, TransformProfile } from 'metro-babel-transformer';
import { BasicSourceMap, FBSourceFunctionMap, MetroSourceMapSegmentTuple } from 'metro-source-map';

export type MinifierConfig = Readonly<Record<string, unknown>>;

export interface MinifierOptions {
    code: string;
    map?: BasicSourceMap;
    filename: string;
    reserved: ReadonlyArray<string>;
    config: MinifierConfig;
}

export interface MinifierResult {
    code: string;
    map?: BasicSourceMap;
}

export type Type = 'script' | 'module' | 'asset';

export type JsTransformerConfig = Readonly<{
    assetPlugins: ReadonlyArray<string>;
    assetRegistryPath: string;
    asyncRequireModulePath: string;
    babelTransformerPath: string;
    dynamicDepsInPackages: DynamicRequiresBehavior;
    enableBabelRCLookup: boolean;
    enableBabelRuntime: boolean;
    experimentalImportBundleSupport: boolean;
    globalPrefix: string;
    hermesParser: boolean;
    minifierConfig: MinifierConfig;
    minifierPath: string;
    optimizationSizeLimit: number;
    publicPath: string;
    allowOptionalDependencies: AllowOptionalDependencies;
    unstable_collectDependenciesPath: string;
    unstable_dependencyMapReservedName?: string;
    unstable_disableModuleWrapping: boolean;
    unstable_disableNormalizePseudoGlobals: boolean;
    unstable_compactOutput: boolean;
}>;

export { CustomTransformOptions } from 'metro-babel-transformer';

export type JsTransformOptions = Readonly<{
    customTransformOptions?: CustomTransformOptions;
    dev: boolean;
    experimentalImportSupport?: boolean;
    hot: boolean;
    inlinePlatform: boolean;
    inlineRequires: boolean;
    minify: boolean;
    nonInlinedRequires?: ReadonlyArray<string>;
    platform?: string;
    runtimeBytecodeVersion?: number;
    type: Type;
    unstable_disableES6Transforms?: boolean;
    unstable_transformProfile: TransformProfile;
}>;

export type JSFileType = 'js/script' | 'js/module' | 'js/module/asset';

export type JsOutput = Readonly<{
    data: Readonly<{
        code: string;
        lineCount: number;
        map: MetroSourceMapSegmentTuple[];
        functionMap?: FBSourceFunctionMap;
    }>;
    type: JSFileType;
}>;

// Hermes byte-code output type
export type BytecodeOutput = unknown;

export type TransformResponse = Readonly<{
    dependencies: ReadonlyArray<TransformResultDependency>;
    output: ReadonlyArray<JsOutput | BytecodeOutput>;
}>;

export function transform(
    config: JsTransformerConfig,
    projectRoot: string,
    filename: string,
    data: Buffer,
    options: JsTransformOptions,
): Promise<TransformResponse>;

export function getCacheKey(config: JsTransformerConfig): string;
