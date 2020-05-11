// Type definitions for gulp-sass 4.0.2
// Project: https://github.com/dlmanning/gulp-sass
// Definitions by: Asana <https://asana.com>
//                 Yuma Hashimoto <https://github.com/yuma84>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node"/>

import { Options } from 'node-sass';

interface SassResults {
    css: string;
    map: string;
    stats: {
        entry: string;
        start: Date;
        end: Date;
        duration: number;
        includedFiles: string[];
    }
}

interface SassOptions extends Options {
    success?: (results: SassResults) => any;
    error?: (err: Error) => any;
    imagePaths?: string[];
}

interface GulpSassOptions extends SassOptions {
    errLogToConsole?: boolean;
    onSuccess?: (css: string) => any;
    onError?: (err: Error) => any;
    sync?: boolean;
}

interface Sass {
    (opts?: GulpSassOptions): NodeJS.ReadWriteStream;
    logError(error?: string): void;
    sync(options?: GulpSassOptions): NodeJS.ReadWriteStream;
}

declare var _tmp: Sass;
export = _tmp;
