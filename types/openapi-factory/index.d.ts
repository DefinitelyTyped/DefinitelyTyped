// Type definitions for openapi-factory 4.2
// Project: https://github.com/wparad/openapi-factory.js
// Definitions by: Daan Boerlage <https://github.com/runebaas>, Daniel Hermyt <https://github.com/dhermyt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace OpenApi {
    interface ApiOptions {
        requestMiddleware?: () => any;
        responseMiddleware?: () => any;
        errorMiddleware?: () => any;
    }

    interface HttpMethodOptions {
        rawBody?: boolean;
    }

    interface Authorizer {
        jwt: string,
        principalId: string
    }

    interface RequestContext {
        authorizer: Authorizer
    }

    interface HttpRequest {
        headers?: {[key: string]: any},
        queryStringParameters?: {[key: string]: any},
        pathParameters?: {[key: string]: any},
        httpMethod?: string,
        body?: (object | string);
        requestContext: RequestContext
    }

    interface HttpResponse {
        statusCode?: number;
        headers?: {[key: string]: any};
        body?: (object | string);
    }
}

declare class OpenApi {
    constructor(options: OpenApi.ApiOptions, overrideLogger?: () => void);

    setAuthorizer(authorizerFunc: (req?: any) => Promise<any>): void;
    onEvent(onEventFunc: (req?: any) => Promise<any>): void;
    onSchedule(onScheduleFunc: (req?: any) => Promise<any>): void;

    head(route: string, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;
    head(route: string, options: OpenApi.HttpMethodOptions, handler: (req?: any) => any): void;

    get(route: string, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;
    get(route: string, options: OpenApi.HttpMethodOptions, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;

    post(route: string, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;
    post(route: string, options: OpenApi.HttpMethodOptions, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;

    put(route: string, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;
    put(route: string, options: OpenApi.HttpMethodOptions, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;

    patch(route: string, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;
    patch(route: string, options: OpenApi.HttpMethodOptions, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;

    delete(route: string, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;
    delete(route: string, options: OpenApi.HttpMethodOptions, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;

    options(route: string, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;
    options(route: string, options: OpenApi.HttpMethodOptions, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;

    any(route: string, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;
    any(route: string, options: OpenApi.HttpMethodOptions, handler: (req?: OpenApi.HttpRequest) => (OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>)): void;

    handler(event: object, context: object): Promise<any>;
}

export = OpenApi;
