import express = require("express-serve-static-core");

declare global {
    namespace Express {
        interface Request {
            csrfToken(): string;
        }
    }
}

declare function csurf(options?: {
    value?: ((req: express.Request) => string) | undefined;
    /**
     * @default false
     */
    cookie?: csurf.CookieOptions | boolean | undefined;
    ignoreMethods?: string[] | undefined;
    sessionKey?: string | undefined;
}): express.RequestHandler;

declare namespace csurf {
    interface CookieOptions extends express.CookieOptions {
        /**
         * @default '_csrf'
         */
        key?: string | undefined;
    }
}

export = csurf;
