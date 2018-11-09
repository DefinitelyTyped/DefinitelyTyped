// Type definitions for express-routes-versioning 1.0.1
// Project: https://github.com/Prasanna-sr/express-routes-versioning
// Definitions by: Rogelio Negrete <https://github.com/weffe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Handler } from 'express';

export interface IOptions {
    [versionKey: string]: Handler
}

export type routesVersioningMiddleware = (args: IOptions, notFoundMiddleware?: Handler) => Handler;

export default function routesVersioning(): routesVersioningMiddleware;
