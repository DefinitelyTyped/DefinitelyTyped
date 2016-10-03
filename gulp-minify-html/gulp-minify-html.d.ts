// Type definitions for gulp-minify-html v1.0.2
// Project: https://github.com/murphydanger/gulp-minify-html
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

// This package has been deprecated in favor of gulp-htmlmin, which should be faster and more comprehensive.

declare module 'gulp-minify-html' {
    namespace minifyHtml {
        // Options from https://github.com/Swaagie/minimize#options
        interface Options {
            // Do not remove empty attributes
            empty?: boolean;

            // Do not strip CDATA from scripts
            cdata?: boolean;

            // Do not remove comments
            comments?: boolean;

            // Do not remove conditional internet explorer comments
            conditionals?: boolean;

            // Do not remove redundant attributes
            spare?: boolean;

            // Do not remove arbitrary quotes
            quotes?: boolean;

            // Preserve one whitespace
            loose?: boolean;
        }
    }

    function minifyHtml(options?: minifyHtml.Options): NodeJS.ReadWriteStream;

    export = minifyHtml;
}
