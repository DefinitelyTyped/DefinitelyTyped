import * as _ from "lodash";
import * as ReactInstance from "react";
import * as ReactDOMInstance from "react-dom";

export {};

declare global {
    const BdApi: BdApiModule.BdApi;
    const _: typeof _;

    interface Window {
        BdApi: BdApiModule.BdApi;
        _: typeof _;
    }

    const global: Window;
}

export type TextElement = string | ReactInstance.ReactElement;

declare namespace BdApiModule {
    /**
     * Function with no arguments and no return value that may be called to revert changes made by `monkeyPatch` method,
     * restoring (unpatching) original method.
     *
     * @deprecated
     */
    type CancelPatch = () => void;

    /**
     * A callback that modifies method logic.
     * This callback is called on each call of the original method and is provided all data about original call.
     * Any of the data can be modified if necessary, but do so wisely.
     *
     * @param data Data object with information about current call and original method that you may need in your
     * patching callback.
     * @returns Makes sense only when used as `instead` parameter in `monkeyPatch`. If something other than `undefined`
     * is returned, the returned value replaces the value of `data.returnValue`. If used as `before` or `after`
     * parameters, return value is ignored.
     * @deprecated
     */
    type PatchFunction = (data: PatchData) => any;

    /**
     * A callback that modifies method logic.
     * This callback is called on each call of the original method and is provided all data about original call.
     * Any of the data can be modified if necessary, but do so wisely.
     * @param thisObject Original `this` value in current call of patched method.
     * @param methodArguments Original `arguments` object in current call of patched method.
     * Please, never change function signatures, as it may cause a lot of problems in future.
     * @param CancelPatch Function with no arguments and no return value that may be called to reverse patching of
     * current method.
     * Calling this function prevents running of this callback on further original method calls.
     * @param originalMethod Reference to the original method that is patched. You can use it if you need some special
     * usage.
     * You should explicitly provide a value for `this` and any method arguments when you call this function.
     * @param callOriginalMethod This is a shortcut for calling original method using `this` and arguments from original
     * call.
     * @param returnValue This is a value returned from original function call. This property is available only in
     * `after` callback or in `instead callback` after calling `callOriginalMethod` function.
     * @deprecated
     */
    interface PatchData {
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
     * Useful to avoid clogging the console in case of frequent conditional patching/unpatching, for example from
     * another monkeyPatch callback.
     * @param displayName You can provide meaningful name for class/object provided in `what` param for logging
     * purposes.
     * By default, this function will try to determine name automatically.
     * @param before Callback that will be called before original target method call. You can modify arguments here,
     * so it will be passed to original method. Can be combined with `after`.
     * @param after Callback that will be called after original target method call. You can modify return value here,
     * so it will be passed to external code which calls target method. Can be combined with `before`.
     * @param instead Callback that will be called instead of original target method call. You can get access to
     * original method using `originalMethod` parameter if you want to call it, but you do not have to. Can't be
     * combined with `before` and `after`.
     * @deprecated
     */
    interface MonkeyPatchOptions {
        once?: boolean | undefined;
        silent?: boolean | undefined;
        displayName?: string | undefined;
        before?: PatchFunction | undefined;
        after?: PatchFunction | undefined;
        instead?: PatchFunction | undefined;
    }

    /**
     * BdApi is a globally ({@code window.BdApi}) accessible object for use by plugins and developers to make their
     * lives easier.
     */
    class BdApi {
        /**
         * An instance of {@link ContextMenuModule.ContextMenu} for interacting with context menus.
         */
        readonly ContextMenu: ContextMenuModule.ContextMenu;

        /**
         * An instance of {@link DOMModule.DOM} to interact with the DOM.
         */
        readonly DOM: DOMModule.DOM;

        /**
         * An instance of {@link DataModule.Data} to manage data.
         */
        readonly Data: DataModule.Data;

        /**
         * An instance of {@link PatcherModule.Patcher} to monkey patch functions.
         */
        readonly Patcher: PatcherModule.Patcher;

        /**
         * An instance of {@link AddonAPIModule.AddonAPI} to access plugins.
         */
        readonly Plugins: AddonAPIModule.AddonAPI;

        /**
         * An instance of {@link ReactUtilsModule.ReactUtils} to work with React.
         */
        readonly ReactUtils: ReactUtilsModule.ReactUtils;

        /**
         * An instance of {@link AddonAPIModule.AddonAPI} to access themes.
         */
        readonly Themes: AddonAPIModule.AddonAPI;

        /**
         * An instance of {@link UIModule.UI} to create interfaces.
         */
        readonly UI: UIModule.UI;

        /**
         * An instance of {@link UtilsModule.Utils} for general utility functions.
         */
        readonly Utils: UtilsModule.Utils;

        /**
         * An instance of {@link WebpackModule.Webpack} to search for modules.
         */
        readonly Webpack: WebpackModule.Webpack;

        /**
         * Creates an shows an alert modal to the user.
         *
         * @param title The title to show on the modal.
         * @param content Content to show in the modal (can be html string).
         * @deprecated Use {@link UIModule.UI.alert()} instead
         */
        alert(title: string, content: string): void;

        /**
         * Removes a style added with `injectCSS`.
         *
         * @param id ID of the node to remove.
         * @deprecated
         */
        clearCSS(id: string): void;

        /**
         * Deletes some saved data for plugin `pluginName` with key `key`.
         *
         * @param pluginName Which plugin this is being used for.
         * @param key Key for which data should be deleted.
         * @deprecated Use {@link DataModule.Data.delete()} instead.
         */
        deleteData(pluginName: string, key: string): void;

        /**
         * Disables a BBD setting by id.
         * @param id Id for the setting.
         * @deprecated Use {@link AddonAPIModule.AddonAPI.disable()} instead.
         */
        disableSetting(id: string): void;

        /**
         * Enables a BBD setting by id.
         *
         * @param id Id for the setting.
         * @deprecated Use {@link AddonAPIModule.AddonAPI.enable()} instead.
         */
        enableSetting(id: string): void;

        /**
         * Searches for an internal Discord webpack module based on `filter`.
         *
         * @param filter A function to use to filter modules.
         * @returns The modules found or null if none were found.
         * @deprecated Use {@link WebpackModule.Webpack.getModule()} instead.
         */
        findModule(filter: (module: any) => boolean): any;

        /**
         * Searches for multiple internal Discord webpack module based on `filter`. It's the same as `findModule` but
         * will return all matches.
         *
         * @param filter A function to use to filter modules.
         * @returns The modules found or null if none were found.
         * @deprecated Use {@link WebpackModule.Webpack.getBulk()} instead.
         */
        findAllModules(filter: (module: any) => boolean): any[] | null;

        /**
         * Searches for an internal Discord webpack module that has every property passed.
         * @param props A series of properties to check for.
         * @returns The modules found or null if none were found.
         * @deprecated Use {@link WebpackModule.Filters.byProps()} instead.
         */
        findModuleByProps(...props: string[]): any;

        /**
         * Searches for an internal Discord webpack module that has every property passed on its prototype.
         * @param props A series of prototype properties to check for
         * @returns The modules found or null if none were found..
         * @deprecated Use {@link WebpackModule.Filters.byPrototypeFields()} instead.
         */
        findModuleByPrototypes(...props: string[]): any;

        /**
         * Searches for an internal Discord webpack module with a specific `displayName` value.
         * @param name The `displayName` to look for.
         * @returns The modules found or null if none were found.
         * @deprecated Use {@link WebpackModule.Filters.byDisplayName()} instead.
         */
        findModuleByDisplayName(name: string): any;

        /**
         * Returns BandagedBD's instance of the core module. Only use this if you know what you are doing.
         *
         * @deprecated since 2020.3.27
         * @returns BBD's instantiated core module.
         * @deprecated
         */
        getCore(): any;

        /**
         * Alias for loadData(pluginName, key)
         *
         * @param pluginName Which plugin this is being used for.
         * @param key Key for which data should be returned.
         * @returns The information that was saved previously, or null otherwise.
         * @deprecated Use {@link DataModule.Data.load()} instead.
         */
        getData(pluginName: string, key: string): any;

        /**
         * Gets the internal react instance for a particular node.
         *
         * @param node jQuery
         * @returns The instance if found or undefined otherwise.
         * @deprecated Use {@link ReactUtilsModule.ReactUtils.getInternalInstance()} instead.
         */
        getInternalInstance(node: HTMLElement): object | undefined;

        /**
         * Gets the instance of another plugin with the name `name`.
         *
         * @deprecated since unknown
         * @param name Name of the plugin to retreive.
         * @returns The plugin if found or null otherwise.
         * @deprecated Use {@link AddonAPIModule.AddonAPI.get()} instead.
         */
        getPlugin(name: string): object | null;

        /**
         * Adds a block of css to the current document's `head`.
         *
         * @param id Identifier for the node to be added. Can be used later with `clearCSS` from above.
         * @param css String of css to be added.
         * @returns The plugin if found or null otherwise.
         * @deprecated Use {@link DOMModule.DOM.addStyle()} instead.
         */
        injectCSS(id: string, css: string): object | null;

        /**
         * Links some remote JavaScript to be added to the page. Useful for libraries like `Sortable.js`.
         *
         * @param id Identifier for the node to be added. Can be used later with `unlinkJS` below.
         * @param url URL of the js.
         * @deprecated
         */
        linkJS(id: string, url: string): void;

        /**
         * Gets some saved data for plugin `pluginName` with key `key`. Data can be saved with `saveData`.
         *
         * @param pluginName Which plugin this is being used for.
         * @param key Key for which data should be returned.
         * @returns The information that was saved previously, or null otherwise.
         * @deprecated Use {@link DataModule.Data.load()} instead.
         */
        loadData(pluginName: string, key: string): any;

        /**
         * This function monkey-patches a method on an object. The patching callback may be run before, after or instead
         * of target method.
         * - Be careful when monkey-patching. Think not only about original functionality of target method and your
         * changes, but also about developers of other plugins, who may also patch this method before or after you.
         *
         * Try to change target method behaviour as little as possible, and avoid changing method signatures.
         * - Display name of patched method is changed, so you can see if a function has been patched (and how many
         * times) while debugging or in the stack trace.
         *
         * Also, patched methods have property `__monkeyPatched` set to `true`, in case you want to check something
         * programmatically.
         *
         * @param module Object to be patched. You can can also pass class prototypes to patch all class instances.
         * @param methodName The name of the target message to be patched.
         * @param options Options object. You should provide at least one of `before`, `after` or `instead` parameters.
         * Other parameters are optional.
         * @param options.once Set to `true` if you want to automatically unpatch method after first call.
         * @param options.silent Set to `true` if you want to suppress log messages about patching and unpatching.
         * Useful to avoid clogging the console in case of frequent conditional patching/unpatching, for example from
         * another monkeyPatch callback.
         * @param options.displayName You can provide meaningful name for class/object provided in `what` param for
         * logging purposes.
         * By default, this function will try to determine name automatically.
         * @param options.before Callback that will be called before original target method call. You can modify
         * arguments here, so it will be passed to original method.Can be combined with `after`.
         * @param options.after Callback that will be called after original target method call. You can modify return
         * value here, so it will be passed to external code which calls target method.
         * Can be combined with `before`.
         * @param options.instead Callback that will be called instead of original target method call.
         * You can get access to original method using `originalMethod` parameter if you want to call it, but you do
         * not have to. Can't be combined with `before` and `after`.
         * @returns A cancel function which allows you to undo the patch.
         * @deprecated
         */
        monkeyPatch(module: object, methodName: string, options: MonkeyPatchOptions): CancelPatch;

        /**
         * Adds a listener for when the node is removed from the document body.
         * @param node Node to wait for.
         * @param callback Function to be performed on event.
         * @deprecated
         */
        onRemoved(node: HTMLElement, callback: () => void): void;

        /**
         * Saved some `data` for plugin `pluginName` under `key` key. Gets saved in the plugins folder under
         * `pluginName.config.json`. Data can be saved with `loadData`.
         *
         * @param pluginName Which plugin this is being used for.
         * @param key Key for the data should be saved under.
         * @param data Data to save.
         * @deprecated Use {@link DataModule.Data.save()} instead.
         */
        saveData(pluginName: string, key: string, data: any): void;

        /**
         * Alias for saveData(pluginName, key, data).
         *
         * @param pluginName Which plugin this is being used for.
         * @param key Key for the data should be saved under.
         * @param data Data to save.
         * @deprecated Use {@link DataModule.Data.save()} instead.
         */
        setData(pluginName: string, key: string, data: any): void;

        /**
         * Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.
         *
         * @param title Title of the modal.
         * @param content A single or mixed array of react elements and strings. Everything is wrapped in Discord's
         * `TextElement` component so strings will show and render properly.
         * @param options Options to modify the modal.
         * @param options.danger Whether the main button should be red or not.
         * @param options.confirmText Text for the confirmation/submit button.
         * @param options.canceltext Text for the cancel button.
         * @param options.onConfirm Callback to occur when clicking the submit button.
         * @param options.onCancel Callback to occur when clicking the cancel button.
         * @deprecated Use {@link UIModule.UI.showConfirmationModal()} instead.
         */
        showConfirmationModal(title: string, content: string, options?: UIModule.ConfirmationModalOptions): void;

        /**
         * Shows a simple toast message similar to on Android.
         *
         * @param content Content to show inside the toast.
         * @param options Options for the toast.
         * @param options.type Changes the type of the toast stylistically and semantically. Choices: "", "info",
         * "success", "danger"/"error", "warning"/"warn". Default: ""
         * @param options.icon Determines whether the icon should show corresponding to the type. A toast without type
         * will always have no icon. Default: true
         * @param options.timeout Adjusts the time (in ms) the toast should be shown for before disappearing
         * automatically. Default: 3000
         * @deprecated Use {@link UIModule.UI.showToast()} instead.
         */
        showToast(content: string, options?: UIModule.ToastOptions): void;

        /**
         * Wraps a function in a try catch block.
         *
         * @param method Function to wrap.
         * @param message Additional info for any errors.
         * @deprecated
         */
        suppressErrors(method: () => void, message?: string): () => void;

        /**
         * Determines if the input is valid and parseable JSON.
         *
         * @param data Data to test.
         * @returns True if the data is valid, false otherwise.
         * @deprecated
         */
        testJSON(data: string): boolean;

        /**
         * Toggles a BBD setting by id.
         *
         * @param id Id for the setting.
         * @deprecated
         */
        toggleOption(id: string): void;

        /**
         * Removes some previously linked JS by `linkJS`.
         *
         * @param id ID of the node to remove.
         * @deprecated
         */
        unlinkJS(id: string): void;
    }
}

declare namespace ContextMenuModule {
    type ContextMenuEntry =
        | ContextMenuItem
        | ContextMenuToggle
        | ContextMenuRadio
        | ContextMenuSubmenu
        | ContextMenuCustom
        | ContextMenuSeparator
        | ContextMenuGroup;

    interface ContextMenuControl {
        /**
         * Type of the item. Defaults to "text".
         */
        type?: "text" | "toggle" | "radio" | "submenu" | "custom" | "separator" | "group";

        label: string;
        id?: string;
        danger?: boolean;
        color?: string;
        onClick?: (newValue: any) => void;
    }

    interface ContextMenuItem extends ContextMenuControl {
        type?: "text";
    }

    interface ContextMenuToggle extends ContextMenuControl {
        type: "toggle";
        checked: boolean;
    }

    interface ContextMenuRadio extends ContextMenuControl {
        type: "radio";
        active: boolean;
    }

    interface ContextMenuSubmenu extends ContextMenuControl {
        type: "submenu";
        children: ContextMenuEntry[];
    }

    interface ContextMenuCustom extends ContextMenuControl {
        type: "custom";
    }

    interface ContextMenuSeparator {
        type: "separator";
    }

    interface ContextMenuGroup {
        type: "group";
        items: ContextMenuEntry[];
    }

    interface ContextMenuConfig {
        /**
         * Default position for the menu. Defaults to "right".
         */
        position?: "left" | "right";
        /**
         * Default alignment for the menu. Defaults to "top".
         */
        align?: "bottom" | "top";
        /**
         * Function to run when the menu is closed. Defaults to {@code null}.
         */
        onClose?: (item: any) => void;
        /**
         * Whether the blur event should be emitted when the context menu is closed. Defaults to false.
         */
        noBlurEevent?: boolean;
    }

    /**
     * <i>ContextMenu</i> is a module to help patch and create context menus. Instance is accessible through the
     * {@link BdApiModule}.
     *
     * @see https://github.com/BetterDiscord/BetterDiscord/blob/main/renderer/src/modules/api/contextmenu.js
     */
    class ContextMenu {
        /**
         * Builds a single menu item. The only prop shown here is the type, the rest should match the actual component
         * being built. View those to see what options exist for each, they often have less in common than you might
         * think.
         *
         * @param props props used to build the item
         * @returns The created component
         *
         * @example
         * // Creates a single menu item that prints "MENU ITEM" on click
         * ContextMenu.buildItem({
         *      label: "Menu Item",
         *      onClick: () => {console.log("MENU ITEM");}
         * });
         *
         * @example
         * // Creates a single toggle item that starts unchecked
         * // and print the new value on every toggle
         * ContextMenu.buildItem({
         *      type: "toggle",
         *      label: "Item Toggle",
         *      checked: false,
         *      onClick: (newValue) => {console.log(newValue);}
         * });
         */
        buildItem(props: ContextMenuEntry): object;

        /**
         * Creates the menu component including the wrapping ContextMenu. Calls {@link ContextMenu.buildMenuChildren}
         * under the covers. Used to call in combination with {@link ContextMenu.open}.
         *
         * @param setup array of item props used to build items. See {@link ContextMenu.buildMenuChildren}
         * @returns the unique context menu component
         */
        buildMenu(setup: ContextMenuEntry[]): object;

        /**
         * Creates the all the items <b>and groups</b> of a context menu recursively. There is no hard limit to the
         * number of groups within groups or number of items in a menu.
         *
         * @param setup array of item props used to build items. See {@link ContextMenu.buildItem}
         * @returns array of the created component
         *
         * @example
         * // Creates a single item group item with a toggle item
         * ContextMenu.buildMenuChildren([{
         *      type: "group",
         *      items: [{
         *          type: "toggle",
         *          label: "Item Toggle",
         *          checked: false,
         *          onClick: (newValue) => {
         *             console.log(newValue);
         *          }
         *      }]
         * }]);
         *
         * @example
         * // Creates two item groups with a single toggle item each
         * ContextMenu.buildMenuChildren([{
         *     type: "group",
         *     items: [{
         *         type: "toggle",
         *         label: "Item Toggle",
         *         checked: false,
         *         onClick: (newValue) => {
         *             console.log(newValue);
         *         }
         *     }]
         * }, {
         *     type: "group",
         *     items: [{
         *         type: "toggle",
         *         label: "Item Toggle",
         *         checked: false,
         *         onClick: (newValue) => {
         *             console.log(newValue);
         *         }
         *     }]
         * }]);
         */
        buildMenuChildren(setup: ContextMenuEntry[]): object[];

        /**
         * Closes the current opened context menu immediately.
         */
        close(): void;

        /**
         * Function that allows you to open an entire context menu. Recommended to build the menu with this module.
         *
         * @param event The context menu event. This can be emulated, requires target, and all X, Y locations.
         * @param menuComponent Component to render. This can be any react component or output of
         * {@link ContextMenu.buildMenu}
         * @param config configuration/props for the context menu
         *
         * @example
         * // Creates a single item group item with a toggle item
         * const menu = ContextMenu.buildMenuChildren([{
         *      type: "group",
         *      items: [{
         *          type: "toggle",
         *          label: "Item Toggle",
         *          checked: false,
         *          onClick: (newValue) => {
         *             console.log(newValue);
         *          }
         *      }]
         * }]);
         *
         * open(mouseEvent, menu, {
         *     onClose: (aaa) => {
         *         console.log("Context menu closed");
         *     }
         * });
         */
        open(event: MouseEvent, menuComponent: object, config: ContextMenuConfig): void;

        /**
         * Allows you to patch a given context menu. Acts as a wrapper around the {@link Patcher}.
         *
         * @param navId Discord's internal navId used to identify context menus
         * @param callback Callback function that accepts the react render tree
         */
        patch(navId: string, callback: () => void): () => void;

        /**
         * Allows you to remove the patch added to a given context menu.
         *
         * @param navId The original navId from patching
         * @param callback The original callback from patching
         */
        unpatch(navId: string, callback: () => void): void;
    }
}

declare namespace DOMModule {
    interface DOMCreateElementOptions {
        /**
         * Class name to add to the element.
         */
        className?: string;
        /**
         * ID to set for the element.
         */
        id?: string;
        /**
         * Target element to automatically append to.
         */
        target?: HTMLElement;
    }

    /**
     * <i>DOM</i> is a simple utility class for DOM manipulation. An instance is available on {@link BdApiModule}.
     *
     * @see https://github.com/BetterDiscord/BetterDiscord/blob/main/renderer/src/modules/api/dom.js
     */
    class DOM {
        /**
         * Current height of the user's screen.
         */
        readonly screenHeight: number;

        /**
         * Current width of the user's screen.
         */
        readonly screenWidth: number;

        /**
         * Adds a {@code <style>} to the document with the given ID.
         *
         * @param id ID to use for style element
         * @param css CSS to apply to the document
         */
        addStyle(id: string, css: string): void;

        /**
         * Utility to help smoothly animate using JavaScript.
         *
         * @param update Render function indicating the style should be updates
         * @param duration Duration in ms to animate for
         * @param options Option to customize the animation
         */
        animate(update: () => void, duration: number, options?: object): void;

        /**
         * Utility function to make creating DOM elements easier. Acts similarly to {@code React.createElement}.
         *
         * @param tag HTML tag name to create
         * @param options Options object to customize the element
         * @param child Child node to add
         */
        createElement(tag: string, options?: DOMCreateElementOptions, child?: HTMLElement): void;

        /**
         * Adds a listener for when the node is removed from the document body.
         *
         * @param node Node to be observed
         * @param callback Function to run when fired
         */
        onRemoved(node: HTMLElement, callback: () => void): void;

        /**
         * Parses a string of HTML and returns the results. If the second parameter is true, the parsed HTML will be
         * returned as a document fragment {@see https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment}.
         * This is extremely useful if you have a list of elements at the top level, they can then be appended all at
         * once to another node. If the second parameter is false, then the return value will be the list of parsed
         * nodes and there were multiple top level nodes, otherwise the single node is returned.
         *
         * @param html HTML to be parsed
         * @param fragment Whether or not the return should be the raw {@link DocumentFragment}
         * @returns The result of HTML parsing
         */
        parseHtml(html: string, fragment?: boolean): DocumentFragment;

        /**
         * Removes a {@code <style>} from the document corresponding to the given ID.
         *
         * @param id ID uses for the style element
         */
        removeStyle(id: string): void;
    }
}

declare namespace DataModule {
    /**
     * <i>Data</i> is a simple utility class for the management of plugin data. An instance is available on
     * {@link BdApiModule}.
     *
     * @see https://github.com/BetterDiscord/BetterDiscord/blob/main/renderer/src/modules/api/data.js
     */
    class Data {
        /**
         * Deletes a piece of stored data, this is different than saving as null or undefined.
         *
         * @param pluginName Name of the plugin deleting data
         * @param key Which piece of data to delete
         */
        delete(pluginName: string, key: string): void;

        /**
         * Loads previously stored data.
         *
         * @param pluginName Name of the plugin deleting data
         * @param key Which piece of data to delete
         * @returns The stored data
         */
        load(pluginName: string, key: string): any;

        /**
         * Saves JSON-serializable data.
         *
         * @param pluginName Name of the plugin deleting data
         * @param key Which piece of data to delete
         * @param data The data to be saved
         */
        save(pluginName: string, key: string, data: any): void;
    }
}

declare namespace PatcherModule {
    /**
     * <i>Patcher</i> is a utility class for modifying existing functions. Instance is accessible through the
     * {@link BdApiModule}. This is extremely useful for modifying the internals of Discord by adjusting return value or
     * React renders, or arguments of internal functions.
     *
     * @see https://github.com/BetterDiscord/BetterDiscord/blob/main/renderer/src/modules/api/patcher.js
     */
    class Patcher {
        /**
         * This method patches onto another function, allowing your code to run instead. Using this, you are also able
         * to modify the return value, using the return of your code instead.
         *
         * @param caller Name of the caller of the patch function.
         * @param moduleToPatch Object with the function to be patched. Can also be an object's prototype.
         * @param functionName Name of the function to be patched.
         * @param callback Function to run after the original method. The function is given the {@code this} context,
         * the arguments of the original function, and the return value of the original function.
         * @returns Function that cancels the original patch.
         */
        after(caller: string, moduleToPatch: object, functionName: string, callback: () => void): () => void;

        /**
         * This method patches onto another function, allowing your code to run beforehand. Using this, you are also
         * able to modify the incoming arguments before the original method is run.
         *
         * @param caller Name of the caller of the patch function.
         * @param moduleToPatch Object with the function to be patched. Can also be an object's prototype.
         * @param functionName Name of the function to be patched.
         * @param callback Function to run after the original method. The function is given the {@code this} context,
         * the arguments of the original function, and the return value of the original function.
         * @returns Function that cancels the original patch.
         */
        before(caller: string, moduleToPatch: object, functionName: string, callback: () => void): () => void;

        /**
         * Returns all patches by a particular caller. The patches all have an {@link PatcherModule.Patcher.unpatch()}
         * method.
         *
         * @param caller ID of the original patches
         * @returns Array of all the patch objects.
         */
        getPatchesByCaller(caller: string): Array<(() => void)>;

        /**
         * This method patches onto another function, allowing your code to run instead. Using this, you are also able
         * to modify the return value, using the return of your code instead.
         *
         * @param caller Name of the caller of the patch function.
         * @param moduleToPatch Object with the function to be patched. Can also be an object's prototype.
         * @param functionName Name of the function to be patched.
         * @param callback Function to run after the original method. The function is given the {@code this} context,
         * the arguments of the original function, and the return value of the original function.
         * @returns Function that cancels the original patch.
         */
        instead(caller: string, moduleToPatch: object, functionName: string, callback: () => void): () => void;

        /**
         * Automatically cancels all patches created with a specific ID.
         *
         * @param caller ID of the original patches
         */
        unpatchAll(caller: string): void;
    }
}

declare namespace AddonAPIModule {
    /**
     * <i>AddonAPI</i> is a utility class for working with plugins and themes. Instances are accessible through the
     * {@link BdApiModule}.
     *
     * @see https://github.com/BetterDiscord/BetterDiscord/blob/main/renderer/src/modules/api/addonapi.js
     */
    class AddonAPI {
        /**
         * The path to the addon folder.
         */
        readonly folder: string;

        /**
         * Disables the given addon.
         *
         * @param idOrFile Addon id or filename.
         */
        disable(idOrFile: string): void;

        /**
         * Enables the given addon.
         *
         * @param idOrFile Addon id or filename.
         */
        enable(idOrFile: string): void;

        /**
         * Gets the "instance" of the given addon.
         *
         * @param idOrFile Addon id or filename.
         * @returns For plugins, this is the plugin instance, for themes this is the meta + css.
         */
        get(idOrFile: string): any;

        /**
         * Gets all the "instances" of addon type.
         *
         * @returns An array matching the output of get.
         */
        getAll(): any[];

        /**
         * Checks if the given addon is currently enabled.
         *
         * @param idOrFile Addon id or filename.
         * @returns Indicates if the addon is enabled.
         */
        isEnabled(idOrFile: string): boolean;

        /**
         * Reloads if a particular addon is enabled.
         *
         * @param idOrFile Addon id or filename.
         */
        reload(idOrFile: string): void;

        /**
         * Toggle the enablement the given addon.
         *
         * @param idOrFile Addon id or filename.
         */
        toggle(idOrFile: string): void;
    }
}

declare namespace ReactUtilsModule {
    interface OwnerInstaceOptions {
        /**
         * List of items to include from the search. Defaults to an empty array.
         */
        include?: string[];
        /**
         * List of items to exclude from the search. Defaults to ["Popout", "Tooltip", "Scroller", "BackgroundFlash"].
         */
        exclude?: string[];
        /**
         * Filter to check the current instance with (should return a boolean)
         *
         * @param instace The instace to be checked
         */
        filter?: (instance: any) => boolean;
    }

    /**
     * <i>ReactUtils</i> is a utility class for interacting with React internals. Instance is accessible through the
     * {@link BdApiModule}. This is extremely useful for interacting with the internals of the UI.
     *
     * @see https://github.com/BetterDiscord/BetterDiscord/blob/main/renderer/src/modules/api/reactutils.js
     */
    class ReactUtils {
        /**
         * Gets the internal react data of a specified node.
         *
         * @param node Node to get the React data from
         * @returns Either the found data or {@code undefined}
         */
        getInternalInstance(node: HTMLElement): ReactInstance.ReactNode;

        /**
         * Attempts to find the "owner" node to the current node. This is generally a node with a stateNode--a class
         * component.
         *
         * @param node Node to obtain react instance of
         * @param options Options for the search
         * @returns The owner instance or {@code undefined} if not found.
         */
        getOwnerInstance(node: HTMLElement, options: OwnerInstaceOptions): ReactInstance.ReactNode;

        /**
         * Creates an unrendered React component that wraps dom elements.
         *
         * @param element Element or array of elements to wrap into a react component
         * @returns Unrendered React component
         */
        wrapElement(element: HTMLElement): ReactInstance.ReactNode;
    }
}

declare namespace UIModule {
    interface TooltipOptions {
        /**
         * Correlates to the discord styling/colors. Defaults to "primary".
         */
        style?: "primary" | "info" | "success" | "warn" | "danger";
        /**
         * The side of the element where the tooltip is rendered. Defaults to "top".
         */
        side?: "top" | "right" | "bottom" | "left";
        /**
         * Prevents moving the tooltip to the opposite side if it is too big or goes offscreen. Defaults to false.
         */
        preventFlip?: boolean;
        /**
         * Whether the tooltip should be disabled from showing on hover. Defaults to false.
         */
        disabled?: boolean;
    }

    class Tooltip {
        active: boolean;
        disabled: boolean;
        element: HTMLElement;
        label: string;
        labelElement: HTMLElement;
        node: HTMLElement;
        preventFlip: boolean;
        side: "top" | "right" | "bottom" | "left";
        style: "primary" | "info" | "success" | "warn" | "danger";
        tooltipElement: HTMLElement;
        readonly canShowAbove: boolean;
        readonly canShowBelow: boolean;
        readonly canShowLeft: boolean;
        readonly canShowRight: boolean;
        readonly container: HTMLElement;
    }

    interface DialogOptions {
        /**
         * Determines whether the dialog should open or save files. Defaults to "open".
         */
        mode?: "open" | "save";
        /**
         * Path the dialog should show on launch. Defaults to "~", the user home.
         */
        defaultPath?: string;
        /**
         * An array of [file filters]{@link https://electronjs.org/docs/latest/api/structures/file-filter}. Defaults to
         * an empty array.
         */
        filters?: any[];
        /**
         * Title for the titlebar. Defaults to an empty string.
         */
        title?: string;
        /**
         * Message for the dialog. Defaults to an empty string.
         */
        message?: string;
        /**
         * Whether the user should be prompted when overwriting a file. Defaults to false.
         */
        showOverwriteConfirmation?: boolean;
        /**
         * Whether hidden files should be shown in the dialog. Defaults to false.
         */
        showHiddenFiles?: boolean;
        /**
         * Whether the user should be prompted to create non-existant folders. Defaults to false.
         */
        promptToCreate?: boolean;
        /**
         * Whether the user should be able to select a directory as a target. Defaults to false.
         */
        openDirectory?: boolean;
        /**
         * Whether the user should be able to select a file as a target. Defaults to true.
         */
        openFile?: boolean;
        /**
         * Whether the user should be able to select multiple targets. Defaults to false.
         */
        multiSelections?: boolean;
        /**
         * Whether the dialog should act as a modal to the main window. Defaults to false.
         */
        modal?: boolean;
    }

    interface DialogResult {
        cancelled: boolean;
        filePaths: string[];
    }

    interface ConfirmationModalOptions {
        /**
         * Whether the main button should be red or not. Defaults to false.
         */
        danger?: boolean;
        /**
         * Text for the confirmation/submit button. Defaults to "Okay".
         */
        confirmText?: string;
        /**
         * Text for the cancel button. Defaults to "Cancel".
         */
        cancelText?: string;
        /**
         * Callback to occur when clicking the submit button.
         */
        onConfirm?: () => void;
        /**
         * Callback to occur when clicking the cancel button.
         */
        onCancel?: () => void;
    }

    interface NoticeButton {
        /**
         * The button label.
         */
        label: string;
        /**
         * Called when the button is clicked.
         */
        onClick: () => void;
    }

    interface NoticeOptions {
        /**
         * The notice type. Defaults to "info".
         */
        type?: "info" | "error";
        /**
         * Buttons that should be added next to the notice text.
         */
        buttons?: NoticeButton[];
        /**
         * Timeout until the notice is closed, in milliseconds. Won't fire if it's set to 0. Defaults to
         * 10,000 milliseconds, or 10 seconds.
         */
        timeout?: number;
    }

    interface ToastOptions {
        /**
         * The type of the toast stylistically and semantically. Defaults to "" (no type).
         */
        type?: "" | "info" | "success" | "error" | "warning";
        /**
         * Determines whether the icon should show corresponding to the type. A toast without type will always have
         * no icon. Defaults to true.
         */
        icon?: boolean;
        /**
         * Adjusts the time, in milliseconds, the toast should be shown for before disappearing automatically.
         * Defaults to 3,000 milliseconds, or 3 seconds.
         */
        timeout?: number;
        /**
         * Whether to force showing the toast and ignore the BetterDiscord setting.
         */
        forceShow?: boolean;
    }

    /**
     * <i>UI</i> is a utility class for getting internal webpack modules. Instance is accessible through the
     * {@link BdApiModule}. This is extremely useful for interacting with the internals of Discord.
     *
     * @see https://github.com/BetterDiscord/BetterDiscord/blob/main/renderer/src/modules/api/ui.js
     */
    class UI {
        /**
         * Shows a generic but very customizable modal.
         *
         * @param title title of the modal
         * @param content a string of text to display in the modal
         */
        alert(title: string, content: string | Element | string[] | Element[]): void;

        /**
         * Creates a tooltip to automatically show on hover.
         *
         * @param node DOM node to monitor and show the tooltip on
         * @param content String to show in the tooltip
         * @param options Additional options for the tooltip
         */
        createTooltip(node: HTMLElement, content: string | HTMLElement, options: TooltipOptions): Tooltip;

        /**
         * Gives access to the [Electron Dialog]{@link https://www.electronjs.org/docs/latest/api/dialog/} API.
         * Returns a {@link Promise} that resolves to an object that has a boolean cancelled and a filePath string for
         * saving and a filePaths string array for opening.
         *
         * @param options Options object to configure the dialog.
         */
        openDialog(options: DialogOptions): Promise<DialogResult>;

        /**
         * Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.
         *
         * @param title Title of the modal
         * @param children A single or mixed array of react elements and strings. Everything is wrapped in Discord's
         * {@code TextElement} component so strings will show and render properly.
         * @param options Options to modify the modal
         * @returns The confirmation modal ID.
         */
        showConfirmationModal(title: string, children: Element[], options: ConfirmationModalOptions): string;

        /**
         * Shows a notice above Discord's chat layer.
         *
         * @param content Content of the notice
         * @param options Options for the notice
         */
        showNotice(content: string | Node, options: NoticeOptions): () => void;

        /**
         * This shows a toast towards the bottom of the screen, similar to Android toasts.
         *
         * @param content The string to show in the toast
         * @param options The toast options
         */
        showToast(content: string, options?: ToastOptions): void;
    }
}

declare namespace UtilsModule {
    interface UtilsFindInTreeOptions {
        /**
         * Array of strings to use as keys that are allowed to be walked on. Null value indicates all keys are walkable.
         * Defaults to null.
         */
        walkable?: string[] | null;
        /**
         * Array of strings to use as keys to exclude from the search, most helpful when {@code walkable = null}.
         */
        ignore?: string[];
    }

    /**
     * <i>Utils</i> is a utility containing commonly reused functions. Instance is accessible through the
     * {@link BdApiModule}.
     *
     * @see https://github.com/BetterDiscord/BetterDiscord/blob/main/renderer/src/modules/api/utils.js
     */
    class Utils {
        /**
         * Builds a classname string from any number of arguments. This includes arrays and objects. When given an array
         * all values from the array are added to the list. When given an object they keys are added as the classnames
         * if the value is truthy.
         *
         * Copyright (c) 2018 Jed Watson https://github.com/JedWatson/classnames MIT License
         *
         * @param argument Anything that should be used to add classnames.
         */
        className(argument: object | object[]): string;

        /**
         * Returns a function, that, as long as it continues to be invoked, will not be triggered. The function will be
         * called after it stops being called for N milliseconds.
         *
         * Adapted from the version by David Walsh (https://davidwalsh.name/javascript-debounce-function)
         *
         * @param executor The function to be called after N milliseconds of inactivity
         * @param delay The delay, in milliseconds
         */
        debounce(executor: () => void, delay: number): () => void;

        /**
         * Takes a string of HTML and escapes it using the brower's own escaping mechanism.
         *
         * @param html HTML to be escaped
         */
        escapeHTML(html: string): string;

        /**
         * Deep extends an object with a set of other objects. Objects later in the list of extenders have priority,
         * that is to say if one sets a key to be a primitive, it will be overwritten with the next one with the same
         * key. If it is an object, and the keys match, the object is extended. This happens recursively.
         *
         * @param extendee Object to be extended
         * @param extenders Objects to extend with
         */
        extend(extendee: object, extenders: object[]): object;

        /**
         * Finds a value, subobject, or array from a tree that matches a specific filter. This is a DFS.
         *
         * @param tree Tree that should be walked
         * @param searchFilter Filter to check against each object and subobject
         * @param options Additional options to customize the search
         */
        findInTree(tree: object, searchFilter: (node: object) => boolean, options: UtilsFindInTreeOptions): any;
    }
}

declare namespace WebpackModule {
    /**
     * A function to use to filter modules. It is given exports, module, and moduleID. Return true to signify match.
     */
    type WebpackFilter = (module: any) => boolean;

    interface WebpackModuleSearchOptions {
        /**
         * A function to use to filter modules.
         *
         * @param object The module being filtered
         */
        filter: WebpackFilter;
        /**
         * Whether to return only the first matching module. Defaults to true.
         */
        first?: boolean;
        /**
         * Whether to return default export when matching the default export. Defaults to true.
         */
        defaultExport?: boolean;
        /**
         * Whether to execute the filter on webpack exports. Defaults to false.
         */
        searchExports?: boolean;
    }

    interface WebpackBulkModuleOptions extends WebpackModuleSearchOptions {
        /**
         * A function to use to filter modules.
         *
         * @param object The module being filtered
         */
        filter: WebpackFilter;
    }

    interface WebpackAsyncModuleSearchOptions {
        /**
         * AbortSignal of an AbortController to cancel the promise.
         */
        signal?: AbortSignal;
        /**
         * Whether to return default export when matching the default export. Defaults to true.
         */
        defaultExport?: boolean;
        /**
         * Whether to execute the filter on webpack exports. Defaults to false.
         */
        searchExports?: boolean;
    }

    type Filter = (item: any) => any;

    /**
     * Series of Filters to be used for finding webpack modules.
     */
    class Filters {
        /**
         * Generates a function that filters by the {@code displayName} property.
         *
         * @param name Name the module should have
         * @returns A filter that checks for a {@code displayName} match.
         */
        byDisplayName(name: string): Filter;

        /**
         * Generates a function that filters by a set of properties.
         *
         * @param props List of property names
         * @returns A filter that checks for a set of properties.
         */
        byProps(props: string[]): Filter;

        /**
         * Generates a function that filters by a set of properties on the object's prototype.
         *
         * @param props List of property names
         * @returns A filter that checks for a set of properties on the object's prototype.
         */
        byPrototypeFields(props: string[]): Filter;

        /**
         * Generates a function that filters by a regex.
         *
         * @param search A RegExp to check on the module
         * @param filter Additional filter
         * @returns A filter that checks for a regex match.
         */
        byRegex(search: RegExp, filter: (item: any) => boolean): Filter;

        /**
         * Generates a function that filters by strings.
         *
         * @param strings A list of strings
         * @returns A filter that checks for a set of strings.
         */
        byStrings(strings: string[]): Filter;

        /**
         * Generates a combined function from a list of filters.
         *
         * @param filters A list of filters
         * @returns Combinatory filter of all arguments.
         */
        combine(filters: Filter[]): Filter;
    }

    /**
     * <i>Webpack</i> is a utility class for getting internal webpack modules. Instance is accessible through the
     * {@link BdApiModule}.
     * This is extremely useful for interacting with the internals of Discord.
     *
     * @see https://github.com/BetterDiscord/BetterDiscord/blob/main/renderer/src/modules/api/webpack.js
     */
    class Webpack {
        readonly Filters: Filters;

        /**
         * Finds multiple modules using multiple filters.
         *
         * @param queries The queries to perform
         */
        getBulk(queries: WebpackBulkModuleOptions[]): any[] | null;

        /**
         * Finds a module using a filter function.
         *
         * @param filter A function to use to filter modules. It is given exports, module, and moduleID. Return
         * {@code true} to signify match.
         * @param options Options to configure the search
         */
        getModule(filter: WebpackFilter, options?: WebpackModuleSearchOptions): object | null;

        waitForModule(filter: WebpackFilter, options?: WebpackAsyncModuleSearchOptions): Promise<object | null>;
    }
}
