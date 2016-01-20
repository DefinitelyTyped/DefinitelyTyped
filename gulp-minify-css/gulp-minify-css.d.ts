// Type definitions for gulp-minify-css
// Project: https://github.com/jonathanepollack/gulp-minify-css
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "gulp-minify-css" {

    interface IOptions {
        cache?: boolean;
        advanced?: boolean;
        aggressiveMerging?: boolean;
        benchmark?: boolean;
        compatibility?: string;
        debug?: boolean;
        inliner?: Object;
        keepBreaks?: boolean;
        keepSpecialComments?: string | number;
        processImport?: boolean;
        rebase?: boolean;
        relativeTo?: string;
        root?: string;
        roundingPrecision?: number;
        shorthandCompacting?: boolean;
    }

    function minifyCSS(options?: IOptions): NodeJS.ReadWriteStream;

    namespace minifyCSS {}

    export = minifyCSS;
}
