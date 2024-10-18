/* =================== USAGE ===================

    import Koa = require('koa');
    import KoaXmlBody = require('koa-xml-body');

    const app = new Koa();
    app.use(KoaXmlBody({
        onerror: (err, ctx) => {
            ctx.throw(err.message);
        }
    }));

 =============================================== */

import * as Koa from "koa";

import { ParserOptions as Xml2jsOptions } from "xml2js";

declare module "koa" {
    interface Request {
        body: any;
    }
}

declare function bodyParser(opts?: {
    // Key used for decoding when to parse ctx.request; default is 'body'
    key?: string;
    // requested encoding. Default is utf8. If not set, the lib will retrive it from content-type(such as content-type:application/xml;charset=gb2312).
    encoding?: string;
    // limit of the body. If the body ends up being larger than this limit, a 413 error code is returned. Default is 1mb.
    limit?: number;
    // length of the body. When content-length is found, it will be overwritten automatically.
    length?: number;
    // error handler. Default is a noop function. It means it will eat the error silently. You can config it to customize the response.
    onerror?: (err: Error, ctx: Koa.Context) => void;
    // options which will be used to parse xml. Default is {}. See xml2js Options for details.
    xmlOptions?: Xml2jsOptions;
}): Koa.Middleware;

declare namespace bodyParser {}
export = bodyParser;
