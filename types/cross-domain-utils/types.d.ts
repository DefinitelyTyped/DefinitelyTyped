export const TYPES = true;

export interface CrossDomainWindowType {
    location: string | {};
    self: CrossDomainWindowType;
    closed: boolean;
    open: (url?: string, target?: string, features?: string) => CrossDomainWindowType | null;
    close: () => void;
    focus: () => void;
    top: CrossDomainWindowType | null;
    frames: CrossDomainWindowType;
    opener: CrossDomainWindowType | null;
    parent: CrossDomainWindowType | null;
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
    XMLHttpRequest?: typeof XMLHttpRequest | undefined;
    document: Document;
    navigator: {
        userAgent: string;
        mockUserAgent?: string | undefined;
    };
}

export type DomainMatcher = string | readonly string[] | RegExp;
