// Type definitions for gulp-less
// Project: https://github.com/plus3network/gulp-less
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "gulp-less" {

    interface IOptions {
        modifyVars?: {};
        paths?: string[];
        plugins?: any[];
        relativeUrls?: boolean;
    }

    function less(options?: IOptions): NodeJS.ReadWriteStream;

    namespace less {}

    export = less;
}
