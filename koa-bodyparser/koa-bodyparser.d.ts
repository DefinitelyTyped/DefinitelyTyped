// Type definitions for koa-bodyparser v3.x
// Project: https://github.com/koajs/bodyparser
// Definitions by: Jerry Chin <https://github.com/hellopao/>
// Definitions: https://github.com/hellopao/DefinitelyTyped

/* =================== USAGE ===================

    import bodyParser = require("koa-bodyparser");
    var Koa = require('koa');

    var app = new Koa();
    app.use(bodyParser());

 =============================================== */

/// <reference path="../koa/koa.d.ts" />

declare module "koa-bodyparser" {

    import * as Koa from "koa";
    module "koa" {
        interface Request {
            body: any;
        }
    }

    function bodyParser(opts?: {
        /**
         * requested encoding. Default is utf-8 by co-body
         */
        encode?: string;

        /**
         * limit of the urlencoded body. If the body ends up being larger than this limit
         * a 413 error code is returned. Default is 56kb
         */
        formLimit?: string;

        /**
         * limit of the json body. Default is 1mb
         */
        jsonLimit?: string;

        /**
         * when set to true, JSON parser will only accept arrays and objects. Default is true
         */
        strict?: boolean;

        /**
         * custom json request detect function. Default is null
         */
        detectJSON?: (ctx: Koa.Context) => boolean;

        /**
         * support extend types
         */
        extendTypes?: {
            json?: string[];
            form?: string[];
        }

        /**
         * support custom error handle
         */
        onerror?: (err: Error, ctx: Koa.Context) => void;
    }): { (ctx: Koa.Context, next?: () => any): any };

    namespace bodyParser {}
    export = bodyParser;
}
