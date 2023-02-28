// Type definitions for non-npm package bdapi 0.3
// Project: https://github.com/rauenzi/BetterDiscordApp
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
// Documentation: https://github.com/rauenzi/BetterDiscordApp/wiki/Creating-Plugins#bdapi

import * as ReactInstance from 'react';
import * as ReactDOMInstance from 'react-dom';
import * as _ from 'lodash';

export {};

declare global {
    const BdApi: typeof BdApiModule;
    const _: typeof _;
    interface Window {
        BdApi: typeof BdApiModule;
        _: typeof _;
    }
    const global: Window;
}

/**
 * Plugins must have a default export of a class that implements this interface
 * @see https://github.com/BetterDiscord/BetterDiscord/wiki/Creating-Plugins
 */
export interface BdPlugin {
    /**
     * The name for the plugin to be displayed to the user in the plugins page and for internal settings to use.
     *
     * Note: This is no longer required if it is included in the meta.
     * @returns the name for the plugin.
     */
    getName?(): string;

    /**
     * The description of the plugin shown in the plugins page.
     *
     * Note: This is no longer required if it is included in the meta.
     * @returns the description of the plugin.
     */
    getDescription?(): string;

    /**
     * The version of the plugin displayed in the plugins page.
     *
     * Note: This is no longer required if it is included in the meta.
     * @returns the version of the plugin.
     */
    getVersion?(): string;

    /**
     * The author string for the plugin displayed in the plugins page.
     *
     * Note: This is no longer required if it is included in the meta.
     * @returns the author of the plugin.
     */
    getAuthor?(): string;

    /**
     * Called when the plugin is enabled or when it is loaded and was previously reloaded (such as discord start or reload).
     */
    start(): void;

    /**
     * Called when the plugin is disabled.
     */
    stop(): void;

    /**
     * Called when the user clicks on the settings button for the plugin. If this function is not implemented the button is not shown.
     *
     * Note: The button will be disabled if the plugin is disabled to avoid errors with not-started plugins.
     */
    getSettingsPanel?(): string;

    /**
     * Called when the plugin is loaded regardless of if it is enabled or disabled.
     */
    load?(): void;

    /**
     * Called on every mutation that occurs on the document. For more information on observers and mutations take a look at
     * [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
     * @param e The mutation that occurred.
     */
    observer?(e: MutationRecord): void;

    /**
     * Called every time the user navigates such as changing channel, changing servers, changing to friends list, etc.
     */
    onSwitch?(): void;
}

/**
 * Function with no arguments and no return value that may be called to revert changes made by `monkeyPatch` method, restoring (unpatching) original method.
 */
export type CancelPatch = () => void;

/**
 * A callback that modifies method logic.
 * This callback is called on each call of the original method and is provided all data about original call.
 * Any of the data can be modified if necessary, but do so wisely.
 * @param data Data object with information about current call and original method that you may need in your patching callback.
 * @returns Makes sense only when used as `instead` parameter in `monkeyPatch`. If something other than `undefined` is returned, the returned value replaces the value of `data.returnValue`.
 * If used as `before` or `after` parameters, return value is ignored.
 */
export type PatchFunction = (data: PatchData) => any;

/**
 * A callback that modifies method logic.
 * This callback is called on each call of the original method and is provided all data about original call.
 * Any of the data can be modified if necessary, but do so wisely.
 * @param thisObject Original `this` value in current call of patched method.
 * @param methodArguments Original `arguments` object in current call of patched method.
 * Please, never change function signatures, as it may cause a lot of problems in future.
 * @param CancelPatch Function with no arguments and no return value that may be called to reverse patching of current method.
 * Calling this function prevents running of this callback on further original method calls.
 * @param originalMethod Reference to the original method that is patched. You can use it if you need some special usage.
 * You should explicitly provide a value for `this` and any method arguments when you call this function.
 * @param callOriginalMethod This is a shortcut for calling original method using `this` and arguments from original call.
 * @param returnValue This is a value returned from original function call. This property is available only in `after` callback or in `instead callback` after calling `callOriginalMethod` function.
 */
export interface PatchData {
    thisObject: object;
    methodArguments: any[];
    CancelPatch: CancelPatch;
    originalMethod: () => void;
    callOriginalMethod: () => void;
    returnValue: any;
}

/**
 * Passed into the `options` paramater of `BdApi#monkeyPatch`
 * @param once Set to `true` if you want to automatically unpatch method after first call.
 * @param silent Set to `true` if you want to suppress log messages about patching and unpatching.
 * Useful to avoid clogging the console in case of frequent conditional patching/unpatching, for example from another monkeyPatch callback.
 * @param displayName You can provide meaningful name for class/object provided in `what` param for logging purposes. By default, this function will try to determine name automatically.
 * @param before Callback that will be called before original target method call. You can modify arguments here, so it will be passed to original method. Can be combined with `after`.
 * @param after Callback that will be called after original target method call. You can modify return value here, so it will be passed to external code which calls target method.
 * Can be combined with `before`.
 * @param instead Callback that will be called instead of original target method call.
 * You can get access to original method using `originalMethod` parameter if you want to call it, but you do not have to. Can't be combined with `before` and `after`.
 */
export interface MonkeyPatchOptions {
    once?: boolean | undefined;
    silent?: boolean | undefined;
    displayName?: string | undefined;
    before?: PatchFunction | undefined;
    after?: PatchFunction | undefined;
    instead?: PatchFunction | undefined;
}

/**
 * Passed into the `options` paramater of `BdApi#showToast`
 * @param type Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: ""
 * @param icon Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: true
 * @param timeout Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: 3000
 */
export interface ToastOptions {
    type?: string | undefined;
    icon?: boolean | undefined;
    timeout?: number | undefined;
}

/**
 * Passed into the `options` paramater of `BdApi#showConfirmationModal`
 * @param options.danger Whether the main button should be red or not.
 * @param options.confirmText Text for the confirmation/submit button.
 * @param options.canceltext Text for the cancel button.
 * @param options.onConfirm Callback to occur when clicking the submit button.
 * @param options.onCancel Callback to occur when clicking the cancel button.
 */
export interface ConfirmationModalOptions {
    danger?: boolean | undefined;
    confirmText?: string | undefined;
    cancelText?: string | undefined;
    onConfirm?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
}

/**
 * The following functions are available as a part of each `AddonAPI` object from `BdApi`.
 */
declare class AddonAPI {
    /**
     * String representing the resolved location of the user's addon folder.
     */
    readonly folder: string;

    /**
     * Checks if the given addon is currently enabled.
     * @param name The name/identifier of the addon.
     * @returns Indicates if the addon is enabled.
     */
    isEnabled(name: string): boolean;

    /**
     * Enables the given addon
     * @param name The name/identifier of the addon.
     */
    enable(name: string): void;

    /**
     * Disables the given addon.
     * @param name The name/identifier of the addon.
     */
    disable(name: string): void;

    /**
     * Toggle the enablement the given addon.
     * @param name The name/identifier of the addon.
     */
    toggle(name: string): void;

    /**
     * Gets the "instance" of the given addon.
     * @param name The name/identifier of the addon.
     * @returns For plugins, this is the plugin instance, for themes this is the meta + css.
     */
    get(name: string): object;

    /**
     * Gets all the "instances" of addon type.
     * @returns An array matching the output of get.
     */
    getAll(): void;
}

declare namespace BdApiModule {
    /**
     * The React module being used inside Discord.
     */
    const React: typeof ReactInstance;

    /**
     * The ReactDOM module being used inside Discord.
     */
    const ReactDOM: typeof ReactDOMInstance;

    /**
     * An instance of AddonAPI to access plugins.
     */
    const Plugins: typeof AddonAPI;

    /**
     * Gives access to BBD's internal settings object and is therefore subject to change.
     */
    const settings: any;

    /**
     * Gives access to BBD's internal emotes object and is therefore subject to change.
     */
    const emotes: any;

    /**
     * Yields the total active width of the application.
     */
    const screenWidth: number;

    /**
     * Yields the total active height of the application.
     */
    const screenHeight: number;

    /**
     * Creates an shows an alert modal to the user. A preview of how it may look can be found [here](https://i.zackrauen.com/7qnnNC.png).
     * @param title The title to show on the modal.
     * @param content Content to show in the modal (can be html string).
     */
    function alert(title: string, content: string): void;

    /**
     * Removes a style added with `injectCSS` below.
     * @param id ID of the node to remove.
     */
    function clearCSS(id: string): void;

    /**
     * Deletes some saved data for plugin `pluginName` with key `key`.
     * @param pluginName Which plugin this is being used for.
     * @param key Key for which data should be deleted.
     */
    function deleteData(pluginName: string, key: string): void;

    /**
     * Disables a BBD setting by id.
     * @param id Id for the setting.
     */
    function disableSetting(id: string): void;

    /**
     * Enables a BBD setting by id.
     * @param id Id for the setting.
     */
    function enableSetting(id: string): void;

    /**
     * Searches for an internal Discord webpack module based on `filter`.
     * @param filter A function to use to filter modules.
     * @returns The modules found or null if none were found.
     */
    function findModule(filter: (module: any) => boolean): any;

    /**
     * Searches for multiple internal Discord webpack module based on `filter`. It's the same as `findModule` but will return all matches.
     * @param filter A function to use to filter modules.
     * @returns The modules found or null if none were found.
     */
    function findAllModules(filter: (module: any) => boolean): any[] | null;

    /**
     * Searches for an internal Discord webpack module that has every property passed.
     * @param props A series of properties to check for.
     * @returns The modules found or null if none were found.
     */
    function findModuleByProps(...props: string[]): any;

    /**
     * Searches for an internal Discord webpack module that has every property passed on its prototype.
     * @param props A series of prototype properties to check for
     * @returns The modules found or null if none were found..
     */
    function findModuleByPrototypes(...props: string[]): any;

    /**
     * Searches for an internal Discord webpack module with a specific `displayName` value.
     * @param name The `displayName` to look for.
     * @returns The modules found or null if none were found.
     */
    function findModuleByDisplayName(name: string): any;

    /**
     * Returns BandagedBD's instance of the core module. Only use this if you know what you are doing.
     * @deprecated since 2020.3.27
     * @returns BBD's instantiated core module.
     */
    function getCore(): any; // TODO: This should not return 'any' but instead 'Core'
    // Not worth it in my opinion because it's deprecated (commit caf3406e0a22a24dc5ad76d9c51edb3330d379b7)

    /**
     * Alias for loadData(pluginName, key)
     * @param pluginName Which plugin this is being used for.
     * @param key Key for which data should be returned.
     * @returns The information that was saved previously, or null otherwise.
     */
    function getData(pluginName: string, key: string): any;

    /**
     * Gets the internal react instance for a particular node.
     * @param node jQuery
     * @returns The instance if found or undefined otherwise.
     */
    function getInternalInstance(node: HTMLElement): object | undefined;

    /**
     * Gets the instance of another plugin with the name `name`.
     * @deprecated since unknown
     * @param name Name of the plugin to retreive.
     * @returns The plugin if found or null otherwise.
     */
    function getPlugin(name: string): object | null;

    /**
     * Adds a block of css to the current document's `head`.
     * @param id Identifier for the node to be added. Can be used later with `clearCSS` from above.
     * @param css String of css to be added.
     * @returns The plugin if found or null otherwise.
     */
    function injectCSS(id: string, css: string): object | null;

    /**
     * Links some remote JavaScript to be added to the page. Useful for libraries like `Sortable.js`.
     * @param id Identifier for the node to be added. Can be used later with `unlinkJS` below.
     * @param url URL of the js.
     */
    function linkJS(id: string, url: string): void;

    /**
     * Gets some saved data for plugin `pluginName` with key `key`. Data can be saved with `saveData`.
     * @param pluginName Which plugin this is being used for.
     * @param key Key for which data should be returned.
     * @returns The information that was saved previously, or null otherwise.
     */
    function loadData(pluginName: string, key: string): any;

    /**
     * This function monkey-patches a method on an object. The patching callback may be run before, after or instead of target method.
     * - Be careful when monkey-patching. Think not only about original functionality of target method and your changes,
     * but also about developers of other plugins, who may also patch this method before or after you.
     * Try to change target method behaviour as little as possible, and avoid changing method signatures.
     * - Display name of patched method is changed, so you can see if a function has been patched (and how many times) while debugging or in the stack trace.
     * Also, patched methods have property `__monkeyPatched` set to `true`, in case you want to check something programmatically.
     * @param module Object to be patched. You can can also pass class prototypes to patch all class instances.
     * @param methodName The name of the target message to be patched.
     * @param options Options object. You should provide at least one of `before`, `after` or `instead` parameters. Other parameters are optional.
     * @param options.once Set to `true` if you want to automatically unpatch method after first call.
     * @param options.silent Set to `true` if you want to suppress log messages about patching and unpatching.
     * Useful to avoid clogging the console in case of frequent conditional patching/unpatching, for example from another monkeyPatch callback.
     * @param options.displayName You can provide meaningful name for class/object provided in `what` param for logging purposes.
     * By default, this function will try to determine name automatically.
     * @param options.before Callback that will be called before original target method call. You can modify arguments here, so it will be passed to original method.Can be combined with `after`.
     * @param options.after Callback that will be called after original target method call. You can modify return value here, so it will be passed to external code which calls target method.
     * Can be combined with `before`.
     * @param options.instead Callback that will be called instead of original target method call.
     * You can get access to original method using `originalMethod` parameter if you want to call it, but you do not have to.
     * Can't be combined with `before` and `after`.
     * @returns A cancel function which allows you to undo the patch.
     */
    function monkeyPatch(module: object, methodName: string, options: MonkeyPatchOptions): CancelPatch;

    /**
     * Adds a listener for when the node is removed from the document body.
     * @param node Node to wait for.
     * @param callback Function to be performed on event.
     */
    function onRemoved(node: HTMLElement, callback: () => void): void;

    /**
     * Saved some `data` for plugin `pluginName` under `key` key. Gets saved in the plugins folder under `pluginName.config.json`. Data can be saved with `loadData`.
     * @param pluginName Which plugin this is being used for.
     * @param key Key for the data should be saved under.
     * @param data Data to save.
     */
    function saveData(pluginName: string, key: string, data: any): void;

    /**
     * Alias for saveData(pluginName, key, data)
     * @param pluginName Which plugin this is being used for.
     * @param key Key for the data should be saved under.
     * @param data Data to save.
     */
    function setData(pluginName: string, key: string, data: any): void;

    /**
     * Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.
     * @param title Title of the modal.
     * @param content A single or mixed array of react elements and strings. Everything is wrapped in Discord's `TextElement` component so strings will show and render properly.
     * @param options Options to modify the modal.
     * @param options.danger Whether the main button should be red or not.
     * @param options.confirmText Text for the confirmation/submit button.
     * @param options.canceltext Text for the cancel button.
     * @param options.onConfirm Callback to occur when clicking the submit button.
     * @param options.onCancel Callback to occur when clicking the cancel button.
     */
    function showConfirmationModal(title: string, content: string, options?: ConfirmationModalOptions): void;

    /**
     * Shows a simple toast message similar to on Android. An example of the `success` toast can be seen [here](https://i.zackrauen.com/zIagVa.png).
     * @param content Content to show inside the toast.
     * @param options Options for the toast.
     * @param options.type Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: ""
     * @param options.icon Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: true
     * @param options.timeout Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: 3000
     */
    function showToast(content: string, options?: ToastOptions): void;

    /**
     * Wraps a function in a try catch block.
     * @param method Function to wrap.
     * @param message Additional info for any errors.
     */
    function suppressErrors(method: () => void, message?: string): () => void;

    /**
     * Determines if the input is valid and parseable JSON.
     * @param data Data to test.
     * @returns True if the data is valid, false otherwise.
     */
    function testJSON(data: string): boolean;

    /**
     * Toggles a BBD setting by id.
     * @param id Id for the setting.
     */
    function toggleOption(id: string): void;

    /**
     * Removes some previously linked JS by `linkJS`.
     * @param id ID of the node to remove.
     */
    function unlinkJS(id: string): void;
}
