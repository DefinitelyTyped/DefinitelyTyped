// Type definitions for gulp-jspm v0.5.4
// Project: https://www.npmjs.com/package/gulp-jspm
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

interface Options {
    arithmetic?: string | undefined;
    selfExecutingBundle?: boolean | undefined;
    plugin?: boolean | string | undefined;
    inject?: boolean | undefined;
    minify?: boolean | undefined;
}

interface GulpJspm {
    (options?: Options): NodeJS.ReadWriteStream;
}

declare const gulpJspm: GulpJspm;
export = gulpJspm;
