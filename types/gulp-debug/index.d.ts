// Type definitions for gulp-debug v2.0.1
// Project: https://github.com/sindresorhus/gulp-debug
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


interface IOptions {
    title?: string;
    minimal?: boolean;
}

declare function debug(options?: IOptions): NodeJS.ReadWriteStream;

declare namespace debug { }

export = debug;
