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
        dirname?: string | undefined;
        basename?: string | undefined;
        extname?: string | undefined;
        prefix?: string | undefined;
        suffix?: string | undefined;
    }

    interface PluginOptions {
        multiExt?: boolean | undefined;
    }
}

declare function rename(obj: string|rename.Options|((path: rename.ParsedPath, file: File) => rename.ParsedPath|void), options?: rename.PluginOptions): NodeJS.ReadWriteStream;
export = rename;
