// Type definitions for gulp-rename
// Project: https://github.com/hparra/gulp-rename
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare namespace rename {
    interface ParsedPath {
        dirname?: string;
        basename?: string;
        extname?: string;
    }

    interface Options extends ParsedPath {
        prefix?: string;
        suffix?: string;
    }
}

declare function rename(name: string): NodeJS.ReadWriteStream;
declare function rename(callback: (path: rename.ParsedPath) => any): NodeJS.ReadWriteStream;
declare function rename(opts: rename.Options): NodeJS.ReadWriteStream;
export = rename;
