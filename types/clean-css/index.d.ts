/// <reference types="node" />

import { RequestOptions as HttpRequestOptions } from "http";
import { RequestOptions as HttpsRequestOptions } from "https";

import { RawSourceMap, SourceMapGenerator } from "source-map";

/**
 * Shared options passed when initializing a new instance of CleanCSS that returns either a promise or output
 */
interface OptionsBase {
    /**
     * Controls compatibility mode used; defaults to ie10+ using `'*'`.
     *  Compatibility hash exposes the following properties: `colors`, `properties`, `selectors`, and `units`
     */
    compatibility?: "*" | "ie9" | "ie8" | "ie7" | CleanCSS.CompatibilityOptions | undefined;

    /**
     * Controls a function for handling remote requests; Defaults to the build in `loadRemoteResource` function
     */
    fetch?:
        | ((
            uri: string,
            inlineRequest: HttpRequestOptions | HttpsRequestOptions,
            inlineTimeout: number,
            done: (message: string | number, body: string) => void,
        ) => void)
        | undefined;

    /**
     * Controls output CSS formatting; defaults to `false`.
     *  Format hash exposes the following properties: `breaks`, `breakWith`, `indentBy`, `indentWith`, `spaces`, and `wrapAt`.
     */
    format?: "beautify" | "keep-breaks" | CleanCSS.FormatOptions | false | undefined;

    /**
     * inline option whitelists which @import rules will be processed.  Defaults to `'local'`
     * Accepts the following values:
     *  'local': enables local inlining;
     *  'remote': enables remote inlining;
     *  'none': disables all inlining;
     *  'all': enables all inlining, same as ['local', 'remote'];
     *  '[uri]': enables remote inlining from the specified uri;
     *  '![url]': disables remote inlining from the specified uri;
     */
    inline?: readonly string[] | false | undefined;

    /**
     * Controls extra options for inlining remote @import rules
     */
    inlineRequest?: HttpRequestOptions | HttpsRequestOptions | undefined;

    /**
     * Controls number of milliseconds after which inlining a remote @import fails; defaults to `5000`;
     */
    inlineTimeout?: number | undefined;

    /**
     * Controls optimization level used; defaults to `1`.
     * Level hash exposes `1`, and `2`.
     */
    level?: 0 | 1 | 2 | CleanCSS.OptimizationsOptions | undefined;

    /**
     * Controls URL rebasing; defaults to `true`;
     */
    rebase?: boolean | undefined;

    /**
     * controls a directory to which all URLs are rebased, most likely the directory under which the output file
     * will live; defaults to the current directory;
     */
    rebaseTo?: string | undefined;

    /**
     *  Controls whether an output source map is built; defaults to `false`
     */
    sourceMap?: boolean | undefined;

    /**
     *  Controls embedding sources inside a source map's `sourcesContent` field; defaults to `false`
     */
    sourceMapInlineSources?: boolean | undefined;
}

declare namespace CleanCSS {
    /**
     * Output returned when calling minify functions
     */
    interface Output {
        /**
         * Optimized output CSS as a string
         */
        styles: string;

        /**
         * Output source map if requested with `sourceMap` option
         */
        sourceMap?: SourceMapGenerator;

        /**
         * A list of errors raised
         */
        errors: string[];

        /**
         * A list of warnings raised
         */
        warnings: string[];

        /**
         * Contains statistics on the minify process
         */
        stats: {
            /**
             * Original content size after import inlining
             */
            originalSize: number;

            /**
             * Optimized content size
             */
            minifiedSize: number;

            /**
             * Time spent on optimizations in milliseconds
             */
            timeSpent: number;

            /**
             * `(originalSize - minifiedSize) / originalSize`, e.g. 0.25 if size is reduced from 100 bytes to 75 bytes
             */
            efficiency: number;
        };
    }

    /**
     * Fine grained configuration for compatibility option
     */
    interface CompatibilityOptions {
        /**
         * A hash of compatibility options related to color
         */
        colors?: {
            /**
             * Controls `rgba()` / `hsla()` color support; defaults to `true`
             */
            opacity?: boolean | undefined;
        } | undefined;
        /**
         * A hash of properties that can be set with compatibility
         */
        properties?: {
            /**
             * Controls background-clip merging into shorthand; defaults to `true`
             */
            backgroundClipMerging?: boolean | undefined;

            /**
             * Controls background-origin merging into shorthand; defaults to `true`
             */
            backgroundOriginMerging?: boolean | undefined;

            /**
             * Controls background-size merging into shorthand; defaults to `true`
             */
            backgroundSizeMerging?: boolean | undefined;

            /**
             * controls color optimizations; defaults to `true`
             */
            colors?: boolean | undefined;

            /**
             * Controls keeping IE bang hack; defaults to `false`
             */
            ieBangHack?: boolean | undefined;

            /**
             * Controls keeping IE `filter` / `-ms-filter`; defaults to `false`
             */
            ieFilters?: boolean | undefined;

            /**
             * Controls keeping IE prefix hack; defaults to `false`
             */
            iePrefixHack?: boolean | undefined;

            /**
             * Controls keeping IE suffix hack; defaults to `false`
             */
            ieSuffixHack?: boolean | undefined;

            /**
             * Controls property merging based on understandably; defaults to `true`
             */
            merging?: boolean | undefined;

            /**
             * Controls shortening pixel units into `pc`, `pt`, or `in` units; defaults to `false`
             */
            shorterLengthUnits?: false | undefined;

            /**
             * Controls keeping space after closing brace - `url() no-repeat` into `url()no-repeat`; defaults to `true`
             */
            spaceAfterClosingBrace?: true | undefined;

            /**
             * Controls keeping quoting inside `url()`; defaults to `false`
             */
            urlQuotes?: boolean | undefined;

            /**
             * Controls removal of units `0` value; defaults to `true`
             */
            zeroUnits?: boolean | undefined;
        } | undefined;
        /**
         * A hash of options related to compatibility of selectors
         */
        selectors?: {
            /**
             * Controls extra space before `nav` element; defaults to `false`
             */
            adjacentSpace?: boolean | undefined;

            /**
             * Controls removal of IE7 selector hacks, e.g. `*+html...`; defaults to `true`
             */
            ie7Hack?: boolean | undefined;

            /**
             * Controls a whitelist of mergeable pseudo classes; defaults to `[':active', ...]`
             */
            mergeablePseudoClasses?: readonly string[] | undefined;

            /**
             * Controls a whitelist of mergeable pseudo elements; defaults to `['::after', ...]`
             */
            mergeablePseudoElements: readonly string[];

            /**
             * Controls maximum number of selectors in a single rule (since 4.1.0); defaults to `8191`
             */
            mergeLimit: number;

            /**
             * Controls merging of rules with multiple pseudo classes / elements (since 4.1.0); defaults to `true`
             */
            multiplePseudoMerging: boolean;
        } | undefined;
        /**
         * A hash of options related to comparability of supported units
         */
        units?: {
            /**
             * Controls treating `ch` as a supported unit; defaults to `true`
             */
            ch?: boolean | undefined;

            /**
             * Controls treating `in` as a supported unit; defaults to `true`
             */
            in?: boolean | undefined;

            /**
             * Controls treating `pc` as a supported unit; defaults to `true`
             */
            pc?: boolean | undefined;

            /**
             * Controls treating `pt` as a supported unit; defaults to `true`
             */
            pt?: boolean | undefined;

            /**
             * Controls treating `rem` as a supported unit; defaults to `true`
             */
            rem?: boolean | undefined;

            /**
             * Controls treating `vh` as a supported unit; defaults to `true`
             */
            vh?: boolean | undefined;

            /**
             * Controls treating `vm` as a supported unit; defaults to `true`
             */
            vm?: boolean | undefined;

            /**
             * Controls treating `vmax` as a supported unit; defaults to `true`
             */
            vmax?: boolean | undefined;

            /**
             * Controls treating `vmin` as a supported unit; defaults to `true`
             */
            vmin?: boolean | undefined;
        } | undefined;
    }

    /**
     * Fine grained options for configuring the CSS formatting
     */
    interface FormatOptions {
        /**
         *  Controls where to insert breaks
         */
        breaks?: {
            /**
             * Controls if a line break comes after an at-rule; e.g. `@charset`; defaults to `false`
             */
            afterAtRule?: boolean | undefined;

            /**
             * Controls if a line break comes after a block begins; e.g. `@media`; defaults to `false`
             */
            afterBlockBegins?: boolean | undefined;

            /**
             * Controls if a line break comes after a block ends, defaults to `false`
             */
            afterBlockEnds?: boolean | undefined;

            /**
             * Controls if a line break comes after a comment; defaults to `false`
             */
            afterComment?: boolean | undefined;

            /**
             * Controls if a line break comes after a property; defaults to `false`
             */
            afterProperty?: boolean | undefined;

            /**
             * Controls if a line break comes after a rule begins; defaults to `false`
             */
            afterRuleBegins?: boolean | undefined;

            /**
             * Controls if a line break comes after a rule ends; defaults to `false`
             */
            afterRuleEnds?: boolean | undefined;

            /**
             * Controls if a line break comes before a block ends; defaults to `false`
             */
            beforeBlockEnds?: boolean | undefined;

            /**
             * Controls if a line break comes between selectors; defaults to `false`
             */
            betweenSelectors?: boolean | undefined;
        } | undefined;
        /**
         * Controls the new line character, can be `'\r\n'` or `'\n'`(aliased as `'windows'` and `'unix'`
         * or `'crlf'` and `'lf'`); defaults to system one, so former on Windows and latter on Unix
         */
        breakWith?: string | undefined;

        /**
         * Controls number of characters to indent with; defaults to `0`
         */
        indentBy?: number | undefined;

        /**
         * Controls a character to indent with, can be `'space'` or `'tab'`; defaults to `'space'`
         */
        indentWith?: "space" | "tab" | undefined;

        /**
         * Controls where to insert spaces
         */
        spaces?: {
            /**
             * Controls if spaces come around selector relations; e.g. `div > a`; defaults to `false`
             */
            aroundSelectorRelation?: boolean | undefined;

            /**
             * Controls if a space comes before a block begins; e.g. `.block {`; defaults to `false`
             */
            beforeBlockBegins?: boolean | undefined;

            /**
             * Controls if a space comes before a value; e.g. `width: 1rem`; defaults to `false`
             */
            beforeValue?: boolean | undefined;
        } | undefined;
        /**
         * Controls maximum line length; defaults to `false`
         */
        wrapAt?: false | number | undefined;

        /**
         * Controls removing trailing semicolons in rule; defaults to `false` - means remove
         */
        semicolonAfterLastProperty?: boolean | undefined;
    }

    /**
     * Fine grained options for configuring optimizations
     */
    interface OptimizationsOptions {
        1?: {
            /**
             * Sets all optimizations at this level unless otherwise specified
             */
            all?: boolean | undefined;

            /**
             * Controls `@charset` moving to the front of a stylesheet; defaults to `true`
             */
            cleanupCharsets?: boolean | undefined;

            /**
             * Controls URL normalization; defaults to `true`
             */
            normalizeUrls?: boolean | undefined;

            /**
             * Controls `background` property optimizations; defaults to `true`
             */
            optimizeBackground?: boolean | undefined;

            /**
             * Controls `border-radius` property optimizations; defaults to `true`
             */
            optimizeBorderRadius?: boolean | undefined;

            /**
             * Controls `filter` property optimizations; defaults to `true`
             */
            optimizeFilter?: boolean | undefined;

            /**
             * Controls `font` property optimizations; defaults to `true`
             */
            optimizeFont?: boolean | undefined;

            /**
             * Controls `font-weight` property optimizations; defaults to `true`
             */
            optimizeFontWeight?: boolean | undefined;

            /**
             * Controls `outline` property optimizations; defaults to `true`
             */
            optimizeOutline?: boolean | undefined;

            /**
             * Controls removing empty rules and nested blocks; defaults to `true`
             */
            removeEmpty?: boolean | undefined;

            /**
             * Controls removing negative paddings; defaults to `true`
             */
            removeNegativePaddings?: boolean | undefined;

            /**
             * Controls removing quotes when unnecessary; defaults to `true`
             */
            removeQuotes?: boolean | undefined;

            /**
             * Controls removing unused whitespace; defaults to `true`
             */
            removeWhitespace?: boolean | undefined;

            /**
             * Contols removing redundant zeros; defaults to `true`
             */
            replaceMultipleZeros?: boolean | undefined;

            /**
             * Controls replacing time units with shorter values; defaults to `true`
             */
            replaceTimeUnits?: boolean | undefined;

            /**
             * Controls replacing zero values with units; defaults to `true`
             */
            replaceZeroUnits?: boolean | undefined;

            /**
             * Rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
             */
            roundingPrecision?: boolean | undefined;

            /**
             * denotes selector sorting method; can be `'natural'` or `'standard'`, `'none'`, or false (the last two
             * since 4.1.0); defaults to `'standard'`
             */
            selectorsSortingMethod?: "standard" | "natural" | "none" | undefined;

            /**
             * denotes a number of /*! ... * / comments preserved; defaults to `all`
             */
            specialComments?: string | undefined;

            /**
             * Controls at-rules (e.g. `@charset`, `@import`) optimizing; defaults to `true`
             */
            tidyAtRules?: boolean | undefined;

            /**
             * Controls block scopes (e.g. `@media`) optimizing; defaults to `true`
             */
            tidyBlockScopes?: boolean | undefined;

            /**
             * Controls selectors optimizing; defaults to `true`
             */
            tidySelectors?: boolean | undefined;

            /**
             * Defines a callback for fine-grained property optimization; defaults to no-op
             */
            transform?: ((propertyName: string, propertyValue: string, selector?: string) => string) | undefined;
        } | undefined;
        2?: {
            /**
             * Sets all optimizations at this level unless otherwise specified
             */
            all?: boolean | undefined;

            /**
             * Controls adjacent rules merging; defaults to true
             */
            mergeAdjacentRules?: boolean | undefined;

            /**
             * Controls merging properties into shorthands; defaults to true
             */
            mergeIntoShorthands?: boolean | undefined;

            /**
             * Controls `@media` merging; defaults to true
             */
            mergeMedia?: boolean | undefined;

            /**
             * Controls non-adjacent rule merging; defaults to true
             */
            mergeNonAdjacentRules?: boolean | undefined;

            /**
             * Controls semantic merging; defaults to false
             */
            mergeSemantically?: boolean | undefined;

            /**
             * Controls property overriding based on understandably; defaults to true
             */
            overrideProperties?: boolean | undefined;

            /**
             * Controls removing empty rules and nested blocks; defaults to `true`
             */
            removeEmpty?: boolean | undefined;

            /**
             * Controls non-adjacent rule reducing; defaults to true
             */
            reduceNonAdjacentRules?: boolean | undefined;

            /**
             * Controls duplicate `@font-face` removing; defaults to true
             */
            removeDuplicateFontRules?: boolean | undefined;

            /**
             * Controls duplicate `@media` removing; defaults to true
             */
            removeDuplicateMediaBlocks?: boolean | undefined;

            /**
             * Controls duplicate rules removing; defaults to true
             */
            removeDuplicateRules?: boolean | undefined;

            /**
             * Controls unused at rule removing; defaults to false (available since 4.1.0)
             */
            removeUnusedAtRules?: boolean | undefined;

            /**
             * Controls rule restructuring; defaults to false
             */
            restructureRules?: boolean | undefined;

            /**
             * Controls which properties won't be optimized, defaults to `[]` which means all will be optimized (since 4.1.0)
             */
            skipProperties?: readonly string[] | undefined;
        } | undefined;
    }

    /**
     * Hash of input source(s).  Passing an array of hashes allows you to explicitly specify the order in which the input files
     *  are concatenated. Whereas when you use a single hash the order is determined by the traversal order of object properties
     */
    interface Source {
        /**
         * Path to file
         */
        [path: string]: {
            /**
             * The contents of the file, should be css
             */
            styles: string;

            /**
             * The source map of the file, if needed
             */
            sourceMap?: RawSourceMap | string | undefined;
        };
    }

    /**
     * Callback type when fetch is used
     */
    type FetchCallback = (message: string | number, body: string) => void;

    /**
     * Union of all types acceptable as input for the minify function
     */
    type Sources = string | readonly string[] | Source | readonly Source[] | Buffer;

    /**
     * Union type for both types of minifier functions
     */
    type Minifier = MinifierOutput | MinifierPromise;

    /**
     * Interface exposed when a new CleanCSS object is created
     */
    interface MinifierOutput {
        minify(sources: Sources, callback?: (error: any, output: Output) => void): Output;
        minify(
            sources: Sources,
            sourceMap: RawSourceMap | string,
            callback?: (error: any, output: Output) => void,
        ): Output;
    }
    /**
     * Interface exposed when a new CleanCSS object is created with returnPromise set to true
     */
    interface MinifierPromise {
        minify(sources: Sources, sourceMap?: RawSourceMap | string): Promise<Output>;
    }

    /**
     * Options when returning a promise
     */
    type OptionsPromise = OptionsBase & {
        /**
         * If you prefer clean-css to return a Promise object then you need to explicitly ask for it; defaults to `false`
         */
        returnPromise: true;
    };

    /**
     * Options when returning an output
     */
    type OptionsOutput = OptionsBase & {
        /**
         * If you prefer clean-css to return a Promise object then you need to explicitly ask for it; defaults to `false`
         */
        returnPromise?: false | undefined;
    };

    /**
     * Discriminant union of both sets of options types.  If you initialize without setting `returnPromise: true`
     *  and want to return a promise, you will need to cast to the correct options type so that TypeScript
     *  knows what the expected return type will be:
     *  `(options = options as CleanCSS.OptionsPromise).returnPromise = true`
     */
    type Options = OptionsPromise | OptionsOutput;

    /**
     * Constructor interface for CleanCSS
     */
    interface Constructor {
        new(options: OptionsPromise): MinifierPromise;
        new(options?: OptionsOutput): MinifierOutput;
    }
}

/**
 * Creates a new CleanCSS object which can be used to minify css
 */
declare const CleanCSS: CleanCSS.Constructor;

export = CleanCSS;
