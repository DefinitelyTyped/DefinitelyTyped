// Type definitions for Koa 2.x
// Project: http://koajs.com
// Definitions by: DavidCai1993 <https://github.com/DavidCai1993>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import * as Koa from "koa"
    const app = new Koa()

    async function (ctx: Koa.Context, next: Function) {
      // ...
    }

 =============================================== */
/// <reference types="node" />
import { EventEmitter } from "events";
import * as cookies from "cookies";
import * as http from "http";
import * as net from "net";


export = Koa;

declare namespace Koa {
    export interface Context extends Request, Response {
        app: Koa;
        req: http.IncomingMessage;
        res: http.ServerResponse;
        request: Request;
        response: Response;

        cookies: cookies.ICookies;
        originalUrl: string;
        state: any;

        name?: string;
        respond?: boolean;

        assert(test: any, ...args: any[]): void;
        onerror(err?: any): void;
        throw(...args: any[]): void;

        toJSON(): any;
        inspect(): any;

        [key: string]: any;
    }

    export interface Request {
        app: Koa;
        req: http.IncomingMessage;
        res: http.ServerResponse;
        ctx: Context;
        response: Response;

        fresh: boolean;
        header: any;
        headers: any;
        host: string;
        hostname: string;
        href: string;
        idempotent: boolean;
        ip: string;
        ips: string[];
        method: string;
        origin: string;
        originalUrl: string;
        path: string;
        protocol: string;
        query: any;
        querystring: string;
        search: string;
        secure: boolean;
        socket: net.Socket;
        stale: boolean;
        subdomains: string[];
        type: string;
        url: string;

        charset?: string;
        length?: number;

        accepts(): string[];
        accepts(arg: string): void | string;
        accepts(arg: string[]): void | string;
        accepts(...args: string[]): void | string;
        acceptsCharsets(): string[];
        acceptsCharsets(arg: string): void | string;
        acceptsCharsets(arg: string[]): void | string;
        acceptsCharsets(...args: string[]): void | string;
        acceptsEncodings(): string[];
        acceptsEncodings(arg: string): void | string;
        acceptsEncodings(arg: string[]): void | string;
        acceptsEncodings(...args: string[]): void | string;
        acceptsLanguages(): string[];
        acceptsLanguages(arg: string): void | string;
        acceptsLanguages(arg: string[]): void | string;
        acceptsLanguages(...args: string[]): void | string;
        get(field: string): string;
        is(): string[];
        is(arg: string): void | string;
        is(arg: string[]): void | string;
        is(...args: string[]): void | string;

        toJSON(): any;
        inspect(): any;
    }

    export interface Response {
        app: Koa;
        req: http.IncomingMessage;
        res: http.ServerResponse;
        ctx: Context;
        request: Request;

        body: any;
        etag: string;
        header: any;
        headers: any;
        headerSent: boolean;
        lastModified: Date;
        message: string;
        socket: net.Socket;
        status: number;
        type: string;
        writable: boolean;

        charset?: string;
        length?: number;

        append(field: string, val: string | string[]): void;
        attachment(filename?: string): void;
        get(field: string): string;
        is(): string[];
        is(arg: string): void | string;
        is(arg: string[]): void | string;
        is(...args: string[]): void | string;
        redirect(url: string, alt?: string): void;
        remove(field: string): void;
        set(field: string, val: string | string[]): void;
        set(field: any): void;
        vary(field: string): void;

        toJSON(): any;
        inspect(): any;
    }

    export type Middleware = (ctx: Koa.Context, next: () => Promise<any>) => any;
}

declare class Koa extends EventEmitter {
    subdomainOffset: number;
    server: http.Server;
    env: string;
    context: Koa.Context;
    keys: string[];
    proxy: boolean;
    request: Koa.Request;
    response: Koa.Response;
    silent: boolean;

    constructor();

    // From node.d.ts
    listen(): http.Server;
    listen(port: number, hostname?: string, backlog?: number, listeningListener?: Function): http.Server;
    listen(port: number, hostname?: string, listeningListener?: Function): http.Server;
    listen(port: number, backlog?: number, listeningListener?: Function): http.Server;
    listen(port: number, listeningListener?: Function): http.Server;
    listen(path: string, backlog?: number, listeningListener?: Function): http.Server;
    listen(path: string, listeningListener?: Function): http.Server;
    listen(handle: any, backlog?: number, listeningListener?: Function): http.Server;
    listen(handle: any, listeningListener?: Function): http.Server;
    listen(options: net.ListenOptions, listeningListener?: Function): http.Server;

    callback(): (req: http.IncomingMessage, res: http.ServerResponse) => void;
    onerror(err: any): void;
    use(middleware: Koa.Middleware): Koa;

    toJSON(): any;
    inspect(): any;
    onerror(err: any): void;
}

