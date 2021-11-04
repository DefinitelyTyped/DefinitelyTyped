// Type definitions for express-less 0.1
// Project: https://www.npmjs.com/package/express-less
// Definitions by: xyb <https://github.com/xieyubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3




import express = require('express');

declare function less(root: string, options?: less.Options): express.RequestHandler;

declare namespace less {
    export interface Options {
        debug?: boolean;
        compress?: boolean;
        cache?: boolean;
    }
}

export = less;
