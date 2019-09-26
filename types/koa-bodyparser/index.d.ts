// Type definitions for koa-bodyparser 4.3
// Project: https://github.com/koajs/body-parser
// Definitions by: Jerry Chin <https://github.com/hellopao>
//                 Anup Kishore <https://github.com/anup-2s>
//                 Hiroshi Ioka <https://github.com/hirochachacha>
//                 Alexi Maschas <https://github.com/amaschas>
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
        enableTypes?: string[];
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
         * limit of the text body. Default is 1mb.
         */
        textLimit?: string;

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
            text?: string[];
        };

        /**
         * support custom error handle
         */
        onerror?: (err: Error, ctx: Koa.Context) => void;
    }
}

export = bodyParser;
