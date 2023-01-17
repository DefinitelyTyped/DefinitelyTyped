// Type definitions for koa-override 3.0
// Project: https://github.com/node-modules/koa-override
// Definitions by: Ascor8522 <https://github.com/Ascor8522>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import bodyParser from 'koa-bodyparser';
    import override from 'koa-override';
    app.use(bodyParser());
    app.use(override());

 =============================================== */

import { Middleware } from "koa";

interface OverrideOptions {
    allowedMethods: string[];
}

declare function override(options?: Partial<OverrideOptions>): Middleware;
export = override;
