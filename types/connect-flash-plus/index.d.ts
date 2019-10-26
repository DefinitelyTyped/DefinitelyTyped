// Type definitions for connect-flash-plus 0.2
// Project: https://github.com/martinkadlec0/connect-flash-plus
// Definitions by: Michael V. Mykhaylov <https://github.com/MikeMikhailov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="express" />

declare namespace Express {
    interface Request {
        flash(): { [key: string]: string[] };
        flash(message: string, event?: string): any;
    }
}

// tslint:disable-next-line [no-declare-current-package, no-single-declare-module]
declare module "connect-flash-plus" {
    import express = require('express');
    interface FlashOptions {
        unsafe?: boolean;
    }
    function flash(options?: FlashOptions): express.RequestHandler;
    export = flash;
}
