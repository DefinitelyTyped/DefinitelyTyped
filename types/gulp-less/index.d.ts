// Type definitions for gulp-less
// Project: https://github.com/plus3network/gulp-less
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface IOptions {
    modifyVars?: {} | undefined;
    paths?: string[] | undefined;
    plugins?: any[] | undefined;
    relativeUrls?: boolean | undefined;
}

declare function less(options?: IOptions): NodeJS.ReadWriteStream;

declare namespace less {}

export = less;
