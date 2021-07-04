// Type definitions for tough-cookie 2.3
// Project: https://github.com/salesforce/tough-cookie
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
//                 LiJinyao <https://github.com/LiJinyao>
//                 Michael Wei <https://github.com/no2chem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * Parse a cookie date string into a Date.
 * Parses according to RFC6265 Section 5.1.1, not Date.parse().
 */
export function parseDate(string: string): Date;

/**
 * Format a Date into a RFC1123 string (the RFC6265-recommended format).
 */
export function formatDate(date: Date): string;

/**
 * Transforms a domain-name into a canonical domain-name.
 * The canonical domain-name is a trimmed, lowercased, stripped-of-leading-dot
 * and optionally punycode-encoded domain-name (Section 5.1.2 of RFC6265).
 * For the most part, this function is idempotent (can be run again on its output without ill effects).
 */
export function canonicalDomain(str: string): string;

/**
 * Answers "does this real domain match the domain in a cookie?".
 * The str is the "current" domain-name and the domStr is the "cookie" domain-name.
 * Matches according to RFC6265 Section 5.1.3, but it helps to think of it as a "suffix match".
 *
 * The canonicalize parameter will run the other two parameters through canonicalDomain or not.
 */
export function domainMatch(str: string, domStr: string, canonicalize?: boolean): boolean;

/**
 * Given a current request/response path, gives the Path apropriate for storing in a cookie.
 * This is basically the "directory" of a "file" in the path, but is specified by Section 5.1.4 of the RFC.
 *
 * The path parameter MUST be only the pathname part of a URI (i.e. excludes the hostname, query, fragment, etc.).
 * This is the .pathname property of node's uri.parse() output.
 */
export function defaultPath(path: string): string;

/**
 * Answers "does the request-path path-match a given cookie-path?" as per RFC6265 Section 5.1.4.
 * Returns a boolean.
 *
 * This is essentially a prefix-match where cookiePath is a prefix of reqPath.
 */
export function pathMatch(reqPath: string, cookiePath: string): boolean;

/**
 * alias for Cookie.fromJSON(string)
 */
export function fromJSON(string: string): Cookie;

export function getPublicSuffix(hostname: string): string | null;

export function cookieCompare(a: Cookie, b: Cookie): number;

export function permuteDomain(domain: string): string[];

export function permutePath(path: string): string[];

// region Cookie

export class Cookie {
    static parse(cookieString: string, options?: Cookie.ParseOptions): Cookie | undefined;

    static fromJSON(strOrObj: string | object): Cookie | null;

    constructor(properties?: Cookie.Properties);

    key: string;
    value: string;
    expires: Date | 'Infinity';
    maxAge: number | 'Infinity' | '-Infinity';
    domain: string | null;
    path: string | null;
    secure: boolean;
    httpOnly: boolean;
    extensions: string[] | null;
    creation: Date | null;
    creationIndex: number;

    hostOnly: boolean | null;
    pathIsDefault: boolean | null;
    lastAccessed: Date | null;

    toString(): string;

    cookieString(): string;

    setExpires(String: string): void;

    setMaxAge(number: number): void;

    expiryTime(now?: number): number | typeof Infinity;

    expiryDate(now?: number): Date;

    TTL(now?: Date): number | typeof Infinity;

    canonicalizedDomain(): string;

    cdomain(): string;

    toJSON(): { [key: string]: any; };

    clone(): Cookie;

    validate(): boolean | string;
}

export namespace Cookie {
    interface ParseOptions {
        loose?: boolean | undefined;
    }

    interface Properties {
        key?: string | undefined;
        value?: string | undefined;
        expires?: Date | undefined;
        maxAge?: number | 'Infinity' | '-Infinity' | undefined;
        domain?: string | undefined;
        path?: string | undefined;
        secure?: boolean | undefined;
        httpOnly?: boolean | undefined;
        extensions?: string[] | undefined;
        creation?: Date | undefined;
        creationIndex?: number | undefined;

        hostOnly?: boolean | undefined;
        pathIsDefault?: boolean | undefined;
        lastAccessed?: Date | undefined;
    }

    interface Serialized {
        [key: string]: any;
    }
}

// endregion

// region CookieJar

export class CookieJar {
    static deserialize(serialized: CookieJar.Serialized | string, store: Store, cb: (err: Error | null, object: CookieJar) => void): void;
    static deserialize(serialized: CookieJar.Serialized | string, cb: (err: Error | null, object: CookieJar) => void): void;

    static deserializeSync(serialized: CookieJar.Serialized | string, store?: Store): CookieJar;

    static fromJSON(string: string): CookieJar;

    constructor(store?: Store, options?: CookieJar.Options);

    setCookie(cookieOrString: Cookie | string, currentUrl: string, options: CookieJar.SetCookieOptions, cb: (err: Error | null, cookie: Cookie) => void): void;
    setCookie(cookieOrString: Cookie | string, currentUrl: string, cb: (err: Error, cookie: Cookie) => void): void;

    setCookieSync(cookieOrString: Cookie | string, currentUrl: string, options?: CookieJar.SetCookieOptions): void;

    getCookies(currentUrl: string, options: CookieJar.GetCookiesOptions, cb: (err: Error | null, cookies: Cookie[]) => void): void;
    getCookies(currentUrl: string, cb: (err: Error | null, cookies: Cookie[]) => void): void;

    getCookiesSync(currentUrl: string, options?: CookieJar.GetCookiesOptions): Cookie[];

    getCookieString(currentUrl: string, options: CookieJar.GetCookiesOptions, cb: (err: Error | null, cookies: string) => void): void;
    getCookieString(currentUrl: string, cb: (err: Error | null, cookies: string) => void): void;

    getCookieStringSync(currentUrl: string, options?: CookieJar.GetCookiesOptions): string;

    getSetCookieStrings(currentUrl: string, options: CookieJar.GetCookiesOptions, cb: (err: Error | null, cookies: string) => void): void;
    getSetCookieStrings(currentUrl: string, cb: (err: Error | null, cookies: string) => void): void;

    getSetCookieStringsSync(currentUrl: string, options?: CookieJar.GetCookiesOptions): string;

    serialize(cb: (err: Error | null, serializedObject: CookieJar.Serialized) => void): void;

    serializeSync(): CookieJar.Serialized;

    toJSON(): CookieJar.Serialized;

    clone(store: Store, cb: (err: Error | null, newJar: CookieJar) => void): void;
    clone(cb: (err: Error | null, newJar: CookieJar) => void): void;

    cloneSync(store: Store): CookieJar;
}

export namespace CookieJar {
    interface Options {
        rejectPublicSuffixes?: boolean | undefined;
        looseMode?: boolean | undefined;
    }

    interface SetCookieOptions {
        http?: boolean | undefined;
        secure?: boolean | undefined;
        now?: Date | undefined;
        ignoreError?: boolean | undefined;
    }

    interface GetCookiesOptions {
        http?: boolean | undefined;
        secure?: boolean | undefined;
        now?: Date | undefined;
        expire?: boolean | undefined;
        allPaths?: boolean | undefined;
    }

    interface Serialized {
        version: string;
        storeType: string;
        rejectPublicSuffixes: boolean;
        cookies: Cookie.Serialized[];
    }
}

// endregion

// region Store

export abstract class Store {
    findCookie(domain: string, path: string, key: string, cb: (err: Error | null, cookie: Cookie | null) => void): void;

    findCookies(domain: string, path: string, cb: (err: Error | null, cookie: Cookie[]) => void): void;

    putCookie(cookie: Cookie, cb: (err: Error | null) => void): void;

    updateCookie(oldCookie: Cookie, newCookie: Cookie, cb: (err: Error | null) => void): void;

    removeCookie(domain: string, path: string, key: string, cb: (err: Error | null) => void): void;

    removeCookies(domain: string, path: string, cb: (err: Error | null) => void): void;

    getAllCookies(cb: (err: Error | null, cookie: Cookie[]) => void): void;
}

export class MemoryCookieStore extends Store { }

// endregion
