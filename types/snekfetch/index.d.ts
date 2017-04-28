// Type definitions for snekfetch v3.1.5
// Project: https://github.com/GusCaplan/snekfetch
// Definitions by: Iker Pérez Brunelli <https://github.com/DarkerTV>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ClientRequest, METHODS } from 'http';
import { Readable } from 'stream';

declare namespace snekfetch {
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

    class Snekfetch extends Readable {
        static METHODS: methods[];
        static version: string;

        public data: any;
        public request: ClientRequest;
        public readonly response: Result | null;

        constructor(method: methods, url: string, opts?: SnekfetchOptions);

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

        public query(name: string, value: string): Snekfetch;

        public set(name: string | { [key: string]: string | string[] }, value?: string | string[]): Snekfetch;

        public attach(name: string, data: string | Object | Buffer, filename?: string): Snekfetch;

        public send(data?: any): Snekfetch;

        public then(): Promise<Result>;
        public then<T>(resolver: (res: Result) => T, rejector?: (err: Error) => any): Promise<T>;

        public catch(rejector: (err: Error) => any): Promise<Result>;

        public end(): Promise<Result>;
        public end<T>(cb: (err: Error | null, res: Result | Error | null) => T): Promise<T>;
    }
}

declare const sf: typeof snekfetch.Snekfetch;

export = sf;
