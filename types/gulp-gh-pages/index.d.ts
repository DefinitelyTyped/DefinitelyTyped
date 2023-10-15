// Type definitions for gulp-gh-pages
// Project: https://github.com/rowoot/gulp-gh-pages
// Definitions by: Asana <https://asana.com>
//                 Ntnyq <https://github.com/ntnyq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

interface Options {
    remoteUrl?: string | undefined;
    origin?: string | undefined;
    branch?: string | undefined;
    cacheDir?: string | undefined;
    push?: boolean | undefined;
    force?: boolean | undefined;
    message?: string | undefined;
}

declare function ghPages(opts?: Options): NodeJS.ReadWriteStream;

declare namespace ghPages {}

export = ghPages;
