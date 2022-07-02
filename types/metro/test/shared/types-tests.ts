import { BundleOptions, OutputOptions, RequestOptions } from 'metro';

export const bundleOptions: BundleOptions = {
    bundleType: 'delta',
    customTransformOptions: { flimflam: true, __proto__: null },
    dev: true,
    entryFile: "entry",
    excludeSource: true,
    hot: false,
    inlineSourceMap: false,
    minify: false,
    modulesOnly: false,
    onProgress: (doneCont: number, totalCount: number): unknown => "progress",
    platform: "android",
    runModule: true,
    shallow: false,
    sourceMapUrl: "url",
    sourceUrl: "url",
    createModuleIdFactory: () => (path: string): number => 123,
    unstable_transformProfile: 'hermes-canary'
};

export const outputOptions: OutputOptions = {
    bundleOutput: "output",
    bundleEncoding: 'ascii',
    dev: true,
    indexedRamBundle: true,
    platform: "windows",
    sourcemapOutput: "sourcemap",
    sourcemapSourcesRoot: "root",
    sourcemapUseAbsolutePath: true
};

export const requestOptions: RequestOptions = {
    entryFile: "entry",
    inlineSourceMap: false,
    sourceMapUrl: "url",
    dev: true,
    minify: false,
    platform: "android",
    createModuleIdFactory: () => (path: string): number => 123,
    onProgress: (transformedFileCount: number, totalFileCount: number): void => {}
};
