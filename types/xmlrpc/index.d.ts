import { EventEmitter } from "events";
import { Server as HttpServer } from "http";
import { Server as HttpsServer } from "https";
import { TlsOptions } from "tls";

interface ClientOptions {
    host?: string | undefined;
    path?: string | undefined;
    port?: number | undefined;
    url?: string | undefined;
    cookies?: boolean | undefined;
    headers?: { [header: string]: string } | undefined;
    basic_auth?: { user: string; pass: string } | undefined;
    method?: string | undefined;
}

interface ServerOptions {
    host?: string | undefined;
    path?: string | undefined;
    port?: number | undefined;
}

interface DateFormatterOptions {
    colons?: boolean | undefined;
    hyphens?: boolean | undefined;
    local?: boolean | undefined;
    ms?: boolean | undefined;
    offset?: boolean | undefined;
}

declare class Cookies {
    get(name: string): string;
    set(name: string, value: string, options?: { secure: boolean; expires: Date }): void;
    toString(): string;
}

export function createClient(options: string | ClientOptions): Client;
export function createSecureClient(options: string | ClientOptions): Client;

export function createServer(options: string | ServerOptions, callback?: () => void): Server;
export function createSecureServer(options: string | TlsOptions, callback?: () => void): Server;

export interface Client {
    options: ClientOptions;
    isSecure: boolean;
    headersProcessors: { processors: HeadersProcessor[] };
    cookies?: Cookies | undefined;

    methodCall(method: string, params: any[], callback: (error: Object, value: any) => void): void;

    getCookie(name: string): string;
    setCookie(name: string, value: string): this;
}

export type ServerFunction = (error: any, params: any, callback: (error: any, value: any) => void) => void;
export type ServerNotFoundFunction = (methodName: string, params: any[]) => void;

export interface Server extends EventEmitter {
    httpServer: HttpServer | HttpsServer;

    on(eventName: "NotFound", callback: ServerNotFoundFunction): this;
    on(eventName: string, callback: ServerFunction): this;
}

export type Headers = { [header: string]: string };

export interface HeadersProcessor {
    composeRequest(headers: Headers): void;
    parseResponse(headers: Headers): void;
}

export var dateFormatter: {
    setOpts(opts: DateFormatterOptions): void;

    decodeIso8601(time: string): Date;
    encodeIso8601(date: Date): string;
};

export class CustomType {
    tagName: string;
    raw: string;
    constructor(raw: string);
    serialize(xml: any): any; // XMLElementOrXMLNode declared by xmlbuilder
}
