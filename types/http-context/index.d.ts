/// <reference types="node" />

import accepts = require("accepts");
import http = require("http");

export = HttpContext;

declare function HttpContext(): HttpContext.Context;

declare namespace HttpContext {
    interface RequestJSON {
        method: string;
        url: string;
        header: http.IncomingHttpHeaders;
    }

    interface RequestDelegate {
        header: http.IncomingHttpHeaders;
        headers: http.IncomingHttpHeaders;
        url: string;
        href: string;
        method: string;
        path: string;
        query: { [param: string]: string | string[] };
        querystring: string;
        search: string;
        host: string;
        hostname: string;
        fresh: boolean;
        idempotent: boolean;
        protocol: string;
        secure: boolean;
        subdomains: string[];
        accepts(types: string[]): string[] | string | false;
        accepts(...types: string[]): string[] | string | false;
        acceptsCharsets(charsets: string[]): string | false;
        acceptsCharsets(...charsets: string[]): string | false;
        acceptsEncodings(encodings: string[]): string | false;
        acceptsEncodings(...encodings: string[]): string | false;
        acceptsLanguages(languages: string[]): string | false;
        acceptsLanguages(...languages: string[]): string | false;
        is(types: string[]): string | false;
        is(...types: string[]): string | false;
        get(field: string): string;
    }

    interface Request extends RequestDelegate {
        request: http.IncomingMessage;
        charset: string;
        length: number;
        type: string;
        accept: accepts.Accepts;
        inspect(): RequestJSON;
        toJSON(): RequestJSON;
    }

    interface ResponseJSON {
        status: number;
        message: string;
        header: http.OutgoingHttpHeaders;
    }

    interface ResponseDelegate {
        status: number;
        message: string;
        body: any;
        length: number;
        headerSent: boolean;
        type: string;
        lastModified: string | Date;
        etag: string;
        writable: boolean;
        vary(field: string): void;
        redirect(url: string, alt: string): void;
        attachment(filename: string): void;
        set(field: string, val: string): void;
        append(field: string, val: string[]): void;
        append(field: string, ...val: string[]): void;
        remove(field: string): void;
    }

    interface Response extends ResponseDelegate {
        response: http.OutgoingMessage;
        header: http.OutgoingHttpHeaders;
        is(types: string[]): string | false;
        is(...types: string[]): string | false;
        get(field: string): string;
        inspect(): ResponseJSON;
        toJSON(): ResponseJSON;
    }

    interface Context extends RequestDelegate, ResponseDelegate {
        request: Request;
        response: Response;
    }
}
