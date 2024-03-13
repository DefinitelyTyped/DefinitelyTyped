/// <reference types="when" />

declare module "rest" {
    import when = require("when");

    export = rest;

    function rest(path: string): rest.ResponsePromise;
    function rest(request: rest.Request): rest.ResponsePromise;

    namespace rest {
        export function setDefaultClient(client: Client): void;
        export function getDefaultClient(): Client;
        export function resetDefaultClient(): void;

        export function wrap<T>(interceptor: Interceptor<T>, config?: T): Client;

        export interface Request {
            method?: string | undefined;
            path?: string | undefined;
            params?: any;
            headers?: any;
            entity?: any;
            canceled?: boolean | undefined;
            cancel?: (() => void) | undefined;
            originator?: ((request?: Request) => ResponsePromise) | undefined;
            mixin?: any;
        }

        export interface Status {
            code: number;
            text?: string | undefined;
        }

        export interface Headers {
            [index: string]: any; // string or string[]
        }

        export interface Response {
            request: Request;
            raw: any;
            status: Status;
            headers: Headers;
            entity: any;
        }

        export interface ResponsePromise extends when.Promise<Response> {
            entity(): when.Promise<any>;
            status(): when.Promise<number>;
            headers(): when.Promise<Headers>;
            header(headerName: string): when.Promise<any>; // string or string[]
        }

        export interface Interceptor<T> {
            (parent?: Client, config?: T): Client;
        }

        export interface Client {
            (path: string): ResponsePromise;
            (request: Request): ResponsePromise;

            skip(): Client;
            wrap<T>(interceptor: Interceptor<T>, config?: T): Client;
        }

        export interface Meta {
            client: Client;
            arguments: any;
        }
    }
}

declare module "rest/interceptor" {
    import when = require("when");
    import rest = require("rest");

    function interceptor<T, U>(config: interceptor.Config<T, U>): rest.Interceptor<T>;

    namespace interceptor {
        interface Config<T, U> {
            init?: ((config: T) => U) | undefined;
            request?:
                | ((request: rest.Request, config: U, meta: rest.Meta) => rest.Request | when.Promise<rest.Request>)
                | undefined;
            response?:
                | ((response: rest.Response, config: U, meta: rest.Meta) => rest.Response | when.Promise<rest.Response>)
                | undefined;
            success?:
                | ((response: rest.Response, config: U, meta: rest.Meta) => rest.Response | when.Promise<rest.Response>)
                | undefined;
            error?:
                | ((response: rest.Response, config: U, meta: rest.Meta) => rest.Response | when.Promise<rest.Response>)
                | undefined;
        }
    }

    export = interceptor;
}

declare module "rest/interceptor/defaultRequest" {
    import rest = require("rest");

    var defaultRequest: rest.Interceptor<defaultRequest.Config>;

    namespace defaultRequest {
        interface Config {
            method?: string | undefined;
            path?: string | undefined;
            params?: any;
            headers?: any;
            entity?: any;
            mixin?: any;
        }
    }

    export = defaultRequest;
}

declare module "rest/interceptor/hateoas" {
    import rest = require("rest");

    var hateoas: rest.Interceptor<hateoas.Config>;

    namespace hateoas {
        interface Config {
            target?: string | undefined;
            client?: rest.Client | undefined;
        }
    }

    export = hateoas;
}

declare module "rest/interceptor/location" {
    import rest = require("rest");

    var location: rest.Interceptor<location.Config>;

    namespace location {
        interface Config {
            client?: rest.Client | undefined;
            code?: number | undefined;
        }
    }

    export = location;
}

declare module "rest/interceptor/mime" {
    import rest = require("rest");
    import registry = require("rest/mime/registry");

    var mime: rest.Interceptor<mime.Config>;

    namespace mime {
        interface Config {
            mime?: string | undefined;
            accept?: string | undefined;
            registry?: registry.Registry | undefined;
            permissive?: boolean | undefined;
        }
    }

    export = mime;
}

declare module "rest/interceptor/pathPrefix" {
    import rest = require("rest");

    var pathPrefix: rest.Interceptor<pathPrefix.Config>;

    namespace pathPrefix {
        interface Config {
            prefix?: string | undefined;
        }
    }

    export = pathPrefix;
}

declare module "rest/interceptor/basicAuth" {
    import rest = require("rest");

    var basicAuth: rest.Interceptor<basicAuth.Config>;

    namespace basicAuth {
        interface Config {
            username?: string | undefined;
            password?: string | undefined;
        }
    }

    export = basicAuth;
}

declare module "rest/interceptor/oAuth" {
    import rest = require("rest");

    var oAuth: rest.Interceptor<oAuth.Config>;

    namespace oAuth {
        interface DismissWindow {
            (): void;
        }
        interface Config {
            token?: string | undefined;
            clientId?: string | undefined;
            scope?: string | undefined;
            authorizationUrl?: string | undefined;
            redirectUrl?: string | undefined;
            windowStrategy?: ((url: string) => DismissWindow) | undefined;
            oAuthCallback?: ((hash: string) => void) | undefined;
            oAuthCallbackName?: string | undefined;
        }
    }

    export = oAuth;
}

declare module "rest/interceptor/csrf" {
    import rest = require("rest");

    var csrf: rest.Interceptor<csrf.Config>;

    namespace csrf {
        interface Config {
            name?: string | undefined;
            token?: string | undefined;
        }
    }

    export = csrf;
}

declare module "rest/interceptor/errorCode" {
    import rest = require("rest");

    var errorCode: rest.Interceptor<errorCode.Config>;

    namespace errorCode {
        interface Config {
            code?: number | undefined;
        }
    }

    export = errorCode;
}

declare module "rest/interceptor/retry" {
    import rest = require("rest");

    var retry: rest.Interceptor<retry.Config>;

    namespace retry {
        interface Config {
            initial?: number | undefined;
            multiplier?: number | undefined;
            max?: number | undefined;
        }
    }

    export = retry;
}

declare module "rest/interceptor/template" {
    import rest = require("rest");

    var template: rest.Interceptor<template.Config>;

    namespace template {
        interface Config {
            template?: string | undefined;
            params?: {
                [name: string]: any;
            } | undefined;
        }
    }

    export = template;
}

declare module "rest/interceptor/timeout" {
    import rest = require("rest");

    var timeout: rest.Interceptor<timeout.Config>;

    namespace timeout {
        interface Config {
            timeout?: number | undefined;
            transient?: boolean | undefined;
        }
    }

    export = timeout;
}

declare module "rest/interceptor/jsonp" {
    import rest = require("rest");

    var jsonp: rest.Interceptor<jsonp.Config>;

    namespace jsonp {
        interface Config {
            callback?: {
                param?: string | undefined;
                prefix?: string | undefined;
                name?: string | undefined;
            } | undefined;
        }
    }

    export = jsonp;
}

declare module "rest/interceptor/ie/xdomain" {
    import rest = require("rest");

    var xdomain: rest.Interceptor<{}>;

    export = xdomain;
}

declare module "rest/interceptor/ie/xhr" {
    import rest = require("rest");

    var xhr: rest.Interceptor<{}>;

    export = xhr;
}

declare module "rest/mime/registry" {
    import when = require("when");

    var registry: registry.Registry;

    namespace registry {
        interface MIMEConverter {
            read(value: string): any | when.Promise<any>;
            write(value: any): string | when.Promise<string>;
        }

        interface Registry {
            lookup(mimeType: string): when.Promise<MIMEConverter>;
            register(mimeType: string, converter: MIMEConverter): void;
        }
    }

    export = registry;
}

declare module "rest/client/xhr" {
    import rest = require("rest");
    var xhr: rest.Client;
    export = xhr;
}

declare module "rest/client/node" {
    import rest = require("rest");
    var node: rest.Client;
    export = node;
}

declare module "rest/client/jsonp" {
    import rest = require("rest");
    var jsonp: rest.Client;
    export = jsonp;
}

declare module "rest/client/xdr" {
    import rest = require("rest");
    var xdr: rest.Client;
    export = xdr;
}
