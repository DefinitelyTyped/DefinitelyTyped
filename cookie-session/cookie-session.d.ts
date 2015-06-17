// Type definitions for cookie-session
// Project: https://github.com/expressjs/cookie-session
// Definitions by: hetianzhuo <https://github.com/hetz/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "cookie-session" {
    import express = require('express');
    function e(secret?: string, options?: any): express.RequestHandler;
    export = e;
}
