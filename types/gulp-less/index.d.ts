// Type definitions for gulp-less
// Project: https://github.com/plus3network/gulp-less
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />



interface IOptions {
    modifyVars?: {};
    paths?: string[];
    plugins?: any[];
    relativeUrls?: boolean;
}

declare function less(options?: IOptions): NodeJS.ReadWriteStream;

declare namespace less { }

export = less;
