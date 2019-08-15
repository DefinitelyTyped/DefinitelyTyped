// Type definitions for koa-session-minimal v3.x
// Project: https://github.com/longztian/koa-session-minimal
// Definitions by: Longzhang Tian <https://github.com/longztian>
// Definitions: https://github.com/hellopao/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import * as Koa from "koa";
    import session = require("koa-session-minimal");

    const app = new Koa();
    app.use(session());

 =============================================== */

import * as Koa from "koa";
import * as cookies from "cookies";

declare module "koa" {
    interface Context {
        session: any;
        sessionHandler: { regenerateId: () => void };
    }
}

declare function session(opts?: {
    /**
     * session cookie name and store key prefix. Default is 'koa:sess'
     */
    key?: string;

    /**
     * cookie options
     */
    cookie?:  cookies.IOptions | { (ctx?: Koa.Context): cookies.IOptions };

    /**
     * session store
     */
    store?: any;
}): Koa.Middleware;

declare namespace session {}
export = session;
