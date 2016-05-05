// Type definitions for gulp-flatten
// Project: https://github.com/armed/gulp-flatten
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "gulp-flatten" {

    interface IOptions {
        newPath: string;
    }

    function flatten(options?: IOptions): NodeJS.ReadWriteStream;

    namespace flatten {}

    export = flatten;
}
