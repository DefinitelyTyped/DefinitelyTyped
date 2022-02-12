// Type definitions for koa-bodyparser 4.3
// Project: https://github.com/koajs/body-parser
// Definitions by: Jerry Chin <https://github.com/hellopao>
//                 Hiroshi Ioka <https://github.com/hirochachacha>
//                 Alexi Maschas <https://github.com/amaschas>
//                 Pirasis Leelatanon <https://github.com/1pete>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import bodyParser = require("koa-bodyparser");
    var Koa = require('koa');

    var app = new Koa();
    app.use(bodyParser());

 =============================================== */

import * as Koa from "koa";

declare module "koa" {
    interface Request {
        body?: any;
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
        encode?: string | undefined;

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
            json?: string[] | undefined;
            form?: string[] | undefined;
            text?: string[] | undefined;
        } | undefined;

        /**
         * support custom error handle
         */
        onerror?: ((err: Error, ctx: Koa.Context) => void) | undefined;
    }
}

export = bodyParser;
