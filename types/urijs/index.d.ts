// urijs uses DOM dependencies which are absent in browserless envoronment like node.js.
// to avoid compiler errors this monkey patch is used. See more details in:
// - sinon: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11351
// - rxjs: https://github.com/ReactiveX/rxjs/issues/1986
/// <reference path="./dom-monkeypatch.d.ts" />

// Compatability with node.js
// tslint:disable-next-line:no-empty-interface
interface HTMLElement {}

export = URI;
export as namespace URI;

declare const URI: {
    (value?: string | URI.URIOptions | HTMLElement, base?: string | URI): URI;

    new(value?: string | URI.URIOptions | HTMLElement, base?: string | URI): URI;

    addQuery(data: URI.QueryDataMap, prop: string, value: string): object;
    addQuery(data: URI.QueryDataMap, qryObj: object): object;

    build(parts: URI.URIOptions): string;
    buildAuthority(
        parts: {
            username?: string | undefined;
            password?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
        },
    ): string;
    buildHost(parts: { hostname?: string | undefined; port?: string | undefined }): string;
    buildQuery(data: URI.QueryDataMap, duplicateQueryParameters?: boolean, escapeQuerySpace?: boolean): string;
    buildUserinfo(parts: { username?: string | undefined; password?: string | undefined }): string;

    commonPath(path1: string, path2: string): string;

    decode(str: string): string;
    decodeQuery(qry: string): string;

    duplicateQueryParameters: boolean;

    encode(str: string): string;
    encodeQuery(qry: string): string;
    encodeReserved(str: string): string;

    escapeQuerySpace: boolean;

    /**
     * @description Wrapper for `URITemplate#expand`. Only present after
     *              importing `urijs/src/URITemplate` explicitly.
     */
    expand?: ((template: string, vals: object) => string) | undefined;

    iso8859(): void;

    joinPaths(...paths: Array<string | URI>): URI;

    parse(url: string): URI.Parts;
    parseAuthority(
        url: string,
        parts: {
            username?: string | undefined;
            password?: string | undefined;
            hostname?: string | undefined;
            port?: string | undefined;
        },
    ): string;
    parseHost(
        url: string,
        parts: {
            hostname?: string | undefined;
            port?: string | undefined;
        },
    ): string;
    parseQuery(url: string): URI.QueryDataMap;
    parseUserinfo(
        url: string,
        parts: {
            username?: string | undefined;
            password?: string | undefined;
        },
    ): string;

    preventInvalidHostname: boolean;

    removeQuery(data: object, prop: string, value: string): object;
    removeQuery(data: object, props: string[] | object): object;

    unicode(): void;

    withinString(source: string, func: (url: string, start: number, end: number, source: string) => string): string;
};

declare namespace URI {
    interface URIOptions {
        protocol?: string | undefined;
        username?: string | undefined;
        password?: string | undefined;
        hostname?: string | undefined;
        port?: string | undefined;
        path?: string | undefined;
        query?: string | undefined;
        fragment?: string | undefined;
        urn?: boolean | undefined;
    }

    interface Parts extends URIOptions {
        duplicateQueryParameters: boolean;
        escapeQuerySpace: boolean;
        preventInvalidHostname: boolean;
    }

    type QueryDataMap = Partial<Record<string, any>>;

    interface ReadonlyURI {
        clone(): URI;

        authority(): string;
        directory(dir?: boolean): string;
        domain(domain?: boolean): string;
        filename(file?: boolean): string;
        fragment(): string;
        hash(): string;
        host(): string;
        hostname(): string;
        href(): string;
        origin(): string;
        password(): string;
        path(path?: boolean): string;
        pathname(path?: boolean): string;
        port(): string;
        protocol(): string;
        query(): string;
        query(v: boolean): QueryDataMap;
        readable(): string;
        resource(): string;
        scheme(): string;
        search(): string;
        search(v: boolean): QueryDataMap;
        segment(): string[];
        segment(position: number): string | undefined;
        segmentCoded(): string[];
        segmentCoded(position: number): string;
        subdomain(): string;
        suffix(suffix?: boolean): string;
        tld(tld?: boolean): string;
        userinfo(): string;
        username(): string;
        valueOf(): string;

        equals(url?: string | ReadonlyURI | URI): boolean;
        is(
            qry:
                | "relative"
                | "absolute"
                | "urn"
                | "url"
                | "domain"
                | "name"
                | "sld"
                | "idn"
                | "punycode"
                | "ip"
                | "ip4"
                | "ipv4"
                | "inet4"
                | "ip6"
                | "ipv6"
                | "inet6",
        ): boolean;

        hasQuery(
            name: /*string | */ any,
            value?: string | number | boolean | string[] | number[] | boolean[] | RegExp | ((...args: any[]) => any),
            withinArray?: boolean,
        ): boolean;
        hasSearch(
            name: /*string | */ any,
            value?: string | number | boolean | string[] | number[] | boolean[] | RegExp | ((...args: any[]) => any),
            withinArray?: boolean,
        ): boolean;
    }
}

interface URI {
    absoluteTo(path: string | URI): URI;
    addFragment(fragment: string): URI;
    addQuery(qry: string | URI.QueryDataMap): URI;
    addQuery(qry: string, value: any): URI;
    addSearch(qry: string | URI.QueryDataMap): URI;
    addSearch(key: string, value: any): URI;
    authority(): string;
    authority(authority: string): URI;

    clone(): URI;

    directory(dir?: boolean): string;
    directory(dir: string): URI;
    domain(domain?: boolean): string;
    domain(domain: string): URI;

    duplicateQueryParameters(val: boolean): URI;

    equals(url?: string | URI): boolean;

    escapeQuerySpace(val: boolean): URI;

    filename(file?: boolean): string;
    filename(file: string): URI;
    fragment(): string;
    fragment(fragment: string): URI;
    fragmentPrefix(prefix: string): URI;

    hash(): string;
    hash(hash: string): URI;
    host(): string;
    host(host: string): URI;
    hostname(): string;
    hostname(hostname: string): URI;
    href(): string;
    href(url: string): void;

    is(
        qry:
            | "relative"
            | "absolute"
            | "urn"
            | "url"
            | "domain"
            | "name"
            | "sld"
            | "idn"
            | "punycode"
            | "ip"
            | "ip4"
            | "ipv4"
            | "inet4"
            | "ip6"
            | "ipv6"
            | "inet6",
    ): boolean;
    iso8859(): URI;

    normalize(): URI;
    normalizeFragment(): URI;
    normalizeHash(): URI;
    normalizeHostname(): URI;
    normalizePath(): URI;
    normalizePathname(): URI;
    normalizePort(): URI;
    normalizeProtocol(): URI;
    normalizeQuery(): URI;
    normalizeSearch(): URI;

    origin(): string;
    origin(uri: string | URI): URI;

    password(): string;
    password(pw: string): URI;
    path(path?: boolean): string;
    path(path: string): URI;
    pathname(path?: boolean): string;
    pathname(path: string): URI;
    port(): string;
    port(port: string): URI;
    protocol(): string;
    protocol(protocol: string): URI;

    preventInvalidHostname(val: boolean): URI;

    query(): string;
    // tslint:disable-next-line void-return
    query(qry: string | URI.QueryDataMap | ((qryObject: URI.QueryDataMap) => URI.QueryDataMap | void)): URI;
    query(v: boolean): URI.QueryDataMap;

    readable(): string;
    relativeTo(path: string): URI;
    removeQuery(qry: string | URI.QueryDataMap): URI;
    removeQuery(name: string, value: string): URI;
    removeSearch(qry: string | URI.QueryDataMap): URI;
    removeSearch(name: string, value: string): URI;
    resource(): string;
    resource(resource: string): URI;

    scheme(): string;
    scheme(protocol: string): URI;
    search(): string;
    // tslint:disable-next-line void-return
    search(qry: string | URI.QueryDataMap | ((qryObject: URI.QueryDataMap) => URI.QueryDataMap | void)): URI;
    search(v: boolean): URI.QueryDataMap;
    segment(): string[];
    segment(segments: string[] | string): URI;
    segment(position: number): string | undefined;
    segment(position: number, level: string): URI;
    segmentCoded(): string[];
    segmentCoded(segments: string[] | string): URI;
    segmentCoded(position: number): string;
    segmentCoded(position: number, level: string): URI;
    setQuery(key: string, value: any): URI;
    setQuery(qry: URI.QueryDataMap): URI;
    setSearch(key: string, value: any): URI;
    setSearch(qry: URI.QueryDataMap): URI;
    hasQuery(
        name: /*string | */ any,
        value?: string | number | boolean | string[] | number[] | boolean[] | RegExp | ((...args: any[]) => any),
        withinArray?: boolean,
    ): boolean;
    hasSearch(
        name: /*string | */ any,
        value?: string | number | boolean | string[] | number[] | boolean[] | RegExp | ((...args: any[]) => any),
        withinArray?: boolean,
    ): boolean;
    subdomain(): string;
    subdomain(subdomain: string): URI;
    suffix(suffix?: boolean): string;
    suffix(suffix: string): URI;

    tld(tld?: boolean): string;
    tld(tld: string): URI;

    unicode(): URI;
    userinfo(): string;
    userinfo(userinfo: string): URI;
    username(): string;
    username(uname: string): URI;

    valueOf(): string;
}

declare global {
    interface JQuery {
        uri(): URI;
    }
}

declare module "URI" {
    export = URI;
}
