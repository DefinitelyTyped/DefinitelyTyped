import * as webpack from "webpack";

declare class BrotliWebpackPlugin extends webpack.Plugin {
    constructor(options?: BrotliWebpackPlugin.Options);
}

declare namespace BrotliWebpackPlugin {
    interface Options {
        /**
         * The target asset name. Defaults to `'[path].br[query]'`.
         *
         * - `[file]` is replaced with the original asset file name.
         * - `[fileWithoutExt]` is replaced with the file name minus its extension, e.g. the `style` of `style.css`.
         * - `[ext]` is replaced with the file name extension, e.g. the `css` of `style.css`.
         * - `[path]` is replaced with the path of the original asset.
         * - `[query]` is replaced with the query.
         */
        asset?: string | undefined;
        /**
         * All assets matching this RegExp are processed. Defaults to every asset.
         */
        test?: RegExp | undefined;
        /**
         * Only assets bigger than this size (in bytes) are processed. Defaults to `0`.
         */
        threshold?: number | undefined;
        /**
         * Only assets that compress better that this ratio are processed. Defaults to `0.8`.
         */
        minRatio?: number | undefined;
        /**
         * Remove original files that were compressed with brotli. Default: `false`.
         */
        deleteOriginalAssets?: boolean | undefined;
    }
}

export = BrotliWebpackPlugin;
