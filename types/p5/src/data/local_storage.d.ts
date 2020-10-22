// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Stores a value in local storage under the key
         *   name. Local storage is saved in the browser and
         *   persists between browsing sessions and page
         *   reloads. The key can be the name of the variable
         *   but doesn't have to be. To retrieve stored items
         *   see getItem.  Sensitive data such as passwords or
         *   personal information should not be stored in local
         *   storage.
         */
        storeItem(key: string, value: string | number | object | boolean | Color): void;

        /**
         *   Returns the value of an item that was stored in
         *   local storage using storeItem()
         *   @param key name that you wish to use to store in
         *   local storage
         *   @return Value of stored item
         */
        getItem(key: string): number | object | string | boolean | Color;

        /**
         *   Clears all local storage items set with
         *   storeItem() for the current domain.
         */
        clearStorage(): void;

        /**
         *   Removes an item that was stored with storeItem()
         */
        removeItem(key: string): void;
    }
}
