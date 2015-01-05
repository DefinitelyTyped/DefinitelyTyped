// Type definitions for angular-local-storage v0.1.5
// Project: https://github.com/grevory/angular-local-storage
// Definitions by: Ken Fukuyama <https://github.com/kenfdev>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../angularjs/angular.d.ts' />

declare module ng.local.storage {
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
    setPrefix(prefix: string):ILocalStorageServiceProvider;
    /**
     * Setter for the storageType
     * @param storageType localstorage or sessionStorage. default: localStorage
     */
    setStorageType(storageType: string):ILocalStorageServiceProvider;
    /**
     * Setter for cookie config
     * @param exp number of days before cookies expire (0 = does not expire). default: 30
     * @param path the web path the cookie represents. default: '/'
     */
    setStorageCookie(exp: number, path: string):ILocalStorageServiceProvider;
    /**
     * Set the cookie domain, since this runs inside a the config() block, only providers and constants can be injected. As a result, $location service can't be used here, use a hardcoded string or window.location.
     * No default value
     */
    setStorageCookieDomain(domain: string):ILocalStorageServiceProvider;
    /**
     * Send signals for each of the following actions:
     * @param setItem default: true
     * @param removeItem default: false
     */
    setNotify(setItem: boolean, removeItem: boolean):ILocalStorageServiceProvider;
  }

  interface ICookie {
    /**
     * Checks if cookies are enabled in the browser.
     * Returns: Boolean
     */
    isSupported:boolean;
    /**
     * Directly adds a value to cookies.
     * Note: Typically used as a fallback if local storage is not supported.
     * Returns: Boolean
     * @param key
     * @param val
     */
    set(key:string, val:string):boolean;
    /**
     * Directly get a value from a cookie.
     * Returns: value from local storage
     * @param key
     */
    get(key:string):string;
    /**
     * Remove directly value from a cookie.
     * Returns: Boolean
     * @param key
     */
    remove(key:string):boolean;
    /**
     * Remove all data for this app from cookie.
     */
    clearAll():any;

  }

  interface ILocalStorageService<T> {
    /**
     * Checks if the browser support the current storage type(e.g: localStorage, sessionStorage).
     * Returns: Boolean
     */
    isSupported:boolean;
    /**
     * Returns: String
     */
    getStorageType():string;
    /**
     * Directly adds a value to local storage.
     * If local storage is not supported, use cookies instead.
     * Returns: Boolean
     * @param key
     * @param value
     */
    set(key: string, value: T): boolean;
    /**
     * Directly get a value from local storage.
     * If local storage is not supported, use cookies instead.
     * Returns: value from local storage
     * @param key
     */
    get(key: string): T;
    /**
     * Return array of keys for local storage, ignore keys that not owned.
     * Returns: value from local storage
     */
    keys(): string[];
    /**
     * Remove an item from local storage by key.
     * If local storage is not supported, use cookies instead.
     * Returns: Boolean
     * @param key
     */
    remove(key: string): boolean;
    /**
     * Remove all data for this app from local storage.
     * If local storage is not supported, use cookies instead.
     * Note: Optionally takes a regular expression string and removes matching.
     * Returns: Boolean
     * @param regularExpression
     */
    clearAll(regularExpression?:RegExp):boolean;
    /**
     * Bind $scope key to localStorageService.
     * Usage: localStorageService.bind(scope, property, value[optional], key[optional])
     * Returns: deregistration function for this listener.
     * @param scope
     * @param property
     * @param value optional
     * @param key The corresponding key used in local storage
     */
    bind(scope:ng.IScope, property: string, value?: any, key?: string): Function;
    /**
     * Return the derive key
     * Returns String
     * @param key
     */
    deriveKey(key:string):string;
    /**
     * Return localStorageService.length, ignore keys that not owned.
     * Returns Number
     */
    length():number;
    /**
     * Deal with browser's cookies directly.
     */
    cookie:ICookie;
  }
}
