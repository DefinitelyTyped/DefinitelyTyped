// Type definitions for easy-x-headers
// Project: https://github.com/DeadAlready/easy-x-headers
// Definitions by: Karl Düüna <https://github.com/DeadAlready>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="express" />

declare namespace Express {
    export interface Request {
        info: any;
    }
}

declare module "easy-x-headers" {
    import express = require('express');

    export function getMiddleware(defaults?: Object): express.RequestHandler;
}
