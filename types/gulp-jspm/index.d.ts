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
