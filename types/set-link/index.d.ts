// Type definitions for set-link 1.0
// Project: https://github.com/bergos/set-link
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { RequestHandler } from "express";

declare module 'express' {
    interface Response {
        setLink(link: string, rel: string): void;
    }
}

declare const middleware: RequestHandler;

export = middleware;
