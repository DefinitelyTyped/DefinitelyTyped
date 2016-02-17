// Type definitions for gulp-gh-pages
// Project: https://github.com/rowoot/gulp-gh-pages
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-gh-pages" {
    interface Options {
        remoteUrl?: string;
        origin?: string;
        branch?: string;
        cacheDir?: string;
        push?: boolean;
        message?: string;
    }

    function ghPages(opts?: Options): NodeJS.ReadWriteStream;

    namespace ghPages {}

    export = ghPages;
}
