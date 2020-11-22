// Type definitions for non-npm package office-runtime 1.0
// Project: https://github.com/OfficeDev/office-js
// Definitions by: OfficeDev <https://github.com/OfficeDev>,
//                 Michelle Scharlock <https://github.com/mscharlock>,
//                 David Chesnut <https://github.com/davidchesnut>,
//                 Alex Jerabek <https://github.com/AlexJerabek>,
//                 Sudhi Ramamurthy <https://github.com/sumurthy>,
//                 Ricky Kirkham <https://github.com/rick-kirkham>,
//                 Alison McKay <https://github.com/alison-mk>
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
   *
   * [Api set: SharedRuntime 1.1]
   *
   * @param url Must be a string.
   * @param options Optional parameter. Must be of type DisplayWebDialogOptions.
   */
  function displayWebDialog(url: string, options?: DisplayWebDialogOptions): Promise<Dialog>;
  /**
   * Asynchronous, global, and persistent key-value storage.
   */
  const storage: Storage;
  /**
   * Asynchronous, global, and persistent key-value storage.
   *
   * [Api set: SharedRuntime 1.1]
   *
   * @remarks
   * Storage limit is 10 MB per domain, which may be shared by multiple add-ins.
   */
  interface Storage {
    /**
     * Retrieves an item from storage based on its key.
     * Returns a Promise. In the event the Promise does not resolve, returns null.
     *
     * [Api set: SharedRuntime 1.1]
     *
     * @param key Key of item to be retrieved. Must be a string.
     */
    getItem(key: string): Promise<string | null>;
    /**
     * Sets a key-value pair into storage or updates an existing key-value pair.
     * Returns a Promise.
     *
     * [Api set: SharedRuntime 1.1]
     *
     * @param key Key of item to be set. Must be a string.
     * @param value Must be a string.
     */
    setItem(key: string, value: string): Promise<void>;
    /**
     * Removes an item from storage based on its key.
     * Returns a Promise.
     *
     * [Api set: SharedRuntime 1.1]
     *
     * @param key Key of item to be removed. Must be a string.
     */
    removeItem(key: string): Promise<void>;
    /**
     * Retrieves multiple items from storage based on their key.
     * Returns a Promise. In the event the Promise does not resolve, returns null.
     *
     * [Api set: SharedRuntime 1.1]
     *
     * @param keys Keys of items to be removed. Must be an array of strings.
     */
    getItems(keys: string[]): Promise<{ [key: string]: string | null }>;
    /**
     * Sets multiple items into storage or updates multiple items within storage.
     * Returns a Promise.
     *
     * [Api set: SharedRuntime 1.1]
     *
     * @param keyValues Key-value pairs to be set. Must be strings.
     */
    setItems(keyValues: { [key: string]: string }): Promise<void>;
    /**
     * Removes multiple items from storage.
     * Returns a Promise.
     *
     * [Api set: SharedRuntime 1.1]
     *
     * @param keys Keys of items to be removed. Must be an array of strings.
     */
    removeItems(keys: string[]): Promise<void>;
    /**
     * Retrieves an array of all keys from storage.
     *  Returns a Promise.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    getKeys(): Promise<string[]>;
  }
  /** Object representing the dialog box. */
  interface Dialog {
    /**
     * Method to close a dialog box. Returns a Promise.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    close(): Promise<void>;
  }
  /** Provides display options and actions a dialog box may take. */
  interface DisplayWebDialogOptions {
    /**
     * Optional parameter that determines whether the dialog box displays as a popup (false) or within an IFrame (true).
     * This setting is only applicable to custom functions running on Excel Online.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    displayInIFrame?: boolean;
    /**
     * Optional parameter that defines the height of the dialog box as a percentage of the current display.
     * For example, accepts strings such as: '50%', '50'.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    height?: string;
    /**
     * Optional parameter that defines the width of dialog as a percentage of window.
     * For example, accepts strings such as: '50%', '50'.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    width?: string;
    /**
     * Optional callback that runs when the dialog box sends a message to its parent.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    onMessage?: (message: string, dialog?: Dialog) => void;
    /**
     * Optional callback that runs when the dialog box is closed.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    onClose?: () => void;
    /**
     * Optional callback that runs when the dialog box sends an error.
     *
     * [Api set: SharedRuntime 1.1]
     *
     */
    onRuntimeError?: (error: Error, dialog?: Dialog) => void;
  }
  /**
   * Provides information about what Requirement Sets are supported in current environment.
   */
  const apiInformation: ApiInformation;
  /**
   * Interface that contains functions for checking API requirement-set support.
   */
  interface ApiInformation {
    /**
     * Check if the specified requirement set is supported by the host Office application.
     * @param name - Set name; e.g., "MatrixBindings".
     * @param minVersion - The minimum required version; e.g., "1.4".
     */
    isSetSupported(name: string, minVersion?: string): boolean;
  }
}
