// Type definitions for express-domain-middleware
// Project: https://www.npmjs.com/package/express-domain-middleware
// Definitions by: Hookclaw <https://github.com/hookclaw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "express-domain-middleware" {
    import express = require('express');
    function e(req: express.Request, res: express.Response, next: express.NextFunction): any;
    export = e;
}
