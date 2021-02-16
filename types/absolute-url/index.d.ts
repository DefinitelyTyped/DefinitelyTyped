// Type definitions for absolute-url 1.2
// Project: https://github.com/zazukoians/absolute-url
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RequestHandler, Request } from "express";

declare module 'express-serve-static-core' {
    interface Request {
        absoluteUrl(): string;
    }
}

interface AbsoluteUrl {
    (): RequestHandler;
    attach(req: Request): void;
}

declare const middleware: AbsoluteUrl;

export = middleware;
