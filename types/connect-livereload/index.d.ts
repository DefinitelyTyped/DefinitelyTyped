// Type definitions for connect-livereload 0.6
// Project: https://github.com/intesso/connect-livereload
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


import { HandleFunction } from "connect";

declare function livereload(): HandleFunction;
declare function livereload(options: livereload.Options): HandleFunction;

declare namespace livereload {
    export type FileMatcher = string | RegExp;

    export interface Rule {
        match: RegExp;
        fn: (w: string, s: string) => string;
    }

    export interface Options {
        ignore?: FileMatcher[] | undefined;
        excludeList?: FileMatcher[] | undefined;

        include?: FileMatcher[] | undefined;
        html?: ((val: string) => boolean) | undefined;
        rules?: Rule[] | undefined;
        disableCompression?: boolean | undefined;

        hostname?: string | undefined;
        port?: number | undefined;
        src?: string | undefined;
        plugins?: string[] | undefined;
    }
}

export = livereload;
