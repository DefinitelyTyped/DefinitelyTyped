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
