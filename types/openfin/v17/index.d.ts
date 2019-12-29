// Type definitions for OpenFin API 17.0
// Project: https://openfin.co/
// Definitions by: Chris Barker <https://github.com/chrisbarker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// based on v6.49.17.14
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
	const desktop: OpenFinDesktop;

	interface OpenFinDesktop {
		main(f: () => any): void;
		Application: OpenFinApplicationStatic;
		ExternalApp: OpenFinExternalApplicationStatic;
		InterApplicationBus: OpenFinInterApplicationBus;
		Notification: OpenFinNotificationStatic;
		System: OpenFinSystem;
		Window: OpenFinWindowStatic;
	}

	interface OpenFinApplicationStatic {
		/**
		 * Creates a new Application.
		 * An object representing an application. Allows the developer to create, execute, show/close an application as well as listen to application events.
		 */
		new (
			options: ApplicationOptions,
			callback?: (successObj: { httpResponseCode: number }) => void,
			errorCallback?: (reason: string, errorObj: NetworkErrorInfo) => void): OpenFinApplication;
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
	 * An object representing an application.Allows the developer to create, execute, show / close an application as well as listen to application events.
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
		 * Retrieves information about the application.
		 */
		getInfo(callback?: (info: LaunchInfo) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Determines if the application is currently running.
		 */
		isRunning(callback?: (running: boolean) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Passes in custom data that will be relayed to the RVM
		 */
		registerCustomData(data: any, callback?: () => void, errorCallback?: (reason: string) => void): void;
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
		 * Closes the application by terminating its process.
		 */
		terminate(callback?: () => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Waits for a hanging application. This method can be called in response to an application "not-responding" to allow the application
		 * to continue and to generate another "not-responding" message after a certain period of time.
		 */
		wait(callback?: () => void, errorCallback?: (reason: string) => void): void;
	}

	interface ShortCutConfig {
		/**
		 * application has a shortcut on the desktop
		 */
		desktop?: boolean;
		/**
		 * application has no shortcut in the start menu
		 */
		startMenu?: boolean;
		/**
		 * application will be launched on system startup
		 */
		systemStartup?: boolean;
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

	interface ApplicationOptions {
		/**
		 * The name of the application.
		 */
		name?: string;
		/**
		 * The url to the application.
		 */
		url?: string;
		/**
		 * The UUID of the application, unique within the set of all other applications running in the OpenFin Runtime. name and uuid must match.
		 */
		uuid?: string;
		/**
		 * Enable Flash at the application level. Default: false.
		 */
		plugins?: boolean;
		/**
		 * The options of the main window of the application.
		 */
		mainWindowOptions?: WindowOptions;
	}

	interface WindowOptions {
		/**
		 * Enable keyboard shortcuts for devtools and zoom. Default: false for both.
		 */
		accelerator?: {
			devtools?: boolean,
			zoom?: boolean,
			reload?: boolean,
			reloadIgnoreCache?: boolean,
		};
		/**
		 * A flag to always position the window at the top of the window stack. Default: false.
		 * Updatable
		 */
		alwaysOnTop?: boolean;
		/**
		 * A flag to automatically show the Window when it is created. Default: false.
		 */
		autoShow?: boolean;
		/**
		 * A flag to show the context menu when right-clicking on a window. Gives access to the Developer Console for the Window. Default: true
		 * Updatable
		 */
		contextMenu?: boolean;
		/**
		 * This defines and applies rounded corners for a frameless window. Default for both width and height: 0.
		 * Updatable
		 */
		cornerRounding?: {
			width?: number;
			height?: number;
		};
		/**
		 * A field that the user can attach serializable data to to be ferried around with the window options. Default: ''.
		 */
		customData?: any;
		/**
		 * Specifies that the window will be positioned in the center of the primary monitor when loaded for the first time on a machine.
		 * When the window corresponding to that id is loaded again, the position from before the window was closed is used.
		 * This option overrides defaultLeft and defaultTop. Default: false.
		 */
		defaultCentered?: boolean;
		/**
		 * The default height of the window. Specifies the height of the window when loaded for the first time on a machine.
		 *  When the window corresponding to that id is loaded again, the height is taken to be the last height of the window before it was closed. Default: 500.
		 */
		defaultHeight?: number;
		/**
		 * The default left position of the window. Specifies the position of the left of the window when loaded for the first time on a machine.
		 *  When the window corresponding to that id is loaded again, the value of left is taken to be the last value before the window was closed. Default: 100.
		 */
		defaultWidth?: number;
		/**
		 * The default top position of the window. Specifies the position of the top of the window when loaded for the first time on a machine.
		 * When the window corresponding to that id is loaded again, the value of top is taken to be the last value before the window was closed. Default: 100.
		 */
		defaultTop?: number;
		/**
		 * The default width of the window. Specifies the width of the window when loaded for the first time on a machine.
		 * When the window corresponding to that id is loaded again, the width is taken to be the last width of the window before it was closed. Default: 800.
		 */
		defaultLeft?: number;
		/**
		 * A flag to show the frame. Default: true.
		 * Updatable
		 */
		frame?: boolean;
		/**
		 * A flag to allow a window to be hidden when the close button is clicked.Default: false.
		 * Updatable
		 */
		hideOnClose?: boolean;
		/**
		 * A URL for the icon to be shown in the window title bar and the taskbar.Default: The parent application's applicationIcon.
		 * Updatable
		 */
		icon?: string;
		/**
		 * The maximum height of a window.Will default to the OS defined value if set to - 1. Default: -1.
		 * Updatable
		 */
		maxHeight?: number;
		/**
		 * A flag that lets the window be maximized.Default: true.
		 * Updatable
		 */
		maximizable?: boolean;
		/**
		 * The maximum width of a window.Will default to the OS defined value if set to - 1. Default: -1.
		 * Updatable
		 */
		maxWidth?: number;
		/**
		 * The minimum height of a window.Default: 0.
		 * Updatable
		 */
		minHeight?: number;
		/**
		 * A flag that lets the window be minimized.Default: true.
		 */
		minimizable?: boolean;
		/**
		 * The minimum width of a window.Default: 0.
		 */
		minWidth?: number;
		/**
		 * The name for the window which must be unique within the context of the invoking Application.
		 */
		name?: string;
		/**
		 * A flag that specifies how transparent the window will be.This value is clamped between 0.0 and 1.0.Default: 1.0.
		 * Updatable
		 */
		opacity?: number;
		/**
		 * A flag to drop to allow the user to resize the window.Default: true.
		 * Updatable
		 */
		resizable?: boolean;
		/**
		 * Defines a region in pixels that will respond to user mouse interaction for resizing a frameless window.
		 * Updatable
		 */
		resizeRegion?: {
			/**
			 * The size in pixels (Default: 2),
			 */
			size?: number;
			/**
			 * The size in pixels of an additional
			 * square resizable region located at the
			 * bottom right corner of a
			 * frameless window. (Default: 4)
			 */
			bottomRightCorner?: number;
		};
		/**
		 * A flag to show the Window's icon in the taskbar. Default: true.
		 */
		showTaskbarIcon?: boolean;
		/**
		 * A flag to cache the location of the window or not. Default: true.
		 */
		saveWindowState?: boolean;
		/**
		 * Specify a taskbar group for the window. Default: app's uuid.
		 */
		taskbarIconGroup?: string;
		/**
		 * A string that sets the window to be "minimized", "maximized", or "normal" on creation. Default: "normal".
		 */
		state?: string;
		/**
		 * The URL of the window. Default: "about:blank".
		 */
		url?: string;
		/**
		 * When set to false, the window will render before the "load" event is fired on the content's window.
		 * Caution, when false you will see an initial empty white window. Default: true.
		 */
		waitForPageLoad?: boolean;
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
		duration?: number | "never";
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
		clearCache(options: CacheOptions, callback?: () => void, errorCallback?: (reason: string) => void): void;
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
		 * Exits the Runtime.
		 */
		exit(callback?: () => void, errorCallback?: (reason: string) => void): void;
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
		getAllWindows(callback?: (windowInfoList: WindowDetails[]) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Retrieves the command line argument string that started OpenFin Runtime.
		 */
		getCommandLineArguments(callback?: (args: string) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Retrieves the configuration object that started the OpenFin Runtime.
		 */
		getDeviceId(callback?: (uuid: string) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Gets the value of a given environment variable on the computer on which the runtime is installed.
		 */
		getEnvironmentVariable(envVar: string, callback?: (variable: string) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Retrieves system information.
		 */
		getHostSpecs(callback?: (info: HostSpecInfo) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Retrieves the contents of the log with the specified filename.
		 */
		getLog(logFileName: string, callback?: (variable: string) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Retrieves an array containing information for each log file.
		 */
		getLogList(callback?: (logInfoList: LogInfo[]) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Retrieves an object that contains data about the about the monitor setup of the computer that the runtime is running on.
		 */
		getMonitorInfo(callback?: (monitorInfo: MonitorInfo) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Returns the mouse in virtual screen coordinates (left, top).
		 */
		getMousePosition(callback?: (mousePosition: VirtualScreenCoordinates) => void, errorCallback?: (reason: string) => void): void;
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
		 * Returns information about the running RVM in an object.
		 */
		getRvmInfo(callback?: (rvmInfo: RvmInfo) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Returns the version of the runtime. The version contains the major, minor, build and revision numbers.
		 */
		getVersion(callback?: (version: string) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Runs an executable or batch file.
		 */
		launchExternalProcess(options: ExternalProcessLaunchInfo, callback?: (payload: { uuid: string }) => void, errorCallback?: (reason: string) => void): void;
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
		 * Shows the Chrome Developer Tools for the specified window.
		 */
		showDeveloperTools(uuid: string, name: string, callback?: () => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Attempt to close an external process. The process will be terminated if it has not closed after the elapsed timeout in milliseconds.
		 */
		terminateExternalProcess(
			processUuid: string,
			timeout: number,
			killTree: boolean,
			callback?: (info: { result: "clean" | "terminated" | "failed" }) => void,
			errorCallback?: (reason: string) => void): void;
		terminateExternalProcess(
			processUuid: string,
			timeout: number,
			callback?: (info: { result: "clean" | "terminated" | "failed" }) => void,
			errorCallback?: (reason: string) => void): void;
		/**
		 * Update the OpenFin Runtime Proxy settings.
		 */
		updateProxySettings(type: string, address: string, port: number, callback?: () => void, errorCallback?: (reason: string) => void): void;
	}

	interface CacheOptions {
		cache?: boolean;
		cookies?: boolean;
		localStorage?: boolean;
		appcache?: boolean;
		userData?: boolean;
	}

	interface AppAssetInfo {
		src?: string;
		alias?: string;
		version?: string;
		target?: string;
		args?: string;
	}

	interface ApplicationInfo {
		/**
		 * true when the application is running.
		 */
		isRunning?: boolean;
		/**
		 * uuid of the application.
		 */
		uuid?: string;
		/**
		 * uuid of the application that launches this application.
		 */
		parentUuid?: string;
	}

	interface WindowDetails {
		uuid?: string;
		mainWindow?: WindowInfo;
		childWindows?: WindowInfo[];
	}

	interface WindowInfo {
		/**
		 * name of the child window
		 */
		name?: string;
		/**
		 * top-most coordinate of the child window
		 */
		top?: number;
		/**
		 * right-most coordinate of the child window
		 */
		right?: number;
		/**
		 * bottom-most coordinate of the child window
		 */
		bottom?: number;
		/**
		 * left-most coordinate of the child window
		 */
		left?: number;
	}

	interface HostSpecInfo {
		/**
		 * "x86" for 32-bit or "x86_64" for 64-bit
		 */
		arch: string;
		/**
		 * Same payload as Node's os.cpus()
		 */
		cpus: NodeCpuInfo[];
		gpu: {
			/**
			 * Graphics card name
			 */
			name: string;
		};
		/**
		 * Same payload as Node's os.totalmem()
		 */
		memory: number;
		/**
		 * OS name and version/edition
		 */
		name: string;
	}

	interface NodeCpuInfo {
		model: string;
		/**
		 * in MHz
		 */
		speed: number;
		times: {
			/**
			 * The number of milliseconds the CPU has spent in user mode.
			 */
			user: number;
			/**
			 * The number of milliseconds the CPU has spent in nice mode.
			 */
			nice: number;
			/**
			 * The number of milliseconds the CPU has spent in sys mode.
			 */
			sys: number;
			/**
			 * The number of milliseconds the CPU has spent in idle mode.
			 */
			idle: number;
			/**
			 * The number of milliseconds the CPU has spent in irq mode.
			 */
			irq: number;
		};
	}

	interface LogInfo {
		/**
		 * the filename of the log
		 */
		name?: string;
		/**
		 * the size of the log in bytes
		 */
		size?: number;
		/**
		 * the unix time at which the log was created "Thu Jan 08 2015 14:40:30 GMT-0500 (Eastern Standard Time)"
		 */
		date?: string;
	}

	interface ProcessInfo {
		/**
		 * the percentage of total CPU usage
		 */
		cpuUsage?: number;
		/**
		 * the application name
		 */
		name?: string;
		/**
		 * the current nonpaged pool usage in bytes
		 */
		nonPagedPoolUsage?: number;
		/**
		 * the number of page faults
		 */
		pageFaultCount?: number;
		/**
		 * the current paged pool usage in bytes
		 */
		pagedPoolUsage?: number;
		/**
		 * the total amount of memory in bytes that the memory manager has committed
		 */
		pagefileUsage?: number;
		/**
		 * the peak nonpaged pool usage in bytes
		 */
		peakNonPagedPoolUsage?: number;
		/**
		 * the peak paged pool usage in bytes
		 */
		peakPagedPoolUsage?: number;
		/**
		 * the peak value in bytes of pagefileUsage during the lifetime of this process
		 */
		peakPagefileUsage?: number;
		/**
		 * the peak working set size in bytes
		 */
		peakWorkingSetSize?: number;
		/**
		 * the native process identifier
		 */
		processId?: number;
		/**
		 * the application UUID
		 */
		uuid?: string;
		/**
		 * the current working set size (both shared and private data) in bytes
		 */
		workingSetSize?: number;
	}

	interface ProxyInfo {
		/**
		 * the configured Proxy Address
		 */
		proxyAddress?: string;
		/**
		 * the configured Proxy port
		 */
		proxyPort?: number;
		/**
		 * Proxy Type
		 */
		type?: string;
	}

	interface RvmInfo {
		version?: string;
		"start-time"?: string;
	}

	interface ExternalProcessLaunchInfo {
		path?: string;
		/**
		 * Additionally note that the executable found in the zip file specified in appAssets
		 * will default to the one mentioned by appAssets.target
		 * If the the path below refers to a specific path it will override this default
		 */
		alias?: string;
		/**
		 * When using alias; if no arguments are passed then the arguments (if any)
		 * are taken from the 'app.json' file, from the  'args' parameter
		 * of the 'appAssets' Object with the relevant 'alias'.
		 * If 'arguments' is passed as a parameter it takes precedence
		 * over any 'args' set in the 'app.json'.
		 */
		arguments?: string;
		listener?(result: {
			/**
			 * "Exited" Or "released" on a call to releaseExternalProcess
			 */
			topic?: string;
			/**
			 * The mapped UUID which identifies the launched process
			 */
			uuid?: string;
			/*
			 * Process exit code
			 */
			exitCode?: number;
		}): void;
		certificate?: CertificationInfo;
	}

	interface CertificationInfo {
		/**
		 * A hex string with or without spaces
		 */
		serial?: string;
		/**
		 * An internally tokenized and comma delimited string allowing partial or full checks of the subject fields
		 */
		subject?: string;
		/**
		 * A hex string with or without spaces
		 */
		publickey?: string;
		/**
		 * A hex string with or without spaces
		 */
		thumbprint?: string;
		/**
		 * A boolean indicating that the certificate is trusted and not revoked
		 */
		trusted?: boolean;
	}

	interface ExternalProcessInfo {
		pid?: number;
		listener?(result: {
			/**
			 * "Exited" Or "released" on a call to releaseExternalProcess
			 */
			topic?: string;
			/**
			 * The mapped UUID which identifies the launched process
			 */
			uuid?: string;
			/*
				* Process exit code
				*/
			exitCode?: number;
		}): void;
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
			options: WindowOptions,
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
		animate(transitions: AnimationTransition, options: AnimationOptions, callback?: (event: any) => void, errorCallback?: (reason: string) => void): void;
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
		 * Gets the current bounds (top, left, width, height) of the window.
		 */
		getBounds(callback?: (bounds: WindowBounds) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Retrieves an array containing wrapped fin.desktop.Windows that are grouped with this window. If a window is not in a group an empty array is returned.
		 * Please note that calling window is included in the result array.
		 */
		getGroup(callback?: (group: OpenFinWindow[]) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Gets the current settings of the window.
		 */
		getOptions(callback?: (options: WindowOptions) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Gets a base64 encoded PNG snapshot of the window.
		 */
		getSnapshot(callback?: (base64Snapshot: string) => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Gets the current state ("minimized", "maximized", or "restored") of the window.
		 */
		getState(callback?: (state: "minimized" | "maximized" | "restored") => void, errorCallback?: (reason: string) => void): void;
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
		resizeBy(deltaWidth: number, deltaHeight: number, anchor: OpenFinAnchor, callback?: () => void, errorCallback?: (reason: string) => void): void;
		/**
		 * Resizes the window by a specified amount.
		 */
		resizeTo(width: number, height: number, anchor: OpenFinAnchor, callback?: () => void, errorCallback?: (reason: string) => void): void;
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
		 * Updates the window using the passed options
		 */
		updateOptions(options: WindowOptions, callback?: () => void, errorCallback?: (reason: string) => void): void;
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

	interface MonitorInfo {
		nonPrimaryMonitors: MonitorInfoDetail[];
		primaryMonitor: MonitorInfoDetail;
		reason: string;
		taskbar: {
			edge: "left" | "right" | "top" | "bottom",
			rect: MontiorCoordinates
		};
		topic: "system";
		type: "monitor-info-changed";
		virtualScreen: MontiorCoordinates;
	}

	interface MonitorInfoDetail {
		availableRect: MontiorCoordinates;
		deviceId: string;
		displayDeviceActive: boolean;
		monitorRect: MontiorCoordinates;
		name: string;
	}

	interface MontiorCoordinates {
		bottom: number;
		left: number;
		right: number;
		top: number;
	}

	interface VirtualScreenCoordinates {
		left: number;
		top: number;
	}

	interface SystemBaseEvent {
		topic: string;
		type: OpenFinSystemEventType;
		uuid: string;
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

	interface AnimationTransition {
		opacity?: {
			/**
			 * This value is clamped from 0.0 to 1.0
			 */
			opacity?: number;
			/**
			 * The total time in milliseconds this transition should take.
			 */
			duration?: number;
			/**
			 * Treat 'opacity' as absolute or as a delta. Defaults to false.
			 */
			relative?: boolean;
		};
		position?: {
			/**
			 * Defaults to the window's current left position in virtual screen coordinates.
			 */
			left?: number;
			/**
			 * Defaults to the window's current top position in virtual screen coordinates.
			 */
			top?: number;
			/**
			 * The total time in milliseconds this transition should take.
			 */
			duration?: number;
			/**
			 * Treat 'left' and 'top' as absolute or as deltas. Defaults to false.
			 */
			relative?: boolean;
		};
		size?: {
			/**
			 * Optional if height is present. Defaults to the window's current width.
			 */
			width?: number;
			/**
			 * Optional if width is present. Defaults to the window's current height.
			 */
			height?: number;
			/**
			 * The total time in milliseconds this transition should take.
			 */
			duration?: number;
			/**
			 * Treat 'width' and 'height' as absolute or as deltas. Defaults to false.
			 */
			relative?: boolean;
		};
	}

	interface AnimationOptions {
		/**
		 * This option interrupts the current animation. When false it pushes this animation onto the end of the animation queue.
		 */
		interrupt?: boolean;
		/**
		 * Transition effect. Defaults to 'ease-in-out'.
		 */
		tween?: OpenFinTweenType;
	}

	interface WindowBounds {
		/**
		 * the height of the window.
		 */
		height?: number;
		/**
		 * left-most coordinate of the window.
		 */
		left?: number;
		/**
		 * top-most coordinate of the window.
		 */
		top?: number;
		/**
		 * the width of the window.
		 */
		width?: number;
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

	interface LaunchInfo {
		launchMode: "fin-protocol"
		| "fins-protocol"
		| "shortcut"
		| "command-line"
		| "adapter"
		| "other"
		| string;
	}

	type OpenFinTweenType = "linear"
		| "ease-in"
		| "ease-out"
		| "ease-in-out"
		| "ease-in-quad"
		| "ease-out-quad"
		| "ease-in-out-quad"
		| "ease-in-cubic"
		| "ease-out-cubic"
		| "ease-in-out-cubic"
		| "ease-out-bounce"
		| "ease-in-back"
		| "ease-out-back"
		| "ease-in-out-back"
		| "ease-in-elastic"
		| "ease-out-elastic"
		| "ease-in-out-elastic";

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

	type OpenFinAnchor = "top-left"
		| "top-right"
		| "bottom-left"
		| "bottom-right";
}
