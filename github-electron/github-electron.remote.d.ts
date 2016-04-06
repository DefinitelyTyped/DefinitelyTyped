// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="github-electron.d.ts" />
/// <reference path="github-electron.browser-window.d.ts" />
/// <reference path="github-electron.web-contents.d.ts" />

declare namespace Electron {
	/**
	 * The remote module provides a simple way to do inter-process communication (IPC)
	 * between the renderer process (web page) and the main process.
	 */
	interface Remote extends CommonElectron {
		/**
		 * @returns The object returned by require(module) in the main process.
		 */
		require(module: string): any;
		/**
		 * @returns The BrowserWindow object which this web page belongs to.
		 */
		getCurrentWindow(): BrowserWindow;
		/**
		 * @returns The WebContents object of this web page.
		 */
		getCurrentWebContents(): WebContents;
		/**
		 * @returns The global variable of name (e.g. global[name]) in the main process.
		 */
		getGlobal(name: string): any;
		/**
		 * Returns the process object in the main process. This is the same as
		 * remote.getGlobal('process'), but gets cached.
		 */
		process: NodeJS.Process;
	}
}
