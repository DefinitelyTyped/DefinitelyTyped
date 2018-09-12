// Type definitions for js-cookie 2.2
// Project: https://github.com/js-cookie/js-cookie
// Definitions by: Theodore Brown <https://github.com/theodorejb>
//                 BendingBender <https://github.com/BendingBender>
//                 Antoine Lépée <https://github.com/alepee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace Cookies {
    interface CookieAttributes {
        /**
         * Define when the cookie will be removed. Value can be a Number
         * which will be interpreted as days from time of creation or a
         * Date instance. If omitted, the cookie becomes a session cookie.
         */
        expires?: number | Date;

        /**
         * Define the path where the cookie is available. Defaults to '/'
         */
        path?: string;

        /**
         * Define the domain where the cookie is available. Defaults to
         * the domain of the page where the cookie was created.
         */
        domain?: string;

        /**
         * A Boolean indicating if the cookie transmission requires a
         * secure protocol (https). Defaults to false.
         */
        secure?: boolean;
    }

    interface CookiesStatic {
        /**
         * Allows default cookie attributes to be accessed, changed, or reset
         */
        defaults: CookieAttributes;

        /**
         * Create a cookie
         */
        set(name: string, value: string | object, options?: CookieAttributes): void;

        /**
         * Read cookie
         */
        get(name: string): string | undefined;

        /**
         * Read all available cookies
         */
        get(): {[key: string]: string};

        /**
         * Returns the parsed representation of the string
         * stored in the cookie according to JSON.parse
         */
        getJSON(name: string): any;

        /**
         * Returns the parsed representation of
         * all cookies according to JSON.parse
         */
        getJSON(): {[key: string]: any};

        /**
         * Delete cookie
         */
        remove(name: string, options?: CookieAttributes): void;

        /**
         * If there is any danger of a conflict with the namespace Cookies,
         * the noConflict method will allow you to define a new namespace
         * and preserve the original one. This is especially useful when
         * running the script on third party sites e.g. as part of a widget
         * or SDK. Note: The noConflict method is not necessary when using
         * AMD or CommonJS, thus it is not exposed in those environments.
         */
        noConflict(): CookiesStatic;

        /**
         * Create a new instance of the api that overrides the default
         * decoding implementation. All methods that rely in a proper
         * decoding to work, such as Cookies.remove() and Cookies.get(),
         * will run the converter first for each cookie. The returned
         * string will be used as the cookie value.
         */
        withConverter(converter: CookieConverter | { write: CookieConverter; read: CookieConverter; }): CookiesStatic;
    }

    type CookieConverter = (value: string, name: string) => string;
}

declare const Cookies: Cookies.CookiesStatic;

export = Cookies;
export as namespace Cookies;
