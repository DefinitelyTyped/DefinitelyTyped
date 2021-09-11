// Type definitions for gulp-dart-sass 1.0
// Project: https://github.com/mattdsteele/gulp-dart-sass#readme
// Definitions by: Jacob Malone <https://github.com/jcbmln>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Options } from 'sass';

interface SassResults {
    css: string;
    map: string;
    stats: {
        entry: string;
        start: Date;
        end: Date;
        duration: number;
        includedFiles: string[];
    };
}

interface SassOptions extends Options {
    success?: ((results: SassResults) => any) | undefined;
    error?: ((err: Error) => any) | undefined;
    imagePaths?: string[] | undefined;
}

interface GulpSassOptions extends SassOptions {
    errLogToConsole?: boolean | undefined;
    onSuccess?: ((css: string) => any) | undefined;
    onError?: ((err: Error) => any) | undefined;
    sync?: boolean | undefined;
}

interface Sass {
    (opts?: GulpSassOptions): NodeJS.ReadWriteStream;
    logError(error?: string): void;
    sync(options?: GulpSassOptions): NodeJS.ReadWriteStream;
}

declare var _tmp: Sass;
export = _tmp;
