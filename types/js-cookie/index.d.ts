declare namespace Cookies {
    interface CookieAttributes {
        /**
         * Define when the cookie will be removed. Value can be a Number
         * which will be interpreted as days from time of creation or a
         * Date instance. If omitted, the cookie becomes a session cookie.
         */
        expires?: number | Date | undefined;

        /**
         * Define the path where the cookie is available. Defaults to '/'
         */
        path?: string | undefined;

        /**
         * Define the domain where the cookie is available. Defaults to
         * the domain of the page where the cookie was created.
         */
        domain?: string | undefined;

        /**
         * A Boolean indicating if the cookie transmission requires a
         * secure protocol (https). Defaults to false.
         */
        secure?: boolean | undefined;

        /**
         * Asserts that a cookie must not be sent with cross-origin requests,
         * providing some protection against cross-site request forgery
         * attacks (CSRF)
         */
        sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None" | undefined;

        /**
         * An attribute which will be serialized, conformably to RFC 6265
         * section 5.2.
         */
        [property: string]: any;
    }

    interface CookiesStatic<T = string> {
        readonly attributes: CookieAttributes;
        readonly converter: Required<Converter<string>>;
        /**
         * Create a cookie
         */
        set(name: string, value: string | T, options?: CookieAttributes): string | undefined;

        /**
         * Read cookie
         */
        get(name: string): string | T | undefined;

        /**
         * Read all available cookies
         */
        get(): { [key: string]: string };

        /**
         * Delete cookie
         */
        remove(name: string, options?: CookieAttributes): void;

        /**
         * Cookie attribute defaults can be set globally by creating an
         * instance of the api via withAttributes(), or individually for
         * each call to Cookies.set(...) by passing a plain object as the
         * last argument. Per-call attributes override the default attributes.
         */
        withAttributes(attributes: CookieAttributes): CookiesStatic<T>;

        /**
         * Create a new instance of the api that overrides the default
         * decoding implementation. All methods that rely in a proper
         * decoding to work, such as Cookies.remove() and Cookies.get(),
         * will run the converter first for each cookie. The returned
         * string will be used as the cookie value.
         */
        withConverter<TConv = string>(converter: Converter<TConv>): CookiesStatic<TConv>;
    }

    interface Converter<TConv> {
        write?: CookieWriteConverter<TConv> | undefined;
        read?: CookieReadConverter<TConv> | undefined;
    }

    type CookieWriteConverter<T> = (value: string | T, name: string) => string;
    type CookieReadConverter<T> = (value: string, name: string) => string | T;
}

declare const Cookies: Cookies.CookiesStatic & {
    /**
     * If there is any danger of a conflict with the namespace Cookies,
     * the noConflict method will allow you to define a new namespace
     * and preserve the original one. This is especially useful when
     * running the script on third party sites e.g. as part of a widget
     * or SDK. Note: The noConflict method is not necessary when using
     * AMD or CommonJS, thus it is not exposed in those environments.
     */
    noConflict?(): Cookies.CookiesStatic;
};

export = Cookies;
export as namespace Cookies;
