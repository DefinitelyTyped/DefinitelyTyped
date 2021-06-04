// Type definitions for csurf 1.11
// Project: https://www.npmjs.org/package/csurf
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import express = require('express-serve-static-core');

declare global {
    namespace Express {
        interface Request {
            csrfToken(): string;
        }
    }
}

declare function csurf(options?: {
    value?: (req: express.Request) => string;
    /**
     * @default false
     */
    cookie?: csurf.CookieOptions | boolean;
    ignoreMethods?: string[];
    sessionKey?: string;
}): express.RequestHandler;

declare namespace csurf {
    interface CookieOptions extends express.CookieOptions {
        /**
         * @default '_csrf'
         */
        key?: string;
    }
}

export = csurf;
