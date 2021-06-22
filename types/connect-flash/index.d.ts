// Type definitions for connect-flash
// Project: https://github.com/jaredhanson/connect-flash
// Definitions by: Andreas Gassmann <https://github.com/AndreasGassmann>
//                 Drew Lemmy <https://github.com/Lemmmy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="express" />

declare namespace Express {
    export interface Request {
        flash(): { [key: string]: string[] };
        flash(message: string): string[];
        flash(type: string, message: string[] | string): number;
        flash(type: string, format: string, ...args: any[]): number;
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
