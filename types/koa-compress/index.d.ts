// Type definitions for koa-compress v2.x
// Project: https://github.com/koajs/compress
// Definitions by: Jerry Chin <https://github.com/hellopao/>
// Definitions: https://github.com/hellopao/DefinitelyTyped

/* =================== USAGE ===================

    import compress = require("koa-compress");
    var Koa = require('koa');

    var app = new Koa();
    app.use(compress());

 =============================================== */
/// <reference types="node" />
/// <reference types="koa" />

declare module "koa-compress" {

    import * as Koa from "koa";
    import * as zlib from "zlib";

    interface CompressOptions extends zlib.ZlibOptions {
        /**
         * An optional function that checks the response content type to decide whether to compress. By default, it uses compressible.
         */
        filter?: (content_type: string) => boolean;

        /**
         * Minimum response size in bytes to compress. Default 1024 bytes or 1kb.
         */
        threshold?: number
    }

    /**
     * Compress middleware for Koa
     */
    function compress(options?: CompressOptions): Koa.Middleware;

    namespace compress {}
    export = compress;
}
