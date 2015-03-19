// Type definitions for serve-favicon 2.1.6
// Project: https://github.com/expressjs/serve-favicon
// Definitions by: Uros Smolnik <https://github.com/urossmolnik/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* =================== USAGE ===================

    import serveFavicon = require('serve-favicon');
    app.use(serveFavicon(__dirname + '/public/favicon.ico'));

 =============================================== */

/// <reference path="../express/express.d.ts" />

declare module "serve-favicon" {
    import express = require('express');

    /**
     * Node.js middleware for serving a favicon.
     */
    function serveFavicon(path: string, options?: {
        /**
        * The cache-control max-age directive in ms, defaulting to 1 day. This can also be a string accepted by the ms module.
        */
        maxAge?: number;
    }): express.RequestHandler;

    export = serveFavicon;
}