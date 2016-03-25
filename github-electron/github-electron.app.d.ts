// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="github-electron.browser-window.d.ts" />
/// <reference path="github-electron.event-emitter.d.ts" />
/// <reference path="github-electron.menu.d.ts" />
/// <reference path="github-electron.native-image.d.ts" />

declare namespace Electron {

	class App extends EventEmitter {
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
		 * Quit the application directly, it will not try to close all windows so
		 * cleanup code will not run.
		 */
		terminate(): void;
		/**
		 * Returns the current application directory.
		 */
		getAppPath(): string;
		/**
		 * @param name One of: home, appData, userData, cache, userCache, temp, userDesktop, exe, module
		 * @returns The path to a special directory or file associated with name.
		 * On failure an Error would throw.
		 */
		getPath(name: string): string;
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
		setPath(name: string, path: string): void;
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
		 * Resolves the proxy information for url, the callback would be called with
		 * callback(proxy) when the request is done.
		 */
		resolveProxy(url: string, callback: Function): void;
		/**
		 * Adds path to recent documents list.
		 *
		 * This list is managed by the system, on Windows you can visit the list from
		 * task bar, and on Mac you can visit it from dock menu.
		 */
		addRecentDocument(path: string): void;
		/**
		 * Clears the recent documents list.
		 */
		clearRecentDocuments(): void;
		/**
		 * Adds tasks to the Tasks category of JumpList on Windows.
		 *
		 * Note: This API is only available on Windows.
		 */
		setUserTasks(tasks: Task[]): void;
		dock: Dock;
		commandLine: CommandLine;
		/**
		 * This method makes your application a Single Instance Application instead of allowing
		 * multiple instances of your app to run, this will ensure that only a single instance
		 * of your app is running, and other instances signal this instance and exit.
		 */
		makeSingleInstance(callback: (args: string[], workingDirectory: string) => boolean): boolean;
		setAppUserModelId(id: string): void;
	}

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
		 * The request, though, remains active until either the application becomes
		 * active or the request is canceled.
		 *
		 * Note: This API is only available on Mac.
		 * @param type Can be critical or informational, the default is informational.
		 * @returns An ID representing the request
		 */
		bounce(type?: string): number;
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
		commandLine?: CommandLine;
		dock?: Dock;
	}
}
