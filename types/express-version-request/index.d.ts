// Type definitions for express-version-request 1.7
// Project: https://github.com/lirantal/express-version-request
// Definitions by: Rogelio Negrete <https://github.com/weffe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Handler, Request } from 'express';

export interface SetVersionByQueryParamOptions {
    removeQueryParam: boolean;
}

export type CustomParsingFunction = (header: Request["headers"]["accept"]) => string;

export function setVersion(version: string): Handler;

export function setVersionByHeader(headerName?: string): Handler;

export function setVersionByQueryParam(queryParam?: string, options?: SetVersionByQueryParamOptions): Handler;

export function setVersionByAcceptHeader(customParsingFunction?: CustomParsingFunction): Handler;

export function formatVersion(version: object | string): string;
