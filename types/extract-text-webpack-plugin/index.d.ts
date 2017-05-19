// Type definitions for extract-text-webpack-plugin 2.1.0
// Project: https://github.com/webpack-contrib/extract-text-webpack-plugin
// Definitions by: flying-sheep <https://github.com/flying-sheep>, kayo <https://github.com/katyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin, OldLoader, NewLoader } from 'webpack'

/**
 * extract-text-webpack-plugin has no support for .options instead of .query yet.
 * See https://github.com/webpack/extract-text-webpack-plugin/issues/281
 */
type Loader = string | OldLoader | NewLoader

interface ExtractPluginOptions {
    /** the filename of the result file. May contain `[name]`, `[id]` and `[contenthash]` */
    filename: string
    /** extract from all additional chunks too (by default it extracts only from the initial chunk(s)) */
    allChunks?: boolean
    /** disables the plugin */
    disable?: boolean
    /** Unique ident for this plugin instance. (For advanced usage only, by default automatically generated) */
    id?: string
}

interface ExtractOptions {
    /** the loader(s) that should be used for converting the resource to a css exporting module */
    use: Loader | Loader[]
    /** the loader(s) that should be used when the css is not extracted (i.e. in an additional chunk when `allChunks: false`) */
    fallback?: Loader | Loader[]
    /** override the `publicPath` setting for this loader */
    publicPath?: string
}

/**
 * Use an `ExtractTextPlugin` instance and a loader returned by `extract` in concert to write files to disk instead of loading them into others.
 * Usage example at https://github.com/webpack/extract-text-webpack-plugin#usage-example-with-css
 */
interface ExtractTextPlugin extends Plugin {
    /** Create a plugin instance defining the extraction target file(s) for the files loaded by `extract` */
    new (options: string | ExtractPluginOptions): ExtractTextPlugin
    /**
     * Creates an extracting loader from an existing loader.
     * Use the resulting loader in `module.rules`/`module.loaders`.
     */
    extract: (loader: Loader | Loader[] | ExtractOptions) => Loader[]
}

declare const extractTextPlugin: ExtractTextPlugin
export = extractTextPlugin
