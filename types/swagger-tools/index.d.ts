// Type definitions for swagger-tools 0.10
// Project: https://github.com/apigee-127/swagger-tools
// Definitions by: Alex Brick <https://github.com/bricka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { NextHandleFunction } from 'connect';
import { IncomingMessage, ServerResponse } from 'http';

export interface SwaggerParameterSchema {
    allowMultiple?: boolean;
    description?: string;
    format?: string;
    in?: string;
    maximum?: string;
    minimum?: string;
    name: string;
    paramType?: string;
    required?: boolean;
    type: string;
}

export interface SwaggerRequestParameter<T> {
    path: string[];
    schema: SwaggerParameterSchema;
    originalValue: any;
    value: T;
}

export interface SwaggerRequestParameters {
    [paramName: string]: SwaggerRequestParameter<any>;
}

export interface Swagger12Request extends IncomingMessage {
    swagger: {
        api: any;
        apiDeclaration: any;
        apiIndex: number;
        authorizations?: any;
        operation?: any;
        operationPath?: string[];
        params: SwaggerRequestParameters;
        resourceIndex: number;
        resourceListing: any;
        swaggerVersion: string;
        useStubs?: boolean;
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
    path: string[];
    schema: SwaggerParameterSchema;
}

export interface Swagger20Security {
    [name: string]: any;
}

export interface Swagger20Response {
    description?: string;
    schema?: any;
}

export interface Swagger20Operation {
    operationId?: string;
    parameters?: SwaggerParameterSchema[];
    responses: { [code: string]: Swagger20Response };
    security?: Swagger20Security[];
    summary?: string;
    tags?: string[];
}

export interface Swagger20Request extends IncomingMessage {
    swagger: {
        apiPath: string;
        operation?: Swagger20Operation;
        operationPath?: string[];
        operationParameters?: OperationParameter[];
        path: any;
        params: SwaggerRequestParameters;
        security: any[];
        swaggerObject: any;
        swaggerVersion: string;
        useStubs?: boolean;
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
