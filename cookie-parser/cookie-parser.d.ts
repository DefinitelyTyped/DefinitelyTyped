// Type definitions for cookie-parser
// Project: https://github.com/expressjs/cookie-parser
// Definitions by: Santi Albo <https://github.com/santialbo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "cookie-parser" {
    import { RequestHandler } from "express";
    export default function e(secret?: string, options?: any): RequestHandler;
}
