// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="github-electron.event-emitter.d.ts" />
/// <reference path="github-electron.native-image.d.ts" />

declare namespace Electron {
	/**
	 * A WebContents is responsible for rendering and controlling a web page.
	 */
	class WebContents extends EventEmitter {
		/**
		 * Loads the url in the window.
		 * @param url Must contain the protocol prefix (e.g., the http:// or file://).
		 */
		loadURL(url: string, options?: {
			httpReferrer?: string;
			userAgent?: string;
			extraHeaders?: string;
		}): void;
		/**
		 * @returns The URL of current web page.
		 */
		getURL(): string;
		/**
		 * @returns The title of web page.
		 */
		getTitle(): string;
		/**
		 * @returns The favicon of the web page.
		 */
		getFavicon(): NativeImage;
		/**
		 * @returns Whether web page is still loading resources.
		 */
		isLoading(): boolean;
		/**
		 * @returns Whether web page is waiting for a first-response for the main
		 * resource of the page.
		 */
		isWaitingForResponse(): boolean;
		/**
		 * Stops any pending navigation.
		 */
		stop(): void;
		/**
		 * Reloads current page.
		 */
		reload(): void;
		/**
		 * Reloads current page and ignores cache.
		 */
		reloadIgnoringCache(): void;
		/**
		 * @returns Whether the web page can go back.
		 */
		canGoBack(): boolean;
		/**
		 * @returns Whether the web page can go forward.
		 */
		canGoForward(): boolean;
		/**
		 * @returns Whether the web page can go to offset.
		 */
		canGoToOffset(offset: number): boolean;
		/**
		 * Makes the web page go back.
		 */
		goBack(): void;
		/**
		 * Makes the web page go forward.
		 */
		goForward(): void;
		/**
		 * Navigates to the specified absolute index.
		 */
		goToIndex(index: number): void;
		/**
		 * Navigates to the specified offset from the "current entry".
		 */
		goToOffset(offset: number): void;
		/**
		 * @returns Whether the renderer process has crashed.
		 */
		isCrashed(): boolean;
		/**
		 * Overrides the user agent for this page.
		 */
		setUserAgent(userAgent: string): void;
		/**
		 * Injects CSS into this page.
		 */
		insertCSS(css: string): void;
		/**
		 * Evaluates code in page.
		 * @param code Code to evaluate.
		 */
		executeJavaScript(code: string, userGesture?: boolean, callback?: (result: any) => void): void;
		/**
		 * Executes Edit -> Undo command in page.
		 */
		undo(): void;
		/**
		 * Executes Edit -> Redo command in page.
		 */
		redo(): void;
		/**
		 * Executes Edit -> Cut command in page.
		 */
		cut(): void;
		/**
		 * Executes Edit -> Copy command in page.
		 */
		copy(): void;
		/**
		 * Executes Edit -> Paste command in page.
		 */
		paste(): void;
		/**
		 * Executes Edit -> Delete command in page.
		 */
		delete(): void;
		/**
		 * Executes Edit -> Select All command in page.
		 */
		selectAll(): void;
		/**
		 * Executes Edit -> Unselect command in page.
		 */
		unselect(): void;
		/**
		 * Executes Edit -> Replace command in page.
		 */
		replace(text: string): void;
		/**
		 * Executes Edit -> Replace Misspelling command in page.
		 */
		replaceMisspelling(text: string): void;
		/**
		 * Inserts text to the focused element.
		 */
		insertText(text: string): void;
		/**
		 * Starts a request to find all matches for the text in the web page and
		 * returns an Integer representing the request id used for the request.
		 * The result of the request can be obtained by subscribing to
		 * found-in-page event.
		 */
		findInPage(text: string, options?: FindInPageOptions): void;
		/**
		 * Stops any findInPage request for the webContents with the provided
		 * action.
		 * @param action Specifies the action to take place when ending webContents.findInPage request.
		 *   'clearSelection' - Translate the selection into a normal selection.
		 *   'keepSelection' - Clear the selection.
		 *   'activateSelection' - Focus and click the selection node.
		 */
		stopFindInPage(action: 'clearSelection' | 'keepSelection' | 'activateSelection'): void;
		/**
		 * Checks if any serviceworker is registered.
		 */
		hasServiceWorker(callback: (hasServiceWorker: boolean) => void): void;
		/**
		 * Unregisters any serviceworker if present.
		 */
		unregisterServiceWorker(callback:
			/**
			 * @param isFulfilled Whether the JS promise is fulfilled.
			 */
			(isFulfilled: boolean) => void): void;
		/**
		 *
		 * Prints window's web page. When silent is set to false, Electron will pick up system's default printer and default settings for printing.
		 * Calling window.print() in web page is equivalent to call WebContents.print({silent: false, printBackground: false}).
		 * Note:
		 *   On Windows, the print API relies on pdf.dll. If your application doesn't need print feature, you can safely remove pdf.dll in saving binary size.
		 */
		print(options?: {
			/**
			 *  Don't ask user for print settings, defaults to false
			 */
			silent?: boolean;
			/**
			 * Also prints the background color and image of the web page, defaults to false.
			 */
			printBackground: boolean;
		}): void;
		/**
		 * Prints windows' web page as PDF with Chromium's preview printing custom settings.
		 */
		printToPDF(options: {
			/**
			 * Specify the type of margins to use. Default is 0.
			 *   0 - default
			 *   1 - none
			 *   2 - minimum
			 */
			marginsType?: number;
			/**
			 * String - Specify page size of the generated PDF. Default is A4.
			 *   A4
			 *   A3
			 *   Legal
			 *   Letter
			 *   Tabloid
			 */
			pageSize?: string;
			/**
			 * Whether to print CSS backgrounds. Default is false.
			 */
			printBackground?: boolean;
			/**
			 * Whether to print selection only. Default is false.
			 */
			printSelectionOnly?: boolean;
			/**
			 * true for landscape, false for portrait.  Default is false.
			 */
			landscape?: boolean;
		},
		/**
		 * Callback function on completed converting to PDF.
		 *   error Error
		 *   data Buffer - PDF file content
		 */
		callback: (error: Error, data: Buffer) => void): void;
		/**
		 * Adds the specified path to DevTools workspace.
		 */
		addWorkSpace(path: string): void;
		/**
		 * Removes the specified path from DevTools workspace.
		 */
		removeWorkSpace(path: string): void;
		/**
		 * Opens the developer tools.
		 */
		openDevTools(options?: {
			/**
			 * Opens devtools in a new window.
			 */
			detach?: boolean;
		}): void;
		/**
		 * Closes the developer tools.
		 */
		closeDevTools(): void;
		/**
		 * Returns whether the developer tools are opened.
		 */
		isDevToolsOpened(): boolean;
		/**
		 * Returns whether the developer tools are focussed.
		 */
		isDevToolsFocused(): boolean;
		/**
		 * Toggle the developer tools.
		 */
		toggleDevTools(): void;
		/**
		 * Starts inspecting element at position (x, y).
		 */
		inspectElement(x: number, y: number): void;
		/**
		 * Send args.. to the web page via channel in asynchronous message, the web page
		 * can handle it by listening to the channel event of ipc module.
		 * Note:
		 *   1. The IPC message handler in web pages do not have a event parameter,
		 *      which is different from the handlers on the main process.
		 *   2. There is no way to send synchronous messages from the main process
		 *      to a renderer process, because it would be very easy to cause dead locks.
		 */
		send(channel: string, ...args: any[]): void;
	}

	interface FindInPageOptions {
		forward?: boolean;
		findNext?: boolean;
		matchCase?: boolean;
		wordStart?: boolean;
		medialCapitalAsWordStart?: boolean;
	}
}
