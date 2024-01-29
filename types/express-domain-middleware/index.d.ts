/// <reference types="express" />

declare module "express-domain-middleware" {
    import express = require("express");
    function e(req: express.Request, res: express.Response, next: express.NextFunction): any;
    export = e;
}
