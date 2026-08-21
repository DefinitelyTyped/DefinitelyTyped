declare var _: string;
export = _;

import * as angular from "angular";

declare module "angular" {
    /**
     * ngCookies module (angular-cookies.js)
     */
    namespace cookies {
        /**
         * CookiesProvider
         * see https://docs.angularjs.org/api/ngCookies/provider/$cookiesProvider
         */
        interface ICookiesProvider {
            /**
             * Object containing default options to pass when setting cookies.
             */
            defaults: ICookiesOptions;
        }

        /**
         * Cookies options
         * see https://docs.angularjs.org/api/ngCookies/provider/$cookiesProvider#defaults
         */
        interface ICookiesOptions {
            /**
             * The cookie will be available only for this path and its sub-paths.
             * By default, this would be the URL that appears in your base tag.
             */
            path?: string | undefined;
            /**
             * The cookie will be available only for this domain and its sub-domains.
             * For obvious security reasons the user agent will not accept the cookie if the
             * current domain is not a sub domain or equals to the requested domain.
             */
            domain?: string | undefined;
            /**
             * String of the form "Wdy, DD Mon YYYY HH:MM:SS GMT" or a Date object
             * indicating the exact date/time this cookie will expire.
             */
            expires?: string | Date | undefined;
            /**
             * The cookie will be available only in secured connection.
             */
            secure?: boolean | undefined;
            /**
             * Prevents the browser from sending the cookie along with cross-site requests.
             * Accepts the values "lax" and "strict".
             */
            samesite?: string | undefined;
        }

        /**
         * CookiesService
         * see https://docs.angularjs.org/api/ngCookies/service/$cookies
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
    }
}
