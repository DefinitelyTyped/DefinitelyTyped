// Type definitions for gulp-htmlmin v1.3.0
// Project: https://github.com/jonschlinkert/gulp-htmlmin
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import * as HTMLMinifier from 'html-minifier';

declare namespace htmlmin {
}

declare function htmlmin(options?: HTMLMinifier.Options): NodeJS.ReadWriteStream;

export = htmlmin;
