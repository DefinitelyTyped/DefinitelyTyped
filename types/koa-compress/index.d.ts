// Type definitions for koa-compress v2.x
// Project: https://github.com/koajs/compress
// Definitions by: Jerry Chin <https://github.com/hellopao>
// Definitions: https://github.com/hellopao/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import compress = require("koa-compress");
    var Koa = require('koa');

    var app = new Koa();
    app.use(compress());

 =============================================== */
/// <reference types="node" />
/// <reference types="koa" />

import * as Koa from "koa";
import * as zlib from "zlib";

/**
 * Compress middleware for Koa
 */
declare function koaCompress(options?: koaCompress.CompressOptions): Koa.Middleware;

export = koaCompress;

declare namespace koaCompress {
    export interface CompressOptions extends zlib.ZlibOptions {
        /**
         * An optional function that checks the response content type to decide whether to compress. By default, it uses compressible.
         */
        filter?: (content_type: string) => boolean;

        /**
         * Minimum response size in bytes to compress. Default 1024 bytes or 1kb.
         */
        threshold?: number
    }
}
