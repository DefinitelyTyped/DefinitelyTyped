import { Identity } from '../../identity';
import { LayoutPresetTypes } from './utils';
import "./golden-layout";
export interface InitLayoutOptions {
    containerId?: string;
    layout?: GoldenLayout.Config;
}
export interface PresetLayoutOptions {
    presetType: LayoutPresetTypes;
}
/**
 * InitLayoutOptions interface
 * @typedef { object } InitLayoutOptions
 * @property { string } [containerId] The id attribute of the container where the window's Layout should be initialized.  If not provided
 * then an element with id `layout-container` is used.
 * @property { LayoutConfig } [layout] The layout configuration to be initialized. If not provided then the layout included in window
 * options is used.
 */
/**
 * PresetLayoutOptions interface
 * @typedef { object } PresetLayoutOptions
 * @property { LayoutPresetTypes } presetType Which preset layout arrangement to use.
 * The preset options are `columns`, `grid`, `rows`, and `tabs`.
 */
/**
 * LayoutConfig interface
 * @typedef { object } LayoutConfig
 * @property { Array<LayoutItem> } content Content of the layout.  There can only be one top-level LayoutItem in the content array.
 * We do not recommend trying to build Layouts or LayoutItems by hand and instead use calls such as {@link Platform#getSnapshot getSnapshot}
 * or our {@link https://openfin.github.io/golden-prototype/config-gen Layout Config Generation Tool }.
 */
/**
 * LayoutItem Interface
 * @typedef { object } LayoutItem Represents the arrangement of Views within a Platform window's Layout.  We do not recommend trying
 * to build Layouts or LayoutItems by hand and instead use calls such as {@link Platform#getSnapshot getSnapshot} or our
 * {@link https://openfin.github.io/golden-prototype/config-gen Layout Config Generation Tool }.
 * @property { string } type The type of the item. Possible values are 'row', 'column', 'stack', and 'component'.
 * @property { Array<LayoutItem> } [content] An array of configurations for items that will be created as children of this item.
 * @property { string } [componentName] Only a `component` type will have this property and it should be set to `view`.
 * @property { View~options } [componentState] Only a `component` type will have this property and it represents the view
 * options of a given component.
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
     * Initialize the window's Layout.  Must be called from a custom window that has a truthy 'layout' option property (set `layout` to
     * `true` in order to use this call with your own layout).  If a layout is not provided in the options for this call, the `layout`
     * property set upon creation of that window is used.  If a containerId is not provided, this method attempts to find an element
     * with the id `layout-container`.
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
