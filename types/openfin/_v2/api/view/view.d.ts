import { WebContents } from '../webcontents/webcontents';
import Transport from '../../transport/transport';
import { Identity } from '../../identity';
import { Base } from '../base';
import { ViewEvents } from '../events/view';
import { _Window } from '../window/window';
import { WindowOption, CustomRequestHeaders, Api, ContentNavigation } from '../window/windowOption';
import { ViewBounds, ContextMenuSettings, Hotkey } from '../../shapes/shapes';
import { PreloadScript } from '../../shapes/PreloadScript';
/**
 * @lends View
 */
export default class ViewModule extends Base {
    constructor(wire: Transport);
    /**
     * Creates a new View.
     * @param { View~options } options - View creation options
     * @return {Promise.<View>}
     * @tutorial View.create
     * @experimental
     * @static
     */
    create(options: ViewCreationOptions): Promise<View>;
    private onmessage;
    /**
     * Asynchronously returns a View object that represents an existing view.
     * @param { Identity } identity
     * @return {Promise.<View>}
     * @tutorial View.wrap
     * @experimental
     * @static
     */
    wrap(identity: Identity): Promise<View>;
    /**
     * Synchronously returns a View object that represents an existing view.
     * @param { Identity } identity
     * @return {View}
     * @tutorial View.wrapSync
     * @experimental
     * @static
     */
    wrapSync(identity: Identity): View;
    /**
     * Asynchronously returns a View object that represents the current view
     * @return {Promise.<View>}
     * @tutorial View.getCurrent
     * @experimental
     * @static
     */
    getCurrent(): Promise<View>;
    /**
     * Synchronously returns a View object that represents the current view
     * @return {View}
     * @tutorial View.getCurrentSync
     * @experimental
     * @static
     */
    getCurrentSync(): View;
}
/**
 * @typedef {object} View~options
 * @summary View creation options.
 * @desc This is the options object required by {@link View.create View.create}.
 *
 * Note that `name` and `target` are the only required properties — albeit the `url` property is usually provided as well
 * (defaults to `"about:blank"` when omitted).
 *
 * @property {object} [experimental]
 * Configurations for API injection.
 *
 * @property {boolean} [experimental.childWindows] Configure if the runtime should enable child windows for views.
 *
 * @property {object} [api]
 * Configurations for API injection.
 *
 * @property {object} [api.iframe] Configure if the the API should be injected into iframes based on domain.
 *
 * @property {boolean} [api.iframe.crossOriginInjection=false] Controls if the `fin` API object is present for cross origin iframes.
 * @property {boolean} [api.iframe.sameOriginInjection=true] Controls if the `fin` API object is present for same origin iframes.
 *
 * @property {object} [autoResize] AutoResize options
 *
 * @property {object} [bounds] initial bounds
 *
 * @property {string} [backgroundColor="#FFF"] - _Updatable._
 * The view’s _backfill_ color as a hexadecimal value. Not to be confused with the content background color
 * (`document.body.style.backgroundColor`),
 * this color briefly fills a view’s (a) content area before its content is loaded as well as (b) newly exposed
 * areas when growing a window. Setting
 * this value to the anticipated content background color can help improve user experience.
 * Default is white.
 *
 * @property {object} [contentNavigation]
 * Restrict navigation to URLs that match a whitelisted pattern.
 * In the lack of a whitelist, navigation to URLs that match a blacklisted pattern would be prohibited.
 * See [here](https://developer.chrome.com/extensions/match_patterns) for more details.
 * @property {string[]} [contentNavigation.whitelist=[]] List of whitelisted URLs.
 * @property {string[]} [contentNavigation.blacklist=[]] List of blacklisted URLs.
 *
 * @property {object} [contextMenuSettings] - _Updatable._
 * Configure the context menu when right-clicking on a view.
 * @property {boolean} [contextMenuSettings.enable=true] Should the context menu display on right click.
 * @property {boolean} [contextMenuSettings.devtools=true] Should the context menu contain a button for opening devtools.
 * @property {boolean} [contextMenuSettings.reload=true] Should the context menu contain a button for reloading the page.
 *
 * @property {any} [customData=""] - _Updatable._
 * A field that the user can attach serializable data to to be ferried around with the view options.
 * _When omitted, the default value of this property is the empty string (`""`)._
 *
 * When omitted, the default value of this property is the empty string (`""`).
 * As opposed to customData this is meant for frequent updates and sharing with other contexts. [Example]{@tutorial customContext}
 *
 * @property {object[]} [hotkeys=[]] - _Updatable._
 * Defines the list of hotkeys that will be emitted as a `hotkey` event on the view. For usage example see [example]{@tutorial hotkeys}.
 * Within Platform, OpenFin also implements a set of pre-defined actions called
 * [keyboard commands]{@link https://developers.openfin.co/docs/platform-api#section-5-3-using-keyboard-commands}
 * that can be assigned to a specific hotkey in the platform manifest.
 * @property {string} hotkeys.keys The key combination of the hotkey, i.e. "Ctrl+T"
 * @property {boolean} [hotkeys.preventDefault=false] preventDefault will prevent the page keydown/keyup events from being emitted.
 *
 * @property {string} name
 * The name of the view.

 * @property {preloadScript[]} [preloadScripts] - _Inheritable_
 * A list of scripts that are eval'ed before other scripts in the page. When omitted, _inherits_
 * from the parent application.
 *
 * @property {string} [processAffinity=<application uuid>]
 * A string to attempt to group renderers together. Will only be used if pages are on the same origin.
 *
 * @property {Identity} [target]
 * The identity of the window this view should be attached to.
 *
 * @property {string} [url="about:blank"]
 * The URL of the view.
 *
 * @property {string} [uuid=<application uuid>]
 * The `uuid` of the application, unique within the set of all `Application`s running in OpenFin Runtime.
 * If omitted, defaults to the `uuid` of the application spawning the view.
 * If given, must match the `uuid` of the  application spawning the view.
 * In other words, the application's `uuid` is the only acceptable value, but is the default, so there's
 * really no need to provide it.
 */
/**
 * @classdesc a View can be used to embed additional web content into a Window.
 * It is like a child window, except it is positioned relative to its owning window.
 * It has the ability to listen for <a href="tutorial-View.EventEmitter.html">View-specific events</a>.
 *
 * By default, a View will try to share the same renderer process as other Views owned by its parent Application.
 * To change that behavior, see the processAffinity {@link View~options view option}.
 *
 * A View's lifecycle is tied to its owning window and can be re-attached to a different window at any point during its lifecycle.
 * @class
 * @alias View
 * @hideconstructor
 */
export declare class View extends WebContents<ViewEvents> {
    identity: Identity;
    constructor(wire: Transport, identity: Identity);
    /**
     * Gets a base64 encoded image of the view or a part of it.
     * @function capturePage
     * @param { CapturePageOptions } [options] Options for the capturePage call.
     * @memberOf View
     * @instance
     * @return {Promise.<string>}
     * @tutorial View.capturePage
     */
    /**
     * Executes Javascript on the view, restricted to contents you own or contents owned by
     * applications you have created.
     * @param { string } code JavaScript code to be executed on the view.
     * @function executeJavaScript
     * @memberOf View
     * @instance
     * @return {Promise.<void>}
     * @tutorial View.executeJavaScript
     */
    /**
     * Focuses the view
     * @return {Promise.<void>}
     * @function focus
     * @memberof View
     * @emits focused
     * @instance
     * @tutorial View.focus
     * @experimental
     */
    focus({ emitSynthFocused }?: {
        emitSynthFocused: boolean;
    }): Promise<void>;
    /**
     * Returns the zoom level of the view.
     * @function getZoomLevel
     * @memberOf View
     * @instance
     * @return {Promise.<number>}
     * @tutorial View.getZoomLevel
     */
    /**
     * Sets the zoom level of the view.
     * @param { number } level The zoom level
     * @function setZoomLevel
     * @memberOf View
     * @instance
     * @return {Promise.<void>}
     * @tutorial View.setZoomLevel
     */
    /**
     * Find and highlight text on a page.
     * @param { string } searchTerm Term to find in page
     * @param { FindInPageOptions } options Search options
     * @function findInPage
     * @memberOf View
     * @instance
     * @return {Promise.<number>}
     * @tutorial View.findInPage
     */
    /**
     * Stops any findInPage call with the provided action.
     * @param {string} action
     * Action to execute when stopping a find in page:<br>
     * "clearSelection" - Clear the selection.<br>
     * "keepSelection" - Translate the selection into a normal selection.<br>
     * "activateSelection" - Focus and click the selection node.<br>
     * @function stopFindInPage
     * @memberOf View
     * @instance
     * @return {Promise.<void>}
     * @tutorial View.stopFindInPage
     */
    /**
     * Navigates the view to a specified URL. The url must contain the protocol prefix such as http:// or https://.
     * @param { string } url - The URL to navigate the view to.
     * @return {Promise.<void>}
     * @function navigate
     * @memberof View
     * @instance
     * @tutorial View.navigate
     * @experimental
     */
    /**
     * Navigates the view back one page.
     * @function navigateBack
     * @memberOf View
     * @instance
     * @return {Promise.<void>}
     * @tutorial View.navigateBack
     */
    /**
     * Navigates the view forward one page.
     * @function navigateForward
     * @memberOf View
     * @instance
     * @return {Promise.<void>}
     * @tutorial View.navigateForward
     */
    /**
     * Stops any current navigation the view is performing.
     * @function stopNavigation
     * @memberOf View
     * @instance
     * @return {Promise.<void>}
     * @tutorial View.stopNavigation
     */
    /**
     * Reloads the view current page
     * @function reload
     * @memberOf View
     * @instance
     * @return {Promise.<void>}
     * @tutorial View.reload
     */
    /**
     * Prints the view's web page
     * @param { PrintOptions } [options] Printer Options
     * @function print
     * @memberOf View
     * @instance
     * @return {Promise.<void>}
     * @tutorial View.print
     */
    /**
     * Returns an array with all system printers
     * @function getPrinters
     * @memberOf View
     * @instance
     * @return { Promise.Array.<PrinterInfo> }
     * @tutorial View.getPrinters
     */
    /**
     * Shows the Chromium Developer Tools
     * @function showDeveloperTools
     * @memberOf View
     * @instance
     * @return {Promise.<void>}
     * @tutorial View.showDeveloperTools
     */
    /**
     * Attaches the current view to a the given window identity.
     * Identity must be the identity of a window in the same application.
     * This detaches the view from its current window, and sets the view to be destroyed when its new window closes.
     * @param target {Identity}
     * @return {Promise.<void>}
     * @tutorial View.attach
     * @experimental
     */
    attach: (target: Identity) => Promise<void>;
    /**
     * Destroys the current view
     * @return {Promise.<void>}
     * @tutorial View.destroy
     * @experimental
     */
    destroy: () => Promise<void>;
    /**
     * Shows the current view if it is currently hidden.
     * @return {Promise.<void>}
     * @tutorial View.show
     * @experimental
     */
    show: () => Promise<void>;
    /**
     * Hides the current view if it is currently visible.
     * @return {Promise.<void>}
     * @tutorial View.hide
     * @experimental
     */
    hide: () => Promise<void>;
    /**
     * Sets the bounds (top, left, width, height) of the view relative to its window.
     * @param bounds {Bounds}
     * @return {Promise.<void>}
     * @tutorial View.setBounds
     * @experimental
     */
    setBounds: (bounds: ViewBounds) => Promise<void>;
    /**
     * Gets the bounds (top, left, width, height) of the view relative to its window.
     * @return {Promise.<Bounds>}
     * @tutorial View.getBounds
     * @experimental
     */
    getBounds: () => Promise<any>;
    /**
     * Gets the View's info.
     * @return {Promise.<ViewInfo>}
     * @tutorial View.getInfo
     * @experimental
     */
    getInfo: () => Promise<any>;
    /**
     * Gets the View's options.
     * @return {Promise<ViewCreationOptions>}
     * @tutorial View.getOptions
     * @experimental
     */
    getOptions: () => Promise<ViewCreationOptions>;
    /**
     * Gets the view's info.
     * @param { Partial<ViewOptions> } options
     * @return {Promise.<void>}
     * @tutorial View.updateOptions
     * @experimental
     */
    updateOptions: (options: Partial<ViewOptions>) => Promise<any>;
    /**
     * Retrieves the window the view is currently attached to.
     * @return {Promise.<_Window>}
     * @experimental
     */
    getCurrentWindow: () => Promise<_Window>;
    /**
     * Sets a custom window handler. Only works if experimental child windows are enabled for the view.
     * Takes a match pattern or array of match patterns for which to call the handler.
     * If multiple handlers are set that match a url, only the first set one will be called.
     * This can be used to "cascade" listeners.
     * Returns a function to unsubscribe this handler.
     * @tutorial View.setCustomWindowHandler
     * @param { string | string[] } urls Url match pattern or array of match patterns
     * see (https://developer.chrome.com/extensions/match_patterns)
     * @param {Function} handler function that will be called with the window options that match the url.
     * @return {Function}
     * @experimental
     */
    setCustomWindowHandler: (urls: string | string[], handler: (options: WindowOption) => void) => Promise<() => Promise<void>>;
}
export interface AutoResizeOptions {
    /**
     * If true, the view's width will grow and shrink together with the window. false
     * by default.
     */
    width?: boolean;
    /**
     * If true, the view's height will grow and shrink together with the window. false
     * by default.
     */
    height?: boolean;
    /**
     * If true, the view's x position and width will grow and shrink proportionally with
     * the window. false by default.
     */
    horizontal?: boolean;
    /**
     * If true, the view's y position and height will grow and shrink proportionally with
     * the window. false by default.
     */
    vertical?: boolean;
}
export interface ViewOptions {
    autoResize?: AutoResizeOptions;
    contextMenuSettings?: ContextMenuSettings;
    backgroundColor?: string;
    customData?: any;
    customContext?: any;
    api?: Api;
    contentNavigation?: ContentNavigation;
    experimental?: any;
}
export interface ViewCreationOptions extends ViewOptions {
    name: string;
    url: string;
    target: Identity;
    customRequestHeaders?: CustomRequestHeaders[];
    bounds?: ViewBounds;
    processAffinity?: string;
    hotkeys?: Hotkey[];
    preloadScripts?: PreloadScript[];
}
