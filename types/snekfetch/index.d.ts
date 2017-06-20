// Type definitions for snekfetch 3.1
// Project: https://github.com/GusCaplan/snekfetch
// Definitions by: Iker Pérez Brunelli <https://github.com/DarkerTV>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

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

    static acl(url: string): Snekfetch;
    static bind(url: string): Snekfetch;
    static checkout(url: string): Snekfetch;
    static connect(url: string): Snekfetch;
    static copy(url: string): Snekfetch;
    static delete(url: string): Snekfetch;
    static get(url: string): Snekfetch;
    static head(url: string): Snekfetch;
    static link(url: string): Snekfetch;
    static lock(url: string): Snekfetch;
    static msearch(url: string): Snekfetch;
    static merge(url: string): Snekfetch;
    static mkactivity(url: string): Snekfetch;
    static mkcalendar(url: string): Snekfetch;
    static mkcol(url: string): Snekfetch;
    static move(url: string): Snekfetch;
    static notify(url: string): Snekfetch;
    static options(url: string): Snekfetch;
    static patch(url: string): Snekfetch;
    static post(url: string): Snekfetch;
    static propfind(url: string): Snekfetch;
    static proppatch(url: string): Snekfetch;
    static purge(url: string): Snekfetch;
    static put(url: string): Snekfetch;
    static rebind(url: string): Snekfetch;
    static report(url: string): Snekfetch;
    static search(url: string): Snekfetch;
    static subscribe(url: string): Snekfetch;
    static trace(url: string): Snekfetch;
    static unbind(url: string): Snekfetch;
    static unlink(url: string): Snekfetch;
    static unlock(url: string): Snekfetch;
    static unsubscribe(url: string): Snekfetch;
    static brew(url: string): Snekfetch;

    query(name: string, value: string): Snekfetch;

    set(name: string | { [key: string]: string | string[] }, value?: string | string[]): Snekfetch;

    attach(name: string, data: string | object | Buffer, filename?: string): Snekfetch;

    send(data?: any): Snekfetch;

    then(): Promise<Snekfetch.Result>;
    then<T>(resolver: (res: Snekfetch.Result) => T, rejector?: (err: Error) => any): Promise<T>;

    catch(rejector: (err: Error) => any): Promise<Snekfetch.Result>;

    end(): Promise<Snekfetch.Result>;
    end<T>(cb: (err: Error | null, res: Snekfetch.Result | Error | null) => T): Promise<T>;
}

export = Snekfetch;
