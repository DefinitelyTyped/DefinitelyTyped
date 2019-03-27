// Type definitions for csso 3.5
// Project: https://github.com/css/csso
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
//                 Erik Källén <https://github.com/erik-kallen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

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
        tags?: string[];
        ids?: string[];
        classes?: string[];
        scopes?: string[][];
        blacklist?: {
            tags?: string[];
            ids?: string[];
            classes?: string[];
        };
    }

    interface CompressOptions {
        /**
         * Disable or enable a structure optimisations.
         * @default true
         */
        restructure?: boolean;
        /**
         * Enables merging of @media rules with the same media query by splitted by other rules.
         * The optimisation is unsafe in general, but should work fine in most cases. Use it on your own risk.
         * @default false
         */
        forceMediaMerge?: boolean;
        /**
         * Transform a copy of input AST if true. Useful in case of AST reuse.
         * @default false
         */
        clone?: boolean;
        /**
         * Specify what comments to leave:
         * - 'exclamation' or true – leave all exclamation comments
         * - 'first-exclamation' – remove every comment except first one
         * - false – remove all comments
         * @default true
         */
        comments?: string | boolean;
        /**
         * Usage data for advanced optimisations.
         */
        usage?: Usage;
        /**
         * Function to track every step of transformation.
         */
        logger?: () => void;
    }

    interface MinifyOptions {
        /**
         * Generate a source map when true.
         * @default false
         */
        sourceMap?: boolean;
        /**
         * Filename of input CSS, uses for source map generation.
         * @default '<unknown>'
         */
        filename?: string;
        /**
         * Output debug information to stderr.
         * @default false
         */
        debug?: boolean;
        /**
         * Called right after parse is run.
         */
        beforeCompress?: BeforeCompressFn | BeforeCompressFn[];
        /**
         * Called right after compress() is run.
         */
        afterCompress?: AfterCompressFn | AfterCompressFn[];
        restructure?: boolean;
    }

    type BeforeCompressFn = (ast: object, options: CompressOptions) => void;
    type AfterCompressFn = (compressResult: string, options: CompressOptions) => void;
}

interface Csso {
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

    /**
     * Does the main task – compress an AST.
     */
    compress(ast: csstree.CssNode, options?: csso.CompressOptions): { ast: csstree.CssNode };

    syntax: typeof csstree;
}

declare const csso: Csso;
export = csso;
