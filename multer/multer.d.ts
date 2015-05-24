// Type definitions for multer
// Project: https://github.com/expressjs/multer
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "multer" {
    import { RequestHandler } from "express";
    export default function multer(options?: any): RequestHandler;
}
