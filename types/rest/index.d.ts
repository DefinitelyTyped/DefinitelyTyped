// Type definitions for rest.js v1.3.1
// Project: https://github.com/cujojs/rest
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
            method?: string;
            path?: string;
            params?: any;
            headers?: any;
            entity?: any;
            canceled?: boolean;
            cancel?: () => void;
            originator?: (request?: Request) => ResponsePromise;
            mixin?: any;
        }

        export interface Status {
            code: number;
            text?: string;
        }

        export interface Headers {
            [index: string]: any // string or string[]
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
            init?: (config: T) => U;
            request?: (request: rest.Request, config: U, meta: rest.Meta) => rest.Request | when.Promise<rest.Request>;
            response?: (response: rest.Response, config: U, meta: rest.Meta) => rest.Response | when.Promise<rest.Response>;
            success?: (response: rest.Response, config: U, meta: rest.Meta) => rest.Response | when.Promise<rest.Response>;
            error?: (response: rest.Response, config: U, meta: rest.Meta) => rest.Response | when.Promise<rest.Response>;
        }
    }

    export = interceptor;
}

declare module "rest/interceptor/defaultRequest" {
    import rest = require("rest");

    var defaultRequest: rest.Interceptor<defaultRequest.Config>;

    namespace defaultRequest {
        interface Config {
            method?: string;
            path?: string;
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
            target?: string;
            client?: rest.Client;
        }
    }

    export = hateoas;
}

declare module "rest/interceptor/location" {
    import rest = require("rest");

    var location: rest.Interceptor<location.Config>;

    namespace location {
        interface Config {
            client?: rest.Client;
            code?: number;
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
            mime?: string;
            accept?: string;
            registry?: registry.Registry;
            permissive?: boolean;
        }
    }

    export = mime;
}

declare module "rest/interceptor/pathPrefix" {
    import rest = require("rest");

    var pathPrefix: rest.Interceptor<pathPrefix.Config>;

    namespace pathPrefix {
        interface Config {
            prefix?: string;
        }
    }

    export = pathPrefix;
}

declare module "rest/interceptor/basicAuth" {
    import rest = require("rest");

    var basicAuth: rest.Interceptor<basicAuth.Config>;

    namespace basicAuth {
        interface Config {
            username?: string;
            password?: string;
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
            token?: string;
            clientId?: string;
            scope?: string;
            authorizationUrl?: string;
            redirectUrl?: string;
            windowStrategy?: (url: string) => DismissWindow;
            oAuthCallback?: (hash: string) => void;
            oAuthCallbackName?: string;
        }
    }

    export = oAuth;
}

declare module "rest/interceptor/csrf" {
    import rest = require("rest");

    var csrf: rest.Interceptor<csrf.Config>;

    namespace csrf {
        interface Config {
            name?: string;
            token?: string;
        }
    }

    export = csrf;
}

declare module "rest/interceptor/errorCode" {
    import rest = require("rest");

    var errorCode: rest.Interceptor<errorCode.Config>;

    namespace errorCode {
        interface Config {
            code?: number;
        }
    }

    export = errorCode;
}

declare module "rest/interceptor/retry" {
    import rest = require("rest");

    var retry: rest.Interceptor<retry.Config>;

    namespace retry {
        interface Config {
            initial?: number;
            multiplier?: number;
            max?: number;
        }
    }

    export = retry;
}

declare module "rest/interceptor/template" {
    import rest = require("rest");

    var template: rest.Interceptor<template.Config>;

    namespace template {
        interface Config {
            template?: string;
            params?: {
                [name: string]: any;
            };
        }
    }

    export = template;
}

declare module "rest/interceptor/timeout" {
    import rest = require("rest");

    var timeout: rest.Interceptor<timeout.Config>;

    namespace timeout {
        interface Config {
            timeout?: number;
            transient?: boolean;
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
                param?: string;
                prefix?: string;
                name?: string;
            }
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
