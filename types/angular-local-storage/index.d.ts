import * as angular from "angular";

export type ILocalStorageServiceProvider = angular.local.storage.ILocalStorageServiceProvider;
export type ILocalStorageService = angular.local.storage.ILocalStorageService;
export type ICookie = angular.local.storage.ICookie;

declare module "angular" {
    namespace local.storage {
        // tslint:disable-next-line interface-name
        interface ILocalStorageServiceProvider extends IServiceProvider {
            /**
             * Setter for the prefix
             * You should set a prefix to avoid overwriting any local storage variables from the rest of your app
             * e.g. localStorageServiceProvider.setPrefix('youAppName');
             * With provider you can use config as this:
             * myApp.config(function (localStorageServiceProvider) {
             *  localStorageServiceProvider.prefix = 'yourAppName';
             * });
             * @param prefix default: ls.<your-key>
             */
            setPrefix(prefix: string): ILocalStorageServiceProvider;
            /**
             * Setter for the storageType
             * localstorage or sessionStorage. default: localStorage
             */
            setStorageType(storageType: string): ILocalStorageServiceProvider;
            /**
             * If localStorage is not supported, the library will default to cookies instead. This behavior can be disabled
             * default: true
             */
            setDefaultToCookie(shouldDefault: boolean): ILocalStorageServiceProvider;
            /**
             * Setter for cookie config
             * @param exp number of days before cookies expire (0 = does not expire). default: 30
             * @param path the web path the cookie represents. default: '/'
             * @param secure to store cookies as secure. default: false
             */
            setStorageCookie(exp: number, path: string, secure: boolean): ILocalStorageServiceProvider;
            /**
             * Set the cookie domain, since this runs inside a the config() block,
             * only providers and constants can be injected.
             * As a result, $location service can't be used here,
             * use a hardcoded string or window.location.
             * No default value
             */
            setStorageCookieDomain(domain: string): ILocalStorageServiceProvider;
            /**
             * Send signals for each of the following actions:
             * @param setItem default: true
             * @param removeItem default: false
             */
            setNotify(setItem: boolean, removeItem: boolean): ILocalStorageServiceProvider;
        }

        // tslint:disable-next-line interface-name
        interface ICookie {
            /**
             * Checks if cookies are enabled in the browser.
             * Returns: Boolean
             */
            readonly isSupported: boolean;
            /**
             * Directly adds a value to cookies.
             * Note: Typically used as a fallback if local storage is not supported.
             */
            set(key: string, val: string, daysToExpiry?: number): boolean;
            /**
             * Directly get a value from a cookie.
             */
            get(key: string): string;
            /**
             * Remove directly value from a cookie.
             */
            remove(key: string): boolean;
            /**
             * Remove all data for this app from cookie.
             */
            clearAll(): any;
        }

        type StorageType = "localStorage" | "sessionStorage";

        // tslint:disable-next-line interface-name
        interface ILocalStorageService {
            /**
             * Change the local storage prefix during execution
             */
            changePrefix(newPrefix: string): void;
            /**
             * Checks if the browser support the current storage type(e.g: localStorage, sessionStorage).
             * Returns: Boolean
             */
            isSupported: boolean;
            /**
             * Returns: String
             */
            getStorageType(): string;
            /**
             * Directly adds a value to local storage.
             * If local storage is not supported, use cookies instead.
             */
            set(key: string, value: any, storageType?: StorageType): boolean;
            /**
             * Directly get a value from local storage.
             * If local storage is not supported, use cookies instead.
             * Returns: value from local storage
             */
            get(key: string, storageType?: StorageType): any;
            /**
             * Return array of keys for local storage, ignore keys that not owned.
             * Returns: value from local storage
             */
            keys(storageType?: StorageType): string[];
            /**
             * Remove a list of items from the local storage by their given keys.
             * The last item in the variable argument list can optionally be the StorageType.
             * Which specifies whether to remove from the session storage or the local storage.
             * If the last argument is not a valid storage type it is considered to be a key,
             * and localStorage is used by default .
             * If local storage is not supported, use cookies instead.
             * Returns: Boolean
             * @param key
             */
            remove(...args: string[]): boolean;
            /**
             * Remove all data for this app from local storage.
             * If local storage is not supported, use cookies instead.
             * Note: Optionally takes a regular expression string and removes matching.
             */
            clearAll(regularExpression?: RegExp, storageType?: StorageType): boolean;
            /**
             * Bind $scope key to localStorageService.
             * Usage: localStorageService.bind(scope, property, value[optional], key[optional])
             * Returns: deregistration function for this listener.
             */
            bind(scope: IScope, property: string, value?: any, key?: string, storageType?: StorageType): () => void;
            /**
             * Return the derive key
             */
            deriveKey(key: string): string;
            /**
             * Return localStorageService.length, ignore keys that not owned.
             */
            length(storageType?: StorageType): number;
            /**
             * Deal with browser's cookies directly.
             */
            cookie: ICookie;
        }
    }
}
