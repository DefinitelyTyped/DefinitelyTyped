// Type definitions for tough-cookie-filestore 0.0
// Project: https://github.com/mitsuru/tough-cookie-filestore
// Definitions by: Christian Friedow <https://github.com/friedow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace FileCookieStore {
    export interface Cookie {
        domain: string;
        path: string;
        key: string;
    }
}

declare class FileCookieStore {
    idx: {
        [domain: string]: {
        [path: string]: {
            [key: string]: Cookie,
        },
        },
    };
    filePath: string;
    synchronous: boolean;

    constructor(filePath: string);

    inspect(): string;

    findCookie(domain: string, path: string, key: string, cb: (whatever: null, cookie: Cookie | null | undefined) => void): void;

    findCookies(domain: string, path: string, cb: (whatever: null, cookies: Cookie[]) => void): void;

    putCookie(cookie: Cookie, path: string, key: string, cb: (whatever: null) => void): void;

    updateCookie(oldCookie: Cookie, newCookie: Cookie, cb: (whatever: null) => void): void;

    removeCookie(domain: string, path: string, key: string, cb: (whatever: null) => void): void;

    removeCookies(domain: string, path: string, cb: (whatever: null) => void): void;

    saveToFile(filePath: string, data: any, cb: () => void): void;

    loadFromFile(filePath: string, cb: (data: any) => void): void;
}

export = FileCookieStore
