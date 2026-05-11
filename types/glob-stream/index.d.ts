/// <reference types="node" />

import { PicomatchOptions } from "picomatch";
import { Readable } from "streamx";

declare function globStream(glob: string | string[]): Readable<globStream.Entry>;
declare function globStream(glob: string | string[], options: globStream.Options): Readable<globStream.Entry>;

declare namespace globStream {
    export interface Entry {
        cwd: string;
        base: string;
        path: string;
    }

    export type UniqueByStringPredicate = keyof Entry;
    export type UniqueByFunctionPredicate = (entry: Entry) => string;

    // Here, the settings interface provided by `picomatch` is used rather than the `anymatch` one's.
    // This is due to the fact that `anymatch` redirects its options to `picomatch`.
    // Furthermore, `anymatch`s type declaration of the `picomatch` options is hand-written and describes some of the available options incorrectly.
    export interface Options extends PicomatchOptions {
        /**
         * Whether or not to error upon an empty singular glob.
         */
        allowEmpty?: boolean | undefined;
        /**
         * The current working directory that the glob is resolved against.
         */
        cwd?: string | undefined;
        /**
         * The root path that the glob is resolved against.
         */
        root?: string | undefined;
        /**
         * The absolute segment of the glob path that isn't a glob. This value is attached
         * to each glob object and is useful for relative pathing.
         */
        base?: string | undefined;
        /**
         * Whether or not the {@linkcode cwd} and {@linkcode base} should be the same.
         */
        cwdbase?: boolean | undefined;
        /**
         * Filters stream to remove duplicates based on the string property name or the result of function.
         * When using a function, the function receives the streamed
         * data (objects containing `cwd`, `base`, `path` properties) to compare against.
         */
        uniqueBy?: UniqueByStringPredicate | UniqueByFunctionPredicate | undefined;
    }
}

export = globStream;
