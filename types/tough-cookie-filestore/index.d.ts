export = FileCookieStore;

declare namespace FileCookieStore {
    interface Cookie {
        domain: string;
        path: string;
        key: string;
    }
}

declare class FileCookieStore {
    idx: {
        [domain: string]: {
            [path: string]: {
                [key: string]: FileCookieStore.Cookie;
            };
        };
    };
    filePath: string;
    synchronous: boolean;

    constructor(filePath: string);

    inspect(): string;

    findCookie(
        domain: string,
        path: string,
        key: string,
        cb: (whatever: null, cookie: FileCookieStore.Cookie | null | undefined) => void,
    ): void;

    findCookies(domain: string, path: string, cb: (whatever: null, cookies: FileCookieStore.Cookie[]) => void): void;

    putCookie(cookie: FileCookieStore.Cookie, path: string, key: string, cb: (whatever: null) => void): void;

    updateCookie(
        oldCookie: FileCookieStore.Cookie,
        newCookie: FileCookieStore.Cookie,
        cb: (whatever: null) => void,
    ): void;

    removeCookie(domain: string, path: string, key: string, cb: (whatever: null) => void): void;

    removeCookies(domain: string, path: string, cb: (whatever: null) => void): void;

    saveToFile(filePath: string, data: any, cb: () => void): void;

    loadFromFile(filePath: string, cb: (data: any) => void): void;
}
