/// <reference types="node" />

// This package has been deprecated in favor of gulp-htmlmin, which should be faster and more comprehensive.

declare namespace minifyHtml {
    // Options from https://github.com/Swaagie/minimize#options
    interface Options {
        // Do not remove empty attributes
        empty?: boolean | undefined;

        // Do not strip CDATA from scripts
        cdata?: boolean | undefined;

        // Do not remove comments
        comments?: boolean | undefined;

        // Do not remove conditional internet explorer comments
        conditionals?: boolean | undefined;

        // Do not remove redundant attributes
        spare?: boolean | undefined;

        // Do not remove arbitrary quotes
        quotes?: boolean | undefined;

        // Preserve one whitespace
        loose?: boolean | undefined;
    }
}

declare function minifyHtml(options?: minifyHtml.Options): NodeJS.ReadWriteStream;

export = minifyHtml;
