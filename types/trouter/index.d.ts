// Type definitions for trouter 3.0
// Project: https://github.com/lukeed/trouter
// Definitions by: Markus Lanz <https://github.com/stahlstift>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface FindResult<T> {
    params: { [k: string]: string; };
    handlers: T[];
}

export type HTTPMethod =
    | 'ACL'
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
    | 'SOURCE'
    | 'SUBSCRIBE'
    | 'TRACE'
    | 'UNBIND'
    | 'UNLINK'
    | 'UNLOCK'
    | 'UNSUBSCRIBE';

export type FindReturn<T> = FindResult<T> | false;

declare class Trouter<T = any> {
    use(pattern: string, ...handlers: T[]): this;

    find(method: HTTPMethod, url: string): FindReturn<T>;

    add(method: HTTPMethod, pattern: string, ...handlers: T[]): this;

    all(pattern: string, ...handlers: T[]): this;

    get(pattern: string, ...handlers: T[]): this;

    head(pattern: string, ...handlers: T[]): this;

    patch(pattern: string, ...handlers: T[]): this;

    options(pattern: string, ...handlers: T[]): this;

    connect(pattern: string, ...handlers: T[]): this;

    delete(pattern: string, ...handlers: T[]): this;

    trace(pattern: string, ...handlers: T[]): this;

    post(pattern: string, ...handlers: T[]): this;

    put(pattern: string, ...handlers: T[]): this;
}

export default Trouter;
