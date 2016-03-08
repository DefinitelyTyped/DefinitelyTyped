// Type definitions for gulp-sass
// Project: https://github.com/dlmanning/gulp-sass
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-sass" {
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

    interface SassOptions {
        file?: string;
        data?: string;
        success?: (results: SassResults) => any;
        error?: (err: Error) => any;
        includePaths?: string[];
        imagePaths?: string[];
        indentedSyntax?: boolean;
        omitSourceMapUrl?: boolean;
        outFile?: string;
        outputStyle?: string;
        precision?: number;
        sourceComments?: boolean;
        sourceMap?: boolean | string;
        sourceMapEmbed?: boolean;
        sourceMapContents?: boolean;
    }

    interface Options extends SassOptions {
        errLogToConsole?: boolean;
        onSuccess?: (css: string) => any;
        onError?: (err: Error) => any;
        sync?: boolean;
    }

    interface Sass {
        (opts?: Options): NodeJS.ReadWriteStream;
        logError(error?: string): void;
        sync(options?: Options): NodeJS.ReadWriteStream;
    }

    var _tmp: Sass;
    export = _tmp;
}