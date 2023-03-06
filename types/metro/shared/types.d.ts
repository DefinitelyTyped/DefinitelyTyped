import { TransformProfile } from 'metro-babel-transformer';
import { CustomTransformOptions } from 'metro-transform-worker';

export type BundleType = 'bundle' | 'delta' | 'meta' | 'map' | 'ram' | 'cli' | 'hmr' | 'todo' | 'graph';

export interface BundleOptions {
    bundleType: BundleType;
    customTransformOptions: CustomTransformOptions;
    dev: boolean;
    entryFile: string;
    readonly excludeSource: boolean;
    readonly hot: boolean;
    readonly inlineSourceMap: boolean;
    minify: boolean;
    readonly modulesOnly: boolean;
    onProgress?: (doneCont: number, totalCount: number) => unknown;
    readonly platform?: string;
    readonly runModule: boolean;
    runtimeBytecodeVersion?: number;
    readonly shallow: boolean;
    sourceMapUrl?: string;
    sourceUrl?: string;
    createModuleIdFactory?: () => (path: string) => number;
    readonly unstable_transformProfile: TransformProfile;
}

export interface OutputOptions {
    bundleOutput: string;
    bundleEncoding?: 'utf8' | 'utf16le' | 'ascii';
    dev?: boolean;
    indexedRamBundle?: boolean;
    platform: string;
    sourcemapOutput?: string;
    sourcemapSourcesRoot?: string;
    sourcemapUseAbsolutePath?: boolean;
}

export interface RequestOptions {
    entryFile: string;
    inlineSourceMap?: boolean;
    sourceMapUrl?: string;
    dev?: boolean;
    minify: boolean;
    platform: string;
    createModuleIdFactory?: () => (path: string) => number;
    onProgress?: (transformedFileCount: number, totalFileCount: number) => void;
}
