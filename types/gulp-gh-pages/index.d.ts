// Type definitions for gulp-gh-pages
// Project: https://github.com/rowoot/gulp-gh-pages
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>


interface Options {
    remoteUrl?: string;
    origin?: string;
    branch?: string;
    cacheDir?: string;
    push?: boolean;
    message?: string;
}

declare function ghPages(opts?: Options): NodeJS.ReadWriteStream;

declare namespace ghPages { }

export = ghPages;
