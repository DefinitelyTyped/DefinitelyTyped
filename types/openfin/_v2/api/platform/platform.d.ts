import { View, ViewCreationOptions } from '../view/view';
import { Base, EmitterBase } from '../base';
import { Channel } from '../interappbus/channel/index';
import { ChannelClient } from '../interappbus/channel/client';
import { Identity } from '../../identity';
import { RvmLaunchOptions, Application } from '../application/application';
import Transport from '../../transport/transport';
import LayoutModule from './layout';
import { PlatformEvents } from '../events/platform';
import { _Window } from '../window/window';
import { PlatformOptions, ApplySnapshotOptions, Snapshot, InitPlatformOptions, PlatformWindowCreationOptions } from '../../shapes/Platform';
/**
 * @lends Platform
 */
export default class PlatformModule extends Base {
    private _channel;
    Layout: LayoutModule;
    private _initializer;
    constructor(wire: Transport, channel: Channel);
    /**
     * Initializes a Platform. Must be called from the Provider when using a custom provider.
     * @param { InitPlatformOptions } [options] - platform options including a callback function that can be used to extend or replace
     * default Provider behavior.
     * @return {Promise.<void>}
     * @tutorial Platform.init
     * @experimental
     * @static
     */
    init(options?: InitPlatformOptions): Promise<any>;
    /**
     * Asynchronously returns a Platform object that represents an existing platform.
     * @param { Identity } identity
     * @return {Promise.<Platform>}
     * @tutorial Platform.wrap
     * @static
     */
    wrap(identity: Identity): Promise<Platform>;
    /**
     * Synchronously returns a Platform object that represents an existing platform.
     * @param { Identity } identity
     * @return {Platform}
     * @tutorial Platform.wrapSync
     * @static
     */
    wrapSync(identity: Identity): Platform;
    /**
     * Asynchronously returns a Platform object that represents the current platform.
     * @return {Promise.<Platform>}
     * @tutorial Platform.getCurrent
     * @static
     */
    getCurrent(): Promise<Platform>;
    /**
     * Synchronously returns a Platform object that represents the current platform.
     * @return {Platform}
     * @tutorial Platform.getCurrentSync
     * @static
     */
    getCurrentSync(): Platform;
    /**
     * Creates and starts a Platform and returns a wrapped and running Platform instance. The wrapped Platform methods can
     * be used to launch content into the platform.  Promise will reject if the platform is already running.
     * @param { PlatformOptions } platformOptions
     * @return {Promise.<Platform>}
     * @tutorial Platform.start
     * @static
     */
    start(platformOptions: PlatformOptions): Promise<Platform>;
    /**
     * Retrieves platforms's manifest and returns a wrapped and running Platform.  If there is a snapshot in the manifest,
     * it will be launched into the platform.
     * @param {string} manifestUrl - The URL of platform's manifest.
     * @param {RvmLaunchOptions} [opts] - Parameters that the RVM will use.
     * @return {Promise.<Platform>}
     * @tutorial Platform.startFromManifest
     * @static
     */
    startFromManifest(manifestUrl: string, opts?: RvmLaunchOptions): Promise<Platform>;
}
/** Manages the life cycle of windows and views in the application.
 *
 * Enables taking snapshots of itself and applying them to restore a previous configuration
 * as well as listen to <a href="tutorial-Platform.EventEmitter.html">platform events</a>.
 * @namespace
 */
export declare class Platform extends EmitterBase<PlatformEvents> {
    Layout: LayoutModule;
    private _channel;
    Application: Application;
    identity: Identity;
    constructor(identity: Identity, channel: Channel);
    getClient: (identity?: Identity) => Promise<ChannelClient>;
    /**
     * Creates a new view and attaches it to a specified target window.
     * @param { View~options } viewOptions View creation options
     * @param { Identity } [target] The window to which the new view is to be attached. If no target, create a view in a new window.
     * @return { Promise<View> }
     * @tutorial Platform.createView
     */
    createView(viewOptions: ViewCreationOptions, target?: Identity): Promise<View>;
    /**
     * Creates a new Window.
     * @param { Window~options } options Window creation options
     * @return { Promise<_Window> }
     * @tutorial Platform.createWindow
     */
    createWindow(options: PlatformWindowCreationOptions): Promise<_Window & Identity>;
    /**
     * Closes current platform, all its windows, and their views.
     * @return { Promise<void> }
     * @tutorial Platform.quit
     */
    quit(): Promise<void>;
    /**
     * Closes a specified view in a target window.
     * @param { Identity } viewIdentity View identity
     * @return { Promise<void> }
     * @tutorial Platform.closeView
     */
    closeView(viewIdentity: Identity): Promise<void>;
    /**
     * Reparents a specified view in a new target window.
     * @param { Identity } viewIdentity View identity
     * @param { Identity } target new owner window identity
     * @return { Promise<View> }
     * @tutorial Platform.reparentView
     */
    reparentView(viewIdentity: Identity, target: Identity): Promise<View>;
    /**
     * Returns a snapshot of the platform in its current state.
     *
     * Can be used to restore an application to a previous state.
     * @return { Promise<Snapshot> }
     * @tutorial Platform.getSnapshot
     */
    getSnapshot(): Promise<Snapshot>;
    /**
     * Adds a snapshot to a running Platform.
     *
     * Can optionally close existing windows and overwrite current platform state with that of a snapshot.
     *
     * The function accepts either a snapshot taken using {@link Platform#getSnapshot getSnapshot},
     * or a url or filepath to a snapshot JSON object.
     * @param { Snapshot | string } requestedSnapshot Snapshot to apply, or a url or filepath.
     * @param { ApplySnapshotOptions } [options] Optional parameters to specify whether existing windows should be closed.
     * @return { Promise<Platform> }
     * @tutorial Platform.applySnapshot
     */
    applySnapshot(requestedSnapshot: Snapshot | string, options?: ApplySnapshotOptions): Promise<Platform>;
    launchLegacyManifest: (manifestUrl: string) => Promise<Platform>;
    /**
     * Retrieves a manifest by url and launches a legacy application manifest or snapshot into the platform.  Returns a promise that
     * resolves to the wrapped Platform.
     * @param {string} manifestUrl - The URL of the manifest of the app to launch into the platform.  If this app manifest
     * contains a snapshot, that will be launched into the platform.  If not, the application described in startup_app options
     * will be launched into the platform. The applicable startup_app options will become {@link View~options View Options}.
     * @return {Promise<Platform>}
     * @tutorial Platform.launchContentManifest
     * @experimental
     */
    launchContentManifest(manifestUrl: string): Promise<Platform>;
    /**
     * Set the context of a host window. The context will be available to the window itself, and to its child Views. It will be saved in any platform snapshots.
     * It can be retrieved using {@link Platform#getWindowContext getWindowContext}.
     * @param {any} context - A field where serializable context data can be stored to be saved in platform snapshots.
     * @param {Identity} [target] - A target window or view may optionally be provided. If no target is provided, the update will be applied
     * to the current window (if called from a Window) or the current host window (if called from a View).
     * @return {Promise<void>}
     * @tutorial Platform.setWindowContext
     * @experimental
     */
    setWindowContext(context?: any, target?: Identity): Promise<void>;
    /**
     * Get the context context of a host window that was previously set using {@link Platform#setWindowContext setWindowContext}.
     * The context will be saved in any platform snapshots.  Returns a promise that resolves to the context.
     * @param {Identity} [target] - A target window or view may optionally be provided. If no target is provided, target will be
     * the current window (if called from a Window) or the current host window (if called from a View).
     * @return {Promise<any>}
     * @tutorial Platform.getWindowContext
     * @experimental
     */
    getWindowContext(target?: Identity): Promise<any>;
}
