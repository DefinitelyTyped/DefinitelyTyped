// Type definitions for koa-static-server 1.3
// Project: https://github.com/pkoretic/koa-static-server
// Definitions by: wulunyi <https://github.com/wulunyi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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
    rootDir?: string;
    /**
     * optional rewrite path
     */
    rootPath?: string;
    /**
     * optional default file to serve if requested static is missing
     */
    notFoundFile?: string;
    /**
     * request access log to console
     */
    log?: boolean;
    /**
     * don't execute any downstream middleware. defaults to true
     */
    last?: boolean;
    /**
     * Browser cache max-age in milliseconds. defaults to 0
     */
    maxage?: number;
    /**
     * Allow transfer of hidden files. defaults to false
     */
    hidden?: boolean;
    /**
     * Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested
     */
    gzip?: boolean;
    index?: string;
  }
}

export = KoaStaticServer;
