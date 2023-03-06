// Type definitions for extract-text-webpack-plugin 3.0
// Project: https://github.com/webpack-contrib/extract-text-webpack-plugin
// Definitions by: flying-sheep <https://github.com/flying-sheep>, kayo <https://github.com/katyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin, Loader } from 'webpack';

export = ExtractTextPlugin;

/**
 * Use an `ExtractTextPlugin` instance and a loader returned by `extract` in concert to write files to disk instead of loading them into others.
 * Usage example at https://github.com/webpack/extract-text-webpack-plugin#usage-example-with-css
 */
declare class ExtractTextPlugin extends Plugin {
    /** Create a plugin instance defining the extraction target file(s) for the files loaded by `extract` */
    constructor(options: string | ExtractTextPlugin.PluginOptions);
    /**
     * Creates an extracting loader from an existing loader (static).
     * Use the resulting loader in `module.rules`/`module.loaders`.
     * @see {@link https://www.npmjs.com/package/extract-text-webpack-plugin#extract}
     */
    static extract: (loader: Loader | Loader[] | ExtractTextPlugin.LoaderOptions) => Loader[];
    /**
     * Creates an extracting loader from an existing loader (instance).
     * Use the resulting loader in `module.rules`/`module.loaders`.
     * @see {@link https://www.npmjs.com/package/extract-text-webpack-plugin#multiple-instances}
     */
    extract: (loader: Loader | Loader[] | ExtractTextPlugin.LoaderOptions) => Loader[];
}

declare namespace ExtractTextPlugin {
    interface PluginOptions {
        /** the filename of the result file. May contain `[name]`, `[id]` and `[contenthash]` */
        filename: string;
        /** extract from all additional chunks too (by default it extracts only from the initial chunk(s)) */
        allChunks?: boolean | undefined;
        /** disables the plugin */
        disable?: boolean | undefined;
        /** Unique ident for this plugin instance. (For advanced usage only, by default automatically generated) */
        id?: string | undefined;
    }
    interface LoaderOptions {
        /** the loader(s) that should be used for converting the resource to a css exporting module */
        use: Loader | Loader[];
        /** the loader(s) that should be used when the css is not extracted (i.e. in an additional chunk when `allChunks: false`) */
        fallback?: Loader | Loader[] | undefined;
        /** override the `publicPath` setting for this loader */
        publicPath?: string | undefined;
    }
}
