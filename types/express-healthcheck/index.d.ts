// Type definitions for express-healthcheck 0.1
// Project: https://github.com/lennym/express-healthcheck
// Definitions by: Arian Meidow <https://github.com/sPaCeMoNk3yIam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.7

import { RequestHandler } from "express";

declare function expressHealthcheck(options?: {
    test?: ((err: Error) => void) | (() => Error);
    healthy?: () => any;
}): RequestHandler;

export = expressHealthcheck;
