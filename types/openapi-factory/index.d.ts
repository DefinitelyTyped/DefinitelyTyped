// Type definitions for openapi-factory 4.2
// Project: https://github.com/wparad/openapi-factory.js
// Definitions by: Daan Boerlage <https://github.com/runebaas>, Daniel Hermyt <https://github.com/dhermyt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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
        jwt: string;
        principalId: string;
    }

    interface RequestContext {
        authorizer: Authorizer;
    }

    interface HttpRequest<T> {
        headers?: { [key: string]: string };
        queryStringParameters?: { [key: string]: string };
        pathParameters?: { [key: string]: string };
        httpMethod?: string;
        body?: T;
        requestContext: RequestContext;
    }

    interface HttpResponse<T> {
        statusCode?: number;
        headers?: { [key: string]: string };
        body?: T;
    }
}

declare class OpenApi {
    constructor(options: OpenApi.ApiOptions, overrideLogger?: () => void);

    setAuthorizer(authorizerFunc: (req?: any) => Promise<any>): void;
    onEvent(onEventFunc: (req?: any) => Promise<any>): void;
    onSchedule(onScheduleFunc: (req?: any) => Promise<any>): void;

    /* tslint:disable:max-line-length no-unnecessary-generics */
    head<RequestBodyType = void, ResponseBodyType = void>(route: string, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;
    head<RequestBodyType = void, ResponseBodyType = void>(route: string, options: OpenApi.HttpMethodOptions, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;

    get<RequestBodyType = void, ResponseBodyType = void>(route: string, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;
    get<RequestBodyType = void, ResponseBodyType = void>(route: string, options: OpenApi.HttpMethodOptions, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;

    post<RequestBodyType = void, ResponseBodyType = void>(route: string, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;
    post<RequestBodyType = void, ResponseBodyType = void>(route: string, options: OpenApi.HttpMethodOptions, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;

    put<RequestBodyType = void, ResponseBodyType = void>(route: string, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;
    put<RequestBodyType = void, ResponseBodyType = void>(route: string, options: OpenApi.HttpMethodOptions, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;

    patch<RequestBodyType = void, ResponseBodyType = void>(route: string, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;
    patch<RequestBodyType = void, ResponseBodyType = void>(route: string, options: OpenApi.HttpMethodOptions, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;

    delete<RequestBodyType = void, ResponseBodyType = void>(route: string, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;
    delete<RequestBodyType = void, ResponseBodyType = void>(route: string, options: OpenApi.HttpMethodOptions, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;

    options<RequestBodyType = void, ResponseBodyType = void>(route: string, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;
    options<RequestBodyType = void, ResponseBodyType = void>(route: string, options: OpenApi.HttpMethodOptions, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;

    any<RequestBodyType = void, ResponseBodyType = void>(route: string, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;
    any<RequestBodyType = void, ResponseBodyType = void>(route: string, options: OpenApi.HttpMethodOptions, handler: (req: OpenApi.HttpRequest<RequestBodyType>) => (OpenApi.HttpResponse<ResponseBodyType | null> | Promise<OpenApi.HttpResponse<ResponseBodyType | null>>)): void;
    /* tslint:enable:max-line-length no-unnecessary-generics */

    handler(event: object, context: object): Promise<any>;
}

export = OpenApi;
