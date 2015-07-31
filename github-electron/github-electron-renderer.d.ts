// Type definitions for the Electron 0.25.2 renderer process (web page)
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./github-electron.d.ts" />

declare module GitHubElectron {

	class InProcess implements NodeJS.EventEmitter {
		addListener(event: string, listener: Function): InProcess;
		on(event: string, listener: Function): InProcess;
		once(event: string, listener: Function): InProcess;
		removeListener(event: string, listener: Function): InProcess;
		removeAllListeners(event?: string): InProcess;
		setMaxListeners(n: number): void;
		listeners(event: string): Function[];
		emit(event: string, ...args: any[]): boolean;
		/**
		 * Send ...args to the renderer via channel in asynchronous message, the main
		 * process can handle it by listening to the channel event of ipc module.
		 */
		send(channel: string, ...args: any[]): void;
		/**
		 * Send ...args to the renderer via channel in synchronous message, and returns
		 * the result sent from main process. The main process can handle it by listening
		 * to the channel event of ipc module, and returns by setting event.returnValue.
		 * Note: Usually developers should never use this API, since sending synchronous
		 * message would block the whole renderer process.
		 * @returns The result sent from the main process.
		 */
		sendSync(channel: string, ...args: any[]): string;
		/**
		 * Like ipc.send but the message will be sent to the host page instead of the main process.
		 * This is mainly used by the page in <webview> to communicate with host page.
		 */
		sendToHost(channel: string, ...args: any[]): void;
	}

	module Remote {
		export function getCurrentWindow(): BrowserWindow;
	}
}

declare module 'ipc' {
	var InProcess: GitHubElectron.InProcess;
	export = InProcess;
}

declare module 'remote' {
	/**
	 * @returns The object returned by require(module) in the main process.
	 */
	export function require(module: string): any;
	/**
	 * @returns The BrowserWindow object which this web page belongs to.
	 */
	export var getCurrentWindow: typeof GitHubElectron.Remote.getCurrentWindow;
	/**
	 * @returns The global variable of name (e.g. global[name]) in the main process.
	 */
	export function getGlobal(name: string): any;
	/**
	 * Returns the process object in the main process. This is the same as
	 * remote.getGlobal('process'), but gets cached.
	 */
	export var process: any;
}

declare module 'web-frame' {
	/**
	 * Changes the zoom factor to the specified factor, zoom factor is
	 * zoom percent / 100, so 300% = 3.0.
	 */
	export function setZoomFactor(factor: number): void;
	/**
	 * @returns The current zoom factor.
	 */
	export function getZoomFactor(): number;
	/**
	 * Changes the zoom level to the specified level, 0 is "original size", and each
	 * increment above or below represents zooming 20% larger or smaller to default
	 * limits of 300% and 50% of original size, respectively.
	 */
	export function setZoomLevel(level: number): void;
	/**
	 * @returns The current zoom level.
	 */
	export function getZoomLevel(): number;
	/**
	 * Sets a provider for spell checking in input fields and text areas.
	 */
	export function setSpellCheckProvider(language: string, autoCorrectWord: boolean, provider: {
		/**
		 * @returns Whether the word passed is correctly spelled.
		 */
		spellCheck: (text: string) => boolean;
	}): void;
	/**
	 * Sets the scheme as secure scheme. Secure schemes do not trigger mixed content
	 * warnings. For example, https and data are secure schemes because they cannot be
	 * corrupted by active network attackers.
	 */
	export function registerUrlSchemeAsSecure(scheme: string): void;
}
