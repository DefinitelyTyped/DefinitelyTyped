// Type definitions for gulp-minify-html v1.0.2
// Project: https://github.com/murphydanger/gulp-minify-html
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'gulp-minify-html' {
    interface IOptions {
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

    function minifyHtml(options?: IOptions): NodeJS.ReadWriteStream;

    namespace minifyHtml {}

    export = minifyHtml;
}
