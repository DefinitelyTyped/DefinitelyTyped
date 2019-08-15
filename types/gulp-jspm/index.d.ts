// Type definitions for gulp-jspm v0.5.4
// Project: https://www.npmjs.com/package/gulp-jspm
// Definitions by: Peter Juras <https://github.com/peterjuras>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />


interface Options {
    arithmetic?: string;
    selfExecutingBundle?: boolean;
    plugin?: boolean | string;
    inject?: boolean;
    minify?: boolean;
}

interface GulpJspm {
    (options?: Options): NodeJS.ReadWriteStream;
}

declare const gulpJspm: GulpJspm;
export = gulpJspm;
