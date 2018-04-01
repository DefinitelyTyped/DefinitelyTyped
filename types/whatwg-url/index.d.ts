// Type definitions for whatwg-url 6.4
// Project: https://github.com/jsdom/whatwg-url#readme
// Definitions by: Alexander Marks <https://github.com/aomarks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

/** https://url.spec.whatwg.org/#url-representation */
export interface URLRecord {
    scheme: string;
    username: string;
    password: string;
    host: string|number|IPv6Address|null;
    port: number|null;
    path: string[];
    query: string|null;
    fragment: string|null;
    cannotBeABaseURL?: boolean;
}

/** https://url.spec.whatwg.org/#concept-ipv6 */
export type IPv6Address =
    [number, number, number, number, number, number, number, number];

/** https://url.spec.whatwg.org/#url-class */
export class URL {
    constructor(url: string, base?: string);

    href: string;
    readonly origin: string;
    protocol: string;
    username: string;
    password: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    readonly searchParams: URLSearchParams;
    hash: string;

    toJSON(): string;
}

/** https://url.spec.whatwg.org/#interface-urlsearchparams */
export class URLSearchParams {
    constructor(init: (Array<[string, string]>|Iterable<[string, string]>|
                       {[name: string]: string}|string));

    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string|null;
    getAll(name: string): string[];
    has(name: string): boolean;
    set(name: string, value: string): void;
    sort(): void;

    [Symbol.iterator](): IterableIterator<[string, string]>;
}

/** https://url.spec.whatwg.org/#concept-url-parser */
export function parseURL(
    input: string,
    options?: {baseURL?: string, encodingOverride?: string}): URLRecord|null;

/** https://url.spec.whatwg.org/#concept-basic-url-parser */
export function basicURLParse(input: string, options?: {
    baseURL?: string,
    encodingOverride?: string,
    url?: URLRecord,
    stateOverride?: StateOverride
}): URLRecord|null;

/** https://url.spec.whatwg.org/#scheme-start-state */
export type StateOverride =
    'scheme start'|'scheme'|'no scheme'|'special relative or authority'|
    'path or authority'|'relative'|'relative slash'|'special authority slashes'|
    'special authority ignore slashes'|'authority'|'host'|'hostname'|'port'|
    'file'|'file slash'|'file host'|'path start'|'path'|
    'cannot-be-a-base-URL path'|'query'|'fragment';

/** https://url.spec.whatwg.org/#concept-url-serializer */
export function serializeURL(
    urlRecord: URLRecord, excludeFragment?: boolean): string;

/** https://url.spec.whatwg.org/#concept-host-serializer */
export function serializeHost(host: string|number|IPv6Address): string;

/** https://url.spec.whatwg.org/#serialize-an-integer */
export function serializeInteger(number: number): string;

/** https://html.spec.whatwg.org#ascii-serialisation-of-an-origin */
export function serializeURLOrigin(urlRecord: URLRecord): string;

/** https://url.spec.whatwg.org/#set-the-username */
export function setTheUsername(urlRecord: URLRecord, username: string): void;

/** https://url.spec.whatwg.org/#set-the-password */
export function setThePassword(urlRecord: URLRecord, password: string): void;

/** https://url.spec.whatwg.org/#cannot-have-a-username-password-port */
export function cannotHaveAUsernamePasswordPort(urlRecord: URLRecord): boolean;

/** https://url.spec.whatwg.org/#percent-decode */
export function percentDecode(buffer: Buffer): Buffer;
