// Type definitions for Chrome extension development
// Project: http://developer.chrome.com/extensions/
// Definitions by: Matthew Kimber <https://github.com/matthewkimber>, otiai10 <https://github.com/otiai10>, couven92 <https://gitbus.com/couven92>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../webrtc/MediaStream.d.ts'/>

////////////////////
// Global object
////////////////////
interface Window {
    chrome: typeof chrome;
}

////////////////////
// Accessibility Features
////////////////////
/**
 * Use the chrome.accessibilityFeatures API to manage Chrome's accessibility features. This API relies on the ChromeSetting prototype of the type API for getting and setting individual accessibility features. In order to get feature states the extension must request accessibilityFeatures.read permission. For modifying feature state, the extension needs accessibilityFeatures.modify permission. Note that accessibilityFeatures.modify does not imply accessibilityFeatures.read permission.
 * Availability: Since Chrome 37.  
 * Permissions: "accessibilityFeatures.read"
 * Important: This API works only on Chrome OS.
 */
declare module chrome.accessibilityFeatures {
	interface AccessibilityFeaturesGetArg {
		/** Optional. Whether to return the value that applies to the incognito session (default false).  */
		incognito?: boolean;
	}

	interface AccessibilityFeaturesCallbackArg {
		/** The value of the setting. */
		value: any;
		/**
		 * One of
		 * • not_controllable: cannot be controlled by any extension
		 * • controlled_by_other_extensions: controlled by extensions with higher precedence
		 * • controllable_by_this_extension: can be controlled by this extension
		 * • controlled_by_this_extension: controlled by this extension
		 */
		levelOfControl: string;
		/** Optional. Whether the effective value is specific to the incognito session. This property will only be present if the incognito property in the details parameter of get() was true.  */
		incognitoSpecific?: boolean;
	}

	interface AccessibilityFeaturesSetArg {
		/**
		 * The value of the setting. 
		 * Note that every setting has a specific value type, which is described together with the setting. An extension should not set a value of a different type. 
		 */
		value: any;
		/**
		 * Optional.
 		 * The scope of the ChromeSetting. One of
		 * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
		 * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
		 * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
		 * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
		 */
		scope?: string;
	}

	interface AccessibilityFeaturesClearArg {
		/**
		 * Optional.
 		 * The scope of the ChromeSetting. One of
		 * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
		 * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
		 * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
		 * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
		 */
		scope?: string;
	}

	interface AccessibilityFeaturesSetting {
		/**
		 * Gets the value of a setting.
		 * @param details Which setting to consider.
		 * @param callback The callback parameter should be a function that looks like this:
		 * function(object details) {...};
		 */
		get(details: AccessibilityFeaturesGetArg, callback: (details: AccessibilityFeaturesCallbackArg) => void): void;
		/**
		 * Sets the value of a setting.
		 * @param details Which setting to change.
		 * @param callback Called at the completion of the set operation.
		 * If you specify the callback parameter, it should be a function that looks like this:
		 * function() {...};
		 */
		set(details: AccessibilityFeaturesSetArg, callback?: () => void): void;
		/**
		 * Clears the setting, restoring any default value.
		 * @param details Which setting to clear.
		 * @param callback Called at the completion of the clear operation.
		 * If you specify the callback parameter, it should be a function that looks like this:
		 * function() {...};
		 */
		clear(details: AccessibilityFeaturesClearArg, callback?: () => void): void;
	}

	var spokenFeedback: AccessibilityFeaturesSetting;
	var largeCursor: AccessibilityFeaturesSetting;
	var stickyKeys: AccessibilityFeaturesSetting;
	var highContrast: AccessibilityFeaturesSetting;
	var screenMagnifier: AccessibilityFeaturesSetting;
	var autoclick: AccessibilityFeaturesSetting;
	var virtualKeyboard: AccessibilityFeaturesSetting;
	var animationPolicy: AccessibilityFeaturesSetting;
}

////////////////////
// Alarms
////////////////////
/**
 * Use the chrome.alarms API to schedule code to run periodically or at a specified time in the future. 
 * Availability: Since Chrome 22.
 * Permissions:  "alarms"
 */
declare module chrome.alarms {
    interface AlarmCreateInfo {
		/** Optional. Length of time in minutes after which the onAlarm event should fire.  */
		delayInMinutes?: number;
		/** Optional. If set, the onAlarm event should fire every periodInMinutes minutes after the initial event specified by when or delayInMinutes. If not set, the alarm will only fire once.  */
		periodInMinutes?: number;
		/** Optional. Time at which the alarm should fire, in milliseconds past the epoch (e.g. Date.now() + n).  */
		when?: number;
    }

    interface Alarm {
		/** Optional. If not null, the alarm is a repeating alarm and will fire again in periodInMinutes minutes.  */
		periodInMinutes?: number;
		/** Time at which this alarm was scheduled to fire, in milliseconds past the epoch (e.g. Date.now() + n). For performance reasons, the alarm may have been delayed an arbitrary amount beyond this. */
        scheduledTime: number;
		/** Name of this alarm. */
        name: string;
    }

    interface AlarmEvent extends chrome.events.Event {
		/**
		 * The callback parameter should be a function that looks like this:
		 * function( Alarm alarm) {...}; 
		 */
        addListener(callback: (alarm: Alarm) => void): void;
    }

	/**
	 * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
	 * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
	 * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
	 * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes. 
	 */
    export function create(alarmInfo: AlarmCreateInfo): void;	
	/**
	 * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
	 * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
	 * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
	 * @param name Optional name to identify this alarm. Defaults to the empty string. 
	 * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes. 
	 */
	export function create(name: string, alarmInfo: AlarmCreateInfo): void;
	/**
	 * Gets an array of all the alarms. 
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of Alarm alarms) {...}; 
	 */
    export function getAll(callback: (alarms: Alarm[]) => void): void;
	/**
	 * Clears all alarms. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function(boolean wasCleared) {...}; 
	 */
    export function clearAll(callback?: (wasCleared: boolean) => void): void;
	/**
	 * Clears the alarm with the given name. 
	 * @param name The name of the alarm to clear. Defaults to the empty string. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function(boolean wasCleared) {...}; 
	 */
    export function clear(name?: string, callback?: (wasCleared: boolean) => void): void;
	/**
	 * Clears the alarm without a name. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function(boolean wasCleared) {...}; 
	 */
    export function clear(callback: (wasCleared: boolean) => void): void;
	/**
	 * Retrieves details about the specified alarm. 
	 * @param callback The callback parameter should be a function that looks like this:
	 * function( Alarm alarm) {...}; 
	 */
	export function get(callback: (alarm: Alarm) => void): void;
	/**
	 * Retrieves details about the specified alarm. 
	 * @param name The name of the alarm to get. Defaults to the empty string.
	 * @param callback The callback parameter should be a function that looks like this:
	 * function( Alarm alarm) {...}; 
	 */
    export function get(name: string, callback: (alarm: Alarm) => void): void;
	
	/** Fired when an alarm has elapsed. Useful for event pages. */
    var onAlarm: AlarmEvent;
}

/**
 * Use the chrome.browser API to interact with the Chrome browser associated with 
 * the current application and Chrome profile. 
 */
declare module chrome.browser {
    interface Options {
        /** The URL to navigate to when the new tab is initially opened. */
        url: string;
    }
    
    /**
     * Opens a new tab in a browser window associated with the current application 
     * and Chrome profile. If no browser window for the Chrome profile is opened, 
     * a new one is opened prior to creating the new tab. 
     * @param options Configures how the tab should be opened. 
     * @param callback Called when the tab was successfully 
     * created, or failed to be created. If failed, runtime.lastError will be set.
     */
    export function openTab(options: Options, callback: () => void): void;
     
	/**
	* Opens a new tab in a browser window associated with the current application 
	* and Chrome profile. If no browser window for the Chrome profile is opened, 
	* a new one is opened prior to creating the new tab. Since Chrome 42 only. 
	* @param options Configures how the tab should be opened. 
	*/
    export function openTab(options: Options): void;
}

////////////////////
// Bookmarks
////////////////////
/**
 * Use the chrome.bookmarks API to create, organize, and otherwise manipulate bookmarks. Also see Override Pages, which you can use to create a custom Bookmark Manager page. 
 * Availability: Since Chrome 5.  
 * Permissions:  "bookmarks"   
 */
declare module chrome.bookmarks {
	/** A node (either a bookmark or a folder) in the bookmark tree. Child nodes are ordered within their parent folder. */
    interface BookmarkTreeNode {
		/** Optional. The 0-based position of this node within its parent folder.  */
		index?: number;
		/** Optional. When this node was created, in milliseconds since the epoch (new Date(dateAdded)).  */
		dateAdded?: number;
		/** The text displayed for the node. */
        title: string;
		/** Optional. The URL navigated to when a user clicks the bookmark. Omitted for folders.   */
		url?: string;
		/** Optional. When the contents of this folder last changed, in milliseconds since the epoch.   */
		dateGroupModified?: number;
		/** The unique identifier for the node. IDs are unique within the current profile, and they remain valid even after the browser is restarted.  */
        id: string;
		/** Optional. The id of the parent folder. Omitted for the root node.   */
		parentId?: string;
		/** Optional. An ordered list of children of this node.  */
		children?: BookmarkTreeNode[];
		/**
		 * Optional.
 		 * Since Chrome 37. 
		 * Indicates the reason why this node is unmodifiable. The managed value indicates that this node was configured by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the user and the extension (default). 
		 */
		unmodifiable?: any;
    }

    interface BookmarkRemoveInfo {
        index: number;
        parentId: string;
    }

    interface BookmarkMoveInfo {
        index: number;
        oldIndex: number;
        parentId: string;
        oldParentId: string;
    }

    interface BookmarkChangeInfo {
        url?: string;
        title: string;
    }

    interface BookmarkReorderInfo {
        childIds: string[];
    }

    interface BookmarkRemovedEvent extends chrome.events.Event {
		/** 
		 * @param callback The callback parameter should be a function that looks like this:
		 * function(string id, object removeInfo) {...};  
		 */
		addListener(callback: (id: string, removeInfo: BookmarkRemoveInfo) => void): void;
    }

    interface BookmarkImportEndedEvent extends chrome.events.Event {
        /** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function() {...}; 
		 */
		addListener(callback: () => void): void;
    }

    interface BookmarkMovedEvent extends chrome.events.Event {
        /** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string id, object moveInfo) {...}; 
		 */
		addListener(callback: (id: string, moveInfo: BookmarkMoveInfo) => void): void;
    }

    interface BookmarkImportBeganEvent extends chrome.events.Event {
        /** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function() {...}; 
		 */
		addListener(callback: () => void): void;
    }

    interface BookmarkChangedEvent extends chrome.events.Event {
        /** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string id, object changeInfo) {...}; 
		 */
		addListener(callback: (id: string, changeInfo: BookmarkChangeInfo) => void): void;
    }

    interface BookmarkCreatedEvent extends chrome.events.Event {
        /** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string id, BookmarkTreeNode bookmark) {...}; 
		 */
		addListener(callback: (id: string, bookmark: BookmarkTreeNode) => void): void;
    }

    interface BookmarkChildrenReordered extends chrome.events.Event {
        /** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string id, object reorderInfo) {...}; 
		 */
		addListener(callback: (id: string, reorderInfo: BookmarkReorderInfo) => void): void;
    }

	interface BookmarkSearchQuery {
		query?: string;
		url?: string;
		title?: string;
	}

	interface BookmarkCreateArg {
		/** Optional. Defaults to the Other Bookmarks folder.  */
		parentId?: string;
		index?: number;
		title?: string;
		url?: string;
	}

	interface BookmarkDestinationArg {
		parentId?: string;
		index?: number;
	}

	interface BookmarkChangesArg {
		title?: string;
		url?: string;
	}
	
	/** @deprecated since Chrome 38. Bookmark write operations are no longer limited by Chrome. */
    var MAX_WRITE_OPERATIONS_PER_HOUR: number;
	/** @deprecated since Chrome 38. Bookmark write operations are no longer limited by Chrome. */
    var MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;
    
	/**
	 * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties. 
	 * @param query A string of words and quoted phrases that are matched against bookmark URLs and titles.
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
	export function search(query: string, callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties. 
	 * @param query An object with one or more of the properties query, url, and title specified. Bookmarks matching all specified properties will be produced. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
	export function search(query: BookmarkSearchQuery, callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Retrieves the entire Bookmarks hierarchy. 
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
    export function getTree(callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Retrieves the recently added bookmarks. 
	 * @param numberOfItems The maximum number of items to return. 
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
    export function getRecent(numberOfItems: number, callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Retrieves the specified BookmarkTreeNode.
	 * @param id A single string-valued id
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
    export function get(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Retrieves the specified BookmarkTreeNode.
	 * @param idList An array of string-valued ids
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
    export function get(idList: string[], callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Creates a bookmark or folder under the specified parentId. If url is NULL or missing, it will be a folder. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function( BookmarkTreeNode result) {...}; 
	 */
    export function create(bookmark: BookmarkCreateArg, callback?: (result: BookmarkTreeNode) => void): void;
	/**
	 * Moves the specified BookmarkTreeNode to the provided location. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function( BookmarkTreeNode result) {...}; 
	 */
    export function move(id: string, destination: BookmarkDestinationArg, callback?: (result: BookmarkTreeNode) => void): void;
	/**
	 * Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified properties will be left unchanged. Note: Currently, only 'title' and 'url' are supported. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function( BookmarkTreeNode result) {...}; 
	 */
    export function update(id: string, changes: BookmarkChangesArg, callback?: (result: BookmarkTreeNode) => void): void;
	/**
	 * Removes a bookmark or an empty bookmark folder. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function() {...}; 
	 */
    export function remove(id: string, callback?: Function): void;
	/**
	 * Retrieves the children of the specified BookmarkTreeNode id. 
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
    export function getChildren(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Since Chrome 14. 
	 * Retrieves part of the Bookmarks hierarchy, starting at the specified node. 
	 * @param id The ID of the root of the subtree to retrieve. 
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
    export function getSubTree(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Recursively removes a bookmark folder. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function() {...}; 
	 */
    export function removeTree(id: string, callback?: Function): void;

	/** Fired when a bookmark or folder is removed. When a folder is removed recursively, a single notification is fired for the folder, and none for its contents. */
    var onRemoved: BookmarkRemovedEvent;
	/** Fired when a bookmark import session is ended. */
    var onImportEnded: BookmarkImportEndedEvent;
	/** Fired when a bookmark import session is begun. Expensive observers should ignore onCreated updates until onImportEnded is fired. Observers should still handle other notifications immediately. */
    var onImportBegan: BookmarkImportBeganEvent;
	/** Fired when a bookmark or folder changes. Note: Currently, only title and url changes trigger this. */
    var onChanged: BookmarkChangedEvent;
	/** Fired when a bookmark or folder is moved to a different parent folder. */
    var onMoved: BookmarkMovedEvent;
	/** Fired when a bookmark or folder is created. */
    var onCreated: BookmarkCreatedEvent;
	/** Fired when the children of a folder have changed their order due to the order being sorted in the UI. This is not called as a result of a move(). */
    var onChildrenReordered: BookmarkChildrenReordered;
}

////////////////////
// Browser Action
////////////////////
/**
 * Use browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar. In addition to its icon, a browser action can also have a tooltip, a badge, and a popup.
 * Availability: Since Chrome 5.  
 * Manifest:  "browser_action": {...}   
 */
declare module chrome.browserAction {
    interface BadgeBackgroundColorDetails {
		/** An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red is [255, 0, 0, 255]. Can also be a string with a CSS value, with opaque red being #FF0000 or #F00. */
        color: any;
		/** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
		tabId?: number;
    }

    interface BadgeTextDetails {
		/** Any number of characters can be passed, but only about four can fit in the space. */
        text: string;
		/** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
		tabId?: number;
    }

    interface TitleDetails {
		/** The string the browser action should display when moused over. */
        title: string;
		/** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
		tabId?: number;
    }

    interface TabDetails {
		/** Optional. Specify the tab to get the information. If no tab is specified, the non-tab-specific information is returned.  */
		tabId?: number;
    }

    interface TabIconDetails {
		/** Optional. Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'  */
		path?: any;
		/** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
		tabId?: number;
		/** Optional. Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'  */
		imageData?: ImageData;
    }

    interface PopupDetails {
		/** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
		tabId?: number;
		/** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string;
    }

    interface BrowserClickedEvent extends chrome.events.Event {
		/** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( tabs.Tab tab) {...}; 
		 */
        addListener(callback: (tab: chrome.tabs.Tab) => void): void;
    }

	/**
	 * Since Chrome 22. 
	 * Enables the browser action for a tab. By default, browser actions are enabled. 
	 * @param tabId The id of the tab for which you want to modify the browser action. 
	 */
    export function enable(tabId?: number): void;
	/** Sets the background color for the badge. */
    export function setBadgeBackgroundColor(details: BadgeBackgroundColorDetails): void;
	/** Sets the badge text for the browser action. The badge is displayed on top of the icon. */
    export function setBadgeText(details: BadgeTextDetails): void;
	/** Sets the title of the browser action. This shows up in the tooltip. */
    export function setTitle(details: TitleDetails): void;
	/**
	 * Since Chrome 19. 
	 * Gets the badge text of the browser action. If no tab is specified, the non-tab-specific badge text is returned. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(string result) {...}; 
	 */
    export function getBadgeText(details: TabDetails, callback: (result: string) => void): void;
	/** Sets the html document to be opened as a popup when the user clicks on the browser action's icon. */
    export function setPopup(details: PopupDetails): void;
	/**
	 * Since Chrome 22. 
	 * Disables the browser action for a tab. 
	 * @param tabId The id of the tab for which you want to modify the browser action. 
	 */
    export function disable(tabId?: number): void;
	/**
	 * Since Chrome 19. 
	 * Gets the title of the browser action. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(string result) {...}; 
	 */
    export function getTitle(details: TabDetails, callback: (result: string) => void): void;
	/**
	 * Since Chrome 19. 
	 * Gets the background color of the browser action. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function( ColorArray result) {...}; 
	 */
    export function getBadgeBackgroundColor(details: TabDetails, callback: (result: number[]) => void): void;
	/**
	 * Since Chrome 19. 
	 * Gets the html document set as the popup for this browser action. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(string result) {...}; 
	 */
    export function getPopup(details: TabDetails, callback: (result: string) => void): void;
	/**
	 * Sets the icon for the browser action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the path or the imageData property must be specified. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function setIcon(details: TabIconDetails, callback?: Function): void;

	/** Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup. */
    var onClicked: BrowserClickedEvent;
}

////////////////////
// Browsing Data
////////////////////
/**
 * Use the chrome.browsingData API to remove browsing data from a user's local profile. 
 * Availability: Since Chrome 19.  
 * Permissions:  "browsingData"   
 */
declare module chrome.browsingData {
    interface OriginTypes {
		/** Optional. Websites that have been installed as hosted applications (be careful!).  */
		protectedWeb?: boolean;
		/** Optional. Extensions and packaged applications a user has installed (be _really_ careful!).  */
		extension?: boolean;
		/** Optional. Normal websites.  */
		unprotectedWeb?: boolean;
    }

	/** Options that determine exactly what data will be removed. */
    interface RemovalOptions {
		/**
		 * Optional.
 		 * Since Chrome 21. 
		 * An object whose properties specify which origin types ought to be cleared. If this object isn't specified, it defaults to clearing only "unprotected" origins. Please ensure that you really want to remove application data before adding 'protectedWeb' or 'extensions'. 
		 */
		originTypes?: OriginTypes;
		/** Optional. Remove data accumulated on or after this date, represented in milliseconds since the epoch (accessible via the getTime method of the JavaScript Date object). If absent, defaults to 0 (which would remove all browsing data).  */
		since?: number;
    }

	/**
	 * Since Chrome 27. 
	 * A set of data types. Missing data types are interpreted as false.
	 */
    interface DataTypeSet {
		/** Optional. Websites' WebSQL data.  */
		webSQL?: boolean;
		/** Optional. Websites' IndexedDB data.  */
		indexedDB?: boolean;
		/** Optional. The browser's cookies.  */
		cookies?: boolean;
		/** Optional. Stored passwords.  */
		passwords?: boolean;
		/** Optional. Server-bound certificates.  */
		serverBoundCertificates?: boolean;
		/** Optional. The browser's download list.  */
		downloads?: boolean;
		/** Optional. The browser's cache. Note: when removing data, this clears the entire cache: it is not limited to the range you specify.  */
		cache?: boolean;
		/** Optional. Websites' appcaches.  */
		appcache?: boolean;
		/** Optional. Websites' file systems.  */
		fileSystems?: boolean;
		/** Optional. Plugins' data.  */
		pluginData?: boolean;
		/** Optional. Websites' local storage data.  */
		localStorage?: boolean;
		/** Optional. The browser's stored form data.  */
		formData?: boolean;
		/** Optional. The browser's history.  */
		history?: boolean;
		/**
		 * Optional.
 		 * Since Chrome 39. 
		 * Service Workers. 
		 */
		serviceWorkers?: boolean;
    }

	interface SettingsCallback {
		options: RemovalOptions;
		/** All of the types will be present in the result, with values of true if they are both selected to be removed and permitted to be removed, otherwise false. */
		dataToRemove: DataTypeSet;
		/** All of the types will be present in the result, with values of true if they are permitted to be removed (e.g., by enterprise policy) and false if not. */
		dataRemovalPermitted: DataTypeSet;
	}

	/**
	 * Since Chrome 26. 
	 * Reports which types of data are currently selected in the 'Clear browsing data' settings UI. Note: some of the data types included in this API are not available in the settings UI, and some UI settings control more than one data type listed here. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(object result) {...}; 
	 */
	export function settings(callback: (result: SettingsCallback) => void): void;
	/**
	 * Clears plugins' data. 
	 * @param callback Called when plugins' data has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removePluginData(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears the browser's stored form data (autofill). 
	 * @param callback Called when the browser's form data has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeFormData(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears websites' file system data. 
	 * @param callback Called when websites' file systems have been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeFileSystems(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears various types of browsing data stored in a user's profile. 
	 * @param dataToRemove The set of data types to remove. 
	 * @param callback Called when deletion has completed. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function remove(options: RemovalOptions, dataToRemove: DataTypeSet, callback?: () => void): void;
	/**
	 * Clears the browser's stored passwords. 
	 * @param callback Called when the browser's passwords have been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removePasswords(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears the browser's cookies and server-bound certificates modified within a particular timeframe. 
	 * @param callback Called when the browser's cookies and server-bound certificates have been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeCookies(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears websites' WebSQL data. 
	 * @param callback Called when websites' WebSQL databases have been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeWebSQL(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears websites' appcache data. 
	 * @param callback Called when websites' appcache data has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeAppcache(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears the browser's list of downloaded files (not the downloaded files themselves). 
	 * @param callback Called when the browser's list of downloaded files has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeDownloads(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears websites' local storage data. 
	 * @param callback Called when websites' local storage has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeLocalStorage(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears the browser's cache. 
	 * @param callback Called when the browser's cache has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeCache(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears the browser's history. 
	 * @param callback Called when the browser's history has cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeHistory(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears websites' IndexedDB data. 
	 * @param callback Called when websites' IndexedDB data has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeIndexedDB(options: RemovalOptions, callback?: () => void): void;
}

////////////////////
// Commands
////////////////////
/**
 * Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example, an action to open the browser action or send a command to the extension. 
 * Availability: Since Chrome 25.  
 * Manifest:  "commands": {...}   
 */
declare module chrome.commands {
	interface Command {
		/** Optional. The name of the Extension Command  */
		name?: string;
		/** Optional. The Extension Command description  */
		description?: string;
		/** Optional. The shortcut active for this command, or blank if not active.  */
		shortcut?: string;
	}

    interface CommandEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string command) {...}; 
		 */
        addListener(callback: (command: string) => void): void;
    }
	
	/**
	 * Returns all the registered extension commands for this extension and their shortcut (if active). 
	 * @param callback Called to return the registered commands. 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function(array of Command commands) {...}; 
	 */
	export function getAll(callback: (commands: Command[]) => void): void;

	/** Fired when a registered command is activated using a keyboard shortcut. */
    var onCommand: CommandEvent;
}

////////////////////
// Content Settings
////////////////////
/**
 * Use the chrome.contentSettings API to change settings that control whether websites can use features such as cookies, JavaScript, and plugins. More generally speaking, content settings allow you to customize Chrome's behavior on a per-site basis instead of globally. 
 * Availability: Since Chrome 16.  
 * Permissions:  "contentSettings"   
 */
declare module chrome.contentSettings {
    interface ClearDetails {
		/**
		 * Optional.
 		 * Where to clear the setting (default: regular). 
		 * The scope of the ContentSetting. One of
		 * * regular: setting for regular profile (which is inherited by the incognito profile if not overridden elsewhere),
		 * * incognito_session_only: setting for incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular settings).
		 */
		scope?: string;
    }

    interface SetDetails {
		/** Optional. The resource identifier for the content type.  */
		resourceIdentifier?: ResourceIdentifier;
		/** The setting applied by this rule. See the description of the individual ContentSetting objects for the possible values. */
        setting: any;
		/** Optional. The pattern for the secondary URL. Defaults to matching all URLs. For details on the format of a pattern, see Content Setting Patterns.  */
		secondaryPattern?: string;
		/** Optional. Where to set the setting (default: regular).  */
		scope?: string;
		/** The pattern for the primary URL. For details on the format of a pattern, see Content Setting Patterns. */
        primaryPattern: string;
    }

    interface GetDetails {
		/** Optional. The secondary URL for which the content setting should be retrieved. Defaults to the primary URL. Note that the meaning of a secondary URL depends on the content type, and not all content types use secondary URLs.  */
		secondaryUrl?: string;
		/** Optional. A more specific identifier of the type of content for which the settings should be retrieved.  */
		resourceIdentifier?: ResourceIdentifier;
		/** Optional. Whether to check the content settings for an incognito session. (default false)  */
		incognito?: boolean;
		/** The primary URL for which the content setting should be retrieved. Note that the meaning of a primary URL depends on the content type. */
        primaryUrl: string;
    }

    interface ReturnedDetails {
		/** The content setting. See the description of the individual ContentSetting objects for the possible values. */
        setting: any;
    }

    interface ContentSetting {
		/**
		 * Clear all content setting rules set by this extension. 
		 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
		 * function() {...}; 
		 */
        clear(details: ClearDetails, callback?: () => void): void;
		/**
		 * Applies a new content setting rule. 
		 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
		 * function() {...}; 
		 */
        set(details: SetDetails, callback?: () => void): void;
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(array of ResourceIdentifier resourceIdentifiers) {...}; 
		 * Parameter resourceIdentifiers: A list of resource identifiers for this content type, or undefined if this content type does not use resource identifiers. 
		 */
        getResourceIdentifiers(callback: (resourceIdentifiers?: ResourceIdentifier[]) => void): void;
		/**
		 * Gets the current content setting for a given pair of URLs. 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object details) {...}; 
		 */
        get(details: GetDetails, callback: (details: ReturnedDetails) => void): void;
    }

	/** The only content type using resource identifiers is contentSettings.plugins. For more information, see Resource Identifiers. */
    interface ResourceIdentifier {
		/** The resource identifier for the given content type. */
        id: string;
		/** Optional. A human readable description of the resource.  */
		description?: string;
    }

	/**
	 * Whether to allow cookies and other local data to be set by websites. One of
	 * allow: Accept cookies,
	 * block: Block cookies,
	 * session_only: Accept cookies only for the current session. 
	 * Default is allow.
	 * The primary URL is the URL representing the cookie origin. The secondary URL is the URL of the top-level frame. 
	 */
    var cookies: ContentSetting;
	/**
	 * Whether to allow sites to show pop-ups. One of
	 * allow: Allow sites to show pop-ups,
	 * block: Don't allow sites to show pop-ups.
	 * Default is block.
	 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
	 */
    var popups: ContentSetting;
	/**
	 * Whether to run JavaScript. One of
	 * allow: Run JavaScript,
	 * block: Don't run JavaScript. 
	 * Default is allow.
	 * The primary URL is the URL of the top-level frame. The secondary URL is not used. 
	 */
    var javascript: ContentSetting;
	/**
	 * Whether to allow sites to show desktop notifications. One of
	 * allow: Allow sites to show desktop notifications,
	 * block: Don't allow sites to show desktop notifications,
	 * ask: Ask when a site wants to show desktop notifications.
	 * Default is ask.
	 * The primary URL is the URL of the document which wants to show the notification. The secondary URL is not used. 
	 */
    var notifications: ContentSetting;
	/**
	 * Whether to run plugins. One of
	 * allow: Run plugins automatically,
	 * block: Don't run plugins automatically,
	 * detect_important_content: Only run automatically those plugins that are detected as the website's main content.
	 * Default is allow.
	 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
	 */
    var plugins: ContentSetting;
	/**
	 * Whether to show images. One of
	 * allow: Show images,
	 * block: Don't show images. 
	 * Default is allow.
	 * The primary URL is the URL of the top-level frame. The secondary URL is the URL of the image. 
	 */
    var images: ContentSetting;
	/**
	 * Since Chrome 42. 
	 * Whether to allow Geolocation. One of 
	 * allow: Allow sites to track your physical location,
	 * block: Don't allow sites to track your physical location,
	 * ask: Ask before allowing sites to track your physical location.
	 * Default is ask.
	 * The primary URL is the URL of the document which requested location data. The secondary URL is the URL of the top-level frame (which may or may not differ from the requesting URL). 
	 */
	var location: ContentSetting;
	/**
	 * Since Chrome 42. 
	 * Whether to allow sites to toggle the fullscreen mode. One of
	 * allow: Allow sites to toggle the fullscreen mode,
	 * ask: Ask when a site wants to toggle the fullscreen mode.
	 * Default is ask.
	 * The primary URL is the URL of the document which requested to toggle the fullscreen mode. The secondary URL is the URL of the top-level frame (which may or may not differ from the requesting URL).
	 */
	var fullscreen: ContentSetting;
	/**
	 * Since Chrome 42.
	 * Whether to allow sites to disable the mouse cursor. One of
	 * allow: Allow sites to disable the mouse cursor,
	 * block: Don't allow sites to disable the mouse cursor,
	 * ask: Ask when a site wants to disable the mouse cursor.
	 * Default is ask.
	 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
	 */
	var mouselock: ContentSetting;
	/**
	 * Since Chrome 42. 
	 * Whether to allow sites to run plugins unsandboxed. One of
	 * allow: Allow sites to run plugins unsandboxed,
	 * block: Don't allow sites to run plugins unsandboxed,
	 * ask: Ask when a site wants to run a plugin unsandboxed.
	 * Default is ask.
	 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
	 */
	var unsandboxedPlugins: ContentSetting;
	/**
	 * Since Chrome 42. 
	 * Whether to allow sites to download multiple files automatically. One of
	 * allow: Allow sites to download multiple files automatically,
	 * block: Don't allow sites to download multiple files automatically,
	 * ask: Ask when a site wants to download files automatically after the first file.
	 * Default is ask.
	 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
	 */
	var automaticDownloads: ContentSetting;
}

////////////////////
// Context Menus
////////////////////
/**
 * Use the chrome.contextMenus API to add items to Google Chrome's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.
 * Availability: Since Chrome 6. 
 * Permissions:  "contextMenus" 
 */
declare module chrome.contextMenus {
    interface OnClickData {
		/**
		 * Optional.
 		 * Since Chrome 35.
		 * The text for the context selection, if any. 
		 */
		selectionText?: string;
		/**
		 * Optional.
 		 * Since Chrome 35.
		 * A flag indicating the state of a checkbox or radio item after it is clicked.
		 */
		checked?: boolean;
		/**
		 * Since Chrome 35.
		 * The ID of the menu item that was clicked.
		 */
        menuItemId: any;
		/**
		 * Optional.
 		 * Since Chrome 35.
		 * The URL of the frame of the element where the context menu was clicked, if it was in a frame.
		 */
		frameUrl?: string;
		/**
		 * Since Chrome 35.
		 * A flag indicating whether the element is editable (text input, textarea, etc.).
		 */
        editable: boolean;
		/**
		 * Optional.
 		 * Since Chrome 35. 
		 * One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.
		 */
		mediaType?: string;
		/**
		 * Optional.
 		 * Since Chrome 35.
		 * A flag indicating the state of a checkbox or radio item before it was clicked.
		 */
		wasChecked?: boolean;
		/**
		 * Since Chrome 35. 
		 * The URL of the page where the menu item was clicked. This property is not set if the click occured in a context where there is no current page, such as in a launcher context menu. 
		 */
        pageUrl: string;
		/**
		 * Optional.
 		 * Since Chrome 35.
		 * If the element is a link, the URL it points to. 
		 */
		linkUrl?: string;
		/**
		 * Optional.
 		 * Since Chrome 35.
		 * The parent ID, if any, for the item clicked.
		 */
		parentMenuItemId?: any;
		/**
		 * Optional.
 		 * Since Chrome 35. 
		 * Will be present for elements with a 'src' URL.
		 */
		srcUrl?: string;
    }

    interface CreateProperties {
		/** Optional. Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see Match Patterns.  */
		documentUrlPatterns?: string[];
		/** Optional. The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items.  */
		checked?: boolean;
		/** Optional. The text to be displayed in the item; this is required unless type is 'separator'. When the context is 'selection', you can use %s within the string to show the selected text. For example, if this parameter's value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the selection is "Translate 'cool' to Pig Latin".  */
		title?: string;
		/** Optional. List of contexts this menu item will appear in. Defaults to ['page'] if not specified.  */
		contexts?: string[];
		/**
		 * Optional.
 		 * Since Chrome 20. 
		 * Whether this context menu item is enabled or disabled. Defaults to true. 
		 */
		enabled?: boolean;
		/** Optional. Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.  */
		targetUrlPatterns?: string[];
		/**
		 * Optional.
 		 * A function that will be called back when the menu item is clicked. Event pages cannot use this; instead, they should register a listener for chrome.contextMenus.onClicked. 
		 * @param info Information sent when a context menu item is clicked. 
		 * @param tab The details of the tab where the click took place. Note: this parameter only present for extensions. 
		 */
		onclick?: (info: OnClickData, tab: chrome.tabs.Tab) => void;
		/** Optional. The ID of a parent menu item; this makes the item a child of a previously added item.  */
		parentId?: any;
		/** Optional. The type of menu item. Defaults to 'normal' if not specified.  */
		type?: string;
		/**
		 * Optional.
 		 * Since Chrome 21. 
		 * The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension.
		 */
		id?: string;
    }

	interface UpdateProperties {
        documentUrlPatterns?: string[];
        checked?: boolean;
        title?: string;
        contexts?: string[];
		/** Optional. Since Chrome 20.  */
		enabled?: boolean;
        targetUrlPatterns?: string[];
        onclick?: Function;
		/** Optional. Note: You cannot change an item to be a child of one of its own descendants.  */
		parentId?: any;
        type?: string;
    }

    interface MenuClickedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object info, tabs.Tab tab) {...}; 
		 * Parameter info: Information sent when a context menu item is clicked. 
		 * Parameter tab: The details of the tab where the click took place. If the click did not take place in a tab, this parameter will be missing. 
		 */
        addListener(callback: (info: OnClickData, tab?: chrome.tabs.Tab) => void): void;
    }
	
	/**
	 * Since Chrome 38. 
	 * The maximum number of top level extension items that can be added to an extension action context menu. Any items beyond this limit will be ignored. 
	 */
	var ACTION_MENU_TOP_LEVEL_LIMIT: number;

    /**
	 * Removes all context menu items added by this extension. 
	 * @param callback Called when removal is complete. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeAll(callback?: () => void): void;
	/**
	 * Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in chrome.runtime.lastError).
	 * @param callback Called when the item has been created in the browser. If there were any problems creating the item, details will be available in chrome.runtime.lastError. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function create(createProperties: CreateProperties, callback?: () => void): void;
	/**
	 * Updates a previously created context menu item. 
	 * @param id The ID of the item to update. 
	 * @param updateProperties The properties to update. Accepts the same values as the create function. 
	 * @param callback Called when the context menu has been updated. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function update(id: string, updateProperties: UpdateProperties, callback?: () => void): void;
	/**
	 * Updates a previously created context menu item. 
	 * @param id The ID of the item to update. 
	 * @param updateProperties The properties to update. Accepts the same values as the create function. 
	 * @param callback Called when the context menu has been updated. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function update(id: number, updateProperties: UpdateProperties, callback?: () => void): void;
	/**
	 * Removes a context menu item. 
	 * @param menuItemId The ID of the context menu item to remove. 
	 * @param callback Called when the context menu has been removed. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function remove(menuItemId: string, callback?: () => void): void;
	/**
	 * Removes a context menu item. 
	 * @param menuItemId The ID of the context menu item to remove. 
	 * @param callback Called when the context menu has been removed. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function remove(menuItemId: number, callback?: () => void): void;

	/**
	 * Since Chrome 21. 
	 * Fired when a context menu item is clicked. 
	 */
    var onClicked: MenuClickedEvent;
}

////////////////////
// Cookies
////////////////////
/**
 * Use the chrome.cookies API to query and modify cookies, and to be notified when they change.
 * Availability: Since Chrome 6.  
 * Permissions:  "cookies", host permissions   
 */
declare module chrome.cookies {
	/** Represents information about an HTTP cookie. */
    interface Cookie {
		/** The domain of the cookie (e.g. "www.google.com", "example.com"). */
        domain: string;
		/** The name of the cookie. */
        name: string;
		/** The ID of the cookie store containing this cookie, as provided in getAllCookieStores(). */
        storeId: string;
		/** The value of the cookie. */
        value: string;
		/** True if the cookie is a session cookie, as opposed to a persistent cookie with an expiration date. */
        session: boolean;
		/** True if the cookie is a host-only cookie (i.e. a request's host must exactly match the domain of the cookie). */
        hostOnly: boolean;
		/** Optional. The expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session cookies.  */
		expirationDate?: number;
		/** The path of the cookie. */
        path: string;
		/** True if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to client-side scripts). */
        httpOnly: boolean;
		/** True if the cookie is marked as Secure (i.e. its scope is limited to secure channels, typically HTTPS). */
        secure: boolean;
    }

	/** Represents a cookie store in the browser. An incognito mode window, for instance, uses a separate cookie store from a non-incognito window. */
    interface CookieStore {
		/** The unique identifier for the cookie store. */
        id: string;
		/** Identifiers of all the browser tabs that share this cookie store. */
        tabIds: number[];
    }

    interface GetAllDetails {
		/** Optional. Restricts the retrieved cookies to those whose domains match or are subdomains of this one.  */
		domain?: string;
		/** Optional. Filters the cookies by name.  */
		name?: string;
		/** Optional. Restricts the retrieved cookies to those that would match the given URL.  */
		url?: string;
		/** Optional. The cookie store to retrieve cookies from. If omitted, the current execution context's cookie store will be used.  */
		storeId?: string;
		/** Optional. Filters out session vs. persistent cookies.  */
		session?: boolean;
		/** Optional. Restricts the retrieved cookies to those whose path exactly matches this string.  */
		path?: string;
		/** Optional. Filters the cookies by their Secure property.  */
		secure?: boolean;
    }

    interface SetDetails {
		/** Optional. The domain of the cookie. If omitted, the cookie becomes a host-only cookie.  */
		domain?: string;
		/** Optional. The name of the cookie. Empty by default if omitted.  */
		name?: string;
		/** The request-URI to associate with the setting of the cookie. This value can affect the default domain and path values of the created cookie. If host permissions for this URL are not specified in the manifest file, the API call will fail. */
        url: string;
		/** Optional. The ID of the cookie store in which to set the cookie. By default, the cookie is set in the current execution context's cookie store.  */
		storeId?: string;
		/** Optional. The value of the cookie. Empty by default if omitted.  */
		value?: string;
		/** Optional. The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted, the cookie becomes a session cookie.  */
		expirationDate?: number;
		/** Optional. The path of the cookie. Defaults to the path portion of the url parameter.  */
		path?: string;
		/** Optional. Whether the cookie should be marked as HttpOnly. Defaults to false.  */
		httpOnly?: boolean;
		/** Optional. Whether the cookie should be marked as Secure. Defaults to false.  */
		secure?: boolean;
    }

    interface Details {
        name: string;
        url: string;
        storeId?: string;
    }

    interface CookieChangeInfo {
		/** Information about the cookie that was set or removed. */
        cookie: Cookie;
		/** True if a cookie was removed. */
        removed: boolean;
		/** 
		 * Since Chrome 12. 
		 * The underlying reason behind the cookie's change. 
		 */
        cause: string;
    }

    interface CookieChangedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this:
		 * function(object changeInfo) {...};
		 */
        addListener(callback: (changeInfo: CookieChangeInfo) => void): void;
    }

	/**
	 * Lists all existing cookie stores. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of CookieStore cookieStores) {...}; 
	 * Parameter cookieStores: All the existing cookie stores. 
	 */
    export function getAllCookieStores(callback: (cookieStores: CookieStore[]) => void): void;
	/**
	 * Retrieves all cookies from a single cookie store that match the given information. The cookies returned will be sorted, with those with the longest path first. If multiple cookies have the same path length, those with the earliest creation time will be first. 
	 * @param details Information to filter the cookies being retrieved. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of Cookie cookies) {...}; 
	 * Parameter cookies: All the existing, unexpired cookies that match the given cookie info. 
	 */
    export function getAll(details: GetAllDetails, callback: (cookies: Cookie[]) => void): void;
	/**
	 * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist. 
	 * @param details Details about the cookie being set. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function( Cookie cookie) {...}; 
	 * Optional parameter cookie: Contains details about the cookie that's been set. If setting failed for any reason, this will be "null", and "chrome.runtime.lastError" will be set. 
	 */
    export function set(details: SetDetails, callback?: (cookie?: Cookie) => void): void;
	/**
	 * Deletes a cookie by name. 
	 * @param details Information to identify the cookie to remove. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function(object details) {...}; 
	 */
    export function remove(details: Details, callback?: (details: Details) => void): void;
	/**
	 * Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL, the one with the longest path will be returned. For cookies with the same path length, the cookie with the earliest creation time will be returned.
	 * @param details Details to identify the cookie being retrieved. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function( Cookie cookie) {...}; 
	 * Parameter cookie: Contains details about the cookie. This parameter is null if no such cookie was found. 
	 */
    export function get(details: Details, callback: (cookie?: Cookie) => void): void;

	/** Fired when a cookie is set or removed. As a special case, note that updating a cookie's properties is implemented as a two step process: the cookie to be updated is first removed entirely, generating a notification with "cause" of "overwrite" . Afterwards, a new cookie is written with the updated values, generating a second notification with "cause" "explicit". */
    var onChanged: CookieChangedEvent;
}

////////////////////
// Debugger
////////////////////
/**
 * The chrome.debugger API serves as an alternate transport for Chrome's remote debugging protocol. Use chrome.debugger to attach to one or more tabs to instrument network interaction, debug JavaScript, mutate the DOM and CSS, etc. Use the Debuggee tabId to target tabs with sendCommand and route events by tabId from onEvent callbacks. 
 * Availability: Since Chrome 18. 
 * Permissions:  "debugger" 
 */
declare module "chrome.debugger" {
	/** Debuggee identifier. Either tabId or extensionId must be specified */
    interface Debuggee {
		/** Optional. The id of the tab which you intend to debug.  */
		tabId?: number;
		/**
		 * Optional.
 		 * Since Chrome 27. 
		 * The id of the extension which you intend to debug. Attaching to an extension background page is only possible when 'silent-debugger-extension-api' flag is enabled on the target browser. 
		 */
		extensionId?: string;
		/**
		 * Optional.
 		 * Since Chrome 28.
		 * The opaque id of the debug target.
		 */
		targetId?: string;
    }
	
	/**
	 * Since Chrome 28. 
	 * Debug target information
	 */
	interface TargetInfo {
		/** Target type. */
		type: string;
		/** Target id. */
		id: string;
		/**
		 * Optional.
 		 * Since Chrome 30. 
		 * The tab id, defined if type == 'page'. 
		 */
		tabId?: number;
		/**
		 * Optional.
 		 * Since Chrome 30. 
		 * The extension id, defined if type = 'background_page'. 
		 */
		extensionId?: string;
		/** True if debugger is already attached. */
		attached: boolean;
		/** Target page title. */
		title: string;
		/** Target URL. */
		url: string;
		/** Optional. Target favicon URL.  */
		faviconUrl?: string;
	}

    interface DebuggerDetachedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( Debuggee source, DetachReason reason) {...}; 
		 * Parameter source: The debuggee that was detached. 
		 * Parameter reason: Since Chrome 24. Connection termination reason. 
		 */
        addListener(callback: (source: Debuggee, reason: string) => void): void;
    }

    interface DebuggerEventEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( Debuggee source, string method, object params) {...}; 
		 * Parameter source: The debuggee that generated this event. 
		 * Parameter method: Method name. Should be one of the notifications defined by the remote debugging protocol. 
		 * Parameter params: JSON object with the parameters. Structure of the parameters varies depending on the method name and is defined by the 'parameters' attribute of the event description in the remote debugging protocol. 
		 */
        addListener(callback: (source: Debuggee, method: string, params?: Object) => void): void;
    }

	/**
	 * Attaches debugger to the given target. 
	 * @param target Debugging target to which you want to attach. 
	 * @param requiredVersion Required debugging protocol version ("0.1"). One can only attach to the debuggee with matching major version and greater or equal minor version. List of the protocol versions can be obtained in the documentation pages.
	 * @param callback Called once the attach operation succeeds or fails. Callback receives no arguments. If the attach fails, runtime.lastError will be set to the error message. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function attach(target: Debuggee, requiredVersion: string, callback?: () => void): void;
	/**
	 * Detaches debugger from the given target. 
	 * @param target Debugging target from which you want to detach. 
	 * @param callback Called once the detach operation succeeds or fails. Callback receives no arguments. If the detach fails, runtime.lastError will be set to the error message. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function detach(target: Debuggee, callback?: () => void): void;
	/**
	 * Sends given command to the debugging target. 
	 * @param target Debugging target to which you want to send the command. 
	 * @param method Method name. Should be one of the methods defined by the remote debugging protocol. 
	 * @param commandParams Since Chrome 22. 
	 * JSON object with request parameters. This object must conform to the remote debugging params scheme for given method. 
	 * @param callback Response body. If an error occurs while posting the message, the callback will be called with no arguments and runtime.lastError will be set to the error message. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function(object result) {...}; 
	 */
    export function sendCommand(target: Debuggee, method: string, commandParams?: Object, callback?: (result?: Object) => void): void;
	/**
	 * Since Chrome 28. 
	 * Returns the list of available debug targets. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of TargetInfo result) {...}; 
	 * Parameter result: Array of TargetInfo objects corresponding to the available debug targets. 
	 */
	export function getTargets(callback: (result: TargetInfo[]) => void): void;

	/** Fired when browser terminates debugging session for the tab. This happens when either the tab is being closed or Chrome DevTools is being invoked for the attached tab. */
    var onDetach: DebuggerDetachedEvent;
	/** Fired whenever debugging target issues instrumentation event. */
    var onEvent: DebuggerEventEvent;
}

////////////////////
// Declarative Content
////////////////////
/**
 * Use the chrome.declarativeContent API to take actions depending on the content of a page, without requiring permission to read the page's content. 
 * Availability: Since Chrome 33.  
 * Permissions:  "declarativeContent"   
 */
declare module chrome.declarativeContent {
	interface PageStateUrlDetails {
		/** Optional. Matches if the host name of the URL contains a specified string. To test whether a host name component has a prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the beginning of the host name. Similarly, hostContains can be used to match against component suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last components need to be done separately using hostSuffix, because no implicit dot is added at the end of the host name.  */
		hostContains?: string;
		/** Optional. Matches if the host name of the URL is equal to a specified string.  */
		hostEquals?: string;
		/** Optional. Matches if the host name of the URL starts with a specified string.  */
		hostPrefix?: string;
		/** Optional. Matches if the host name of the URL ends with a specified string.  */
		hostSuffix?: string;
		/** Optional. Matches if the path segment of the URL contains a specified string.  */
		pathContains?: string;
		/** Optional. Matches if the path segment of the URL is equal to a specified string.  */
		pathEquals?: string;
		/** Optional. Matches if the path segment of the URL starts with a specified string.  */
		pathPrefix?: string;
		/** Optional. Matches if the path segment of the URL ends with a specified string.  */
		pathSuffix?: string;
		/** Optional. Matches if the query segment of the URL contains a specified string.  */
		queryContains?: string;
		/** Optional. Matches if the query segment of the URL is equal to a specified string.  */
		queryEquals?: string;
		/** Optional. Matches if the query segment of the URL starts with a specified string.  */
		queryPrefix?: string;
		/** Optional. Matches if the query segment of the URL ends with a specified string.  */
		querySuffix?: string;
		/** Optional. Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number.  */
		urlContains?: string;
		/** Optional. Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number.  */
		urlEquals?: string;
		/** Optional. Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.  */
		urlMatches?: string;
		/** Optional. Matches if the URL without query segment and fragment identifier matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.  */
		originAndPathMatches?: string;
		/** Optional. Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
		urlPrefix?: string;
		/** Optional. Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
		urlSuffix?: string;
		/** Optional. Matches if the scheme of the URL is equal to any of the schemes specified in the array.  */
		schemes?: string[];
		/** Optional. Matches if the port of the URL is contained in any of the specified port lists. For example [80, 443, [1000, 1200]] matches all requests on port 80, 443 and in the range 1000-1200.  */
		port?: any[];
	}
	
	/** Matches the state of a web page by various criteria. */
	interface PageStateMatcher {
		/** Optional. Filters URLs for various criteria. See event filtering. All criteria are case sensitive.  */
		pageUrl?: PageStateUrlDetails;
		/** Optional. Matches if all of the CSS selectors in the array match displayed elements in a frame with the same origin as the page's main frame. All selectors in this array must be compound selectors to speed up matching. Note that listing hundreds of CSS selectors or CSS selectors that match hundreds of times per page can still slow down web sites.  */
		css?: string[];
		/**
		 * Optional.
 		 * Since Chrome 45. Warning: this is the current Beta channel. More information available on the API documentation pages.
		 * Matches if the bookmarked state of the page is equal to the specified value. Requres the bookmarks permission. 
		 */
		isBookmarked?: boolean;
	}
}

////////////////////
// Declarative Web Request
////////////////////
declare module chrome.declarativeWebRequest {
    interface HeaderFilter {
        nameEquals?: string;
        valueContains?: any;
        nameSuffix?: string;
        valueSuffix?: string;
        valuePrefix?: string;
        nameContains?: any;
        valueEquals?: string;
        namePrefix?: string;
    }

    interface AddResponseHeader {
        name: string;
        value: string;
    }

    interface RemoveResponseCookie {
        filter: ResponseCookie;
    }

    interface RemoveResponseHeader {
        name: string;
        value?: string;
    }

    interface RequestMatcher {
        contentType?: string[];
        url?: chrome.events.UrlFilter;
        excludeContentType?: string[];
        excludeResponseHeader?: HeaderFilter[];
        resourceType?: string;
        responseHeaders?: HeaderFilter[];
    }

    interface IgnoreRules {
        lowerPriorityThan: number;
    }

    interface RedirectToEmptyDocument { }

    interface RedirectRequest {
        redirectUrl: string;
    }

    interface ResponseCookie {
        domain?: string;
        name?: string;
        expires?: string;
        maxAge?: number;
        value?: string;
        path?: string;
        httpOnly?: string;
        secure?: string;
    }

    interface AddResponseCookie {
        cookie: ResponseCookie;
    }

    interface EditResponseCookie {
        filter: ResponseCookie;
        modification: ResponseCookie;
    }

    interface CancelRequest { }

    interface RemoveRequestHeader {
        name: string;
    }

    interface EditRequestCookie {
        filter: RequestCookie;
        modification: RequestCookie;
    }

    interface SetRequestHeader {
        name: string;
        value: string;
    }

    interface RequestCookie {
        name?: string;
        value?: string;
    }

    interface RedirectByRegEx {
        to: string;
        from: string;
    }

    interface RedirectToTransparentImage { }

    interface AddRequestCookie {
        cookie: RequestCookie;
    }

    interface RemoveRequestCookie {
        filter: RequestCookie;
    }

    interface RequestedEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    var onRequest: RequestedEvent;
}

////////////////////
// DesktopCapture
////////////////////
/**
 * Desktop Capture API that can be used to capture content of screen, individual windows or tabs. 
 * Availability: Since Chrome 34. 
 * Permissions:  "desktopCapture"    
 */
declare module chrome.desktopCapture {
	/**
	 * Shows desktop media picker UI with the specified set of sources. 
	 * @param sources Set of sources that should be shown to the user. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(string streamId) {...}; 
	 * Parameter streamId: An opaque string that can be passed to getUserMedia() API to generate media stream that corresponds to the source selected by the user. If user didn't select any source (i.e. canceled the prompt) then the callback is called with an empty streamId. The created streamId can be used only once and expires after a few seconds when it is not used. 
	 */
    export function chooseDesktopMedia(sources: string[], callback: (streamId: string) => void): number;
	/**
	 * Shows desktop media picker UI with the specified set of sources. 
	 * @param sources Set of sources that should be shown to the user. 
	 * @param targetTab Optional tab for which the stream is created. If not specified then the resulting stream can be used only by the calling extension. The stream can only be used by frames in the given tab whose security origin matches tab.url. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(string streamId) {...}; 
	 * Parameter streamId: An opaque string that can be passed to getUserMedia() API to generate media stream that corresponds to the source selected by the user. If user didn't select any source (i.e. canceled the prompt) then the callback is called with an empty streamId. The created streamId can be used only once and expires after a few seconds when it is not used. 
	 */
    export function chooseDesktopMedia(sources: string[], targetTab: chrome.tabs.Tab, callback: (streamId: string) => void): number;
	/**
	 * Hides desktop media picker dialog shown by chooseDesktopMedia(). 
	 * @param desktopMediaRequestId Id returned by chooseDesktopMedia() 
	 */
    export function cancelChooseDesktopMedia(desktopMediaRequestId: number): void;
}

////////////////////
// Dev Tools - Inspected Window
////////////////////
/**
 * Use the chrome.devtools.inspectedWindow API to interact with the inspected window: obtain the tab ID for the inspected page, evaluate the code in the context of the inspected window, reload the page, or obtain the list of resources within the page. 
 * Availability: Since Chrome 18.  
 */
declare module chrome.devtools.inspectedWindow {
	/** A resource within the inspected page, such as a document, a script, or an image. */
    interface Resource {
		/** The URL of the resource. */
        url: string;
		/** 
		 * Gets the content of the resource.
		 * @param callback A function that receives resource content when the request completes.
		 * The callback parameter should be a function that looks like this: 
		 * function(string content, string encoding) {...}; 
		 * Parameter content: Content of the resource (potentially encoded). 
		 * Parameter encoding: Empty if content is not encoded, encoding name otherwise. Currently, only base64 is supported. 
		 */
        getContent(callback: (content: string, encoding: string) => void): void;
		/**
		 * Sets the content of the resource. 
		 * @param content New content of the resource. Only resources with the text type are currently supported. 
		 * @param commit True if the user has finished editing the resource, and the new content of the resource should be persisted; false if this is a minor change sent in progress of the user editing the resource. 
		 * @param callback A function called upon request completion. 
		 * If you specify the callback parameter, it should be a function that looks like this: 
		 * function(object error) {...}; 
		 * Optional parameter error: Set to undefined if the resource content was set successfully; describes error otherwise.
		 */
        setContent(content: string, commit: boolean, callback?: (error: Object) => void): void;
    }

    interface ReloadOptions {
		/** Optional. If specified, the string will override the value of the User-Agent HTTP header that's sent while loading the resources of the inspected page. The string will also override the value of the navigator.userAgent property that's returned to any scripts that are running within the inspected page.  */
		userAgent?: string;
		/** Optional. When true, the loader will ignore the cache for all inspected page resources loaded before the load event is fired. The effect is similar to pressing Ctrl+Shift+R in the inspected window or within the Developer Tools window.  */
		ignoreCache?: boolean;
		/** Optional. If specified, the script will be injected into every frame of the inspected page immediately upon load, before any of the frame's scripts. The script will not be injected after subsequent reloads—for example, if the user presses Ctrl+R.  */
		injectedScript?: boolean;
		/**
		 * Optional.
 		 * If specified, this script evaluates into a function that accepts three string arguments: the source to preprocess, the URL of the source, and a function name if the source is an DOM event handler. The preprocessorerScript function should return a string to be compiled by Chrome in place of the input source. In the case that the source is a DOM event handler, the returned source must compile to a single JS function. 
		 * @deprecated Deprecated since Chrome 41. Please avoid using this parameter, it will be removed soon. 
		 */
		preprocessorScript?: string;
    }

	interface EvaluationExceptionInfo {
		/** Set if the error occurred on the DevTools side before the expression is evaluated. */
		isError: boolean;
		/** Set if the error occurred on the DevTools side before the expression is evaluated. */
		code: string;
		/** Set if the error occurred on the DevTools side before the expression is evaluated. */
		description: string;
		/** Set if the error occurred on the DevTools side before the expression is evaluated, contains the array of the values that may be substituted into the description string to provide more information about the cause of the error. */
		details: any[];
		/** Set if the evaluated code produces an unhandled exception. */
		isException: boolean;
		/** Set if the evaluated code produces an unhandled exception. */
		value: string;
	}

    interface ResourceAddedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( Resource resource) {...}; 
		 */
        addListener(callback: (resource: Resource) => void): void;
    }

    interface ResourceContentCommittedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( Resource resource, string content) {...}; 
		 * Parameter content: New content of the resource. 
		 */
        addListener(callback: (resource: Resource, content: string) => void): void;
    }

	/** The ID of the tab being inspected. This ID may be used with chrome.tabs.* API. */
    var tabId: number;

	/** Reloads the inspected page. */
    export function reload(reloadOptions: ReloadOptions): void;
	/**
	 * Evaluates a JavaScript expression in the context of the main frame of the inspected page. The expression must evaluate to a JSON-compliant object, otherwise an exception is thrown. The eval function can report either a DevTools-side error or a JavaScript exception that occurs during evaluation. In either case, the result parameter of the callback is undefined. In the case of a DevTools-side error, the isException parameter is non-null and has isError set to true and code set to an error code. In the case of a JavaScript error, isException is set to true and value is set to the string value of thrown object. 
	 * @param expression An expression to evaluate. 
	 * @param callback A function called when evaluation completes. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function(object result, object exceptionInfo) {...}; 
	 * Parameter result: The result of evaluation. 
	 * Parameter exceptionInfo: An object providing details if an exception occurred while evaluating the expression. 
	 */
    export function eval(expression: string, callback?: (result: Object, exceptionInfo: EvaluationExceptionInfo) => void): void;
	/**
	 * Retrieves the list of resources from the inspected page. 
	 * @param callback A function that receives the list of resources when the request completes. 
	 * The callback parameter should be a function that looks like this: 
	 * function(array of Resource resources) {...}; 
	 */
    export function getResources(callback: (resources: Resource[]) => void): void;

	/** Fired when a new resource is added to the inspected page. */
    var onResourceAdded: ResourceAddedEvent;
	/** Fired when a new revision of the resource is committed (e.g. user saves an edited version of the resource in the Developer Tools). */
    var onResourceContentCommitted: ResourceContentCommittedEvent;
}

////////////////////
// Dev Tools - Network
////////////////////
/**
 * Use the chrome.devtools.network API to retrieve the information about network requests displayed by the Developer Tools in the Network panel. 
 * Availability: Since Chrome 18.  
 */
declare module chrome.devtools.network {
	/** Represents a network request for a document resource (script, image and so on). See HAR Specification for reference. */
    interface Request {
		/** 
		 * Returns content of the response body.
		 * @param callback A function that receives the response body when the request completes.
		 * The callback parameter should be a function that looks like this: 
		 * function(string content, string encoding) {...}; 
		 * Parameter content: Content of the response body (potentially encoded). 
		 * Parameter encoding: Empty if content is not encoded, encoding name otherwise. Currently, only base64 is supported. 
		 */
        getContent(callback: (content: string, encoding: string) => void): void;
    }

    interface RequestFinishedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( Request request) {...}; 
		 * Parameter request: Description of a network request in the form of a HAR entry. See HAR specification for details. 
		 */
        addListener(callback: (request: Request) => void): void;
    }

    interface NavigatedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string url) {...}; 
		 * Parameter url: URL of the new page. 
		 */
        addListener(callback: (url: string) => void): void;
    }

	/**
	 * Returns HAR log that contains all known network requests. 
	 * @param callback A function that receives the HAR log when the request completes. 
	 * The callback parameter should be a function that looks like this: 
	 * function(object harLog) {...}; 
	 * Parameter harLog: A HAR log. See HAR specification for details. 
	 */
    export function getHAR(callback: (harLog: Object) => void): void;

	/** Fired when a network request is finished and all request data are available. */
    var onRequestFinished: RequestFinishedEvent;
	/** Fired when the inspected window navigates to a new page. */
    var onNavigated: NavigatedEvent;
}

////////////////////
// Dev Tools - Panels
////////////////////
/**
 * Use the chrome.devtools.panels API to integrate your extension into Developer Tools window UI: create your own panels, access existing panels, and add sidebars. 
 * Availability: Since Chrome 18. 
 */
declare module chrome.devtools.panels {
    interface PanelShownEvent extends chrome.events.Event {
		/** 
		 * @param callback The callback parameter should be a function that looks like this:
		 * function(global window) {...};
		 * Parameter window: The JavaScript window object of panel's page. 
		 */
        addListener(callback: (window: chrome.windows.Window) => void): void;
    }

    interface PanelHiddenEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function() {...}; 
		 */
        addListener(callback: () => void): void;
    }

    interface PanelSearchEvent extends chrome.events.Event {
		/**
		 * The callback parameter should be a function that looks like this: 
		 * function(string action, string queryString) {...}; 
		 * Parameter action: Type of search action being performed. 
		 * Optional parameter queryString: Query string (only for 'performSearch'). 
		 */
        addListener(callback: (action: string, queryString?: string) => void): void;
    }

	/** Represents a panel created by extension. */
    interface ExtensionPanel {
		/**
		 * Appends a button to the status bar of the panel. 
		 * @param iconPath Path to the icon of the button. The file should contain a 64x24-pixel image composed of two 32x24 icons. The left icon is used when the button is inactive; the right icon is displayed when the button is pressed. 
		 * @param tooltipText Text shown as a tooltip when user hovers the mouse over the button. 
		 * @param disabled Whether the button is disabled. 
		 */
        createStatusBarButton(iconPath: string, tooltipText: string, disabled: boolean): Button;
		/** Fired when the user switches to the panel. */
        onShown: PanelShownEvent;
		/** Fired when the user switches away from the panel. */
        onHidden: PanelHiddenEvent;
		/** Fired upon a search action (start of a new search, search result navigation, or search being canceled). */
        onSearch: PanelSearchEvent;
    }

    interface ButtonClickedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function() {...}; 
		 */
        addListener(callback: () => void): void;
    }

	/** A button created by the extension. */
    interface Button {
		/**
		 * Updates the attributes of the button. If some of the arguments are omitted or null, the corresponding attributes are not updated. 
		 * @param iconPath Path to the new icon of the button. 
		 * @param tooltipText Text shown as a tooltip when user hovers the mouse over the button. 
		 * @param disabled Whether the button is disabled. 
		 */
        update(iconPath?: string, tooltipText?: string, disabled?: boolean): void;
		/** Fired when the button is clicked. */
        onClicked: ButtonClickedEvent;
    }

    interface SelectionChangedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function() {...}; 
		 */
        addListener(callback: () => void): void;
    }

	/** Represents the Elements panel. */
    interface ElementsPanel {
		/**
		 * Creates a pane within panel's sidebar. 
		 * @param title Text that is displayed in sidebar caption. 
		 * @param callback A callback invoked when the sidebar is created. 
		 * If you specify the callback parameter, it should be a function that looks like this: 
		 * function( ExtensionSidebarPane result) {...}; 
		 * Parameter result: An ExtensionSidebarPane object for created sidebar pane. 
		 */
        createSidebarPane(title: string, callback?: (result: ExtensionSidebarPane) => void): void;
		/** Fired when an object is selected in the panel. */
        onSelectionChanged: SelectionChangedEvent;
    }

	/**
	 * Since Chrome 41. 
	 * Represents the Sources panel.
	 */
	interface SourcesPanel {
		/**
		 * Creates a pane within panel's sidebar. 
		 * @param title Text that is displayed in sidebar caption. 
		 * @param callback A callback invoked when the sidebar is created. 
		 * If you specify the callback parameter, it should be a function that looks like this: 
		 * function( ExtensionSidebarPane result) {...}; 
		 * Parameter result: An ExtensionSidebarPane object for created sidebar pane. 
		 */
		createSidebarPane(title: string, callback?: (result: ExtensionSidebarPane) => void): void;
		/** Fired when an object is selected in the panel. */
        onSelectionChanged: SelectionChangedEvent;
	}

    interface ExtensionSidebarPaneShownEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this:
		 * function(global window) {...};
		 * Parameter window: The JavaScript window object of the sidebar page, if one was set with the setPage() method. 
		 */
        addListener(callback: (window: chrome.windows.Window) => void): void;
    }

    interface ExtensionSidebarPaneHiddenEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function() {...}; 
		 */
        addListener(callback: () => void): void;
    }

	/** A sidebar created by the extension. */
    interface ExtensionSidebarPane {
		/**
		 * Sets the height of the sidebar. 
		 * @param height A CSS-like size specification, such as '100px' or '12ex'. 
		 */
        setHeight(height: string): void;
		/**
		 * Sets an expression that is evaluated within the inspected page. The result is displayed in the sidebar pane. 
		 * @param expression An expression to be evaluated in context of the inspected page. JavaScript objects and DOM nodes are displayed in an expandable tree similar to the console/watch. 
		 * @param rootTitle An optional title for the root of the expression tree.
		 * @param callback A callback invoked after the sidebar pane is updated with the expression evaluation results. 
		 * If you specify the callback parameter, it should be a function that looks like this: 
		 * function() {...}; 
		 */
        setExpression(expression: string, rootTitle?: string, callback?: () => void): void;
		/**
		 * Sets an expression that is evaluated within the inspected page. The result is displayed in the sidebar pane. 
		 * @param expression An expression to be evaluated in context of the inspected page. JavaScript objects and DOM nodes are displayed in an expandable tree similar to the console/watch. 
		 * @param callback A callback invoked after the sidebar pane is updated with the expression evaluation results. 
		 * If you specify the callback parameter, it should be a function that looks like this: 
		 * function() {...}; 
		 */
        setExpression(expression: string, callback?: () => void): void;
		/**
		 * Sets a JSON-compliant object to be displayed in the sidebar pane. 
		 * @param jsonObject An object to be displayed in context of the inspected page. Evaluated in the context of the caller (API client). 
		 * @param rootTitle An optional title for the root of the expression tree. 
		 * @param callback A callback invoked after the sidebar is updated with the object. 
		 * If you specify the callback parameter, it should be a function that looks like this: 
		 * function() {...}; 
		 */
        setObject(jsonObject: string, rootTitle?: string, callback?: () => void): void;
		/**
		 * Sets a JSON-compliant object to be displayed in the sidebar pane. 
		 * @param jsonObject An object to be displayed in context of the inspected page. Evaluated in the context of the caller (API client). 
		 * @param callback A callback invoked after the sidebar is updated with the object. 
		 * If you specify the callback parameter, it should be a function that looks like this: 
		 * function() {...}; 
		 */
        setObject(jsonObject: string, callback?: () => void): void;
		/**
		 * Sets an HTML page to be displayed in the sidebar pane. 
		 * @param path Relative path of an extension page to display within the sidebar. 
		 */
        setPage(path: string): void;
		/** Fired when the sidebar pane becomes visible as a result of user switching to the panel that hosts it. */
        onShown: ExtensionSidebarPaneShownEvent;
		/** Fired when the sidebar pane becomes hidden as a result of the user switching away from the panel that hosts the sidebar pane. */
        onHidden: ExtensionSidebarPaneHiddenEvent;
    }

	/** Elements panel. */
    var elements: ElementsPanel;
	/**
	 * Since Chrome 38. 
	 * Sources panel. 
	 */
	var sources: SourcesPanel;

	/**
	 * Creates an extension panel. 
	 * @param title Title that is displayed next to the extension icon in the Developer Tools toolbar. 
	 * @param iconPath Path of the panel's icon relative to the extension directory. 
	 * @param pagePath Path of the panel's HTML page relative to the extension directory. 
	 * @param callback A function that is called when the panel is created. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function( ExtensionPanel panel) {...}; 
	 * Parameter panel: An ExtensionPanel object representing the created panel. 
	 */
    export function create(title: string, iconPath: string, pagePath: string, callback?: (panel: ExtensionPanel) => void): void;
	/**
	 * Specifies the function to be called when the user clicks a resource link in the Developer Tools window. To unset the handler, either call the method with no parameters or pass null as the parameter. 
	 * @param callback A function that is called when the user clicks on a valid resource link in Developer Tools window. Note that if the user clicks an invalid URL or an XHR, this function is not called. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function( devtools.inspectedWindow.Resource resource) {...}; 
	 * Parameter resource: A devtools.inspectedWindow.Resource object for the resource that was clicked. 
	 */
    export function setOpenResourceHandler(callback?: (resource: chrome.devtools.inspectedWindow.Resource) => void): void;
	/**
	 * Since Chrome 38. 
	 * Requests DevTools to open a URL in a Developer Tools panel. 
	 * @param url The URL of the resource to open. 
	 * @param lineNumber Specifies the line number to scroll to when the resource is loaded. 
	 * @param callback A function that is called when the resource has been successfully loaded. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function openResource(url: string, lineNumber: number, callback: () => void): void;
}

////////////////////
// Document Scan
////////////////////
/**
 * Use the chrome.documentScan API to discover and retrieve images from attached paper document scanners. 
 * Availability: Since Chrome 44.  
 * Permissions:  "documentScan"   
 * Important: This API works only on Chrome OS. 
 */
declare module chrome.documentScan {
	interface DocumentScanOptions {
		/** Optional. The MIME types that are accepted by the caller.  */
		mimeTypes?: string[];
		/** Optional. The number of scanned images allowed (defaults to 1).  */
		maxImages?: number;
	}

	interface DocumentScanCallbackArg {
		/** The data image URLs in a form that can be passed as the "src" value to an image tag. */
		dataUrls: string[];
		/** The MIME type of dataUrls. */
		mimeType: string;
	}
	
	/**
	 * Performs a document scan. On success, the PNG data will be sent to the callback. 
	 * @param options Object containing scan parameters. 
	 * @param callback Called with the result and data from the scan. 
	 * The callback parameter should be a function that looks like this: 
	 * function(object result) {...}; 
	 */
	export function scan(options: DocumentScanOptions, callback: (result: DocumentScanCallbackArg) => void): void;
}

////////////////////
// Dev Tools - Downloads
////////////////////
/**
 * Use the chrome.downloads API to programmatically initiate, monitor, manipulate, and search for downloads.
 * Availability: Since Chrome 31. 
 * Permissions:  "downloads" 
 */
declare module chrome.downloads {
    interface HeaderNameValuePair {
		/** Name of the HTTP header. */
        name: string;
		/** Value of the HTTP header. */
        value: string;
    }

    interface DownloadOptions {
		/** Optional. Post body.  */
		body?: string;
		/** Optional. Use a file-chooser to allow the user to select a filename regardless of whether filename is set or already exists.  */
		saveAs?: boolean;
		/** The URL to download. */
        url: string;
		/** Optional. A file path relative to the Downloads directory to contain the downloaded file, possibly containing subdirectories. Absolute paths, empty paths, and paths containing back-references ".." will cause an error. onDeterminingFilename allows suggesting a filename after the file's MIME type and a tentative filename have been determined.  */
		filename?: string;
		/** Optional. Extra HTTP headers to send with the request if the URL uses the HTTP[s] protocol. Each header is represented as a dictionary containing the keys name and either value or binaryValue, restricted to those allowed by XMLHttpRequest.  */
		headers?: HeaderNameValuePair[];
		/** Optional. The HTTP method to use if the URL uses the HTTP[S] protocol.  */
		method?: string;
		/** Optional. The action to take if filename already exists.  */
		conflictAction?: string;
    }

    interface DownloadDelta {
		/** Optional. The change in danger, if any.  */
		danger?: StringDelta;
		/** Optional. The change in url, if any.  */
		url?: StringDelta;
		/** Optional. The change in totalBytes, if any.  */
		totalBytes?: DoubleDelta;
		/** Optional. The change in filename, if any.  */
		filename?: StringDelta;
		/** Optional. The change in paused, if any.  */
		paused?: BooleanDelta;
		/** Optional. The change in state, if any.  */
		state?: StringDelta;
		/** Optional. The change in mime, if any.  */
		mime?: StringDelta;
		/** Optional. The change in fileSize, if any.  */
		fileSize?: DoubleDelta;
		/** Optional. The change in startTime, if any.  */
		startTime?: DoubleDelta;
		/** Optional. The change in error, if any.  */
		error?: StringDelta;
		/** Optional. The change in endTime, if any.  */
		endTime?: DoubleDelta;
		/** The id of the DownloadItem that changed. */
        id: number;
		/** Optional. The change in canResume, if any.  */
		canResume?: BooleanDelta;
		/** Optional. The change in exists, if any.  */
		exists?: BooleanDelta;
    }

    interface BooleanDelta {
        current?: boolean;
        previous?: boolean;
    }

	/** Since Chrome 34. */
    interface DoubleDelta {
        current?: number;
        previous?: number;
    }

    interface StringDelta {
        current?: string;
        previous?: string;
    }

    interface DownloadItem {
		/** Number of bytes received so far from the host, without considering file compression. */
        bytesReceived: number;
		/** Indication of whether this download is thought to be safe or known to be suspicious. */
        danger: string;
		/** Absolute URL. */
        url: string;
		/** Number of bytes in the whole file, without considering file compression, or -1 if unknown. */
        totalBytes: number;
		/** Absolute local path. */
        filename: string;
		/** True if the download has stopped reading data from the host, but kept the connection open. */
        paused: boolean;
		/** Indicates whether the download is progressing, interrupted, or complete. */
        state: string;
		/** The file's MIME type. */
        mime: string;
		/** Number of bytes in the whole file post-decompression, or -1 if unknown. */
        fileSize: number;
		/** The time when the download began in ISO 8601 format. May be passed directly to the Date constructor: chrome.downloads.search({}, function(items){items.forEach(function(item){console.log(new Date(item.startTime))})}) */
        startTime: string;
		/** Optional. Why the download was interrupted. Several kinds of HTTP errors may be grouped under one of the errors beginning with SERVER_. Errors relating to the network begin with NETWORK_, errors relating to the process of writing the file to the file system begin with FILE_, and interruptions initiated by the user begin with USER_.  */
		error?: string;
		/** Optional. The time when the download ended in ISO 8601 format. May be passed directly to the Date constructor: chrome.downloads.search({}, function(items){items.forEach(function(item){if (item.endTime) console.log(new Date(item.endTime))})})  */
		endTime?: string;
		/** An identifier that is persistent across browser sessions. */
        id: number;
		/** False if this download is recorded in the history, true if it is not recorded. */
        incognito: boolean;
		/** Absolute URL. */
		referrer: string;
		/** Optional. Estimated time when the download will complete in ISO 8601 format. May be passed directly to the Date constructor: chrome.downloads.search({}, function(items){items.forEach(function(item){if (item.estimatedEndTime) console.log(new Date(item.estimatedEndTime))})})  */
		estimatedEndTime?: string;
		/** True if the download is in progress and paused, or else if it is interrupted and can be resumed starting from where it was interrupted. */
		canResume: boolean;
		/** Whether the downloaded file still exists. This information may be out of date because Chrome does not automatically watch for file removal. Call search() in order to trigger the check for file existence. When the existence check completes, if the file has been deleted, then an onChanged event will fire. Note that search() does not wait for the existence check to finish before returning, so results from search() may not accurately reflect the file system. Also, search() may be called as often as necessary, but will not check for file existence any more frequently than once every 10 seconds. */
		exists: boolean;
		/** Optional. The identifier for the extension that initiated this download if this download was initiated by an extension. Does not change once it is set.  */
		byExtensionId?: string;
		/** Optional. The localized name of the extension that initiated this download if this download was initiated by an extension. May change if the extension changes its name or if the user changes their locale.  */
		byExtensionName?: string;
    }

    interface GetFileIconOptions {
		/** Optional. * The size of the returned icon. The icon will be square with dimensions size * size pixels. The default and largest size for the icon is 32x32 pixels. The only supported sizes are 16 and 32. It is an error to specify any other size. 
 */
		size?: number;
    }

    interface DownloadQuery {
		/** Optional. Set elements of this array to DownloadItem properties in order to sort search results. For example, setting orderBy=['startTime'] sorts the DownloadItem by their start time in ascending order. To specify descending order, prefix with a hyphen: '-startTime'.  */
		orderBy?: string[];
		/** Optional. Limits results to DownloadItem whose url matches the given regular expression.  */
		urlRegex?: string;
		/** Optional. Limits results to DownloadItem that ended before the given ms since the epoch.  */
		endedBefore?: number;
		/** Optional. Limits results to DownloadItem whose totalBytes is greater than the given integer.  */
		totalBytesGreater?: number;
		/** Optional. Indication of whether this download is thought to be safe or known to be suspicious.  */
		danger?: string;
		/** Optional. Number of bytes in the whole file, without considering file compression, or -1 if unknown.  */
		totalBytes?: number;
		/** Optional. True if the download has stopped reading data from the host, but kept the connection open.  */
		paused?: boolean;
		/** Optional. Limits results to DownloadItem whose filename matches the given regular expression.  */
		filenameRegex?: string;
		/** Optional. This array of search terms limits results to DownloadItem whose filename or url contain all of the search terms that do not begin with a dash '-' and none of the search terms that do begin with a dash.  */
		query?: string[];
		/** Optional. Limits results to DownloadItem whose totalBytes is less than the given integer.  */
		totalBytesLess?: number;
		/** Optional. The id of the DownloadItem to query.  */
		id?: number;
		/** Optional. Number of bytes received so far from the host, without considering file compression.  */
		bytesReceived?: number;
		/** Optional. Limits results to DownloadItem that ended after the given ms since the epoch.  */
		endedAfter?: number;
		/** Optional. Absolute local path.  */
		filename?: string;
		/** Optional. Indicates whether the download is progressing, interrupted, or complete.  */
		state?: string;
		/** Optional. Limits results to DownloadItem that started after the given ms since the epoch.  */
		startedAfter?: number;
		/** Optional. The file's MIME type.  */
		mime?: string;
		/** Optional. Number of bytes in the whole file post-decompression, or -1 if unknown.  */
		fileSize?: number;
		/** Optional. The time when the download began in ISO 8601 format.  */
		startTime?: number;
		/** Optional. Absolute URL.  */
		url?: string;
		/** Optional. Limits results to DownloadItem that started before the given ms since the epoch.  */
		startedBefore?: number;
		/** Optional. The maximum number of matching DownloadItem returned. Defaults to 1000. Set to 0 in order to return all matching DownloadItem. See search for how to page through results.  */
		limit?: number;
		/** Optional. Why a download was interrupted.  */
		error?: number;
		/** Optional. The time when the download ended in ISO 8601 format.  */
		endTime?: number;
		/** Optional. Whether the downloaded file exists;  */
		exists?: boolean;
    }

	interface DownloadFilenameSuggestion {
		/** The DownloadItem's new target DownloadItem.filename, as a path relative to the user's default Downloads directory, possibly containing subdirectories. Absolute paths, empty paths, and paths containing back-references ".." will be ignored. */
		filename: string;
		/** Optional. The action to take if filename already exists.  */
		conflictAction?: string;
	}

    interface DownloadChangedEvent extends chrome.events.Event {
		/**
		 * When any of a DownloadItem's properties except bytesReceived and estimatedEndTime changes, this event fires with the downloadId and an object containing the properties that changed. 
		 * @param callback The callback parameter should be a function that looks like this:
		 * function(object downloadDelta) {...}; 
		 */
        addListener(callback: (downloadDelta: DownloadDelta) => void): void;
    }

    interface DownloadCreatedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( DownloadItem downloadItem) {...}; 
		 */
        addListener(callback: (downloadItem: DownloadItem) => void): void;
    }

    interface DownloadErasedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(integer downloadId) {...}; 
		 * Parameter downloadId: The id of the DownloadItem that was erased. 
		 */
        addListener(callback: (downloadId: number) => void): void;
    }

	interface DownloadDeterminingFilenameEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( DownloadItem downloadItem, function suggest) {...};
		 */
		addListener(callback: (downloadItem: DownloadItem, suggest: (suggestion?: DownloadFilenameSuggestion) => void) => void): void;
	}

	/**
	 * Find DownloadItem. Set query to the empty object to get all DownloadItem. To get a specific DownloadItem, set only the id field. To page through a large number of items, set orderBy: ['-startTime'], set limit to the number of items per page, and set startedAfter to the startTime of the last item from the last page. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of DownloadItem results) {...}; 
	 */
    export function search(query: DownloadQuery, callback: (results: DownloadItem[]) => void): void;
	/**
	 * Pause the download. If the request was successful the download is in a paused state. Otherwise runtime.lastError contains an error message. The request will fail if the download is not active. 
	 * @param downloadId The id of the download to pause. 
	 * @param callback Called when the pause request is completed. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function pause(downloadId: number, callback?: () => void): void;
	/**
	 * Retrieve an icon for the specified download. For new downloads, file icons are available after the onCreated event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, runtime.lastError will contain an error message. 
	 * @param downloadId The identifier for the download. 
	 * @param callback A URL to an image that represents the download. 
	 * The callback parameter should be a function that looks like this: 
	 * function(string iconURL) {...}; 
	 */
    export function getFileIcon(downloadId: number, callback: (iconURL: string) => void): void;
	/**
	 * Retrieve an icon for the specified download. For new downloads, file icons are available after the onCreated event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, runtime.lastError will contain an error message. 
	 * @param downloadId The identifier for the download. 
	 * @param callback A URL to an image that represents the download. 
	 * The callback parameter should be a function that looks like this: 
	 * function(string iconURL) {...}; 
	 */
    export function getFileIcon(downloadId: number, options: GetFileIconOptions, callback: (iconURL: string) => void): void;
	/**
	 * Resume a paused download. If the request was successful the download is in progress and unpaused. Otherwise runtime.lastError contains an error message. The request will fail if the download is not active. 
	 * @param downloadId The id of the download to resume.
	 * @param callback  Called when the resume request is completed. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function resume(downloadId: number, callback?: () => void): void;
	/**
	 * Cancel a download. When callback is run, the download is cancelled, completed, interrupted or doesn't exist anymore. 
	 * @param downloadId The id of the download to cancel. 
	 * @param callback Called when the cancel request is completed. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function cancel(downloadId: number, callback?: () => void): void;
	/**
	 * Download a URL. If the URL uses the HTTP[S] protocol, then the request will include all cookies currently set for its hostname. If both filename and saveAs are specified, then the Save As dialog will be displayed, pre-populated with the specified filename. If the download started successfully, callback will be called with the new DownloadItem's downloadId. If there was an error starting the download, then callback will be called with downloadId=undefined and runtime.lastError will contain a descriptive string. The error strings are not guaranteed to remain backwards compatible between releases. Extensions must not parse it. 
	 * @param options What to download and how. 
	 * @param callback Called with the id of the new DownloadItem. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function(integer downloadId) {...}; 
	 */
    export function download(options: DownloadOptions, callback?: (downloadId: number) => void): void;
	/**
	 * Open the downloaded file now if the DownloadItem is complete; otherwise returns an error through runtime.lastError. Requires the "downloads.open" permission in addition to the "downloads" permission. An onChanged event will fire when the item is opened for the first time. 
	 * @param downloadId The identifier for the downloaded file. 
	 */
    export function open(downloadId: number): void;
	/**
	 * Show the downloaded file in its folder in a file manager. 
	 * @param downloadId The identifier for the downloaded file. 
	 */
    export function show(downloadId: number): void;
	/** Show the default Downloads folder in a file manager. */
    export function showDefaultFolder(): void;
	/**
	 * Erase matching DownloadItem from history without deleting the downloaded file. An onErased event will fire for each DownloadItem that matches query, then callback will be called.
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function(array of integer erasedIds) {...}; 
	 */
    export function erase(query: DownloadQuery, callback: (erasedIds: number[]) => void): void;
	/**
	 * Remove the downloaded file if it exists and the DownloadItem is complete; otherwise return an error through runtime.lastError. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeFile(downloadId: number, callback?: () => void): void;
	/**
	 * Prompt the user to accept a dangerous download. Can only be called from a visible context (tab, window, or page/browser action popup). Does not automatically accept dangerous downloads. If the download is accepted, then an onChanged event will fire, otherwise nothing will happen. When all the data is fetched into a temporary file and either the download is not dangerous or the danger has been accepted, then the temporary file is renamed to the target filename, the |state| changes to 'complete', and onChanged fires.
	 * @param downloadId The identifier for the DownloadItem.
	 * @param callback Called when the danger prompt dialog closes. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function acceptDanger(downloadId: number, callback: () => void): void;
	/** Initiate dragging the downloaded file to another application. Call in a javascript ondragstart handler. */
    export function drag(downloadId: number): void;
	/** Enable or disable the gray shelf at the bottom of every window associated with the current browser profile. The shelf will be disabled as long as at least one extension has disabled it. Enabling the shelf while at least one other extension has disabled it will return an error through runtime.lastError. Requires the "downloads.shelf" permission in addition to the "downloads" permission. */
    export function setShelfEnabled(enabled: boolean): void;

	/** When any of a DownloadItem's properties except bytesReceived and estimatedEndTime changes, this event fires with the downloadId and an object containing the properties that changed. */
    var onChanged: DownloadChangedEvent;
	/** This event fires with the DownloadItem object when a download begins. */
    var onCreated: DownloadCreatedEvent;
	/** Fires with the downloadId when a download is erased from history. */
    var onErased: DownloadErasedEvent;
	/** During the filename determination process, extensions will be given the opportunity to override the target DownloadItem.filename. Each extension may not register more than one listener for this event. Each listener must call suggest exactly once, either synchronously or asynchronously. If the listener calls suggest asynchronously, then it must return true. If the listener neither calls suggest synchronously nor returns true, then suggest will be called automatically. The DownloadItem will not complete until all listeners have called suggest. Listeners may call suggest without any arguments in order to allow the download to use downloadItem.filename for its filename, or pass a suggestion object to suggest in order to override the target filename. If more than one extension overrides the filename, then the last extension installed whose listener passes a suggestion object to suggest wins. In order to avoid confusion regarding which extension will win, users should not install extensions that may conflict. If the download is initiated by download and the target filename is known before the MIME type and tentative filename have been determined, pass filename to download instead. */
	var onDeterminingFilename: DownloadDeterminingFilenameEvent;
}

////////////////////
// Enterprise Platform Keys
////////////////////
/**
 * Use the chrome.enterprise.platformKeys API to generate hardware-backed keys and to install certificates for these keys. The certificates will be managed by the platform and can be used for TLS authentication, network access or by other extension through chrome.platformKeys. 
 * Availability: Since Chrome 37.  
 * Permissions:  "enterprise.platformKeys"   
 * Important: This API works only on Chrome OS. 
 * Note:  This API is only for extensions pre-installed by policy. 
 */
declare module chrome.enterprise.platformKeys {
	interface Token {
		/**
		 * Uniquely identifies this Token. 
		 * Static IDs are "user" and "system", referring to the platform's user-specific and the system-wide hardware token, respectively. Any other tokens (with other identifiers) might be returned by enterprise.platformKeys.getTokens.
		 */
		id: string;
		/**
		 * Implements the WebCrypto's SubtleCrypto interface. The cryptographic operations, including key generation, are hardware-backed. 
		 * Only non-extractable RSASSA-PKCS1-V1_5 keys with modulusLength up to 2048 can be generated. Each key can be used for signing data at most once.
		 * Keys generated on a specific Token cannot be used with any other Tokens, nor can they be used with window.crypto.subtle. Equally, Key objects created with window.crypto.subtle cannot be used with this interface.
		 */
		subtleCrypto: SubtleCrypto;
	}
	
	/**
	 * Returns the available Tokens. In a regular user's session the list will always contain the user's token with id "user". If a system-wide TPM token is available, the returned list will also contain the system-wide token with id "system". The system-wide token will be the same for all sessions on this device (device in the sense of e.g. a Chromebook). 
	 * @param callback Invoked by getTokens with the list of available Tokens. 
	 * The callback parameter should be a function that looks like this:
	 * function(array of Token tokens) {...};
	 * Parameter tokens: The list of available tokens. 
	 */
	export function getToken(callback: (tokens: Token[]) => void): void;
	/**
	 * Returns the list of all client certificates available from the given token. Can be used to check for the existence and expiration of client certificates that are usable for a certain authentication. 
	 * @param tokenId The id of a Token returned by getTokens. 
	 * @param callback Called back with the list of the available certificates. 
	 * The callback parameter should be a function that looks like this: 
	 * function(array of ArrayBuffer certificates) {...}; 
	 * Parameter certificates: The list of certificates, each in DER encoding of a X.509 certificate. 
	 */
	export function getCertificates(tokenId: string, callback: (certificates: ArrayBuffer) => void): void;
	/**
	 * Imports certificate to the given token if the certified key is already stored in this token. After a successful certification request, this function should be used to store the obtained certificate and to make it available to the operating system and browser for authentication. 
	 * @param tokenId The id of a Token returned by getTokens. 
	 * @param certificate The DER encoding of a X.509 certificate. 
	 * @param callback Called back when this operation is finished. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function importCertificate(tokenId: string, certificate: ArrayBuffer, callback?: () => void): void;
	/**
	 * Removes certificate from the given token if present. Should be used to remove obsolete certificates so that they are not considered during authentication and do not clutter the certificate choice. Should be used to free storage in the certificate store. 
	 * @param tokenId The id of a Token returned by getTokens. 
	 * @param certificate The DER encoding of a X.509 certificate. 
	 * @param callback Called back when this operation is finished. 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function() {...}; 
	 */
	export function removeCertificate(tokenId: string, certificate: ArrayBuffer, callback?: () => void): void;
}

////////////////////
// Events
////////////////////
/**
 * The chrome.events namespace contains common types used by APIs dispatching events to notify you when something interesting happens. 
 * Availability: Since Chrome 21.  
 */
declare module chrome.events {
	/** Filters URLs for various criteria. See event filtering. All criteria are case sensitive. */
    interface UrlFilter {
		/** Optional. Matches if the scheme of the URL is equal to any of the schemes specified in the array.  */
		schemes?: string[];
		/**
		 * Optional.
 		 * Since Chrome 23. 
		 * Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax. 
		 */
		urlMatches?: string;
		/** Optional. Matches if the path segment of the URL contains a specified string.  */
		pathContains?: string;
		/** Optional. Matches if the host name of the URL ends with a specified string.  */
		hostSuffix?: string;
		/** Optional. Matches if the host name of the URL starts with a specified string.  */
		hostPrefix?: string;
		/** Optional. Matches if the host name of the URL contains a specified string. To test whether a host name component has a prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the beginning of the host name. Similarly, hostContains can be used to match against component suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last components need to be done separately using hostSuffix, because no implicit dot is added at the end of the host name.  */
		hostContains?: string;
		/** Optional. Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number.  */
		urlContains?: string;
		/** Optional. Matches if the query segment of the URL ends with a specified string.  */
		querySuffix?: string;
		/** Optional. Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
		urlPrefix?: string;
		/** Optional. Matches if the host name of the URL is equal to a specified string.  */
		hostEquals?: string;
		/** Optional. Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number.  */
		urlEquals?: string;
		/** Optional. Matches if the query segment of the URL contains a specified string.  */
		queryContains?: string;
		/** Optional. Matches if the path segment of the URL starts with a specified string.  */
		pathPrefix?: string;
		/** Optional. Matches if the path segment of the URL is equal to a specified string.  */
		pathEquals?: string;
		/** Optional. Matches if the path segment of the URL ends with a specified string.  */
		pathSuffix?: string;
		/** Optional. Matches if the query segment of the URL is equal to a specified string.  */
		queryEquals?: string;
		/** Optional. Matches if the query segment of the URL starts with a specified string.  */
		queryPrefix?: string;
		/** Optional. Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
		urlSuffix?: string;
		/** Optional. Matches if the port of the URL is contained in any of the specified port lists. For example [80, 443, [1000, 1200]] matches all requests on port 80, 443 and in the range 1000-1200.  */
		ports?: any[];
		/**
		 * Optional.
 		 * Since Chrome 28. 
		 * Matches if the URL without query segment and fragment identifier matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax. 
		 */
		originAndPathMatches?: string;
    }

	/** An object which allows the addition and removal of listeners for a Chrome event. */
    interface Event {
		/**
		 * Registers an event listener callback to an event. 
		 * @param callback Called when an event occurs. The parameters of this function depend on the type of event. 
		 * The callback parameter should be a function that looks like this:
		 * function() {...}; 
		 */
        addListener(callback: Function): void;
		/**
		 * Returns currently registered rules. 
		 * @param callback Called with registered rules. 
		 * The callback parameter should be a function that looks like this:
		 * function(array of Rule rules) {...};
		 * Parameter rules: Rules that were registered, the optional parameters are filled with values. 
		 */
        getRules(callback: (rules: Rule[]) => void): void;
		/**
		 * Returns currently registered rules. 
		 * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are returned. 
		 * @param callback Called with registered rules. 
		 * The callback parameter should be a function that looks like this:
		 * function(array of Rule rules) {...};
		 * Parameter rules: Rules that were registered, the optional parameters are filled with values. 
		 */
        getRules(ruleIdentifiers: string[], callback: (rules: Rule[]) => void): void;
        /**
		 * @param callback Listener whose registration status shall be tested. 
		 */
        hasListener(callback: Function): boolean;
		/**
		 * Unregisters currently registered rules. 
		 * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are unregistered. 
		 * @param callback Called when rules were unregistered. 
		 * If you specify the callback parameter, it should be a function that looks like this: 
		 * function() {...}; 
		 */
        removeRules(ruleIdentifiers?: string[], callback?: () => void): void;
		/**
		 * Unregisters currently registered rules. 
		 * @param callback Called when rules were unregistered. 
		 * If you specify the callback parameter, it should be a function that looks like this: 
		 * function() {...}; 
		 */
        removeRules(callback?: () => void): void;
		/**
		 * Registers rules to handle events. 
		 * @param rules Rules to be registered. These do not replace previously registered rules. 
		 * @param callback Called with registered rules. 
		 * If you specify the callback parameter, it should be a function that looks like this: 
		 * function(array of Rule rules) {...}; 
		 * Parameter rules: Rules that were registered, the optional parameters are filled with values. 
		 */
        addRules(rules: Rule[], callback?: (rules: Rule[]) => void): void;
		/**
		 * Deregisters an event listener callback from an event. 
		 * @param callback Listener that shall be unregistered. 
		 * The callback parameter should be a function that looks like this:
		 * function() {...}; 
		 */
        removeListener(callback: () => void): void;
		hasListeners(): boolean;
    }

	/** Description of a declarative rule for handling events. */
    interface Rule {
		/** Optional. Optional priority of this rule. Defaults to 100.  */
		priority?: number;
		/** List of conditions that can trigger the actions. */
        conditions: any[];
		/** Optional. Optional identifier that allows referencing this rule.  */
		id?: string;
		/** List of actions that are triggered if one of the condtions is fulfilled. */
        actions: any[];
		/**
		 * Optional.
 		 * Since Chrome 28. 
		 * Tags can be used to annotate rules and perform operations on sets of rules. 
		 */
		tags?: string[];
    }
}

////////////////////
// Extension
////////////////////
/**
 * The chrome.extension API has utilities that can be used by any extension page. It includes support for exchanging messages between an extension and its content scripts or between extensions, as described in detail in Message Passing. 
 * Availability: Since Chrome 5.  
 */
declare module chrome.extension {
    interface FetchProperties {
		/** Optional. The window to restrict the search to. If omitted, returns all views.  */
		windowId?: number;
		/** Optional. The type of view to get. If omitted, returns all views (including background pages and tabs). Valid values: 'tab', 'notification', 'popup'.  */
		type?: string;
    }

    interface LastError {
		/** Description of the error that has taken place. */
        message: string;
    }

	interface OnRequestEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(any request, runtime.MessageSender sender, function sendResponse) {...}; 
		 * Parameter request: The request sent by the calling script. 
		 * Parameter sendResponse: Function to call (at most once) when you have a response. The argument should be any JSON-ifiable object, or undefined if there is no response. If you have more than one onRequest listener in the same document, then only one may send a response. 
		 */
		addListener(callback: (request: any, sender: runtime.MessageSender, sendResponse: () => void) => void): void;
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(runtime.MessageSender sender, function sendResponse) {...}; 
		 * Parameter sendResponse: Function to call (at most once) when you have a response. The argument should be any JSON-ifiable object, or undefined if there is no response. If you have more than one onRequest listener in the same document, then only one may send a response. 
		 */
		addListener(callback: (sender: runtime.MessageSender, sendResponse: () => void) => void): void;
	}

	/**
	 * Since Chrome 7. 
	 * True for content scripts running inside incognito tabs, and for extension pages running inside an incognito process. The latter only applies to extensions with 'split' incognito_behavior. 
	 */
    var inIncognitoContext: boolean;
	/** Set for the lifetime of a callback if an ansychronous extension api has resulted in an error. If no error has occured lastError will be undefined. */
    var lastError: LastError;

	/** Returns the JavaScript 'window' object for the background page running inside the current extension. Returns null if the extension has no background page. */
    export function getBackgroundPage(): Window;
	/** 
	 * Converts a relative path within an extension install directory to a fully-qualified URL.
	 * @param path A path to a resource within an extension expressed relative to its install directory. 
	 */
    export function getURL(path: string): string;
	/**
	 * Sets the value of the ap CGI parameter used in the extension's update URL. This value is ignored for extensions that are hosted in the Chrome Extension Gallery. 
	 * Since Chrome 9. 
	 */
    export function setUpdateUrlData(data: string): void;
	/** Returns an array of the JavaScript 'window' objects for each of the pages running inside the current extension. */
    export function getViews(fetchProperties?: FetchProperties): Window[];
	/**
	 * Retrieves the state of the extension's access to the 'file://' scheme (as determined by the user-controlled 'Allow access to File URLs' checkbox. 
	 * Since Chrome 12. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(boolean isAllowedAccess) {...};
	 * Parameter isAllowedAccess: True if the extension can access the 'file://' scheme, false otherwise. 
	 */
    export function isAllowedFileSchemeAccess(callback: (isAllowedAccess: boolean) => void): void;
	/**
	 * Retrieves the state of the extension's access to Incognito-mode (as determined by the user-controlled 'Allowed in Incognito' checkbox. 
	 * Since Chrome 12. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(boolean isAllowedAccess) {...};
	 * Parameter isAllowedAccess: True if the extension has access to Incognito mode, false otherwise. 
	 */
    export function isAllowedIncognitoAccess(callback: (isAllowedAccess: boolean) => void): void;
	/**
	 * Sends a single request to other listeners within the extension. Similar to runtime.connect, but only sends a single request with an optional response. The extension.onRequest event is fired in each page of the extension. 
	 * @deprecated Deprecated since Chrome 33. Please use runtime.sendMessage.
	 * @param extensionId The extension ID of the extension you want to connect to. If omitted, default is your own extension. 
	 * @param responseCallback If you specify the responseCallback parameter, it should be a function that looks like this: 
	 * function(any response) {...};
	 * Parameter response: The JSON response object sent by the handler of the request. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message. 
	 */
	export function sendRequest(extensionId: string, request: any, responseCallback?: (response: any) => void): void;
	/**
	 * Sends a single request to other listeners within the extension. Similar to runtime.connect, but only sends a single request with an optional response. The extension.onRequest event is fired in each page of the extension. 
	 * @deprecated Deprecated since Chrome 33. Please use runtime.sendMessage.
	 * @param responseCallback If you specify the responseCallback parameter, it should be a function that looks like this: 
	 * function(any response) {...};
	 * Parameter response: The JSON response object sent by the handler of the request. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message. 
	 */
	export function sendRequest(request: any, responseCallback?: (response: any) => void): void;
	/**
	 * Returns an array of the JavaScript 'window' objects for each of the tabs running inside the current extension. If windowId is specified, returns only the 'window' objects of tabs attached to the specified window. 
	 * @deprecated Deprecated since Chrome 33. Please use extension.getViews {type: "tab"}. 
	 */
	export function getExtensionTabs(windowId?: number): Window[];
	
	/**
	 * Fired when a request is sent from either an extension process or a content script. 
	 * @deprecated Deprecated since Chrome 33. Please use runtime.onMessage. 
	 */
	var onRequest: OnRequestEvent;
	/**
	 * Fired when a request is sent from another extension. 
	 * @deprecated Deprecated since Chrome 33. Please use runtime.onMessageExternal. 
	 */
	var onRequestExternal: OnRequestEvent;
}

////////////////////
// File Browser Handler
////////////////////
/**
 * Use the chrome.fileBrowserHandler API to extend the Chrome OS file browser. For example, you can use this API to enable users to upload files to your website. 
 * Availability: Since Chrome 12.  
 * Permissions:  "fileBrowserHandler"   
 * Important: This API works only on Chrome OS. 
 */
declare module chrome.fileBrowserHandler {
    interface SelectionParams {
		/**
		 * Optional.
 		 * List of file extensions that the selected file can have. The list is also used to specify what files to be shown in the select file dialog. Files with the listed extensions are only shown in the dialog. Extensions should not include the leading '.'. Example: ['jpg', 'png'] 
		 * Since Chrome 23. 
		 */
		allowedFileExtensions?: string[];
		/** Suggested name for the file. */
        suggestedName: string;
    }

    interface SelectionResult {
		/** Optional. Selected file entry. It will be null if a file hasn't been selected.  */
		entry?: Object;
		/** Whether the file has been selected. */
        success: boolean;
    }

	/** Event details payload for fileBrowserHandler.onExecute event. */
    interface FileHandlerExecuteEventDetails {
		/** Optional. The ID of the tab that raised this event. Tab IDs are unique within a browser session.  */
		tab_id?: number;
		/** Array of Entry instances representing files that are targets of this action (selected in ChromeOS file browser). */
        entries: any[];
    }

    interface FileBrowserHandlerExecuteEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string id, FileHandlerExecuteEventDetails details) {...}; 
		 * Parameter id: File browser action id as specified in the listener component's manifest. 
		 * Parameter details: File handler execute event details. 
		 */
        addListener(callback: (id: string, details: FileHandlerExecuteEventDetails) => void): void;
    }

	/**
	 * Prompts user to select file path under which file should be saved. When the file is selected, file access permission required to use the file (read, write and create) are granted to the caller. The file will not actually get created during the function call, so function caller must ensure its existence before using it. The function has to be invoked with a user gesture. 
	 * Since Chrome 21. 
	 * @param selectionParams Parameters that will be used while selecting the file. 
	 * @param callback Function called upon completion. 
	 * The callback parameter should be a function that looks like this: 
	 * function(object result) {...}; 
	 * Parameter result: Result of the method. 
	 */
	export function selectFile(selectionParams: SelectionParams, callback: (result: SelectionResult) => void): void;
	
	/** Fired when file system action is executed from ChromeOS file browser. */
    var onExecute: FileBrowserHandlerExecuteEvent;
}

////////////////////
// File System Provider
////////////////////
/**
 * Use the chrome.fileSystemProvider API to create file systems, that can be accessible from the file manager on Chrome OS. 
 * Availability: Since Chrome 40.  
 * Permissions:  "fileSystemProvider"   
 * Important: This API works only on Chrome OS. 
 */
declare module chrome.fileSystemProvider {
	interface OpenedFileInfo {
		/** A request ID to be be used by consecutive read/write and close requests. */
		openRequestId: number;
		/** The path of the opened file. */
		filePath: string;
		/** Whether the file was opened for reading or writing. */
		mode: string;
	}

	interface FileWatchersInfo {
		/** The path of the entry being observed. */
		entryPath: string;
		/** Whether watching should include all child entries recursively. It can be true for directories only. */
		recursive: boolean;
		/** Optional. Tag used by the last notification for the watcher.  */
		lastTag?: string;
	}

	interface EntryMetadata {
		/** True if it is a directory. */
		isDirectory: boolean;
		/** Name of this entry (not full path name). Must not contain '/'. For root it must be empty. */
		name: string;
		/** File size in bytes. */
		size: number;
		/** The last modified time of this entry. */
		modificationTime: Date;
		/** Optional. Mime type for the entry.  */
		mimeType?: string;
		/** Optional. Thumbnail image as a data URI in either PNG, JPEG or WEBP format, at most 32 KB in size. Optional, but can be provided only when explicitly requested by the onGetMetadataRequested event.  */
		thumbnail?: string;
	}

	interface FileSystemInfo {
		/** The identifier of the file system. */
		fileSystemId: string;
		/** A human-readable name for the file system. */
		displayName: string;
		/** Whether the file system supports operations which may change contents of the file system (such as creating, deleting or writing to files). */
		writable: boolean;
		/** 
		 * The maximum number of files that can be opened at once. If 0, then not limited. 
		 * @since Since Chrome 42.
		 */
		openedFilesLimit: number;
		/**
		 * List of currently opened files. 
		 * @since Since Chrome 42.
		 */
		openedFiles: OpenedFileInfo[];
		/**
		 * Optional.
 		 * Whether the file system supports the tag field for observing directories. 
		 * @since Since Chrome 45. Warning: this is the current Beta channel. 
		 */
		supportsNotifyTag?: boolean;
		/**
		 * List of watchers. 
		 * @since Since Chrome 45. Warning: this is the current Beta channel.  
		 */
		watchers: FileWatchersInfo[];
	}
	
	/** @since Since Chrome 45. Warning: this is the current Beta channel. */
	interface GetActionsRequestedOptions {
		/** The identifier of the file system related to this operation. */
		fileSystemId: string;
		/** The unique identifier of this request. */
		requestId: number;
		/** The path of the entry to return the list of actions for. */
		entryPath: string;
	}
	
	/** @since Since Chrome 45. Warning: this is the current Beta channel. */
	interface Action {
		/** The identifier of the action. Any string or CommonActionId for common actions. */
		id: string;
		/** Optional. The title of the action. It may be ignored for common actions.  */
		title?: string;
	}
	
	/** @since Since Chrome 45. Warning: this is the current Beta channel. */
	interface ExecuteActionRequestedOptions {
		/** The identifier of the file system related to this operation. */
		fileSystemId: string;
		/** The unique identifier of this request. */
		requestId: number;
		/** The path of the entry to be used for the action. */
		entryPath: string;
		/** The identifier of the action to be executed. */
		actionId: string;
	}

	interface MountOptions {
		/** The string indentifier of the file system. Must be unique per each extension. */
		fileSystemId: string;
		/** A human-readable name for the file system. */
		displayName: string;
		/** Optional. Whether the file system supports operations which may change contents of the file system (such as creating, deleting or writing to files).  */
		writable?: boolean;
		/**
		 * Optional.
 		 * The maximum number of files that can be opened at once. If not specified, or 0, then not limited. 
		 * @since Since Chrome 41.
		 */
		openedFilesLimit?: number;
		/**
		 * Optional.
 		 * Whether the file system supports the tag field for observed directories. 
		 * @since Since Chrome 45. Warning: this is the current Beta channel.
		 */
		supportsNotifyTag?: boolean;
	}

	interface UnmountOptions {
		/** The identifier of the file system to be unmounted. */
		fileSystemId: string;
	}

	interface NotificationChange {
		/** The path of the changed entry. */
		entryPath: string;
		/** The type of the change which happened to the entry. */
		changeType: string;
	}

	interface NotificationOptions {
		/** The identifier of the file system related to this change. */
		fileSystemId: string;
		/** The path of the observed entry. */
		observedPath: string;
		/** Mode of the observed entry. */
		recursive: boolean;
		/** The type of the change which happened to the observed entry. If it is DELETED, then the observed entry will be automatically removed from the list of observed entries. */
		changeType: string;
		/** Optional. List of changes to entries within the observed directory (including the entry itself)  */
		changes?: NotificationChange[];
		/** Optional. Tag for the notification. Required if the file system was mounted with the supportsNotifyTag option. Note, that this flag is necessary to provide notifications about changes which changed even when the system was shutdown.  */
		tag?: string;
	}

	interface RequestedEventOptions {
		/** The identifier of the file system related to this operation. */
		fileSystemId: string;
		/** The unique identifier of this request. */
		requestId: number;
	}

	interface EntryPathRequestedEventOptions extends RequestedEventOptions {
		/** The path of the entry to which this operation is related to. */
		entryPath: string;
	}

	interface MetadataRequestedEventOptions extends EntryPathRequestedEventOptions {
		/** Set to true if the thumbnail is requested. */
		thumbnail: boolean;
	}

	interface DirectoryPathRequestedEventOptions extends RequestedEventOptions {
		/** The path of the directory which is to be operated on. */
		directoryPath: string;
	}

	interface FilePathRequestedEventOptions extends RequestedEventOptions {
		/** The path of the entry for the operation */
		filePath: string;
	}

	interface OpenFileRequestedEventOptions extends FilePathRequestedEventOptions {
		/** Whether the file will be used for reading or writing. */
		mode: string;
	}

	interface OpenedFileRequestedEventOptions extends RequestedEventOptions {
		/** A request ID used to open the file. */
		openRequestId: number;
	}

	interface OpenedFileOffsetRequestedEventOptions extends OpenedFileRequestedEventOptions {
		/** Position in the file (in bytes) to start reading from. */
		offset: number;
		/** Number of bytes to be returned. */
		length: number;
	}

	interface DirectoryPathRecursiveRequestedEventOptions extends DirectoryPathRequestedEventOptions {
		/** Whether the operation is recursive (for directories only). */
		recursive: boolean;
	}

	interface EntryPathRecursiveRequestedEventOptions extends EntryPathRequestedEventOptions {
		/** Whether the operation is recursive (for directories only). */
		recursive: boolean;
	}

	interface SourceTargetPathRequestedEventOptions extends RequestedEventOptions {
		/** The source path for the operation. */
		sourcePath: string;
		/** The destination path for the operation. */
		targetPath: string;
	}

	interface FilePathLengthRequestedEventOptions extends FilePathRequestedEventOptions {
		/** Number of bytes to be retained after the operation completes. */
		length: number;
	}

	interface OpenedFileIoRequestedEventOptions extends OpenedFileRequestedEventOptions {
		/** Position in the file (in bytes) to start operating from. */
		offset: number;
		/** Buffer of bytes to be operated on the file. */
		data: ArrayBuffer;
	}

	interface OperationRequestedEventOptions extends RequestedEventOptions {
		/** An ID of the request to which this operation is related. */
		operationRequestId: number;
	}

	interface RequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object options, function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (options: RequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
	}

	interface MetadataRequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object options, function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (options: MetadataRequestedEventOptions, successCallback: (metadata: EntryMetadata) => void, errorCallback: (error: string) => void) => void): void;
	}

	interface DirectoryPathRequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object options, function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (options: DirectoryPathRequestedEventOptions, successCallback: (entries: EntryMetadata[], hasMore: boolean) => void, errorCallback: (error: string) => void) => void): void;
	}

	interface OpenFileRequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object options, function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (options: OpenFileRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
	}

	interface OpenedFileRequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object options, function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (options: OpenedFileRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
	}

	interface OpenedFileOffsetRequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object options, function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (options: OpenedFileOffsetRequestedEventOptions, successCallback: (data: ArrayBuffer, hasMore: boolean) => void, errorCallback: (error: string) => void) => void): void;
	}

	interface DirectoryPathRecursiveRequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object options, function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (options: DirectoryPathRecursiveRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
	}

	interface EntryPathRecursiveRequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object options, function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (options: EntryPathRecursiveRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
	}

	interface FilePathRequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object options, function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (options: FilePathRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
	}

	interface SourceTargetPathRequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object options, function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (options: SourceTargetPathRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
	}

	interface FilePathLengthRequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object options, function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (options: FilePathLengthRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
	}

	interface OpenedFileIoRequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object options, function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (options: OpenedFileIoRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
	}

	interface OperationRequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object options, function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (options: OperationRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
	}

	interface OptionlessRequestedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(function successCallback, function errorCallback) {...}; 
		 */
		addListener(callback: (successCallback: Function, errorCallback: (error: string) => void) => void): void;
	}
	
	/**
	 * Mounts a file system with the given fileSystemId and displayName. displayName will be shown in the left panel of Files.app. displayName can contain any characters including '/', but cannot be an empty string. displayName must be descriptive but doesn't have to be unique. The fileSystemId must not be an empty string.
	 * Depending on the type of the file system being mounted, the source option must be set appropriately.
	 * In case of an error, runtime.lastError will be set with a corresponding error code.
	 * @param callback A generic result callback to indicate success or failure. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function mount(options: MountOptions, callback?: () => void): void;
	/**
	 * Unmounts a file system with the given fileSystemId. It must be called after onUnmountRequested is invoked. Also, the providing extension can decide to perform unmounting if not requested (eg. in case of lost connection, or a file error).
	 * In case of an error, runtime.lastError will be set with a corresponding error code.
	 * @param callback A generic result callback to indicate success or failure. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function unmount(options: UnmountOptions, callback?: () => void): void;
	/**
	 * Returns all file systems mounted by the extension. 
	 * @param callback Callback to receive the result of getAll function. 
	 * The callback parameter should be a function that looks like this: 
	 * function(array of FileSystemInfo fileSystems) {...}; 
	 */
	export function getAll(callback: (fileSystems: FileSystemInfo[]) => void): void;
	/**
	 * Returns information about a file system with the passed fileSystemId. 
	 * @since Since Chrome 42. 
	 * @param callback Callback to receive the result of get function. 
	 * The callback parameter should be a function that looks like this: 
	 * function(FileSystemInfo fileSystem) {...}; 
	 */
	export function get(fileSystemId: string, callback: (fileSystem: FileSystemInfo) => void): void;
	/**
	 * Notifies about changes in the watched directory at observedPath in recursive mode. If the file system is mounted with supportsNofityTag, then tag must be provided, and all changes since the last notification always reported, even if the system was shutdown. The last tag can be obtained with getAll.
	 * To use, the file_system_provider.notify manifest option must be set to true.
	 * Value of tag can be any string which is unique per call, so it's possible to identify the last registered notification. Eg. if the providing extension starts after a reboot, and the last registered notification's tag is equal to "123", then it should call notify for all changes which happened since the change tagged as "123". It cannot be an empty string.
	 * Not all providers are able to provide a tag, but if the file system has a changelog, then the tag can be eg. a change number, or a revision number.
	 * Note that if a parent directory is removed, then all descendant entries are also removed, and if they are watched, then the API must be notified about the fact. Also, if a directory is renamed, then all descendant entries are in fact removed, as there is no entry under their original paths anymore.
	 * In case of an error, runtime.lastError will be set will a corresponding error code.
	 * @param callback A generic result callback to indicate success or failure. 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function() {...}; 
	 */
	export function notify(options: NotificationOptions, callback: () => void): void;
	
	/** Raised when unmounting for the file system with the fileSystemId identifier is requested. In the response, the unmount API method must be called together with successCallback. If unmounting is not possible (eg. due to a pending operation), then errorCallback must be called.  */
	var onUnmountRequested: RequestedEvent;
	/** Raised when metadata of a file or a directory at entryPath is requested. The metadata must be returned with the successCallback call. In case of an error, errorCallback must be called. */
	var onGetMetadataRequested: MetadataRequestedEvent;
	/** Raised when contents of a directory at directoryPath are requested. The results must be returned in chunks by calling the successCallback several times. In case of an error, errorCallback must be called. */
	var onReadDirectoryRequested: DirectoryPathRequestedEvent;
	/** Raised when opening a file at filePath is requested. If the file does not exist, then the operation must fail. Maximum number of files opened at once can be specified with MountOptions. */
	var onOpenFileRequested: OpenFileRequestedEvent;
	/** Raised when opening a file previously opened with openRequestId is requested to be closed. */
	var onCloseFileRequested: OpenedFileRequestedEvent;
	/** Raised when reading contents of a file opened previously with openRequestId is requested. The results must be returned in chunks by calling successCallback several times. In case of an error, errorCallback must be called. */
	var onReadFileRequested: OpenedFileOffsetRequestedEvent;
	/** Raised when creating a directory is requested. The operation must fail with the EXISTS error if the target directory already exists. If recursive is true, then all of the missing directories on the directory path must be created. */
	var onCreateDirectoryRequested: DirectoryPathRecursiveRequestedEvent;
	/** Raised when deleting an entry is requested. If recursive is true, and the entry is a directory, then all of the entries inside must be recursively deleted as well. */
	var onDeleteEntryRequested: EntryPathRecursiveRequestedEvent;
	/** Raised when creating a file is requested. If the file already exists, then errorCallback must be called with the "EXISTS" error code. */
	var onCreateFileRequested: FilePathRequestedEvent;
	/** Raised when copying an entry (recursively if a directory) is requested. If an error occurs, then errorCallback must be called. */
	var onCopyEntryRequested: SourceTargetPathRequestedEvent;
	/** Raised when moving an entry (recursively if a directory) is requested. If an error occurs, then errorCallback must be called. */
	var onMoveEntryRequested: SourceTargetPathRequestedEvent;
	/** Raised when truncating a file to a desired length is requested. If an error occurs, then errorCallback must be called. */
	var onTruncateRequested: FilePathLengthRequestedEvent;
	/** Raised when writing contents to a file opened previously with openRequestId is requested. */
	var onWriteFileRequested: OpenedFileIoRequestedEvent;
	/** Raised when aborting an operation with operationRequestId is requested. The operation executed with operationRequestId must be immediately stopped and successCallback of this abort request executed. If aborting fails, then errorCallback must be called. Note, that callbacks of the aborted operation must not be called, as they will be ignored. Despite calling errorCallback, the request may be forcibly aborted. */
	var onAbortRequested: OperationRequestedEvent;
	/**
	 * Raised when showing a configuration dialog for fileSystemId is requested. If it's handled, the file_system_provider.configurable manfiest option must be set to true. 
	 * @since Since Chrome 44. 
	 */
	var onConfigureRequested: RequestedEvent;
	/**
	 * Raised when showing a dialog for mounting a new file system is requested. If the extension/app is a file handler, then this event shouldn't be handled. Instead app.runtime.onLaunched should be handled in order to mount new file systems when a file is opened. For multiple mounts, the file_system_provider.multiple_mounts manifest option must be set to true. 
	 * @since Since Chrome 44. 
	 */
	var onMountRequested: OptionlessRequestedEvent;
	/**
	 * Raised when setting a new directory watcher is requested. If an error occurs, then errorCallback must be called. 
	 * @since Since Chrome 45. Warning: this is the current Beta channel.
	 */
	var onAddWatcherRequested: EntryPathRecursiveRequestedEvent;
	/**
	 * Raised when the watcher should be removed. If an error occurs, then errorCallback must be called. 
	 * @since Since Chrome 45. Warning: this is the current Beta channel. 
	 */
	var onRemoveWatcherRequested: EntryPathRecursiveRequestedEvent;
}

////////////////////
// Font Settings
////////////////////
/**
 * Use the chrome.fontSettings API to manage Chrome's font settings. 
 * Availability: Since Chrome 22.  
 * Permissions:  "fontSettings"   
 */
declare module chrome.fontSettings {
	/** Represents a font name. */
	interface FontName {
		/** The display name of the font. */
		displayName: string;
		/** The font ID. */
		fontId: string;
	}

	interface DefaultFontSizeDetails {
		/** The font size in pixels. */
		pixelSize: number;
	}

	interface FontDetails {
		/** The generic font family for the font. */
		genericFamily: string;
		/** Optional. The script for the font. If omitted, the global script font setting is affected.  */
		script?: string;
	}

	interface FullFontDetails {
		/** The generic font family for which the font setting has changed. */
		genericFamily: string;
		/** The level of control this extension has over the setting. */
		levelOfControl: string;
		/** Optional. The script code for which the font setting has changed.  */
		script?: string;
		/** The font ID. See the description in getFont. */
		fontId: string;
	}

	interface FontDetailsResult {
		/** The level of control this extension has over the setting. */
		levelOfControl: string;
		/** The font ID. Rather than the literal font ID preference value, this may be the ID of the font that the system resolves the preference value to. So, fontId can differ from the font passed to setFont, if, for example, the font is not available on the system. The empty string signifies fallback to the global script font setting. */
		fontId: string;
	}

	interface FontSizeDetails {
		/** The font size in pixels. */
		pixelSize: number;
		/** The level of control this extension has over the setting. */
		levelOfControl: string;
	}

	interface SetFontSizeDetails {
		/** The font size in pixels. */
		pixelSize: number;
	}

	interface SetFontDetails extends FontDetails {
		/** The font ID. The empty string means to fallback to the global script font setting. */
		fontId: string;
	}

	interface DefaultFixedFontSizeChangedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object details) {...}; 
		 */
		addListener(callback: (details: FontSizeDetails) => void): void;
	}

	interface DefaultFontSizeChangedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object details) {...}; 
		 */
		addListener(callback: (details: FontSizeDetails) => void): void;
	}

	interface MinimumFontSizeChangedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object details) {...}; 
		 */
		addListener(callback: (details: FontSizeDetails) => void): void;
	}

	interface FontChangedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object details) {...}; 
		 */
		addListener(callback: (details: FullFontDetails) => void): void;
	}

	/**
	 * Sets the default font size. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function setDefaultFontSize(details: DefaultFontSizeDetails, callback?: Function): void;
	/**
	 * Gets the font for a given script and generic font family. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function(object details) {...}; 
	 */
	export function getFont(details: FontDetails, callback?: (details: FontDetailsResult) => void): void;
	/**
	 * Gets the default font size. 
	 * @param details This parameter is currently unused. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function(object details) {...}; 
	 */
	export function getDefaultFontSize(details?: Object, callback?: (options: FontSizeDetails) => void): void;
	/**
	 * Gets the minimum font size. 
	 * @param details This parameter is currently unused. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function(object details) {...}; 
	 */
	export function getMinimumFontSize(details?: FontSizeDetails, callback?: (options: FontSizeDetails) => void): void;
	/**
	 * Sets the minimum font size. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function setMinimumFontSize(details: SetFontSizeDetails, callback?: Function): void;
	/**
	 * Gets the default size for fixed width fonts. 
	 * @param details This parameter is currently unused. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function(object details) {...}; 
	 */
	export function getDefaultFixedFontSize(details?: Object, callback?: (details: FontSizeDetails) => void): void;
	/**
	 * Clears the default font size set by this extension, if any. 
	 * @param details This parameter is currently unused. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function clearDefaultFontSize(details?: Object, callback?: Function): void;
	/**
	 * Sets the default size for fixed width fonts. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function setDefaultFixedFontSize(details: SetFontSizeDetails, callback?: Function): void;
	/**
	 * Clears the font set by this extension, if any. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function clearFont(details: FontDetails, callback?: Function): void;
	/**
	 * Sets the font for a given script and generic font family. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function(object details) {...}; 
	 */
	export function setFont(details: SetFontDetails, callback?: Function): void;
	/**
	 * Clears the minimum font size set by this extension, if any. 
	 * @param details This parameter is currently unused. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function clearMinimumFontSize(details?: Object, callback?: Function): void;
	/**
	 * Gets a list of fonts on the system. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of FontName results) {...}; 
	 */
	export function getFontList(callback: (results: FontName[]) => void): void;
	/**
	 * Clears the default fixed font size set by this extension, if any. 
	 * @param details This parameter is currently unused. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function clearDefaultFixedFontSize(details: Object, callback?: Function): void;

	/** Fired when the default fixed font size setting changes. */
	var onDefaultFixedFontSizeChanged: DefaultFixedFontSizeChangedEvent;
	/** Fired when the default font size setting changes. */
	var onDefaultFontSizeChanged: DefaultFontSizeChangedEvent;
	/** Fired when the minimum font size setting changes. */
	var onMinimumFontSizeChanged: MinimumFontSizeChangedEvent;
	/** Fired when a font setting changes. */
	var onFontChanged: FontChangedEvent;
}

////////////////////
// Google Cloud Messaging
////////////////////
/**
 * Use chrome.gcm to enable apps and extensions to send and receive messages through the Google Cloud Messaging Service. 
 * Availability: Since Chrome 35.  
 * Permissions:  "gcm"   
 */
declare module chrome.gcm {
	interface OutgoingMessage {
		/** The ID of the server to send the message to as assigned by Google API Console. */
		destinationId: string;
		/** The ID of the message. It must be unique for each message in scope of the applications. See the Cloud Messaging documentation for advice for picking and handling an ID. */
		messageId: string;
		/** Optional. Time-to-live of the message in seconds. If it is not possible to send the message within that time, an onSendError event will be raised. A time-to-live of 0 indicates that the message should be sent immediately or fail if it's not possible. The maximum and a default value of time-to-live is 86400 seconds (1 day). */
		timeToLive?: number;
		/** Message data to send to the server. Case-insensitive goog. and google, as well as case-sensitive collapse_key are disallowed as key prefixes. Sum of all key/value pairs should not exceed gcm.MAX_MESSAGE_SIZE. */
		data: Object;
	}

	interface IncomingMessage {
		/** The message data. */
		data: Object;
		/**
		 * Optional.
		 * The sender who issued the message. 
		 * @since Since Chrome 41. 
		 */
		from?: string;
		/**
		 * Optional.
		 * The collapse key of a message. See Collapsible Messages section of Cloud Messaging documentation for details. 
		 */
		collapseKey?: string;
	}

	interface GcmError {
		/** The error message describing the problem. */
		errorMessage: string;
		/** Optional. The ID of the message with this error, if error is related to a specific message. */
		messageId?: string;
		/** Additional details related to the error, when available. */
		detail: Object;
	}

	interface MessageReceptionEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object message) {...}; 
		 * Parameter message: A message received from another party via GCM. 
		 */
		addListener(callback: (message: IncomingMessage) => void): void;
	}

	interface MessageDeletionEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function() {...}; 
		 */
		addListener(callback: () => void): void;
	}

	interface GcmErrorEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object error) {...}; 
		 * Parameter error: An error that occured while trying to send the message either in Chrome or on the GCM server. Application can retry sending the message with a reasonable backoff and possibly longer time-to-live. 
		 */
		addListener(callback: (error: GcmError) => void): void;
	}
	
	/** The maximum size (in bytes) of all key/value pairs in a message. */
	var MAX_MESSAGE_SIZE: number;
	
	/**
	 * Registers the application with GCM. The registration ID will be returned by the callback. If register is called again with the same list of senderIds, the same registration ID will be returned. 
	 * @param senderIds A list of server IDs that are allowed to send messages to the application. It should contain at least one and no more than 100 sender IDs. 
	 * @param callback Function called when registration completes. It should check runtime.lastError for error when registrationId is empty. 
	 * The callback parameter should be a function that looks like this: 
	 * function(string registrationId) {...};
	 * Parameter registrationId: A registration ID assigned to the application by the GCM. 
	 */
	export function register(senderIds: string[], callback: (registrationId: string) => void): void;
	/**
	 * Unregisters the application from GCM. 
	 * @param callback A function called after the unregistration completes. Unregistration was successful if runtime.lastError is not set. 
	 * The callback parameter should be a function that looks like this:
	 * function() {...}; 
	 */
	export function unregister(callback: () => void): void;
	/**
	 * Sends a message according to its contents. 
	 * @param message A message to send to the other party via GCM. 
	 * @param callback A function called after the message is successfully queued for sending. runtime.lastError should be checked, to ensure a message was sent without problems. 
	 * The callback parameter should be a function that looks like this:
	 * function(string messageId) {...};
	 * Parameter messageId: The ID of the message that the callback was issued for. 
	 */
	export function send(message: OutgoingMessage, callback: (messageId: string) => void): void;
	
	/** Fired when a message is received through GCM. */
	var onMessage: MessageReceptionEvent;
	/** Fired when a GCM server had to delete messages sent by an app server to the application. See Messages deleted event section of Cloud Messaging documentation for details on handling this event. */
	var onMessagesDeleted: MessageDeletionEvent;
	/** Fired when it was not possible to send a message to the GCM server. */
	var onSendError: GcmErrorEvent;
}

////////////////////
// History
////////////////////
/**
 * Use the chrome.history API to interact with the browser's record of visited pages. You can add, remove, and query for URLs in the browser's history. To override the history page with your own version, see Override Pages. 
 * Availability: Since Chrome 5.  
 * Permissions:  "history"   
 */
declare module chrome.history {
	/** An object encapsulating one visit to a URL. */
	interface VisitItem {
		/** The transition type for this visit from its referrer. */
		transition: string;
		/** Optional. When this visit occurred, represented in milliseconds since the epoch. */
		visitTime?: number;
		/** The unique identifier for this visit. */
		visitId: string;
		/** The visit ID of the referrer. */
		referringVisitId: string;
		/** The unique identifier for the item. */
		id: string;
	}

	/** An object encapsulating one result of a history query. */
	interface HistoryItem {
		/** Optional. The number of times the user has navigated to this page by typing in the address. */
		typedCount?: number;
		/** Optional. The title of the page when it was last loaded. */
		title?: string;
		/** Optional. The URL navigated to by a user. */
		url?: string;
		/** Optional. When this page was last loaded, represented in milliseconds since the epoch. */
		lastVisitTime?: number;
		/** Optional. The number of times the user has navigated to this page. */
		visitCount?: number;
		/** The unique identifier for the item. */
		id: string;
	}

	interface HistoryQuery {
		/** A free-text query to the history service. Leave empty to retrieve all pages. */
		text: string;
		/** Optional. The maximum number of results to retrieve. Defaults to 100. */
		maxResults?: number;
		/** Optional. Limit results to those visited after this date, represented in milliseconds since the epoch. */
		startTime?: number;
		/** Optional. Limit results to those visited before this date, represented in milliseconds since the epoch. */
		endTime?: number;
	}

	interface Url {
		/** The URL for the operation. It must be in the format as returned from a call to history.search. */
		url: string;
	}

	interface Range {
		/** Items added to history before this date, represented in milliseconds since the epoch. */
		endTime: number;
		/** Items added to history after this date, represented in milliseconds since the epoch. */
		startTime: number;
	}

	interface RemovedResult {
		/** True if all history was removed. If true, then urls will be empty. */
		allHistory: boolean;
		/** Optional. */
		urls?: string[];
	}

	interface HistoryVisitedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( HistoryItem result) {...}; 
		 */
		addListener(callback: (result: HistoryItem) => void): void;
	}

	interface HistoryVisitRemovedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object removed) {...}; 
		 */
		addListener(callback: (removed: RemovedResult) => void): void;
	}

	/**
	 * Searches the history for the last visit time of each page matching the query. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of HistoryItem results) {...}; 
	 */
	export function search(query: HistoryQuery, callback: (results: HistoryItem[]) => void): void;
	/**
	 * Adds a URL to the history at the current time with a transition type of "link". 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function addUrl(details: Url, callback?: () => void): void;
	/**
	 * Removes all items within the specified date range from the history. Pages will not be removed from the history unless all visits fall within the range. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function deleteRange(range: Range, callback: () => void): void;
	/**
	 * Deletes all items from the history. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function deleteAll(callback: () => void): void;
	/**
	 * Retrieves information about visits to a URL. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of VisitItem results) {...}; 
	 */
	export function getVisits(details: Url, callback: (results: VisitItem[]) => void): void;
	/**
	 * Removes all occurrences of the given URL from the history. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function deleteUrl(details: Url, callback?: () => void): void;

	/** Fired when a URL is visited, providing the HistoryItem data for that URL. This event fires before the page has loaded. */
	var onVisited: HistoryVisitedEvent;
	/** Fired when one or more URLs are removed from the history service. When all visits have been removed the URL is purged from history. */
	var onVisitRemoved: HistoryVisitRemovedEvent;
}

////////////////////
// i18n
////////////////////
/**
 * Use the chrome.i18n infrastructure to implement internationalization across your whole app or extension. 
 * @since Chrome 5. 
 */
declare module chrome.i18n {
	/**
	 * Gets the accept-languages of the browser. This is different from the locale used by the browser; to get the locale, use i18n.getUILanguage. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of string languages) {...};
	 * Parameter languages: Array of the accept languages of the browser, such as en-US,en,zh-CN 
	 */
	export function getAcceptLanguages(callback: (languages: string[]) => void): void;
	/**
	 * Gets the localized string for the specified message. If the message is missing, this method returns an empty string (''). If the format of the getMessage() call is wrong — for example, messageName is not a string or the substitutions array has more than 9 elements — this method returns undefined. 
	 * @param messageName The name of the message, as specified in the messages.json file.
	 * @param substitutions Optional. Up to 9 substitution strings, if the message requires any. 
	 */
	export function getMessage(messageName: string, substitutions?: any): string;
	/**
	 * Gets the browser UI language of the browser. This is different from i18n.getAcceptLanguages which returns the preferred user languages. 
	 * @since Chrome 35. 
	 */
	export function getUILanguage(): string;
}

////////////////////
// Identity
////////////////////
/**
 * Use the chrome.identity API to get OAuth2 access tokens. 
 * Permissions:  "identity"   
 * @since Chrome 29. 
 */
declare module chrome.identity {
	/** @since Chrome 32. */
	interface AccountInfo {
		/** A unique identifier for the account. This ID will not change for the lifetime of the account. */
		id: string;
	}

	interface TokenDetails {
		/**
		 * Optional. 
		 * Fetching a token may require the user to sign-in to Chrome, or approve the application's requested scopes. If the interactive flag is true, getAuthToken will prompt the user as necessary. When the flag is false or omitted, getAuthToken will return failure any time a prompt would be required. 
		 */
		interactive?: boolean;
		/**
		 * Optional.
		 * The account ID whose token should be returned. If not specified, the primary account for the profile will be used.
		 * account is only supported when the "enable-new-profile-management" flag is set.
		 * @since Chrome 37.
		 */
		account?: AccountInfo;
		/**
		 * Optional.
		 * A list of OAuth2 scopes to request.
		 * When the scopes field is present, it overrides the list of scopes specified in manifest.json.
		 * @since Chrome 37.
		 */
		scopes?: string[];
	}

	interface UserInfo {
		/** An email address for the user account signed into the current profile. Empty if the user is not signed in or the identity.email manifest permission is not specified. */
		email: string;
		/** A unique identifier for the account. This ID will not change for the lifetime of the account. Empty if the user is not signed in or (in M41+) the identity.email manifest permission is not specified. */
		id: string;
	}

	interface TokenInformation {
		/** The specific token that should be removed from the cache. */
		token: string;
	}

	interface WebAuthFlowOptions {
		/** The URL that initiates the auth flow. */
		url: string;
		/**
		 * Optional.
		 * Whether to launch auth flow in interactive mode.
		 * Since some auth flows may immediately redirect to a result URL, launchWebAuthFlow hides its web view until the first navigation either redirects to the final URL, or finishes loading a page meant to be displayed.
		 * If the interactive flag is true, the window will be displayed when a page load completes. If the flag is false or omitted, launchWebAuthFlow will return with an error if the initial navigation does not complete the flow.
		 */
		interactive?: boolean;
	}

	interface SignInChangeEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( AccountInfo account, boolean signedIn) {...}; 
		 */
		addListener(callback: (account: AccountInfo, signedIn: boolean) => void): void;
	} 
	
	/**
	 * Retrieves a list of AccountInfo objects describing the accounts present on the profile.
	 * getAccounts is only supported on dev channel.
	 * Dev channel only.
	 */
	export function getAccounts(callback: (accounts: AccountInfo[]) => void): void;
	/**
	 * Gets an OAuth2 access token using the client ID and scopes specified in the oauth2 section of manifest.json.
	 * The Identity API caches access tokens in memory, so it's ok to call getAuthToken non-interactively any time a token is required. The token cache automatically handles expiration.
	 * For a good user experience it is important interactive token requests are initiated by UI in your app explaining what the authorization is for. Failing to do this will cause your users to get authorization requests, or Chrome sign in screens if they are not signed in, with with no context. In particular, do not use getAuthToken interactively when your app is first launched.
	 * @param details Token options. 
	 * @param callback Called with an OAuth2 access token as specified by the manifest, or undefined if there was an error. 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function(string token) {...}; 
	 */
	export function getAuthToken(details: TokenDetails, callback?: (token: string) => void): void;
	/**
	 * Retrieves email address and obfuscated gaia id of the user signed into a profile.
	 * This API is different from identity.getAccounts in two ways. The information returned is available offline, and it only applies to the primary account for the profile.
	 * @since Chrome 37.
	 */
	export function getProfileUserInfo(callback: (userInfo: UserInfo) => void): void;
	/**
	 * Removes an OAuth2 access token from the Identity API's token cache.
	 * If an access token is discovered to be invalid, it should be passed to removeCachedAuthToken to remove it from the cache. The app may then retrieve a fresh token with getAuthToken.
	 * @param details Token information. 
	 * @param callback Called when the token has been removed from the cache. 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function() {...}; 
	 */
	export function removeCachedAuthToken(details: TokenInformation, callback?: () => void): void;
	/**
	 * Starts an auth flow at the specified URL.
	 * This method enables auth flows with non-Google identity providers by launching a web view and navigating it to the first URL in the provider's auth flow. When the provider redirects to a URL matching the pattern https://<app-id>.chromiumapp.org/*, the window will close, and the final redirect URL will be passed to the callback function.
	 * For a good user experience it is important interactive auth flows are initiated by UI in your app explaining what the authorization is for. Failing to do this will cause your users to get authorization requests with no context. In particular, do not launch an interactive auth flow when your app is first launched.
	 * @param details WebAuth flow options. 
	 * @param callback Called with the URL redirected back to your application. 
	 * The callback parameter should be a function that looks like this:
	 * function(string responseUrl) {...}; 
	 */
	export function launchWebAuthFlow(details: WebAuthFlowOptions, callback: (responseUrl?: string) => void): void;
	/**
	 * Generates a redirect URL to be used in launchWebAuthFlow.
	 * The generated URLs match the pattern https://<app-id>.chromiumapp.org/*.
	 * @since Chrome 33.
	 * @param path Optional. The path appended to the end of the generated URL. 
	 */
	export function getRedirectURL(path?: string): void;
	
	/**
	 * Fired when signin state changes for an account on the user's profile. 
	 * @since Chrome 33.
	 */
	var onSignInChanged: SignInChangeEvent;
}

////////////////////
// Idle
////////////////////
/**
 * Use the chrome.idle API to detect when the machine's idle state changes. 
 * Permissions:  "idle"   
 * @since Chrome 6.
 */
declare module chrome.idle {
	interface IdleStateChangedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( IdleState newState) {...}; 
		 */
		addListener(callback: (newState: string) => void): void;
	}

	/**
	 * Returns "locked" if the system is locked, "idle" if the user has not generated any input for a specified number of seconds, or "active" otherwise. 
	 * @param detectionIntervalInSeconds The system is considered idle if detectionIntervalInSeconds seconds have elapsed since the last user input detected. 
	 * Since Chrome 25. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function( IdleState newState) {...}; 
	 */
	export function queryState(detectionIntervalInSeconds: number, callback: (newState: string) => void): void;
	/**
	 * Sets the interval, in seconds, used to determine when the system is in an idle state for onStateChanged events. The default interval is 60 seconds. 
	 * @since Chrome 25.
	 * @param intervalInSeconds Threshold, in seconds, used to determine when the system is in an idle state. 
	 */
	export function setDetectionInterval(intervalInSeconds: number): void;

	/** Fired when the system changes to an active, idle or locked state. The event fires with "locked" if the screen is locked or the screensaver activates, "idle" if the system is unlocked and the user has not generated any input for a specified number of seconds, and "active" when the user generates input on an idle system. */
	var onStateChanged: IdleStateChangedEvent;
}

////////////////////
// Input - IME
////////////////////
/**
 * Use the chrome.input.ime API to implement a custom IME for Chrome OS. This allows your extension to handle keystrokes, set the composition, and manage the candidate window. 
 * Permissions:  "input"   
 * @since Chrome 21.
 */
declare module chrome.input.ime {
	/** See http://www.w3.org/TR/DOM-Level-3-Events/#events-KeyboardEvent */
	interface KeyboardEvent {
		/**
		 * Optional.
		 * Whether or not the SHIFT key is pressed. 
		 */
		shiftKey?: boolean;
		/**
		 * Optional.
		 * Whether or not the ALT key is pressed. 
		 */
		altKey?: boolean;
		/** The ID of the request. */
		requestId: string;
		/** Value of the key being pressed */
		key: string;
		/**
		 * Optional.
		 * Whether or not the CTRL key is pressed. 
		 */
		ctrlKey?: boolean;
		/** One of keyup or keydown. */
		type: string;
		/**
		 * Optional.
		 * The extension ID of the sender of this keyevent. 
		 * @since Chrome 34.
		 */
		extensionId?: string;
		/**
		 * Optional.
		 * Value of the physical key being pressed. The value is not affected by current keyboard layout or modifier state. 
		 * @since Chrome 26.
		 */
		code: string;
		/**
		 * Optional.
		 * The deprecated HTML keyCode, which is system- and implementation-dependent numerical code signifying the unmodified identifier associated with the key pressed. 
		 * @since Chrome 37.
		 */
		keyCode?: number;
		/**
		 * Optional.
		 * Whether or not the CAPS_LOCK is enabled. 
		 * @since Chrome 29.
		 */
		capsLock?: boolean;
	}

	/** Describes an input Context */
	interface InputContext {
		/** This is used to specify targets of text field operations. This ID becomes invalid as soon as onBlur is called. */
		contextID: number;
		/** Type of value this text field edits, (Text, Number, URL, etc) */
		type: string;
		/**
		 * Whether the text field wants auto-correct. 
		 * @since Chrome 40.
		 */
		autoCorrect: boolean;
		/**
		 * Whether the text field wants auto-complete. 
		 * @since Chrome 40.
		 */
		autoComplete: boolean;
		/**
		 * Whether the text field wants spell-check. 
		 * @since Chrome 40.
		 */
		spellCheck: boolean;
	}
	
	/**
	 * A menu item used by an input method to interact with the user from the language menu.
	 * @since Chrome 30.
	 */
	interface MenuItem {
		/** String that will be passed to callbacks referencing this MenuItem. */
		id: string;
		/** Optional. Text displayed in the menu for this item. */
		label?: string;
		/** Optional. The type of menu item. */
		style?: string;
		/** Optional. Indicates this item is visible. */
		visible?: boolean;
		/** Indicates this item should be drawn with a check. */
		checked?: boolean;
		/** Indicates this item is enabled. */
		enabled?: boolean;
	}

	interface ImeParameters {
		/** MenuItems to use. */
		items: MenuItem[];
		/** ID of the engine to use */
		engineID: string;
	}

	interface CommitTextParameters {
		/** The text to commit */
		text: string;
		/** ID of the context where the text will be committed */
		contextID: number;
	}

	interface CandidateUsage {
		/** The title string of details description. */
		title: string;
		/** The body string of detail description. */
		body: string;
	}

	interface CandidateTemplate {
		/** The candidate */
		candidate: string;
		/** The candidate's id */
		id: number;
		/** 
		 * Optional.
		 * The id to add these candidates under 
		 */
		parentId?: number;
		/**
		 * Optional.
		 * Short string displayed to next to the candidate, often the shortcut key or index 
		 */
		label?: string;
		/**
		 * Optional.
		 * Additional text describing the candidate 
		 */
		annotation?: string;
		/**
		 * Optional.
		 * The usage or detail description of word. 
		 */
		usage?: CandidateUsage;
	}

	interface CandidatesParameters {
		/** ID of the context that owns the candidate window. */
		contextID: number;
		/** List of candidates to show in the candidate window */
		candidates: CandidateTemplate[];
	}

	interface CompositionParameterSegment {
		/** Index of the character to start this segment at */
		start: number;
		/** Index of the character to end this segment after. */
		end: number;
		/** The type of the underline to modify this segment. */
		style: string;
	}

	interface CompositionParameters {
		/** ID of the context where the composition text will be set */
		contextID: number;
		/** Text to set */
		text: string;
		/** Optional. List of segments and their associated types. */
		segments: CompositionParameterSegment[];
		/** Position in the text of the cursor. */
		cursor: number;
		/** Optional. Position in the text that the selection starts at. */
		selectionStart?: number;
		/** Optional. Position in the text that the selection ends at. */
		selectionEnd?: number;
	}

	interface MenuItemParameters {
		items: Object[];
		engineId: string;
	}

	interface CandidateWindowParameterProperties {
		/**
		 * Optional.
		 * True to show the cursor, false to hide it. 
		 */
		cursorVisible?: boolean;
		/**
		 * Optional.
		 * True if the candidate window should be rendered vertical, false to make it horizontal. 
		 */
		vertical?: boolean;
		/**
		 * Optional.
		 * The number of candidates to display per page. 
		 */
		pageSize?: number;
		/**
		 * Optional.
		 * True to display the auxiliary text, false to hide it. 
		 */
		auxiliaryTextVisible?: boolean;
		/**
		 * Optional.
		 * Text that is shown at the bottom of the candidate window. 
		 */
		auxiliaryText?: string;
		/**
		 * Optional.
		 * True to show the Candidate window, false to hide it. 
		 */
		visible?: boolean;
		/** 
		 * Optional.
		 * Where to display the candidate window. 
		 * @since Chrome 28.
		 */
		windowPosition?: string;
	}

	interface CandidateWindowParameter {
		/** ID of the engine to set properties on. */
		engineID: string;
		properties: CandidateWindowParameterProperties;
	}

	interface ClearCompositionParameters {
		/** ID of the context where the composition will be cleared */
		contextID: number;
	}

	interface CursorPositionParameters {
		/** ID of the candidate to select. */
		candidateID: number;
		/** ID of the context that owns the candidate window. */
		contextID: number;
	}

	interface SendKeyEventParameters {
		/** ID of the context where the key events will be sent, or zero to send key events to non-input field. */
		contextID: number;
		/** Data on the key event. */
		keyData: KeyboardEvent[];
	}

	interface DeleteSurroundingTextParameters {
		/** ID of the engine receiving the event. */
		engineID: string;
		/** ID of the context where the surrounding text will be deleted. */
		contextID: number;
		/** The offset from the caret position where deletion will start. This value can be negative. */
		offset: number;
		/** The number of characters to be deleted */
		length: number;
	}

	interface SurroundingTextInfo {
		/** The text around cursor. */
		text: string;
		/** The ending position of the selection. This value indicates caret position if there is no selection. */
		focus: number;
		/** The beginning position of the selection. This value indicates caret position if is no selection. */
		anchor: number;
	}

	interface BlurEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(integer contextID) {...};
		 * Parameter contextID: The ID of the text field that has lost focus. The ID is invalid after this call 
		 */
		addListener(callback: (contextID: number) => void): void;
	}

	interface CandidateClickedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string engineID, integer candidateID, MouseButton button) {...};
		 * Parameter engineID: ID of the engine receiving the event
		 * Parameter candidateID: ID of the candidate that was clicked. 
		 * Parameter button: Which mouse buttons was clicked. 
		 */
		addListener(callback: (engineID: string, candidateID: number, button: string) => void): void;
	}

	interface KeyEventEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string engineID, KeyboardEvent keyData) {...};
		 * Parameter engineID: ID of the engine receiving the event
		 * Parameter keyData: Data on the key event 
		 */
		addListener(callback: (engineID: string, keyData: KeyboardEvent) => void): void;
	}

	interface DeactivatedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string engineID) {...};
		 * Parameter engineID: ID of the engine receiving the event 
		 */
		addListener(callback: (engineID: string) => void): void;
	}

	interface InputContextUpdateEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( InputContext context) {...};
		 * Parameter context: An InputContext object describing the text field that has changed. 
		 */
		addListener(callback: (context: InputContext) => void): void;
	}

	interface ActivateEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string engineID, ScreenType screen) {...}; 
		 * Parameter engineID: ID of the engine receiving the event 
		 * Parameter The screen type under which the IME is activated. 
		 */
		addListener(callback: (engineID: string, screen: string) => void): void;
	}

	interface FocusEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( InputContext context) {...};
		 * Parameter context: Describes the text field that has acquired focus. 
		 */
		addListener(callback: (context: InputContext) => void): void;
	}

	interface MenuItemActivatedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string engineID, string name) {...}; 
		 * Parameter engineID: ID of the engine receiving the event 
		 * Parameter name: Name of the MenuItem which was activated 
		 */
		addListener(callback: (engineID: string, name: string) => void): void;
	}

	interface SurroundingTextChangedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string engineID, object surroundingInfo) {...};
		 * Parameter engineID: ID of the engine receiving the event
		 * Parameter surroundingInfo: The surrounding information. 
		 */
		addListener(callback: (engineID: string, surroundingInfo: SurroundingTextInfo) => void): void;
	}

	interface InputResetEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string engineID) {...};
		 * Parameter engineID: ID of the engine receiving the event 
		 */
		addListener(callback: (engineID: string) => void): void;
	}

	/**
	 * Adds the provided menu items to the language menu when this IME is active. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function setMenuItems(parameters: ImeParameters, callback?: () => void): void;
	/**
	 * Commits the provided text to the current input. 
	 * @param callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set. 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function(boolean success) {...}; 
	 */
	export function commitText(parameters: CommitTextParameters, callback?: (success: boolean) => void): void;
	/**
	 * Sets the current candidate list. This fails if this extension doesn't own the active IME 
	 * @param callback Called when the operation completes. 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function(boolean success) {...}; 
	 */
	export function setCandidates(parameters: CandidatesParameters, callback?: (success: boolean) => void): void;
	/** 
	 * Set the current composition. If this extension does not own the active IME, this fails. 
	 * @param callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set. 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function(boolean success) {...}; 
	 */
	export function setComposition(parameters: CompositionParameters, callback?: (success: boolean) => void): void;
	/**
	 * Updates the state of the MenuItems specified 
	 * @param callback Called when the operation completes 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function() {...}; 
	 */
	export function updateMenuItems(parameters: MenuItemParameters, callback?: () => void): void;
	/**
	 * Sets the properties of the candidate window. This fails if the extension doesn't own the active IME 
	 * @param callback Called when the operation completes. 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function(boolean success) {...}; 
	 */
	export function setCandidateWindowProperties(parameters: CandidateWindowParameter, callback?: (success: boolean) => void): void;
	/**
	 * Clear the current composition. If this extension does not own the active IME, this fails. 
	 * @param callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set. 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function(boolean success) {...}; 
	 */
	export function clearComposition(parameters: ClearCompositionParameters, callback?: (success: boolean) => void): void;
	/**
	 * Set the position of the cursor in the candidate window. This is a no-op if this extension does not own the active IME. 
	 * @param callback Called when the operation completes 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function(boolean success) {...}; 
	 */
	export function setCursorPosition(parameters: CursorPositionParameters, callback?: (success: boolean) => void): void;
	/**
	 * Sends the key events. This function is expected to be used by virtual keyboards. When key(s) on a virtual keyboard is pressed by a user, this function is used to propagate that event to the system. 
	 * @since Chrome 33.
	 * @param callback Called when the operation completes. 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function() {...}; 
	 */
	export function sendKeyEvents(parameters: SendKeyEventParameters, callback?: () => void): void;
	/**
	 * Hides the input view window, which is popped up automatically by system. If the input view window is already hidden, this function will do nothing. 
	 * @since Chrome 34.
	 */
	export function hideInputView(): void;
	/**
	 * Deletes the text around the caret. 
	 * @since Chrome 27.
	 */
	export function deleteSurroundingText(parameters: DeleteSurroundingTextParameters, callback?: () => void): void;
	/**
	 * Indicates that the key event received by onKeyEvent is handled. This should only be called if the onKeyEvent listener is asynchronous. 
	 * @since Chrome 25.
	 * @param requestId Request id of the event that was handled. This should come from keyEvent.requestId 
	 * @param response True if the keystroke was handled, false if not 
	 */
	export function keyEventHandled(requestId: string, response: boolean): void;

	/** This event is sent when focus leaves a text box. It is sent to all extensions that are listening to this event, and enabled by the user. */
	var onBlur: BlurEvent;
	/** This event is sent if this extension owns the active IME. */
	var onCandidateClicked: CandidateClickedEvent;
	/** This event is sent if this extension owns the active IME. */
	var onKeyEvent: KeyEventEvent;
	/** This event is sent when an IME is deactivated. It signals that the IME will no longer be receiving onKeyPress events. */
	var onDeactivated: DeactivatedEvent;
	/** This event is sent when the properties of the current InputContext change, such as the the type. It is sent to all extensions that are listening to this event, and enabled by the user. */
	var onInputContextUpdate: InputContextUpdateEvent;
	/** This event is sent when an IME is activated. It signals that the IME will be receiving onKeyPress events. */
	var onActivate: ActivateEvent;
	/** This event is sent when focus enters a text box. It is sent to all extensions that are listening to this event, and enabled by the user. */
	var onFocus: FocusEvent;
	/** Called when the user selects a menu item */
	var onMenuItemActivated: MenuItemActivatedEvent;
	/**
	 * Called when the editable string around caret is changed or when the caret position is moved. The text length is limited to 100 characters for each back and forth direction. 
	 * @since Chrome 27.
	 */
	var onSurroundingTextChanged: SurroundingTextChangedEvent;
	/**
	 * This event is sent when chrome terminates ongoing text input session. 
	 * @since Chrome 29.
	 */
	var onReset: InputResetEvent;
}

////////////////////
// Management
////////////////////
/**
 * The chrome.management API provides ways to manage the list of extensions/apps that are installed and running. It is particularly useful for extensions that override the built-in New Tab page. 
 * Permissions:  "management"   
 * @since Chrome 8.
 */
declare module chrome.management {
	/** Information about an installed extension, app, or theme. */
	interface ExtensionInfo {
		/**
		 * Optional.
		 * A reason the item is disabled. 
		 * @since Chrome 17.
		 */
		disabledReason?: string;
		/** Optional. The launch url (only present for apps). */
		appLaunchUrl?: string;
		/**
		 * The description of this extension, app, or theme. 
		 * @since Chrome 9.
		 */
		description: string;
		/**
		 * Returns a list of API based permissions. 
		 * @since Chrome 9.
		 */
		permissions: string[];
		/**
		 * Optional.
		 * A list of icon information. Note that this just reflects what was declared in the manifest, and the actual image at that url may be larger or smaller than what was declared, so you might consider using explicit width and height attributes on img tags referencing these images. See the manifest documentation on icons for more details. 
		 */
		icons?: IconInfo[];
		/**
		 * Returns a list of host based permissions. 
		 * @since Chrome 9.
		 */
		hostPermissions: string[];
		/** Whether it is currently enabled or disabled. */
		enabled: boolean;
		/**
		 * Optional.
		 * The URL of the homepage of this extension, app, or theme. 
		 * @since Chrome 11.
		 */
		homepageUrl?: string;
		/**
		 * Whether this extension can be disabled or uninstalled by the user. 
		 * @since Chrome 12.
		 */
		mayDisable: boolean;
		/**
		 * How the extension was installed. 
		 * @since Chrome 22.
		 */
		installType: string;
		/** The version of this extension, app, or theme. */
		version: string;
		/** The extension's unique identifier. */
		id: string;
		/**
		 * Whether the extension, app, or theme declares that it supports offline. 
		 * @since Chrome 15.
		 */
		offlineEnabled: boolean;
		/**
		 * Optional.
		 * The update URL of this extension, app, or theme. 
		 * @since Chrome 16.
		 */
		updateUrl?: string;
		/**
		 * The type of this extension, app, or theme. 
		 * @since Chrome 23.
		 */
		type: string;
		/** The url for the item's options page, if it has one. */
		optionsUrl: string;
		/** The name of this extension, app, or theme. */
		name: string;
		/**
		 * A short version of the name of this extension, app, or theme. 
		 * @since Chrome 31.
		 */
		shortName: string;
		/**
		 * True if this is an app.
		 * @deprecated since Chrome 33. Please use management.ExtensionInfo.type. 
		 */
		isApp: boolean;
		/**
		 * Optional.
		 * The app launch type (only present for apps). 
		 * @since Chrome 37.
		 */
		launchType?: string;
		/**
		 * Optional.
		 * The currently available launch types (only present for apps). 
		 * @since Chrome 37.
		 */
		availableLaunchTypes?: string[];
	}

	/** Information about an icon belonging to an extension, app, or theme. */
	interface IconInfo {
		/** The URL for this icon image. To display a grayscale version of the icon (to indicate that an extension is disabled, for example), append ?grayscale=true to the URL. */
		url: string;
		/** A number representing the width and height of the icon. Likely values include (but are not limited to) 128, 48, 24, and 16. */
		size: number;
	}

	interface UninstallOptions {
		/**
		 * Optional.
		 * Whether or not a confirm-uninstall dialog should prompt the user. Defaults to false for self uninstalls. If an extension uninstalls another extension, this parameter is ignored and the dialog is always shown. 
		 */
		showConfirmDialog?: boolean;
	}

	interface ManagementDisabledEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( ExtensionInfo info) {...}; 
		 */
		addListener(callback: (info: ExtensionInfo) => void): void;
	}

	interface ManagementUninstalledEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string id) {...};
		 * Parameter id: The id of the extension, app, or theme that was uninstalled.  
		 */
		addListener(callback: (id: string) => void): void;
	}

	interface ManagementInstalledEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( ExtensionInfo info) {...}; 
		 */
		addListener(callback: (info: ExtensionInfo) => void): void;
	}

	interface ManagementEnabledEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( ExtensionInfo info) {...}; 
		 */
		addListener(callback: (info: ExtensionInfo) => void): void;
	}

	/**
	 * Enables or disables an app or extension. 
	 * @param id This should be the id from an item of management.ExtensionInfo. 
	 * @param enabled Whether this item should be enabled or disabled. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function setEnabled(id: string, enabled: boolean, callback?: () => void): void;
	/**
	 * Returns a list of permission warnings for the given extension id. 
	 * @since Chrome 15.
	 * @param id The ID of an already installed extension. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function(array of string permissionWarnings) {...}; 
	 */
	export function getPermissionWarningsById(id: string, callback?: (permissionWarnings: string[]) => void): void;
	/**
	 * Returns information about the installed extension, app, or theme that has the given ID. 
	 * @since Chrome 9.
	 * @param id The ID from an item of management.ExtensionInfo. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function( ExtensionInfo result) {...}; 
	 */
	export function get(id: string, callback?: (result: ExtensionInfo) => void): void;
	/**
	 * Returns a list of information about installed extensions and apps. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function(array of ExtensionInfo result) {...}; 
	 */
	export function getAll(callback?: (result: ExtensionInfo[]) => void): void;
	/**
	 * Returns a list of permission warnings for the given extension manifest string. Note: This function can be used without requesting the 'management' permission in the manifest. 
	 * @since Chrome 15.
	 * @param manifestStr Extension manifest JSON string. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function(array of string permissionWarnings) {...}; 
	 */
	export function getPermissionWarningsByManifest(manifestStr: string, callback?: (permissionwarnings: string[]) => void): void;
	/**
	 * Launches an application. 
	 * @param id The extension id of the application. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function launchApp(id: string, callback?: () => void): void;
	/**
	 * Uninstalls a currently installed app or extension.
	 * @since Chrome 21. 
	 * @param id This should be the id from an item of management.ExtensionInfo.
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function uninstall(id: string, options?: UninstallOptions, callback?: () => void): void;
	/**
	 * Uninstalls a currently installed app or extension.
	 * @deprecated since Chrome 21. The options parameter was added to this function. 
	 * @param id This should be the id from an item of management.ExtensionInfo.
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function uninstall(id: string, callback?: () => void): void;
	/**
	 * Returns information about the calling extension, app, or theme. Note: This function can be used without requesting the 'management' permission in the manifest. 
	 * @since Chrome 39.
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function( ExtensionInfo result) {...}; 
	 */
	export function getSelf(callback?: (result: ExtensionInfo) => void): void;
	/**
	 * Uninstalls the calling extension. 
	 * Note: This function can be used without requesting the 'management' permission in the manifest.
	 * @since Chrome 26. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function uninstallSelf(options?: UninstallOptions, callback?: () => void): void;
	/**
	 * Uninstalls the calling extension. 
	 * Note: This function can be used without requesting the 'management' permission in the manifest.
	 * @since Chrome 26. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function uninstallSelf(callback?: () => void): void;
	/**
	 * Display options to create shortcuts for an app. On Mac, only packaged app shortcuts can be created. 
	 * @since Chrome 37.
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function createAppShortcut(id: string, callback?: () => void): void;
	/**
	 * Set the launch type of an app. 
	 * @since Chrome 37.
	 * @param id This should be the id from an app item of management.ExtensionInfo. 
	 * @param launchType The target launch type. Always check and make sure this launch type is in ExtensionInfo.availableLaunchTypes, because the available launch types vary on different platforms and configurations. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function setLaunchType(id: string, launchType: string, callback?: () => void): void;
	/**
	 * Generate an app for a URL. Returns the generated bookmark app. 
	 * @since Chrome 37.
	 * @param url The URL of a web page. The scheme of the URL can only be "http" or "https". 
	 * @param title The title of the generated app. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function( ExtensionInfo result) {...}; 
	 */
	export function generateAppForLink(url: string, title: string, callback?: (result: ExtensionInfo) => void): void;

	/** Fired when an app or extension has been disabled. */    
	var onDisabled: ManagementDisabledEvent;
	/** Fired when an app or extension has been uninstalled. */
	var onUninstalled: ManagementUninstalledEvent;
	/** Fired when an app or extension has been installed. */
	var onInstalled: ManagementInstalledEvent;
	/** Fired when an app or extension has been enabled. */
	var onEnabled: ManagementEnabledEvent;
}

////////////////////
// Notifications
// https://developer.chrome.com/extensions/notifications
////////////////////
declare module chrome.notifications {
	interface ButtonOptions {
		title: string;
		iconUrl?: string;
	}

	interface ItemOptions {
		title: string;
		message: string;
	}

	interface NotificationOptions {
		type?: string;
		iconUrl?: string;
		title?: string;
		message?: string;
		contextMessage?: string;
		priority?: number;
		eventTime?: number;
		buttons?: Array<ButtonOptions>;
		items?: Array<ItemOptions>;
		progress?: number;
		isClickable?: boolean;
	}

	interface OnClosed {
		addListener(callback: (notificationId: string, byUser: boolean) => void): void;
	}

	interface OnClicked {
		addListener(callback: (notificationId: string) => void): void;
	}

	interface OnButtonClicked {
		addListener(callback: (notificationId: string, buttonIndex: number) => void): void;
	}

	interface OnPermissionLevelChanged {
		addListener(callback: (level: string) => void): void;
	}

	interface OnShowSettings {
		addListener(callback: Function): void;
	}

	export var onClosed: OnClosed;
	export var onClicked: OnClicked;
	export var onButtonClicked: OnButtonClicked;
	export var onPermissionLevelChanged: OnPermissionLevelChanged;
	export var onShowSettings: OnShowSettings;

	export function create(notificationId: string, options: NotificationOptions, callback: (notificationId: string) => void): void;
	export function update(notificationId: string, options: NotificationOptions, callback: (wasUpdated: boolean) => void): void;
	export function clear(notificationId: string, callback: (wasCleared: boolean) => void): void;
	export function getAll(callback: (notifications: any) => void): void;
	export function getPermissionLevel(callback: (level: string) => void): void;
}

////////////////////
// Omnibox
////////////////////
declare module chrome.omnibox {
	interface SuggestResult {
		content: string;
		description: string;
	}

	interface Suggestion {
		description: string;
	}

	interface OmniboxInputEnteredEvent extends chrome.events.Event {
		addListener(callback: (text: string) => void): void;
	}

	interface OmniboxInputChangedEvent extends chrome.events.Event {
		addListener(callback: (text: string, suggest: (suggestResults: SuggestResult[]) => void) => void): void;
	}

	interface OmniboxInputStartedEvent extends chrome.events.Event {
		addListener(callback: Function): void;
	}

	interface OmniboxInputCancelledEvent extends chrome.events.Event {
		addListener(callback: Function): void;
	}

	export function setDefaultSuggestion(suggestion: Suggestion): void;

	var onInputEntered: OmniboxInputEnteredEvent;
	var onInputChanged: OmniboxInputChangedEvent;
	var onInputStarted: OmniboxInputStartedEvent;
	var onInputCancelled: OmniboxInputCancelledEvent;
}

////////////////////
// Page Action
////////////////////
declare module chrome.pageAction {
	interface PageActionClickedEvent extends chrome.events.Event {
		addListener(callback: (tab: chrome.tabs.Tab) => void): void;
	}

	interface TitleDetails {
		tabId: number;
		title: string;
	}

	interface GetDetails {
		tabId: number;
	}

	interface PopupDetails {
		tabId: number;
		popup: string;
	}

	interface IconDetails {
		tabId: number;
		iconIndex?: number;
		imageData?: ImageData;
		path?: any;
	}

	export function hide(tabId: number): void;
	export function show(tabId: number): void;
	export function setTitle(details: TitleDetails): void;
	export function setPopup(details: PopupDetails): void;
	export function getTitle(details: GetDetails, callback: (result: string) => void): void;
	export function getPopup(details: GetDetails, callback: (result: string) => void): void;
	export function setIcon(details: IconDetails, callback?: Function): void;

	var onClicked: PageActionClickedEvent;
}

////////////////////
// Page Capture
////////////////////
declare module chrome.pageCapture {
	interface SaveDetails {
		tabId: number;
	}

	export function saveAsMHTML(details: SaveDetails, callback: (mhtmlData: any) => void): void;
}

////////////////////
// Permissions
////////////////////
declare module chrome.permissions {
	interface Permissions {
		origins?: string[];
		permissions?: string[];
	}

	interface PermissionsRemovedEvent {
		addListener(callback: (permissions: Permissions) => void): void;
	}

	interface PermissionsAddedEvent {
		addListener(callback: (permissions: Permissions) => void): void;
	}

	export function contains(permissions: Permissions, callback: (result: boolean) => void): void;
	export function getAll(callback: (permissions: Permissions) => void): void;
	export function request(permissions: Permissions, callback?: (granted: boolean) => void): void;
	export function remove(permissions: Permissions, callback?: (removed: boolean) => void): void;

	var onRemoved: PermissionsRemovedEvent;
	var onAdded: PermissionsAddedEvent;
}

////////////////////
// Privacy
////////////////////
declare module chrome.privacy {
	interface Services {
		spellingServiceEnabled: chrome.types.ChromeSetting;
		searchSuggestEnabled: chrome.types.ChromeSetting;
		instantEnabled: chrome.types.ChromeSetting;
		alternateErrorPagesEnabled: chrome.types.ChromeSetting;
		safeBrowsingEnabled: chrome.types.ChromeSetting;
		autofillEnabled: chrome.types.ChromeSetting;
		translationServiceEnabled: chrome.types.ChromeSetting;
	}

	interface Network {
		networkPredictionEnabled: chrome.types.ChromeSetting;
	}

	interface Websites {
		thirdPartyCookiesAllowed: chrome.types.ChromeSetting;
		referrersEnabled: chrome.types.ChromeSetting;
		hyperlinkAuditingEnabled: chrome.types.ChromeSetting;
		protectedContentEnabled: chrome.types.ChromeSetting;
	}

	var services: Services;
	var network: Network;
	var websites: Websites;
}

////////////////////
// Proxy
////////////////////
declare module chrome.proxy {
	interface PacScript {
		url?: string;
		mandatory?: boolean;
		data?: string;
	}

	interface ProxyConfig {
		rules?: ProxyRules;
		pacScript?: PacScript;
		mode: string;
	}

	interface ProxyServer {
		host: string;
		scheme?: string;
		port?: number;
	}

	interface ProxyRules {
		proxyForFtp?: ProxyServer;
		proxyForHttp?: ProxyServer;
		facllbackProxy?: ProxyServer;
		singleProxy?: ProxyServer;
		proxyForHttps?: ProxyServer;
		bypassList?: string[];
	}

	interface ErrorDetails {
		details: string;
		error: string;
		fatal: boolean;
	}

	interface ProxyErrorEvent extends chrome.events.Event {
		addListener(callback: (details: ErrorDetails) => void): void;
	}

	var settings: chrome.types.ChromeSetting;
	var onProxyError: ProxyErrorEvent;
}

////////////////////
// Runtime
////////////////////
declare module chrome.runtime {
	var lastError: LastError;
	var id: string;

	interface LastError {
		message?: string;
	}

	interface ConnectInfo {
		name?: string;
	}

	interface InstalledDetails {
		reason: string;
		previousVersion?: string;
	}

	interface MessageOptions {
		includeTlsChannelId?: boolean;
	}

	interface MessageSender {
		id?: string;
		tab?: chrome.tabs.Tab;
		frameId?: number;
		url?: string;
		tlsChannelId?: string;
	}

	interface PlatformInfo {
		os: string;
		arch: string;
		nacl_arch: string;
	}

	interface Port {
		postMessage: (message: Object) => void;
		disconnect: () => void;
		sender?: MessageSender;
		onDisconnect: chrome.events.Event;
		onMessage: PortMessageEvent;
		name: string;
	}

	interface UpdateAvailableDetails {
		version: string;
	}

	interface UpdateCheckDetails {
		version: string;
	}

	interface PortMessageEvent extends chrome.events.Event {
		addListener(callback: (message: Object, port: Port) => void): void;
	}

	interface ExtensionMessageEvent extends chrome.events.Event {
		addListener(callback: (message: any, sender: MessageSender, sendResponse: Function) => void): void;
	}

	interface ExtensionMessageExternalEvent extends chrome.events.Event {
		addListener(callback: (message: any, sender: MessageSender, sendResponse: Function) => void): void;
	}

	interface ExtensionConnectEvent extends chrome.events.Event {
		addListener(callback: (port: Port) => void): void;
	}

	interface ExtensionConnectExternalEvent extends chrome.events.Event {
		addListener(callback: (port: Port) => void): void;
	}

	interface RuntimeSuspendEvent extends chrome.events.Event {
		addListener(callback: Function): void;
	}

	interface RuntimeStartupEvent extends chrome.events.Event {
		addListener(callback: Function): void;
	}

	interface RuntimeInstalledEvent extends chrome.events.Event {
		addListener(callback: (details: InstalledDetails) => void): void;
	}

	interface RuntimeSuspendCanceledEvent extends chrome.events.Event {
		addListener(callback: Function): void;
	}
	interface RuntimeMessageEvent extends chrome.events.Event {
		addListener(callback: Function): void;
	}

	interface RuntimeRestartRequiredEvent extends chrome.events.Event {
		addListener(callback: (reason: string) => void): void;
	}

	interface RuntimeUpdateAvailableEvent extends chrome.events.Event {
		addListener(callback: (details: UpdateAvailableDetails) => void): void;
	}

	export function connect(connectInfo?: ConnectInfo): Port;
	export function connect(extensionId: string, connectInfo?: ConnectInfo): Port;
	export function connectNative(application: string): Port;
	export function getBackgroundPage(callback: (backgroundPage?: Window) => void): void;
	export function getManifest(): Object;
	export function getPackageDirectoryEntry(callback: (directoryEntry: any) => void): void;
	export function getPlatformInfo(callback: (platformInfo: PlatformInfo) => void): void;
	export function getURL(path: string): string;
	export function reload(): void;
	export function requestUpdateCheck(callback: (status: string, details?: UpdateCheckDetails) => void): void;
	export function restart(): void;
	export function sendMessage(message: any, responseCallback?: (response: any) => void): void;
	export function sendMessage(message: any, options: MessageOptions, responseCallback?: (response: any) => void): void;
	export function sendMessage(extensionId: string, message: any, responseCallback?: (response: any) => void): void;
	export function sendMessage(extensionId: string, message: any, options: MessageOptions, responseCallback?: (response: any) => void): void;
	export function sendNativeMessage(application: string, message: any, responseCallback?: (response: any) => void): void;
	export function setUninstallUrl(url: string): void;

	var onConnect: ExtensionConnectEvent;
	var onConnectExternal: ExtensionConnectExternalEvent;
	var onSuspend: RuntimeSuspendEvent;
	var onStartup: RuntimeStartupEvent;
	var onInstalled: RuntimeInstalledEvent;
	var onSuspendCanceled: RuntimeSuspendCanceledEvent;
	var onMessage: ExtensionMessageEvent;
	var onMessageExternal: ExtensionMessageExternalEvent;
	var onRestartRequired: RuntimeRestartRequiredEvent;
	var onUpdateAvailable: RuntimeUpdateAvailableEvent;

}

////////////////////
// Script Badge
////////////////////
declare module chrome.scriptBadge {
	interface GetPopupDetails {
		tabId: number;
	}

	interface AttentionDetails {
		tabId: number;
	}

	interface SetPopupDetails {
		tabId: number;
		popup: string;
	}

	interface ScriptBadgeClickedEvent extends chrome.events.Event {
		addListener(callback: (tab: chrome.tabs.Tab) => void): void;
	}

	export function getPopup(details: GetPopupDetails, callback: Function): void;
	export function getAttention(details: AttentionDetails): void;
	export function setPopup(details: SetPopupDetails): void;

	var onClicked: ScriptBadgeClickedEvent;
}

////////////////////
// Storage
////////////////////
declare module chrome.storage {
	interface StorageArea {
		getBytesInUse(callback: (bytesInUse: number) => void): void;
		getBytesInUse(keys: string, callback: (bytesInUse: number) => void): void;
		getBytesInUse(keys: string[], callback: (bytesInUse: number) => void): void;
		clear(callback?: Function): void;
		set(items: Object, callback?: Function): void;
		remove(keys: string, callback?: Function): void;
		remove(keys: string[], callback?: Function): void;
		get(callback: (items: Object) => void): void;
		get(keys: string, callback: (items: Object) => void): void;
		get(keys: string[], callback: (items: Object) => void): void;
		get(keys: Object, callback: (items: Object) => void): void;
	}

	interface StorageChange {
		newValue?: any;
		oldValue?: any;
	}

	interface Local extends StorageArea {
		QUOTA_BYTES: number;
	}

	interface Sync extends StorageArea {
		MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;
		QUOTA_BYTES: number;
		QUOTA_BYTES_PER_ITEM: number;
		MAX_ITEMS: number;
		MAX_WRITE_OPERATIONS_PER_HOUR: number;
	}

	interface StorageChangedEvent extends chrome.events.Event {
		addListener(callback: (changes: Object, areaName: string) => void): void;
	}

	var local: Local;
	var sync: Sync;

	var onChanged: StorageChangedEvent;
}

////////////////////
// Socket
////////////////////
declare module chrome.socket {
	interface CreateInfo {
		socketId: number;
	}

	interface AcceptInfo {
		resultCode: number;
		socketId?: number;
	}

	interface ReadInfo {
		resultCode: number;
		data: ArrayBuffer;
	}

	interface WriteInfo {
		bytesWritten: number;
	}

	interface RecvFromInfo {
		resultCode: number;
		data: ArrayBuffer;
		port: number;
		address: string;
	}

	interface SocketInfo {
		socketType: string;
		localPort?: number;
		peerAddress?: string;
		peerPort?: number;
		localAddress?: string;
		connected: boolean;
	}

	interface NetworkInterface {
		name: string;
		address: string;
	}

	export function create(type: string, options?: Object, callback?: (createInfo: CreateInfo) => void): void;
	export function destroy(socketId: number): void;
	export function connect(socketId: number, hostname: string, port: number, callback: (result: number) => void): void;
	export function bind(socketId: number, address: string, port: number, callback: (result: number) => void): void;
	export function disconnect(socketId: number): void;
	export function read(socketId: number, bufferSize?: number, callback?: (readInfo: ReadInfo) => void): void;
	export function write(socketId: number, data: ArrayBuffer, callback?: (writeInfo: WriteInfo) => void): void;
	export function recvFrom(socketId: number, bufferSize?: number, callback?: (recvFromInfo: RecvFromInfo) => void): void;
	export function sendTo(socketId: number, data: ArrayBuffer, address: string, port: number, callback?: (writeInfo: WriteInfo) => void): void;
	export function listen(socketId: number, address: string, port: number, backlog?: number, callback?: (result: number) => void): void;
	export function accept(socketId: number, callback?: (acceptInfo: AcceptInfo) => void): void;
	export function setKeepAlive(socketId: number, enable: boolean, delay?: number, callback?: (result: boolean) => void): void;
	export function setNoDelay(socketId: number, noDelay: boolean, callback?: (result: boolean) => void): void;
	export function getInfo(socketId: number, callback: (result: SocketInfo) => void): void;
	export function getNetworkList(callback: (result: NetworkInterface[]) => void): void;
}

////////////////////
// TabCapture
////////////////////
declare module chrome.tabCapture {
	interface CaptureInfo {
		tabId: number;
		status: string;
		fullscreen: boolean;
	}

	interface CaptureOptions {
		audio?: boolean;
		video?: boolean;
		audioConstraints?: MediaTrackConstraints;
		videoConstraints?: MediaTrackConstraints;
	}

	export function capture(options: CaptureOptions, callback: (stream: MediaStream) => void): void;
	export function getCapturedTabs(callback: (result: CaptureInfo[]) => void): void;
}

////////////////////
// Tabs
////////////////////
declare module chrome.tabs {
	interface Tab {
		status?: string;
		index: number;
		openerTabId?: number;
		title?: string;
		url?: string;
		pinned: boolean;
		highlighted: boolean;
		windowId: number;
		active: boolean;
		favIconUrl?: string;
		id: number;
		incognito: boolean;
	}

	interface InjectDetails {
		allFrames?: boolean;
		code?: string;
		runAt?: string;
		file?: string;
	}

	interface CreateProperties {
		index?: number;
		openerTabId?: number;
		url?: string;
		pinned?: boolean;
		windowId?: number;
		active?: boolean;
	}

	interface MoveProperties {
		index: number;
		windowId?: number;
	}

	interface UpdateProperties {
		pinned?: boolean;
		openerTabId?: number;
		url?: string;
		highlighted?: boolean;
		active?: boolean;
	}

	interface CaptureVisibleTabOptions {
		quality?: number;
		format?: string;
	}

	interface ReloadProperties {
		bypassCache?: boolean;
	}

	interface ConnectInfo {
		name?: string;
	}

	interface HighlightInfo {
		tabs: number[];
		windowId?: number;
	}

	interface QueryInfo {
		status?: string;
		lastFocusedWindow?: boolean;
		windowId?: number;
		windowType?: string;
		active?: boolean;
		index?: number;
		title?: string;
		url?: string | string[];
		currentWindow?: boolean;
		highlighted?: boolean;
		pinned?: boolean;
	}

	interface TabHighlightInfo {
		windowId: number;
		tabIds: number[];
	}

	interface TabRemoveInfo {
		windowId: number;
		isWindowClosing: boolean;
	}

	interface TabAttachInfo {
		newPosition: number;
		newWindowId: number;
	}

	interface TabChangeInfo {
		status?: string;
		pinned?: boolean;
		url?: string;
	}

	interface TabMoveInfo {
		toIndex: number;
		windowId: number;
		fromIndex: number;
	}

	interface TabDetachInfo {
		oldWindowId: number;
		oldPosition: number;
	}

	interface TabActiveInfo {
		tabId: number;
		windowId: number;
	}

	interface TabHighlightedEvent extends chrome.events.Event {
		addListener(callback: (highlightInfo: HighlightInfo) => void): void;
	}

	interface TabRemovedEvent extends chrome.events.Event {
		addListener(callback: (tabId: number, removeInfo: TabRemoveInfo) => void): void;
	}

	interface TabUpdatedEvent extends chrome.events.Event {
		addListener(callback: (tabId: number, changeInfo: TabChangeInfo, tab: Tab) => void): void;
	}

	interface TabAttachedEvent extends chrome.events.Event {
		addListener(callback: (tabId: number, attachInfo: TabAttachInfo) => void): void;
	}

	interface TabMovedEvent extends chrome.events.Event {
		addListener(callback: (tabId: number, moveInfo: TabMoveInfo) => void): void;
	}

	interface TabDetachedEvent extends chrome.events.Event {
		addListener(callback: (tabId: number, detachInfo: TabDetachInfo) => void): void;
	}

	interface TabCreatedEvent extends chrome.events.Event {
		addListener(callback: (tab: Tab) => void): void;
	}

	interface TabActivatedEvent extends chrome.events.Event {
		addListener(callback: (activeInfo: TabActiveInfo) => void): void;
	}

	interface TabReplacedEvent extends chrome.events.Event {
		addListener(callback: (addedTabId: number, removedTabId: number) => void): void;
	}

	export function executeScript(details: InjectDetails, callback?: (result: any[]) => void): void;
	export function executeScript(tabId: number, details: InjectDetails, callback?: (result: any[]) => void): void;
	export function get(tabId: number, callback: (tab: Tab) => void): void;
	export function getCurrent(callback: (tab?: Tab) => void): void;
	export function create(createProperties: CreateProperties, callback?: (tab: Tab) => void): void;
	export function move(tabId: number, moveProperties: MoveProperties, callback?: (tab: Tab) => void): void;
	export function move(tabIds: number[], moveProperties: MoveProperties, callback?: (tabs: Tab[]) => void): void;
	export function update(updateProperties: UpdateProperties, callback?: (tab?: Tab) => void): void;
	export function update(tabId: number, updateProperties: UpdateProperties, callback?: (tab?: Tab) => void): void;
	export function remove(tabId: number, callback?: Function): void;
	export function remove(tabIds: number[], callback?: Function): void;
	export function captureVisibleTab(callback: (dataUrl: string) => void): void;
	export function captureVisibleTab(windowId: number, callback: (dataUrl: string) => void): void;
	export function captureVisibleTab(options: CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
	export function captureVisibleTab(windowId: number, options: CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
	export function reload(tabId?: number, reloadProperties?: ReloadProperties, func?: Function): void;
	export function duplicate(tabId: number, callback?: (tab?: Tab) => void): void;
	export function sendMessage(tabId: number, message: any, responseCallback?: (response: any) => void): void;
	export function connect(tabId: number, connectInfo?: ConnectInfo): runtime.Port;
	export function insertCSS(tabId: number, details: InjectDetails, callback?: Function): void;
	export function highlight(highlightInfo: HighlightInfo, callback: (window: chrome.windows.Window) => void): void;
	export function query(queryInfo: QueryInfo, callback: (result: Tab[]) => void): void;
	export function detectLanguage(callback: (language: string) => void): void;
	export function detectLanguage(tabId: number, callback: (language: string) => void): void;

	var onHighlighted: TabHighlightedEvent;
	var onRemoved: TabRemovedEvent;
	var onUpdated: TabUpdatedEvent;
	var onAttached: TabAttachedEvent;
	var onMoved: TabMovedEvent;
	var onDetached: TabDetachedEvent;
	var onCreated: TabCreatedEvent;
	var onActivated: TabActivatedEvent;
	var onReplaced: TabReplacedEvent;
}

////////////////////
// Top Sites
////////////////////
declare module chrome.topSites {
	interface MostVisitedURL {
		url: string;
		title: string;
	}

	export function get(callback: (data: MostVisitedURL) => void): void;
}

////////////////////
// Text to Speech
////////////////////
declare module chrome.tts {
	interface TtsEvent {
		charIndex?: number;
		errorMessage?: string;
		type: string;
	}

	interface TtsVoice {
		lang?: string;
		gender?: string;
		voiceName?: string;
		extensionsId?: string;
		eventTypes?: string[];
	}

	interface SpeakOptions {
		volume?: number;
		enqueue?: boolean;
		rate?: number;
		onEvent?: (event: TtsEvent) => void;
		pitch?: number;
		lang?: string;
		voiceName?: string;
		extensionId?: string;
		gender?: string;
		requiredEventTypes?: string[];
		desiredEventTypes?: string[];
	}

	export function isSpeaking(callback?: (speaking: boolean) => void): void;
	export function stop(): void;
	export function getVoices(callback?: (voices: TtsVoice[]) => void): void;
	export function speak(utterance: string, options?: SpeakOptions, callback?: Function): void;
}

////////////////////
// Text to Speech Engine
////////////////////
declare module chrome.ttsEngine {
	interface SpeakOptions {
		lang?: string;
		voiceName?: string;
		gender?: string;
		volume?: number;
		rate?: number;
		pitch?: number;
	}

	interface TtsEngineSpeakEvent extends chrome.events.Event {
		addListener(callback: (utterance: string, options: SpeakOptions, sendTtsEvent: (event: chrome.tts.TtsEvent) => void) => void): void;
	}

	interface TtsEngineStopEvent extends chrome.events.Event {
		addListener(callback: Function): void;
	}

	var onSpeak: TtsEngineSpeakEvent;
	var onStop: TtsEngineStopEvent;
}

////////////////////
// Types
////////////////////
declare module chrome.types {
	interface ChromeSettingClearDetails {
		scope?: string;
	}

	interface ChromeSettingSetDetails extends ChromeSettingClearDetails {
		value: any;
	}

	interface ChromeSettingGetDetails {
		incognito?: boolean;
	}

	type DetailsCallback = (details: ChromeSettingGetResultDetails) => void;

	interface ChromeSettingGetResultDetails {
		levelOfControl: string;
		value: any;
		incognitoSpecific?: boolean;
	}

	interface ChromeSettingChangedEvent extends chrome.events.Event {
		addListener(callback: DetailsCallback): void;
	}

	interface ChromeSetting {
		details: {
			scope?: string;
			callback?: Function;
		};
		set(details: ChromeSettingSetDetails, callback?: Function): void;
		get(details: ChromeSettingGetDetails, callback?: DetailsCallback): void;
		clear(details: ChromeSettingClearDetails, callback?: Function): void;
		onChange: ChromeSettingChangedEvent;
	}
}

////////////////////
// Web Navigation
////////////////////
declare module chrome.webNavigation {
	interface GetFrameDetails {
		processId: number;
		tabId: number;
		frameId: number;
	}

	interface GetFrameResultDetails {
		url: string;
		errorOccurred: boolean;
		parentFrameId: number;
	}

	interface GetAllFrameDetails {
		tabId: number;
	}

	interface GetAllFrameResultDetails extends GetFrameResultDetails {
		processId: number;
		frameId: number;
	}

	interface CallbackBasicDetails {
		tabId: number;
		timeStamp: number;
	}

	interface CallbackDetails extends CallbackBasicDetails {
		processId: number;
		url: string;
		frameId: number;
	}

	interface CallbackTransitionDetails extends CallbackDetails {
		transitionType: string;
		transitionQualifiers: string[];
	}

	interface ReferenceFragmentUpdatedDetails extends CallbackTransitionDetails {
	}

	interface CompletedDetails extends CallbackDetails {
	}

	interface HistoryStateUpdatedDetails extends CallbackTransitionDetails {
	}

	interface CreatedNavigationTargetDetails extends CallbackBasicDetails {
		url: string;
		sourceTabId: number;
		sourceProcessId: number;
		sourceFrameId: number;
	}

	interface TabReplacedDetails extends CallbackBasicDetails {
		replacedTabId: number;
	}

	interface BeforeNavigateDetails extends CallbackDetails {
		parentFrameId: number;
	}

	interface CommittedDetails extends CallbackTransitionDetails {
	}

	interface DomContentLoadedDetails extends CallbackDetails {
	}

	interface ErrorOccurredDetails extends CallbackDetails {
		error: string;
	}

	interface WebNavigationEventFilters {
		url: chrome.events.UrlFilter[];
	}

	interface WebNavigationReferenceFragmentUpdatedEvent extends chrome.events.Event {
		addListener(callback: (details: ReferenceFragmentUpdatedDetails) => void, filters?: WebNavigationEventFilters): void;
	}

	interface WebNavigationCompletedEvent extends chrome.events.Event {
		addListener(callback: (details: CompletedDetails) => void, filters?: WebNavigationEventFilters): void;
	}

	interface WebNavigationHistoryStateUpdatedEvent extends chrome.events.Event {
		addListener(callback: (details: HistoryStateUpdatedDetails) => void, filters?: WebNavigationEventFilters): void;
	}

	interface WebNavigationCreatedNavigationTargetEvent extends chrome.events.Event {
		addListener(callback: (details: CreatedNavigationTargetDetails) => void, filters?: WebNavigationEventFilters): void;
	}

	interface WebNavigationTabReplacedEvent extends chrome.events.Event {
		addListener(callback: (details: TabReplacedDetails) => void): void;
	}

	interface WebNavigationBeforeNavigateEvent extends chrome.events.Event {
		addListener(callback: (details: BeforeNavigateDetails) => void, filters?: WebNavigationEventFilters): void;
	}

	interface WebNavigationCommittedEvent extends chrome.events.Event {
		addListener(callback: (details: CommittedDetails) => void, filters?: WebNavigationEventFilters): void;
	}

	interface WebNavigationDomContentLoadedEvent extends chrome.events.Event {
		addListener(callback: (details: DomContentLoadedDetails) => void, filters?: WebNavigationEventFilters): void;
	}

	interface WebNavigationErrorOccurredEvent extends chrome.events.Event {
		addListener(callback: (details: ErrorOccurredDetails) => void, filters?: WebNavigationEventFilters): void;
	}

	export function getFrame(details: GetFrameDetails, callback: (details?: GetFrameResultDetails) => void): void;
	export function getAllFrames(details: GetAllFrameDetails, callback: (details?: GetAllFrameResultDetails[]) => void): void;

	var onReferenceFragmentUpdated: WebNavigationReferenceFragmentUpdatedEvent;
	var onCompleted: WebNavigationCompletedEvent;
	var onHistoryStateUpdated: WebNavigationHistoryStateUpdatedEvent;
	var onCreatedNavigationTarget: WebNavigationCreatedNavigationTargetEvent;
	var onTabReplaced: WebNavigationTabReplacedEvent;
	var onBeforeNavigate: WebNavigationBeforeNavigateEvent;
	var onCommitted: WebNavigationCommittedEvent;
	var onDOMContentLoaded: WebNavigationDomContentLoadedEvent;
	var onErrorOccurred: WebNavigationErrorOccurredEvent;
}

////////////////////
// Web Request
////////////////////
declare module chrome.webRequest {
	interface AuthCredentials {
		username: string;
		password: string;
	}

	interface HttpHeader {
		name: string;
		value?: string;
		binaryValue?: ArrayBuffer;
	}

	interface BlockingResponse {
		cancel?: boolean;
		redirectUrl?: string;
		responseHeaders?: HttpHeader[];
		authCredentials?: AuthCredentials;
		requestHeaders?: HttpHeader[];
	}

	interface RequestFilter {
		tabId?: number;
		types?: string[];
		urls: string[];
		windowId?: number;
	}

	interface UploadData {
		bytes?: ArrayBuffer;
		file?: string;
	}

	interface CallbackDetails {
		requestId: string;
		url: string;
		method: string;
		tabId: number;
		frameId: number;
		parentFrameId: number;
		timeStamp: number;
		type: string;
	}

	interface OnCompletedDetails extends CallbackDetails {
		ip?: string;
		statusLine: string;
		responseHeaders?: HttpHeader[];
		fromCache: boolean;
		statusCode: number;
	}

	interface OnHeadersReceivedDetails extends CallbackDetails {
		statusLine: string;
		responseHeaders?: HttpHeader[];
	}

	interface OnBeforeRedirectDetails extends CallbackDetails {
		ip?: string;
		statusLine: string;
		responseHeaders?: HttpHeader[];
		fromCache: boolean;
		redirectUrl: string;
		statusCode: number;
	}

	interface Challenger {
		host: string;
		port: number;
	}

	interface OnAuthRequiredDetails extends CallbackDetails {
		statusLine: string;
		challenger: Challenger;
		responseHeaders?: HttpHeader[];
		isProxy: boolean;
		realm?: string;
		scheme: string;
	}

	interface OnBeforeSendHeadersDetails extends CallbackDetails {
		requestHeaders?: HttpHeader[];
	}

	interface OnErrorOccurredDetails extends CallbackDetails {
		ip?: string;
		fromCache: boolean;
		error: string;
	}

	interface OnResponseStartedDetails extends CallbackDetails {
		ip?: string;
		statusLine: string;
		responseHeaders?: HttpHeader[];
		fromCache: boolean;
		statusCode: number;
	}

	interface OnSendHeadersDetails extends CallbackDetails {
		requestHeaders?: HttpHeader[];
	}

	interface FormData {
		[key: string]: string[];
	}

	interface RequestBody {
		raw?: UploadData[];
		error?: string;
		formData?: FormData;
	}

	interface OnBeforeRequestDetails extends CallbackDetails {
		requestBody?: RequestBody;
	}

	interface WebRequestCompletedEvent extends chrome.events.Event {
		addListener(callback: (details: OnCompletedDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
		removeListener(callback: (details: OnCompletedDetails) => BlockingResponse): void;
	}

	interface WebRequestHeadersReceivedEvent extends chrome.events.Event {
		addListener(callback: (details: OnHeadersReceivedDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
		removeListener(callback: (details: OnHeadersReceivedDetails) => BlockingResponse): void;
	}

	interface WebRequestBeforeRedirectEvent extends chrome.events.Event {
		addListener(callback: (details: OnBeforeRedirectDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
		removeListener(callback: (details: OnBeforeRedirectDetails) => BlockingResponse): void;
	}

	interface WebRequestAuthRequiredEvent extends chrome.events.Event {
		addListener(callback: (details: OnAuthRequiredDetails, callback?: (response: BlockingResponse) => void) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
		removeListener(callback: (details: OnAuthRequiredDetails, callback?: (response: BlockingResponse) => void) => void): void;
	}

	interface WebRequestBeforeSendHeadersEvent extends chrome.events.Event {
		addListener(callback: (details: OnBeforeSendHeadersDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
		removeListener(callback: (details: OnBeforeSendHeadersDetails) => BlockingResponse): void;
	}

	interface WebRequestErrorOccurredEvent extends chrome.events.Event {
		addListener(callback: (details: OnErrorOccurredDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
		removeListener(callback: (details: OnErrorOccurredDetails) => BlockingResponse): void;
	}

	interface WebRequestResponseStartedEvent extends chrome.events.Event {
		addListener(callback: (details: OnResponseStartedDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
		removeListener(callback: (details: OnResponseStartedDetails) => BlockingResponse): void;
	}

	interface WebRequestSendHeadersEvent extends chrome.events.Event {
		addListener(callback: (details: OnSendHeadersDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
		removeListener(callback: (details: OnSendHeadersDetails) => BlockingResponse): void;
	}

	interface WebRequestBeforeRequestEvent extends chrome.events.Event {
		addListener(callback: (details: OnBeforeRequestDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
		removeListener(callback: (details: OnBeforeRequestDetails) => BlockingResponse): void;
	}

	var MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number;

	export function handlerBehaviorChanged(callback?: Function): void;

	var onCompleted: WebRequestCompletedEvent;
	var onHeadersReceived: WebRequestHeadersReceivedEvent;
	var onBeforeRedirect: WebRequestBeforeRedirectEvent;
	var onAuthRequired: WebRequestAuthRequiredEvent;
	var onBeforeSendHeaders: WebRequestBeforeSendHeadersEvent;
	var onErrorOccurred: WebRequestErrorOccurredEvent;
	var onResponseStarted: WebRequestResponseStartedEvent;
	var onSendHeaders: WebRequestSendHeadersEvent;
	var onBeforeRequest: WebRequestBeforeRequestEvent;
}

////////////////////
// Web Store
////////////////////
declare module chrome.webstore {
	export function install(url?: string, successCallback?: Function, failureCallback?: (error: string) => void): void;
}

////////////////////
// Windows
////////////////////
declare module chrome.windows {
	interface Window {
		tabs?: chrome.tabs.Tab[];
		top: number;
		height: number;
		width: number;
		state: string;
		focused: boolean;
		alwaysOnTop: boolean;
		incognito: boolean;
		type: string;
		id: number;
		left: number;
	}

	interface GetInfo {
		populate?: boolean;
	}

	interface CreateData {
		tabId?: number;
		url?: string;
		top?: number;
		height?: number;
		width?: number;
		focused?: boolean;
		incognito?: boolean;
		type?: string;
		left?: number;
	}

	interface UpdateInfo {
		top?: number;
		drawAttention?: boolean;
		height?: number;
		width?: number;
		state?: string;
		focused?: boolean;
		left?: number;
	}

	interface WindowRemovedEvent extends chrome.events.Event {
		addListener(callback: (windowId: number) => void): void;
	}

	interface WindowCreatedEvent extends chrome.events.Event {
		addListener(callback: (window: Window) => void): void;
	}

	interface WindowFocusChangedEvent extends chrome.events.Event {
		addListener(callback: (windowId: number) => void): void;
	}

	var WINDOW_ID_CURRENT: number;
	var WINDOW_ID_NONE: number;

	export function get(windowId: number, callback: (window: chrome.windows.Window) => void): void;
	export function get(windowId: number, getInfo: GetInfo, callback: (window: chrome.windows.Window) => void): void;
	export function getCurrent(callback: (window: chrome.windows.Window) => void): void;
	export function getCurrent(getInfo: GetInfo, callback: (window: chrome.windows.Window) => void): void;
	export function create(createData?: CreateData, callback?: (window: chrome.windows.Window) => void): void;
	export function getAll(callback: (windows: chrome.windows.Window[]) => void): void;
	export function getAll(getInfo: GetInfo, callback: (windows: chrome.windows.Window[]) => void): void;
	export function update(windowId: number, updateInfo: UpdateInfo, callback?: (window: chrome.windows.Window) => void): void;
	export function remove(windowId: number, callback?: Function): void;
	export function getLastFocused(callback: (window: chrome.windows.Window) => void): void;
	export function getLastFocused(getInfo: GetInfo, callback: (window: chrome.windows.Window) => void): void;

	var onRemoved: WindowRemovedEvent;
	var onCreated: WindowCreatedEvent;
	var onFocusChanged: WindowFocusChangedEvent;
}
