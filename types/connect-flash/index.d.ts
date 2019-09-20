// Type definitions for connect-flash
// Project: https://github.com/jaredhanson/connect-flash
// Definitions by: Andreas Gassmann <https://github.com/AndreasGassmann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="express" />

declare namespace Express {
    export interface Request {
        flash(): { [key: string]: string[] };
        flash(message: string): any;
        flash(event: string, message: string): any;
    }
}

declare module "connect-flash" {
    import express = require('express');
    interface IConnectFlashOptions {
        unsafe?: boolean;
    }
    function e(options?: IConnectFlashOptions): express.RequestHandler;
    export = e;
}
