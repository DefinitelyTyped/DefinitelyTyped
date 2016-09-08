// Type definitions for Angular Locker v2.0.3
// Project: https://github.com/tymondesigns/angular-locker
// Definitions by: Niko Kovačič <https://github.com/nkovacic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module "angular-locker" {
    var _: string;
    export = _;
}

declare namespace angular.locker {
    interface ILockerServicePutFunction {
        (current: any): any
    }

    interface ILockerService {
        /**
        * Add an item to storage if it doesn't already exist
        *
        * @param  {String}  key    The key to add
        * @param  {Mixed}  value  The value to add
        */
        add(key: string, value: any): boolean;
        /**
        * Return all items in storage within the current namespace/driver
        *
        */
        all(): any;
        /**
        * Remove all items set within the current namespace/driver
        */
        clean(): ILockerService;
        /**
        * Get the total number of items within the current namespace
        */
        count(): number;
        /**
        * Retrieve the specified item from storage
        *
        * @param  {String|Array}  key  The key to get
        * @param  {Mixed}         def  The default value if it does not exist
        */
        get(key: string | Array<string>, defaultValue?: any): any;
        /**
        * Determine whether the item exists in storage
        *
        * @param  {String|Function}  key  -  The key to remove
        */
        has(key: string): boolean
        /**
        * Get the storage keys as an array
        */
        keys(): Array<string>;
        /**
        * Add a new item to storage (even if it already exists)
        *
        * @param  {Object}  keyValuePairs    Key value object
        */
        put(keyValuePairs: Object): ILockerService | boolean;
        /**
        * Add a new item to storage (even if it already exists)
        *
        * @param  {Mixed}  putFunction    The default to pass to function if doesn't already exist
        */
        put(putFunction: Function): ILockerService | boolean;
        /**
        * Add a new item to storage (even if it already exists)
        *
        * @param  {Mixed}  key    The key to add
        * @param  {Mixed}  value  The value to add
        */
        put(key: string, value: any): ILockerService | boolean;
        /**
        * Add a new item to storage (even if it already exists)
        *
        * @param  {Mixed}  key    The key to add
        * @param  {Mixed}  putFunction    The default to pass to function if doesn't already exist
        * @param  {Mixed}  value  The value to add
        */
        put(key: string, putFunction: ILockerServicePutFunction, value: any): ILockerService | boolean;
        /**
        * Remove specified item(s) from storage
        *
        * @param  {String}  key  The key to remove
        */
        forget(key: string): ILockerService;
        /**
        * Remove specified item(s) from storage
        *
        * @param  {Array}  keys  The array of keys to remove
        *
        */
        forget(keys: Array<string>): ILockerService;
        /**
        * Retrieve the specified item from storage and then remove it
        *
        * @param  {String|Array}  key  The key to pull from storage
        * @param  {Mixed}   def  The default value if it does not exist
        */
        pull(key: string | Array<string>, defaultValue?: any): any;
        /**
        * Bind a storage key to a $scope property
        *
        * @param  {Object}  $scope  The angular $scope object
        * @param  {String}  key     The key in storage to bind to
        * @param  {Mixed}   def     The default value to initially bind
        */
        bind(scope: IScope, property: string, defaultPropertyValue?: any): ILockerService;
        /**
        * Set the storage driver on a new instance to enable overriding defaults
        *
        * @param  {String}  driver  The driver to switch to
        */
        driver(localStorageType: string): ILockerService;
        /**
        * Empty the current storage driver completely. careful now.
        */
        empty(): ILockerService;
        /**
        * Get the currently set namespace
        */
        getNamespace(): string;
        /**
        * Get a new instance of Locker
        *
        * @param  {Object}  options  The config options to instantiate with
        */
        instance(lockerSettings: ILockerSettings): ILockerService;
        /**
        * Set the namespace on a new instance to enable overriding defaults
        *
        * @param  {String}  namespace  The namespace to switch to
        */
        'namespace'(name: string): ILockerService;
        /**
        * Check browser support
        *
        * @see github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/localstorage.js#L38-L47
        *
        * @param  {String}  driver  The driver to check support with
        */
        supported(): boolean;
        /**
        * Unbind a storage key from a $scope property
        *
        * @param  {Object}  $scope  The angular $scope object
        * @param  {String}  key     The key to remove from bindings
        */
        unbind(scope: IScope, property: string): ILockerService;
    }

    interface ILockerSettings {
        driver?: string;
        'namespace'?: string | boolean;
        separator?: string;
        eventsEnabled?: boolean;
        extend?: Object;
    }

    interface ILockerProvider extends angular.IServiceProvider {
        /**
        * Allow the defaults to be specified via the `lockerProvider`
        *
        * @param {ILockerSettings}  lockerSettings  The defaults to override
        */
        defaults(lockerSettings: ILockerSettings): void;
    }
}
