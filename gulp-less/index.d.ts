// Type definitions for gulp-less
// Project: https://github.com/plus3network/gulp-less
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />



interface IOptions {
    modifyVars?: {};
    paths?: string[];
    plugins?: any[];
    relativeUrls?: boolean;
}

declare function less(options?: IOptions): NodeJS.ReadWriteStream;

declare namespace less { }

export = less;
