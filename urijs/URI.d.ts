// Type definitions for URI.js
// Project: https://github.com/medialize/URI.js
// Definitions by: RodneyJT <https://github.com/RodneyJT>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface URIOptions {
    protocol?: string;
    username?: string;
    password?: string;
    hostname?: string;
    port?: string;
    path?: string;
    query?: string;
    fragment?: string;
}

declare class URI {
    constructor();
    constructor(uri: string);
    constructor(options: URIOptions);
    clone(): URI;
    href(): string;
    href(url: string): void;
    valueOf(): string;
    scheme(): string;
    protocol(): string;
    scheme(protocol: string): URI;
    protocol(protocol: string): URI;
    username(): string;
    username(uname: string): URI;
    password(): string;
    password(pw: string): URI;
    port(): string;
    port(port: string): URI;
    hostname(): string;
    hostname(hostname: string): URI;
    host(): string;
    host(host: string): URI;
    userinfo(): string;
    userinfo(userinfo: string): URI;
    authority(): string;
    authority(authority: string): URI;
    domain(): string;
    domain(domain: boolean): string;
    domain(domain: string): URI;
    subdomain(): string;
    subdomain(subdomain: string): URI;
    tld(): string;
    tld(tld: boolean): string;
    tld(tld: string): URI;
    path(): string;
    path(path: boolean): string;
    path(path: string): URI;
    pathname(): string;
    pathname(path: boolean): string;
    pathname(path: string): URI;
    directory(): string;
    directory(dir: boolean): string;
    directory(dir: string): URI;
    filename(): string;
    filename(file: boolean): string;
    filename(file: string): URI;
    suffix(): string;
    suffix(suffix: boolean): string;
    suffix(suffix: string): URI;
    segment(): string[];
    segment(segments: string[]): string;
    segment(position: number): string;
    segment(position: number, level: string): string;
    segment(level: string): string;
    search(): string;
    search(qry: string): URI;
    search(qry: boolean): Object;
    search(qry: Object): URI;
    query(): string;
    query(qry: string): URI;
    query(qry: boolean): Object;
    query(qry: Object): URI;
    hash(): string;
    hash(hash: string): URI;
    fragment(): string;
    fragment(fragment: string): URI;
    resource(): string;
    resource(resource: string): URI;
    is(qry: string): boolean;
    addSearch(qry: string): URI;
    addSearch(qry: Object): URI;
    addQuery(qry: string): URI;
    addQuery(qry: Object): URI;
    removeSearch(qry: string): URI;
    removeSearch(qry: Object): URI;
    removeQuery(qry: string): URI;
    removeQuery(qry: Object): URI;
    addFragment(fragment: string): URI;
    //fragmentPrefix: string;
    fragmentPrefix(prefix: string);
    normalize(): URI;
    normalizeProtocol(): URI;
    normalizeHostname(): URI;
    normalizePort(): URI;
    normalizePathname(): URI;
    normalizePath(): URI;
    normalizeSearch(): URI;
    normalizeQuery(): URI;
    normalizeHash(): URI;
    normalizeFragment(): URI;
    iso8859(): URI;
    unicode(): URI;
    readable(): string;
    relativeTo(path: string): URI;
    absoluteTo(path: string): URI;
    equals(): boolean;
    equals(url: string): boolean;
    static parse(url: string): {
        protocol: string;
        username: string;
        password: string;
        hostname: string;
        port: string;
        path: string;
        query: string;
        fragment: string;
    };
    static parseAuthority(url: string, parts: {
        username?: string;
        password?: string;
        hostname?: string;
        port?: string;
    }): string;
    static parseUserinfo(url: string, parts: {
        username?: string;
        password?: string;
    }): string;
    static parseHost(url: string, parts: {
        hostname?: string;
        port?: string;
    }): string;
    static parseQuery(url: string): Object;
    static build(parts: {
        protocol: string;
        username: string;
        password: string;
        hostname: string;
        port: string;
        path: string;
        query: string;
        fragment: string;
    }): string;
    static buildAuthority(parts: {
        username?: string;
        password?: string;
        hostname?: string;
        port?: string;
    }): string;
    static buildUserinfo(parts: {
        username?: string;
        password?: string;
    }): string;
    static buildHost(parts: {
        hostname?: string;
        port?: string;
    }): string;
    static buildQuery(qry: Object): string;
    static buildQuery(qry: Object, duplicates: boolean): string;
    static encode(str: string): string;
    static decode(str: string): string;
    static encodeReserved(str: string): string;
    static encodeQuery(qry: string): string;
    static decodeQuery(qry: string): string;
    static addQuery(data: Object, prop: string, value: string): Object;
    static addQuery(data: Object, qryObj: Object): Object;
    static removeQuery(data: Object, prop: string, value: string): Object;
    static removeQuery(data: Object, props: string[]): Object;
    static removeQuery(data: Object, props: Object): Object;
    static commonPath(path1: string, path2: string): string;
    static withinString(source: string, func: (url: string) => string): string;
    static iso8859(): void;
    static unicode(): void;
    static expand(template: string, vals: Object): URI;
}

interface JQuery {
    uri(): URI;
}
