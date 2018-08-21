// Type definitions for express-domain-middleware
// Project: https://www.npmjs.com/package/express-domain-middleware
// Definitions by: Hookclaw <https://github.com/hookclaw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="express" />

declare module "express-domain-middleware" {
    import express = require('express');
    function e(req: express.Request, res: express.Response, next: express.NextFunction): any;
    export = e;
}
