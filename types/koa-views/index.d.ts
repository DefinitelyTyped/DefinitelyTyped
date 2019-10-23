// Type definitions for koa-views 2.x
// Project: https://github.com/queckezz/koa-views
// Definitions by: Alex Friedman <https://github.com/brooklyndev>
// Definitions: https://github.com/brooklyndev/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import * as Koa from 'koa';
    import * as views from 'koa-views';

    const app = new Koa();
    app.use(views(__dirname + '/views', {
        map: {
            html: 'underscore'
        }
    }));

    app.use(async function (ctx, next) {
        await ctx.render('user', {
            user: 'John'
        });
    });

 =============================================== */

import * as Koa from "koa";

declare function views(dir: string, opts?: {
    /*
    * default extension for your views
    */
    extension?: string,
    /*
    * these options will get passed to the view engine
    */
    options?: any,
    /*
    * map a file extension to an engine
    */
    map?: any,
    /*
    * replace consolidate as default engine source
    */
    engineSource?: any,
}): Koa.Middleware;
declare namespace views { }

export = views;

declare module 'koa' {
    interface Context {
        render(viewPath: string, locals?: any): Promise<void>;
    }
}
