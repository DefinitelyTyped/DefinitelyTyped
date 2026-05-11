/* =================== USAGE ===================

    import serve = require("koa-static-server");
    var Koa = require('koa');

    var app = new Koa();
    app.use(serve(serve({rootDir: 'web'}));

 =============================================== */
import { Middleware } from "koa";

declare function KoaStaticServer(options: KoaStaticServer.Options): Middleware;

declare namespace KoaStaticServer {
    interface Options {
        /**
         * directory that is to be served
         */
        rootDir?: string | undefined;
        /**
         * optional rewrite path
         */
        rootPath?: string | undefined;
        /**
         * optional default file to serve if requested static is missing
         */
        notFoundFile?: string | undefined;
        /**
         * request access log to console
         */
        log?: boolean | undefined;
        /**
         * don't execute any downstream middleware. defaults to true
         */
        last?: boolean | undefined;
        /**
         * Browser cache max-age in milliseconds. defaults to 0
         */
        maxage?: number | undefined;
        /**
         * Allow transfer of hidden files. defaults to false
         */
        hidden?: boolean | undefined;
        /**
         * Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested
         */
        gzip?: boolean | undefined;
        /**
         * Try to serve the brotli version of a file automatically when brotli is supported by a client and in the requested
         */
        brotli?: boolean | undefined;
        index?: string | undefined;
    }
}

export = KoaStaticServer;
