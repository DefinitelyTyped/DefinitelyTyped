// Type definitions for gulp-flatten
// Project: https://github.com/armed/gulp-flatten
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />



interface IOptions {
    newPath: string;
}

declare function flatten(options?: IOptions): NodeJS.ReadWriteStream;

declare namespace flatten { }

export = flatten;
