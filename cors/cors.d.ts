// Type definitions for cors
// Project: https://github.com/troygoode/node-cors/
// Definitions by: Mihhail Lapushkin <https://github.com/mihhail-lapushkin/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "cors" {
    import express = require('express');

    module e {
        interface CorsOptions  {
            origin?: any;
            methods?: any;
            allowedHeaders?: any;
            exposedHeaders?: any;
            credentials?: boolean;
            maxAge?: number;
        }
    }

    function e(options?: e.CorsOptions): express.RequestHandler;
    export = e;
}