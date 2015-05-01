// Type definitions for compression
// Project: https://github.com/expressjs/compression
// Definitions by: Santi Albo <https://github.com/santialbo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "compression" {
    import { RequestHandler } from "express";

    module e {
        interface CompressionOptions  {
            threshold?: number;
            filter?: Function;
        }
    }

    export default function e(options?: e.CompressionOptions): RequestHandler;
}
