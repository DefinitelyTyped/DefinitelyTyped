// Type definitions for swagger-tools 0.10
// Project: https://github.com/apigee-127/swagger-tools
// Definitions by: Alex Brick <https://github.com/bricka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { NextHandleFunction } from 'connect';
import { IncomingMessage, ServerResponse } from 'http';

export interface SwaggerParameterSchema {
    name: string;
    in: string;
}

export interface SwaggerRequestParameter {
    path: string;
    schema: SwaggerParameterSchema;
    originalValue: any;
    value: any;
}

export interface SwaggerRequestParameters {
    [paramName: string]: SwaggerRequestParameter;
}

export interface Swagger12Request extends IncomingMessage {
    swagger: {
        api: string;
        apiDeclaration: any;
        apiIndex: number;
        authorizations?: any[];
        operation?: string;
        operationPath?: string;
        params: SwaggerRequestParameters;
        resourceIndex: number;
        resourceListing: any;
    };
}

export type SwaggerRouter12HandlerFunction = (req: Swagger12Request, res: ServerResponse, next: (arg?: any) => void) => void;

export interface SwaggerRouter12OptionsControllers {
    [handlerName: string]: SwaggerRouter12HandlerFunction;
}

export interface SwaggerRouter12Options {
    controllers?: SwaggerRouter12OptionsControllers | string | string[];
    ignoreMissingHandlers?: boolean;
    useStubs?: boolean;
}

export interface OperationParameter {
    path: string;
    schema: SwaggerParameterSchema;
}

export interface Swagger20Request extends IncomingMessage {
    swagger: {
        apiPath: string;
        operation?: string;
        operationPath?: string;
        operationParameters?: OperationParameter[];
        path: string;
        params: SwaggerRequestParameters;
        security: any[];
        swaggerObject: any;
    };
}

export type SwaggerRouter20HandlerFunction = (req: Swagger20Request, res: ServerResponse, next: (arg?: any) => void) => void;

export interface SwaggerRouter20OptionsControllers {
    [handlerName: string]: SwaggerRouter20HandlerFunction;
}

export interface SwaggerRouter20Options {
    controllers?: SwaggerRouter20OptionsControllers | string | string[];
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
    swaggerSecurity(options?: SwaggerSecurityOptions): NextHandleFunction;
    swaggerValidator(options?: SwaggerValidatorOptions): NextHandleFunction;
}

export interface Middleware12 extends Middleware {
    swaggerRouter(options?: SwaggerRouter12Options): NextHandleFunction;
    swaggerUi(apiDeclarations: SwaggerUi12ApiDeclarations, options?: SwaggerUiOptions): NextHandleFunction;
}

export interface Middleware20 extends Middleware {
    swaggerRouter(options?: SwaggerRouter20Options): NextHandleFunction;
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
