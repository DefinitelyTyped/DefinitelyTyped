// Type definitions for api-error-handler v1.0.0
// Project: https://github.com/expressjs/api-error-handler
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module 'api-error-handler' {
    import express = require('express');

    function apiErrorHandler(options?: any): express.ErrorRequestHandler;

    export = apiErrorHandler;
}
