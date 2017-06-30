// Type definitions for koa-hbs v1.x
// Project: https://github.com/gilt/koa-hbs
// Definitions by: Jacob Malone <https://github.com/jcbmln/>, Mudkip <https://github.com/mudkipme>
// Definitions: https://github.com/jcbmln/DefinitelyTyped

/* =================== USAGE ===================

    import * as Koa from "koa";
....import hbs = require("koa-hbs");

    var app = new Koa();

    app.use(hbs.middleware({
        viewPath: __dirname + '/views'
    }));

    app.use(async (ctx, next) => {
        await ctx.render('main', {
            title: 'koa-hbs'
        });
    });

 =============================================== */

/// <reference types="koa" />

import * as Koa from "koa";
import * as Handlebars from "handlebars";

declare namespace Hbs {
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

declare class Hbs {
    constructor();
    middleware(opts: Hbs.Middleware): any;
    registerHelper: typeof Handlebars.registerHelper;
    SafeString: typeof Handlebars.SafeString;
    Utils: typeof Handlebars.Utils;
}

declare const hbs: Hbs;
export = hbs;

declare module "koa" {
    export interface Context {
        render(tpl: string, locals?: {[key: string]: any}): Promise<void>;
    }
}