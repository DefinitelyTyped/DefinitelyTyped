// Type definitions for Safari extension development
// Definitions by: Lionel Seguin <https://github.com/lseguin42>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

////////////////////
// Global object
////////////////////
interface Window {
	safari: typeof safari;
}

declare module safari {
	
	/**
	 * EVENTS
	 */	
	interface SafariEvent {
		/**
		 * The type of the event.
		 */
		type: string;
		
		/**
		 * The target of the event.
		 */
		target: SafariEventTarget;
		
		/**
		 * The object that the event is currently being sent to.
		 */
		currentTarget: SafariEventTarget;
		
		/**
		 * The time and date that the event was created.
		 * // TODO: timestamp
		 */
		timeStamp: Date;
		
		/**
		 * The event-handling phase that the event is in.
		 * // TODO: enum { BUBBLING_PHASE, CAPTURING_PHASE, TARGETING_PHASE }
		 */
		eventPhase: number;
		
		/**
		 * A Boolean value that indicates whether the event goes through the bubbling phase.
		 */
		bubbles: boolean;
		
		/**
		 * A Boolean value that indicates whether the event can be canceled.
		 */
		cancelable: boolean;
		
		/**
		 * Prevents the event from any further propagation.
		 */
		stopPropagation(): void;
		
		/**
		 * Prevents the browser from performing the default action for an event.
		 */
		preventDefault(): void;
		
		/**
		 * A Boolean value that indicates whether the event’s default action has been prevented.
		 */
		defaultPrevented: boolean;
	}
	
	interface SafariActivateEvent extends SafariEvent {
	}
	
	interface SafariAvailableEvent extends SafariEvent {
	}
	
	interface SafariBeforeNavigateEvent extends SafariEvent {
		/**
		 * The URL that the user is navigating to.
		 */
		url: string;
	}
	
	interface SafariBeforeSearchEvent extends SafariEvent {
		/**
		 * The query inputted by the user.
		 */
		query: string;
	}
	
	interface SafariCloseEvent extends SafariEvent {
	}
	
	interface SafariCommandEvent extends SafariEvent {
		/**
		 * The command identifier of the target being dispatched.
		 */
		command: string;
	}
	
	interface SafariDeactivateEvent extends SafariEvent {
	}
	
	interface SafariExtensionMessageEvent extends SafariEvent {
		/**
		 * The name of the message.
		 */
		name: string;
		
		/**
		 * The message data.
		 */
		message: any;
	}
	
	interface SafariExtensionSettingsChangeEvent extends SafariEvent {
		/**
		 * The key identifier of the setting that was changed.
		 */
		key: string;
		
		/**
		 * The value after the settings change.
		 */
		newValue: any;
		
		/**
		 * The value before the settings change.
		 */
		oldValue: any;
	}
		
	interface SafariNavigateEvent extends SafariEvent {
	}
	
	interface SafariOpenEvent extends SafariEvent {
	}
	
	interface SafariValidateEvent extends SafariEvent {
		/**
		 * The command identifier of the target being validated.
		 */
		command: string;
	}
	
	interface SafariExtensionContextMenuItemValidateEvent extends SafariEvent {
		/**
		 * The user info object for this context menu event.
		 */
		userInfo: any;
	}
	
	interface SafariExtensionContextMenuItemCommandEvent extends SafariEvent {
		/**
		 * The user info object for this context menu event.
		 */
		userInfo: any;
	}
	
	interface SafariExtensionContextMenuEvent extends SafariEvent {
		/**
		 * Information about the current context menu event.
		 */
		userInfo: any;
		
		/**
		 * The context menu being built up.
		 */
		contextMenu: SafariExtensionContextMenu;
	}
	
	
	
	interface SafariExtensionContextMenuItem {
		/**
		 * The command identifier that the context menu item sends when activated.
		 */
		command: string;
		
		/**
		 * A Boolean value that indicates whether a context menu item is disabled.
		 */
		disabled: boolean;
		
		/**
		 * The unique identifier of the context menu item.
		 */
		identifier: string;
		
		/**
		 * The title displayed in the context menu.
		 */
		title: string;
	}
	
	interface SafariExtensionContextMenu {
		/**
		 * Appends a menu item to the contextual menu.
		 */
		appendContextMenuItem(identifier: string, title: string, command: string): SafariExtensionContextMenuItem;
		
		/**
		 * Inserts a menu item at a specific index in the contextual menu.
		 */
		insertContextMenuItem(index: number, identifier: string, title: string, command: string): SafariExtensionContextMenuItem;
		
		/**
		 * Returns a list of the context menu items from this extension.
		 */
		contextMenuItems: Array<SafariExtensionContextMenuItem>;
	}
	
	interface SafariContentWebPage {
		/**
		 * A proxy object for the tab containing the web content.
		 */
		tab: SafariContentBrowserTabProxy
	}
	
	interface SafariContentReader {
		/**
		 * A proxy object for the tab containing the Reader view.
		 */
		tab: SafariContentBrowserTabProxy;
	}
	
	interface SafariContentNamespace {
		/**
		 * The associated page object.
		 */
		self: SafariContentWebPage;
		
		/**
		 * The current Safari extension.
		 */
		extension: SafariContentExtension;
	}
	
	interface SafariContentExtension {
		/**
		 * The URI that corresponds to the root of the extension’s bundle.
		 */
		baseURI: string;
	}
	
	interface SafariContentBrowserTabProxy {
		/**
		 * Dispatches a canLoad message to the browser window tab.
		 * // TODO: BeforeLoadEvent
		 */
		// canLoad(event: BeforeLoadEvent, message: any);
		
		/**
		 * Dispatches a message to the browser window tab.
		 */
		dispatchMessage(name: string, message: any): void;
		
		/**
		 * Sets the user info to the appropriate context information.
		 */
		setContextMenuEventUserInfo(event: MouseEvent, userInfo: any): void;
	}
	
	interface SafariEventTarget {
		/**
		 * Starts listening for the specified type of event.
	 	 */
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		
		/**
		 * Stops listening for the specified type of event.
		 */
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
	}
	
	
	interface SafariPrivateBrowsing extends SafariEventTarget {
		
		/**
		 * A Boolean value indicating whether Private Browsing is currently enabled.
		 * 
		 * Use the read-only SafariBrowserTab.private property instead.
		 */
		enabled: boolean;
		
	}
	
	interface SafariReader extends SafariEventTarget {
		
		/**
		 * A Boolean value that indicates whether the tab can display the Reader view.
		 */
		available: Boolean;
		
		/**
		 * Enters the Reader view if it is available; otherwise does nothing.
		 */
		enter(): void;
		
		/**
		 * Exits the Reader if it is visible; otherwise does nothing.
		 */
		exit(): void;
		
		/**
		 * The browser tab that contains the Reader view.
		 */
		tab: SafariBrowserTab;
		
		/**
		 * A Boolean value that indicates whether the Reader view is being displayed.
		 */
		visible: boolean;
		
		/**
		 * Dispatches a message to the Reader view.
		 */
		dispatchMessage(name: string, message: any): void;
		
	}
	
	interface SafariWebPageProxy {
		
		/**
		 * Dispatches a message to the web content area.
		 */
		dispatchMessage(name: string, message: any): void;
		
	}
	
	interface SafariBrowserTab extends SafariEventTarget {
		
		/**
		 * The browser window containing this tab.
		 */
		browserWindow: SafariBrowserWindow;
		
		/**
		 * Indicates whether this tab uses Private Browsing.
		 */
		private: boolean;
		
		/**
		 * The Reader view associated with this tab.
		 */
		reader: SafariReader;
		
		/**
		 * The tab’s current title.
		 */
		title: string;
		
		/**
		 * A proxy object for the the web content displayed in the tab.
		 */
		page: SafariWebPageProxy;
		
		/**
		 * The URL loaded in this tab.
		 */
		url: string;
		
		/**
		 * Fetches a data URL for an image of the tab’s visible contents.
		 */
		visibleContentsAsDataURL(): string;
		
		/**
		 * Selects the tab.
		 */
		activate(): void;
		
		/**
		 * Requests that the tab should close.
		 */
		close(): void;
	}
	
	interface SafariBrowserWindow extends SafariEventTarget {
		
		/**
		 * The tabs in the window.
		 */
		tabs: Array<SafariBrowserTab>;
		
		/**
		 * A Boolean value that indicates whether the window is visible.
		 */
		visible: Boolean;
		
		/**
		 * Brings the window to the front and gives it keyboard focus.
		 */
		activate(): void;
		
		/**
		 * The tab currently being displayed in the window.
		 */
		activeTab: SafariBrowserTab;
		
		/**
		 * Requests that the window should close.
		 */
		close(): void;
		
		/**
		 * Opens a new tab in the window.
		 */
		openTab(visibility: string, index: number): SafariBrowserTab;
		
		/**
		 * Inserts a tab into the window.
		 */
		insertTab(tab: SafariBrowserTab, index: number): void;
		
	}
	
	
	/**
	 * SafariApplication
	 */
	interface SafariApplication extends SafariEventTarget {
		/**
		 * Opens a new browser window in front of all other windows.
		 */
		openBrowserWindow(): SafariBrowserWindow;
			
		/**
		 * The active browser window.
		 */
		activeBrowserWindow: SafariBrowserWindow;
		
		/**
		 * The current browser windows, in order from front to back.
		 */
		browserWindows: Array<SafariBrowserWindow>;
		
		/**
		 * An object representing Safari's Private Browsing feature.
		 */
		privateBrowsing: SafariPrivateBrowsing;
	}
	
	interface SafariExtensionSettings {
		/**
		 * Returns the current value of a key.
		 */
		getItem(key: string): any;
		
		/**
		 * Sets the value of a key.
		 */
		setItem(key: string, value: any): void;
		
		/**
		 * Removes a key.
		 */
		removeItem(key: string): void;
		
		/**
		 * Removes all key-value pairs.
		 */
		clear(): void;
	}
	
	interface SafariExtensionSecureSettings {
		/**
		 * Returns the current value of a key.
		 */
		getItem(key: string): any;
		
		/**
		 * Sets the value of a key.
		 */
		setItem(key: string, value: any): void;
		
		/**
		 * Removes a key.
		 */
		removeItem(key: string): void;
		
		/**
		 * Removes all key-value pairs.
		 */
		clear(): void;
	}
	
	interface SafariExtensionMenuItem {
		/**
		 * The command identifier that the menu item sends when activated.
		 */
		command: string;
		
		/**
		 * The unique identifier of the menu item.
		 */
		identifier: string;
		
		/**
		 * A Boolean value that indicates whether the menu item is a separator.
		 */
		separator: boolean;
		
		/**
		 * The title displayed in the menu.
		 */
		title: string;
		
		/**
		 * The URL of the image shown next to the menu item.
		 */
		image: string;
		
		/**
		 * The submenu displayed by this menu item.
		 */
		submenu: SafariExtensionMenu;
		
		/**
		 * A Boolean value that indicates whether the menu item is visible.
		 */
		visible: boolean;
		
		/**
		 * A Boolean value that indicates whether a menu item is disabled.
		 */
		disabled: boolean;
		
		/**
		 * The state of the menu item.
		 */
		checkedState: number; // TODO enum { CHECKED, MIXED, UNCHECKED }
		
	}
	
	interface SafariExtensionMenu {
		/**
		 * The unique identifier of the menu.
		 */
		identifier: string;
		
		/**
		 * The items in the menu.
		 */
		menuItems: Array<SafariExtensionMenuItem>;
		
		/**
		 * A Boolean value that indicates whether the menu is currently visible to the user.
		 */
		visible: boolean;
		
		/**
		 * Creates a menu item and appends it to the menu.
		 */
		appendMenuItem(identifier: string, title: string, command: string): SafariExtensionMenuItem;
		
		/**
		 * Creates a separator menu item and appends it to the menu.
		 */
		appendSeparator (identifier: string): SafariExtensionMenuItem;
		
		/**
		 * Creates a menu item and inserts it in the menu at the given index.
		 */
		insertMenuItem(index: number, identifier: string, title: string, command: string): SafariExtensionMenuItem;
		
		/**
		 * Creates a separator menu item and inserts it in the menu at the given index.
		 */
		insertSeparator(index: number, identifier: string): SafariExtensionMenuItem;
		
		/**
		 * Removes a menu item.
		 */
		removeMenuItem(index: number): void;
	}
	
	interface SafariExtensionPopover {
		/**
		 * The unique identifier for the popover.
		 */
		identifier: string;
		
		/**
		 * A Boolean value that indicates whether the popover is visible.
		 */
		visible: boolean;
		
		/**
		 * Hides the popover.
		 */
		hide(): void;
		
		/**
		 * The DOM window object of the popover.
		 */
		contentWindow: Window;
		
		/**
		 * The height, in pixels, of the popover.
		 */
		height: number;
		
		/**
		 * The width, in pixels, of the popover.
		 */
		width: number;
	}
	
	interface SafariExtensionToolbarItem {
		/**
		 * The current badge number.
		 */
		badge: number;
		
		/**
		 * The URL of the current image.
		 */
		image: string;
		
		/**
		 * The label of the toolbar item, as shown in the toolbar’s overflow menu.
		 */
		label: string;
		
		/**
		 * The label of the toolbar item, as shown in the Customize palette.
		 */
		paletteLabel: string;
		
		/**
		 * The tooltip (help tag) of the toolbar item.
		 */
		toolTip: string;
		
		/**
		 * The menu associated with this toolbar item.
		 */
		menu: SafariExtensionMenu;
		
		/**
		 * The popover associated with the toolbar item.
		 */
		popover: SafariExtensionPopover;
		
		/**
		 * Shows the menu for the toolbar item.
		 */
		showMenu(): void;
		
		/**
		 * Shows the popover for the toolbar item.
		 */
		showPopover(): void;
		
		/**
		 * The containing browser window.
		 */
		browserWindow: SafariBrowserWindow;
		
		/**
		 * The command identifier that the toolbar item sends when it is clicked.
		 */
		command: string;
		
		/**
		 * A Boolean value that indicates whether the toolbar item is disabled.
		 */
		disabled: boolean;
		
		/**
		 * The unique identifier of the toolbar item.
		 */
		identifier: boolean;
		
		/**
		 * Dispatches a validate event for this toolbar item.
		 */
		validate(): void;
	}
	
	/**
	 * SafariExtension
	 */
	interface SafariExtension {
		
		/**
		 * All of the bars of an extension.
		 */
		bars: Array<SafariExtensionBar>;
		
		/**
		 * The URI that corresponds to the root of the extension’s bundle.
		 */
		baseURI: string;
		
		/**
		 * The extension’s global page, or null if the extension doesn’t have a global page.
		 */
		globalPage: SafariExtensionGlobalPage;
		
		/**
		 * All of the toolbar items of an extension.
		 */
		toolbarItems: Array<SafariExtensionToolbarItem>;
		
		/**
		 * All of the menus of an extension.
		 */
		menus: Array<SafariExtensionMenu>;
		
		/**
		 * Creates and returns a new menu.
		 */
		createMenu(identifier: string): SafariExtensionMenu;
		
		/**
		 * Removes the specified menu.
		 */
		removeMenu(identifier: string): void;
		
		/**
		 * All of the popovers of an extension.
		 */
		popovers: Array<SafariExtensionPopover>
		
		/**
		 * Creates and returns a new popover.
		 */
		createPopover(identifier: string, url: string, width: number, height: number): SafariExtensionPopover;
		
		/**
		 * Removes the specified popover.
		 */
		removePopover(identifier: string): void;
		
		/**
		 * Adds a content script from a string.
		 */
		addContentScript(source: string, whitelist: Array<string|RegExp>, blacklist: Array<string|RegExp>, runAtEnd: boolean): string;
		
		/**
		 * Adds a content script from a URL.
		 */
		addContentScriptFromURL(url: string, whitelist: Array<string|RegExp>, blacklist: Array<string|RegExp>, runAtEnd: boolean): string;
		
		/**
		 * Adds a content style sheet from a string.
		 */
		addContentStyleSheet(source: string, whitelist: Array<string|RegExp>, blacklist: Array<string|RegExp>): string;
		
		/**
		 * Adds a content style sheet from a URL.
		 */
		addContentStyleSheetFromURL(url: string, whitelist: Array<string|RegExp>, blacklist: Array<string|RegExp>): string;
		
		/**
		 * Removes the specified content script.
		 */
		removeContentScript(url: string): void;
		
		/**
		 * Removes all content scripts added by this extension.
		 */
		removeContentScripts(): void;
		
		/**
		 * Removes the specified content style sheet.
		 */
		removeContentStyleSheet(url: string): void;
		
		/**
		 * Removes all content style sheets added by this extension.
		 */
		removeContentStyleSheets(): void;
		
		/**
		 * The version number of the extension displayed to the user in the Extensions preference pane.
		 */
		displayVersion: string;
		
		/**
		 * The version number of the extension displayed to the user in the Extensions preference pane.
		 */
		bundleVersion: string;
		
		/**
		 * The storage object for an extension’s normal settings.
		 */
		settings: SafariExtensionSettings;
		
		/**
		 * The storage object for an extension’s normal settings.
		 */
		secureSettings: SafariExtensionSecureSettings;
	}
	
	/**
	 * SafariExtensionGlobalPage
	 */
	interface SafariExtensionGlobalPage {
		
		contentWindow: Window;
		
	}
	
	/**
	 * SafariExtensionBar
	 */
	interface SafariExtensionBar {
		/**
		 * A Boolean value that indicates whether the bar is visible.
		 */
		visible: boolean;
		
		/**
		 * Hides the bar.
		 */
		hide(doNotRemember: boolean): void;
		
		/**
		 * Shows the bar.
		 */
		show(doNotRemember: boolean): void;
		
		/**
		 * The browser window containing the bar.
		 */
		browserWindow: SafariBrowserWindow;
		
		/**
		 * The DOM window object of the bar.
		 */
		contentWindow: Window;
		
		/**
		 * The unique identifier of the bar.
		 */
		identifier: string;
		
		/**
		 * The title of the bar.
		 */
		label: string;
		
	}

	/**
	 * The Safari application.
	 */
	let application: SafariApplication;
	
	/**
	 * The current Safari extension.
	 */
	let extension: SafariExtension;
	
}