// Type definitions for Naver Whale extension development
// Project: https://developers.whale.naver.com/getting_started/
// Definitions by: tbvjaos510 <https://github.com/tbvjaos510>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// fork from @types/chrome
// TypeScript Version: 2.7

/// <reference types="filesystem" />

////////////////////
// Global object
////////////////////
interface Window {
    whale: typeof whale;
    chrome: typeof whale;
}

////////////////////
// Alarms
////////////////////
/**
 * 지정한 주기 혹은 시간에 코드가 실행되도록 예약합니다
 * 권한: "alarms"
 * @since Chrome 22.
 */
declare namespace whale.alarms {
    export interface AlarmCreateInfo {
        /** Optional. Length of time in minutes after which the onAlarm event should fire.  */
        delayInMinutes?: number;
        /** Optional. If set, the onAlarm event should fire every periodInMinutes minutes after the initial event specified by when or delayInMinutes. If not set, the alarm will only fire once.  */
        periodInMinutes?: number;
        /** Optional. Time at which the alarm should fire, in milliseconds past the epoch (e.g. Date.now() + n).  */
        when?: number;
    }

    export interface Alarm {
        /** Optional. If not null, the alarm is a repeating alarm and will fire again in periodInMinutes minutes.  */
        periodInMinutes?: number;
        /** Time at which this alarm was scheduled to fire, in milliseconds past the epoch (e.g. Date.now() + n). For performance reasons, the alarm may have been delayed an arbitrary amount beyond this. */
        scheduledTime: number;
        /** Name of this alarm. */
        name: string;
    }

    export interface AlarmEvent extends whale.events.Event<(alarm: Alarm) => void> { }

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
    export var onAlarm: AlarmEvent;
}


////////////////////
// Bookmarks
////////////////////
/**
 * 북마크의 생성, 삭제, 수정 및 폴더 변경 등 북마크에 관한 기능을 제공합니다. 이 API를 이용해 북마크 관리자를 만들 수 있습니다.
 * 권한: "bookmarks"
 * @since Chrome 5.
 */
declare namespace whale.bookmarks {
    /** A node (either a bookmark or a folder) in the bookmark tree. Child nodes are ordered within their parent folder. */
    export interface BookmarkTreeNode {
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

    export interface BookmarkRemoveInfo {
        index: number;
        parentId: string;
        node: BookmarkTreeNode;
    }

    export interface BookmarkMoveInfo {
        index: number;
        oldIndex: number;
        parentId: string;
        oldParentId: string;
    }

    export interface BookmarkChangeInfo {
        url?: string;
        title: string;
    }

    export interface BookmarkReorderInfo {
        childIds: string[];
    }

    export interface BookmarkRemovedEvent extends whale.events.Event<(id: string, removeInfo: BookmarkRemoveInfo) => void> { }

    export interface BookmarkImportEndedEvent extends whale.events.Event<() => void> { }

    export interface BookmarkMovedEvent extends whale.events.Event<(id: string, moveInfo: BookmarkMoveInfo) => void> { }

    export interface BookmarkImportBeganEvent extends whale.events.Event<() => void> { }

    export interface BookmarkChangedEvent extends whale.events.Event<(id: string, changeInfo: BookmarkChangeInfo) => void> { }

    export interface BookmarkCreatedEvent extends whale.events.Event<(id: string, bookmark: BookmarkTreeNode) => void> { }

    export interface BookmarkChildrenReordered extends whale.events.Event<(id: string, reorderInfo: BookmarkReorderInfo) => void> { }

    export interface BookmarkSearchQuery {
        query?: string;
        url?: string;
        title?: string;
    }

    export interface BookmarkCreateArg {
        /** Optional. Defaults to the Other Bookmarks folder.  */
        parentId?: string;
        index?: number;
        title?: string;
        url?: string;
    }

    export interface BookmarkDestinationArg {
        parentId?: string;
        index?: number;
    }

    export interface BookmarkChangesArg {
        title?: string;
        url?: string;
    }

    /** @deprecated since Chrome 38. Bookmark write operations are no longer limited by Chrome. */
    export var MAX_WRITE_OPERATIONS_PER_HOUR: number;
    /** @deprecated since Chrome 38. Bookmark write operations are no longer limited by Chrome. */
    export var MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;

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
    export var onRemoved: BookmarkRemovedEvent;
    /** Fired when a bookmark import session is ended. */
    export var onImportEnded: BookmarkImportEndedEvent;
    /** Fired when a bookmark import session is begun. Expensive observers should ignore onCreated updates until onImportEnded is fired. Observers should still handle other notifications immediately. */
    export var onImportBegan: BookmarkImportBeganEvent;
    /** Fired when a bookmark or folder changes. Note: Currently, only title and url changes trigger this. */
    export var onChanged: BookmarkChangedEvent;
    /** Fired when a bookmark or folder is moved to a different parent folder. */
    export var onMoved: BookmarkMovedEvent;
    /** Fired when a bookmark or folder is created. */
    export var onCreated: BookmarkCreatedEvent;
    /** Fired when the children of a folder have changed their order due to the order being sorted in the UI. This is not called as a result of a move(). */
    export var onChildrenReordered: BookmarkChildrenReordered;
}

////////////////////
// Browser Action
////////////////////
/**
 * 주소창 오른쪽 툴바 영역에 나타나는 버튼을 제어 할 수 있습니다. 아이콘을 변경하거나 뱃지를 표시할 수도 있고, 팝업이 나타나게 할 수도 있습니다.
 * Manifest:  "browser_action": {...}
 * @since Chrome 5.
 */
declare namespace whale.browserAction {
    export interface BadgeBackgroundColorDetails {
        /** An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red is [255, 0, 0, 255]. Can also be a string with a CSS value, with opaque red being #FF0000 or #F00. */
        color: string | ColorArray;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number;
    }

    export interface BadgeTextDetails {
        /** Any number of characters can be passed, but only about four can fit in the space. */
        text: string;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number;
    }

    export type ColorArray = [number, number, number, number];

    export interface TitleDetails {
        /** The string the browser action should display when moused over. */
        title: string;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number;
    }

    export interface TabDetails {
        /** Optional. Specify the tab to get the information. If no tab is specified, the non-tab-specific information is returned.  */
        tabId?: number;
    }

    export interface TabIconDetails {
        /** Optional. Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'  */
        path?: any;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number;
        /** Optional. Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'  */
        imageData?: ImageData | { [index: number]: ImageData };
    }

    export interface PopupDetails {
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number;
        /** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string;
    }

    export interface BrowserClickedEvent extends whale.events.Event<(tab: whale.tabs.Tab) => void> { }

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
    export function getBadgeBackgroundColor(details: TabDetails, callback: (result: ColorArray) => void): void;
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
    export var onClicked: BrowserClickedEvent;
}

////////////////////
// Browsing Data
////////////////////
/**
 * 인터넷 사용 기록을 삭제할 수 있습니다. 설정 > 개인정보 보호 > 인터넷 사용 기록 삭제 영역의 각 항목별 삭제를 수행할 수 있습니다.
 * 권한: "browsingData"
 * @since Chrome 19.
 */
declare namespace whale.browsingData {
    export interface OriginTypes {
        /** Optional. Websites that have been installed as hosted applications (be careful!).  */
        protectedWeb?: boolean;
        /** Optional. Extensions and packaged applications a user has installed (be _really_ careful!).  */
        extension?: boolean;
        /** Optional. Normal websites.  */
        unprotectedWeb?: boolean;
    }

    /** Options that determine exactly what data will be removed. */
    export interface RemovalOptions {
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
    export interface DataTypeSet {
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

    export interface SettingsCallback {
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
 * 확장앱에 단축키를 부여할 수 있습니다.
 * Manifest:  "commands": {...}
 * @since Chrome 16.
 */
declare namespace whale.commands {
    export interface Command {
        /** Optional. The name of the Extension Command  */
        name?: string;
        /** Optional. The Extension Command description  */
        description?: string;
        /** Optional. The shortcut active for this command, or blank if not active.  */
        shortcut?: string;
    }

    export interface CommandEvent extends whale.events.Event<(command: string) => void> { }

    /**
     * Returns all the registered extension commands for this extension and their shortcut (if active).
     * @param callback Called to return the registered commands.
     * If you specify the callback parameter, it should be a function that looks like this:
     * function(array of Command commands) {...};
     */
    export function getAll(callback: (commands: Command[]) => void): void;

    /** Fired when a registered command is activated using a keyboard shortcut. */
    export var onCommand: CommandEvent;
}

////////////////////
// Content Settings
////////////////////
/**
 * 쿠키, 자바스크립트, 마이크 등 웹 사이트에서 요청한 정보를 제공할 것인지 설정할 수 있습니다. 설정 > 개인정보 보호 > 콘텐츠 설정에서 확인할 수 있는 항목을 제어할 수 있습니다.
 * 권한: "contentSettings"
 * @since Chrome 16.
 */
declare namespace whale.contentSettings {

    type ScopeEnum = 'regular' | 'incognito_session_only';

    export interface ClearDetails {
        /**
         * Optional.
          * Where to clear the setting (default: regular).
         * The scope of the ContentSetting. One of
         * * regular: setting for regular profile (which is inherited by the incognito profile if not overridden elsewhere),
         * * incognito_session_only: setting for incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular settings).
         */
        scope?: ScopeEnum;
    }

    export interface SetDetails {
        /** Optional. The resource identifier for the content type.  */
        resourceIdentifier?: ResourceIdentifier;
        /** The setting applied by this rule. See the description of the individual ContentSetting objects for the possible values. */
        setting: any;
        /** Optional. The pattern for the secondary URL. Defaults to matching all URLs. For details on the format of a pattern, see Content Setting Patterns.  */
        secondaryPattern?: string;
        /** Optional. Where to set the setting (default: regular).  */
        scope?: ScopeEnum;
        /** The pattern for the primary URL. For details on the format of a pattern, see Content Setting Patterns. */
        primaryPattern: string;
    }

    export interface CookieSetDetails extends SetDetails {
        setting: 'allow' | 'block' | 'session_only';
    }

    export interface ImagesSetDetails extends SetDetails {
        setting: 'allow' | 'block';
    }

    export interface JavascriptSetDetails extends SetDetails {
        setting: 'allow' | 'block';
    }

    export interface LocationSetDetails extends SetDetails {
        setting: 'allow' | 'block' | 'ask';
    }

    export interface PluginsSetDetails extends SetDetails {
        setting: 'allow' | 'block' | 'detect_important_content';
    }

    export interface PopupsSetDetails extends SetDetails {
        setting: 'allow' | 'block';
    }

    export interface NotificationsSetDetails extends SetDetails {
        setting: 'allow' | 'block' | 'ask';
    }

    export interface FullscreenSetDetails extends SetDetails {
        setting: 'allow';
    }

    export interface MouselockSetDetails extends SetDetails {
        setting: 'allow';
    }

    export interface MicrophoneSetDetails extends SetDetails {
        setting: 'allow' | 'block' | 'ask';
    }

    export interface CameraSetDetails extends SetDetails {
        setting: 'allow' | 'block' | 'ask';
    }

    export interface PpapiBrokerSetDetails extends SetDetails {
        setting: 'allow' | 'block' | 'ask';
    }

    export interface MultipleAutomaticDownloadsSetDetails extends SetDetails {
        setting: 'allow' | 'block' | 'ask';
    }

    export interface GetDetails {
        /** Optional. The secondary URL for which the content setting should be retrieved. Defaults to the primary URL. Note that the meaning of a secondary URL depends on the content type, and not all content types use secondary URLs.  */
        secondaryUrl?: string;
        /** Optional. A more specific identifier of the type of content for which the settings should be retrieved.  */
        resourceIdentifier?: ResourceIdentifier;
        /** Optional. Whether to check the content settings for an incognito session. (default false)  */
        incognito?: boolean;
        /** The primary URL for which the content setting should be retrieved. Note that the meaning of a primary URL depends on the content type. */
        primaryUrl: string;
    }

    export interface ReturnedDetails {
        /** The content setting. See the description of the individual ContentSetting objects for the possible values. */
        setting: any;
    }

    export interface ContentSetting {
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

    export interface CookieContentSetting extends ContentSetting{
        set(details: CookieSetDetails, callback?: () => void): void;
    }

    export interface PopupsContentSetting extends ContentSetting{
        set(details: PopupsSetDetails, callback?: () => void): void;
    }

    export interface JavascriptContentSetting extends ContentSetting{
        set(details: JavascriptSetDetails, callback?: () => void): void;
    }

    export interface NotificationsContentSetting extends ContentSetting{
        set(details: NotificationsSetDetails, callback?: () => void): void;
    }

    export interface PluginsContentSetting extends ContentSetting{
        set(details: PluginsSetDetails, callback?: () => void): void;
    }

    export interface ImagesContentSetting extends ContentSetting{
        set(details: ImagesSetDetails, callback?: () => void): void;
    }

    export interface LocationContentSetting extends ContentSetting{
        set(details: LocationSetDetails, callback?: () => void): void;
    }

    export interface FullscreenContentSetting extends ContentSetting{
        set(details: FullscreenSetDetails, callback?: () => void): void;
    }

    export interface MouselockContentSetting extends ContentSetting{
        set(details: MouselockSetDetails, callback?: () => void): void;
    }

    export interface MicrophoneContentSetting extends ContentSetting{
        set(details: MicrophoneSetDetails, callback?: () => void): void;
    }

    export interface CameraContentSetting extends ContentSetting{
        set(details: CameraSetDetails, callback?: () => void): void;
    }

    export interface PpapiBrokerContentSetting extends ContentSetting{
        set(details: PpapiBrokerSetDetails, callback?: () => void): void;
    }

    export interface MultipleAutomaticDownloadsContentSetting extends ContentSetting{
        set(details: MultipleAutomaticDownloadsSetDetails, callback?: () => void): void;
    }

    /** The only content type using resource identifiers is contentSettings.plugins. For more information, see Resource Identifiers. */
    export interface ResourceIdentifier {
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
    export var cookies: CookieContentSetting;
    /**
     * Whether to allow sites to show pop-ups. One of
     * allow: Allow sites to show pop-ups,
     * block: Don't allow sites to show pop-ups.
     * Default is block.
     * The primary URL is the URL of the top-level frame. The secondary URL is not used.
     */
    export var popups: PopupsContentSetting;
    /**
     * Whether to run JavaScript. One of
     * allow: Run JavaScript,
     * block: Don't run JavaScript.
     * Default is allow.
     * The primary URL is the URL of the top-level frame. The secondary URL is not used.
     */
    export var javascript: JavascriptContentSetting;
    /**
     * Whether to allow sites to show desktop notifications. One of
     * allow: Allow sites to show desktop notifications,
     * block: Don't allow sites to show desktop notifications,
     * ask: Ask when a site wants to show desktop notifications.
     * Default is ask.
     * The primary URL is the URL of the document which wants to show the notification. The secondary URL is not used.
     */
    export var notifications: NotificationsContentSetting;
    /**
     * Whether to run plugins. One of
     * allow: Run plugins automatically,
     * block: Don't run plugins automatically,
     * detect_important_content: Only run automatically those plugins that are detected as the website's main content.
     * Default is allow.
     * The primary URL is the URL of the top-level frame. The secondary URL is not used.
     */
    export var plugins: PluginsContentSetting;
    /**
     * Whether to show images. One of
     * allow: Show images,
     * block: Don't show images.
     * Default is allow.
     * The primary URL is the URL of the top-level frame. The secondary URL is the URL of the image.
     */
    export var images: ImagesContentSetting;
    /**
     * Since Chrome 42.
     * Whether to allow Geolocation. One of
     * allow: Allow sites to track your physical location,
     * block: Don't allow sites to track your physical location,
     * ask: Ask before allowing sites to track your physical location.
     * Default is ask.
     * The primary URL is the URL of the document which requested location data. The secondary URL is the URL of the top-level frame (which may or may not differ from the requesting URL).
     */
    export var location: LocationContentSetting;
    /**
     * Since Chrome 42.
     * Whether to allow sites to toggle the fullscreen mode. One of
     * allow: Allow sites to toggle the fullscreen mode,
     * ask: Ask when a site wants to toggle the fullscreen mode.
     * Default is ask.
     * The primary URL is the URL of the document which requested to toggle the fullscreen mode. The secondary URL is the URL of the top-level frame (which may or may not differ from the requesting URL).
     */
    export var fullscreen: FullscreenContentSetting;
    /**
     * Since Chrome 42.
     * Whether to allow sites to disable the mouse cursor. One of
     * allow: Allow sites to disable the mouse cursor,
     * block: Don't allow sites to disable the mouse cursor,
     * ask: Ask when a site wants to disable the mouse cursor.
     * Default is ask.
     * The primary URL is the URL of the top-level frame. The secondary URL is not used.
     */
    export var mouselock: MouselockContentSetting;
    /**
     * Since Chrome 46.
     * Whether to allow sites to access the microphone. One of
     * allow: Allow sites to access the microphone,
     * block: Don't allow sites to access the microphone,
     * ask: Ask when a site wants to access the microphone.
     * Default is ask.
     * The primary URL is the URL of the document which requested microphone access. The secondary URL is not used.
     * NOTE: The 'allow' setting is not valid if both patterns are ''.
     */
    export var microphone: MicrophoneContentSetting;
    /**
     * Since Chrome 46.
     * Whether to allow sites to access the camera. One of
     * allow: Allow sites to access the camera,
     * block: Don't allow sites to access the camera,
     * ask: Ask when a site wants to access the camera.
     * Default is ask.
     * The primary URL is the URL of the document which requested camera access. The secondary URL is not used.
     * NOTE: The 'allow' setting is not valid if both patterns are ''.
     */
    export var camera: CameraContentSetting;
    /**
     * Since Chrome 42.
     * Whether to allow sites to run plugins unsandboxed. One of
     * allow: Allow sites to run plugins unsandboxed,
     * block: Don't allow sites to run plugins unsandboxed,
     * ask: Ask when a site wants to run a plugin unsandboxed.
     * Default is ask.
     * The primary URL is the URL of the top-level frame. The secondary URL is not used.
     */
    export var unsandboxedPlugins: PpapiBrokerContentSetting;
    /**
     * Since Chrome 42.
     * Whether to allow sites to download multiple files automatically. One of
     * allow: Allow sites to download multiple files automatically,
     * block: Don't allow sites to download multiple files automatically,
     * ask: Ask when a site wants to download files automatically after the first file.
     * Default is ask.
     * The primary URL is the URL of the top-level frame. The secondary URL is not used.
     */
    export var automaticDownloads: MultipleAutomaticDownloadsContentSetting;
}

////////////////////
// Context Menus
////////////////////
/**
 * 마우스 오른쪽 버튼을 클릭하면 나타나는 콘텍스트 메뉴를 만들 수 있습니다. 페이지, 링크, 이미지 등 클릭한 위치에 따라 서로 다른 메뉴를 표시할 수 있습니다
 * 권한: "contextMenus"
 * @since Chrome 6.
 */
declare namespace whale.contextMenus {
    export interface OnClickData {
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
         * The ID of the frame of the element where the context menu was
         * clicked, if it was in a frame.
         */
        frameId?: number;
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

    export interface CreateProperties {
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
        onclick?: (info: OnClickData, tab: whale.tabs.Tab) => void;
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
        /**
         * Optional.
         * Since Chrome 62.
         * Whether the item is visible in the menu.
         */
        visible?: boolean;
    }

    export interface UpdateProperties {
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

    export interface MenuClickedEvent extends whale.events.Event<(info: OnClickData, tab?: whale.tabs.Tab) => void> { }

    /**
     * Since Chrome 38.
     * The maximum number of top level extension items that can be added to an extension action context menu. Any items beyond this limit will be ignored.
     */
    export var ACTION_MENU_TOP_LEVEL_LIMIT: number;

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
    export var onClicked: MenuClickedEvent;
}

////////////////////
// Cookies
////////////////////
/**
 * 쿠키를 제어하거나 변경시 이벤트를 수신할 수 있습니다
 * 권한: "cookies", host 권한
 * @since Chrome 6.
 */
declare namespace whale.cookies {
    /** Represents information about an HTTP cookie. */
    export interface Cookie {
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
    export interface CookieStore {
        /** The unique identifier for the cookie store. */
        id: string;
        /** Identifiers of all the browser tabs that share this cookie store. */
        tabIds: number[];
    }

    export interface GetAllDetails {
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

    export interface SetDetails {
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

    export interface Details {
        name: string;
        url: string;
        storeId?: string;
    }

    export interface CookieChangeInfo {
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

    export interface CookieChangedEvent extends whale.events.Event<(changeInfo: CookieChangeInfo) => void> { }

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
    export function set(details: SetDetails, callback?: (cookie: Cookie | null) => void): void;
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
    export function get(details: Details, callback: (cookie: Cookie | null) => void): void;

    /** Fired when a cookie is set or removed. As a special case, note that updating a cookie's properties is implemented as a two step process: the cookie to be updated is first removed entirely, generating a notification with "cause" of "overwrite" . Afterwards, a new cookie is written with the updated values, generating a second notification with "cause" "explicit". */
    export var onChanged: CookieChangedEvent;
}

////////////////////
// Debugger
////////////////////
/**
 * 특정 탭의 네트워크 통신, JavaScript 디버깅, DOM · CSS 변형 등 디버그를 위한 [원격 디버깅 프로토콜](https://chromedevtools.github.io/devtools-protocol/tot/Network)을 사용할 수 있습니다.
 * `sendCommand()` 메소드와 `onEvent` 핸들러 함수를 이용해 개발자도구에서 제공하는 개별 기능을 명령 단위로 수행할 수 있습니다.
 * 권한: "debugger"
 * @since Chrome 18.
 */
declare module whale {
    namespace _debugger {
        /** Debuggee identifier. Either tabId or extensionId must be specified */
        export interface Debuggee {
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
        export interface TargetInfo {
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

        export interface DebuggerDetachedEvent extends whale.events.Event<(source: Debuggee, reason: string) => void> { }

        export interface DebuggerEventEvent extends whale.events.Event<(source: Debuggee, method: string, params?: Object) => void> { }

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
        export var onDetach: DebuggerDetachedEvent;
        /** Fired whenever debugging target issues instrumentation event. */
        export var onEvent: DebuggerEventEvent;
    }

    export { _debugger as debugger }
}
////////////////////
// Declarative Content
////////////////////
/**
 * 웹 페이지에 대한 접근 권한 요청없이 특정 페이지의 콘텐트 혹은 상태에 의존적인 동작을 수행할 수 있습니다.
 * 권한: "declarativeContent"
 * @since Chrome 33.
 */
declare namespace whale.declarativeContent {
    export interface PageStateUrlDetails {
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
        ports?: (number | number[])[];
    }

    export class PageStateMatcherProperties {
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

    /** Matches the state of a web page by various criteria. */
    export class PageStateMatcher {
        constructor (options: PageStateMatcherProperties);
    }

    /** Declarative event action that shows the extension's page action while the corresponding conditions are met. */
    export class ShowPageAction { }

    /** Provides the Declarative Event API consisting of addRules, removeRules, and getRules. */
    export interface PageChangedEvent extends whale.events.Event<() => void> { }

    export var onPageChanged: PageChangedEvent;
}

////////////////////
// DesktopCapture
////////////////////
/**
 * 화면, 윈도우 또는 탭의 콘텐츠를 캡쳐할 수 있습니다.
 * 권한: "desktopCapture"
 * @since Chrome 34.
 */
declare namespace whale.desktopCapture {
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
    export function chooseDesktopMedia(sources: string[], targetTab: whale.tabs.Tab, callback: (streamId: string) => void): number;
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
 * 개발자도구를 이용한 검사(Inspect)가 진행중인 윈도우에서 코드를 실행하거나 페이지를 새로고침 하는 등의 작업을 수행할 수 있습니다.
 * @since Chrome 18.
 */
declare namespace whale.devtools.inspectedWindow {
    /** A resource within the inspected page, such as a document, a script, or an image. */
    export interface Resource {
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

    export interface ReloadOptions {
        /** Optional. If specified, the string will override the value of the User-Agent HTTP header that's sent while loading the resources of the inspected page. The string will also override the value of the navigator.userAgent property that's returned to any scripts that are running within the inspected page.  */
        userAgent?: string;
        /** Optional. When true, the loader will ignore the cache for all inspected page resources loaded before the load event is fired. The effect is similar to pressing Ctrl+Shift+R in the inspected window or within the Developer Tools window.  */
        ignoreCache?: boolean;
        /** Optional. If specified, the script will be injected into every frame of the inspected page immediately upon load, before any of the frame's scripts. The script will not be injected after subsequent reloads—for example, if the user presses Ctrl+R.  */
        injectedScript?: string;
        /**
         * Optional.
          * If specified, this script evaluates into a function that accepts three string arguments: the source to preprocess, the URL of the source, and a function name if the source is an DOM event handler. The preprocessorerScript function should return a string to be compiled by Chrome in place of the input source. In the case that the source is a DOM event handler, the returned source must compile to a single JS function.
         * @deprecated Deprecated since Chrome 41. Please avoid using this parameter, it will be removed soon.
         */
        preprocessorScript?: string;
    }

    export interface EvaluationExceptionInfo {
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

    export interface ResourceAddedEvent extends whale.events.Event<(resource: Resource) => void> { }

    export interface ResourceContentCommittedEvent extends whale.events.Event<(resource: Resource, content: string) => void> { }

    /** The ID of the tab being inspected. This ID may be used with chrome.tabs.* API. */
    export var tabId: number;

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
    export function eval<T>(expression: string, callback?: (result: T, exceptionInfo: EvaluationExceptionInfo) => void): void;
    /**
     * Evaluates a JavaScript expression in the context of the main frame of the inspected page. The expression must evaluate to a JSON-compliant object, otherwise an exception is thrown. The eval function can report either a DevTools-side error or a JavaScript exception that occurs during evaluation. In either case, the result parameter of the callback is undefined. In the case of a DevTools-side error, the isException parameter is non-null and has isError set to true and code set to an error code. In the case of a JavaScript error, isException is set to true and value is set to the string value of thrown object.
     * @param expression An expression to evaluate.
     * @param options The options parameter can contain one or more options.
     * @param callback A function called when evaluation completes.
     * If you specify the callback parameter, it should be a function that looks like this:
     * function(object result, object exceptionInfo) {...};
     * Parameter result: The result of evaluation.
     * Parameter exceptionInfo: An object providing details if an exception occurred while evaluating the expression.
     */
    export function eval<T>(expression: string, options: EvalOptions, callback?: (result: T, exceptionInfo: EvaluationExceptionInfo) => void): void;
    /**
     * Retrieves the list of resources from the inspected page.
     * @param callback A function that receives the list of resources when the request completes.
     * The callback parameter should be a function that looks like this:
     * function(array of Resource resources) {...};
     */
    export function getResources(callback: (resources: Resource[]) => void): void;

    /** Fired when a new resource is added to the inspected page. */
    export var onResourceAdded: ResourceAddedEvent;
    /** Fired when a new revision of the resource is committed (e.g. user saves an edited version of the resource in the Developer Tools). */
    export var onResourceContentCommitted: ResourceContentCommittedEvent;

    export interface EvalOptions {
        /** If specified, the expression is evaluated on the iframe whose URL matches the one specified. By default, the expression is evaluated in the top frame of the inspected page. */
        frameURL?: string;
        /** Evaluate the expression in the context of the content script of the calling extension, provided that the content script is already injected into the inspected page. If not, the expression is not evaluated and the callback is invoked with the exception parameter set to an object that has the isError field set to true and the code field set to E_NOTFOUND. */
        useContentScriptContext?: boolean;
        /** Evaluate the expression in the context of a content script of an extension that matches the specified origin. If given, contextSecurityOrigin overrides the 'true' setting on userContentScriptContext. */
        contextSecurityOrigin?: string;
    }
}

////////////////////
// Dev Tools - Network
////////////////////
/**
 * 	개발자도구 > 네트워크 패널에서 수신하는 정보들을 수신할 수 있습니다.
 * @since Chrome 18.
 */
declare namespace whale.devtools.network {
    /** Represents a network request for a document resource (script, image and so on). See HAR Specification for reference. */
    export interface Request {
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

    export interface RequestFinishedEvent extends whale.events.Event<(request: Request) => void> { }

    export interface NavigatedEvent extends whale.events.Event<(url: string) => void> { }

    /**
     * Returns HAR log that contains all known network requests.
     * @param callback A function that receives the HAR log when the request completes.
     * The callback parameter should be a function that looks like this:
     * function(object harLog) {...};
     * Parameter harLog: A HAR log. See HAR specification for details.
     */
    export function getHAR(callback: (harLog: Object) => void): void;

    /** Fired when a network request is finished and all request data are available. */
    export var onRequestFinished: RequestFinishedEvent;
    /** Fired when the inspected window navigates to a new page. */
    export var onNavigated: NavigatedEvent;
}

////////////////////
// Dev Tools - Panels
////////////////////
/**
 * 개발자도구에 새로운 패널을 추가하거나 기존의 패널에 접근할 수 있습니다.
 * @since Chrome 18.
 */
declare namespace whale.devtools.panels {
    export interface PanelShownEvent extends whale.events.Event<(window: Window) => void> { }

    export interface PanelHiddenEvent extends whale.events.Event<() => void> { }

    export interface PanelSearchEvent extends whale.events.Event<(action: string, queryString?: string) => void> { }

    /** Represents a panel created by extension. */
    export interface ExtensionPanel {
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

    export interface ButtonClickedEvent extends whale.events.Event<() => void> { }

    /** A button created by the extension. */
    export interface Button {
        /**
         * Updates the attributes of the button. If some of the arguments are omitted or null, the corresponding attributes are not updated.
         * @param iconPath Path to the new icon of the button.
         * @param tooltipText Text shown as a tooltip when user hovers the mouse over the button.
         * @param disabled Whether the button is disabled.
         */
        update(iconPath?: string | null, tooltipText?: string | null, disabled?: boolean | null): void;
        /** Fired when the button is clicked. */
        onClicked: ButtonClickedEvent;
    }

    export interface SelectionChangedEvent extends whale.events.Event<() => void> { }

    /** Represents the Elements panel. */
    export interface ElementsPanel {
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
    export interface SourcesPanel {
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

    export interface ExtensionSidebarPaneShownEvent extends whale.events.Event<(window: whale.windows.Window) => void> { }

    export interface ExtensionSidebarPaneHiddenEvent extends whale.events.Event<() => void> { }

    /** A sidebar created by the extension. */
    export interface ExtensionSidebarPane {
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
        setObject(jsonObject: Object, rootTitle?: string, callback?: () => void): void;
        /**
         * Sets a JSON-compliant object to be displayed in the sidebar pane.
         * @param jsonObject An object to be displayed in context of the inspected page. Evaluated in the context of the caller (API client).
         * @param callback A callback invoked after the sidebar is updated with the object.
         * If you specify the callback parameter, it should be a function that looks like this:
         * function() {...};
         */
        setObject(jsonObject: Object, callback?: () => void): void;
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
    export var elements: ElementsPanel;
    /**
     * Since Chrome 38.
     * Sources panel.
     */
    export var sources: SourcesPanel;

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
    export function setOpenResourceHandler(callback?: (resource: whale.devtools.inspectedWindow.Resource) => void): void;
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
// Dev Tools - Downloads
////////////////////
/**
 * 지정한 URL의 파일 다운로드, 진행중인 다운로드의 제어 및 검색 등 파일 다운로드에 관련된 기능을 사용할 수 있습니다.
 * 권한: "downloads"
 * @since Chrome 31
 */
declare namespace whale.downloads {
    export interface HeaderNameValuePair {
        /** Name of the HTTP header. */
        name: string;
        /** Value of the HTTP header. */
        value: string;
    }

    export interface DownloadOptions {
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

    export interface DownloadDelta {
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

    export interface BooleanDelta {
        current?: boolean;
        previous?: boolean;
    }

    /** Since Chrome 34. */
    export interface DoubleDelta {
        current?: number;
        previous?: number;
    }

    export interface StringDelta {
        current?: string;
        previous?: string;
    }

    export interface DownloadItem {
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

    export interface GetFileIconOptions {
        /** Optional. * The size of the returned icon. The icon will be square with dimensions size * size pixels. The default and largest size for the icon is 32x32 pixels. The only supported sizes are 16 and 32. It is an error to specify any other size.
 */
        size?: number;
    }

    export interface DownloadQuery {
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

    export interface DownloadFilenameSuggestion {
        /** The DownloadItem's new target DownloadItem.filename, as a path relative to the user's default Downloads directory, possibly containing subdirectories. Absolute paths, empty paths, and paths containing back-references ".." will be ignored. */
        filename: string;
        /** Optional. The action to take if filename already exists.  */
        conflictAction?: string;
    }

    export interface DownloadChangedEvent extends whale.events.Event<(downloadDelta: DownloadDelta) => void> { }

    export interface DownloadCreatedEvent extends whale.events.Event<(downloadItem: DownloadItem) => void> { }

    export interface DownloadErasedEvent extends whale.events.Event<(downloadId: number) => void> { }

    export interface DownloadDeterminingFilenameEvent extends whale.events.Event<(downloadItem: DownloadItem, suggest: (suggestion?: DownloadFilenameSuggestion) => void) => void> { }

    export interface StateType {
        readonly COMPLETE: string
        readonly IN_PROGRESS: string
        readonly INTERRUPTED: string
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
    export var onChanged: DownloadChangedEvent;
    /** This event fires with the DownloadItem object when a download begins. */
    export var onCreated: DownloadCreatedEvent;
    /** Fires with the downloadId when a download is erased from history. */
    export var onErased: DownloadErasedEvent;
    /** During the filename determination process, extensions will be given the opportunity to override the target DownloadItem.filename. Each extension may not register more than one listener for this event. Each listener must call suggest exactly once, either synchronously or asynchronously. If the listener calls suggest asynchronously, then it must return true. If the listener neither calls suggest synchronously nor returns true, then suggest will be called automatically. The DownloadItem will not complete until all listeners have called suggest. Listeners may call suggest without any arguments in order to allow the download to use downloadItem.filename for its filename, or pass a suggestion object to suggest in order to override the target filename. If more than one extension overrides the filename, then the last extension installed whose listener passes a suggestion object to suggest wins. In order to avoid confusion regarding which extension will win, users should not install extensions that may conflict. If the download is initiated by download and the target filename is known before the MIME type and tentative filename have been determined, pass filename to download instead. */
    export var onDeterminingFilename: DownloadDeterminingFilenameEvent;

    export const State: StateType;
}

////////////////////
// Events
////////////////////
/**
 * 웨일 브라우저 API에서 사용되는 공통 이벤트 자료형을 포함하는 네임스페이스입니다.
 * @since Chrome 21.
 */
declare namespace whale.events {
    /** Filters URLs for various criteria. See event filtering. All criteria are case sensitive. */
    export interface UrlFilter {
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
    export interface Event<T extends Function> {
        /**
         * Registers an event listener callback to an event.
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * The callback parameter should be a function that looks like this:
         * function() {...};
         */
        addListener(callback: T): void;
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
        hasListener(callback: T): boolean;
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
        removeListener(callback: T): void;
        hasListeners(): boolean;
    }

    /** Description of a declarative rule for handling events. */
    export interface Rule {
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
 * 서로 다른 확장앱 사이에 메시지를 교환하거나, 현재 확장앱에 관한 정보를 얻을 수 있습니다.
 * @since Chrome 5.
 */
declare namespace whale.extension {
    export interface FetchProperties {
        /** Optional. The window to restrict the search to. If omitted, returns all views.  */
        windowId?: number;
        /** Optional. The type of view to get. If omitted, returns all views (including background pages and tabs). Valid values: 'tab', 'notification', 'popup'.  */
        type?: string;
    }

    export interface LastError {
        /** Description of the error that has taken place. */
        message: string;
    }

    export interface OnRequestEvent extends whale.events.Event<((request: any, sender: runtime.MessageSender, sendResponse: (response: any) => void) => void) | ((sender: runtime.MessageSender, sendResponse: (response: any) => void) => void)> { }

    /**
     * Since Chrome 7.
     * True for content scripts running inside incognito tabs, and for extension pages running inside an incognito process. The latter only applies to extensions with 'split' incognito_behavior.
     */
    export var inIncognitoContext: boolean;
    /** Set for the lifetime of a callback if an ansychronous extension api has resulted in an error. If no error has occured lastError will be undefined. */
    export var lastError: LastError;

    /** Returns the JavaScript 'window' object for the background page running inside the current extension. Returns null if the extension has no background page. */
    export function getBackgroundPage(): Window | null;
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
    export var onRequest: OnRequestEvent;
    /**
     * Fired when a request is sent from another extension.
     * @deprecated Deprecated since Chrome 33. Please use runtime.onMessageExternal.
     */
    export var onRequestExternal: OnRequestEvent;
}

////////////////////
// Font Settings
////////////////////
/**
 * 글꼴 관련 설정을 제어할 수 있습니다.
 * 권한: "fontSettings"
 * @since Chrome 22.
 */
declare namespace whale.fontSettings {
    /** Represents a font name. */
    export interface FontName {
        /** The display name of the font. */
        displayName: string;
        /** The font ID. */
        fontId: string;
    }

    export interface DefaultFontSizeDetails {
        /** The font size in pixels. */
        pixelSize: number;
    }

    export interface FontDetails {
        /** The generic font family for the font. */
        genericFamily: string;
        /** Optional. The script for the font. If omitted, the global script font setting is affected.  */
        script?: string;
    }

    export interface FullFontDetails {
        /** The generic font family for which the font setting has changed. */
        genericFamily: string;
        /** The level of control this extension has over the setting. */
        levelOfControl: string;
        /** Optional. The script code for which the font setting has changed.  */
        script?: string;
        /** The font ID. See the description in getFont. */
        fontId: string;
    }

    export interface FontDetailsResult {
        /** The level of control this extension has over the setting. */
        levelOfControl: string;
        /** The font ID. Rather than the literal font ID preference value, this may be the ID of the font that the system resolves the preference value to. So, fontId can differ from the font passed to setFont, if, for example, the font is not available on the system. The empty string signifies fallback to the global script font setting. */
        fontId: string;
    }

    export interface FontSizeDetails {
        /** The font size in pixels. */
        pixelSize: number;
        /** The level of control this extension has over the setting. */
        levelOfControl: string;
    }

    export interface SetFontSizeDetails {
        /** The font size in pixels. */
        pixelSize: number;
    }

    export interface SetFontDetails extends FontDetails {
        /** The font ID. The empty string means to fallback to the global script font setting. */
        fontId: string;
    }

    export interface DefaultFixedFontSizeChangedEvent extends whale.events.Event<(details: FontSizeDetails) => void> { }

    export interface DefaultFontSizeChangedEvent extends whale.events.Event<(details: FontSizeDetails) => void> { }

    export interface MinimumFontSizeChangedEvent extends whale.events.Event<(details: FontSizeDetails) => void> { }

    export interface FontChangedEvent extends whale.events.Event<(details: FullFontDetails) => void> { }

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
    export var onDefaultFixedFontSizeChanged: DefaultFixedFontSizeChangedEvent;
    /** Fired when the default font size setting changes. */
    export var onDefaultFontSizeChanged: DefaultFontSizeChangedEvent;
    /** Fired when the minimum font size setting changes. */
    export var onMinimumFontSizeChanged: MinimumFontSizeChangedEvent;
    /** Fired when a font setting changes. */
    export var onFontChanged: FontChangedEvent;
}

////////////////////
// Google Cloud Messaging
////////////////////
/**
 * Google Cloud Messaging 서비스와 메시지를 주고받습니다.
 * 권한: "gcm"
 * @since Chrome 35.
 */
declare namespace whale.gcm {
    export interface OutgoingMessage {
        /** The ID of the server to send the message to as assigned by Google API Console. */
        destinationId: string;
        /** The ID of the message. It must be unique for each message in scope of the applications. See the Cloud Messaging documentation for advice for picking and handling an ID. */
        messageId: string;
        /** Optional. Time-to-live of the message in seconds. If it is not possible to send the message within that time, an onSendError event will be raised. A time-to-live of 0 indicates that the message should be sent immediately or fail if it's not possible. The maximum and a default value of time-to-live is 86400 seconds (1 day). */
        timeToLive?: number;
        /** Message data to send to the server. Case-insensitive goog. and google, as well as case-sensitive collapse_key are disallowed as key prefixes. Sum of all key/value pairs should not exceed gcm.MAX_MESSAGE_SIZE. */
        data: Object;
    }

    export interface IncomingMessage {
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

    export interface GcmError {
        /** The error message describing the problem. */
        errorMessage: string;
        /** Optional. The ID of the message with this error, if error is related to a specific message. */
        messageId?: string;
        /** Additional details related to the error, when available. */
        detail: Object;
    }

    export interface MessageReceptionEvent extends whale.events.Event<(message: IncomingMessage) => void> { }

    export interface MessageDeletionEvent extends whale.events.Event<() => void> { }

    export interface GcmErrorEvent extends whale.events.Event<(error: GcmError) => void> { }

    /** The maximum size (in bytes) of all key/value pairs in a message. */
    export var MAX_MESSAGE_SIZE: number;

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
    export var onMessage: MessageReceptionEvent;
    /** Fired when a GCM server had to delete messages sent by an app server to the application. See Messages deleted event section of Cloud Messaging documentation for details on handling this event. */
    export var onMessagesDeleted: MessageDeletionEvent;
    /** Fired when it was not possible to send a message to the GCM server. */
    export var onSendError: GcmErrorEvent;
}


////////////////////
// History
////////////////////
/**
 * 방문 기록의 생성, 삭제 및 검색 등 방문 기록에 관한 기능을 제공합니다. 이 API를 이용해 방문 기록 페이지를 만들 수 있습니다.
 * 권한: "history"
 * @since Chrome 5.
 */
declare namespace whale.history {
    /** An object encapsulating one visit to a URL. */
    export interface VisitItem {
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
    export interface HistoryItem {
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

    export interface HistoryQuery {
        /** A free-text query to the history service. Leave empty to retrieve all pages. */
        text: string;
        /** Optional. The maximum number of results to retrieve. Defaults to 100. */
        maxResults?: number;
        /** Optional. Limit results to those visited after this date, represented in milliseconds since the epoch. */
        startTime?: number;
        /** Optional. Limit results to those visited before this date, represented in milliseconds since the epoch. */
        endTime?: number;
    }

    export interface Url {
        /** The URL for the operation. It must be in the format as returned from a call to history.search. */
        url: string;
    }

    export interface Range {
        /** Items added to history before this date, represented in milliseconds since the epoch. */
        endTime: number;
        /** Items added to history after this date, represented in milliseconds since the epoch. */
        startTime: number;
    }

    export interface RemovedResult {
        /** True if all history was removed. If true, then urls will be empty. */
        allHistory: boolean;
        /** Optional. */
        urls?: string[];
    }

    export interface HistoryVisitedEvent extends whale.events.Event<(result: HistoryItem) => void> { }

    export interface HistoryVisitRemovedEvent extends whale.events.Event<(removed: RemovedResult) => void> { }

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
    export var onVisited: HistoryVisitedEvent;
    /** Fired when one or more URLs are removed from the history service. When all visits have been removed the URL is purged from history. */
    export var onVisitRemoved: HistoryVisitRemovedEvent;
}

////////////////////
// i18n
////////////////////
/**
 * 다국어 지원을 위한 기능을 제공합니다.
 * @since Chrome 5.
 */
declare namespace whale.i18n {
    /** Holds detected ISO language code and its percentage in the input string */
    export interface DetectedLanguage {
        /** An ISO language code such as 'en' or 'fr'.
         * For a complete list of languages supported by this method, see  [kLanguageInfoTable]{@link https://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc}.
         * For an unknown language, 'und' will be returned, which means that [percentage] of the text is unknown to CLD */
        language: string;

        /** The percentage of the detected language */
        percentage: number;
    }

    /** Holds detected language reliability and array of DetectedLanguage */
    export interface LanguageDetectionResult {
        /** CLD detected language reliability */
        isReliable: boolean;

        /** Array of detectedLanguage */
        languages: DetectedLanguage[];
    }

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

    /** Detects the language of the provided text using CLD.
     * @param text User input string to be translated.
     * @param callback The callback parameter should be a function that looks like this: function(object result) {...};
     */
    export function detectLanguage(text: string, callback: (result: LanguageDetectionResult) => void): void;
}

////////////////////
// Idle
////////////////////
/**
 * 시스템의 유휴 상태(Idle) 여부를 확인하거나 변화를 감지할 수 있습니다.
 * 권한: "idle"
 * @since Chrome 6.
 */
declare namespace whale.idle {
    export interface IdleStateChangedEvent extends whale.events.Event<(newState: string) => void> { }

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
    export var onStateChanged: IdleStateChangedEvent;
}

////////////////////
// Management
////////////////////
/**
 * 설치되어 있는 확장앱 정보를 얻어 제어할 수 있습니다.
 * 권한: "management"
 * @since Chrome 8.
 */
declare namespace whale.management {
    /** Information about an installed extension, app, or theme. */
    export interface ExtensionInfo {
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
    export interface IconInfo {
        /** The URL for this icon image. To display a grayscale version of the icon (to indicate that an extension is disabled, for example), append ?grayscale=true to the URL. */
        url: string;
        /** A number representing the width and height of the icon. Likely values include (but are not limited to) 128, 48, 24, and 16. */
        size: number;
    }

    export interface UninstallOptions {
        /**
         * Optional.
         * Whether or not a confirm-uninstall dialog should prompt the user. Defaults to false for self uninstalls. If an extension uninstalls another extension, this parameter is ignored and the dialog is always shown.
         */
        showConfirmDialog?: boolean;
    }

    export interface ManagementDisabledEvent extends whale.events.Event<(info: ExtensionInfo) => void> { }

    export interface ManagementUninstalledEvent extends whale.events.Event<(id: string) => void> { }

    export interface ManagementInstalledEvent extends whale.events.Event<(info: ExtensionInfo) => void> { }

    export interface ManagementEnabledEvent extends whale.events.Event<(info: ExtensionInfo) => void> { }

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
    export var onDisabled: ManagementDisabledEvent;
    /** Fired when an app or extension has been uninstalled. */
    export var onUninstalled: ManagementUninstalledEvent;
    /** Fired when an app or extension has been installed. */
    export var onInstalled: ManagementInstalledEvent;
    /** Fired when an app or extension has been enabled. */
    export var onEnabled: ManagementEnabledEvent;
}

////////////////////
// Notifications
// https://developer.chrome.com/extensions/notifications
////////////////////
/**
 * 시스템 트레이에 알림창을 표시할 수 있습니다.
 * 권한: "notifications"
 * @since Chrome 28.
 */
declare namespace whale.notifications {
    export interface ButtonOptions {
        title: string;
        iconUrl?: string;
    }

    export interface ItemOptions {
        /** Title of one item of a list notification. */
        title: string;
        /** Additional details about this item. */
        message: string;
    }

    export interface NotificationOptions {
        /** Optional. Which type of notification to display. Required for notifications.create method. */
        type?: string;
        /**
         * Optional.
         * A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
         * URLs can be a data URL, a blob URL, or a URL relative to a resource within this extension's .crx file Required for notifications.create method.
         */
        iconUrl?: string;
        /** Optional. Title of the notification (e.g. sender name for email). Required for notifications.create method. */
        title?: string;
        /** Optional. Main notification content. Required for notifications.create method. */
        message?: string;
        /**
         * Optional.
         * Alternate notification content with a lower-weight font.
         * @since Chrome 31.
         */
        contextMessage?: string;
        /** Optional. Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest. Zero is default. */
        priority?: number;
        /** Optional. A timestamp associated with the notification, in milliseconds past the epoch (e.g. Date.now() + n). */
        eventTime?: number;
        /** Optional. Text and icons for up to two notification action buttons. */
        buttons?: ButtonOptions[];
        /** Optional. Items for multi-item notifications. */
        items?: ItemOptions[];
        /**
         * Optional.
         * Current progress ranges from 0 to 100.
         * @since Chrome 30.
         */
        progress?: number;
        /**
         * Optional.
         * Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
         * @since Chrome 32.
         */
        isClickable?: boolean;
        /**
         * Optional.
         * A URL to the app icon mask. URLs have the same restrictions as iconUrl. The app icon mask should be in alpha channel, as only the alpha channel of the image will be considered.
         * @since Chrome 38.
         */
        appIconMaskUrl?: string;
        /** Optional. A URL to the image thumbnail for image-type notifications. URLs have the same restrictions as iconUrl. */
        imageUrl?: string;
        /**
         * Indicates that the notification should remain visible on screen until the user activates or dismisses the notification.
         * This defaults to false.
         * @since Chrome 50
         */
        requireInteraction?: boolean;
    }

    export interface NotificationClosedEvent extends whale.events.Event<(notificationId: string, byUser: boolean) => void> { }

    export interface NotificationClickedEvent extends whale.events.Event<(notificationId: string) => void> { }

    export interface NotificationButtonClickedEvent extends whale.events.Event<(notificationId: string, buttonIndex: number) => void> { }

    export interface NotificationPermissionLevelChangedEvent extends whale.events.Event<(level: string) => void> { }

    export interface NotificationShowSettingsEvent extends whale.events.Event<() => void> { }

    /** The notification closed, either by the system or by user action. */
    export var onClosed: NotificationClosedEvent;
    /** The user clicked in a non-button area of the notification. */
    export var onClicked: NotificationClickedEvent;
    /** The user pressed a button in the notification. */
    export var onButtonClicked: NotificationButtonClickedEvent;
    /**
     * The user changes the permission level.
     * @since Chrome 32.
     */
    export var onPermissionLevelChanged: NotificationPermissionLevelChangedEvent;
    /**
     * The user clicked on a link for the app's notification settings.
     * @since Chrome 32.
     */
    export var onShowSettings: NotificationShowSettingsEvent;

    /**
     * Creates and displays a notification.
     * @param notificationId Identifier of the notification. If not set or empty, an ID will automatically be generated. If it matches an existing notification, this method first clears that notification before proceeding with the create operation.
     * The notificationId parameter is required before Chrome 42.
     * @param options Contents of the notification.
     * @param callback Returns the notification id (either supplied or generated) that represents the created notification.
     * The callback is required before Chrome 42.
     * If you specify the callback parameter, it should be a function that looks like this:
     * function(string notificationId) {...};
     */
    export function create(notificationId: string, options: NotificationOptions, callback?: (notificationId: string) => void): void;
    /**
     * Creates and displays a notification.
     * @param notificationId Identifier of the notification. If not set or empty, an ID will automatically be generated. If it matches an existing notification, this method first clears that notification before proceeding with the create operation.
     * The notificationId parameter is required before Chrome 42.
     * @param options Contents of the notification.
     * @param callback Returns the notification id (either supplied or generated) that represents the created notification.
     * The callback is required before Chrome 42.
     * If you specify the callback parameter, it should be a function that looks like this:
     * function(string notificationId) {...};
     */
    export function create(options: NotificationOptions, callback?: (notificationId: string) => void): void;
    /**
     * Updates an existing notification.
     * @param notificationId The id of the notification to be updated. This is returned by notifications.create method.
     * @param options Contents of the notification to update to.
     * @param callback Called to indicate whether a matching notification existed.
     * The callback is required before Chrome 42.
     * If you specify the callback parameter, it should be a function that looks like this:
     * function(boolean wasUpdated) {...};
     */
    export function update(notificationId: string, options: NotificationOptions, callback?: (wasUpdated: boolean) => void): void;
    /**
     * Clears the specified notification.
     * @param notificationId The id of the notification to be cleared. This is returned by notifications.create method.
     * @param callback Called to indicate whether a matching notification existed.
     * The callback is required before Chrome 42.
     * If you specify the callback parameter, it should be a function that looks like this:
     * function(boolean wasCleared) {...};
     */
    export function clear(notificationId: string, callback?: (wasCleared: boolean) => void): void;
    /**
     * Retrieves all the notifications.
     * @since Chrome 29.
     * @param callback Returns the set of notification_ids currently in the system.
     * The callback parameter should be a function that looks like this:
     * function(object notifications) {...};
     */
    export function getAll(callback: (notifications: Object) => void): void;
    /**
     * Retrieves whether the user has enabled notifications from this app or extension.
     * @since Chrome 32.
     * @param callback Returns the current permission level.
     * The callback parameter should be a function that looks like this:
     * function( PermissionLevel level) {...};
     */
    export function getPermissionLevel(callback: (level: string) => void): void;
}

////////////////////
// Omnibox
////////////////////
/**
 * 주소창에서 특정 키워드를 입력하면 확장앱이 주소창 영역에 관여하게 할 수 있습니다.
 * Manifest:  "omnibox": {...}
 * @since Chrome 9.
 */
declare namespace whale.omnibox {
    /** A suggest result. */
    export interface SuggestResult {
        /** The text that is put into the URL bar, and that is sent to the extension when the user chooses this entry. */
        content: string;
        /** The text that is displayed in the URL dropdown. Can contain XML-style markup for styling. The supported tags are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query), and 'dim' (for dim helper text). The styles can be nested, eg. dimmed match. You must escape the five predefined entities to display them as text: stackoverflow.com/a/1091953/89484 */
        description: string;
    }

    export interface Suggestion {
        /** The text that is displayed in the URL dropdown. Can contain XML-style markup for styling. The supported tags are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query), and 'dim' (for dim helper text). The styles can be nested, eg. dimmed match. */
        description: string;
    }

    /** The window disposition for the omnibox query. This is the recommended context to display results. */
    export type OnInputEnteredDisposition = 'currentTab' | 'newForegroundTab' | 'newBackgroundTab';

    export interface OmniboxInputEnteredEvent extends whale.events.Event<(text: string, disposition: OnInputEnteredDisposition) => void> { }

    export interface OmniboxInputChangedEvent extends whale.events.Event<(text: string, suggest: (suggestResults: SuggestResult[]) => void) => void> { }

    export interface OmniboxInputStartedEvent extends whale.events.Event<() => void> { }

    export interface OmniboxInputCancelledEvent extends whale.events.Event<() => void> { }

    export interface OmniboxSuggestionDeletedEvent extends whale.events.Event<(text: string) => void> { }

    /**
     * Sets the description and styling for the default suggestion. The default suggestion is the text that is displayed in the first suggestion row underneath the URL bar.
     * @param suggestion A partial SuggestResult object, without the 'content' parameter.
     */
    export function setDefaultSuggestion(suggestion: Suggestion): void;

    /** User has accepted what is typed into the omnibox. */
    export var onInputEntered: OmniboxInputEnteredEvent;
    /** User has changed what is typed into the omnibox. */
    export var onInputChanged: OmniboxInputChangedEvent;
    /** User has started a keyword input session by typing the extension's keyword. This is guaranteed to be sent exactly once per input session, and before any onInputChanged events. */
    export var onInputStarted: OmniboxInputStartedEvent;
    /** User has ended the keyword input session without accepting the input. */
    export var onInputCancelled: OmniboxInputCancelledEvent;
     /**
     * User has deleted a suggested result
     * @since Chrome 63.
     */
    export var onDeleteSuggestion: OmniboxSuggestionDeletedEvent;
}

////////////////////
// Page Action
////////////////////
/**
 * 주소창 오른쪽 툴바 영역에 나타나는 버튼을 제어 할 수 있습니다.
 * `browserAction`과 거의 동일하지만 현재 페이지에 대해서만 기능을 수행하기 위해 제공된다는 점이 다릅니다. 비활성 상태에서는 버튼이 회색으로 표시됩니다.
 * Manifest:  "page_action": {...}
 * @since Chrome 5.
 */
declare namespace whale.pageAction {
    export interface PageActionClickedEvent extends whale.events.Event<(tab: whale.tabs.Tab) => void> { }

    export interface TitleDetails {
        /** The id of the tab for which you want to modify the page action. */
        tabId: number;
        /** The tooltip string. */
        title: string;
    }

    export interface GetDetails {
        /** Specify the tab to get the title from. */
        tabId: number;
    }

    export interface PopupDetails {
        /** The id of the tab for which you want to modify the page action. */
        tabId: number;
        /** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string;
    }

    export interface IconDetails {
        /** The id of the tab for which you want to modify the page action. */
        tabId: number;
        /**
         * Optional.
         * @deprecated This argument is ignored.
         */
        iconIndex?: number;
        /**
         * Optional.
         * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        imageData?: ImageData | { [index: number]: ImageData };
        /**
         * Optional.
         * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        path?: any;
    }

    /**
     * Shows the page action. The page action is shown whenever the tab is selected.
     * @param tabId The id of the tab for which you want to modify the page action.
     */
    export function hide(tabId: number, callback?: () => void): void;
    /**
     * Shows the page action. The page action is shown whenever the tab is selected.
     * @param tabId The id of the tab for which you want to modify the page action.
     */
    export function show(tabId: number, callback?: () => void): void;
    /** Sets the title of the page action. This is displayed in a tooltip over the page action. */
    export function setTitle(details: TitleDetails): void;
    /** Sets the html document to be opened as a popup when the user clicks on the page action's icon. */
    export function setPopup(details: PopupDetails): void;
    /**
     * Gets the title of the page action.
     * @since Chrome 19.
     * @param callback The callback parameter should be a function that looks like this:
     * function(string result) {...};
     */
    export function getTitle(details: GetDetails, callback: (result: string) => void): void;
    /**
     * Gets the html document set as the popup for this page action.
     * @since Chrome 19.
     * @param callback The callback parameter should be a function that looks like this:
     * function(string result) {...};
     */
    export function getPopup(details: GetDetails, callback: (result: string) => void): void;
    /**
     * Sets the icon for the page action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the path or the imageData property must be specified.
     * @param callback If you specify the callback parameter, it should be a function that looks like this:
     * function() {...};
     */
    export function setIcon(details: IconDetails, callback?: () => void): void;

    /** Fired when a page action icon is clicked. This event will not fire if the page action has a popup. */
    export var onClicked: PageActionClickedEvent;
}

////////////////////
// Page Capture
////////////////////
/**
 * 지정한 탭의 웹 페이지를 MHTML 형식으로 저장할 수 있습니다.
 * 권한: "pageCapture"
 * @since Chrome 18.
 */
declare namespace whale.pageCapture {
    export interface SaveDetails {
        /** The id of the tab to save as MHTML. */
        tabId: number;
    }

    /**
     * Saves the content of the tab with given id as MHTML.
     * @param callback Called when the MHTML has been generated.
     * The callback parameter should be a function that looks like this:
     * function(binary mhtmlData) {...};
     * Parameter mhtmlData: The MHTML data as a Blob.
     */
    export function saveAsMHTML(details: SaveDetails, callback: (mhtmlData: any) => void): void;
}

////////////////////
// Permissions
////////////////////
/**
 * 매니페스트에 optional_permissions로 정의한 추가 권한을 사용자에게 요청할 수 있습니다
 * @since Chrome 16.
 */
declare namespace whale.permissions {
    export interface Permissions {
        /**
         * Optional.
         * List of named permissions (does not include hosts or origins). Anything listed here must appear in the optional_permissions list in the manifest.
         */
        origins?: string[];
        /**
         * Optional.
         * List of origin permissions. Anything listed here must be a subset of a host that appears in the optional_permissions list in the manifest. For example, if http://*.example.com/ or http://* appears in optional_permissions, you can request an origin of http://help.example.com/. Any path is ignored.
         */
        permissions?: string[];
    }

    export interface PermissionsRemovedEvent {
        /**
         * @param callback The callback parameter should be a function that looks like this:
         * function( Permissions permissions) {...};
         * Parameter permissions: The permissions that have been removed.
         */
        addListener(callback: (permissions: Permissions) => void): void;
    }

    export interface PermissionsAddedEvent {
        /**
         * @param callback The callback parameter should be a function that looks like this:
         * function( Permissions permissions) {...};
         * Parameter permissions: The newly acquired permissions.
         */
        addListener(callback: (permissions: Permissions) => void): void;
    }

    /**
     * Checks if the extension has the specified permissions.
     * @param callback The callback parameter should be a function that looks like this:
     * function(boolean result) {...};
     * Parameter result: True if the extension has the specified permissions.
     */
    export function contains(permissions: Permissions, callback: (result: boolean) => void): void;
    /**
     * Gets the extension's current set of permissions.
     * @param callback The callback parameter should be a function that looks like this:
     * function( Permissions permissions) {...};
     * Parameter permissions: The extension's active permissions.
     */
    export function getAll(callback: (permissions: Permissions) => void): void;
    /**
     * Requests access to the specified permissions. These permissions must be defined in the optional_permissions field of the manifest. If there are any problems requesting the permissions, runtime.lastError will be set.
     * @param callback If you specify the callback parameter, it should be a function that looks like this:
     * function(boolean granted) {...};
     * Parameter granted: True if the user granted the specified permissions.
     */
    export function request(permissions: Permissions, callback?: (granted: boolean) => void): void;
    /**
     * Removes access to the specified permissions. If there are any problems removing the permissions, runtime.lastError will be set.
     * @param callback If you specify the callback parameter, it should be a function that looks like this:
     * function(boolean removed) {...};
     * Parameter removed: True if the permissions were removed.
     */
    export function remove(permissions: Permissions, callback?: (removed: boolean) => void): void;

    /** Fired when access to permissions has been removed from the extension. */
    export var onRemoved: PermissionsRemovedEvent;
    /** Fired when the extension acquires new permissions. */
    export var onAdded: PermissionsAddedEvent;
}


////////////////////
// Power
////////////////////
/**
 * 전원 관리 기능을 제어할 수 있습니다.
 * 권한: "power"
 */
declare namespace whale.power {
    /** Requests that power management be temporarily disabled. |level| describes the degree to which power management should be disabled. If a request previously made by the same app is still active, it will be replaced by the new request. */
    export function requestKeepAwake(level: string): void;
    /** Releases a request previously made via requestKeepAwake(). */
    export function releaseKeepAwake(): void;
}

////////////////////
// Printer Provider
////////////////////
/**
 * The chrome.printerProvider API exposes events used by print manager to query printers controlled by extensions, to query their capabilities and to submit print jobs to these printers.
 * 권한: "printerProvider"
 */
declare namespace whale.printerProvider {
    export interface PrinterInfo {
        /** Unique printer ID. */
        id: string;
        /** Printer's human readable name. */
        name: string;
        /** Optional. Printer's human readable description. */
        description?: string;
    }

    export interface PrinterCapabilities {
        /** Device capabilities in CDD format. */
        capabilities: any;
    }

    export interface PrintJob {
        /** ID of the printer which should handle the job. */
        printerId: string;
        /** The print job title. */
        title: string;
        /** Print ticket in  CJT format. */
        ticket: Object;
        /** The document content type. Supported formats are "application/pdf" and "image/pwg-raster". */
        contentType: string;
        /** Blob containing the document data to print. Format must match |contentType|. */
        document: Blob;
    }

    export interface PrinterRequestedEvent extends whale.events.Event<(resultCallback: (printerInfo: PrinterInfo[]) => void) => void> { }

    export interface PrinterInfoRequestedEvent extends whale.events.Event<(device: any, resultCallback: (printerInfo?: PrinterInfo) => void) => void> { }

    export interface CapabilityRequestedEvent extends whale.events.Event<(printerId: string, resultCallback: (capabilities: PrinterCapabilities) => void) => void> { }

    export interface PrintRequestedEvent extends whale.events.Event<(printJob: PrintJob, resultCallback: (result: string) => void) => void> { }

    /** Event fired when print manager requests printers provided by extensions. */
    export var onGetPrintersRequested: PrinterRequestedEvent;
    /**
     * Event fired when print manager requests information about a USB device that may be a printer.
     * Note: An application should not rely on this event being fired more than once per device. If a connected device is supported it should be returned in the onGetPrintersRequested event.
     * @since Chrome 45.
     */
    export var onGetUsbPrinterInfoRequested: PrinterInfoRequestedEvent;
    /** Event fired when print manager requests printer capabilities. */
    export var onGetCapabilityRequested: CapabilityRequestedEvent;
    /** Event fired when print manager requests printing. */
    export var onPrintRequested: PrintRequestedEvent;
}

////////////////////
// Privacy
////////////////////
/**
 * 개인정보 보호 관련 설정을 제어할 수 있습니다.
 * 권한: "privacy"
 */
declare namespace whale.privacy {
    export interface Services {
        /** since Chrome 20. */
        spellingServiceEnabled: whale.types.ChromeSetting;
        searchSuggestEnabled: whale.types.ChromeSetting;
        instantEnabled: whale.types.ChromeSetting;
        alternateErrorPagesEnabled: whale.types.ChromeSetting;
        safeBrowsingEnabled: whale.types.ChromeSetting;
        autofillEnabled: whale.types.ChromeSetting;
        translationServiceEnabled: whale.types.ChromeSetting;
        /** @since Chrome 38. */
        passwordSavingEnabled: whale.types.ChromeSetting;
        /** @since Chrome 42. */
        hotwordSearchEnabled: whale.types.ChromeSetting;
        /** @since Chrome 42. */
        safeBrowsingExtendedReportingEnabled: whale.types.ChromeSetting;
    }

    export interface Network {
        networkPredictionEnabled: whale.types.ChromeSetting;
        /** @since Chrome 42. */
        webRTCMultipleRoutesEnabled: whale.types.ChromeSetting;
        /** @since Chrome 47. Warning: this is the current Dev channel. */
        webRTCNonProxiedUdpEnabled: whale.types.ChromeSetting;
    }

    export interface Websites {
        thirdPartyCookiesAllowed: whale.types.ChromeSetting;
        referrersEnabled: whale.types.ChromeSetting;
        hyperlinkAuditingEnabled: whale.types.ChromeSetting;
        /** @since Chrome 21. */
        protectedContentEnabled: whale.types.ChromeSetting;
    }

    /** Settings that enable or disable features that require third-party network services provided by Google and your default search provider. */
    export var services: Services;
    /** Settings that influence Chrome's handling of network connections in general. */
    export var network: Network;
    /** Settings that determine what information Chrome makes available to websites. */
    export var websites: Websites;
}

////////////////////
// Proxy
////////////////////
/**
 * 프록시 관련 설정을 제어할 수 있습니다.
 * 권한: "proxy"
 */
declare namespace whale.proxy {
    /** An object holding proxy auto-config information. Exactly one of the fields should be non-empty. */
    export interface PacScript {
        /** Optional. URL of the PAC file to be used. */
        url?: string;
        /** Optional. If true, an invalid PAC script will prevent the network stack from falling back to direct connections. Defaults to false. */
        mandatory?: boolean;
        /** Optional. A PAC script. */
        data?: string;
    }

    /** An object encapsulating a complete proxy configuration. */
    export interface ProxyConfig {
        /** Optional. The proxy rules describing this configuration. Use this for 'fixed_servers' mode. */
        rules?: ProxyRules;
        /** Optional. The proxy auto-config (PAC) script for this configuration. Use this for 'pac_script' mode. */
        pacScript?: PacScript;
        /**
         * 'direct' = Never use a proxy
         * 'auto_detect' = Auto detect proxy settings
         * 'pac_script' = Use specified PAC script
         * 'fixed_servers' = Manually specify proxy servers
         * 'system' = Use system proxy settings
         */
        mode: string;
    }

    /** An object encapsulating a single proxy server's specification. */
    export interface ProxyServer {
        /** The URI of the proxy server. This must be an ASCII hostname (in Punycode format). IDNA is not supported, yet. */
        host: string;
        /** Optional. The scheme (protocol) of the proxy server itself. Defaults to 'http'. */
        scheme?: string;
        /** Optional. The port of the proxy server. Defaults to a port that depends on the scheme. */
        port?: number;
    }

    /** An object encapsulating the set of proxy rules for all protocols. Use either 'singleProxy' or (a subset of) 'proxyForHttp', 'proxyForHttps', 'proxyForFtp' and 'fallbackProxy'. */
    export interface ProxyRules {
        /** Optional. The proxy server to be used for FTP requests. */
        proxyForFtp?: ProxyServer;
        /** Optional. The proxy server to be used for HTTP requests. */
        proxyForHttp?: ProxyServer;
        /** Optional. The proxy server to be used for everthing else or if any of the specific proxyFor... is not specified. */
        fallbackProxy?: ProxyServer;
        /** Optional. The proxy server to be used for all per-URL requests (that is http, https, and ftp). */
        singleProxy?: ProxyServer;
        /** Optional. The proxy server to be used for HTTPS requests. */
        proxyForHttps?: ProxyServer;
        /** Optional. List of servers to connect to without a proxy server. */
        bypassList?: string[];
    }

    export interface ErrorDetails {
        /** Additional details about the error such as a JavaScript runtime error. */
        details: string;
        /** The error description. */
        error: string;
        /** If true, the error was fatal and the network transaction was aborted. Otherwise, a direct connection is used instead. */
        fatal: boolean;
    }

    export interface ProxyErrorEvent extends whale.events.Event<(details: ErrorDetails) => void> { }

    export var settings: whale.types.ChromeSetting;
    /** Notifies about proxy errors. */
    export var onProxyError: ProxyErrorEvent;
}

////////////////////
// Runtime
////////////////////
/**
 * 백그라운드 페이지 검색, 매니페스트 확인 및 확장앱 수명주기에 관한 이벤트 수신, 메시지 교환 등의 기능을 제공합니다.
 */
declare namespace whale.runtime {
    /** This will be defined during an API method callback if there was an error */
    export var lastError: LastError | undefined;
    /** The ID of the extension/app. */
    export var id: string;

    export interface LastError {
        /** Optional. Details about the error which occurred.  */
        message?: string;
    }

    export interface ConnectInfo {
        name?: string;
        includeTlsChannelId?: boolean;
    }

    export interface InstalledDetails {
        /**
         * The reason that this event is being dispatched.
         * One of: "install", "update", "chrome_update", or "shared_module_update"
         */
        reason: string;
        /**
         * Optional.
         * Indicates the previous version of the extension, which has just been updated. This is present only if 'reason' is 'update'.
         */
        previousVersion?: string;
        /**
         * Optional.
         * Indicates the ID of the imported shared module extension which updated. This is present only if 'reason' is 'shared_module_update'.
         * @since Chrome 29.
         */
        id?: string;
    }

    export interface MessageOptions {
        /** Whether the TLS channel ID will be passed into onMessageExternal for processes that are listening for the connection event. */
        includeTlsChannelId?: boolean;
    }

    /**
     * An object containing information about the script context that sent a message or request.
     * @since Chrome 26.
     */
    export interface MessageSender {
        /** The ID of the extension or app that opened the connection, if any. */
        id?: string;
        /** The tabs.Tab which opened the connection, if any. This property will only be present when the connection was opened from a tab (including content scripts), and only if the receiver is an extension, not an app. */
        tab?: whale.tabs.Tab;
        /**
         * The frame that opened the connection. 0 for top-level frames, positive for child frames. This will only be set when tab is set.
         * @since Chrome 41.
         */
        frameId?: number;
        /**
         * The URL of the page or frame that opened the connection. If the sender is in an iframe, it will be iframe's URL not the URL of the page which hosts it.
         * @since Chrome 28.
         */
        url?: string;
        /**
         * The TLS channel ID of the page or frame that opened the connection, if requested by the extension or app, and if available.
         * @since Chrome 32.
         */
        tlsChannelId?: string;
    }

    /**
     * An object containing information about the current platform.
     * @since Chrome 36.
     */
    export interface PlatformInfo {
        /**
         * The operating system chrome is running on.
         * One of: "mac", "win", "android", "cros", "linux", or "openbsd"
         */
        os: string;
        /**
         * The machine's processor architecture.
         * One of: "arm", "x86-32", or "x86-64"
         */
        arch: string;
        /**
         * The native client architecture. This may be different from arch on some platforms.
         * One of: "arm", "x86-32", or "x86-64"
         */
        nacl_arch: string;
    }

    /**
     * An object which allows two way communication with other pages.
     * @since Chrome 26.
     */
    export interface Port {
        postMessage: (message: Object) => void;
        disconnect: () => void;
        /**
         * Optional.
         * This property will only be present on ports passed to onConnect/onConnectExternal listeners.
         */
        sender?: MessageSender;
        /** An object which allows the addition and removal of listeners for a Chrome event. */
        onDisconnect: PortDisconnectEvent;
        /** An object which allows the addition and removal of listeners for a Chrome event. */
        onMessage: PortMessageEvent;
        name: string;
    }

    export interface UpdateAvailableDetails {
        /** The version number of the available update. */
        version: string;
    }

    export interface UpdateCheckDetails {
        /** The version of the available update. */
        version: string;
    }

    export interface PortDisconnectEvent extends whale.events.Event<(port: Port) => void> { }

    export interface PortMessageEvent extends whale.events.Event<(message: any, port: Port) => void> { }

    export interface ExtensionMessageEvent extends whale.events.Event<(message: any, sender: MessageSender, sendResponse: (response?: any) => void) => void> { }

    export interface ExtensionConnectEvent extends whale.events.Event<(port: Port) => void> { }

    export interface RuntimeInstalledEvent extends whale.events.Event<(details: InstalledDetails) => void> { }

    export interface RuntimeEvent extends whale.events.Event<() => void> { }

    export interface RuntimeRestartRequiredEvent extends whale.events.Event<(reason: string) => void> { }

    export interface RuntimeUpdateAvailableEvent extends whale.events.Event<(details: UpdateAvailableDetails) => void> { }

    export interface ManifestIcons {
        [size: number]: string;
    }

    export interface ManifestAction {
        default_icon?: ManifestIcons;
        default_title?: string;
        default_popup?: string;
    }

    export interface SearchProvider {
        name?: string;
        keyword?: string;
        favicon_url?: string;
        search_url: string;
        encoding?: string;
        suggest_url?: string;
        instant_url?: string;
        image_url?: string;
        search_url_post_params?: string;
        suggest_url_post_params?: string;
        instant_url_post_params?: string;
        image_url_post_params?: string;
        alternate_urls?: string[];
        prepopulated_id?: number;
        is_default?: boolean;
    }

    export interface Manifest {
        // Required
        manifest_version: number;
        name: string;
        version: string;

        // Recommended
        default_locale?: string;
        description?: string;
        icons?: ManifestIcons;

        // Pick one (or none)
        browser_action?: ManifestAction;
        page_action?: ManifestAction;

        // Optional
        author?: any;
        automation?: any;
        background?: {
            scripts?: string[];
            page?: string;
            persistent?: boolean;
        };
        background_page?: string;
        chrome_settings_overrides?: {
            homepage?: string;
            search_provider?: SearchProvider;
            startup_pages?: string[];
        };
        chrome_ui_overrides?: {
            bookmarks_ui?: {
                remove_bookmark_shortcut?: boolean;
                remove_button?: boolean;
            }
        };
        chrome_url_overrides?: {
            bookmarks?: string;
            history?: string;
            newtab?: string;
        };
        commands?: {
            [name: string]: {
                suggested_key?: {
                    default?: string;
                    windows?: string;
                    mac?: string;
                    chromeos?: string;
                    linux?: string;
                };
                description?: string;
                global?: boolean
            }
        };
        content_capabilities?: {
            matches?: string[];
            permissions?: string[];
        };
        content_scripts?: {
            matches?: string[];
            exclude_matches?: string[];
            css?: string[];
            js?: string[];
            run_at?: string;
            all_frames?: boolean;
            include_globs?: string[];
            exclude_globs?: string[];
        }[];
        content_security_policy?: string;
        converted_from_user_script?: boolean;
        copresence?: any;
        current_locale?: string;
        devtools_page?: string;
        event_rules?: {
            event?: string;
            actions?: {
                type: string;
            }[];
            conditions?: whale.declarativeContent.PageStateMatcherProperties[]
        }[];
        externally_connectable?: {
            ids?: string[];
            matches?: string[];
            accepts_tls_channel_id?: boolean;
        };
        file_browser_handlers?: {
            id?: string;
            default_title?: string;
            file_filters?: string[];
        }[];
        file_system_provider_capabilities?: {
            configurable?: boolean;
            watchable?: boolean;
            multiple_mounts?: boolean;
            source?: string;
        };
        homepage_url?: string;
        import?: {
            id: string;
            minimum_version?: string
        }[];
        export?: {
            whitelist?: string[]
        };
        incognito?: string;
        input_components?: {
            name?: string;
            type?: string;
            id?: string;
            description?: string;
            language?: string;
            layouts?: any[];
        }[];
        key?: string;
        minimum_chrome_version?: string;
        nacl_modules?: {
            path: string;
            mime_type: string;
        }[];
        oauth2?: {
            client_id: string;
            scopes?: string[];
        };
        offline_enabled?: boolean;
        omnibox?: {
            keyword: string;
        };
        optional_permissions?: string[];
        options_page?: string;
        options_ui?: {
            page?: string;
            chrome_style?: boolean;
            open_in_tab?: boolean;
        };
        permissions?: string[];
        platforms?: {
            nacl_arch?: string;
            sub_package_path: string;
        }[];
        plugins?: {
            path: string;
        }[];
        requirements?: {
            '3D'?: {
                features?: string[]
            };
            plugins?: {
                npapi?: boolean;
            }
        };
        sandbox?: {
            pages: string[];
            content_security_policy?: string;
        };
        short_name?: string;
        signature?: any;
        spellcheck?: {
            dictionary_language?: string;
            dictionary_locale?: string;
            dictionary_format?: string;
            dictionary_path?: string;
        };
        storage?: {
            managed_schema: string
        };
        system_indicator?: any;
        tts_engine?: {
            voices: {
                voice_name: string;
                lang?: string;
                gender?: string;
                event_types?: string[];
            }[]
        };
        update_url?: string;
        version_name?: string;
        web_accessible_resources?: string[];
        [key: string]: any;
    }

    /**
     * Attempts to connect to connect listeners within an extension/app (such as the background page), or other extensions/apps. This is useful for content scripts connecting to their extension processes, inter-app/extension communication, and web messaging. Note that this does not connect to any listeners in a content script. Extensions may connect to content scripts embedded in tabs via tabs.connect.
     * @since Chrome 26.
     */
    export function connect(connectInfo?: ConnectInfo): Port;
    /**
     * Attempts to connect to connect listeners within an extension/app (such as the background page), or other extensions/apps. This is useful for content scripts connecting to their extension processes, inter-app/extension communication, and web messaging. Note that this does not connect to any listeners in a content script. Extensions may connect to content scripts embedded in tabs via tabs.connect.
     * @since Chrome 26.
     * @param extensionId Optional.
     * The ID of the extension or app to connect to. If omitted, a connection will be attempted with your own extension. Required if sending messages from a web page for web messaging.
     */
    export function connect(extensionId: string, connectInfo?: ConnectInfo): Port;
    /**
     * Connects to a native application in the host machine.
     * @since Chrome 28.
     * @param application The name of the registered application to connect to.
     */
    export function connectNative(application: string): Port;
    /** Retrieves the JavaScript 'window' object for the background page running inside the current extension/app. If the background page is an event page, the system will ensure it is loaded before calling the callback. If there is no background page, an error is set. */
    export function getBackgroundPage(callback: (backgroundPage?: Window) => void): void;
    /**
     * Returns details about the app or extension from the manifest. The object returned is a serialization of the full manifest file.
     * @returns The manifest details.
     */
    export function getManifest(): Manifest;
    /**
     * Returns a DirectoryEntry for the package directory.
     * @since Chrome 29.
     */
    export function getPackageDirectoryEntry(callback: (directoryEntry: DirectoryEntry) => void): void;
    /**
     * Returns information about the current platform.
     * @since Chrome 29.
     * @param callback Called with results
     */
    export function getPlatformInfo(callback: (platformInfo: PlatformInfo) => void): void;
    /**
     * Converts a relative path within an app/extension install directory to a fully-qualified URL.
     * @param path A path to a resource within an app/extension expressed relative to its install directory.
     */
    export function getURL(path: string): string;
    /**
     * Reloads the app or extension.
     * @since Chrome 25.
     */
    export function reload(): void;
    /**
     * Requests an update check for this app/extension.
     * @since Chrome 25.
     * @param callback
     * Parameter status: Result of the update check. One of: "throttled", "no_update", or "update_available"
     * Optional parameter details: If an update is available, this contains more information about the available update.
     */
    export function requestUpdateCheck(callback: (status: string, details?: UpdateCheckDetails) => void): void;
    /**
     * Restart the ChromeOS device when the app runs in kiosk mode. Otherwise, it's no-op.
     * @since Chrome 32.
     */
    export function restart(): void;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
     * @since Chrome 26.
     * @param responseCallback Optional
     * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendMessage(message: any, responseCallback?: (response: any) => void): void;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
     * @since Chrome 32.
     * @param responseCallback Optional
     * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendMessage(message: any, options: MessageOptions, responseCallback?: (response: any) => void): void;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
     * @since Chrome 26.
     * @param extensionId The ID of the extension/app to send the message to. If omitted, the message will be sent to your own extension/app. Required if sending messages from a web page for web messaging.
     * @param responseCallback Optional
     * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendMessage(extensionId: string, message: any, responseCallback?: (response: any) => void): void;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
     * @since Chrome 32.
     * @param extensionId The ID of the extension/app to send the message to. If omitted, the message will be sent to your own extension/app. Required if sending messages from a web page for web messaging.
     * @param responseCallback Optional
     * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendMessage(extensionId: string, message: any, options: MessageOptions, responseCallback?: (response: any) => void): void;
    /**
     * Send a single message to a native application.
     * @since Chrome 28.
     * @param application The of the native messaging host.
     * @param message The message that will be passed to the native messaging host.
     * @param responseCallback Optional.
     * Parameter response: The response message sent by the native messaging host. If an error occurs while connecting to the native messaging host, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendNativeMessage(application: string, message: Object, responseCallback?: (response: any) => void): void;
    /**
     * Sets the URL to be visited upon uninstallation. This may be used to clean up server-side data, do analytics, and implement surveys. Maximum 255 characters.
     * @since Chrome 41.
     * @param url Since Chrome 34.
     * URL to be opened after the extension is uninstalled. This URL must have an http: or https: scheme. Set an empty string to not open a new tab upon uninstallation.
     * @param callback Called when the uninstall URL is set. If the given URL is invalid, runtime.lastError will be set.
     */
    export function setUninstallURL(url: string, callback?: () => void): void;
    /**
     * Open your Extension's options page, if possible.
     * The precise behavior may depend on your manifest's options_ui or options_page key, or what Chrome happens to support at the time. For example, the page may be opened in a new tab, within chrome://extensions, within an App, or it may just focus an open options page. It will never cause the caller page to reload.
     * If your Extension does not declare an options page, or Chrome failed to create one for some other reason, the callback will set lastError.
     * @since Chrome 42.
     */
    export function openOptionsPage(callback?: () => void): void;

    /**
     * Fired when a connection is made from either an extension process or a content script.
     * @since Chrome 26.
     */
    export var onConnect: ExtensionConnectEvent;
    /**
     * Fired when a connection is made from another extension.
     * @since Chrome 26.
     */
    export var onConnectExternal: ExtensionConnectEvent;
    /** Sent to the event page just before it is unloaded. This gives the extension opportunity to do some clean up. Note that since the page is unloading, any asynchronous operations started while handling this event are not guaranteed to complete. If more activity for the event page occurs before it gets unloaded the onSuspendCanceled event will be sent and the page won't be unloaded. */
    export var onSuspend: RuntimeEvent;
    /**
     * Fired when a profile that has this extension installed first starts up. This event is not fired when an incognito profile is started, even if this extension is operating in 'split' incognito mode.
     * @since Chrome 23.
     */
    export var onStartup: RuntimeEvent;
    /** Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version. */
    export var onInstalled: RuntimeInstalledEvent;
    /** Sent after onSuspend to indicate that the app won't be unloaded after all. */
    export var onSuspendCanceled: RuntimeEvent;
    /**
     * Fired when a message is sent from either an extension process or a content script.
     * @since Chrome 26.
     */
    export var onMessage: ExtensionMessageEvent;
    /**
     * Fired when a message is sent from another extension/app. Cannot be used in a content script.
     * @since Chrome 26.
     */
    export var onMessageExternal: ExtensionMessageEvent;
    /**
     * Fired when an app or the device that it runs on needs to be restarted. The app should close all its windows at its earliest convenient time to let the restart to happen. If the app does nothing, a restart will be enforced after a 24-hour grace period has passed. Currently, this event is only fired for Chrome OS kiosk apps.
     * @since Chrome 29.
     */
    export var onRestartRequired: RuntimeRestartRequiredEvent;
    /**
     * Fired when an update is available, but isn't installed immediately because the app is currently running. If you do nothing, the update will be installed the next time the background page gets unloaded, if you want it to be installed sooner you can explicitly call chrome.runtime.reload(). If your extension is using a persistent background page, the background page of course never gets unloaded, so unless you call chrome.runtime.reload() manually in response to this event the update will not get installed until the next time chrome itself restarts. If no handlers are listening for this event, and your extension has a persistent background page, it behaves as if chrome.runtime.reload() is called in response to this event.
     * @since Chrome 25.
     */
    export var onUpdateAvailable: RuntimeUpdateAvailableEvent;
    /**
     * @deprecated since Chrome 33. Please use chrome.runtime.onRestartRequired.
     * Fired when a Chrome update is available, but isn't installed immediately because a browser restart is required.
     */
    export var onBrowserUpdateAvailable: RuntimeEvent;
}

////////////////////
// SidebarAction
// https://developers.whale.naver.com/api/sidebarAction
////////////////////
/**
 * Whale Browser API.
 * sidebarAction
 * @since whale
 */
declare namespace whale.sidebarAction {
    export interface SidebarShowDetail {
        /** Optional. 사이드바 영역에 표시할 페이지 URL. 지정하지 않으면 매니페스트에 정의한 default_page. */
        url?: string;
        /**
         * Optional. url 인자와 현재 URL이 같을 때에도 페이지를 새로고침 할 것인지 여부.
         * @default false
         */
        reload?: boolean;
    }

    export interface SidebarTitleDetail {
        title: string;
    }

    export interface SidebarIconDetail {
        /**
         * 아이콘 이미지 데이터입니다. @see https://developer.chrome.com/extensions/pageAction#type-ImageDataType
         * */
        icon: ImageData;
    }

    export interface SidebarPageDetail {
        /** html 파일의 리소스 경로. 빈 문자열(‘’)로 설정하면 사이드바에 빈화면이 보입니다. */
        page: string;
    }

    export interface SidebarBadgeDetail {
        /** 설정할 badge 문자열 */
        text: string;
    }

    export interface SidebarDockDetail {
        /** 부모 윈도우의 ID. 지정하지 않으면 마지막 사용된 윈도우에 도킹합니다. */
        targetWindowId?: number;
    }

    export interface BadgeBackgroundColorDetails {
        /** 색상값 배열([255, 0, 0, 255]) 혹은 HEX 색상 표현 문자열(#FF0000). */
        color: string | ColorArray;
    }
    export type ColorArray = [number, number, number, number];

    export interface BrowserClickedEvent extends whale.events.Event<(tab: whale.tabs.Tab) => void> { }


    /**
     * 지정한 윈도우에 사이드바 영역을 열고 포커스를 주는 메소드입니다. 이미 사이드바가 열려있다면 포커스만 옮겨줍니다.
     *
     * @param windowId Optional. 대상 윈도우의 ID.
     * @param details Optional. url 설정
     * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
     */
    export function show(windowId: number, details?: SidebarShowDetail, callback?: (windowId : number) => void) : void

    /**
     * 현재 윈도우에 사이드바 영역을 열고 포커스를 주는 메소드입니다. 이미 사이드바가 열려있다면 포커스만 옮겨줍니다.
     *
     * @param details Optional. url 설정
     * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
     */
    export function show(details: SidebarShowDetail, callback?: (windowId : number) => void) : void

    /**
     * 현재 윈도우에 사이드바 영역을 열고 포커스를 주는 메소드입니다. 이미 사이드바가 열려있다면 포커스만 옮겨줍니다.
     *
     * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
     */
    export function show(callback: (windowId : number) => void) : void

    /**
     * 현재 윈도우에 사이드바 영역을 열고 포커스를 주는 메소드입니다. 이미 사이드바가 열려있다면 포커스만 옮겨줍니다.
     *
     */
    export function show() : void

    /**
     * 지정된 윈도우의 사이드바를 닫습니다. 현재 확장앱에 포커스가 있는 상황에만 동작합니다.
     * @param windowId Optional. 대상 윈도우의 ID. 지정하지 않으면 현재 윈도우.
     * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
     */
    export function hide(windowId: number, callback?: (windowId: number) => void) : void

    /**
     * 현재 윈도우의 사이드바를 닫습니다. 현재 확장앱에 포커스가 있는 상황에만 동작합니다.
     * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
     */
    export function hide(callback: (windowId: number) => void) : void

    /**
     * 현재 윈도우의 사이드바를 닫습니다. 현재 확장앱에 포커스가 있는 상황에만 동작합니다.
     */
    export function hide() : void

    /**
     * 확장앱 아이콘에 마우스를 올렸을 때 나타나는 툴팁 문자열을 변경합니다.
     * sidebar_action 에서 default_title 속성으로 지정하는 영역입니다.
     * 열려 있는 모든 윈도우에 동시 적용됩니다.
     * @param details 설정 할 데이터
     */
    export function setTitle(details: SidebarTitleDetail) : void;


    /**
     * 확장앱 아이콘에 마우스를 올렸을 때 나타나는 툴팁 문자열을 반환합니다.
     * sidebar_action 에서 default_title 속성으로 지정한 영역입니다.
     * @param callback title을 담은 결과를 인자값으로 넣은 콜백 함수
     */
    export function getTitle(callback: (result: string ) => void) : void;


    /**
     * 확장앱 아이콘을 동적으로 변경합니다. 열려 있는 모든 윈도우에 동시 적용됩니다.
     * @param details 아이콘 데이터
     */
    export function setIcon(details: SidebarIconDetail): void;

    /**
     * 확장앱 아이콘이 클릭되었을 때, 로딩되는 페이지 리소스의 경로를 변경합니다.
     * @param details 페이지 상세 정보
     */
    export function setPage(details: SidebarPageDetail): void;

    /**
     * 사이드바 확장앱 아이콘이 클릭되었을 때, 로딩되는 페이지 리소스의 경로를 반환합니다.
     * @param callback 현재 page 경로를 인자값으로 넣은 콜백 함수
     */
    export function getPage(callback: (result: string) => void): void;

    /**
     * 확장앱 아이콘 위에 표시되는 뱃지의 문자열을 변경합니다. 열려 있는 모든 윈도우에 동시 적용됩니다.
     * @param details badge 정보
     */
    export function setBadgeText(details: SidebarBadgeDetail): void;

    /**
     * 사이드바 확장앱 아이콘 위에 표시되는 뱃지의 문자열을 반환합니다.
     * @param callback 현재 뱃지 텍스트를 인자값으로 넣은 콜백 함수.
     */
    export function getBadgeText(callback: (result: string) => void): void;

    /**
     * 확장앱 아이콘 위에 표시되는 뱃지의 배경 색상을 변경합니다. 열려 있는 모든 윈도우에 동시 적용됩니다.
     * @param details 뱃지 배경 색상을 담은 객체
     */
    export function setBadgeBackgroundColor(details: BadgeBackgroundColorDetails): void;

    /**
     * 확장앱 아이콘 위에 표시되는 뱃지의 배경색상을 반환합니다.
     * @param callback 뱃지 배경 색상. RGBA 색상값 배열 [R, G, B, A]를 담은 인자값으로 넣은 콜백 함수.
     */
    export function getBadgeBackgroundColor(callback: (color: ColorArray) => void): void;

    /**
     * 팝업 윈도우를 사이드바에 도킹합니다. details를 통해 도킹하고자 하는 부모 윈도우를 지정할 수 있습니다.
     * 도킹 후에는 팝업 윈도우의 ID는 더 이상 유효하지 않습니다.
     * @param popupWindowId 팝업 윈도우의 ID.
     * @param details Optional. 부모 윈도우의 ID를 담은 객체
     * @param callback 도킹 된 windowId를 인자값으로 넣은 콜백 함수.
     */
    export function dock(popupWindowId: number, details: SidebarDockDetail, callback: (windowId: number) => void): void;

    /**
     * 팝업 윈도우를 사이드바에 도킹합니다. details를 통해 도킹하고자 하는 부모 윈도우를 지정할 수 있습니다.
     * 도킹 후에는 팝업 윈도우의 ID는 더 이상 유효하지 않습니다.
     * @param popupWindowId 팝업 윈도우의 ID.
     * @param callback 도킹 된 windowId를 인자값으로 넣은 콜백 함수.
     */
    export function dock(popupWindowId: number, callback: (windowId: number) => void): void;

    /**
     * 도킹된 윈도우를 부모 윈도우에서 떼어냅니다.
     * @param popupWindowId 부모 윈도우의 ID
     * @param callback 새로 부여된 윈도우 Id를 인자값으로 넣은 콜백 함수.
     * 여기서 windowId는 `whale.sidebarAction.dock()`으로 붙일 때 사용했던 윈도우 ID와는 다르다.
     */
    export function undock(popupWindowId: number, callback: (windowId: number) => void): void;

    /**
     * 사이드바 확장앱 아이콘이 클릭될 때 발생하는 이벤트 핸들러
     */
    export var onClicked: BrowserClickedEvent;
}

////////////////////
// Storage
////////////////////
/**
 * 데이터 저장소 기능을 제공합니다. 데이터 변경시 이벤트를 수신할 수 있습니다. 이 API를 이용해 저장한 데이터는 쿠키, 웹 스토리지 등 인터넷 사용 기록과는 별도로 관리됩니다.
 * 권한: "storage"
 * @since Chrome 20.
 */
declare namespace whale.storage {
    export interface StorageArea {
        /**
         * Gets the amount of space (in bytes) being used by one or more items.
         * @param callback Callback with the amount of space being used by storage, or on failure (in which case runtime.lastError will be set).
         * Parameter bytesInUse: Amount of space being used in storage, in bytes.
         */
        getBytesInUse(callback: (bytesInUse: number) => void): void;
        /**
         * Gets the amount of space (in bytes) being used by one or more items.
         * @param keys A single key or list of keys to get the total usage for. An empty list will return 0. Pass in null to get the total usage of all of storage.
         * @param callback Callback with the amount of space being used by storage, or on failure (in which case runtime.lastError will be set).
         * Parameter bytesInUse: Amount of space being used in storage, in bytes.
         */
        getBytesInUse(keys: string | string[] | null, callback: (bytesInUse: number) => void): void;
        /**
         * Removes all items from storage.
         * @param callback Optional.
         * Callback on success, or on failure (in which case runtime.lastError will be set).
         */
        clear(callback?: () => void): void;
        /**
         * Sets multiple items.
         * @param items An object which gives each key/value pair to update storage with. Any other key/value pairs in storage will not be affected.
         * Primitive values such as numbers will serialize as expected. Values with a typeof "object" and "function" will typically serialize to {}, with the exception of Array (serializes as expected), Date, and Regex (serialize using their String representation).
         * @param callback Optional.
         * Callback on success, or on failure (in which case runtime.lastError will be set).
         */
        set(items: Object, callback?: () => void): void;
        /**
         * Removes one or more items from storage.
         * @param A single key or a list of keys for items to remove.
         * @param callback Optional.
         * Callback on success, or on failure (in which case runtime.lastError will be set).
         */
        remove(keys: string | string[], callback?: () => void): void;
        /**
         * Gets one or more items from storage.
         * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
         * Parameter items: Object with items in their key-value mappings.
         */
        get(callback: (items: { [key: string]: any }) => void): void;
        /**
         * Gets one or more items from storage.
         * @param keys A single key to get, list of keys to get, or a dictionary specifying default values.
         * An empty list or object will return an empty result object. Pass in null to get the entire contents of storage.
         * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
         * Parameter items: Object with items in their key-value mappings.
         */
        get(keys: string | string[] | Object | null, callback: (items: { [key: string]: any }) => void): void;
    }

    export interface StorageChange {
        /** Optional. The new value of the item, if there is a new value. */
        newValue?: any;
        /** Optional. The old value of the item, if there was an old value. */
        oldValue?: any;
    }

    export interface LocalStorageArea extends StorageArea {
        /** The maximum amount (in bytes) of data that can be stored in local storage, as measured by the JSON stringification of every value plus every key's length. This value will be ignored if the extension has the unlimitedStorage permission. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError. */
        QUOTA_BYTES: number;
    }

    export interface SyncStorageArea extends StorageArea {
        /** @deprecated since Chrome 40. The storage.sync API no longer has a sustained write operation quota. */
        MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;
        /** The maximum total amount (in bytes) of data that can be stored in sync storage, as measured by the JSON stringification of every value plus every key's length. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError. */
        QUOTA_BYTES: number;
        /** The maximum size (in bytes) of each individual item in sync storage, as measured by the JSON stringification of its value plus its key length. Updates containing items larger than this limit will fail immediately and set runtime.lastError. */
        QUOTA_BYTES_PER_ITEM: number;
        /** The maximum number of items that can be stored in sync storage. Updates that would cause this limit to be exceeded will fail immediately and set runtime.lastError. */
        MAX_ITEMS: number;
        /**
         * The maximum number of set, remove, or clear operations that can be performed each hour. This is 1 every 2 seconds, a lower ceiling than the short term higher writes-per-minute limit.
         * Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
         */
        MAX_WRITE_OPERATIONS_PER_HOUR: number;
        /**
         * The maximum number of set, remove, or clear operations that can be performed each minute. This is 2 per second, providing higher throughput than writes-per-hour over a shorter period of time.
         * Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError.
         * @since Chrome 40.
         */
        MAX_WRITE_OPERATIONS_PER_MINUTE: number;
    }

    export interface StorageChangedEvent extends whale.events.Event<(changes: { [key: string]: StorageChange }, areaName: string) => void> { }

    /** Items in the local storage area are local to each machine. */
    export var local: LocalStorageArea;
    /** Items in the sync storage area are synced using Chrome Sync. */
    export var sync: SyncStorageArea;

    /**
     * Items in the managed storage area are set by the domain administrator, and are read-only for the extension; trying to modify this namespace results in an error.
     * @since Chrome 33.
     */
    export var managed: StorageArea;

    /** Fired when one or more items change. */
    export var onChanged: StorageChangedEvent;
}


////////////////////
// System CPU
////////////////////
/**
 * 시스템 CPU 관련 정보를 얻을 수 있습니다.
 * 권한: "system.cpu"
 * @since Chrome 32.
 */
declare namespace whale.system.cpu {
    export interface ProcessorUsage {
        /** The cumulative time used by userspace programs on this processor. */
        user: number;
        /** The cumulative time used by kernel programs on this processor. */
        kernel: number;
        /** The cumulative time spent idle by this processor. */
        idle: number;
        /** The total cumulative time for this processor. This value is equal to user + kernel + idle. */
        total: number;
    }

    export interface ProcessorInfo {
        /** Cumulative usage info for this logical processor. */
        usage: ProcessorUsage;
    }

    export interface CpuInfo {
        /** The number of logical processors. */
        numOfProcessors: number;
        /** The architecture name of the processors. */
        archName: string;
        /** The model name of the processors. */
        modelName: string;
        /**
         * A set of feature codes indicating some of the processor's capabilities.
         * The currently supported codes are "mmx", "sse", "sse2", "sse3", "ssse3", "sse4_1", "sse4_2", and "avx".
         */
        features: string[];
        /** Information about each logical processor. */
        processors: ProcessorInfo[];
    }

    /** Queries basic CPU information of the system. */
    export function getInfo(callback: (info: CpuInfo) => void): void;
}

////////////////////
// System Memory
////////////////////
/**
 * 시스템 메모리 관련 정보를 얻을 수 있습니다.
 * 권한: "system.memory"
 * @since Chrome 32.
 */
declare namespace whale.system.memory {
    export interface MemoryInfo {
        /** The total amount of physical memory capacity, in bytes. */
        capacity: number;
        /** The amount of available capacity, in bytes. */
        availableCapacity: number;
    }

    /** Get physical memory information. */
    export function getInfo(callback: (info: MemoryInfo) => void): void;
}

////////////////////
// System Storage
////////////////////
/**
 * 시스템 연결된 이동식 저장매체에 대한 정보를 얻을 수 있습니다. 새로운 이동식 저장매체가 연결되거나, 이미 연결되어 있던 매체가 연결 해제되는 경우 이벤트를 수신할 수 있습니다.
 * Permissions:  "system.storage"
 * @since Chrome 30.
 */
declare namespace whale.system.storage {
    export interface StorageUnitInfo {
        /** The transient ID that uniquely identifies the storage device. This ID will be persistent within the same run of a single application. It will not be a persistent identifier between different runs of an application, or between different applications. */
        id: string;
        /** The name of the storage unit. */
        name: string;
        /**
         * The media type of the storage unit.
         * fixed: The storage has fixed media, e.g. hard disk or SSD.
         * removable: The storage is removable, e.g. USB flash drive.
         * unknown: The storage type is unknown.
         */
        type: string;
        /** The total amount of the storage space, in bytes. */
        capacity: number;
    }

    export interface StorageCapacityInfo {
        /** A copied |id| of getAvailableCapacity function parameter |id|. */
        id: string;
        /** The available capacity of the storage device, in bytes. */
        availableCapacity: number;
    }

    export interface SystemStorageAttachedEvent extends whale.events.Event<(info: StorageUnitInfo) => void> { }

    export interface SystemStorageDetachedEvent extends whale.events.Event<(id: string) => void> { }

    /** Get the storage information from the system. The argument passed to the callback is an array of StorageUnitInfo objects. */
    export function getInfo(callback: (info: StorageUnitInfo[]) => void): void;
    /**
     * Ejects a removable storage device.
     * @param callback
     * Parameter result: success: The ejection command is successful -- the application can prompt the user to remove the device; in_use: The device is in use by another application. The ejection did not succeed; the user should not remove the device until the other application is done with the device; no_such_device: There is no such device known. failure: The ejection command failed.
     */
    export function ejectDevice(id: string, callback: (result: string) => void): void;
    /**
     * Get the available capacity of a specified |id| storage device. The |id| is the transient device ID from StorageUnitInfo.
     * @since Dev channel only.
     */
    export function getAvailableCapacity(id: string, callback: (info: StorageCapacityInfo) => void): void;

    /** Fired when a new removable storage is attached to the system. */
    export var onAttached: SystemStorageAttachedEvent;
    /** Fired when a removable storage is detached from the system. */
    export var onDetached: SystemStorageDetachedEvent;
}

////////////////////
// TabCapture
////////////////////
/**
 * 	지정한 탭의 미디어 스트림을 캡쳐할 수 있습니다
 * 권한: "tabCapture"
 * @since Chrome 31.
 */
declare namespace whale.tabCapture {
    export interface CaptureInfo {
        /** The id of the tab whose status changed. */
        tabId: number;
        /**
         * The new capture status of the tab.
         * One of: "pending", "active", "stopped", or "error"
         */
        status: string;
        /** Whether an element in the tab being captured is in fullscreen mode. */
        fullscreen: boolean;
    }

    export interface CaptureOptions {
        /** Optional. */
        audio?: boolean;
        /** Optional. */
        video?: boolean;
        /** Optional. */
        audioConstraints?: MediaStreamConstraints;
        /** Optional. */
        videoConstraints?: MediaStreamConstraints;
    }

    export interface CaptureStatusChangedEvent extends whale.events.Event<(info: CaptureInfo) => void> { }

    /**
     * Captures the visible area of the currently active tab. Capture can only be started on the currently active tab after the extension has been invoked. Capture is maintained across page navigations within the tab, and stops when the tab is closed, or the media stream is closed by the extension.
     * @param options Configures the returned media stream.
     * @param callback Callback with either the tab capture stream or null.
     */
    export function capture(options: CaptureOptions, callback: (stream: MediaStream | null) => void): void;
    /**
     * Returns a list of tabs that have requested capture or are being captured, i.e. status != stopped and status != error. This allows extensions to inform the user that there is an existing tab capture that would prevent a new tab capture from succeeding (or to prevent redundant requests for the same tab).
     * @param callback Callback invoked with CaptureInfo[] for captured tabs.
     */
    export function getCapturedTabs(callback: (result: CaptureInfo[]) => void): void;

    /** Event fired when the capture status of a tab changes. This allows extension authors to keep track of the capture status of tabs to keep UI elements like page actions in sync. */
    export var onStatusChanged: CaptureStatusChangedEvent;
}

////////////////////
// Tabs
////////////////////
/**
 * 새로운 탭을 생성하거나 이미 생성된 탭을 제어할 수 있습니다.
 * @since Chrome 5.
 */
declare namespace whale.tabs {
    /**
     * Tab muted state and the reason for the last state change.
     * @since Chrome 46. Warning: this is the current Beta channel.
     */
    export interface MutedInfo {
        /** Whether the tab is prevented from playing sound (but hasn't necessarily recently produced sound). Equivalent to whether the muted audio indicator is showing. */
        muted: boolean;
        /**
         * Optional.
         * The reason the tab was muted or unmuted. Not set if the tab's mute state has never been changed.
         * "user": A user input action has set/overridden the muted state.
         * "capture": Tab capture started, forcing a muted state change.
         * "extension": An extension, identified by the extensionId field, set the muted state.
         */
        reason?: string;
        /**
         * Optional.
         * The ID of the extension that changed the muted state. Not set if an extension was not the reason the muted state last changed.
         */
        extensionId?: string;
    }

    export interface Tab {
        /**
         * Optional.
         * Either loading or complete.
         */
        status?: string;
        /** The zero-based index of the tab within its window. */
        index: number;
        /**
         * Optional.
         * The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists.
         * @since Chrome 18.
         */
        openerTabId?: number;
        /**
         * Optional.
         * The title of the tab. This property is only present if the extension's manifest includes the "tabs" permission.
         */
        title?: string;
        /**
         * Optional.
         * The URL the tab is displaying. This property is only present if the extension's manifest includes the "tabs" permission.
         */
        url?: string;
        /**
         * Whether the tab is pinned.
         * @since Chrome 9.
         */
        pinned: boolean;
        /**
         * Whether the tab is highlighted.
         * @since Chrome 16.
         */
        highlighted: boolean;
        /** The ID of the window the tab is contained within. */
        windowId: number;
        /**
         * Whether the tab is active in its window. (Does not necessarily mean the window is focused.)
         * @since Chrome 16.
         */
        active: boolean;
        /**
         * Optional.
         * The URL of the tab's favicon. This property is only present if the extension's manifest includes the "tabs" permission. It may also be an empty string if the tab is loading.
         */
        favIconUrl?: string;
        /**
         * Optional.
         * The ID of the tab. Tab IDs are unique within a browser session. Under some circumstances a Tab may not be assigned an ID, for example when querying foreign tabs using the sessions API, in which case a session ID may be present. Tab ID can also be set to chrome.tabs.TAB_ID_NONE for apps and devtools windows.
         */
        id?: number;
        /** Whether the tab is in an incognito window. */
        incognito: boolean;
        /**
         * Whether the tab is selected.
         * @deprecated since Chrome 33. Please use tabs.Tab.highlighted.
         */
        selected: boolean;
        /**
         * Optional.
         * Whether the tab has produced sound over the past couple of seconds (but it might not be heard if also muted). Equivalent to whether the speaker audio indicator is showing.
         * @since Chrome 45.
         */
        audible?: boolean;
        /**
         * Whether the tab is discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
         * @since Chrome 54.
         */
        discarded: boolean;
        /**
         * Whether the tab can be discarded automatically by the browser when resources are low.
         * @since Chrome 54.
         */
        autoDiscardable: boolean;
        /**
         * Optional.
         * Current tab muted state and the reason for the last state change.
         * @since Chrome 46. Warning: this is the current Beta channel.
         */
        mutedInfo?: MutedInfo;
        /**
         * Optional. The width of the tab in pixels.
         * @since Chrome 31.
         */
        width?: number;
        /**
         * Optional. The height of the tab in pixels.
         * @since Chrome 31.
         */
        height?: number;
        /**
         * Optional. The session ID used to uniquely identify a Tab obtained from the sessions API.
         * @since Chrome 31.
         */
        sessionId?: string;
    }

    /**
     * Defines how zoom changes in a tab are handled and at what scope.
     * @since Chrome 38.
     */
    export interface ZoomSettings {
        /**
         * Optional.
         * Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page; defaults to "automatic".
         * "automatic": Zoom changes are handled automatically by the browser.
         * "manual": Overrides the automatic handling of zoom changes. The onZoomChange event will still be dispatched, and it is the responsibility of the extension to listen for this event and manually scale the page. This mode does not support per-origin zooming, and will thus ignore the scope zoom setting and assume per-tab.
         * "disabled": Disables all zooming in the tab. The tab will revert to the default zoom level, and all attempted zoom changes will be ignored.
         */
        mode?: string;
        /**
         * Optional.
         * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults to per-origin when in automatic mode, and per-tab otherwise.
         * "per-origin": Zoom changes will persist in the zoomed page's origin, i.e. all other tabs navigated to that same origin will be zoomed as well. Moreover, per-origin zoom changes are saved with the origin, meaning that when navigating to other pages in the same origin, they will all be zoomed to the same zoom factor. The per-origin scope is only available in the automatic mode.
         * "per-tab": Zoom changes only take effect in this tab, and zoom changes in other tabs will not affect the zooming of this tab. Also, per-tab zoom changes are reset on navigation; navigating a tab will always load pages with their per-origin zoom factors.
         */
        scope?: string;
        /**
         * Optional.
         * Used to return the default zoom level for the current tab in calls to tabs.getZoomSettings.
         * @since Chrome 43.
         */
        defaultZoomFactor?: number;
    }

    export interface InjectDetails {
        /**
         * Optional.
         * If allFrames is true, implies that the JavaScript or CSS should be injected into all frames of current page. By default, it's false and is only injected into the top frame.
         */
        allFrames?: boolean;
        /**
         * Optional. JavaScript or CSS code to inject.
         * Warning: Be careful using the code parameter. Incorrect use of it may open your extension to cross site scripting attacks.
         */
        code?: string;
        /**
         * Optional. The soonest that the JavaScript or CSS will be injected into the tab.
         * One of: "document_start", "document_end", or "document_idle"
         * @since Chrome 20.
         */
        runAt?: string;
        /** Optional. JavaScript or CSS file to inject. */
        file?: string;
        /**
         * Optional.
         * The frame where the script or CSS should be injected. Defaults to 0 (the top-level frame).
         * @since Chrome 39.
         */
        frameId?: number;
        /**
         * Optional.
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is false.
         * @since Chrome 39.
         */
        matchAboutBlank?: boolean;
        /**
         * Optional. The origin of the CSS to inject. This may only be specified for CSS, not JavaScript. Defaults to "author".
         * One of: "author", or "user"
         * @since Chrome 66.
         */
        cssOrigin?: string;
    }

    export interface CreateProperties {
        /** Optional. The position the tab should take in the window. The provided value will be clamped to between zero and the number of tabs in the window. */
        index?: number;
        /**
         * Optional.
         * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly created tab.
         * @since Chrome 18.
         */
        openerTabId?: number;
        /**
         * Optional.
         * The URL to navigate the tab to initially. Fully-qualified URLs must include a scheme (i.e. 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within the extension. Defaults to the New Tab Page.
         */
        url?: string;
        /**
         * Optional. Whether the tab should be pinned. Defaults to false
         * @since Chrome 9.
         */
        pinned?: boolean;
        /** Optional. The window to create the new tab in. Defaults to the current window. */
        windowId?: number;
        /**
         * Optional.
         * Whether the tab should become the active tab in the window. Does not affect whether the window is focused (see windows.update). Defaults to true.
         * @since Chrome 16.
         */
        active?: boolean;
        /**
         * Optional. Whether the tab should become the selected tab in the window. Defaults to true
         * @deprecated since Chrome 33. Please use active.
         */
        selected?: boolean;
    }

    export interface MoveProperties {
        /** The position to move the window to. -1 will place the tab at the end of the window. */
        index: number;
        /** Optional. Defaults to the window the tab is currently in. */
        windowId?: number;
    }

    export interface UpdateProperties {
        /**
         * Optional. Whether the tab should be pinned.
         * @since Chrome 9.
         */
        pinned?: boolean;
        /**
         * Optional. The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
         * @since Chrome 18.
         */
        openerTabId?: number;
        /** Optional. A URL to navigate the tab to. */
        url?: string;
        /**
         * Optional. Adds or removes the tab from the current selection.
         * @since Chrome 16.
         */
        highlighted?: boolean;
        /**
         * Optional. Whether the tab should be active. Does not affect whether the window is focused (see windows.update).
         * @since Chrome 16.
         */
        active?: boolean;
        /**
         * Optional. Whether the tab should be selected.
         * @deprecated since Chrome 33. Please use highlighted.
         */
        selected?: boolean;
        /**
         * Optional. Whether the tab should be muted.
         * @since Chrome 45.
         */
        muted?: boolean;
        /**
         * Optional. Whether the tab should be discarded automatically by the browser when resources are low.
         * @since Chrome 54.
         */
        autoDiscardable?: boolean;
    }

    export interface CaptureVisibleTabOptions {
        /**
         * Optional.
         * When format is "jpeg", controls the quality of the resulting image. This value is ignored for PNG images. As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed to store it will decrease.
         */
        quality?: number;
        /**
         * Optional. The format of an image.
         * One of: "jpeg", or "png"
         */
        format?: string;
    }

    export interface ReloadProperties {
        /** Optional. Whether using any local cache. Default is false. */
        bypassCache?: boolean;
    }

    export interface ConnectInfo {
        /** Optional. Will be passed into onConnect for content scripts that are listening for the connection event. */
        name?: string;
        /**
         * Open a port to a specific frame identified by frameId instead of all frames in the tab.
         * @since Chrome 41.
         */
        frameId?: number;
    }

    export interface MessageSendOptions {
        /** Optional. Send a message to a specific frame identified by frameId instead of all frames in the tab. */
        frameId?: number;
    }

    export interface HighlightInfo {
        /** One or more tab indices to highlight. */
        tabs: number | number[];
        /** Optional. The window that contains the tabs. */
        windowId?: number;
    }

    export interface QueryInfo {
        /**
         * Optional. Whether the tabs have completed loading.
         * One of: "loading", or "complete"
         */
        status?: 'loading' | 'complete';
        /**
         * Optional. Whether the tabs are in the last focused window.
         * @since Chrome 19.
         */
        lastFocusedWindow?: boolean;
        /** Optional. The ID of the parent window, or windows.WINDOW_ID_CURRENT for the current window. */
        windowId?: number;
        /**
         * Optional. The type of window the tabs are in.
         * One of: "normal", "popup", "panel", "app", or "devtools"
         */
        windowType?: 'normal' | 'popup' | 'panel' | 'app' | 'devtools';
        /** Optional. Whether the tabs are active in their windows. */
        active?: boolean;
        /**
         * Optional. The position of the tabs within their windows.
         * @since Chrome 18.
         */
        index?: number;
        /** Optional. Match page titles against a pattern. */
        title?: string;
        /** Optional. Match tabs against one or more URL patterns. Note that fragment identifiers are not matched. */
        url?: string | string[];
        /**
         * Optional. Whether the tabs are in the current window.
         * @since Chrome 19.
         */
        currentWindow?: boolean;
        /** Optional. Whether the tabs are highlighted. */
        highlighted?: boolean;
        /**
         * Optional.
         * Whether the tabs are discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
         * @since Chrome 54.
         */
        discarded?: boolean;
        /**
         * Optional.
         * Whether the tabs can be discarded automatically by the browser when resources are low.
         * @since Chrome 54.
         */
        autoDiscardable?: boolean;
        /** Optional. Whether the tabs are pinned. */
        pinned?: boolean;
        /**
         * Optional. Whether the tabs are audible.
         * @since Chrome 45.
         */
        audible?: boolean;
        /**
         * Optional. Whether the tabs are muted.
         * @since Chrome 45.
         */
        muted?: boolean;
    }

    export interface TabHighlightInfo {
        windowId: number;
        tabIds: number[];
    }

    export interface TabRemoveInfo {
        /**
         * The window whose tab is closed.
         * @since Chrome 25.
         */
        windowId: number;
        /** True when the tab is being closed because its window is being closed. */
        isWindowClosing: boolean;
    }

    export interface TabAttachInfo {
        newPosition: number;
        newWindowId: number;
    }

    export interface TabChangeInfo {
        /** Optional. The status of the tab. Can be either loading or complete. */
        status?: string;
        /**
         * The tab's new pinned state.
         * @since Chrome 9.
         */
        pinned?: boolean;
        /** Optional. The tab's URL if it has changed. */
        url?: string;
        /**
         * The tab's new audible state.
         * @since Chrome 45.
         */
        audible?: boolean;
        /**
         * The tab's new discarded state.
         * @since Chrome 54.
         */
        discarded?: boolean;
        /**
         * The tab's new auto-discardable
         * @since Chrome 54.
         */
        autoDiscardable?: boolean;
        /**
         * The tab's new muted state and the reason for the change.
         * @since Chrome 46. Warning: this is the current Beta channel.
         */
        mutedInfo?: MutedInfo;
        /**
         * The tab's new favicon URL.
         * @since Chrome 27.
         */
        favIconUrl?: string;
        /**
         * The tab's new title.
         * @since Chrome 48.
         */
        title?: string;
    }

    export interface TabMoveInfo {
        toIndex: number;
        windowId: number;
        fromIndex: number;
    }

    export interface TabDetachInfo {
        oldWindowId: number;
        oldPosition: number;
    }

    export interface TabActiveInfo {
        /** The ID of the tab that has become active. */
        tabId: number;
        /** The ID of the window the active tab changed inside of. */
        windowId: number;
    }

    export interface TabWindowInfo {
        /** The ID of the window of where the tab is located. */
        windowId: number;
    }

    export interface ZoomChangeInfo {
        tabId: number;
        oldZoomFactor: number;
        newZoomFactor: number;
        zoomSettings: ZoomSettings;
    }

    export interface TabHighlightedEvent extends whale.events.Event<(highlightInfo: TabHighlightInfo) => void> { }

    export interface TabRemovedEvent extends whale.events.Event<(tabId: number, removeInfo: TabRemoveInfo) => void> { }

    export interface TabUpdatedEvent extends whale.events.Event<(tabId: number, changeInfo: TabChangeInfo, tab: Tab) => void> { }

    export interface TabAttachedEvent extends whale.events.Event<(tabId: number, attachInfo: TabAttachInfo) => void> { }

    export interface TabMovedEvent extends whale.events.Event<(tabId: number, moveInfo: TabMoveInfo) => void> { }

    export interface TabDetachedEvent extends whale.events.Event<(tabId: number, detachInfo: TabDetachInfo) => void> { }

    export interface TabCreatedEvent extends whale.events.Event<(tab: Tab) => void> { }

    export interface TabActivatedEvent extends whale.events.Event<(activeInfo: TabActiveInfo) => void> { }

    export interface TabReplacedEvent extends whale.events.Event<(addedTabId: number, removedTabId: number) => void> { }

    export interface TabSelectedEvent extends whale.events.Event<(tabId: number, selectInfo: TabWindowInfo) => void> { }

    export interface TabZoomChangeEvent extends whale.events.Event<(ZoomChangeInfo: ZoomChangeInfo) => void> { }

    /**
     * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @param callback Optional. Called after all the JavaScript has been executed.
     * Parameter result: The result of the script in every injected frame.
     */
    export function executeScript(details: InjectDetails, callback?: (result: any[]) => void): void;
    /**
     * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param tabId Optional. The ID of the tab in which to run the script; defaults to the active tab of the current window.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @param callback Optional. Called after all the JavaScript has been executed.
     * Parameter result: The result of the script in every injected frame.
     */
    export function executeScript(tabId: number, details: InjectDetails, callback?: (result: any[]) => void): void;
    /** Retrieves details about the specified tab. */
    export function get(tabId: number, callback: (tab: Tab) => void): void;
    /**
     * Gets details about all tabs in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {windowId: windowId}.
     */
    export function getAllInWindow(callback: (tab: Tab) => void): void;
    /**
     * Gets details about all tabs in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {windowId: windowId}.
     * @param windowId Optional. Defaults to the current window.
     */
    export function getAllInWindow(windowId: number, callback: (tab: Tab) => void): void;
    /** Gets the tab that this script call is being made from. May be undefined if called from a non-tab context (for example: a background page or popup view). */
    export function getCurrent(callback: (tab?: Tab) => void): void;
    /**
     * Gets the tab that is selected in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {active: true}.
     */
    export function getSelected(callback: (tab: Tab) => void): void;
    /**
     * Gets the tab that is selected in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {active: true}.
     * @param windowId Optional. Defaults to the current window.
     */
    export function getSelected(windowId: number, callback: (tab: Tab) => void): void;
    /**
     * Creates a new tab.
     * @param callback Optional.
     * Parameter tab: Details about the created tab. Will contain the ID of the new tab.
     */
    export function create(createProperties: CreateProperties, callback?: (tab: Tab) => void): void;
    /**
     * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
     * @param tabId The tab to move.
     * @param callback Optional.
     * Parameter tab: Details about the moved tab.
     */
    export function move(tabId: number, moveProperties: MoveProperties, callback?: (tab: Tab) => void): void;
    /**
     * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
     * @param tabIds The tabs to move.
     * @param callback Optional.
     * Parameter tabs: Details about the moved tabs.
     */
    export function move(tabIds: number[], moveProperties: MoveProperties, callback?: (tabs: Tab[]) => void): void;
    /**
     * Modifies the properties of a tab. Properties that are not specified in updateProperties are not modified.
     * @param callback Optional.
     * Optional parameter tab: Details about the updated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
     */
    export function update(updateProperties: UpdateProperties, callback?: (tab?: Tab) => void): void;
    /**
     * Modifies the properties of a tab. Properties that are not specified in updateProperties are not modified.
     * @param tabId Defaults to the selected tab of the current window.
     * @param callback Optional.
     * Optional parameter tab: Details about the updated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
     */
    export function update(tabId: number, updateProperties: UpdateProperties, callback?: (tab?: Tab) => void): void;
    /**
     * Closes a tab.
     * @param tabId The tab to close.
     */
    export function remove(tabId: number, callback?: Function): void;
    /**
     * Closes several tabs.
     * @param tabIds The list of tabs to close.
     */
    export function remove(tabIds: number[], callback?: Function): void;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param callback
     * Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(callback: (dataUrl: string) => void): void;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param windowId Optional. The target window. Defaults to the current window.
     * @param callback
     * Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(windowId: number, callback: (dataUrl: string) => void): void;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param options Optional. Details about the format and quality of an image.
     * @param callback
     * Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(options: CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param windowId Optional. The target window. Defaults to the current window.
     * @param options Optional. Details about the format and quality of an image.
     * @param callback
     * Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(windowId: number, options: CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
    /**
     * Reload a tab.
     * @since Chrome 16.
     * @param tabId The ID of the tab to reload; defaults to the selected tab of the current window.
     */
    export function reload(tabId: number, reloadProperties?: ReloadProperties, callback?: () => void): void;
    /**
     * Reload the selected tab of the current window.
     * @since Chrome 16.
     */
    export function reload(reloadProperties: ReloadProperties, callback?: () => void): void;
    /**
     * Reload the selected tab of the current window.
      * @since Chrome 16.
     */
    export function reload(callback?: () => void): void;
    /**
     * Duplicates a tab.
     * @since Chrome 23.
     * @param tabId The ID of the tab which is to be duplicated.
     * @param callback Optional.
     * Optional parameter tab: Details about the duplicated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
     */
    export function duplicate(tabId: number, callback?: (tab?: Tab) => void): void;
    /**
     * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The runtime.onMessage event is fired in each content script running in the specified tab for the current extension.
     * @since Chrome 20.
     */
    export function sendMessage(tabId: number, message: any, responseCallback?: (response: any) => void): void;
    /**
     * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The runtime.onMessage event is fired in each content script running in the specified tab for the current extension.
     * @since Chrome 41.
     * @param responseCallback Optional.
     * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the specified tab, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendMessage(tabId: number, message: any, options: MessageSendOptions, responseCallback?: (response: any) => void): void;
    /**
     * Sends a single request to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The extension.onRequest event is fired in each content script running in the specified tab for the current extension.
     * @deprecated since Chrome 33. Please use runtime.sendMessage.
     * @param responseCallback Optional.
     * Parameter response: The JSON response object sent by the handler of the request. If an error occurs while connecting to the specified tab, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendRequest(tabId: number, request: any, responseCallback?: (response: any) => void): void;
    /** Connects to the content script(s) in the specified tab. The runtime.onConnect event is fired in each content script running in the specified tab for the current extension. */
    export function connect(tabId: number, connectInfo?: ConnectInfo): runtime.Port;
    /**
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @param callback Optional. Called when all the CSS has been inserted.
     */
    export function insertCSS(details: InjectDetails, callback?: Function): void;
    /**
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param tabId Optional. The ID of the tab in which to insert the CSS; defaults to the active tab of the current window.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @param callback Optional. Called when all the CSS has been inserted.
     */
    export function insertCSS(tabId: number, details: InjectDetails, callback?: Function): void;
    /**
     * Highlights the given tabs.
     * @since Chrome 16.
     * @param callback Optional.
     * Parameter window: Contains details about the window whose tabs were highlighted.
     */
    export function highlight(highlightInfo: HighlightInfo, callback?: (window: whale.windows.Window) => void): void;
    /**
     * Gets all tabs that have the specified properties, or all tabs if no properties are specified.
     * @since Chrome 16.
     */
    export function query(queryInfo: QueryInfo, callback: (result: Tab[]) => void): void;
    /**
     * Detects the primary language of the content in a tab.
     * @param callback
     * Parameter language: An ISO language code such as en or fr. For a complete list of languages supported by this method, see kLanguageInfoTable. The 2nd to 4th columns will be checked and the first non-NULL value will be returned except for Simplified Chinese for which zh-CN will be returned. For an unknown language, und will be returned.
     */
    export function detectLanguage(callback: (language: string) => void): void;
    /**
     * Detects the primary language of the content in a tab.
     * @param tabId Optional. Defaults to the active tab of the current window.
     * @param callback
     * Parameter language: An ISO language code such as en or fr. For a complete list of languages supported by this method, see kLanguageInfoTable. The 2nd to 4th columns will be checked and the first non-NULL value will be returned except for Simplified Chinese for which zh-CN will be returned. For an unknown language, und will be returned.
     */
    export function detectLanguage(tabId: number, callback: (language: string) => void): void;
    /**
     * Zooms a specified tab.
     * @since Chrome 42.
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     * @param callback Optional. Called after the zoom factor has been changed.
     */
    export function setZoom(zoomFactor: number, callback?: () => void): void;
    /**
     * Zooms a specified tab.
     * @since Chrome 42.
     * @param tabId Optional. The ID of the tab to zoom; defaults to the active tab of the current window.
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     * @param callback Optional. Called after the zoom factor has been changed.
     */
    export function setZoom(tabId: number, zoomFactor: number, callback?: () => void): void;
    /**
     * Gets the current zoom factor of a specified tab.
     * @since Chrome 42.
     * @param callback Called with the tab's current zoom factor after it has been fetched.
     * Parameter zoomFactor: The tab's current zoom factor.
     */
    export function getZoom(callback: (zoomFactor: number) => void): void;
    /**
     * Gets the current zoom factor of a specified tab.
     * @since Chrome 42.
     * @param tabId Optional. The ID of the tab to get the current zoom factor from; defaults to the active tab of the current window.
     * @param callback Called with the tab's current zoom factor after it has been fetched.
     * Parameter zoomFactor: The tab's current zoom factor.
     */
    export function getZoom(tabId: number, callback: (zoomFactor: number) => void): void;
    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
     * @since Chrome 42.
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     * @param callback Optional. Called after the zoom settings have been changed.
     */
    export function setZoomSettings(zoomSettings: ZoomSettings, callback?: () => void): void;
    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
     * @since Chrome 42.
     * @param tabId Optional. The ID of the tab to change the zoom settings for; defaults to the active tab of the current window.
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     * @param callback Optional. Called after the zoom settings have been changed.
     */
    export function setZoomSettings(tabId: number, zoomSettings: ZoomSettings, callback?: () => void): void;
    /**
     * Gets the current zoom settings of a specified tab.
     * @since Chrome 42.
     * @param callback Called with the tab's current zoom settings.
     * Paramater zoomSettings: The tab's current zoom settings.
     */
    export function getZoomSettings(callback: (zoomSettings: ZoomSettings) => void): void;
    /**
     * Gets the current zoom settings of a specified tab.
     * @since Chrome 42.
     * @param tabId Optional. The ID of the tab to get the current zoom settings from; defaults to the active tab of the current window.
     * @param callback Called with the tab's current zoom settings.
     * Paramater zoomSettings: The tab's current zoom settings.
     */
    export function getZoomSettings(tabId: number, callback: (zoomSettings: ZoomSettings) => void): void;
    /**
     * Discards a tab from memory. Discarded tabs are still visible on the tab strip and are reloaded when activated.
     * @since Chrome 54.
     * @param tabId Optional. The ID of the tab to be discarded. If specified, the tab will be discarded unless it's active or already discarded. If omitted, the browser will discard the least important tab. This can fail if no discardable tabs exist.
     * @param callback Called after the operation is completed.
     */
    export function discard(tabId: number, callback: (tab: Tab) => void): void;

    /**
     * Fired when the highlighted or selected tabs in a window changes.
     * @since Chrome 18.
     */
    export var onHighlighted: TabHighlightedEvent;
    /** Fired when a tab is closed. */
    export var onRemoved: TabRemovedEvent;
    /** Fired when a tab is updated. */
    export var onUpdated: TabUpdatedEvent;
    /** Fired when a tab is attached to a window, for example because it was moved between windows. */
    export var onAttached: TabAttachedEvent;
    /**
     * Fired when a tab is moved within a window. Only one move event is fired, representing the tab the user directly moved. Move events are not fired for the other tabs that must move in response. This event is not fired when a tab is moved between windows. For that, see tabs.onDetached.
     */
    export var onMoved: TabMovedEvent;
    /** Fired when a tab is detached from a window, for example because it is being moved between windows. */
    export var onDetached: TabDetachedEvent;
    /** Fired when a tab is created. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events to be notified when a URL is set. */
    export var onCreated: TabCreatedEvent;
    /**
     * Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events to be notified when a URL is set.
     * @since Chrome 18.
     */
    export var onActivated: TabActivatedEvent;
    /**
     * Fired when a tab is replaced with another tab due to prerendering or instant.
     * @since Chrome 26.
     */
    export var onReplaced: TabReplacedEvent;
    /**
     * @deprecated since Chrome 33. Please use tabs.onActivated.
     * Fires when the selected tab in a window changes.
     */
    export var onSelectionChanged: TabSelectedEvent;
    /**
     * @deprecated since Chrome 33. Please use tabs.onActivated.
     * Fires when the selected tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to tabs.onUpdated events to be notified when a URL is set.
     */
    export var onActiveChanged: TabSelectedEvent;
    /**
     * @deprecated since Chrome 33. Please use tabs.onHighlighted.
     * Fired when the highlighted or selected tabs in a window changes.
     */
    export var onHighlightChanged: TabHighlightedEvent;
    /**
     * Fired when a tab is zoomed.
     * @since Chrome 38.
     */
    export var onZoomChange: TabZoomChangeEvent;

    /**
     * An ID which represents the absence of a browser tab.
     * @since Chrome 46.
     */
    export var TAB_ID_NONE: -1;
}

////////////////////
// Top Sites
////////////////////
/**
 * 새 탭 페이지의 "자주 가는 사이트" 목록을 얻거나 수정, 검색 할 수 있습니다.
 * Whale에서 더 많은 기능을 지원합니다.
 * 권한: "topSites"
 * @since Chrome 19.
 *
 */
declare namespace whale {
    /** 많이 방문한 URL을 저장하는 Object입니다. get에서 사용됩니다. */
    export interface MostVisitedURL {
        /** 많이 방문한 url. */
        url: string;
        /** 페이지 제목 */
        title: string;
        /**
         * 방문기록에서 판단한 여부입니다.
         * api로 추가한 경우에는 false입니다.
         */
        from_history: boolean;
    }

    /** 많이 방문한 URL을 저장하는 Object입니다. search에서 사용됩니다. */
    export interface MostVisitedURL2 {
        /** 많이 방문한 url. */
        url: string;
        /** 페이지 제목 */
        title: string;
    }

    /**
     * 자주 가는 사이트를 전부 리스트로 담아옵니다.
     * @param callback 결과를 콜백함수의 인자값으로 보냅니다.
     */
    export function get(callback: (data: MostVisitedURL[]) => void): void;

    
    /**
     * 자주 가는 사이트에 url과 title을 추가합니다.
     * @param url 추가할 url
     * @param title 제목
     * @param callback 상태를 콜백 함수의 인자값으로 보냅니다. 성공시 true, 실패시 false
     */
    export function add(url: string, title: string, callback?: (status: boolean) => void): void;

    /**
     * 자주 가는 사이트에서 해당 url을 삭제합니다.
     * delete가 예약어라서 정의할 수 없습니다.
     * @param url 삭제할 url
     */
    // export function delete(url: string): void;

    /**
     * 자주 가는 사이트에서 해당 url을 숨깁니다.
     * @param url block할 url
     */
    export function block(url: string): void;

    /**
     * 자주 가는 사이트에서 숨겨진 url을 보이게 합니다.
     * @param url block을 풀 url
     */
    export function unblock(url: string): void;


    /**
     * 자주 가는 사이트에 block당한 여부를 확인합니다.
     * @param url 확인할 uri
     * @param callback block 여부를 콜백함수의 인자값으로 보냅니다.
     */
    export function isBlocked(url: string, callback: (status: boolean) => void): void;


    /**
     * 방문기록에서 자주 가는 사이트 순으로 검색을 합니다.
     * @param term 검색할 키워드
     * @param count 검색할 개수.
     * @param callback 결과 리스트를 함수의 인자값으로 보냅니다.
     */
    export function search(term: string, count: number, callback?: (result: MostVisitedURL2[]) => void): void;

    /**
     * 자주 가는 사이트에 해당 배열을 추가합니다. 
     * 만약 다시 update를 실행하면 기존에 update에 존재하는 배열은 삭제됩니다.
     * @param urls url, title로 구성된 Object Array
     */
    export function update(urls: MostVisitedURL2[]);
}


////////////////////
// Text to Speech
////////////////////
/**
 * text-to-speech를 사용할 수 있는 api입니다.
 * 권한: "tts"
 * @since Chrome 14.
 */
declare namespace whale.tts {
    /** An event from the TTS engine to communicate the status of an utterance. */
    export interface TtsEvent {
        /** Optional. The index of the current character in the utterance. */
        charIndex?: number;
        /** Optional. The error description, if the event type is 'error'. */
        errorMessage?: string;
        /**
         * The type can be 'start' as soon as speech has started, 'word' when a word boundary is reached, 'sentence' when a sentence boundary is reached, 'marker' when an SSML mark element is reached, 'end' when the end of the utterance is reached, 'interrupted' when the utterance is stopped or interrupted before reaching the end, 'cancelled' when it's removed from the queue before ever being synthesized, or 'error' when any other error occurs. When pausing speech, a 'pause' event is fired if a particular utterance is paused in the middle, and 'resume' if an utterance resumes speech. Note that pause and resume events may not fire if speech is paused in-between utterances.
         * One of: "start", "end", "word", "sentence", "marker", "interrupted", "cancelled", "error", "pause", or "resume"
         */
        type: string;
    }

    /** A description of a voice available for speech synthesis. */
    export interface TtsVoice {
        /** Optional. The language that this voice supports, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'. */
        lang?: string;
        /**
         * Optional. This voice's gender.
         * One of: "male", or "female"
         */
        gender?: string;
        /** Optional. The name of the voice. */
        voiceName?: string;
        /** The ID of the extension providing this voice. */
        extensionsId?: string;
        /** All of the callback event types that this voice is capable of sending. */
        eventTypes?: string[];
        /**
         * If true, the synthesis engine is a remote network resource. It may be higher latency and may incur bandwidth costs.
         * @since Chrome 33.
         */
        remote?: boolean;
    }

    export interface SpeakOptions {
        /** Optional. Speaking volume between 0 and 1 inclusive, with 0 being lowest and 1 being highest, with a default of 1.0. */
        volume?: number;
        /**
         * Optional.
         * If true, enqueues this utterance if TTS is already in progress. If false (the default), interrupts any current speech and flushes the speech queue before speaking this new utterance.
         */
        enqueue?: boolean;
        /**
         * Optional.
         * Speaking rate relative to the default rate for this voice. 1.0 is the default rate, normally around 180 to 220 words per minute. 2.0 is twice as fast, and 0.5 is half as fast. Values below 0.1 or above 10.0 are strictly disallowed, but many voices will constrain the minimum and maximum rates further—for example a particular voice may not actually speak faster than 3 times normal even if you specify a value larger than 3.0.
         */
        rate?: number;
        /**
         * Optional. This function is called with events that occur in the process of speaking the utterance.
         * @param event The update event from the text-to-speech engine indicating the status of this utterance.
         */
        onEvent?: (event: TtsEvent) => void;
        /**
         * Optional.
         * Speaking pitch between 0 and 2 inclusive, with 0 being lowest and 2 being highest. 1.0 corresponds to a voice's default pitch.
         */
        pitch?: number;
        /** Optional. The language to be used for synthesis, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'. */
        lang?: string;
        /** Optional. The name of the voice to use for synthesis. If empty, uses any available voice. */
        voiceName?: string;
        /** Optional. The extension ID of the speech engine to use, if known. */
        extensionId?: string;
        /**
         * Optional. Gender of voice for synthesized speech.
         * One of: "male", or "female"
         */
        gender?: string;
        /** Optional. The TTS event types the voice must support. */
        requiredEventTypes?: string[];
        /** Optional. The TTS event types that you are interested in listening to. If missing, all event types may be sent. */
        desiredEventTypes?: string[];
    }

    /** Checks whether the engine is currently speaking. On Mac OS X, the result is true whenever the system speech engine is speaking, even if the speech wasn't initiated by Chrome. */
    export function isSpeaking(callback?: (speaking: boolean) => void): void;
    /** Stops any current speech and flushes the queue of any pending utterances. In addition, if speech was paused, it will now be un-paused for the next call to speak. */
    export function stop(): void;
    /** Gets an array of all available voices. */
    export function getVoices(callback?: (voices: TtsVoice[]) => void): void;
    /**
     * Speaks text using a text-to-speech engine.
     * @param utterance The text to speak, either plain text or a complete, well-formed SSML document. Speech engines that do not support SSML will strip away the tags and speak the text. The maximum length of the text is 32,768 characters.
     * @param callback Optional. Called right away, before speech finishes. Check chrome.runtime.lastError to make sure there were no errors. Use options.onEvent to get more detailed feedback.
     */
    export function speak(utterance: string, callback?: Function): void;
    /**
     * Speaks text using a text-to-speech engine.
     * @param utterance The text to speak, either plain text or a complete, well-formed SSML document. Speech engines that do not support SSML will strip away the tags and speak the text. The maximum length of the text is 32,768 characters.
     * @param options Optional. The speech options.
     * @param callback Optional. Called right away, before speech finishes. Check chrome.runtime.lastError to make sure there were no errors. Use options.onEvent to get more detailed feedback.
     */
    export function speak(utterance: string, options: SpeakOptions, callback?: Function): void;
    /**
     * Pauses speech synthesis, potentially in the middle of an utterance. A call to resume or stop will un-pause speech.
     * @since Chrome 29.
     */
    export function pause(): void;
    /**
     * If speech was paused, resumes speaking where it left off.
     * @since Chrome 29.
     */
    export function resume(): void;
}

////////////////////
// Text to Speech Engine
////////////////////
/**
 * 커스텀 text-to-speach를 만들 수 있는 api입니다.
 * 권한: "ttsEngine"
 * @since Chrome 14.
 */
declare namespace whale.ttsEngine {
    export interface SpeakOptions {
        /** Optional. The language to be used for synthesis, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'. */
        lang?: string;
        /** Optional. The name of the voice to use for synthesis. */
        voiceName?: string;
        /**
         * Optional. Gender of voice for synthesized speech.
         * One of: "male", or "female"
         */
        gender?: string;
        /** Optional. Speaking volume between 0 and 1 inclusive, with 0 being lowest and 1 being highest, with a default of 1.0. */
        volume?: number;
        /**
         * Optional.
         * Speaking rate relative to the default rate for this voice. 1.0 is the default rate, normally around 180 to 220 words per minute. 2.0 is twice as fast, and 0.5 is half as fast. This value is guaranteed to be between 0.1 and 10.0, inclusive. When a voice does not support this full range of rates, don't return an error. Instead, clip the rate to the range the voice supports.
         */
        rate?: number;
        /** Optional. Speaking pitch between 0 and 2 inclusive, with 0 being lowest and 2 being highest. 1.0 corresponds to this voice's default pitch. */
        pitch?: number;
    }

    export interface TtsEngineSpeakEvent extends whale.events.Event<(utterance: string, options: SpeakOptions, sendTtsEvent: (event: whale.tts.TtsEvent) => void) => void> { }

    /** Called when the user makes a call to tts.speak() and one of the voices from this extension's manifest is the first to match the options object. */
    export var onSpeak: TtsEngineSpeakEvent;
    /** Fired when a call is made to tts.stop and this extension may be in the middle of speaking. If an extension receives a call to onStop and speech is already stopped, it should do nothing (not raise an error). If speech is in the paused state, this should cancel the paused state. */
    export var onStop: whale.events.Event<() => void>;
    /**
     * Optional: if an engine supports the pause event, it should pause the current utterance being spoken, if any, until it receives a resume event or stop event. Note that a stop event should also clear the paused state.
     * @since Chrome 29.
     */
    export var onPause: whale.events.Event<() => void>;
    /**
     * Optional: if an engine supports the pause event, it should also support the resume event, to continue speaking the current utterance, if any. Note that a stop event should also clear the paused state.
     * @since Chrome 29.
     */
    export var onResume: whale.events.Event<() => void>;
}

////////////////////
// Types
////////////////////
/**
 * Whale API의 type 정보를 얻을 수 있습니다.
 * @since Chrome 13.
 */
declare namespace whale.types {
    export interface ChromeSettingClearDetails {
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

    export interface ChromeSettingSetDetails extends ChromeSettingClearDetails {
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

    export interface ChromeSettingGetDetails {
        /** Optional. Whether to return the value that applies to the incognito session (default false). */
        incognito?: boolean;
    }

    /**
     * @param details Details of the currently effective value.
     */
    export type DetailsCallback = (details: ChromeSettingGetResultDetails) => void;

    export interface ChromeSettingGetResultDetails {
        /**
         * One of
         * • not_controllable: cannot be controlled by any extension
         * • controlled_by_other_extensions: controlled by extensions with higher precedence
         * • controllable_by_this_extension: can be controlled by this extension
         * • controlled_by_this_extension: controlled by this extension
         */
        levelOfControl: string;
        /** The value of the setting. */
        value: any;
        /**
         * Optional.
         * Whether the effective value is specific to the incognito session.
         * This property will only be present if the incognito property in the details parameter of get() was true.
         */
        incognitoSpecific?: boolean;
    }

    export interface ChromeSettingChangedEvent extends whale.events.Event<DetailsCallback> { }

    /** An interface that allows access to a Chrome browser setting. See accessibilityFeatures for an example. */
    export interface ChromeSetting {
        /**
         * Sets the value of a setting.
         * @param details Which setting to change.
         * @param callback Optional. Called at the completion of the set operation.
         */
        set(details: ChromeSettingSetDetails, callback?: Function): void;
        /**
         * Gets the value of a setting.
         * @param details Which setting to consider.
         */
        get(details: ChromeSettingGetDetails, callback?: DetailsCallback): void;
        /**
         * Clears the setting, restoring any default value.
         * @param details Which setting to clear.
         * @param callback Optional. Called at the completion of the clear operation.
         */
        clear(details: ChromeSettingClearDetails, callback?: Function): void;
        /** Fired after the setting changes. */
        onChange: ChromeSettingChangedEvent;
    }
}


////////////////////
// Web Navigation
////////////////////
/**
 * 웹 탐색 요청을 수신하여 제어할 수 있습니다.
 * 권한: "webNavigation"
 * @since Chrome 16.
 */
declare namespace whale.webNavigation {
    export interface GetFrameDetails {
        /**
         * The ID of the process runs the renderer for this tab.
         * @since Chrome 22.
         * @deprecated since Chrome 49. Frames are now uniquely identified by their tab ID and frame ID; the process ID is no longer needed and therefore ignored.
         */
        processId?: number;
        /** The ID of the tab in which the frame is. */
        tabId: number;
        /** The ID of the frame in the given tab. */
        frameId: number;
    }

    export interface GetFrameResultDetails {
        /** The URL currently associated with this frame, if the frame identified by the frameId existed at one point in the given tab. The fact that an URL is associated with a given frameId does not imply that the corresponding frame still exists. */
        url: string;
        /** True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired. */
        errorOccurred: boolean;
        /** ID of frame that wraps the frame. Set to -1 of no parent frame exists. */
        parentFrameId: number;
    }

    export interface GetAllFrameDetails {
        /** The ID of the tab. */
        tabId: number;
    }

    export interface GetAllFrameResultDetails extends GetFrameResultDetails {
        /** The ID of the process runs the renderer for this tab. */
        processId: number;
        /** The ID of the frame. 0 indicates that this is the main frame; a positive value indicates the ID of a subframe. */
        frameId: number;
    }

    export interface WebNavigationCallbackDetails {
        /** The ID of the tab in which the navigation is about to occur. */
        tabId: number;
        /** The time when the browser was about to start the navigation, in milliseconds since the epoch. */
        timeStamp: number;
    }

    export interface WebNavigationUrlCallbackDetails extends WebNavigationCallbackDetails {
        url: string;
    }

    export interface WebNavigationReplacementCallbackDetails extends WebNavigationCallbackDetails {
        /** The ID of the tab that was replaced. */
        replacedTabId: number;
    }

    export interface WebNavigationFramedCallbackDetails extends WebNavigationUrlCallbackDetails {
        /** 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique for a given tab and process. */
        frameId: number;
        /**
         * The ID of the process runs the renderer for this tab.
         * @since Chrome 22.
         */
        processId: number;
    }

    export interface WebNavigationFramedErrorCallbackDetails extends WebNavigationFramedCallbackDetails {
        /** The error description. */
        error: string;
    }

    export interface WebNavigationSourceCallbackDetails extends WebNavigationUrlCallbackDetails {
        /** The ID of the tab in which the navigation is triggered. */
        sourceTabId: number;
        /**
         * The ID of the process runs the renderer for the source tab.
         * @since Chrome 22.
         */
        sourceProcessId: number;
        /** The ID of the frame with sourceTabId in which the navigation is triggered. 0 indicates the main frame. */
        sourceFrameId: number;
    }

    export interface WebNavigationParentedCallbackDetails extends WebNavigationFramedCallbackDetails {
        /**
         * ID of frame that wraps the frame. Set to -1 of no parent frame exists.
         * @since Chrome 24.
         */
        parentFrameId: number;
    }

    export interface WebNavigationTransitionCallbackDetails extends WebNavigationFramedCallbackDetails {
        /**
         * Cause of the navigation.
         * One of: "link", "typed", "auto_bookmark", "auto_subframe", "manual_subframe", "generated", "start_page", "form_submit", "reload", "keyword", or "keyword_generated"
         */
        transitionType: string;
        /**
         * A list of transition qualifiers.
         * Each element one of: "client_redirect", "server_redirect", "forward_back", or "from_address_bar"
         */
        transitionQualifiers: string[];
    }

    export interface WebNavigationEventFilter {
        /** Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of UrlFilter are ignored for this event. */
        url: whale.events.UrlFilter[];
    }

    export interface WebNavigationEvent<T extends WebNavigationCallbackDetails> extends whale.events.Event<(details: T) => void> {
        addListener(callback: (details: T) => void, filters?: WebNavigationEventFilter): void;
    }

    export interface WebNavigationFramedEvent extends WebNavigationEvent<WebNavigationFramedCallbackDetails> { }

    export interface WebNavigationFramedErrorEvent extends WebNavigationEvent<WebNavigationFramedErrorCallbackDetails> { }

    export interface WebNavigationSourceEvent extends WebNavigationEvent<WebNavigationSourceCallbackDetails> { }

    export interface WebNavigationParentedEvent extends WebNavigationEvent<WebNavigationParentedCallbackDetails> { }

    export interface WebNavigationTransitionalEvent extends WebNavigationEvent<WebNavigationTransitionCallbackDetails> { }

    export interface WebNavigationReplacementEvent extends WebNavigationEvent<WebNavigationReplacementCallbackDetails> { }

    /**
     * Retrieves information about the given frame. A frame refers to an <iframe> or a <frame> of a web page and is identified by a tab ID and a frame ID.
     * @param details Information about the frame to retrieve information about.
     * @param callback
     * Optional parameter details: Information about the requested frame, null if the specified frame ID and/or tab ID are invalid.
     */
    export function getFrame(details: GetFrameDetails, callback: (details: GetFrameResultDetails | null) => void): void;
    /**
     * Retrieves information about all frames of a given tab.
     * @param details Information about the tab to retrieve all frames from.
     * @param callback
     * Optional parameter details: A list of frames in the given tab, null if the specified tab ID is invalid.
     */
    export function getAllFrames(details: GetAllFrameDetails, callback: (details: GetAllFrameResultDetails[] | null) => void): void;

    /** Fired when the reference fragment of a frame was updated. All future events for that frame will use the updated URL. */
    export var onReferenceFragmentUpdated: WebNavigationTransitionalEvent;
    /** Fired when a document, including the resources it refers to, is completely loaded and initialized. */
    export var onCompleted: WebNavigationFramedEvent;
    /**
     * Fired when the frame's history was updated to a new URL. All future events for that frame will use the updated URL.
     * @since Chrome 22.
     */
    export var onHistoryStateUpdated: WebNavigationTransitionalEvent;
    /** Fired when a new window, or a new tab in an existing window, is created to host a navigation. */
    export var onCreatedNavigationTarget: WebNavigationSourceEvent;
    /**
     * Fired when the contents of the tab is replaced by a different (usually previously pre-rendered) tab.
     * @since Chrome 22.
     */
    export var onTabReplaced: WebNavigationReplacementEvent;
    /** Fired when a navigation is about to occur. */
    export var onBeforeNavigate: WebNavigationParentedEvent;
    /** Fired when a navigation is committed. The document (and the resources it refers to, such as images and subframes) might still be downloading, but at least part of the document has been received from the server and the browser has decided to switch to the new document. */
    export var onCommitted: WebNavigationTransitionalEvent;
    /** Fired when the page's DOM is fully constructed, but the referenced resources may not finish loading. */
    export var onDOMContentLoaded: WebNavigationFramedEvent;
    /** Fired when an error occurs and the navigation is aborted. This can happen if either a network error occurred, or the user aborted the navigation. */
    export var onErrorOccurred: WebNavigationFramedErrorEvent;
}

////////////////////
// Web Request
////////////////////
/**
 * 웹 요청을 감지하여 차단, 수정 및 간섭할 수 있습니다.
 * 권한: "webRequest", host 권한
 * @since Chrome 17.
 */
declare namespace whale.webRequest {
    /** How the requested resource will be used. */
    export type ResourceType = "main_frame" | "sub_frame" | "stylesheet" | "script" | "image" | "font" | "object" | "xmlhttprequest" | "ping" | "csp_report" | "media" | "websocket" | "other";

    export interface AuthCredentials {
        username: string;
        password: string;
    }

    /** An HTTP Header, represented as an object containing a key and either a value or a binaryValue. */
    export interface HttpHeader {
        name: string;
        value?: string;
        binaryValue?: ArrayBuffer;
    }

    /** Returns value for event handlers that have the 'blocking' extraInfoSpec applied. Allows the event handler to modify network requests. */
    export interface BlockingResponse {
        /** Optional. If true, the request is cancelled. Used in onBeforeRequest, this prevents the request from being sent. */
        cancel?: boolean;
        /**
         * Optional.
         * Only used as a response to the onBeforeRequest and onHeadersReceived events. If set, the original request is prevented from being sent/completed and is instead redirected to the given URL. Redirections to non-HTTP schemes such as data: are allowed. Redirects initiated by a redirect action use the original request method for the redirect, with one exception: If the redirect is initiated at the onHeadersReceived stage, then the redirect will be issued using the GET method.
         */
        redirectUrl?: string;
        /**
         * Optional.
         * Only used as a response to the onHeadersReceived event. If set, the server is assumed to have responded with these response headers instead. Only return responseHeaders if you really want to modify the headers in order to limit the number of conflicts (only one extension may modify responseHeaders for each request).
         */
        responseHeaders?: HttpHeader[];
        /** Optional. Only used as a response to the onAuthRequired event. If set, the request is made using the supplied credentials. */
        authCredentials?: AuthCredentials;
        /**
         * Optional.
         * Only used as a response to the onBeforeSendHeaders event. If set, the request is made with these request headers instead.
         */
        requestHeaders?: HttpHeader[];
    }

    /** An object describing filters to apply to webRequest events. */
    export interface RequestFilter {
        /** Optional. */
        tabId?: number;
        /**
         * A list of request types. Requests that cannot match any of the types will be filtered out.
         */
        types?: ResourceType[];
        /** A list of URLs or URL patterns. Requests that cannot match any of the URLs will be filtered out. */
        urls: string[];

        /** Optional. */
        windowId?: number;
    }

    /**
     * Contains data uploaded in a URL request.
     * @since Chrome 23.
     */
    export interface UploadData {
        /** Optional. An ArrayBuffer with a copy of the data. */
        bytes?: ArrayBuffer;
        /** Optional. A string with the file's path and name. */
        file?: string;
    }

    export interface WebRequestBody {
        /** Optional. Errors when obtaining request body data. */
        error?: string;
        /**
         * Optional.
         * If the request method is POST and the body is a sequence of key-value pairs encoded in UTF8, encoded as either multipart/form-data, or application/x-www-form-urlencoded, this dictionary is present and for each key contains the list of all values for that key. If the data is of another media type, or if it is malformed, the dictionary is not present. An example value of this dictionary is {'key': ['value1', 'value2']}.
         */
        formData?: { [key: string]: string[] };
        /**
         * Optional.
         * If the request method is PUT or POST, and the body is not already parsed in formData, then the unparsed request body elements are contained in this array.
         */
        raw?: UploadData[];
    }

    export interface WebAuthChallenger {
        host: string;
        port: number;
    }

    export interface ResourceRequest {
        url: string;
        /** The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request. */
        requestId: string;
        /** The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (type is main_frame or sub_frame), frameId indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab. */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /**
         * How the requested resource will be used.
         */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /** The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used.
         * @since Since Chrome 63.
        */
        initiator?: string;
    }

    export interface WebRequestDetails extends ResourceRequest {
        /** Standard HTTP method. */
        method: string;
    }

    export interface WebRequestHeadersDetails extends WebRequestDetails {
        /** Optional. The HTTP request headers that are going to be sent out with this request. */
        requestHeaders?: HttpHeader[];
    }

    export interface WebRequestBodyDetails extends WebRequestDetails {
        /**
         * Contains the HTTP request body data. Only provided if extraInfoSpec contains 'requestBody'.
         * @since Chrome 23.
         */
        requestBody: WebRequestBody;
    }

    export interface WebRequestFullDetails extends WebRequestHeadersDetails, WebRequestBodyDetails {
    }

    export interface WebResponseDetails extends ResourceRequest {
        /** HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line). */
        statusLine: string;
        /**
         * Standard HTTP status code returned by the server.
         * @since Chrome 43.
         */
        statusCode: number;
    }

    export interface WebResponseHeadersDetails extends WebResponseDetails {
        /** Optional. The HTTP response headers that have been received with this response. */
        responseHeaders?: HttpHeader[];
        method: string; /** standard HTTP method i.e. GET, POST, PUT, etc. */
    }

    export interface WebResponseCacheDetails extends WebResponseHeadersDetails {
        /**
         * Optional.
         * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
         */
        ip?: string;
        /** Indicates if this response was fetched from disk cache. */
        fromCache: boolean;
    }

    export interface WebRedirectionResponseDetails extends WebResponseCacheDetails {
        /** The new URL. */
        redirectUrl: string;
    }

    export interface WebAuthenticationChallengeDetails extends WebResponseHeadersDetails {
        /** The authentication scheme, e.g. Basic or Digest. */
        scheme: string;
        /** The authentication realm provided by the server, if there is one. */
        realm?: string;
        /** The server requesting authentication. */
        challenger: WebAuthChallenger;
        /** True for Proxy-Authenticate, false for WWW-Authenticate. */
        isProxy: boolean;
    }

    export interface WebResponseErrorDetails extends WebResponseCacheDetails {
        /** The error description. This string is not guaranteed to remain backwards compatible between releases. You must not parse and act based upon its content. */
        error: string;
    }

    export interface WebRequestBodyEvent extends whale.events.Event<(details: WebRequestBodyDetails) => void> {
        addListener(callback: (details: WebRequestBodyDetails) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
    }

    export interface WebRequestHeadersEvent extends whale.events.Event<(details: WebRequestHeadersDetails) => void> {
        addListener(callback: (details: WebRequestHeadersDetails) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
    }

    export interface _WebResponseHeadersEvent<T extends WebResponseHeadersDetails> extends whale.events.Event<(details: T) => void> {
        addListener(callback: (details: T) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
    }

    export interface WebResponseHeadersEvent extends _WebResponseHeadersEvent<WebResponseHeadersDetails> { }

    export interface WebResponseCacheEvent extends _WebResponseHeadersEvent<WebResponseCacheDetails> { }

    export interface WebRedirectionResponseEvent extends _WebResponseHeadersEvent<WebRedirectionResponseDetails> { }

    export interface WebAuthenticationChallengeEvent extends whale.events.Event<(details: WebAuthenticationChallengeDetails, callback?: (response: BlockingResponse) => void) => void> {
        addListener(callback: (details: WebAuthenticationChallengeDetails, callback?: (response: BlockingResponse) => void) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
    }

    export interface WebResponseErrorEvent extends _WebResponseHeadersEvent<WebResponseErrorDetails> { }

    /**
     * The maximum number of times that handlerBehaviorChanged can be called per 10 minute sustained interval. handlerBehaviorChanged is an expensive function call that shouldn't be called often.
     * @since Chrome 23.
     */
    export var MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number;

    /** Needs to be called when the behavior of the webRequest handlers has changed to prevent incorrect handling due to caching. This function call is expensive. Don't call it often. */
    export function handlerBehaviorChanged(callback?: Function): void;

    /** Fired when a request is about to occur. */
    export var onBeforeRequest: WebRequestBodyEvent;
    /** Fired before sending an HTTP request, once the request headers are available. This may occur after a TCP connection is made to the server, but before any HTTP data is sent. */
    export var onBeforeSendHeaders: WebRequestHeadersEvent;
    /** Fired just before a request is going to be sent to the server (modifications of previous onBeforeSendHeaders callbacks are visible by the time onSendHeaders is fired). */
    export var onSendHeaders: WebRequestHeadersEvent;
    /** Fired when HTTP response headers of a request have been received. */
    export var onHeadersReceived: WebResponseHeadersEvent;
    /** Fired when an authentication failure is received. The listener has three options: it can provide authentication credentials, it can cancel the request and display the error page, or it can take no action on the challenge. If bad user credentials are provided, this may be called multiple times for the same request. */
    export var onAuthRequired: WebAuthenticationChallengeEvent;
    /** Fired when the first byte of the response body is received. For HTTP requests, this means that the status line and response headers are available. */
    export var onResponseStarted: WebResponseCacheEvent;
    /** Fired when a server-initiated redirect is about to occur. */
    export var onBeforeRedirect: WebRedirectionResponseEvent;
    /** Fired when a request is completed. */
    export var onCompleted: WebResponseCacheEvent;
    /** Fired when an error occurs. */
    export var onErrorOccurred: WebResponseErrorEvent;
}

////////////////////
// Windows
////////////////////
/**
 * 새로운 창을 생성하거나 이미 생성된 창을 제어할 수 있습니다.
 * 아무런 권한이 없어도 되지만, Tab권한이 있어야 favocon, uri, title의 정보를 불러올 수 있다.
 * @since Chrome 5.
 */
declare namespace whale.windows {
    export interface Window {
        /** Array of tabs.Tab objects representing the current tabs in the window. */
        tabs?: whale.tabs.Tab[];
        /** Optional. The offset of the window from the top edge of the screen in pixels. Under some circumstances a Window may not be assigned top property, for example when querying closed windows from the sessions API. */
        top?: number;
        /** Optional. The height of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned height property, for example when querying closed windows from the sessions API. */
        height?: number;
        /** Optional. The width of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned width property, for example when querying closed windows from the sessions API. */
        width?: number;
        /**
         * The state of this browser window.
         * One of: "normal", "minimized", "maximized", "fullscreen", or "docked"
         * @since Chrome 17.
         */
        state: string;
        /** Whether the window is currently the focused window. */
        focused: boolean;
        /**
         * Whether the window is set to be always on top.
         * @since Chrome 19.
         */
        alwaysOnTop: boolean;
        /** Whether the window is incognito. */
        incognito: boolean;
        /**
         * The type of browser window this is.
         * One of: "normal", "popup", "panel", "app", or "devtools"
         */
        type: string;
        /** Optional. The ID of the window. Window IDs are unique within a browser session. Under some circumstances a Window may not be assigned an ID, for example when querying windows using the sessions API, in which case a session ID may be present. */
        id: number;
        /** Optional. The offset of the window from the left edge of the screen in pixels. Under some circumstances a Window may not be assigned left property, for example when querying closed windows from the sessions API. */
        left?: number;
        /**
         * The session ID used to uniquely identify a Window obtained from the sessions API.
         * @since Chrome 31.
         */
        sessionId?: string;
    }

    export interface GetInfo {
        /**
         * Optional.
         * If true, the windows.Window object will have a tabs property that contains a list of the tabs.Tab objects. The Tab objects only contain the url, title and favIconUrl properties if the extension's manifest file includes the "tabs" permission.
         */
        populate?: boolean;
        /**
         * If set, the windows.Window returned will be filtered based on its type. If unset the default filter is set to ['app', 'normal', 'panel', 'popup'], with 'app' and 'panel' window types limited to the extension's own windows.
         * Each one of: "normal", "popup", "panel", "app", or "devtools"
         * @since Chrome 46. Warning: this is the current Beta channel.
         */
        windowTypes?: string[];
    }

    export interface CreateData {
        /**
         * Optional. The id of the tab for which you want to adopt to the new window.
         * @since Chrome 10.
         */
        tabId?: number;
        /**
         * Optional.
         * A URL or array of URLs to open as tabs in the window. Fully-qualified URLs must include a scheme (i.e. 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within the extension. Defaults to the New Tab Page.
         */
        url?: string | string[];
        /**
         * Optional.
         * The number of pixels to position the new window from the top edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels.
         */
        top?: number;
        /**
         * Optional.
         * The height in pixels of the new window, including the frame. If not specified defaults to a natural height.
         */
        height?: number;
        /**
         * Optional.
         * The width in pixels of the new window, including the frame. If not specified defaults to a natural width.
         */
        width?: number;
        /**
         * Optional. If true, opens an active window. If false, opens an inactive window.
         * @since Chrome 12.
         */
        focused?: boolean;
        /** Optional. Whether the new window should be an incognito window. */
        incognito?: boolean;
        /**
         * Optional. Specifies what type of browser window to create. The 'panel' and 'detached_panel' types create a popup unless the '--enable-panels' flag is set.
         * One of: "normal", "popup", "panel", or "detached_panel"
         */
        type?: string;
        /**
         * Optional.
         * The number of pixels to position the new window from the left edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels.
         */
        left?: number;
        /**
         * Optional. The initial state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with 'left', 'top', 'width' or 'height'.
         * One of: "normal", "minimized", "maximized", "fullscreen", or "docked"
         * @since Chrome 44.
         */
        state?: string;
    }

    export interface UpdateInfo {
        /** Optional. The offset from the top edge of the screen to move the window to in pixels. This value is ignored for panels. */
        top?: number;
        /**
         * Optional. If true, causes the window to be displayed in a manner that draws the user's attention to the window, without changing the focused window. The effect lasts until the user changes focus to the window. This option has no effect if the window already has focus. Set to false to cancel a previous draw attention request.
         * @since Chrome 14.
         */
        drawAttention?: boolean;
        /** Optional. The height to resize the window to in pixels. This value is ignored for panels. */
        height?: number;
        /** Optional. The width to resize the window to in pixels. This value is ignored for panels. */
        width?: number;
        /**
         * Optional. The new state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with 'left', 'top', 'width' or 'height'.
         * One of: "normal", "minimized", "maximized", "fullscreen", or "docked"
         * @since Chrome 17.
         */
        state?: string;
        /**
         * Optional. If true, brings the window to the front. If false, brings the next window in the z-order to the front.
         * @since Chrome 8.
         */
        focused?: boolean;
        /** Optional. The offset from the left edge of the screen to move the window to in pixels. This value is ignored for panels. */
        left?: number;
    }

    export interface WindowEventFilter {
        /**
         * Conditions that the window's type being created must satisfy. By default it will satisfy ['app', 'normal', 'panel', 'popup'], with 'app' and 'panel' window types limited to the extension's own windows.
         * Each one of: "normal", "popup", "panel", "app", or "devtools"
         */
        windowTypes: string[];
    }

    export interface WindowIdEvent extends whale.events.Event<(windowId: number, filters?: WindowEventFilter) => void> { }

    export interface WindowReferenceEvent extends whale.events.Event<(window: Window, filters?: WindowEventFilter) => void> { }

    /**
     * The windowId value that represents the current window.
     * @since Chrome 18.
     */
    export var WINDOW_ID_CURRENT: number;
    /**
     * The windowId value that represents the absence of a chrome browser window.
     * @since Chrome 6.
     */
    export var WINDOW_ID_NONE: number;

    /** Gets details about a window. */
    export function get(windowId: number, callback: (window: whale.windows.Window) => void): void;
    /**
     * Gets details about a window.
     * @since Chrome 18.
     */
    export function get(windowId: number, getInfo: GetInfo, callback: (window: whale.windows.Window) => void): void;
    /**
     * Gets the current window.
     */
    export function getCurrent(callback: (window: whale.windows.Window) => void): void;
    /**
     * Gets the current window.
     * @since Chrome 18.
     */
    export function getCurrent(getInfo: GetInfo, callback: (window: whale.windows.Window) => void): void;
    /**
     * Creates (opens) a new browser with any optional sizing, position or default URL provided.
     * @param callback
     * Optional parameter window: Contains details about the created window.
     */
    export function create(callback?: (window?: whale.windows.Window) => void): void;
    /**
     * Creates (opens) a new browser with any optional sizing, position or default URL provided.
     * @param callback
     * Optional parameter window: Contains details about the created window.
     */
    export function create(createData: CreateData, callback?: (window?: whale.windows.Window) => void): void;
    /**
     * Gets all windows.
     */
    export function getAll(callback: (windows: whale.windows.Window[]) => void): void;
    /**
     * Gets all windows.
     * @since Chrome 18.
     */
    export function getAll(getInfo: GetInfo, callback: (windows: whale.windows.Window[]) => void): void;
    /** Updates the properties of a window. Specify only the properties that you want to change; unspecified properties will be left unchanged. */
    export function update(windowId: number, updateInfo: UpdateInfo, callback?: (window: whale.windows.Window) => void): void;
    /** Removes (closes) a window, and all the tabs inside it. */
    export function remove(windowId: number, callback?: Function): void;
    /**
     * Gets the window that was most recently focused — typically the window 'on top'.
     */
    export function getLastFocused(callback: (window: whale.windows.Window) => void): void;
    /**
     * Gets the window that was most recently focused — typically the window 'on top'.
     * @since Chrome 18.
     */
    export function getLastFocused(getInfo: GetInfo, callback: (window: whale.windows.Window) => void): void;

    /** Fired when a window is removed (closed). */
    export var onRemoved: WindowIdEvent;
    /** Fired when a window is created. */
    export var onCreated: WindowReferenceEvent;
    /**
     * Fired when the currently focused window changes. Will be chrome.windows.WINDOW_ID_NONE if all chrome windows have lost focus.
     * Note: On some Linux window managers, WINDOW_ID_NONE will always be sent immediately preceding a switch from one chrome window to another.
     */
    export var onFocusChanged: WindowIdEvent;
}
