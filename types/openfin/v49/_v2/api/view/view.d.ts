import { WebContents } from '../webcontents/webcontents';
import Transport from '../../transport/transport';
import { Identity } from '../../identity';
import { Base } from '../base';
import { ViewEvents } from '../events/view';
import { _Window } from '../window/window';
import { WindowOption, CustomRequestHeaders } from '../window/windowOption';
import { ViewBounds, ContextMenuSettings } from '../../shapes';
/**
 * @lends View
 */
export default class ViewModule extends Base {
    /**
     * Creates a new View.
     * @param { View~options } options - View creation options
     * @return {Promise.<View>}
     * @tutorial View.create
     * @experimental
     * @static
     */
    create(options: ViewCreationOptions): Promise<View>;
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
    * Attaches the current view to a the given window identity.
    * Identity must be the identity of a window in the same application.
    * This detaches the view from it's current window, and sets the view to be destroyed when its new window closes.
    * @param target {Identity}
    * @return {Promise.<void>}
    * @tutorial View.attach
    * @experimental
    */
    attach: (target: Identity) => Promise<void>;
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
    setBounds: (bounds: Pick<import("../../shapes").Bounds, "height" | "width" | "top" | "left">) => Promise<void>;
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
    * @tutorial View.getCurrentWindow
    * @experimental
    */
    getCurrentWindow: () => Promise<_Window>;
    /**
    * Sets a custom window handler.
    * @return {function}
    * @param { string | string[] } urls
    * @experimental
    */
    setCustomWindowHandler: (urls: string | string[], handler: (options: WindowOption) => void) => Promise<() => void>;
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
}
export interface ViewCreationOptions extends ViewOptions {
    name: string;
    url: string;
    target: Identity;
    customRequestHeaders?: CustomRequestHeaders[];
    bounds?: ViewBounds;
    processAffinity?: string;
}
