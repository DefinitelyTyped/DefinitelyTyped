// Type definitions for errorhandler
// Project: https://github.com/expressjs/errorhandler
// Definitions by: Santi Albo <https://github.com/santialbo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "errorhandler" {
    import express = require('express');
    function e(): express.ErrorRequestHandler;
    export = e;
}