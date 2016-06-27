// Type definitions for express-less
// Project: https://www.npmjs.com/package/express-less
// Definitions by: xyb <https://github.com/xieyubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped




import express = require('express');

declare function less(root: string, options?: less.Options): express.RequestHandler;

declare namespace less {
    export interface Options {
        debug?: boolean;
        compress?: boolean;
    }
}

export = less;
