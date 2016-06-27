// Type definitions for gulp-rename
// Project: https://github.com/hparra/gulp-rename
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>


interface ParsedPath {
    dirname?: string;
    basename?: string;
    extname?: string;
}

interface Options extends ParsedPath {
    prefix?: string;
    suffix?: string;
}

declare function rename(name: string): NodeJS.ReadWriteStream;
declare function rename(callback: (path: ParsedPath) => any): NodeJS.ReadWriteStream;
declare function rename(opts: Options): NodeJS.ReadWriteStream;
export = rename;
