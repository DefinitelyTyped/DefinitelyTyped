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
        getAll(): any;
        put(key: string, value: string, options?: any): void;
        putObject(key: string, value: any, options?: any): void;
        remove(key: string, options?: any): void;
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
