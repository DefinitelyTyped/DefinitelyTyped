declare module goog {
    function require(name: 'goog.net.Cookies'): typeof goog.net.Cookies;
}

declare module goog.net {

    /**
     * A class for handling browser cookies.
     * @param {Document} context The context document to get/set cookies on.
     * @constructor
     * @final
     */
    class Cookies {
        constructor(context: Document);
        
        /**
         * Static constant for the size of cookies. Per the spec, there's a 4K limit
         * to the size of a cookie. To make sure users can't break this limit, we
         * should truncate long cookies at 3950 bytes, to be extra careful with dumb
         * browsers/proxies that interpret 4K as 4000 rather than 4096.
         * @type {number}
         */
        static MAX_COOKIE_LENGTH: number;
        
        /**
         * Returns true if cookies are enabled.
         * @return {boolean} True if cookies are enabled.
         */
        isEnabled(): boolean;
        
        /**
         * We do not allow '=', ';', or white space in the name.
         *
         * NOTE: The following are allowed by this method, but should be avoided for
         * cookies handled by the server.
         * - any name starting with '$'
         * - 'Comment'
         * - 'Domain'
         * - 'Expires'
         * - 'Max-Age'
         * - 'Path'
         * - 'Secure'
         * - 'Version'
         *
         * @param {string} name Cookie name.
         * @return {boolean} Whether name is valid.
         *
         * @see <a href="http://tools.ietf.org/html/rfc2109">RFC 2109</a>
         * @see <a href="http://tools.ietf.org/html/rfc2965">RFC 2965</a>
         */
        isValidName(name: string): boolean;
        
        /**
         * We do not allow ';' or line break in the value.
         *
         * Spec does not mention any illegal characters, but in practice semi-colons
         * break parsing and line breaks truncate the name.
         *
         * @param {string} value Cookie value.
         * @return {boolean} Whether value is valid.
         *
         * @see <a href="http://tools.ietf.org/html/rfc2109">RFC 2109</a>
         * @see <a href="http://tools.ietf.org/html/rfc2965">RFC 2965</a>
         */
        isValidValue(value: string): boolean;
        
        /**
         * Sets a cookie.  The max_age can be -1 to set a session cookie. To remove and
         * expire cookies, use remove() instead.
         *
         * Neither the {@code name} nor the {@code value} are encoded in any way. It is
         * up to the callers of {@code get} and {@code set} (as well as all the other
         * methods) to handle any possible encoding and decoding.
         *
         * @throws {!Error} If the {@code name} fails #goog.net.cookies.isValidName.
         * @throws {!Error} If the {@code value} fails #goog.net.cookies.isValidValue.
         *
         * @param {string} name  The cookie name.
         * @param {string} value  The cookie value.
         * @param {number=} opt_maxAge  The max age in seconds (from now). Use -1 to
         *     set a session cookie. If not provided, the default is -1
         *     (i.e. set a session cookie).
         * @param {?string=} opt_path  The path of the cookie. If not present then this
         *     uses the full request path.
         * @param {?string=} opt_domain  The domain of the cookie, or null to not
         *     specify a domain attribute (browser will use the full request host name).
         *     If not provided, the default is null (i.e. let browser use full request
         *     host name).
         * @param {boolean=} opt_secure Whether the cookie should only be sent over
         *     a secure channel.
         */
        set(name: string, value: string, opt_maxAge?: number, opt_path?: string, opt_domain?: string, opt_secure?: boolean): void;
        
        /**
         * Returns the value for the first cookie with the given name.
         * @param {string} name  The name of the cookie to get.
         * @param {string=} opt_default  If not found this is returned instead.
         * @return {string|undefined}  The value of the cookie. If no cookie is set this
         *     returns opt_default or undefined if opt_default is not provided.
         */
        get(name: string, opt_default?: string): string|void;
        
        /**
         * Removes and expires a cookie.
         * @param {string} name  The cookie name.
         * @param {string=} opt_path  The path of the cookie, or null to expire a cookie
         *     set at the full request path. If not provided, the default is '/'
         *     (i.e. path=/).
         * @param {string=} opt_domain  The domain of the cookie, or null to expire a
         *     cookie set at the full request host name. If not provided, the default is
         *     null (i.e. cookie at full request host name).
         * @return {boolean} Whether the cookie existed before it was removed.
         */
        remove(name: string, opt_path?: string, opt_domain?: string): boolean;
        
        /**
         * Gets the names for all the cookies.
         * @return {Array<string>} An array with the names of the cookies.
         */
        getKeys(): Array<string>;
        
        /**
         * Gets the values for all the cookies.
         * @return {Array<string>} An array with the values of the cookies.
         */
        getValues(): Array<string>;
        
        /**
         * @return {boolean} Whether there are any cookies for this document.
         */
        isEmpty(): boolean;
        
        /**
         * @return {number} The number of cookies for this document.
         */
        getCount(): number;
        
        /**
         * Returns whether there is a cookie with the given name.
         * @param {string} key The name of the cookie to test for.
         * @return {boolean} Whether there is a cookie by that name.
         */
        containsKey(key: string): boolean;
        
        /**
         * Returns whether there is a cookie with the given value. (This is an O(n)
         * operation.)
         * @param {string} value  The value to check for.
         * @return {boolean} Whether there is a cookie with that value.
         */
        containsValue(value: string): boolean;
        
        /**
         * Removes all cookies for this document.  Note that this will only remove
         * cookies from the current path and domain.  If there are cookies set using a
         * subpath and/or another domain these will still be there.
         */
        clear(): void;
    }

    /**
     * A static default instance.
     * @type {goog.net.Cookies}
     */
    var cookies: goog.net.Cookies;
}
