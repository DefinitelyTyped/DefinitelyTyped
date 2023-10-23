declare namespace OpenApi {
    interface ApiOptions {
        requestMiddleware?: (() => any) | undefined;
        responseMiddleware?: (() => any) | undefined;
        errorMiddleware?: (() => any) | undefined;
    }

    interface HttpMethodOptions {
        rawBody?: boolean | undefined;
    }

    interface HttpResponse {
        statusCode?: number | undefined;
        headers?: object | undefined;
        body?: (object | string) | undefined;
    }
}

declare class OpenApi {
    constructor(options: OpenApi.ApiOptions, overrideLogger?: () => void);

    setAuthorizer(authorizerFunc: (req?: any) => Promise<any>): void;
    onEvent(onEventFunc: (req?: any) => Promise<any>): void;
    onSchedule(onScheduleFunc: (req?: any) => Promise<any>): void;

    head(route: string, handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>): void;
    head(route: string, options: OpenApi.HttpMethodOptions, handler: (req?: any) => any): void;

    get(route: string, handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>): void;
    get(
        route: string,
        options: OpenApi.HttpMethodOptions,
        handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>,
    ): void;

    post(route: string, handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>): void;
    post(
        route: string,
        options: OpenApi.HttpMethodOptions,
        handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>,
    ): void;

    put(route: string, handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>): void;
    put(
        route: string,
        options: OpenApi.HttpMethodOptions,
        handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>,
    ): void;

    patch(route: string, handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>): void;
    patch(
        route: string,
        options: OpenApi.HttpMethodOptions,
        handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>,
    ): void;

    delete(route: string, handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>): void;
    delete(
        route: string,
        options: OpenApi.HttpMethodOptions,
        handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>,
    ): void;

    options(route: string, handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>): void;
    options(
        route: string,
        options: OpenApi.HttpMethodOptions,
        handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>,
    ): void;

    any(route: string, handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>): void;
    any(
        route: string,
        options: OpenApi.HttpMethodOptions,
        handler: (req?: object) => OpenApi.HttpResponse | Promise<OpenApi.HttpResponse>,
    ): void;

    handler(event: object, context: object): Promise<any>;
}

export = OpenApi;
