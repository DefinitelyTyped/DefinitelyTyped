// Type definitions for office-runtime 1.0
// Project: http://dev.office.com/
// Definitions by: Michael Zlatskovsky <https://github.com/Zlatkovsky>, Michelle Scharlock <https://github.com/mscharlock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript Version: 2.4

/*
office-runtime
Copyright (c) Microsoft Corporation
*/

/**
 * Office runtime namespace.
 */
declare namespace OfficeRuntime {
    /**
     * Method that enables a pop up web dialog box.
     * @param url Must be a string.
     * @param options Optional parameter. Must be of type DisplayWebDialogOptions.
     */
    function displayWebDialog(url: string, options?: DisplayWebDialogOptions): Promise<Dialog>;
    /**
     * Asynchronous, global, and persistent key-value storage.
     * AsyncStorage will be deprecated in the future, please use Office.Storage instead.
     */
    const AsyncStorage: AsyncStorage;
    /**
     * Asynchronous, global, and persistent key-value storage.
     */
    const storage: Storage;

    /**
     * Asynchronous, global, and persistent key-value storage.
     * Storage limit is 10 MB per domain, which may be shared by multiple add-ins.
     * @remarks Will be deprecated in the future, please use Office.Storage instead.
     */
    interface AsyncStorage {
      /**
       * Retrieves an item by key, then issues a callback.
       * Returns a Promise.
       * @param key The name of the key to retrieve. Must be a string.
       * @param callback Returned result is a string.
       */
      getItem(key: string, callback?: (error?: Error, result?: string) => void): Promise<string>;
      /**
       * Creates a new key-value pair in storage or updates an existing key with a new value.
       * Returns a Promise.
       * @param key The name of the key for the key-value pair. Must be a string.
       * @param value The name of the value. Must be a string.
       * @param callback
       */
      setItem(key: string, value: string, callback?: (error?: Error) => void): Promise<void>;
      /**
       * Removes items by key and invokes a callback when finished.
       * It returns a Promise that resolves to an object containing the keys and values requested.
       * @param key The key of the item to be removed. Must be a string.
       * @param callback
       */
      removeItem(key: string, callback?: (error?: Error) => void): Promise<void>;
      /**
       * Retrieves all keys and invokes a callback when finished.
       * Returns a Promise.
       * @param callback
       */
      getAllKeys(callback?: (error?: Error, keys?: string[]) => void): Promise<string[]>;
      /**
       * Sets multiple key-value pairs and invokes a callback when finished.
       * Returns a Promise.
       * @param keyValuePairs Must be arrays of strings.
       * @param callback
       */
      multiSet(keyValuePairs: string[][], callback?: (errors?: Error[]) => void): Promise<void>;
      /**
       * Removes multiple items from storage and invokes a callback when finished.
       * Returns a Promise.
       * @param keys Keys of the items to be removed. Must be an array of strings.
       * @param callback
       */
      multiRemove(keys: string[], callback?: (errors?: Error[]) => void): Promise<void>;
      /**
       * Retrieves multiple items from storage and invokes a callback when finished.
       * Returns a Promise.
       * @param keys Keys of the items to be retrieved. Must be an array of strings.
       * @param callback
       */
      multiGet(keys: string[], callback?: (errors?: Error[], result?: string[][]) => void): Promise<string[][]>;
    }

    /**
     * Asynchronous, global, and persistent key-value storage.
     * @remarks
     * Storage limit is 10 MB per domain, which may be shared by multiple add-ins.
     */
    interface Storage {
      /**
       * Retrieves an item from storage based on its key.
       * Returns a Promise. In the event the Promise does not resolve, returns null.
       * @param key Key of item to be retrieved. Must be a string.
       */
      getItem(key: string): Promise<string | null>;
      /**
       * Sets a key-value pair into storage or updates an existing key-value pair.
       * Returns a Promise.
       * @param key Key of item to be set. Must be a string.
       * @param value Must be a string.
       */
      setItem(key: string, value: string): Promise<void>;
      /**
       * Removes an item from storage based on its key.
       * Returns a Promise.
       * @param key Key of item to be removed. Must be a string.
       */
      removeItem(key: string): Promise<void>;
      /**
       * Retrieves multiple items from storage based on their key.
       * Returns a Promise. In the event the Promise does not resolve, returns null.
       * @param keys Keys of items to be removed. Must be an array of strings.
       */
      getItems(keys: string[]): Promise<{ [key: string]: string | null }>;
      /**
       * Sets multiple items into storage or updates multiple items within storage.
       * Returns a Promise.
       * @param keyValues Key-value pairs to be set. Must be strings.
       */
      setItems(keyValues: { [key: string]: string }): Promise<void>;
      /**
       * Removes multiple items from storage.
       * Returns a Promise.
       * @param keys Keys of items to be removed. Must be an array of strings.
       */
      removeItems(keys: string[]): Promise<void>;
      /**
       * Retrieves an array of all keys from storage.
       *  Returns a Promise.
       */
      getKeys(): Promise<string[]>;
    }

    /** Object representing the dialog box. */
    interface Dialog {
      /** Method to close a dialog box. Returns a Promise. */
      close(): Promise<void>;
    }

    /** Provides display options and actions a dialog box may take. */
    interface DisplayWebDialogOptions {
      /**
       * Optional parameter that determines whether the dialog box displays as a popup (false) or within an IFrame (true).
       * This setting is only applicable to custom functions running on Excel Online.
       */
      displayInIFrame?: boolean;
      /**
       * Optional parameter that defines the height of the dialog box as a percentage of the current display.
       * For example, accepts strings such as: '50%', '50'.
       */
      height?: string;
      /**
       * Optional parameter that defines the width of dialog as a percentage of window.
       * For example, accepts strings such as: '50%', '50'.
       */
      width?: string;
      /**
       * Optional callback that runs when the dialog box sends a message to its parent.
       */
      onMessage?: (message: string, dialog?: Dialog) => void;
      /**
       * Optional callback that runs when the dialog box is closed.
       */
      onClose?: () => void;
      /**
       * Optional callback that runs when the dialog box sends an error.
       */
      onRuntimeError?: (error: Error, dialog?: Dialog) => void;
    }
}
