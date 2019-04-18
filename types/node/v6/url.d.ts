declare module "url" {
    export interface UrlObject {
        href?: string;
        protocol?: string;
        slashes?: boolean;
        host?: string;
        auth?: string;
        hostname?: string;
        port?: string | number;
        pathname?: string;
        search?: string;
        path?: string;
        query?: string | { [key: string]: any; };
        hash?: string;
    }

    export interface Url extends UrlObject {
        port?: string;
        query?: any;
    }

    export function parse(urlStr: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): Url;
    export function format(URL: URL, options?: URLFormatOptions): string;
    export function format(urlObject: UrlObject | string): string;
    export function resolve(from: string, to: string): string;

    export function domainToASCII(domain: string): string;
    export function domainToUnicode(domain: string): string;

    export interface URLFormatOptions {
        auth?: boolean;
        fragment?: boolean;
        search?: boolean;
        unicode?: boolean;
    }

    export class URLSearchParams implements Iterable<string[]> {
        constructor(init?: URLSearchParams | string | { [key: string]: string | string[] } | Iterable<string[]> );
        append(name: string, value: string): void;
        delete(name: string): void;
        entries(): Iterator<string[]>;
        forEach(callback: (value: string, name: string, searchParams: this) => void): void;
        get(name: string): string | null;
        getAll(name: string): string[];
        has(name: string): boolean;
        keys(): Iterator<string>;
        set(name: string, value: string): void;
        sort(): void;
        toString(): string;
        values(): Iterator<string>;
        [Symbol.iterator](): Iterator<string[]>;
    }

    export class URL {
        constructor(input: string, base?: string | URL);
        hash: string;
        host: string;
        hostname: string;
        href: string;
        readonly origin: string;
        password: string;
        pathname: string;
        port: string;
        protocol: string;
        search: string;
        readonly searchParams: URLSearchParams;
        username: string;
        toString(): string;
        toJSON(): string;
    }
}
