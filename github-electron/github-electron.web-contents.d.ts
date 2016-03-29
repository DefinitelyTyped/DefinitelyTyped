// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="github-electron.event-emitter.d.ts" />
/// <reference path="github-electron.native-image.d.ts" />
/// <reference path="github-electron.session.d.ts" />

declare namespace Electron {
	/**
	 * A WebContents is responsible for rendering and controlling a web page.
	 */
	class WebContents extends EventEmitter {
		/**
		 * Emitted when the navigation is done, i.e. the spinner of the tab has stopped spinning,
		 * and the onload event was dispatched.
		 */
		on(event: 'did-finish-load', listener: Function): this;
		/**
		 * This event is like did-finish-load but emitted when the load failed or was cancelled,
		 * e.g. window.stop() is invoked.
		 */
		on(event: 'did-fail-load', listener: (event: Event, errorCode: number, errorDescription: string, validatedURL: string) => void): this;
		/**
		 * Emitted when a frame has done navigation.
		 */
		on(event: 'did-frame-finish-load', listener: (event: Event, isMainFrame: boolean) => void): this;
		/**
		 * Corresponds to the points in time when the spinner of the tab started spinning.
		 */
		on(event: 'did-start-loading', listener: Function): this;
		/**
		 * Corresponds to the points in time when the spinner of the tab stopped spinning.
		 */
		on(event: 'did-stop-loading', listener: Function): this;
		/**
		 * Emitted when details regarding a requested resource are available.
		 * status indicates the socket connection to download the resource.
		 */
		on(event: 'did-get-response-details', listener: (event: Event,
			status: boolean,
			newURL: string,
			originalURL: string,
			httpResponseCode: number,
			requestMethod: string,
			referrer: string,
			headers: any
		) => void): this;
		/**
		 *
		 */
		on(event: 'did-get-redirect-request', listener: (event: Event,
			oldURL: string,
			newURL: string,
			isMainFrame: boolean,
			httpResponseCode: number,
			requestMethod: string,
			referrer: string,
			headers: any
		) => void): this;
		/**
		 * Emitted when the document in the given frame is loaded.
		 */
		on(event: 'dom-ready', listener: (event: Event) => void): this;
		/**
		 * Emitted when page receives favicon URLs.
		 */
		on(event: 'page-favicon-updated', listener: (event: Event, favicons: string[]) => void): this;
		/**
		 * Emitted when the page requests to open a new window for a url.
		 * It could be requested by window.open or an external link like <a target='_blank'>.
		 *
		 * By default a new BrowserWindow will be created for the url.
		 *
		 * Calling event.preventDefault() will prevent creating new windows.
		 */
		on(event: 'new-window', listener: (event: Event,
			url: string,
			frameName: string,
			disposition: 'default' | 'foreground-tab' | 'background-tab' | 'new-window' | 'other',
			/**
			 * The options which will be used for creating the new BrowserWindow.
			 */
			options: any
		) => void): this;
		/**
		 * Emitted when a user or the page wants to start navigation.
		 * It can happen when the window.location object is changed or a user clicks a link in the page.
		 *
		 * This event will not emit when the navigation is started programmatically with APIs like
		 * webContents.loadURL and webContents.back.
		 *
		 * It is also not emitted for in-page navigations, such as clicking anchor links
		 * or updating the window.location.hash. Use did-navigate-in-page event for this purpose.
		 *
		 * Calling event.preventDefault() will prevent the navigation.
		 */
		on(event: 'will-navigate', listener: (event: Event, url: string) => void): this;
		/**
		 * Emitted when a navigation is done.
		 *
		 * This event is not emitted for in-page navigations, such as clicking anchor links
		 * or updating the window.location.hash. Use did-navigate-in-page event for this purpose.
		 */
		on(event: 'did-navigate', listener: (event: Event, url: string) => void): this;
		/**
		 * Emitted when an in-page navigation happened.
		 *
		 * When in-page navigation happens, the page URL changes but does not cause
		 * navigation outside of the page. Examples of this occurring are when anchor links
		 * are clicked or when the DOM hashchange event is triggered.
		 */
		on(event: 'did-navigate-in-page', listener: (event: Event, url: string) => void): this;
		/**
		 * Emitted when the renderer process has crashed.
		 */
		on(event: 'crashed', listener: Function): this;
		/**
		 * Emitted when a plugin process has crashed.
		 */
		on(event: 'plugin-crashed', listener: (event: Event, name: string, version: string) => void): this;
		/**
		 * Emitted when webContents is destroyed.
		 */
		on(event: 'destroyed', listener: Function): this;
		/**
		 * Emitted when DevTools is opened.
		 */
		on(event: 'devtools-opened', listener: Function): this;
		/**
		 * Emitted when DevTools is closed.
		 */
		on(event: 'devtools-closed', listener: Function): this;
		/**
		 * Emitted when DevTools is focused / opened.
		 */
		on(event: 'devtools-focused', listener: Function): this;
		/**
		 * Emitted when failed to verify the certificate for url.
		 * The usage is the same with the "certificate-error" event of app.
		 */
		on(event: 'certificate-error', listener: (event: Event,
			url: string,
			error: string,
			certificate: Certificate,
			callback: (trust: boolean) => void
		) => void): this;
		/**
		 * Emitted when a client certificate is requested.
		 * The usage is the same with the "select-client-certificate" event of app.
		 */
		on(event: 'select-client-certificate', listener: (event: Event,
			url: string,
			certificateList: Certificate[],
			callback: (certificate: Certificate) => void
		) => void): this;
		/**
		 * Emitted when webContents wants to do basic auth.
		 * The usage is the same with the "login" event of app.
		 */
		on(event: 'login', listener: (event: Event,
			request: LoginRequest,
			authInfo: LoginAuthInfo,
			callback: (username: string, password: string) => void
		) => void): this;
		/**
		 * Emitted when a result is available for webContents.findInPage request.
		 */
		on(event: 'found-in-page', listener: (event: Event, result: {
			requestId: number;
			/**
			 * ndicates if more responses are to follow.
			 */
			finalUpdate: boolean;
			/**
			 * Position of the active match.
			 */
			activeMatchOrdinal?: number;
			/**
			 * Number of Matches.
			 */
			matches?: number;
			/**
			 * Coordinates of first match region.
			 */
			selectionArea?: any;
		}) => void): this;
		/**
		 * Emitted when media starts playing.
		 */
		on(event: 'media-started-playing', listener: Function): this;
		/**
		 * Emitted when media is paused or done playing.
		 */
		on(event: 'media-paused', listener: Function): this;
		/**
		 * Emitted when a page’s theme color changes. This is usually due to encountering a meta tag:
		 * <meta name='theme-color' content='#ff0000'>
		 */
		on(event: 'did-change-theme-color', listener: Function): this;
		/**
		 * Emitted when the cursor’s type changes.
		 * If the type parameter is custom, the image parameter will hold the custom cursor image
		 * in a NativeImage, and the scale will hold scaling information for the image.
		 */
		on(event: 'cursor-changed', listener: (event: Event, type: CursorType, image?: NativeImage, scale?: number) => void): this;
		on(event: string, listener: Function): this;
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
		 * Initiates a download of the resource at url without navigating.
		 * The will-download event of session will be triggered.
		 */
		downloadURL(url: string): void;
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
		 * Clears the navigation history.
		 */
		clearHistory(): void;
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
		 * @returns The user agent for this web page.
		 */
		getUserAgent(): string;
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
		 * Mute the audio on the current web page.
		 */
		setAudioMuted(muted: boolean): void;
		/**
		 * @returns Whether this page has been muted.
		 */
		isAudioMuted(): boolean;
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
		 * Executes Edit -> Paste and Match Style in page.
		 */
		pasteAndMatchStyle(): void;
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
		 * Opens the developer tools for the service worker context.
		 */
		inspectServiceWorker(): void;
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
		/**
		 * Enable device emulation with the given parameters.
		 */
		enableDeviceEmulation(parameters: DeviceEmulationParameters): void;
		/**
		 * Disable device emulation.
		 */
		disableDeviceEmulation(): void;
		/**
		 * Sends an input event to the page.
		 */
		sendInputEvent(event: SendInputEvent): void;
		/**
		 * Begin subscribing for presentation events and captured frames,
		 * The callback will be called when there is a presentation event.
		 */
		beginFrameSubscription(callback: (
			/**
			 * The frameBuffer is a Buffer that contains raw pixel data.
			 * On most machines, the pixel data is effectively stored in 32bit BGRA format,
			 * but the actual representation depends on the endianness of the processor
			 * (most modern processors are little-endian, on machines with big-endian
			 * processors the data is in 32bit ARGB format).
			 */
			frameBuffer: Buffer
		) => void): void;
		/**
		 * End subscribing for frame presentation events.
		 */
		endFrameSubscription(): void;
		/**
		 * @returns If the process of saving page has been initiated successfully.
		 */
		savePage(fullPath: string, saveType: 'HTMLOnly' | 'HTMLComplete' | 'MHTML', callback?: (eror: Error) => void): boolean;
		/**
		 * @returns The session object used by this webContents.
		 */
		session: Session;
		/**
		 * @returns The WebContents that might own this WebContents.
		 */
		hostWebContents: WebContents;
		/**
		 * @returns The WebContents of DevTools for this WebContents.
		 * Note: Users should never store this object because it may become null
		 * when the DevTools has been closed.
		 */
		devToolsWebContents: WebContents;
		/**
		 * @returns Debugger API
		 */
		debugger: Debugger;
	}

	type CursorType = 'default' | 'crosshair' | 'pointer' | 'text' | 'wait' | 'help' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ns-resize' | 'ew-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'm-panning' | 'e-panning' | 'n-panning' | 'ne-panning' | 'nw-panning' | 's-panning' | 'se-panning' |'sw-panning' | 'w-panning' | 'move' | 'vertical-text' | 'cell' | 'context-menu' | 'alias' | 'progress' | 'nodrop' | 'copy' | 'none' | 'not-allowed' | 'zoom-in' | 'zoom-out' | 'grab' | 'grabbing' | 'custom';

	interface Certificate {
		/**
		 * PEM encoded data
		 */
		data: Buffer;
		issuerName: string;
	}

	interface LoginRequest {
		method: string;
		url: string;
		referrer: string;
	}

	interface LoginAuthInfo {
		isProxy: boolean;
		scheme: string;
		host: string;
		port: number;
		realm: string;
	}

	interface FindInPageOptions {
		/**
		 * Whether to search forward or backward, defaults to true
		 */
		forward?: boolean;
		/**
		 * Whether the operation is first request or a follow up, defaults to false.
		 */
		findNext?: boolean;
		/**
		 * Whether search should be case-sensitive, defaults to false.
		 */
		matchCase?: boolean;
		/**
		 * Whether to look only at the start of words. defaults to false.
		 */
		wordStart?: boolean;
		/**
		 * When combined with wordStart, accepts a match in the middle of a word
		 * if the match begins with an uppercase letter followed by a lowercase
		 * or non-letter. Accepts several other intra-word matches, defaults to false.
		 */
		medialCapitalAsWordStart?: boolean;
	}

	interface DeviceEmulationParameters {
		/**
		 * Specify the screen type to emulated
		 * Default: desktop
		 */
		screenPosition?: 'desktop' | 'mobile';
		/**
		 * Set the emulated screen size (screenPosition == mobile)
		 */
		screenSize?: {
			/**
			 * Set the emulated screen width
			 */
			width: number;
			/**
			 * Set the emulated screen height
			 */
			height: number;
		};
		/**
		 * Position the view on the screen (screenPosition == mobile)
		 * Default: {x: 0, y: 0}
		 */
		viewPosition?: {
			/**
			 * Set the x axis offset from top left corner
			 */
			x: number;
			/**
			 * Set the y axis offset from top left corner
			 */
			y: number;
		};
		/**
		 * Set the device scale factor (if zero defaults to original device scale factor)
		 * Default: 0
		 */
		deviceScaleFactor: number;
		/**
		 * Set the emulated view size (empty means no override).
		 */
		viewSize?: {
			/**
			 * Set the emulated view width
			 */
			width: number;
			/**
			 * Set the emulated view height
			 */
			height: number;
		};
		/**
		 * Whether emulated view should be scaled down if necessary to fit into available space
		 * Default: false
		 */
		fitToView?: boolean;
		/**
		 * Offset of the emulated view inside available space (not in fit to view mode)
		 * Default: {x: 0, y: 0}
		 */
		offset?: {
			/**
			 * Set the x axis offset from top left corner
			 */
			x: number;
			/**
			 * Set the y axis offset from top left corner
			 */
			y: number;
		};
		/**
		 * Scale of emulated view inside available space (not in fit to view mode)
		 * Default: 1
		 */
		scale: number;
	}

	interface SendInputEvent {
		type: 'mouseDown' | 'mouseUp' | 'mouseEnter' | 'mouseLeave' | 'contextMenu' | 'mouseWheel' | 'mouseMove' | 'keyDown' | 'keyUp' | 'char';
		modifiers: ('shift' | 'control' | 'alt' | 'meta' | 'isKeypad' | 'isAutoRepeat' | 'leftButtonDown' | 'middleButtonDown' | 'rightButtonDown' | 'capsLock' | 'numLock' | 'left' | 'right')[];
	}

	interface SendInputKeyboardEvent extends SendInputEvent {
		keyCode: string;
	}

	interface SendInputMouseEvent extends SendInputEvent {
		x: number;
		y: number;
		button?: 'left' | 'middle' | 'right';
		globalX?: number;
		globalY?: number;
		movementX?: number;
		movementY?: number;
		clickCount?: number;
	}

	interface SendInputMouseWheelEvent extends SendInputEvent {
		deltaX?: number;
		deltaY?: number;
		wheelTicksX?: number;
		wheelTicksY?: number;
		accelerationRatioX?: number;
		accelerationRatioY?: number;
		hasPreciseScrollingDeltas?: number;
		canScroll?: boolean;
	}

	/**
	 * Debugger API serves as an alternate transport for remote debugging protocol.
	 */
	interface Debugger extends NodeJS.EventEmitter {
		/**
		 * Attaches the debugger to the webContents.
		 * @param protocolVersion Requested debugging protocol version.
		 */
		attach(protocolVersion?: string): void;
		/**
		 * @returns Whether a debugger is attached to the webContents.
		 */
		isAttached(): boolean;
		/**
		 * Detaches the debugger from the webContents.
		 */
		detach(): void;
		/**
		 * Send given command to the debugging target.
		 * @param method Method name, should be one of the methods defined by the remote debugging protocol.
		 * @param commandParams JSON object with request parameters.
		 * @param callback Response defined by the ‘returns’ attribute of the command description in the remote debugging protocol.
		 */
		sendCommand(method: string, commandParams?: any, callback?: (error: Error, result: any) => void): void;
		/**
		 * Emitted when debugging session is terminated. This happens either when
		 * webContents is closed or devtools is invoked for the attached webContents.
		 */
		on(event: 'detach', listener: (event: Event, reason: string) => void): this;
		/**
		 * Emitted whenever debugging target issues instrumentation event.
		 * Event parameters defined by the ‘parameters’ attribute in the remote debugging protocol.
		 */
		on(event: 'message', listener: (event: Event, method: string, params: any) => void): this;
		on(event: string, listener: Function): this;
	}
}
