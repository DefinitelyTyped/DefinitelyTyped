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

declare namespace koaCompress {
    export interface CompressOptions {
        /**
         * An optional function that checks the response content type to decide whether to compress. By default, it uses compressible.
         */
        filter?: ((mimeType: string) => boolean) | undefined;

        /**
         * Minimum response size in bytes to compress. Default 1024 bytes or 1kb.
         */
        threshold?: number | string | undefined;

        /**
         * An optional string, which specifies what encoders to use for requests
         * without Accept-Encoding. Default: 'idenity'.
         */
        defaultEncoding?: string | undefined;

        /**
         * Options for brotli compression.
         */
        br?: zlib.BrotliOptions | false | undefined;

        /**
         * Options for gzip compression.
         */
        gzip?: zlib.ZlibOptions | false | undefined;

        /**
         * Options for deflate compression.
         */
        deflate?: zlib.ZlibOptions | false | undefined;
    }
}

export = koaCompress;
