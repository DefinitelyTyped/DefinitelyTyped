/// <reference types="angular" />

import * as angular from "angular";

declare module "angular" {
    export namespace locker {
        interface ILockerServicePutFunction {
            (current: any): any;
        }

        interface ILockerService {
            /**
             * Add an item to storage if it doesn't already exist
             *
             * @param  key    The key to add
             * @param  value  The value to add
             */
            add(key: string, value: any): boolean;
            /**
             * Return all items in storage within the current namespace/driver
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
             * @param  key  The key to get
             * @param         def  The default value if it does not exist
             */
            get(key: string | Array<string>, defaultValue?: any): any;
            /**
             * Determine whether the item exists in storage
             *
             * @param  key  -  The key to remove
             */
            has(key: string): boolean;
            /**
             * Get the storage keys as an array
             */
            keys(): Array<string>;
            /**
             * Add a new item to storage (even if it already exists)
             *
             * @param  keyValuePairs    Key value object
             */
            put(keyValuePairs: Object): ILockerService | boolean;
            /**
             * Add a new item to storage (even if it already exists)
             *
             * @param  putFunction    The default to pass to function if doesn't already exist
             */
            put(putFunction: Function): ILockerService | boolean;
            /**
             * Add a new item to storage (even if it already exists)
             *
             * @param  key    The key to add
             * @param  value  The value to add
             */
            put(key: string, value: any): ILockerService | boolean;
            /**
             * Add a new item to storage (even if it already exists)
             *
             * @param  key    The key to add
             * @param  putFunction    The default to pass to function if doesn't already exist
             * @param  value  The value to add
             */
            put(key: string, putFunction: ILockerServicePutFunction, value: any): ILockerService | boolean;
            /**
             * Remove specified item(s) from storage
             *
             * @param  key  The key to remove
             */
            forget(key: string): ILockerService;
            /**
             * Remove specified item(s) from storage
             *
             * @param  keys  The array of keys to remove
             */
            forget(keys: Array<string>): ILockerService;
            /**
             * Retrieve the specified item from storage and then remove it
             *
             * @param  key  The key to pull from storage
             * @param   def  The default value if it does not exist
             */
            pull(key: string | Array<string>, defaultValue?: any): any;
            /**
             * Bind a storage key to a $scope property
             *
             * @param  $scope  The angular $scope object
             * @param  key     The key in storage to bind to
             * @param   def     The default value to initially bind
             */
            bind(scope: IScope, property: string, defaultPropertyValue?: any): ILockerService;
            /**
             * Set the storage driver on a new instance to enable overriding defaults
             *
             * @param  driver  The driver to switch to
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
             * @param  options  The config options to instantiate with
             */
            instance(lockerSettings: ILockerSettings): ILockerService;
            /**
             * Set the namespace on a new instance to enable overriding defaults
             *
             * @param  namespace  The namespace to switch to
             */
            "namespace"(name: string): ILockerService;
            /**
             * Check browser support
             *
             * @see github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/localstorage.js#L38-L47
             *
             * @param  driver  The driver to check support with
             */
            supported(driver: string): boolean;
            /**
             * Unbind a storage key from a $scope property
             *
             * @param  $scope  The angular $scope object
             * @param  key     The key to remove from bindings
             */
            unbind(scope: IScope, property: string): ILockerService;
        }

        interface ILockerSettings {
            driver?: string | undefined;
            "namespace"?: string | boolean | undefined;
            separator?: string | undefined;
            eventsEnabled?: boolean | undefined;
            extend?: Object | undefined;
        }

        interface ILockerProvider extends angular.IServiceProvider {
            /**
             * Allow the defaults to be specified via the `lockerProvider`
             *
             * @param  lockerSettings  The defaults to override
             */
            defaults(lockerSettings: ILockerSettings): void;
        }
    }
}
