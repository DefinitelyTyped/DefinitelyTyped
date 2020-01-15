// Type definitions for URI.js 1.19
// Project: http://medialize.github.io/URI.js
// Definitions by: RodneyJT <https://github.com/RodneyJT>
//                 Brian Surowiec <https://github.com/xt0rted>
//                 Pete Johanson <https://github.com/petejohanson>
//                 Zhibin Liu <https://github.com/ljqx>
//                 TeamworkGuy2 <https://github.com/teamworkguy2>
//                 Akuukis <https://github.com/Akuukis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// urijs uses DOM dependencies which are absent in browserless envoronment like node.js.
// to avoid compiler errors this monkey patch is used. See more details in:
// - sinon: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11351
// - rxjs: https://github.com/ReactiveX/rxjs/issues/1986
/// <reference path="./dom-monkeypatch.d.ts" />

// Compatability with node.js
// tslint:disable-next-line:no-empty-interface
interface HTMLElement { }

declare namespace uri {
    interface URI {
        absoluteTo(path: string | URI): URI;
        addFragment(fragment: string): URI;
        addQuery(qry: string | object): URI;
        // tslint:disable-next-line:unified-signatures
        addQuery(qry: string, value: any): URI;
        addSearch(qry: string | object): URI;
        // tslint:disable-next-line:unified-signatures
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

        is(qry:
            'relative' |
            'absolute' |
            'urn' |
            'url' |
            'domain' |
            'name' |
            'sld' |
            'idn' |
            'punycode' |
            'ip' |
            'ip4' |
            'ipv4' |
            'inet4' |
            'ip6' |
            'ipv6' |
            'inet6'
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

        query(): string;
        query(qry: string | object): URI;
        query(qry: boolean): object;

        readable(): string;
        relativeTo(path: string): URI;
        removeQuery(qry: string | object): URI;
        // tslint:disable-next-line:unified-signatures
        removeQuery(name: string, value: string): URI;
        removeSearch(qry: string | object): URI;
        // tslint:disable-next-line:unified-signatures
        removeSearch(name: string, value: string): URI;
        resource(): string;
        resource(resource: string): URI;

        scheme(): string;
        scheme(protocol: string): URI;
        search(): string;
        search(qry: string | object): URI;
        search(qry: boolean): any;
        segment(): string[];
        segment(segments: string[] | string): URI;
        segment(position: number): string | undefined;
        segment(position: number, level: string): URI;
        segmentCoded(): string[];
        segmentCoded(segments: string[] | string): URI;
        segmentCoded(position: number): string;
        segmentCoded(position: number, level: string): URI;
        setQuery(key: string, value: string): URI;
        setQuery(qry: object): URI;
        setSearch(key: string, value: string): URI;
        setSearch(qry: object): URI;
        hasQuery(name: /*string | */any, value?: string | number | boolean | string[] | number[] | boolean[] | RegExp | ((...args: any[]) => any), withinArray?: boolean): boolean;
        hasSearch(name: /*string | */any, value?: string | number | boolean | string[] | number[] | boolean[] | RegExp | ((...args: any[]) => any), withinArray?: boolean): boolean;
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

    interface URIOptions {
        protocol?: string;
        username?: string;
        password?: string;
        hostname?: string;
        port?: string;
        path?: string;
        query?: string;
        fragment?: string;
        urn?: boolean;
    }

    interface Parts extends URIOptions {
        preventInvalidHostname: boolean;
    }

    interface URIStatic {
        (value?: string | URIOptions | HTMLElement): URI;

        new (value?: string | URIOptions | HTMLElement): URI;

        addQuery(data: object, prop: string, value: string): object;
        addQuery(data: object, qryObj: object): object;

        build(parts: URIOptions): string;
        buildAuthority(parts: {
            username?: string;
            password?: string;
            hostname?: string;
            port?: string;
        }): string;
        buildHost(parts: {
            hostname?: string;
            port?: string;
        }): string;
        buildQuery(qry: object, duplicates?: boolean): string;
        buildUserinfo(parts: {
            username?: string;
            password?: string;
        }): string;

        commonPath(path1: string, path2: string): string;

        decode(str: string): string;
        decodeQuery(qry: string): string;

        encode(str: string): string;
        encodeQuery(qry: string): string;
        encodeReserved(str: string): string;

        /**
         * @description Wrapper for `URITemplate#expand`. Only present after
         *              importing `urijs/src/URITemplate` explicitly.
         */
        expand?: (template: string, vals: object) => URI;

        iso8859(): void;

        joinPaths(...paths: Array<string | URI>): URI;

        parse(url: string): Parts;
        parseAuthority(url: string, parts: {
            username?: string;
            password?: string;
            hostname?: string;
            port?: string;
        }): string;
        parseHost(url: string, parts: {
            hostname?: string;
            port?: string;
        }): string;
        parseQuery(url: string): object;
        parseUserinfo(url: string, parts: {
            username?: string;
            password?: string;
        }): string;

        preventInvalidHostname: boolean;

        removeQuery(data: object, prop: string, value: string): object;
        removeQuery(data: object, props: string[] | object): object;

        unicode(): void;

        withinString(source: string, func: (url: string) => string): string;
    }

    type URITemplateValue = string | ReadonlyArray<string> | { [key: string]: string } | undefined | null;
    type URITemplateCallback = (keyName: string) => URITemplateValue;
    type URITemplateInput = { [key: string]: URITemplateValue | URITemplateCallback } | URITemplateCallback;

    type URITemplateLiteral = string;
    interface URITemplateVariable {
      name: string;
      explode: boolean;
      maxLength?: number;
    }

    interface URITemplateExpression {
      expression: string;
      operator: string;
      variables: ReadonlyArray<URITemplateVariable>;
    }

    type URITemplatePart = URITemplateLiteral | URITemplateExpression;

    interface URITemplate {
      expand(data: URITemplateInput, opts?: object): URI;
      parse(): this;

      /**
       * @description The parsed parts of the URI Template. Only present after calling
       *              `parse()` first.
       */
      parts?: ReadonlyArray<URITemplatePart>;
    }

    interface URITemplateStatic {
      (template: string): URITemplate;

      new (template: string): URITemplate;
    }
}

interface JQuery {
    uri(): uri.URI;
}

declare var URI: uri.URIStatic;
declare var URITemplate: uri.URITemplateStatic;

declare module 'URI' {
    export = URI;
}
// tslint:disable-next-line:no-declare-current-package
declare module 'urijs' {
    export = URI;
}
// tslint:disable-next-line:no-declare-current-package
declare module 'urijs/src/URITemplate' {
    export = URITemplate;
}
