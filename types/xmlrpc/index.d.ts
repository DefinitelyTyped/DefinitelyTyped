// Type definitions for xmlrpc 1.3.2
// Project: https://github.com/baalexander/node-xmlrpc
// Definitions by: Andrew Short <http://ajshort.me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'xmlrpc' {
    import { EventEmitter } from 'events';
    import { Server as HttpServer } from 'http';
    import { Server as HttpsServer } from 'https';
    import { TlsOptions } from 'tls';

    interface ClientOptions {
        host?: string;
        path?: string;
        port?: number;
        url?: string;
        cookies?: boolean;
        headers?: { [header: string]: string };
        basic_auth?: { user: string, pass: string };
        method?: string;
    }

    interface ServerOptions {
        host?: string;
        path?: string;
        port?: number;
    }

    interface DateFormatterOptions {
        colons?: boolean;
        hyphens?: boolean;
        local?: boolean;
        ms?: boolean;
        offset?: boolean;
    }

    class Cookies {
        get(name: string): string;
        set(name: string, value: string, options?: { secure: boolean, expires: Date }): void;
        toString(): string;
    }

    namespace xmlrpc {
        function createClient(options: string | ClientOptions): Client;
        function createSecureClient(options: string | ClientOptions): Client;

        function createServer(options: string | ServerOptions, callback?: () => void): Server;
        function createSecureServer(options: string | TlsOptions, callback?: () => void): Server;

        interface Client {
            options: ClientOptions;
            isSecure: boolean;
            headersProcessors: { processors: HeadersProcessor[] };
            cookies?: Cookies;

            methodCall(method: string, params: any[], callback: (error: Object, value: any) => void): void;

            getCookie(name: string): string;
            setCookie(name: string, value: string): this;
        }

        type ServerFunction = (error: any, params: any, callback: (error: any, value: any) => void) => void;
        type ServerNotFoundFunction = (methodName: string, params: any[]) => void;

        interface Server extends EventEmitter {
            httpServer: HttpServer | HttpsServer;

            on(eventName: 'NotFound', callback: ServerNotFoundFunction): this;
            on(eventName: string, callback: ServerFunction): this;
        }

        type Headers = { [header: string]: string };

        interface HeadersProcessor {
            composeRequest(headers: Headers): void;
            parseResponse(headers: Headers): void;
        }

        export var dateFormatter: {
            setOpts(opts: DateFormatterOptions): void;

            decodeIso8601(time: string): Date;
            encodeIso8601(date: Date): string;
        }

        export class CustomType {
            tagName: string;
            raw: string;
            constructor(raw: string);
            serialize(xml: any): any; // XMLElementOrXMLNode declared by xmlbuilder
        }
    }

    export = xmlrpc;
}
