// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.browser-window.d.ts" />
/// <reference path="github-electron.event-emitter.d.ts" />
/// <reference path="github-electron.menu.d.ts" />
/// <reference path="github-electron.native-image.d.ts" />
/// <reference path="github-electron.web-contents.d.ts" />

declare namespace Electron {
	/**
	 * The app module is responsible for controlling the application's lifecycle.
	 */
	class App extends EventEmitter {
		/**
		 * Emitted when the application has finished basic startup.
		 * On Windows and Linux, the will-finish-launching event
		 * is the same as the ready event; on OS X, this event represents
		 * the applicationWillFinishLaunching notification of NSApplication.
		 * You would usually set up listeners for the open-file and open-url events here,
		 * and start the crash reporter and auto updater.
		 *
		 * In most cases, you should just do everything in the ready event handler.
		 */
		on(event: 'will-finish-launching', listener: Function): this;
		/**
		 * Emitted when Electron has finished initialization.
		 */
		on(event: 'ready', listener: Function): this;
		/**
		 * Emitted when all windows have been closed.
		 *
		 * This event is only emitted when the application is not going to quit.
		 * If the user pressed Cmd + Q, or the developer called app.quit(),
		 * Electron will first try to close all the windows and then emit the will-quit event,
		 * and in this case the window-all-closed event would not be emitted.
		 */
		on(event: 'window-all-closed', listener: Function): this;
		/**
		 * Emitted before the application starts closing its windows.
		 * Calling event.preventDefault() will prevent the default behaviour, which is terminating the application.
		 */
		on(event: 'before-quit', listener: (event: Event) => void): this;
		/**
		 * Emitted when all windows have been closed and the application will quit.
		 * Calling event.preventDefault() will prevent the default behaviour, which is terminating the application.
		 */
		on(event: 'will-quit', listener: (event: Event) => void): this;
		/**
		 * Emitted when the application is quitting.
		 */
		on(event: 'quit', listener: (event: Event, exitCode: number) => void): this;
		/**
		 * Emitted when the user wants to open a file with the application.
		 * The open-file event is usually emitted when the application is already open
		 * and the OS wants to reuse the application to open the file.
		 * open-file is also emitted when a file is dropped onto the dock and the application
		 * is not yet running. Make sure to listen for the open-file event very early
		 * in your application startup to handle this case (even before the ready event is emitted).
		 *
		 * You should call event.preventDefault() if you want to handle this event.
		 *
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'open-file', listener: (event: Event, url: string) => void): this;
		/**
		 * Emitted when the user wants to open a URL with the application.
		 * The URL scheme must be registered to be opened by your application.
		 *
		 * You should call event.preventDefault() if you want to handle this event.
		 *
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'open-url', listener: (event: Event, url: string) => void): this;
		/**
		 * Emitted when the application is activated, which usually happens when clicks on the applications’s dock icon.
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'activate', listener: Function): this;
		/**
		 * Emitted when a browserWindow gets blurred.
		 */
		on(event: 'browser-window-blur', listener: (event: Event, browserWindow: BrowserWindow) => void): this;
		/**
		 * Emitted when a browserWindow gets focused.
		 */
		on(event: 'browser-window-focus', listener: (event: Event, browserWindow: BrowserWindow) => void): this;
		/**
		 * Emitted when a new browserWindow is created.
		 */
		on(event: 'browser-window-created', listener: (event: Event, browserWindow: BrowserWindow) => void): this;
		/**
		 * Emitted when failed to verify the certificate for url, to trust the certificate
		 * you should prevent the default behavior with event.preventDefault() and call callback(true).
		 */
		on(event: 'certificate-error', listener: (event: Event,
			webContents: WebContents,
			url: string,
			error: string,
			certificate: Certificate,
			callback: (trust: boolean) => void
		) => void): this;
		/**
		 * Emitted when a client certificate is requested.
		 *
		 * The url corresponds to the navigation entry requesting the client certificate
		 * and callback needs to be called with an entry filtered from the list.
		 * Using event.preventDefault() prevents the application from using the first certificate from the store.
		 */
		on(event: 'select-client-certificate', listener: (event: Event,
			webContents: WebContents,
			url: string,
			certificateList: Certificate[],
			callback: (certificate: Certificate) => void
		) => void): this;
		/**
		 * Emitted when webContents wants to do basic auth.
		 *
		 * The default behavior is to cancel all authentications, to override this
		 * you should prevent the default behavior with event.preventDefault()
		 * and call callback(username, password) with the credentials.
		 */
		on(event: 'login', listener: (event: Event,
			webContents: WebContents,
			request: LoginRequest,
			authInfo: LoginAuthInfo,
			callback: (username: string, password: string) => void
		) => void): this;
		/**
		 * Emitted when the gpu process crashes.
		 */
		on(event: 'gpu-process-crashed', listener: Function): this;
		/**
		 * Emitted when the system’s Dark Mode theme is toggled.
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'platform-theme-changed', listener: Function): this;
		on(event: string, listener: Function): this;
		/**
		 * Try to close all windows. The before-quit event will first be emitted.
		 * If all windows are successfully closed, the will-quit event will be emitted
		 * and by default the application would be terminated.
		 *
		 * This method guarantees all beforeunload and unload handlers are correctly
		 * executed. It is possible that a window cancels the quitting by returning
		 * false in beforeunload handler.
		 */
		quit(): void;
		/**
		 * Exits immediately with exitCode.
		 * All windows will be closed immediately without asking user
		 * and the before-quit and will-quit events will not be emitted.
		 */
		exit(exitCode: number): void;
		/**
		 * On Linux, focuses on the first visible window.
		 * On OS X, makes the application the active app.
		 * On Windows, focuses on the application’s first window.
		 */
		focus(): void;
		/**
		 * Hides all application windows without minimizing them.
		 * Note: This is only implemented on OS X.
		 */
		hide(): void;
		/**
		 * Shows application windows after they were hidden. Does not automatically focus them.
		 * Note: This is only implemented on OS X.
		 */
		show(): void;
		/**
		 * Returns the current application directory.
		 */
		getAppPath(): string;
		/**
		 * @returns The path to a special directory or file associated with name.
		 * On failure an Error would throw.
		 */
		getPath(name: AppPathName): string;
		/**
		 * Overrides the path to a special directory or file associated with name.
		 * If the path specifies a directory that does not exist, the directory will
		 * be created by this method. On failure an Error would throw.
		 *
		 * You can only override paths of names defined in app.getPath.
		 *
		 * By default web pages' cookies and caches will be stored under userData
		 * directory, if you want to change this location, you have to override the
		 * userData path before the ready event of app module gets emitted.
		 */
		setPath(name: AppPathName, path: string): void;
		/**
		 * @returns The version of loaded application, if no version is found in
		 * application's package.json, the version of current bundle or executable.
		 */
		getVersion(): string;
		/**
		 *
		 * @returns The current application's name, the name in package.json would be used.
		 * Usually the name field of package.json is a short lowercased name, according to
		 * the spec of npm modules. So usually you should also specify a productName field,
		 * which is your application's full capitalized name, and it will be preferred over
		 * name by Electron.
		 */
		getName(): string;
		/**
		  * @returns The current application locale.
		  **/
		getLocale(): string;
		/**
		 * Adds path to recent documents list.
		 *
		 * This list is managed by the system, on Windows you can visit the list from
		 * task bar, and on Mac you can visit it from dock menu.
		 *
		 * Note: This is only implemented on OS X and Windows.
		 */
		addRecentDocument(path: string): void;
		/**
		 * Clears the recent documents list.
		 *
		 * Note: This is only implemented on OS X and Windows.
		 */
		clearRecentDocuments(): void;
		/**
		 * Adds tasks to the Tasks category of JumpList on Windows.
		 *
		 * Note: This API is only available on Windows.
		 */
		setUserTasks(tasks: Task[]): void;
		/**
		 * Dynamically sets whether to always send credentials for HTTP NTLM or Negotiate authentication.
		 * Normally, Electron will only send NTLM/Kerberos credentials for URLs that fall under
		 * "Local Intranet" sites (i.e. are in the same domain as you).
		 * However, this detection often fails when corporate networks are badly configured,
		 * so this lets you co-opt this behavior and enable it for all URLs.
		 */
		allowNTLMCredentialsForAllDomains(allow: boolean): void;
		/**
		 * This method makes your application a Single Instance Application instead of allowing
		 * multiple instances of your app to run, this will ensure that only a single instance
		 * of your app is running, and other instances signal this instance and exit.
		 */
		makeSingleInstance(callback: (args: string[], workingDirectory: string) => boolean): boolean;
		/**
		 * Changes the Application User Model ID to id.
		 */
		setAppUserModelId(id: string): void;
		/**
		 * This method returns true if DWM composition (Aero Glass) is enabled,
		 * and false otherwise. You can use it to determine if you should create
		 * a transparent window or not (transparent windows won’t work correctly when DWM composition is disabled).
		 *
		 * Note: This is only implemented on Windows.
		 */
		isAeroGlassEnabled(): boolean;
		/**
		 * @returns If the system is in Dark Mode.
		 * Note: This is only implemented on OS X.
		 */
		isDarkMode(): boolean;
		commandLine: CommandLine;
		/**
		 * Note: This API is only available on Mac.
		 */
		dock: Dock;
	}

	type AppPathName = 'home'|'appData'|'userData'|'temp'|'exe'|'module'|'desktop'|'documents'|'downloads'|'music'|'pictures'|'videos';

	interface CommandLine {
		/**
		 * Append a switch [with optional value] to Chromium's command line.
		 *
		 * Note: This will not affect process.argv, and is mainly used by developers
		 * to control some low-level Chromium behaviors.
		 */
		appendSwitch(_switch: string, value?: string|number): void;
		/**
		 * Append an argument to Chromium's command line. The argument will quoted properly.
		 *
		 * Note: This will not affect process.argv.
		 */
		appendArgument(value: any): void;
	}

	interface Dock {
		/**
		 * When critical is passed, the dock icon will bounce until either the
		 * application becomes active or the request is canceled.
		 *
		 * When informational is passed, the dock icon will bounce for one second.
		 * However, the request remains active until either the application becomes
		 * active or the request is canceled.
		 *
		 * @param type The default is informational.
		 * @returns An ID representing the request.
		 */
		bounce(type?: 'critical' | 'informational'): number;
		/**
		 * Cancel the bounce of id.
		 *
		 * Note: This API is only available on Mac.
		 */
		cancelBounce(id: number): void;
		/**
		 * Sets the string to be displayed in the dock’s badging area.
		 *
		 * Note: This API is only available on Mac.
		 */
		setBadge(text: string): void;
		/**
		 * Returns the badge string of the dock.
		 *
		 * Note: This API is only available on Mac.
		 */
		getBadge(): string;
		/**
		 * Hides the dock icon.
		 *
		 * Note: This API is only available on Mac.
		 */
		hide(): void;
		/**
		 * Shows the dock icon.
		 *
		 * Note: This API is only available on Mac.
		 */
		show(): void;
		/**
		 * Sets the application dock menu.
		 *
		 * Note: This API is only available on Mac.
		 */
		setMenu(menu: Menu): void;
		/**
		 * Sets the image associated with this dock icon.
		 *
		 * Note: This API is only available on Mac.
		 */
		setIcon(icon: NativeImage | string): void;
	}

	interface Task {
		/**
		 * Path of the program to execute, usually you should specify process.execPath
		 * which opens current program.
		 */
		program: string;
		/**
		 * The arguments of command line when program is executed.
		 */
		arguments: string;
		/**
		 * The string to be displayed in a JumpList.
		 */
		title: string;
		/**
		 * Description of this task.
		 */
		description?: string;
		/**
		 * The absolute path to an icon to be displayed in a JumpList, it can be
		 * arbitrary resource file that contains an icon, usually you can specify
		 * process.execPath to show the icon of the program.
		 */
		iconPath: string;
		/**
		 * The icon index in the icon file. If an icon file consists of two or more
		 * icons, set this value to identify the icon. If an icon file consists of
		 * one icon, this value is 0.
		 */
		iconIndex?: number;
	}
}
