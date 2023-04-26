// Type definitions for metro-babel-transformer 0.76
// Project: https://github.com/facebook/metro
// Definitions by: Adam Foxman <https://github.com/afoxman>
//                 Tommy Nguyen <https://github.com/tido64>
//                 Alex Hunt <https://github.com/huntie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { FBSourceFunctionMap } from 'metro-source-map';

export interface CustomTransformOptions {
    [key: string]: unknown;
}

export type TransformProfile = 'default' | 'hermes-stable' | 'hermes-canary';

export interface BabelTransformerOptions {
    readonly customTransformOptions?: CustomTransformOptions;
    readonly dev: boolean;
    readonly enableBabelRCLookup?: boolean;
    readonly enableBabelRuntime: boolean | string;
    readonly extendsBabelConfigPath?: string;
    readonly experimentalImportSupport?: boolean;
    readonly hermesParser?: boolean;
    readonly hot: boolean;
    readonly inlineRequires: boolean;
    readonly nonInlinedRequires?: ReadonlyArray<string>;
    readonly minify: boolean;
    readonly unstable_disableES6Transforms?: boolean;
    readonly platform: string | null;
    readonly projectRoot: string;
    readonly publicPath: string;
    readonly unstable_transformProfile?: TransformProfile;
    readonly globalPrefix: string;
}

export interface BabelTransformerArgs {
    readonly filename: string;
    readonly options: BabelTransformerOptions;
    readonly plugins?: unknown;
    readonly src: string;
}

export interface BabelTransformer {
    transform: (args: BabelTransformerArgs) => {
        ast: unknown;
        functionMap: FBSourceFunctionMap | null;
    };
    getCacheKey?: () => string;
}

export const transform: BabelTransformer['transform'];
