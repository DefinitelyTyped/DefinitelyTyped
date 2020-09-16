// Type definitions for non-npm package bdapi 0.2
// Project: https://github.com/rauenzi/BetterDiscordApp
// Definitions by: Ari Seyhun <https://github.com/Acidic9>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
// Documentation: https://github.com/rauenzi/BetterDiscordApp/wiki/Creating-Plugins#bdapi

import * as ReactInstance from 'react';
import * as ReactDOMInstance from 'react-dom';

export const BdApi: typeof BdApiModule;

/**
 * Function with no arguments and no return value that may be called to revert changes made by monkeyPatch method,
 * restoring (unpatching) original method.
 */
export type CancelPatch = () => void;

/**
 * A callback that modifies method logic.
 * This callback is called on each call of the original method and is provided all data about original call.
 * Any of the data can be modified if necessary, but do so wisely.
 */
export type PatchFunction = (data: PatchData) => any;

/**
 * A callback that modifies method logic.
 * This callback is called on each call of the original method and is provided all data about original call.
 * Any of the data can be modified if necessary, but do so wisely.
 */
export interface PatchData {
    thisObject: object;
    methodArguments: any[];
    CancelPatch: CancelPatch;
    originalMethod: () => void;
    callOriginalMethod: () => void;
    returnValue: any;
}

export interface MonkeyPatchOptions {
    once?: boolean;
    silent?: boolean;
    displayName?: string;
    before?: PatchFunction;
    after?: PatchFunction;
    instead?: PatchFunction;
}

export interface ToastOptions {
    type?: string;
    icon?: boolean;
    timeout?: number;
}

export namespace BdApiModule {
    /**
     * The React module being used inside Discord.
     */
    const React: typeof ReactInstance;

    /**
     * The ReactDOM module being used inside Discord.
     */
    const ReactDOM: typeof ReactDOMInstance;

    /**
     * Creates an shows an alert modal to the user. A preview of how it may look can be found [here](https://i.zackrauen.com/7qnnNC.png).
     */
    function alert(title: string, content: string): void;

    /**
     * Removes a style added with [`injectCSS`](#injectcssid-css) below.
     */
    function clearCSS(id: string): void;

    /**
     * Deletes some saved data for plugin `pluginName` with key `key`.
     */
    function deleteData(pluginName: string, key: string): void;

    /**
     * Searches for an internal Discord webpack module based on `filter`.
     */
    function findModule(filter: () => void): any;

    /**
     * Searches for multiple internal Discord webpack module based on `filter`. It's the same as [`findModule`](#findmodulefilter) but will return all matches
     */
    function findAllModules(filter: () => void): any[];

    /**
     * Searches for an internal Discord webpack module that has every property passed.
     */
    function findModuleByProps(...props: string[]): any;

    /**
     * Returns BandagedBD's instance of the core module. Only use this if you know what you are doing.
     */
    function getCore(): any; // TODO: This should not return 'any' but instead 'Core'

    /**
     * Alias for [loadData(pluginName, key)](#loaddatapluginname-key)
     */
    function getData(pluginName: string, key: string): any;

    /**
     * Gets the internal react instance for a particular node.
     */
    function getInternalInstance(node: HTMLElement): object|undefined;

    /**
     * Gets the instance of another plugin with the name `name`.
     */
    function getPlugin(name: string): object|null;

    /**
     * Adds a block of css to the current document's `head`.
     */
    function injectCSS(id: string, css: string): object|null;

    /**
     * Links some remote JavaScript to be added to the page. Useful for libraries like `Sortable.js`.
     */
    function linkJS(id: string, url: string): void;

    /**
     * Gets some saved data for plugin `pluginName` with key `key`. Data can be saved with [`saveData`](#savedatapluginname-key-data).
     */
    function loadData(pluginName: string, key: string): any;

    /**
     * This function monkey-patches a method on an object. The patching callback may be run before, after or instead of target method.
     * - Be careful when monkey-patching. Think not only about original functionality of target method and your changes,
     * but also about developers of other plugins, who may also patch this method before or after you.
     * Try to change target method behaviour as little as possible, and avoid changing method signatures.
     * - Display name of patched method is changed, so you can see if a function has been patched (and how many times) while debugging or in the stack trace.
     * Also, patched methods have property `__monkeyPatched` set to `true`, in case you want to check something programmatically.
     */
    function monkeyPatch(module: object, methodName: string, options: MonkeyPatchOptions): CancelPatch;

    /**
     * Adds a listener for when the node is removed from the document body.
     */
    function onRemoved(node: HTMLElement, callback: () => void): void;

    /**
     * Saved some `data` for plugin `pluginName` under `key` key. Gets saved in the plugins folder under `pluginName.config.json`. Data can be saved with [`loadData`](#loaddatapluginname-key).
     */
    function saveData(pluginName: string, key: string, data: any): void;

    /**
     * Alias for [saveData(pluginName, key, data)](#savedatapluginname-key-data)
     *
     */
    function setData(pluginName: string, key: string, data: any): void;

    /**
     * Shows a simple toast message similar to on Android. An example of the `success` toast can be seen [here](https://i.zackrauen.com/zIagVa.png).
     */
    function showToast(content: string, options?: ToastOptions): void;

    /**
     * Wraps a function in a try catch block.
     */
    function suppressErrors(method: () => void, message?: string): () => void;

    /**
     * Determines if the input is valid and parseable JSON.
     */
    function testJSON(data: string): boolean;

    /**
     * Removes some previously linked JS by [`linkJS`](#linkjsid-url).
     */
    function unlinkJS(id: string): void;
}
