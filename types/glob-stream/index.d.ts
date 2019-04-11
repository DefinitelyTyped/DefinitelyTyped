// Type definitions for glob-stream v6.1.0
// Project: https://github.com/wearefractal/glob-stream
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="glob" />

import glob = require('glob');

declare function GlobStream(glob: string | string[]): NodeJS.ReadableStream;
declare function GlobStream(glob: string | string[], options: GlobStream.Options): NodeJS.ReadableStream;

declare namespace GlobStream {
    export interface Entry {
        cwd: string;
        base: string;
        path: string;
    }

    export type UniqueByStringPredicate = 'cwd' | 'base' | 'path';
    export type UniqueByFunctionPredicate = (entry: Entry) => string;

    export interface Options extends glob.IOptions {
        /**
         * Whether or not to error upon an empty singular glob.
         */
        allowEmpty?: boolean;
        /**
         * The absolute segment of the glob path that isn't a glob. This value is attached
         * to each globobject and is useful for relative pathing.
         */
        base?: string;
        /**
         * Whether or not the `cwd` and `base` should be the same.
         */
        cwdbase?: boolean;
        /**
         * Filters stream to remove duplicates based on the string property name or the result of function.
         * When using a function, the function receives the streamed
         * data (objects containing `cwd`, `base`, `path` properties) to compare against.
         */
        uniqueBy?: UniqueByStringPredicate | UniqueByFunctionPredicate;
    }
}

export = GlobStream;
