// Type definitions for gulp-replace
// Project: https://github.com/lazd/gulp-replace
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>


interface Options {
    skipBinary?: boolean;
}

interface Replacer {
    (match: string): string
}

declare function replace(pattern: string, replacement: string | Replacer, opts?: Options): NodeJS.ReadWriteStream;
declare function replace(pattern: RegExp, replacement: string | Replacer, opts?: Options): NodeJS.ReadWriteStream;

declare namespace replace { }

export = replace;
