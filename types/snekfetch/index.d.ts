// Type definitions for snekfetch 3.6
// Project: https://github.com/GusCaplan/snekfetch
// Definitions by: Iker Pérez Brunelli <https://github.com/DarkerTV>
//                 Shayne Hartford <https://github.com/ShayBox>
//                 Yukine <https://github.com/Dev-Yukine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import { ClientRequest } from 'http';
import { Readable } from 'stream';

declare namespace Snekfetch {
    interface SnekfetchOptions {
        headers?: { [key: string]: any };
        data?: any;
    }

    interface Result {
        request: ClientRequest;
        body: Buffer;
        text: string;
        ok: boolean;
        headers: { [key: string]: any };
        status: number;
        statusText: string;
    }

    type methods = 'ACL'
        | 'BIND'
        | 'CHECKOUT'
        | 'CONNECT'
        | 'COPY'
        | 'DELETE'
        | 'GET'
        | 'HEAD'
        | 'LINK'
        | 'LOCK'
        | 'M-SEARCH'
        | 'MERGE'
        | 'MKACTIVITY'
        | 'MKCALENDAR'
        | 'MKCOL'
        | 'MOVE'
        | 'NOTIFY'
        | 'OPTIONS'
        | 'PATCH'
        | 'POST'
        | 'PROPFIND'
        | 'PROPPATCH'
        | 'PURGE'
        | 'PUT'
        | 'REBIND'
        | 'REPORT'
        | 'SEARCH'
        | 'SUBSCRIBE'
        | 'TRACE'
        | 'UNBIND'
        | 'UNLINK'
        | 'UNLOCK'
        | 'UNSUBSCRIBE'
        | 'BREW';
}

declare class Snekfetch extends Readable {
    static METHODS: Snekfetch.methods[];
    static version: string;

    data: any;
    request: ClientRequest;
    readonly response: Snekfetch.Result | null;

    constructor(method: Snekfetch.methods, url: string, opts?: Snekfetch.SnekfetchOptions);

    static acl(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static bind(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static checkout(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static connect(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static copy(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static delete(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static get(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static head(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static link(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static lock(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static msearch(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static merge(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static mkactivity(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static mkcalendar(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static mkcol(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static move(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static notify(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static options(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static patch(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static post(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static propfind(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static proppatch(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static purge(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static put(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static rebind(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static report(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static search(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static subscribe(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static trace(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static unbind(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static unlink(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static unlock(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static unsubscribe(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;
    static brew(url: string, opts?: Snekfetch.SnekfetchOptions): Snekfetch;

    query(name: string | { [key: string]: string | string[] }, value?: string): Snekfetch;

    set(name: string | { [key: string]: string | string[] }, value?: string | string[]): Snekfetch;

    attach(name: string, data: string | object | Buffer, filename?: string): Snekfetch;

    send(data?: string|Buffer|object): Snekfetch;

    then(): Promise<Snekfetch.Result>;
    then<T>(resolver: (res: Snekfetch.Result) => T, rejector?: (err: Error) => any): Promise<T>;

    catch(rejector: (err: Error) => any): Promise<Snekfetch.Result>;

    end(): Promise<Snekfetch.Result>;
    end<T>(cb: (err: Error | null, res: Snekfetch.Result | Error | null) => T): Promise<T>;
}

export = Snekfetch;
