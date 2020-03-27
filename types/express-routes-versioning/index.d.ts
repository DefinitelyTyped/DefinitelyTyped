// Type definitions for express-routes-versioning 1.0
// Project: https://github.com/Prasanna-sr/express-routes-versioning
// Definitions by: Rogelio Negrete <https://github.com/weffe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Handler } from 'express';

declare namespace routesVersioning {
    interface VersionOptions {
        [versionKey: string]: Handler;
    }

    type RoutesVersioningMiddleware = (args: VersionOptions, notFoundMiddleware?: Handler) => Handler;
}

declare function routesVersioning(): routesVersioning.RoutesVersioningMiddleware;

export = routesVersioning;
