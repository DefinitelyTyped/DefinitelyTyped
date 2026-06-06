/// <reference path="./golden-layout.d.ts" />
import { Identity } from "../../identity";
import { LayoutPresetTypes } from "./utils";
export interface InitLayoutOptions {
    containerId?: string | undefined;
    layout?: GoldenLayout.Config | undefined;
}
export interface PresetLayoutOptions {
    presetType: LayoutPresetTypes;
}
/**
 * InitLayoutOptions interface
 * [containerId] The id attribute of the container where the window's Layout should be initialized.  If not provided
 * then an element with id `layout-container` is used. We recommend using a div element.
 */
/**
 * PresetLayoutOptions interface
 * presetType Which preset layout arrangement to use.
 * The preset options are `columns`, `grid`, `rows`, and `tabs`.
 */
/**
 * LayoutConfig interface
 * content Content of the layout.  There can only be one top-level LayoutItem in the content array.
 * We do not recommend trying to build Layouts or LayoutItems by hand and instead use calls such as {@link Platform#getSnapshot getSnapshot}
 * or our {@link https://openfin.github.io/golden-prototype/config-gen Layout Config Generation Tool }.
 * settings Configuration for certain Layout behaviors. See the LayoutSettings interface.
 */
/**
 * LayoutItem Interface
 * LayoutItem Represents the arrangement of Views within a Platform window's Layout.  We do not recommend trying
 * to build Layouts or LayoutItems by hand and instead use calls such as {@link Platform#getSnapshot getSnapshot} or our
 * {@link https://openfin.github.io/golden-prototype/config-gen Layout Config Generation Tool }.
 * type The type of the item. Possible values are 'row', 'column', 'stack', and 'component'.
 * [content] An array of configurations for items that will be created as children of this item.
 * [componentName] Only a `component` type will have this property and it should be set to `view`.
 * [componentState] Only a `component` type will have this property and it represents the view
 * options of a given component.
 */
/**
 * LayoutSettings Interface
 * LayoutSettings Represents a potential ways to customize behavior of your Layout
 * hasHeaders Turns tab headers on or off.
 * If false, the layout will be displayed with splitters only.
 * popoutWholeStack Whether the popout button will only act on the entire stack,
 * as opposed to only the active tab.
 * reorderEnabled If true, the user can re-arrange the layout by
 * dragging items by their tabs to the desired location.
 * showCloseIcon Whether to show the close button on stack header
 * (not to be confused with close button on every tab).
 * showMaximiseIcon Whether to show the maximize button on stack header.
 * The button will maximize the current tab to fill the entire window.
 * showPopoutIcon Whether to show the popout button on stack header.
 * The button will create a new window with current tab as its content.
 * In case `popoutWholeStack` is set to true, all tabs in the stack will be in the new window.
 */
/**
 * @lends Platform#Layout
 */
export default class LayoutModule {
    /**
     * Asynchronously returns a Layout object that represents a Window's layout.
     * @param { Identity } identity
     * @return {Promise.<Layout>}
     * @tutorial Layout.wrap
     * @static
     */
    wrap(identity: Identity): Promise<Layout>;
    /**
     * Synchronously returns a Layout object that represents a Window's layout.
     * @param { Identity } identity
     * @return {Layout}
     * @tutorial Layout.wrapSync
     * @static
     */
    wrapSync(identity: Identity): Layout;
    /**
     * Asynchronously returns a Layout object that represents a Window's layout.
     * @return {Promise.<Layout>}
     * @tutorial Layout.getCurrent
     * @static
     */
    getCurrent(): Promise<Layout>;
    /**
     * Synchronously returns a Layout object that represents a Window's layout.
     * @return {Layout}
     * @tutorial Layout.getCurrentSync
     * @static
     */
    getCurrentSync(): Layout;
    /**
     * Initialize the window's Layout.  Must be called from a custom window that has a 'layout' option set upon creation of that window.
     * If a containerId is not provided, this method attempts to find an element with the id `layout-container`.
     * A Layout will <a href="tutorial-Layout.DOMEvents.html">emit events locally</a> on the DOM element representing the layout-container.
     * In order to capture the relevant events during Layout initiation, set up the listeners on the DOM element prior to calling `init`.
     * @param { InitLayoutOptions } [options] - Layout init options.
     * @return { Promise<Layout> }
     * @static
     * @experimental
     * @tutorial Layout.init
     */
    init: (options?: InitLayoutOptions) => Promise<Layout>;
}
/**
 * @lends Platform#Layout
 */
export declare class Layout {
    init: (options?: InitLayoutOptions) => Promise<Layout>;
    identity: Identity;
    private platform;
    constructor(identity: Identity);
    /**
     * Returns the configuration of the window's layout.  Returns the same information that is returned for all windows in getSnapshot.
     * @return { Promise<LayoutConfig> }
     * @tutorial Layout.getConfig
     */
    getConfig(): Promise<GoldenLayout.Config>;
    /**
     * Replaces a Platform window's layout with a new layout.  Any views that were in the old layout but not the new layout
     * will be destroyed.
     * @param { LayoutConfig } layout New layout to implement in the target window.
     * Please see explanation of a layout {@link https://developers.openfin.co/docs/platform-api#section-layout here}.
     * @return { Promise<void> }
     * @tutorial Layout.replace
     */
    replace: (layout: GoldenLayout.Config) => Promise<void>;
    /**
     * Replaces a Platform window's layout with a preset layout arrangement using the existing Views attached to the window.
     * The preset options are `columns`, `grid`, `rows`, and `tabs`.
     * @param { PresetLayoutOptions } options Mandatory object with `presetType` property that sets which preset layout arrangement to use.
     * The preset options are `columns`, `grid`, `rows`, and `tabs`.
     * @return { Promise<void> }
     * @tutorial Layout.applyPreset
     */
    applyPreset: (options: PresetLayoutOptions) => Promise<void>;
}
export {};
