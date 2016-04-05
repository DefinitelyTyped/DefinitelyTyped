// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="github-electron.event-emitter.d.ts" />
/// <reference path="github-electron.menu.d.ts" />
/// <reference path="github-electron.session.d.ts" />
/// <reference path="github-electron.web-contents.d.ts" />

declare namespace Electron {
	/**
	 * The BrowserWindow class gives you ability to create a browser window.
	 * You can also create a window without chrome by using Frameless Window API.
	 */
	class BrowserWindow extends EventEmitter {
		/**
		 * Emitted when the document changed its title,
		 * calling event.preventDefault() would prevent the native window’s title to change.
		 */
		on(event: 'page-title-updated', listener: (event: Event) => void): this;
		/**
		 * Emitted when the window is going to be closed. It’s emitted before the beforeunload
		 * and unload event of the DOM. Calling event.preventDefault() will cancel the close.
		 */
		on(event: 'close', listener: (event: Event) => void): this;
		/**
		 * Emitted when the window is closed. After you have received this event
		 * you should remove the reference to the window and avoid using it anymore.
		 */
		on(event: 'closed', listener: Function): this;
		/**
		 * Emitted when the web page becomes unresponsive.
		 */
		on(event: 'unresponsive', listener: Function): this;
		/**
		 * Emitted when the unresponsive web page becomes responsive again.
		 */
		on(event: 'responsive', listener: Function): this;
		/**
		 * Emitted when the window loses focus.
		 */
		on(event: 'blur', listener: Function): this;
		/**
		 * Emitted when the window gains focus.
		 */
		on(event: 'focus', listener: Function): this;
		/**
		 * Emitted when the window is shown.
		 */
		on(event: 'show', listener: Function): this;
		/**
		 * Emitted when the window is hidden.
		 */
		on(event: 'hide', listener: Function): this;
		/**
		 * Emitted when window is maximized.
		 */
		on(event: 'maximize', listener: Function): this;
		/**
		 * Emitted when the window exits from maximized state.
		 */
		on(event: 'unmaximize', listener: Function): this;
		/**
		 * Emitted when the window is minimized.
		 */
		on(event: 'minimize', listener: Function): this;
		/**
		 * Emitted when the window is restored from minimized state.
		 */
		on(event: 'restore', listener: Function): this;
		/**
		 * Emitted when the window is getting resized.
		 */
		on(event: 'resize', listener: Function): this;
		/**
		 * Emitted when the window is getting moved to a new position.
		 */
		on(event: 'move', listener: Function): this;
		/**
		 * Emitted when the window enters full screen state.
		 */
		on(event: 'enter-full-screen', listener: Function): this;
		/**
		 * Emitted when the window leaves full screen state.
		 */
		on(event: 'leave-full-screen', listener: Function): this;
		/**
		 * Emitted when the window enters full screen state triggered by HTML API.
		 */
		on(event: 'enter-html-full-screen', listener: Function): this;
		/**
		 * Emitted when the window leaves full screen state triggered by HTML API.
		 */
		on(event: 'leave-html-full-screen', listener: Function): this;
		/**
		 * Emitted when an App Command is invoked. These are typically related
		 * to keyboard media keys or browser commands, as well as the "Back" /
		 * "Forward" buttons built into some mice on Windows.
		 * Note: This is only implemented on Windows.
		 */
		on(event: 'app-command', listener: (event: Event, command: string) => void): this;
		/**
		 * Emitted when scroll wheel event phase has begun.
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'scroll-touch-begin', listener: Function): this;
		/**
		 * Emitted when scroll wheel event phase has ended.
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'scroll-touch-end', listener: Function): this;
		on(event: string, listener: Function): this;
		constructor(options?: BrowserWindowOptions);
		/**
		 * @returns All opened browser windows.
		 */
		static getAllWindows(): BrowserWindow[];
		/**
		 * @returns The window that is focused in this application.
		 */
		static getFocusedWindow(): BrowserWindow;
		/**
		 * Find a window according to the webContents it owns.
		 */
		static fromWebContents(webContents: WebContents): BrowserWindow;
		/**
		 * Find a window according to its ID.
		 */
		static fromId(id: number): BrowserWindow;
		/**
		 * Adds devtools extension located at path. The extension will be remembered
		 * so you only need to call this API once, this API is not for programming use.
		 * @returns The extension's name.
		 */
		static addDevToolsExtension(path: string): string;
		/**
		 * Remove a devtools extension.
		 * @param name The name of the devtools extension to remove.
		 */
		static removeDevToolsExtension(name: string): void;
		/**
		 * The WebContents object this window owns, all web page related events and
		 * operations would be done via it.
		 * Note: Users should never store this object because it may become null when
		 * the renderer process (web page) has crashed.
		 */
		webContents: WebContents;
		/**
		 * Get the unique ID of this window.
		 */
		id: number;
		/**
		 * Force closing the window, the unload and beforeunload event won't be emitted
		 * for the web page, and close event would also not be emitted for this window,
		 * but it would guarantee the closed event to be emitted.
		 * You should only use this method when the renderer process (web page) has crashed.
		 */
		destroy(): void;
		/**
		 * Try to close the window, this has the same effect with user manually clicking
		 * the close button of the window. The web page may cancel the close though,
		 * see the close event.
		 */
		close(): void;
		/**
		 * Focus on the window.
		 */
		focus(): void;
		/**
		 * Remove focus on the window.
		 */
		blur(): void;
		/**
		 * @returns Whether the window is focused.
		 */
		isFocused(): boolean;
		/**
		 * Shows and gives focus to the window.
		 */
		show(): void;
		/**
		 * Shows the window but doesn't focus on it.
		 */
		showInactive(): void;
		/**
		 * Hides the window.
		 */
		hide(): void;
		/**
		 * @returns Whether the window is visible to the user.
		 */
		isVisible(): boolean;
		/**
		 * Maximizes the window.
		 */
		maximize(): void;
		/**
		 * Unmaximizes the window.
		 */
		unmaximize(): void;
		/**
		 * @returns Whether the window is maximized.
		 */
		isMaximized(): boolean;
		/**
		 * Minimizes the window. On some platforms the minimized window will be
		 * shown in the Dock.
		 */
		minimize(): void;
		/**
		 * Restores the window from minimized state to its previous state.
		 */
		restore(): void;
		/**
		 * @returns Whether the window is minimized.
		 */
		isMinimized(): boolean;
		/**
		 * Sets whether the window should be in fullscreen mode.
		 */
		setFullScreen(flag: boolean): void;
		/**
		 * @returns Whether the window is in fullscreen mode.
		 */
		isFullScreen(): boolean;
		/**
		 * This will have a window maintain an aspect ratio.
		 * The extra size allows a developer to have space, specified in pixels,
		 * not included within the aspect ratio calculations.
		 * This API already takes into account the difference between a window’s size and its content size.
		 *
		 * Note: This API is available only on OS X.
		 */
		setAspectRatio(aspectRatio: number, extraSize?: {
			width: number,
			height: number
		}): void;
		/**
		 * Resizes and moves the window to width, height, x, y.
		 */
		setBounds(options: Rectangle, animate?: boolean): void;
		/**
		 * @returns The window's width, height, x and y values.
		 */
		getBounds(): Rectangle;
		/**
		 * Resizes the window to width and height.
		 */
		setSize(width: number, height: number, animate?: boolean): void;
		/**
		 * @returns The window's width and height.
		 */
		getSize(): number[];
		/**
		 * Resizes the window's client area (e.g. the web page) to width and height.
		 */
		setContentSize(width: number, height: number, animate?: boolean): void;
		/**
		 * @returns The window's client area's width and height.
		 */
		getContentSize(): number[];
		/**
		 * Sets the minimum size of window to width and height.
		 */
		setMinimumSize(width: number, height: number): void;
		/**
		 * @returns The window's minimum width and height.
		 */
		getMinimumSize(): number[];
		/**
		 * Sets the maximum size of window to width and height.
		 */
		setMaximumSize(width: number, height: number): void;
		/**
		 * @returns The window's maximum width and height.
		 */
		getMaximumSize(): number[];
		/**
		 * Sets whether the window can be manually resized by user.
		 */
		setResizable(resizable: boolean): void;
		/**
		 * @returns Whether the window can be manually resized by user.
		 */
		isResizable(): boolean;
		/**
		 * Sets whether the window can be moved by user. On Linux does nothing.
		 * Note: This API is available only on OS X and Windows.
		 */
		setMovable(movable: boolean): void;
		/**
		 * Note: This API is available only on OS X and Windows.
		 * @returns Whether the window can be moved by user. On Linux always returns true.
		 */
		isMovable(): boolean;
		/**
		 * Sets whether the window can be manually minimized by user. On Linux does nothing.
		 * Note: This API is available only on OS X and Windows.
		 */
		setMinimizable(minimizable: boolean): void;
		/**
		 * Note: This API is available only on OS X and Windows.
		 * @returns Whether the window can be manually minimized by user. On Linux always returns true.
		 */
		isMinimizable(): boolean;
		/**
		 * Sets whether the window can be manually maximized by user. On Linux does nothing.
		 * Note: This API is available only on OS X and Windows.
		 */
		setMaximizable(maximizable: boolean): void;
		/**
		 * Note: This API is available only on OS X and Windows.
		 * @returns Whether the window can be manually maximized by user. On Linux always returns true.
		 */
		isMaximizable(): boolean;
		/**
		 * Sets whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.
		 */
		setFullScreenable(fullscreenable: boolean): void;
		/**
		 * @returns Whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.
		 */
		isFullScreenable(): boolean;
		/**
		 * Sets whether the window can be manually closed by user. On Linux does nothing.
		 * Note: This API is available only on OS X and Windows.
		 */
		setClosable(closable: boolean): void;
		/**
		 * Note: This API is available only on OS X and Windows.
		 * @returns Whether the window can be manually closed by user. On Linux always returns true.
		 */
		isClosable(): boolean;
		/**
		 * Sets whether the window should show always on top of other windows. After
		 * setting this, the window is still a normal window, not a toolbox window
		 * which can not be focused on.
		 */
		setAlwaysOnTop(flag: boolean): void;
		/**
		 * @returns Whether the window is always on top of other windows.
		 */
		isAlwaysOnTop(): boolean;
		/**
		 * Moves window to the center of the screen.
		 */
		center(): void;
		/**
		 * Moves window to x and y.
		 */
		setPosition(x: number, y: number, animate?: boolean): void;
		/**
		 * @returns The window's current position.
		 */
		getPosition(): number[];
		/**
		 * Changes the title of native window to title.
		 */
		setTitle(title: string): void;
		/**
		 * Note: The title of web page can be different from the title of the native window.
		 * @returns The title of the native window.
		 */
		getTitle(): string;
		/**
		 * Starts or stops flashing the window to attract user's attention.
		 */
		flashFrame(flag: boolean): void;
		/**
		 * Makes the window do not show in Taskbar.
		 */
		setSkipTaskbar(skip: boolean): void;
		/**
		 * Enters or leaves the kiosk mode.
		 */
		setKiosk(flag: boolean): void;
		/**
		 * @returns Whether the window is in kiosk mode.
		 */
		isKiosk(): boolean;
		/**
		 * The native type of the handle is HWND on Windows, NSView* on OS X,
		 * and Window (unsigned long) on Linux.
		 * @returns The platform-specific handle of the window as Buffer.
		 */
		getNativeWindowHandle(): Buffer;
		/**
		 * Hooks a windows message. The callback is called when the message is received in the WndProc.
		 * Note: This API is available only on Windows.
		 */
		hookWindowMessage(message: number, callback: Function): void;
		/**
		 * @returns Whether the message is hooked.
		 */
		isWindowMessageHooked(message: number): boolean;
		/**
		 * Unhook the window message.
		 */
		unhookWindowMessage(message: number): void;
		/**
		 * Unhooks all of the window messages.
		 */
		unhookAllWindowMessages(): void;
		/**
		 * Sets the pathname of the file the window represents, and the icon of the
		 * file will show in window's title bar.
		 * Note: This API is available only on OS X.
		 */
		setRepresentedFilename(filename: string): void;
		/**
		 * Note: This API is available only on OS X.
		 * @returns The pathname of the file the window represents.
		 */
		getRepresentedFilename(): string;
		/**
		 * Specifies whether the window’s document has been edited, and the icon in
		 * title bar will become grey when set to true.
		 * Note: This API is available only on OS X.
		 */
		setDocumentEdited(edited: boolean): void;
		/**
		 * Note: This API is available only on OS X.
		 * @returns Whether the window's document has been edited.
		 */
		isDocumentEdited(): boolean;
		focusOnWebView(): void;
		blurWebView(): void;
		/**
		 * Captures the snapshot of page within rect, upon completion the callback
		 * will be called. Omitting the rect would capture the whole visible page.
		 * Note: Be sure to read documents on remote buffer in remote if you are going
		 * to use this API in renderer process.
		 * @param callback Supplies the image that stores data of the snapshot.
		 */
		capturePage(rect: Rectangle, callback: (image: NativeImage) => void): void;
		capturePage(callback: (image: NativeImage) => void): void;
		/**
		 * Same with webContents.print([options])
		 */
		print(options?: {
			silent?: boolean;
			printBackground?: boolean;
		}): void;
		/**
		 * Same with webContents.printToPDF([options])
		 */
		printToPDF(options: {
			marginsType?: number;
			pageSize?: string;
			printBackground?: boolean;
			printSelectionOnly?: boolean;
			landscape?: boolean;
		}, callback: (error: Error, data: Buffer) => void): void;
		/**
		 * Same with webContents.loadURL(url).
		 */
		loadURL(url: string, options?: {
			httpReferrer?: string;
			userAgent?: string;
			extraHeaders?: string;
		}): void;
		/**
		 * Same with webContents.reload.
		 */
		reload(): void;
		/**
		 * Sets the menu as the window top menu.
		 * Note: This API is not available on OS X.
		 */
		setMenu(menu: Menu): void;
		/**
		 * Sets the progress value in the progress bar.
		 * On Linux platform, only supports Unity desktop environment, you need to
		 * specify the *.desktop file name to desktopName field in package.json.
		 * By default, it will assume app.getName().desktop.
		 * @param progress Valid range is [0, 1.0]. If < 0, the progress bar is removed.
		 * If greater than 0, it becomes indeterminate.
		 */
		setProgressBar(progress: number): void;
		/**
		 * Sets a 16px overlay onto the current Taskbar icon, usually used to convey
		 * some sort of application status or to passively notify the user.
		 * Note: This API is only available on Windows 7 or above.
		 * @param overlay The icon to display on the bottom right corner of the Taskbar
		 * icon. If this parameter is null, the overlay is cleared
		 * @param description Provided to Accessibility screen readers.
		 */
		setOverlayIcon(overlay: NativeImage, description: string): void;
		/**
		 * Sets whether the window should have a shadow. On Windows and Linux does nothing.
		 * Note: This API is available only on OS X.
		 */
		setHasShadow(hasShadow: boolean): void;
		/**
		 * Note: This API is available only on OS X.
		 * @returns whether the window has a shadow. On Windows and Linux always returns true.
		 */
		hasShadow(): boolean;
		/**
		 * Add a thumbnail toolbar with a specified set of buttons to the thumbnail image
		 * of a window in a taskbar button layout.
		 * @returns Whether the thumbnail has been added successfully.
		 */
		setThumbarButtons(buttons: ThumbarButton[]): boolean;
		/**
		 * Shows pop-up dictionary that searches the selected word on the page.
		 * Note: This API is available only on OS X.
		 */
		showDefinitionForSelection(): void;
		/**
		 * Sets whether the window menu bar should hide itself automatically. Once set
		 * the menu bar will only show when users press the single Alt key.
		 * If the menu bar is already visible, calling setAutoHideMenuBar(true) won't
		 * hide it immediately.
		 */
		setAutoHideMenuBar(hide: boolean): void;
		/**
		 * @returns Whether menu bar automatically hides itself.
		 */
		isMenuBarAutoHide(): boolean;
		/**
		 * Sets whether the menu bar should be visible. If the menu bar is auto-hide,
		 * users can still bring up the menu bar by pressing the single Alt key.
		 */
		setMenuBarVisibility(visibile: boolean): void;
		/**
		 * @returns Whether the menu bar is visible.
		 */
		isMenuBarVisible(): boolean;
		/**
		 * Sets whether the window should be visible on all workspaces.
		 * Note: This API does nothing on Windows.
		 */
		setVisibleOnAllWorkspaces(visible: boolean): void;
		/**
		 * Note: This API always returns false on Windows.
		 * @returns Whether the window is visible on all workspaces.
		 */
		isVisibleOnAllWorkspaces(): boolean;
		/**
		 * Ignore all moused events that happened in the window.
		 * Note: This API is available only on OS X.
		 */
		setIgnoreMouseEvents(ignore: boolean): void;
	}

	type ThumbarButtonFlags = 'enabled' | 'disabled' | 'dismissonclick' | 'nobackground' | 'hidden' | 'noninteractive';

	interface ThumbarButton {
		icon: NativeImage | string;
		click: Function;
		tooltip?: string;
		flags?: ThumbarButtonFlags[];
	}

	interface WebPreferences {
		/**
		 * Whether node integration is enabled.
		 * Default: true.
		 */
		nodeIntegration?: boolean;
		/**
		 * Specifies a script that will be loaded before other scripts run in the page.
		 * This script will always have access to node APIs no matter whether node integration is turned on or off.
		 * The value should be the absolute file path to the script.
		 * When node integration is turned off, the preload script can reintroduce
		 * Node global symbols back to the global scope.
		 */
		preload?: string;
		/**
		 * Sets the session used by the page. Instead of passing the Session object directly,
		 * you can also choose to use the partition option instead, which accepts a partition string.
		 * When both session and partition are provided, session would be preferred.
		 * Default: the default session.
		 */
		session?: Session;
		/**
		 * Sets the session used by the page according to the session’s partition string.
		 * If partition starts with persist:, the page will use a persistent session available
		 * to all pages in the app with the same partition. if there is no persist: prefix,
		 * the page will use an in-memory session. By assigning the same partition,
		 * multiple pages can share the same session.
		 * Default: the default session.
		 */
		partition?: string;
		/**
		 * The default zoom factor of the page, 3.0 represents 300%.
		 * Default: 1.0.
		 */
		zoomFactor?: number;
		/**
		 * Enables JavaScript support.
		 * Default: true.
		 */
		javascript?: boolean;
		/**
		 * When setting false, it will disable the same-origin policy (Usually using testing
		 * websites by people), and set allowDisplayingInsecureContent and allowRunningInsecureContent
		 * to true if these two options are not set by user.
		 * Default: true.
		 */
		webSecurity?: boolean;
		/**
		 * Allow an https page to display content like images from http URLs.
		 * Default: false.
		 */
		allowDisplayingInsecureContent?: boolean;
		/**
		 * Allow a https page to run JavaScript, CSS or plugins from http URLs.
		 * Default: false.
		 */
		allowRunningInsecureContent?: boolean;
		/**
		 * Enables image support.
		 * Default: true.
		 */
		images?: boolean;
		/**
		 * Make TextArea elements resizable.
		 * Default: true.
		 */
		textAreasAreResizable?: boolean;
		/**
		 * Enables WebGL support.
		 * Default: true.
		 */
		webgl?: boolean;
		/**
		 * Enables WebAudio support.
		 * Default: true.
		 */
		webaudio?: boolean;
		/**
		 * Whether plugins should be enabled.
		 * Default: false.
		 */
		plugins?: boolean;
		/**
		 * Enables Chromium’s experimental features.
		 * Default: false.
		 */
		experimentalFeatures?: boolean;
		/**
		 * Enables Chromium’s experimental canvas features.
		 * Default: false.
		 */
		experimentalCanvasFeatures?: boolean;
		/**
		 * Enables DirectWrite font rendering system on Windows.
		 * Default: true.
		 */
		directWrite?: boolean;
		/**
		 * A list of feature strings separated by ",".
		 */
		blinkFeatures?: string;
		/**
		 * Sets the default font for the font-family.
		 */
		defaultFontFamily?: {
			/**
			 * Default: Times New Roman.
			 */
			standard?: string;
			/**
			 * Default: Times New Roman.
			 */
			serif?: string;
			/**
			 * Default: Arial.
			 */
			sansSerif?: string;
			/**
			 * Default: Courier New.
			 */
			monospace?: string;
		};
		/**
		 * Default: 16.
		 */
		defaultFontSize?: number;
		/**
		 * Default: 13.
		 */
		defaultMonospaceFontSize?: number;
		/**
		 * Default: 0.
		 */
		minimumFontSize?: number;
		/**
		 * Default: ISO-8859-1.
		 */
		defaultEncoding?: string;
	}

	interface BrowserWindowOptions extends Rectangle {
		/**
		 * Window’s width in pixels.
		 * Default: 800.
		 */
		width?: number;
		/**
		 * Window’s height in pixels.
		 * Default: 600.
		 */
		height?: number;
		/**
		 * Window’s left offset from screen.
		 * Default: center the window.
		 */
		x?: number;
		/**
		 * Window’s top offset from screen.
		 * Default: center the window.
		 */
		y?: number;
		/**
		 * The width and height would be used as web page’s size, which means
		 * the actual window’s size will include window frame’s size and be slightly larger.
		 * Default: false. */
		useContentSize?: boolean;
		/**
		 * Show window in the center of the screen.
		 * Default: true
		 */
		center?: boolean;
		/**
		 * Window’s minimum width.
		 * Default: 0.
		 */
		minWidth?: number;
		/**
		 * Window’s minimum height.
		 * Default: 0.
		 */
		minHeight?: number;
		/**
		 * Window’s maximum width.
		 * Default: no limit.
		 */
		maxWidth?: number;
		/**
		 * Window’s maximum height.
		 * Default: no limit.
		 */
		maxHeight?: number;
		/**
		 * Whether window is resizable.
		 * Default: true.
		 */
		resizable?: boolean;
		/**
		 * Whether window is movable.
		 * Note: This is not implemented on Linux.
		 * Default: true.
		 */
		movable?: boolean;
		/**
		 * Whether window is minimizable.
		 * Note: This is not implemented on Linux.
		 * Default: true.
		 */
		minimizable?: boolean;
		/**
		 * Whether window is maximizable.
		 * Note: This is not implemented on Linux.
		 * Default: true.
		 */
		maximizable?: boolean;
		/**
		 * Whether window is closable.
		 * Note: This is not implemented on Linux.
		 * Default: true.
		 */
		closable?: boolean;
		/**
		 * Whether the window should always stay on top of other windows.
		 * Default: false.
		 */
		alwaysOnTop?: boolean;
		/**
		 * Whether the window should show in fullscreen.
		 * When explicity set to false the fullscreen button will be hidden or disabled on OS X.
		 * Default: false.
		 */
		fullscreen?: boolean;
		/**
		 * Whether the maximize/zoom button on OS X should toggle full screen mode or maximize window.
		 * Default: true.
		 */
		fullscreenable?: boolean;
		/**
		 * Whether to show the window in taskbar.
		 * Default: false.
		 */
		skipTaskbar?: boolean;
		/**
		 * The kiosk mode.
		 * Default: false.
		 */
		kiosk?: boolean;
		/**
		 * Default window title.
		 * Default: "Electron".
		 */
		title?: string;
		/**
		 *The window icon, when omitted on Windows the executable’s icon would be used as window icon.
		 */
		icon?: NativeImage|string;
		/**
		 * Whether window should be shown when created.
		 * Default: true.
		 */
		show?: boolean;
		/**
		 * Specify false to create a Frameless Window.
		 * Default: true.
		 */
		frame?: boolean;
		/**
		 * Whether the web view accepts a single mouse-down event that simultaneously activates the window.
		 * Default: false.
		 */
		acceptFirstMouse?: boolean;
		/**
		 * Whether to hide cursor when typing.
		 * Default: false.
		 */
		disableAutoHideCursor?: boolean;
		/**
		 * Auto hide the menu bar unless the Alt key is pressed.
		 * Default: true.
		 */
		autoHideMenuBar?: boolean;
		/**
		 * Enable the window to be resized larger than screen.
		 * Default: false.
		 */
		enableLargerThanScreen?: boolean;
		/**
		 * Window’s background color as Hexadecimal value, like #66CD00 or #FFF or #80FFFFFF (alpha is supported).
		 * Default: #000 (black) for Linux and Windows, #FFF for Mac (or clear if transparent).
		 */
		backgroundColor?: string;
		/**
		 * Whether window should have a shadow.
		 * Note: This is only implemented on OS X.
		 * Default: true.
		 */
		hasShadow?: boolean;
		/**
		 * Forces using dark theme for the window.
		 * Note: Only works on some GTK+3 desktop environments.
		 * Default: false.
		 */
		darkTheme?: boolean;
		/**
		 * Makes the window transparent.
		 * Default: false.
		 */
		transparent?: boolean;
		/**
		 * The type of window, default is normal window.
		 */
		type?: BrowserWindowType;
		/**
		 * The style of window title bar.
		 */
		titleBarStyle?: 'default' | 'hidden' | 'hidden-inset';
		/**
		 * Settings of web page’s features.
		 */
		webPreferences?: WebPreferences;
	}

	type BrowserWindowType = BrowserWindowTypeLinux | BrowserWindowTypeMac;
	type BrowserWindowTypeLinux = 'desktop' | 'dock' | 'toolbar' | 'splash' | 'notification';
	type BrowserWindowTypeMac = 'desktop' | 'textured';

	interface Rectangle {
		x?: number;
		y?: number;
		width?: number;
		height?: number;
	}
}
