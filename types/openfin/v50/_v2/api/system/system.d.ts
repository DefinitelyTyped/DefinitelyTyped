import { Identity } from "../../identity";
import Transport from "../../transport/transport";
import { EmitterBase } from "../base";
import { SystemEvents } from "../events/system";
import { ApplicationInfo } from "./application";
import { ClearCacheOption } from "./clearCacheOption";
import { CookieInfo, CookieOption } from "./cookie";
import { CrashReporterOption } from "./crashReporterOption";
import { AppAssetInfo, AppAssetRequest, RuntimeDownloadOptions, RuntimeDownloadProgress } from "./download-asset";
import { DownloadPreloadInfo, DownloadPreloadOption } from "./download-preload";
import { Entity, EntityInfo } from "./entity";
import {
    ExternalConnection,
    ExternalProcessInfo,
    ExternalProcessRequestType,
    ServiceConfiguration,
    TerminateExternalRequestType,
} from "./external-process";
import { HostSpecs } from "./host-specs";
import { GetLogRequestType, LogInfo, LogLevel } from "./log";
import { MonitorInfo } from "./monitor";
import { PointTopLeft } from "./point";
import { ProcessInfo } from "./process";
import { ProxyConfig, ProxyInfo } from "./proxy";
import { RegistryInfo } from "./registry-info";
import { RuntimeInfo } from "./runtime-info";
import { RVMInfo } from "./rvm";
import { WindowInfo } from "./window";
interface ServiceIdentifier {
    name: string;
}
/**
 * AppAssetInfo interface
 * src  The URL to a zip file containing the package files (executables, dlls, etc…)
 * alias The name of the asset
 * version The version of the package
 * target Specify default executable to launch. This option can be overridden in launchExternalProcess
 * args The default command line arguments for the aforementioned target.
 * mandatory When set to true, the app will fail to load if the asset cannot be downloaded.
 * When set to false, the app will continue to load if the asset cannot be downloaded. (Default: true)
 */
/**
 * AppAssetRequest interface
 * alias The name of the asset
 */
/**
 * ApplicationInfo interface
 * isRunning  true when the application is running
 * uuid uuid of the application
 * parentUuid uuid of the application that launches this application
 */
/**
 * @summary Clear cache options.
 * @description These are the options required by the clearCache function.
 *
 * appcache html5 application cache
 * cache browser data cache for html files and images
 * cookies browser cookies
 * localStorage browser data that can be used across sessions
 */
/**
 * CookieInfo interface
 * name  The name of the cookie
 * domain The domain of the cookie
 * path The path of the cookie
 */
/**
 * CookieOption interface
 * name The name of the cookie
 */
/**
 * CpuInfo interface
 * model The model of the cpu
 * speed The number in MHz
 * times The numbers of milliseconds the CPU has spent in different modes.
 */
/**
 * CrashReporterOption interface
 * diagnosticMode In diagnostic mode the crash reporter will send diagnostic logs to
 *  the OpenFin reporting service on runtime shutdown
 * isRunning check if it's running
 */
/**
 * DipRect interface
 * dipRect The DIP coordinates
 * scaledRect The scale coordinates
 */
/**
 * DipScaleRects interface
 * dipRect The DIP coordinates
 * scaledRect The scale coordinates
 */
/**
 * DownloadPreloadInfo interface
 * @description downloadPreloadScripts function return value
 * url url to the preload script
 * error error during preload script acquisition
 * succeess download operation success
 */
/**
 * DownloadPreloadOption interface
 * @description These are the options object required by the downloadPreloadScripts function
 * url url to the preload script
 */
/**
 * Entity interface
 * type The type of the entity
 * uuid The uuid of the entity
 */
/**
 * EntityInfo interface
 * name The name of the entity
 * uuid The uuid of the entity
 * parent The parent of the entity
 * entityType The type of the entity
 */
/**
 * ExternalApplicationInfo interface
 * parent The parent identity
 */
/**
 * ExternalConnection interface
 * token The token to broker an external connection
 * uuid The uuid of the external connection
 */
/**
 * ExternalProcessRequestType interface
 * path The file path to where the running application resides
 * arguments The argument passed to the running application
 * listener This is described in the {LaunchExternalProcessListner} type definition
 */
/**
 * FrameInfo interface
 * name The name of the frame
 * uuid The uuid of the frame
 * entityType The entity type, could be 'window', 'iframe', 'external connection' or 'unknown'
 * parent The parent identity
 */
/**
 * GetLogRequestType interface
 * name The name of the running application
 * endFile The file length of the log file
 * sizeLimit The set size limit of the log file
 */
/**
 * GpuInfo interface
 * name The graphics card name
 */
/**
 * HostSpecs interface
 * aeroGlassEnabled Value to check if Aero Glass theme is supported on Windows platforms
 * arch "x86" for 32-bit or "x86_64" for 64-bit
 * cpus The same payload as Node's os.cpus()
 * gpu The graphics card name
 * memory The same payload as Node's os.totalmem()
 * name The OS name and version/edition
 * screenSaver Value to check if screensaver is running. Supported on Windows only
 */
/**
 * Identity interface
 * name Optional - the name of the component
 * uuid Universally unique identifier of the application
 */
/**
 * LogInfo interface
 * name The filename of the log
 * size The size of the log in bytes
 * date The unix time at which the log was created "Thu Jan 08 2015 14:40:30 GMT-0500 (Eastern Standard Time)"
 */
/**
 * ManifestInfo interface
 * uuid The uuid of the application
 * manifestUrl The runtime manifest URL
 */
/**
 * MonitorDetails interface
 * available The available DIP scale coordinates
 * availableRect The available monitor coordinates
 * deviceId The device id of the display
 * displayDeviceActive true if the display is active
 * deviceScaleFactor The device scale factor
 * monitorRect The monitor coordinates
 * name The name of the display
 * dpi The dots per inch
 * monitor The monitor coordinates
 */
/**
 * MonitorInfo interface
 * deviceScaleFactor The device scale factor
 * dpi The dots per inch
 * nonPrimaryMonitors The array of monitor details
 * primaryMonitor The monitor details
 * reason always "api-query"
 * taskBar The taskbar on monitor
 * virtualScreen The virtual display screen coordinates
 */
/**
 * @summary Log verbosity levels.
 * @description Describes the minimum level (inclusive) above which logs will be written
 *
 * verbose all logs written
 * info info and above
 * warning warning and above
 * error error and above
 * fatal fatal only, indicates a crash is imminent
 */
/**
 * PointTopLeft interface
 * top The mouse top position in virtual screen coordinates
 * left The mouse left position in virtual screen coordinates
 */
/**
 * Point interface
 * x The mouse x position
 * y The mouse y position
 */
/**
 * ProcessInfo interface
 * cpuUsage The percentage of total CPU usage
 * name The application name
 * nonPagedPoolUsage The current nonpaged pool usage in bytes
 * pageFaultCount The number of page faults
 * pagedPoolUsage The current paged pool usage in bytes
 * pagefileUsage The total amount of memory in bytes that the memory manager has committed
 * peakNonPagedPoolUsage The peak nonpaged pool usage in bytes
 * peakPagedPoolUsage The peak paged pool usage in bytes
 * peakPagefileUsage The peak value in bytes of pagefileUsage during the lifetime of this process
 * @property { number } peakWorkingSetSize The peak working set size in bytes
 * @property { number } processId The native process identifier
 * @property { string } uuid The application UUID
 * @property { number } workingSetSize The current working set size (both shared and private data) in bytes
 */
/**
 * ProxyConfig interface
 * proxyAddress The configured proxy address
 * proxyPort The configured proxy port
 * type The proxy Type
 */
/**
 * ProxyInfo interface
 * config The proxy config
 * system The proxy system info
 */
/**
 * ProxySystemInfo interface
 * autoConfigUrl The auto configuration url
 * bypass The proxy bypass info
 * enabled Value to check if a proxy is enabled
 * proxy The proxy info
 */
/**
 * Rect interface
 * bottom The bottom-most coordinate
 * left The left-most coordinate
 * right The right-most coordinate
 * top The top-most coordinate
 */
/**
 * RegistryInfo interface
 * data The registry data
 * rootKey The registry root key
 * subkey The registry key
 * type The registry type
 * value The registry value name
 */
/**
 * RuntimeDownloadOptions interface
 * @description These are the options object required by the downloadRuntime function.
 * version The given version to download
 */
/**
 * RuntimeInfo interface
 * architecture The runtime build architecture
 * manifestUrl The runtime manifest URL
 * port The runtime websocket port
 * securityRealm The runtime security realm
 * version The runtime version
 * args the command line argument used to start the Runtime
 * chromeVersion The chrome version
 */
/**
 * RVMInfo interface
 * action The name of action: "get-rvm-info"
 * appLogDirectory The app log directory
 * path The path of OpenfinRVM.exe
 * 'start-time' The start time of RVM
 * version The version of RVM
 * 'working-dir' The working directory
 */
/**
 * RvmLaunchOptions interface
 * [noUi] true if no UI when launching
 * [userAppConfigArgs] The user app configuration args
 */
/**
 * ServiceIdentifier interface
 * name The name of the service
 */
/**
 * ServiceConfiguration interface
 * config The service configuration
 * name The name of the service
 */
/**
 * ShortCutConfig interface
 * desktop true if application has a shortcut on the desktop
 * startMenu true if application has shortcut in the start menu
 * systemStartup true if application will be launched on system startup
 */
/**
 * SubOptions interface
 * timestamp The event timestamp
 */
/**
 * TaskBar interface
 * edge which edge of a monitor the taskbar is on
 * rect The taskbar coordinates
 */
/**
 * TerminateExternalRequestType interface
 * uuid The uuid of the running application
 * timeout Time out period before the running application terminates
 * killtree Value to terminate the running application
 */
/**
 * Time interface
 * user The number of milliseconds the CPU has spent in user mode
 * nice The number of milliseconds the CPU has spent in nice mode
 * sys The number of milliseconds the CPU has spent in sys mode
 * idle The number of milliseconds the CPU has spent in idle mode
 * irq The number of milliseconds the CPU has spent in irq mode
 */
/**
 * TrayInfo interface
 * bounds The bound of tray icon in virtual screen pixels
 * monitorInfo Please see fin.System.getMonitorInfo for more information
 * x copy of bounds.x
 * y copy of bounds.y
 */
/**
 * WindowDetail interface
 * bottom The bottom-most coordinate of the window
 * height The height of the window
 * isShowing Value to check if the window is showing
 * left The left-most coordinate of the window
 * name The name of the window
 * right The right-most coordinate of the window
 * state The window state
 * top The top-most coordinate of the window
 * width The width of the window
 */
/**
 * WindowInfo interface
 * childWindows The array of child windows details
 * mainWindow The main window detail
 * uuid The uuid of the application
 */
/**
 * An object representing the core of OpenFin Runtime. Allows the developer
 * to perform system-level actions, such as accessing logs, viewing processes,
 * clearing the cache and exiting the runtime as well as listen to <a href="tutorial-System.EventEmitter.html">system events</a>.
 * @namespace
 */
export default class System extends EmitterBase<SystemEvents> {
    constructor(wire: Transport);
    private sendExternalProcessRequest;
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
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
    getAllWindows(): Promise<WindowInfo[]>;
    /**
     * Retrieves an array of data for all applications.
     * @return {Promise.Array.<ApplicationInfo>}
     * @tutorial System.getAllApplications
     */
    getAllApplications(): Promise<ApplicationInfo[]>;
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
     * Returns a hex encoded hash of the machine id and the currently logged in user name.
     * This is the recommended way to uniquely identify a user / machine combination.
     * @return {Promise.<string>}
     * @tutorial System.getUniqueUserId
     * @static
     */
    getUniqueUserId(): Promise<string>;
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
     * Get currently focused external window.
     * @return {Promise.<Identity>}
     * @experimental
     */
    getFocusedExternalWindow(): Promise<Identity>;
    /**
     * Returns an array of all the installed runtime versions in an object.
     * @return {Promise.<string[]>}
     * @tutorial System.getInstalledRuntimes
     */
    getInstalledRuntimes(): Promise<string[]>;
    /**
     * Retrieves the contents of the log with the specified filename.
     * @param { GetLogRequestType } options A object that id defined by the GetLogRequestType interface
     * @return {Promise.<string>}
     * @tutorial System.getLog
     */
    getLog(options: GetLogRequestType): Promise<string>;
    /**
     * Returns a unique identifier (UUID) provided by the machine.
     * @return {Promise.<string>}
     * @tutorial System.getMachineId
     */
    getMachineId(): Promise<string>;
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
    getLogList(): Promise<LogInfo[]>;
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
    getProcessList(): Promise<ProcessInfo[]>;
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
     * @return {Promise.<HostSpecs>}
     * @tutorial System.getHostSpecs
     */
    getHostSpecs(): Promise<HostSpecs>;
    /**
     * Runs an executable or batch file. A path to the file must be included in options.
     * <br> A uuid may be optionally provided. If not provided, OpenFin will create a uuid for the new process.
     * <br> Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { ExternalProcessRequestType } options A object that is defined in the ExternalProcessRequestType interface
     * @return {Promise.<Identity>}
     * @tutorial System.launchExternalProcess
     */
    launchExternalProcess(options: ExternalProcessRequestType): Promise<Identity>;
    /**
     * Monitors a running process. A pid for the process must be included in options.
     * <br> A uuid may be optionally provided. If not provided, OpenFin will create a uuid for the new process.
     * @param { ExternalProcessInfo } options See tutorial for more details
     * @return {Promise.<Identity>}
     * @tutorial System.monitorExternalProcess
     */
    monitorExternalProcess(options: ExternalProcessInfo): Promise<Identity>;
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
     * has not closed after the elapsed timeout in milliseconds.<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
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
     * Downloads the given application asset<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
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
    downloadRuntime(
        options: RuntimeDownloadOptions,
        progressListener: (progress: RuntimeDownloadProgress) => void,
    ): Promise<void>;
    /**
     * Download preload scripts from given URLs
     * @param {DownloadPreloadOption[]} scripts - URLs of preload scripts. See tutorial for more details.
     * @return {Promise.Array<DownloadPreloadInfo>}
     * @tutorial System.downloadPreloadScripts
     */
    downloadPreloadScripts(scripts: DownloadPreloadOption[]): Promise<DownloadPreloadInfo[]>;
    /**
     * Retrieves an array of data (name, ids, bounds) for all application windows.
     * @return {Promise.Array.<Identity>}
     * @tutorial System.getAllExternalApplications
     */
    getAllExternalApplications(): Promise<Identity[]>;
    /**
     * Retrieves an array of objects representing information about currently
     * running user-friendly native windows on the system.<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @return {Promise.Array.<Identity>}
     * @experimental
     */
    getAllExternalWindows(): Promise<Identity[]>;
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
    getCookies(options: CookieOption): Promise<CookieInfo[]>;
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
     * Reads the specifed value from the registry.<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
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
    /**
     * Returns the json blob found in the [desktop owner settings](https://openfin.co/documentation/desktop-owner-settings/)
     * for the specified service.
     * More information about desktop services can be found [here](https://developers.openfin.co/docs/desktop-services).
     * @param { ServiceIdentifier } serviceIdentifier An object containing a name key that identifies the service.
     * @return {Promise.<ServiceConfiguration>}
     * @tutorial System.getServiceConfiguration
     */
    getServiceConfiguration(serviceIdentifier: ServiceIdentifier): Promise<ServiceConfiguration>;
    /**
     * Signals the RVM to perform a health check and returns the results as json.
     * @return {Promise.<string[]>}
     * @tutorial System.runRvmHealthCheck
     */
    runRvmHealthCheck(): Promise<string[]>;
}
export {};
