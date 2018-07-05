// Type definitions for clean-css v3.4.9
// Project: https://github.com/jakubpawlowicz/clean-css
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace CleanCSS {
    interface Options {
        // Set to false to disable advanced optimizations - selector & property merging, reduction, etc.
        advanced?: boolean;

        // Set to false to disable aggressive merging of properties.
        aggressiveMerging?: boolean;

        // Turns on benchmarking mode measuring time spent on cleaning up (run npm run bench to see example)
        benchmark?: boolean;

        // Enables compatibility mode
        compatibility?: Object;

        // Set to true to get minification statistics under stats property (see test/custom-test.js for examples)
        debug?: boolean;

        // A hash of options for @import inliner, see test/protocol-imports-test.js for examples, or this comment for a proxy use case.
        inliner?: Object;

        // Whether to keep line breaks (default is false)
        keepBreaks?: boolean;

        // * for keeping all (default), 1 for keeping first one only, 0 for removing all
        keepSpecialComments?: string | number;

        // Whether to merge @media at-rules (default is true)
        mediaMerging?: boolean;

        // Whether to process @import rules
        processImport?: boolean;

        // A list of @import rules, can be ['all'] (default), ['local'], ['remote'], or a blacklisted path e.g. ['!fonts.googleapis.com']
        processImportFrom?: Array<string>;

        // Set to false to skip URL rebasing
        rebase?: boolean;

        // Path to resolve relative @import rules and URLs
        relativeTo?: string;

        // Set to false to disable restructuring in advanced optimizations
        restructuring?: boolean;

        // Path to resolve absolute @import rules and rebase relative URLs
        root?: string;

        // Rounding precision; defaults to 2; -1 disables rounding
        roundingPrecision?: number;

        // Set to true to enable semantic merging mode which assumes BEM-like content (default is false as it's highly likely this will break your stylesheets - use with caution!)
        semanticMerging?: boolean;

        // Set to false to skip shorthand compacting (default is true unless sourceMap is set when it's false)
        shorthandCompacting?: boolean;

        // Exposes source map under sourceMap property, e.g. new CleanCSS().minify(source).sourceMap (default is false) If input styles are a product of CSS preprocessor (Less, Sass) an input source map can be passed as a string.
        sourceMap?: boolean | string;

        // Set to true to inline sources inside a source map's sourcesContent field (defaults to false) It is also required to process inlined sources from input source maps.
        sourceMapInlineSources?: boolean;

        // Path to a folder or an output file to which rebase all URLs
        target?: string;
    }

    interface Output {
        // Optimized output CSS as a string
        styles: string;

        // Output source map (if requested with sourceMap option)
        sourceMap: string;

        // A list of errors raised
        errors: Array<string>;

        // A list of warnings raised
        warnings: Array<string>;

        // A hash of statistic information (if requested with debug option)
        stats: {
            // Original content size (after import inlining)
            originalSize: number;

            // Optimized content size
            minifiedSize: number;

            // Time spent on optimizations
            timeSpent: number;

            // A ratio of output size to input size (e.g. 25% if content was reduced from 100 bytes to 75 bytes)
            efficiency: number;
        };
    }
}

declare class CleanCSS {
    constructor(options?: CleanCSS.Options);
    minify(sources: string | Array<string> | Object, callback?: (error: any, minified: CleanCSS.Output) => void): CleanCSS.Output;
}

export = CleanCSS;
