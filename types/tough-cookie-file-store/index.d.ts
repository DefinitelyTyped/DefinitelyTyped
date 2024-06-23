import tough = require("tough-cookie");

export class FileCookieStore extends tough.Store {
    idx: {
        [domain: string]: {
            [path: string]: {
                [key: string]: tough.Cookie;
            };
        };
    };
    filePath: string;
    synchronous: boolean;

    constructor(filePath: string);

    findCookie(
        domain: string,
        path: string,
        key: string,
        cb: (err: null, cookie: tough.Cookie | null) => void,
    ): void;

    findCookies(
        domain: string,
        path: string,
        cb: (err: Error | null, cookie: tough.Cookie[]) => void,
    ): void;
    findCookies(
        domain: string,
        path: string,
        allowSpecialUseDomain: boolean,
        cb: (err: Error | null, cookie: tough.Cookie[]) => void,
    ): void;

    getAllCookies(cb: (err: Error | null, cookies: tough.Cookie[]) => void): void;

    putCookie(cookie: tough.Cookie, cb: (err: Error | null) => void): void;

    removeAllCookies(cb: (err: Error | null) => void): void;

    removeCookie(
        domain: string,
        path: string,
        key: string,
        cb: (err: Error | null) => void,
    ): void;

    removeCookies(
        domain: string,
        path: string,
        cb: (err: Error | null) => void,
    ): void;

    updateCookie(
        oldCookie: tough.Cookie,
        newCookie: tough.Cookie,
        cb: (err: Error | null) => void,
    ): void;
}
