// Type definitions for gulp-rename 2.0
// Project: https://github.com/hparra/gulp-rename
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
import * as File from 'vinyl';

declare namespace rename {
    interface ParsedPath {
        dirname: string;
        basename: string;
        extname: string;
    }

    interface Options {
        dirname?: string;
        basename?: string;
        extname?: string;
        prefix?: string;
        suffix?: string;
    }
}

declare function rename(name: string): NodeJS.ReadWriteStream;
declare function rename(callback: (path: rename.ParsedPath, file: File) => rename.ParsedPath|void): NodeJS.ReadWriteStream;
declare function rename(opts: rename.Options): NodeJS.ReadWriteStream;
export = rename;
