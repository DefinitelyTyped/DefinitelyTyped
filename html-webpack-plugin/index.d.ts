// Type definitions for html-webpack-plugin 2.11
// Project: https://github.com/ampedandwired/html-webpack-plugin
// Definitions by: Simon Hartcher <https://github.com/deevus>, Benjamin Lim <https://github.com/bumbleblym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin, Webpack } from "webpack";
import { Options } from "html-minifier";

export = HtmlWebpackPlugin;

declare class HtmlWebpackPlugin implements Plugin {
    constructor(options?: HtmlWebpackPlugin.Config);
    apply(thisArg: Webpack, ...args: any[]): void;
}

declare namespace HtmlWebpackPlugin {
    export type MinifyConfig = Options;

    /**
    * It is assumed that each [chunk] contains at least the properties "id"
    * (containing the chunk id) and "parents" (array containing the ids of the
    * parent chunks).
    */
    export interface Chunk { // TODO: Import from webpack?
        id: string;
        parents: string[];
        [propName: string]: any; // TODO: Narrow type
    }

    export type ChunkComparator = (a: Chunk, b: Chunk) => number;

    export interface Config {
        /**
         * The title to use for the generated HTML document.
         */
        title?: string;

        /**
         * The file to write the HTML to. Defaults to index.html. You can specify a subdirectory here too (eg: `assets/admin.html`).
         */
        filename?: string;

        /**
         * Webpack require path to the template. Please see the docs for details.
         */
        template?: string;

        /**
         * `true | 'head' | 'body' | false`
         *
         * Inject all assets into the given template or templateContent - When passing true or 'body' all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element.
         */
        inject?: boolean | "head" | "body";

        /**
         * Adds the given favicon path to the output html.
         */
        favicon?: string;

        /**
         * `{...} | false` Pass a html-minifier options object to minify the output.
         *
         * https://github.com/kangax/html-minifier#options-quick-reference
         */
        minify?: MinifyConfig | false;

        /**
         * `true | false` if `true` then append a unique webpack compilation hash to all included scripts and css files. This is useful for cache busting.
         */
        hash?: boolean;

        /**
         * `true | false` if `true` (default) try to emit the file only if it was changed.
         */
        cache?: boolean;

        /**
         * `true | false` if `true` (default) errors details will be written into the html page.
         */
        showErrors?: boolean;

        /**
         * Allows you to add only some chunks (e.g. only the unit-test chunk)
         */
        chunks?: string[];

        /**
         * Allows to control how chunks should be sorted before they are included to the html. Allowed values: `'none' | 'auto' | 'dependency' | {function}` - default: `'auto'`
         */
        chunksSortMode?: "none" | "auto" | "dependency" | ChunkComparator;

        /**
         * Allows you to skip some chunks (e.g. don't add the unit-test chunk)
         */
        excludeChunks?: string[];

        /**
         * `true | false` If `true` render the link tags as self-closing, XHTML compliant. Default is `false`
         */
        xhtml?: boolean;

        /**
         * In addition to the options actually used by this plugin, you can use
         * this hash to pass arbitrary data through to your template.
         */
        [option: string]: any;
    }
}
