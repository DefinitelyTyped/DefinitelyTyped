// Type definitions for gulp-replace
// Project: https://github.com/lazd/gulp-replace
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-replace" {
    interface Options {
        skipBinary?: boolean;
    }

    interface Replacer {
      (match: string): string
    }

    function replace(pattern: string, replacement: string | Replacer, opts?: Options): NodeJS.ReadWriteStream;
    function replace(pattern: RegExp, replacement: string | Replacer, opts?: Options): NodeJS.ReadWriteStream;

    export = replace;
}