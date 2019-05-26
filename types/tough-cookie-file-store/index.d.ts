// Type definitions for tough-cookie-file-store 1.2
// Project: https://github.com/ivanmarban/tough-cookie-file-store
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import tough = require('tough-cookie');

export = FileCookieStore;

declare class FileCookieStore extends tough.Store {
    idx: {
        [domain: string]: {
            [path: string]: {
                [key: string]: tough.Cookie
            }
        }
    };
    filePath: string;
    synchronous: boolean;

    constructor(filePath: string);

    checkExpired(domain: string | null, path: string | null, key: string | null): boolean;

    findCookie(
        domain: string,
        path: string,
        key: string,
        cb: (err: null, cookie: tough.Cookie | null) => void
    ): void;

    findCookies(
        domain: string,
        path: string,
        cb: (err: null, cookies: tough.Cookie[]) => void
    ): void;

    getAllCookies(cb: (err: Error | null, cookies: tough.Cookie[]) => void): void;

    inspect(): string;

    isEmpty(): boolean;

    isExpired(): boolean;

    putCookie(cookie: tough.Cookie, cb: (err: Error | null) => void): void;

    removeCookie(
        domain: string,
        path: string,
        key: string,
        cb: (err: Error | null) => void
    ): void;

    removeCookies(
        domain: string,
        path: string,
        cb: (err: Error | null) => void
    ): void;

    updateCookie(
        oldCookie: tough.Cookie,
        newCookie: tough.Cookie,
        cb: (err: Error | null) => void
    ): void;
}
