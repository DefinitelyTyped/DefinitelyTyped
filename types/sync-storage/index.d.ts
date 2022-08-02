// Type definitions for sync-storage library for React Native
// Project: https://github.com/raphaelpor/sync-storage
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module "sync-storage" {
    /*
    *  Init prepares the SyncStorage to work synchronously, by getting all values for all keys previously saved on RN AsyncStorage.
    */
    export function init(): any;
    /*
    *  Returns value of key
    */
    export function get(key: string): any;
    /*
    *  Saves value in memory and AsyncStorage. Also returns a promise for verification.
    */
    export function set(key: string, value: any): Promise<void>;
    /*
    *  Removes value from memory and AsyncStorage. Also returns a promise.
    */
    export function remove(key: string): Promise<void>;
    /*
    *  Returns all stored keys in an array.
    */
    export function getAllKeys(): any[];
}
