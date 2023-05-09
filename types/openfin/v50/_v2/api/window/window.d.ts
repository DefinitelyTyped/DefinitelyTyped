import { Base } from '../base';
import { Identity } from '../../identity';
import { Application } from '../application/application';
import Transport from '../../transport/transport';
import { WindowEvents } from '../events/window';
import { AnchorType, Bounds, Transition, TransitionOptions } from '../../shapes';
import { WindowOption } from './windowOption';
import { EntityType } from '../frame/frame';
import { ExternalWindow } from '../external-window/external-window';
import { WebContents } from '../webcontents/webcontents';
import { View } from '../view/view';
/**
 * @lends Window
 */
export default class _WindowModule extends Base {
    /**
     * Asynchronously returns a Window object that represents an existing window.
     * @param { Identity } identity
     * @return {Promise.<_Window>}
     * @tutorial Window.wrap
     * @static
     */
    wrap(identity: Identity): Promise<_Window>;
    /**
     * Synchronously returns a Window object that represents an existing window.
     * @param { Identity } identity
     * @return {_Window}
     * @tutorial Window.wrapSync
     * @static
     */
    wrapSync(identity: Identity): _Window;
    /**
     * Creates a new Window.
     * @param { Window~options } options - Window creation options
     * @return {Promise.<_Window>}
     * @tutorial Window.create
     * @static
     */
    create(options: WindowOption): Promise<_Window>;
    /**
     * Asynchronously returns a Window object that represents the current window
     * @return {Promise.<_Window>}
     * @tutorial Window.getCurrent
     * @static
     */
    getCurrent(): Promise<_Window>;
    /**
     * Synchronously returns a Window object that represents the current window
     * @return {_Window}
     * @tutorial Window.getCurrentSync
     * @static
     */
    getCurrentSync(): _Window;
}
export interface CloseEventShape {
    name: string;
    uuid: string;
    type: string;
    topic: string;
}
export interface WindowInfo {
    canNavigateBack: boolean;
    canNavigateForward: boolean;
    preloadScripts: Array<any>;
    title: string;
    url: string;
}
export interface FrameInfo {
    name: string;
    uuid: string;
    entityType: EntityType;
    parent?: Identity | undefined;
}
export interface Area {
    height: number;
    width: number;
    x: number;
    y: number;
}
export interface PrinterInfo {
    name: string;
    description: string;
    status: number;
    isDefault: boolean;
}
interface Margins {
    marginType?: ('default' | 'none' | 'printableArea' | 'custom') | undefined;
    top?: number | undefined;
    bottom?: number | undefined;
    left?: number | undefined;
    right?: number | undefined;
}
interface Dpi {
    horizontal?: number | undefined;
    vertical?: number | undefined;
}
export interface PrintOptions {
    silent?: boolean | undefined;
    printBackground?: boolean | undefined;
    deviceName?: string | undefined;
    color?: boolean | undefined;
    margins?: Margins | undefined;
    landscape?: boolean | undefined;
    scaleFactor?: number | undefined;
    pagesPerSheet?: number | undefined;
    collate?: boolean | undefined;
    copies?: number | undefined;
    pageRanges?: Record<string, number> | undefined;
    duplexMode?: ('simplex' | 'shortEdge' | 'longEdge') | undefined;
    dpi?: Dpi | undefined;
}
interface WindowMovementOptions {
    moveIndependently: boolean;
}
export interface FindInPageOptions {
    forward?: boolean | undefined;
    findNext?: boolean | undefined;
    matchCase?: boolean | undefined;
    wordStart?: boolean | undefined;
    medialCapitalAsWordStart?: boolean | undefined;
}
/**
 * [marginType]
 * Can be `default`, `none`, `printableArea`, or `custom`. If `custom` is chosen,
 * you will also need to specify `top`, `bottom`, `left`, and `right`.
 *
 * [top] The top margin of the printed web page, in pixels.
 * [bottom] The bottom margin of the printed web page, in pixels.
 * [left] The left margin of the printed web page, in pixels.
 * [right] The right margin of the printed web page, in pixels.
*/
/**
 * [horizontal] The horizontal dpi
 * [vertical] The vertical dpi
*/
/**
 * [silent=false] Don't ask user for print settings.
 * [printBackground=false] Prints the background color and image of the web page.
 * [deviceName=''] Set the printer device name to use.
 * [color=true] Set whether the printed web page will be in color or grayscale.
 * [margins] Set margins for the printed web page
 * [landscape=false] Whether the web page should be printed in landscape mode.
 * [scaleFactor] The scale factor of the web page.
 * [pagesPerSheet] The number of pages to print per page sheet.
 * [collate] Whether the web page should be collated.
 * [copies] The number of copies of the web page to print.
 * [pageRanges] The page range to print. Should have two keys: from and to.
 * [duplexMode] Set the duplex mode of the printed web page. Can be simplex, shortEdge, or longEdge.
 * [dpi] Set dpi for the printed web page
 */
/**
* PrinterInfo interface
* name Printer Name
* description Printer Description
* status Printer Status
* isDefault Indicates that system's default printer
*/
/**
 * @summary Window creation options.
 * @description This is the options object required by {@link Window.create Window.create}.
 *
 * Note that `name` is the only required property — albeit the `url` property is usually provided as well
 * (defaults to `"about:blank"` when omitted).
 *
 * _This jsdoc typedef mirrors the `WindowOptions` TypeScript interface in `@types/openfin`._
 *
 * [accelerator]
 * Enable keyboard shortcuts for devtools, zoom, reload, and reload ignoring cache.
 *
 * [accelerator.devtools=false]
 * If `true`, enables the devtools keyboard shortcut:<br>
 * `Ctrl` + `Shift` + `I` _(Toggles Devtools)_
 *
 * [accelerator.reload=false]
 * If `true`, enables the reload keyboard shortcuts:<br>
 * `Ctrl` + `R` _(Windows)_<br>
 * `F5` _(Windows)_<br>
 * `Command` + `R` _(Mac)_
 *
 * [accelerator.reloadIgnoringCache=false]
 * If `true`, enables the reload-from-source keyboard shortcuts:<br>
 * `Ctrl` + `Shift` + `R` _(Windows)_<br>
 * `Shift` + `F5` _(Windows)_<br>
 * `Command` + `Shift` + `R` _(Mac)_
 *
 * [accelerator.zoom=false]
 * If `true`, enables the zoom keyboard shortcuts:<br>
 * `Ctrl` + `+` _(Zoom In)_<br>
 * `Ctrl` + `Shift` + `+` _(Zoom In)_<br>
 * `Ctrl` + `-` _(Zoom Out)_<br>
 * `Ctrl` + `Shift` + `-` _(Zoom Out)_<br>
 * `Ctrl` + `Scroll` _(Zoom In & Out)_<br>
 * `Ctrl` + `0` _(Restore to 100%)_
 *
 * [alphaMask] - _Experimental._  _Updatable._
 * <br>
 * alphaMask turns anything of matching RGB value transparent.
 * <br>
 * Caveats:
 * * runtime key --disable-gpu is required. Note: Unclear behavior on remote Desktop support
 * * User cannot click-through transparent regions
 * * Not supported on Mac
 * * Windows Aero must be enabled
 * * Won't make visual sense on Pixel-pushed environments such as Citrix
 * * Not supported on rounded corner windows
 * [alphaMask.red=-1] 0-255
 * [alphaMask.green=-1] 0-255
 * [alphaMask.blue=-1] 0-255
 *
 * [alwaysOnTop=false] - _Updatable._
 * A flag to always position the window at the top of the window stack.
 *
 * [api]
 * Configurations for API injection.
 *
 * [api.iframe] Configure if the the API should be injected into iframes based on domain.
 *
 * [api.iframe.crossOriginInjection=false] Controls if the `fin` API object is present for cross origin iframes.
 * [api.iframe.sameOriginInjection=true] Controls if the `fin` API object is present for same origin iframes.
 *
 * [applicationIcon = ""] - _Deprecated_ - use `icon` instead.
 *
 * [aspectRatio=0] - _Updatable._
 * The aspect ratio of width to height to enforce for the window. If this value is equal to or less than zero,
 * an aspect ratio will not be enforced.
 *
 * [autoShow=true]
 * A flag to automatically show the window when it is created.
 *
 * [backgroundColor="#FFF"]
 * The window’s _backfill_ color as a hexadecimal value. Not to be confused with the content background color
 * (`document.body.style.backgroundColor`),
 * this color briefly fills a window’s (a) content area before its content is loaded as well as (b) newly exposed
 * areas when growing a window. Setting
 * this value to the anticipated content background color can help improve user experience.
 * Default is white.
 *
 * [contentNavigation]
 * Restrict navigation to URLs that match a whitelisted pattern.
 * In the lack of a whitelist, navigation to URLs that match a blacklisted pattern would be prohibited.
 * See [here](https://developer.chrome.com/extensions/match_patterns) for more details.
 * [contentNavigation.whitelist=[]] List of whitelisted URLs.
 * [contentNavigation.blacklist=[]] List of blacklisted URLs.

 * [contextMenu=true] - _Updatable._
 * A flag to show the context menu when right-clicking on a window.
 * Gives access to the devtools for the window.
 *
 * [contextMenuSettings] - _Updatable._
 * Configure the context menu when right-clicking on a window.
 * [contextMenuSettings.enable=true] Should the context menu display on right click.
 * [contextMenuSettings.devtools=true] Should the context menu contain a button for opening devtools.
 * [contextMenuSettings.reload=true] Should the context menu contain a button for reloading the page.
 *
 * [cornerRounding] - _Updatable._
 * Defines and applies rounded corners for a frameless window. **NOTE:** On macOS corner is not ellipse but circle rounded by the
 *  average of _height_ and _width_.
 * [cornerRounding.height=0] The height in pixels.
 * [cornerRounding.width=0] The width in pixels.
 *
 * [customData=""] - _Updatable._
 * A field that the user can attach serializable data to to be ferried around with the window options.
 * _When omitted, the default value of this property is the empty string (`""`)._
 *
 * [customContext=""] - _Updatable._
 * A field that the user can use to attach serializable data that will be saved when {@link Platform#getSnapshot Platform.getSnapshot}
 * is called.  If a window in a Platform is trying to update or retrieve its own context, it can use the
 * {@link Platform#setContext Platform.setContext} and {@link Platform#getContext Platform.getContext} calls.
 * When omitted, the default value of this property is the empty string (`""`).
 * As opposed to customData this is meant for frequent updates and sharing with other contexts. [Example]{@tutorial customContext}
 *
 * [customRequestHeaders]
 * Defines list of custom headers for requests sent by the window.
 * [customRequestHeaders.urlPatterns=[]] The URL patterns for which the headers will be applied
 * [customRequestHeaders.headers=[]] Objects representing headers and their values,
 * where the object key is the name of header and value at key is the value of the header
 *
 * [defaultCentered=false]
 * Centers the window in the primary monitor. This option overrides `defaultLeft` and `defaultTop`. When `saveWindowState` is `true`,
 * this value will be ignored for subsequent launches in favor of the cached value. **NOTE:** On macOS _defaultCenter_ is
 * somewhat above center vertically.
 *
 * [defaultHeight=500]
 * The default height of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent launches
 * in favor of the cached value.
 *
 * [defaultLeft=100]
 * The default left position of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent
 * launches in favor of the cached value.
 *
 * [defaultTop=100]
 * The default top position of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent
 * launches in favor of the cached value.
 *
 * [defaultWidth=800]
 * The default width of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent
 * launches in favor of the cached value.
 *
 * [frame=true] - _Updatable._
 * A flag to show the frame.
 *
 * @hidden-property {boolean} [hideOnClose=false] - A flag to allow a window to be hidden when the close button is clicked.
 *
 * [hotkeys=[]] - _Updatable._
 * Defines the list of hotkeys that will be emitted as a `hotkey` event on the window. For usage example see [example]{@tutorial hotkeys}.
 * Within Platform, OpenFin also implements a set of pre-defined actions called
 * [keyboard commands]{@link https://developers.openfin.co/docs/platform-api#section-5-3-using-keyboard-commands}
 * that can be assigned to a specific hotkey in the platform manifest.
 * hotkeys.keys The key combination of the hotkey, i.e. "Ctrl+T"
 * [hotkeys.preventDefault=false] Whether or not to prevent default key handling before emitting the event
 *
 * [icon] - _Updatable. Inheritable._
 * A URL for the icon to be shown in the window title bar and the taskbar.
 * _When omitted, inherits from the parent application._
 *
 * [maxHeight=-1] - _Updatable._
 * The maximum height of a window. Will default to the OS defined value if set to -1.
 *
 * [maximizable=true] - _Updatable._
 * A flag that lets the window be maximized.
 *
 * [maxWidth=-1] - _Updatable._
 * The maximum width of a window. Will default to the OS defined value if set to -1.
 *
 * [minHeight=0] - _Updatable._
 * The minimum height of a window.
 *
 * [minimizable=true] - _Updatable._
 * A flag that lets the window be minimized.
 *
 * [minWidth=0] - _Updatable._
 * The minimum width of a window.
 *
 * name
 * The name of the window.
 *
 * [opacity=1.0] - _Updatable._
 * A flag that specifies how transparent the window will be.
 * This value is clamped between `0.0` and `1.0`.
 *
 * [preloadScripts] - _Inheritable_
 * A list of scripts that are eval'ed before other scripts in the page. When omitted, _inherits_
 * from the parent application.
 *
 * [resizable=true] - _Updatable._
 * A flag to allow the user to resize the window.
 *
 * [resizeRegion] - _Updatable._
 * Defines a region in pixels that will respond to user mouse interaction for resizing a frameless window.
 * [resizeRegion.bottomRightCorner=9]
 * The size in pixels of an additional square resizable region located at the bottom right corner of a frameless window.
 * [resizeRegion.size=7]
 * The size in pixels.
 * [resizeRegion.sides={top:true,right:true,bottom:true,left:true}]
 * Sides that a window can be resized from.
 *
 * [saveWindowState=true]
 * A flag to cache the location of the window.
 * ** note ** - This option is ignored in Platforms as it would cause inconsistent {@link Platform#applySnapshot applySnapshot} behavior.
 *
 * [shadow=false]
 * A flag to display a shadow on frameless windows.
 * `shadow` and `cornerRounding` are mutually exclusive.
 * On Windows 7, Aero theme is required.
 *
 * [showTaskbarIcon=true] - _Updatable._ _Windows_.
 * A flag to show the window's icon in the taskbar.
 *
 * [smallWindow=false]
 * A flag to specify a frameless window that can be be created and resized to less than 41x36px (width x height).
 * _Note: Caveats of small windows are no Aero Snap and drag to/from maximize._
 *
 * [state="normal"]
 * The visible state of the window on creation.
 * One of:
 * * `"maximized"`
 * * `"minimized"`
 * * `"normal"`
 *
 * [taskbarIcon=string] - Deprecated - use `icon` instead._Windows_.
 *
 * [taskbarIconGroup=<application uuid>] - _Windows_.
 * Specify a taskbar group for the window.
 * _If omitted, defaults to app's uuid (`fin.Application.getCurrentSync().identity.uuid`)._
 *
 * [url="about:blank"]
 * The URL of the window.
 *
 * [uuid=<application uuid>]
 * The `uuid` of the application, unique within the set of all `Application`s running in OpenFin Runtime.
 * If omitted, defaults to the `uuid` of the application spawning the window.
 * If given, must match the `uuid` of the  application spawning the window.
 * In other words, the application's `uuid` is the only acceptable value, but is the default, so there's
 * really no need to provide it.
 *
 * [waitForPageLoad=false]
 * When set to `true`, the window will not appear until the `window` object's `load` event fires.
 * When set to `false`, the window will appear immediately without waiting for content to be loaded.
 */
/**
 * height Area's height
 * width Area's width
 * x X coordinate of area's starting point
 * y Y coordinate of area's starting point
 */
/**
 * moveIndependently - Move a window independently of its group or along with its group. Defaults to false.
 */
/**
 * [forward=true] Whether to search forward or backward.
 * [findNext=false] Whether the operation is first request or a follow up.
 * [matchCase=false] Whether search should be case-sensitive.
 * [wordStart=false] Whether to look only at the start of words.
 * [medialCapitalAsWordStart=false]
 * When combined with wordStart, accepts a match in the middle of a word if the match begins with an uppercase letter followed by a<br>
 * lowercase or non-letter. Accepts several other intra-word matches.
 */
/**
 * opacity - The Opacity transition
 * position - The Position transition
 * size - The Size transition
*/
/**
 * interrupt - This option interrupts the current animation. When false it pushes
this animation onto the end of the animation queue.
 * relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 */
/**
 * duration - The total time in milliseconds this transition should take.
 * relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 * width - Optional if height is present. Defaults to the window's current width.
 * height - Optional if width is present. Defaults to the window's current height.
 */
/**
 * duration - The total time in milliseconds this transition should take.
 * relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 * left - Defaults to the window's current left position in virtual screen coordinates.
 * top - Defaults to the window's current top position in virtual screen coordinates.
 */
/**
 * duration - The total time in milliseconds this transition should take.
 * relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 * opacity - This value is clamped from 0.0 to 1.0.
*/
/**
 * Bounds is a interface that has the properties of height,
 * width, left, top which are all numbers
 * height Get the application height bound
 * width Get the application width bound
 * top Get the application top bound
 * left Get the application left bound
 * right Get the application right bound
 * bottom Get the application bottom bound
 */
/**
 * @classdesc A basic window that wraps a native HTML window. Provides more fine-grained
 * control over the window state such as the ability to minimize, maximize, restore, etc.
 * By default a window does not show upon instantiation; instead the window's show() method
 * must be invoked manually. The new window appears in the same process as the parent window.
 * It has the ability to listen for <a href="tutorial-Window.EventEmitter.html">window specific events</a>.
 * @alias Window
 * @hideconstructor
 */
export declare class _Window extends WebContents<WindowEvents> {
    identity: Identity;
    constructor(wire: Transport, identity: Identity);
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Executes Javascript on the window, restricted to windows you own or windows owned by
     * applications you have created.
     * @param { string } code JavaScript code to be executed on the window.
     * @function executeJavaScript
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.executeJavaScript
     */
    /**
     * Gives focus to the window.
     * @return {Promise.<void>}
     * @function focus
     * @fires focused
     * @instance
     * @tutorial Window.focus
     */
    /**
    * Returns the zoom level of the window.
    * @function getZoomLevel
    * @instance
    * @return {Promise.<number>}
    * @tutorial Window.getZoomLevel
    */
    /**
     * Sets the zoom level of the window.
     * @param { number } level The zoom level
     * @function setZoomLevel
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.setZoomLevel
     */
    /**
     * Find and highlight text on a page.
     * @param { string } searchTerm Term to find in page
     * @param { FindInPageOptions } options Search options
     * @function findInPage
     * @instance
     * @return {Promise.<number>}
     * @tutorial Window.findInPage
     */
    /**
     * Stops any findInPage call with the provided action.
     * @param {string} action
     * Action to execute when stopping a find in page:<br>
     * "clearSelection" - Clear the selection.<br>
     * "keepSelection" - Translate the selection into a normal selection.<br>
     * "activateSelection" - Focus and click the selection node.<br>
     * @function stopFindInPage
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.stopFindInPage
     */
    /**
     * Navigates the window to a specified URL. The url must contain the protocol prefix such as http:// or https://.
     * @param {string} url - The URL to navigate the window to.
     * @function navigate
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.navigate
     */
    /**
     * Navigates the window back one page.
     * @function navigateBack
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.navigateBack
     */
    /**
     * Navigates the window forward one page.
     * @function navigateForward
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.navigateForward
     */
    /**
     * Stops any current navigation the window is performing.
     * @function stopNavigation
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.stopNavigation
     */
    /**
    * Reloads the window current page
    * @function reload
    * @instance
    * @return {Promise.<void>}
    * @tutorial Window.reload
    */
    /**
    * Prints the window's web page
    * @param { PrintOptions } [options] Printer Options
    * @function print
    * @instance
    * @return {Promise.<void>}
    * @tutorial Window.print
    */
    /**
    * Returns an array with all system printers
    * @function getPrinters
    * @instance
    * @return { Promise.Array.<PrinterInfo> }
    * @tutorial Window.getPrinters
    */
    createWindow(options: WindowOption): Promise<_Window>;
    private windowListFromNameList;
    /**
     * Retrieves an array of frame info objects representing the main frame and any
     * iframes that are currently on the page.
     * @return {Promise.<Array<FrameInfo>>}
     * @tutorial Window.getAllFrames
     */
    getAllFrames(): Promise<Array<FrameInfo>>;
    /**
     * Gets the current bounds (top, bottom, right, left, width, height) of the window.
     * @return {Promise.<Bounds>}
     * @tutorial Window.getBounds
    */
    getBounds(): Promise<Bounds>;
    /**
     * Centers the window on its current screen.
     * @return {Promise.<void>}
     * @tutorial Window.center
     */
    center(): Promise<void>;
    /**
     * Removes focus from the window.
     * @return {Promise.<void>}
     * @tutorial Window.blur
     */
    blur(): Promise<void>;
    /**
     * Brings the window to the front of the window stack.
     * @return {Promise.<void>}
     * @tutorial Window.bringToFront
     */
    bringToFront(): Promise<void>;
    /**
     * Performs the specified window transitions.
     * @param {Transition} transitions - Describes the animations to perform. See the tutorial.
     * @param {TransitionOptions} options - Options for the animation. See the tutorial.
     * @return {Promise.<void>}
     * @tutorial Window.animate
     */
    animate(transitions: Transition, options: TransitionOptions): Promise<void>;
    /**
     * Hides the window.
     * @return {Promise.<void>}
     * @tutorial Window.hide
     */
    hide(): Promise<void>;
    /**
     * closes the window application
     * @param { boolean } [force = false] Close will be prevented from closing when force is false and
     *  ‘close-requested’ has been subscribed to for application’s main window.
     * @return {Promise.<void>}
     * @tutorial Window.close
    */
    close(force?: boolean): Promise<void>;
    /**
     * Returns the native OS level Id.
     * In Windows, it will return the Windows [handle](https://docs.microsoft.com/en-us/windows/desktop/WinProg/windows-data-types#HWND).
     * @return {Promise.<string>}
     * @tutorial Window.getNativeId
     */
    getNativeId(): Promise<string>;
    /**
    * Retrieves window's attached views.
    * @experimental
    * @return {Promise.Array.<View>}
    * @tutorial Window.getCurrentViews
    */
    getCurrentViews(): Promise<Array<View>>;
    disableFrame(): Promise<void>;
    /**
     * Prevents a user from changing a window's size/position when using the window's frame.
     * @return {Promise.<void>}
     * @tutorial Window.disableUserMovement
     */
    disableUserMovement(): Promise<void>;
    enableFrame(): Promise<void>;
    /**
     * Re-enables user changes to a window's size/position when using the window's frame.
     * @return {Promise.<void>}
     * @tutorial Window.enableUserMovement
     */
    enableUserMovement(): Promise<void>;
    /**
     * Flashes the window’s frame and taskbar icon until stopFlashing is called or until a focus event is fired.
     * @return {Promise.<void>}
     * @tutorial Window.flash
     */
    flash(): Promise<void>;
    /**
     * Stops the taskbar icon from flashing.
     * @return {Promise.<void>}
     * @tutorial Window.stopFlashing
     */
    stopFlashing(): Promise<void>;
    /**
     * Retrieves an array containing wrapped fin.Windows that are grouped with this window.
     * If a window is not in a group an empty array is returned. Please note that
     * calling window is included in the result array.
     * @return {Promise.<Array<_Window|ExternalWindow>>}
     * @tutorial Window.getGroup
     */
    getGroup(): Promise<Array<_Window | ExternalWindow>>;
    /**
     * Gets an information object for the window.
     * @return {Promise.<WindowInfo>}
     * @tutorial Window.getInfo
     */
    getInfo(): Promise<WindowInfo>;
    /**
     * Gets the current settings of the window.
     * @return {Promise.<any>}
     * @tutorial Window.getOptions
     */
    getOptions(): Promise<any>;
    /**
     * Gets the parent application.
     * @return {Promise.<Application>}
     * @tutorial Window.getParentApplication
     */
    getParentApplication(): Promise<Application>;
    /**
     * Gets the parent window.
     * @return {Promise.<_Window>}
     * @tutorial Window.getParentWindow
     */
    getParentWindow(): Promise<_Window>;
    /**
     * Gets a base64 encoded PNG snapshot of the window or just part a of it.
     * @param { Area } [area] The area of the window to be captured.
     * Omitting it will capture the whole visible window.
     * @return {Promise.<string>}
     * @tutorial Window.getSnapshot
     */
    getSnapshot(area?: Area): Promise<string>;
    /**
     * Gets the current state ("minimized", "maximized", or "restored") of the window.
     * @return {Promise.<string>}
     * @tutorial Window.getState
     */
    getState(): Promise<string>;
    /**
     * Gets the [Window Object](https://developer.mozilla.org/en-US/docs/Web/API/Window) previously getNativeWindow
     * @return {object}
     * @tutorial Window.getWebWindow
     */
    getWebWindow(): Window;
    /**
     * Determines if the window is a main window.
     * @return {boolean}
     * @tutorial Window.isMainWindow
     */
    isMainWindow(): boolean;
    /**
     * Determines if the window is currently showing.
     * @return {Promise.<boolean>}
     * @tutorial Window.isShowing
     */
    isShowing(): Promise<boolean>;
    /**
     * Joins the same window group as the specified window.
     * Joining a group with native windows is currently not supported(method will nack).
     * @param { _Window | ExternalWindow } target The window whose group is to be joined
     * @return {Promise.<void>}
     * @tutorial Window.joinGroup
     */
    joinGroup(target: _Window | ExternalWindow): Promise<void>;
    /**
     * Leaves the current window group so that the window can be move independently of those in the group.
     * @return {Promise.<void>}
     * @tutorial Window.leaveGroup
     */
    leaveGroup(): Promise<void>;
    /**
     * Maximizes the window
     * @return {Promise.<void>}
     * @tutorial Window.maximize
     */
    maximize(): Promise<void>;
    /**
     * Merges the instance's window group with the same window group as the specified window
     * @param { _Window | ExternalWindow } target The window whose group is to be merged with
     * @return {Promise.<void>}
     * @tutorial Window.mergeGroups
     */
    mergeGroups(target: _Window | ExternalWindow): Promise<void>;
    /**
     * Minimizes the window.
     * @return {Promise.<void>}
     * @tutorial Window.minimize
     */
    minimize(): Promise<void>;
    /**
     * Moves the window by a specified amount.
     * @param { number } deltaLeft The change in the left position of the window
     * @param { number } deltaTop The change in the top position of the window
     * @param { WindowMovementOptions } options Optional parameters to modify window movement
     * @return {Promise.<void>}
     * @tutorial Window.moveBy
     */
    moveBy(deltaLeft: number, deltaTop: number, options?: WindowMovementOptions): Promise<void>;
    /**
     * Moves the window to a specified location.
     * @param { number } left The left position of the window
     * @param { number } top The top position of the window
     * @param { WindowMovementOptions } options Optional parameters to modify window movement
     * @return {Promise.<void>}
     * @tutorial Window.moveTo
     */
    moveTo(left: number, top: number, options?: WindowMovementOptions): Promise<void>;
    /**
     * Resizes the window by a specified amount.
     * @param { number } deltaWidth The change in the width of the window
     * @param { number } deltaHeight The change in the height of the window
     * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
     * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
     * If undefined, the default is "top-left"
     * @param { WindowMovementOptions } options Optional parameters to modify window movement
     * @return {Promise.<void>}
     * @tutorial Window.resizeBy
     */
    resizeBy(deltaWidth: number, deltaHeight: number, anchor: AnchorType, options?: WindowMovementOptions): Promise<void>;
    /**
     * Resizes the window to the specified dimensions.
     * @param { number } width The change in the width of the window
     * @param { number } height The change in the height of the window
     * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
     * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
     * If undefined, the default is "top-left"
     * @param { WindowMovementOptions } options Optional parameters to modify window movement
     * @return {Promise.<void>}
     * @tutorial Window.resizeTo
     */
    resizeTo(width: number, height: number, anchor: AnchorType, options?: WindowMovementOptions): Promise<void>;
    /**
     * Restores the window to its normal state (i.e., unminimized, unmaximized).
     * @return {Promise.<void>}
     * @tutorial Window.restore
     */
    restore(): Promise<void>;
    /**
     * Will bring the window to the front of the entire stack and give it focus.
     * @return {Promise.<void>}
     * @tutorial Window.setAsForeground
     */
    setAsForeground(): Promise<void>;
    /**
     * Sets the window's size and position.
     * bounds This is a * @type {string} name - name of the window.object that holds the propertys of
     * @param { WindowMovementOptions } options Optional parameters to modify window movement
     * @return {Promise.<void>}
     * @tutorial Window.setBounds
     */
    setBounds(bounds: Bounds, options?: WindowMovementOptions): Promise<void>;
    /**
     * Shows the window if it is hidden.
     * @param { boolean } [force = false] Show will be prevented from showing when force is false and
     *  ‘show-requested’ has been subscribed to for application’s main window.
     * @return {Promise.<void>}
     * @tutorial Window.show
     */
    show(force?: boolean): Promise<void>;
    /**
     * Shows the window if it is hidden at the specified location.
     * If the toggle parameter is set to true, the window will
     * alternate between showing and hiding.
     * @param { number } left The left position of the window
     * @param { number } top The right position of the window
     * @param { boolean } force Show will be prevented from closing when force is false and
     * ‘show-requested’ has been subscribed to for application’s main window
     * @param { WindowMovementOptions } options Optional parameters to modify window movement
     * @return {Promise.<void>}
     * @tutorial Window.showAt
     */
    showAt(left: number, top: number, force?: boolean, options?: WindowMovementOptions): Promise<void>;
    /**
     * Shows the Chromium Developer Tools
     * @return {Promise.<void>}
     * @tutorial Window.showDeveloperTools
     */
    /**
     * Updates the window using the passed options.
     * Values that are objects are deep-merged, overwriting only the values that are provided.
     * @param {*} options Changes a window's options that were defined upon creation. See tutorial
     * @return {Promise.<void>}
     * @tutorial Window.updateOptions
     */
    updateOptions(options: any): Promise<void>;
    /**
     * Provides credentials to authentication requests
     * @param { string } userName userName to provide to the authentication challenge
     * @param { string } password password to provide to the authentication challenge
     * @return {Promise.<void>}
     * @tutorial Window.authenticate
     */
    authenticate(userName: string, password: string): Promise<void>;
}
export {};
