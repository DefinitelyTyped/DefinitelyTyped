import { EmitterBase } from '../base';
import { ApplicationInfo } from './application';
import { WindowInfo } from './window';
import { Identity } from '../../identity';
import { MonitorInfo } from './monitor';
import { PointTopLeft } from './point';
import { GetLogRequestType, LogInfo, LogLevel } from './log';
import { ProxyInfo, ProxyConfig } from './proxy';
import { ProcessInfo } from './process';
import { AppAssetInfo, AppAssetRequest, RuntimeDownloadOptions, RuntimeDownloadProgress } from './download-asset';
import { RVMInfo } from './rvm';
import { RuntimeInfo } from './runtime-info';
import { Entity, EntityInfo } from './entity';
import { HostSpecs } from './host-specs';
import { ExternalProcessRequestType, TerminateExternalRequestType, ExternalConnection } from './external-process';
import Transport from '../../transport/transport';
import { CookieInfo, CookieOption } from './cookie';
import { RegistryInfo } from './registry-info';
import { DownloadPreloadOption, DownloadPreloadInfo } from './download-preload';
import { ClearCacheOption } from './clearCacheOption';
import { CrashReporterOption } from './crashReporterOption';
/**
 * AppAssetInfo interface
 * @typedef { Object } AppAssetInfo
 * @property { string } src  The URL to a zip file containing the package files (executables, dlls, etc…)
 * @property { string } alias The name of the asset
 * @property { string } version The version of the package
 * @property { string } target Specify default executable to launch. This option can be overridden in launchExternalProcess
 * @property { args } args The default command line arguments for the aforementioned target.
 * @property { boolean } mandatory When set to true, the app will fail to load if the asset cannot be downloaded.
 * When set to false, the app will continue to load if the asset cannot be downloaded. (Default: true)
 */
/**
 * AppAssetRequest interface
 * @typedef { Object } AppAssetRequest
 * @property { string } alias The name of the asset
 */
/**
 * CookieInfo interface
 * @typedef { Object } CookieInfo
 * @property { string } name  The name of the cookie
 * @property { string } domain The domain of the cookie
 * @property { string } path The path of the cookie
 */
/**
 * CookieOption interface
 * @typedef { Object } CookieOption
 * @property { string } name The name of the cookie
 */
/**
 * ExternalConnection interface
 * @typedef { Object } ExternalConnection
 * @property { string } token The token to broker an external connection
 * @property { string } uuid The uuid of the external connection
 */
/**
* ExternalProcessRequestType interface
* @typedef { Object } ExternalProcessRequestType
* @property { string } path The file path to where the running application resides
* @property { string } arguments The argument passed to the running application
* @property { Object } listener This is described in the {LaunchExternalProcessListner} type definition
*/
/**
 * Entity interface
 * @typedef { Object } Entity
 * @property { string } type The type of the entity
 * @property { string } uuid The uuid of the entity
 */
/**
 * EntityInfo interface
 * @typedef { Object } EntityInfo
 * @property { string } name The name of the entity
 * @property { string } uuid The uuid of the entity
 * @property { Identity } parent The parent of the entity
 * @property { string } entityType The type of the entity
 */
/**
* GetLogRequestType interface
* @typedef { Object } GetLogRequestType
* @property { string } name The name of the running application
* @property { number } endFile The file length of the log file
* @property { number } sizeLimit The set size limit of the log file
*/
/**
 * Identity interface
 * @typedef { Object } Identity
 * @property { string } name The name of the application
 * @property { string } uuid The uuid of the application
 */
/**
 * @typedef { verbose | info | warning | error | fatal } LogLevel
 * @summary Log verbosity levels.
 * @desc Describes the minimum level (inclusive) above which logs will be written
 *
 * @property { string } verbose all logs written
 * @property { string } info info and above
 * @property { string } warning warning and above
 * @property { string } error error and above
 * @property { string } fatal fatal only, indicates a crash is imminent
 */
/**
 * ProxyConfig interface
 * @typedef { Object } ProxyConfig
 * @property { numder } proxyPort The port number of the running application
 * @property { string } proxyAddress The address of the running application
 * @property { string } type
 */
/**
 * RegistryInfo interface
 * @typedef { Object } RegistryInfo
 * @property { any } data The registry data
 * @property { string } rootKey The registry root key
 * @property { string } subkey The registry key
 * @property { string } type The registry type
 * @property { string } value The registry value name
 */
/**
 * RuntimeDownloadOptions interface
 * @typedef { Object } RuntimeDownloadOptions
 * @desc These are the options object required by the downloadRuntime function.
 * @property { string } version The given version to download
 */
/**
 * TerminateExternalRequestType interface
 * @typedef { Object } TerminateExternalRequestType
 * @property { string } uuid The uuid of the running application
 * @property { number } timeout Time out period before the running application terminates
 * @property { boolean } killtree Value to terminate the running application
 */
/**
 * DownloadPreloadOption interface
 * @typedef { Object } DownloadPreloadOption
 * @desc These are the options object required by the downloadPreloadScripts function
 * @property { string } url url to the preload script
 */
/**
 * DownloadPreloadInfo interface
 * @typedef { Object } DownloadPreloadInfo
 * @desc downloadPreloadScripts function return value
 * @property { string } url url to the preload script
 * @property { string } error error during preload script acquisition
 * @property { boolean } succeess download operation success
 */
/**
 * @typedef { Object } ClearCacheOption
 * @summary Clear cache options.
 * @desc These are the options required by the clearCache function.
 *
 * @property {boolean} appcache html5 application cache
 * @property {boolean} cache browser data cache for html files and images
 * @property {boolean} cookies browser cookies
 * @property {boolean} localStorage browser data that can be used across sessions
 */
/**
* CrashReporterOption interface
* @typedef { Object } CrashReporterOption
* @property { boolean } diagnosticMode In diagnostic mode the crash reporter will send diagnostic logs to
*  the OpenFin reporting service on runtime shutdown
* @property { boolean } isRunning check if it's running
*/
/**
 * An object representing the core of OpenFin Runtime. Allows the developer
 * to perform system-level actions, such as accessing logs, viewing processes,
 * clearing the cache and exiting the runtime.
 * @namespace
 */
export default class System extends EmitterBase {
    constructor(wire: Transport);
    /**
     * Returns the version of the runtime. The version contains the major, minor,
     * build and revision numbers.
     * @return {Promise.<string>}
     * @tutorial System.getVersion
     */
    getVersion(): Promise<string>;
    /**
     * Clears cached data containing application resource
     * files (images, HTML, JavaScript files), cookies, and items stored in the
     * Local Storage.
     * @param { ClearCacheOption } options - See tutorial for more details.
     * @return {Promise.<void>}
     * @tutorial System.clearCache
     */
    clearCache(options: ClearCacheOption): Promise<void>;
    /**
     * Clears all cached data when OpenFin Runtime exits.
     * @return {Promise.<void>}
     * @tutorial System.deleteCacheOnExit
     */
    deleteCacheOnExit(): Promise<void>;
    /**
     * Exits the Runtime.
     * @return {Promise.<void>}
     * @tutorial System.exit
     */
    exit(): Promise<void>;
    /**
     * Writes any unwritten cookies data to disk.
     * @return {Promise.<void>}
     * @tutorial System.flushCookieStore
     */
    flushCookieStore(): Promise<void>;
    /**
     * Retrieves an array of data (name, ids, bounds) for all application windows.
     * @return {Promise.Array.<WindowInfo>}
     * @tutorial System.getAllWindows
     */
    getAllWindows(): Promise<Array<WindowInfo>>;
    /**
     * Retrieves an array of data for all applications.
     * @return {Promise.Array.<ApplicationInfo>}
     * @tutorial System.getAllApplications
     */
    getAllApplications(): Promise<Array<ApplicationInfo>>;
    /**
     * Retrieves the command line argument string that started OpenFin Runtime.
     * @return {Promise.<string>}
     * @tutorial System.getCommandLineArguments
     */
    getCommandLineArguments(): Promise<string>;
    /**
     * Get the current state of the crash reporter.
     * @return {Promise.<CrashReporterOption>}
     * @tutorial System.getCrashReporterState
     */
    getCrashReporterState(): Promise<CrashReporterOption>;
    /**
     * Returns a unique identifier (UUID) for the machine (SHA256 hash of the system's MAC address).
     * This call will return the same value on subsequent calls on the same machine(host).
     * The values will be different on different machines, and should be considered globally unique.
     * @return {Promise.<string>}
     * @tutorial System.getDeviceId
     */
    getDeviceId(): Promise<string>;
    /**
     * Start the crash reporter for the browser process if not already running.
     * You can optionally specify `diagnosticMode` to have the logs sent to
     * OpenFin on runtime close
     *
     * @param { CrashReporterOption } options - configure crash reporter
     * @return {Promise.<CrashReporterOption>}
     * @tutorial System.startCrashReporter
     */
    startCrashReporter(options: CrashReporterOption): Promise<CrashReporterOption>;
    /**
     * Returns a hex encoded hash of the mac address and the currently logged in user name
     * @return {Promise.<string>}
     * @tutorial System.getDeviceUserId
     */
    getDeviceUserId(): Promise<string>;
    /**
     * Retrieves a frame info object for the uuid and name passed in
     * @param { string } uuid - The UUID of the target.
     * @param { string } name - The name of the target.
     * @return {Promise.<EntityInfo>}
     * @tutorial System.getEntityInfo
     */
    getEntityInfo(uuid: string, name: string): Promise<EntityInfo>;
    /**
     * Gets the value of a given environment variable on the computer on which the runtime is installed
     * @return {Promise.<string>}
     * @tutorial System.getEnvironmentVariable
     */
    getEnvironmentVariable(envName: string): Promise<string>;
    /**
     * Get current focused window.
     * @return {Promise.<WindowInfo>}
     * @tutorial System.getFocusedWindow
     */
    getFocusedWindow(): Promise<WindowInfo>;
    /**
     * Retrieves the contents of the log with the specified filename.
     * @param { GetLogRequestType } options A object that id defined by the GetLogRequestType interface
     * @return {Promise.<string>}
     * @tutorial System.getLog
     */
    getLog(options: GetLogRequestType): Promise<string>;
    /**
     * Returns the minimum (inclusive) logging level that is currently being written to the log.
     * @return {Promise.<LogLevel>}
     * @tutorial System.getMinLogLevel
     */
    getMinLogLevel(): Promise<LogLevel>;
    /**
     * Retrieves an array containing information for each log file.
     * @return {Promise.Array<LogInfo>}
     * @tutorial System.getLogList
     */
    getLogList(): Promise<Array<LogInfo>>;
    /**
     * Retrieves an object that contains data about the monitor setup of the
     * computer that the runtime is running on.
     * @return {Promise.<MonitorInfo>}
     * @tutorial System.getMonitorInfo
     */
    getMonitorInfo(): Promise<MonitorInfo>;
    /**
     * Returns the mouse in virtual screen coordinates (left, top).
     * @return {Promise.<PointTopLeft>}
     * @tutorial System.getMousePosition
     */
    getMousePosition(): Promise<PointTopLeft>;
    /**
     * Retrieves an array of all of the runtime processes that are currently
     * running. Each element in the array is an object containing the uuid
     * and the name of the application to which the process belongs.
     * @return {Promise.Array.<ProcessInfo>}
     * @tutorial System.getProcessList
     */
    getProcessList(): Promise<Array<ProcessInfo>>;
    /**
     * Retrieves the Proxy settings.
     * @return {Promise.<ProxyInfo>}
     * @tutorial System.getProxySettings
     */
    getProxySettings(): Promise<ProxyInfo>;
    /**
     * Returns information about the running Runtime in an object.
     * @return {Promise.<RuntimeInfo>}
     * @tutorial System.getRuntimeInfo
     */
    getRuntimeInfo(): Promise<RuntimeInfo>;
    /**
     * Returns information about the running RVM in an object.
     * @return {Promise.<RVMInfo>}
     * @tutorial System.getRvmInfo
     */
    getRvmInfo(): Promise<RVMInfo>;
    /**
     * Retrieves system information.
     * @return {Promise.<Hostspecs>}
     * @tutorial System.getHostSpecs
     */
    getHostSpecs(): Promise<HostSpecs>;
    /**
     * Runs an executable or batch file.
     * @param { ExternalProcessRequestType } options A object that is defined in the ExternalProcessRequestType interface
     * @return {Promise.<Identity>}
     * @tutorial System.launchExternalProcess
     */
    launchExternalProcess(options: ExternalProcessRequestType): Promise<Identity>;
    /**
     * Monitors a running process.
     * @param { number } pid See tutorial for more details
     * @return {Promise.<Identity>}
     * @tutorial System.monitorExternalProcess
     */
    monitorExternalProcess(pid: number): Promise<Identity>;
    /**
     * Writes the passed message into both the log file and the console.
     * @param { string } level The log level for the entry. Can be either "info", "warning" or "error"
     * @param { string } message The log message text
     * @return {Promise.<void>}
     * @tutorial System.log
     */
    log(level: string, message: string): Promise<void>;
    /**
     * Opens the passed URL in the default web browser.
     * @param { string } url The URL to open
     * @return {Promise.<void>}
     * @tutorial System.openUrlWithBrowser
     */
    openUrlWithBrowser(url: string): Promise<void>;
    /**
     * Removes the process entry for the passed UUID obtained from a prior call
     * of fin.System.launchExternalProcess().
     * @param { string } uuid The UUID for a process obtained from a prior call to fin.desktop.System.launchExternalProcess()
     * @return {Promise.<void>}
     * @tutorial System.releaseExternalProcess
     */
    releaseExternalProcess(uuid: string): Promise<void>;
    /**
     * Shows the Chromium Developer Tools for the specified window
     * @param { Identity } identity This is a object that is defined by the Identity interface
     * @return {Promise.<void>}
     * @tutorial System.showDeveloperTools
     */
    showDeveloperTools(identity: Identity): Promise<void>;
    /**
     * Attempt to close an external process. The process will be terminated if it
     * has not closed after the elapsed timeout in milliseconds.
     * @param { TerminateExternalRequestType } options A object defined in the TerminateExternalRequestType interface
     * @return {Promise.<void>}
     * @tutorial System.terminateExternalProcess
     */
    terminateExternalProcess(options: TerminateExternalRequestType): Promise<void>;
    /**
     * Update the OpenFin Runtime Proxy settings.
     * @param { ProxyConfig } options A config object defined in the ProxyConfig interface
     * @return {Promise.<void>}
     * @tutorial System.updateProxySettings
     */
    updateProxySettings(options: ProxyConfig): Promise<void>;
    /**
     * Downloads the given application asset
     * @param { AppAssetInfo } appAsset App asset object
     * @return {Promise.<void>}
     * @tutorial System.downloadAsset
     */
    downloadAsset(appAsset: AppAssetInfo, progressListener: (progress: RuntimeDownloadProgress) => void): Promise<void>;
    /**
    * Downloads a version of the runtime.
    * @param { RuntimeDownloadOptions } options - Download options.
    * @param {Function} [progressListener] - called as the runtime is downloaded with progress information.
    * @return {Promise.<void>}
    * @tutorial System.downloadRuntime
    */
    downloadRuntime(options: RuntimeDownloadOptions, progressListener: (progress: RuntimeDownloadProgress) => void): Promise<void>;
    /**
    * Download preload scripts from given URLs
    * @param {DownloadPreloadOption[]} scripts - URLs of preload scripts. See tutorial for more details.
    * @return {Promise.Array<DownloadPreloadInfo>}
    * @tutorial System.downloadPreloadScripts
    */
    downloadPreloadScripts(scripts: Array<DownloadPreloadOption>): Promise<Array<DownloadPreloadInfo>>;
    /**
     * Retrieves an array of data (name, ids, bounds) for all application windows.
     * @return {Promise.Array.<Identity>}
     * @tutorial System.getAllExternalApplications
     */
    getAllExternalApplications(): Promise<Array<Identity>>;
    /**
     * Retrieves app asset information.
     * @param { AppAssetRequest } options
     * @return {Promise.<AppAssetInfo>}
     * @tutorial System.getAppAssetInfo
     */
    getAppAssetInfo(options: AppAssetRequest): Promise<AppAssetInfo>;
    /**
     * Get additional info of cookies.
     * @param { CookieOption } options - See tutorial for more details.
     * @return {Promise.Array.<CookieInfo>}
     * @tutorial System.getCookies
     */
    getCookies(options: CookieOption): Promise<Array<CookieInfo>>;
    /**
     * Set the minimum log level above which logs will be written to the OpenFin log
     * @param { LogLevel } The minimum level (inclusive) above which all calls to log will be written
     * @return {Promise.<void>}
     * @tutorial System.setMinLogLevel
     */
    setMinLogLevel(level: LogLevel): Promise<void>;
    /**
     * Retrieves the UUID of the computer on which the runtime is installed
     * @param { string } uuid The uuid of the running application
     * @return {Promise.<Entity>}
     * @tutorial System.resolveUuid
     */
    resolveUuid(uuid: string): Promise<Entity>;
    /**
     * Retrieves an array of data for all external applications
     * @param { Identity } requestingIdentity This object is described in the Identity typedef
     * @param { any } data Any data type to pass to the method
     * @return {Promise.<any>}
     * @ignore
     */
    executeOnRemote(requestingIdentity: Identity, data: any): Promise<any>;
    /**
     * Reads the specifed value from the registry.
     * @param { string } rootKey - The registry root key.
     * @param { string } subkey - The registry key.
     * @param { string } value - The registry value name.
     * @return {Promise.<RegistryInfo>}
     * @tutorial System.readRegistryValue
     */
    readRegistryValue(rootKey: string, subkey: string, value: string): Promise<RegistryInfo>;
    /**
     * This function call will register a unique id and produce a token.
     * The token can be used to broker an external connection.
     * @param { string } uuid - A UUID for the remote connection.
     * @return {Promise.<ExternalConnection>}
     * @tutorial System.registerExternalConnection
     */
    registerExternalConnection(uuid: string): Promise<ExternalConnection>;
}
