// Type definitions for easy-x-headers
// Project: https://github.com/DeadAlready/easy-x-headers
// Definitions by: Karl Düüna <https://github.com/DeadAlready/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module Express {
    export interface Request {
        info: any;
    }
}

declare module "easy-x-headers" {
    import express = require('express');

    export function getMiddleware(defaults?: Object): express.RequestHandler;
}
