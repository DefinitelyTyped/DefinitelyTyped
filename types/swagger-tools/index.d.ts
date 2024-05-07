import { NextHandleFunction } from "connect";
import { IncomingMessage, ServerResponse } from "http";

export interface SwaggerParameterSchema {
    allowMultiple?: boolean | undefined;
    description?: string | undefined;
    format?: string | undefined;
    in?: string | undefined;
    maximum?: string | undefined;
    minimum?: string | undefined;
    name: string;
    paramType?: string | undefined;
    required?: boolean | undefined;
    type: string;
}

export interface SwaggerRequestParameter<T> {
    path: string[];
    schema: SwaggerParameterSchema;
    originalValue: any;
    value: T;
}

export interface SwaggerRequestParameters {
    [paramName: string]: SwaggerRequestParameter<any> | undefined;
}

export interface Swagger12Request extends IncomingMessage {
    swagger: {
        api: any;
        apiDeclaration: any;
        apiIndex: number;
        authorizations?: any;
        operation?: any;
        operationPath?: string[] | undefined;
        params: SwaggerRequestParameters;
        resourceIndex: number;
        resourceListing: any;
        swaggerVersion: string;
        useStubs?: boolean | undefined;
    };
}

export type SwaggerRouter12HandlerFunction = (
    req: Swagger12Request,
    res: ServerResponse,
    next: (arg?: any) => void,
) => void;

export interface SwaggerRouter12OptionsControllers {
    [handlerName: string]: SwaggerRouter12HandlerFunction;
}

export interface SwaggerRouter12Options {
    controllers?: SwaggerRouter12OptionsControllers | string | string[] | undefined;
    ignoreMissingHandlers?: boolean | undefined;
    useStubs?: boolean | undefined;
}

export interface OperationParameter {
    path: string[];
    schema: SwaggerParameterSchema;
}

export interface Swagger20Security {
    [name: string]: any;
}

export interface Swagger20Response {
    description?: string | undefined;
    schema?: any;
}

export interface Swagger20Operation {
    operationId?: string | undefined;
    parameters?: SwaggerParameterSchema[] | undefined;
    responses: { [code: string]: Swagger20Response };
    security?: Swagger20Security[] | undefined;
    summary?: string | undefined;
    tags?: string[] | undefined;
}

export interface Swagger20Request<P extends SwaggerRequestParameters> extends IncomingMessage {
    swagger: {
        apiPath: string;
        operation?: Swagger20Operation | undefined;
        operationPath?: string[] | undefined;
        operationParameters?: OperationParameter[] | undefined;
        path: any;
        params: P;
        security: any[];
        swaggerObject: any;
        swaggerVersion: string;
        useStubs?: boolean | undefined;
    };
}

export type SwaggerRouter20HandlerFunction = (
    req: Swagger20Request<any>,
    res: ServerResponse,
    next: (arg?: any) => void,
) => void;

export interface SwaggerRouter20OptionsControllers {
    [handlerName: string]: SwaggerRouter20HandlerFunction;
}

export interface SwaggerRouter20Options {
    controllers?: SwaggerRouter20OptionsControllers | string | string[] | undefined;
    ignoreMissingHandlers?: boolean | undefined;
    useStubs?: boolean | undefined;
}

export interface SwaggerSecurityError {
    code?: string | undefined;
    message?: string | undefined;
    state?: string | undefined;
    statusCode?: number | undefined;
}

export type SwaggerSecurityCallback = (err?: SwaggerSecurityError) => void;

export type SwaggerSecurityHandler = (
    request: IncomingMessage,
    securityDefinition: any,
    scopes: string | string[],
    callback: SwaggerSecurityCallback,
) => void;

export interface SwaggerSecurityOptions {
    [securityDefinitionName: string]: SwaggerSecurityHandler;
}

export interface SwaggerUi12ApiDeclarations {
    [path: string]: any;
}

export interface SwaggerUiOptions {
    apiDocs?: string | undefined;
    apiDocsPrefix?: string | undefined;
    swaggerUi?: string | undefined;
    swaggerUiDir?: string | undefined;
    swaggerUiPrefix?: string | undefined;
}

export interface SwaggerValidatorOptions {
    validateResponse?: boolean | undefined;
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
    callback: InitializeMiddlewareCallback12,
): void;
