// Type definitions for Angular JS 1.4 (ngCookies module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>, Anthony Ciccarello <http://github.com/aciccarello>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="angular.d.ts" />

declare module "angular-cookies" {
    var _: string;
    export = _;
}

/**
 * ngCookies module (angular-cookies.js)
 */
declare module angular.cookies {

    /**
    * Cookies options
    * see https://docs.angularjs.org/api/ngCookies/provider/$cookiesProvider#defaults
    */
    interface ICookiesOptions {
        /**
        * The cookie will be available only for this path and its sub-paths. 
        * By default, this would be the URL that appears in your base tag.
        */
        path?: string;
        /**
        * The cookie will be available only for this domain and its sub-domains.
        * For obvious security reasons the user agent will not accept the cookie if the 
        * current domain is not a sub domain or equals to the requested domain.
        */
        domain?: string;
        /**
        * String of the form "Wdy, DD Mon YYYY HH:MM:SS GMT" or a Date object
        * indicating the exact date/time this cookie will expire.
        */
        expires?: string|Date;
        /**
        * The cookie will be available only in secured connection.
        */
        secure?: boolean;
    }

    /**
     * CookieService
     * see http://docs.angularjs.org/api/ngCookies.$cookies
     */
    interface ICookiesService {
        [index: string]: any;
    }

    /**
     * CookieStoreService
     * see http://docs.angularjs.org/api/ngCookies.$cookieStore
     */
    interface ICookiesService {
        get(key: string): string;
        getObject(key: string): any;
        getObject<T>(key: string): T;
        getAll(): any;
        put(key: string, value: string, options?: ICookiesOptions): void;
        putObject(key: string, value: any, options?: ICookiesOptions): void;
        remove(key: string, options?: ICookiesOptions): void;
    }

    /**
     * CookieStoreService DEPRECATED
     * see https://code.angularjs.org/1.2.26/docs/api/ngCookies/service/$cookieStore
     */
    interface ICookieStoreService {
        /**
         * Returns the value of given cookie key
         * @param key Id to use for lookup
         */
        get(key: string): any;
        /**
         * Sets a value for given cookie key
         * @param key Id for the value
         * @param value Value to be stored
         */
        put(key: string, value: any): void;
        /**
         * Remove given cookie
         * @param key Id of the key-value pair to delete
         */
        remove(key: string): void;
    }

}
