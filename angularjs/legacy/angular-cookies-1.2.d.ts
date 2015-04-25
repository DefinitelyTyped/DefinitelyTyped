// Type definitions for Angular JS 1.2 (ngCookies module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="angular-1.2.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// ngCookies module (angular-cookies.js)
///////////////////////////////////////////////////////////////////////////////
declare module ng.cookies {

    ///////////////////////////////////////////////////////////////////////////
    // CookieService
    // see https://code.angularjs.org/1.2.26/docs/api/ngCookies/service/$cookies
    ///////////////////////////////////////////////////////////////////////////
    interface ICookiesService {}

    ///////////////////////////////////////////////////////////////////////////
    // CookieStoreService
    // see https://code.angularjs.org/1.2.26/docs/api/ngCookies/service/$cookieStore
    ///////////////////////////////////////////////////////////////////////////
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
