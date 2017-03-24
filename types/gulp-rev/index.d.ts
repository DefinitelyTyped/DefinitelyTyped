// Type definitions for gulp-rev v5.0.1
// Project: https://github.com/sindresorhus/gulp-rev
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


interface IOptions {
    base?: string;
    cwd?: string;
    merge?: boolean;
}

interface IRev {
    (): NodeJS.ReadWriteStream;

    manifest(): NodeJS.ReadWriteStream;
    manifest(path?: string): NodeJS.ReadWriteStream;
    manifest(options?: IOptions): NodeJS.ReadWriteStream;
    manifest(path?: string, options?: IOptions): NodeJS.ReadWriteStream;
}

declare var rev: IRev;
export = rev;
