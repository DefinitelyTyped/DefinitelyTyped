import webpack = require('webpack');

export interface OpaqueFileSizes {
    root: string;
    sizes: Record<string, number>;
}

/**
 * Captures JS and CSS asset sizes inside the passed `buildFolder`. Save the
 * result value to compare it after the build.
 */
export function measureFileSizesBeforeBuild(buildFolder: string): Promise<OpaqueFileSizes>;

/**
 * Prints the JS and CSS asset sizes after the build, and includes a size
 * comparison with `previousFileSizes` that were captured earlier using
 * `measureFileSizesBeforeBuild()`. `maxBundleGzipSize` and
 * `maxChunkGzipSizemay` may optionally be specified to display a warning when
 * the main bundle or a chunk exceeds the specified size (in bytes).
 */
export function printFileSizesAfterBuild(
    webpackStats: webpack.Stats,
    previousFileSizes: OpaqueFileSizes,
    buildFolder: string,
    maxBundleGzipSize?: number,
    maxChunkGzipSize?: number,
): void;
