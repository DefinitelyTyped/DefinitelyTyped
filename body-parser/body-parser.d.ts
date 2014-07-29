// Type definitions for body-parser
// Project: http://expressjs.com
// Definitions by: Santi Albo <https://github.com/santialbo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "body-parser" {
    import express = require('express');
    function e(options?: any): express.RequestHandler;
    export = e;
}