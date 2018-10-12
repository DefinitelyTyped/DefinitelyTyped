// Type definitions for linkifyjs 2.1
// Project: https://github.com/SoapBox/linkifyjs#readme
// Definitions by: Chris Suich <https://github.com/csuich2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export type ClassNameMap = {[type in LinkType]: string | ((href: string) => string)};

export interface EventsMap {
    [event: string]: (e: any) => void;
}

export interface Options {
    defaultProtocol?: string;
    events?: EventsMap | ((href: string, type: LinkType) => EventsMap);
    format?: ((value: string, type: LinkType) => string) | {[type in LinkType]: (value: string) => string};
    formatHref?: ((value: string, type: LinkType) => string) | {[type in LinkType]: (value: string) => string};
    nl2br?: boolean;
    tagName?: string | ((url: string, type: LinkType) => string) | {[type in LinkType]: (value: string) => string};
    target?: string | ((url: string, type: LinkType) => string) | {[type in LinkType]: (value: string) => string};
    validate?: boolean | ((url: string, type: LinkType) => boolean) | {[type in LinkType]: (value: string) => boolean};
    ignoreTags?: string[];

    attributes?: object | ((href: string, type: LinkType) => object);
    className?: string | ((href: string, type: LinkType) => string) | ClassNameMap;
}

export type LinkType =
        'url'
    |   'email'
;

export function tokenize(str: string): string[];

export function find(str: string, type?: LinkType): string[];

export function test(str: string, type?: LinkType): boolean;
