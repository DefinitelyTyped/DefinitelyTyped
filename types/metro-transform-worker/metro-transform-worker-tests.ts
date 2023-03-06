import { BasicSourceMap } from 'metro-source-map';
import {
    MinifierConfig,
    MinifierOptions,
    MinifierResult,
    JsTransformerConfig,
    JsTransformOptions,
    JsOutput,
    TransformResponse,
    transform,
    getCacheKey,
} from 'metro-transform-worker';

export const minifierConfig: MinifierConfig = {
    a: true,
};

const basicSourceMap: BasicSourceMap = {
    mappings: 'mappings',
    names: ['name'],
    sources: ['source'],
    version: 3,
};

export const minifierOptions: MinifierOptions = {
    code: 'code',
    map: basicSourceMap,
    filename: 'file',
    reserved: ['rsvd'],
    config: minifierConfig,
};

export const minifierResult: MinifierResult = {
    code: 'code',
    map: basicSourceMap,
};

export const jsTransformerConfig: JsTransformerConfig = {
    assetPlugins: ['plugin'],
    assetRegistryPath: 'path',
    asyncRequireModulePath: 'path',
    babelTransformerPath: 'path',
    dynamicDepsInPackages: 'reject',
    enableBabelRCLookup: true,
    enableBabelRuntime: false,
    experimentalImportBundleSupport: false,
    globalPrefix: 'prefix',
    hermesParser: true,
    minifierConfig,
    minifierPath: 'path',
    optimizationSizeLimit: 4455,
    publicPath: 'path',
    allowOptionalDependencies: false,
    unstable_collectDependenciesPath: 'path',
    unstable_dependencyMapReservedName: 'name',
    unstable_disableModuleWrapping: false,
    unstable_disableNormalizePseudoGlobals: false,
    unstable_compactOutput: true,
};

export const jsTransformOptions: JsTransformOptions = {
    customTransformOptions: {
        a: 1234,
        __proto__: null,
    },
    dev: true,
    experimentalImportSupport: true,
    hot: true,
    inlinePlatform: true,
    inlineRequires: true,
    minify: true,
    nonInlinedRequires: ['module'],
    platform: 'android',
    runtimeBytecodeVersion: 4,
    type: 'module',
    unstable_disableES6Transforms: true,
    unstable_transformProfile: 'default',
};

export const jsOutput: JsOutput = {
    data: {
        code: 'code',
        lineCount: 1,
        map: [
            [1, 2, 3, 4, 'name'],
            [5, 6],
        ],
        functionMap: {
            names: ['name'],
            mappings: 'mappings',
        },
    },
    type: 'js/script',
};

export const transformResponse: TransformResponse = {
    dependencies: [
        {
            name: 'name',
            data: {
                asyncType: null,
                locs: [],
            },
        },
    ],
    output: [jsOutput],
};

export async function a() {
    const response = await transform(jsTransformerConfig, 'root', 'file', Buffer.alloc(5), jsTransformOptions);
    console.log(response.dependencies);
    console.log(response.output);
}

export const cacheKey: string = getCacheKey(jsTransformerConfig);
