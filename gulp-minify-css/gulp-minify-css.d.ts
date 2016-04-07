// Type definitions for gulp-minify-css
// Project: https://github.com/jonathanepollack/gulp-minify-css
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../clean-css/clean-css.d.ts" />

declare module "gulp-minify-css" {
    import * as CleanCSS from 'clean-css';

    function minifyCSS(options?: CleanCSS.Options): NodeJS.ReadWriteStream;

    namespace minifyCSS {}

    export = minifyCSS;
}
