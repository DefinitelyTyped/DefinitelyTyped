// Type definitions for gulp-minify-css
// Project: https://github.com/jonathanepollack/gulp-minify-css
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import * as CleanCSS from 'clean-css';

declare function minifyCSS(options?: CleanCSS.Options): NodeJS.ReadWriteStream;

declare namespace minifyCSS { }

export = minifyCSS;
