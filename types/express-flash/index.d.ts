// Type definitions for express-flash 0.0
// Project: https://github.com/RGBboy/express-flash
// Definitions by: Ian Mobley <https://github.com/iMobs>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require('express');

declare global {
    namespace Express {
        interface Request {
            flash(message?: string): { [key: string]: string[] };
            flash(event: string, message: string | string[]): any;
        }
    }
}

declare function flash(): express.RequestHandler;

export = flash;
