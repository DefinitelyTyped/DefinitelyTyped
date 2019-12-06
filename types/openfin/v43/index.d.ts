// Type definitions for non-npm package OpenFin API 43.0
// Project: https://openfin.co/
// Definitions by: Chris Barker <https://github.com/chrisbarker>
//                 Ricardo de Pena <https://github.com/rdepena>
//                 Roma <https://github.com/whyn07m3>
//                 Li Cui <https://github.com/licui3936>
//                 Tomer Sharon <https://github.com/tomer-openfin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

// based on v12.69.43.15
// see https://openfin.co/support/technical-faq/#what-do-the-numbers-in-the-runtime-version-mean

/**
 * JavaScript API
 * The JavaScript API allows you to create an HTML/JavaScript application that has access to the native windowing environment,
 * can communicate with other applications and has access to sandboxed system-level features.
 *
 * API Ready
 * When using the OpenFin API, it is important to ensure that it has been fully loaded before making any API calls. To verify
 * that the API is in fact ready, be sure to make any API calls either from within the fin.desktop.main() method or explicitly
 * after it has returned. This avoids the situation of trying to access methods that are not yet fully injected.
 *
 * Overview
 * When running within the OpenFin Runtime your web applications have access to the "fin" namespace and all the modules within the API
 * without the need to include additional source files. You can treat the "fin" namespace as you would the "window", "navigator" or "document" objects.
 */
declare namespace fin {
    var Application: import('./_v2/api/application/application').default;
    var Clipboard: import('./_v2/api/clipboard/clipboard').default;
    var ExternalApplication: import('./_v2/api/external-application/external-application').default
    var ExternalWindow: import('./_v2/api/external-window/external-window').default;
    var Frame: import('./_v2/api/frame/frame').default;
    var GlobalHotkey: import('./_v2/api/global-hotkey/index').default;
    var InterApplicationBus: import('./_v2/api/interappbus/interappbus').default;
    var Notification: import('./_v2/api/notification/notification').default;
    var System: import('./_v2/api/system/system').default;
    var Window: import('./_v2/api/window/window').default;

    // v2 shapes
    type applicationLogInfo = import('./_v2/api/application/application').LogInfo;
    type ApplicationOption = import('./_v2/api/application/applicationOption').ApplicationOption;
    type ApplicationInfo = import('./_v2/api/system/application').ApplicationInfo;
    type AppAssetInfo = import('./_v2/api/system/download-asset').AppAssetInfo;
    type AppAssetRequest = import('./_v2/api/system/download-asset').AppAssetRequest;
    type AnchorType = import('./_v2/shapes').AnchorType
    type Bounds = import('./_v2/shapes').Bounds;
    type ClearCacheOption = import('./_v2/api/system/clearCacheOption').ClearCacheOption;
    type CookieInfo = import('./_v2/api/system/cookie').CookieInfo;
    type CookieOption = import('./_v2/api/system/cookie').CookieOption;
    type CrashReporterOption = import('./_v2/api/system/crashReporterOption').CrashReporterOption;
    type ContextMenuSettings = import('./_v2/shapes').ContextMenuSettings;
    type DownloadPreloadInfo = import('./_v2/api/system/download-preload').DownloadPreloadInfo;
    type DownloadPreloadOption = import('./_v2/api/system/download-preload').DownloadPreloadOption;
    type EntityInfo = import('./_v2/api/system/entity').EntityInfo;
    type ExternalApplicationInfo = import('./_v2/api/external-application/external-application').ExternalApplicationInfo;
    type ExternalProcessRequestType = import('./_v2/api/system/external-process').ExternalProcessRequestType;
    type ExternalProcessInfo = import('./_v2/api/system/external-process').ExternalProcessInfo;
    type FrameInfo = import('./_v2/api/window/window').FrameInfo;
    type HostSpecs = import('./_v2/api/system/host-specs').HostSpecs;
    type Identity = import('./_v2/identity').Identity;
    type LaunchInfo = import('./_v2/api/application/application').ApplicationInfo;
    type LogInfo = import('./_v2/api/system/log').LogInfo;
    type MonitorInfo = import('./_v2/api/system/monitor').MonitorInfo;
    type Opacity = import('./_v2/shapes').Opacity;
    type PointTopLeft = import('./_v2/api/system/point').PointTopLeft;
    type Position = import('./_v2/shapes').Position;
    type ProcessInfo = import('./_v2/api/system/process').ProcessInfo;
    type ProxyInfo = import('./_v2/api/system/proxy').ProxyInfo;
    type RegistryInfo = import('./_v2/api/system/registry-info').RegistryInfo;
    type RuntimeInfo = import('./_v2/api/system/runtime-info').RuntimeInfo;
    type RVMInfo = import('./_v2/api/system/rvm').RVMInfo;
    type RGB = import('./_v2/shapes').RGB;
    type RuntimeDownloadOptions = import('./_v2/api/system/download-asset').RuntimeDownloadOptions;
    type RuntimeDownloadProgress = import('./_v2/api/system/download-asset').RuntimeDownloadProgress;
    type ShortCutConfig = import('./_v2/api/application/application').ShortCutConfig;
    type SystemWindowInfo = import('./_v2/api/system/window').WindowInfo;
    type Size = import('./_v2/shapes').Size;
    type TrayInfo = import('./_v2/api/application/application').TrayInfo;
    type Transition = import('./_v2/shapes').Transition;
    type TransitionOptions = import('./_v2/shapes').TransitionOptions;
    type TransitionBase = import('./_v2/shapes').TransitionBase;
    type WindowDetail = import('./_v2/api/system/window').WindowDetail;
    type WindowOption = import('./_v2/api/window/windowOption').WindowOption;
    type WindowInfo = import('./_v2/api/window/window').WindowInfo;
    const desktop: OpenFinDesktop;

    interface OpenFinDesktop {
        main(f: () => any): void;
        Application: OpenFinApplicationStatic;
        ExternalApp: OpenFinExternalApplicationStatic;
        GlobalHotkey: OpenFinGlobalHotkey;
        InterApplicationBus: OpenFinInterApplicationBus;
        Notification: OpenFinNotificationStatic;
        System: OpenFinSystem;
        Window: OpenFinWindowStatic;
        ExternalWin: OpenFinExternalWindowStatic;
        Frame: OpenFinFrameStatic;
    }

    interface OpenFinApplicationStatic {
        /**
         * Creates a new Application.
         * An object representing an application. Allows the developer to create, execute, show/close an application as well as listen to application events.
         */
        new (
            options: ApplicationOption,
            callback?: (successObj: { httpResponseCode: number }) => void,
            errorCallback?: (reason: string, errorObj: NetworkErrorInfo) => void): OpenFinApplication;
        /**
         * Launches the given Application manifest.
         */
        createFromManifest(manifestUrl: string, callback?: (app: OpenFinApplication) => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Returns an Application object that represents an existing application.
         */
        getCurrent(): OpenFinApplication;
        /**
         * Returns an Application object that represents an existing application.
         */
        wrap(uuid: string): OpenFinApplication;
    }

    /**
     * Application
     * An object representing an application. Allows the developer to create, execute, show / close an application as well as listen to application events.
     */
    interface OpenFinApplication {
        /**
         * Returns an instance of the main Window of the application
         */
        getWindow(): OpenFinWindow;
        /**
         * Registers an event listener on the specified event.
         */
        addEventListener(
            type: OpenFinApplicationEventType,
            listener: (event: ApplicationBaseEvent
                | TrayIconClickedEvent
                | WindowEvent
                | WindowAlertRequestedEvent
                | WindowAuthRequested
                | WindowNavigationRejectedEvent
                | WindowEndLoadEvent) => void,
            callback?: () => void,
            errorCallback?: (reason: string) => void): void;
        /**
         * Closes the application and any child windows created by the application.
         */
        close(force?: boolean, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves an array of wrapped fin.desktop.Windows for each of the application's child windows.
         */
        getChildWindows(callback?: (children: OpenFinWindow[]) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves an array of active window groups for all of the application's windows. Each group is represented as an array of wrapped fin.desktop.Windows.
         */
        getGroups(callback?: (groups: OpenFinWindow[][]) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves information about the application.
         */
        getInfo(callback?: (info: LaunchInfo) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves the JSON manifest that was used to create the application. Invokes the error callback if the application was not created from a manifest.
         */
        getManifest(callback?: (manifest: any) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves UUID of the application that launches this application. Invokes the error callback if the application was created from a manifest.
         */
        getParentUuid(callback?: (uuid: string) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves current configuration of application's shortcuts.
         */
        getShortcuts(callback?: (config: ShortCutConfig) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves information about the system tray.
         */
        getTrayIconInfo(callback?: (trayInfo: TrayInfo) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Returns the current zoom level of the application.
         */
        getZoomLevel(callback?: (level: number) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Determines if the application is currently running.
         */
        isRunning(callback?: (running: boolean) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Registers a username and an app name for licensing purposes.
         */
        registerUser(userName: string, appName: string, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Removes a previously registered event listener from the specified event.
         */
        removeEventListener(
            type: OpenFinApplicationEventType,
            previouslyRegisteredListener: (event: ApplicationBaseEvent
                | TrayIconClickedEvent
                | WindowEvent
                | WindowAlertRequestedEvent
                | WindowAuthRequested
                | WindowNavigationRejectedEvent
                | WindowEndLoadEvent) => any,
            callback?: () => void,
            errorCallback?: (reason: string) => void): void;
        /**
         * Removes the application's icon from the tray.
         */
        removeTrayIcon(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Restarts the application.
         */
        restart(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Runs the application. When the application is created, run must be called.
         */
        run(callback?: (successObj: SuccessObj) => void, errorCallback?: (reason: string, errorObj: NetworkErrorInfo) => void): void;
        /**
         * Tells the rvm to relaunch the main application once upon a complete shutdown
         */
        scheduleRestart(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Sends a message to the RVM to upload the application's logs. On success, an object containing logId is returned.
         */
        sendApplicationLog(callback?: (logInfo: applicationLogInfo) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Sets an associated username with that app for Application Log Management use
         */
        setAppLogUsername(username: string, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Sets new shortcut configuration for current application.
         * Application has to be launched with a manifest and has to have shortcut configuration (icon url, name, etc.) in its manifest to
         * be able to change shortcut states.
         */
        setShortcuts(config: ShortCutConfig, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Adds a customizable icon in the system tray and notifies the application when clicked.
         */
        setTrayIcon(iconUrl: string, listener: (clickInfo: TrayIconClickedEvent) => void, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Sets the zoom level of the application. The original size is 0 and each increment above or below represents zooming 20%
         * larger or smaller to default limits of 300% and 50% of original size, respectively.
         */
        setZoomLevel(level: number, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Closes the application by terminating its process.
         */
        terminate(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Waits for a hanging application. This method can be called in response to an application "not-responding" to allow the application
         * to continue and to generate another "not-responding" message after a certain period of time.
         */
        wait(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * The Application's uuid
         */
        uuid: string;
    }

    interface SuccessObj {
        httpResponseCode: number;
    }

    interface NetworkErrorInfo extends ErrorInfo {
        networkErrorCode: number;
    }

    interface ErrorInfo {
        stack: string;
        message: string;
    }

    /**
     * Clipboard
     * Clipboard API allows reading and writting to the clipboard in multiple formats.
     */
    interface OpenFinClipboard {
        /**
         * Reads available formats for the clipboard type
         */
        availableFormats(type: string | null, callback?: (formats: string[]) => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Reads available formats for the clipboard type
         */
        readHtml(type: string | null, callback?: (html: string) => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Read the content of the clipboard as Rtf
         */
        readRtf(type: string | null, callback?: (rtf: string) => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Read the content of the clipboard as plain text
         */
        readText(type: string | null, callback?: (text: string) => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Writes data into the clipboard
         */
        write(data: any, type: string | null, callback?: () => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Writes data into the clipboard as Html
         */
        writeHtml(data: string, type: string | null, callback?: () => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Writes data into the clipboard as Rtf
         */
        writeRtf(data: string, type: string | null, callback?: () => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Writes data into the clipboard as plain text
         */
        writeText(data: string, type: string | null, callback?: () => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
    }

    interface OpenFinExternalApplicationStatic {
        /**
         * Returns an External Application object that represents an existing external application.
         */
        wrap(uuid: string): OpenFinExternalApplication;
    }
    /**
     * ExternalApplication
     * An object representing an application. Allows the developer to create, execute, show and close an application, as well as listen to application events.
     */
    interface OpenFinExternalApplication {
        /**
         * Retrieves information about the application.
         */
        getInfo(callback?: (info: ExternalApplicationInfo) => void,
                errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Registers an event listener on the specified event.
         */
        addEventListener(
            type: OpenFinExternalApplicationEventType,
            listener: () => void,
            callback?: () => void,
            errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Removes a previously registered event listener from the specified event.
         */
        removeEventListener(
            type: OpenFinExternalApplicationEventType,
            listener: () => void,
            callback?: () => void,
            errorCallback?: (reason: string, error: ErrorInfo) => void): void;
    }

   /**
     * GlobalHotkey
     * The Global Hotkey allows the registration and unregistration of given hotkeys at the OS level, meaning a Window/Application will receive the events regardless of focused state.
     */
    interface OpenFinGlobalHotkey {
        /**
         * Registers an event listener on the specified event.
         */
        addEventListener(
            type: OpenFinGlobalHotkeyEventType,
            listener: (event: GlobalHotkeyEvent) => void,
            callback?: () => void,
            errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Checks if a given hotkey has been registered
         */
        isRegistered(hotkey: string, callback?: (registered: boolean) => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Registers a global hotkey with the operating system.
         */
        register(hotkey: string, listener: () => void, callback?: () => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Removes a previously registered event listener from the specified event.
         */
        removeEventListener(
            type: OpenFinGlobalHotkeyEventType,
            listener: (event: GlobalHotkeyEvent) => void,
            callback?: () => void,
            errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Unregisters a global hotkey with the operating system.
         */
        unregister(hotkey: string, callback?: () => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Unregisters all global hotkeys for the current application.
         */
        unregisterAll(callback?: () => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
    }

    /**
     * InterApplicationBus
     * A messaging bus that allows for pub/sub messaging between different applications.
     */
    interface OpenFinInterApplicationBus {
        /**
         * Adds a listener that gets called when applications subscribe to the current application's messages.
         */
        addSubscribeListener(listener: (uuid: string, topic: string, name: string) => void): void;
        /**
         * Adds a listener that gets called when applications unsubscribe to the current application's messages.
         */
        addUnsubscribeListener(listener: (uuid: string, topic: string, name: string) => void): void;
        /**
         * Removes a previously registered subscribe listener.
         */
        removeSubscribeListener(listener: (uuid: string, topic: string, name: string) => void): void;
        /**
         * Removes a previously registered unsubscribe listener.
         */
        removeUnsubscribeListener(listener: (uuid: string, topic: string, name: string) => void): void;
        /**
         * Publishes a message to all applications running on OpenFin Runtime that are subscribed to the specified topic.
         */
        publish(topic: string, message: any, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Sends a message to a specific application on a specific topic.
         */
        send(destinationUuid: string, name: string, topic: string, message: any, callback?: () => void, errorCallback?: (reason: string) => void): void;
        send(destinationUuid: string, topic: string, message: any, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Subscribes to messages from the specified application on the specified topic. If the subscription is for a uuid, [name],
         * topic combination that has already been published to upon subscription you will receive the last 20 missed messages in the order they were published.
         */
        subscribe(
            senderUuid: string,
            name: string,
            topic: string,
            listener: (message: any, uuid: string, name: string) => void,
            callback?: () => void,
            errorCallback?: (reason: string) => void): void;
        subscribe(
            senderUuid: string,
            topic: string,
            listener: (message: any, uuid: string, name: string) => void,
            callback?: () => void,
            errorCallback?: (reason: string) => void): void;
        /**
         * Unsubscribes to messages from the specified application on the specified topic.
         */
        unsubscribe(
            senderUuid: string,
            name: string,
            topic: string,
            listener: (message: any, uuid: string, name: string) => void,
            callback?: () => void,
            errorCallback?: (reason: string) => void): void;
        unsubscribe(
            senderUuid: string,
            topic: string,
            listener: (message: any, uuid: string, name: string) => void,
            callback?: () => void,
            errorCallback?: (reason: string) => void): void;
    }

    interface OpenFinNotificationStatic {
        /**
         * ctor
         */
        new (options: NotificationOptions, callback?: () => void, errorCallback?: (reason: string, errorObj: NetworkErrorInfo) => void): OpenFinNotification;
        /**
         * Gets an instance of the current notification. For use within a notification window to close the window or send a message back to its parent application.
         */
        getCurrent(): OpenFinNotification;
    }

    /**
     * Notification
     * Notification represents a window on OpenFin Runtime which is shown briefly to the user on the bottom-right corner of the primary monitor.
     * A notification is typically used to alert the user of some important event which requires their attention.
     * Notifications are a child or your application that are controlled by the runtime.
     */
    interface OpenFinNotification {
        /**
         * Closes the notification.
         */
        close(callback?: () => void): void;
        /**
         * Sends a message to the notification.
         */
        sendMessage(message: any, callback?: () => void): void;
        /**
         * Sends a message from the notification to the application that created the notification. The message is handled by the notification's onMessage callback.
         */
        sendMessageToApplication(message: any, callback?: () => void): void;
    }

    interface NotificationOptions {
        /**
         * A boolean that will force dismissal even if the mouse is hovering over the notification
         */
        ignoreMouseOver?: boolean;
        /**
         * A message of any primitive or composite-primitive type to be passed to the notification upon creation.
         */
        message?: any;
        /**
         * The timeout for displaying a notification.Can be in milliseconds or "never".
         */
        timeout?: number | "never";
        /**
         * The url of the notification
         */
        url?: string;
        /**
         * A function that is called when a notification is clicked.
         */
        onClick?(callback: () => void): void;
        /**
         * Invoked when the notification is closed via .close() method on the created notification instance
         * or the by the notification itself via fin.desktop.Notification.getCurrent().close().
         * NOTE: this is not invoked when the notification is dismissed via a swipe. For the swipe dismissal callback see onDismiss
         */
        onClose?(callback: () => void): void;
        /**
         * Invoked when a the notification is dismissed by swiping it off the screen to the right. NOTE: this is no fired on a programmatic close.
         */
        onDismiss?(callback: () => void): void;
        /**
         * A function that is called when an error occurs.The reason for the error is passed as an argument.
         */
        onError?(errorCallback: (reason: string, errorObj: NetworkErrorInfo) => void): void;
        /**
         * The onMessage function will respond to messages sent from notification.sendMessageToApplication.
         * The function is passed the message, which can be of any primitive or composite-primitive type.
         */
        onMessage?(callback: (message: any) => void): void;
        /**
         * A function that is called when a notification is shown.
         */
        onShow?(callback: (successObj: SuccessObj) => void): void;
    }

    /**
     * System
     * An object representing the core of OpenFin Runtime.
     * Allows the developer to perform system-level actions, such as accessing logs, viewing processes, clearing the cache and exiting the runtime.
     */
    interface OpenFinSystem {
        Clipboard: OpenFinClipboard;
        /**
         * Registers an event listener on the specified event.
         */
        addEventListener(
            type: OpenFinSystemEventType,
            listener: (event: SystemBaseEvent | DesktopIconClickedEvent | IdleStateChangedEvent | MonitorInfoChangedEvent | SessionChangedEvent) => void,
            callback?: () => void,
            errorCallback?: (reason: string) => void): void;
        /**
         * Clears cached data containing window state/positions,
         * application resource files (images, HTML, JavaScript files), cookies, and items stored in the Local Storage.
         */
        clearCache(options: ClearCacheOption, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Clears all cached data when OpenFin Runtime exits.
         */
        deleteCacheOnExit(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Downloads the given application asset
         */
        downloadAsset(
            assetObj: AppAssetInfo,
            progressListener?: (progress: { downloadedBytes: number, totalBytes: number }) => void,
            callback?: (successObj: { path: string }) => void,
            errorCallback?: (reason: string, errorObj: NetworkErrorInfo) => void): void;

        /**
         * Download preload scripts from given URLs
         */
        downloadPreloadScripts(scripts: DownloadPreloadOption[], callback?: (downloadInfo: DownloadPreloadInfo[]) => void,
                               errorCallback?: (reason: string) => void): void;
        /**
         * Downloads the given OpenFin Runtime.
         */
        downloadRuntime(options: RuntimeDownloadOptions, onProgress?: (progress: RuntimeDownloadProgress) => void, onComplete?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Exits the Runtime.
         */
        exit(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Writes any unwritten cookies data to disk.
         */
        flushCookieStore(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves an array of data for all applications.
         */
        getAllApplications(callback?: (applicationInfoList: ApplicationInfo[]) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves an array of data for all external applications.
         */
        getAllExternalApplications(callback?: (applicationInfoList: ApplicationInfo[]) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves an array of data (name, ids, bounds) for all application windows.
         */
        getAllWindows(callback?: (windowInfoList: SystemWindowInfo[]) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Returns information about the app asset.
         */
        getAppAssetInfo(options: AppAssetRequest, callback?: (appAssetInfo: AppAssetInfo) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves the command line argument string that started OpenFin Runtime.
         */
        getCommandLineArguments(callback?: (args: string) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Get additional info of cookies.
         */
        getCookies(option: CookieOption, callback?: (info: CookieInfo[]) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Get the current state of the crash reporter.
         */
        getCrashReporterState(callback?: (state: CrashReporterOption) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves the configuration object that started the OpenFin Runtime.
         */
        getDeviceId(callback?: (uuid: string) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Returns a hex encoded hash of the mac address and the currently logged in user name
         */
        getDeviceUserId(callback?: (id: string) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Returns an Entity info object relating to the entity specified by the uuid and name passed in. The possible types are 'window', 'iframe', 'external connection' or 'unknown'.
         */
        getEntityInfo(uuid: string, name: string, callback?: (info: EntityInfo) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Gets the value of a given environment variable on the computer on which the runtime is installed.
         */
        getEnvironmentVariable(envVar: string, callback?: (variable: string) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves currently focused window identity.
         */
        getFocusedWindow(callback?: (focusedWindowIdentity: Identity) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves system information.
         */
        getHostSpecs(callback?: (info: HostSpecs) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves the contents of the log with the specified filename.
         */
        getLog(logFileName: string, callback?: (variable: string) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves an array containing information for each log file.
         */
        getLogList(callback?: (logInfoList: LogInfo[]) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Returns a unique identifier (UUID) provided by the machine.
         */
        getMachineId(callback?: (uuid: string) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves the minimum (inclusive) logging level that is currently being written to the logs.
         */
        getMinLogLevel(callback?: (logLevel: string) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves an object that contains data about the about the monitor setup of the computer that the runtime is running on.
         */
        getMonitorInfo(callback?: (monitorInfo: MonitorInfo) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Returns the mouse in virtual screen coordinates (left, top).
         */
        getMousePosition(callback?: (mousePosition: PointTopLeft) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves an array of all of the runtime processes that are currently running.
         * Each element in the array is an object containing the uuid and the name of the application to which the process belongs.
         */
        getProcessList(callback?: (processInfoList: ProcessInfo[]) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves the Proxy settings.
         */
        getProxySettings(callback?: (proxy: ProxyInfo) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Returns information about the running Runtime in an object.
         */
        getRuntimeInfo(callback?: (rvmInfo: RuntimeInfo) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Returns information about the running RVM in an object.
         */
        getRvmInfo(callback?: (rvmInfo: RVMInfo) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Returns the version of the runtime. The version contains the major, minor, build and revision numbers.
         */
        getVersion(callback?: (version: string) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Runs an executable or batch file.
         */
        launchExternalProcess(options: ExternalProcessRequestType, callback?: (payload: { uuid: string }) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Writes the passed message into both the log file and the console.
         */
        log(level: "debug" | "info" | "warn" | "error", message: string, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Monitors a running process.
         */
        monitorExternalProcess(options: ExternalProcessInfo, callback?: (payload: { uuid: string }) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Opens the passed URL in the default web browser.
         */
        openUrlWithBrowser(url: string, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Opens the passed URL in the default web browser.
         */
        readRegistryValue(rootKey: string, subkey: string, value: string, callback?: (info: RegistryInfo) => void,
                          errorCallback?: (reason: string) => void): void;
        /**
         * This function call will register a unique id and produce a token. The token can be used to broker an external connection.
         */
        registerExternalConnection(
            uuid: string,
            callback?: (detail: {
                /**
                 * this will be unique each time
                 */
                token: string;
                /**
                 * "remote-connection-uuid"
                 */
                uuid: string;
            }) => void,
            errorCallback?: (reason: string) => void): void;
        /**
         * Removes the process entry for the passed UUID obtained from a prior call of fin.desktop.System.launchExternalProcess().
         */
        releaseExternalProcess(processUuid: string, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Removes a previously registered event listener from the specified event.
         */
        removeEventListener(
            type: OpenFinSystemEventType,
            listener: (event: SystemBaseEvent | DesktopIconClickedEvent | IdleStateChangedEvent | MonitorInfoChangedEvent | SessionChangedEvent) => void,
            callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Set the minimum log level above which logs will be written to the OpenFin log
         */
        setMinLogLevel(logLevel: string, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Shows the Chrome Developer Tools for the specified window.
         */
        showDeveloperTools(uuid: string, name: string, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Start the crash reporter for the browser process if not already running.
         * You can optionally specify `diagnosticMode` to have the logs sent to
         * OpenFin on runtime close
         */
        startCrashReporter(options: CrashReporterOption, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Attempt to close an external process. The process will be terminated if it has not closed after the elapsed timeout in milliseconds.
         */
        terminateExternalProcess(
            processUuid: string,
            timeout: number,
            killTree: boolean,
            callback?: (info: { result: "clean" | "terminated" | "failed" }) => void,
            errorCallback?: (reason: string) => void): void;
        /**
         * Update the OpenFin Runtime Proxy settings.
         */
        updateProxySettings(type: string, address: string, port: number, callback?: () => void, errorCallback?: (reason: string) => void): void;
    }

    interface OpenFinWindowStatic {
        /**
         * Class: Window
         *
         * new Window(options, callbackopt, errorCallbackopt)
         *
         * Creates a new OpenFin Window
         *
         * A basic window that wraps a native HTML window. Provides more fine-grained control over the window state such as the ability to minimize,
         * maximize, restore, etc. By default a window does not show upon instantiation; instead the window's show() method must be invoked manually.
         * The new window appears in the same process as the parent window.
         * @param options - The options of the window
         * @param [callback] - Called if the window creation was successful
         * @param [callback.successObj] - httpResponseCode
         */
        new (
            options: WindowOption,
            callback?: (successObj: { httpResponseCode: number }) => void,
            errorCallback?: (reason: string, errorObj: NetworkErrorInfo) => void): OpenFinWindow;
        /**
         * Returns an instance of the current window.
         * @returns Current window
         */
        getCurrent(): OpenFinWindow;
        /**
         * Returns a Window object that wraps an existing window.
         */
        wrap(appUuid: string, windowName: string): OpenFinWindow;
    }

    /**
     * Window
     * A basic window that wraps a native HTML window. Provides more fine-grained control over the window state such as the ability to minimize,
     * maximize, restore, etc. By default a window does not show upon instantiation; instead the window's show() method must be invoked manually.
     * The new window appears in the same process as the parent window.
     */
    interface OpenFinWindow {
        /**
         * uuid of the application that the window belongs to.
         */
        uuid: string;
        /**
         * Name of window
         */
        name: string;
        /**
         * Returns the native JavaScript "window" object for the window. This method can only be used by the parent application or the window itself,
         * otherwise it will return undefined. The same Single-Origin-Policy (SOP) rules apply for child windows created by window.open(url) in that the
         * contents of the window object are only accessible if the URL has the same origin as the invoking window. See example below.
         * Also, will not work with fin.desktop.Window objects created with fin.desktop.Window.wrap().
         * @returns Native window
         */
        getNativeWindow(): Window;
        /**
         * Gets the parent application.
         * @returns Parent application
         */
        getParentApplication(): OpenFinApplication;
        /**
         * Gets the parent window.
         */
        getParentWindow(): OpenFinWindow;
        /**
         * Registers an event listener on the specified event.
         */
        addEventListener(
            type: OpenFinWindowEventType,
            listener: (event: WindowBaseEvent
					   | WindowAuthRequestedEvent
					   | WindowBoundsEvent
					   | WindowExternalProcessStartedEvent
					   | WindowExternalProcessExited
					   | WindowGroupChangedEvent
					   | WindowHiddenEvent
					   | Window_NavigationRejectedEvent) => void,
            callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Performs the specified window transitions
         */
        animate(transitions: Transition, options: TransitionOptions, callback?: (event: any) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Provides credentials to authentication requests
         */
        authenticate(userName: string, password: string, callback?: () => void, errorCallback?: (reason: string, error: ErrorInfo) => void): void;
        /**
         * Removes focus from the window.
         */
        blur(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Brings the window to the front of the OpenFin window stack.
         */
        bringToFront(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Closes the window.
         * @param Close will be prevented from closing when force is false and 'close-requested' has been subscribed to for application's main window.
         */
        close(force?: boolean, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Executes Javascript on the window, restricted to windows you own or windows owned by applications you have created.
         * @param code JavaScript code to be executed on the window.
         */
        executeJavaScript(code: string, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Prevents a user from changing a window's size/position when using the window's frame.
         * 'disabled-frame-bounds-changing' is generated at the start of and during a user move/size operation.
         * 'disabled-frame-bounds-changed' is generated after a user move/size operation.
         * The events provide the bounds that would have been applied if the frame was enabled.
         * 'frame-disabled' is generated when an enabled frame becomes disabled.
         */
        disableFrame(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Re-enables user changes to a window's size/position when using the window's frame.
         * 'disabled-frame-bounds-changing' is generated at the start of and during a user move/size operation.
         * 'disabled-frame-bounds-changed' is generated after a user move/size operation.
         * The events provide the bounds that would have been applied if the frame was enabled.
         * 'frame-enabled' is generated when a disabled frame has becomes enabled.
         */
        enableFrame(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Flashes the window's frame and taskbar icon until the window is activated.
         */
        flash(options?: any, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Gives focus to the window.
         */
        focus(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves an array of frame info objects representing the main frame and any
         * iframes that are currently on the page.
         */
        getAllFrames(callback?: (frames: FrameInfo[]) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Gets the current bounds (top, left, width, height) of the window.
         */
        getBounds(callback?: (bounds: Bounds) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Retrieves an array containing wrapped fin.desktop.Windows that are grouped with this window. If a window is not in a group an empty array is returned.
         * Please note that calling window is included in the result array.
         */
        getGroup(callback?: (group: OpenFinWindow[]) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Gets an information object for the window.
         */
        getInfo(callback?: (info: WindowInfo) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Gets the current settings of the window.
         */
        getOptions(callback?: (options: WindowOption) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Gets a base64 encoded PNG snapshot of the window.
         */
        getSnapshot(callback?: (base64Snapshot: string) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Gets the current state ("minimized", "maximized", or "normal") of the window.
         */
        getState(callback?: (state: "minimized" | "maximized" | "normal") => void, errorCallback?: (reason: string) => void): void;
        /**
         * Returns the zoom level of the window.
         */
        getZoomLevel(callback?: (level: number) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Hides the window.
         */
        hide(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Determines if the window is currently showing.
         */
        isShowing(callback?: (showing: boolean) => void, errorCallback?: (reason: string) => void): void;
        /**
         * Joins the same window group as the specified window.
         */
        joinGroup(target: OpenFinWindow, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Leaves the current window group so that the window can be move independently of those in the group.
         */
        leaveGroup(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Maximizes the window.
         */
        maximize(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Merges the instance's window group with the same window group as the specified window
         */
        mergeGroups(target: OpenFinWindow, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Minimizes the window.
         */
        minimize(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Moves the window by a specified amount.
         */
        moveBy(deltaLeft: number, deltaTop: number, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Moves the window to a specified location.
         */
        moveTo(left: number, top: number, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Navigates the window to a specified URL.
         */
        navigate(url: string, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Navigates the window back one page.
         */
        navigateBack(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Navigates the window forward one page.
         */
        navigateForward(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Reloads the window current page.
         */
        reload(ignoreCacheopt?: boolean, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Removes a previously registered event listener from the specified event.
         */
        removeEventListener(
            type: OpenFinWindowEventType,
            listener: (event: WindowBaseEvent
					   | WindowAuthRequestedEvent
					   | WindowBoundsEvent
					   | WindowExternalProcessStartedEvent
					   | WindowExternalProcessExited
					   | WindowGroupChangedEvent
					   | WindowHiddenEvent
					   | Window_NavigationRejectedEvent) => void,
            callback?: () => void,
            errorCallback?: (reason: string) => void): void;
        /**
         * Resizes the window by a specified amount.
         */
        resizeBy(deltaWidth: number, deltaHeight: number, anchor: AnchorType, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Resizes the window by a specified amount.
         */
        resizeTo(width: number, height: number, anchor: AnchorType, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Restores the window to its normal state (i.e., unminimized, unmaximized).
         */
        restore(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Will bring the window to the front of the entire stack and give it focus.
         */
        setAsForeground(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Sets the window's size and position
         */
        setBounds(left: number, top: number, width: number, height: number, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Sets the zoom level of the window.
         */
        setZoomLevel(level: number, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Shows the window if it is hidden.
         * @param Show will be prevented from closing when force is false and 'show-requested' has been subscribed to for application's main window.
         */
        show(force?: boolean, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Shows the window if it is hidden at the specified location. If the toggle parameter is set to true, the window will alternate between showing and hiding.
         */
        showAt(left: number, top: number, force?: boolean, callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Stops the taskbar icon from flashing.
         */
        stopFlashing(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Stops any current navigation the window is performing.
         */
        stopNavigation(callback?: () => void, errorCallback?: (reason: string) => void): void;
        /**
         * Updates the window using the passed options
         */
        updateOptions(options: WindowOption, callback?: () => void, errorCallback?: (reason: string) => void): void;
    }

    interface OpenFinExternalWindowStatic {
        /**
         * Returns an External Window object that wraps an existing window.
         */
        wrap(appUuid: string, windowName: string): Promise<OpenFinExternalWindow>;

        /**
         * Synchronously returns an External Window object that wraps an existing window.
         */
        wrapSync(appUuid: string, windowName: string): OpenFinExternalWindow;
    }

    /**
     * Class: ExternalWindow
     * An ExternalWindow is an OpenFin object representing a window that belongs to a non-openfin application.<br>
     * While External Windows don't have the complete functionality of an OpenFin Window object,
     * they can be used to tap into any application that is currently running in the OS.<br>
     * External Windows are useful for grouping, moving and resizing non-openfin applications
     * as well as listening to events that are dispatched by these applications.<br>
     * They are also compatible with OpenFin's Layouts service to facilitate
     * a complete positional control over all running applications.<br>
     */
    interface OpenFinExternalWindow {
        /**
         * The external window's id
         */
        uuid: string;
        /**
         * The external window's name
         */
        name: string;
        /**
         * Brings the external window to the front of the window stack.
         * @return {Promise.<void>}
         * @experimental
         */

        /**
         * Registers an event listener on the specified event.
         */
        addEventListener(
            type: OpenFinExternalWindowEventType,
            listener: (event: ExternalWindowBaseEvent) => void,
            callback?: () => void, errorCallback?: (reason: string) => void): void;

        bringToFront(): Promise<void>;

        /**
         * Closes the external window.
         * @return {Promise.<void>}
         * @experimental
        */
        close(): Promise<void>;

        /**
         * Prevents a user from changing an external window's size/position
         * when using the window's frame.
         * @return {Promise.<void>}
         * @experimental
         */
        disableUserMovement(): Promise<void>;

        /**
         * Re-enables user changes to an external window's size/position
         * when using the window's frame.
         * @return {Promise.<void>}
         * @experimental
         */
        enableUserMovement(): Promise<void>;

        /**
         * Flashes the external window’s frame and taskbar icon until stopFlashing is called.
         * @return {Promise.<void>}
         * @experimental
         */
        flash(): Promise<void>;

        /**
         * Gives focus to the external window.
         * @return {Promise.<void>}
         * @emits ExternalWindow#focused
         * @experimental
         */
        focus(): Promise<void>;

        /**
         * Gets the current bounds (top, left, etc.) of the external window.
         * @return {Promise.<Bounds>}
         * @experimental
        */
        getBounds(): Promise<Bounds>;

        /**
         * Retrieves an array containing wrapped external windows that are grouped
         * with this external window. If a window is not in a group an empty array
         * is returned.
         * @return {Promise.<Array<ExternalWindow|_Window>>}
         * @experimental
         */
        getGroup(): Promise<Array<OpenFinExternalWindow | OpenFinWindow>>;

        /**
         * Gets an information object for the window.
         * @return {Promise.<any>}
         * @experimental
         */
        getInfo(): Promise<any>;

        /**
         * Gets an external window's options.
         * @return {Promise.<any>}
         * @experimental
         */
        getOptions(): Promise<any>;

        /**
         * Gets the current state ("minimized", "maximized", or "restored") of
         * the external window.
         * @return {Promise.<string>}
         * @experimental
         */
        getState(): Promise<string>;

        /**
         * Hides the external window.
         * @return {Promise.<void>}
         * @experimental
         */
        hide(): Promise<void>;

        /**
         * Determines if the external window is currently showing.
         * @return {Promise.<boolean>}
         * @experimental
         */
        isShowing(): Promise<boolean>;

        /**
         * Joins the same window group as the specified window.
         * @param { _Window | ExternalWindow } target The window whose group is to be joined
         * @return {Promise.<void>}
         * @experimental
         */
        joinGroup(target: OpenFinExternalWindow | OpenFinWindow): Promise<void>;

        /**
         * Leaves the current window group so that the window can be moved
         * independently of those in the group.
         * @return {Promise.<void>}
         * @experimental
         */
        leaveGroup(): Promise<void>;

        /**
         * Maximizes the external window.
         * @return {Promise.<void>}
         * @experimental
         */
        maximize(): Promise<void>;

        /**
         * Merges the instance's window group with the same window group as the specified window
         * @param { _Window | ExternalWindow } target The window whose group is to be merged with
         * @return {Promise.<void>}
         * @experimental
         */
        mergeGroups(target: OpenFinExternalWindow | OpenFinWindow): Promise<void>;

        /**
         * Minimizes the external window.
         * @return {Promise.<void>}
         * @experimental
         */
        minimize(): Promise<void>;

        /**
         * Moves the external window by a specified amount.
         * @param { number } deltaLeft The change in the left position of the window
         * @param { number } deltaTop The change in the top position of the window
         * @return {Promise.<void>}
         * @experimental
         */
        moveBy(deltaLeft: number, deltaTop: number): Promise<void>;

        /**
         * Moves the external window to a specified location.
         * @param { number } left The left position of the window
         * @param { number } top The top position of the window
         * @return {Promise.<void>}
         * @experimental
         */
        moveTo(left: number, top: number): Promise<void>;

        /**
         * Resizes the external window by a specified amount.
         * @param { number } deltaWidth The change in the width of the window
         * @param { number } deltaHeight The change in the height of the window
         * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
         * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
         * If undefined, the default is "top-left".
         * @return {Promise.<void>}
         * @experimental
         */
        resizeBy(deltaWidth: number, deltaHeight: number, anchor: AnchorType): Promise<void>;

        /**
         * Removes a previously registered event listener from the specified event.
         */
        removeEventListener(
            type: OpenFinExternalWindowEventType,
            listener: (event: ExternalWindowBaseEvent) => void,
            callback?: () => void,
            errorCallback?: (reason: string) => void): void;

        /**
         * Resizes the external window to the specified dimensions.
         * @param { number } width The change in the width of the window
         * @param { number } height The change in the height of the window
         * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
         * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
         * If undefined, the default is "top-left".
         * @return {Promise.<void>}
         * @experimental
         */
        resizeTo(width: number, height: number, anchor: AnchorType): Promise<void>;

        /**
         * Restores the external window to its normal state (i.e. unminimized, unmaximized).
         * @return {Promise.<void>}
         * @experimental
         */
        restore(): Promise<void>;

        /**
         * Will bring the external window to the front of the entire stack and
         * give it focus.
         * @return {Promise.<void>}
         * @experimental
         */
        setAsForeground(): Promise<void>;

        /**
         * Sets the external window's size and position.
         * @property { Bounds } bounds
         * @return {Promise.<void>}
         * @experimental
         */
        setBounds(bounds: Bounds): Promise<void>;

        /**
         * Shows the external window if it is hidden.
         * @return {Promise.<void>}
         * @experimental
         */
        show(): Promise<void>;

        /**
         * Shows the external window, if it is hidden, at the specified location.
         * If the toggle parameter is set to true, the external window will
         * alternate between showing and hiding.
         * @param { number } left The left position of the window
         * @param { number } top The top position of the window
         * @return {Promise.<void>}
         * @experimental
         */
        showAt(left: number, top: number): Promise<void>;

        /**
         * Stops the taskbar icon from flashing.
         * @return {Promise.<void>}
         * @experimental
         */
        stopFlashing(): Promise<void>;

        /**
         * Updates the external window using the passed options
         * @param {*} options Changes an external window's options
         * @return {Promise.<void>}
         * @experimental
         */
        updateOptions(options: any): Promise<void>;
    }

    interface OpenFinFrameStatic {
        wrap(uuid: string, name: string): OpenFinFrame;

        getCurrent(): OpenFinFrame;
    }

    interface OpenFinFrame {
        name: string;
        uuid: string;

        addEventListener(type: string, listener: () => void, callback?: () => void, errorCallback?: (reason: string) => void): void;

        getParentWindow(callback?: (entityInfo: EntityInfo) => void, errorCallback?: (reason: string) => void): void;

        getInfo(callback?: (entityInfo: EntityInfo) => void, errorCallback?: (reason: string) => void): void;

        removeEventListener(type: string, listener: () => void, callback?: () => void, errorCallback?: (reason: string) => void): void;
    }

    interface ApplicationBaseEvent {
        topic: string;
        type: OpenFinApplicationEventType;
        uuid: string;
    }

    interface TrayIconClickedEvent extends ApplicationBaseEvent {
        button: number; // 0 for left, 1 for middle, 2 for right
        monitorInfo: MonitorInfo;
        x: number; // the cursor x coordinate
        y: number; // the cursor y coordinate
    }

    interface WindowEvent extends ApplicationBaseEvent {
        name: string;
    }

    interface WindowAlertRequestedEvent extends WindowEvent {
        message: string;
        url: string;
    }

    interface WindowAuthRequested extends WindowEvent {
        authInfo: {
            host: string;
            isProxy: boolean;
            port: number;
            realm: string;
            scheme: string;
        };
    }

    interface WindowNavigationRejectedEvent extends WindowEvent {
        sourceName: string;
        url: string;
    }

    interface WindowEndLoadEvent extends WindowEvent {
        documentName: string;
        isMain: boolean;
    }

    interface MonitorInfoChangedEvent extends MonitorInfo {
        topic: "system";
        type: "monitor-info-changed";
    }

    interface SystemBaseEvent {
        topic: string;
        type: OpenFinSystemEventType;
        uuid: string;
    }

    interface GlobalHotkeyEvent {
        topic: string;
        type: OpenFinGlobalHotkeyEventType;
        /**
         * The Identity that has just registered the hotkey
         */
        identity: {
            name: string;
            uuid: string;
            parentFrame: string;
            entityType: string;
        },
        hotkey: string;
    }

    interface DesktopIconClickedEvent {
        mouse: {
            /**
             * the left virtual screen coordinate of the mouse
             */
            left: number,
            /**
             * the top virtual screen coordinate of the mouse
             */
            top: number
        };
        /**
         * the number of milliseconds that have elapsed since the system was started,
         */
        tickCount: number;
        topic: "system";
        type: "desktop-icon-clicked";
    }

    interface IdleStateChangedEvent {
        /**
         * How long in milliseconds since the user has been idle.
         */
        elapsedTime: number;
        /**
         * true when the user is idle,false when the user has returned;
         */
        isIdle: boolean;
        topic: "system";
        type: "idle-state-changed";
    }

    interface WindowBaseEvent {
        /**
         * the name of the window
         */
        name: string;
        /**
         * always window
         */
        topic: "window";
        /**
         * window event type
         */
        type: OpenFinWindowEventType;
        /**
         * the UUID of the application the window belongs to
         */
        uuid: string;
    }

    interface ExternalWindowBaseEvent {
        /**
         * the name of the window
         */
        name: string;
        /**
         * always window
         */
        topic: "external-window";
        /**
         * window event type
         */
        type: OpenFinExternalWindowEventType;
        /**
         * the UUID of the application the window belongs to
         */
        uuid: string;
    }
    interface WindowAuthRequestedEvent extends WindowBaseEvent {
        authInfo: {
            host: string;
            isProxy: boolean;
            port: number;
            realm: string;
            scheme: string;
        };
    }

    interface WindowBoundsEvent extends WindowBaseEvent {
        /**
         * describes what kind of change occurred.
         * 0 means a change in position.
         * 1 means a change in size.
         * 2 means a change in position and size.
         */
        changeType: number;
        /**
         * true when pending changes have been applied to the window.
         */
        deferred: boolean;
        /**
         * the new height of the window.
         */
        height: number;
        /**
         * the left-most coordinate of the window.
         */
        left: number;
        /**
         * the top-most coordinate of the window.
         */
        top: number;

        type: "bounds-changed" | "bounds-changing" | "disabled-frame-bounds-changed" | "disabled-frame-bounds-changing";
        /**
         * the new width of the window.
         */
        width: number;
    }

    interface WindowExternalProcessStartedEvent extends WindowBaseEvent {
        /**
         * the process handle uuid
         */
        processUuid: string;
        type: "external-process-started";
    }

    interface WindowExternalProcessExited extends WindowBaseEvent {
        /**
         * the process exit code
         */
        exitCode: number;
        /**
         * the process handle uuid
         */
        processUuid: string;
        type: "external-process-exited";
    }

    interface WindowGroupChangedEvent extends WindowBaseEvent {
        /**
         * Which group array the window that the event listener was registered on is included in:
         * 'source' The window is included in sourceGroup.
         * 'target' The window is included in targetGroup.
         * 'nothing' The window is not included in sourceGroup nor targetGroup.
         */
        memberOf: "source" | "target" | "nothing";
        /**
         * The reason this event was triggered.
         * 'leave' A window has left the group due to a leave or merge with group.
         * 'join' A window has joined the group.
         * 'merge' Two groups have been merged together.
         * 'disband' There are no other windows in the group.
         */
        reason: "leave" | "join" | "merge" | "disband";
        /**
         * All the windows in the group the sourceWindow originated from.
         */
        sourceGroup: WindowOfGroupInfo[];
        /**
         * The UUID of the application the sourceWindow belongs to The source window is the window in which (merge/join/leave)group(s) was called.
         */
        sourceWindowAppUuid: string;
        /**
         * the name of the sourcewindow.The source window is the window in which(merge / join / leave) group(s) was called.
         */
        sourceWindowName: string;
        /**
         * All the windows in the group the targetWindow orginated from
         */
        targetGroup: WindowOfGroupInfo[];
        /**
         * The UUID of the application the targetWindow belongs to. The target window is the window that was passed into (merge/join) group(s).
         */
        targetWindowAppUuid: string;
        /**
         * The name of the targetWindow. The target window is the window that was passed into (merge/join) group(s).
         */
        targetWindowName: string;
        type: "group-changed";
    }

    interface WindowOfGroupInfo {
        /**
         * The UUID of the application this window entry belongs to.
         */
        appUuid: string;
        /**
         * The name of this window entry.
         */
        windowName: string;
    }

    interface WindowHiddenEvent extends WindowBaseEvent {
        /**
         * What action prompted the close.
         * The reasons are: "hide", "hide-on-close"
         */
        reason: "hide" | "hide-on-close";
        type: "hidden";
    }

    interface Window_NavigationRejectedEvent {
        name: string;
        /**
         * source of navigation window name
         */
        sourceName: string;
        topic: "navigation-rejected";
        /**
         * Url that was not reached "http://blocked-content.url"
         */
        url: string;
        /**
         * the UUID of the application the window belongs to.
         */
        uuid: string;
    }

    interface SessionChangedEvent {
        /**
         * the action that triggered this event:
         */
        reason: "lock"
            | "unlock"
            | "remote-connect"
            | "remote-disconnect"
            | "unknown";
        topic: "system";
        type: "session-changed";
    }

    type OpenFinApplicationEventType = "closed"
        | "connected"
        | "crashed"
        | "initialized"
        | "manifest-changed"
        | "not-responding"
        | "out-of-memory"
        | "responding"
        | "run-requested"
        | "started"
        | "tray-icon-clicked"
        | "window-alert-requested"
        | "window-auth-requested"
        | "window-closed"
        | "window-created"
        | "window-end-load"
        | "window-navigation-rejected"
        | "window-show-requested"
        | "window-start-load";

    type OpenFinExternalApplicationEventType = "connected"
        | "disconnected";

    type OpenFinGlobalHotkeyEventType = "registered"
        | "unregistered";

    type OpenFinSystemEventType = "application-closed"
        | "application-crashed"
        | "application-created"
        | "application-started"
        | "desktop-icon-clicked"
        | "idle-state-changed"
        | "monitor-info-changed"
        | "session-changed";

    type OpenFinWindowEventType = "auth-requested"
        | "blurred"
        | "bounds-changed"
        | "bounds-changing"
        | "close-requested"
        | "closed"
        | "disabled-frame-bounds-changed"
        | "disabled-frame-bounds-changing"
        | "embedded"
        | "external-process-exited"
        | "external-process-started"
        | "focused"
        | "frame-disabled"
        | "frame-enabled"
        | "group-changed"
        | "hidden"
        | "initialized"
        | "maximized"
        | "minimized"
        | "navigation-rejected"
        | "restored"
        | "show-requested"
        | "shown";

    type OpenFinExternalWindowEventType = 'begin-user-bounds-changing' |
        'blurred' |
        'bounds-changed' |
        'bounds-changing' |
        'closed' |
        'closing' |
        'disabled-movement-bounds-changed' |
        'disabled-movement-bounds-changing' |
        'end-user-bounds-changing' |
        'focused' |
        'group-changed' |
        'hidden' |
        'maximized' |
        'minimized' |
        'restored' |
        'shown' |
        'user-movement-disabled' |
        'user-movement-enabled';
}
