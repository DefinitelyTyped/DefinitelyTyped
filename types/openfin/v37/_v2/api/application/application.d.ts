import { EmitterBase, Base, Reply } from '../base';
import { Identity } from '../../identity';
import { _Window } from '../window/window';
import { Point } from '../system/point';
import { MonitorInfo } from '../system/monitor';
import Transport from '../../transport/transport';
import Bounds from '../window/bounds';
import { ApplicationEvents } from '../events/application';
import { ApplicationOption } from './applicationOption';
export interface TrayIconClickReply extends Point, Reply<'application', 'tray-icon-clicked'> {
    button: number;
    monitorInfo: MonitorInfo;
}
export interface ApplicationInfo {
    initialOptions: object;
    launchMode: string;
    manifest: object;
    manifestUrl: string;
    parentUuid?: string;
    runtime: object;
}
export declare class NavigationRejectedReply extends Reply<'window-navigation-rejected', void> {
    sourceName: string;
    url: string;
}
export interface ShortCutConfig {
    desktop?: boolean;
    startMenu?: boolean;
    systemStartup?: boolean;
}
export interface TrayInfo {
    bounds: Bounds;
    monitorInfo: MonitorInfo;
    x: number;
    y: number;
}
/**
 * @lends Application
 */
export default class ApplicationModule extends Base {
    /**
     * Asynchronously returns an Application object that represents an existing application.
     * @param { Identity } identity
     * @return {Promise.<Application>}
     * @tutorial Application.wrap
     * @static
     */
    wrap(identity: Identity): Promise<Application>;
    /**
     * Synchronously returns an Application object that represents an existing application.
     * @param { Identity } identity
     * @return {Application}
     * @tutorial Application.wrapSync
     * @static
     */
    wrapSync(identity: Identity): Application;
    /**
     * Creates a new Application.
     * @param { ApplicationOption } appOptions
     * @return {Promise.<Application>}
     * @tutorial Application.create
     * @static
     */
    create(appOptions: ApplicationOption): Promise<Application>;
    /**
     * Asynchronously returns an Application object that represents the current application
     * @return {Promise.<Application>}
     * @tutorial Application.getCurrent
     * @static
     */
    getCurrent(): Promise<Application>;
    /**
     * Synchronously returns an Application object that represents the current application
     * @return {Application}
     * @tutorial Application.getCurrentSync
     * @static
     */
    getCurrentSync(): Application;
    /**
     * Retrieves application's manifest and returns a wrapped application.
     * @param {string} manifestUrl - The URL of app's manifest.
     * @return {Promise.<Application>}
     * @tutorial Application.createFromManifest
     * @static
     */
    createFromManifest(manifestUrl: string): Promise<Application>;
}
/**
 * @classdesc An object representing an application. Allows the developer to create,
 * execute, show/close an application as well as listen to application events.
 * @class
 */
export declare class Application extends EmitterBase<ApplicationEvents> {
    identity: Identity;
    _manifestUrl?: string;
    private window;
    constructor(wire: Transport, identity: Identity);
    private windowListFromIdentityList;
    /**
     * Determines if the application is currently running.
     * @return {Promise.<boolean>}
     * @tutorial Application.isRunning
     */
    isRunning(): Promise<boolean>;
    /**
     * Closes the application and any child windows created by the application.
     * @param { boolean } [force = false] Close will be prevented from closing when force is false and
     *  ‘close-requested’ has been subscribed to for application’s main window.
     * @return {Promise.<boolean>}
     * @tutorial Application.close
     */
    close(force?: boolean): Promise<void>;
    /**
     * Retrieves an array of wrapped fin.Windows for each of the application’s child windows.
     * @return {Promise.Array.<_Window>}
     * @tutorial Application.getChildWindows
     */
    getChildWindows(): Promise<Array<_Window>>;
    /**
     * Retrieves an array of active window groups for all of the application's windows. Each group is
     * represented as an array of wrapped fin.Windows.
     * @return {Promise.Array.Array.<_Window>}
     * @tutorial Application.getGroups
     */
    getGroups(): Promise<Array<Array<_Window>>>;
    /**
     * Retrieves the JSON manifest that was used to create the application. Invokes the error callback
     * if the application was not created from a manifest.
     * @return {Promise.<any>}
     * @tutorial Application.getManifest
     */
    getManifest(): Promise<any>;
    /**
     * Retrieves UUID of the application that launches this application. Invokes the error callback
     * if the application was created from a manifest.
     * @return {Promise.<string>}
     * @tutorial Application.getParentUuid
     */
    getParentUuid(): Promise<string>;
    /**
     * Retrieves current application's shortcut configuration.
     * @return {Promise.<ShortCutConfig>}
     * @tutorial Application.getShortcuts
     */
    getShortcuts(): Promise<ShortCutConfig>;
    /**
     * Returns the current zoom level of the application.
     * @return {Promise.<number>}
     * @tutorial Application.getZoomLevel
     */
    getZoomLevel(): Promise<number>;
    /**
     * Returns an instance of the main Window of the application
     * @return {Promise.<_Window>}
     * @tutorial Application.getWindow
     */
    getWindow(): Promise<_Window>;
    /**
    * Manually registers a user with the licensing service. The only data sent by this call is userName and appName.
    * @param { string } userName - username to be passed to the RVM.
    * @param { string } appName - app name to be passed to the RVM.
    * @return {Promise.<void>}
    * @tutorial Application.registerUser
    */
    registerUser(userName: string, appName: string): Promise<void>;
    /**
     * Removes the application’s icon from the tray.
     * @return {Promise.<void>}
     * @tutorial Application.removeTrayIcon
     */
    removeTrayIcon(): Promise<void>;
    /**
     * Restarts the application.
     * @return {Promise.<void>}
     * @tutorial Application.restart
     */
    restart(): Promise<void>;
    /**
     * Runs the application. When the application is created, run must be called.
     * @return {Promise.<void>}
     * @tutorial Application.run
     */
    run(): Promise<void>;
    /**
     * Instructs the RVM to schedule one restart of the application.
     * @return {Promise.<void>}
     * @tutorial Application.scheduleRestart
     */
    scheduleRestart(): Promise<void>;
    /**
     * Adds a customizable icon in the system tray and notifies the application when clicked.
     * @param { string } iconUrl Image URL to be used as the icon
     * @return {Promise.<void>}
     * @tutorial Application.setTrayIcon
     */
    setTrayIcon(iconUrl: string): Promise<void>;
    /**
     * Sets new application's shortcut configuration.
     * @param { Object } config New application's shortcut configuration.
     * @param {Boolean} [config.desktop] - Enable/disable desktop shortcut.
     * @param {Boolean} [config.startMenu] - Enable/disable start menu shortcut.
     * @param {Boolean} [config.systemStartup] - Enable/disable system startup shortcut.
     * @return {Promise.<void>}
     * @tutorial Application.setShortcuts
     */
    setShortcuts(config: ShortCutConfig): Promise<void>;
    /**
     * Sets the zoom level of the application. The original size is 0 and each increment above or below represents zooming 20%
     * larger or smaller to default limits of 300% and 50% of original size, respectively.
     * @param { number } level The zoom level
     * @return {Promise.<void>}
     * @tutorial Application.setZoomLevel
     */
    setZoomLevel(level: number): Promise<void>;
    /**
     * @summary Retrieves information about the system tray.
     * @desc The only information currently returned is the position and dimensions.
     * @return {Promise.<TrayInfo>}
     * @tutorial Application.getTrayIconInfo
     */
    getTrayIconInfo(): Promise<TrayInfo>;
    /**
     * Closes the application by terminating its process.
     * @return {Promise.<void>}
     * @tutorial Application.terminate
     */
    terminate(): Promise<void>;
    /**
     * Waits for a hanging application. This method can be called in response to an application
     * "not-responding" to allow the application to continue and to generate another "not-responding"
     * message after a certain period of time.
     * @return {Promise.<void>}
     * @ignore
     */
    wait(): Promise<void>;
    /**
     * Retrieves information about the application.
     * @return {Promise.<ApplicationInfo>}
     * @tutorial Application.getInfo
     */
    getInfo(): Promise<ApplicationInfo>;
}
