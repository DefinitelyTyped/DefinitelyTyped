// Type definitions for gulp-flatten
// Project: https://github.com/armed/gulp-flatten
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />



interface IOptions {
    newPath: string;
}

declare function flatten(options?: IOptions): NodeJS.ReadWriteStream;

declare namespace flatten { }

export = flatten;
