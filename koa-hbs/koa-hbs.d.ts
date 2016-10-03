// Type definitions for koa-favicon v2.x
// Project: https://github.com/gilt/koa-hbs
// Definitions by: Jacob Malone <https://github.com/jcbmln/>
// Definitions: https://github.com/jcbmln/DefinitelyTyped

/* =================== USAGE ===================

    import * as Hbs from "koa-hbs";
    import * as Koa from "koa";

    var hbs = new Hbs();
    var app = new Koa();

    app.use(hbs.middleware({
        viewPath: __dirname + '/views'
    }));

    app.use(function *() {
        yield this.render('main', {
            title: 'koa-hbs'
        });
    });

 =============================================== */

/// <reference path="../koa/koa.d.ts" />

declare module "koa-hbs" {

    import * as Koa from "koa";

    namespace Hbs {
        export interface Middleware {
            viewPath: Array<string> | string,
            handlebars?: Function,
            templateOptions?: {},
            extname?: string,
            partialsPath?: Array<string> | string,
            defaultLayout?: string,
            layoutsPath?: string,
            contentHelperName?: string,
            blockHelperName?: string,
            disableCache?: boolean 
        }
    }

    class Hbs {
        constructor();

        middleware(opts: Hbs.Middleware): any;
    }

    namespace Hbs {}
    export = Hbs;
}
