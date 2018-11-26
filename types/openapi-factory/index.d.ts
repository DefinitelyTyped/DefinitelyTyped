// Type definitions for openapi-factory 4.2
// Project: https://github.com/wparad/openapi-factory.js
// Definitions by: Daan Boerlage <https://github.com/runebaas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace OpenApi {
    interface OpenApiOptions {
        requestMiddleware?: () => any;
        responseMiddleware?: () => any;
        errorMiddleware?: () => any;
    }
}

declare class OpenApi {
    constructor(options: OpenApi.OpenApiOptions, overrideLogger?: () => void);

    setAuthorizer(authorizerFunc: (req?: any) => any): void;
    onEvent(onEventFunc: (req?: any) => any): void;
    onSchedule(onScheduleFunc: (req?: any) => any): void;

    head(route: string, p0: (req?: any) => any): void;
    head(route: string, p0: object, p1: (req?: any) => any): void;

    get(route: string, p0: (req?: any) => any): void;
    get(route: string, p0: object, p1: (req?: any) => any): void;

    post(route: string, p0: (req?: any) => any): void;
    post(route: string, p0: object, p1: (req?: any) => any): void;

    put(route: string, p0: (req?: any) => any): void;
    put(route: string, p0: object, p1: (req?: any) => any): void;

    patch(route: string, p0: (req?: any) => any): void;
    patch(route: string, p0: object, p1: (req?: any) => any): void;

    delete(route: string, p0: (req?: any) => any): void;
    delete(route: string, p0: object, p1: (req?: any) => any): void;

    options(route: string, p0: (req?: any) => any): void;
    options(route: string, p0: object, p1: (req?: any) => any): void;

    any(route: string, p0: (req?: any) => any): void;
    any(route: string, p0: object, p1: (req?: any) => any): void;

    handler(event: object, context: object): Promise<any>;
}

export = OpenApi;
