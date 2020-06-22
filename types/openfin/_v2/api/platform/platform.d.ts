import { View } from './../view/view';
import { Base, EmitterBase } from '../base';
import { Channel } from '../interappbus/channel/index';
import { ChannelClient } from '../interappbus/channel/client';
import { Identity } from '../../identity';
import { ApplicationOption } from '../application/applicationOption';
import { WindowOption } from '../window/windowOption';
import { ViewCreationOptions } from '../view/view';
import { RvmLaunchOptions } from '../application/application';
import Transport from '../../transport/transport';
import LayoutModule from './layout';
import { PlatformEvents } from '../events/platform';
import { _Window } from '../window/window';
export interface Snapshot {
    windows: WindowOption[];
}
export interface ApplySnapshotOptions {
    closeExistingWindows: boolean;
}
export interface PlatformOptions extends ApplicationOption {
    defaultWindowOptions?: DefaultWindowOptions;
    defaultViewOptions?: ViewCreationOptions;
    disableDefaultCommands?: boolean;
}
interface DefaultWindowOptions extends WindowOption {
    stylesheetUrl: string;
}
declare type PlatformProvider = any;
export declare type OverrideCallback<T extends PlatformProvider> = (arg: PlatformProvider) => T;
export interface InitPlatformOptions {
    overrideCallback: OverrideCallback<any>;
}
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
    identity: Identity;
    onWindowContextUpdate: Platform['onWindowContextUpdated'];
    constructor(identity: Identity, channel: Channel);
    getClient(identity?: Identity): Promise<ChannelClient>;
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
    createWindow(options: WindowOption): Promise<_Window & Identity>;
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
    /**
     * Retrieves a manifest by url and launches a legacy application manifest or snapshot into the platform.  Returns a promise that
     * resolves to the wrapped Platform.
     * @param {string} [manifestUrl] - The URL of the manifest of the app to launch into the platform.  If this app manifest
     * contains a snapshot, that will be launched into the platform.  If not, the application described in startup_app options
     * will be launched into the platform. The applicable startup_app options will become {@link View~options View Options}.
     * @return {Promise<Platform>}
     * @tutorial Platform.launchLegacyManifest
     * @experimental
     */
    launchLegacyManifest(manifestUrl?: string): Promise<Platform>;
    /**
     * Set the context of your current window or view environment.  The context will be saved in any platform snapshots.
     * @param {any} context - A field where serializable context data can be stored to be saved in platform snapshots.
     * @return {Promise<void>}
     * @tutorial Platform.setContext
     * @experimental
     */
    setContext(context?: any): Promise<void>;
    /**
     * Get the context of your current window or view environment that was previously set using {@link Platform#setContext setContext}.
     * The context will be saved in any platform snapshots.  Returns a promise that resolves to the context.
     * @return {Promise<any>}
     * @tutorial Platform.getContext
     * @experimental
     */
    getContext(): Promise<any>;
    /**
     * Set a listener to be executed when the when a View's target Window experiences a context update. Can only be set from a view that
     * has wrapped it's current platform. The listener receives the new context as its first argument and the previously context as the
     * second argument.  If the listener returns a truthy value, the View's context will be updated with the new context as if
     * {@link Platform#setContext setContext} was called.  This can only be set once per javascript environment (once per View), and any
     * subsequent calls to onWindowContextUpdated will error out.  If the listener is successfully set, returns a promise that resolves to
     * true.
     * @return {Promise.<boolean>}
     * @tutorial Platform.onWindowContextUpdated
     * @experimental
     */
    onWindowContextUpdated(listener: (newContext: any, oldContext?: any) => any): Promise<boolean>;
}
export {};
