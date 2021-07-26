// Type definitions for csso 4.2
// Project: https://github.com/css/csso
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
//                 Erik Källén <https://github.com/erik-kallen>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as csstree from 'css-tree';

declare namespace csso {
    interface Result {
        /**
         * Resulting CSS.
         */
        css: string;
        /**
         * Instance of SourceMapGenerator or null.
         */
        map: object | null;
    }

    interface Usage {
        tags?: string[] | undefined;
        ids?: string[] | undefined;
        classes?: string[] | undefined;
        scopes?: string[][] | undefined;
        blacklist?: {
            tags?: string[] | undefined;
            ids?: string[] | undefined;
            classes?: string[] | undefined;
        } | undefined;
    }

    interface CompressOptions {
        /**
         * Disable or enable a structure optimisations.
         * @default true
         */
        restructure?: boolean | undefined;
        /**
         * Enables merging of @media rules with the same media query by splitted by other rules.
         * The optimisation is unsafe in general, but should work fine in most cases. Use it on your own risk.
         * @default false
         */
        forceMediaMerge?: boolean | undefined;
        /**
         * Transform a copy of input AST if true. Useful in case of AST reuse.
         * @default false
         */
        clone?: boolean | undefined;
        /**
         * Specify what comments to leave:
         * - 'exclamation' or true – leave all exclamation comments
         * - 'first-exclamation' – remove every comment except first one
         * - false – remove all comments
         * @default true
         */
        comments?: string | boolean | undefined;
        /**
         * Usage data for advanced optimisations.
         */
        usage?: Usage | undefined;
        /**
         * Function to track every step of transformation.
         */
        logger?: (() => void) | undefined;
    }

    interface MinifyOptions {
        /**
         * Generate a source map when true.
         * @default false
         */
        sourceMap?: boolean | undefined;
        /**
         * Filename of input CSS, uses for source map generation.
         * @default '<unknown>'
         */
        filename?: string | undefined;
        /**
         * Output debug information to stderr.
         * @default false
         */
        debug?: boolean | undefined;
        /**
         * Called right after parse is run.
         */
        beforeCompress?: BeforeCompressFn | BeforeCompressFn[] | undefined;
        /**
         * Called right after compress() is run.
         */
        afterCompress?: AfterCompressFn | AfterCompressFn[] | undefined;
        restructure?: boolean | undefined;
    }

    type BeforeCompressFn = (ast: object, options: CompressOptions) => void;
    type AfterCompressFn = (compressResult: string, options: CompressOptions) => void;
}

interface Csso {
    readonly version: string;
    /**
     * Minify source CSS passed as String
     * @param source
     * @param options
     */
    minify(source: string, options?: csso.MinifyOptions & csso.CompressOptions): csso.Result;

    /**
     * The same as minify() but for list of declarations. Usually it's a style attribute value.
     * @param source
     * @param options
     */
    minifyBlock(source: string, options?: csso.MinifyOptions & csso.CompressOptions): csso.Result;

    syntax: typeof csstree & {
        /**
         * Does the main task – compress an AST.
         */
        compress(ast: csstree.CssNode, options?: csso.CompressOptions): { ast: csstree.CssNode };
    };
}

declare const csso: Csso;
export = csso;
