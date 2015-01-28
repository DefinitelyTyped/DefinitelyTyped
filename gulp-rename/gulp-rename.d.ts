// Type definitions for gulp-rename
// Project: https://github.com/hparra/gulp-rename
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-rename" {
    interface Options {
        dirname?: string;
        basename?: string;
        prefix?: string;
        suffix?: string;
        extname?: string;
    }
    function rename(name: string): NodeJS.ReadWriteStream;
    function rename(callback: (path: Options) => any): NodeJS.ReadWriteStream;
    function rename(opts: Options): NodeJS.ReadWriteStream;
    export = rename;
}