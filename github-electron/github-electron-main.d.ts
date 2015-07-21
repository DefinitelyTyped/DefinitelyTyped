// Type definitions for the Electron 0.25.2 main process
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./github-electron.d.ts" />

declare module 'app' {
	var _app: GitHubElectron.App;
	export = _app;
}

declare module 'auto-updater' {
	var _autoUpdater: GitHubElectron.AutoUpdater;
	export = _autoUpdater;
}

declare module 'browser-window' {
	var BrowserWindow: typeof GitHubElectron.BrowserWindow;
	export = BrowserWindow;
}

declare module 'content-tracing' {
	/**
	 * Get a set of category groups. The category groups can change as new code paths are reached.
	 * @param callback Called once all child processes have acked to the getCategories request.
	 */
	export function getCategories(callback: (categoryGroups: any[]) => void): void;
	/**
	 * Start recording on all processes. Recording begins immediately locally, and asynchronously
	 * on child processes as soon as they receive the EnableRecording request.
	 * @param categoryFilter A filter to control what category groups should be traced.
	 * A filter can have an optional "-" prefix to exclude category groups that contain
	 * a matching category. Having both included and excluded category patterns in the
	 * same list would not be supported.
	 * @param options controls what kind of tracing is enabled, it could be a OR-ed
	 * combination of tracing.DEFAULT_OPTIONS, tracing.ENABLE_SYSTRACE, tracing.ENABLE_SAMPLING
	 * and tracing.RECORD_CONTINUOUSLY.
	 * @param callback Called once all child processes have acked to the startRecording request.
	 */
	export function startRecording(categoryFilter: string, options: number, callback: Function): void;
	/**
	 * Stop recording on all processes. Child processes typically are caching trace data and
	 * only rarely flush and send trace data back to the main process. That is because it may
	 * be an expensive operation to send the trace data over IPC, and we would like to avoid
	 * much runtime overhead of tracing. So, to end tracing, we must asynchronously ask all
	 * child processes to flush any pending trace data.
	 * @param resultFilePath Trace data will be written into this file if it is not empty,
	 * or into a temporary file.
	 * @param callback Called once all child processes have acked to the stopRecording request.
	 */
	export function stopRecording(resultFilePath: string, callback:
		/**
		 * @param filePath A file that contains the traced data.
		 */
		(filePath: string) => void
		): void;
	/**
	 * Start monitoring on all processes. Monitoring begins immediately locally, and asynchronously
	 * on child processes as soon as they receive the startMonitoring request.
	 * @param callback Called once all child processes have acked to the startMonitoring request.
	 */
	export function startMonitoring(categoryFilter: string, options: number, callback: Function): void;
	/**
	 * Stop monitoring on all processes.
	 * @param callback Called once all child processes have acked to the stopMonitoring request.
	 */
	export function stopMonitoring(callback: Function): void;
	/**
	 * Get the current monitoring traced data. Child processes typically are caching trace data
	 * and only rarely flush and send trace data back to the main process. That is because it may
	 * be an expensive operation to send the trace data over IPC, and we would like to avoid much
	 * runtime overhead of tracing. So, to end tracing, we must asynchronously ask all child
	 * processes to flush any pending trace data.
	 * @param callback Called once all child processes have acked to the captureMonitoringSnapshot request.
	 */
	export function captureMonitoringSnapshot(resultFilePath: string, callback:
		/**
		 * @param filePath A file that contains the traced data
		 * @returns {}
		 */
		(filePath: string) => void
		): void;
	/**
	 * Get the maximum across processes of trace buffer percent full state.
	 * @param callback Called when the TraceBufferUsage value is determined.
	 */
	export function getTraceBufferUsage(callback: Function): void;
	/**
	 * @param callback Called every time the given event occurs on any process.
	 */
	export function setWatchEvent(categoryName: string, eventName: string, callback: Function): void;
	/**
	 * Cancel the watch event. If tracing is enabled, this may race with the watch event callback.
	 */
	export function cancelWatchEvent(): void;
	export var DEFAULT_OPTIONS: number;
	export var ENABLE_SYSTRACE: number;
	export var ENABLE_SAMPLING: number;
	export var RECORD_CONTINUOUSLY: number;
}

declare module 'dialog' {
	/**
	 * @param callback If supplied, the API call will be asynchronous.
	 * @returns On success, returns an array of file paths chosen by the user,
	 * otherwise returns undefined.
	 */
	export var showOpenDialog: typeof GitHubElectron.Dialog.showOpenDialog;
	/**
	 * @param callback If supplied, the API call will be asynchronous.
	 * @returns On success, returns the path of file chosen by the user, otherwise
	 * returns undefined.
	 */
	export var showSaveDialog: typeof GitHubElectron.Dialog.showSaveDialog;
	/**
	 * Shows a message box. It will block until the message box is closed. It returns .
	 * @param callback If supplied, the API call will be asynchronous.
	 * @returns The index of the clicked button.
	 */
	export var showMessageBox: typeof GitHubElectron.Dialog.showMessageBox;

	/**
	 * Runs a modal dialog that shows an error message. This API can be called safely
	 * before the ready event of app module emits, it is usually used to report errors
	 * in early stage of startup.
	 */
	export function showErrorBox(title: string, content: string): void;
}

declare module 'global-shortcut' {
	/**
	 * Registers a global shortcut of accelerator.
	 * @param accelerator Represents a keyboard shortcut. It can contain modifiers
	 * and key codes, combined by the "+" character.
	 * @param callback Called when the registered shortcut is pressed by the user.
	 * @returns {}
	 */
	export function register(accelerator: string, callback: Function): void;
	/**
	 * @param accelerator Represents a keyboard shortcut. It can contain modifiers
	 * and key codes, combined by the "+" character.
	 * @returns Whether the accelerator is registered.
	 */
	export function isRegistered(accelerator: string): boolean;
	/**
	 * Unregisters the global shortcut of keycode.
	 * @param accelerator Represents a keyboard shortcut. It can contain modifiers
	 * and key codes, combined by the "+" character.
	 */
	export function unregister(accelerator: string): void;
	/**
	 * Unregisters all the global shortcuts.
	 */
	export function unregisterAll(): void;
}

declare module 'ipc' {
	var ipc: NodeJS.EventEmitter;
	export = ipc;
}

declare module 'menu' {
	var Menu: typeof GitHubElectron.Menu;
	export = Menu;
}

declare module 'menu-item' {
	var MenuItem: typeof GitHubElectron.MenuItem;
	export = MenuItem;
}

declare module 'power-monitor' {
	var powerMonitor: NodeJS.EventEmitter;
	export = powerMonitor;
}

declare module 'protocol' {
	export function registerProtocol(scheme: string, handler: (request: any) => void): void;
	export function unregisterProtocol(scheme: string): void;
	export function isHandledProtocol(scheme: string): boolean;
	export function interceptProtocol(scheme: string, handler: (request: any) => void): void;
	export function uninterceptProtocol(scheme: string): void;
	export class RequestFileJob {
		/**
		 * Create a request job which would query a file of path and set corresponding mime types.
		 */
		constructor(path: string);
	}
	export class RequestStringJob {
		/**
		 * Create a request job which sends a string as response.
		 */
		constructor(options?: {
			/**
			 * Default is "text/plain".
			 */
			mimeType?: string;
			/**
			 * Default is "UTF-8".
			 */
			charset?: string;
			data?: string;
		});
	}
	export class RequestBufferJob {
		/**
		 * Create a request job which accepts a buffer and sends a string as response.
		 */
		constructor(options?: {
			/**
			 * Default is "application/octet-stream".
			 */
			mimeType?: string;
			/**
			 * Default is "UTF-8".
			 */
			encoding?: string;
			data?: Buffer;
		});
	}
}

declare module 'tray' {
	var Tray: typeof GitHubElectron.Tray;
	export = Tray;
}
