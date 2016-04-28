// Type definitions for finalhandler
// Project: https://github.com/pillarjs/finalhandler
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />


import {ServerRequest, ServerResponse} from "http";

export interface Options {
    message?: boolean | ((err: any, status: number) => string);
    onerror?: (err: any, req: ServerRequest, res: ServerResponse) => void;
    stacktrace?: boolean;
}

declare function finalHandler(req: ServerRequest, res: ServerResponse, options?: Options): (err: any) => void;

export default finalHandler;
