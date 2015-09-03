// Type definitions for gulp-rename
// Project: https://github.com/hparra/gulp-rename
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-rename" {
    interface ParsedPath {
        dirname?: string;
        basename?: string;
        extname?: string;
    }

    interface Options extends ParsedPath {
        prefix?: string;
        suffix?: string;
    }

    function rename(name: string): NodeJS.ReadWriteStream;
    function rename(callback: (path: ParsedPath) => any): NodeJS.ReadWriteStream;
    function rename(opts: Options): NodeJS.ReadWriteStream;
    export = rename;
}