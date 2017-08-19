// Type definitions for swagger-tools 0.10
// Project: https://github.com/apigee-127/swagger-tools
// Definitions by: Alex Brick <https://github.com/bricka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { NextHandleFunction } from 'connect';
import { IncomingMessage } from 'http';

export interface SwaggerRouterOptionsControllers {
    [handlerName: string]: NextHandleFunction;
}

export interface SwaggerRouterOptions {
    controllers?: SwaggerRouterOptionsControllers | string | string[];
    ignoreMissingHandlers?: boolean;
    useStubs?: boolean;
}

export interface SwaggerSecurityError {
    code?: string;
    message?: string;
    state?: string;
    statusCode?: number;
}

export type SwaggerSecurityCallback = (err?: SwaggerSecurityError) => void;

export type SwaggerSecurityHandler = (request: IncomingMessage, securityDefinition: any, scopes: string | string[], callback: SwaggerSecurityCallback) => void;

export interface SwaggerSecurityOptions {
    [securityDefinitionName: string]: SwaggerSecurityHandler;
}

export interface SwaggerUi12ApiDeclarations {
    [path: string]: any;
}

export interface SwaggerUiOptions {
    apiDocs?: string;
    apiDocsPrefix?: string;
    swaggerUi?: string;
    swaggerUiDir?: string;
    swaggerUiPrefix?: string;
}

export interface SwaggerValidatorOptions {
    validateResponse?: boolean;
}

export interface Middleware {
    swaggerMetadata(): NextHandleFunction;
    swaggerRouter(options?: SwaggerRouterOptions): NextHandleFunction;
    swaggerSecurity(options?: SwaggerSecurityOptions): NextHandleFunction;
    swaggerValidator(options?: SwaggerValidatorOptions): NextHandleFunction;
}

export interface Middleware12 extends Middleware {
    swaggerUi(apiDeclarations: SwaggerUi12ApiDeclarations, options?: SwaggerUiOptions): NextHandleFunction;
}

export interface Middleware20 extends Middleware {
    swaggerUi(options?: SwaggerUiOptions): NextHandleFunction;
}

export type InitializeMiddlewareCallback12 = (middleware: Middleware12) => void;

export type InitializeMiddlewareCallback20 = (middleware: Middleware20) => void;

export interface Resource {
    resourcePath: string;
}

export function initializeMiddleware(swaggerObject: any, callback: InitializeMiddlewareCallback20): void;

export function initializeMiddleware(
    swaggerObject: any,
    resources: Resource[],
    callback: InitializeMiddlewareCallback12
): void;
