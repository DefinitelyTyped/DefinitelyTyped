/* =================== USAGE ===================

    import bodyParser = require("koa-bodyparser");
    var Koa = require('koa');

    var app = new Koa();
    app.use(bodyParser());

 =============================================== */

import * as Koa from "koa";

declare module "koa" {
    interface Request {
        body?: unknown;
        rawBody: string;
    }
}

declare function bodyParser(opts?: bodyParser.Options): Koa.Middleware;

declare namespace bodyParser {
    interface Options {
        /**
         *  parser will only parse when request type hits enableTypes, default is ['json', 'form'].
         */
        enableTypes?: string[] | undefined;

        /**
         * requested encoding. Default is utf-8 by co-body
         */
        encoding?: string | undefined;

        /**
         * limit of the urlencoded body. If the body ends up being larger than this limit
         * a 413 error code is returned. Default is 56kb
         */
        formLimit?: string | undefined;

        /**
         * limit of the json body. Default is 1mb
         */
        jsonLimit?: string | undefined;

        /**
         * limit of the text body. Default is 1mb.
         */
        textLimit?: string | undefined;

        /**
         * limit of the xml body. Default is 1mb.
         */
        xmlLimit?: string | undefined;

        /**
         * when set to true, JSON parser will only accept arrays and objects. Default is true
         */
        strict?: boolean | undefined;

        /**
         * custom json request detect function. Default is null
         */
        detectJSON?: ((ctx: Koa.Context) => boolean) | undefined;

        /**
         * support extend types
         */
        extendTypes?: {
            json?: string[] | string | undefined;
            form?: string[] | string | undefined;
            text?: string[] | string | undefined;
        } | undefined;

        /**
         * support custom error handle
         */
        onerror?: ((err: Error, ctx: Koa.Context) => void) | undefined;
    }
}

export = bodyParser;
