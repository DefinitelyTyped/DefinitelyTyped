export const TYPES = true;

export interface CrossDomainWindowType {
    location: string | {};
    self: CrossDomainWindowType;
    closed: boolean;
    open: (url?: string, target?: string, features?: string) => CrossDomainWindowType | null;
    close: () => void;
    focus: () => void;
    top: CrossDomainWindowType;
    frames: ReadonlyArray<CrossDomainWindowType> | CrossDomainWindowType;
    opener?: CrossDomainWindowType;
    parent: CrossDomainWindowType;
    length: number;
    postMessage: (a: string, b: string) => void;
}

export interface SameDomainWindowType {
    location: string | {};
    self: CrossDomainWindowType;
    closed: boolean;
    open: (url?: string, target?: string, features?: string) => CrossDomainWindowType | null;
    close: () => void;
    focus: () => void;
    XMLHttpRequest?: typeof XMLHttpRequest;
    document: Document;
    navigator: {
        userAgent: string;
        mockUserAgent?: string;
    };
}

export type DomainMatcher = string | ReadonlyArray<string> | RegExp;
