// Type definitions for Chrome extension development
// Project: http://developer.chrome.com/extensions/
// Definitions by: Matthew Kimber <https://github.com/matthewkimber>
//                 otiai10 <https://github.com/otiai10>
//                 sreimer15 <https://github.com/sreimer15>
//                 MatCarlson <https://github.com/MatCarlson>
//                 ekinsol <https://github.com/ekinsol>
//                 Brian Wilson <https://github.com/echoabstract>
//                 Sebastiaan Pasma <https://github.com/spasma>
//                 bdbai <https://github.com/bdbai>
//                 pokutuna <https://github.com/pokutuna>
//                 Jason Xian <https://github.com/JasonXian>
//                 userTim <https://github.com/usertim>
//                 Idan Zeierman <https://github.com/idan315>
//                 Nicolas Rodriguez <https://github.com/nicolas377>
//                 Ido Salomon <https://github.com/idosal>
//                 Federico Brigante <https://github.com/fregante>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="filesystem" />
/// <reference path="./har-format/index.d.ts" />
/// <reference path="./chrome-cast/index.d.ts" />

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
declare namespace chrome.accessibilityFeatures {
    /** **ChromeOS only.** Spoken feedback (text-to-speech). */
    export var spokenFeedback: chrome.types.ChromeSetting;
    /** **ChromeOS only.** Enlarged cursor. */
    export var largeCursor: chrome.types.ChromeSetting;
    /** **ChromeOS only.** Sticky modifier keys (like shift or alt). */
    export var stickyKeys: chrome.types.ChromeSetting;
    /** **ChromeOS only.** High contrast rendering mode. */
    export var highContrast: chrome.types.ChromeSetting;
    /** **ChromeOS only.** Full screen magnification. */
    export var screenMagnifier: chrome.types.ChromeSetting;
    /** **ChromeOS only.** Auto mouse click after mouse stops moving. */
    export var autoclick: chrome.types.ChromeSetting;
    /** **ChromeOS only.** Virtual on-screen keyboard. */
    export var virtualKeyboard: chrome.types.ChromeSetting;
    /**
     * **ChromeOS only.**
     * Caret highlighting.
     * @since Chrome 51.
     */
    export var caretHighlight: chrome.types.ChromeSetting;
    /**
     * **ChromeOS only.**
     * Cursor highlighting.
     * @since Chrome 51.
     */
    export var cursorHighlight: chrome.types.ChromeSetting;
    /**
     * **ChromeOS only.**
     * Focus highlighting.
     * @since Chrome 51.
     */
    export var focusHighlight: chrome.types.ChromeSetting;
    /**
     * **ChromeOS only.**
     * Select-to-speak.
     * @since Chrome 51.
     */
    export var selectToSpeak: chrome.types.ChromeSetting;
    /**
     * **ChromeOS only.**
     * Switch Access.
     * @since Chrome 51.
     */
    export var switchAccess: chrome.types.ChromeSetting;
    /**
     * @since Chrome 42.
     */
    export var animationPolicy: chrome.types.ChromeSetting;
}

////////////////////
// Action
////////////////////
/**
 * Use the chrome.action API to control the extension's icon in the Google Chrome toolbar.
 * Availability: Since Chrome 88. Manifest v3.
 * Manifest:  "action": {...}
 */
declare namespace chrome.action {
    /** @deprecated Use BadgeColorDetails instead. */
    export interface BadgeBackgroundColorDetails extends BadgeColorDetails {}

    export interface BadgeColorDetails {
        /** An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red is [255, 0, 0, 255]. Can also be a string with a CSS value, with opaque red being #FF0000 or #F00. */
        color: string | ColorArray;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
    }

    export interface BadgeTextDetails {
        /** Any number of characters can be passed, but only about four can fit in the space. */
        text: string;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
    }

    export type ColorArray = [number, number, number, number];

    export interface TitleDetails {
        /** The string the action should display when moused over. */
        title: string;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
    }

    export interface PopupDetails {
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
        /** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string;
    }

    export interface BrowserClickedEvent extends chrome.events.Event<(tab: chrome.tabs.Tab) => void> {}

    export interface TabIconDetails {
        /** Optional. Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'  */
        path?: string | { [index: number]: string } | undefined;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
        /** Optional. Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'  */
        imageData?: ImageData | { [index: number]: ImageData } | undefined;
    }

    export interface OpenPopupOptions {
        /** Optional. The id of the window to open the action popup in. Defaults to the currently-active window if unspecified.  */
        windowId?: number | undefined;
    }

    export interface TabDetails {
        /** Optional. The ID of the tab to query state for. If no tab is specified, the non-tab-specific state is returned.  */
        tabId?: number | undefined;
    }

    export interface UserSettings {
        /** Whether the extension's action icon is visible on browser windows' top-level toolbar (i.e., whether the extension has been 'pinned' by the user). */
        isOnToolbar: boolean;
    }

    /**
     * Since Chrome 88.
     * Disables the action for a tab.
     * @param tabId The id of the tab for which you want to modify the action.
     * @return The `disable` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function disable(tabId?: number): Promise<void>;

    /**
     * Since Chrome 88.
     * Disables the action for a tab.
     * @param tabId The id of the tab for which you want to modify the action.
     * @param callback
     */
    export function disable(callback: () => void): void;
    export function disable(tabId: number, callback: () => void): void;

    /**
     * Since Chrome 88.
     * Enables the action for a tab. By default, actions are enabled.
     * @param tabId The id of the tab for which you want to modify the action.
     * @return The `enable` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function enable(tabId?: number): Promise<void>;

    /**
     * Since Chrome 88.
     * Enables the action for a tab. By default, actions are enabled.
     * @param tabId The id of the tab for which you want to modify the action.
     * @param callback
     */
    export function enable(callback: () => void): void;
    export function enable(tabId: number, callback: () => void): void;

    /**
     * Since Chrome 88.
     * Gets the background color of the action.
     */
    export function getBadgeBackgroundColor(details: TabDetails, callback: (result: ColorArray) => void): void;
    /**
     * Since Chrome 88.
     * Gets the background color of the action.
     * @return The `getBadgeBackgroundColor` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getBadgeBackgroundColor(details: TabDetails): Promise<ColorArray>;

    /**
     * Since Chrome 88.
     * Gets the badge text of the action. If no tab is specified, the non-tab-specific badge text is returned.
     * If displayActionCountAsBadgeText is enabled, a placeholder text will be returned unless the
     * declarativeNetRequestFeedback permission is present or tab-specific badge text was provided.
     */
    export function getBadgeText(details: TabDetails, callback: (result: string) => void): void;

    /**
     * Since Chrome 88.
     * Gets the badge text of the action. If no tab is specified, the non-tab-specific badge text is returned.
     * If displayActionCountAsBadgeText is enabled, a placeholder text will be returned unless the
     * declarativeNetRequestFeedback permission is present or tab-specific badge text was provided.
     * @return The `getBadgeText` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getBadgeText(details: TabDetails): Promise<string>;

    /**
     * Since Chrome 110.
     * Gets the text color of the action.
     */
    export function getBadgeTextColor(details: TabDetails, callback: (result: ColorArray) => void): void;

    /**
     * Since Chrome 110.
     * Gets the text color of the action.
     * @return The `getBadgeTextColor` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getBadgeTextColor(details: TabDetails): Promise<ColorArray>;

    /**
     * Since Chrome 88.
     * Gets the html document set as the popup for this action.
     */
    export function getPopup(details: TabDetails, callback: (result: string) => void): void;

    /**
     * Since Chrome 88.
     * Gets the html document set as the popup for this action.
     * @return The `getPopup` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getPopup(details: TabDetails): Promise<string>;

    /**
     * Since Chrome 88.
     * Gets the title of the action.
     */
    export function getTitle(details: TabDetails, callback: (result: string) => void): void;

    /**
     * Since Chrome 88.
     * Gets the title of the action.
     * @return The `getTitle` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getTitle(details: TabDetails): Promise<string>;

    /**
     * Since Chrome 91.
     * Returns the user-specified settings relating to an extension's action.
     */
    export function getUserSettings(callback: (userSettings: UserSettings) => void): void;

    /**
     * Since Chrome 91.
     * Returns the user-specified settings relating to an extension's action.
     * @return The `getUserSettings` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getUserSettings(): Promise<UserSettings>;

    /**
     * Since Chrome 110.
     * Indicates whether the extension action is enabled for a tab (or globally if no tabId is provided). Actions enabled using only declarativeContent always return false.
     */
    export function isEnabled(tabId: number | undefined, callback: (isEnabled: boolean) => void): void;

    /**
     * Since Chrome 110.
     * Indicates whether the extension action is enabled for a tab (or globally if no tabId is provided). Actions enabled using only declarativeContent always return false.
     * @return True if the extension action is enabled.
     */
    export function isEnabled(tabId?: number): Promise<boolean>;

    /**
     * Since Chrome 99+.
     * Opens the extension's popup.
     * @param options Specifies options for opening the popup.
     * () => {...}
     * @return The `openPopup` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function openPopup(options?: OpenPopupOptions): Promise<void>;

    /**
     * Since Chrome 99+.
     * Opens the extension's popup.
     * @param options Specifies options for opening the popup.
     */
    export function openPopup(callback: () => void): void;
    export function openPopup(options: OpenPopupOptions, callback: () => void): void;

    /**
     * Since Chrome 88.
     * Sets the background color for the badge.
     * @return The `setBadgeBackgroundColor` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setBadgeBackgroundColor(details: BadgeColorDetails): Promise<void>;

    /**
     * Since Chrome 88.
     * Sets the background color for the badge.
     */
    export function setBadgeBackgroundColor(details: BadgeColorDetails, callback: () => void): void;

    /**
     * Since Chrome 88.
     * Sets the badge text for the action. The badge is displayed on top of the icon.
     * @return The `setBadgeText` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setBadgeText(details: BadgeTextDetails): Promise<void>;

    /**
     * Since Chrome 88.
     * Sets the badge text for the action. The badge is displayed on top of the icon.
     */
    export function setBadgeText(details: BadgeTextDetails, callback: () => void): void;

    /**
     * Since Chrome 110.
     * Sets the text color for the badge.
     * @return The `setBadgeTextColor` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setBadgeTextColor(details: BadgeColorDetails): Promise<void>;

    /**
     * Since Chrome 100.
     * Sets the text color for the badge.
     */
    export function setBadgeTextColor(details: BadgeColorDetails, callback: () => void): void;

    /**
     * Since Chrome 88.
     * Sets the icon for the action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element,
     * or as dictionary of either one of those. Either the path or the imageData property must be specified.
     * @return The `setIcon` method provides its result via callback or returned as a `Promise` (MV3 only). Since Chrome 96.
     */
    export function setIcon(details: TabIconDetails): Promise<void>;
    export function setIcon(details: TabIconDetails, callback: () => void): void;

    /**
     * Since Chrome 88.
     * Sets the html document to be opened as a popup when the user clicks on the action's icon.
     * @return The `setPopup` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setPopup(details: PopupDetails): Promise<void>;

    /**
     * Since Chrome 88.
     * Sets the html document to be opened as a popup when the user clicks on the action's icon.
     */
    export function setPopup(details: PopupDetails, callback: () => void): void;

    /**
     * Since Chrome 88.
     * Sets the title of the action. This shows up in the tooltip.
     * @return The `setTitle` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setTitle(details: TitleDetails): Promise<void>;

    /**
     * Since Chrome 88.
     * Sets the title of the action. This shows up in the tooltip.
     */
    export function setTitle(details: TitleDetails, callback: () => void): void;

    /** Fired when an action icon is clicked. This event will not fire if the action has a popup. */
    export var onClicked: BrowserClickedEvent;
}

////////////////////
// Alarms
////////////////////
/**
 * Use the chrome.alarms API to schedule code to run periodically or at a specified time in the future.
 * Availability: Since Chrome 22.
 * Permissions:  "alarms"
 */
declare namespace chrome.alarms {
    export interface AlarmCreateInfo {
        /** Optional. Length of time in minutes after which the onAlarm event should fire.  */
        delayInMinutes?: number | undefined;
        /** Optional. If set, the onAlarm event should fire every periodInMinutes minutes after the initial event specified by when or delayInMinutes. If not set, the alarm will only fire once.  */
        periodInMinutes?: number | undefined;
        /** Optional. Time at which the alarm should fire, in milliseconds past the epoch (e.g. Date.now() + n).  */
        when?: number | undefined;
    }

    export interface Alarm {
        /** Optional. If not null, the alarm is a repeating alarm and will fire again in periodInMinutes minutes.  */
        periodInMinutes?: number | undefined;
        /** Time at which this alarm was scheduled to fire, in milliseconds past the epoch (e.g. Date.now() + n). For performance reasons, the alarm may have been delayed an arbitrary amount beyond this. */
        scheduledTime: number;
        /** Name of this alarm. */
        name: string;
    }

    export interface AlarmEvent extends chrome.events.Event<(alarm: Alarm) => void> {}

    /**
     * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
     * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
     * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
     * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
     * @return The `create` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function create(alarmInfo: AlarmCreateInfo): Promise<void>;
    /**
     * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
     * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
     * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
     * @param name Optional name to identify this alarm. Defaults to the empty string.
     * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
     * @return The `create` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function create(name: string, alarmInfo: AlarmCreateInfo): Promise<void>;
    /**
     * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
     * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
     * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
     * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
     */
    export function create(alarmInfo: AlarmCreateInfo, callback: () => void): void;
    /**
     * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
     * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
     * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
     * @param name Optional name to identify this alarm. Defaults to the empty string.
     * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
     */
    export function create(name: string, alarmInfo: AlarmCreateInfo, callback: () => void): void;
    /**
     * Gets an array of all the alarms.
     */
    export function getAll(callback: (alarms: Alarm[]) => void): void;
    /**
     * Gets an array of all the alarms.
     * @return The `getAll` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAll(): Promise<Alarm[]>;
    /**
     * Clears all alarms.
     * function(boolean wasCleared) {...};
     * @return The `clearAll` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function clearAll(): Promise<boolean>;
    /**
     * Clears all alarms.
     */
    export function clearAll(callback: (wasCleared: boolean) => void): void;
    /**
     * Clears the alarm with the given name.
     * @param name The name of the alarm to clear. Defaults to the empty string.
     * @return The `clear` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function clear(name?: string): Promise<boolean>;
    /**
     * Clears the alarm with the given name.
     * @param name The name of the alarm to clear. Defaults to the empty string.
     */
    export function clear(callback: (wasCleared: boolean) => void): void;
    export function clear(name: string, callback: (wasCleared: boolean) => void): void;
    /**
     * Clears the alarm without a name.
     */
    export function clear(callback: (wasCleared: boolean) => void): void;
    /**
     * Clears the alarm without a name.
     * @return The `clear` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function clear(): Promise<void>;
    /**
     * Retrieves details about the specified alarm.
     */
    export function get(callback: (alarm: Alarm) => void): void;
    /**
     * Retrieves details about the specified alarm.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(): Promise<Alarm>;
    /**
     * Retrieves details about the specified alarm.
     * @param name The name of the alarm to get. Defaults to the empty string.
     */
    export function get(name: string, callback: (alarm: Alarm) => void): void;
    /**
     * Retrieves details about the specified alarm.
     * @param name The name of the alarm to get. Defaults to the empty string.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(name: string): Promise<Alarm>;

    /** Fired when an alarm has elapsed. Useful for event pages. */
    export var onAlarm: AlarmEvent;
}

////////////////////
// Browser
////////////////////
/**
 * Use the chrome.browser API to interact with the Chrome browser associated with
 * the current application and Chrome profile.
 */
declare namespace chrome.browser {
    export interface Options {
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
declare namespace chrome.bookmarks {
    /** A node (either a bookmark or a folder) in the bookmark tree. Child nodes are ordered within their parent folder. */
    export interface BookmarkTreeNode {
        /** Optional. The 0-based position of this node within its parent folder.  */
        index?: number | undefined;
        /** Optional. When this node was created, in milliseconds since the epoch (new Date(dateAdded)).  */
        dateAdded?: number | undefined;
        /** The text displayed for the node. */
        title: string;
        /** Optional. The URL navigated to when a user clicks the bookmark. Omitted for folders.   */
        url?: string | undefined;
        /** Optional. When the contents of this folder last changed, in milliseconds since the epoch.   */
        dateGroupModified?: number | undefined;
        /** The unique identifier for the node. IDs are unique within the current profile, and they remain valid even after the browser is restarted.  */
        id: string;
        /** Optional. The id of the parent folder. Omitted for the root node.   */
        parentId?: string | undefined;
        /** Optional. An ordered list of children of this node.  */
        children?: BookmarkTreeNode[] | undefined;
        /**
         * Optional.
         * Since Chrome 37.
         * Indicates the reason why this node is unmodifiable. The managed value indicates that this node was configured by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the user and the extension (default).
         */
        unmodifiable?: "managed" | undefined;
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
        url?: string | undefined;
        title: string;
    }

    export interface BookmarkReorderInfo {
        childIds: string[];
    }

    export interface BookmarkRemovedEvent
        extends chrome.events.Event<(id: string, removeInfo: BookmarkRemoveInfo) => void>
    {}

    export interface BookmarkImportEndedEvent extends chrome.events.Event<() => void> {}

    export interface BookmarkMovedEvent extends chrome.events.Event<(id: string, moveInfo: BookmarkMoveInfo) => void> {}

    export interface BookmarkImportBeganEvent extends chrome.events.Event<() => void> {}

    export interface BookmarkChangedEvent
        extends chrome.events.Event<(id: string, changeInfo: BookmarkChangeInfo) => void>
    {}

    export interface BookmarkCreatedEvent
        extends chrome.events.Event<(id: string, bookmark: BookmarkTreeNode) => void>
    {}

    export interface BookmarkChildrenReordered
        extends chrome.events.Event<(id: string, reorderInfo: BookmarkReorderInfo) => void>
    {}

    export interface BookmarkSearchQuery {
        query?: string | undefined;
        url?: string | undefined;
        title?: string | undefined;
    }

    export interface BookmarkCreateArg {
        /** Optional. Defaults to the Other Bookmarks folder.  */
        parentId?: string | undefined;
        index?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
    }

    export interface BookmarkDestinationArg {
        parentId?: string | undefined;
        index?: number | undefined;
    }

    export interface BookmarkChangesArg {
        title?: string | undefined;
        url?: string | undefined;
    }

    /** @deprecated since Chrome 38. Bookmark write operations are no longer limited by Chrome. */
    export var MAX_WRITE_OPERATIONS_PER_HOUR: number;
    /** @deprecated since Chrome 38. Bookmark write operations are no longer limited by Chrome. */
    export var MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;

    /**
     * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties.
     * @param query A string of words and quoted phrases that are matched against bookmark URLs and titles.
     */
    export function search(query: string, callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties.
     * @param query A string of words and quoted phrases that are matched against bookmark URLs and titles.
     * @return The `search` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function search(query: string): Promise<BookmarkTreeNode[]>;
    /**
     * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties.
     * @param query An object with one or more of the properties query, url, and title specified. Bookmarks matching all specified properties will be produced.
     */
    export function search(query: BookmarkSearchQuery, callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties.
     * @param query An object with one or more of the properties query, url, and title specified. Bookmarks matching all specified properties will be produced.
     * @return The `search` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function search(query: BookmarkSearchQuery): Promise<BookmarkTreeNode[]>;
    /**
     * Retrieves the entire Bookmarks hierarchy.
     */
    export function getTree(callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Retrieves the entire Bookmarks hierarchy.
     * @return The `getTree` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getTree(): Promise<BookmarkTreeNode[]>;
    /**
     * Retrieves the recently added bookmarks.
     * @param numberOfItems The maximum number of items to return.
     */
    export function getRecent(numberOfItems: number, callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Retrieves the recently added bookmarks.
     * @param numberOfItems The maximum number of items to return.
     * @return The `getRecent` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getRecent(numberOfItems: number): Promise<BookmarkTreeNode[]>;
    /**
     * Retrieves the specified BookmarkTreeNode.
     * @param id A single string-valued id
     */
    export function get(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Retrieves the specified BookmarkTreeNode.
     * @param id A single string-valued id
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(id: string): Promise<BookmarkTreeNode[]>;
    /**
     * Retrieves the specified BookmarkTreeNode.
     * @param idList An array of string-valued ids
     */
    export function get(idList: string[], callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Retrieves the specified BookmarkTreeNode.
     * @param idList An array of string-valued ids
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(idList: string[]): Promise<BookmarkTreeNode[]>;
    /**
     * Creates a bookmark or folder under the specified parentId. If url is NULL or missing, it will be a folder.
     * @return The `create` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function create(bookmark: BookmarkCreateArg): Promise<BookmarkTreeNode>;
    /**
     * Creates a bookmark or folder under the specified parentId. If url is NULL or missing, it will be a folder.
     */
    export function create(bookmark: BookmarkCreateArg, callback: (result: BookmarkTreeNode) => void): void;
    /**
     * Moves the specified BookmarkTreeNode to the provided location.
     * @return The `move` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function move(
        id: string,
        destination: BookmarkDestinationArg,
    ): Promise<BookmarkTreeNode>;
    /**
     * Moves the specified BookmarkTreeNode to the provided location.
     */
    export function move(
        id: string,
        destination: BookmarkDestinationArg,
        callback: (result: BookmarkTreeNode) => void,
    ): void;
    /**
     * Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified properties will be left unchanged. Note: Currently, only 'title' and 'url' are supported.
     * @return The `update` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function update(
        id: string,
        changes: BookmarkChangesArg,
    ): Promise<BookmarkTreeNode>;
    /**
     * Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified properties will be left unchanged. Note: Currently, only 'title' and 'url' are supported.
     */
    export function update(
        id: string,
        changes: BookmarkChangesArg,
        callback: (result: BookmarkTreeNode) => void,
    ): void;
    /**
     * Removes a bookmark or an empty bookmark folder.
     * @return The `remove` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function remove(id: string): Promise<void>;
    /**
     * Removes a bookmark or an empty bookmark folder.
     */
    export function remove(id: string, callback: Function): void;
    /**
     * Retrieves the children of the specified BookmarkTreeNode id.
     */
    export function getChildren(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Retrieves the children of the specified BookmarkTreeNode id.
     * @return The `getChildren` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getChildren(id: string): Promise<BookmarkTreeNode[]>;
    /**
     * Since Chrome 14.
     * Retrieves part of the Bookmarks hierarchy, starting at the specified node.
     * @param id The ID of the root of the subtree to retrieve.
     */
    export function getSubTree(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
    /**
     * Since Chrome 14.
     * Retrieves part of the Bookmarks hierarchy, starting at the specified node.
     * @param id The ID of the root of the subtree to retrieve.
     * @return The `getSubTree` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getSubTree(id: string): Promise<BookmarkTreeNode[]>;
    /**
     * Recursively removes a bookmark folder.
     * @return The `removeTree` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeTree(id: string): Promise<void>;
    /**
     * Recursively removes a bookmark folder.
     */
    export function removeTree(id: string, callback: Function): void;

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
 * Use browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar. In addition to its icon, a browser action can also have a tooltip, a badge, and a popup.
 * Availability: Since Chrome 5.
 * Manifest:  "browser_action": {...}
 */
declare namespace chrome.browserAction {
    export interface BadgeBackgroundColorDetails {
        /** An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red is [255, 0, 0, 255]. Can also be a string with a CSS value, with opaque red being #FF0000 or #F00. */
        color: string | ColorArray;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
    }

    export interface BadgeTextDetails {
        /** Any number of characters can be passed, but only about four can fit in the space. */
        text?: string | null | undefined;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
    }

    export type ColorArray = [number, number, number, number];

    export interface TitleDetails {
        /** The string the browser action should display when moused over. */
        title: string;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | null;
    }

    export interface TabDetails {
        /** Optional. Specify the tab to get the information. If no tab is specified, the non-tab-specific information is returned.  */
        tabId?: number | null;
    }

    export interface TabIconDetails {
        /** Optional. Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'  */
        path?: string | { [index: string]: string } | undefined;
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | undefined;
        /** Optional. Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'  */
        imageData?: ImageData | { [index: number]: ImageData } | undefined;
    }

    export interface PopupDetails {
        /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
        tabId?: number | null;
        /** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string;
    }

    export interface BrowserClickedEvent extends chrome.events.Event<(tab: chrome.tabs.Tab) => void> {}

    /**
     * Since Chrome 22.
     * Enables the browser action for a tab. By default, browser actions are enabled.
     * @param tabId The id of the tab for which you want to modify the browser action.
     * @return The `enable` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function enable(tabId?: number | null): Promise<void>;
    /**
     * Since Chrome 22.
     * Enables the browser action for a tab. By default, browser actions are enabled.
     * @param tabId The id of the tab for which you want to modify the browser action.
     * @param callback Supported since Chrome 67
     */
    export function enable(callback?: () => void): void;
    export function enable(tabId: number | null | undefined, callback?: () => void): void;
    /**
     * Sets the background color for the badge.
     * @return The `setBadgeBackgroundColor` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setBadgeBackgroundColor(details: BadgeBackgroundColorDetails): Promise<void>;
    /**
     * Sets the background color for the badge.
     * @param callback Supported since Chrome 67
     */
    export function setBadgeBackgroundColor(details: BadgeBackgroundColorDetails, callback?: () => void): void;
    /**
     * Sets the badge text for the browser action. The badge is displayed on top of the icon.
     * @return The `setBadgeText` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setBadgeText(details: BadgeTextDetails): Promise<void>;
    /**
     * Sets the badge text for the browser action. The badge is displayed on top of the icon.
     * @param callback Supported since Chrome 67
     */
    export function setBadgeText(details: BadgeTextDetails, callback: () => void): void;
    /**
     * Sets the title of the browser action. This shows up in the tooltip.
     * @return The `setTitle` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setTitle(details: TitleDetails): Promise<void>;
    /**
     * Sets the title of the browser action. This shows up in the tooltip.
     * @param callback Supported since Chrome 67
     */
    export function setTitle(details: TitleDetails, callback: () => void): void;
    /**
     * Since Chrome 19.
     * Gets the badge text of the browser action. If no tab is specified, the non-tab-specific badge text is returned.
     * @param callback Supported since Chrome 67
     */
    export function getBadgeText(details: TabDetails, callback: (result: string) => void): void;
    /**
     * Since Chrome 19.
     * Gets the badge text of the browser action. If no tab is specified, the non-tab-specific badge text is returned.
     * @return The `getBadgeText` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getBadgeText(details: TabDetails): Promise<string>;
    /**
     * Sets the html document to be opened as a popup when the user clicks on the browser action's icon.
     * @return The `setPopup` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setPopup(details: PopupDetails): Promise<void>;
    /**
     * Sets the html document to be opened as a popup when the user clicks on the browser action's icon.
     * @param callback Supported since Chrome 67
     */
    export function setPopup(details: PopupDetails, callback?: () => void): void;
    /**
     * Since Chrome 22.
     * Disables the browser action for a tab.
     * @param tabId The id of the tab for which you want to modify the browser action.
     * @return The `disable` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function disable(tabId?: number | null): Promise<void>;
    /**
     * Since Chrome 22.
     * Disables the browser action for a tab.
     * @param tabId The id of the tab for which you want to modify the browser action.
     * @param callback Supported since Chrome 67
     */
    export function disable(callback: () => void): void;
    export function disable(tabId?: number | null, callback?: () => void): void;
    /**
     * Since Chrome 19.
     * Gets the title of the browser action.
     */
    export function getTitle(details: TabDetails, callback: (result: string) => void): void;
    /**
     * Since Chrome 19.
     * Gets the title of the browser action.
     * @return The `getTitle` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getTitle(details: TabDetails): Promise<string>;
    /**
     * Since Chrome 19.
     * Gets the background color of the browser action.
     */
    export function getBadgeBackgroundColor(details: TabDetails, callback: (result: ColorArray) => void): void;
    /**
     * Since Chrome 19.
     * Gets the background color of the browser action.
     * @return The `getBadgeBackgroundColor` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getBadgeBackgroundColor(details: TabDetails): Promise<ColorArray>;
    /**
     * Since Chrome 19.
     * Gets the html document set as the popup for this browser action.
     */
    export function getPopup(details: TabDetails, callback: (result: string) => void): void;
    /**
     * Since Chrome 19.
     * Gets the html document set as the popup for this browser action.
     * @return The `getPopup` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getPopup(details: TabDetails): Promise<string>;
    /**
     * Sets the icon for the browser action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the path or the imageData property must be specified.
     */
    export function setIcon(details: TabIconDetails, callback?: Function): void;

    /** Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup. */
    export var onClicked: BrowserClickedEvent;
}

////////////////////
// Browsing Data
////////////////////
/**
 * Use the chrome.browsingData API to remove browsing data from a user's local profile.
 * Availability: Since Chrome 19.
 * Permissions:  "browsingData"
 */
declare namespace chrome.browsingData {
    export interface OriginTypes {
        /** Optional. Extensions and packaged applications a user has installed (be _really_ careful!).  */
        extension?: boolean | undefined;
        /** Optional. Websites that have been installed as hosted applications (be careful!).  */
        protectedWeb?: boolean | undefined;
        /** Optional. Normal websites.  */
        unprotectedWeb?: boolean | undefined;
    }

    /** Options that determine exactly what data will be removed. */
    export interface RemovalOptions {
        /**
         * Optional.
         * Since Chrome 74.
         * When present, data for origins in this list is excluded from deletion. Can't be used together with origins. Only supported for cookies, storage and cache. Cookies are excluded for the whole registrable domain.
         */
        excludeOrigins?: string[] | undefined;
        /**
         * Optional.
         * An object whose properties specify which origin types ought to be cleared. If this object isn't specified, it defaults to clearing only "unprotected" origins. Please ensure that you _really_ want to remove application data before adding 'protectedWeb' or 'extensions'.
         */
        originTypes?: OriginTypes | undefined;
        /**
         * Optional.
         * Since Chrome 74.
         * When present, only data for origins in this list is deleted. Only supported for cookies, storage and cache. Cookies are cleared for the whole registrable domain.
         */
        origins?: string[] | undefined;
        /**
         * Optional.
         * Remove data accumulated on or after this date, represented in milliseconds since the epoch (accessible via the {@link Date.getTime} method). If absent, defaults to 0 (which would remove all browsing data).
         */
        since?: number | undefined;
    }

    /**
     * Since Chrome 27.
     * A set of data types. Missing data types are interpreted as false.
     */
    export interface DataTypeSet {
        /** Optional. Websites' WebSQL data.  */
        webSQL?: boolean | undefined;
        /** Optional. Websites' IndexedDB data.  */
        indexedDB?: boolean | undefined;
        /** Optional. The browser's cookies.  */
        cookies?: boolean | undefined;
        /** Optional. Stored passwords.  */
        passwords?: boolean | undefined;
        /**
         * @deprecated Deprecated since Chrome 76.
         * Support for server-bound certificates has been removed. This data type will be ignored.
         *
         * Optional. Server-bound certificates.
         */
        serverBoundCertificates?: boolean | undefined;
        /** Optional. The browser's download list.  */
        downloads?: boolean | undefined;
        /** Optional. The browser's cache. Note: when removing data, this clears the entire cache: it is not limited to the range you specify.  */
        cache?: boolean | undefined;
        /** Optional. The browser's cacheStorage.  */
        cacheStorage?: boolean | undefined;
        /** Optional. Websites' appcaches.  */
        appcache?: boolean | undefined;
        /** Optional. Websites' file systems.  */
        fileSystems?: boolean | undefined;
        /**
         * @deprecated Deprecated since Chrome 88.
         * Support for Flash has been removed. This data type will be ignored.
         *
         * Optional. Plugins' data.
         */
        pluginData?: boolean | undefined;
        /** Optional. Websites' local storage data.  */
        localStorage?: boolean | undefined;
        /** Optional. The browser's stored form data.  */
        formData?: boolean | undefined;
        /** Optional. The browser's history.  */
        history?: boolean | undefined;
        /**
         * Optional.
         * Since Chrome 39.
         * Service Workers.
         */
        serviceWorkers?: boolean | undefined;
    }

    export interface SettingsResult {
        options: RemovalOptions;
        /** All of the types will be present in the result, with values of true if they are both selected to be removed and permitted to be removed, otherwise false. */
        dataToRemove: DataTypeSet;
        /** All of the types will be present in the result, with values of true if they are permitted to be removed (e.g., by enterprise policy) and false if not. */
        dataRemovalPermitted: DataTypeSet;
    }

    /**
     * Since Chrome 26.
     * Reports which types of data are currently selected in the 'Clear browsing data' settings UI. Note: some of the data types included in this API are not available in the settings UI, and some UI settings control more than one data type listed here.
     * @return The `settings` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function settings(): Promise<SettingsResult>;
    /**
     * Since Chrome 26.
     * Reports which types of data are currently selected in the 'Clear browsing data' settings UI. Note: some of the data types included in this API are not available in the settings UI, and some UI settings control more than one data type listed here.
     */
    export function settings(callback: (result: SettingsResult) => void): void;
    /**
     * @deprecated Deprecated since Chrome 88.
     * Support for Flash has been removed. This function has no effect.
     *
     * Clears plugins' data.
     * @return The `removePluginData` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removePluginData(options: RemovalOptions): Promise<void>;
    /**
     * @deprecated Deprecated since Chrome 88.
     * Support for Flash has been removed. This function has no effect.
     *
     * Clears plugins' data.
     * @param callback Called when plugins' data has been cleared.
     */
    export function removePluginData(options: RemovalOptions, callback: () => void): void;
    /**
     * Since Chrome 72.
     * Clears websites' service workers.
     * @return The `removeServiceWorkers` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeServiceWorkers(options: RemovalOptions): Promise<void>;
    /**
     * Since Chrome 72.
     * Clears websites' service workers.
     * @param callback Called when the browser's service workers have been cleared.
     */
    export function removeServiceWorkers(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears the browser's stored form data (autofill).
     * @return The `removeFormData` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeFormData(options: RemovalOptions): Promise<void>;
    /**
     * Clears the browser's stored form data (autofill).
     * @param callback Called when the browser's form data has been cleared.
     */
    export function removeFormData(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears websites' file system data.
     * @return The `removeFileSystems` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeFileSystems(options: RemovalOptions): Promise<void>;
    /**
     * Clears websites' file system data.
     * @param callback Called when websites' file systems have been cleared.
     */
    export function removeFileSystems(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears various types of browsing data stored in a user's profile.
     * @param dataToRemove The set of data types to remove.
     * @return The `remove` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function remove(options: RemovalOptions, dataToRemove: DataTypeSet): Promise<void>;
    /**
     * Clears various types of browsing data stored in a user's profile.
     * @param dataToRemove The set of data types to remove.
     * @param callback Called when deletion has completed.
     */
    export function remove(options: RemovalOptions, dataToRemove: DataTypeSet, callback: () => void): void;
    /**
     * Clears the browser's stored passwords.
     * @return The `removePasswords` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removePasswords(options: RemovalOptions): Promise<void>;
    /**
     * Clears the browser's stored passwords.
     * @param callback Called when the browser's passwords have been cleared.
     */
    export function removePasswords(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears the browser's cookies and server-bound certificates modified within a particular timeframe.
     * @return The `removeCookies` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeCookies(options: RemovalOptions): Promise<void>;
    /**
     * Clears the browser's cookies and server-bound certificates modified within a particular timeframe.
     * @param callback Called when the browser's cookies and server-bound certificates have been cleared.
     */
    export function removeCookies(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears websites' WebSQL data.
     * @return The `removeWebSQL` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeWebSQL(options: RemovalOptions): Promise<void>;
    /**
     * Clears websites' WebSQL data.
     * @param callback Called when websites' WebSQL databases have been cleared.
     */
    export function removeWebSQL(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears websites' appcache data.
     * @return The `removeAppcache` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeAppcache(options: RemovalOptions): Promise<void>;
    /**
     * Clears websites' appcache data.
     * @param callback Called when websites' appcache data has been cleared.
     */
    export function removeAppcache(options: RemovalOptions, callback: () => void): void;
    /** Clears websites' cache storage data.
     * @return The `removeCacheStorage` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeCacheStorage(options: RemovalOptions): Promise<void>;
    /** Clears websites' cache storage data.
     * @param callback Called when websites' appcache data has been cleared.
     */
    export function removeCacheStorage(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears the browser's list of downloaded files (not the downloaded files themselves).
     * @return The `removeDownloads` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeDownloads(options: RemovalOptions): Promise<void>;
    /**
     * Clears the browser's list of downloaded files (not the downloaded files themselves).
     * @param callback Called when the browser's list of downloaded files has been cleared.
     */
    export function removeDownloads(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears websites' local storage data.
     * @return The `removeLocalStorage` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeLocalStorage(options: RemovalOptions): Promise<void>;
    /**
     * Clears websites' local storage data.
     * @param callback Called when websites' local storage has been cleared.
     */
    export function removeLocalStorage(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears the browser's cache.
     * @return The `removeCache` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeCache(options: RemovalOptions): Promise<void>;
    /**
     * Clears the browser's cache.
     * @param callback Called when the browser's cache has been cleared.
     */
    export function removeCache(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears the browser's history.
     * @return The `removeHistory` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeHistory(options: RemovalOptions): Promise<void>;
    /**
     * Clears the browser's history.
     * @param callback Called when the browser's history has cleared.
     */
    export function removeHistory(options: RemovalOptions, callback: () => void): void;
    /**
     * Clears websites' IndexedDB data.
     * @return The `removeIndexedDB` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeIndexedDB(options: RemovalOptions): Promise<void>;
    /**
     * Clears websites' IndexedDB data.
     * @param callback Called when websites' IndexedDB data has been cleared.
     */
    export function removeIndexedDB(options: RemovalOptions, callback: () => void): void;
}

////////////////////
// Commands
////////////////////
/**
 * Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example, an action to open the browser action or send a command to the extension.
 * Availability: Since Chrome 25.
 * Manifest:  "commands": {...}
 */
declare namespace chrome.commands {
    export interface Command {
        /** Optional. The name of the Extension Command  */
        name?: string | undefined;
        /** Optional. The Extension Command description  */
        description?: string | undefined;
        /** Optional. The shortcut active for this command, or blank if not active.  */
        shortcut?: string | undefined;
    }

    export interface CommandEvent extends chrome.events.Event<(command: string, tab: chrome.tabs.Tab) => void> {}

    /**
     * Returns all the registered extension commands for this extension and their shortcut (if active).
     * @return The `getAll` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAll(): Promise<Command[]>;
    /**
     * Returns all the registered extension commands for this extension and their shortcut (if active).
     * @param callback Called to return the registered commands.
     */
    export function getAll(callback: (commands: Command[]) => void): void;

    /** Fired when a registered command is activated using a keyboard shortcut. */
    export var onCommand: CommandEvent;
}

////////////////////
// Content Settings
////////////////////
/**
 * Use the chrome.contentSettings API to change settings that control whether websites can use features such as cookies, JavaScript, and plugins. More generally speaking, content settings allow you to customize Chrome's behavior on a per-site basis instead of globally.
 * Availability: Since Chrome 16.
 * Permissions:  "contentSettings"
 */
declare namespace chrome.contentSettings {
    type ScopeEnum = "regular" | "incognito_session_only";

    export interface ClearDetails {
        /**
         * Optional.
         * Where to clear the setting (default: regular).
         * The scope of the ContentSetting. One of
         * * regular: setting for regular profile (which is inherited by the incognito profile if not overridden elsewhere),
         * * incognito_session_only: setting for incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular settings).
         */
        scope?: ScopeEnum | undefined;
    }

    type DefaultContentSettingDetails = "allow" | "ask" | "block" | "detect_important_content" | "session_only";

    export interface SetDetails {
        /** Optional. The resource identifier for the content type.  */
        resourceIdentifier?: ResourceIdentifier | undefined;
        /** The setting applied by this rule. See the description of the individual ContentSetting objects for the possible values. */
        setting: DefaultContentSettingDetails;
        /** Optional. The pattern for the secondary URL. Defaults to matching all URLs. For details on the format of a pattern, see Content Setting Patterns.  */
        secondaryPattern?: string | undefined;
        /** Optional. Where to set the setting (default: regular).  */
        scope?: ScopeEnum | undefined;
        /** The pattern for the primary URL. For details on the format of a pattern, see Content Setting Patterns. */
        primaryPattern: string;
    }

    export interface CookieSetDetails extends SetDetails {
        setting: "allow" | "block" | "session_only";
    }

    export interface ImagesSetDetails extends SetDetails {
        setting: "allow" | "block";
    }

    export interface JavascriptSetDetails extends SetDetails {
        setting: "allow" | "block";
    }

    export interface LocationSetDetails extends SetDetails {
        setting: "allow" | "block" | "ask";
    }

    export interface PluginsSetDetails extends SetDetails {
        setting: "allow" | "block" | "detect_important_content";
    }

    export interface PopupsSetDetails extends SetDetails {
        setting: "allow" | "block";
    }

    export interface NotificationsSetDetails extends SetDetails {
        setting: "allow" | "block" | "ask";
    }

    export interface FullscreenSetDetails extends SetDetails {
        setting: "allow";
    }

    export interface MouselockSetDetails extends SetDetails {
        setting: "allow";
    }

    export interface MicrophoneSetDetails extends SetDetails {
        setting: "allow" | "block" | "ask";
    }

    export interface CameraSetDetails extends SetDetails {
        setting: "allow" | "block" | "ask";
    }

    export interface PpapiBrokerSetDetails extends SetDetails {
        setting: "allow" | "block" | "ask";
    }

    export interface MultipleAutomaticDownloadsSetDetails extends SetDetails {
        setting: "allow" | "block" | "ask";
    }

    export interface GetDetails {
        /** Optional. The secondary URL for which the content setting should be retrieved. Defaults to the primary URL. Note that the meaning of a secondary URL depends on the content type, and not all content types use secondary URLs.  */
        secondaryUrl?: string | undefined;
        /** Optional. A more specific identifier of the type of content for which the settings should be retrieved.  */
        resourceIdentifier?: ResourceIdentifier | undefined;
        /** Optional. Whether to check the content settings for an incognito session. (default false)  */
        incognito?: boolean | undefined;
        /** The primary URL for which the content setting should be retrieved. Note that the meaning of a primary URL depends on the content type. */
        primaryUrl: string;
    }

    export interface ReturnedDetails {
        /** The content setting. See the description of the individual ContentSetting objects for the possible values. */
        setting: DefaultContentSettingDetails;
    }

    export interface ContentSetting {
        /**
         * Clear all content setting rules set by this extension.
         */
        clear(details: ClearDetails, callback?: () => void): void;
        /**
         * Applies a new content setting rule.
         */
        set(details: SetDetails, callback?: () => void): void;
        getResourceIdentifiers(
            callback: (
                /**
                 * A list of resource identifiers for this content type, or undefined if this content type does not use resource identifiers.
                 */
                resourceIdentifiers?: ResourceIdentifier[],
            ) => void,
        ): void;
        /**
         * Gets the current content setting for a given pair of URLs.
         */
        get(details: GetDetails, callback: (details: ReturnedDetails) => void): void;
    }

    export interface CookieContentSetting extends ContentSetting {
        set(details: CookieSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: CookieSetDetails) => void): void;
    }

    export interface PopupsContentSetting extends ContentSetting {
        set(details: PopupsSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: PopupsSetDetails) => void): void;
    }

    export interface JavascriptContentSetting extends ContentSetting {
        set(details: JavascriptSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: JavascriptSetDetails) => void): void;
    }

    export interface NotificationsContentSetting extends ContentSetting {
        set(details: NotificationsSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: NotificationsSetDetails) => void): void;
    }

    export interface PluginsContentSetting extends ContentSetting {
        set(details: PluginsSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: PluginsSetDetails) => void): void;
    }

    export interface ImagesContentSetting extends ContentSetting {
        set(details: ImagesSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: ImagesSetDetails) => void): void;
    }

    export interface LocationContentSetting extends ContentSetting {
        set(details: LocationSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: LocationSetDetails) => void): void;
    }

    export interface FullscreenContentSetting extends ContentSetting {
        set(details: FullscreenSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: FullscreenSetDetails) => void): void;
    }

    export interface MouselockContentSetting extends ContentSetting {
        set(details: MouselockSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: MouselockSetDetails) => void): void;
    }

    export interface MicrophoneContentSetting extends ContentSetting {
        set(details: MicrophoneSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: MicrophoneSetDetails) => void): void;
    }

    export interface CameraContentSetting extends ContentSetting {
        set(details: CameraSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: CameraSetDetails) => void): void;
    }

    export interface PpapiBrokerContentSetting extends ContentSetting {
        set(details: PpapiBrokerSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: PpapiBrokerSetDetails) => void): void;
    }

    export interface MultipleAutomaticDownloadsContentSetting extends ContentSetting {
        set(details: MultipleAutomaticDownloadsSetDetails, callback?: () => void): void;
        get(details: GetDetails, callback: (details: MultipleAutomaticDownloadsSetDetails) => void): void;
    }

    /** The only content type using resource identifiers is contentSettings.plugins. For more information, see Resource Identifiers. */
    export interface ResourceIdentifier {
        /** The resource identifier for the given content type. */
        id: string;
        /** Optional. A human readable description of the resource.  */
        description?: string | undefined;
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
 * Use the chrome.contextMenus API to add items to Google Chrome's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.
 * Availability: Since Chrome 6.
 * Permissions:  "contextMenus"
 */
declare namespace chrome.contextMenus {
    export interface OnClickData {
        /**
         * Optional.
         * Since Chrome 35.
         * The text for the context selection, if any.
         */
        selectionText?: string | undefined;
        /**
         * Optional.
         * Since Chrome 35.
         * A flag indicating the state of a checkbox or radio item after it is clicked.
         */
        checked?: boolean | undefined;
        /**
         * Since Chrome 35.
         * The ID of the menu item that was clicked.
         */
        menuItemId: number | string;
        /**
         * Optional.
         * Since Chrome 35.
         * The ID of the frame of the element where the context menu was
         * clicked, if it was in a frame.
         */
        frameId?: number | undefined;
        /**
         * Optional.
         * Since Chrome 35.
         * The URL of the frame of the element where the context menu was clicked, if it was in a frame.
         */
        frameUrl?: string | undefined;
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
        mediaType?: "image" | "video" | "audio" | undefined;
        /**
         * Optional.
         * Since Chrome 35.
         * A flag indicating the state of a checkbox or radio item before it was clicked.
         */
        wasChecked?: boolean | undefined;
        /**
         * Since Chrome 35.
         * The URL of the page where the menu item was clicked. This property is not set if the click occurred in a context where there is no current page, such as in a launcher context menu.
         */
        pageUrl: string;
        /**
         * Optional.
         * Since Chrome 35.
         * If the element is a link, the URL it points to.
         */
        linkUrl?: string | undefined;
        /**
         * Optional.
         * Since Chrome 35.
         * The parent ID, if any, for the item clicked.
         */
        parentMenuItemId?: number | string;
        /**
         * Optional.
         * Since Chrome 35.
         * Will be present for elements with a 'src' URL.
         */
        srcUrl?: string | undefined;
    }

    type ContextType =
        | "all"
        | "page"
        | "frame"
        | "selection"
        | "link"
        | "editable"
        | "image"
        | "video"
        | "audio"
        | "launcher"
        | "browser_action"
        | "page_action"
        | "action";

    type ContextItemType = "normal" | "checkbox" | "radio" | "separator";

    export interface CreateProperties {
        /** Optional. Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see Match Patterns.  */
        documentUrlPatterns?: string[] | undefined;
        /** Optional. The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items.  */
        checked?: boolean | undefined;
        /** Optional. The text to be displayed in the item; this is required unless type is 'separator'. When the context is 'selection', you can use %s within the string to show the selected text. For example, if this parameter's value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the selection is "Translate 'cool' to Pig Latin".  */
        title?: string | undefined;
        /** Optional. List of contexts this menu item will appear in. Defaults to ['page'] if not specified.  */
        contexts?: ContextType | ContextType[] | undefined;
        /**
         * Optional.
         * Since Chrome 20.
         * Whether this context menu item is enabled or disabled. Defaults to true.
         */
        enabled?: boolean | undefined;
        /** Optional. Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.  */
        targetUrlPatterns?: string[] | undefined;
        /**
         * Optional.
         * A function that will be called back when the menu item is clicked. Event pages cannot use this; instead, they should register a listener for chrome.contextMenus.onClicked.
         * @param info Information sent when a context menu item is clicked.
         * @param tab The details of the tab where the click took place. Note: this parameter only present for extensions.
         */
        onclick?: ((info: OnClickData, tab: chrome.tabs.Tab) => void) | undefined;
        /** Optional. The ID of a parent menu item; this makes the item a child of a previously added item.  */
        parentId?: number | string | undefined;
        /** Optional. The type of menu item. Defaults to 'normal' if not specified.  */
        type?: ContextItemType | undefined;
        /**
         * Optional.
         * Since Chrome 21.
         * The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension.
         */
        id?: string | undefined;
        /**
         * Optional.
         * Since Chrome 62.
         * Whether the item is visible in the menu.
         */
        visible?: boolean | undefined;
    }

    export interface UpdateProperties {
        documentUrlPatterns?: string[] | undefined;
        checked?: boolean | undefined;
        title?: string | undefined;
        contexts?: ContextType[] | undefined;
        /** Optional. Since Chrome 20.  */
        enabled?: boolean | undefined;
        targetUrlPatterns?: string[] | undefined;
        onclick?: Function | undefined;
        /** Optional. Note: You cannot change an item to be a child of one of its own descendants.  */
        parentId?: number | string;
        type?: ContextItemType | undefined;
        /**
         * Optional.
         * @since Chrome 62.
         * Whether the item is visible in the menu.
         */
        visible?: boolean | undefined;
    }

    export interface MenuClickedEvent extends chrome.events.Event<(info: OnClickData, tab?: chrome.tabs.Tab) => void> {}

    /**
     * Since Chrome 38.
     * The maximum number of top level extension items that can be added to an extension action context menu. Any items beyond this limit will be ignored.
     */
    export var ACTION_MENU_TOP_LEVEL_LIMIT: number;

    /**
     * Removes all context menu items added by this extension.
     * @param callback Called when removal is complete.
     */
    export function removeAll(callback?: () => void): void;
    /**
     * Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in chrome.runtime.lastError).
     * @param callback Called when the item has been created in the browser. If there were any problems creating the item, details will be available in chrome.runtime.lastError.
     * @return The ID of the newly created item.
     */
    export function create(createProperties: CreateProperties, callback?: () => void): number | string;
    /**
     * Updates a previously created context menu item.
     * @param id The ID of the item to update.
     * @param updateProperties The properties to update. Accepts the same values as the create function.
     * @param callback Called when the context menu has been updated.
     */
    export function update(id: string | number, updateProperties: UpdateProperties, callback?: () => void): void;
    /**
     * Removes a context menu item.
     * @param menuItemId The ID of the context menu item to remove.
     * @param callback Called when the context menu has been removed.
     */
    export function remove(menuItemId: string | number, callback?: () => void): void;

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
 * Use the chrome.cookies API to query and modify cookies, and to be notified when they change.
 * Availability: Since Chrome 6.
 * Permissions:  "cookies", host permissions
 */
declare namespace chrome.cookies {
    /** A cookie's 'SameSite' state (https://tools.ietf.org/html/draft-west-first-party-cookies). 'no_restriction' corresponds to a cookie set with 'SameSite=None', 'lax' to 'SameSite=Lax', and 'strict' to 'SameSite=Strict'. 'unspecified' corresponds to a cookie set without the SameSite attribute. **/
    export type SameSiteStatus = "unspecified" | "no_restriction" | "lax" | "strict";

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
        expirationDate?: number | undefined;
        /** The path of the cookie. */
        path: string;
        /** True if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to client-side scripts). */
        httpOnly: boolean;
        /** True if the cookie is marked as Secure (i.e. its scope is limited to secure channels, typically HTTPS). */
        secure: boolean;
        /**
         * The cookie's same-site status (i.e. whether the cookie is sent with cross-site requests).
         * @since Chrome 51.
         */
        sameSite: SameSiteStatus;
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
        domain?: string | undefined;
        /** Optional. Filters the cookies by name.  */
        name?: string | undefined;
        /** Optional. Restricts the retrieved cookies to those that would match the given URL.  */
        url?: string | undefined;
        /** Optional. The cookie store to retrieve cookies from. If omitted, the current execution context's cookie store will be used.  */
        storeId?: string | undefined;
        /** Optional. Filters out session vs. persistent cookies.  */
        session?: boolean | undefined;
        /** Optional. Restricts the retrieved cookies to those whose path exactly matches this string.  */
        path?: string | undefined;
        /** Optional. Filters the cookies by their Secure property.  */
        secure?: boolean | undefined;
    }

    export interface SetDetails {
        /** Optional. The domain of the cookie. If omitted, the cookie becomes a host-only cookie.  */
        domain?: string | undefined;
        /** Optional. The name of the cookie. Empty by default if omitted.  */
        name?: string | undefined;
        /** The request-URI to associate with the setting of the cookie. This value can affect the default domain and path values of the created cookie. If host permissions for this URL are not specified in the manifest file, the API call will fail. */
        url: string;
        /** Optional. The ID of the cookie store in which to set the cookie. By default, the cookie is set in the current execution context's cookie store.  */
        storeId?: string | undefined;
        /** Optional. The value of the cookie. Empty by default if omitted.  */
        value?: string | undefined;
        /** Optional. The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted, the cookie becomes a session cookie.  */
        expirationDate?: number | undefined;
        /** Optional. The path of the cookie. Defaults to the path portion of the url parameter.  */
        path?: string | undefined;
        /** Optional. Whether the cookie should be marked as HttpOnly. Defaults to false.  */
        httpOnly?: boolean | undefined;
        /** Optional. Whether the cookie should be marked as Secure. Defaults to false.  */
        secure?: boolean | undefined;
        /**
         * Optional. The cookie's same-site status. Defaults to "unspecified", i.e., if omitted, the cookie is set without specifying a SameSite attribute.
         * @since Chrome 51.
         */
        sameSite?: SameSiteStatus | undefined;
    }

    export interface Details {
        name: string;
        url: string;
        storeId?: string | undefined;
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

    export interface CookieChangedEvent extends chrome.events.Event<(changeInfo: CookieChangeInfo) => void> {}

    /**
     * Lists all existing cookie stores.
     * Parameter cookieStores: All the existing cookie stores.
     */
    export function getAllCookieStores(callback: (cookieStores: CookieStore[]) => void): void;
    /**
     * Lists all existing cookie stores.
     * @return The `getAllCookieStores` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAllCookieStores(): Promise<CookieStore[]>;
    /**
     * Retrieves all cookies from a single cookie store that match the given information. The cookies returned will be sorted, with those with the longest path first. If multiple cookies have the same path length, those with the earliest creation time will be first.
     * @param details Information to filter the cookies being retrieved.
     * Parameter cookies: All the existing, unexpired cookies that match the given cookie info.
     */
    export function getAll(details: GetAllDetails, callback: (cookies: Cookie[]) => void): void;
    /**
     * Retrieves all cookies from a single cookie store that match the given information. The cookies returned will be sorted, with those with the longest path first. If multiple cookies have the same path length, those with the earliest creation time will be first.
     * @param details Information to filter the cookies being retrieved.
     * @return The `getAll` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAll(details: GetAllDetails): Promise<Cookie[]>;
    /**
     * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
     * @param details Details about the cookie being set.
     * @return The `set` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function set(details: SetDetails): Promise<Cookie | null>;
    /**
     * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
     * @param details Details about the cookie being set.
     * Optional parameter cookie: Contains details about the cookie that's been set. If setting failed for any reason, this will be "null", and "chrome.runtime.lastError" will be set.
     */
    export function set(details: SetDetails, callback: (cookie: Cookie | null) => void): void;
    /**
     * Deletes a cookie by name.
     * @param details Information to identify the cookie to remove.
     * @return The `remove` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function remove(details: Details): Promise<Details>;
    /**
     * Deletes a cookie by name.
     * @param details Information to identify the cookie to remove.
     */
    export function remove(details: Details, callback?: (details: Details) => void): void;
    /**
     * Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL, the one with the longest path will be returned. For cookies with the same path length, the cookie with the earliest creation time will be returned.
     * @param details Details to identify the cookie being retrieved.
     * Parameter cookie: Contains details about the cookie. This parameter is null if no such cookie was found.
     */
    export function get(details: Details, callback: (cookie: Cookie | null) => void): void;
    /**
     * Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL, the one with the longest path will be returned. For cookies with the same path length, the cookie with the earliest creation time will be returned.
     * @param details Details to identify the cookie being retrieved.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(details: Details): Promise<Cookie | null>;

    /** Fired when a cookie is set or removed. As a special case, note that updating a cookie's properties is implemented as a two step process: the cookie to be updated is first removed entirely, generating a notification with "cause" of "overwrite" . Afterwards, a new cookie is written with the updated values, generating a second notification with "cause" "explicit". */
    export var onChanged: CookieChangedEvent;
}

////////////////////
// Debugger
////////////////////
/**
 * The chrome.debugger API serves as an alternate transport for Chrome's remote debugging protocol. Use chrome.debugger to attach to one or more tabs to instrument network interaction, debug JavaScript, mutate the DOM and CSS, etc. Use the Debuggee tabId to target tabs with sendCommand and route events by tabId from onEvent callbacks.
 * Availability: Since Chrome 18.
 * Permissions:  "debugger"
 */
declare namespace chrome {
    namespace _debugger {
        /** Debuggee identifier. Either tabId or extensionId must be specified */
        export interface Debuggee {
            /** Optional. The id of the tab which you intend to debug.  */
            tabId?: number | undefined;
            /**
             * Optional.
             * Since Chrome 27.
             * The id of the extension which you intend to debug. Attaching to an extension background page is only possible when 'silent-debugger-extension-api' flag is enabled on the target browser.
             */
            extensionId?: string | undefined;
            /**
             * Optional.
             * Since Chrome 28.
             * The opaque id of the debug target.
             */
            targetId?: string | undefined;
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
            tabId?: number | undefined;
            /**
             * Optional.
             * Since Chrome 30.
             * The extension id, defined if type = 'background_page'.
             */
            extensionId?: string | undefined;
            /** True if debugger is already attached. */
            attached: boolean;
            /** Target page title. */
            title: string;
            /** Target URL. */
            url: string;
            /** Optional. Target favicon URL.  */
            faviconUrl?: string | undefined;
        }

        export interface DebuggerDetachedEvent
            extends chrome.events.Event<(source: Debuggee, reason: string) => void>
        {}

        export interface DebuggerEventEvent
            extends chrome.events.Event<(source: Debuggee, method: string, params?: Object) => void>
        {}

        /**
         * Attaches debugger to the given target.
         * @param target Debugging target to which you want to attach.
         * @param requiredVersion Required debugging protocol version ("0.1"). One can only attach to the debuggee with matching major version and greater or equal minor version. List of the protocol versions can be obtained in the documentation pages.
         * @return The `attach` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
         */
        export function attach(target: Debuggee, requiredVersion: string): Promise<void>;
        /**
         * Attaches debugger to the given target.
         * @param target Debugging target to which you want to attach.
         * @param requiredVersion Required debugging protocol version ("0.1"). One can only attach to the debuggee with matching major version and greater or equal minor version. List of the protocol versions can be obtained in the documentation pages.
         * @param callback Called once the attach operation succeeds or fails. If the attach fails, runtime.lastError will be set to the error message.
         */
        export function attach(target: Debuggee, requiredVersion: string, callback: () => void): void;
        /**
         * Detaches debugger from the given target.
         * @param target Debugging target from which you want to detach.
         * @return The `detach` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
         */
        export function detach(target: Debuggee): Promise<void>;
        /**
         * Detaches debugger from the given target.
         * @param target Debugging target from which you want to detach.
         * @param callback Called once the detach operation succeeds or fails. If the detach fails, runtime.lastError will be set to the error message.
         */
        export function detach(target: Debuggee, callback: () => void): void;
        /**
         * Sends given command to the debugging target.
         * @param target Debugging target to which you want to send the command.
         * @param method Method name. Should be one of the methods defined by the remote debugging protocol.
         * @param commandParams Since Chrome 22.
         * JSON object with request parameters. This object must conform to the remote debugging params scheme for given method.
         * @return The `sendCommand` method provides its result via callback or returned as a `Promise` (MV3 only).
         */
        export function sendCommand(
            target: Debuggee,
            method: string,
            commandParams?: Object,
        ): Promise<Object>;
        /**
         * Sends given command to the debugging target.
         * @param target Debugging target to which you want to send the command.
         * @param method Method name. Should be one of the methods defined by the remote debugging protocol.
         * @param commandParams Since Chrome 22.
         * JSON object with request parameters. This object must conform to the remote debugging params scheme for given method.
         * @param callback Response body. If an error occurs while posting the message, the callback will be called with no arguments and runtime.lastError will be set to the error message.
         */
        export function sendCommand(
            target: Debuggee,
            method: string,
            commandParams?: Object,
            callback?: (result?: Object) => void,
        ): void;
        /**
         * Since Chrome 28.
         * Returns the list of available debug targets.
         * @return The `getTargets` method provides its result via callback or returned as a `Promise` (MV3 only).
         */
        export function getTargets(): Promise<TargetInfo[]>;
        /**
         * Since Chrome 28.
         * Returns the list of available debug targets.
         * Parameter result: Array of TargetInfo objects corresponding to the available debug targets.
         */
        export function getTargets(callback: (result: TargetInfo[]) => void): void;

        /** Fired when browser terminates debugging session for the tab. This happens when either the tab is being closed or Chrome DevTools is being invoked for the attached tab. */
        export var onDetach: DebuggerDetachedEvent;
        /** Fired whenever debugging target issues instrumentation event. */
        export var onEvent: DebuggerEventEvent;
    }

    export { _debugger as debugger };
}
////////////////////
// Declarative Content
////////////////////
/**
 * Use the chrome.declarativeContent API to take actions depending on the content of a page, without requiring permission to read the page's content.
 * Availability: Since Chrome 33.
 * Permissions:  "declarativeContent"
 */
declare namespace chrome.declarativeContent {
    export interface PageStateUrlDetails {
        /** Optional. Matches if the host name of the URL contains a specified string. To test whether a host name component has a prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the beginning of the host name. Similarly, hostContains can be used to match against component suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last components need to be done separately using hostSuffix, because no implicit dot is added at the end of the host name.  */
        hostContains?: string | undefined;
        /** Optional. Matches if the host name of the URL is equal to a specified string.  */
        hostEquals?: string | undefined;
        /** Optional. Matches if the host name of the URL starts with a specified string.  */
        hostPrefix?: string | undefined;
        /** Optional. Matches if the host name of the URL ends with a specified string.  */
        hostSuffix?: string | undefined;
        /** Optional. Matches if the path segment of the URL contains a specified string.  */
        pathContains?: string | undefined;
        /** Optional. Matches if the path segment of the URL is equal to a specified string.  */
        pathEquals?: string | undefined;
        /** Optional. Matches if the path segment of the URL starts with a specified string.  */
        pathPrefix?: string | undefined;
        /** Optional. Matches if the path segment of the URL ends with a specified string.  */
        pathSuffix?: string | undefined;
        /** Optional. Matches if the query segment of the URL contains a specified string.  */
        queryContains?: string | undefined;
        /** Optional. Matches if the query segment of the URL is equal to a specified string.  */
        queryEquals?: string | undefined;
        /** Optional. Matches if the query segment of the URL starts with a specified string.  */
        queryPrefix?: string | undefined;
        /** Optional. Matches if the query segment of the URL ends with a specified string.  */
        querySuffix?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlContains?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlEquals?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.  */
        urlMatches?: string | undefined;
        /** Optional. Matches if the URL without query segment and fragment identifier matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.  */
        originAndPathMatches?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlPrefix?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlSuffix?: string | undefined;
        /** Optional. Matches if the scheme of the URL is equal to any of the schemes specified in the array.  */
        schemes?: string[] | undefined;
        /** Optional. Matches if the port of the URL is contained in any of the specified port lists. For example [80, 443, [1000, 1200]] matches all requests on port 80, 443 and in the range 1000-1200.  */
        ports?: (number | number[])[] | undefined;
    }

    export class PageStateMatcherProperties {
        /** Optional. Filters URLs for various criteria. See event filtering. All criteria are case sensitive.  */
        pageUrl?: PageStateUrlDetails | undefined;
        /** Optional. Matches if all of the CSS selectors in the array match displayed elements in a frame with the same origin as the page's main frame. All selectors in this array must be compound selectors to speed up matching. Note that listing hundreds of CSS selectors or CSS selectors that match hundreds of times per page can still slow down web sites.  */
        css?: string[] | undefined;
        /**
         * Optional.
         * Since Chrome 45. Warning: this is the current Beta channel. More information available on the API documentation pages.
         * Matches if the bookmarked state of the page is equal to the specified value. Requires the bookmarks permission.
         */
        isBookmarked?: boolean | undefined;
    }

    /** Matches the state of a web page by various criteria. */
    export class PageStateMatcher {
        constructor(options: PageStateMatcherProperties);
    }

    /**
     * Declarative event action that enables the extension's action while the corresponding conditions are met.
     * Manifest v3.
     */
    export class ShowAction {}

    /**
     * Declarative event action that shows the extension's page action while the corresponding conditions are met.
     * Manifest v2.
     */
    export class ShowPageAction {}

    /** Declarative event action that changes the icon of the page action while the corresponding conditions are met. */
    export class SetIcon {
        constructor(options?: { imageData?: ImageData | { [size: string]: ImageData } | undefined });
    }

    /** Provides the Declarative Event API consisting of addRules, removeRules, and getRules. */
    export interface PageChangedEvent extends chrome.events.Event<() => void> {}

    export var onPageChanged: PageChangedEvent;
}

////////////////////
// Declarative Web Request
////////////////////
declare namespace chrome.declarativeWebRequest {
    export interface HeaderFilter {
        nameEquals?: string | undefined;
        valueContains?: string | string[] | undefined;
        nameSuffix?: string | undefined;
        valueSuffix?: string | undefined;
        valuePrefix?: string | undefined;
        nameContains?: string | string[] | undefined;
        valueEquals?: string | undefined;
        namePrefix?: string | undefined;
    }

    export interface AddResponseHeader {
        name: string;
        value: string;
    }

    export interface RemoveResponseCookie {
        filter: ResponseCookie;
    }

    export interface RemoveResponseHeader {
        name: string;
        value?: string | undefined;
    }

    export interface RequestMatcher {
        contentType?: string[] | undefined;
        url?: chrome.events.UrlFilter | undefined;
        excludeContentType?: string[] | undefined;
        excludeResponseHeader?: HeaderFilter[] | undefined;
        resourceType?: string | undefined;
        responseHeaders?: HeaderFilter[] | undefined;
    }

    export interface IgnoreRules {
        lowerPriorityThan: number;
    }

    export interface RedirectToEmptyDocument {}

    export interface RedirectRequest {
        redirectUrl: string;
    }

    export interface ResponseCookie {
        domain?: string | undefined;
        name?: string | undefined;
        expires?: string | undefined;
        maxAge?: number | undefined;
        value?: string | undefined;
        path?: string | undefined;
        httpOnly?: string | undefined;
        secure?: string | undefined;
    }

    export interface AddResponseCookie {
        cookie: ResponseCookie;
    }

    export interface EditResponseCookie {
        filter: ResponseCookie;
        modification: ResponseCookie;
    }

    export interface CancelRequest {}

    export interface RemoveRequestHeader {
        name: string;
    }

    export interface EditRequestCookie {
        filter: RequestCookie;
        modification: RequestCookie;
    }

    export interface SetRequestHeader {
        name: string;
        value: string;
    }

    export interface RequestCookie {
        name?: string | undefined;
        value?: string | undefined;
    }

    export interface RedirectByRegEx {
        to: string;
        from: string;
    }

    export interface RedirectToTransparentImage {}

    export interface AddRequestCookie {
        cookie: RequestCookie;
    }

    export interface RemoveRequestCookie {
        filter: RequestCookie;
    }

    export interface RequestedEvent extends chrome.events.Event<Function> {}

    export var onRequest: RequestedEvent;
}

////////////////////
// DesktopCapture
////////////////////
/**
 * Desktop Capture API that can be used to capture content of screen, individual windows or tabs.
 * Availability: Since Chrome 34.
 * Permissions:  "desktopCapture"
 */
declare namespace chrome.desktopCapture {
    /** Contains properties that describe the stream. */
    export interface StreamOptions {
        /** True if "audio" is included in parameter sources, and the end user does not uncheck the "Share audio" checkbox. Otherwise false, and in this case, one should not ask for audio stream through getUserMedia call. */
        canRequestAudioTrack: boolean;
    }
    /**
     * Shows desktop media picker UI with the specified set of sources.
     * @param sources Set of sources that should be shown to the user.
     * Parameter streamId: An opaque string that can be passed to getUserMedia() API to generate media stream that corresponds to the source selected by the user. If user didn't select any source (i.e. canceled the prompt) then the callback is called with an empty streamId. The created streamId can be used only once and expires after a few seconds when it is not used.
     */
    export function chooseDesktopMedia(
        sources: string[],
        callback: (streamId: string, options: StreamOptions) => void,
    ): number;
    /**
     * Shows desktop media picker UI with the specified set of sources.
     * @param sources Set of sources that should be shown to the user.
     * @param targetTab Optional tab for which the stream is created. If not specified then the resulting stream can be used only by the calling extension. The stream can only be used by frames in the given tab whose security origin matches tab.url.
     * Parameter streamId: An opaque string that can be passed to getUserMedia() API to generate media stream that corresponds to the source selected by the user. If user didn't select any source (i.e. canceled the prompt) then the callback is called with an empty streamId. The created streamId can be used only once and expires after a few seconds when it is not used.
     */
    export function chooseDesktopMedia(
        sources: string[],
        targetTab: chrome.tabs.Tab,
        callback: (streamId: string, options: StreamOptions) => void,
    ): number;
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
declare namespace chrome.devtools.inspectedWindow {
    /** A resource within the inspected page, such as a document, a script, or an image. */
    export interface Resource {
        /** The URL of the resource. */
        url: string;
        /**
         * Gets the content of the resource.
         * @param callback A function that receives resource content when the request completes.
         */
        getContent(
            callback: (
                /** Content of the resource (potentially encoded) */
                content: string,
                /** Empty if content is not encoded, encoding name otherwise. Currently, only base64 is supported. */
                encoding: string,
            ) => void,
        ): void;
        /**
         * Sets the content of the resource.
         * @param content New content of the resource. Only resources with the text type are currently supported.
         * @param commit True if the user has finished editing the resource, and the new content of the resource should be persisted; false if this is a minor change sent in progress of the user editing the resource.
         * @param callback A function called upon request completion.
         */
        setContent(
            content: string,
            commit: boolean,
            callback?: (
                /**
                 * Set to undefined if the resource content was set successfully; describes error otherwise.
                 */
                error?: Object,
            ) => void,
        ): void;
    }

    export interface ReloadOptions {
        /** Optional. If specified, the string will override the value of the User-Agent HTTP header that's sent while loading the resources of the inspected page. The string will also override the value of the navigator.userAgent property that's returned to any scripts that are running within the inspected page.  */
        userAgent?: string | undefined;
        /** Optional. When true, the loader will ignore the cache for all inspected page resources loaded before the load event is fired. The effect is similar to pressing Ctrl+Shift+R in the inspected window or within the Developer Tools window.  */
        ignoreCache?: boolean | undefined;
        /** Optional. If specified, the script will be injected into every frame of the inspected page immediately upon load, before any of the frame's scripts. The script will not be injected after subsequent reloads—for example, if the user presses Ctrl+R.  */
        injectedScript?: string | undefined;
        /**
         * Optional.
         * If specified, this script evaluates into a function that accepts three string arguments: the source to preprocess, the URL of the source, and a function name if the source is an DOM event handler. The preprocessorerScript function should return a string to be compiled by Chrome in place of the input source. In the case that the source is a DOM event handler, the returned source must compile to a single JS function.
         * @deprecated Deprecated since Chrome 41. Please avoid using this parameter, it will be removed soon.
         */
        preprocessorScript?: string | undefined;
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

    export interface ResourceAddedEvent extends chrome.events.Event<(resource: Resource) => void> {}

    export interface ResourceContentCommittedEvent
        extends chrome.events.Event<(resource: Resource, content: string) => void>
    {}

    /** The ID of the tab being inspected. This ID may be used with chrome.tabs.* API. */
    export var tabId: number;

    /** Reloads the inspected page. */
    export function reload(reloadOptions?: ReloadOptions): void;
    /**
     * Evaluates a JavaScript expression in the context of the main frame of the inspected page. The expression must evaluate to a JSON-compliant object, otherwise an exception is thrown. The eval function can report either a DevTools-side error or a JavaScript exception that occurs during evaluation. In either case, the result parameter of the callback is undefined. In the case of a DevTools-side error, the isException parameter is non-null and has isError set to true and code set to an error code. In the case of a JavaScript error, isException is set to true and value is set to the string value of thrown object.
     * @param expression An expression to evaluate.
     * @param callback A function called when evaluation completes.
     * Parameter result: The result of evaluation.
     * Parameter exceptionInfo: An object providing details if an exception occurred while evaluating the expression.
     */
    export function eval<T>(
        expression: string,
        callback?: (result: T, exceptionInfo: EvaluationExceptionInfo) => void,
    ): void;
    /**
     * Evaluates a JavaScript expression in the context of the main frame of the inspected page. The expression must evaluate to a JSON-compliant object, otherwise an exception is thrown. The eval function can report either a DevTools-side error or a JavaScript exception that occurs during evaluation. In either case, the result parameter of the callback is undefined. In the case of a DevTools-side error, the isException parameter is non-null and has isError set to true and code set to an error code. In the case of a JavaScript error, isException is set to true and value is set to the string value of thrown object.
     * @param expression An expression to evaluate.
     * @param options The options parameter can contain one or more options.
     * @param callback A function called when evaluation completes.
     * Parameter result: The result of evaluation.
     * Parameter exceptionInfo: An object providing details if an exception occurred while evaluating the expression.
     */
    export function eval<T>(
        expression: string,
        options?: EvalOptions,
        callback?: (result: T, exceptionInfo: EvaluationExceptionInfo) => void,
    ): void;
    /**
     * Retrieves the list of resources from the inspected page.
     * @param callback A function that receives the list of resources when the request completes.
     */
    export function getResources(callback: (resources: Resource[]) => void): void;

    /** Fired when a new resource is added to the inspected page. */
    export var onResourceAdded: ResourceAddedEvent;
    /** Fired when a new revision of the resource is committed (e.g. user saves an edited version of the resource in the Developer Tools). */
    export var onResourceContentCommitted: ResourceContentCommittedEvent;

    export interface EvalOptions {
        /** If specified, the expression is evaluated on the iframe whose URL matches the one specified. By default, the expression is evaluated in the top frame of the inspected page. */
        frameURL?: string | undefined;
        /** Evaluate the expression in the context of the content script of the calling extension, provided that the content script is already injected into the inspected page. If not, the expression is not evaluated and the callback is invoked with the exception parameter set to an object that has the isError field set to true and the code field set to E_NOTFOUND. */
        useContentScriptContext?: boolean | undefined;
        /** Evaluate the expression in the context of a content script of an extension that matches the specified origin. If given, contextSecurityOrigin overrides the 'true' setting on userContentScriptContext. */
        contextSecurityOrigin?: string | undefined;
    }
}

////////////////////
// Dev Tools - Network
////////////////////
/**
 * Use the chrome.devtools.network API to retrieve the information about network requests displayed by the Developer Tools in the Network panel.
 * Availability: Since Chrome 18.
 */
declare namespace chrome.devtools.network {
    /** Represents a HAR entry for a specific finished request. */
    export interface HAREntry extends HARFormatEntry {}
    /** Represents a HAR log that contains all known network requests. */
    export interface HARLog extends HARFormatLog {}
    /** Represents a network request for a document resource (script, image and so on). See HAR Specification for reference. */
    export interface Request extends chrome.devtools.network.HAREntry {
        /**
         * Returns content of the response body.
         * @param callback A function that receives the response body when the request completes.
         */
        getContent(
            callback: (
                /** Content of the response body (potentially encoded) */
                content: string,
                /** Empty if content is not encoded, encoding name otherwise. Currently, only base64 is supported */
                encoding: string,
            ) => void,
        ): void;
    }

    export interface RequestFinishedEvent extends chrome.events.Event<(request: Request) => void> {}

    export interface NavigatedEvent extends chrome.events.Event<(url: string) => void> {}

    /**
     * Returns HAR log that contains all known network requests.
     * @param callback A function that receives the HAR log when the request completes.
     * Parameter harLog: A HAR log. See HAR specification for details.
     */
    export function getHAR(callback: (harLog: HARLog) => void): void;

    /** Fired when a network request is finished and all request data are available. */
    export var onRequestFinished: RequestFinishedEvent;
    /** Fired when the inspected window navigates to a new page. */
    export var onNavigated: NavigatedEvent;
}

////////////////////
// Dev Tools - Panels
////////////////////
/**
 * Use the chrome.devtools.panels API to integrate your extension into Developer Tools window UI: create your own panels, access existing panels, and add sidebars.
 * Availability: Since Chrome 18.
 */
declare namespace chrome.devtools.panels {
    export interface PanelShownEvent extends chrome.events.Event<(window: Window) => void> {}

    export interface PanelHiddenEvent extends chrome.events.Event<() => void> {}

    export interface PanelSearchEvent extends chrome.events.Event<(action: string, queryString?: string) => void> {}

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

    export interface ButtonClickedEvent extends chrome.events.Event<() => void> {}

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

    export interface SelectionChangedEvent extends chrome.events.Event<() => void> {}

    /** Represents the Elements panel. */
    export interface ElementsPanel {
        /**
         * Creates a pane within panel's sidebar.
         * @param title Text that is displayed in sidebar caption.
         * @param callback A callback invoked when the sidebar is created.
         */
        createSidebarPane(
            title: string,
            callback?: (
                /** An ExtensionSidebarPane object for created sidebar pane */
                result: ExtensionSidebarPane,
            ) => void,
        ): void;
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
         */
        createSidebarPane(
            title: string,
            callback?: (
                /** An ExtensionSidebarPane object for created sidebar pane. */
                result: ExtensionSidebarPane,
            ) => void,
        ): void;
        /** Fired when an object is selected in the panel. */
        onSelectionChanged: SelectionChangedEvent;
    }

    export interface ExtensionSidebarPaneShownEvent
        extends chrome.events.Event<(window: chrome.windows.Window) => void>
    {}

    export interface ExtensionSidebarPaneHiddenEvent extends chrome.events.Event<() => void> {}

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
         */
        setExpression(expression: string, rootTitle?: string, callback?: () => void): void;
        /**
         * Sets an expression that is evaluated within the inspected page. The result is displayed in the sidebar pane.
         * @param expression An expression to be evaluated in context of the inspected page. JavaScript objects and DOM nodes are displayed in an expandable tree similar to the console/watch.
         * @param callback A callback invoked after the sidebar pane is updated with the expression evaluation results.
         */
        setExpression(expression: string, callback?: () => void): void;
        /**
         * Sets a JSON-compliant object to be displayed in the sidebar pane.
         * @param jsonObject An object to be displayed in context of the inspected page. Evaluated in the context of the caller (API client).
         * @param rootTitle An optional title for the root of the expression tree.
         * @param callback A callback invoked after the sidebar is updated with the object.
         */
        setObject(jsonObject: Object, rootTitle?: string, callback?: () => void): void;
        /**
         * Sets a JSON-compliant object to be displayed in the sidebar pane.
         * @param jsonObject An object to be displayed in context of the inspected page. Evaluated in the context of the caller (API client).
         * @param callback A callback invoked after the sidebar is updated with the object.
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
     * Parameter panel: An ExtensionPanel object representing the created panel.
     */
    export function create(
        title: string,
        iconPath: string,
        pagePath: string,
        callback?: (panel: ExtensionPanel) => void,
    ): void;
    /**
     * Specifies the function to be called when the user clicks a resource link in the Developer Tools window. To unset the handler, either call the method with no parameters or pass null as the parameter.
     * @param callback A function that is called when the user clicks on a valid resource link in Developer Tools window. Note that if the user clicks an invalid URL or an XHR, this function is not called.
     * Parameter resource: A devtools.inspectedWindow.Resource object for the resource that was clicked.
     */
    export function setOpenResourceHandler(
        callback?: (resource: chrome.devtools.inspectedWindow.Resource) => void,
    ): void;
    /**
     * Since Chrome 38.
     * Requests DevTools to open a URL in a Developer Tools panel.
     * @param url The URL of the resource to open.
     * @param lineNumber Specifies the line number to scroll to when the resource is loaded.
     * @param callback A function that is called when the resource has been successfully loaded.
     */
    export function openResource(url: string, lineNumber: number, callback?: () => void): void;
    /**
     * Since Chrome 96.
     * Requests DevTools to open a URL in a Developer Tools panel.
     * @param url The URL of the resource to open.
     * @param lineNumber Specifies the line number to scroll to when the resource is loaded.
     * @param columnNumber Specifies the column number to scroll to when the resource is loaded.
     * @param callback A function that is called when the resource has been successfully loaded.
     */
    export function openResource(
        url: string,
        lineNumber: number,
        columnNumber: number,
        callback?: (response: unknown) => unknown,
    ): void;
    /**
     * @since Chrome 59.
     * The name of the color theme set in user's DevTools settings.
     */
    export var themeName: "default" | "dark";
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
declare namespace chrome.documentScan {
    export interface DocumentScanOptions {
        /** Optional. The MIME types that are accepted by the caller.  */
        mimeTypes?: string[] | undefined;
        /** Optional. The number of scanned images allowed (defaults to 1).  */
        maxImages?: number | undefined;
    }

    export interface DocumentScanCallbackArg {
        /** The data image URLs in a form that can be passed as the "src" value to an image tag. */
        dataUrls: string[];
        /** The MIME type of dataUrls. */
        mimeType: string;
    }

    /**
     * Performs a document scan. On success, the PNG data will be sent to the callback.
     * @param options Object containing scan parameters.
     * @param callback Called with the result and data from the scan.
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
declare namespace chrome.downloads {
    export interface HeaderNameValuePair {
        /** Name of the HTTP header. */
        name: string;
        /** Value of the HTTP header. */
        value: string;
    }

    export type FilenameConflictAction = "uniquify" | "overwrite" | "prompt";

    export interface DownloadOptions {
        /** Optional. Post body.  */
        body?: string | undefined;
        /** Optional. Use a file-chooser to allow the user to select a filename regardless of whether filename is set or already exists.  */
        saveAs?: boolean | undefined;
        /** The URL to download. */
        url: string;
        /** Optional. A file path relative to the Downloads directory to contain the downloaded file, possibly containing subdirectories. Absolute paths, empty paths, and paths containing back-references ".." will cause an error. onDeterminingFilename allows suggesting a filename after the file's MIME type and a tentative filename have been determined.  */
        filename?: string | undefined;
        /** Optional. Extra HTTP headers to send with the request if the URL uses the HTTP[s] protocol. Each header is represented as a dictionary containing the keys name and either value or binaryValue, restricted to those allowed by XMLHttpRequest.  */
        headers?: HeaderNameValuePair[] | undefined;
        /** Optional. The HTTP method to use if the URL uses the HTTP[S] protocol.  */
        method?: "GET" | "POST" | undefined;
        /** Optional. The action to take if filename already exists.  */
        conflictAction?: FilenameConflictAction | undefined;
    }

    export interface DownloadDelta {
        /** The id of the DownloadItem that changed. */
        id: number;
        /** Optional. The change in danger, if any.  */
        danger?: StringDelta | undefined;
        /** Optional. The change in url, if any.  */
        url?: StringDelta | undefined;
        /**
         * Optional. The change in finalUrl, if any.
         * @since Since Chrome 54.
         */
        finalUrl?: StringDelta | undefined;
        /** Optional. The change in totalBytes, if any.  */
        totalBytes?: DoubleDelta | undefined;
        /** Optional. The change in filename, if any.  */
        filename?: StringDelta | undefined;
        /** Optional. The change in paused, if any.  */
        paused?: BooleanDelta | undefined;
        /** Optional. The change in state, if any.  */
        state?: StringDelta | undefined;
        /** Optional. The change in mime, if any.  */
        mime?: StringDelta | undefined;
        /** Optional. The change in fileSize, if any.  */
        fileSize?: DoubleDelta | undefined;
        /** Optional. The change in startTime, if any.  */
        startTime?: StringDelta | undefined;
        /** Optional. The change in error, if any.  */
        error?: StringDelta | undefined;
        /** Optional. The change in endTime, if any.  */
        endTime?: StringDelta | undefined;
        /** Optional. The change in canResume, if any.  */
        canResume?: BooleanDelta | undefined;
        /** Optional. The change in exists, if any.  */
        exists?: BooleanDelta | undefined;
    }

    export interface BooleanDelta {
        current?: boolean | undefined;
        previous?: boolean | undefined;
    }

    /** Since Chrome 34. */
    export interface DoubleDelta {
        current?: number | undefined;
        previous?: number | undefined;
    }

    export interface StringDelta {
        current?: string | undefined;
        previous?: string | undefined;
    }

    export type DownloadInterruptReason =
        | "FILE_FAILED"
        | "FILE_ACCESS_DENIED"
        | "FILE_NO_SPACE"
        | "FILE_NAME_TOO_LONG"
        | "FILE_TOO_LARGE"
        | "FILE_VIRUS_INFECTED"
        | "FILE_TRANSIENT_ERROR"
        | "FILE_BLOCKED"
        | "FILE_SECURITY_CHECK_FAILED"
        | "FILE_TOO_SHORT"
        | "FILE_HASH_MISMATCH"
        | "FILE_SAME_AS_SOURCE"
        | "NETWORK_FAILED"
        | "NETWORK_TIMEOUT"
        | "NETWORK_DISCONNECTED"
        | "NETWORK_SERVER_DOWN"
        | "NETWORK_INVALID_REQUEST"
        | "SERVER_FAILED"
        | "SERVER_NO_RANGE"
        | "SERVER_BAD_CONTENT"
        | "SERVER_UNAUTHORIZED"
        | "SERVER_CERT_PROBLEM"
        | "SERVER_FORBIDDEN"
        | "SERVER_UNREACHABLE"
        | "SERVER_CONTENT_LENGTH_MISMATCH"
        | "SERVER_CROSS_ORIGIN_REDIRECT"
        | "USER_CANCELED"
        | "USER_SHUTDOWN"
        | "CRASH";

    export type DownloadState = "in_progress" | "interrupted" | "complete";

    export type DangerType = "file" | "url" | "content" | "uncommon" | "host" | "unwanted" | "safe" | "accepted";

    export interface DownloadItem {
        /** Number of bytes received so far from the host, without considering file compression. */
        bytesReceived: number;
        /** Indication of whether this download is thought to be safe or known to be suspicious. */
        danger: DangerType;
        /** The absolute URL that this download initiated from, before any redirects. */
        url: string;
        /**
         * The absolute URL that this download is being made from, after all redirects.
         * @since Since Chrome 54.
         */
        finalUrl: string;
        /** Number of bytes in the whole file, without considering file compression, or -1 if unknown. */
        totalBytes: number;
        /** Absolute local path. */
        filename: string;
        /** True if the download has stopped reading data from the host, but kept the connection open. */
        paused: boolean;
        /** Indicates whether the download is progressing, interrupted, or complete. */
        state: DownloadState;
        /** The file's MIME type. */
        mime: string;
        /** Number of bytes in the whole file post-decompression, or -1 if unknown. */
        fileSize: number;
        /** The time when the download began in ISO 8601 format. May be passed directly to the Date constructor: chrome.downloads.search({}, function(items){items.forEach(function(item){console.log(new Date(item.startTime))})}) */
        startTime: string;
        /** Optional. Why the download was interrupted. Several kinds of HTTP errors may be grouped under one of the errors beginning with SERVER_. Errors relating to the network begin with NETWORK_, errors relating to the process of writing the file to the file system begin with FILE_, and interruptions initiated by the user begin with USER_.  */
        error?: DownloadInterruptReason | undefined;
        /** Optional. The time when the download ended in ISO 8601 format. May be passed directly to the Date constructor: chrome.downloads.search({}, function(items){items.forEach(function(item){if (item.endTime) console.log(new Date(item.endTime))})})  */
        endTime?: string | undefined;
        /** An identifier that is persistent across browser sessions. */
        id: number;
        /** False if this download is recorded in the history, true if it is not recorded. */
        incognito: boolean;
        /** Absolute URL. */
        referrer: string;
        /** Optional. Estimated time when the download will complete in ISO 8601 format. May be passed directly to the Date constructor: chrome.downloads.search({}, function(items){items.forEach(function(item){if (item.estimatedEndTime) console.log(new Date(item.estimatedEndTime))})})  */
        estimatedEndTime?: string | undefined;
        /** True if the download is in progress and paused, or else if it is interrupted and can be resumed starting from where it was interrupted. */
        canResume: boolean;
        /** Whether the downloaded file still exists. This information may be out of date because Chrome does not automatically watch for file removal. Call search() in order to trigger the check for file existence. When the existence check completes, if the file has been deleted, then an onChanged event will fire. Note that search() does not wait for the existence check to finish before returning, so results from search() may not accurately reflect the file system. Also, search() may be called as often as necessary, but will not check for file existence any more frequently than once every 10 seconds. */
        exists: boolean;
        /** Optional. The identifier for the extension that initiated this download if this download was initiated by an extension. Does not change once it is set.  */
        byExtensionId?: string | undefined;
        /** Optional. The localized name of the extension that initiated this download if this download was initiated by an extension. May change if the extension changes its name or if the user changes their locale.  */
        byExtensionName?: string | undefined;
    }

    export interface GetFileIconOptions {
        /** Optional. * The size of the returned icon. The icon will be square with dimensions size * size pixels. The default and largest size for the icon is 32x32 pixels. The only supported sizes are 16 and 32. It is an error to specify any other size.
         */
        size?: 16 | 32 | undefined;
    }

    export interface DownloadQuery {
        /** Optional. Set elements of this array to DownloadItem properties in order to sort search results. For example, setting orderBy=['startTime'] sorts the DownloadItem by their start time in ascending order. To specify descending order, prefix with a hyphen: '-startTime'.  */
        orderBy?: string[] | undefined;
        /** Optional. Limits results to DownloadItem whose url matches the given regular expression.  */
        urlRegex?: string | undefined;
        /** Optional. Limits results to DownloadItem that ended before the time in ISO 8601 format.  */
        endedBefore?: string | undefined;
        /** Optional. Limits results to DownloadItem whose totalBytes is greater than the given integer.  */
        totalBytesGreater?: number | undefined;
        /** Optional. Indication of whether this download is thought to be safe or known to be suspicious.  */
        danger?: string | undefined;
        /** Optional. Number of bytes in the whole file, without considering file compression, or -1 if unknown.  */
        totalBytes?: number | undefined;
        /** Optional. True if the download has stopped reading data from the host, but kept the connection open.  */
        paused?: boolean | undefined;
        /** Optional. Limits results to DownloadItem whose filename matches the given regular expression.  */
        filenameRegex?: string | undefined;
        /** Optional. This array of search terms limits results to DownloadItem whose filename or url contain all of the search terms that do not begin with a dash '-' and none of the search terms that do begin with a dash.  */
        query?: string[] | undefined;
        /** Optional. Limits results to DownloadItem whose totalBytes is less than the given integer.  */
        totalBytesLess?: number | undefined;
        /** Optional. The id of the DownloadItem to query.  */
        id?: number | undefined;
        /** Optional. Number of bytes received so far from the host, without considering file compression.  */
        bytesReceived?: number | undefined;
        /** Optional. Limits results to DownloadItem that ended after the time in ISO 8601 format.  */
        endedAfter?: string | undefined;
        /** Optional. Absolute local path.  */
        filename?: string | undefined;
        /** Optional. Indicates whether the download is progressing, interrupted, or complete.  */
        state?: string | undefined;
        /** Optional. Limits results to DownloadItem that started after the time in ISO 8601 format.  */
        startedAfter?: string | undefined;
        /** Optional. The file's MIME type.  */
        mime?: string | undefined;
        /** Optional. Number of bytes in the whole file post-decompression, or -1 if unknown.  */
        fileSize?: number | undefined;
        /** Optional. The time when the download began in ISO 8601 format.  */
        startTime?: string | undefined;
        /** Optional. Absolute URL.  */
        url?: string | undefined;
        /** Optional. Limits results to DownloadItem that started before the time in ISO 8601 format.  */
        startedBefore?: string | undefined;
        /** Optional. The maximum number of matching DownloadItem returned. Defaults to 1000. Set to 0 in order to return all matching DownloadItem. See search for how to page through results.  */
        limit?: number | undefined;
        /** Optional. Why a download was interrupted.  */
        error?: number | undefined;
        /** Optional. The time when the download ended in ISO 8601 format.  */
        endTime?: string | undefined;
        /** Optional. Whether the downloaded file exists;  */
        exists?: boolean | undefined;
    }

    export interface DownloadFilenameSuggestion {
        /** The DownloadItem's new target DownloadItem.filename, as a path relative to the user's default Downloads directory, possibly containing subdirectories. Absolute paths, empty paths, and paths containing back-references ".." will be ignored. */
        filename: string;
        /** Optional. The action to take if filename already exists.  */
        conflictAction?: string | undefined;
    }

    export interface UiOptions {
        /** Enable or disable the download UI. */
        enabled: boolean;
    }

    export interface DownloadChangedEvent extends chrome.events.Event<(downloadDelta: DownloadDelta) => void> {}

    export interface DownloadCreatedEvent extends chrome.events.Event<(downloadItem: DownloadItem) => void> {}

    export interface DownloadErasedEvent extends chrome.events.Event<(downloadId: number) => void> {}

    export interface DownloadDeterminingFilenameEvent extends
        chrome.events.Event<
            (downloadItem: DownloadItem, suggest: (suggestion?: DownloadFilenameSuggestion) => void) => void
        >
    {}

    /**
     * Find DownloadItem. Set query to the empty object to get all DownloadItem. To get a specific DownloadItem, set only the id field. To page through a large number of items, set orderBy: ['-startTime'], set limit to the number of items per page, and set startedAfter to the startTime of the last item from the last page.
     * @return The `search` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function search(query: DownloadQuery): Promise<DownloadItem[]>;
    /**
     * Find DownloadItem. Set query to the empty object to get all DownloadItem. To get a specific DownloadItem, set only the id field. To page through a large number of items, set orderBy: ['-startTime'], set limit to the number of items per page, and set startedAfter to the startTime of the last item from the last page.
     */
    export function search(query: DownloadQuery, callback: (results: DownloadItem[]) => void): void;
    /**
     * Pause the download. If the request was successful the download is in a paused state. Otherwise runtime.lastError contains an error message. The request will fail if the download is not active.
     * @param downloadId The id of the download to pause.
     * @return The `pause` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function pause(downloadId: number): Promise<void>;
    /**
     * Pause the download. If the request was successful the download is in a paused state. Otherwise runtime.lastError contains an error message. The request will fail if the download is not active.
     * @param downloadId The id of the download to pause.
     * @param callback Called when the pause request is completed.
     */
    export function pause(downloadId: number, callback: () => void): void;
    /**
     * Retrieve an icon for the specified download. For new downloads, file icons are available after the onCreated event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, runtime.lastError will contain an error message.
     * @param downloadId The identifier for the download.
     * @return The `getFileIcon` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getFileIcon(downloadId: number, options?: GetFileIconOptions): Promise<string>;
    /**
     * Retrieve an icon for the specified download. For new downloads, file icons are available after the onCreated event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, runtime.lastError will contain an error message.
     * @param downloadId The identifier for the download.
     * @param callback A URL to an image that represents the download.
     */
    export function getFileIcon(downloadId: number, callback: (iconURL: string) => void): void;
    /**
     * Retrieve an icon for the specified download. For new downloads, file icons are available after the onCreated event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, runtime.lastError will contain an error message.
     * @param downloadId The identifier for the download.
     * @param callback A URL to an image that represents the download.
     */
    export function getFileIcon(
        downloadId: number,
        options: GetFileIconOptions,
        callback: (iconURL: string) => void,
    ): void;
    /**
     * Resume a paused download. If the request was successful the download is in progress and unpaused. Otherwise runtime.lastError contains an error message. The request will fail if the download is not active.
     * @param downloadId The id of the download to resume.
     * @return The `resume` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function resume(downloadId: number): Promise<void>;
    /**
     * Resume a paused download. If the request was successful the download is in progress and unpaused. Otherwise runtime.lastError contains an error message. The request will fail if the download is not active.
     * @param downloadId The id of the download to resume.
     * @param callback  Called when the resume request is completed.
     */
    export function resume(downloadId: number, callback: () => void): void;
    /**
     * Cancel a download. When callback is run, the download is cancelled, completed, interrupted or doesn't exist anymore.
     * @param downloadId The id of the download to cancel.
     * @return The `cancel` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function cancel(downloadId: number): Promise<void>;
    /**
     * Cancel a download. When callback is run, the download is cancelled, completed, interrupted or doesn't exist anymore.
     * @param downloadId The id of the download to cancel.
     * @param callback Called when the cancel request is completed.
     */
    export function cancel(downloadId: number, callback: () => void): void;
    /**
     * Download a URL. If the URL uses the HTTP[S] protocol, then the request will include all cookies currently set for its hostname. If both filename and saveAs are specified, then the Save As dialog will be displayed, pre-populated with the specified filename. If the download started successfully, callback will be called with the new DownloadItem's downloadId. If there was an error starting the download, then callback will be called with downloadId=undefined and runtime.lastError will contain a descriptive string. The error strings are not guaranteed to remain backwards compatible between releases. Extensions must not parse it.
     * @param options What to download and how.
     * @return The `download` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function download(options: DownloadOptions): Promise<number>;
    /**
     * Download a URL. If the URL uses the HTTP[S] protocol, then the request will include all cookies currently set for its hostname. If both filename and saveAs are specified, then the Save As dialog will be displayed, pre-populated with the specified filename. If the download started successfully, callback will be called with the new DownloadItem's downloadId. If there was an error starting the download, then callback will be called with downloadId=undefined and runtime.lastError will contain a descriptive string. The error strings are not guaranteed to remain backwards compatible between releases. Extensions must not parse it.
     * @param options What to download and how.
     * @param callback Called with the id of the new DownloadItem.
     */
    export function download(options: DownloadOptions, callback: (downloadId: number) => void): void;
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
     * @return The `erase` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function erase(query: DownloadQuery): Promise<number[]>;
    /**
     * Erase matching DownloadItem from history without deleting the downloaded file. An onErased event will fire for each DownloadItem that matches query, then callback will be called.
     */
    export function erase(query: DownloadQuery, callback: (erasedIds: number[]) => void): void;
    /**
     * Remove the downloaded file if it exists and the DownloadItem is complete; otherwise return an error through runtime.lastError.
     * @return The `removeFile` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function removeFile(downloadId: number): Promise<void>;
    /**
     * Remove the downloaded file if it exists and the DownloadItem is complete; otherwise return an error through runtime.lastError.
     */
    export function removeFile(downloadId: number, callback?: () => void): void;
    /**
     * Prompt the user to accept a dangerous download. Can only be called from a visible context (tab, window, or page/browser action popup). Does not automatically accept dangerous downloads. If the download is accepted, then an onChanged event will fire, otherwise nothing will happen. When all the data is fetched into a temporary file and either the download is not dangerous or the danger has been accepted, then the temporary file is renamed to the target filename, the |state| changes to 'complete', and onChanged fires.
     * @param downloadId The identifier for the DownloadItem.
     * @return The `acceptDanger` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function acceptDanger(downloadId: number): Promise<void>;
    /**
     * Prompt the user to accept a dangerous download. Can only be called from a visible context (tab, window, or page/browser action popup). Does not automatically accept dangerous downloads. If the download is accepted, then an onChanged event will fire, otherwise nothing will happen. When all the data is fetched into a temporary file and either the download is not dangerous or the danger has been accepted, then the temporary file is renamed to the target filename, the |state| changes to 'complete', and onChanged fires.
     * @param downloadId The identifier for the DownloadItem.
     * @param callback Called when the danger prompt dialog closes.
     */
    export function acceptDanger(downloadId: number, callback: () => void): void;
    /** Initiate dragging the downloaded file to another application. Call in a javascript ondragstart handler. */
    export function drag(downloadId: number): void;
    /** Enable or disable the gray shelf at the bottom of every window associated with the current browser profile. The shelf will be disabled as long as at least one extension has disabled it. Enabling the shelf while at least one other extension has disabled it will return an error through runtime.lastError. Requires the "downloads.shelf" permission in addition to the "downloads" permission. */
    export function setShelfEnabled(enabled: boolean): void;
    /**
     * Change the download UI of every window associated with the current browser profile. As long as at least one extension has set UiOptions.enabled to false, the download UI will be hidden. Setting UiOptions.enabled to true while at least one other extension has disabled it will return an error through runtime.lastError. Requires the "downloads.ui" permission in addition to the "downloads" permission.
     * @param options Encapsulate a change to the download UI.
     * @since Chrome 105
     */
    export function setUiOptions(options: UiOptions): Promise<void>;
    /**
     * Change the download UI of every window associated with the current browser profile. As long as at least one extension has set UiOptions.enabled to false, the download UI will be hidden. Setting UiOptions.enabled to true while at least one other extension has disabled it will return an error through runtime.lastError. Requires the "downloads.ui" permission in addition to the "downloads" permission.
     * @param options Encapsulate a change to the download UI.
     * @param callback Called when the setUiOptions request is completed.
     * @since Chrome 105
     */
    export function setUiOptions(options: UiOptions, callback: () => void): void;

    /** When any of a DownloadItem's properties except bytesReceived and estimatedEndTime changes, this event fires with the downloadId and an object containing the properties that changed. */
    export var onChanged: DownloadChangedEvent;
    /** This event fires with the DownloadItem object when a download begins. */
    export var onCreated: DownloadCreatedEvent;
    /** Fires with the downloadId when a download is erased from history. */
    export var onErased: DownloadErasedEvent;
    /** During the filename determination process, extensions will be given the opportunity to override the target DownloadItem.filename. Each extension may not register more than one listener for this event. Each listener must call suggest exactly once, either synchronously or asynchronously. If the listener calls suggest asynchronously, then it must return true. If the listener neither calls suggest synchronously nor returns true, then suggest will be called automatically. The DownloadItem will not complete until all listeners have called suggest. Listeners may call suggest without any arguments in order to allow the download to use downloadItem.filename for its filename, or pass a suggestion object to suggest in order to override the target filename. If more than one extension overrides the filename, then the last extension installed whose listener passes a suggestion object to suggest wins. In order to avoid confusion regarding which extension will win, users should not install extensions that may conflict. If the download is initiated by download and the target filename is known before the MIME type and tentative filename have been determined, pass filename to download instead. */
    export var onDeterminingFilename: DownloadDeterminingFilenameEvent;
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
declare namespace chrome.enterprise.platformKeys {
    export interface Token {
        /**
         * Uniquely identifies this Token.
         * Static IDs are "user" and "system", referring to the platform's user-specific and the system-wide hardware token, respectively. Any other tokens (with other identifiers) might be returned by enterprise.platformKeys.getTokens.
         */
        id: string;
        /**
         * Implements the WebCrypto's SubtleCrypto interface. The cryptographic operations, including key generation, are hardware-backed.
         * Only non-extractable RSASSA-PKCS1-V1_5 keys with modulusLength up to 2048 and ECDSA with namedCurve P-256 can be generated. Each key can be used for signing data at most once.
         * Keys generated on a specific Token cannot be used with any other Tokens, nor can they be used with window.crypto.subtle. Equally, Key objects created with window.crypto.subtle cannot be used with this interface.
         */
        subtleCrypto: SubtleCrypto;
        /**
         * Implements the WebCrypto's SubtleCrypto interface. The cryptographic operations, including key generation, are software-backed.
         * Protection of the keys, and thus implementation of the non-extractable property, is done in software, so the keys are less protected than hardware-backed keys.
         * Only non-extractable RSASSA-PKCS1-V1_5 keys with modulusLength up to 2048 can be generated. Each key can be used for signing data at most once.
         * Keys generated on a specific Token cannot be used with any other Tokens, nor can they be used with window.crypto.subtle. Equally, Key objects created with window.crypto.subtle cannot be used with this interface.
         * @since Chrome 97.
         */
        softwareBackedSubtleCrypto: SubtleCrypto;
    }

    /**
     * Returns the available Tokens. In a regular user's session the list will always contain the user's token with id "user". If a system-wide TPM token is available, the returned list will also contain the system-wide token with id "system". The system-wide token will be the same for all sessions on this device (device in the sense of e.g. a Chromebook).
     * @param callback Invoked by getTokens with the list of available Tokens.
     * Parameter tokens: The list of available tokens.
     */
    export function getTokens(callback: (tokens: Token[]) => void): void;
    /**
     * Returns the list of all client certificates available from the given token. Can be used to check for the existence and expiration of client certificates that are usable for a certain authentication.
     * @param tokenId The id of a Token returned by getTokens.
     * @param callback Called back with the list of the available certificates.
     * Parameter certificates: The list of certificates, each in DER encoding of a X.509 certificate.
     */
    export function getCertificates(tokenId: string, callback: (certificates: ArrayBuffer[]) => void): void;
    /**
     * Imports certificate to the given token if the certified key is already stored in this token. After a successful certification request, this function should be used to store the obtained certificate and to make it available to the operating system and browser for authentication.
     * @param tokenId The id of a Token returned by getTokens.
     * @param certificate The DER encoding of a X.509 certificate.
     * @param callback Called back when this operation is finished.
     */
    export function importCertificate(tokenId: string, certificate: ArrayBuffer, callback?: () => void): void;
    /**
     * Removes certificate from the given token if present. Should be used to remove obsolete certificates so that they are not considered during authentication and do not clutter the certificate choice. Should be used to free storage in the certificate store.
     * @param tokenId The id of a Token returned by getTokens.
     * @param certificate The DER encoding of a X.509 certificate.
     * @param callback Called back when this operation is finished.
     */
    export function removeCertificate(tokenId: string, certificate: ArrayBuffer, callback?: () => void): void;
    /**
     * Challenges a hardware-backed Enterprise Machine Key and emits the response as part of a remote attestation protocol. Only useful on Chrome OS and in conjunction with the Verified Access Web API which both issues challenges and verifies responses. A successful verification by the Verified Access Web API is a strong signal of all of the following:
     *
     * * The current device is a legitimate Chrome OS device.
     * * The current device is managed by the domain specified during verification.
     * * The current signed-in user is managed by the domain specified during verification.
     * * The current device state complies with enterprise device policy. For example, a policy may specify that the device must not be in developer mode.
     * * Any device identity emitted by the verification is tightly bound to the hardware of the current device.
     *
     * This function is highly restricted and will fail if the current device is not managed, the current user is not managed, or if this operation has not explicitly been enabled for the caller by enterprise device policy. The Enterprise Machine Key does not reside in the "system" token and is not accessible by any other API.
     * @param challenge A challenge as emitted by the Verified Access Web API.
     * @param registerKey If set, the current Enterprise Machine Key is registered with the "system" token and relinquishes the Enterprise Machine Key role. The key can then be associated with a certificate and used like any other signing key. This key is 2048-bit RSA. Subsequent calls to this function will then generate a new Enterprise Machine Key. Since Chrome 59.
     * @param callback Called back with the challenge response.
     * @since Chrome 50.
     */
    export function challengeMachineKey(
        challenge: ArrayBuffer,
        registerKey: boolean,
        callback: (response: ArrayBuffer) => void,
    ): void;
    export function challengeMachineKey(challenge: ArrayBuffer, callback: (response: ArrayBuffer) => void): void;
    /**
     * Challenges a hardware-backed Enterprise User Key and emits the response as part of a remote attestation protocol. Only useful on Chrome OS and in conjunction with the Verified Access Web API which both issues challenges and verifies responses. A successful verification by the Verified Access Web API is a strong signal of all of the following:
     *
     * * The current device is a legitimate Chrome OS device.
     * * The current device is managed by the domain specified during verification.
     * * The current signed-in user is managed by the domain specified during verification.
     * * The current device state complies with enterprise user policy. For example, a policy may specify that the device must not be in developer mode.
     * * The public key emitted by the verification is tightly bound to the hardware of the current device and to the current signed-in user.
     *
     * This function is highly restricted and will fail if the current device is not managed, the current user is not managed, or if this operation has not explicitly been enabled for the caller by enterprise user policy. The Enterprise User Key does not reside in the "user" token and is not accessible by any other API.
     * @param challenge A challenge as emitted by the Verified Access Web API.
     * @param registerKey If set, the current Enterprise User Key is registered with the "user" token and relinquishes the Enterprise User Key role. The key can then be associated with a certificate and used like any other signing key. This key is 2048-bit RSA. Subsequent calls to this function will then generate a new Enterprise User Key.
     * @param callback Called back with the challenge response.
     * @since Chrome 50.
     */
    export function challengeUserKey(
        challenge: ArrayBuffer,
        registerKey: boolean,
        callback: (response: ArrayBuffer) => void,
    ): void;
}

////////////////////
// Enterprise Device Attributes
////////////////////
/**
 * Use the <code>chrome.enterprise.deviceAttributes</code> API to read device attributes.
 * Permissions:  "enterprise.deviceAttributes"
 * Since: Chrome 46
 * Important: This API works only on Chrome OS.
 * Note: This API is only for extensions pre-installed by policy.
 */
declare namespace chrome.enterprise.deviceAttributes {
    /**
     * @description Fetches the value of the device identifier of the directory API, that is generated by the server and identifies the cloud record of the device for querying in the cloud directory API.
     * @param callback Called with the device identifier of the directory API when received.
     */
    export function getDirectoryDeviceId(callback: (deviceId: string) => void): void;
    /**
     * @since Chrome 66.
     * @description
     * Fetches the device's serial number.
     * Please note the purpose of this API is to administrate the device
     * (e.g. generating Certificate Sign Requests for device-wide certificates).
     * This API may not be used for tracking devices without the consent of the device's administrator.
     * If the current user is not affiliated, returns an empty string.
     * @param callback Called with the serial number of the device.
     */
    export function getDeviceSerialNumber(callback: (serialNumber: string) => void): void;
    /**
     * @since Chrome 66.
     * @description
     * Fetches the administrator-annotated Asset Id.
     * If the current user is not affiliated or no Asset Id has been set by the administrator, returns an empty string.
     * @param callback Called with the Asset ID of the device.
     */
    export function getDeviceAssetId(callback: (assetId: string) => void): void;
    /**
     * @since Chrome 66.
     * @description
     * Fetches the administrator-annotated Location.
     * If the current user is not affiliated or no Annotated Location has been set by the administrator, returns an empty string.
     * @param callback Called with the Annotated Location of the device.
     */
    export function getDeviceAnnotatedLocation(callback: (annotatedLocation: string) => void): void;
    /**
     * @since Chrome 82.
     * @description
     * Fetches the device's hostname as set by DeviceHostnameTemplate policy.
     * If the current user is not affiliated or no hostname has been set by the enterprise policy, returns an empty string.
     * @param callback Called with the hostname of the device.
     */
    export function getDeviceHostname(callback: (hostname: string) => void): void;
}

////////////////////
// Enterprise Networking Attributes
////////////////////
/**
 * Use the <code>chrome.enterprise.networkingAttributes</code> API to read information about your current network. Note: This API is only available to extensions force-installed by enterprise policy.
 * Important: This API works only on Chrome OS.
 * @since Chrome 85.
 */
declare namespace chrome.enterprise.networkingAttributes {
    export interface NetworkDetails {
        /** The device's MAC address. */
        macAddress: string;
        /** Optional. The device's local IPv4 address (undefined if not configured). */
        ipv4?: string | undefined;
        /** Optional. The device's local IPv6 address (undefined if not configured). */
        ipv6?: string | undefined;
    }

    /**
     * Retrieves the network details of the device's default network. If the user is not affiliated or the device is not connected to a network, runtime.lastError will be set with a failure reason.
     * @param callback Called with the device's default network's NetworkDetails.
     */
    export function getNetworkDetails(callback: (networkDetails: NetworkDetails) => void): void;
}

////////////////////
// Events
////////////////////
/**
 * The chrome.events namespace contains common types used by APIs dispatching events to notify you when something interesting happens.
 * Availability: Since Chrome 21.
 */
declare namespace chrome.events {
    /** Filters URLs for various criteria. See event filtering. All criteria are case sensitive. */
    export interface UrlFilter {
        /** Optional. Matches if the scheme of the URL is equal to any of the schemes specified in the array.  */
        schemes?: string[] | undefined;
        /**
         * Optional.
         * Since Chrome 23.
         * Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.
         */
        urlMatches?: string | undefined;
        /** Optional. Matches if the path segment of the URL contains a specified string.  */
        pathContains?: string | undefined;
        /** Optional. Matches if the host name of the URL ends with a specified string.  */
        hostSuffix?: string | undefined;
        /** Optional. Matches if the host name of the URL starts with a specified string.  */
        hostPrefix?: string | undefined;
        /** Optional. Matches if the host name of the URL contains a specified string. To test whether a host name component has a prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the beginning of the host name. Similarly, hostContains can be used to match against component suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last components need to be done separately using hostSuffix, because no implicit dot is added at the end of the host name.  */
        hostContains?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlContains?: string | undefined;
        /** Optional. Matches if the query segment of the URL ends with a specified string.  */
        querySuffix?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlPrefix?: string | undefined;
        /** Optional. Matches if the host name of the URL is equal to a specified string.  */
        hostEquals?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlEquals?: string | undefined;
        /** Optional. Matches if the query segment of the URL contains a specified string.  */
        queryContains?: string | undefined;
        /** Optional. Matches if the path segment of the URL starts with a specified string.  */
        pathPrefix?: string | undefined;
        /** Optional. Matches if the path segment of the URL is equal to a specified string.  */
        pathEquals?: string | undefined;
        /** Optional. Matches if the path segment of the URL ends with a specified string.  */
        pathSuffix?: string | undefined;
        /** Optional. Matches if the query segment of the URL is equal to a specified string.  */
        queryEquals?: string | undefined;
        /** Optional. Matches if the query segment of the URL starts with a specified string.  */
        queryPrefix?: string | undefined;
        /** Optional. Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlSuffix?: string | undefined;
        /** Optional. Matches if the port of the URL is contained in any of the specified port lists. For example [80, 443, [1000, 1200]] matches all requests on port 80, 443 and in the range 1000-1200.  */
        ports?: (number | number[])[] | undefined;
        /**
         * Optional.
         * Since Chrome 28.
         * Matches if the URL without query segment and fragment identifier matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.
         */
        originAndPathMatches?: string | undefined;
    }

    export interface BaseEvent<T extends Function> {
        addListener(callback: T, filter?: webRequest.RequestFilter): void;
        /**
         * Returns currently registered rules.
         * @param callback Called with registered rules.
         */
        getRules(
            callback: (
                /** Rules that were registered, the optional parameters are filled with values */
                rules: Rule[],
            ) => void,
        ): void;
        /**
         * Returns currently registered rules.
         * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are returned.
         * @param callback Called with registered rules.
         */
        getRules(
            ruleIdentifiers: string[],
            callback: (
                /** Rules that were registered, the optional parameters are filled with values */
                rules: Rule[],
            ) => void,
        ): void;
        /**
         * @param callback Listener whose registration status shall be tested.
         */
        hasListener(callback: T): boolean;
        /**
         * Unregisters currently registered rules.
         * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are unregistered.
         * @param callback Called when rules were unregistered.
         */
        removeRules(ruleIdentifiers?: string[], callback?: () => void): void;
        /**
         * Unregisters currently registered rules.
         * @param callback Called when rules were unregistered.
         */
        removeRules(callback?: () => void): void;
        /**
         * Registers rules to handle events.
         * @param rules Rules to be registered. These do not replace previously registered rules.
         * @param callback Called with registered rules.
         */
        addRules(
            rules: Rule[],
            callback?: (
                /** Rules that were registered, the optional parameters are filled with values */
                rules: Rule[],
            ) => void,
        ): void;
        /**
         * Deregisters an event listener callback from an event.
         * @param callback Listener that shall be unregistered.
         */
        removeListener(callback: T): void;
        hasListeners(): boolean;
    }

    /** An object which allows the addition and removal of listeners for a Chrome event. */
    interface Event<T extends Function> extends BaseEvent<T> {
        /**
         * Registers an event listener callback to an event.
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         */
        addListener(callback: T): void;
    }
    export interface EventWithRequiredFilterInAddListener<T extends Function> extends BaseEvent<T> {
        addListener(callback: T, filter: webRequest.RequestFilter): void;
    }

    /** Description of a declarative rule for handling events. */
    export interface Rule {
        /** Optional. Optional priority of this rule. Defaults to 100.  */
        priority?: number | undefined;
        /** List of conditions that can trigger the actions. */
        conditions: any[];
        /** Optional. Optional identifier that allows referencing this rule.  */
        id?: string | undefined;
        /** List of actions that are triggered if one of the condtions is fulfilled. */
        actions: any[];
        /**
         * Optional.
         * Since Chrome 28.
         * Tags can be used to annotate rules and perform operations on sets of rules.
         */
        tags?: string[] | undefined;
    }
}

////////////////////
// Extension
////////////////////
/**
 * The chrome.extension API has utilities that can be used by any extension page. It includes support for exchanging messages between an extension and its content scripts or between extensions, as described in detail in Message Passing.
 * Availability: Since Chrome 5.
 */
declare namespace chrome.extension {
    export interface FetchProperties {
        /**
         * Optional.
         * Chrome 54+
         * Find a view according to a tab id. If this field is omitted, returns all views.
         */
        tabId?: number | undefined;
        /** Optional. The window to restrict the search to. If omitted, returns all views.  */
        windowId?: number | undefined;
        /** Optional. The type of view to get. If omitted, returns all views (including background pages and tabs). Valid values: 'tab', 'notification', 'popup'.  */
        type?: string | undefined;
    }

    export interface LastError {
        /** Description of the error that has taken place. */
        message: string;
    }

    export interface OnRequestEvent extends
        chrome.events.Event<
            | ((request: any, sender: runtime.MessageSender, sendResponse: (response: any) => void) => void)
            | ((sender: runtime.MessageSender, sendResponse: (response: any) => void) => void)
        >
    {}

    /**
     * Since Chrome 7.
     * True for content scripts running inside incognito tabs, and for extension pages running inside an incognito process. The latter only applies to extensions with 'split' incognito_behavior.
     */
    export var inIncognitoContext: boolean;
    /** Set for the lifetime of a callback if an ansychronous extension api has resulted in an error. If no error has occurred lastError will be undefined. */
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
     * @return The `isAllowedFileSchemeAccess` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function isAllowedFileSchemeAccess(): Promise<boolean>;
    /**
     * Retrieves the state of the extension's access to the 'file://' scheme (as determined by the user-controlled 'Allow access to File URLs' checkbox.
     * Since Chrome 12.
     * Parameter isAllowedAccess: True if the extension can access the 'file://' scheme, false otherwise.
     */
    export function isAllowedFileSchemeAccess(callback: (isAllowedAccess: boolean) => void): void;
    /**
     * Retrieves the state of the extension's access to Incognito-mode (as determined by the user-controlled 'Allowed in Incognito' checkbox.
     * Since Chrome 12.
     * @return The `isAllowedIncognitoAccess` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function isAllowedIncognitoAccess(): Promise<boolean>;
    /**
     * Retrieves the state of the extension's access to Incognito-mode (as determined by the user-controlled 'Allowed in Incognito' checkbox.
     * Since Chrome 12.
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
    export function sendRequest<Request = any, Response = any>(
        extensionId: string,
        request: Request,
        responseCallback?: (response: Response) => void,
    ): void;
    /**
     * Sends a single request to other listeners within the extension. Similar to runtime.connect, but only sends a single request with an optional response. The extension.onRequest event is fired in each page of the extension.
     * @deprecated Deprecated since Chrome 33. Please use runtime.sendMessage.
     * @param responseCallback If you specify the responseCallback parameter, it should be a function that looks like this:
     * function(any response) {...};
     * Parameter response: The JSON response object sent by the handler of the request. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendRequest<Request = any, Response = any>(
        request: Request,
        responseCallback?: (response: Response) => void,
    ): void;
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
// File Browser Handler
////////////////////
/**
 * Use the chrome.fileBrowserHandler API to extend the Chrome OS file browser. For example, you can use this API to enable users to upload files to your website.
 * Availability: Since Chrome 12.
 * Permissions:  "fileBrowserHandler"
 * Important: This API works only on Chrome OS.
 */
declare namespace chrome.fileBrowserHandler {
    export interface SelectionParams {
        /**
         * Optional.
         * List of file extensions that the selected file can have. The list is also used to specify what files to be shown in the select file dialog. Files with the listed extensions are only shown in the dialog. Extensions should not include the leading '.'. Example: ['jpg', 'png']
         * Since Chrome 23.
         */
        allowedFileExtensions?: string[] | undefined;
        /** Suggested name for the file. */
        suggestedName: string;
    }

    export interface SelectionResult {
        /** Optional. Selected file entry. It will be null if a file hasn't been selected.  */
        entry?: Object | null | undefined;
        /** Whether the file has been selected. */
        success: boolean;
    }

    /** Event details payload for fileBrowserHandler.onExecute event. */
    export interface FileHandlerExecuteEventDetails {
        /** Optional. The ID of the tab that raised this event. Tab IDs are unique within a browser session.  */
        tab_id?: number | undefined;
        /** Array of Entry instances representing files that are targets of this action (selected in ChromeOS file browser). */
        entries: any[];
    }

    export interface FileBrowserHandlerExecuteEvent
        extends chrome.events.Event<(id: string, details: FileHandlerExecuteEventDetails) => void>
    {}

    /**
     * Prompts user to select file path under which file should be saved. When the file is selected, file access permission required to use the file (read, write and create) are granted to the caller. The file will not actually get created during the function call, so function caller must ensure its existence before using it. The function has to be invoked with a user gesture.
     * Since Chrome 21.
     * @param selectionParams Parameters that will be used while selecting the file.
     * @param callback Function called upon completion.
     * Parameter result: Result of the method.
     */
    export function selectFile(selectionParams: SelectionParams, callback: (result: SelectionResult) => void): void;

    /** Fired when file system action is executed from ChromeOS file browser. */
    export var onExecute: FileBrowserHandlerExecuteEvent;
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
declare namespace chrome.fileSystemProvider {
    export interface OpenedFileInfo {
        /** A request ID to be be used by consecutive read/write and close requests. */
        openRequestId: number;
        /** The path of the opened file. */
        filePath: string;
        /** Whether the file was opened for reading or writing. */
        mode: string;
    }

    export interface FileWatchersInfo {
        /** The path of the entry being observed. */
        entryPath: string;
        /** Whether watching should include all child entries recursively. It can be true for directories only. */
        recursive: boolean;
        /** Optional. Tag used by the last notification for the watcher.  */
        lastTag?: string | undefined;
    }

    export interface CloudIdentifier {
        /** Identifier for the cloud storage provider (e.g. 'drive.google.com'). */
        providerName: string;
        /** The provider's identifier for the given file/directory. */
        id: string;
    }

    export interface EntryMetadata {
        /** True if it is a directory. Must be provided if requested in `options`. */
        isDirectory?: boolean;
        /** Name of this entry (not full path name). Must not contain '/'. For root it must be empty. Must be provided if requested in `options`. */
        name?: string;
        /** File size in bytes. Must be provided if requested in `options`. */
        size?: number;
        /** The last modified time of this entry. Must be provided if requested in `options`. */
        modificationTime?: Date;
        /** Optional. Mime type for the entry. Always optional, but should provided if requested in `options`. */
        mimeType?: string | undefined;
        /** Optional. Thumbnail image as a data URI in either PNG, JPEG or WEBP format, at most 32 KB in size. Optional, but can be provided only when explicitly requested by the onGetMetadataRequested event. */
        thumbnail?: string | undefined;
        /** Optional. Cloud storage representation of this entry. Must be provided if requested in `options` and the file is backed by cloud storage. For local files not backed by cloud storage, it should be undefined when requested. */
        cloudIdentifier?: CloudIdentifier | undefined;
    }

    export interface FileSystemInfo {
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
        supportsNotifyTag?: boolean | undefined;
        /**
         * List of watchers.
         * @since Since Chrome 45. Warning: this is the current Beta channel.
         */
        watchers: FileWatchersInfo[];
    }

    /** @since Since Chrome 45. Warning: this is the current Beta channel. */
    export interface GetActionsRequestedOptions {
        /** The identifier of the file system related to this operation. */
        fileSystemId: string;
        /** The unique identifier of this request. */
        requestId: number;
        /** List of paths of entries for the list of actions. */
        entryPaths: string[];
    }

    /** @since Since Chrome 45. Warning: this is the current Beta channel. */
    export interface Action {
        /** The identifier of the action. Any string or CommonActionId for common actions. */
        id: string;
        /** Optional. The title of the action. It may be ignored for common actions.  */
        title?: string | undefined;
    }

    /** @since Since Chrome 45. Warning: this is the current Beta channel. */
    export interface ExecuteActionRequestedOptions {
        /** The identifier of the file system related to this operation. */
        fileSystemId: string;
        /** The unique identifier of this request. */
        requestId: number;
        /** The set of paths of the entries to be used for the action. */
        entryPaths: string[];
        /** The identifier of the action to be executed. */
        actionId: string;
    }

    export interface MountOptions {
        /** The string identifier of the file system. Must be unique per each extension. */
        fileSystemId: string;
        /** A human-readable name for the file system. */
        displayName: string;
        /** Optional. Whether the file system supports operations which may change contents of the file system (such as creating, deleting or writing to files).  */
        writable?: boolean | undefined;
        /**
         * Optional.
         * The maximum number of files that can be opened at once. If not specified, or 0, then not limited.
         * @since Since Chrome 41.
         */
        openedFilesLimit?: number | undefined;
        /**
         * Optional.
         * Whether the file system supports the tag field for observed directories.
         * @since Since Chrome 45. Warning: this is the current Beta channel.
         */
        supportsNotifyTag?: boolean | undefined;
    }

    export interface UnmountOptions {
        /** The identifier of the file system to be unmounted. */
        fileSystemId: string;
    }

    export interface NotificationChange {
        /** The path of the changed entry. */
        entryPath: string;
        /** The type of the change which happened to the entry. */
        changeType: string;
    }

    export interface NotificationOptions {
        /** The identifier of the file system related to this change. */
        fileSystemId: string;
        /** The path of the observed entry. */
        observedPath: string;
        /** Mode of the observed entry. */
        recursive: boolean;
        /** The type of the change which happened to the observed entry. If it is DELETED, then the observed entry will be automatically removed from the list of observed entries. */
        changeType: string;
        /** Optional. List of changes to entries within the observed directory (including the entry itself)  */
        changes?: NotificationChange[] | undefined;
        /** Optional. Tag for the notification. Required if the file system was mounted with the supportsNotifyTag option. Note, that this flag is necessary to provide notifications about changes which changed even when the system was shutdown.  */
        tag?: string | undefined;
    }

    export interface RequestedEventOptions {
        /** The identifier of the file system related to this operation. */
        fileSystemId: string;
        /** The unique identifier of this request. */
        requestId: number;
    }

    export interface EntryPathRequestedEventOptions extends RequestedEventOptions {
        /** The path of the entry to which this operation is related to. */
        entryPath: string;
    }

    export interface MetadataRequestedEventOptions extends EntryPathRequestedEventOptions {
        /** Set to true if `is_directory` value is requested. */
        isDirectory: boolean;
        /** Set to true if `name` value is requested. */
        name: boolean;
        /** Set to true if `size` value is requested. */
        size: boolean;
        /** Set to true if `modificationTime` value is requested. */
        modificationTime: boolean;
        /** Set to true if `mimeType` value is requested. */
        mimeType: boolean;
        /** Set to true if `thumbnail` is requested. */
        thumbnail: boolean;
        /** Set to true if `cloudIdentifier` is requested. */
        cloudIdentifier: boolean;
    }

    export interface DirectoryPathRequestedEventOptions extends RequestedEventOptions {
        /** The path of the directory which is to be operated on. */
        directoryPath: string;
        /** Set to true if `is_directory` value is requested. */
        isDirectory: boolean;
        /** Set to true if `name` value is requested. */
        name: boolean;
        /** Set to true if `size` value is requested. */
        size: boolean;
        /** Set to true if `modificationTime` value is requested. */
        modificationTime: boolean;
        /** Set to true if `mimeType` value is requested. */
        mimeType: boolean;
        /** Set to true if `thumbnail` is requested. */
        thumbnail: boolean;
    }

    export interface FilePathRequestedEventOptions extends RequestedEventOptions {
        /** The path of the entry for the operation */
        filePath: string;
    }

    export interface OpenFileRequestedEventOptions extends FilePathRequestedEventOptions {
        /** Whether the file will be used for reading or writing. */
        mode: string;
    }

    export interface OpenedFileRequestedEventOptions extends RequestedEventOptions {
        /** A request ID used to open the file. */
        openRequestId: number;
    }

    export interface OpenedFileOffsetRequestedEventOptions extends OpenedFileRequestedEventOptions {
        /** Position in the file (in bytes) to start reading from. */
        offset: number;
        /** Number of bytes to be returned. */
        length: number;
    }

    export interface DirectoryPathRecursiveRequestedEventOptions extends DirectoryPathRequestedEventOptions {
        /** Whether the operation is recursive (for directories only). */
        recursive: boolean;
    }

    export interface EntryPathRecursiveRequestedEventOptions extends EntryPathRequestedEventOptions {
        /** Whether the operation is recursive (for directories only). */
        recursive: boolean;
    }

    export interface SourceTargetPathRequestedEventOptions extends RequestedEventOptions {
        /** The source path for the operation. */
        sourcePath: string;
        /** The destination path for the operation. */
        targetPath: string;
    }

    export interface FilePathLengthRequestedEventOptions extends FilePathRequestedEventOptions {
        /** Number of bytes to be retained after the operation completes. */
        length: number;
    }

    export interface OpenedFileIoRequestedEventOptions extends OpenedFileRequestedEventOptions {
        /** Position in the file (in bytes) to start operating from. */
        offset: number;
        /** Buffer of bytes to be operated on the file. */
        data: ArrayBuffer;
    }

    export interface OperationRequestedEventOptions extends RequestedEventOptions {
        /** An ID of the request to which this operation is related. */
        operationRequestId: number;
    }

    export interface RequestedEvent extends
        chrome.events.Event<
            (options: RequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void
        >
    {}

    export interface MetadataRequestedEvent extends
        chrome.events.Event<
            (
                options: MetadataRequestedEventOptions,
                successCallback: (metadata: EntryMetadata) => void,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface DirectoryPathRequestedEvent extends
        chrome.events.Event<
            (
                options: DirectoryPathRequestedEventOptions,
                successCallback: (entries: EntryMetadata[], hasMore: boolean) => void,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface OpenFileRequestedEvent extends
        chrome.events.Event<
            (
                options: OpenFileRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface OpenedFileRequestedEvent extends
        chrome.events.Event<
            (
                options: OpenedFileRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface OpenedFileOffsetRequestedEvent extends
        chrome.events.Event<
            (
                options: OpenedFileOffsetRequestedEventOptions,
                successCallback: (data: ArrayBuffer, hasMore: boolean) => void,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface DirectoryPathRecursiveRequestedEvent extends
        chrome.events.Event<
            (
                options: DirectoryPathRecursiveRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface EntryPathRecursiveRequestedEvent extends
        chrome.events.Event<
            (
                options: EntryPathRecursiveRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface FilePathRequestedEvent extends
        chrome.events.Event<
            (
                options: FilePathRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface SourceTargetPathRequestedEvent extends
        chrome.events.Event<
            (
                options: SourceTargetPathRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface FilePathLengthRequestedEvent extends
        chrome.events.Event<
            (
                options: FilePathLengthRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface OpenedFileIoRequestedEvent extends
        chrome.events.Event<
            (
                options: OpenedFileIoRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface OperationRequestedEvent extends
        chrome.events.Event<
            (
                options: OperationRequestedEventOptions,
                successCallback: Function,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface OptionlessRequestedEvent
        extends chrome.events.Event<(successCallback: Function, errorCallback: (error: string) => void) => void>
    {}

    export interface GetActionsRequested extends
        chrome.events.Event<
            (
                options: GetActionsRequestedOptions,
                successCallback: (actions: Action[]) => void,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    export interface ExecuteActionRequested extends
        chrome.events.Event<
            (
                options: ExecuteActionRequestedOptions,
                successCallback: () => void,
                errorCallback: (error: string) => void,
            ) => void
        >
    {}

    /**
     * Mounts a file system with the given fileSystemId and displayName. displayName will be shown in the left panel of Files.app. displayName can contain any characters including '/', but cannot be an empty string. displayName must be descriptive but doesn't have to be unique. The fileSystemId must not be an empty string.
     * Depending on the type of the file system being mounted, the source option must be set appropriately.
     * In case of an error, runtime.lastError will be set with a corresponding error code.
     * @param callback A generic result callback to indicate success or failure.
     */
    export function mount(options: MountOptions, callback?: () => void): void;
    /**
     * Unmounts a file system with the given fileSystemId. It must be called after onUnmountRequested is invoked. Also, the providing extension can decide to perform unmounting if not requested (eg. in case of lost connection, or a file error).
     * In case of an error, runtime.lastError will be set with a corresponding error code.
     * @param callback A generic result callback to indicate success or failure.
     */
    export function unmount(options: UnmountOptions, callback?: () => void): void;
    /**
     * Returns all file systems mounted by the extension.
     * @param callback Callback to receive the result of getAll function.
     */
    export function getAll(callback: (fileSystems: FileSystemInfo[]) => void): void;
    /**
     * Returns information about a file system with the passed fileSystemId.
     * @since Since Chrome 42.
     * @param callback Callback to receive the result of get function.
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
     */
    export function notify(options: NotificationOptions, callback: () => void): void;

    /** Raised when unmounting for the file system with the fileSystemId identifier is requested. In the response, the unmount API method must be called together with successCallback. If unmounting is not possible (eg. due to a pending operation), then errorCallback must be called.  */
    export var onUnmountRequested: RequestedEvent;
    /** Raised when metadata of a file or a directory at entryPath is requested. The metadata must be returned with the successCallback call. In case of an error, errorCallback must be called. */
    export var onGetMetadataRequested: MetadataRequestedEvent;
    /** Raised when contents of a directory at directoryPath are requested. The results must be returned in chunks by calling the successCallback several times. In case of an error, errorCallback must be called. */
    export var onReadDirectoryRequested: DirectoryPathRequestedEvent;
    /** Raised when opening a file at filePath is requested. If the file does not exist, then the operation must fail. Maximum number of files opened at once can be specified with MountOptions. */
    export var onOpenFileRequested: OpenFileRequestedEvent;
    /** Raised when opening a file previously opened with openRequestId is requested to be closed. */
    export var onCloseFileRequested: OpenedFileRequestedEvent;
    /** Raised when reading contents of a file opened previously with openRequestId is requested. The results must be returned in chunks by calling successCallback several times. In case of an error, errorCallback must be called. */
    export var onReadFileRequested: OpenedFileOffsetRequestedEvent;
    /** Raised when creating a directory is requested. The operation must fail with the EXISTS error if the target directory already exists. If recursive is true, then all of the missing directories on the directory path must be created. */
    export var onCreateDirectoryRequested: DirectoryPathRecursiveRequestedEvent;
    /** Raised when deleting an entry is requested. If recursive is true, and the entry is a directory, then all of the entries inside must be recursively deleted as well. */
    export var onDeleteEntryRequested: EntryPathRecursiveRequestedEvent;
    /** Raised when creating a file is requested. If the file already exists, then errorCallback must be called with the "EXISTS" error code. */
    export var onCreateFileRequested: FilePathRequestedEvent;
    /** Raised when copying an entry (recursively if a directory) is requested. If an error occurs, then errorCallback must be called. */
    export var onCopyEntryRequested: SourceTargetPathRequestedEvent;
    /** Raised when moving an entry (recursively if a directory) is requested. If an error occurs, then errorCallback must be called. */
    export var onMoveEntryRequested: SourceTargetPathRequestedEvent;
    /** Raised when truncating a file to a desired length is requested. If an error occurs, then errorCallback must be called. */
    export var onTruncateRequested: FilePathLengthRequestedEvent;
    /** Raised when writing contents to a file opened previously with openRequestId is requested. */
    export var onWriteFileRequested: OpenedFileIoRequestedEvent;
    /** Raised when aborting an operation with operationRequestId is requested. The operation executed with operationRequestId must be immediately stopped and successCallback of this abort request executed. If aborting fails, then errorCallback must be called. Note, that callbacks of the aborted operation must not be called, as they will be ignored. Despite calling errorCallback, the request may be forcibly aborted. */
    export var onAbortRequested: OperationRequestedEvent;
    /**
     * Raised when showing a configuration dialog for fileSystemId is requested. If it's handled, the file_system_provider.configurable manfiest option must be set to true.
     * @since Since Chrome 44.
     */
    export var onConfigureRequested: RequestedEvent;
    /**
     * Raised when showing a dialog for mounting a new file system is requested. If the extension/app is a file handler, then this event shouldn't be handled. Instead app.runtime.onLaunched should be handled in order to mount new file systems when a file is opened. For multiple mounts, the file_system_provider.multiple_mounts manifest option must be set to true.
     * @since Since Chrome 44.
     */
    export var onMountRequested: OptionlessRequestedEvent;
    /**
     * Raised when setting a new directory watcher is requested. If an error occurs, then errorCallback must be called.
     * @since Since Chrome 45. Warning: this is the current Beta channel.
     */
    export var onAddWatcherRequested: EntryPathRecursiveRequestedEvent;
    /**
     * Raised when the watcher should be removed. If an error occurs, then errorCallback must be called.
     * @since Since Chrome 45. Warning: this is the current Beta channel.
     */
    export var onRemoveWatcherRequested: EntryPathRecursiveRequestedEvent;

    /**
     * Raised when a list of actions for a set of files or directories at
     * `entryPaths` is requested. All of the returned actions must
     * be applicable to each entry. If there are no such actions, an empty array
     * should be returned. The actions must be returned with the
     * `successCallback` call. In case of an error,
     * `errorCallback` must be called.
     */
    export var onGetActionsRequested: GetActionsRequested;

    /**
     * Raised when executing an action for a set of files or directories is
     * requested. After the action is completed, `successCallback`
     * must be called. On error, `errorCallback` must be called.
     */
    export var onExecuteActionRequested: ExecuteActionRequested;
}

////////////////////
// Font Settings
////////////////////
/**
 * Use the chrome.fontSettings API to manage Chrome's font settings.
 * Availability: Since Chrome 22.
 * Permissions:  "fontSettings"
 */
declare namespace chrome.fontSettings {
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
        genericFamily:
            | "cursive"
            | "fantasy"
            | "fixed"
            | "sansserif"
            | "serif"
            | "standard";
        /** Optional. The script for the font. If omitted, the global script font setting is affected.  */
        script?: string | undefined;
    }

    export interface FullFontDetails {
        /** The generic font family for which the font setting has changed. */
        genericFamily: string;
        /** The level of control this extension has over the setting. */
        levelOfControl: string;
        /** Optional. The script code for which the font setting has changed.  */
        script?: string | undefined;
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

    export interface DefaultFixedFontSizeChangedEvent extends chrome.events.Event<(details: FontSizeDetails) => void> {}

    export interface DefaultFontSizeChangedEvent extends chrome.events.Event<(details: FontSizeDetails) => void> {}

    export interface MinimumFontSizeChangedEvent extends chrome.events.Event<(details: FontSizeDetails) => void> {}

    export interface FontChangedEvent extends chrome.events.Event<(details: FullFontDetails) => void> {}

    /**
     * Sets the default font size.
     * @return The `setDefaultFontSize` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setDefaultFontSize(details: DefaultFontSizeDetails): Promise<void>;
    /**
     * Sets the default font size.
     */
    export function setDefaultFontSize(details: DefaultFontSizeDetails, callback: Function): void;
    /**
     * Gets the font for a given script and generic font family.
     * @return The `getFont` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getFont(details: FontDetails): Promise<FontDetailsResult>;
    /**
     * Gets the font for a given script and generic font family.
     */
    export function getFont(details: FontDetails, callback: (details: FontDetailsResult) => void): void;
    /**
     * Gets the default font size.
     * @param details This parameter is currently unused.
     * @return The `getDefaultFontSize` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getDefaultFontSize(details?: Object): Promise<FontSizeDetails>;
    /**
     * Gets the default font size.
     * @param details This parameter is currently unused.
     */
    export function getDefaultFontSize(callback: (options: FontSizeDetails) => void): void;
    export function getDefaultFontSize(details: Object, callback: (options: FontSizeDetails) => void): void;
    /**
     * Gets the minimum font size.
     * @param details This parameter is currently unused.
     * @return The `getMinimumFontSize` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getMinimumFontSize(details?: object): Promise<FontSizeDetails>;
    /**
     * Gets the minimum font size.
     * @param details This parameter is currently unused.
     */
    export function getMinimumFontSize(callback: (options: FontSizeDetails) => void): void;
    export function getMinimumFontSize(details: object, callback: (options: FontSizeDetails) => void): void;
    /**
     * Sets the minimum font size.
     * @return The `setMinimumFontSize` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setMinimumFontSize(details: SetFontSizeDetails): Promise<void>;
    /**
     * Sets the minimum font size.
     */
    export function setMinimumFontSize(details: SetFontSizeDetails, callback: Function): void;
    /**
     * Gets the default size for fixed width fonts.
     * @param details This parameter is currently unused.
     * @return The `getDefaultFixedFontSize` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getDefaultFixedFontSize(details?: Object): Promise<FontSizeDetails>;
    /**
     * Gets the default size for fixed width fonts.
     * @param details This parameter is currently unused.
     */
    export function getDefaultFixedFontSize(callback: (details: FontSizeDetails) => void): void;
    export function getDefaultFixedFontSize(details: Object, callback: (details: FontSizeDetails) => void): void;
    /**
     * Clears the default font size set by this extension, if any.
     * @param details This parameter is currently unused.
     * @return The `clearDefaultFontSize` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function clearDefaultFontSize(details?: Object): Promise<void>;
    /**
     * Clears the default font size set by this extension, if any.
     * @param details This parameter is currently unused.
     */
    export function clearDefaultFontSize(callback: Function): void;
    export function clearDefaultFontSize(details: Object, callback: Function): void;
    /**
     * Sets the default size for fixed width fonts.
     * @return The `setDefaultFixedFontSize` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setDefaultFixedFontSize(details: SetFontSizeDetails): Promise<void>;
    /**
     * Sets the default size for fixed width fonts.
     */
    export function setDefaultFixedFontSize(details: SetFontSizeDetails, callback: Function): void;
    /**
     * Clears the font set by this extension, if any.
     * @return The `clearFont` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function clearFont(details: FontDetails): Promise<void>;
    /**
     * Clears the font set by this extension, if any.
     */
    export function clearFont(details: FontDetails, callback: Function): void;
    /**
     * Sets the font for a given script and generic font family.
     * @return The `setFont` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setFont(details: SetFontDetails): Promise<void>;
    /**
     * Sets the font for a given script and generic font family.
     */
    export function setFont(details: SetFontDetails, callback: Function): void;
    /**
     * Clears the minimum font size set by this extension, if any.
     * @param details This parameter is currently unused.
     * @return The `clearMinimumFontSize` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function clearMinimumFontSize(details?: Object): Promise<void>;
    /**
     * Clears the minimum font size set by this extension, if any.
     * @param details This parameter is currently unused.
     */
    export function clearMinimumFontSize(callback: Function): void;
    export function clearMinimumFontSize(details: Object, callback: Function): void;
    /**
     * Gets a list of fonts on the system.
     * @return The `getFontList` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getFontList(): Promise<FontName[]>;
    /**
     * Gets a list of fonts on the system.
     */
    export function getFontList(callback: (results: FontName[]) => void): void;
    /**
     * Clears the default fixed font size set by this extension, if any.
     * @param details This parameter is currently unused.
     * @return The `clearDefaultFixedFontSize` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function clearDefaultFixedFontSize(details: Object): Promise<void>;
    /**
     * Clears the default fixed font size set by this extension, if any.
     * @param details This parameter is currently unused.
     */
    export function clearDefaultFixedFontSize(details: Object, callback: Function): void;

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
 * Use chrome.gcm to enable apps and extensions to send and receive messages through the Google Cloud Messaging Service.
 * Availability: Since Chrome 35.
 * Permissions:  "gcm"
 */
declare namespace chrome.gcm {
    export interface OutgoingMessage {
        /** The ID of the server to send the message to as assigned by Google API Console. */
        destinationId: string;
        /** The ID of the message. It must be unique for each message in scope of the applications. See the Cloud Messaging documentation for advice for picking and handling an ID. */
        messageId: string;
        /** Optional. Time-to-live of the message in seconds. If it is not possible to send the message within that time, an onSendError event will be raised. A time-to-live of 0 indicates that the message should be sent immediately or fail if it's not possible. The maximum and a default value of time-to-live is 86400 seconds (1 day). */
        timeToLive?: number | undefined;
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
        from?: string | undefined;
        /**
         * Optional.
         * The collapse key of a message. See Collapsible Messages section of Cloud Messaging documentation for details.
         */
        collapseKey?: string | undefined;
    }

    export interface GcmError {
        /** The error message describing the problem. */
        errorMessage: string;
        /** Optional. The ID of the message with this error, if error is related to a specific message. */
        messageId?: string | undefined;
        /** Additional details related to the error, when available. */
        detail: Object;
    }

    export interface MessageReceptionEvent extends chrome.events.Event<(message: IncomingMessage) => void> {}

    export interface MessageDeletionEvent extends chrome.events.Event<() => void> {}

    export interface GcmErrorEvent extends chrome.events.Event<(error: GcmError) => void> {}

    /** The maximum size (in bytes) of all key/value pairs in a message. */
    export var MAX_MESSAGE_SIZE: number;

    /**
     * Registers the application with GCM. The registration ID will be returned by the callback. If register is called again with the same list of senderIds, the same registration ID will be returned.
     * @param senderIds A list of server IDs that are allowed to send messages to the application. It should contain at least one and no more than 100 sender IDs.
     * @param callback Function called when registration completes. It should check runtime.lastError for error when registrationId is empty.
     * Parameter registrationId: A registration ID assigned to the application by the GCM.
     */
    export function register(senderIds: string[], callback: (registrationId: string) => void): void;
    /**
     * Unregisters the application from GCM.
     * @param callback A function called after the unregistration completes. Unregistration was successful if runtime.lastError is not set.
     */
    export function unregister(callback: () => void): void;
    /**
     * Sends a message according to its contents.
     * @param message A message to send to the other party via GCM.
     * @param callback A function called after the message is successfully queued for sending. runtime.lastError should be checked, to ensure a message was sent without problems.
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
 * Use the chrome.history API to interact with the browser's record of visited pages. You can add, remove, and query for URLs in the browser's history. To override the history page with your own version, see Override Pages.
 * Availability: Since Chrome 5.
 * Permissions:  "history"
 */
declare namespace chrome.history {
    /** An object encapsulating one visit to a URL. */
    export interface VisitItem {
        /** The transition type for this visit from its referrer. */
        transition: string;
        /** Optional. When this visit occurred, represented in milliseconds since the epoch. */
        visitTime?: number | undefined;
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
        typedCount?: number | undefined;
        /** Optional. The title of the page when it was last loaded. */
        title?: string | undefined;
        /** Optional. The URL navigated to by a user. */
        url?: string | undefined;
        /** Optional. When this page was last loaded, represented in milliseconds since the epoch. */
        lastVisitTime?: number | undefined;
        /** Optional. The number of times the user has navigated to this page. */
        visitCount?: number | undefined;
        /** The unique identifier for the item. */
        id: string;
    }

    export interface HistoryQuery {
        /** A free-text query to the history service. Leave empty to retrieve all pages. */
        text: string;
        /** Optional. The maximum number of results to retrieve. Defaults to 100. */
        maxResults?: number | undefined;
        /** Optional. Limit results to those visited after this date, represented in milliseconds since the epoch. */
        startTime?: number | undefined;
        /** Optional. Limit results to those visited before this date, represented in milliseconds since the epoch. */
        endTime?: number | undefined;
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
        urls?: string[] | undefined;
    }

    export interface HistoryVisitedEvent extends chrome.events.Event<(result: HistoryItem) => void> {}

    export interface HistoryVisitRemovedEvent extends chrome.events.Event<(removed: RemovedResult) => void> {}

    /**
     * Searches the history for the last visit time of each page matching the query.
     * @return The `search` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function search(query: HistoryQuery): Promise<HistoryItem[]>;
    /**
     * Searches the history for the last visit time of each page matching the query.
     */
    export function search(query: HistoryQuery, callback: (results: HistoryItem[]) => void): void;
    /**
     * Adds a URL to the history at the current time with a transition type of "link".
     * @return The `addUrl` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function addUrl(details: Url): Promise<void>;
    /**
     * Adds a URL to the history at the current time with a transition type of "link".
     */
    export function addUrl(details: Url, callback: () => void): void;
    /**
     * Removes all items within the specified date range from the history. Pages will not be removed from the history unless all visits fall within the range.
     * @return The `deleteRange` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function deleteRange(range: Range): Promise<void>;
    /**
     * Removes all items within the specified date range from the history. Pages will not be removed from the history unless all visits fall within the range.
     */
    export function deleteRange(range: Range, callback: () => void): void;
    /**
     * Deletes all items from the history.
     * @return The `deleteAll` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function deleteAll(): Promise<void>;
    /**
     * Deletes all items from the history.
     */
    export function deleteAll(callback: () => void): void;
    /**
     * Retrieves information about visits to a URL.
     * @return The `getVisits` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getVisits(details: Url): Promise<VisitItem[]>;
    /**
     * Retrieves information about visits to a URL.
     */
    export function getVisits(details: Url, callback: (results: VisitItem[]) => void): void;
    /**
     * Removes all occurrences of the given URL from the history.
     * @return The `deleteUrl` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function deleteUrl(details: Url): Promise<void>;
    /**
     * Removes all occurrences of the given URL from the history.
     */
    export function deleteUrl(details: Url, callback: () => void): void;

    /** Fired when a URL is visited, providing the HistoryItem data for that URL. This event fires before the page has loaded. */
    export var onVisited: HistoryVisitedEvent;
    /** Fired when one or more URLs are removed from the history service. When all visits have been removed the URL is purged from history. */
    export var onVisitRemoved: HistoryVisitRemovedEvent;
}

////////////////////
// i18n
////////////////////
/**
 * Use the chrome.i18n infrastructure to implement internationalization across your whole app or extension.
 * @since Chrome 5.
 */
declare namespace chrome.i18n {
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
     * @return The `getAcceptLanguages` method provides its result via callback or returned as a `Promise` (MV3 only).
     * @since MV3
     */
    export function getAcceptLanguages(): Promise<string[]>;
    /**
     * Gets the accept-languages of the browser. This is different from the locale used by the browser; to get the locale, use i18n.getUILanguage.
     * Parameter languages: Array of the accept languages of the browser, such as en-US,en,zh-CN
     */
    export function getAcceptLanguages(callback: (languages: string[]) => void): void;
    /**
     * Gets the localized string for the specified message. If the message is missing, this method returns an empty string (''). If the format of the getMessage() call is wrong — for example, messageName is not a string or the substitutions array has more than 9 elements — this method returns undefined.
     * @param messageName The name of the message, as specified in the messages.json file.
     * @param substitutions Optional. Up to 9 substitution strings, if the message requires any.
     */
    export function getMessage(messageName: string, substitutions?: string | string[]): string;
    /**
     * Gets the browser UI language of the browser. This is different from i18n.getAcceptLanguages which returns the preferred user languages.
     * @since Chrome 35.
     */
    export function getUILanguage(): string;

    /** Detects the language of the provided text using CLD.
     * @param text User input string to be translated.
     * @return The `detectLanguage` method provides its result via callback or returned as a `Promise` (MV3 only).
     * @since MV3
     */
    export function detectLanguage(text: string): Promise<LanguageDetectionResult>;
    /** Detects the language of the provided text using CLD.
     * @param text User input string to be translated.
     */
    export function detectLanguage(text: string, callback: (result: LanguageDetectionResult) => void): void;
}

////////////////////
// Identity
////////////////////
/**
 * Use the chrome.identity API to get OAuth2 access tokens.
 * Permissions:  "identity"
 * @since Chrome 29.
 */
declare namespace chrome.identity {
    /** @since Chrome 32. */
    export interface AccountInfo {
        /** A unique identifier for the account. This ID will not change for the lifetime of the account. */
        id: string;
    }

    /** @since Chrome 84. */
    export enum AccountStatus {
        SYNC = "SYNC",
        ANY = "ANY",
    }

    export interface ProfileDetails {
        /**
         * Optional.
         * A status of the primary account signed into a profile whose ProfileUserInfo should be returned. Defaults to SYNC account status.
         */
        accountStatus?: AccountStatus | undefined;
    }

    export interface TokenDetails {
        /**
         * Optional.
         * Fetching a token may require the user to sign-in to Chrome, or approve the application's requested scopes. If the interactive flag is true, getAuthToken will prompt the user as necessary. When the flag is false or omitted, getAuthToken will return failure any time a prompt would be required.
         */
        interactive?: boolean | undefined;
        /**
         * Optional.
         * The account ID whose token should be returned. If not specified, the primary account for the profile will be used.
         * account is only supported when the "enable-new-profile-management" flag is set.
         * @since Chrome 37.
         */
        account?: AccountInfo | undefined;
        /**
         * Optional.
         * A list of OAuth2 scopes to request.
         * When the scopes field is present, it overrides the list of scopes specified in manifest.json.
         * @since Chrome 37.
         */
        scopes?: string[] | undefined;
    }

    export interface UserInfo {
        /** An email address for the user account signed into the current profile. Empty if the user is not signed in or the identity.email manifest permission is not specified. */
        email: string;
        /** A unique identifier for the account. This ID will not change for the lifetime of the account. Empty if the user is not signed in or (in M41+) the identity.email manifest permission is not specified. */
        id: string;
    }

    export interface TokenInformation {
        /** The specific token that should be removed from the cache. */
        token: string;
    }

    export interface WebAuthFlowOptions {
        /** The URL that initiates the auth flow. */
        url: string;
        /**
         * Optional.
         * Whether to launch auth flow in interactive mode.
         * Since some auth flows may immediately redirect to a result URL, launchWebAuthFlow hides its web view until the first navigation either redirects to the final URL, or finishes loading a page meant to be displayed.
         * If the interactive flag is true, the window will be displayed when a page load completes. If the flag is false or omitted, launchWebAuthFlow will return with an error if the initial navigation does not complete the flow.
         */
        interactive?: boolean | undefined;
    }

    export interface SignInChangeEvent extends chrome.events.Event<(account: AccountInfo, signedIn: boolean) => void> {}

    export interface GetAuthTokenResult {
        /**
         * Optional.
         * A list of OAuth2 scopes granted to the extension.
         */
        grantedScopes?: string[];
        /**
         * Optional.
         * The specific token associated with the request.
         */
        token?: string;
    }

    /**
     * Resets the state of the Identity API:
     *
     *  * Removes all OAuth2 access tokens from the token cache
     *  * Removes user's account preferences
     *  * De-authorizes the user from all auth flows
     * If `callback` is not provided, the function returns a Promise when the state has been cleared.
     * @since Chrome 87.
     * @param callback Called when the state has been cleared.
     */
    export function clearAllCachedAuthTokens(): Promise<void>;
    export function clearAllCachedAuthTokens(callback: () => void): void;

    /**
     * Retrieves a list of AccountInfo objects describing the accounts present on the profile.
     * getAccounts is only supported on dev channel.
     * Dev channel only.
     */
    export function getAccounts(): Promise<AccountInfo[]>;
    export function getAccounts(callback: (accounts: AccountInfo[]) => void): void;

    /**
     * Gets an OAuth2 access token using the client ID and scopes specified in the oauth2 section of manifest.json.
     * The Identity API caches access tokens in memory, so it's ok to call getAuthToken non-interactively any time a token is required. The token cache automatically handles expiration.
     * For a good user experience it is important interactive token requests are initiated by UI in your app explaining what the authorization is for. Failing to do this will cause your users to get authorization requests, or Chrome sign in screens if they are not signed in, with with no context. In particular, do not use getAuthToken interactively when your app is first launched.
     * If `callback` is not provided, the function returns a Promise that resolves with the token.
     * @param details Token options.
     * @param callback Called with an OAuth2 access token as specified by the manifest, or undefined if there was an error.
     */
    export function getAuthToken(details: TokenDetails): Promise<GetAuthTokenResult>;
    export function getAuthToken(
        details: TokenDetails,
        callback: (token?: string, grantedScopes?: string[]) => void,
    ): void;

    /**
     * Retrieves email address and obfuscated gaia id of the user signed into a profile.
     * This API is different from identity.getAccounts in two ways. The information returned is available offline, and it only applies to the primary account for the profile.
     * @since Chrome 37.
     */
    export function getProfileUserInfo(callback: (userInfo: UserInfo) => void): void;

    /** @since Chrome 84. */
    export function getProfileUserInfo(details: ProfileDetails, callback: (userInfo: UserInfo) => void): void;

    /** @since Chrome 84. */
    export function getProfileUserInfo(details: ProfileDetails): Promise<UserInfo>;

    /**
     * Removes an OAuth2 access token from the Identity API's token cache.
     * If an access token is discovered to be invalid, it should be passed to removeCachedAuthToken to remove it from the cache. The app may then retrieve a fresh token with getAuthToken.
     * If `callback` is not provided, the function returns a Promise when the state has been removed from the cache.
     * @param details Token information.
     * @param callback Called when the token has been removed from the cache.
     */
    export function removeCachedAuthToken(details: TokenInformation): Promise<void>;
    export function removeCachedAuthToken(details: TokenInformation, callback: () => void): void;

    /**
     * Starts an auth flow at the specified URL.
     * This method enables auth flows with non-Google identity providers by launching a web view and navigating it to the first URL in the provider's auth flow. When the provider redirects to a URL matching the pattern https://<app-id>.chromiumapp.org/*, the window will close, and the final redirect URL will be passed to the callback function.
     * For a good user experience it is important interactive auth flows are initiated by UI in your app explaining what the authorization is for. Failing to do this will cause your users to get authorization requests with no context. In particular, do not launch an interactive auth flow when your app is first launched.
     * @param details WebAuth flow options.
     * @param callback Optional. Called with the URL redirected back to your application.
     */
    export function launchWebAuthFlow(details: WebAuthFlowOptions, callback: (responseUrl?: string) => void): void;
    export function launchWebAuthFlow(details: WebAuthFlowOptions): Promise<string | undefined>;

    /**
     * Generates a redirect URL to be used in launchWebAuthFlow.
     * The generated URLs match the pattern https://<app-id>.chromiumapp.org/*.
     * @since Chrome 33.
     * @param path Optional. The path appended to the end of the generated URL.
     */
    export function getRedirectURL(path?: string): string;

    /**
     * Fired when signin state changes for an account on the user's profile.
     * @since Chrome 33.
     */
    export var onSignInChanged: SignInChangeEvent;
}

////////////////////
// Idle
////////////////////
/**
 * Use the chrome.idle API to detect when the machine's idle state changes.
 * Permissions:  "idle"
 * @since Chrome 6.
 */
declare namespace chrome.idle {
    export type IdleState = "active" | "idle" | "locked";
    export interface IdleStateChangedEvent extends chrome.events.Event<(newState: IdleState) => void> {}

    /**
     * Returns "locked" if the system is locked, "idle" if the user has not generated any input for a specified number of seconds, or "active" otherwise.
     * @param detectionIntervalInSeconds The system is considered idle if detectionIntervalInSeconds seconds have elapsed since the last user input detected.
     * Since Chrome 25.
     */
    export function queryState(detectionIntervalInSeconds: number, callback: (newState: IdleState) => void): void;
    /**
     * Sets the interval, in seconds, used to determine when the system is in an idle state for onStateChanged events. The default interval is 60 seconds.
     * @since Chrome 25.
     * @param intervalInSeconds Threshold, in seconds, used to determine when the system is in an idle state.
     */
    export function setDetectionInterval(intervalInSeconds: number): void;
    /**
     * Gets the time, in seconds, it takes until the screen is locked automatically while idle. Returns a zero duration if the screen is never locked automatically. Currently supported on Chrome OS only.
     * Parameter delay: Time, in seconds, until the screen is locked automatically while idle. This is zero if the screen never locks automatically.
     */
    export function getAutoLockDelay(callback: (delay: number) => void): void;

    /** Fired when the system changes to an active, idle or locked state. The event fires with "locked" if the screen is locked or the screensaver activates, "idle" if the system is unlocked and the user has not generated any input for a specified number of seconds, and "active" when the user generates input on an idle system. */
    export var onStateChanged: IdleStateChangedEvent;
}

////////////////////
// Input - IME
////////////////////
/**
 * Use the chrome.input.ime API to implement a custom IME for Chrome OS. This allows your extension to handle keystrokes, set the composition, and manage the candidate window.
 * Permissions:  "input"
 * @since Chrome 21.
 */
declare namespace chrome.input.ime {
    /** See http://www.w3.org/TR/DOM-Level-3-Events/#events-KeyboardEvent */
    export interface KeyboardEvent {
        /**
         * Optional.
         * Whether or not the SHIFT key is pressed.
         */
        shiftKey?: boolean | undefined;
        /**
         * Optional.
         * Whether or not the ALT key is pressed.
         */
        altKey?: boolean | undefined;
        /**
         * Optional.
         * Whether or not the ALTGR key is pressed.
         * @since Chrome 79.
         */
        altgrKey?: boolean | undefined;
        /**
         * Optional.
         * The ID of the request. Use the requestId param from the onKeyEvent event instead.
         * @deprecated since Chrome 79.
         */
        requestId?: string | undefined;
        /** Value of the key being pressed */
        key: string;
        /**
         * Optional.
         * Whether or not the CTRL key is pressed.
         */
        ctrlKey?: boolean | undefined;
        /** One of keyup or keydown. */
        type: string;
        /**
         * Optional.
         * The extension ID of the sender of this keyevent.
         * @since Chrome 34.
         */
        extensionId?: string | undefined;
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
        keyCode?: number | undefined;
        /**
         * Optional.
         * Whether or not the CAPS_LOCK is enabled.
         * @since Chrome 29.
         */
        capsLock?: boolean | undefined;
    }

    /**
     * The auto-capitalize type of the text field.
     * @since Chrome 69.
     */
    export type AutoCapitalizeType = "characters" | "words" | "sentences";
    /** Describes an input Context */
    export interface InputContext {
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
        /**
         * The auto-capitalize type of the text field.
         * @since Chrome 69.
         */
        autoCapitalize: AutoCapitalizeType;
        /**
         * Whether text entered into the text field should be used to improve typing suggestions for the user.
         * @since Chrome 68.
         */
        shouldDoLearning: boolean;
    }

    /**
     * A menu item used by an input method to interact with the user from the language menu.
     * @since Chrome 30.
     */
    export interface MenuItem {
        /** String that will be passed to callbacks referencing this MenuItem. */
        id: string;
        /** Optional. Text displayed in the menu for this item. */
        label?: string | undefined;
        /** Optional. The type of menu item. */
        style?: string | undefined;
        /** Optional. Indicates this item is visible. */
        visible?: boolean | undefined;
        /** Indicates this item should be drawn with a check. */
        checked?: boolean | undefined;
        /** Indicates this item is enabled. */
        enabled?: boolean | undefined;
    }

    export interface ImeParameters {
        /** MenuItems to use. */
        items: MenuItem[];
        /** ID of the engine to use */
        engineID: string;
    }

    export interface CommitTextParameters {
        /** The text to commit */
        text: string;
        /** ID of the context where the text will be committed */
        contextID: number;
    }

    export interface CandidateUsage {
        /** The title string of details description. */
        title: string;
        /** The body string of detail description. */
        body: string;
    }

    export interface CandidateTemplate {
        /** The candidate */
        candidate: string;
        /** The candidate's id */
        id: number;
        /**
         * Optional.
         * The id to add these candidates under
         */
        parentId?: number | undefined;
        /**
         * Optional.
         * Short string displayed to next to the candidate, often the shortcut key or index
         */
        label?: string | undefined;
        /**
         * Optional.
         * Additional text describing the candidate
         */
        annotation?: string | undefined;
        /**
         * Optional.
         * The usage or detail description of word.
         */
        usage?: CandidateUsage | undefined;
    }

    export interface CandidatesParameters {
        /** ID of the context that owns the candidate window. */
        contextID: number;
        /** List of candidates to show in the candidate window */
        candidates: CandidateTemplate[];
    }

    export interface CompositionParameterSegment {
        /** Index of the character to start this segment at */
        start: number;
        /** Index of the character to end this segment after. */
        end: number;
        /** The type of the underline to modify this segment. */
        style: string;
    }

    export interface CompositionParameters {
        /** ID of the context where the composition text will be set */
        contextID: number;
        /** Text to set */
        text: string;
        /** Optional. List of segments and their associated types. */
        segments?: CompositionParameterSegment[] | undefined;
        /** Position in the text of the cursor. */
        cursor: number;
        /** Optional. Position in the text that the selection starts at. */
        selectionStart?: number | undefined;
        /** Optional. Position in the text that the selection ends at. */
        selectionEnd?: number | undefined;
    }

    export interface MenuItemParameters {
        items: Object[];
        engineId: string;
    }

    /** Type of the assistive window. */
    export type AssistiveWindowType = "undo";

    /** ID of a button in an assistive window. */
    export type AssistiveWindowButton = "undo" | "addToDictionary";

    /** Properties of an assistive window. */
    export interface AssistiveWindowProperties {
        type: AssistiveWindowType;
        visible: boolean;
        announceString?: string | undefined;
    }

    export interface CandidateWindowParameterProperties {
        /**
         * Optional.
         * True to show the cursor, false to hide it.
         */
        cursorVisible?: boolean | undefined;
        /**
         * Optional.
         * True if the candidate window should be rendered vertical, false to make it horizontal.
         */
        vertical?: boolean | undefined;
        /**
         * Optional.
         * The number of candidates to display per page.
         */
        pageSize?: number | undefined;
        /**
         * Optional.
         * True to display the auxiliary text, false to hide it.
         */
        auxiliaryTextVisible?: boolean | undefined;
        /**
         * Optional.
         * Text that is shown at the bottom of the candidate window.
         */
        auxiliaryText?: string | undefined;
        /**
         * Optional.
         * True to show the Candidate window, false to hide it.
         */
        visible?: boolean | undefined;
        /**
         * Optional.
         * Where to display the candidate window.
         * @since Chrome 28.
         */
        windowPosition?: string | undefined;
        /**
         * Optional.
         * The index of the current chosen candidate out of total candidates.
         * @since Chrome 84.
         */
        currentCandidateIndex?: number | undefined;
        /**
         * Optional.
         * The total number of candidates for the candidate window.
         * @since Chrome 84.
         */
        totalCandidates?: number | undefined;
    }

    export interface CandidateWindowParameter {
        /** ID of the engine to set properties on. */
        engineID: string;
        properties: CandidateWindowParameterProperties;
    }

    export interface ClearCompositionParameters {
        /** ID of the context where the composition will be cleared */
        contextID: number;
    }

    export interface CursorPositionParameters {
        /** ID of the candidate to select. */
        candidateID: number;
        /** ID of the context that owns the candidate window. */
        contextID: number;
    }

    export interface SendKeyEventParameters {
        /** ID of the context where the key events will be sent, or zero to send key events to non-input field. */
        contextID: number;
        /** Data on the key event. */
        keyData: KeyboardEvent[];
    }

    export interface DeleteSurroundingTextParameters {
        /** ID of the engine receiving the event. */
        engineID: string;
        /** ID of the context where the surrounding text will be deleted. */
        contextID: number;
        /** The offset from the caret position where deletion will start. This value can be negative. */
        offset: number;
        /** The number of characters to be deleted */
        length: number;
    }

    export interface SurroundingTextInfo {
        /** The text around cursor. */
        text: string;
        /** The ending position of the selection. This value indicates caret position if there is no selection. */
        focus: number;
        /** The beginning position of the selection. This value indicates caret position if is no selection. */
        anchor: number;
    }

    export interface AssistiveWindowButtonClickedDetails {
        /** The ID of the button clicked. */
        buttonID: AssistiveWindowButton;
        /** The type of the assistive window. */
        windowType: AssistiveWindowType;
    }

    export interface BlurEvent extends chrome.events.Event<(contextID: number) => void> {}

    export interface AssistiveWindowButtonClickedEvent
        extends chrome.events.Event<(details: AssistiveWindowButtonClickedDetails) => void>
    {}

    export interface CandidateClickedEvent
        extends chrome.events.Event<(engineID: string, candidateID: number, button: string) => void>
    {}

    export interface KeyEventEvent
        extends chrome.events.Event<(engineID: string, keyData: KeyboardEvent, requestId: string) => void>
    {}

    export interface DeactivatedEvent extends chrome.events.Event<(engineID: string) => void> {}

    export interface InputContextUpdateEvent extends chrome.events.Event<(context: InputContext) => void> {}

    export interface ActivateEvent extends chrome.events.Event<(engineID: string, screen: string) => void> {}

    export interface FocusEvent extends chrome.events.Event<(context: InputContext) => void> {}

    export interface MenuItemActivatedEvent extends chrome.events.Event<(engineID: string, name: string) => void> {}

    export interface SurroundingTextChangedEvent
        extends chrome.events.Event<(engineID: string, surroundingInfo: SurroundingTextInfo) => void>
    {}

    export interface InputResetEvent extends chrome.events.Event<(engineID: string) => void> {}

    /**
     * Adds the provided menu items to the language menu when this IME is active.
     */
    export function setMenuItems(parameters: ImeParameters, callback?: () => void): void;
    /**
     * Commits the provided text to the current input.
     * @param callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set.
     */
    export function commitText(parameters: CommitTextParameters, callback?: (success: boolean) => void): void;
    /**
     * Sets the current candidate list. This fails if this extension doesn't own the active IME
     * @param callback Called when the operation completes.
     */
    export function setCandidates(parameters: CandidatesParameters, callback?: (success: boolean) => void): void;
    /**
     * Set the current composition. If this extension does not own the active IME, this fails.
     * @param callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set.
     */
    export function setComposition(parameters: CompositionParameters, callback?: (success: boolean) => void): void;
    /**
     * Updates the state of the MenuItems specified
     * @param callback Called when the operation completes
     */
    export function updateMenuItems(parameters: MenuItemParameters, callback?: () => void): void;
    /**
     * Shows/Hides an assistive window with the given properties.
     * @param parameters
     * @param callback Called when the operation completes.
     */
    export function setAssistiveWindowProperties(
        parameters: {
            contextID: number;
            properties: chrome.input.ime.AssistiveWindowProperties;
        },
        callback?: (success: boolean) => void,
    ): void;
    /**
     * Highlights/Unhighlights a button in an assistive window.
     * @param parameters
     * @param callback Called when the operation completes. On failure, chrome.runtime.lastError is set.
     */
    export function setAssistiveWindowButtonHighlighted(
        parameters: {
            contextID: number;
            buttonID: chrome.input.ime.AssistiveWindowButton;
            windowType: chrome.input.ime.AssistiveWindowType;
            announceString?: string | undefined;
            highlighted: boolean;
        },
        callback?: () => void,
    ): void;
    /**
     * Sets the properties of the candidate window. This fails if the extension doesn't own the active IME
     * @param callback Called when the operation completes.
     */
    export function setCandidateWindowProperties(
        parameters: CandidateWindowParameter,
        callback?: (success: boolean) => void,
    ): void;
    /**
     * Clear the current composition. If this extension does not own the active IME, this fails.
     * @param callback Called when the operation completes with a boolean indicating if the text was accepted or not. On failure, chrome.runtime.lastError is set.
     */
    export function clearComposition(
        parameters: ClearCompositionParameters,
        callback?: (success: boolean) => void,
    ): void;
    /**
     * Set the position of the cursor in the candidate window. This is a no-op if this extension does not own the active IME.
     * @param callback Called when the operation completes
     */
    export function setCursorPosition(
        parameters: CursorPositionParameters,
        callback?: (success: boolean) => void,
    ): void;
    /**
     * Sends the key events. This function is expected to be used by virtual keyboards. When key(s) on a virtual keyboard is pressed by a user, this function is used to propagate that event to the system.
     * @since Chrome 33.
     * @param callback Called when the operation completes.
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
    export var onBlur: BlurEvent;
    /** This event is sent when a button in an assistive window is clicked. */
    export var onAssistiveWindowButtonClicked: AssistiveWindowButtonClickedEvent;
    /** This event is sent if this extension owns the active IME. */
    export var onCandidateClicked: CandidateClickedEvent;
    /** This event is sent if this extension owns the active IME. */
    export var onKeyEvent: KeyEventEvent;
    /** This event is sent when an IME is deactivated. It signals that the IME will no longer be receiving onKeyPress events. */
    export var onDeactivated: DeactivatedEvent;
    /** This event is sent when the properties of the current InputContext change, such as the type. It is sent to all extensions that are listening to this event, and enabled by the user. */
    export var onInputContextUpdate: InputContextUpdateEvent;
    /** This event is sent when an IME is activated. It signals that the IME will be receiving onKeyPress events. */
    export var onActivate: ActivateEvent;
    /** This event is sent when focus enters a text box. It is sent to all extensions that are listening to this event, and enabled by the user. */
    export var onFocus: FocusEvent;
    /** Called when the user selects a menu item */
    export var onMenuItemActivated: MenuItemActivatedEvent;
    /**
     * Called when the editable string around caret is changed or when the caret position is moved. The text length is limited to 100 characters for each back and forth direction.
     * @since Chrome 27.
     */
    export var onSurroundingTextChanged: SurroundingTextChangedEvent;
    /**
     * This event is sent when chrome terminates ongoing text input session.
     * @since Chrome 29.
     */
    export var onReset: InputResetEvent;
}

////////////////////
// LoginState
////////////////////
/**
 * Use the chrome.loginState API to read and monitor the login state.
 * Permissions: "loginState"
 * @since Chrome 78.
 * Important: This API works only on Chrome OS.
 */
declare namespace chrome.loginState {
    export interface SessionStateChangedEvent extends chrome.events.Event<(sessionState: SessionState) => void> {}

    /** Possible profile types. */
    export type ProfileType = "SIGNIN_PROFILE" | "USER_PROFILE";

    /** Possible session states. */
    export type SessionState = "UNKNOWN" | "IN_OOBE_SCREEN" | "IN_LOGIN_SCREEN" | "IN_SESSION" | "IN_LOCK_SCREEN";

    /** Gets the type of the profile the extension is in. */
    export function getProfileType(callback: (profileType: ProfileType) => void): void;

    /** Gets the current session state. */
    export function getSessionState(callback: (sessionState: SessionState) => void): void;

    /** Dispatched when the session state changes. sessionState is the new session state.*/
    export const onSessionStateChanged: SessionStateChangedEvent;
}

////////////////////
// Management
////////////////////
/**
 * The chrome.management API provides ways to manage the list of extensions/apps that are installed and running. It is particularly useful for extensions that override the built-in New Tab page.
 * Permissions:  "management"
 * @since Chrome 8.
 */
declare namespace chrome.management {
    /** Information about an installed extension, app, or theme. */
    export interface ExtensionInfo {
        /**
         * Optional.
         * A reason the item is disabled.
         * @since Chrome 17.
         */
        disabledReason?: string | undefined;
        /** Optional. The launch url (only present for apps). */
        appLaunchUrl?: string | undefined;
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
        icons?: IconInfo[] | undefined;
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
        homepageUrl?: string | undefined;
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
        updateUrl?: string | undefined;
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
        launchType?: string | undefined;
        /**
         * Optional.
         * The currently available launch types (only present for apps).
         * @since Chrome 37.
         */
        availableLaunchTypes?: string[] | undefined;
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
        showConfirmDialog?: boolean | undefined;
    }

    export interface ManagementDisabledEvent extends chrome.events.Event<(info: ExtensionInfo) => void> {}

    export interface ManagementUninstalledEvent extends chrome.events.Event<(id: string) => void> {}

    export interface ManagementInstalledEvent extends chrome.events.Event<(info: ExtensionInfo) => void> {}

    export interface ManagementEnabledEvent extends chrome.events.Event<(info: ExtensionInfo) => void> {}

    /**
     * Enables or disables an app or extension.
     * @param id This should be the id from an item of management.ExtensionInfo.
     * @param enabled Whether this item should be enabled or disabled.
     * @return The `setEnabled` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setEnabled(id: string, enabled: boolean): Promise<void>;
    /**
     * Enables or disables an app or extension.
     * @param id This should be the id from an item of management.ExtensionInfo.
     * @param enabled Whether this item should be enabled or disabled.
     */
    export function setEnabled(id: string, enabled: boolean, callback: () => void): void;
    /**
     * Returns a list of permission warnings for the given extension id.
     * @since Chrome 15.
     * @param id The ID of an already installed extension.
     * @return The `getPermissionWarningsById` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getPermissionWarningsById(id: string): Promise<string[]>;
    /**
     * Returns a list of permission warnings for the given extension id.
     * @since Chrome 15.
     * @param id The ID of an already installed extension.
     */
    export function getPermissionWarningsById(id: string, callback: (permissionWarnings: string[]) => void): void;
    /**
     * Returns information about the installed extension, app, or theme that has the given ID.
     * @since Chrome 9.
     * @param id The ID from an item of management.ExtensionInfo.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(id: string): Promise<ExtensionInfo>;
    /**
     * Returns information about the installed extension, app, or theme that has the given ID.
     * @since Chrome 9.
     * @param id The ID from an item of management.ExtensionInfo.
     */
    export function get(id: string, callback: (result: ExtensionInfo) => void): void;
    /**
     * Returns a list of information about installed extensions and apps.
     * @return The `getAll` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAll(): Promise<ExtensionInfo[]>;
    /**
     * Returns a list of information about installed extensions and apps.
     */
    export function getAll(callback: (result: ExtensionInfo[]) => void): void;
    /**
     * Returns a list of permission warnings for the given extension manifest string. Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 15.
     * @param manifestStr Extension manifest JSON string.
     * @return The `getPermissionWarningsByManifest` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getPermissionWarningsByManifest(
        manifestStr: string,
    ): Promise<string[]>;
    /**
     * Returns a list of permission warnings for the given extension manifest string. Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 15.
     * @param manifestStr Extension manifest JSON string.
     */
    export function getPermissionWarningsByManifest(
        manifestStr: string,
        callback: (permissionwarnings: string[]) => void,
    ): void;
    /**
     * Launches an application.
     * @param id The extension id of the application.
     * @return The `launchApp` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function launchApp(id: string): Promise<void>;
    /**
     * Launches an application.
     * @param id The extension id of the application.
     */
    export function launchApp(id: string, callback: () => void): void;
    /**
     * Uninstalls a currently installed app or extension.
     * @since Chrome 21.
     * @param id This should be the id from an item of management.ExtensionInfo.
     * @return The `uninstall` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function uninstall(id: string, options?: UninstallOptions): Promise<void>;
    /**
     * Uninstalls a currently installed app or extension.
     * @since Chrome 21.
     * @param id This should be the id from an item of management.ExtensionInfo.
     */
    export function uninstall(id: string, callback: () => void): void;
    export function uninstall(id: string, options: UninstallOptions, callback: () => void): void;
    /**
     * Uninstalls a currently installed app or extension.
     * @deprecated since Chrome 21. The options parameter was added to this function.
     * @param id This should be the id from an item of management.ExtensionInfo.
     * @return The `uninstall` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function uninstall(id: string): Promise<void>;
    /**
     * Uninstalls a currently installed app or extension.
     * @deprecated since Chrome 21. The options parameter was added to this function.
     * @param id This should be the id from an item of management.ExtensionInfo.
     */
    export function uninstall(id: string, callback: () => void): void;
    /**
     * Returns information about the calling extension, app, or theme. Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 39.
     * @return The `getSelf` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getSelf(): Promise<ExtensionInfo>;
    /**
     * Returns information about the calling extension, app, or theme. Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 39.
     */
    export function getSelf(callback: (result: ExtensionInfo) => void): void;
    /**
     * Uninstalls the calling extension.
     * Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 26.
     * @return The `uninstallSelf` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function uninstallSelf(options?: UninstallOptions): Promise<void>;
    /**
     * Uninstalls the calling extension.
     * Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 26.
     */
    export function uninstallSelf(callback: () => void): void;
    export function uninstallSelf(options: UninstallOptions, callback: () => void): void;
    /**
     * Uninstalls the calling extension.
     * Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 26.
     * @return The `uninstallSelf` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function uninstallSelf(): Promise<void>;
    /**
     * Uninstalls the calling extension.
     * Note: This function can be used without requesting the 'management' permission in the manifest.
     * @since Chrome 26.
     */
    export function uninstallSelf(callback: () => void): void;
    /**
     * Display options to create shortcuts for an app. On Mac, only packaged app shortcuts can be created.
     * @since Chrome 37.
     * @return The `createAppShortcut` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function createAppShortcut(id: string): Promise<void>;
    /**
     * Display options to create shortcuts for an app. On Mac, only packaged app shortcuts can be created.
     * @since Chrome 37.
     */
    export function createAppShortcut(id: string, callback: () => void): void;
    /**
     * Set the launch type of an app.
     * @since Chrome 37.
     * @param id This should be the id from an app item of management.ExtensionInfo.
     * @param launchType The target launch type. Always check and make sure this launch type is in ExtensionInfo.availableLaunchTypes, because the available launch types vary on different platforms and configurations.
     * @return The `setLaunchType` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setLaunchType(id: string, launchType: string): Promise<void>;
    /**
     * Set the launch type of an app.
     * @since Chrome 37.
     * @param id This should be the id from an app item of management.ExtensionInfo.
     * @param launchType The target launch type. Always check and make sure this launch type is in ExtensionInfo.availableLaunchTypes, because the available launch types vary on different platforms and configurations.
     */
    export function setLaunchType(id: string, launchType: string, callback: () => void): void;
    /**
     * Generate an app for a URL. Returns the generated bookmark app.
     * @since Chrome 37.
     * @param url The URL of a web page. The scheme of the URL can only be "http" or "https".
     * @param title The title of the generated app.
     * @return The `generateAppForLink` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function generateAppForLink(url: string, title: string): Promise<ExtensionInfo>;
    /**
     * Generate an app for a URL. Returns the generated bookmark app.
     * @since Chrome 37.
     * @param url The URL of a web page. The scheme of the URL can only be "http" or "https".
     * @param title The title of the generated app.
     */
    export function generateAppForLink(url: string, title: string, callback: (result: ExtensionInfo) => void): void;

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
////////////////////
/**
 * Use the networking.config API to authenticate to captive portals.
 * Permissions:  "networking.config"
 * Important: This API works only on Chrome OS.
 * @since Chrome 43.
 */
declare namespace chrome.networking.config {
    export interface NetworkInfo {
        /** Currently only WiFi supported. */
        Type: string;
        /** Optional. A unique identifier of the network. */
        GUID?: string | undefined;
        /** Optional. A hex-encoded byte sequence. */
        HexSSID?: string | undefined;
        /** Optional. The decoded SSID of the network (default encoding is UTF-8). To filter for non-UTF-8 SSIDs, use HexSSID instead. */
        SSID?: string | undefined;
        /** Optional. The basic service set identification (BSSID) uniquely identifying the basic service set. BSSID is represented as a human readable, hex-encoded string with bytes separated by colons, e.g. 45:67:89:ab:cd:ef. */
        BSSID?: string | undefined;
        /** Optional. Identifier indicating the security type of the network. Valid values are None, WEP-PSK, WPA-PSK and WPA-EAP. */
        Security?: string | undefined;
    }

    export interface CaptivePorttalDetectedEvent extends chrome.events.Event<(networkInfo: NetworkInfo) => void> {}

    /**
     * Allows an extension to define network filters for the networks it can handle. A call to this function will remove all filters previously installed by the extension before setting the new list.
     * @param networks Network filters to set. Every NetworkInfo must either have the SSID or HexSSID set. Other fields will be ignored.
     * @param callback Called back when this operation is finished.
     */
    export function setNetworkFilter(networks: NetworkInfo[], callback: () => void): void;
    /**
     * Called by the extension to notify the network config API that it finished a captive portal authentication attempt and hand over the result of the attempt. This function must only be called with the GUID of the latest onCaptivePortalDetected event.
     * @param GUID Unique network identifier obtained from onCaptivePortalDetected.
     * @param result The result of the authentication attempt.
     * unhandled: The extension does not handle this network or captive portal (e.g. server end-point not found or not compatible).
     * succeeded: The extension handled this network and authenticated successfully.
     * rejected: The extension handled this network, tried to authenticate, however was rejected by the server.
     * failed: The extension handled this network, tried to authenticate, however failed due to an unspecified error.
     * @param callback Called back when this operation is finished.
     */
    export function finishAuthentication(GUID: string, result: string, callback?: () => void): void;

    /** This event fires everytime a captive portal is detected on a network matching any of the currently registered network filters and the user consents to use the extension for authentication. Network filters may be set using the setNetworkFilter. Upon receiving this event the extension should start its authentication attempt with the captive portal. When the extension finishes its attempt, it must call finishAuthentication with the GUID received with this event and the appropriate authentication result. */
    export var onCaptivePortalDetected: CaptivePorttalDetectedEvent;
}

////////////////////
// Notifications
// https://developer.chrome.com/extensions/notifications
////////////////////
/**
 * Use the chrome.notifications API to create rich notifications using templates and show these notifications to users in the system tray.
 * Permissions:  "notifications"
 * @since Chrome 28.
 */
declare namespace chrome.notifications {
    export type TemplateType = "basic" | "image" | "list" | "progress";

    export interface ButtonOptions {
        title: string;
        iconUrl?: string | undefined;
    }

    export interface ItemOptions {
        /** Title of one item of a list notification. */
        title: string;
        /** Additional details about this item. */
        message: string;
    }

    export type NotificationOptions<T extends boolean = false> =
        & {
            /**
             * Optional.
             * Alternate notification content with a lower-weight font.
             * @since Chrome 31.
             */
            contextMessage?: string | undefined;
            /** Optional. Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest. Zero is default. */
            priority?: number | undefined;
            /** Optional. A timestamp associated with the notification, in milliseconds past the epoch (e.g. Date.now() + n). */
            eventTime?: number | undefined;
            /** Optional. Text and icons for up to two notification action buttons. */
            buttons?: ButtonOptions[] | undefined;
            /** Optional. Items for multi-item notifications. */
            items?: ItemOptions[] | undefined;
            /**
             * Optional.
             * Current progress ranges from 0 to 100.
             * @since Chrome 30.
             */
            progress?: number | undefined;
            /**
             * Optional.
             * Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
             * @since Chrome 32.
             */
            isClickable?: boolean | undefined;
            /**
             * Optional.
             * A URL to the app icon mask. URLs have the same restrictions as iconUrl. The app icon mask should be in alpha channel, as only the alpha channel of the image will be considered.
             * @since Chrome 38.
             */
            appIconMaskUrl?: string | undefined;
            /** Optional. A URL to the image thumbnail for image-type notifications. URLs have the same restrictions as iconUrl. */
            imageUrl?: string | undefined;
            /**
             * Indicates that the notification should remain visible on screen until the user activates or dismisses the notification.
             * This defaults to false.
             * @since Chrome 50
             */
            requireInteraction?: boolean | undefined;
            /**
             * Optional.
             * Indicates that no sounds or vibrations should be made when the notification is being shown. This defaults to false.
             * @since Chrome 70
             */
            silent?: boolean | undefined;
        }
        & (T extends true ? {
                /**
                 * A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
                 * URLs can be a data URL, a blob URL, or a URL relative to a resource within this extension's .crx file. Required for notifications.create method.
                 */
                iconUrl: string;
                /** Main notification content. Required for notifications.create method. */
                message: string;
                /** Which type of notification to display. Required for notifications.create method. */
                type: TemplateType;
                /** Title of the notification (e.g. sender name for email). Required for notifications.create method. */
                title: string;
            }
            : {
                /**
                 * Optional.
                 * A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
                 * URLs can be a data URL, a blob URL, or a URL relative to a resource within this extension's .crx file. Required for notifications.create method.
                 */
                iconUrl?: string | undefined;
                /** Optional. Main notification content. Required for notifications.create method. */
                message?: string | undefined;
                /** Optional. Which type of notification to display. Required for notifications.create method. */
                type?: TemplateType | undefined;
                /** Optional. Title of the notification (e.g. sender name for email). Required for notifications.create method. */
                title?: string | undefined;
            });

    export interface NotificationClosedEvent
        extends chrome.events.Event<(notificationId: string, byUser: boolean) => void>
    {}

    export interface NotificationClickedEvent extends chrome.events.Event<(notificationId: string) => void> {}

    export interface NotificationButtonClickedEvent
        extends chrome.events.Event<(notificationId: string, buttonIndex: number) => void>
    {}

    export interface NotificationPermissionLevelChangedEvent extends chrome.events.Event<(level: string) => void> {}

    export interface NotificationShowSettingsEvent extends chrome.events.Event<() => void> {}

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
     */
    export function create(
        notificationId: string,
        options: NotificationOptions<true>,
        callback?: (notificationId: string) => void,
    ): void;
    /**
     * Creates and displays a notification.
     * @param notificationId Identifier of the notification. If not set or empty, an ID will automatically be generated. If it matches an existing notification, this method first clears that notification before proceeding with the create operation.
     * The notificationId parameter is required before Chrome 42.
     * @param options Contents of the notification.
     * @param callback Returns the notification id (either supplied or generated) that represents the created notification.
     * The callback is required before Chrome 42.
     */
    export function create(options: NotificationOptions<true>, callback?: (notificationId: string) => void): void;
    /**
     * Updates an existing notification.
     * @param notificationId The id of the notification to be updated. This is returned by notifications.create method.
     * @param options Contents of the notification to update to.
     * @param callback Called to indicate whether a matching notification existed.
     * The callback is required before Chrome 42.
     */
    export function update(
        notificationId: string,
        options: NotificationOptions,
        callback?: (wasUpdated: boolean) => void,
    ): void;
    /**
     * Clears the specified notification.
     * @param notificationId The id of the notification to be cleared. This is returned by notifications.create method.
     * @param callback Called to indicate whether a matching notification existed.
     * The callback is required before Chrome 42.
     */
    export function clear(notificationId: string, callback?: (wasCleared: boolean) => void): void;
    /**
     * Retrieves all the notifications.
     * @since Chrome 29.
     * @param callback Returns the set of notification_ids currently in the system.
     */
    export function getAll(callback: (notifications: Object) => void): void;
    /**
     * Retrieves whether the user has enabled notifications from this app or extension.
     * @since Chrome 32.
     * @param callback Returns the current permission level.
     */
    export function getPermissionLevel(callback: (level: string) => void): void;
}

////////////////////
// Offscreen
////////////////////
/**
 * Use the offscreen API to create and manage offscreen documents.
 * Availability: @since Chrome 109. Manifest v3.
 * Permissions: "offscreen"
 */
declare namespace chrome.offscreen {
    /** The reason(s) the extension is creating the offscreen document. */
    export enum Reason {
        /** A reason used for testing purposes only. */
        TESTING = "TESTING",
        /** The offscreen document is responsible for playing audio. */
        AUDIO_PLAYBACK = "AUDIO_PLAYBACK",
        /** The offscreen document needs to embed and script an iframe in order to modify the iframe's content. */
        IFRAME_SCRIPTING = "IFRAME_SCRIPTING",
        /** The offscreen document needs to embed an iframe and scrape its DOM to extract information. */
        DOM_SCRAPING = "DOM_SCRAPING",
        /** The offscreen document needs to interact with Blob objects (including URL.createObjectURL()). */
        BLOBS = "BLOBS",
        /** The offscreen document needs to use the DOMParser API. */
        DOM_PARSER = "DOM_PARSER",
        /** The offscreen document needs to interact with media streams from user media (e.g. getUserMedia()). */
        USER_MEDIA = "USER_MEDIA",
        /** The offscreen document needs to interact with media streams from display media (e.g. getDisplayMedia()). */
        DISPLAY_MEDIA = "DISPLAY_MEDIA",
        /** The offscreen document needs to use WebRTC APIs. */
        WEB_RTC = "WEB_RTC",
        /** The offscreen document needs to interact with the clipboard APIs(e.g. Navigator.clipboard). */
        CLIPBOARD = "CLIPBOARD",
        /** Specifies that the offscreen document needs access to localStorage. */
        LOCAL_STORAGE = "LOCAL_STORAGE",
        /** Specifies that the offscreen document needs to spawn workers. */
        WORKERS = "WORKERS",
        /** Specifies that the offscreen document needs to use navigator.geolocation. */
        GEOLOCATION = "GEOLOCATION",
    }

    /** The parameters describing the offscreen document to create. */
    export interface CreateParameters {
        /** The reason(s) the extension is creating the offscreen document. */
        reasons: Reason[];
        /** The (relative) URL to load in the document. */
        url: string;
        /** A developer-provided string that explains, in more detail, the need for the background context. The user agent _may_ use this in display to the user. */
        justification: string;
    }

    /**
     * Creates a new offscreen document for the extension.
     * @param parameters The parameters describing the offscreen document to create.
     * @return The `createDocument` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function createDocument(parameters: CreateParameters): Promise<void>;
    /**
     * Creates a new offscreen document for the extension.
     * @param parameters The parameters describing the offscreen document to create.
     * @param callback Invoked when the offscreen document is created and has completed its initial page load.
     */
    export function createDocument(parameters: CreateParameters, callback: () => void): void;

    /**
     * Closes the currently-open offscreen document for the extension.
     * @return The `closeDocument` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function closeDocument(): Promise<void>;
    /**
     * Closes the currently-open offscreen document for the extension.
     * @param callback Invoked when the offscreen document has been closed.
     */
    export function closeDocument(callback: () => void): void;

    /**
     * Determines whether the extension has an active document.
     * @return The `hasDocument` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function hasDocument(): Promise<boolean>;
    /**
     * Determines whether the extension has an active document.
     * @param callback Invoked with the result of whether the extension has an active offscreen document.
     */
    export function hasDocument(callback: (result: boolean) => void): void;
}

////////////////////
// Omnibox
////////////////////
/**
 * The omnibox API allows you to register a keyword with Google Chrome's address bar, which is also known as the omnibox.
 * Manifest:  "omnibox": {...}
 * @since Chrome 9.
 */
declare namespace chrome.omnibox {
    /** A suggest result. */
    export interface SuggestResult {
        /** The text that is put into the URL bar, and that is sent to the extension when the user chooses this entry. */
        content: string;
        /** The text that is displayed in the URL dropdown. Can contain XML-style markup for styling. The supported tags are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query), and 'dim' (for dim helper text). The styles can be nested, eg. dimmed match. You must escape the five predefined entities to display them as text: stackoverflow.com/a/1091953/89484 */
        description: string;
        /**
         * Whether the suggest result can be deleted by the user.
         * @since Chrome 63.
         */
        deletable?: boolean | undefined;
    }

    export interface Suggestion {
        /** The text that is displayed in the URL dropdown. Can contain XML-style markup for styling. The supported tags are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query), and 'dim' (for dim helper text). The styles can be nested, eg. dimmed match. */
        description: string;
    }

    /** The window disposition for the omnibox query. This is the recommended context to display results. */
    export type OnInputEnteredDisposition = "currentTab" | "newForegroundTab" | "newBackgroundTab";

    export interface OmniboxInputEnteredEvent
        extends chrome.events.Event<(text: string, disposition: OnInputEnteredDisposition) => void>
    {}

    export interface OmniboxInputChangedEvent
        extends chrome.events.Event<(text: string, suggest: (suggestResults: SuggestResult[]) => void) => void>
    {}

    export interface OmniboxInputStartedEvent extends chrome.events.Event<() => void> {}

    export interface OmniboxInputCancelledEvent extends chrome.events.Event<() => void> {}

    export interface OmniboxSuggestionDeletedEvent extends chrome.events.Event<(text: string) => void> {}

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
 * Use the chrome.pageAction API to put icons inside the address bar. Page actions represent actions that can be taken on the current page, but that aren't applicable to all pages.
 * Manifest:  "page_action": {...}
 * @since Chrome 5.
 */
declare namespace chrome.pageAction {
    export interface PageActionClickedEvent extends chrome.events.Event<(tab: chrome.tabs.Tab) => void> {}

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
        iconIndex?: number | undefined;
        /**
         * Optional.
         * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        imageData?: ImageData | { [index: number]: ImageData } | undefined;
        /**
         * Optional.
         * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        path?: string | { [index: string]: string } | undefined;
    }

    /**
     * Shows the page action. The page action is shown whenever the tab is selected.
     * @param tabId The id of the tab for which you want to modify the page action.
     * @param callback Supported since Chrome 67
     */
    export function hide(tabId: number, callback?: () => void): void;
    /**
     * Shows the page action. The page action is shown whenever the tab is selected.
     * @param tabId The id of the tab for which you want to modify the page action.
     * @param callback Supported since Chrome 67
     */
    export function show(tabId: number, callback?: () => void): void;
    /**
     * Sets the title of the page action. This is displayed in a tooltip over the page action.
     * @param callback Supported since Chrome 67
     */
    export function setTitle(details: TitleDetails, callback?: () => void): void;
    /**
     * Sets the html document to be opened as a popup when the user clicks on the page action's icon.
     * @param callback Supported since Chrome 67
     */
    export function setPopup(details: PopupDetails, callback?: () => void): void;
    /**
     * Gets the title of the page action.
     * @since Chrome 19.
     */
    export function getTitle(details: GetDetails, callback: (result: string) => void): void;
    /**
     * Gets the html document set as the popup for this page action.
     * @since Chrome 19.
     */
    export function getPopup(details: GetDetails, callback: (result: string) => void): void;
    /**
     * Sets the icon for the page action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the path or the imageData property must be specified.
     */
    export function setIcon(details: IconDetails, callback?: () => void): void;

    /** Fired when a page action icon is clicked. This event will not fire if the page action has a popup. */
    export var onClicked: PageActionClickedEvent;
}

////////////////////
// Page Capture
////////////////////
/**
 * Use the chrome.pageCapture API to save a tab as MHTML.
 * Permissions:  "pageCapture"
 * @since Chrome 18.
 */
declare namespace chrome.pageCapture {
    export interface SaveDetails {
        /** The id of the tab to save as MHTML. */
        tabId: number;
    }

    /**
     * Saves the content of the tab with given id as MHTML.
     * @param callback Called when the MHTML has been generated.
     * Parameter mhtmlData: The MHTML data as a Blob.
     */
    export function saveAsMHTML(details: SaveDetails, callback: (mhtmlData?: Blob) => void): void;
}

////////////////////
// Permissions
////////////////////
/**
 * Use the chrome.permissions API to request declared optional permissions at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary.
 * @since Chrome 16.
 */
declare namespace chrome.permissions {
    export interface Permissions {
        /**
         * Optional.
         * List of named permissions (does not include hosts or origins). Anything listed here must appear in the optional_permissions list in the manifest.
         */
        permissions?: string[] | undefined;
        /**
         * Optional.
         * List of origin permissions. Anything listed here must be a subset of a host that appears in the optional_permissions list in the manifest. For example, if http://*.example.com/ or http://* appears in optional_permissions, you can request an origin of http://help.example.com/. Any path is ignored.
         */
        origins?: string[] | undefined;
    }

    export interface PermissionsRemovedEvent {
        addListener(callback: (/** The permissions that have been removed*/ permissions: Permissions) => void): void;
    }

    export interface PermissionsAddedEvent {
        addListener(callback: (/** The newly-acquired permissions*/ permissions: Permissions) => void): void;
    }

    /**
     * Checks if the extension has the specified permissions.
     * @return A Promise that resolves with boolean: True if the extension has the specified permissions.
     */
    export function contains(permissions: Permissions): Promise<boolean>;
    /**
     * Checks if the extension has the specified permissions.
     * Parameter result: True if the extension has the specified permissions.
     */
    export function contains(permissions: Permissions, callback: (result: boolean) => void): void;
    /**
     * Gets the extension's current set of permissions.
     * @return A Promise that resolves with Permissions object describing the extension's active permissions.
     */
    export function getAll(): Promise<Permissions>;
    /**
     * Gets the extension's current set of permissions.
     */
    export function getAll(callback: (permissions: Permissions) => void): void;
    /**
     * Requests access to the specified permissions. These permissions must be defined in the optional_permissions field of the manifest. If there are any problems requesting the permissions, runtime.lastError will be set.
     * @return A Promise that resolves with boolean: True if the user granted the specified permissions.
     */
    export function request(permissions: Permissions): Promise<boolean>;
    /**
     * Requests access to the specified permissions. These permissions must be defined in the optional_permissions field of the manifest. If there are any problems requesting the permissions, runtime.lastError will be set.
     * Parameter granted: True if the user granted the specified permissions.
     */
    export function request(permissions: Permissions, callback?: (granted: boolean) => void): void;
    /**
     * Removes access to the specified permissions. If there are any problems removing the permissions, runtime.lastError will be set.
     * @return A Promise that resolves with boolean: True if the permissions were removed.
     */
    export function remove(permissions: Permissions): Promise<boolean>;
    /**
     * Removes access to the specified permissions. If there are any problems removing the permissions, runtime.lastError will be set.
     * Parameter removed: True if the permissions were removed.
     */
    export function remove(permissions: Permissions, callback?: (removed: boolean) => void): void;

    /** Fired when access to permissions has been removed from the extension. */
    export var onRemoved: PermissionsRemovedEvent;
    /** Fired when the extension acquires new permissions. */
    export var onAdded: PermissionsAddedEvent;
}

////////////////////
// Platform Keys
////////////////////
/**
 * Use the chrome.platformKeys API to access client certificates managed by the platform. If the user or policy grants the permission, an extension can use such a certficate in its custom authentication protocol. E.g. this allows usage of platform managed certificates in third party VPNs (see chrome.vpnProvider).
 * Permissions:  "platformKeys"
 * Important: This API works only on Chrome OS.
 * @since Chrome 45.
 */
declare namespace chrome.platformKeys {
    export interface Match {
        /** The DER encoding of a X.509 certificate. */
        certificate: ArrayBuffer;
        /** The  KeyAlgorithm of the certified key. This contains algorithm parameters that are inherent to the key of the certificate (e.g. the key length). Other parameters like the hash function used by the sign function are not included. */
        keyAlgorithm: KeyAlgorithm;
    }

    export interface ClientCertificateSelectRequestDetails {
        /** This field is a list of the types of certificates requested, sorted in order of the server's preference. Only certificates of a type contained in this list will be retrieved. If certificateTypes is the empty list, however, certificates of any type will be returned. */
        certificateTypes: string[];
        /** List of distinguished names of certificate authorities allowed by the server. Each entry must be a DER-encoded X.509 DistinguishedName. */
        certificateAuthorities: ArrayBuffer[];
    }

    export interface ClientCertificateSelectDetails {
        /** Only certificates that match this request will be returned. */
        request: ClientCertificateSelectRequestDetails;
        /**
         * Optional.
         * If given, the selectClientCertificates operates on this list. Otherwise, obtains the list of all certificates from the platform's certificate stores that are available to this extensions. Entries that the extension doesn't have permission for or which doesn't match the request, are removed.
         */
        clientCerts?: ArrayBuffer[] | undefined;
        /** If true, the filtered list is presented to the user to manually select a certificate and thereby granting the extension access to the certificate(s) and key(s). Only the selected certificate(s) will be returned. If is false, the list is reduced to all certificates that the extension has been granted access to (automatically or manually). */
        interactive: boolean;
    }

    export interface ServerCertificateVerificationDetails {
        /** Each chain entry must be the DER encoding of a X.509 certificate, the first entry must be the server certificate and each entry must certify the entry preceding it. */
        serverCertificateChain: ArrayBuffer[];
        /** The hostname of the server to verify the certificate for, e.g. the server that presented the serverCertificateChain. */
        hostname: string;
    }

    export interface ServerCertificateVerificationResult {
        /** The result of the trust verification: true if trust for the given verification details could be established and false if trust is rejected for any reason. */
        trusted: boolean;
        /**
         * If the trust verification failed, this array contains the errors reported by the underlying network layer. Otherwise, this array is empty.
         * Note: This list is meant for debugging only and may not contain all relevant errors. The errors returned may change in future revisions of this API, and are not guaranteed to be forwards or backwards compatible.
         */
        debug_errors: string[];
    }

    /**
     * This function filters from a list of client certificates the ones that are known to the platform, match request and for which the extension has permission to access the certificate and its private key. If interactive is true, the user is presented a dialog where they can select from matching certificates and grant the extension access to the certificate. The selected/filtered client certificates will be passed to callback.
     * Parameter matches: The list of certificates that match the request, that the extension has permission for and, if interactive is true, that were selected by the user.
     */
    export function selectClientCertificates(
        details: ClientCertificateSelectDetails,
        callback: (matches: Match[]) => void,
    ): void;
    /**
     * Passes the key pair of certificate for usage with platformKeys.subtleCrypto to callback.
     * @param certificate The certificate of a Match returned by selectClientCertificates.
     * @param parameters Determines signature/hash algorithm parameters additionally to the parameters fixed by the key itself. The same parameters are   accepted as by WebCrypto's importKey function, e.g. RsaHashedImportParams for a RSASSA-PKCS1-v1_5 key. For RSASSA-PKCS1-v1_5 keys, additionally the parameters { 'hash': { 'name': 'none' } } are supported. The sign function will then apply PKCS#1 v1.5 padding and but not hash the given data.
     * @param callback The public and private CryptoKey of a certificate which can only be used with platformKeys.subtleCrypto.
     * Optional parameter privateKey: Might be null if this extension does not have access to it.
     */
    export function getKeyPair(
        certificate: ArrayBuffer,
        parameters: Object,
        callback: (publicKey: CryptoKey, privateKey: CryptoKey | null) => void,
    ): void;
    /**
     * Passes the key pair of publicKeySpkiDer for usage with platformKeys.subtleCrypto to callback.
     * @param publicKeySpkiDer A DER-encoded X.509 SubjectPublicKeyInfo, obtained e.g. by calling WebCrypto's exportKey function with format="spki".
     * @param parameters Provides signature and hash algorithm parameters, in addition to those fixed by the key itself. The same parameters are accepted as by WebCrypto's importKey function, e.g. RsaHashedImportParams for a RSASSA-PKCS1-v1_5 key. For RSASSA-PKCS1-v1_5 keys, we need to also pass a "hash" parameter { "hash": { "name": string } }. The "hash" parameter represents the name of the hashing algorithm to be used in the digest operation before a sign. It is possible to pass "none" as the hash name, in which case the sign function will apply PKCS#1 v1.5 padding and but not hash the given data.
     * Currently, this function only supports the "RSASSA-PKCS1-v1_5" algorithm with one of the hashing algorithms "none", "SHA-1", "SHA-256", "SHA-384", and "SHA-512".
     * @param callback The public and private CryptoKey of a certificate which can only be used with platformKeys.subtleCrypto.
     * Optional parameter privateKey: Might be null if this extension does not have access to it.
     * @since Chrome 85.
     */
    export function getKeyPairBySpki(
        publicKeySpkiDer: ArrayBuffer,
        parameters: Object,
        callback: (publicKey: CryptoKey, privateKey: CryptoKey | null) => void,
    ): void;
    /** An implementation of WebCrypto's  SubtleCrypto that allows crypto operations on keys of client certificates that are available to this extension. */
    export function subtleCrypto(): SubtleCrypto;
    /**
     * Checks whether details.serverCertificateChain can be trusted for details.hostname according to the trust settings of the platform. Note: The actual behavior of the trust verification is not fully specified and might change in the future. The API implementation verifies certificate expiration, validates the certification path and checks trust by a known CA. The implementation is supposed to respect the EKU serverAuth and to support subject alternative names.
     */
    export function verifyTLSServerCertificate(
        details: ServerCertificateVerificationDetails,
        callback: (result: ServerCertificateVerificationResult) => void,
    ): void;
}

////////////////////
// Power
////////////////////
/**
 * Use the chrome.power API to override the system's power management features.
 * Permissions:  "power"
 * @since Chrome 27.
 */
declare namespace chrome.power {
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
 * Permissions:  "printerProvider"
 * @since Chrome 44.
 */
declare namespace chrome.printerProvider {
    export interface PrinterInfo {
        /** Unique printer ID. */
        id: string;
        /** Printer's human readable name. */
        name: string;
        /** Optional. Printer's human readable description. */
        description?: string | undefined;
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

    export interface PrinterRequestedEvent
        extends chrome.events.Event<(resultCallback: (printerInfo: PrinterInfo[]) => void) => void>
    {}

    export interface PrinterInfoRequestedEvent
        extends chrome.events.Event<(device: any, resultCallback: (printerInfo?: PrinterInfo) => void) => void>
    {}

    export interface CapabilityRequestedEvent extends
        chrome.events.Event<
            (printerId: string, resultCallback: (capabilities: PrinterCapabilities) => void) => void
        >
    {}

    export interface PrintRequestedEvent
        extends chrome.events.Event<(printJob: PrintJob, resultCallback: (result: string) => void) => void>
    {}

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
 * Use the chrome.privacy API to control usage of the features in Chrome that can affect a user's privacy. This API relies on the ChromeSetting prototype of the type API for getting and setting Chrome's configuration.
 * Permissions:  "privacy"
 * The Chrome Privacy Whitepaper gives background detail regarding the features which this API can control.
 * @since Chrome 18.
 */
declare namespace chrome.privacy {
    export interface Services {
        /** since Chrome 20. */
        spellingServiceEnabled: chrome.types.ChromeSetting;
        searchSuggestEnabled: chrome.types.ChromeSetting;
        instantEnabled: chrome.types.ChromeSetting;
        alternateErrorPagesEnabled: chrome.types.ChromeSetting;
        safeBrowsingEnabled: chrome.types.ChromeSetting;
        /** @deprecated since Chrome 70. Please use privacy.services.autofillAddressEnabled and privacy.services.autofillCreditCardEnabled. */
        autofillEnabled: chrome.types.ChromeSetting;
        translationServiceEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 38. */
        passwordSavingEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 42. */
        hotwordSearchEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 42. */
        safeBrowsingExtendedReportingEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 70. */
        autofillAddressEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 70. */
        autofillCreditCardEnabled: chrome.types.ChromeSetting;
    }

    export interface Network {
        networkPredictionEnabled: chrome.types.ChromeSetting;
        /** @deprecated since Chrome 48. Please use privacy.network.webRTCIPHandlingPolicy. */
        webRTCMultipleRoutesEnabled: chrome.types.ChromeSetting;
        /** @deprecated since Chrome 48. Please use privacy.network.webRTCIPHandlingPolicy. */
        webRTCNonProxiedUdpEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 48. */
        webRTCIPHandlingPolicy: chrome.types.ChromeSetting;
    }

    export interface Websites {
        thirdPartyCookiesAllowed: chrome.types.ChromeSetting;
        referrersEnabled: chrome.types.ChromeSetting;
        hyperlinkAuditingEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 21. Available on Windows and ChromeOS only. */
        protectedContentEnabled: chrome.types.ChromeSetting;
        /** @since Chrome 65. */
        doNotTrackEnabled: chrome.types.ChromeSetting;
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
 * Use the chrome.proxy API to manage Chrome's proxy settings. This API relies on the ChromeSetting prototype of the type API for getting and setting the proxy configuration.
 * Permissions:  "proxy"
 * @since Chrome 13.
 */
declare namespace chrome.proxy {
    /** An object holding proxy auto-config information. Exactly one of the fields should be non-empty. */
    export interface PacScript {
        /** Optional. URL of the PAC file to be used. */
        url?: string | undefined;
        /** Optional. If true, an invalid PAC script will prevent the network stack from falling back to direct connections. Defaults to false. */
        mandatory?: boolean | undefined;
        /** Optional. A PAC script. */
        data?: string | undefined;
    }

    /** An object encapsulating a complete proxy configuration. */
    export interface ProxyConfig {
        /** Optional. The proxy rules describing this configuration. Use this for 'fixed_servers' mode. */
        rules?: ProxyRules | undefined;
        /** Optional. The proxy auto-config (PAC) script for this configuration. Use this for 'pac_script' mode. */
        pacScript?: PacScript | undefined;
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
        scheme?: string | undefined;
        /** Optional. The port of the proxy server. Defaults to a port that depends on the scheme. */
        port?: number | undefined;
    }

    /** An object encapsulating the set of proxy rules for all protocols. Use either 'singleProxy' or (a subset of) 'proxyForHttp', 'proxyForHttps', 'proxyForFtp' and 'fallbackProxy'. */
    export interface ProxyRules {
        /** Optional. The proxy server to be used for FTP requests. */
        proxyForFtp?: ProxyServer | undefined;
        /** Optional. The proxy server to be used for HTTP requests. */
        proxyForHttp?: ProxyServer | undefined;
        /** Optional. The proxy server to be used for everything else or if any of the specific proxyFor... is not specified. */
        fallbackProxy?: ProxyServer | undefined;
        /** Optional. The proxy server to be used for all per-URL requests (that is http, https, and ftp). */
        singleProxy?: ProxyServer | undefined;
        /** Optional. The proxy server to be used for HTTPS requests. */
        proxyForHttps?: ProxyServer | undefined;
        /** Optional. List of servers to connect to without a proxy server. */
        bypassList?: string[] | undefined;
    }

    export interface ErrorDetails {
        /** Additional details about the error such as a JavaScript runtime error. */
        details: string;
        /** The error description. */
        error: string;
        /** If true, the error was fatal and the network transaction was aborted. Otherwise, a direct connection is used instead. */
        fatal: boolean;
    }

    export interface ProxyErrorEvent extends chrome.events.Event<(details: ErrorDetails) => void> {}

    export var settings: chrome.types.ChromeSetting;
    /** Notifies about proxy errors. */
    export var onProxyError: ProxyErrorEvent;
}

////////////////////
// Search
////////////////////
/**
 * Use the chrome.search API to search via the default provider.
 * Permissions:  "search"
 */

declare namespace chrome.search {
    export type Disposition = "CURRENT_TAB" | "NEW_TAB" | "NEW_WINDOW";

    export interface QueryInfo {
        /** Location where search results should be displayed. CURRENT_TAB is the default.  */
        disposition?: Disposition | undefined;
        /** Location where search results should be displayed. tabIdcannot be used with disposition. */
        tabId?: number | undefined;
        /** String to query with the default search provider. */
        text?: string | undefined;
    }

    /**
     * Used to query the default search provider. In case of an error, runtime.lastError will be set.
     * @param options search configuration options.
     */
    export function query(options: QueryInfo, callback: () => void): void;

    /**
     * Used to query the default search provider. In case of an error, runtime.lastError will be set.
     * @param options search configuration options.
     * @return The `query` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function query(options: QueryInfo): Promise<void>;
}

////////////////////
// Serial
////////////////////
/**
 * Use the <code>chrome.serial</code> API to read from and write to a device connected to a serial port.
 * Permissions:  "enterprise.serial"
 * Since: Chrome 29
 * Important: This API works only on Chrome OS.
 */
declare namespace chrome.serial {
    export const DataBits: {
        SEVEN: "seven";
        EIGHT: "eight";
    };
    export const ParityBit: {
        NO: "no";
        ODD: "odd";
        EVEN: "even";
    };
    export const StopBits: {
        ONE: "one";
        TWO: "two";
    };

    export interface DeviceInfo {
        /** The device's system path. This should be passed as the path argument to chrome.serial.connect in order to connect to this device. */
        path: string;
        /** Optional. A PCI or USB vendor ID if one can be determined for the underlying device. */
        vendorId?: number | undefined;
        /** Optional. A USB product ID if one can be determined for the underlying device. */
        productId?: number | undefined;
        /** Optional. A human-readable display name for the underlying device if one can be queried from the host driver. */
        displayName?: number | undefined;
    }

    export interface ConnectionInfo {
        /** The id of the serial port connection. */
        connectionId?: number | undefined;
        /** Flag indicating whether the connection is blocked from firing onReceive events. */
        paused: boolean;
        /** See ConnectionOptions.persistent */
        persistent: boolean;
        /** See ConnectionOptions.name */
        name: string;
        /** See ConnectionOptions.bufferSize */
        bufferSize: number;
        /** See ConnectionOptions.receiveTimeout */
        receiveTimeout?: number | undefined;
        /** See ConnectionOptions.sendTimeout */
        sendTimeout?: number | undefined;
        /** Optional. See ConnectionOptions.bitrate.
         * This field may be omitted or inaccurate if a non-standard bitrate is in use, or if an error occurred while querying the underlying device. */
        bitrate?: number | undefined;
        /** Optional. See ConnectionOptions.dataBits. This field may be omitted if an error occurred while querying the underlying device. */
        dataBits?: typeof DataBits[keyof typeof DataBits] | undefined;
        /** Optional. See ConnectionOptions.parityBit. This field may be omitted if an error occurred while querying the underlying device. */
        parityBit?: typeof ParityBit[keyof typeof ParityBit] | undefined;
        /** Optional. See ConnectionOptions.stopBits. This field may be omitted if an error occurred while querying the underlying device. */
        stopBits?: typeof StopBits[keyof typeof StopBits] | undefined;
        /** Optional. Flag indicating whether or not to enable RTS/CTS hardware flow control. Defaults to false. */
        ctsFlowControl?: boolean | undefined;
    }

    export interface ConnectionOptions {
        /** Optional. Flag indicating whether or not the connection should be left open when the application is suspended (see Manage App Lifecycle: https://developer.chrome.com/apps/app_lifecycle).
         *  The default value is "false." When the application is loaded, any serial connections previously opened with persistent=true can be fetched with getConnections. */
        persistent?: boolean | undefined;
        /** Optional. An application-defined string to associate with the connection. */
        name?: string | undefined;
        /** Optional. The size of the buffer used to receive data. The default value is 4096. */
        bufferSize?: number | undefined;
        /** Optional. The requested bitrate of the connection to be opened.
         * For compatibility with the widest range of hardware, this number should match one of commonly-available bitrates,
         * such as 110, 300, 1200, 2400, 4800, 9600, 14400, 19200, 38400, 57600, 115200.
         * There is no guarantee, of course, that the device connected to the serial port will support the requested bitrate, even if the port itself supports that bitrate.
         * 9600 will be passed by default. */
        bitrate?: number | undefined;
        /** Optional. "eight" will be passed by default. */
        dataBits?: typeof DataBits[keyof typeof DataBits] | undefined;
        /** Optional. "no" will be passed by default. */
        parityBit?: typeof ParityBit[keyof typeof ParityBit] | undefined;
        /** Optional. "one" will be passed by default. */
        stopBits?: typeof StopBits[keyof typeof StopBits] | undefined;
        /** Optional. Flag indicating whether or not to enable RTS/CTS hardware flow control. Defaults to false. */
        ctsFlowControl?: boolean | undefined;
        /** Optional. The maximum amount of time (in milliseconds) to wait for new data before raising an onReceiveError event with a "timeout" error.
         * If zero, receive timeout errors will not be raised for the connection.
         * Defaults to 0. */
        receiveTimeout?: number | undefined;
        /** Optional. The maximum amount of time (in milliseconds) to wait for a send operation to complete before calling the callback with a "timeout" error.
         * If zero, send timeout errors will not be triggered.
         * Defaults to 0. */
        sendTimeout?: number | undefined;
    }

    /**
     * @since Chrome 33.
     * @description Returns information about available serial devices on the system. The list is regenerated each time this method is called.
     * @param callback Called with the list of DeviceInfo objects.
     */
    export function getDevices(callback: (ports: DeviceInfo[]) => void): void;

    /**
     * @since Chrome 33.
     * @description Connects to a given serial port.
     * @param path The system path of the serial port to open.
     * @param options Port configuration options.
     * @param callback Called when the connection has been opened.
     */
    export function connect(
        path: string,
        options: ConnectionOptions,
        callback: (connectionInfo: ConnectionInfo) => void,
    ): void;

    /**
     * @since Chrome 33.
     * @description Update the option settings on an open serial port connection.
     * @param connectionId The id of the opened connection.
     * @param options Port configuration options.
     * @param callback Called when the configuration has completed.
     */
    export function update(connectionId: number, options: ConnectionOptions, callback: (result: boolean) => void): void;

    /**
     * @since Chrome 33.
     * @description Disconnects from a serial port.
     * @param connectionId The id of the opened connection.
     * @param callback Called when the connection has been closed.
     */
    export function disconnect(connectionId: number, callback: (result: boolean) => void): void;

    /**
     * @since Chrome 33.
     * @description Pauses or unpauses an open connection.
     * @param connectionId The id of the opened connection.
     * @param paused Flag to indicate whether to pause or unpause.
     * @param callback Called when the connection has been successfully paused or unpaused.
     */
    export function setPaused(connectionId: number, paused: boolean, callback: () => void): void;

    /**
     * @since Chrome 33.
     * @description Retrieves the state of a given connection.
     * @param callback Called with connection state information when available.
     */
    export function getInfo(callback: (connectionInfos: ConnectionInfo[]) => void): void;

    /**
     * @since Chrome 33.
     * @description Retrieves the list of currently opened serial port connections owned by the application.
     * @param callback Called with the list of connections when available.
     */
    export function getConnections(callback: (connectionInfos: ConnectionInfo[]) => void): void;

    /**
     * @since Chrome 33.
     * @description Writes data to the given connection.
     * @param connectionId The id of the connection.
     * @param data The data to send.
     * @param callback Called when the operation has completed.
     */
    export function send(connectionId: number, data: ArrayBuffer, callback: (sendInfo: object) => void): void;

    /**
     * @description Flushes all bytes in the given connection's input and output buffers.
     * @param connectionId The id of the connection.
     * @param callback
     */
    export function flush(connectionId: number, callback: (result: boolean) => void): void;

    /**
     * @description Retrieves the state of control signals on a given connection.
     * @param connectionId The id of the connection.
     * @param callback Called when the control signals are available.
     */
    export function getControlSignals(connectionId: number, callback: (signals: object) => void): void;

    /**
     * @description Sets the state of control signals on a given connection.
     * @param connectionId The id of the connection.
     * @param signals The set of signal changes to send to the device:
     * boolean:    (optional) dtr - DTR (Data Terminal Ready).
     * boolean:    (optional) rts - RTS (Request To Send).
     * @param callback Called once the control signals have been set.
     */
    export function setControlSignals(connectionId: number, signals: object, callback: (result: boolean) => void): void;

    /**
     * @since Chrome 45.
     * @description Suspends character transmission on a given connection and places the transmission line in a break state until the clearBreak is called.
     * @param connectionId The id of the connection.
     * @param callback
     */
    export function setBreak(connectionId: number, callback: (result: boolean) => void): void;

    /**
     * @since Chrome 45.
     * @description Restore character transmission on a given connection and place the transmission line in a nonbreak state.
     * @param connectionId The id of the connection.
     * @param callback
     */
    export function clearBreak(connectionId: number, callback: (result: boolean) => void): void;
}

declare namespace chrome.serial.onReceive {
    export interface OnReceiveInfo {
        /** The connection identifier. */
        connectionId: number;
        /** The data received. */
        data: ArrayBuffer;
    }

    /**
     * @since Chrome 33.
     * @description Event raised when data has been read from the connection.
     * @param callback
     */
    export function addListener(callback: (info: OnReceiveInfo) => void): void;
}

declare namespace chrome.serial.onReceiveError {
    export const OnReceiveErrorEnum: {
        /* The connection was disconnected. */
        disconnected: "disconnected";
        /* No data has been received for receiveTimeout milliseconds. */
        timeout: "timeout";
        /* The device was most likely disconnected from the host. */
        device_lost: "device_lost";
        /* The device detected a break condition. */
        break: "break";
        /* The device detected a framing error. */
        frame_error: "frame_error";
        /* A character-buffer overrun has occurred. The next character is lost. */
        overrun: "overrun";
        /* An input buffer overflow has occurred. There is either no room in the input buffer, or a character was received after the end-of-file (EOF) character. */
        buffer_overflow: "buffer_overflow";
        /* The device detected a parity error. */
        parity_error: "parity_error";
        /* A system error occurred and the connection may be unrecoverable. */
        system_error: "system_error";
    };

    export interface OnReceiveErrorInfo {
        /** The connection identifier. */
        connectionId: number;
        /** The data received. */
        error: ArrayBuffer;
    }

    /**
     * @since Chrome 33.
     * @description Event raised when an error occurred while the runtime was waiting for data on the serial port.
     * Once this event is raised, the connection may be set to paused. A "timeout" error does not pause the connection.
     * @param callback
     */
    export function addListener(callback: (info: OnReceiveErrorInfo) => void): void;
}

type DocumentLifecycle = "prerender" | "active" | "cached" | "pending_deletion";
type FrameType = "outermost_frame" | "fenced_frame" | "sub_frame";

////////////////////
// Runtime
////////////////////
/**
 * Use the chrome.runtime API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs.
 * @since Chrome 22
 */
declare namespace chrome.runtime {
    /** This will be defined during an API method callback if there was an error */
    export var lastError: LastError | undefined;
    /** The ID of the extension/app. */
    export var id: string;

    /** https://developer.chrome.com/docs/extensions/reference/runtime/#type-PlatformOs */
    export type PlatformOs = "mac" | "win" | "android" | "cros" | "linux" | "openbsd";
    /** https://developer.chrome.com/docs/extensions/reference/runtime/#type-PlatformArch */
    export type PlatformArch = "arm" | "arm64" | "x86-32" | "x86-64" | "mips" | "mips64";
    /** https://developer.chrome.com/docs/extensions/reference/runtime/#type-PlatformNaclArch */
    export type PlatformNaclArch = "arm" | "x86-32" | "x86-64" | "mips" | "mips64";
    /** https://developer.chrome.com/docs/extensions/reference/runtime/#type-OnInstalledReason */
    export enum OnInstalledReason {
        INSTALL = "install",
        UPDATE = "update",
        CHROME_UPDATE = "chrome_update",
        SHARED_MODULE_UPDATE = "shared_module_update",
    }

    export interface LastError {
        /** Optional. Details about the error which occurred.  */
        message?: string | undefined;
    }

    export interface ConnectInfo {
        name?: string | undefined;
        includeTlsChannelId?: boolean | undefined;
    }

    export interface InstalledDetails {
        /**
         * The reason that this event is being dispatched.
         */
        reason: OnInstalledReason;
        /**
         * Optional.
         * Indicates the previous version of the extension, which has just been updated. This is present only if 'reason' is 'update'.
         */
        previousVersion?: string | undefined;
        /**
         * Optional.
         * Indicates the ID of the imported shared module extension which updated. This is present only if 'reason' is 'shared_module_update'.
         * @since Chrome 29.
         */
        id?: string | undefined;
    }

    export interface MessageOptions {
        /** Whether the TLS channel ID will be passed into onMessageExternal for processes that are listening for the connection event. */
        includeTlsChannelId?: boolean | undefined;
    }

    /**
     * An object containing information about the script context that sent a message or request.
     * @since Chrome 26.
     */
    export interface MessageSender {
        /** The ID of the extension or app that opened the connection, if any. */
        id?: string | undefined;
        /** The tabs.Tab which opened the connection, if any. This property will only be present when the connection was opened from a tab (including content scripts), and only if the receiver is an extension, not an app. */
        tab?: chrome.tabs.Tab | undefined;
        /** The name of the native application that opened the connection, if any.
         * @since Chrome 74
         */
        nativeApplication?: string | undefined;
        /**
         * The frame that opened the connection. 0 for top-level frames, positive for child frames. This will only be set when tab is set.
         * @since Chrome 41.
         */
        frameId?: number | undefined;
        /**
         * The URL of the page or frame that opened the connection. If the sender is in an iframe, it will be iframe's URL not the URL of the page which hosts it.
         * @since Chrome 28.
         */
        url?: string | undefined;
        /**
         * The TLS channel ID of the page or frame that opened the connection, if requested by the extension or app, and if available.
         * @since Chrome 32.
         */
        tlsChannelId?: string | undefined;
        /**
         * The origin of the page or frame that opened the connection. It can vary from the url property (e.g., about:blank) or can be opaque (e.g., sandboxed iframes). This is useful for identifying if the origin can be trusted if we can't immediately tell from the URL.
         * @since Chrome 80.
         */
        origin?: string | undefined;
        /**
         * The lifecycle the document that opened the connection is in at the time the port was created. Note that the lifecycle state of the document may have changed since port creation.
         * @since Chrome 106.
         */
        documentLifecycle?: DocumentLifecycle | undefined;
        /**
         * A UUID of the document that opened the connection.
         * @since Chrome 106.
         */
        documentId?: string | undefined;
    }

    /**
     * An object containing information about the current platform.
     * @since Chrome 36.
     */
    export interface PlatformInfo {
        /**
         * The operating system chrome is running on.
         */
        os: PlatformOs;
        /**
         * The machine's processor architecture.
         */
        arch: PlatformArch;
        /**
         * The native client architecture. This may be different from arch on some platforms.
         */
        nacl_arch: PlatformNaclArch;
    }

    /**
     * An object which allows two way communication with other pages.
     * @since Chrome 26.
     */
    export interface Port {
        postMessage: (message: any) => void;
        disconnect: () => void;
        /**
         * Optional.
         * This property will only be present on ports passed to onConnect/onConnectExternal listeners.
         */
        sender?: MessageSender | undefined;
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

    /** Result of the update check. */
    export type RequestUpdateCheckStatus = "throttled" | "no_update" | "update_available";

    /** Result of the update check. */
    export interface RequestUpdateCheckResult {
        /** The status of the update check. */
        status: RequestUpdateCheckStatus;
        /** The version of the available update. */
        version: string;
    }

    export interface PortDisconnectEvent extends chrome.events.Event<(port: Port) => void> {}

    export interface PortMessageEvent extends chrome.events.Event<(message: any, port: Port) => void> {}

    export interface ExtensionMessageEvent extends
        chrome.events.Event<
            (message: any, sender: MessageSender, sendResponse: (response?: any) => void) => void
        >
    {}

    export interface ExtensionConnectEvent extends chrome.events.Event<(port: Port) => void> {}

    export interface RuntimeInstalledEvent extends chrome.events.Event<(details: InstalledDetails) => void> {}

    export interface RuntimeEvent extends chrome.events.Event<() => void> {}

    export interface RuntimeRestartRequiredEvent extends chrome.events.Event<(reason: string) => void> {}

    export interface RuntimeUpdateAvailableEvent
        extends chrome.events.Event<(details: UpdateAvailableDetails) => void>
    {}

    export interface ManifestIcons {
        [size: number]: string;
    }

    export interface ManifestAction {
        default_icon?: ManifestIcons | undefined;
        default_title?: string | undefined;
        default_popup?: string | undefined;
    }

    // Source: https://developer.chrome.com/docs/extensions/mv3/declare_permissions/
    export type ManifestPermissions =
        | "activeTab"
        | "alarms"
        | "background"
        | "bookmarks"
        | "browsingData"
        | "certificateProvider"
        | "clipboardRead"
        | "clipboardWrite"
        | "contentSettings"
        | "contextMenus"
        | "cookies"
        | "debugger"
        | "declarativeContent"
        | "declarativeNetRequest"
        | "declarativeNetRequestFeedback"
        | "declarativeNetRequestWithHostAccess"
        | "declarativeWebRequest"
        | "desktopCapture"
        | "documentScan"
        | "downloads"
        | "downloads.shelf"
        | "downloads.ui"
        | "enterprise.deviceAttributes"
        | "enterprise.hardwarePlatform"
        | "enterprise.networkingAttributes"
        | "enterprise.platformKeys"
        | "experimental"
        | "favicon"
        | "fileBrowserHandler"
        | "fileSystemProvider"
        | "fontSettings"
        | "gcm"
        | "geolocation"
        | "history"
        | "identity"
        | "identity.email"
        | "idle"
        | "loginState"
        | "management"
        | "nativeMessaging"
        | "notifications"
        | "offscreen"
        | "pageCapture"
        | "platformKeys"
        | "power"
        | "printerProvider"
        | "printing"
        | "printingMetrics"
        | "privacy"
        | "processes"
        | "proxy"
        | "scripting"
        | "search"
        | "sessions"
        | "sidePanel"
        | "signedInDevices"
        | "storage"
        | "system.cpu"
        | "system.display"
        | "system.memory"
        | "system.storage"
        | "tabCapture"
        | "tabGroups"
        | "tabs"
        | "topSites"
        | "tts"
        | "ttsEngine"
        | "unlimitedStorage"
        | "vpnProvider"
        | "wallpaper"
        | "webNavigation"
        | "webRequest"
        | "webRequestBlocking";

    export interface SearchProvider {
        name?: string | undefined;
        keyword?: string | undefined;
        favicon_url?: string | undefined;
        search_url: string;
        encoding?: string | undefined;
        suggest_url?: string | undefined;
        instant_url?: string | undefined;
        image_url?: string | undefined;
        search_url_post_params?: string | undefined;
        suggest_url_post_params?: string | undefined;
        instant_url_post_params?: string | undefined;
        image_url_post_params?: string | undefined;
        alternate_urls?: string[] | undefined;
        prepopulated_id?: number | undefined;
        is_default?: boolean | undefined;
    }

    export interface ManifestBase {
        // Required
        manifest_version: number;
        name: string;
        version: string;

        // Recommended
        default_locale?: string | undefined;
        description?: string | undefined;
        icons?: ManifestIcons | undefined;

        // Optional
        author?: string | undefined;
        background_page?: string | undefined;
        chrome_settings_overrides?: {
            homepage?: string | undefined;
            search_provider?: SearchProvider | undefined;
            startup_pages?: string[] | undefined;
        } | undefined;
        chrome_ui_overrides?: {
            bookmarks_ui?: {
                remove_bookmark_shortcut?: boolean | undefined;
                remove_button?: boolean | undefined;
            } | undefined;
        } | undefined;
        chrome_url_overrides?: {
            bookmarks?: string | undefined;
            history?: string | undefined;
            newtab?: string | undefined;
        } | undefined;
        commands?: {
            [name: string]: {
                suggested_key?: {
                    default?: string | undefined;
                    windows?: string | undefined;
                    mac?: string | undefined;
                    chromeos?: string | undefined;
                    linux?: string | undefined;
                } | undefined;
                description?: string | undefined;
                global?: boolean | undefined;
            };
        } | undefined;
        content_capabilities?: {
            matches?: string[] | undefined;
            permissions?: string[] | undefined;
        } | undefined;
        content_scripts?: {
            matches?: string[] | undefined;
            exclude_matches?: string[] | undefined;
            css?: string[] | undefined;
            js?: string[] | undefined;
            run_at?: string | undefined;
            all_frames?: boolean | undefined;
            match_about_blank?: boolean | undefined;
            include_globs?: string[] | undefined;
            exclude_globs?: string[] | undefined;
        }[] | undefined;
        converted_from_user_script?: boolean | undefined;
        current_locale?: string | undefined;
        devtools_page?: string | undefined;
        event_rules?: {
            event?: string | undefined;
            actions?: {
                type: string;
            }[] | undefined;
            conditions?: chrome.declarativeContent.PageStateMatcherProperties[] | undefined;
        }[] | undefined;
        externally_connectable?: {
            ids?: string[] | undefined;
            matches?: string[] | undefined;
            accepts_tls_channel_id?: boolean | undefined;
        } | undefined;
        file_browser_handlers?: {
            id?: string | undefined;
            default_title?: string | undefined;
            file_filters?: string[] | undefined;
        }[] | undefined;
        file_system_provider_capabilities?: {
            configurable?: boolean | undefined;
            watchable?: boolean | undefined;
            multiple_mounts?: boolean | undefined;
            source?: string | undefined;
        } | undefined;
        homepage_url?: string | undefined;
        import?: {
            id: string;
            minimum_version?: string | undefined;
        }[] | undefined;
        export?: {
            whitelist?: string[] | undefined;
        } | undefined;
        incognito?: string | undefined;
        input_components?: {
            name?: string | undefined;
            type?: string | undefined;
            id?: string | undefined;
            description?: string | undefined;
            language?: string[] | string | undefined;
            layouts?: string[] | undefined;
            indicator?: string | undefined;
        }[] | undefined;
        key?: string | undefined;
        minimum_chrome_version?: string | undefined;
        nacl_modules?: {
            path: string;
            mime_type: string;
        }[] | undefined;
        oauth2?: {
            client_id: string;
            scopes?: string[] | undefined;
        } | undefined;
        offline_enabled?: boolean | undefined;
        omnibox?: {
            keyword: string;
        } | undefined;
        options_page?: string | undefined;
        options_ui?: {
            page?: string | undefined;
            chrome_style?: boolean | undefined;
            open_in_tab?: boolean | undefined;
        } | undefined;
        platforms?: {
            nacl_arch?: string | undefined;
            sub_package_path: string;
        }[] | undefined;
        plugins?: {
            path: string;
        }[] | undefined;
        requirements?: {
            "3D"?: {
                features?: string[] | undefined;
            } | undefined;
            plugins?: {
                npapi?: boolean | undefined;
            } | undefined;
        } | undefined;
        sandbox?: {
            pages: string[];
            content_security_policy?: string | undefined;
        } | undefined;
        short_name?: string | undefined;
        spellcheck?: {
            dictionary_language?: string | undefined;
            dictionary_locale?: string | undefined;
            dictionary_format?: string | undefined;
            dictionary_path?: string | undefined;
        } | undefined;
        storage?: {
            managed_schema: string;
        } | undefined;
        tts_engine?: {
            voices: {
                voice_name: string;
                lang?: string | undefined;
                gender?: string | undefined;
                event_types?: string[] | undefined;
            }[];
        } | undefined;
        update_url?: string | undefined;
        version_name?: string | undefined;
        [key: string]: any;
    }

    export interface ManifestV2 extends ManifestBase {
        // Required
        manifest_version: 2;

        // Pick one (or none)
        browser_action?: ManifestAction | undefined;
        page_action?: ManifestAction | undefined;

        // Optional
        background?:
            | {
                scripts?: string[] | undefined;
                page?: string | undefined;
                persistent?: boolean | undefined;
            }
            | undefined;
        content_security_policy?: string | undefined;
        optional_permissions?: string[] | undefined;
        permissions?: string[] | undefined;
        web_accessible_resources?: string[] | undefined;
    }

    export interface ManifestV3 extends ManifestBase {
        // Required
        manifest_version: 3;

        // Optional
        action?: ManifestAction | undefined;
        background?:
            | {
                service_worker: string;
                type?: "module"; // If the service worker uses ES modules
            }
            | undefined;
        content_scripts?: {
            matches?: string[] | undefined;
            exclude_matches?: string[] | undefined;
            css?: string[] | undefined;
            js?: string[] | undefined;
            run_at?: string | undefined;
            all_frames?: boolean | undefined;
            match_about_blank?: boolean | undefined;
            include_globs?: string[] | undefined;
            exclude_globs?: string[] | undefined;
            world?: "ISOLATED" | "MAIN" | undefined;
        }[] | undefined;
        content_security_policy?: {
            extension_pages?: string;
            sandbox?: string;
        };
        host_permissions?: string[] | undefined;
        optional_permissions?: ManifestPermissions[] | undefined;
        permissions?: ManifestPermissions[] | undefined;
        web_accessible_resources?: { resources: string[]; matches: string[] }[] | undefined;
    }

    export type Manifest = ManifestV2 | ManifestV3;

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
     * @return The manifest details.
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
     * Returns information about the current platform.
     * @since Chrome 29.
     * @return The `getPlatformInfo` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getPlatformInfo(): Promise<PlatformInfo>;
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
     * @since Chrome 109
     * @return This only returns a Promise when the callback parameter is not specified, and with MV3+.
     */
    export function requestUpdateCheck(): Promise<RequestUpdateCheckResult>;
    /**
     * Requests an update check for this app/extension.
     * @since Chrome 25.
     * @param callback
     * Parameter status: Result of the update check. One of: "throttled", "no_update", or "update_available"
     * Optional parameter details: If an update is available, this contains more information about the available update.
     */
    export function requestUpdateCheck(
        callback: (status: RequestUpdateCheckStatus, details?: UpdateCheckDetails) => void,
    ): void;
    /**
     * Restart the ChromeOS device when the app runs in kiosk mode. Otherwise, it's no-op.
     * @since Chrome 32.
     */
    export function restart(): void;
    /**
     * Restart the ChromeOS device when the app runs in kiosk mode after the
     * given seconds. If called again before the time ends, the reboot will
     * be delayed. If called with a value of -1, the reboot will be
     * cancelled. It's a no-op in non-kiosk mode. It's only allowed to be
     * called repeatedly by the first extension to invoke this API.
     * @since Chrome 53.
     * @param seconds
     * @param callback
     */
    export function restartAfterDelay(seconds: number, callback?: () => void): void;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
     * @since Chrome 26.
     * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendMessage<M = any, R = any>(message: M, responseCallback: (response: R) => void): void;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
     * @since Chrome 32.
     * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendMessage<M = any, R = any>(
        message: M,
        options: MessageOptions,
        responseCallback: (response: R) => void,
    ): void;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
     * @since Chrome 26.
     * @param extensionId The ID of the extension/app to send the message to. If omitted, the message will be sent to your own extension/app. Required if sending messages from a web page for web messaging.
     * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendMessage<M = any, R = any>(
        extensionId: string | undefined | null,
        message: M,
        responseCallback: (response: R) => void,
    ): void;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
     * @since Chrome 32.
     * @param extensionId The ID of the extension/app to send the message to. If omitted, the message will be sent to your own extension/app. Required if sending messages from a web page for web messaging.
     * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the extension, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendMessage<Message = any, Response = any>(
        extensionId: string | undefined | null,
        message: Message,
        options: MessageOptions,
        responseCallback: (response: Response) => void,
    ): void;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
     * @since Chrome 26.
     */
    export function sendMessage<M = any, R = any>(message: M): Promise<R>;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
     * @since Chrome 32.
     */
    export function sendMessage<M = any, R = any>(
        message: M,
        options: MessageOptions,
    ): Promise<R>;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
     * @since Chrome 26.
     * @param extensionId The ID of the extension/app to send the message to. If omitted, the message will be sent to your own extension/app. Required if sending messages from a web page for web messaging.
     */
    export function sendMessage<M = any, R = any>(extensionId: string | undefined | null, message: M): Promise<R>;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to runtime.connect but only sends a single message, with an optional response. If sending to your extension, the runtime.onMessage event will be fired in each page, or runtime.onMessageExternal, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use tabs.sendMessage.
     * @since Chrome 32.
     * @param extensionId The ID of the extension/app to send the message to. If omitted, the message will be sent to your own extension/app. Required if sending messages from a web page for web messaging.
     */
    export function sendMessage<Message = any, Response = any>(
        extensionId: string | undefined | null,
        message: Message,
        options: MessageOptions,
    ): Promise<Response>;
    /**
     * Send a single message to a native application.
     * @since Chrome 28.
     * @param application The of the native messaging host.
     * @param message The message that will be passed to the native messaging host.
     * Parameter response: The response message sent by the native messaging host. If an error occurs while connecting to the native messaging host, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendNativeMessage(
        application: string,
        message: Object,
        responseCallback: (response: any) => void,
    ): void;
    /**
     * Send a single message to a native application.
     * @since Chrome 28.
     * @param application The of the native messaging host.
     * @param message The message that will be passed to the native messaging host.
     */
    export function sendNativeMessage(
        application: string,
        message: Object,
    ): Promise<any>;
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
// Scripting
////////////////////
/**
 * Use the chrome.scripting API to execute script in different contexts.
 * Permissions: "scripting", Manifest v3+
 * @since Chrome 88.
 */
declare namespace chrome.scripting {
    /* The CSS style origin for a style change. */
    export type StyleOrigin = "AUTHOR" | "USER";

    /* The JavaScript world for a script to execute within. */
    export type ExecutionWorld = "ISOLATED" | "MAIN";

    export interface InjectionResult<T> {
        /* The frame associated with the injection. */
        frameId: number;
        /* The result of the script execution. */
        result: T;
    }

    export interface InjectionTarget {
        /* Whether the script should inject into all frames within the tab. Defaults to false. This must not be true if frameIds is specified. */
        allFrames?: boolean | undefined;
        /* The IDs of specific frames to inject into. */
        frameIds?: number[] | undefined;
        /* The ID of the tab into which to inject. */
        tabId: number;
    }

    export interface CSSInjection {
        /* A string containing the CSS to inject. Exactly one of files and css must be specified. */
        css?: string | undefined;
        /* The path of the CSS files to inject, relative to the extension's root directory. NOTE: Currently a maximum of one file is supported. Exactly one of files and css must be specified. */
        files?: string[] | undefined;
        /* The style origin for the injection. Defaults to 'AUTHOR'. */
        origin?: StyleOrigin | undefined;
        /* Details specifying the target into which to insert the CSS. */
        target: InjectionTarget;
    }

    export type ScriptInjection<Args extends any[], Result> =
        & {
            /* Details specifying the target into which to inject the script. */
            target: InjectionTarget;
            /* The JavaScript world for a script to execute within. */
            world?: ExecutionWorld;
            /* Whether the injection should be triggered in the target as soon as possible. Note that this is not a guarantee that injection will occur prior to page load, as the page may have already loaded by the time the script reaches the target. */
            injectImmediately?: boolean;
        }
        & (
            | {
                /* The path of the JS files to inject, relative to the extension's root directory. NOTE: Currently a maximum of one file is supported. Exactly one of files and function must be specified. */
                files: string[];
            }
            | ({
                /* A JavaScript function to inject. This function will be serialized, and then deserialized for injection. This means that any bound parameters and execution context will be lost. Exactly one of files and function must be specified. */
                func: () => Result;
            } | {
                /* A JavaScript function to inject. This function will be serialized, and then deserialized for injection. This means that any bound parameters and execution context will be lost. Exactly one of files and function must be specified. */
                func: (...args: Args) => Result;
                /* The arguments to carry into a provided function. This is only valid if the func parameter is specified. These arguments must be JSON-serializable. */
                args: Args;
            })
        );

    type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

    interface RegisteredContentScript {
        id: string;
        allFrames?: boolean;
        matchOriginAsFallback?: boolean;
        css?: string[];
        excludeMatches?: string[];
        js?: string[];
        matches?: string[];
        persistAcrossSessions?: boolean;
        runAt?: "document_start" | "document_end" | "document_idle";
        world?: ExecutionWorld;
    }

    interface ContentScriptFilter {
        ids?: string[];
        css?: string;
        files?: string[];
        origin?: StyleOrigin;
        target?: InjectionTarget;
    }

    /**
     * Injects a script into a target context. The script will be run at document_end.
     * @param injection
     * The details of the script which to inject.
     * @return The `executeScript` method provides its result via callback or returned as a `Promise` (MV3 only). The resulting array contains the result of execution for each frame where the injection succeeded.
     */
    export function executeScript<Args extends any[], Result>(
        injection: ScriptInjection<Args, Result>,
    ): Promise<InjectionResult<Awaited<Result>>[]>;

    /**
     * Injects a script into a target context. The script will be run at document_end.
     * @param injection
     * The details of the script which to inject.
     * @param callback
     * Invoked upon completion of the injection. The resulting array contains the result of execution for each frame where the injection succeeded.
     */
    export function executeScript<Args extends any[], Result>(
        injection: ScriptInjection<Args, Result>,
        callback: (results: InjectionResult<Awaited<Result>>[]) => void,
    ): void;

    /**
     * Inserts a CSS stylesheet into a target context. If multiple frames are specified, unsuccessful injections are ignored.
     * @param injection
     * The details of the styles to insert.
     * @return The `insertCSS` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function insertCSS(injection: CSSInjection): Promise<void>;

    /**
     * Inserts a CSS stylesheet into a target context. If multiple frames are specified, unsuccessful injections are ignored.
     * @param injection
     * The details of the styles to insert.
     * @param callback
     * Invoked upon completion of the injection.
     */
    export function insertCSS(injection: CSSInjection, callback: () => void): void;

    /**
     * Removes a CSS stylesheet that was previously inserted by this extension from a target context.
     * @param injection
     * The details of the styles to remove.
     * Note that the css, files, and origin properties must exactly match the stylesheet inserted through `insertCSS`.
     * Attempting to remove a non-existent stylesheet is a no-op.
     * @return This only returns a Promise when the callback parameter is not specified, and with MV3+.
     * @since Chrome 90
     */
    export function removeCSS(injection: CSSInjection): Promise<void>;

    /**
     * Removes a CSS stylesheet that was previously inserted by this extension from a target context.
     * @param injection
     * The details of the styles to remove.
     * Note that the css, files, and origin properties must exactly match the stylesheet inserted through `insertCSS`.
     * Attempting to remove a non-existent stylesheet is a no-op.
     * @param callback
     * Invoked upon completion of the removal.
     * @since Chrome 90
     */
    export function removeCSS(injection: CSSInjection, callback: () => void): void;

    /**
     * Registers one or more content scripts.
     * @param scripts
     */
    export function registerContentScripts(scripts: RegisteredContentScript[]): Promise<void>;

    /**
     * Registers one or more content scripts.
     * @param scripts
     * @param callback
     */
    export function registerContentScripts(scripts: RegisteredContentScript[], callback: () => void): void;

    /**
     * Unregister one or more content scripts.
     * @param filter
     * @param callback
     */
    export function unregisterContentScripts(filter?: ContentScriptFilter): Promise<void>;

    /**
     * Unregister one or more content scripts.
     * @param filter
     * @param callback
     */
    export function unregisterContentScripts(callback: () => void): void;
    export function unregisterContentScripts(filter: ContentScriptFilter, callback: () => void): void;

    /**
     * Returns all the content scripts registered with scripting.registerContentScripts()
     * or a subset of the registered scripts when using a filter.
     * @param filter
     */
    export function getRegisteredContentScripts(filter?: ContentScriptFilter): Promise<RegisteredContentScript[]>;

    /**
     * Returns all the content scripts registered with scripting.registerContentScripts()
     * or a subset of the registered scripts when using a filter.
     * @param filter
     * @param callback
     */
    export function getRegisteredContentScripts(callback: (scripts: RegisteredContentScript[]) => void): void;
    export function getRegisteredContentScripts(
        filter: ContentScriptFilter,
        callback: (scripts: RegisteredContentScript[]) => void,
    ): void;

    /**
     * Updates one or more content scripts.
     * @param scripts
     */
    export function updateContentScripts(scripts: RegisteredContentScript[]): Promise<void>;

    /**
     * Updates one or more content scripts.
     * @param scripts
     * @param callback
     */
    export function updateContentScripts(scripts: RegisteredContentScript[], callback: () => void): void;
}

////////////////////
// Script Badge
////////////////////
declare namespace chrome.scriptBadge {
    export interface GetPopupDetails {
        tabId: number;
    }

    export interface AttentionDetails {
        tabId: number;
    }

    export interface SetPopupDetails {
        tabId: number;
        popup: string;
    }

    export interface ScriptBadgeClickedEvent extends chrome.events.Event<(tab: chrome.tabs.Tab) => void> {}

    export function getPopup(details: GetPopupDetails, callback: Function): void;
    export function getAttention(details: AttentionDetails): void;
    export function setPopup(details: SetPopupDetails): void;

    export var onClicked: ScriptBadgeClickedEvent;
}

////////////////////
// Sessions
////////////////////
/**
 * Use the chrome.sessions API to query and restore tabs and windows from a browsing session.
 * Permissions:  "sessions"
 * @since Chrome 37.
 */
declare namespace chrome.sessions {
    export interface Filter {
        /**
         * Optional.
         * The maximum number of entries to be fetched in the requested list. Omit this parameter to fetch the maximum number of entries (sessions.MAX_SESSION_RESULTS).
         */
        maxResults?: number | undefined;
    }

    export interface Session {
        /** The time when the window or tab was closed or modified, represented in milliseconds since the epoch. */
        lastModified: number;
        /**
         * Optional.
         * The tabs.Tab, if this entry describes a tab. Either this or sessions.Session.window will be set.
         */
        tab?: tabs.Tab | undefined;
        /**
         * Optional.
         * The windows.Window, if this entry describes a window. Either this or sessions.Session.tab will be set.
         */
        window?: windows.Window | undefined;
    }

    export interface Device {
        /** The name of the foreign device. */
        deviceName: string;
        /** A list of open window sessions for the foreign device, sorted from most recently to least recently modified session. */
        sessions: Session[];
    }

    export interface SessionChangedEvent extends chrome.events.Event<() => void> {}

    /** The maximum number of sessions.Session that will be included in a requested list. */
    export var MAX_SESSION_RESULTS: number;

    /**
     * Gets the list of recently closed tabs and/or windows.
     * @return The `getRecentlyClosed` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getRecentlyClosed(filter?: Filter): Promise<Session[]>;
    /**
     * Gets the list of recently closed tabs and/or windows.
     * @param callback
     * Parameter sessions: The list of closed entries in reverse order that they were closed (the most recently closed tab or window will be at index 0). The entries may contain either tabs or windows.
     */
    export function getRecentlyClosed(filter: Filter, callback: (sessions: Session[]) => void): void;
    /**
     * Gets the list of recently closed tabs and/or windows.
     * @param callback
     * Parameter sessions: The list of closed entries in reverse order that they were closed (the most recently closed tab or window will be at index 0). The entries may contain either tabs or windows.
     */
    export function getRecentlyClosed(callback: (sessions: Session[]) => void): void;
    /**
     * Retrieves all devices with synced sessions.
     * @return The `getDevices` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getDevices(filter?: Filter): Promise<Device[]>;
    /**
     * Retrieves all devices with synced sessions.
     * @param callback
     * Parameter devices: The list of sessions.Device objects for each synced session, sorted in order from device with most recently modified session to device with least recently modified session. tabs.Tab objects are sorted by recency in the windows.Window of the sessions.Session objects.
     */
    export function getDevices(filter: Filter, callback: (devices: Device[]) => void): void;
    /**
     * Retrieves all devices with synced sessions.
     * @param callback
     * Parameter devices: The list of sessions.Device objects for each synced session, sorted in order from device with most recently modified session to device with least recently modified session. tabs.Tab objects are sorted by recency in the windows.Window of the sessions.Session objects.
     */
    export function getDevices(callback: (devices: Device[]) => void): void;
    /**
     * Reopens a windows.Window or tabs.Tab.
     * @param sessionId Optional.
     * The windows.Window.sessionId, or tabs.Tab.sessionId to restore. If this parameter is not specified, the most recently closed session is restored.
     * @return The `restore` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function restore(sessionId?: string): Promise<Session>;
    /**
     * Reopens a windows.Window or tabs.Tab, with an optional callback to run when the entry has been restored.
     * @param sessionId Optional.
     * The windows.Window.sessionId, or tabs.Tab.sessionId to restore. If this parameter is not specified, the most recently closed session is restored.
     * @param callback Optional.
     * Parameter restoredSession: A sessions.Session containing the restored windows.Window or tabs.Tab object.
     */
    export function restore(sessionId: string, callback: (restoredSession: Session) => void): void;
    /**
     * Reopens a windows.Window or tabs.Tab, with an optional callback to run when the entry has been restored.
     * @param callback Optional.
     * Parameter restoredSession: A sessions.Session containing the restored windows.Window or tabs.Tab object.
     */
    export function restore(callback: (restoredSession: Session) => void): void;

    /** Fired when recently closed tabs and/or windows are changed. This event does not monitor synced sessions changes. */
    export var onChanged: SessionChangedEvent;
}

////////////////////
// Storage
////////////////////
/**
 * Use the chrome.storage API to store, retrieve, and track changes to user data.
 * Permissions:  "storage"
 * @since Chrome 20.
 */
declare namespace chrome.storage {
    export interface StorageArea {
        /**
         * Gets the amount of space (in bytes) being used by one or more items.
         * @param callback Callback with the amount of space being used by storage, or on failure (in which case runtime.lastError will be set).
         * Parameter bytesInUse: Amount of space being used in storage, in bytes.
         */
        getBytesInUse(callback: (bytesInUse: number) => void): void;
        /**
         * Gets the amount of space (in bytes) being used by one or more items.
         * @param keys Optional. A single key or list of keys to get the total usage for. An empty list will return 0. Pass in null to get the total usage of all of storage.
         * @return A Promise that resolves with a number
         * @since MV3
         */
        getBytesInUse(keys?: string | string[] | null): Promise<number>;
        /**
         * Gets the amount of space (in bytes) being used by one or more items.
         * @param keys Optional. A single key or list of keys to get the total usage for. An empty list will return 0. Pass in null to get the total usage of all of storage.
         * @param callback Callback with the amount of space being used by storage, or on failure (in which case runtime.lastError will be set).
         * Parameter bytesInUse: Amount of space being used in storage, in bytes.
         */
        getBytesInUse(keys: string | string[] | null, callback: (bytesInUse: number) => void): void;
        /**
         * Removes all items from storage.
         * @return A void Promise
         * @since MV3
         */
        clear(): Promise<void>;
        /**
         * Removes all items from storage.
         * @param callback Optional.
         * Callback on success, or on failure (in which case runtime.lastError will be set).
         */
        clear(callback: () => void): void;
        /**
         * Sets multiple items.
         * @param items An object which gives each key/value pair to update storage with. Any other key/value pairs in storage will not be affected.
         * Primitive values such as numbers will serialize as expected. Values with a typeof "object" and "function" will typically serialize to {}, with the exception of Array (serializes as expected), Date, and Regex (serialize using their String representation).
         * @return A void Promise
         * @since MV3
         */
        set(items: { [key: string]: any }): Promise<void>;
        /**
         * Sets multiple items.
         * @param items An object which gives each key/value pair to update storage with. Any other key/value pairs in storage will not be affected.
         * Primitive values such as numbers will serialize as expected. Values with a typeof "object" and "function" will typically serialize to {}, with the exception of Array (serializes as expected), Date, and Regex (serialize using their String representation).
         * @param callback Optional.
         * Callback on success, or on failure (in which case runtime.lastError will be set).
         */
        set(items: { [key: string]: any }, callback: () => void): void;
        /**
         * Removes one or more items from storage.
         * @param keys A single key or a list of keys for items to remove.
         * @param callback Optional.
         * @return A void Promise
         * @since MV3
         */
        remove(keys: string | string[]): Promise<void>;
        /**
         * Removes one or more items from storage.
         * @param keys A single key or a list of keys for items to remove.
         * @param callback Optional.
         * Callback on success, or on failure (in which case runtime.lastError will be set).
         */
        remove(keys: string | string[], callback: () => void): void;
        /**
         * Gets the entire contents of storage.
         * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
         * Parameter items: Object with items in their key-value mappings.
         */
        get(callback: (items: { [key: string]: any }) => void): void;
        /**
         * Gets one or more items from storage.
         * @param keys A single key to get, list of keys to get, or a dictionary specifying default values.
         * An empty list or object will return an empty result object. Pass in null to get the entire contents of storage.
         * @return A Promise that resolves with an object containing items
         * @since MV3
         */
        get(keys?: string | string[] | { [key: string]: any } | null): Promise<{ [key: string]: any }>;
        /**
         * Gets one or more items from storage.
         * @param keys A single key to get, list of keys to get, or a dictionary specifying default values.
         * An empty list or object will return an empty result object. Pass in null to get the entire contents of storage.
         * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
         * Parameter items: Object with items in their key-value mappings.
         */
        get(
            keys: string | string[] | { [key: string]: any } | null,
            callback: (items: { [key: string]: any }) => void,
        ): void;
        /**
         * Sets the desired access level for the storage area. The default will be only trusted contexts.
         * @param accessOptions An object containing an accessLevel key which contains the access level of the storage area.
         * @return A void Promise.
         * @since Chrome 102
         */
        setAccessLevel(accessOptions: { accessLevel: AccessLevel }): Promise<void>;
        /**
         * Sets the desired access level for the storage area. The default will be only trusted contexts.
         * @param accessOptions An object containing an accessLevel key which contains the access level of the storage area.
         * @param callback Optional.
         * @since Chrome 102
         */
        setAccessLevel(accessOptions: { accessLevel: AccessLevel }, callback: () => void): void;
        /**
         * Fired when one or more items change within this storage area.
         * @param keys A single key to get, list of keys to get, or a dictionary specifying default values.
         * An empty list or object will return an empty result object. Pass in null to get the entire contents of storage.
         * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
         * Parameter items: Object with items in their key-value mappings.
         */
        onChanged: StorageAreaChangedEvent;
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

    export interface SessionStorageArea extends StorageArea {
        /** The maximum amount (in bytes) of data that can be stored in memory, as measured by estimating the dynamically allocated memory usage of every value and key. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError. */
        QUOTA_BYTES: number;
    }

    export interface StorageAreaChangedEvent
        extends chrome.events.Event<(changes: { [key: string]: StorageChange }) => void>
    {}

    type AreaName = keyof Pick<typeof chrome.storage, "sync" | "local" | "managed" | "session">;
    export interface StorageChangedEvent
        extends chrome.events.Event<(changes: { [key: string]: StorageChange }, areaName: AreaName) => void>
    {}

    type AccessLevel = keyof typeof AccessLevel;

    /** The storage area's access level. */
    export var AccessLevel: {
        TRUSTED_AND_UNTRUSTED_CONTEXTS: "TRUSTED_AND_UNTRUSTED_CONTEXTS";
        TRUSTED_CONTEXTS: "TRUSTED_CONTEXTS";
    };

    /** Items in the local storage area are local to each machine. */
    export var local: LocalStorageArea;
    /** Items in the sync storage area are synced using Chrome Sync. */
    export var sync: SyncStorageArea;

    /**
     * Items in the managed storage area are set by the domain administrator, and are read-only for the extension; trying to modify this namespace results in an error.
     * @since Chrome 33.
     */
    export var managed: StorageArea;

    /**
     * Items in the session storage area are stored in-memory and will not be persisted to disk.
     * @since Chrome 102.
     */
    export var session: SessionStorageArea;

    /** Fired when one or more items change. */
    export var onChanged: StorageChangedEvent;
}

////////////////////
// Socket
////////////////////
declare namespace chrome.socket {
    export interface CreateInfo {
        socketId: number;
    }

    export interface AcceptInfo {
        resultCode: number;
        socketId?: number | undefined;
    }

    export interface ReadInfo {
        resultCode: number;
        data: ArrayBuffer;
    }

    export interface WriteInfo {
        bytesWritten: number;
    }

    export interface RecvFromInfo {
        resultCode: number;
        data: ArrayBuffer;
        port: number;
        address: string;
    }

    export interface SocketInfo {
        socketType: string;
        localPort?: number | undefined;
        peerAddress?: string | undefined;
        peerPort?: number | undefined;
        localAddress?: string | undefined;
        connected: boolean;
    }

    export interface NetworkInterface {
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
    export function recvFrom(
        socketId: number,
        bufferSize?: number,
        callback?: (recvFromInfo: RecvFromInfo) => void,
    ): void;
    export function sendTo(
        socketId: number,
        data: ArrayBuffer,
        address: string,
        port: number,
        callback?: (writeInfo: WriteInfo) => void,
    ): void;
    export function listen(
        socketId: number,
        address: string,
        port: number,
        backlog?: number,
        callback?: (result: number) => void,
    ): void;
    export function accept(socketId: number, callback?: (acceptInfo: AcceptInfo) => void): void;
    export function setKeepAlive(
        socketId: number,
        enable: boolean,
        delay?: number,
        callback?: (result: boolean) => void,
    ): void;
    export function setNoDelay(socketId: number, noDelay: boolean, callback?: (result: boolean) => void): void;
    export function getInfo(socketId: number, callback: (result: SocketInfo) => void): void;
    export function getNetworkList(callback: (result: NetworkInterface[]) => void): void;
}

////////////////////
// System CPU
////////////////////
/**
 * Use the system.cpu API to query CPU metadata.
 * Permissions: "system.cpu"
 * @since Chrome 32.
 */
declare namespace chrome.system.cpu {
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

    /**
     * Queries basic CPU information of the system.
     * @return The `getInfo` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getInfo(): Promise<CpuInfo>;
}

////////////////////
// System Memory
////////////////////
/**
 * The chrome.system.memory API.
 * Permissions:  "system.memory"
 * @since Chrome 32.
 */
declare namespace chrome.system.memory {
    export interface MemoryInfo {
        /** The total amount of physical memory capacity, in bytes. */
        capacity: number;
        /** The amount of available capacity, in bytes. */
        availableCapacity: number;
    }

    /** Get physical memory information. */
    export function getInfo(callback: (info: MemoryInfo) => void): void;

    /**
     * Get physical memory information.
     * @return The `getInfo` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getInfo(): Promise<MemoryInfo>;
}

////////////////////
// System Storage
////////////////////
/**
 * Use the chrome.system.storage API to query storage device information and be notified when a removable storage device is attached and detached.
 * Permissions:  "system.storage"
 * @since Chrome 30.
 */
declare namespace chrome.system.storage {
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

    export interface SystemStorageAttachedEvent extends chrome.events.Event<(info: StorageUnitInfo) => void> {}

    export interface SystemStorageDetachedEvent extends chrome.events.Event<(id: string) => void> {}

    /** Get the storage information from the system. The argument passed to the callback is an array of StorageUnitInfo objects. */
    export function getInfo(callback: (info: StorageUnitInfo[]) => void): void;
    /**
     * Get the storage information from the system. The argument passed to the callback is an array of StorageUnitInfo objects.
     * @return The `getInfo` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getInfo(): Promise<StorageUnitInfo[]>;
    /**
     * Ejects a removable storage device.
     * @param callback
     * Parameter result: success: The ejection command is successful -- the application can prompt the user to remove the device; in_use: The device is in use by another application. The ejection did not succeed; the user should not remove the device until the other application is done with the device; no_such_device: There is no such device known. failure: The ejection command failed.
     */
    export function ejectDevice(id: string, callback: (result: string) => void): void;
    /**
     * Ejects a removable storage device.
     * @param callback
     * Parameter result: success: The ejection command is successful -- the application can prompt the user to remove the device; in_use: The device is in use by another application. The ejection did not succeed; the user should not remove the device until the other application is done with the device; no_such_device: There is no such device known. failure: The ejection command failed.
     * @return The `ejectDevice` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function ejectDevice(id: string): Promise<string>;
    /**
     * Get the available capacity of a specified |id| storage device. The |id| is the transient device ID from StorageUnitInfo.
     * @since Dev channel only.
     */
    export function getAvailableCapacity(id: string, callback: (info: StorageCapacityInfo) => void): void;
    /**
     * Get the available capacity of a specified |id| storage device. The |id| is the transient device ID from StorageUnitInfo.
     * @since Dev channel only.
     * @return The `getAvailableCapacity` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAvailableCapacity(id: string): Promise<StorageCapacityInfo>;

    /** Fired when a new removable storage is attached to the system. */
    export var onAttached: SystemStorageAttachedEvent;
    /** Fired when a removable storage is detached from the system. */
    export var onDetached: SystemStorageDetachedEvent;
}

////////////////////
// System Display //
////////////////////
/**
 * Use the system.display API to query display metadata.
 * Permissions: 'system.display'
 * @since Chrome 30.
 */
declare namespace chrome.system.display {
    export const DisplayPosition: {
        TOP: "top";
        RIGHT: "right";
        BOTTOM: "bottom";
        LEFT: "left";
    };
    export const MirrorMode: {
        OFF: "off";
        NORMAL: "normal";
        MIXED: "mixed";
    };
    export interface Bounds {
        /**  The x-coordinate of the upper-left corner. */
        left: number;
        /**  The y-coordinate of the upper-left corner. */
        top: number;
        /** The width of the display in pixels. */
        width: number;
        /** The height of the display in pixels. */
        height: number;
    }

    export interface Insets {
        /** The x-axis distance from the left bound. */
        left: number;
        /** The y-axis distance from the top bound. */
        top: number;
        /** The x-axis distance from the right bound. */
        right: number;
        /** The y-axis distance from the bottom bound. */
        bottom: number;
    }

    /**
     * @since Chrome 57
     */
    export interface Point {
        /** The x-coordinate of the point. */
        x: number;
        /** The y-coordinate of the point. */
        y: number;
    }

    /**
     * @since Chrome 57
     */
    export interface TouchCalibrationPair {
        /** The coordinates of the display point. */
        displayPoint: Point;
        /** The coordinates of the touch point corresponding to the display point. */
        touchPoint: Point;
    }

    /**
     * @since Chrome 52
     */
    export interface DisplayMode {
        /** The display mode width in device independent (user visible) pixels. */
        width: number;

        /** The display mode height in device independent (user visible) pixels. */
        height: number;

        /** The display mode width in native pixels. */
        widthInNativePixels: number;

        /** The display mode height in native pixels. */
        heightInNativePixels: number;

        /**
         * @deprecated Deprecated since Chrome 70. Use `displayZoomFactor`
         * @description The display mode UI scale factor.
         */
        uiScale: number;

        /** The display mode device scale factor. */
        deviceScaleFactor: number;

        /**
         * The display mode refresh rate in hertz.
         * @since Chrome 67
         */
        refreshRate: number;

        /** True if the mode is the display's native mode. */
        isNative: boolean;

        /** True if the display mode is currently selected. */
        isSelected: boolean;
    }

    /**
     * @since Chrome 53
     */
    export interface DisplayLayout {
        /** The unique identifier of the display. */
        id: string;
        /** The unique identifier of the parent display. Empty if this is the root. */
        parentId: string;
        /**
         * The layout position of this display relative to the parent.
         * This will be ignored for the root.
         * @see enum
         */
        position: typeof DisplayPosition[keyof typeof DisplayPosition];
        /** The offset of the display along the connected edge. 0 indicates that the topmost or leftmost corners are aligned. */
        offset: number;
    }

    /**
     * The pairs of point used to calibrate the display.
     */
    export interface TouchCalibrationPairs {
        /** First pair of touch and display point required for touch calibration. */
        pair1: TouchCalibrationPair;
        /** Second pair of touch and display point required for touch calibration. */
        pair2: TouchCalibrationPair;
        /** Third pair of touch and display point required for touch calibration. */
        pair3: TouchCalibrationPair;
        /** Fourth pair of touch and display point required for touch calibration. */
        pair4: TouchCalibrationPair;
    }

    /**
     * Representation of info data to be used in chrome.system.display.setDisplayProperties()
     */
    export interface DisplayPropertiesInfo {
        /**
         * requires(CrOS) Chrome OS only.
         * @description
         * If set to true, changes the display mode to unified desktop.
         * If set to false, unified desktop mode will be disabled.
         * This is only valid for the primary display.
         * If provided, mirroringSourceId must not be provided and other properties may not apply.
         * This is has no effect if not provided.
         * @see `enableUnifiedDesktop` for details
         * @since Chrome 59
         */
        isUnified?: boolean | undefined;

        /**
         * requires(CrOS) Chrome OS only.
         * @deprecated Deprecated since Chrome 68. Use ´setMirrorMode´
         * @see setMirrorMode
         * @description
         * If set and not empty, enables mirroring for this display.
         * Otherwise disables mirroring for this display.
         * This value should indicate the id of the source display to mirror,
         * which must not be the same as the id passed to setDisplayProperties.
         * If set, no other property may be set.
         */
        mirroringSourceId?: string | undefined;

        /**
         * If set to true, makes the display primary.
         * No-op if set to false.
         */
        isPrimary?: boolean | undefined;

        /**
         * If set, sets the display's overscan insets to the provided values.
         * Note that overscan values may not be negative or larger than a half of the screen's size.
         * Overscan cannot be changed on the internal monitor. It's applied after isPrimary parameter.
         */
        overscan?: Insets | undefined;

        /**
         * If set, updates the display's rotation.
         * Legal values are [0, 90, 180, 270].
         * The rotation is set clockwise, relative to the display's vertical position.
         * It's applied after overscan parameter.
         */
        rotation?: 0 | 90 | 180 | 270 | undefined;

        /**
         * If set, updates the display's logical bounds origin along x-axis.
         * Applied together with boundsOriginY, if boundsOriginY is set.
         * Note that, when updating the display origin, some constraints will be applied,
         * so the final bounds origin may be different than the one set.
         * The final bounds can be retrieved using getInfo. The bounds origin is applied
         * after rotation. The bounds origin cannot be changed on the primary display.
         * Note that is also invalid to set bounds origin values if isPrimary is also set
         * (as isPrimary parameter is applied first).
         */
        boundsOriginX?: number | undefined;

        /**
         * If set, updates the display's logical bounds origin along y-axis.
         * @see boundsOriginX
         */
        boundsOriginY?: number | undefined;

        /**
         * If set, updates the display mode to the mode matching this value.
         * @since Chrome 52
         */
        displayMode?: DisplayMode | undefined;

        /**
         * @since Chrome 65.
         * @description
         * If set, updates the zoom associated with the display.
         * This zoom performs re-layout and repaint thus resulting
         * in a better quality zoom than just performing
         * a pixel by pixel stretch enlargement.
         */
        displayZoomFactor?: number | undefined;
    }

    /**
     * Options affecting how the information is returned.
     * @since Chrome 59
     */
    export interface DisplayInfoFlags {
        /**
         * If set to true, only a single DisplayUnitInfo will be returned by getInfo when in unified desktop mode.
         * @see enableUnifiedDesktop
         * @default false
         */
        singleUnified?: boolean | undefined;
    }

    /** Information about display properties. */
    export interface DisplayInfo {
        /** The unique identifier of the display. */
        id: string;
        /** The user-friendly name (e.g. 'HP LCD monitor'). */
        name: string;
        /**
         * requires(CrOS Kiosk app) Only available in Chrome OS Kiosk apps
         */
        edid?: {
            /**
             * 3 character manufacturer code.
             */
            manufacturerId: string;
            /**
             * 2 byte manufacturer-assigned code.
             */
            productId: string;
            /**
             * Year of manufacturer.
             */
            yearOfManufacture?: string | undefined;
        } | undefined;
        /**
         * requires(CrOS) Only working properly on Chrome OS.
         * Identifier of the display that is being mirrored on the display unit.
         * If mirroring is not in progress, set to an empty string
         * Currently exposed only on ChromeOS.
         * Will be empty string on other platforms.
         */
        mirroringSourceId: string;
        /**
         * requires(CrOS) Only available on Chrome OS.
         * Identifiers of the displays to which the source display is being mirrored.
         * Empty if no displays are being mirrored. This will be set to the same value
         * for all displays.
         * ❗ This must not include *mirroringSourceId*. ❗
         */
        mirroringDestinationIds: string[];
        /** True if this is the primary display. */
        isPrimary: boolean;
        /** True if this is an internal display. */
        isInternal: boolean;
        /** True if this display is enabled. */
        isEnabled: boolean;
        /** The number of pixels per inch along the x-axis. */
        dpiX: number;
        /** The number of pixels per inch along the y-axis. */
        dpiY: number;
        /** The display's clockwise rotation in degrees relative to the vertical position. Currently exposed only on ChromeOS. Will be set to 0 on other platforms. */
        rotation: number;
        /** The display's logical bounds. */
        bounds: Bounds;
        /** The display's insets within its screen's bounds. Currently exposed only on ChromeOS. Will be set to empty insets on other platforms. */
        overscan: Insets;
        /** The usable work area of the display within the display bounds. The work area excludes areas of the display reserved for OS, for example taskbar and launcher. */
        workArea: Bounds;
        /**
         * requires(CrOS) Only available on Chrome OS.
         * The list of available display modes.
         * The current mode will have isSelected=true.
         * Only available on Chrome OS.
         * Will be set to an empty array on other platforms.
         */
        modes: DisplayMode[];
        /** True if this display has a touch input device associated with it. */
        hasTouchSupport: boolean;
        /** A list of zoom factor values that can be set for the display. */
        availableDisplayZoomFactors: number[];
        /**
         * The ratio between the display's current and default zoom.
         * For example, value 1 is equivalent to 100% zoom, and value 1.5 is equivalent to 150% zoom.
         */
        displayZoomFactor: number;
    }

    export interface MirrorModeInfo {
        /**
         * The mirror mode that should be set.
         * **off**
         * Use the default mode (extended or unified desktop).
         * **normal**
         * The default source display will be mirrored to all other displays.
         * **mixed**
         * The specified source display will be mirrored to the provided destination displays. All other connected displays will be extended.
         */
        mode?: "off" | "normal" | "mixed" | undefined;
    }
    export interface MirrorModeInfoMixed extends MirrorModeInfo {
        mode: "mixed";
        mirroringSourceId?: string | undefined;
        /** The ids of the mirroring destination displays. */
        mirroringDestinationIds?: string[] | undefined;
    }

    /**
     * Requests the information for all attached display devices.
     * @param callback The callback to invoke with the results.
     */
    export function getInfo(callback: (info: DisplayInfo[]) => void): void;
    /**
     * Requests the information for all attached display devices.
     * @return The `getInfo` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getInfo(): Promise<DisplayInfo[]>;
    /**
     * Requests the information for all attached display devices.
     * @since Chrome 59
     * @param flags Options affecting how the information is returned.
     * @param callback The callback to invoke with the results.
     */
    export function getInfo(flags: DisplayInfoFlags, callback: (info: DisplayInfo[]) => void): void;
    /**
     * Requests the information for all attached display devices.
     * @since Chrome 59
     * @param flags Options affecting how the information is returned.
     * @return The `getInfo` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getInfo(flags: DisplayInfoFlags): Promise<DisplayInfo[]>;

    /**
     * requires(CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
     * @description Requests the layout info for all displays.
     * @since Chrome 53
     * @param callback The callback to invoke with the results.
     */
    export function getDisplayLayout(callback: (layouts: DisplayLayout[]) => void): void;

    /**
     * requires(CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
     * @description Requests the layout info for all displays.
     * @since Chrome 53
     * @return The getDisplayLayout method provides its result via callback or returned as a Promise (MV3 only).
     */
    export function getDisplayLayout(): Promise<DisplayLayout[]>;

    /**
     * requires(CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
     * @description
     * Updates the properties for the display specified by **id**,
     * according to the information provided in **info**.
     * On failure, runtime.lastError will be set.
     * @param id The display's unique identifier.
     * @param info The information about display properties that should be changed. A property will be changed only if a new value for it is specified in |info|.
     * @return The `setDisplayProperties` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters. To find out whether the function succeeded, runtime.lastError should be queried.
     */
    export function setDisplayProperties(id: string, info: DisplayPropertiesInfo): Promise<void>;

    /**
     * requires(CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
     * @description
     * Updates the properties for the display specified by **id**,
     * according to the information provided in **info**.
     * On failure, runtime.lastError will be set.
     * @param id The display's unique identifier.
     * @param info The information about display properties that should be changed. A property will be changed only if a new value for it is specified in |info|.
     * @param [callback] Empty function called when the function finishes. To find out whether the function succeeded, runtime.lastError should be queried.
     */
    export function setDisplayProperties(id: string, info: DisplayPropertiesInfo, callback: () => void): void;

    /**
     * requires(CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
     * @description
     * Set the layout for all displays.
     * Any display not included will use the default layout.
     * If a layout would overlap or be otherwise invalid it will be adjusted to a valid layout.
     * After layout is resolved, an onDisplayChanged event will be triggered.
     * @since Chrome 53
     * @param layouts The layout information, required for all displays except the primary display.
     * @return The `setDisplayLayout` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters. To find out whether the function succeeded, runtime.lastError should be queried.
     */
    export function setDisplayLayout(layouts: DisplayLayout[]): Promise<void>;

    /**
     * requires(CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
     * @description
     * Set the layout for all displays.
     * Any display not included will use the default layout.
     * If a layout would overlap or be otherwise invalid it will be adjusted to a valid layout.
     * After layout is resolved, an onDisplayChanged event will be triggered.
     * @since Chrome 53
     * @param layouts The layout information, required for all displays except the primary display.
     * @param callback Empty function called when the function finishes. To find out whether the function succeeded, runtime.lastError should be queried.
     */
    export function setDisplayLayout(layouts: DisplayLayout[], callback: () => void): void;

    /**
     * requires(CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
     * @description
     * Enables/disables the unified desktop feature.
     * Note that this simply enables the feature, but will not change the actual desktop mode.
     * (That is, if the desktop is in mirror mode, it will stay in mirror mode)
     * @since Chrome 46
     * @param enabled True if unified desktop should be enabled.
     */
    export function enableUnifiedDesktop(enabled: boolean): void;
    /**
     * Starts overscan calibration for a display.
     * This will show an overlay on the screen indicating the current overscan insets.
     * If overscan calibration for display **id** is in progress this will reset calibration.
     * @since Chrome 53
     * @param id The display's unique identifier.
     */
    export function overscanCalibrationStart(id: string): void;
    /**
     * Adjusts the current overscan insets for a display.
     * Typically this should etiher move the display along an axis (e.g. left+right have the same value)
     * or scale it along an axis (e.g. top+bottom have opposite values).
     * Each Adjust call is cumulative with previous calls since Start.
     * @since Chrome 53
     * @param id The display's unique identifier.
     * @param delta The amount to change the overscan insets.
     */
    export function overscanCalibrationAdjust(id: string, delta: Insets): void;

    /**
     * Resets the overscan insets for a display to the last saved value (i.e before Start was called).
     * @since Chrome 53
     * @param id The display's unique identifier.
     */
    export function overscanCalibrationReset(id: string): void;

    /**
     * Complete overscan adjustments for a display by saving the current values and hiding the overlay.
     * @since Chrome 53
     * @param id The display's unique identifier.
     */
    export function overscanCalibrationComplete(id: string): void;

    /**
     * Displays the native touch calibration UX for the display with **id** as display id.
     * This will show an overlay on the screen with required instructions on how to proceed.
     * The callback will be invoked in case of successful calibraion only.
     * If the calibration fails, this will throw an error.
     * @since Chrome 57
     * @param id The display's unique identifier.
     * @param callback Optional callback to inform the caller that the touch calibration has ended. The argument of the callback informs if the calibration was a success or not.
     */
    export function showNativeTouchCalibration(id: string, callback: (success: boolean) => void): void;

    /**
     * Displays the native touch calibration UX for the display with **id** as display id.
     * This will show an overlay on the screen with required instructions on how to proceed.
     * The callback will be invoked in case of successful calibraion only.
     * If the calibration fails, this will throw an error.
     * @since Chrome 57
     * @param id The display's unique identifier.
     * @return The `showNativeTouchCalibration` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function showNativeTouchCalibration(id: string): Promise<boolean>;

    /**
     * Starts custom touch calibration for a display.
     * This should be called when using a custom UX for collecting calibration data.
     * If another touch calibration is already in progress this will throw an error.
     * @since Chrome 57
     * @param id The display's unique identifier.
     */
    export function startCustomTouchCalibration(id: string): void;

    /**
     * Sets the touch calibration pairs for a display.
     * These **pairs** would be used to calibrate the touch screen for display with **id** called in startCustomTouchCalibration().
     * Always call **startCustomTouchCalibration** before calling this method.
     * If another touch calibration is already in progress this will throw an error.
     * @since Chrome 57
     * @param pairs The pairs of point used to calibrate the display.
     * @param bounds Bounds of the display when the touch calibration was performed. |bounds.left| and |bounds.top| values are ignored.
     * @throws Error
     */
    export function completeCustomTouchCalibration(pairs: TouchCalibrationPairs, bounds: Bounds): void;

    /**
     * Resets the touch calibration for the display and brings it back to its default state by clearing any touch calibration data associated with the display.
     * @since Chrome 57
     * @param id The display's unique identifier.
     */
    export function clearTouchCalibration(id: string): void;

    /**
     * requires(CrOS Kiosk app) Chrome OS Kiosk apps only
     * @since Chrome 65.
     * @description
     * Sets the display mode to the specified mirror mode.
     * Each call resets the state from previous calls.
     * Calling setDisplayProperties() will fail for the
     * mirroring destination displays.
     */
    export function setMirrorMode(info: MirrorModeInfo | MirrorModeInfoMixed, callback: () => void): void;

    /**
     * requires(CrOS Kiosk app) Chrome OS Kiosk apps only
     * @since Chrome 65.
     * @description
     * Sets the display mode to the specified mirror mode.
     * Each call resets the state from previous calls.
     * Calling setDisplayProperties() will fail for the
     * mirroring destination displays.
     * @return The `setMirrorMode` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setMirrorMode(info: MirrorModeInfo | MirrorModeInfoMixed): Promise<void>;

    /**
     * Fired when anything changes to the display configuration.
     */
    export const onDisplayChanged: chrome.events.Event<() => void>;
}

////////////////////
// TabCapture
////////////////////
/**
 * Use the chrome.tabCapture API to interact with tab media streams.
 * Permissions:  "tabCapture"
 * @since Chrome 31.
 */
declare namespace chrome.tabCapture {
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

    export interface MediaStreamConstraint {
        mandatory: object;
        optional?: object | undefined;
    }

    export interface CaptureOptions {
        /** Optional. */
        audio?: boolean | undefined;
        /** Optional. */
        video?: boolean | undefined;
        /** Optional. */
        audioConstraints?: MediaStreamConstraint | undefined;
        /** Optional. */
        videoConstraints?: MediaStreamConstraint | undefined;
    }

    export interface GetMediaStreamOptions {
        /** Optional tab id of the tab which will later invoke getUserMedia() to consume the stream. If not specified then the resulting stream can be used only by the calling extension. The stream can only be used by frames in the given tab whose security origin matches the consumber tab's origin. The tab's origin must be a secure origin, e.g. HTTPS. */
        consumerTabId?: number | undefined;
        /** Optional tab id of the tab which will be captured. If not specified then the current active tab will be selected. Only tabs for which the extension has been granted the activeTab permission can be used as the target tab. */
        targetTabId?: number | undefined;
    }

    export interface CaptureStatusChangedEvent extends chrome.events.Event<(info: CaptureInfo) => void> {}

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

    /**
     * Creates a stream ID to capture the target tab. Similar to chrome.tabCapture.capture() method, but returns a media stream ID, instead of a media stream, to the consumer tab.
     * @param options Options for the media stream id to retrieve.
     * @param callback Callback to invoke with the result. If successful, the result is an opaque string that can be passed to the getUserMedia() API to generate a media stream that corresponds to the target tab. The created streamId can only be used once and expires after a few seconds if it is not used.
     */
    export function getMediaStreamId(options: GetMediaStreamOptions, callback: (streamId: string) => void): void;

    /** Event fired when the capture status of a tab changes. This allows extension authors to keep track of the capture status of tabs to keep UI elements like page actions in sync. */
    export var onStatusChanged: CaptureStatusChangedEvent;
}

////////////////////
// Tabs
////////////////////
/**
 * Use the chrome.tabs API to interact with the browser's tab system. You can use this API to create, modify, and rearrange tabs in the browser.
 * Permissions: The majority of the chrome.tabs API can be used without declaring any permission. However, the "tabs" permission is required in order to populate the url, title, and favIconUrl properties of Tab.
 * @since Chrome 5.
 */
declare namespace chrome.tabs {
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
        reason?: string | undefined;
        /**
         * Optional.
         * The ID of the extension that changed the muted state. Not set if an extension was not the reason the muted state last changed.
         */
        extensionId?: string | undefined;
    }

    export interface Tab {
        /**
         * Optional.
         * Either loading or complete.
         */
        status?: string | undefined;
        /** The zero-based index of the tab within its window. */
        index: number;
        /**
         * Optional.
         * The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists.
         * @since Chrome 18.
         */
        openerTabId?: number | undefined;
        /**
         * Optional.
         * The title of the tab. This property is only present if the extension's manifest includes the "tabs" permission.
         */
        title?: string | undefined;
        /**
         * Optional.
         * The URL the tab is displaying. This property is only present if the extension's manifest includes the "tabs" permission.
         */
        url?: string | undefined;
        /**
         * The URL the tab is navigating to, before it has committed.
         * This property is only present if the extension's manifest includes the "tabs" permission and there is a pending navigation.
         * @since Chrome 79.
         */
        pendingUrl?: string | undefined;
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
        favIconUrl?: string | undefined;
        /**
         * Optional.
         * The ID of the tab. Tab IDs are unique within a browser session. Under some circumstances a Tab may not be assigned an ID, for example when querying foreign tabs using the sessions API, in which case a session ID may be present. Tab ID can also be set to chrome.tabs.TAB_ID_NONE for apps and devtools windows.
         */
        id?: number | undefined;
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
        audible?: boolean | undefined;
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
        mutedInfo?: MutedInfo | undefined;
        /**
         * Optional. The width of the tab in pixels.
         * @since Chrome 31.
         */
        width?: number | undefined;
        /**
         * Optional. The height of the tab in pixels.
         * @since Chrome 31.
         */
        height?: number | undefined;
        /**
         * Optional. The session ID used to uniquely identify a Tab obtained from the sessions API.
         * @since Chrome 31.
         */
        sessionId?: string | undefined;
        /**
         * The ID of the group that the tab belongs to.
         * @since Chrome 88
         */
        groupId: number;
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
        mode?: string | undefined;
        /**
         * Optional.
         * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults to per-origin when in automatic mode, and per-tab otherwise.
         * "per-origin": Zoom changes will persist in the zoomed page's origin, i.e. all other tabs navigated to that same origin will be zoomed as well. Moreover, per-origin zoom changes are saved with the origin, meaning that when navigating to other pages in the same origin, they will all be zoomed to the same zoom factor. The per-origin scope is only available in the automatic mode.
         * "per-tab": Zoom changes only take effect in this tab, and zoom changes in other tabs will not affect the zooming of this tab. Also, per-tab zoom changes are reset on navigation; navigating a tab will always load pages with their per-origin zoom factors.
         */
        scope?: string | undefined;
        /**
         * Optional.
         * Used to return the default zoom level for the current tab in calls to tabs.getZoomSettings.
         * @since Chrome 43.
         */
        defaultZoomFactor?: number | undefined;
    }

    export interface InjectDetails {
        /**
         * Optional.
         * If allFrames is true, implies that the JavaScript or CSS should be injected into all frames of current page. By default, it's false and is only injected into the top frame.
         */
        allFrames?: boolean | undefined;
        /**
         * Optional. JavaScript or CSS code to inject.
         * Warning: Be careful using the code parameter. Incorrect use of it may open your extension to cross site scripting attacks.
         */
        code?: string | undefined;
        /**
         * Optional. The soonest that the JavaScript or CSS will be injected into the tab.
         * One of: "document_start", "document_end", or "document_idle"
         * @since Chrome 20.
         */
        runAt?: string | undefined;
        /** Optional. JavaScript or CSS file to inject. */
        file?: string | undefined;
        /**
         * Optional.
         * The frame where the script or CSS should be injected. Defaults to 0 (the top-level frame).
         * @since Chrome 39.
         */
        frameId?: number | undefined;
        /**
         * Optional.
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is false.
         * @since Chrome 39.
         */
        matchAboutBlank?: boolean | undefined;
        /**
         * Optional. The origin of the CSS to inject. This may only be specified for CSS, not JavaScript. Defaults to "author".
         * One of: "author", or "user"
         * @since Chrome 66.
         */
        cssOrigin?: string | undefined;
    }

    export interface CreateProperties {
        /** Optional. The position the tab should take in the window. The provided value will be clamped to between zero and the number of tabs in the window. */
        index?: number | undefined;
        /**
         * Optional.
         * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly created tab.
         * @since Chrome 18.
         */
        openerTabId?: number | undefined;
        /**
         * Optional.
         * The URL to navigate the tab to initially. Fully-qualified URLs must include a scheme (i.e. 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within the extension. Defaults to the New Tab Page.
         */
        url?: string | undefined;
        /**
         * Optional. Whether the tab should be pinned. Defaults to false
         * @since Chrome 9.
         */
        pinned?: boolean | undefined;
        /** Optional. The window to create the new tab in. Defaults to the current window. */
        windowId?: number | undefined;
        /**
         * Optional.
         * Whether the tab should become the active tab in the window. Does not affect whether the window is focused (see windows.update). Defaults to true.
         * @since Chrome 16.
         */
        active?: boolean | undefined;
        /**
         * Optional. Whether the tab should become the selected tab in the window. Defaults to true
         * @deprecated since Chrome 33. Please use active.
         */
        selected?: boolean | undefined;
    }

    export interface MoveProperties {
        /** The position to move the window to. -1 will place the tab at the end of the window. */
        index: number;
        /** Optional. Defaults to the window the tab is currently in. */
        windowId?: number | undefined;
    }

    export interface UpdateProperties {
        /**
         * Optional. Whether the tab should be pinned.
         * @since Chrome 9.
         */
        pinned?: boolean | undefined;
        /**
         * Optional. The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
         * @since Chrome 18.
         */
        openerTabId?: number | undefined;
        /** Optional. A URL to navigate the tab to. */
        url?: string | undefined;
        /**
         * Optional. Adds or removes the tab from the current selection.
         * @since Chrome 16.
         */
        highlighted?: boolean | undefined;
        /**
         * Optional. Whether the tab should be active. Does not affect whether the window is focused (see windows.update).
         * @since Chrome 16.
         */
        active?: boolean | undefined;
        /**
         * Optional. Whether the tab should be selected.
         * @deprecated since Chrome 33. Please use highlighted.
         */
        selected?: boolean | undefined;
        /**
         * Optional. Whether the tab should be muted.
         * @since Chrome 45.
         */
        muted?: boolean | undefined;
        /**
         * Optional. Whether the tab should be discarded automatically by the browser when resources are low.
         * @since Chrome 54.
         */
        autoDiscardable?: boolean | undefined;
    }

    export interface CaptureVisibleTabOptions {
        /**
         * Optional.
         * When format is "jpeg", controls the quality of the resulting image. This value is ignored for PNG images. As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed to store it will decrease.
         */
        quality?: number | undefined;
        /**
         * Optional. The format of an image.
         * One of: "jpeg", or "png"
         */
        format?: string | undefined;
    }

    export interface ReloadProperties {
        /** Optional. Whether using any local cache. Default is false. */
        bypassCache?: boolean | undefined;
    }

    export interface ConnectInfo {
        /** Optional. Will be passed into onConnect for content scripts that are listening for the connection event. */
        name?: string | undefined;
        /**
         * Open a port to a specific frame identified by frameId instead of all frames in the tab.
         * @since Chrome 41.
         */
        frameId?: number | undefined;
        /**
         * Optional. Open a port to a specific document identified by documentId instead of all frames in the tab.
         * @since Chrome 106.
         */
        documentId?: string;
    }

    export interface MessageSendOptions {
        /** Optional. Send a message to a specific frame identified by frameId instead of all frames in the tab. */
        frameId?: number | undefined;
        /**
         * Optional. Send a message to a specific document identified by documentId instead of all frames in the tab.
         * @since Chrome 106.
         */
        documentId?: string;
    }

    export interface GroupOptions {
        /** Optional. Configurations for creating a group. Cannot be used if groupId is already specified. */
        createProperties?: {
            /** Optional. The window of the new group. Defaults to the current window. */
            windowId?: number | undefined;
        } | undefined;
        /** Optional. The ID of the group to add the tabs to. If not specified, a new group will be created. */
        groupId?: number | undefined;
        /** TOptional. he tab ID or list of tab IDs to add to the specified group. */
        tabIds?: number | number[] | undefined;
    }

    export interface HighlightInfo {
        /** One or more tab indices to highlight. */
        tabs: number | number[];
        /** Optional. The window that contains the tabs. */
        windowId?: number | undefined;
    }

    export interface QueryInfo {
        /**
         * Optional. Whether the tabs have completed loading.
         * One of: "loading", or "complete"
         */
        status?: "loading" | "complete" | undefined;
        /**
         * Optional. Whether the tabs are in the last focused window.
         * @since Chrome 19.
         */
        lastFocusedWindow?: boolean | undefined;
        /** Optional. The ID of the parent window, or windows.WINDOW_ID_CURRENT for the current window. */
        windowId?: number | undefined;
        /**
         * Optional. The type of window the tabs are in.
         * One of: "normal", "popup", "panel", "app", or "devtools"
         */
        windowType?: "normal" | "popup" | "panel" | "app" | "devtools" | undefined;
        /** Optional. Whether the tabs are active in their windows. */
        active?: boolean | undefined;
        /**
         * Optional. The position of the tabs within their windows.
         * @since Chrome 18.
         */
        index?: number | undefined;
        /** Optional. Match page titles against a pattern. */
        title?: string | undefined;
        /** Optional. Match tabs against one or more URL patterns. Note that fragment identifiers are not matched. */
        url?: string | string[] | undefined;
        /**
         * Optional. Whether the tabs are in the current window.
         * @since Chrome 19.
         */
        currentWindow?: boolean | undefined;
        /** Optional. Whether the tabs are highlighted. */
        highlighted?: boolean | undefined;
        /**
         * Optional.
         * Whether the tabs are discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content gets reloaded the next time it's activated.
         * @since Chrome 54.
         */
        discarded?: boolean | undefined;
        /**
         * Optional.
         * Whether the tabs can be discarded automatically by the browser when resources are low.
         * @since Chrome 54.
         */
        autoDiscardable?: boolean | undefined;
        /** Optional. Whether the tabs are pinned. */
        pinned?: boolean | undefined;
        /**
         * Optional. Whether the tabs are audible.
         * @since Chrome 45.
         */
        audible?: boolean | undefined;
        /**
         * Optional. Whether the tabs are muted.
         * @since Chrome 45.
         */
        muted?: boolean | undefined;
        /**
         * Optional. The ID of the group that the tabs are in, or chrome.tabGroups.TAB_GROUP_ID_NONE for ungrouped tabs.
         * @since Chrome 88
         */
        groupId?: number | undefined;
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
        status?: string | undefined;
        /**
         * The tab's new pinned state.
         * @since Chrome 9.
         */
        pinned?: boolean | undefined;
        /** Optional. The tab's URL if it has changed. */
        url?: string | undefined;
        /**
         * The tab's new audible state.
         * @since Chrome 45.
         */
        audible?: boolean | undefined;
        /**
         * The tab's new discarded state.
         * @since Chrome 54.
         */
        discarded?: boolean | undefined;
        /**
         * The tab's new auto-discardable
         * @since Chrome 54.
         */
        autoDiscardable?: boolean | undefined;
        /**
         * The tab's new group.
         * @since Chrome 88
         */
        groupId?: number | undefined;
        /**
         * The tab's new muted state and the reason for the change.
         * @since Chrome 46. Warning: this is the current Beta channel.
         */
        mutedInfo?: MutedInfo | undefined;
        /**
         * The tab's new favicon URL.
         * @since Chrome 27.
         */
        favIconUrl?: string | undefined;
        /**
         * The tab's new title.
         * @since Chrome 48.
         */
        title?: string | undefined;
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

    export interface TabHighlightedEvent extends chrome.events.Event<(highlightInfo: TabHighlightInfo) => void> {}

    export interface TabRemovedEvent extends chrome.events.Event<(tabId: number, removeInfo: TabRemoveInfo) => void> {}

    export interface TabUpdatedEvent
        extends chrome.events.Event<(tabId: number, changeInfo: TabChangeInfo, tab: Tab) => void>
    {}

    export interface TabAttachedEvent extends chrome.events.Event<(tabId: number, attachInfo: TabAttachInfo) => void> {}

    export interface TabMovedEvent extends chrome.events.Event<(tabId: number, moveInfo: TabMoveInfo) => void> {}

    export interface TabDetachedEvent extends chrome.events.Event<(tabId: number, detachInfo: TabDetachInfo) => void> {}

    export interface TabCreatedEvent extends chrome.events.Event<(tab: Tab) => void> {}

    export interface TabActivatedEvent extends chrome.events.Event<(activeInfo: TabActiveInfo) => void> {}

    export interface TabReplacedEvent extends chrome.events.Event<(addedTabId: number, removedTabId: number) => void> {}

    export interface TabSelectedEvent extends chrome.events.Event<(tabId: number, selectInfo: TabWindowInfo) => void> {}

    export interface TabZoomChangeEvent extends chrome.events.Event<(ZoomChangeInfo: ZoomChangeInfo) => void> {}

    /**
     * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @return The `executeScript` method provides its result via callback or returned as a `Promise` (MV3 only). The result of the script in every injected frame.
     */
    export function executeScript(details: InjectDetails): Promise<any[]>;
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
     * @return The `executeScript` method provides its result via callback or returned as a `Promise` (MV3 only). The result of the script in every injected frame.
     */
    export function executeScript(tabId: number, details: InjectDetails): Promise<any[]>;
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
     * Retrieves details about the specified tab.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(tabId: number): Promise<Tab>;
    /**
     * Gets details about all tabs in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {windowId: windowId}.
     */
    export function getAllInWindow(callback: (tab: Tab) => void): void;
    /**
     * Gets details about all tabs in the specified window.
     * @return The `getAllInWindow` method provides its result via callback or returned as a `Promise` (MV3 only).
     * @deprecated since Chrome 33. Please use tabs.query {windowId: windowId}.
     */
    export function getAllInWindow(): Promise<Tab>;
    /**
     * Gets details about all tabs in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {windowId: windowId}.
     * @param windowId Optional. Defaults to the current window.
     */
    export function getAllInWindow(windowId: number, callback: (tab: Tab) => void): void;
    /**
     * Gets details about all tabs in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {windowId: windowId}.
     * @param windowId Optional. Defaults to the current window.
     * @return The `getAllInWindow` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAllInWindow(windowId: number): Promise<Tab>;
    /** Gets the tab that this script call is being made from. May be undefined if called from a non-tab context (for example: a background page or popup view). */
    export function getCurrent(callback: (tab?: Tab) => void): void;
    /**
     * Gets the tab that this script call is being made from. May be undefined if called from a non-tab context (for example: a background page or popup view).
     * @return The `getCurrent` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getCurrent(): Promise<Tab | undefined>;
    /**
     * Gets the tab that is selected in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {active: true}.
     */
    export function getSelected(callback: (tab: Tab) => void): void;
    /**
     * Gets the tab that is selected in the specified window.
     * @return The `getSelected` method provides its result via callback or returned as a `Promise` (MV3 only).
     * @deprecated since Chrome 33. Please use tabs.query {active: true}.
     */
    export function getSelected(): Promise<Tab>;
    /**
     * Gets the tab that is selected in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {active: true}.
     * @param windowId Optional. Defaults to the current window.
     */
    export function getSelected(windowId: number, callback: (tab: Tab) => void): void;
    /**
     * Gets the tab that is selected in the specified window.
     * @deprecated since Chrome 33. Please use tabs.query {active: true}.
     * @param windowId Optional. Defaults to the current window.
     * @return The `getSelected` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getSelected(windowId: number): Promise<Tab>;
    /**
     * Creates a new tab.
     * @return The `create` method provides its result via callback or returned as a `Promise` (MV3 only). Details about the created tab. Will contain the ID of the new tab.
     */
    export function create(createProperties: CreateProperties): Promise<Tab>;
    /**
     * Creates a new tab.
     * @param callback Optional.
     * Parameter tab: Details about the created tab. Will contain the ID of the new tab.
     */
    export function create(createProperties: CreateProperties, callback: (tab: Tab) => void): void;
    /**
     * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
     * @param tabId The tab to move.
     * @return The `move` method provides its result via callback or returned as a `Promise` (MV3 only). Details about the moved tab.
     */
    export function move(tabId: number, moveProperties: MoveProperties): Promise<Tab>;
    /**
     * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
     * @param tabId The tab to move.
     * @param callback Optional.
     * Parameter tab: Details about the moved tab.
     */
    export function move(tabId: number, moveProperties: MoveProperties, callback: (tab: Tab) => void): void;
    /**
     * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
     * @param tabIds The tabs to move.
     * @return The `move` method provides its result via callback or returned as a `Promise` (MV3 only). Details about the moved tabs.
     */
    export function move(tabIds: number[], moveProperties: MoveProperties): Promise<Tab[]>;
    /**
     * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
     * @param tabIds The tabs to move.
     * @param callback Optional.
     * Parameter tabs: Details about the moved tabs.
     */
    export function move(tabIds: number[], moveProperties: MoveProperties, callback: (tabs: Tab[]) => void): void;
    /**
     * Modifies the properties of a tab. Properties that are not specified in updateProperties are not modified.
     * @return The `update` method provides its result via callback or returned as a `Promise` (MV3 only). Details about the updated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
     */
    export function update(updateProperties: UpdateProperties): Promise<Tab>;
    /**
     * Modifies the properties of a tab. Properties that are not specified in updateProperties are not modified.
     * @param callback Optional.
     * Optional parameter tab: Details about the updated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
     */
    export function update(updateProperties: UpdateProperties, callback: (tab?: Tab) => void): void;
    /**
     * Modifies the properties of a tab. Properties that are not specified in updateProperties are not modified.
     * @param tabId Defaults to the selected tab of the current window.
     * @return The `update` method provides its result via callback or returned as a `Promise` (MV3 only). Details about the updated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
     */
    export function update(tabId: number, updateProperties: UpdateProperties): Promise<Tab>;
    /**
     * Modifies the properties of a tab. Properties that are not specified in updateProperties are not modified.
     * @param tabId Defaults to the selected tab of the current window.
     * @param callback Optional.
     * Optional parameter tab: Details about the updated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
     */
    export function update(tabId: number, updateProperties: UpdateProperties, callback: (tab?: Tab) => void): void;
    /**
     * Closes a tab.
     * @param tabId The tab to close.
     * @return The `remove` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function remove(tabId: number): Promise<void>;
    /**
     * Closes a tab.
     * @param tabId The tab to close.
     */
    export function remove(tabId: number, callback: Function): void;
    /**
     * Closes several tabs.
     * @param tabIds The list of tabs to close.
     * @return The `remove` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function remove(tabIds: number[]): Promise<void>;
    /**
     * Closes several tabs.
     * @param tabIds The list of tabs to close.
     */
    export function remove(tabIds: number[], callback: Function): void;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param callback
     * Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(callback: (dataUrl: string) => void): void;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @return The `captureVisibleTab` method provides its result via callback or returned as a `Promise` (MV3 only). A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(): Promise<string>;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param windowId Optional. The target window. Defaults to the current window.
     * @param callback
     * Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(windowId: number, callback: (dataUrl: string) => void): void;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param windowId Optional. The target window. Defaults to the current window.
     * @return The `captureVisibleTab` method provides its result via callback or returned as a `Promise` (MV3 only). A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(windowId: number): Promise<string>;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param options Optional. Details about the format and quality of an image.
     * @return The `captureVisibleTab` method provides its result via callback or returned as a `Promise` (MV3 only). A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(options: CaptureVisibleTabOptions): Promise<string>;
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
     * @return The `captureVisibleTab` method provides its result via callback or returned as a `Promise` (MV3 only). A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(
        windowId: number,
        options: CaptureVisibleTabOptions,
    ): Promise<string>;
    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param windowId Optional. The target window. Defaults to the current window.
     * @param options Optional. Details about the format and quality of an image.
     * @param callback
     * Parameter dataUrl: A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleTab(
        windowId: number,
        options: CaptureVisibleTabOptions,
        callback: (dataUrl: string) => void,
    ): void;
    /**
     * Reload a tab.
     * @since Chrome 16.
     * @param tabId The ID of the tab to reload; defaults to the selected tab of the current window.
     * @return The `reload` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function reload(tabId: number, reloadProperties?: ReloadProperties): Promise<void>;
    /**
     * Reload a tab.
     * @since Chrome 16.
     * @param tabId The ID of the tab to reload; defaults to the selected tab of the current window.
     */
    export function reload(tabId: number, reloadProperties?: ReloadProperties, callback?: () => void): void;
    /**
     * Reload the selected tab of the current window.
     * @since Chrome 16.
     * @return The `reload` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function reload(reloadProperties: ReloadProperties): Promise<void>;
    /**
     * Reload the selected tab of the current window.
     * @since Chrome 16.
     */
    export function reload(reloadProperties: ReloadProperties, callback: () => void): void;
    /**
     * Reload the selected tab of the current window.
     * @since Chrome 16.
     * @return The `reload` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function reload(): Promise<void>;
    /**
     * Reload the selected tab of the current window.
     * @since Chrome 16.
     */
    export function reload(callback: () => void): void;
    /**
     * Duplicates a tab.
     * @since Chrome 23.
     * @param tabId The ID of the tab which is to be duplicated.
     * @return The `duplicate` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function duplicate(tabId: number): Promise<Tab | undefined>;
    /**
     * Duplicates a tab.
     * @since Chrome 23.
     * @param tabId The ID of the tab which is to be duplicated.
     * @param callback Optional.
     * Optional parameter tab: Details about the duplicated tab. The tabs.Tab object doesn't contain url, title and favIconUrl if the "tabs" permission has not been requested.
     */
    export function duplicate(tabId: number, callback: (tab?: Tab) => void): void;
    /**
     * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The runtime.onMessage event is fired in each content script running in the specified tab for the current extension.
     * @since Chrome 20.
     */
    export function sendMessage<M = any, R = any>(
        tabId: number,
        message: M,
        responseCallback: (response: R) => void,
    ): void;
    /**
     * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The runtime.onMessage event is fired in each content script running in the specified tab for the current extension.
     * @since Chrome 41.
     * @param responseCallback Optional.
     * Parameter response: The JSON response object sent by the handler of the message. If an error occurs while connecting to the specified tab, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendMessage<M = any, R = any>(
        tabId: number,
        message: M,
        options: MessageSendOptions,
        responseCallback: (response: R) => void,
    ): void;
    /**
     * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The runtime.onMessage event is fired in each content script running in the specified tab for the current extension.
     * @since Chrome 99
     */
    export function sendMessage<M = any, R = any>(tabId: number, message: M): Promise<R>;
    /**
     * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The runtime.onMessage event is fired in each content script running in the specified tab for the current extension.
     * @since Chrome 99
     */
    export function sendMessage<M = any, R = any>(
        tabId: number,
        message: M,
        options: MessageSendOptions,
    ): Promise<R>;
    /**
     * Sends a single request to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The extension.onRequest event is fired in each content script running in the specified tab for the current extension.
     * @deprecated since Chrome 33. Please use runtime.sendMessage.
     * @param responseCallback Optional.
     * Parameter response: The JSON response object sent by the handler of the request. If an error occurs while connecting to the specified tab, the callback will be called with no arguments and runtime.lastError will be set to the error message.
     */
    export function sendRequest<Request = any, Response = any>(
        tabId: number,
        request: Request,
        responseCallback?: (response: Response) => void,
    ): void;
    /** Connects to the content script(s) in the specified tab. The runtime.onConnect event is fired in each content script running in the specified tab for the current extension. */
    export function connect(tabId: number, connectInfo?: ConnectInfo): runtime.Port;
    /**
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @return The `insertCSS` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function insertCSS(details: InjectDetails): Promise<void>;
    /**
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @param callback Optional. Called when all the CSS has been inserted.
     */
    export function insertCSS(details: InjectDetails, callback: Function): void;
    /**
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param tabId Optional. The ID of the tab in which to insert the CSS; defaults to the active tab of the current window.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @return The `insertCSS` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function insertCSS(tabId: number, details: InjectDetails): Promise<void>;
    /**
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param tabId Optional. The ID of the tab in which to insert the CSS; defaults to the active tab of the current window.
     * @param details Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @param callback Optional. Called when all the CSS has been inserted.
     */
    export function insertCSS(tabId: number, details: InjectDetails, callback: Function): void;
    /**
     * Highlights the given tabs.
     * @since Chrome 16.
     * @return The `highlight` method provides its result via callback or returned as a `Promise` (MV3 only). Contains details about the window whose tabs were highlighted.
     */
    export function highlight(highlightInfo: HighlightInfo): Promise<chrome.windows.Window>;
    /**
     * Highlights the given tabs.
     * @since Chrome 16.
     * @param callback Optional.
     * Parameter window: Contains details about the window whose tabs were highlighted.
     */
    export function highlight(highlightInfo: HighlightInfo, callback: (window: chrome.windows.Window) => void): void;
    /**
     * Gets all tabs that have the specified properties, or all tabs if no properties are specified.
     * @since Chrome 16.
     */
    export function query(queryInfo: QueryInfo, callback: (result: Tab[]) => void): void;
    /**
     * Gets all tabs that have the specified properties, or all tabs if no properties are specified.
     * @since Chrome 16.
     * @return The `query` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function query(queryInfo: QueryInfo): Promise<Tab[]>;
    /**
     * Detects the primary language of the content in a tab.
     * @param callback
     * Parameter language: An ISO language code such as en or fr. For a complete list of languages supported by this method, see kLanguageInfoTable. The 2nd to 4th columns will be checked and the first non-NULL value will be returned except for Simplified Chinese for which zh-CN will be returned. For an unknown language, und will be returned.
     */
    export function detectLanguage(callback: (language: string) => void): void;
    /**
     * Detects the primary language of the content in a tab.
     * @return The `detectLanguage` method provides its result via callback or returned as a `Promise` (MV3 only). An ISO language code such as en or fr. For a complete list of languages supported by this method, see kLanguageInfoTable. The 2nd to 4th columns will be checked and the first non-NULL value will be returned except for Simplified Chinese for which zh-CN will be returned. For an unknown language, und will be returned.
     */
    export function detectLanguage(): Promise<string>;
    /**
     * Detects the primary language of the content in a tab.
     * @param tabId Optional. Defaults to the active tab of the current window.
     * @param callback
     * Parameter language: An ISO language code such as en or fr. For a complete list of languages supported by this method, see kLanguageInfoTable. The 2nd to 4th columns will be checked and the first non-NULL value will be returned except for Simplified Chinese for which zh-CN will be returned. For an unknown language, und will be returned.
     */
    export function detectLanguage(tabId: number, callback: (language: string) => void): void;
    /**
     * Detects the primary language of the content in a tab.
     * @param tabId Optional. Defaults to the active tab of the current window.
     * @return The `detectLanguage` method provides its result via callback or returned as a `Promise` (MV3 only). An ISO language code such as en or fr. For a complete list of languages supported by this method, see kLanguageInfoTable. The 2nd to 4th columns will be checked and the first non-NULL value will be returned except for Simplified Chinese for which zh-CN will be returned. For an unknown language, und will be returned.
     */
    export function detectLanguage(tabId: number): Promise<string>;
    /**
     * Zooms a specified tab.
     * @since Chrome 42.
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     * @return The `setZoom` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setZoom(zoomFactor: number): Promise<void>;
    /**
     * Zooms a specified tab.
     * @since Chrome 42.
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     * @param callback Optional. Called after the zoom factor has been changed.
     */
    export function setZoom(zoomFactor: number, callback: () => void): void;
    /**
     * Zooms a specified tab.
     * @since Chrome 42.
     * @param tabId Optional. The ID of the tab to zoom; defaults to the active tab of the current window.
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     * @return The `setZoom` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setZoom(tabId: number, zoomFactor: number): Promise<void>;
    /**
     * Zooms a specified tab.
     * @since Chrome 42.
     * @param tabId Optional. The ID of the tab to zoom; defaults to the active tab of the current window.
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     * @param callback Optional. Called after the zoom factor has been changed.
     */
    export function setZoom(tabId: number, zoomFactor: number, callback: () => void): void;
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
     * @return The `getZoom` method provides its result via callback or returned as a `Promise` (MV3 only). The tab's current zoom factor.
     */
    export function getZoom(): Promise<number>;
    /**
     * Gets the current zoom factor of a specified tab.
     * @since Chrome 42.
     * @param tabId Optional. The ID of the tab to get the current zoom factor from; defaults to the active tab of the current window.
     * @param callback Called with the tab's current zoom factor after it has been fetched.
     * Parameter zoomFactor: The tab's current zoom factor.
     */
    export function getZoom(tabId: number, callback: (zoomFactor: number) => void): void;
    /**
     * Gets the current zoom factor of a specified tab.
     * @since Chrome 42.
     * @param tabId Optional. The ID of the tab to get the current zoom factor from; defaults to the active tab of the current window.
     * @return The `getZoom` method provides its result via callback or returned as a `Promise` (MV3 only). The tab's current zoom factor.
     */
    export function getZoom(tabId: number): Promise<number>;
    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
     * @since Chrome 42.
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     * @return The `setZoomSettings` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setZoomSettings(zoomSettings: ZoomSettings): Promise<void>;
    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
     * @since Chrome 42.
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     * @param callback Optional. Called after the zoom settings have been changed.
     */
    export function setZoomSettings(zoomSettings: ZoomSettings, callback: () => void): void;
    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
     * @since Chrome 42.
     * @param tabId Optional. The ID of the tab to change the zoom settings for; defaults to the active tab of the current window.
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     * @return The `setZoomSettings` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setZoomSettings(tabId: number, zoomSettings: ZoomSettings): Promise<void>;
    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
     * @since Chrome 42.
     * @param tabId Optional. The ID of the tab to change the zoom settings for; defaults to the active tab of the current window.
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     * @param callback Optional. Called after the zoom settings have been changed.
     */
    export function setZoomSettings(tabId: number, zoomSettings: ZoomSettings, callback: () => void): void;
    /**
     * Gets the current zoom settings of a specified tab.
     * @since Chrome 42.
     * @param callback Called with the tab's current zoom settings.
     * Parameter zoomSettings: The tab's current zoom settings.
     */
    export function getZoomSettings(callback: (zoomSettings: ZoomSettings) => void): void;
    /**
     * Gets the current zoom settings of a specified tab.
     * @since Chrome 42.
     * @return The `getZoomSettings` method provides its result via callback or returned as a `Promise` (MV3 only). The tab's current zoom settings.
     */
    export function getZoomSettings(): Promise<ZoomSettings>;
    /**
     * Gets the current zoom settings of a specified tab.
     * @since Chrome 42.
     * @param tabId Optional. The ID of the tab to get the current zoom settings from; defaults to the active tab of the current window.
     * @param callback Called with the tab's current zoom settings.
     * Parameter zoomSettings: The tab's current zoom settings.
     */
    export function getZoomSettings(tabId: number, callback: (zoomSettings: ZoomSettings) => void): void;
    /**
     * Gets the current zoom settings of a specified tab.
     * @since Chrome 42.
     * @param tabId Optional. The ID of the tab to get the current zoom settings from; defaults to the active tab of the current window.
     * @return The `getZoomSettings` method provides its result via callback or returned as a `Promise` (MV3 only). The tab's current zoom settings.
     */
    export function getZoomSettings(tabId: number): Promise<ZoomSettings>;
    /**
     * Discards a tab from memory. Discarded tabs are still visible on the tab strip and are reloaded when activated.
     * @since Chrome 54.
     * @param tabId Optional. The ID of the tab to be discarded. If specified, the tab will be discarded unless it's active or already discarded. If omitted, the browser will discard the least important tab. This can fail if no discardable tabs exist.
     * @return The `discard` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function discard(tabId?: number): Promise<Tab>;
    /**
     * Discards a tab from memory. Discarded tabs are still visible on the tab strip and are reloaded when activated.
     * @since Chrome 54.
     * @param tabId Optional. The ID of the tab to be discarded. If specified, the tab will be discarded unless it's active or already discarded. If omitted, the browser will discard the least important tab. This can fail if no discardable tabs exist.
     * @param callback Called after the operation is completed.
     */
    export function discard(callback: (tab: Tab) => void): void;
    export function discard(tabId: number, callback: (tab: Tab) => void): void;
    /**
     * Go forward to the next page, if one is available.
     * @since Chrome 72.
     * @return The `goForward` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function goForward(): Promise<void>;
    /**
     * Go forward to the next page, if one is available.
     * @since Chrome 72.
     * @param callback Optional. Called after the operation is completed.
     */
    export function goForward(callback: () => void): void;
    /**
     * Go forward to the next page, if one is available.
     * @since Chrome 72.
     * @param tabId Optional. The ID of the tab to navigate forward; defaults to the selected tab of the current window.
     * @return The `goForward` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function goForward(tabId: number): Promise<void>;
    /**
     * Go forward to the next page, if one is available.
     * @since Chrome 72.
     * @param tabId Optional. The ID of the tab to navigate forward; defaults to the selected tab of the current window.
     * @param callback Optional. Called after the operation is completed.
     */
    export function goForward(tabId: number, callback: () => void): void;
    /**
     * Go back to the previous page, if one is available.
     * @since Chrome 72.
     * @return The `goBack` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function goBack(): Promise<void>;
    /**
     * Go back to the previous page, if one is available.
     * @since Chrome 72.
     * @param callback Optional. Called after the operation is completed.
     */
    export function goBack(callback: () => void): void;
    /**
     * Go back to the previous page, if one is available.
     * @since Chrome 72.
     * @param tabId Optional. The ID of the tab to navigate back; defaults to the selected tab of the current window.
     * @return The `goBack` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function goBack(tabId: number): Promise<void>;
    /**
     * Go back to the previous page, if one is available.
     * @since Chrome 72.
     * @param tabId Optional. The ID of the tab to navigate back; defaults to the selected tab of the current window.
     * @param callback Optional. Called after the operation is completed.
     */
    export function goBack(tabId: number, callback: () => void): void;
    /**
     * Adds one or more tabs to a specified group, or if no group is specified, adds the given tabs to a newly created group.
     * @since Chrome 88
     * @param options Configurations object
     * @return The `group` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function group(options: GroupOptions): Promise<number>;
    /**
     * Adds one or more tabs to a specified group, or if no group is specified, adds the given tabs to a newly created group.
     * @since Chrome 88
     * @param options Configurations object
     * @return The `group` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function group(options: GroupOptions): Promise<number>;
    /**
     * Adds one or more tabs to a specified group, or if no group is specified, adds the given tabs to a newly created group.
     * @since Chrome 88
     * @param options Configurations object
     * @param callback Optional.
     */
    export function group(options: GroupOptions, callback: (groupId: number) => void): void;
    /**
     * Removes one or more tabs from their respective groups. If any groups become empty, they are deleted
     * @since Chrome 88
     * @param tabIds The tabs to ungroup.
     * @return The `ungroup` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function ungroup(tabIds: number | number[]): Promise<void>;
    /**
     * Removes one or more tabs from their respective groups. If any groups become empty, they are deleted
     * @since Chrome 88
     * @param tabIds The tabs to ungroup.
     * @param callback Optional. Called after the operation is completed.
     */
    export function ungroup(tabIds: number | number[], callback: () => void): void;
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
// Tab Groups
////////////////////
/**
 * Use the chrome.tabGroups API to interact with the browser's tab grouping system. You can use this API to modify and rearrange tab groups in the browser. To group and ungroup tabs, or to query what tabs are in groups, use the chrome.tabs API.
 * Permissions:  "tabGroups"
 * @since Chrome 89. Manifest V3 and above.
 */
declare namespace chrome.tabGroups {
    /** An ID that represents the absence of a group. */
    export var TAB_GROUP_ID_NONE: -1;

    export type ColorEnum = "grey" | "blue" | "red" | "yellow" | "green" | "pink" | "purple" | "cyan" | "orange";

    export interface TabGroup {
        /** Whether the group is collapsed. A collapsed group is one whose tabs are hidden. */
        collapsed: boolean;
        /** The group's color. */
        color: ColorEnum;
        /** The ID of the group. Group IDs are unique within a browser session. */
        id: number;
        /** Optional. The title of the group. */
        title?: string | undefined;
        /** The ID of the window that contains the group. */
        windowId: number;
    }

    export interface MoveProperties {
        /** The position to move the group to. Use -1 to place the group at the end of the window. */
        index: number;
        /** Optional. The window to move the group to. Defaults to the window the group is currently in. Note that groups can only be moved to and from windows with chrome.windows.WindowType type "normal". */
        windowId?: number | undefined;
    }

    export interface QueryInfo {
        /** Optional. Whether the groups are collapsed. */
        collapsed?: boolean | undefined;
        /** Optional. The color of the groups. */
        color?: ColorEnum | undefined;
        /** Optional. Match group titles against a pattern. */
        title?: string | undefined;
        /** Optional. The ID of the window that contains the group. */
        windowId?: number | undefined;
    }

    export interface UpdateProperties {
        /** Optional. Whether the group should be collapsed. */
        collapsed?: boolean | undefined;
        /** Optional. The color of the group. */
        color?: ColorEnum | undefined;
        /** Optional. The title of the group. */
        title?: string | undefined;
    }

    /**
     * Retrieves details about the specified group.
     * @param groupId The ID of the tab group.
     * @param callback Called with the retrieved tab group.
     */
    export function get(groupId: number, callback: (group: TabGroup) => void): void;

    /**
     * Retrieves details about the specified group.
     * @param groupId The ID of the tab group.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(groupId: number): Promise<TabGroup>;

    /**
     * Moves the group and all its tabs within its window, or to a new window.
     * @param groupId The ID of the group to move.
     * @param moveProperties Information on how to move the group.
     * @return The `move` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function move(groupId: number, moveProperties: MoveProperties): Promise<TabGroup>;

    /**
     * Moves the group and all its tabs within its window, or to a new window.
     * @param groupId The ID of the group to move.
     * @param moveProperties Information on how to move the group.
     * @param callback Optional.
     */
    export function move(groupId: number, moveProperties: MoveProperties, callback: (group: TabGroup) => void): void;

    /**
     * Gets all groups that have the specified properties, or all groups if no properties are specified.
     * @param queryInfo Object with search parameters.
     * @param callback Called with retrieved tab groups.
     */
    export function query(queryInfo: QueryInfo, callback: (result: TabGroup[]) => void): void;

    /**
     * Gets all groups that have the specified properties, or all groups if no properties are specified.
     * @param queryInfo Object with search parameters.
     * @return The `query` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function query(queryInfo: QueryInfo): Promise<TabGroup[]>;

    /**
     * Modifies the properties of a group. Properties that are not specified in updateProperties are not modified.
     * @param groupId The ID of the group to modify.
     * @param updateProperties Information on how to update the group.
     * @return The `update` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function update(groupId: number, updateProperties: UpdateProperties): Promise<TabGroup>;

    /**
     * Modifies the properties of a group. Properties that are not specified in updateProperties are not modified.
     * @param groupId The ID of the group to modify.
     * @param updateProperties Information on how to update the group.
     * @param callback Optional.
     */
    export function update(
        groupId: number,
        updateProperties: UpdateProperties,
        callback: (group: TabGroup) => void,
    ): void;

    export interface TabGroupCreatedEvent extends chrome.events.Event<(group: TabGroup) => void> {}
    export interface TabGroupMovedEvent extends chrome.events.Event<(group: TabGroup) => void> {}
    export interface TabGroupRemovedEvent extends chrome.events.Event<(group: TabGroup) => void> {}
    export interface TabGroupUpdated extends chrome.events.Event<(group: TabGroup) => void> {}

    /** Fired when a group is created. */
    export var onCreated: TabGroupCreatedEvent;
    /** Fired when a group is moved within a window. Move events are still fired for the individual tabs within the group, as well as for the group itself. This event is not fired when a group is moved between windows; instead, it will be removed from one window and created in another. */
    export var onMoved: TabGroupMovedEvent;
    /** Fired when a group is closed, either directly by the user or automatically because it contained zero. */
    export var onRemoved: TabGroupRemovedEvent;
    /** Fired when a group is updated. */
    export var onUpdated: TabGroupUpdated;
}

////////////////////
// Top Sites
////////////////////
/**
 * Use the chrome.topSites API to access the top sites that are displayed on the new tab page.
 * Permissions:  "topSites"
 * @since Chrome 19.
 */
declare namespace chrome.topSites {
    /** An object encapsulating a most visited URL, such as the URLs on the new tab page. */
    export interface MostVisitedURL {
        /** The most visited URL. */
        url: string;
        /** The title of the page */
        title: string;
    }

    /** Gets a list of top sites. */
    export function get(callback: (data: MostVisitedURL[]) => void): void;

    /**
     * Gets a list of top sites.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(): Promise<MostVisitedURL[]>;
}

////////////////////
// Text to Speech
////////////////////
/**
 * Use the chrome.tts API to play synthesized text-to-speech (TTS). See also the related ttsEngine API, which allows an extension to implement a speech engine.
 * Permissions:  "tts"
 * @since Chrome 14.
 */
declare namespace chrome.tts {
    /** An event from the TTS engine to communicate the status of an utterance. */
    export interface TtsEvent {
        /** Optional. The index of the current character in the utterance. */
        charIndex?: number | undefined;
        /** Optional. The error description, if the event type is 'error'. */
        errorMessage?: string | undefined;
        /**
         * The length of the next part of the utterance.
         * For example, in a word event, this is the length of the word which will be spoken next.
         * It will be set to -1 if not set by the speech engine.
         */
        length?: number | undefined;
        /**
         * The type can be 'start' as soon as speech has started, 'word' when a word boundary is reached, 'sentence' when a sentence boundary is reached, 'marker' when an SSML mark element is reached, 'end' when the end of the utterance is reached, 'interrupted' when the utterance is stopped or interrupted before reaching the end, 'cancelled' when it's removed from the queue before ever being synthesized, or 'error' when any other error occurs. When pausing speech, a 'pause' event is fired if a particular utterance is paused in the middle, and 'resume' if an utterance resumes speech. Note that pause and resume events may not fire if speech is paused in-between utterances.
         * One of: "start", "end", "word", "sentence", "marker", "interrupted", "cancelled", "error", "pause", or "resume"
         */
        type:
            | "start"
            | "end"
            | "word"
            | "sentence"
            | "marker"
            | "interrupted"
            | "cancelled"
            | "error"
            | "pause"
            | "resume";
    }

    /** A description of a voice available for speech synthesis. */
    export interface TtsVoice {
        /** Optional. The language that this voice supports, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'. */
        lang?: string | undefined;
        /**
         * Optional. This voice's gender.
         * One of: "male", or "female"
         * @deprecated since Chrome 70. Gender is deprecated and will be ignored.
         */
        gender?: string | undefined;
        /** Optional. The name of the voice. */
        voiceName?: string | undefined;
        /** Optional. The ID of the extension providing this voice. */
        extensionId?: string | undefined;
        /** Optional. All of the callback event types that this voice is capable of sending. */
        eventTypes?: string[] | undefined;
        /**
         * Optional. If true, the synthesis engine is a remote network resource. It may be higher latency and may incur bandwidth costs.
         * @since Chrome 33.
         */
        remote?: boolean | undefined;
    }

    export interface SpeakOptions {
        /** Optional. Speaking volume between 0 and 1 inclusive, with 0 being lowest and 1 being highest, with a default of 1.0. */
        volume?: number | undefined;
        /**
         * Optional.
         * If true, enqueues this utterance if TTS is already in progress. If false (the default), interrupts any current speech and flushes the speech queue before speaking this new utterance.
         */
        enqueue?: boolean | undefined;
        /**
         * Optional.
         * Speaking rate relative to the default rate for this voice. 1.0 is the default rate, normally around 180 to 220 words per minute. 2.0 is twice as fast, and 0.5 is half as fast. Values below 0.1 or above 10.0 are strictly disallowed, but many voices will constrain the minimum and maximum rates further—for example a particular voice may not actually speak faster than 3 times normal even if you specify a value larger than 3.0.
         */
        rate?: number | undefined;
        /**
         * Optional. This function is called with events that occur in the process of speaking the utterance.
         * @param event The update event from the text-to-speech engine indicating the status of this utterance.
         */
        onEvent?: ((event: TtsEvent) => void) | undefined;
        /**
         * Optional.
         * Speaking pitch between 0 and 2 inclusive, with 0 being lowest and 2 being highest. 1.0 corresponds to a voice's default pitch.
         */
        pitch?: number | undefined;
        /** Optional. The language to be used for synthesis, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'. */
        lang?: string | undefined;
        /** Optional. The name of the voice to use for synthesis. If empty, uses any available voice. */
        voiceName?: string | undefined;
        /** Optional. The extension ID of the speech engine to use, if known. */
        extensionId?: string | undefined;
        /**
         * Optional. Gender of voice for synthesized speech.
         * One of: "male", or "female"
         */
        gender?: string | undefined;
        /** Optional. The TTS event types the voice must support. */
        requiredEventTypes?: string[] | undefined;
        /** Optional. The TTS event types that you are interested in listening to. If missing, all event types may be sent. */
        desiredEventTypes?: string[] | undefined;
    }

    /** Checks whether the engine is currently speaking. On Mac OS X, the result is true whenever the system speech engine is speaking, even if the speech wasn't initiated by Chrome. */
    export function isSpeaking(callback?: (speaking: boolean) => void): void;
    /** Stops any current speech and flushes the queue of any pending utterances. In addition, if speech was paused, it will now be un-paused for the next call to speak. */
    export function stop(): void;
    /** Gets an array of all available voices. */
    export function getVoices(): Promise<TtsVoice[]>;
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
 * Use the chrome.ttsEngine API to implement a text-to-speech(TTS) engine using an extension. If your extension registers using this API, it will receive events containing an utterance to be spoken and other parameters when any extension or Chrome App uses the tts API to generate speech. Your extension can then use any available web technology to synthesize and output the speech, and send events back to the calling function to report the status.
 * Permissions:  "ttsEngine"
 * @since Chrome 14.
 */
declare namespace chrome.ttsEngine {
    export interface SpeakOptions {
        /** Optional. The language to be used for synthesis, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'. */
        lang?: string | undefined;
        /** Optional. The name of the voice to use for synthesis. */
        voiceName?: string | undefined;
        /**
         * Optional. Gender of voice for synthesized speech.
         * One of: "male", or "female"
         */
        gender?: string | undefined;
        /** Optional. Speaking volume between 0 and 1 inclusive, with 0 being lowest and 1 being highest, with a default of 1.0. */
        volume?: number | undefined;
        /**
         * Optional.
         * Speaking rate relative to the default rate for this voice. 1.0 is the default rate, normally around 180 to 220 words per minute. 2.0 is twice as fast, and 0.5 is half as fast. This value is guaranteed to be between 0.1 and 10.0, inclusive. When a voice does not support this full range of rates, don't return an error. Instead, clip the rate to the range the voice supports.
         */
        rate?: number | undefined;
        /** Optional. Speaking pitch between 0 and 2 inclusive, with 0 being lowest and 2 being highest. 1.0 corresponds to this voice's default pitch. */
        pitch?: number | undefined;
    }

    export interface TtsEngineSpeakEvent extends
        chrome.events.Event<
            (utterance: string, options: SpeakOptions, sendTtsEvent: (event: chrome.tts.TtsEvent) => void) => void
        >
    {}

    /** Called when the user makes a call to tts.speak() and one of the voices from this extension's manifest is the first to match the options object. */
    export var onSpeak: TtsEngineSpeakEvent;
    /** Fired when a call is made to tts.stop and this extension may be in the middle of speaking. If an extension receives a call to onStop and speech is already stopped, it should do nothing (not raise an error). If speech is in the paused state, this should cancel the paused state. */
    export var onStop: chrome.events.Event<() => void>;
    /**
     * Optional: if an engine supports the pause event, it should pause the current utterance being spoken, if any, until it receives a resume event or stop event. Note that a stop event should also clear the paused state.
     * @since Chrome 29.
     */
    export var onPause: chrome.events.Event<() => void>;
    /**
     * Optional: if an engine supports the pause event, it should also support the resume event, to continue speaking the current utterance, if any. Note that a stop event should also clear the paused state.
     * @since Chrome 29.
     */
    export var onResume: chrome.events.Event<() => void>;
}

////////////////////
// Types
////////////////////
/**
 * The chrome.types API contains type declarations for Chrome.
 * @since Chrome 13.
 */
declare namespace chrome.types {
    type settingsScope = "regular" | "regular_only" | "incognito_persistent" | "incognito_session_only" | undefined;

    export interface ChromeSettingClearDetails {
        /**
         * Optional.
         * The scope of the ChromeSetting. One of
         * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
         * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
         * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
         * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
         */
        scope?: settingsScope;
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
        scope?: settingsScope;
    }

    export interface ChromeSettingGetDetails {
        /** Optional. Whether to return the value that applies to the incognito session (default false). */
        incognito?: boolean | undefined;
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
        levelOfControl:
            | "not_controllable"
            | "controlled_by_other_extensions"
            | "controllable_by_this_extension"
            | "controlled_by_this_extension";
        /** The value of the setting. */
        value: any;
        /**
         * Optional.
         * Whether the effective value is specific to the incognito session.
         * This property will only be present if the incognito property in the details parameter of get() was true.
         */
        incognitoSpecific?: boolean | undefined;
    }

    export interface ChromeSettingChangedEvent extends chrome.events.Event<DetailsCallback> {}

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
// VPN Provider
////////////////////
/**
 * Use the chrome.vpnProvider API to implement a VPN client.
 * Permissions:  "vpnProvider"
 * Important: This API works only on Chrome OS.
 * @since Chrome 43.
 */
declare namespace chrome.vpnProvider {
    export interface VpnSessionParameters {
        /** IP address for the VPN interface in CIDR notation. IPv4 is currently the only supported mode. */
        address: string;
        /** Optional. Broadcast address for the VPN interface. (default: deduced from IP address and mask) */
        broadcastAddress?: string | undefined;
        /** Optional. MTU setting for the VPN interface. (default: 1500 bytes) */
        mtu?: string | undefined;
        /**
         * Exclude network traffic to the list of IP blocks in CIDR notation from the tunnel. This can be used to bypass traffic to and from the VPN server. When many rules match a destination, the rule with the longest matching prefix wins. Entries that correspond to the same CIDR block are treated as duplicates. Such duplicates in the collated (exclusionList + inclusionList) list are eliminated and the exact duplicate entry that will be eliminated is undefined.
         */
        exclusionList: string[];
        /**
         * Include network traffic to the list of IP blocks in CIDR notation to the tunnel. This parameter can be used to set up a split tunnel. By default no traffic is directed to the tunnel. Adding the entry "0.0.0.0/0" to this list gets all the user traffic redirected to the tunnel. When many rules match a destination, the rule with the longest matching prefix wins. Entries that correspond to the same CIDR block are treated as duplicates. Such duplicates in the collated (exclusionList + inclusionList) list are eliminated and the exact duplicate entry that will be eliminated is undefined.
         */
        inclusionList: string[];
        /** Optional. A list of search domains. (default: no search domain) */
        domainSearch?: string[] | undefined;
        /** A list of IPs for the DNS servers. */
        dnsServer: string[];
    }

    export interface VpnPlatformMessageEvent
        extends chrome.events.Event<(id: string, message: string, error: string) => void>
    {}

    export interface VpnPacketReceptionEvent extends chrome.events.Event<(data: ArrayBuffer) => void> {}

    export interface VpnConfigRemovalEvent extends chrome.events.Event<(id: string) => void> {}

    export interface VpnConfigCreationEvent
        extends chrome.events.Event<(id: string, name: string, data: Object) => void>
    {}

    export interface VpnUiEvent extends chrome.events.Event<(event: string, id?: string) => void> {}

    /**
     * Creates a new VPN configuration that persists across multiple login sessions of the user.
     * @param name The name of the VPN configuration.
     * @param callback Called when the configuration is created or if there is an error.
     * Parameter id: A unique ID for the created configuration, empty string on failure.
     */
    export function createConfig(name: string, callback: (id: string) => void): void;
    /**
     * Destroys a VPN configuration created by the extension.
     * @param id ID of the VPN configuration to destroy.
     * @param callback Optional. Called when the configuration is destroyed or if there is an error.
     */
    export function destroyConfig(id: string, callback?: Function): void;
    /**
     * Sets the parameters for the VPN session. This should be called immediately after "connected" is received from the platform. This will succeed only when the VPN session is owned by the extension.
     * @param parameters The parameters for the VPN session.
     * @param callback Called when the parameters are set or if there is an error.
     */
    export function setParameters(parameters: VpnSessionParameters, callback: Function): void;
    /**
     * Sends an IP packet through the tunnel created for the VPN session. This will succeed only when the VPN session is owned by the extension.
     * @param data The IP packet to be sent to the platform.
     * @param callback Optional. Called when the packet is sent or if there is an error.
     */
    export function sendPacket(data: ArrayBuffer, callback?: Function): void;
    /**
     * Notifies the VPN session state to the platform. This will succeed only when the VPN session is owned by the extension.
     * @param state The VPN session state of the VPN client.
     * connected: VPN connection was successful.
     * failure: VPN connection failed.
     * @param callback Optional. Called when the notification is complete or if there is an error.
     */
    export function notifyConnectionStateChanged(state: string, callback?: Function): void;

    /** Triggered when a message is received from the platform for a VPN configuration owned by the extension. */
    export var onPlatformMessage: VpnPlatformMessageEvent;
    /** Triggered when an IP packet is received via the tunnel for the VPN session owned by the extension. */
    export var onPacketReceived: VpnPacketReceptionEvent;
    /** Triggered when a configuration created by the extension is removed by the platform. */
    export var onConfigRemoved: VpnConfigRemovalEvent;
    /** Triggered when a configuration is created by the platform for the extension. */
    export var onConfigCreated: VpnConfigCreationEvent;
    /** Triggered when there is a UI event for the extension. UI events are signals from the platform that indicate to the app that a UI dialog needs to be shown to the user. */
    export var onUIEvent: VpnUiEvent;
}

////////////////////
// Wallpaper
////////////////////
/**
 * Use the chrome.wallpaper API to change the ChromeOS wallpaper.
 * Permissions:  "wallpaper"
 * Important: This API works only on Chrome OS.
 * @since Chrome 43.
 */
declare namespace chrome.wallpaper {
    export interface WallpaperDetails {
        /** Optional. The jpeg or png encoded wallpaper image. */
        data?: ArrayBuffer | undefined;
        /** Optional. The URL of the wallpaper to be set. */
        url?: string | undefined;
        /**
         * The supported wallpaper layouts.
         * One of: "STRETCH", "CENTER", or "CENTER_CROPPED"
         */
        layout: "STRETCH" | "CENTER" | "CENTER_CROPPED";
        /** The file name of the saved wallpaper. */
        filename: string;
        /** Optional. True if a 128x60 thumbnail should be generated. */
        thumbnail?: boolean | undefined;
    }

    /**
     * Sets wallpaper to the image at url or wallpaperData with the specified layout
     * @param callback
     * Optional parameter thumbnail: The jpeg encoded wallpaper thumbnail. It is generated by resizing the wallpaper to 128x60.
     */
    export function setWallpaper(details: WallpaperDetails, callback: (thumbnail?: ArrayBuffer) => void): void;
}

////////////////////
// Web Navigation
////////////////////
/**
 * Use the chrome.webNavigation API to receive notifications about the status of navigation requests in-flight.
 * Permissions:  "webNavigation"
 * @since Chrome 16.
 */
declare namespace chrome.webNavigation {
    export interface GetFrameDetails {
        /**
         * The ID of the process runs the renderer for this tab.
         * @since Chrome 22.
         * @deprecated since Chrome 49. Frames are now uniquely identified by their tab ID and frame ID; the process ID is no longer needed and therefore ignored.
         */
        processId?: number | undefined;
        /** The ID of the tab in which the frame is. */
        tabId: number;
        /** The ID of the frame in the given tab. */
        frameId: number;
    }

    export interface GetFrameResultDetails {
        /** The URL currently associated with this frame, if the frame identified by the frameId existed at one point in the given tab. The fact that an URL is associated with a given frameId does not imply that the corresponding frame still exists. */
        url: string;
        /** A UUID of the document loaded. */
        documentId: string;
        /** The lifecycle the document is in. */
        documentLifecycle: DocumentLifecycle;
        /** True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired. */
        errorOccurred: boolean;
        /** The type of frame the navigation occurred in. */
        frameType: FrameType;
        /** A UUID of the parent document owning this frame. This is not set if there is no parent. */
        parentDocumentId?: string | undefined;
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
        /** The type of frame the navigation occurred in. */
        frameType: FrameType;
        /** A UUID of the document loaded. (This is not set for onBeforeNavigate callbacks.) */
        documentId?: string | undefined;
        /** The lifecycle the document is in. */
        documentLifecycle: DocumentLifecycle;
        /** A UUID of the parent document owning this frame. This is not set if there is no parent. */
        parentDocumentId?: string | undefined;
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
        url: chrome.events.UrlFilter[];
    }

    export interface WebNavigationEvent<T extends WebNavigationCallbackDetails>
        extends chrome.events.Event<(details: T) => void>
    {
        addListener(callback: (details: T) => void, filters?: WebNavigationEventFilter): void;
    }

    export interface WebNavigationFramedEvent extends WebNavigationEvent<WebNavigationFramedCallbackDetails> {}

    export interface WebNavigationFramedErrorEvent
        extends WebNavigationEvent<WebNavigationFramedErrorCallbackDetails>
    {}

    export interface WebNavigationSourceEvent extends WebNavigationEvent<WebNavigationSourceCallbackDetails> {}

    export interface WebNavigationParentedEvent extends WebNavigationEvent<WebNavigationParentedCallbackDetails> {}

    export interface WebNavigationTransitionalEvent
        extends WebNavigationEvent<WebNavigationTransitionCallbackDetails>
    {}

    export interface WebNavigationReplacementEvent
        extends WebNavigationEvent<WebNavigationReplacementCallbackDetails>
    {}

    /**
     * Retrieves information about the given frame. A frame refers to an <iframe> or a <frame> of a web page and is identified by a tab ID and a frame ID.
     * @param details Information about the frame to retrieve information about.
     * @param callback
     * Optional parameter details: Information about the requested frame, null if the specified frame ID and/or tab ID are invalid.
     */
    export function getFrame(details: GetFrameDetails, callback: (details: GetFrameResultDetails | null) => void): void;
    /**
     * Retrieves information about the given frame. A frame refers to an <iframe> or a <frame> of a web page and is identified by a tab ID and a frame ID.
     * @param details Information about the frame to retrieve information about.
     * @return The getFrame method provides its result via callback or returned as a Promise (MV3 only).
     */
    export function getFrame(details: GetFrameDetails): Promise<GetFrameResultDetails | null>;

    /**
     * Retrieves information about all frames of a given tab.
     * @param details Information about the tab to retrieve all frames from.
     * @param callback
     * Optional parameter details: A list of frames in the given tab, null if the specified tab ID is invalid.
     */
    export function getAllFrames(
        details: GetAllFrameDetails,
        callback: (details: GetAllFrameResultDetails[] | null) => void,
    ): void;
    /**
     * Retrieves information about all frames of a given tab.
     * @param details Information about the tab to retrieve all frames from.
     * @return The getAllFrames method provides its result via callback or returned as a Promise (MV3 only).
     */
    export function getAllFrames(
        details: GetAllFrameDetails,
    ): Promise<GetAllFrameResultDetails[] | null>;
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
 * Use the chrome.webRequest API to observe and analyze traffic and to intercept, block, or modify requests in-flight.
 * Permissions:  "webRequest", host permissions
 * @since Chrome 17.
 */
declare namespace chrome.webRequest {
    /** How the requested resource will be used. */
    export type ResourceType =
        | "main_frame"
        | "sub_frame"
        | "stylesheet"
        | "script"
        | "image"
        | "font"
        | "object"
        | "xmlhttprequest"
        | "ping"
        | "csp_report"
        | "media"
        | "websocket"
        | "other";

    export interface AuthCredentials {
        username: string;
        password: string;
    }

    /** An HTTP Header, represented as an object containing a key and either a value or a binaryValue. */
    export interface HttpHeader {
        name: string;
        value?: string | undefined;
        binaryValue?: ArrayBuffer | undefined;
    }

    /** Returns value for event handlers that have the 'blocking' extraInfoSpec applied. Allows the event handler to modify network requests. */
    export interface BlockingResponse {
        /** Optional. If true, the request is cancelled. Used in onBeforeRequest, this prevents the request from being sent. */
        cancel?: boolean | undefined;
        /**
         * Optional.
         * Only used as a response to the onBeforeRequest and onHeadersReceived events. If set, the original request is prevented from being sent/completed and is instead redirected to the given URL. Redirections to non-HTTP schemes such as data: are allowed. Redirects initiated by a redirect action use the original request method for the redirect, with one exception: If the redirect is initiated at the onHeadersReceived stage, then the redirect will be issued using the GET method.
         */
        redirectUrl?: string | undefined;
        /**
         * Optional.
         * Only used as a response to the onHeadersReceived event. If set, the server is assumed to have responded with these response headers instead. Only return responseHeaders if you really want to modify the headers in order to limit the number of conflicts (only one extension may modify responseHeaders for each request).
         */
        responseHeaders?: HttpHeader[] | undefined;
        /** Optional. Only used as a response to the onAuthRequired event. If set, the request is made using the supplied credentials. */
        authCredentials?: AuthCredentials | undefined;
        /**
         * Optional.
         * Only used as a response to the onBeforeSendHeaders event. If set, the request is made with these request headers instead.
         */
        requestHeaders?: HttpHeader[] | undefined;
    }

    /** An object describing filters to apply to webRequest events. */
    export interface RequestFilter {
        /** Optional. */
        tabId?: number | undefined;
        /**
         * A list of request types. Requests that cannot match any of the types will be filtered out.
         */
        types?: ResourceType[] | undefined;
        /** A list of URLs or URL patterns. Requests that cannot match any of the URLs will be filtered out. */
        urls: string[];

        /** Optional. */
        windowId?: number | undefined;
    }

    /**
     * Contains data uploaded in a URL request.
     * @since Chrome 23.
     */
    export interface UploadData {
        /** Optional. An ArrayBuffer with a copy of the data. */
        bytes?: ArrayBuffer | undefined;
        /** Optional. A string with the file's path and name. */
        file?: string | undefined;
    }

    export interface WebRequestBody {
        /** Optional. Errors when obtaining request body data. */
        error?: string | undefined;
        /**
         * Optional.
         * If the request method is POST and the body is a sequence of key-value pairs encoded in UTF8, encoded as either multipart/form-data, or application/x-www-form-urlencoded, this dictionary is present and for each key contains the list of all values for that key. If the data is of another media type, or if it is malformed, the dictionary is not present. An example value of this dictionary is {'key': ['value1', 'value2']}.
         */
        formData?: { [key: string]: string[] } | undefined;
        /**
         * Optional.
         * If the request method is PUT or POST, and the body is not already parsed in formData, then the unparsed request body elements are contained in this array.
         */
        raw?: UploadData[] | undefined;
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
        initiator?: string | undefined;
    }

    export interface WebRequestDetails extends ResourceRequest {
        /** Standard HTTP method. */
        method: string;
    }

    export interface WebRequestHeadersDetails extends WebRequestDetails {
        /** Optional. The HTTP request headers that are going to be sent out with this request. */
        requestHeaders?: HttpHeader[] | undefined;
        documentId: string;
        documentLifecycle: DocumentLifecycle;
        frameType: FrameType;
        frameId: number;
        initiator?: string | undefined;
        parentDocumentId?: string | undefined;
        parentFrameId: number;
        requestId: string;
        tabId: number;
        timeStamp: number;
        type: ResourceType;
        url: string;
    }

    export interface WebRequestBodyDetails extends WebRequestDetails {
        /**
         * Contains the HTTP request body data. Only provided if extraInfoSpec contains 'requestBody'.
         * @since Chrome 23.
         */
        requestBody: WebRequestBody | null;
    }

    export interface WebRequestFullDetails extends WebRequestHeadersDetails, WebRequestBodyDetails {}

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
        responseHeaders?: HttpHeader[] | undefined;
        method: string /** standard HTTP method i.e. GET, POST, PUT, etc. */;
    }

    export interface WebResponseCacheDetails extends WebResponseHeadersDetails {
        /**
         * Optional.
         * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
         */
        ip?: string | undefined;
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
        realm?: string | undefined;
        /** The server requesting authentication. */
        challenger: WebAuthChallenger;
        /** True for Proxy-Authenticate, false for WWW-Authenticate. */
        isProxy: boolean;
    }

    export interface WebResponseErrorDetails extends WebResponseCacheDetails {
        /** The error description. This string is not guaranteed to remain backwards compatible between releases. You must not parse and act based upon its content. */
        error: string;
    }

    export interface WebRequestBodyEvent extends
        chrome.events.EventWithRequiredFilterInAddListener<
            (details: WebRequestBodyDetails) => BlockingResponse | void
        >
    {
        addListener(
            callback: (details: WebRequestBodyDetails) => BlockingResponse | void,
            filter: RequestFilter,
            opt_extraInfoSpec?: string[],
        ): void;
    }

    export interface WebRequestHeadersSynchronousEvent extends
        chrome.events.EventWithRequiredFilterInAddListener<
            (details: WebRequestHeadersDetails) => BlockingResponse | void
        >
    {
        addListener(
            callback: (details: WebRequestHeadersDetails) => BlockingResponse | void,
            filter: RequestFilter,
            opt_extraInfoSpec?: string[],
        ): void;
    }

    export interface WebRequestHeadersEvent
        extends chrome.events.EventWithRequiredFilterInAddListener<(details: WebRequestHeadersDetails) => void>
    {
        addListener(
            callback: (details: WebRequestHeadersDetails) => void,
            filter: RequestFilter,
            opt_extraInfoSpec?: string[],
        ): void;
    }

    export interface _WebResponseHeadersEvent<T extends WebResponseHeadersDetails>
        extends chrome.events.EventWithRequiredFilterInAddListener<(details: T) => void>
    {
        addListener(callback: (details: T) => void, filter: RequestFilter, opt_extraInfoSpec?: string[]): void;
    }

    export interface WebResponseHeadersEvent extends
        chrome.events.EventWithRequiredFilterInAddListener<
            (details: WebResponseHeadersDetails) => BlockingResponse | void
        >
    {
        addListener(
            callback: (details: WebResponseHeadersDetails) => BlockingResponse | void,
            filter: RequestFilter,
            opt_extraInfoSpec?: string[],
        ): void;
    }

    export interface WebResponseCacheEvent extends _WebResponseHeadersEvent<WebResponseCacheDetails> {}

    export interface WebRedirectionResponseEvent extends _WebResponseHeadersEvent<WebRedirectionResponseDetails> {}

    export interface WebAuthenticationChallengeEvent extends
        chrome.events.EventWithRequiredFilterInAddListener<
            (details: WebAuthenticationChallengeDetails, callback?: (response: BlockingResponse) => void) => void
        >
    {
        addListener(
            callback: (
                details: WebAuthenticationChallengeDetails,
                callback?: (response: BlockingResponse) => void,
            ) => void,
            filter: RequestFilter,
            opt_extraInfoSpec?: string[],
        ): void;
    }

    export interface WebResponseErrorEvent extends _WebResponseHeadersEvent<WebResponseErrorDetails> {}

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
    export var onBeforeSendHeaders: WebRequestHeadersSynchronousEvent;
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
// Web Store
////////////////////
/**
 * Use the chrome.webstore API to initiate app and extension installations "inline" from your site.
 * @since Chrome 15.
 */
declare namespace chrome.webstore {
    /**
     * @param url Optional. If you have more than one <link> tag on your page with the chrome-webstore-item relation, you can choose which item you'd like to install by passing in its URL here. If it is omitted, then the first (or only) link will be used. An exception will be thrown if the passed in URL does not exist on the page.
     * @param successCallback Optional. This function is invoked when inline installation successfully completes (after the dialog is shown and the user agrees to add the item to Chrome). You may wish to use this to hide the user interface element that prompted the user to install the app or extension.
     * @param failureCallback Optional. This function is invoked when inline installation does not successfully complete. Possible reasons for this include the user canceling the dialog, the linked item not being found in the store, or the install being initiated from a non-verified site.
     * Parameter error: The failure detail. You may wish to inspect or log this for debugging purposes, but you should not rely on specific strings being passed back.
     * Optional parameter errorCode: The error code from the stable set of possible errors.
     * * Enum of the possible install results, including error codes sent back in the event that an inline installation has failed.
     * * * "otherError": An uncommon, unrecognized, or unexpected error. In some cases, the readable error string can provide more information.
     * * * "aborted": The operation was aborted as the requestor is no longer alive.
     * * * "installInProgress": An installation of the same extension is in progress.
     * * * "notPermitted": The installation is not permitted.
     * * * "invalidId": Invalid Chrome Web Store item ID.
     * * * "webstoreRequestError": Failed to retrieve extension metadata from the Web Store.
     * * * "invalidWebstoreResponse": The extension metadata retrieved from the Web Store was invalid.
     * * * "invalidManifest": An error occurred while parsing the extension manifest retrieved from the Web Store.
     * * * "iconError": Failed to retrieve the extension's icon from the Web Store, or the icon was invalid.
     * * * "userCanceled": The user canceled the operation.
     * * * "blacklisted": The extension is blacklisted.
     * * * "missingDependencies": Unsatisfied dependencies, such as shared modules.
     * * * "requirementViolations": Unsatisfied requirements, such as webgl.
     * * * "blockedByPolicy": The extension is blocked by management policies.
     * * * "launchFeatureDisabled": The launch feature is not available.
     * * * "launchUnsupportedExtensionType": The launch feature is not supported for the extension type.
     * * * "launchInProgress": A launch of the same extension is in progress.
     */
    export function install(
        url: string,
        successCallback?: Function,
        failureCallback?: (error: string, errorCode?: string) => void,
    ): void;
    /**
     * @param successCallback Optional. This function is invoked when inline installation successfully completes (after the dialog is shown and the user agrees to add the item to Chrome). You may wish to use this to hide the user interface element that prompted the user to install the app or extension.
     * @param failureCallback Optional. This function is invoked when inline installation does not successfully complete. Possible reasons for this include the user canceling the dialog, the linked item not being found in the store, or the install being initiated from a non-verified site.
     * Parameter error: The failure detail. You may wish to inspect or log this for debugging purposes, but you should not rely on specific strings being passed back.
     * Optional parameter errorCode: The error code from the stable set of possible errors.
     * * Enum of the possible install results, including error codes sent back in the event that an inline installation has failed.
     * * * "otherError": An uncommon, unrecognized, or unexpected error. In some cases, the readable error string can provide more information.
     * * * "aborted": The operation was aborted as the requestor is no longer alive.
     * * * "installInProgress": An installation of the same extension is in progress.
     * * * "notPermitted": The installation is not permitted.
     * * * "invalidId": Invalid Chrome Web Store item ID.
     * * * "webstoreRequestError": Failed to retrieve extension metadata from the Web Store.
     * * * "invalidWebstoreResponse": The extension metadata retrieved from the Web Store was invalid.
     * * * "invalidManifest": An error occurred while parsing the extension manifest retrieved from the Web Store.
     * * * "iconError": Failed to retrieve the extension's icon from the Web Store, or the icon was invalid.
     * * * "userCanceled": The user canceled the operation.
     * * * "blacklisted": The extension is blacklisted.
     * * * "missingDependencies": Unsatisfied dependencies, such as shared modules.
     * * * "requirementViolations": Unsatisfied requirements, such as webgl.
     * * * "blockedByPolicy": The extension is blocked by management policies.
     * * * "launchFeatureDisabled": The launch feature is not available.
     * * * "launchUnsupportedExtensionType": The launch feature is not supported for the extension type.
     * * * "launchInProgress": A launch of the same extension is in progress.
     */
    export function install(
        successCallback: Function,
        failureCallback?: (error: string, errorCode?: string) => void,
    ): void;
    /**
     * @param failureCallback Optional. This function is invoked when inline installation does not successfully complete. Possible reasons for this include the user canceling the dialog, the linked item not being found in the store, or the install being initiated from a non-verified site.
     * Parameter error: The failure detail. You may wish to inspect or log this for debugging purposes, but you should not rely on specific strings being passed back.
     * Optional parameter errorCode: The error code from the stable set of possible errors.
     * * Enum of the possible install results, including error codes sent back in the event that an inline installation has failed.
     * * * "otherError": An uncommon, unrecognized, or unexpected error. In some cases, the readable error string can provide more information.
     * * * "aborted": The operation was aborted as the requestor is no longer alive.
     * * * "installInProgress": An installation of the same extension is in progress.
     * * * "notPermitted": The installation is not permitted.
     * * * "invalidId": Invalid Chrome Web Store item ID.
     * * * "webstoreRequestError": Failed to retrieve extension metadata from the Web Store.
     * * * "invalidWebstoreResponse": The extension metadata retrieved from the Web Store was invalid.
     * * * "invalidManifest": An error occurred while parsing the extension manifest retrieved from the Web Store.
     * * * "iconError": Failed to retrieve the extension's icon from the Web Store, or the icon was invalid.
     * * * "userCanceled": The user canceled the operation.
     * * * "blacklisted": The extension is blacklisted.
     * * * "missingDependencies": Unsatisfied dependencies, such as shared modules.
     * * * "requirementViolations": Unsatisfied requirements, such as webgl.
     * * * "blockedByPolicy": The extension is blocked by management policies.
     * * * "launchFeatureDisabled": The launch feature is not available.
     * * * "launchUnsupportedExtensionType": The launch feature is not supported for the extension type.
     * * * "launchInProgress": A launch of the same extension is in progress.
     */
    export function install(failureCallback?: (error: string, errorCode?: string) => void): void;

    export interface InstallationStageEvent extends chrome.events.Event<(stage: string) => void> {}

    export interface DownloadProgressEvent extends chrome.events.Event<(percentDownloaded: number) => void> {}

    /**
     * Fired when an inline installation enters a new InstallStage. In order to receive notifications about this event, listeners must be registered before the inline installation begins.
     * @since Chrome 35.
     */
    export var onInstallStageChanged: InstallationStageEvent;
    /**
     * Fired periodically with the download progress of an inline install. In order to receive notifications about this event, listeners must be registered before the inline installation begins.
     * @since Chrome 35.
     */
    export var onDownloadProgress: DownloadProgressEvent;
}

////////////////////
// Windows
////////////////////
/**
 * Use the chrome.windows API to interact with browser windows. You can use this API to create, modify, and rearrange windows in the browser.
 * Permissions: The chrome.windows API can be used without declaring any permission. However, the "tabs" permission is required in order to populate the url, title, and favIconUrl properties of Tab objects.
 * @since Chrome 5.
 */
declare namespace chrome.windows {
    export interface Window {
        /** Optional. Array of tabs.Tab objects representing the current tabs in the window. */
        tabs?: chrome.tabs.Tab[] | undefined;
        /** Optional. The offset of the window from the top edge of the screen in pixels. Under some circumstances a Window may not be assigned top property, for example when querying closed windows from the sessions API. */
        top?: number | undefined;
        /** Optional. The height of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned height property, for example when querying closed windows from the sessions API. */
        height?: number | undefined;
        /** Optional. The width of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned width property, for example when querying closed windows from the sessions API. */
        width?: number | undefined;
        /**
         * The state of this browser window.
         * @since Chrome 17.
         */
        state?: windowStateEnum | undefined;
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
         */
        type?: windowTypeEnum | undefined;
        /** Optional. The ID of the window. Window IDs are unique within a browser session. Under some circumstances a Window may not be assigned an ID, for example when querying windows using the sessions API, in which case a session ID may be present. */
        id?: number | undefined;
        /** Optional. The offset of the window from the left edge of the screen in pixels. Under some circumstances a Window may not be assigned left property, for example when querying closed windows from the sessions API. */
        left?: number | undefined;
        /**
         * Optional. The session ID used to uniquely identify a Window obtained from the sessions API.
         * @since Chrome 31.
         */
        sessionId?: string | undefined;
    }

    export interface QueryOptions {
        /**
         * Optional.
         * If true, the windows.Window object will have a tabs property that contains a list of the tabs.Tab objects.
         * The Tab objects only contain the url, pendingUrl, title and favIconUrl properties if the extension's manifest file includes the "tabs" permission.
         */
        populate?: boolean | undefined;
        /**
         * If set, the Window returned is filtered based on its type. If unset, the default filter is set to ['normal', 'popup'].
         */
        windowTypes?: windowTypeEnum[] | undefined;
    }

    export interface CreateData {
        /**
         * Optional. The id of the tab for which you want to adopt to the new window.
         * @since Chrome 10.
         */
        tabId?: number | undefined;
        /**
         * Optional.
         * A URL or array of URLs to open as tabs in the window. Fully-qualified URLs must include a scheme (i.e. 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within the extension. Defaults to the New Tab Page.
         */
        url?: string | string[] | undefined;
        /**
         * Optional.
         * The number of pixels to position the new window from the top edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels.
         */
        top?: number | undefined;
        /**
         * Optional.
         * The height in pixels of the new window, including the frame. If not specified defaults to a natural height.
         */
        height?: number | undefined;
        /**
         * Optional.
         * The width in pixels of the new window, including the frame. If not specified defaults to a natural width.
         */
        width?: number | undefined;
        /**
         * Optional. If true, opens an active window. If false, opens an inactive window.
         * @since Chrome 12.
         */
        focused?: boolean | undefined;
        /** Optional. Whether the new window should be an incognito window. */
        incognito?: boolean | undefined;
        /** Optional. Specifies what type of browser window to create. */
        type?: createTypeEnum | undefined;
        /**
         * Optional.
         * The number of pixels to position the new window from the left edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels.
         */
        left?: number | undefined;
        /**
         * Optional. The initial state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with 'left', 'top', 'width' or 'height'.
         * @since Chrome 44.
         */
        state?: windowStateEnum | undefined;
        /**
         * If true, the newly-created window's 'window.opener' is set to the caller and is in the same [unit of related browsing contexts](https://www.w3.org/TR/html51/browsers.html#unit-of-related-browsing-contexts) as the caller.
         * @since Chrome 64.
         */
        setSelfAsOpener?: boolean | undefined;
    }

    export interface UpdateInfo {
        /** Optional. The offset from the top edge of the screen to move the window to in pixels. This value is ignored for panels. */
        top?: number | undefined;
        /**
         * Optional. If true, causes the window to be displayed in a manner that draws the user's attention to the window, without changing the focused window. The effect lasts until the user changes focus to the window. This option has no effect if the window already has focus. Set to false to cancel a previous draw attention request.
         * @since Chrome 14.
         */
        drawAttention?: boolean | undefined;
        /** Optional. The height to resize the window to in pixels. This value is ignored for panels. */
        height?: number | undefined;
        /** Optional. The width to resize the window to in pixels. This value is ignored for panels. */
        width?: number | undefined;
        /**
         * Optional. The new state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with 'left', 'top', 'width' or 'height'.
         * @since Chrome 17.
         */
        state?: windowStateEnum | undefined;
        /**
         * Optional. If true, brings the window to the front. If false, brings the next window in the z-order to the front.
         * @since Chrome 8.
         */
        focused?: boolean | undefined;
        /** Optional. The offset from the left edge of the screen to move the window to in pixels. This value is ignored for panels. */
        left?: number | undefined;
    }

    export interface WindowEventFilter {
        /**
         * Conditions that the window's type being created must satisfy. By default it will satisfy ['app', 'normal', 'panel', 'popup'], with 'app' and 'panel' window types limited to the extension's own windows.
         */
        windowTypes: windowTypeEnum[];
    }

    export interface WindowIdEvent extends chrome.events.Event<(windowId: number) => void> {
        addListener(
            callback: (windowId: number) => void,
            filters?: WindowEventFilter,
        ): void;
    }

    export interface WindowReferenceEvent extends chrome.events.Event<(window: Window) => void> {
        addListener(
            callback: (window: Window) => void,
            filters?: WindowEventFilter,
        ): void;
    }

    /**
     * Specifies what type of browser window to create.
     * 'panel' is deprecated and is available only to existing whitelisted extensions on Chrome OS.
     * @since Chrome 44.
     */
    export type createTypeEnum = "normal" | "popup" | "panel";

    /**
     * The state of this browser window.
     * In some circumstances a window may not be assigned a state property; for example, when querying closed windows from the sessions API.
     * @since Chrome 44.
     */
    export type windowStateEnum = "normal" | "minimized" | "maximized" | "fullscreen" | "locked-fullscreen";

    /**
     * The type of browser window this is.
     * In some circumstances a window may not be assigned a type property; for example, when querying closed windows from the sessions API.
     * @since Chrome 44.
     */
    export type windowTypeEnum = "normal" | "popup" | "panel" | "app" | "devtools";

    /**
     * The windowId value that represents the current window.
     * @since Chrome 18.
     */
    export var WINDOW_ID_CURRENT: -2;
    /**
     * The windowId value that represents the absence of a chrome browser window.
     * @since Chrome 6.
     */
    export var WINDOW_ID_NONE: -1;

    /** Gets details about a window. */
    export function get(windowId: number, callback: (window: chrome.windows.Window) => void): void;
    /**
     * Gets details about a window.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(windowId: number): Promise<chrome.windows.Window>;
    /**
     * Gets details about a window.
     * @since Chrome 18.
     */
    export function get(
        windowId: number,
        queryOptions: QueryOptions,
        callback: (window: chrome.windows.Window) => void,
    ): void;
    /**
     * Gets details about a window.
     * @since Chrome 18.
     * @return The `get` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function get(windowId: number, queryOptions: QueryOptions): Promise<chrome.windows.Window>;
    /** Gets the current window. */
    export function getCurrent(callback: (window: chrome.windows.Window) => void): void;
    /**
     * Gets the current window.
     * @return The `getCurrent` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getCurrent(): Promise<chrome.windows.Window>;
    /**
     * Gets the current window.
     * @param QueryOptions
     * @since Chrome 18.
     */
    export function getCurrent(queryOptions: QueryOptions, callback: (window: chrome.windows.Window) => void): void;
    /**
     * Gets the current window.
     * @param QueryOptions
     * @since Chrome 18.
     * @return The `getCurrent` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getCurrent(queryOptions: QueryOptions): Promise<chrome.windows.Window>;
    /**
     * Creates (opens) a new browser with any optional sizing, position or default URL provided.
     * @return The `create` method provides its result via callback or returned as a `Promise` (MV3 only). Contains details about the created window.
     */
    export function create(): Promise<chrome.windows.Window>;
    /**
     * Creates (opens) a new browser with any optional sizing, position or default URL provided.
     * @param callback
     * Optional parameter window: Contains details about the created window.
     */
    export function create(callback: (window?: chrome.windows.Window) => void): void;
    /**
     * Creates (opens) a new browser with any optional sizing, position or default URL provided.
     * @param CreateData
     * @return The `create` method provides its result via callback or returned as a `Promise` (MV3 only). Contains details about the created window.
     */
    export function create(createData: CreateData): Promise<chrome.windows.Window>;
    /**
     * Creates (opens) a new browser with any optional sizing, position or default URL provided.
     * @param CreateData
     * @param callback
     * Optional parameter window: Contains details about the created window.
     */
    export function create(createData: CreateData, callback: (window?: chrome.windows.Window) => void): void;
    /**
     * Gets all windows.
     */
    export function getAll(callback: (windows: chrome.windows.Window[]) => void): void;
    /**
     * Gets all windows.
     * @return The `getAll` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAll(): Promise<chrome.windows.Window[]>;
    /**
     * Gets all windows.
     * @since Chrome 18.
     */
    export function getAll(queryOptions: QueryOptions, callback: (windows: chrome.windows.Window[]) => void): void;
    /**
     * Gets all windows.
     * @since Chrome 18.
     * @return The `getAll` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAll(queryOptions: QueryOptions): Promise<chrome.windows.Window[]>;
    /**
     * Updates the properties of a window. Specify only the properties that you want to change; unspecified properties will be left unchanged.
     * @return The `update` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function update(
        windowId: number,
        updateInfo: UpdateInfo,
    ): Promise<chrome.windows.Window>;
    /** Updates the properties of a window. Specify only the properties that you want to change; unspecified properties will be left unchanged. */
    export function update(
        windowId: number,
        updateInfo: UpdateInfo,
        callback: (window: chrome.windows.Window) => void,
    ): void;
    /**
     * Removes (closes) a window, and all the tabs inside it
     * @return The `remove` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function remove(windowId: number): Promise<void>;
    /** Removes (closes) a window, and all the tabs inside it. */
    export function remove(windowId: number, callback: Function): void;
    /**
     * Gets the window that was most recently focused — typically the window 'on top'.
     */
    export function getLastFocused(callback: (window: chrome.windows.Window) => void): void;
    /**
     * Gets the window that was most recently focused — typically the window 'on top'.
     * @return The `getLastFocused` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getLastFocused(): Promise<chrome.windows.Window>;
    /**
     * Gets the window that was most recently focused — typically the window 'on top'.
     * @since Chrome 18.
     */
    export function getLastFocused(queryOptions: QueryOptions, callback: (window: chrome.windows.Window) => void): void;
    /**
     * Gets the window that was most recently focused — typically the window 'on top'.
     * @since Chrome 18.
     * @return The `getLastFocused` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getLastFocused(queryOptions: QueryOptions): Promise<chrome.windows.Window>;

    /** Fired when a window is removed (closed). */
    export var onRemoved: WindowIdEvent;
    /** Fired when a window is created. */
    export var onCreated: WindowReferenceEvent;
    /**
     * Fired when the currently focused window changes. Will be chrome.windows.WINDOW_ID_NONE if all chrome windows have lost focus.
     * Note: On some Linux window managers, WINDOW_ID_NONE will always be sent immediately preceding a switch from one chrome window to another.
     */
    export var onFocusChanged: WindowIdEvent;

    /**
     * Fired when a window has been resized; this event is only dispatched when the new bounds are committed, and not for in-progress changes.
     * @since Chrome 86.
     */
    export var onBoundsChanged: WindowReferenceEvent;
}

declare namespace chrome.declarativeNetRequest {
    /** Ruleset ID for the dynamic rules added by the extension. */
    export const DYNAMIC_RULESET_ID: string;

    /** Time interval within which MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL getMatchedRules calls can be made, specified in minutes.
     * Additional calls will fail immediately and set runtime.lastError.
     * Note: getMatchedRules calls associated with a user gesture are exempt from the quota.
     */
    export const GETMATCHEDRULES_QUOTA_INTERVAL: number;

    /** The minimum number of static rules guaranteed to an extension across its enabled static rulesets.
     * Any rules above this limit will count towards the global rule limit.
     */
    export const GUARANTEED_MINIMUM_STATIC_RULES: number;

    /** The number of times getMatchedRules can be called within a period of GETMATCHEDRULES_QUOTA_INTERVAL. */
    export const MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL: number;

    /** The maximum number of combined dynamic and session scoped rules an extension can add. */
    export const MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES: number;

    /** The maximum number of regular expression rules that an extension can add.
     * This limit is evaluated separately for the set of dynamic rules and those specified in the rule resources file.
     */
    export const MAX_NUMBER_OF_REGEX_RULES: number;

    /** The maximum number of static Rulesets an extension can specify as part of the "rule_resources" manifest key. */
    export const MAX_NUMBER_OF_STATIC_RULESETS: number;

    /** Ruleset ID for the session-scoped rules added by the extension. */
    export const SESSION_RULESET_ID: string;

    /** This describes the HTTP request method of a network request.  */
    export enum RequestMethod {
        CONNECT = "connect",
        DELETE = "delete",
        GET = "get",
        HEAD = "head",
        OPTIONS = "options",
        PATCH = "patch",
        POST = "post",
        PUT = "put",
    }

    /** This describes the resource type of the network request. */
    export enum ResourceType {
        MAIN_FRAME = "main_frame",
        SUB_FRAME = "sub_frame",
        STYLESHEET = "stylesheet",
        SCRIPT = "script",
        IMAGE = "image",
        FONT = "font",
        OBJECT = "object",
        XMLHTTPREQUEST = "xmlhttprequest",
        PING = "ping",
        CSP_REPORT = "csp_report",
        MEDIA = "media",
        WEBSOCKET = "websocket",
        OTHER = "other",
    }

    /** Describes the kind of action to take if a given RuleCondition matches. */
    export enum RuleActionType {
        BLOCK = "block",
        REDIRECT = "redirect",
        ALLOW = "allow",
        UPGRADE_SCHEME = "upgradeScheme",
        MODIFY_HEADERS = "modifyHeaders",
        ALLOW_ALL_REQUESTS = "allowAllRequests",
    }

    /** Describes the reason why a given regular expression isn't supported. */
    export enum UnsupportedRegexReason {
        SYNTAX_ERROR = "syntaxError",
        MEMORY_LIMIT_EXCEEDED = "memoryLimitExceeded",
    }

    /** TThis describes whether the request is first or third party to the frame in which it originated.
     * A request is said to be first party if it has the same domain (eTLD+1) as the frame in which the request originated.
     */
    export enum DomainType {
        FIRST_PARTY = "firstParty",
        THIRD_PARTY = "thirdParty",
    }

    /** This describes the possible operations for a "modifyHeaders" rule. */
    export enum HeaderOperation {
        APPEND = "append",
        SET = "set",
        REMOVE = "remove",
    }

    export interface RequestDetails {
        /** The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens.
         * If the document of a (sub-)frame is loaded (type is main_frame or sub_frame), frameId indicates the ID of this frame, not the ID of the outer frame.
         * Frame IDs are unique within a tab.
         */
        frameId: number;

        /** The origin where the request was initiated.
         * This does not change through redirects.
         * If this is an opaque origin, the string 'null' will be used.
         */
        initiator?: string | undefined;

        /** Standard HTTP method. */
        method: string;

        /** ID of frame that wraps the frame which sent the request.
         * Set to -1 if no parent frame exists.
         */
        partentFrameId: number;

        /** The ID of the request.
         * Request IDs are unique within a browser session.
         */
        requestId: string;

        /** The ID of the tab in which the request takes place.
         * Set to -1 if the request isn't related to a tab.
         */
        tabId: number;

        /** The resource type of the request. */
        type: ResourceType;

        /** The URL of the request. */
        url: string;
    }

    export interface Rule {
        /** The action to take if this rule is matched. */
        action: RuleAction;

        /** The condition under which this rule is triggered. */
        condition: RuleCondition;

        /** An id which uniquely identifies a rule.
         * Mandatory and should be >= 1.
         */
        id: number;

        /** Rule priority.
         * Defaults to 1.
         * When specified, should be >= 1.
         */
        priority?: number | undefined;
    }

    export interface RuleAction {
        /** Describes how the redirect should be performed.
         * Only valid for redirect rules.
         */
        redirect?: Redirect | undefined;

        /** The request headers to modify for the request.
         * Only valid if RuleActionType is "modifyHeaders".
         */
        requestHeaders?: ModifyHeaderInfo[] | undefined;

        /** The response headers to modify for the request.
         * Only valid if RuleActionType is "modifyHeaders".
         */
        responseHeaders?: ModifyHeaderInfo[] | undefined;

        /** The type of action to perform. */
        type: RuleActionType;
    }

    export interface RuleCondition {
        /**
         * Specifies whether the network request is first-party or third-party to the domain from which it originated.
         * If omitted, all requests are accepted.
         */
        domainType?: DomainType | undefined;

        /**
         * @deprecated since Chrome 101. Use initiatorDomains instead.

         * The rule will only match network requests originating from the list of domains.
         * If the list is omitted, the rule is applied to requests from all domains.
         * An empty list is not allowed.
         *
         * Notes:
         * Sub-domains like "a.example.com" are also allowed.
         * The entries must consist of only ascii characters.
         * Use punycode encoding for internationalized domains.
         * This matches against the request initiator and not the request url.
         */
        domains?: string[] | undefined;

        /**
         * @deprecated since Chrome 101. Use excludedInitiatorDomains instead
         *
         * The rule will not match network requests originating from the list of excludedDomains.
         * If the list is empty or omitted, no domains are excluded.
         * This takes precedence over domains.
         *
         * Notes:
         * Sub-domains like "a.example.com" are also allowed.
         * The entries must consist of only ascii characters.
         * Use punycode encoding for internationalized domains.
         * This matches against the request initiator and not the request url.
         */
        excludedDomains?: string[] | undefined;

        /**
         * The rule will only match network requests originating from the list of initiatorDomains.
         * If the list is omitted, the rule is applied to requests from all domains.
         * An empty list is not allowed.
         *
         * Notes:
         * Sub-domains like "a.example.com" are also allowed.
         * The entries must consist of only ascii characters.
         * Use punycode encoding for internationalized domains.
         * This matches against the request initiator and not the request url.
         */
        initiatorDomains?: string[] | undefined;

        /**
         * The rule will not match network requests originating from the list of excludedInitiatorDomains.
         * If the list is empty or omitted, no domains are excluded.
         * This takes precedence over initiatorDomains.
         *
         * Notes:
         * Sub-domains like "a.example.com" are also allowed.
         * The entries must consist of only ascii characters.
         * Use punycode encoding for internationalized domains.
         * This matches against the request initiator and not the request url.
         */
        excludedInitiatorDomains?: string[] | undefined;

        /**
         * The rule will only match network requests when the domain matches one from the list of requestDomains.
         * If the list is omitted, the rule is applied to requests from all domains.
         * An empty list is not allowed.
         *
         * Notes:
         * Sub-domains like "a.example.com" are also allowed.
         * The entries must consist of only ascii characters.
         * Use punycode encoding for internationalized domains.
         */
        requestDomains?: string[] | undefined;

        /**
         * The rule will not match network requests when the domains matches one from the list of excludedRequestDomains.
         * If the list is empty or omitted, no domains are excluded.
         * This takes precedence over requestDomains.
         *
         * Notes:
         * Sub-domains like "a.example.com" are also allowed.
         * The entries must consist of only ascii characters.
         * Use punycode encoding for internationalized domains.
         */
        excludedRequestDomains?: string[] | undefined;

        /**
         * List of request methods which the rule won't match.
         * Only one of requestMethods and excludedRequestMethods should be specified.
         * If neither of them is specified, all request methods are matched.
         */
        excludedRequestMethods?: RequestMethod[] | undefined;

        /**
         * List of resource types which the rule won't match.
         * Only one of {@link chrome.declarativeNetRequest.RuleCondition.resourceTypes}
         * and {@link chrome.declarativeNetRequest.RuleCondition.excludedResourceTypes} should be specified.
         * If neither of them is specified, all resource types except "main_frame" are blocked.
         */
        excludedResourceTypes?: ResourceType[] | undefined;

        /**
         * List of {@link chrome.tabs.Tab.id} which the rule should not match.
         * An ID of {@link chrome.tabs.TAB_ID_NONE} excludes requests which don't originate from a tab.
         * Only supported for session-scoped rules.
         */
        excludedTabIds?: number[] | undefined;

        /**
         * Whether the urlFilter or regexFilter (whichever is specified) is case sensitive.
         * Default is true.
         */
        isUrlFilterCaseSensitive?: boolean | undefined;

        /**
         * Regular expression to match against the network request url.
         * This follows the RE2 syntax.
         *
         * Note: Only one of urlFilter or regexFilter can be specified.
         *
         * Note: The regexFilter must be composed of only ASCII characters.
         * This is matched against a url where the host is encoded in the punycode format (in case of internationalized domains) and any other non-ascii characters are url encoded in utf-8.
         */
        regexFilter?: string | undefined;

        /**
         * List of HTTP request methods which the rule can match. An empty list is not allowed.
         * Note: Specifying a {@link chrome.declarativeNetRequest.RuleCondition.requestMethods} rule condition will also exclude non-HTTP(s) requests,
         * whereas specifying {@link chrome.declarativeNetRequest.RuleCondition.excludedRequestMethods} will not.
         */
        requestMethods?: RequestMethod[];

        /**
         * List of {@link chrome.tabs.Tab.id} which the rule should not match.
         * An ID of {@link chrome.tabs.TAB_ID_NONE} excludes requests which don't originate from a tab.
         * An empty list is not allowed. Only supported for session-scoped rules.
         */
        tabIds?: number[] | undefined;

        /**
         * The pattern which is matched against the network request url.
         * Supported constructs:
         *
         * '*' : Wildcard: Matches any number of characters.
         *
         * '|' : Left/right anchor: If used at either end of the pattern, specifies the beginning/end of the url respectively.
         *
         * '||' : Domain name anchor: If used at the beginning of the pattern, specifies the start of a (sub-)domain of the URL.
         *
         * '^' : Separator character: This matches anything except a letter, a digit or one of the following: _ - . %.
         * This can also match the end of the URL.
         *
         * Therefore urlFilter is composed of the following parts: (optional Left/Domain name anchor) + pattern + (optional Right anchor).
         *
         * If omitted, all urls are matched. An empty string is not allowed.
         *
         * A pattern beginning with || is not allowed. Use instead.
         *
         * Note: Only one of urlFilter or regexFilter can be specified.
         *
         * Note: The urlFilter must be composed of only ASCII characters.
         * This is matched against a url where the host is encoded in the punycode format (in case of internationalized domains) and any other non-ascii characters are url encoded in utf-8.
         * For example, when the request url is http://abc.рф?q=ф, the urlFilter will be matched against the url http://abc.xn--p1ai/?q=%D1%84.
         */
        urlFilter?: string | undefined;

        /**
         * List of resource types which the rule can match.
         * An empty list is not allowed.
         *
         * Note: this must be specified for allowAllRequests rules and may only include the sub_frame and main_frame resource types.
         */
        resourceTypes?: ResourceType[] | undefined;
    }

    export interface MatchedRule {
        /** A matching rule's ID. */
        ruleId: number;

        /** ID of the Ruleset this rule belongs to.
         * For a rule originating from the set of dynamic rules, this will be equal to DYNAMIC_RULESET_ID.
         */
        rulesetId: string;
    }

    export interface MatchedRuleInfo {
        rule: MatchedRule;

        /** The tabId of the tab from which the request originated if the tab is still active. Else -1. */
        tabId: number;

        /** The time the rule was matched.
         * Timestamps will correspond to the Javascript convention for times, i.e. number of milliseconds since the epoch.
         */
        timeStamp: number;
    }

    export interface MatchedRulesFilter {
        /** If specified, only matches rules after the given timestamp. */
        minTimeStamp?: number | undefined;

        /** If specified, only matches rules for the given tab.
         * Matches rules not associated with any active tab if set to -1.
         */
        tabId?: number | undefined;
    }

    export interface ModifyHeaderInfo {
        /** The name of the header to be modified. */
        header: string;

        /** The operation to be performed on a header. */
        operation: HeaderOperation;

        /** The new value for the header.
         * Must be specified for append and set operations.
         */
        value?: string | undefined;
    }

    export interface QueryKeyValue {
        key: string;
        value: string;
    }

    export interface QueryTransform {
        /** The list of query key-value pairs to be added or replaced. */
        addOrReplaceParams?: QueryKeyValue[] | undefined;

        /** The list of query keys to be removed. */
        removeParams?: string[] | undefined;
    }

    export interface URLTransform {
        /** The new fragment for the request.
         * Should be either empty, in which case the existing fragment is cleared; or should begin with '#'.
         */
        fragment?: string | undefined;

        /** The new host for the request. */
        host?: string | undefined;

        /** The new password for the request. */
        password?: string | undefined;

        /** The new path for the request.
         * If empty, the existing path is cleared.
         */
        path?: string | undefined;

        /** The new port for the request.
         * If empty, the existing port is cleared.
         */
        port?: string | undefined;

        /** The new query for the request.
         * Should be either empty, in which case the existing query is cleared; or should begin with '?'.
         */
        query?: string | undefined;

        /** Add, remove or replace query key-value pairs. */
        queryTransform?: QueryTransform | undefined;

        /** The new scheme for the request.
         * Allowed values are "http", "https", "ftp" and "chrome-extension".
         */
        scheme?: string | undefined;

        /** The new username for the request. */
        username?: string | undefined;
    }

    export interface RegexOptions {
        /** Whether the regex specified is case sensitive.
         * Default is true.
         */
        isCaseSensitive?: boolean | undefined;

        /** The regular expression to check. */
        regex: string;

        /** Whether the regex specified requires capturing.
         * Capturing is only required for redirect rules which specify a regexSubstitution action.
         * The default is false.
         */
        requireCapturing?: boolean | undefined;
    }

    export interface IsRegexSupportedResult {
        isSupported: boolean;

        /** Specifies the reason why the regular expression is not supported.
         * Only provided if isSupported is false.
         */
        reason?: UnsupportedRegexReason | undefined;
    }

    export interface TabActionCountUpdate {
        /** The amount to increment the tab's action count by.
         * Negative values will decrement the count
         */
        increment: number;

        /** The tab for which to update the action count. */
        tabId: number;
    }

    export interface ExtensionActionOptions {
        /** Whether to automatically display the action count for a page as the extension's badge text.
         * This preference is persisted across sessions.
         */
        displayActionCountAsBadgeText?: boolean | undefined;

        /** Details of how the tab's action count should be adjusted. */
        tabUpdate?: TabActionCountUpdate | undefined;
    }

    export interface Redirect {
        /** Path relative to the extension directory.
         * Should start with '/'.
         */
        extensionPath?: string | undefined;

        /** Substitution pattern for rules which specify a regexFilter.
         * The first match of regexFilter within the url will be replaced with this pattern.
         * Within regexSubstitution, backslash-escaped digits (\1 to \9) can be used to insert the corresponding capture groups.
         * \0 refers to the entire matching text.
         */
        regexSubstitution?: string | undefined;

        /** Url transformations to perform. */
        transform?: URLTransform | undefined;

        /** The redirect url.
         * Redirects to JavaScript urls are not allowed.
         */
        url?: string | undefined;
    }

    export interface UpdateRuleOptions {
        /** Rules to add. */
        addRules?: Rule[] | undefined;

        /**
         * IDs of the rules to remove.
         * Any invalid IDs will be ignored.
         */
        removeRuleIds?: number[] | undefined;
    }

    export interface UpdateRulesetOptions {
        /** The set of ids corresponding to a static Ruleset that should be disabled. */
        disableRulesetIds?: string[] | undefined;

        /** The set of ids corresponding to a static Ruleset that should be enabled. */
        enableRulesetIds?: string[] | undefined;
    }

    export interface MatchedRuleInfoDebug {
        /** Details about the request for which the rule was matched. */
        request: RequestDetails;

        rule: MatchedRule;
    }

    export interface Ruleset {
        /** Whether the ruleset is enabled by default. */
        enabled: boolean;

        /** A non-empty string uniquely identifying the ruleset.
         * IDs beginning with '_' are reserved for internal use.
         */
        id: string;

        /** The path of the JSON ruleset relative to the extension directory. */
        path: string;
    }

    export interface RulesMatchedDetails {
        /** Rules matching the given filter. */
        rulesMatchedInfo: MatchedRuleInfo[];
    }

    /** Returns the number of static rules an extension can enable before the global static rule limit is reached. */
    export function getAvailableStaticRuleCount(callback: (count: number) => void): void;

    /**
     * Returns the number of static rules an extension can enable before the global static rule limit is reached.
     * @return The `getAvailableStaticRuleCount` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getAvailableStaticRuleCount(): Promise<number>;

    /** Returns the current set of dynamic rules for the extension.
     *
     * @param callback Called with the set of dynamic rules.
     * An error might be raised in case of transient internal errors.
     */
    export function getDynamicRules(callback: (rules: Rule[]) => void): void;

    /**
     * Returns the current set of dynamic rules for the extension.
     * @return The `getDynamicRules` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getDynamicRules(): Promise<Rule[]>;

    /** Returns the ids for the current set of enabled static rulesets.
     *
     * @param callback Called with a list of ids, where each id corresponds to an enabled static Ruleset. */
    export function getEnabledRulesets(callback: (rulesetIds: string[]) => void): void;

    /**
     * Returns the ids for the current set of enabled static rulesets.
     * @return The `getEnabledRulesets` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getEnabledRulesets(): Promise<string[]>;

    /** Returns all rules matched for the extension.
     * Callers can optionally filter the list of matched rules by specifying a filter.
     * This method is only available to extensions with the declarativeNetRequestFeedback permission or having the activeTab permission granted for the tabId specified in filter.
     * Note: Rules not associated with an active document that were matched more than five minutes ago will not be returned.
     *
     * @param filter An object to filter the list of matched rules.
     * @param callback Called once the list of matched rules has been fetched.
     * In case of an error, runtime.lastError will be set and no rules will be returned.
     * This can happen for multiple reasons, such as insufficient permissions, or exceeding the quota.
     */
    export function getMatchedRules(
        filter: MatchedRulesFilter | undefined,
        callback: (details: RulesMatchedDetails) => void,
    ): void;

    /**
     * Returns all rules matched for the extension.
     * Callers can optionally filter the list of matched rules by specifying a filter.
     * This method is only available to extensions with the declarativeNetRequestFeedback permission or having the activeTab permission granted for the tabId specified in filter.
     * Note: Rules not associated with an active document that were matched more than five minutes ago will not be returned.
     *
     * @param filter An object to filter the list of matched rules.
     * @return The `getMatchedRules` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getMatchedRules(filter: MatchedRulesFilter | undefined): Promise<RulesMatchedDetails>;

    export function getMatchedRules(callback: (details: RulesMatchedDetails) => void): void;

    export function getMatchedRules(): Promise<RulesMatchedDetails>;

    /** Returns the current set of session scoped rules for the extension.
     *
     * @param callback Called with the set of session scoped rules.
     */
    export function getSessionRules(callback: (rules: Rule[]) => void): void;

    /**
     * Returns the current set of session scoped rules for the extension.
     *
     * @return The `getSessionRules` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function getSessionRules(): Promise<Rule[]>;

    /** Checks if the given regular expression will be supported as a regexFilter rule condition.
     *
     * @param regexOptions The regular expression to check.
     * @param callback Called with details consisting of whether the regular expression is supported and the
     * reason if not.
     */
    export function isRegexSupported(
        regexOptions: RegexOptions,
        callback: (result: IsRegexSupportedResult) => void,
    ): void;

    /** Checks if the given regular expression will be supported as a regexFilter rule condition.
     *
     * @param regexOptions The regular expression to check.
     * @return The `isRegexSupported` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    export function isRegexSupported(regexOptions: RegexOptions): Promise<IsRegexSupportedResult>;

    /** Configures if the action count for tabs should be displayed as the extension action's badge text and provides a way for that action count to be incremented. */
    export function setExtensionActionOptions(options: ExtensionActionOptions, callback: Function): void;

    /**
     * Configures if the action count for tabs should be displayed as the extension action's badge text and provides a way for that action count to be incremented.
     * @return The `setExtensionActionOptions` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    export function setExtensionActionOptions(options: ExtensionActionOptions): Promise<void>;

    /** Modifies the current set of dynamic rules for the extension.
     * The rules with IDs listed in options.removeRuleIds are first removed, and then the rules given in options.addRules are added.
     *
     * Notes:
     * This update happens as a single atomic operation: either all specified rules are added and removed, or an error is returned.
     * These rules are persisted across browser sessions and across extension updates.
     * Static rules specified as part of the extension package can not be removed using this function.
     * MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES is the maximum number of combined dynamic and session rules an extension can add.
     *
     * @param callback Called once the update is complete or has failed.
     * In case of an error, runtime.lastError will be set and no change will be made to the rule set.
     * This can happen for multiple reasons, such as invalid rule format, duplicate rule ID, rule count limit exceeded, internal errors, and others.
     */
    export function updateDynamicRules(options: UpdateRuleOptions, callback: Function): void;

    /** Modifies the current set of dynamic rules for the extension.
     * The rules with IDs listed in options.removeRuleIds are first removed, and then the rules given in options.addRules are added.
     *
     * Notes:
     * This update happens as a single atomic operation: either all specified rules are added and removed, or an error is returned.
     * These rules are persisted across browser sessions and across extension updates.
     * Static rules specified as part of the extension package can not be removed using this function.
     * MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES is the maximum number of combined dynamic and session rules an extension can add.
     *
     * @return The `updateDynamicRules` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     * In case of an error, runtime.lastError will be set and no change will be made to the rule set.
     * This can happen for multiple reasons, such as invalid rule format, duplicate rule ID, rule count limit exceeded, internal errors, and others.
     */
    export function updateDynamicRules(options: UpdateRuleOptions): Promise<void>;

    /** Updates the set of enabled static rulesets for the extension.
     * The rulesets with IDs listed in options.disableRulesetIds are first removed, and then the rulesets listed in options.enableRulesetIds are added.
     *
     * Note that the set of enabled static rulesets is persisted across sessions but not across extension updates, i.e. the rule_resources manifest key will determine the set of enabled static rulesets on each extension update.
     *
     * @param callback Called once the update is complete.
     * In case of an error, runtime.lastError will be set and no change will be made to set of enabled rulesets.
     * This can happen for multiple reasons, such as invalid ruleset IDs, rule count limit exceeded, or internal errors.
     */
    export function updateEnabledRulesets(options: UpdateRulesetOptions, callback: Function): void;

    /** Updates the set of enabled static rulesets for the extension.
     * The rulesets with IDs listed in options.disableRulesetIds are first removed, and then the rulesets listed in options.enableRulesetIds are added.
     *
     * Note that the set of enabled static rulesets is persisted across sessions but not across extension updates, i.e. the rule_resources manifest key will determine the set of enabled static rulesets on each extension update.
     *
     * @return The `updateEnabledRulesets` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     * In case of an error, runtime.lastError will be set and no change will be made to set of enabled rulesets.
     * This can happen for multiple reasons, such as invalid ruleset IDs, rule count limit exceeded, or internal errors.
     */
    export function updateEnabledRulesets(options: UpdateRulesetOptions): Promise<void>;

    /** Modifies the current set of session scoped rules for the extension.
     * The rules with IDs listed in options.removeRuleIds are first removed, and then the rules given in options.addRules are added.
     *
     * Notes:
     * This update happens as a single atomic operation: either all specified rules are added and removed, or an error is returned.
     * These rules are not persisted across sessions and are backed in memory.
     * MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES is the maximum number of combined dynamic and session rules an extension can add.
     *
     * @param callback Called once the update is complete or has failed.
     * In case of an error, runtime.lastError will be set and no change will be made to the rule set.
     * This can happen for multiple reasons, such as invalid rule format, duplicate rule ID, rule count limit exceeded, and others.
     */
    export function updateSessionRules(options: UpdateRuleOptions, callback: Function): void;

    /** Modifies the current set of session scoped rules for the extension.
     * The rules with IDs listed in options.removeRuleIds are first removed, and then the rules given in options.addRules are added.
     *
     * Notes:
     * This update happens as a single atomic operation: either all specified rules are added and removed, or an error is returned.
     * These rules are not persisted across sessions and are backed in memory.
     * MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES is the maximum number of combined dynamic and session rules an extension can add.
     *
     * @return The `updateSessionRules` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     * In case of an error, runtime.lastError will be set and no change will be made to the rule set.
     * This can happen for multiple reasons, such as invalid rule format, duplicate rule ID, rule count limit exceeded, and others.
     */
    export function updateSessionRules(options: UpdateRuleOptions): Promise<void>;

    /** The rule that has been matched along with information about the associated request. */
    export interface RuleMatchedDebugEvent extends chrome.events.Event<(info: MatchedRuleInfoDebug) => void> {}

    /** Fired when a rule is matched with a request.
     * Only available for unpacked extensions with the declarativeNetRequestFeedback permission as this is intended to be used for debugging purposes only. */
    export var onRuleMatchedDebug: RuleMatchedDebugEvent;
}

////////////////////
// SidePanel
////////////////////
/**
 * Availability: @since Chrome 114. Manifest v3.
 * https://developer.chrome.com/docs/extensions/reference/sidePanel/
 * Permissions: "sidePanel"
 */
declare namespace chrome.sidePanel {
    export interface GetPanelOptions {
        tabId?: number;
    }

    export interface PanelBehavior {
        openPanelOnActionClick?: boolean;
    }

    export interface PanelOptions {
        enabled?: boolean;
        path?: string;
        tabId?: number;
    }

    export interface SidePanel {
        default_path: string;
    }

    export function getOptions(
        options: GetPanelOptions,
        callback?: (options: PanelOptions) => void,
    ): Promise<PanelOptions>;

    export function getPanelBehavior(callback?: (behavior: PanelBehavior) => void): Promise<PanelBehavior>;

    export function setOptions(options: PanelOptions, callback?: () => void): Promise<void>;

    export function setPanelBehavior(behavior: PanelBehavior, callback?: () => void): Promise<void>;
}
