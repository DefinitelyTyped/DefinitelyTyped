// Type definitions for gulp-replace
// Project: https://github.com/lazd/gulp-replace
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-replace" {
    interface Options {
        skipBinary?: boolean;
    }

    function replace(pattern: string, replacement: string, opts?: Options): NodeJS.ReadWriteStream;
    function replace(pattern: RegExp, replacement: string, opts?: Options): NodeJS.ReadWriteStream;

    export = replace;
}