/// <reference types="filesystem" />
/// <reference path="./har-format/index.d.ts" />
/// <reference path="./chrome-cast/index.d.ts" />

// Helpers
type SetRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
type SetPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

////////////////////
// Global object
////////////////////
interface Window {
    chrome: typeof chrome;
}

declare namespace chrome {
    ////////////////////
    // Accessibility Features
    ////////////////////
    /**
     * Use the `chrome.accessibilityFeatures` API to manage Chrome's accessibility features. This API relies on the ChromeSetting prototype of the type API for getting and setting individual accessibility features. In order to get feature states the extension must request `accessibilityFeatures.read` permission. For modifying feature state, the extension needs `accessibilityFeatures.modify` permission. Note that `accessibilityFeatures.modify` does not imply `accessibilityFeatures.read` permission.
     *
     * Permissions: "accessibilityFeatures.read", "accessibilityFeatures.modify"
     */
    export namespace accessibilityFeatures {
        /** `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission. */
        export const animationPolicy: chrome.types.ChromeSetting<"allowed" | "once" | "none">;

        /**
         * Auto mouse click after mouse stops moving. The value indicates whether the feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         */
        export const autoclick: chrome.types.ChromeSetting<boolean>;

        /**
         * Caret highlighting. The value indicates whether the feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         * @since Chrome 51
         */
        export const caretHighlight: chrome.types.ChromeSetting<boolean>;

        /**
         * Cursor color. The value indicates whether the feature is enabled or not, doesn't indicate the color of it.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         * @since Chrome 85
         */
        export const cursorColor: chrome.types.ChromeSetting<boolean>;

        /**
         * Cursor highlighting. The value indicates whether the feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         * @since Chrome 51
         */
        export const cursorHighlight: chrome.types.ChromeSetting<boolean>;

        /**
         * Dictation. The value indicates whether the feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         * @since Chrome 90
         */
        export const dictation: chrome.types.ChromeSetting<boolean>;

        /**
         * Docked magnifier. The value indicates whether docked magnifier feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         * @since Chrome 87
         */
        export const dockedMagnifier: chrome.types.ChromeSetting<boolean>;

        /**
         * Focus highlighting. The value indicates whether the feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         * @since Chrome 51
         */
        export const focusHighlight: chrome.types.ChromeSetting<boolean>;

        /**
         * High contrast rendering mode. The value indicates whether the feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         */
        export const highContrast: chrome.types.ChromeSetting<boolean>;

        /**
         * Enlarged cursor. The value indicates whether the feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         */
        export const largeCursor: chrome.types.ChromeSetting<boolean>;

        /**
         * Full screen magnification. The value indicates whether the feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         */
        export const screenMagnifier: chrome.types.ChromeSetting<boolean>;

        /**
         * Select-to-speak. The value indicates whether the feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         * @since Chrome 51
         */
        export const selectToSpeak: chrome.types.ChromeSetting<boolean>;

        /**
         * Spoken feedback (text-to-speech). The value indicates whether the feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         */
        export const spokenFeedback: chrome.types.ChromeSetting<boolean>;

        /**
         * Sticky modifier keys (like shift or alt). The value indicates whether the feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         */
        export const stickyKeys: chrome.types.ChromeSetting<boolean>;

        /**
         * Switch Access. The value indicates whether the feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         * @since Chrome 51
         */
        export const switchAccess: chrome.types.ChromeSetting<boolean>;

        /**
         * Virtual on-screen keyboard. The value indicates whether the feature is enabled or not.
         * `get()` requires `accessibilityFeatures.read` permission. `set()` and `clear()` require `accessibilityFeatures.modify` permission.
         * @platform ChromeOS only
         */
        export const virtualKeyboard: chrome.types.ChromeSetting<boolean>;
    }

    ////////////////////
    // Action
    ////////////////////
    /**
     * Use the `chrome.action` API to control the extension's icon in the Google Chrome toolbar.
     * The action icons are displayed in the browser toolbar next to the omnibox. After installation, these appear in the extensions menu (the puzzle piece icon). Users can pin your extension icon to the toolbar.
     *
     * Manifest: "action"
     * @since Chrome 88, MV3
     */
    export namespace action {
        export interface BadgeColorDetails {
            /** An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red is `[255, 0, 0, 255]`. Can also be a string with a CSS value, with opaque red being `#FF0000` or `#F00`. */
            color: string | extensionTypes.ColorArray;
            /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
            tabId?: number | undefined;
        }

        export interface BadgeTextDetails {
            /** Any number of characters can be passed, but only about four can fit in the space. If an empty string (`''`) is passed, the badge text is cleared. If `tabId` is specified and `text` is null, the text for the specified tab is cleared and defaults to the global badge text. */
            text?: string | undefined;
            /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
            tabId?: number | undefined;
        }

        export interface TitleDetails {
            /** The string the action should display when moused over. */
            title: string;
            /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
            tabId?: number | undefined;
        }

        export interface PopupDetails {
            /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
            tabId?: number | undefined;
            /** The html file to show in a popup. If set to the empty string (`''`), no popup is shown. */
            popup: string;
        }

        export interface TabIconDetails {
            /** Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` \* n will be selected, where n is the size of the icon in the UI. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.path = {'16': foo}' */
            path?: string | { [index: number]: string } | undefined;
            /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
            tabId?: number | undefined;
            /** Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` \* n will be selected, where n is the size of the icon in the UI. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'16': foo}' */
            imageData?: ImageData | { [index: number]: ImageData } | undefined;
        }

        /** @since Chrome 99 */
        export interface OpenPopupOptions {
            /** The id of the window to open the action popup in. Defaults to the currently-active window if unspecified.  */
            windowId?: number | undefined;
        }

        export interface TabDetails {
            /** The ID of the tab to query state for. If no tab is specified, the non-tab-specific state is returned.  */
            tabId?: number | undefined;
        }

        /**
         * The collection of user-specified settings relating to an extension's action.
         * @since Chrome 91
         */
        export interface UserSettings {
            /** Whether the extension's action icon is visible on browser windows' top-level toolbar (i.e., whether the extension has been 'pinned' by the user). */
            isOnToolbar: boolean;
        }

        /** @since Chrome 130 */
        export interface UserSettingsChange {
            /** Whether the extension's action icon is visible on browser windows' top-level toolbar (i.e., whether the extension has been 'pinned' by the user). */
            isOnToolbar?: boolean;
        }

        /**
         * Disables the action for a tab.
         * @param tabId The ID of the tab for which you want to modify the action.
         *
         * Can return its result via Promise.
         */
        export function disable(tabId?: number): Promise<void>;
        export function disable(callback: () => void): void;
        export function disable(tabId: number | undefined, callback: () => void): void;

        /**
         * Enables the action for a tab. By default, actions are enabled.
         * @param tabId The ID of the tab for which you want to modify the action.
         *
         * Can return its result via Promise.
         */
        export function enable(tabId?: number): Promise<void>;
        export function enable(callback: () => void): void;
        export function enable(tabId: number | undefined, callback: () => void): void;

        /**
         * Gets the background color of the action.
         *
         * Can return its result via Promise.
         */
        export function getBadgeBackgroundColor(details: TabDetails): Promise<extensionTypes.ColorArray>;
        export function getBadgeBackgroundColor(
            details: TabDetails,
            callback: (result: extensionTypes.ColorArray) => void,
        ): void;

        /**
         * Gets the badge text of the action. If no tab is specified, the non-tab-specific badge text is returned. If {@link declarativeNetRequest.ExtensionActionOptions.displayActionCountAsBadgeText displayActionCountAsBadgeText} is enabled, a placeholder text will be returned unless the {@link runtime.ManifestPermission declarativeNetRequestFeedback} permission is present or tab-specific badge text was provided.
         *
         * Can return its result via Promise.
         */
        export function getBadgeText(details: TabDetails): Promise<string>;
        export function getBadgeText(details: TabDetails, callback: (result: string) => void): void;

        /**
         * Gets the text color of the action.
         *
         * Can return its result via Promise.
         * @since Chrome 110
         */
        export function getBadgeTextColor(details: TabDetails): Promise<extensionTypes.ColorArray>;
        export function getBadgeTextColor(
            details: TabDetails,
            callback: (result: extensionTypes.ColorArray) => void,
        ): void;

        /**
         * Gets the html document set as the popup for this action.
         *
         * Can return its result via Promise.
         */
        export function getPopup(details: TabDetails): Promise<string>;
        export function getPopup(details: TabDetails, callback: (result: string) => void): void;

        /**
         * Gets the title of the action.
         *
         * Can return its result via Promise.
         */
        export function getTitle(details: TabDetails): Promise<string>;
        export function getTitle(details: TabDetails, callback: (result: string) => void): void;

        /**
         * Returns the user-specified settings relating to an extension's action.
         *
         * Can return its result via Promise.
         * @since Chrome 91
         */
        export function getUserSettings(): Promise<UserSettings>;
        export function getUserSettings(callback: (userSettings: UserSettings) => void): void;

        /**
         * Indicates whether the extension action is enabled for a tab (or globally if no `tabId` is provided). Actions enabled using only {@link declarativeContent} always return false.
         *
         * Can return its result via Promise.
         * @since Chrome 110
         */
        export function isEnabled(tabId?: number): Promise<boolean>;
        export function isEnabled(callback: (isEnabled: boolean) => void): void;
        export function isEnabled(tabId: number | undefined, callback: (isEnabled: boolean) => void): void;

        /**
         * Opens the extension's popup. Between Chrome 118 and Chrome 126, this is only available to policy installed extensions.
         *
         * @param options Specifies options for opening the popup.
         *
         * Can return its result via Promise.
         * @since Chrome 127
         */
        export function openPopup(options?: OpenPopupOptions): Promise<void>;
        export function openPopup(callback: () => void): void;
        export function openPopup(options: OpenPopupOptions | undefined, callback: () => void): void;

        /**
         * Sets the background color for the badge.
         *
         * Can return its result via Promise.
         */
        export function setBadgeBackgroundColor(details: BadgeColorDetails): Promise<void>;
        export function setBadgeBackgroundColor(details: BadgeColorDetails, callback: () => void): void;

        /**
         * Sets the badge text for the action. The badge is displayed on top of the icon.
         *
         * Can return its result via Promise.
         */
        export function setBadgeText(details: BadgeTextDetails): Promise<void>;
        export function setBadgeText(details: BadgeTextDetails, callback: () => void): void;

        /**
         * Sets the text color for the badge.
         *
         * Can return its result via Promise.
         * @since Chrome 110
         */
        export function setBadgeTextColor(details: BadgeColorDetails): Promise<void>;
        export function setBadgeTextColor(details: BadgeColorDetails, callback: () => void): void;

        /**
         * Sets the icon for the action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the path or the imageData property must be specified.
         *
         * Can return its result via Promise.
         */
        export function setIcon(details: TabIconDetails): Promise<void>;
        export function setIcon(details: TabIconDetails, callback: () => void): void;

        /**
         * Sets the html document to be opened as a popup when the user clicks on the action's icon.
         *
         * Can return its result via Promise.
         */
        export function setPopup(details: PopupDetails): Promise<void>;
        export function setPopup(details: PopupDetails, callback: () => void): void;

        /**
         * Sets the title of the action. This shows up in the tooltip.
         *
         * Can return its result via Promise.
         */
        export function setTitle(details: TitleDetails): Promise<void>;
        export function setTitle(details: TitleDetails, callback: () => void): void;

        /** Fired when an action icon is clicked. This event will not fire if the action has a popup. */
        export const onClicked: events.Event<(tab: chrome.tabs.Tab) => void>;

        /**
         * Fired when user-specified settings relating to an extension's action change.
         * @since Chrome 130
         */
        export const onUserSettingsChanged: events.Event<(change: UserSettingsChange) => void>;
    }

    ////////////////////
    // Alarms
    ////////////////////
    /**
     * Use the `chrome.alarms` API to schedule code to run periodically or at a specified time in the future.
     *
     * Permissions: "alarms"
     */
    export namespace alarms {
        export interface AlarmCreateInfo {
            /** Length of time in minutes after which the {@link onAlarm} event should fire.  */
            delayInMinutes?: number | undefined;
            /** If set, the onAlarm event should fire every `periodInMinutes` minutes after the initial event specified by `when` or `delayInMinutes`. If not set, the alarm will only fire once. */
            periodInMinutes?: number | undefined;
            /** Time at which the alarm should fire, in milliseconds past the epoch (e.g. `Date.now() + n`). */
            when?: number | undefined;
        }

        export interface Alarm {
            /** If not null, the alarm is a repeating alarm and will fire again in `periodInMinutes` minutes. */
            periodInMinutes?: number;
            /** Time at which this alarm was scheduled to fire, in milliseconds past the epoch (e.g. `Date.now() + n`). For performance reasons, the alarm may have been delayed an arbitrary amount beyond this. */
            scheduledTime: number;
            /** Name of this alarm. */
            name: string;
        }

        /**
         * Creates an alarm. Near the time(s) specified by `alarmInfo`, the {@link onAlarm} event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
         *
         * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 30 seconds but may delay them an arbitrary amount more. That is, setting `delayInMinutes` or `periodInMinutes` to less than `0.5` will not be honored and will cause a warning. `when` can be set to less than 30 seconds after "now" without warning but won't actually cause the alarm to fire for at least 30 seconds.
         *
         * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
         * @param name Optional name to identify this alarm. Defaults to the empty string.
         * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either `when` or `delayInMinutes` (but not both). If `periodInMinutes` is set, the alarm will repeat every `periodInMinutes` minutes after the initial event. If neither `when` or `delayInMinutes` is set for a repeating alarm, `periodInMinutes` is used as the default for `delayInMinutes`.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 111.
         */
        export function create(alarmInfo: AlarmCreateInfo): Promise<void>;
        export function create(name: string | undefined, alarmInfo: AlarmCreateInfo): Promise<void>;
        export function create(alarmInfo: AlarmCreateInfo, callback: () => void): void;
        export function create(name: string | undefined, alarmInfo: AlarmCreateInfo, callback: () => void): void;

        /**
         * Gets an array of all the alarms.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         */
        export function getAll(): Promise<Alarm[]>;
        export function getAll(callback: (alarms: Alarm[]) => void): void;

        /**
         * Clears all alarms.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         */
        export function clearAll(): Promise<boolean>;
        export function clearAll(callback: (wasCleared: boolean) => void): void;

        /**
         * Clears the alarm with the given name.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         */
        export function clear(name?: string): Promise<boolean>;
        export function clear(callback: (wasCleared: boolean) => void): void;
        export function clear(name: string | undefined, callback: (wasCleared: boolean) => void): void;

        /**
         * Retrieves details about the specified alarm.
         * @param name The name of the alarm to get. Defaults to the empty string.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         */
        export function get(name?: string): Promise<Alarm | undefined>;
        export function get(callback: (alarm?: Alarm) => void): void;
        export function get(name: string | undefined, callback: (alarm?: Alarm) => void): void;

        /** Fired when an alarm has elapsed. Useful for event pages. */
        export const onAlarm: events.Event<(alarm: Alarm) => void>;
    }

    ////////////////////
    // Audio
    ////////////////////
    /**
     * The `chrome.audio` API is provided to allow users to get information about and control the audio devices attached to the system. This API is currently only available in kiosk mode for ChromeOS.
     *
     * Permissions: "audio"
     * @platform ChromeOS only
     * @since Chrome 59
     */
    export namespace audio {
        export interface AudioDeviceInfo {
            /** Device name */
            deviceName: string;
            /** Type of the device */
            deviceType: DeviceType;
            /** The user-friendly name (e.g. "USB Microphone"). */
            displayName: string;
            /** The unique identifier of the audio device. */
            id: string;
            /** True if this is the current active device. */
            isActive: boolean;
            /** The sound level of the device, volume for output, gain for input. */
            level: number;
            /** The stable/persisted device id string when available. */
            stableDeviceId?: string;
            /** Stream type associated with this device. */
            streamType: StreamType;
        }

        export interface DeviceFilter {
            /** If set, only audio devices whose active state matches this value will satisfy the filter. */
            isActive?: boolean;
            /** If set, only audio devices whose stream type is included in this list will satisfy the filter. */
            streamTypes?: StreamType[];
        }

        export interface DeviceIdLists {
            /**
             * List of input devices specified by their ID.
             * To indicate input devices should be unaffected, leave this property unset.
             */
            input?: string[];
            /**
             * List of output devices specified by their ID.
             * To indicate output devices should be unaffected, leave this property unset.
             */
            output?: string[];
        }

        export interface DeviceProperties {
            /**
             * The audio device's desired sound level. Defaults to the device's current sound level.
             * If used with audio input device, represents audio device gain.
             * If used with audio output device, represents audio device volume.
             */
            level?: number;
        }

        /** Available audio device types. */
        export enum DeviceType {
            ALSA_LOOPBACK = "ALSA_LOOPBACK",
            BLUETOOTH = "BLUETOOTH",
            FRONT_MIC = "FRONT_MIC",
            HDMI = "HDMI",
            HEADPHONE = "HEADPHONE",
            HOTWORD = "HOTWORD",
            INTERNAL_MIC = "INTERNAL_MIC",
            INTERNAL_SPEAKER = "INTERNAL_SPEAKER",
            KEYBOARD_MIC = "KEYBOARD_MIC",
            LINEOUT = "LINEOUT",
            MIC = "MIC",
            OTHER = "OTHER",
            POST_DSP_LOOPBACK = "POST_DSP_LOOPBACK",
            POST_MIX_LOOPBACK = "POST_MIX_LOOPBACK",
            REAR_MIC = "REAR_MIC",
            USB = "USB",
        }

        export interface LevelChangedEvent {
            /** ID of device whose sound level has changed. */
            deviceId: string;
            /** The device's new sound level. */
            level: number;
        }

        export interface MuteChangedEvent {
            /** Whether or not the stream is now muted. */
            isMuted: boolean;
            /** The type of the stream for which the mute value changed. The updated mute value applies to all devices with this stream type. */
            streamType: StreamType;
        }

        /** Type of stream an audio device provides. */
        export enum StreamType {
            INPUT = "INPUT",
            OUTPUT = "OUTPUT",
        }

        /**
         * Gets a list of audio devices filtered based on filter.
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         */
        export function getDevices(filter?: DeviceFilter): Promise<AudioDeviceInfo[]>;
        export function getDevices(filter: DeviceFilter, callback: (devices: AudioDeviceInfo[]) => void): void;
        export function getDevices(callback: (devices: AudioDeviceInfo[]) => void): void;

        /**
         * Gets the system-wide mute state for the specified stream type.
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         */
        export function getMute(streamType: `${StreamType}`): Promise<boolean>;
        export function getMute(streamType: `${StreamType}`, callback: (value: boolean) => void): void;

        /**
         * Sets lists of active input and/or output devices.
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         */
        export function setActiveDevices(ids: DeviceIdLists): Promise<void>;
        export function setActiveDevices(ids: DeviceIdLists, callback: () => void): void;

        /**
         * Sets mute state for a stream type. The mute state will apply to all audio devices with the specified audio stream type.
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         */
        export function setMute(streamType: `${StreamType}`, isMuted: boolean): Promise<void>;
        export function setMute(streamType: `${StreamType}`, isMuted: boolean, callback: () => void): void;

        /**
         * Sets the properties for the input or output device.
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         */
        export function setProperties(id: string, properties: DeviceProperties): Promise<void>;
        export function setProperties(id: string, properties: DeviceProperties, callback: () => void): void;

        /**
         * Fired when audio devices change, either new devices being added, or existing devices being removed.
         */
        export const onDeviceListChanged: chrome.events.Event<(devices: AudioDeviceInfo[]) => void>;

        /**
         * Fired when sound level changes for an active audio device.
         */
        export const onLevelChanged: chrome.events.Event<(event: LevelChangedEvent) => void>;

        /**
         * Fired when the mute state of the audio input or output changes.
         * Note that mute state is system-wide and the new value applies to every audio device with specified stream type.
         */
        export const onMuteChanged: chrome.events.Event<(event: MuteChangedEvent) => void>;
    }

    ////////////////////
    // Bookmarks
    ////////////////////
    /**
     * Use the `chrome.bookmarks` API to create, organize, and otherwise manipulate bookmarks. Also see Override Pages, which you can use to create a custom Bookmark Manager page.
     *
     * Permissions: "bookmarks"
     */
    export namespace bookmarks {
        /** A node (either a bookmark or a folder) in the bookmark tree. Child nodes are ordered within their parent folder. */
        export interface BookmarkTreeNode {
            /** An ordered list of children of this node. */
            children?: BookmarkTreeNode[];
            /** When this node was created, in milliseconds since the epoch (`new Date(dateAdded)`). */
            dateAdded?: number;
            /** When the contents of this folder last changed, in milliseconds since the epoch. */
            dateGroupModified?: number;
            /**
             * When this node was last opened, in milliseconds since the epoch. Not set for folders.
             * @since Chrome 114
             */
            dateLastUsed?: number;
            /**
             * If present, this is a folder that is added by the browser and that cannot be modified by the user or the extension. Child nodes may be modified, if this node does not have the `unmodifiable` property set. Omitted if the node can be modified by the user and the extension (default).
             *
             * There may be zero, one or multiple nodes of each folder type. A folder may be added or removed by the browser, but not via the extensions API.
             * @since Chrome 134
             */
            folderType?: `${FolderType}`;
            /** The unique identifier for the node. IDs are unique within the current profile, and they remain valid even after the browser is restarted. */
            id: string;
            /** The 0-based position of this node within its parent folder. */
            index?: number;
            /** The `id` of the parent folder. Omitted for the root node. */
            parentId?: string;
            /**
             * Whether this node is synced with the user's remote account storage by the browser. This can be used to distinguish between account and local-only versions of the same {@link FolderType}. The value of this property may change for an existing node, for example as a result of user action.
             *
             * Note: this reflects whether the node is saved to the browser's built-in account provider. It is possible that a node could be synced via a third-party, even if this value is false.
             *
             * For managed nodes (nodes where `unmodifiable` is set to `true`), this property will always be `false`.
             * @since Chrome 134
             */
            syncing: boolean;
            /** The text displayed for the node. */
            title: string;
            /** Indicates the reason why this node is unmodifiable. The `managed` value indicates that this node was configured by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the user and the extension (default). */
            unmodifiable?: `${BookmarkTreeNodeUnmodifiable}`;
            /* The URL navigated to when a user clicks the bookmark. Omitted for folders. */
            url?: string;
        }

        /**
         * Indicates the reason why this node is unmodifiable. The `managed` value indicates that this node was configured by the system administrator. Omitted if the node can be modified by the user and the extension (default).
         * @since Chrome 44
         */
        export enum BookmarkTreeNodeUnmodifiable {
            MANAGED = "managed",
        }

        /** Object passed to the create() function. */
        export interface CreateDetails {
            index?: number;
            /** Defaults to the Other Bookmarks folder. */
            parentId?: string;
            title?: string;
            url?: string;
        }

        /**
         * Indicates the type of folder.
         * @since Chrome 134
         */

        export enum FolderType {
            /** The folder whose contents is displayed at the top of the browser window. */
            BOOKMARKS_BAR = "bookmarks-bar",
            /** Bookmarks which are displayed in the full list of bookmarks on all platforms. */
            OTHER = "other",
            /** Bookmarks generally available on the user's mobile devices, but modifiable by extension or in the bookmarks manager. */
            MOBILE = "mobile",
            /** A top-level folder that may be present if the system administrator or the custodian of a supervised user has configured bookmarks. */
            MANAGED = "managed",
        }

        /** @deprecated Bookmark write operations are no longer limited by Chrome. */
        export const MAX_WRITE_OPERATIONS_PER_HOUR: 1000000;
        /** @deprecated Bookmark write operations are no longer limited by Chrome. */
        export const MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: 1000000;

        /**
         * Creates a bookmark or folder under the specified parentId. If url is NULL or missing, it will be a folder.
         *
         * Can return its result via Promise since Chrome 90.
         */
        export function create(bookmark: CreateDetails): Promise<BookmarkTreeNode>;
        export function create(bookmark: CreateDetails, callback: (result: BookmarkTreeNode) => void): void;

        /**
         * Retrieves the specified BookmarkTreeNode(s).
         * @param idOrIdList A single string-valued id, or an array of string-valued ids
         *
         * Can return its result via Promise since Chrome 90.
         */
        export function get(idOrIdList: string | [string, ...string[]]): Promise<BookmarkTreeNode[]>;
        export function get(
            idOrIdList: string | [string, ...string[]],
            callback: (results: BookmarkTreeNode[]) => void,
        ): void;

        /**
         * Retrieves the children of the specified BookmarkTreeNode id.
         *
         * Can return its result via Promise since Chrome Chrome 90
         */
        export function getChildren(id: string): Promise<BookmarkTreeNode[]>;
        export function getChildren(id: string, callback: (results: BookmarkTreeNode[]) => void): void;

        /**
         * Retrieves the recently added bookmarks.
         * @param numberOfItems The maximum number of items to return.
         *
         * Can return its result via Promise since Chrome Chrome 90
         */
        export function getRecent(numberOfItems: number): Promise<BookmarkTreeNode[]>;
        export function getRecent(numberOfItems: number, callback: (results: BookmarkTreeNode[]) => void): void;

        /**
         * Retrieves part of the Bookmarks hierarchy, starting at the specified node.
         * @param id The ID of the root of the subtree to retrieve.
         *
         * Can return its result via Promise since Chrome Chrome 90
         */
        export function getSubTree(id: string): Promise<BookmarkTreeNode[]>;
        export function getSubTree(id: string, callback: (results: BookmarkTreeNode[]) => void): void;

        /**
         * Retrieves the entire Bookmarks hierarchy.
         *
         * Can return its result via Promise since Chrome Chrome 90
         */
        export function getTree(): Promise<BookmarkTreeNode[]>;
        export function getTree(callback: (results: BookmarkTreeNode[]) => void): void;

        interface MoveDestination {
            parentId?: string;
            index?: number;
        }

        /**
         * Moves the specified BookmarkTreeNode to the provided location.
         *
         * Can return its result via Promise since Chrome Chrome 90
         */
        export function move(id: string, destination: MoveDestination): Promise<BookmarkTreeNode>;
        export function move(
            id: string,
            destination: MoveDestination,
            callback: (result: BookmarkTreeNode) => void,
        ): void;

        /**
         * Removes a bookmark or an empty bookmark folder.
         *
         * Can return its result via Promise since Chrome Chrome 90
         */
        export function remove(id: string): Promise<void>;
        export function remove(id: string, callback: () => void): void;

        /**
         * Recursively removes a bookmark folder.
         *
         * Can return its result via Promise since Chrome Chrome 90
         */
        export function removeTree(id: string): Promise<void>;
        export function removeTree(id: string, callback: () => void): void;

        interface SearchQuery {
            /** A string of words and quoted phrases that are matched against bookmark URLs and titles.*/
            query?: string;
            /** The URL of the bookmark; matches verbatim. Note that folders have no URL. */
            url?: string;
            /** The title of the bookmark; matches verbatim. */
            title?: string;
        }

        /**
         * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties.
         * @param query Either a string of words and quoted phrases that are matched against bookmark URLs and titles, or an object. If an object, the properties `query`, `url`, and `title` may be specified and bookmarks matching all specified properties will be produced.
         *
         * Can return its result via Promise since Chrome Chrome 90
         */
        export function search(query: string | SearchQuery): Promise<BookmarkTreeNode[]>;
        export function search(query: string | SearchQuery, callback: (results: BookmarkTreeNode[]) => void): void;

        interface UpdateChanges {
            title?: string;
            url?: string;
        }

        /**
         * Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified properties will be left unchanged. **Note:** Currently, only 'title' and 'url' are supported.
         *
         * Can return its result via Promise since Chrome Chrome 90
         */
        export function update(id: string, changes: UpdateChanges): Promise<BookmarkTreeNode>;
        export function update(id: string, changes: UpdateChanges, callback: (result: BookmarkTreeNode) => void): void;

        /** Fired when a bookmark or folder changes. **Note:** Currently, only title and url changes trigger this.*/
        export const onChanged: events.Event<(id: string, changeInfo: { title: string; url?: string }) => void>;

        /** Fired when the children of a folder have changed their order due to the order being sorted in the UI. This is not called as a result of a move(). */
        export const onChildrenReordered: events.Event<(id: string, reorderInfo: { childIds: string[] }) => void>;

        /** Fired when a bookmark or folder is created. */
        export const onCreated: events.Event<(id: string, bookmark: BookmarkTreeNode) => void>;

        /** Fired when a bookmark import session is begun. Expensive observers should ignore onCreated updates until onImportEnded is fired. Observers should still handle other notifications immediately. */
        export const onImportBegan: events.Event<() => void>;

        /** Fired when a bookmark import session is ended.  */
        export const onImportEnded: events.Event<() => void>;

        /** Fired when a bookmark or folder is moved to a different parent folder. */
        export const onMoved: events.Event<
            (
                id: string,
                moveInfo: {
                    parentId: string;
                    index: number;
                    oldParentId: string;
                    oldIndex: number;
                },
            ) => void
        >;

        /** Fired when a bookmark or folder is removed. When a folder is removed recursively, a single notification is fired for the folder, and none for its contents. */
        export const onRemoved: events.Event<
            (
                id: string,
                removeInfo: {
                    parentId: string;
                    index: number;
                    /** @since Chrome 48 */
                    node: BookmarkTreeNode;
                },
            ) => void
        >;
    }

    ////////////////////
    // Browser Action
    ////////////////////
    /**
     * Use browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar. In addition to its icon, a browser action can have a tooltip, a badge, and a popup.
     *
     * Manifest: "browser_action"
     *
     * MV2 only
     */
    export namespace browserAction {
        export interface BadgeBackgroundColorDetails {
            /** An array of four integers in the range 0-255 that make up the RGBA color of the badge. Can also be a string with a CSS hex color value; for example, `#FF0000` or `#F00` (red). Renders colors at full opacity. */
            color: string | extensionTypes.ColorArray;
            /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
            tabId?: number | null | undefined;
        }

        export interface BadgeTextDetails {
            /** Any number of characters can be passed, but only about four can fit into the space. If an empty string (`''`) is passed, the badge text is cleared. If `tabId` is specified and `text` is null, the text for the specified tab is cleared and defaults to the global badge text. */
            text?: string | null | undefined;
            /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
            tabId?: number | null | undefined;
        }

        export interface TitleDetails {
            /** The string the browser action should display when moused over. */
            title: string;
            /** Optional. Limits the change to when a particular tab is selected. Automatically resets when the tab is closed.  */
            tabId?: number | null | undefined;
        }

        export interface TabDetails {
            /** The ID of the tab to query state for. If no tab is specified, the non-tab-specific state is returned. */
            tabId?: number | null | undefined;
        }

        export type TabIconDetails =
            & {
                /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
                tabId?: number | null | undefined;
            }
            & (
                | {
                    /** Either an ImageData object or a dictionary {size -> ImageData} representing an icon to be set. If the icon is specified as a dictionary, the image used is chosen depending on the screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then an image with size `scale` \* n is selected, where _n_ is the size of the icon in the UI. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'16': foo}' */
                    imageData: ImageData | { [index: number]: ImageData };
                    /** Either a relative image path or a dictionary {size -> relative image path} pointing to an icon to be set. If the icon is specified as a dictionary, the image used is chosen depending on the screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then an image with size `scale` \* n is selected, where _n_ is the size of the icon in the UI. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.path = {'16': foo}' */
                    path?: string | { [index: string]: string } | undefined;
                }
                | {
                    /** Either an ImageData object or a dictionary {size -> ImageData} representing an icon to be set. If the icon is specified as a dictionary, the image used is chosen depending on the screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then an image with size `scale` \* n is selected, where _n_ is the size of the icon in the UI. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'16': foo}' */
                    imageData?: ImageData | { [index: number]: ImageData } | undefined;
                    /** Either a relative image path or a dictionary {size -> relative image path} pointing to an icon to be set. If the icon is specified as a dictionary, the image used is chosen depending on the screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then an image with size `scale` \* n is selected, where _n_ is the size of the icon in the UI. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.path = {'16': foo}' */
                    path: string | { [index: string]: string };
                }
            );

        export interface PopupDetails {
            /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
            tabId?: number | null | undefined;
            /** The relative path to the HTML file to show in a popup. If set to the empty string (`''`), no popup is shown.*/
            popup: string;
        }

        /**
         * Enables the browser action for a tab. Defaults to enabled.
         * @param tabId The ID of the tab for which to modify the browser action.
         * @param callback Since Chrome 67
         */
        export function enable(callback?: () => void): void;
        export function enable(tabId: number | null | undefined, callback?: () => void): void;

        /**
         * Sets the background color for the badge.
         * @param callback Since Chrome 67
         */
        export function setBadgeBackgroundColor(details: BadgeBackgroundColorDetails, callback?: () => void): void;

        /**
         * Sets the badge text for the browser action. The badge is displayed on top of the icon.
         * @param callback Since Chrome 67
         */
        export function setBadgeText(details: BadgeTextDetails, callback?: () => void): void;

        /**
         * Sets the title of the browser action. This title appears in the tooltip.
         * @param callback Since Chrome 67
         */
        export function setTitle(details: TitleDetails, callback?: () => void): void;

        /** Gets the badge text of the browser action. If no tab is specified, the non-tab-specific badge text is returned. */
        export function getBadgeText(details: TabDetails, callback: (result: string) => void): void;

        /**
         * Sets the HTML document to be opened as a popup when the user clicks the browser action icon.
         * @param callback Since Chrome 67
         */
        export function setPopup(details: PopupDetails, callback?: () => void): void;

        /**
         * Disables the browser action for a tab.
         * @param tabId The ID of the tab for which to modify the browser action.
         * @param callback since Chrome 67
         */
        export function disable(callback?: () => void): void;
        export function disable(tabId: number | null | undefined, callback?: () => void): void;

        /** Gets the title of the browser action. */
        export function getTitle(details: TabDetails, callback: (result: string) => void): void;

        /** Gets the background color of the browser action. */
        export function getBadgeBackgroundColor(
            details: TabDetails,
            callback: (result: extensionTypes.ColorArray) => void,
        ): void;

        /** Gets the HTML document that is set as the popup for this browser action. */
        export function getPopup(details: TabDetails, callback: (result: string) => void): void;

        /**
         * Sets the icon for the browser action. The icon can be specified as the path to an image file, as the pixel data from a canvas element, or as a dictionary of one of those. Either the `path` or the `imageData` property must be specified.
         */
        export function setIcon(details: TabIconDetails, callback?: () => void): void;

        /** Fired when a browser action icon is clicked. Does not fire if the browser action has a popup. */
        export const onClicked: events.Event<(tab: chrome.tabs.Tab) => void>;
    }

    ////////////////////
    // Browsing Data
    ////////////////////
    /**
     * Use the `chrome.browsingData` API to remove browsing data from a user's local profile.
     *
     * Permissions: "browsingData"
     */
    export namespace browsingData {
        export interface OriginTypes {
            /** Extensions and packaged applications a user has installed (be _really_ careful!). */
            extension?: boolean | undefined;
            /** Websites that have been installed as hosted applications (be careful!). */
            protectedWeb?: boolean | undefined;
            /** Normal websites. */
            unprotectedWeb?: boolean | undefined;
        }

        /** Options that determine exactly what data will be removed. */
        export interface RemovalOptions {
            /**
             * When present, data for origins in this list is excluded from deletion. Can't be used together with `origins`. Only supported for cookies, storage and cache. Cookies are excluded for the whole registrable domain.
             * @since Chrome 74
             */
            excludeOrigins?: string[] | undefined;
            /** An object whose properties specify which origin types ought to be cleared. If this object isn't specified, it defaults to clearing only "unprotected" origins. Please ensure that you _really_ want to remove application data before adding 'protectedWeb' or 'extensions'. */
            originTypes?: OriginTypes | undefined;
            /**
             * When present, only data for origins in this list is deleted. Only supported for cookies, storage and cache. Cookies are cleared for the whole registrable domain.
             * @since Chrome 74
             */
            origins?: [string, ...string[]] | undefined;
            /** Remove data accumulated on or after this date, represented in milliseconds since the epoch (accessible via the {@link Date.getTime getTime} method of the JavaScript `Date` object). If absent, defaults to 0 (which would remove all browsing data). */
            since?: number | undefined;
        }

        /** A set of data types. Missing data types are interpreted as `false`. */
        export interface DataTypeSet {
            /** Websites' WebSQL data. */
            webSQL?: boolean | undefined;
            /** Websites' IndexedDB data. */
            indexedDB?: boolean | undefined;
            /** The browser's cookies. */
            cookies?: boolean | undefined;
            /**
             * Stored passwords.
             * @deprecated since Chrome 144. Support for password deletion through extensions has been removed. This data type will be ignored.
             */
            passwords?: boolean | undefined;
            /**
             * Server-bound certificates.
             * @deprecated since Chrome 76. Support for server-bound certificates has been removed. This data type will be ignored.
             */
            serverBoundCertificates?: boolean | undefined;
            /** The browser's download list. */
            downloads?: boolean | undefined;
            /** The browser's cache. */
            cache?: boolean | undefined;
            /** Cache storage. */
            cacheStorage?: boolean | undefined;
            /** Websites' appcaches. */
            appcache?: boolean | undefined;
            /** Websites' file systems. */
            fileSystems?: boolean | undefined;
            /**
             * Plugins' data.
             * @deprecated since Chrome 88. Support for Flash has been removed. This data type will be ignored.
             */
            pluginData?: boolean | undefined;
            /** Websites' local storage data. */
            localStorage?: boolean | undefined;
            /** The browser's stored form data. */
            formData?: boolean | undefined;
            /** The browser's history. */
            history?: boolean | undefined;
            /** Service Workers. */
            serviceWorkers?: boolean | undefined;
        }

        export interface SettingsResult {
            options: RemovalOptions;
            /** All of the types will be present in the result, with values of `true` if they are both selected to be removed and permitted to be removed, otherwise `false`. */
            dataToRemove: DataTypeSet;
            /** All of the types will be present in the result, with values of `true` if they are permitted to be removed (e.g., by enterprise policy) and `false` if not. */
            dataRemovalPermitted: DataTypeSet;
        }

        /**
         * Reports which types of data are currently selected in the 'Clear browsing data' settings UI. Note: some of the data types included in this API are not available in the settings UI, and some UI settings control more than one data type listed here.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function settings(): Promise<SettingsResult>;
        export function settings(callback: (result: SettingsResult) => void): void;

        /**
         * Clears plugins' data.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @deprecated since Chrome 88. Support for Flash has been removed. This function has no effect
         */
        export function removePluginData(options: RemovalOptions): Promise<void>;
        export function removePluginData(options: RemovalOptions, callback: () => void): void;

        /**
         * Clears websites' service workers.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @since Chrome 72
         */
        export function removeServiceWorkers(options: RemovalOptions): Promise<void>;
        export function removeServiceWorkers(options: RemovalOptions, callback: () => void): void;

        /**
         * Clears the browser's stored form data (autofill).
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function removeFormData(options: RemovalOptions): Promise<void>;
        export function removeFormData(options: RemovalOptions, callback: () => void): void;

        /**
         * Clears websites' file system data.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function removeFileSystems(options: RemovalOptions): Promise<void>;
        export function removeFileSystems(options: RemovalOptions, callback: () => void): void;

        /**
         * Clears various types of browsing data stored in a user's profile.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @param dataToRemove The set of data types to remove.
         */
        export function remove(options: RemovalOptions, dataToRemove: DataTypeSet): Promise<void>;
        export function remove(options: RemovalOptions, dataToRemove: DataTypeSet, callback: () => void): void;

        /**
         * Clears the browser's stored passwords.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @deprecated since Chrome 144. Support for password deletion through extensions has been removed. This function has no effect.
         */
        export function removePasswords(options: RemovalOptions): Promise<void>;
        export function removePasswords(options: RemovalOptions, callback: () => void): void;

        /**
         * Clears the browser's cookies and server-bound certificates modified within a particular timeframe.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function removeCookies(options: RemovalOptions): Promise<void>;
        export function removeCookies(options: RemovalOptions, callback: () => void): void;

        /**
         * Clears websites' WebSQL data.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function removeWebSQL(options: RemovalOptions): Promise<void>;
        export function removeWebSQL(options: RemovalOptions, callback: () => void): void;

        /**
         * Clears websites' appcache data.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function removeAppcache(options: RemovalOptions): Promise<void>;
        export function removeAppcache(options: RemovalOptions, callback: () => void): void;

        /**
         * Clears websites' cache storage data.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function removeCacheStorage(options: RemovalOptions): Promise<void>;
        export function removeCacheStorage(options: RemovalOptions, callback: () => void): void;

        /**
         * Clears the browser's list of downloaded files (not the downloaded files themselves).
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function removeDownloads(options: RemovalOptions): Promise<void>;
        export function removeDownloads(options: RemovalOptions, callback: () => void): void;

        /**
         * Clears websites' local storage data.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function removeLocalStorage(options: RemovalOptions): Promise<void>;
        export function removeLocalStorage(options: RemovalOptions, callback: () => void): void;

        /**
         * Clears the browser's cache.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function removeCache(options: RemovalOptions): Promise<void>;
        export function removeCache(options: RemovalOptions, callback: () => void): void;

        /**
         * Clears the browser's history.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function removeHistory(options: RemovalOptions): Promise<void>;
        export function removeHistory(options: RemovalOptions, callback: () => void): void;

        /**
         * Clears websites' IndexedDB data.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function removeIndexedDB(options: RemovalOptions): Promise<void>;
        export function removeIndexedDB(options: RemovalOptions, callback: () => void): void;
    }

    ////////////////////
    // Certificate Provider
    ////////////////////
    /**
     * Use this API to expose certificates to the platform which can use these certificates for TLS authentications.
     *
     * Manifest: "certificateProvider"
     * @platform ChromeOS only
     * @since Chrome 46
     */
    export namespace certificateProvider {
        /** Types of supported cryptographic signature algorithms. */
        export enum Algorithm {
            /**
             * Specifies the RSASSA PKCS#1 v1.5 signature algorithm with the MD5-SHA-1 hashing. The extension must not prepend a DigestInfo prefix but only add PKCS#1 padding.
             * @deprecated This algorithm is deprecated and will never be requested by Chrome as of version 109.
             */
            RSASSA_PKCS1_V1_5_MD5_SHA1 = "RSASSA_PKCS1_v1_5_MD5_SHA1",
            /** Specifies the RSASSA PKCS#1 v1.5 signature algorithm with the SHA-1 hash function. */
            RSASSA_PKCS1_V1_5_SHA1 = "RSASSA_PKCS1_v1_5_SHA1",
            /** Specifies the RSASSA PKCS#1 v1.5 signature algorithm with the SHA-256 hashing function. */
            RSASSA_PKCS1_V1_5_SHA256 = "RSASSA_PKCS1_v1_5_SHA256",
            /** Specifies the RSASSA PKCS#1 v1.5 signature algorithm with the SHA-384 hashing function. */
            RSASSA_PKCS1_V1_5_SHA384 = "RSASSA_PKCS1_v1_5_SHA384",
            /** Specifies the RSASSA PKCS#1 v1.5 signature algorithm with the SHA-512 hashing function. */
            RSASSA_PKCS1_V1_5_SHA512 = "RSASSA_PKCS1_v1_5_SHA512",
            /** Specifies the RSASSA PSS signature algorithm with the SHA-256 hashing function, MGF1 mask generation function and the salt of the same size as the hash. */
            RSASSA_PSS_SHA256 = "RSASSA_PSS_SHA256",
            /** Specifies the RSASSA PSS signature algorithm with the SHA-384 hashing function, MGF1 mask generation function and the salt of the same size as the hash. */
            RSASSA_PSS_SHA384 = "RSASSA_PSS_SHA384",
            /** Specifies the RSASSA PSS signature algorithm with the SHA-512 hashing function, MGF1 mask generation function and the salt of the same size as the hash. */
            RSASSA_PSS_SHA512 = "RSASSA_PSS_SHA512",
        }

        export interface CertificateInfo {
            /** Must be the DER encoding of a X.509 certificate. Currently, only certificates of RSA keys are supported. */
            certificate: ArrayBuffer;
            /** Must be set to all hashes supported for this certificate. This extension will only be asked for signatures of digests calculated with one of these hash algorithms. This should be in order of decreasing hash preference. */
            supportedHashes: `${Hash}`[];
        }

        /** @since Chrome 86 */
        export interface CertificatesUpdateRequest {
            /** Request identifier to be passed to {@link setCertificates}. */
            certificatesRequestId: number;
        }

        /** @since Chrome 86 */
        export interface ClientCertificateInfo {
            /**
             * The array must contain the DER encoding of the X.509 client certificate as its first element.
             *
             * This must include exactly one certificate.
             */
            certificateChain: ArrayBuffer[];
            /** All algorithms supported for this certificate. The extension will only be asked for signatures using one of these algorithms. */
            supportedAlgorithms: `${Algorithm}`[];
        }

        /**
         * Types of errors that the extension can report.
         * @since Chrome 86
         */
        export enum Error {
            GENERAL_ERROR = "GENERAL_ERROR",
        }

        /** @deprecated Replaced by {@link Algorithm}.*/
        export enum Hash {
            /** Specifies the MD5 and SHA1 hashing algorithms. */
            MD5_SHA1 = "MD5_SHA1",
            /** Specifies the SHA1 hashing algorithm. */
            SHA1 = "SHA1",
            /** Specifies the SHA256 hashing algorithm. */
            SHA256 = "SHA256",
            /** Specifies the SHA384 hashing algorithm. */
            SHA384 = "SHA384",
            /** Specifies the SHA512 hashing algorithm. */
            SHA512 = "SHA512",
        }

        /**
         * The types of errors that can be presented to the user through the requestPin function.
         * @since Chrome 57
         */
        export enum PinRequestErrorType {
            /** Specifies the PIN is invalid. */
            INVALID_PIN = "INVALID_PIN",
            /** Specifies the PUK is invalid. */
            INVALID_PUK = "INVALID_PUK",
            /** Specifies the maximum attempt number has been exceeded. */
            MAX_ATTEMPTS_EXCEEDED = "MAX_ATTEMPTS_EXCEEDED",
            /** Specifies that the error cannot be represented by the above types. */
            UNKNOWN_ERROR = "UNKNOWN_ERROR",
        }

        /**
         * The type of code being requested by the extension with requestPin function.
         * @since Chrome 57
         */
        export enum PinRequestType {
            /** Specifies the requested code is a PIN. */
            PIN = "PIN",
            /** Specifies the requested code is a PUK. */
            PUK = "PUK",
        }

        /** @since Chrome 57 */
        export interface PinResponseDetails {
            /** The code provided by the user. Empty if user closed the dialog or some other error occurred. */
            userInput?: string | undefined;
        }

        /** @since Chrome 86 */
        export interface ReportSignatureDetails {
            /** Error that occurred while generating the signature, if any. */
            error?: `${Error}` | undefined;
            /** Request identifier that was received via the {@link onSignatureRequested} event. */
            signRequestId: number;
            /** The signature, if successfully generated. */
            signature?: ArrayBuffer | undefined;
        }

        /** @since Chrome 57 */
        export interface RequestPinDetails {
            /** The number of attempts left. This is provided so that any UI can present this information to the user. Chrome is not expected to enforce this, instead stopPinRequest should be called by the extension with errorType = MAX_ATTEMPTS_EXCEEDED when the number of pin requests is exceeded. */
            attemptsLeft?: number | undefined;
            /** The error template displayed to the user. This should be set if the previous request failed, to notify the user of the failure reason. */
            errorType?: `${PinRequestErrorType}` | undefined;
            /** The type of code requested. Default is PIN. */
            requestType?: `${PinRequestType}` | undefined;
            /** The ID given by Chrome in SignRequest. */
            signRequestId: number;
        }

        /** @since Chrome 86 */
        export interface SetCertificatesDetails {
            /** When called in response to {@link onCertificatesUpdateRequested}, should contain the received `certificatesRequestId` value. Otherwise, should be unset. */
            certificatesRequestId?: number | undefined;
            /** List of currently available client certificates. */
            clientCertificates: ClientCertificateInfo[];
            /** Error that occurred while extracting the certificates, if any. This error will be surfaced to the user when appropriate. */
            error?: `${Error}` | undefined;
        }

        /**  @since Chrome 86 */
        export interface SignatureRequest {
            /** Signature algorithm to be used. */
            algorithm: `${Algorithm}`;
            /** The DER encoding of a X.509 certificate. The extension must sign `input` using the associated private key. */
            certificate: ArrayBuffer;
            /** Data to be signed. Note that the data is not hashed. */
            input: ArrayBuffer;
            /** Request identifier to be passed to {@link reportSignature}. */
            signRequestId: number;
        }

        export interface SignRequest {
            /** The DER encoding of a X.509 certificate. The extension must sign `digest` using the associated private key. */
            certificate: ArrayBuffer;
            /**  The digest that must be signed. */
            digest: ArrayBuffer;
            /** Refers to the hash algorithm that was used to create `digest`. */
            hash: `${Hash}`;
            /**
             * The unique ID to be used by the extension should it need to call a method that requires it, e.g. requestPin.
             * @since Chrome 57
             */
            signRequestId: number;
        }

        /** @since Chrome 57 */
        export interface StopPinRequestDetails {
            /** The error template. If present it is displayed to user. Intended to contain the reason for stopping the flow if it was caused by an error, e.g. MAX\_ATTEMPTS\_EXCEEDED. */
            errorType?: `${PinRequestErrorType}` | undefined;
            /** The ID given by Chrome in SignRequest. */
            signRequestId: number;
        }

        /**
         * Should be called as a response to {@link onSignatureRequested}.
         *
         * The extension must eventually call this function for every {@link onSignatureRequested} event; the API implementation will stop waiting for this call after some time and respond with a timeout error when this function is called.
         *
         * Can return its result via Promise since Chrome 96.
         * @since Chrome 86
         */
        export function reportSignature(details: ReportSignatureDetails): Promise<void>;
        export function reportSignature(details: ReportSignatureDetails, callback: () => void): void;

        /**
         * Requests the PIN from the user. Only one ongoing request at a time is allowed. The requests issued while another flow is ongoing are rejected. It's the extension's responsibility to try again later if another flow is in progress.
         *
         * Can return its result via Promise since Chrome 96.
         * @param details Contains the details about the requested dialog.
         * @since Chrome 57
         */
        export function requestPin(details: RequestPinDetails): Promise<PinResponseDetails | undefined>;
        export function requestPin(
            details: RequestPinDetails,
            callback: (details?: PinResponseDetails | undefined) => void,
        ): void;

        /**
         * Sets a list of certificates to use in the browser.
         *
         * The extension should call this function after initialization and on every change in the set of currently available certificates. The extension should also call this function in response to {@link onCertificatesUpdateRequested} every time this event is received.
         *
         * Can return its result via Promise since Chrome 96.
         * @param details The certificates to set. Invalid certificates will be ignored.
         * @since Chrome 86
         */
        export function setCertificates(details: SetCertificatesDetails): Promise<void>;
        export function setCertificates(details: SetCertificatesDetails, callback: () => void): void;

        /**
         * Stops the pin request started by the {@link requestPin} function.
         *
         * Can return its result via Promise since Chrome 96.
         * @param details Contains the details about the reason for stopping the request flow.
         * @since Chrome 57
         */
        export function stopPinRequest(details: StopPinRequestDetails): Promise<void>;
        export function stopPinRequest(details: StopPinRequestDetails, callback: () => void): void;

        /**
         * This event fires if the certificates set via {@link setCertificates} are insufficient or the browser requests updated information. The extension must call {@link setCertificates} with the updated list of certificates and the received `certificatesRequestId`.
         * @since Chrome 86
         */
        export const onCertificatesUpdateRequested: events.Event<(request: CertificatesUpdateRequest) => void>;

        /**
         * This event fires every time the browser needs to sign a message using a certificate provided by this extension via {@link setCertificates}.
         *
         * The extension must sign the input data from `request` using the appropriate algorithm and private key and return it by calling {@link reportSignature} with the received `signRequestId`.
         * @since Chrome 86
         */
        export const onSignatureRequested: events.Event<(request: SignatureRequest) => void>;
    }

    ////////////////////
    // Commands
    ////////////////////
    /**
     * Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example, an action to open the browser action or send a command to the extension.
     *
     * Manifest: "commands"
     */
    export namespace commands {
        export interface Command {
            /** The name of the Extension Command */
            name?: string;
            /** The Extension Command description */
            description?: string;
            /** The shortcut active for this command, or blank if not active. */
            shortcut?: string;
        }

        /**
         * Returns all the registered extension commands for this extension and their shortcut (if active). Before Chrome 110, this command did not return `_execute_action`.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getAll(): Promise<Command[]>;
        export function getAll(callback: (commands: Command[]) => void): void;

        /** Fired when a registered command is activated using a keyboard shortcut. */
        export const onCommand: events.Event<(command: string, tab?: tabs.Tab) => void>;
    }

    ////////////////////
    // Content Settings
    ////////////////////
    /**
     * Use the `chrome.contentSettings` API to change settings that control whether websites can use features such as cookies, JavaScript, and plugins. More generally speaking, content settings allow you to customize Chrome's behavior on a per-site basis instead of globally.
     *
     * Permissions: "contentSettings"
     */
    export namespace contentSettings {
        /** @since Chrome 113 */
        export enum AutoVerifyContentSetting {
            ALLOW = "allow",
            BLOCK = "block",
        }

        /** @since Chrome 46 */
        export enum CameraContentSetting {
            ALLOW = "allow",
            BLOCK = "block",
            ASK = "ask",
        }

        /** @since Chrome 121 */
        export enum ClipboardContentSetting {
            ALLOW = "allow",
            BLOCK = "block",
            ASK = "ask",
        }

        interface ContentSettingClearParams {
            /** Where to clear the setting (default: regular). */
            scope?: `${Scope}`;
        }

        interface ContentSettingGetParams {
            /** Whether to check the content settings for an incognito session. (default false) */
            incognito?: boolean;
            /** The primary URL for which the content setting should be retrieved. Note that the meaning of a primary URL depends on the content type. */
            primaryUrl: string;
            /** The secondary URL for which the content setting should be retrieved. Defaults to the primary URL. Note that the meaning of a secondary URL depends on the content type, and not all content types use secondary URLs. */
            secondaryUrl?: string;
            /** A more specific identifier of the type of content for which the settings should be retrieved. */
            resourceIdentifier?: ResourceIdentifier;
        }

        interface ContentSettingGetResult<T> {
            /** The content setting. See the description of the individual ContentSetting objects for the possible values. */
            setting: T;
        }

        interface ContentSettingSetParams<T> {
            /** The pattern for the primary URL. For details on the format of a pattern, see Content Setting Patterns. */
            primaryPattern: string;
            /** The resource identifier for the content type. */
            resourceIdentifier?: ResourceIdentifier;
            /** Where to set the setting (default: regular). */
            scope?: `${Scope}`;
            /** The pattern for the secondary URL. Defaults to matching all URLs. For details on the format of a pattern, see Content Setting Patterns.*/
            secondaryPattern?: string;
            /** The setting applied by this rule. See the description of the individual ContentSetting objects for the possible values. */
            setting: T;
        }

        export interface ContentSetting<T extends string> {
            /**
             * Clear all content setting rules set by this extension.
             *
             * Can return its result via Promise since Chrome 96.
             */
            clear(details: ContentSettingClearParams): Promise<void>;
            clear(details: ContentSettingClearParams, callback: () => void): void;

            /**
             * Gets the current content setting for a given pair of URLs.
             *
             * Can return its result via Promise since Chrome 96.
             */
            get(details: ContentSettingGetParams): Promise<ContentSettingGetResult<T>>;
            get(details: ContentSettingGetParams, callback: (details: ContentSettingGetResult<T>) => void): void;

            /** Can return its result via Promise since Chrome 96. */
            getResourceIdentifiers(): Promise<ResourceIdentifier[] | undefined>;
            getResourceIdentifiers(callback: (resourceIdentifiers?: ResourceIdentifier[]) => void): void;

            /**
             * Applies a new content setting rule.
             *
             * Can return its result via Promise since Chrome 96.
             */
            set(details: ContentSettingSetParams<T>): Promise<void>;
            set(details: ContentSettingSetParams<T>, callback: () => void): void;
        }

        /** @since Chrome 44 */
        export enum CookiesContentSetting {
            ALLOW = "allow",
            BLOCK = "block",
            SESSION_ONLY = "session_only",
        }

        /** @since Chrome 44 */
        export enum FullscreenContentSetting {
            ALLOW = "allow",
        }

        /** @since Chrome 44 */
        export enum ImagesContentSetting {
            ALLOW = "allow",
            BLOCK = "block",
        }

        /** @since Chrome 44 */
        export enum JavascriptContentSetting {
            ALLOW = "allow",
            BLOCK = "block",
        }

        /** @since Chrome 44 */
        export enum LocationContentSetting {
            ALLOW = "allow",
            BLOCK = "block",
            ASK = "ask",
        }

        /** @since Chrome 46 */
        export enum MicrophoneContentSetting {
            ALLOW = "allow",
            BLOCK = "block",
            ASK = "ask",
        }

        /** @since Chrome 44 */
        export enum MouselockContentSetting {
            ALLOW = "allow",
        }

        /** @since Chrome 44 */
        export enum MultipleAutomaticDownloadsContentSetting {
            ALLOW = "allow",
            BLOCK = "block",
            ASK = "ask",
        }

        /** @since Chrome 44 */
        export enum NotificationsContentSetting {
            ALLOW = "allow",
            BLOCK = "block",
            ASK = "ask",
        }

        /** @since Chrome 44 */
        export enum PluginsContentSetting {
            BLOCK = "block",
        }

        /** @since Chrome 44 */
        export enum PopupsContentSetting {
            ALLOW = "allow",
            BLOCK = "block",
        }

        /** @since Chrome 44 */
        export enum PpapiBrokerContentSetting {
            BLOCK = "block",
        }

        /** The only content type using resource identifiers is contentSettings.plugins. For more information, see Resource Identifiers. */
        export interface ResourceIdentifier {
            /** A human readable description of the resource.  */
            description?: string;
            /** The resource identifier for the given content type. */
            id: string;
        }

        /**
         * The scope of the ContentSetting. One of
         *
         * `regular`: setting for regular profile (which is inherited by the incognito profile if not overridden elsewhere),
         *
         * `incognito_session_only`: setting for incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular settings).
         * @since Chrome 44
         */
        export enum Scope {
            REGULAR = "regular",
            INCOGNITO_SESSION_ONLY = "incognito_session_only",
        }

        /** @since Chrome 141 */
        export enum SoundContentSetting {
            ALLOW = "allow",
            BLOCK = "block",
        }

        /**
         * Whether to allow sites to download multiple files automatically. One of
         *
         * `allow`: Allow sites to download multiple files automatically,
         *
         * `block`: Don't allow sites to download multiple files automatically,
         *
         * `ask`: Ask when a site wants to download files automatically after the first file.
         *
         * Default is `ask`.
         *
         * The primary URL is the URL of the top-level frame. The secondary URL is not used.
         */
        export const automaticDownloads: ContentSetting<`${MultipleAutomaticDownloadsContentSetting}`>;

        /**
         * Whether to allow sites to use the Private State Tokens API. One of
         *
         * `allow`: Allow sites to use the Private State Tokens API,
         *
         * `block`: Block sites from using the Private State Tokens API.
         *
         * Default is `allow`.
         *
         * When calling `set()`, the primary URL pattern must be `<all_urls>`. The secondary URL is not used.
         * @since Chrome 113
         */
        export const autoVerify: ContentSetting<`${AutoVerifyContentSetting}`>;

        /**
         * Whether to allow sites to access the camera. One of
         *
         * `allow`: Allow sites to access the camera,
         *
         * `block`: Don't allow sites to access the camera,
         *
         * `ask`: Ask when a site wants to access the camera.
         *
         * Default is `ask`.
         *
         * The primary URL is the URL of the document which requested camera access. The secondary URL is not used. NOTE: The 'allow' setting is not valid if both patterns are '<all\_urls>'.
         * @since Chrome 46
         */
        export const camera: ContentSetting<`${CameraContentSetting}`>;

        /**
         * Whether to allow sites to access the clipboard via advanced capabilities of the Async Clipboard API. "Advanced" capabilities include anything besides writing built-in formats after a user gesture, i.e. the ability to read, the ability to write custom formats, and the ability to write without a user gesture. One of
         *
         * `allow`: Allow sites to use advanced clipboard capabilities,
         *
         * `block`: Don't allow sites to use advanced clipboard capabilties,
         *
         * `ask`: Ask when a site wants to use advanced clipboard capabilities.
         *
         * Default is `ask`.
         *
         * The primary URL is the URL of the document which requested clipboard access. The secondary URL is not used.
         * @since Chrome 121
         */
        export const clipboard: ContentSetting<`${ClipboardContentSetting}`>;

        /**
         * Whether to allow cookies and other local data to be set by websites. One of
         *
         * `allow`: Accept cookies,
         *
         * `block`: Block cookies,
         *
         * `session_only`: Accept cookies only for the current session.
         *
         * Default is `allow`.
         *
         * The primary URL is the URL representing the cookie origin. The secondary URL is the URL of the top-level frame.
         */
        export const cookies: ContentSetting<`${CookiesContentSetting}`>;

        /** @deprecated No longer has any effect. Fullscreen permission is now automatically granted for all sites. Value is always `allow`. */
        export const fullscreen: ContentSetting<`${FullscreenContentSetting}`>;

        /**
         * Whether to show images. One of
         *
         * `allow`: Show images,
         *
         * `block`: Don't show images.
         *
         * Default is `allow`.
         *
         * The primary URL is the URL of the top-level frame. The secondary URL is the URL of the image.
         */
        export const images: ContentSetting<`${ImagesContentSetting}`>;

        /**
         * Whether to run JavaScript. One of
         *
         * `allow`: Run JavaScript,
         *
         * `block`: Don't run JavaScript.
         *
         * Default is `allow`.
         *
         * The primary URL is the URL of the top-level frame. The secondary URL is not used.
         */
        export const javascript: ContentSetting<`${JavascriptContentSetting}`>;

        /**
         * Whether to allow Geolocation. One of
         *
         * `allow`: Allow sites to track your physical location,
         *
         * `block`: Don't allow sites to track your physical location,
         *
         * `ask`: Ask before allowing sites to track your physical location.
         *
         * Default is `ask`.
         *
         * The primary URL is the URL of the document which requested location data. The secondary URL is the URL of the top-level frame (which may or may not differ from the requesting URL).
         */
        export const location: ContentSetting<`${LocationContentSetting}`>;

        /**
         * Whether to allow sites to access the microphone. One of
         *
         * `allow`: Allow sites to access the microphone,
         *
         * `block`: Don't allow sites to access the microphone,
         *
         * `ask`: Ask when a site wants to access the microphone.
         *
         * Default is `ask`.
         *
         * The primary URL is the URL of the document which requested microphone access. The secondary URL is not used. NOTE: The 'allow' setting is not valid if both patterns are '<all\_urls>'.
         * @since Chrome 46
         */
        export const microphone: ContentSetting<`${MicrophoneContentSetting}`>;

        /** @deprecated No longer has any effect. Mouse lock permission is now automatically granted for all sites. Value is always `allow`. */
        export const mouselock: ContentSetting<`${MouselockContentSetting}`>;

        /**
         * Whether to allow sites to show desktop notifications. One of
         *
         * `allow`: Allow sites to show desktop notifications,
         *
         * `block`: Don't allow sites to show desktop notifications,
         *
         * `ask`: Ask when a site wants to show desktop notifications.
         *
         * Default is `ask`.
         *
         * The primary URL is the URL of the document which wants to show the notification. The secondary URL is not used.
         */
        export const notifications: ContentSetting<`${NotificationsContentSetting}`>;

        /** @deprecated With Flash support removed in Chrome 88, this permission no longer has any effect. Value is always `block`. Calls to `set()` and `clear()` will be ignored. */
        export const plugins: ContentSetting<`${PluginsContentSetting}`>;

        /**
         * Whether to allow sites to show pop-ups. One of
         *
         * `allow`: Allow sites to show pop-ups,
         *
         * `block`: Don't allow sites to show pop-ups.
         *
         * Default is `block`.
         *
         * The primary URL is the URL of the top-level frame. The secondary URL is not used.
         */
        export const popups: ContentSetting<`${PopupsContentSetting}`>;

        /** @deprecated Previously, controlled whether to allow sites to run plugins unsandboxed, however, with the Flash broker process removed in Chrome 88, this permission no longer has any effect. Value is always `block`. Calls to `set()` and `clear()` will be ignored. */
        export const unsandboxedPlugins: ContentSetting<`${PpapiBrokerContentSetting}`>;
    }

    ////////////////////
    // Context Menus
    ////////////////////
    /**
     * Use the `chrome.contextMenus` API to add items to Google Chrome's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.
     *
     * Permissions: "contextMenus"
     */
    export namespace contextMenus {
        /**
         * The different contexts a menu can appear in. Specifying 'all' is equivalent to the combination of all other contexts except for 'launcher'. The 'launcher' context is only supported by apps and is used to add menu items to the context menu that appears when clicking the app icon in the launcher/taskbar/dock/etc. Different platforms might put limitations on what is actually supported in a launcher context menu.
         * @since Chrome 44
         */
        export enum ContextType {
            ALL = "all",
            PAGE = "page",
            FRAME = "frame",
            SELECTION = "selection",
            LINK = "link",
            EDITABLE = "editable",
            IMAGE = "image",
            VIDEO = "video",
            AUDIO = "audio",
            LAUNCHER = "launcher",
            BROWSER_ACTION = "browser_action",
            PAGE_ACTION = "page_action",
            ACTION = "action",
        }

        /**
         * Properties of the new context menu item.
         * @since Chrome 123
         */
        export interface CreateProperties {
            /** The initial state of a checkbox or radio button: `true` for selected, `false` for unselected. Only one radio button can be selected at a time in a given group. */
            checked?: boolean;
            /** List of contexts this menu item will appear in. Defaults to `['page']`. */
            contexts?: [`${ContextType}`, ...`${ContextType}`[]];
            /** Restricts the item to apply only to documents or frames whose URL matches one of the given patterns. For details on pattern formats, see Match Patterns.  */
            documentUrlPatterns?: string[];
            /**  Whether this context menu item is enabled or disabled. Defaults to `true`. */
            enabled?: boolean;
            /** The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension. */
            id?: string;
            /**  The ID of a parent menu item; this makes the item a child of a previously added item. */
            parentId?: number | string;
            /**  Similar to `documentUrlPatterns`, filters based on the `src` attribute of `img`, `audio`, and `video` tags and the `href` attribute of `a` tags. */
            targetUrlPatterns?: string[];
            /** The text to display in the item; this is _required_ unless `type` is `separator`. When the context is `selection`, use `%s` within the string to show the selected text. For example, if this parameter's value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the selection is "Translate 'cool' to Pig Latin". */
            title?: string;
            /** The type of menu item. Defaults to `normal`. */
            type?: `${ItemType}`;
            /** Whether the item is visible in the menu. */
            visible?: boolean;
            /**
             * A function that is called back when the menu item is clicked. This is not available inside of a service worker; instead, you should register a listener for {@link contextMenus.onClicked}.
             * @param info Information about the item clicked and the context where the click happened.
             * @param tab The details of the tab where the click took place. This parameter is not present for platform apps.
             */
            onclick?: (
                info: OnClickData,
                tab: tabs.Tab,
            ) => void;
        }

        /**
         * The type of menu item.
         * @since Chrome 44
         */
        export enum ItemType {
            NORMAL = "normal",
            CHECKBOX = "checkbox",
            RADIO = "radio",
            SEPARATOR = "separator",
        }

        /** Information sent when a context menu item is clicked. */
        export interface OnClickData {
            /** A flag indicating the state of a checkbox or radio item after it is clicked. */
            checked?: boolean;
            /**  A flag indicating whether the element is editable (text input, textarea, etc.). */
            editable: boolean;
            /**
             * The ID of the frame of the element where the context menu was clicked, if it was in a frame.
             * @since Chrome 51
             */
            frameId?: number;
            /** The URL of the frame of the element where the context menu was clicked, if it was in a frame. */
            frameUrl?: string;
            /** If the element is a link, the URL it points to. */
            linkUrl?: string;
            /** One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements. */
            mediaType?: `${ContextType.IMAGE}` | `${ContextType.VIDEO}` | `${ContextType.AUDIO}`;
            /** The ID of the menu item that was clicked. */
            menuItemId: number | string;
            /** The URL of the page where the menu item was clicked. This property is not set if the click occurred in a context where there is no current page, such as in a launcher context menu. */
            pageUrl?: string;
            /** The parent ID, if any, for the item clicked.*/
            parentMenuItemId?: number | string;
            /** The text for the context selection, if any. */
            selectionText?: string | undefined;
            /** Will be present for elements with a 'src' URL. */
            srcUrl?: string | undefined;
            /** A flag indicating the state of a checkbox or radio item before it was clicked. */
            wasChecked?: boolean | undefined;
        }

        /** The maximum number of top level extension items that can be added to an extension action context menu. Any items beyond this limit will be ignored. */
        export const ACTION_MENU_TOP_LEVEL_LIMIT: 6;

        /**
         * Creates a new context menu item. If an error occurs during creation, it may not be detected until the creation callback fires; details will be in {@link chrome.runtime.lastError}.
         * @return The ID of the newly created item.
         */
        export function create(createProperties: CreateProperties, callback?: () => void): number | string;

        /**
         * Removes a context menu item.
         * @param menuItemId The ID of the context menu item to remove.
         *
         * Can return its result via Promise since Chrome 123.
         */
        export function remove(menuItemId: string | number): Promise<void>;
        export function remove(menuItemId: string | number, callback: () => void): void;

        /**
         * Removes all context menu items added by this extension.
         *
         * Can return its result via Promise since Chrome 123.
         */
        export function removeAll(): Promise<void>;
        export function removeAll(callback: () => void): void;

        /**
         * Updates a previously created context menu item.
         * @param id The ID of the item to update.
         * @param updateProperties The properties to update. Accepts the same values as the {@link contextMenus.create} function.
         *
         * Can return its result via Promise since Chrome 123.
         */
        export function update(id: string | number, updateProperties: Omit<CreateProperties, "id">): Promise<void>;
        export function update(
            id: string | number,
            updateProperties: Omit<CreateProperties, "id">,
            callback: () => void,
        ): void;

        /** Fired when a context menu item is clicked. */
        export const onClicked: events.Event<(info: OnClickData, tab?: tabs.Tab) => void>;
    }

    ////////////////////
    // Cookies
    ////////////////////
    /**
     * Use the `chrome.cookies` API to query and modify cookies, and to be notified when they change.
     *
     * Permissions: "cookies"
     *
     * Manifest: "host_permissions"
     */
    export namespace cookies {
        /** A cookie's 'SameSite' state (https://tools.ietf.org/html/draft-west-first-party-cookies). 'no_restriction' corresponds to a cookie set with 'SameSite=None', 'lax' to 'SameSite=Lax', and 'strict' to 'SameSite=Strict'. 'unspecified' corresponds to a cookie set without the SameSite attribute. **/
        export enum SameSiteStatus {
            NO_RESTRICTION = "no_restriction",
            LAX = "lax",
            STRICT = "strict",
            UNSPECIFIED = "unspecified",
        }

        /** Represents information about an HTTP cookie. */
        export interface Cookie {
            /** The domain of the cookie (e.g. "www.google.com", "example.com"). */
            domain: string;
            /** The name of the cookie. */
            name: string;
            /**
             * The partition key for reading or modifying cookies with the Partitioned attribute.
             * @since Chrome 119
             */
            partitionKey?: CookiePartitionKey;
            /** The ID of the cookie store containing this cookie, as provided in getAllCookieStores(). */
            storeId: string;
            /** The value of the cookie. */
            value: string;
            /** True if the cookie is a session cookie, as opposed to a persistent cookie with an expiration date. */
            session: boolean;
            /** True if the cookie is a host-only cookie (i.e. a request's host must exactly match the domain of the cookie). */
            hostOnly: boolean;
            /** The expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session cookies. */
            expirationDate?: number;
            /** The path of the cookie. */
            path: string;
            /** True if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to client-side scripts). */
            httpOnly: boolean;
            /** True if the cookie is marked as Secure (i.e. its scope is limited to secure channels, typically HTTPS). */
            secure: boolean;
            /**
             * The cookie's same-site status (i.e. whether the cookie is sent with cross-site requests).
             * @since Chrome 51
             */
            sameSite: `${SameSiteStatus}`;
        }

        /**
         * Represents a partitioned cookie's partition key.
         * @since Chrome 119
         */
        export interface CookiePartitionKey {
            /**
             * Indicates if the cookie was set in a cross-cross site context. This prevents a top-level site embedded in a cross-site context from accessing cookies set by the top-level site in a same-site context.
             * @since Chrome 130
             */
            hasCrossSiteAncestor?: boolean | undefined;
            /** The top-level site the partitioned cookie is available in. */
            topLevelSite?: string | undefined;
        }

        /** Represents a cookie store in the browser. An incognito mode window, for instance, uses a separate cookie store from a non-incognito window. */
        export interface CookieStore {
            /** The unique identifier for the cookie store. */
            id: string;
            /** Identifiers of all the browser tabs that share this cookie store. */
            tabIds: number[];
        }

        export interface GetAllDetails {
            /** Restricts the retrieved cookies to those whose domains match or are subdomains of this one. */
            domain?: string | undefined;
            /** Filters the cookies by name. */
            name?: string | undefined;
            /**
             * The partition key for reading or modifying cookies with the Partitioned attribute.
             * @since Chrome 119
             */
            partitionKey?: CookiePartitionKey | undefined;
            /** Restricts the retrieved cookies to those that would match the given URL. */
            url?: string | undefined;
            /** The cookie store to retrieve cookies from. If omitted, the current execution context's cookie store will be used. */
            storeId?: string | undefined;
            /** Filters out session vs. persistent cookies. */
            session?: boolean | undefined;
            /** Restricts the retrieved cookies to those whose path exactly matches this string. */
            path?: string | undefined;
            /** Filters the cookies by their Secure property. */
            secure?: boolean | undefined;
        }

        export interface SetDetails {
            /** The domain of the cookie. If omitted, the cookie becomes a host-only cookie. */
            domain?: string | undefined;
            /** The name of the cookie. Empty by default if omitted. */
            name?: string | undefined;
            /**
             * The partition key for reading or modifying cookies with the Partitioned attribute.
             * @since Chrome 119
             */
            partitionKey?: CookiePartitionKey | undefined;
            /** The request-URI to associate with the setting of the cookie. This value can affect the default domain and path values of the created cookie. If host permissions for this URL are not specified in the manifest file, the API call will fail. */
            url: string;
            /** The ID of the cookie store in which to set the cookie. By default, the cookie is set in the current execution context's cookie store. */
            storeId?: string | undefined;
            /** The value of the cookie. Empty by default if omitted. */
            value?: string | undefined;
            /** The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted, the cookie becomes a session cookie. */
            expirationDate?: number | undefined;
            /** The path of the cookie. Defaults to the path portion of the url parameter. */
            path?: string | undefined;
            /** Whether the cookie should be marked as HttpOnly. Defaults to false. */
            httpOnly?: boolean | undefined;
            /** Whether the cookie should be marked as Secure. Defaults to false. */
            secure?: boolean | undefined;
            /**
             * The cookie's same-site status. Defaults to "unspecified", i.e., if omitted, the cookie is set without specifying a SameSite attribute.
             * @since Chrome 51
             */
            sameSite?: `${SameSiteStatus}` | undefined;
        }

        /**
         * Details to identify the cookie.
         * @since Chrome 88
         */
        export interface CookieDetails {
            /** The name of the cookie to access. */
            name: string;
            /**
             * The partition key for reading or modifying cookies with the Partitioned attribute.
             * @since Chrome 119
             */
            partitionKey?: CookiePartitionKey | undefined;
            /** The ID of the cookie store in which to look for the cookie. By default, the current execution context's cookie store will be used. */
            storeId?: string | undefined;
            /** The URL with which the cookie to access is associated. This argument may be a full URL, in which case any data following the URL path (e.g. the query string) is simply ignored. If host permissions for this URL are not specified in the manifest file, the API call will fail. */
            url: string;
        }

        export interface CookieChangeInfo {
            /** Information about the cookie that was set or removed. */
            cookie: Cookie;
            /** True if a cookie was removed. */
            removed: boolean;
            /** The underlying reason behind the cookie's change. */
            cause: `${OnChangedCause}`;
        }

        /**
         * Details to identify the frame.
         * @since Chrome 132
         */
        export interface FrameDetails {
            /** The unique identifier for the document. If the frameId and/or tabId are provided they will be validated to match the document found by provided document ID. */
            documentId?: string | undefined;
            /** The unique identifier for the frame within the tab. */
            frameId?: number | undefined;
            /* The unique identifier for the tab containing the frame. */
            tabId?: number | undefined;
        }

        /**
         * The underlying reason behind the cookie's change. If a cookie was inserted, or removed via an explicit call to "chrome.cookies.remove", "cause" will be "explicit". If a cookie was automatically removed due to expiry, "cause" will be "expired". If a cookie was removed due to being overwritten with an already-expired expiration date, "cause" will be set to "expired_overwrite". If a cookie was automatically removed due to garbage collection, "cause" will be "evicted". If a cookie was automatically removed due to a "set" call that overwrote it, "cause" will be "overwrite". Plan your response accordingly.
         * @since Chrome 44
         */
        export enum OnChangedCause {
            EVICTED = "evicted",
            EXPIRED = "expired",
            EXPLICIT = "explicit",
            EXPIRED_OVERWRITE = "expired_overwrite",
            OVERWRITE = "overwrite",
        }

        /**
         * Lists all existing cookie stores.
         *
         * Can return its result via Promise in Manifest V3 or later.
         */
        export function getAllCookieStores(): Promise<CookieStore[]>;
        export function getAllCookieStores(callback: (cookieStores: CookieStore[]) => void): void;

        /**
         * The partition key for the frame indicated.
         *
         * Can return its result via Promise in Manifest V3 or later.
         * @since Chrome 132
         */
        export function getPartitionKey(details: FrameDetails): Promise<{ partitionKey: CookiePartitionKey }>;
        export function getPartitionKey(
            details: FrameDetails,
            callback: (details: { partitionKey: CookiePartitionKey }) => void,
        ): void;

        /**
         * Retrieves all cookies from a single cookie store that match the given information. The cookies returned will be sorted, with those with the longest path first. If multiple cookies have the same path length, those with the earliest creation time will be first. This method only retrieves cookies for domains that the extension has host permissions to
         * @param details Information to identify the cookie to remove.
         *
         * Can return its result via Promise in Manifest V3 or later.
         */
        export function getAll(details: GetAllDetails): Promise<Cookie[]>;
        export function getAll(details: GetAllDetails, callback: (cookies: Cookie[]) => void): void;

        /**
         * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
         * @param details Details about the cookie being set.
         *
         * Can return its result via Promise in Manifest V3 or later.
         */
        export function set(details: SetDetails): Promise<Cookie | null>;
        export function set(details: SetDetails, callback: (cookie: Cookie | null) => void): void;

        /**
         * Deletes a cookie by name.
         *
         * Can return its result via Promise in Manifest V3 or later.
         */
        export function remove(details: CookieDetails): Promise<CookieDetails>;
        export function remove(details: CookieDetails, callback?: (details: CookieDetails) => void): void;

        /**
         * Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL, the one with the longest path will be returned. For cookies with the same path length, the cookie with the earliest creation time will be returned.
         *
         * Can return its result via Promise in Manifest V3 or later.
         */
        export function get(details: CookieDetails): Promise<Cookie | null>;
        export function get(details: CookieDetails, callback: (cookie: Cookie | null) => void): void;

        /** Fired when a cookie is set or removed. As a special case, note that updating a cookie's properties is implemented as a two step process: the cookie to be updated is first removed entirely, generating a notification with "cause" of "overwrite" . Afterwards, a new cookie is written with the updated values, generating a second notification with "cause" "explicit". */
        export const onChanged: events.Event<(changeInfo: CookieChangeInfo) => void>;
    }

    ////////////////////
    // Debugger
    ////////////////////
    /**
     * The `chrome.debugger` API serves as an alternate transport for Chrome's remote debugging protocol. Use `chrome.debugger` to attach to one or more tabs to instrument network interaction, debug JavaScript, mutate the DOM and CSS, and more. Use the {@link Debuggee} `tabId` to target tabs with `sendCommand` and route events by `tabId` from `onEvent` callbacks.
     *
     * Permissions: "debugger"
     */
    export namespace _debugger {
        /** Debuggee identifier. Either tabId, extensionId or targetId must be specified */
        export interface Debuggee {
            /** The id of the tab which you intend to debug. */
            tabId?: number;
            /** The id of the extension which you intend to debug. Attaching to an extension background page is only possible when the `--silent-debugger-extension-api` command-line switch is used. */
            extensionId?: string;
            /** The opaque id of the debug target. */
            targetId?: string;
        }

        /**
         * Debugger session identifier. One of tabId, extensionId or targetId must be specified. Additionally, an optional sessionId can be provided. If sessionId is specified for arguments sent from {@link onEvent}, it means the event is coming from a child protocol session within the root debuggee session. If sessionId is specified when passed to {@link sendCommand}, it targets a child protocol session within the root debuggee session.
         * @since Chrome 125
         */
        export interface DebuggerSession {
            /** The id of the extension which you intend to debug. Attaching to an extension background page is only possible when the `--silent-debugger-extension-api` command-line switch is used.*/
            extensionId?: string;
            /** The opaque id of the Chrome DevTools Protocol session. Identifies a child session within the root session identified by tabId, extensionId or targetId. */
            sessionId?: string;
            /** The id of the tab which you intend to debug. */
            tabId?: number;
            /** The opaque id of the debug target. */
            targetId?: string;
        }

        /**
         * Connection termination reason.
         * @since Chrome 44
         */
        export enum DetachReason {
            CANCELED_BY_USER = "canceled_by_user",
            TARGET_CLOSED = "target_closed",
        }

        /** Debug target information */
        export interface TargetInfo {
            /** Target type. */
            type: `${TargetInfoType}`;
            /** Target id. */
            id: string;
            /** The tab id, defined if type == 'page'. */
            tabId?: number;
            /** The extension id, defined if type = 'background_page'. */
            extensionId?: string;
            /** True if debugger is already attached. */
            attached: boolean;
            /** Target page title. */
            title: string;
            /** Target URL. */
            url: string;
            /** Target favicon URL.  */
            faviconUrl?: string;
        }

        /**
         * Target type.
         * @since Chrome 44
         */
        export enum TargetInfoType {
            BACKGROUND_PAGE = "background_page",
            OTHER = "other",
            PAGE = "page",
            WORKER = "worker",
        }

        /**
         * Attaches debugger to the given target.
         * @param target Debugging target to which you want to attach.
         * @param requiredVersion Required debugging protocol version ("0.1"). One can only attach to the debuggee with matching major version and greater or equal minor version. List of the protocol versions can be obtained in the documentation pages.
         *
         * Can return its result via Promise since Chrome 96.
         */
        export function attach(target: Debuggee, requiredVersion: string): Promise<void>;
        export function attach(target: Debuggee, requiredVersion: string, callback: () => void): void;

        /**
         * Detaches debugger from the given target.
         * @param target Debugging target from which you want to detach.
         *
         * Can return its result via Promise since Chrome 96.
         */
        export function detach(target: Debuggee): Promise<void>;
        export function detach(target: Debuggee, callback: () => void): void;

        /**
         * Sends given command to the debugging target.
         * @param target Debugging target to which you want to send the command.
         * @param method Method name. Should be one of the methods defined by the remote debugging protocol.
         * @param commandParams JSON object with request parameters. This object must conform to the remote debugging params scheme for given method.
         *
         * Can return its result via Promise since Chrome 96.
         */
        export function sendCommand(
            target: DebuggerSession,
            method: string,
            commandParams?: { [key: string]: unknown },
        ): Promise<object | undefined>;
        export function sendCommand(
            target: DebuggerSession,
            method: string,
            commandParams?: { [key: string]: unknown },
            callback?: (result?: object) => void,
        ): void;

        /**
         * Returns the list of available debug targets.
         *
         * Can return its result via Promise since Chrome 96.
         */
        export function getTargets(): Promise<TargetInfo[]>;
        export function getTargets(callback: (result: TargetInfo[]) => void): void;

        /** Fired when browser terminates debugging session for the tab. This happens when either the tab is being closed or Chrome DevTools is being invoked for the attached tab. */
        export const onDetach: chrome.events.Event<(source: Debuggee, reason: `${DetachReason}`) => void>;
        /** Fired whenever debugging target issues instrumentation event. */
        export const onEvent: chrome.events.Event<(source: DebuggerSession, method: string, params?: object) => void>;
    }

    export { _debugger as debugger };

    ////////////////////
    // Declarative Content
    ////////////////////
    /**
     * Use the `chrome.declarativeContent` API to take actions depending on the content of a page, without requiring permission to read the page's content.
     *
     * Permissions: "declarativeContent"
     */
    export namespace declarativeContent {
        interface PageStateMatcherProperties {
            /** Matches if the conditions of the `UrlFilter` are fulfilled for the top-level URL of the page. */
            pageUrl?: events.UrlFilter | undefined;
            /** Matches if all of the CSS selectors in the array match displayed elements in a frame with the same origin as the page's main frame. All selectors in this array must be compound selectors to speed up matching. Note: Listing hundreds of CSS selectors or listing CSS selectors that match hundreds of times per page can slow down web sites. */
            css?: string[] | undefined;
            /**
             * Matches if the bookmarked state of the page is equal to the specified value. Requires the bookmarks permission.
             * @since Chrome 45
             */
            isBookmarked?: boolean | undefined;
        }

        /** Matches the state of a web page based on various criteria. */
        export class PageStateMatcher {
            constructor(arg: PageStateMatcherProperties);
        }

        export interface RequestContentScriptProperties {
            /** Whether the content script runs in all frames of the matching page, or in only the top frame. Default is `false`. */
            allFrames?: boolean | undefined;

            /** Names of CSS files to be injected as a part of the content script. */
            css?: string[] | undefined;

            /** Names of JavaScript files to be injected as a part of the content script. */
            js?: string[] | undefined;

            /** Whether to insert the content script on `about:blank` and `about:srcdoc`. Default is `false`. */
            matchAboutBlank?: boolean | undefined;
        }

        /** Declarative event action that injects a content script. */
        export class RequestContentScript {
            constructor(arg: RequestContentScriptProperties);
        }

        /**
         * A declarative event action that sets the extension's toolbar {@link action} to an enabled state while the corresponding conditions are met. This action can be used without host permissions. If the extension has the `activeTab` permission, clicking the page action grants access to the active tab.
         *
         * On pages where the conditions are not met the extension's toolbar action will be grey-scale, and clicking it will open the context menu, instead of triggering the action.
         * @since MV3
         */
        export class ShowAction {}

        /**
         * A declarative event action that sets the extension's {@link pageAction} to an enabled state while the corresponding conditions are met. This action can be used without host permissions, but the extension must have a page action. If the extension has the `activeTab` permission, clicking the page action grants access to the active tab.
         *
         * On pages where the conditions are not met the extension's toolbar action will be grey-scale, and clicking it will open the context menu, instead of triggering the action.
         *
         * MV2 only
         */
        export class ShowPageAction {}

        /**
         * Declarative event action that sets the n-dip square icon for the extension's {@link pageAction} or {@link browserAction} while the corresponding conditions are met. This action can be used without host permissions, but the extension must have a page or browser action.
         *
         * Exactly one of `imageData` or `path` must be specified. Both are dictionaries mapping a number of pixels to an image representation. The image representation in `imageData` is an `ImageData` object; for example, from a `canvas` element, while the image representation in `path` is the path to an image file relative to the extension's manifest. If `scale` screen pixels fit into a device-independent pixel, the `scale * n` icon is used. If that scale is missing, another image is resized to the required size.
         */
        export class SetIcon {
            constructor(options?: { imageData?: ImageData | { [size: string]: ImageData } | undefined });
        }

        /** Provides the Declarative Event API consisting of {@link events.Event.addRules addRules}, {@link events.Event.removeRules removeRules}, and {@link events.Event.getRules getRules}. */
        export const onPageChanged: events.Event<() => void>;
    }

    ////////////////////
    // Declarative Web Request
    ////////////////////
    /**
     * Use the `chrome.declarativeWebRequest` API to intercept, block, or modify requests in-flight. It is significantly faster than the chrome.webRequest API because you can register rules that are evaluated in the browser rather than the JavaScript engine, which reduces roundtrip latencies and allows higher efficiency.
     *
     * Permissions: "declarativeWebRequest"
     *
     * MV2 only
     * @deprecated Check out the {@link declarativeNetRequest} API instead
     */
    export namespace declarativeWebRequest {
        /** Filters request headers for various criteria. Multiple criteria are evaluated as a conjunction. */
        export interface HeaderFilter {
            /** Matches if the header name is equal to the specified string. */
            nameEquals?: string | undefined;
            /** Matches if the header value contains all of the specified strings. */
            valueContains?: string | string[] | undefined;
            /** Matches if the header name ends with the specified string. */
            nameSuffix?: string | undefined;
            /** Matches if the header value ends with the specified string. */
            valueSuffix?: string | undefined;
            /** Matches if the header value starts with the specified string. */
            valuePrefix?: string | undefined;
            /** Matches if the header name contains all of the specified strings. */
            nameContains?: string | string[] | undefined;
            /** Matches if the header value is equal to the specified string. */
            valueEquals?: string | undefined;
            /** Matches if the header name starts with the specified string. */
            namePrefix?: string | undefined;
        }

        /** Adds the response header to the response of this web request. As multiple response headers may share the same name, you need to first remove and then add a new response header in order to replace one. */
        export interface AddResponseHeader {
            /** HTTP response header name. */
            name: string;
            /** HTTP response header value. */
            value: string;
        }

        /** Removes one or more cookies of response. Note that it is preferred to use the Cookies API because this is computationally less expensive. */
        export interface RemoveResponseCookie {
            /** Filter for cookies that will be removed. All empty entries are ignored. */
            filter: FilterResponseCookie;
        }

        /** Removes all response headers of the specified names and values. */
        export interface RemoveResponseHeader {
            /** HTTP request header name (case-insensitive). */
            name: string;
            /** HTTP request header value (case-insensitive). */
            value?: string | undefined;
        }

        /** Matches network events by various criteria. */
        export interface RequestMatcher {
            /** Matches if the MIME media type of a response (from the HTTP Content-Type header) is contained in the list. */
            contentType?: string[] | undefined;
            /** Matches if the conditions of the UrlFilter are fulfilled for the URL of the request. */
            url?: events.UrlFilter | undefined;
            /** Matches if the MIME media type of a response (from the HTTP Content-Type header) is not contained in the list. */
            excludeContentType?: string[] | undefined;
            /** Matches if none of the request headers is matched by any of the HeaderFilters. */
            excludeResponseHeaders?: HeaderFilter[] | undefined;
            /** Matches if none of the response headers is matched by any of the HeaderFilters. */
            excludeResponseHeader?: HeaderFilter[] | undefined;
            /**
             * Matches if the conditions of the UrlFilter are fulfilled for the 'first party' URL of the request. The 'first party' URL of a request, when present, can be different from the request's target URL, and describes what is considered 'first party' for the sake of third-party checks for cookies.
             * @deprecated since Chrome 82
             */
            firstPartyForCookiesUrl?: events.UrlFilter | undefined;
            /** Matches if some of the request headers is matched by one of the HeaderFilters. */
            requestHeaders?: HeaderFilter[] | undefined;
            /** Matches if the request type of a request is contained in the list. Requests that cannot match any of the types will be filtered out. */
            resourceType?: `${webRequest.ResourceType}`[] | undefined;
            /** Matches if some of the response headers is matched by one of the HeaderFilters. */
            responseHeaders?: HeaderFilter[] | undefined;
            /** Contains a list of strings describing stages. Allowed values are 'onBeforeRequest', 'onBeforeSendHeaders', 'onHeadersReceived', 'onAuthRequired'. If this attribute is present, then it limits the applicable stages to those listed. Note that the whole condition is only applicable in stages compatible with all attributes. */
            stages?: `${Stage}`[] | undefined;
            /**
             * If set to true, matches requests that are subject to third-party cookie policies. If set to false, matches all other requests.
             * @deprecated since Chrome 87
             */
            thirdPartyForCookies?: boolean | undefined;
        }

        /** Masks all rules that match the specified criteria. */
        export interface IgnoreRules {
            /** If set, rules with the specified tag are ignored. This ignoring is not persisted, it affects only rules and their actions of the same network request stage. Note that rules are executed in descending order of their priorities. This action affects rules of lower priority than the current rule. Rules with the same priority may or may not be ignored. */
            hasTag?: string | undefined;
            /** If set, rules with a lower priority than the specified value are ignored. This boundary is not persisted, it affects only rules and their actions of the same network request stage. */
            lowerPriorityThan?: number | undefined;
        }

        /** Declarative event action that redirects a network request to an empty document. */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        export interface RedirectToEmptyDocument {}

        /** Declarative event action that redirects a network request. */
        export interface RedirectRequest {
            /** Destination to where the request is redirected. */
            redirectUrl: string;
        }

        /** A specification of a cookie in HTTP Responses. */
        export interface ResponseCookie {
            /** Value of the Domain cookie attribute. */
            domain?: string | undefined;
            /** Name of a cookie. */
            name?: string | undefined;
            /** Value of the Expires cookie attribute. */
            expires?: string | undefined;
            /** Value of the Max-Age cookie attribute */
            maxAge?: number | undefined;
            /** Value of a cookie, may be padded in double-quotes. */
            value?: string | undefined;
            /** Value of the Path cookie attribute. */
            path?: string | undefined;
            /** Existence of the HttpOnly cookie attribute. */
            httpOnly?: string | undefined;
            /** Existence of the Secure cookie attribute. */
            secure?: string | undefined;
        }

        /** Adds a cookie to the response or overrides a cookie, in case another cookie of the same name exists already. Note that it is preferred to use the Cookies API because this is computationally less expensive. */
        export interface AddResponseCookie {
            cookie: ResponseCookie;
        }

        /** Edits one or more cookies of response. Note that it is preferred to use the Cookies API because this is computationally less expensive. */
        export interface EditResponseCookie {
            /** Filter for cookies that will be modified. All empty entries are ignored. */
            filter: ResponseCookie;
            /** Attributes that shall be overridden in cookies that machted the filter. Attributes that are set to an empty string are removed. */
            modification: ResponseCookie;
        }

        /** Declarative event action that cancels a network request. */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        export interface CancelRequest {}

        /** Removes the request header of the specified name. Do not use SetRequestHeader and RemoveRequestHeader with the same header name on the same request. Each request header name occurs only once in each request. */
        export interface RemoveRequestHeader {
            /** HTTP request header name (case-insensitive). */
            name: string;
        }

        /** Edits one or more cookies of request. Note that it is preferred to use the Cookies API because this is computationally less expensive. */
        export interface EditRequestCookie {
            /** Filter for cookies that will be modified. All empty entries are ignored. */
            filter: RequestCookie;
            /** Attributes that shall be overridden in cookies that machted the filter. Attributes that are set to an empty string are removed. */
            modification: RequestCookie;
        }

        /** A filter of a cookie in HTTP Responses. */
        export interface FilterResponseCookie {
            /** Inclusive lower bound on the cookie lifetime (specified in seconds after current time). Only cookies whose expiration date-time is set to 'now + ageLowerBound' or later fulfill this criterion. Session cookies do not meet the criterion of this filter. The cookie lifetime is calculated from either 'max-age' or 'expires' cookie attributes. If both are specified, 'max-age' is used to calculate the cookie lifetime. */
            ageLowerBound?: number | undefined;
            /** Inclusive upper bound on the cookie lifetime (specified in seconds after current time). Only cookies whose expiration date-time is in the interval [now, now + ageUpperBound] fulfill this criterion. Session cookies and cookies whose expiration date-time is in the past do not meet the criterion of this filter. The cookie lifetime is calculated from either 'max-age' or 'expires' cookie attributes. If both are specified, 'max-age' is used to calculate the cookie lifetime. */
            ageUpperBound?: number | undefined;
            /** Value of the Domain cookie attribute. */
            domain?: string | undefined;
            /** Value of the Expires cookie attribute. */
            expires?: string | undefined;
            /** Existence of the HttpOnly cookie attribute. */
            httpOnly?: string | undefined;
            /** Value of the Max-Age cookie attribute */
            maxAge?: number | undefined;
            /** Name of a cookie. */
            name?: string | undefined;
            /** Value of the Path cookie attribute. */
            path?: string | undefined;
            /** Existence of the Secure cookie attribute. */
            secure?: string | undefined;
            /** Filters session cookies. Session cookies have no lifetime specified in any of 'max-age' or 'expires' attributes. */
            session?: boolean | undefined;
            /** Value of a cookie, may be padded in double-quotes. */
            value?: string | undefined;
        }

        /** Sets the request header of the specified name to the specified value. If a header with the specified name did not exist before, a new one is created. Header name comparison is always case-insensitive. Each request header name occurs only once in each request. */
        export interface SetRequestHeader {
            /** HTTP request header name. */
            name: string;
            /** HTTP request header value. */
            value: string;
        }

        /** A filter or specification of a cookie in HTTP Requests. */
        export interface RequestCookie {
            /** Name of a cookie. */
            name?: string | undefined;
            /** Value of a cookie, may be padded in double-quotes. */
            value?: string | undefined;
        }

        /** Redirects a request by applying a regular expression on the URL. The regular expressions use the RE2 syntax. */
        export interface RedirectByRegEx {
            /** Destination pattern. */
            to: string;
            /** A match pattern that may contain capture groups. Capture groups are referenced in the Perl syntax ($1, $2, ...) instead of the RE2 syntax (\1, \2, ...) in order to be closer to JavaScript Regular Expressions. */
            from: string;
        }

        /** Declarative event action that redirects a network request to a transparent image. */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        export interface RedirectToTransparentImage {}

        /** Adds a cookie to the request or overrides a cookie, in case another cookie of the same name exists already. Note that it is preferred to use the Cookies API because this is computationally less expensive. */
        export interface AddRequestCookie {
            cookie: RequestCookie;
        }

        /** Removes one or more cookies of request. Note that it is preferred to use the Cookies API because this is computationally less expensive. */
        export interface RemoveRequestCookie {
            /** Filter for cookies that will be removed. All empty entries are ignored. */
            filter: RequestCookie;
        }

        export enum Stage {
            ON_AUTH_REQUIRED = "onAuthRequired",
            ON_BEFORE_REQUEST = "onBeforeRequest",
            ON_BEFORE_SEND_HEADERS = "onBeforeSendHeaders",
            ON_HEADERS_RECEIVED = "onHeadersReceived",
        }

        export interface MessageDetails {
            /** A UUID of the document that made the request. */
            documentId?: string;
            /** The lifecycle the document is in. */
            documentLifecycle: extensionTypes.DocumentLifecycle;
            /** The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab. */
            frameId: number;
            /** The type of frame the navigation occurred in. */
            frameType: extensionTypes.FrameType;
            /** The message sent by the calling script. */
            message: string;
            /** Standard HTTP method. */
            method: string;
            /** A UUID of the parent document owning this frame. This is not set if there is no parent. */
            parentDocumentId?: string;
            /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
            parentFrameId: number;
            /** The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request. */
            requestId: string;
            /** The stage of the network request during which the event was triggered. */
            stage: `${Stage}`;
            /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
            tabId: number;
            /** The time when this signal is triggered, in milliseconds since the epoch. */
            timeStamp: number;
            /** How the requested resource will be used. */
            type: `${webRequest.ResourceType}`;
            url: string;
        }

        export interface SendMessageToExtension {
            /** The value that will be passed in the message attribute of the dictionary that is passed to the event handler. */
            message: string;
        }

        /** Fired when a message is sent via {@link declarativeWebRequest.SendMessageToExtension} from an action of the declarative web request API. */
        export const onMessage: events.Event<(details: MessageDetails) => void>;

        /** Provides the Declarative Event API consisting of `addRules`, `removeRules`, and `getRules`. */
        export const onRequest: events.Event<() => void>;
    }

    ////////////////////
    // DesktopCapture
    ////////////////////
    /**
     * The Desktop Capture API captures the content of the screen, individual windows, or individual tabs.
     *
     * Permissions: "desktopCapture"
     */
    export namespace desktopCapture {
        /** Enum used to define set of desktop media sources used in {@link chooseDesktopMedia}. */
        export enum DesktopCaptureSourceType {
            SCREEN = "screen",
            WINDOW = "window",
            TAB = "tab",
            AUDIO = "audio",
        }

        /**
         * Contains properties that describe the stream.
         * @since Chrome 57
         */
        export interface StreamOptions {
            /** True if "audio" is included in parameter sources, and the end user does not uncheck the "Share audio" checkbox. Otherwise false, and in this case, one should not ask for audio stream through getUserMedia call. */
            canRequestAudioTrack: boolean;
        }
        /**
         * Shows desktop media picker UI with the specified set of sources.
         * @param sources Set of sources that should be shown to the user. The sources order in the set decides the tab order in the picker.
         * @param targetTab Optional tab for which the stream is created. If not specified then the resulting stream can be used only by the calling extension. The stream can only be used by frames in the given tab whose security origin matches `tab.url`. The tab's origin must be a secure origin, e.g. HTTPS.
         * @param callback streamId: An opaque string that can be passed to `getUserMedia()` API to generate media stream that corresponds to the source selected by the user. If user didn't select any source (i.e. canceled the prompt) then the callback is called with an empty `streamId`. The created `streamId` can be used only once and expires after a few seconds when it is not used.
         * @return An id that can be passed to cancelChooseDesktopMedia() in case the prompt need to be canceled.
         */
        export function chooseDesktopMedia(
            sources: `${DesktopCaptureSourceType}`[],
            callback: (streamId: string, options: StreamOptions) => void,
        ): number;
        export function chooseDesktopMedia(
            sources: `${DesktopCaptureSourceType}`[],
            targetTab: tabs.Tab | undefined,
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
     * Use the `chrome.devtools.inspectedWindow` API to interact with the inspected window: obtain the tab ID for the inspected page, evaluate the code in the context of the inspected window, reload the page, or obtain the list of resources within the page.
     *
     * Manifest: "devtools_page"
     */
    export namespace devtools.inspectedWindow {
        /** A resource within the inspected page, such as a document, a script, or an image. */
        export interface Resource {
            /** The URL of the resource. */
            url: string;
            /** Gets the content of the resource. */
            getContent(
                callback: (
                    /** Content of the resource (potentially encoded). */
                    content: string,
                    /** Empty if the content is not encoded, encoding name otherwise. Currently, only base64 is supported. */
                    encoding: string,
                ) => void,
            ): void;
            /**
             * Sets the content of the resource.
             * @param content New content of the resource. Only resources with the text type are currently supported.
             * @param commit True if the user has finished editing the resource, and the new content of the resource should be persisted; false if this is a minor change sent in progress of the user editing the resource.
             */
            setContent(
                content: string,
                commit: boolean,
                callback?: (
                    /** Set to undefined if the resource content was set successfully; describes error otherwise. */
                    error?: object,
                ) => void,
            ): void;
        }

        export interface ReloadOptions {
            /** If specified, the string will override the value of the `User-Agent` HTTP header that's sent while loading the resources of the inspected page. The string will also override the value of the `navigator.userAgent` property that's returned to any scripts that are running within the inspected page. */
            userAgent?: string | undefined;
            /** When true, the loader will bypass the cache for all inspected page resources loaded before the `load` event is fired. The effect is similar to pressing Ctrl+Shift+R in the inspected window or within the Developer Tools window. */
            ignoreCache?: boolean | undefined;
            /** If specified, the script will be injected into every frame of the inspected page immediately upon load, before any of the frame's scripts. The script will not be injected after subsequent reloads—for example, if the user presses Ctrl+R. */
            injectedScript?: string | undefined;
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

        /** The ID of the tab being inspected. This ID may be used with {@link chrome.tabs} API. */
        export const tabId: number;

        /** Reloads the inspected page. */
        export function reload(reloadOptions?: ReloadOptions): void;

        /**
         * Evaluates a JavaScript expression in the context of the main frame of the inspected page. The expression must evaluate to a JSON-compliant object, otherwise an exception is thrown. The eval function can report either a DevTools-side error or a JavaScript exception that occurs during evaluation. In either case, the `result` parameter of the callback is `undefined`. In the case of a DevTools-side error, the `isException` parameter is non-null and has `isError` set to true and `code` set to an error code. In the case of a JavaScript error, `isException` is set to true and `value` is set to the string value of thrown object.
         *
         * @param expression An expression to evaluate.
         * @param options The options parameter can contain one or more options.
         * @param callback A function called when evaluation completes.
         */
        export function eval<T = { [key: string]: unknown }>(
            expression: string,
            callback?: (result: T, exceptionInfo: EvaluationExceptionInfo) => void,
        ): void;
        export function eval<T = { [key: string]: unknown }>(
            expression: string,
            options: EvalOptions | undefined,
            callback?: (result: T, exceptionInfo: EvaluationExceptionInfo) => void,
        ): void;

        /** Retrieves the list of resources from the inspected page. */
        export function getResources(callback: (resources: Resource[]) => void): void;

        /** Fired when a new resource is added to the inspected page. */
        export const onResourceAdded: events.Event<(resource: Resource) => void>;

        /** Fired when a new revision of the resource is committed (e.g. user saves an edited version of the resource in the Developer Tools). */
        export const onResourceContentCommitted: events.Event<(resource: Resource, content: string) => void>;

        export interface EvalOptions {
            /** If specified, the expression is evaluated on the iframe whose URL matches the one specified. By default, the expression is evaluated in the top frame of the inspected page. */
            frameURL?: string | undefined;
            /** Evaluate the expression in the context of the content script of the calling extension, provided that the content script is already injected into the inspected page. If not, the expression is not evaluated and the callback is invoked with the exception parameter set to an object that has the `isError` field set to true and the `code` field set to `E_NOTFOUND`. */
            useContentScriptContext?: boolean | undefined;
            /**
             * Evaluate the expression in the context of a content script of an extension that matches the specified origin. If given, scriptExecutionContext overrides the 'true' setting on useContentScriptContext.
             * @since Chrome 107
             */
            scriptExecutionContext?: string | undefined;
        }
    }

    ////////////////////
    // Dev Tools - Network
    ////////////////////
    /**
     * Use the `chrome.devtools.network` API to retrieve the information about network requests displayed by the Developer Tools in the Network panel.
     *
     * Manifest: "devtools_page"
     */
    export namespace devtools.network {
        /** Represents a network request for a document resource (script, image and so on). See HAR Specification for reference. */
        export interface Request extends HARFormatEntry {
            /** Returns content of the response body. */
            getContent(
                callback: (
                    /** Content of the response body (potentially encoded). */
                    content: string,
                    /** Empty if content is not encoded, encoding name otherwise. Currently, only base64 is supported. */
                    encoding: string,
                ) => void,
            ): void;
        }

        /** Returns HAR log that contains all known network requests. */
        export function getHAR(
            callback: (
                /** A HAR log. See HAR specification for details. */
                harLog: HARFormatLog,
            ) => void,
        ): void;

        /** Fired when a network request is finished and all request data are available. */
        export const onRequestFinished: events.Event<(request: Request) => void>;

        /** Fired when the inspected window navigates to a new page. */
        export const onNavigated: events.Event<(url: string) => void>;
    }

    ////////////////////
    // Dev Tools - Performance
    ////////////////////
    /**
     * Use the `chrome.devtools.performance` API to listen to recording status updates in the Performance panel in DevTools.
     * @since Chrome 129
     */
    export namespace devtools.performance {
        /** Fired when the Performance panel starts recording. */
        export const onProfilingStarted: events.Event<() => void>;
        /** Fired when the Performance panel stops recording. */
        export const onProfilingStopped: events.Event<() => void>;
    }

    ////////////////////
    // Dev Tools - Panels
    ////////////////////
    /**
     * Use the `chrome.devtools.panels` API to integrate your extension into Developer Tools window UI: create your own panels, access existing panels, and add sidebars.
     *
     * Manifest: "devtools_page"
     */
    export namespace devtools.panels {
        /** Represents a panel created by an extension. */
        export interface ExtensionPanel {
            /**
             * Appends a button to the status bar of the panel.
             * @param iconPath Path to the icon of the button. The file should contain a 64x24-pixel image composed of two 32x24 icons. The left icon is used when the button is inactive; the right icon is displayed when the button is pressed.
             * @param tooltipText Text shown as a tooltip when user hovers the mouse over the button.
             * @param disabled Whether the button is disabled.
             */
            createStatusBarButton(iconPath: string, tooltipText: string, disabled: boolean): Button;
            /** Fired when the user switches to the panel. */
            onShown: events.Event<(window: Window) => void>;
            /** Fired when the user switches away from the panel. */
            onHidden: events.Event<() => void>;
            /** Fired upon a search action (start of a new search, search result navigation, or search being canceled). */
            onSearch: events.Event<(action: string, queryString?: string) => void>;
            /**
             * Shows the panel by activating the corresponding tab.
             * @since Chrome 140
             */
            show(): void;
        }

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
            onClicked: events.Event<() => void>;
        }

        /** Represents the Elements panel. */
        export interface ElementsPanel {
            /**
             * Creates a pane within panel's sidebar.
             * @param title Text that is displayed in sidebar caption.
             */
            createSidebarPane(
                title: string,
                callback?: (
                    /** An ExtensionSidebarPane object for created sidebar pane. */
                    result: ExtensionSidebarPane,
                ) => void,
            ): void;
            /** Fired when an object is selected in the panel. */
            onSelectionChanged: events.Event<() => void>;
        }

        /** Represents the Sources panel. */
        export interface SourcesPanel {
            /**
             * Creates a pane within panel's sidebar.
             * @param title Text that is displayed in sidebar caption.
             */
            createSidebarPane(
                title: string,
                callback?: (
                    /** An ExtensionSidebarPane object for created sidebar pane. */
                    result: ExtensionSidebarPane,
                ) => void,
            ): void;
            /** Fired when an object is selected in the panel. */
            onSelectionChanged: events.Event<() => void>;
        }

        /** A sidebar created by the extension. */
        export interface ExtensionSidebarPane {
            /**
             * Sets the height of the sidebar.
             * @param height A CSS-like size specification, such as `100px` or `12ex`.
             */
            setHeight(height: string): void;
            /**
             * Sets an expression that is evaluated within the inspected page. The result is displayed in the sidebar pane.
             * @param expression An expression to be evaluated in context of the inspected page. JavaScript objects and DOM nodes are displayed in an expandable tree similar to the console/watch.
             * @param rootTitle An optional title for the root of the expression tree.
             */
            setExpression(expression: string, callback?: () => void): void;
            setExpression(expression: string, rootTitle: string | undefined, callback?: () => void): void;
            /**
             * Sets a JSON-compliant object to be displayed in the sidebar pane.
             * @param jsonObject An object to be displayed in context of the inspected page. Evaluated in the context of the caller (API client).
             * @param rootTitle An optional title for the root of the expression tree.
             */
            setObject(jsonObject: { [key: string]: unknown }, callback?: () => void): void;
            setObject(
                jsonObject: { [key: string]: unknown },
                rootTitle: string | undefined,
                callback?: () => void,
            ): void;
            /**
             * Sets an HTML page to be displayed in the sidebar pane.
             * @param path Relative path of an extension page to display within the sidebar.
             */
            setPage(path: string): void;
            /** Fired when the sidebar pane becomes visible as a result of user switching to the panel that hosts it. */
            onShown: events.Event<(window: Window) => void>;
            /** Fired when the sidebar pane becomes hidden as a result of the user switching away from the panel that hosts the sidebar pane. */
            onHidden: events.Event<() => void>;
        }

        /**
         * Theme used by DevTools.
         * @since Chrome 99
         */
        export type Theme = "default" | "dark";

        /** Elements panel. */
        export const elements: ElementsPanel;

        /** Sources panel. */
        export const sources: SourcesPanel;

        /**
         * Creates an extension panel.
         * @param title Title that is displayed next to the extension icon in the Developer Tools toolbar.
         * @param iconPath Path of the panel's icon relative to the extension directory.
         * @param pagePath Path of the panel's HTML page relative to the extension directory.
         */
        export function create(
            title: string,
            iconPath: string,
            pagePath: string,
            callback?: (
                /** An ExtensionPanel object representing the created panel. */
                panel: ExtensionPanel,
            ) => void,
        ): void;

        /** Specifies the function to be called when the user clicks a resource link in the Developer Tools window. To unset the handler, either call the method with no parameters or pass null as the parameter. */
        export function setOpenResourceHandler(
            callback?: (
                /** A {@link devtools.inspectedWindow.Resource} object for the resource that was clicked. */
                resource: chrome.devtools.inspectedWindow.Resource,
                /** Specifies the line number within the resource that was clicked. */
                lineNumber: number,
            ) => void,
        ): void;

        /**
         * Specifies the function to be called when the current theme changes in DevTools. To unset the handler, either call the method with no parameters or pass `null` as the parameter.
         * @since Chrome 99
         */
        export function setThemeChangeHandler(callback?: (theme: Theme) => void): void;

        /**
         * Requests DevTools to open a URL in a Developer Tools panel.
         * @param url The URL of the resource to open.
         * @param lineNumber Specifies the line number to scroll to when the resource is loaded.
         * @param columnNumber Specifies the column number to scroll to when the resource is loaded.
         */
        export function openResource(url: string, lineNumber: number, callback?: () => void): void;
        export function openResource(
            url: string,
            lineNumber: number,
            columnNumber: number | undefined,
            callback?: () => void,
        ): void;

        /**
         * The name of the color theme set in user's DevTools settings.
         * @since Chrome 59
         */
        export const themeName: Theme;
    }

    ////////////////////
    // Dev Tools - Recorder
    ////////////////////
    /**
     * Use the `chrome.devtools.recorder` API to customize the Recorder panel in DevTools.
     * @since Chrome 105
     */
    export namespace devtools.recorder {
        /** A plugin interface that the Recorder panel invokes to customize the Recorder panel. */
        export interface RecorderExtensionPlugin {
            /**
             * Allows the extension to implement custom replay functionality.
             *
             * @param recording A recording of the user interaction with the page. This should match [Puppeteer's recording schema](https://github.com/puppeteer/replay/blob/main/docs/api/interfaces/Schema.UserFlow.md).
             * @since Chrome 112
             */
            replay?(recording: { [key: string]: unknown }): void;

            /**
             * Converts a recording from the Recorder panel format into a string.
             * @param recording A recording of the user interaction with the page. This should match [Puppeteer's recording schema](https://github.com/puppeteer/replay/blob/main/docs/api/interfaces/Schema.UserFlow.md).
             */
            stringify?(recording: { [key: string]: unknown }): void;

            /**
             * Converts a step of the recording from the Recorder panel format into a string.
             * @param step A step of the recording of a user interaction with the page. This should match [Puppeteer's step schema](https://github.com/puppeteer/replay/blob/main/docs/api/modules/Schema.md#step).
             */
            stringifyStep?(step: { [key: string]: unknown }): void;
        }

        /**
         * Represents a view created by extension to be embedded inside the Recorder panel.
         * @since Chrome 112
         */
        export interface RecorderView {
            /** Fired when the view is hidden. */
            onHidden: events.Event<() => void>;
            /** Fired when the view is shown. */
            onShown: events.Event<() => void>;
            /** Indicates that the extension wants to show this view in the Recorder panel. */
            show(): void;
        }

        /**
         * Creates a view that can handle the replay. This view will be embedded inside the Recorder panel.
         * @param title Title that is displayed next to the extension icon in the Developer Tools toolbar.
         * @param pagePath Path of the panel's HTML page relative to the extension directory.
         * @since Chrome 112
         */
        export function createView(title: string, pagePath: string): RecorderView;

        /**
         * Registers a Recorder extension plugin.
         * @param plugin An instance implementing the RecorderExtensionPlugin interface.
         * @param name The name of the plugin.
         * @param mediaType The media type of the string content that the plugin produces.
         */
        export function registerRecorderExtensionPlugin(
            plugin: RecorderExtensionPlugin,
            name: string,
            mediaType: string,
        ): void;
    }

    ////////////////////
    // Document Scan
    ////////////////////
    /**
     * Use the `chrome.documentScan` API to discover and retrieve images from attached document scanners.
     * The Document Scan API is designed to allow apps and extensions to view the content of paper documents on an attached document scanner.
     *
     * Permissions: "documentScan"
     * @platform ChromeOS only
     * @since Chrome 44
     */
    export namespace documentScan {
        /** @since Chrome 125 */
        export interface CancelScanResponse<T> {
            /** Provides the same job handle that was passed to {@link cancelScan}. */
            job: T;
            /** The backend's cancel scan result. If the result is `OperationResult.SUCCESS` or `OperationResult.CANCELLED`, the scan has been cancelled and the scanner is ready to start a new scan. If the result is `OperationResult.DEVICE_BUSY` , the scanner is still processing the requested cancellation; the caller should wait a short time and try the request again. Other result values indicate a permanent error that should not be retried. */
            result: `${OperationResult}`;
        }

        /** @since Chrome 125 */
        export interface CloseScannerResponse<T> {
            /** The same scanner handle as was passed to {@link closeScanner}. */
            scannerHandle: T;
            /** The result of closing the scanner. Even if this value is not `SUCCESS`, the handle will be invalid and should not be used for any further operations. */
            result: `${OperationResult}`;
        }

        /**
         * How an option can be changed.
         * @since Chrome 125
         */
        export enum Configurability {
            /** The option is read-only. */
            NOT_CONFIGURABLE = "NOT_CONFIGURABLE",
            /** The option can be set in software. */
            SOFTWARE_CONFIGURABLE = "SOFTWARE_CONFIGURABLE",
            /** The option can be set by the user toggling or pushing a button on the scanner. */
            HARDWARE_CONFIGURABLE = "HARDWARE_CONFIGURABLE",
        }

        /**
         * Indicates how the scanner is connected to the computer.
         * @since Chrome 125
         */
        export enum ConnectionType {
            UNSPECIFIED = "UNSPECIFIED",
            USB = "USB",
            NETWORK = "NETWORK",
        }

        /**
         * The data type of constraint represented by an {@link OptionConstraint}.
         * @since Chrome 125
         */
        export enum ConstraintType {
            /** The constraint on a range of `OptionType.INT` values. The `min`, `max`, and `quant` properties of `OptionConstraint` will be `long`, and its `list` property will be unset. */
            INT_RANGE = "INT_RANGE",
            /** The constraint on a range of `OptionType.FIXED` values. The `min`, `max`, and `quant` properties of `OptionConstraint` will be `double`, and its `list` property will be unset. */
            FIXED_RANGE = "FIXED_RANGE",
            /** The constraint on a specific list of `OptionType.INT` values. The `OptionConstraint.list` property will contain `long` values, and the other properties will be unset. */
            INT_LIST = "INT_LIST",
            /** The constraint on a specific list of `OptionType.FIXED` values. The `OptionConstraint.list` property will contain `double` values, and the other properties will be unset. */
            FIXED_LIST = "FIXED_LIST",
            /** The constraint on a specific list of `OptionType.STRING` values. The `OptionConstraint.list` property will contain `DOMString` values, and the other properties will be unset. */
            STRING_LIST = "STRING_LIST",
        }

        /** @since Chrome 125 */
        export interface DeviceFilter {
            /** Only return scanners that are directly attached to the computer. */
            local?: boolean;
            /** Only return scanners that use a secure transport, such as USB or TLS. */
            secure?: boolean;
        }

        /** @since Chrome 125 */
        export interface GetOptionGroupsResponse<T> {
            /** If `result` is `SUCCESS`, provides a list of option groups in the order supplied by the scanner driver. */
            groups?: OptionGroup[];
            /** The result of getting the option groups. If the value of this is `SUCCESS`, the `groups` property will be populated. */
            result: `${OperationResult}`;
            /** The same scanner handle as was passed to {@link getOptionGroups}. */
            scannerHandle: T;
        }

        /** @since Chrome 125 */
        export interface GetScannerListResponse {
            /** The enumeration result. Note that partial results could be returned even if this indicates an error. */
            result: `${OperationResult}`;
            /** A possibly-empty list of scanners that match the provided {@link DeviceFilter}. */
            scanners: ScannerInfo[];
        }

        /** @since Chrome 125 */
        export interface OpenScannerResponse<T> {
            /** If `result` is `SUCCESS`, provides a key-value mapping where the key is a device-specific option and the value is an instance of {@link ScannerOption}. */
            options?: { [name: string]: unknown };
            /** The result of opening the scanner. If the value of this is `SUCCESS`, the `scannerHandle` and `options` properties will be populated. */
            result: `${OperationResult}`;
            /** If `result` is `SUCCESS`, a handle to the scanner that can be used for further operations. */
            scannerHandle?: string;
            /** The scanner ID passed to {@link openScanner}. */
            scannerId: T;
        }

        /**
         * An enum that indicates the result of each operation.
         * @since Chrome 125
         */
        export enum OperationResult {
            /** An unknown or generic failure occurred. */
            UNKNOWN = "UNKNOWN",
            /**The operation succeeded. */
            SUCCESS = "SUCCESS",
            /** The operation is not supported. */
            UNSUPPORTED = "UNSUPPORTED",
            /** The operation was cancelled. */
            CANCELLED = "CANCELLED",
            /** The device is busy. */
            DEVICE_BUSY = "DEVICE_BUSY",
            /** Either the data or an argument passed to the method is not valid. */
            INVALID = "INVALID",
            /** The supplied value is the wrong data type for the underlying option. */
            WRONG_TYPE = "WRONG_TYPE",
            /** No more data is available. */
            EOF = "EOF",
            /** The document feeder is jammed */
            ADF_JAMMED = "ADF_JAMMED",
            /** The document feeder is empty */
            ADF_EMPTY = "ADF_EMPTY",
            /** The flatbed cover is open. */
            COVER_OPEN = "COVER_OPEN",
            /** An error occurred while communicating with the device. */
            IO_ERROR = "IO_ERROR",
            /** The device requires authentication. */
            ACCESS_DENIED = "ACCESS_DENIED",
            /** Not enough memory is available on the Chromebook to complete the operation. */
            NO_MEMORY = "NO_MEMORY",
            /** The device is not reachable. */
            UNREACHABLE = "UNREACHABLE",
            /** The device is disconnected. */
            MISSING = "MISSING",
            /** An error has occurred somewhere other than the calling application. */
            INTERNAL_ERROR = "INTERNAL_ERROR",
        }

        /** @since Chrome 125 */
        export interface OptionConstraint {
            list?: string[] | number[];
            max?: number;
            min?: number;
            quant?: number;
            type: `${ConstraintType}`;
        }

        /** @since Chrome 125 */
        export interface OptionGroup {
            /** An array of option names in driver-provided order. */
            members: string[];
            /** Provides a printable title, for example "Geometry options". */
            title: string;
        }

        /** @since Chrome 125 */
        export interface OptionSetting {
            /** Indicates the name of the option to set. */
            name: string;
            /** Indicates the data type of the option. The requested data type must match the real data type of the underlying option. */
            type: `${OptionType}`;
            /** Indicates the value to set. Leave unset to request automatic setting for options that have `autoSettable` enabled. The data type supplied for `value` must match `type`. */
            value?: string | number | boolean | number;
        }

        /**
         * The data type of an option.
         * @since Chrome 125
         */
        export enum OptionType {
            /** The option's data type is `unknown`. The value property will be unset. */
            UNKNOWN = "UNKNOWN",
            /** The `value` property will be one of `true` false. */
            BOOL = "BOOL",
            /** A signed 32-bit integer. The `value` property will be long or long[], depending on whether the option takes more than one value. */
            INT = "INT",
            /** A double in the range -32768-32767.9999 with a resolution of 1/65535. The `value` property will be double or double[] depending on whether the option takes more than one value. Double values that can't be exactly represented will be rounded to the available range and precision. */
            FIXED = "FIXED",
            /** A sequence of any bytes except NUL ('\0'). The `value` property will be a DOMString. */
            STRING = "STRING",
            /** An option of this type has no value. Instead, setting an option of this type causes an option-specific side effect in the scanner driver. For example, a button-typed option could be used by a scanner driver to provide a means to select default values or to tell an automatic document feeder to advance to the next sheet of paper. */
            BUTTON = "BUTTON",
            /** Grouping option. No value. This is included for compatibility, but will not normally be returned in `ScannerOption` values. Use `getOptionGroups()` to retrieve the list of groups with their member options. */
            GROUP = "GROUP",
        }

        /**
         * Indicates the data type for {@link ScannerOption.unit}.
         * @since Chrome 125
         */
        export enum OptionUnit {
            /** The value is a unitless number. For example, it can be a threshold. */
            UNITLESS = "UNITLESS",
            /** The value is a number of pixels, for example, scan dimensions. */
            PIXEL = "PIXEL",
            /** The value is the number of bits, for example, color depth. */
            BIT = "BIT",
            /** The value is measured in millimeters, for example, scan dimensions. */
            MM = "MM",
            /** The value is measured in dots per inch, for example, resolution. */
            DPI = "DPI",
            /** The value is a percent, for example, brightness. */
            PERCENT = "PERCENT",
            /** The value is measured in microseconds, for example, exposure time. */
            MICROSECOND = "MICROSECOND",
        }

        /** @since Chrome 125 */
        export interface ReadScanDataResponse<T> {
            /** If `result` is `SUCCESS`, contains the _next_ chunk of scanned image data. If `result` is `EOF`, contains the _last_ chunk of scanned image data. */
            data?: ArrayBuffer;
            /** If `result` is `SUCCESS`, an estimate of how much of the total scan data has been delivered so far, in the range 0 to 100. */
            estimatedCompletion?: number;
            /** Provides the job handle passed to {@link readScanData}. */
            job: T;
            /** The result of reading data. If its value is `SUCCESS`, then `data` contains the _next_ (possibly zero-length) chunk of image data that is ready for reading. If its value is `EOF`, the `data` contains the _last_ chunk of image data. */
            result: `${OperationResult}`;
        }

        /** @since Chrome 125 */
        export interface ScannerInfo {
            /** Indicates how the scanner is connected to the computer. */
            connectionType: `${ConnectionType}`;
            /** For matching against other `ScannerInfo` entries that point to the same physical device. */
            deviceUuid: string;
            /** An array of MIME types that can be requested for returned scans. */
            imageFormats: string[];
            /** The scanner manufacturer. */
            manufacturer: string;
            /** The scanner model if it is available, or a generic description. */
            model: string;
            /** A human-readable name for the scanner to display in the UI. */
            name: string;
            /** A human-readable description of the protocol or driver used to access the scanner, such as Mopria, WSD, or epsonds. This is primarily useful for allowing a user to choose between protocols if a device supports multiple protocols. */
            protocolType: string;
            /** The ID of a specific scanner. */
            scannerId: string;
            /** If true, the scanner connection's transport cannot be intercepted by a passive listener, such as TLS or USB. */
            secure: boolean;
        }

        /** @since Chrome 125 */
        export interface ScannerOption {
            /** Indicates whether and how the option can be changed. */
            configurability: `${Configurability}`;
            /** Defines {@link OptionConstraint} on the current scanner option. */
            constraint?: OptionConstraint;
            /** A longer description of the option. */
            description: string;
            /** Indicates the option is active and can be set or retrieved. If false, the `value` property will not be set. */
            isActive: boolean;
            /** Indicates that the UI should not display this option by default. */
            isAdvanced: boolean;
            /** Can be automatically set by the scanner driver. */
            isAutoSettable: boolean;
            /** Indicates that this option can be detected from software. */
            isDetectable: boolean;
            /** Emulated by the scanner driver if true. */
            isEmulated: boolean;
            /** The option name using lowercase ASCII letters, numbers, and dashes. Diacritics are not allowed. */
            name: string;
            /** A printable one-line title. */
            title: string;
            /** The data type contained in the `value` property, which is needed for setting this option. */
            type: `${OptionType}`;
            /** The unit of measurement for this option. */
            unit: `${OptionUnit}`;
            /** The current value of the option, if relevant. Note that the data type of this property must match the data type specified in `type`. */
            value?: string | number | boolean | number[];
        }

        export interface ScanOptions {
            /** The number of scanned images allowed. The default is 1. */
            maxImages?: number;
            /** The MIME types that are accepted by the caller. */
            mimeTypes?: string[];
        }

        export interface ScanResults {
            /** An array of data image URLs in a form that can be passed as the "src" value to an image tag. */
            dataUrls: string[];
            /** The MIME type of the `dataUrls`. */
            mimeType: string;
        }

        /** @since Chrome 125 */
        export interface SetOptionResult {
            /**  Indicates the name of the option that was set. */
            name: string;
            /** Indicates the result of setting the option. */
            result: `${OperationResult}`;
        }

        /** @since Chrome 125 */
        export interface SetOptionsResponse<T> {
            /**
             * An updated key-value mapping from option names to {@link ScannerOption} values containing the new configuration after attempting to set all supplied options. This has the same structure as the `options` property in {@link OpenScannerResponse}.
             *
             * This property will be set even if some options were not set successfully, but will be unset if retrieving the updated configuration fails (for example, if the scanner is disconnected in the middle of scanning).
             */
            options?: { [name: string]: unknown };
            /** An array of results, one each for every passed-in `OptionSetting`. */
            results: SetOptionResult[];
            /** Provides the scanner handle passed to {@link setOptions}. */
            scannerHandle: T;
        }

        /** @since Chrome 125 */
        export interface StartScanOptions {
            /** Specifies the MIME type to return scanned data in. */
            format: string;
            /** If a non-zero value is specified, limits the maximum scanned bytes returned in a single {@link readScanData} response to that value. The smallest allowed value is 32768 (32 KB). If this property is not specified, the size of a returned chunk may be as large as the entire scanned image. */
            maxReadSize?: number;
        }

        /** @since Chrome 125 */
        export interface StartScanResponse<T> {
            /** If `result` is `SUCCESS`, provides a handle that can be used to read scan data or cancel the job. */
            job?: string;
            /**  The result of starting a scan. If the value of this is `SUCCESS`, the `job` property will be populated. */
            result: `${OperationResult}`;
            /** Provides the same scanner handle that was passed to {@link startScan}. */
            scannerHandle: T;
        }

        /**
         * Cancels a started scan and returns a Promise that resolves with a {@link CancelScanResponse} object. If a callback is used, the object is passed to it instead.
         * @param job The handle of an active scan job previously returned from a call to {@link startScan}.
         * @since Chrome 125
         */
        export function cancelScan<T = string>(job: T): Promise<CancelScanResponse<T>>;
        export function cancelScan<T = string>(job: T, callback: (response: CancelScanResponse<T>) => void): void;

        /**
         * Closes the scanner with the passed in handle and returns a Promise that resolves with a {@link CloseScannerResponse} object. If a callback is used, the object is passed to it instead. Even if the response is not a success, the supplied handle becomes invalid and should not be used for further operations.
         * @param scannerHandle Specifies the handle of an open scanner that was previously returned from a call to {@link openScanner}.
         * @since Chrome 125
         */
        export function closeScanner<T = string>(scannerHandle: T): Promise<CloseScannerResponse<T>>;
        export function closeScanner<T = string>(
            scannerHandle: T,
            callback: (response: CloseScannerResponse<T>) => void,
        ): void;

        /**
         * Gets the group names and member options from a scanner previously opened by {@link openScanner}. This method returns a Promise that resolves with a {@link GetOptionGroupsResponse} object. If a callback is passed to this function, returned data is passed to it instead.
         * @param scannerHandle The handle of an open scanner returned from a call to {@link openScanner}.
         * @since Chrome 125
         */
        export function getOptionGroups<T = string>(scannerHandle: T): Promise<GetOptionGroupsResponse<T>>;
        export function getOptionGroups<T = string>(
            scannerHandle: T,
            callback: (response: GetOptionGroupsResponse<T>) => void,
        ): void;

        /**
         * Gets the list of available scanners and returns a Promise that resolves with a {@link GetScannerListResponse} object. If a callback is passed to this function, returned data is passed to it instead.
         * @param filter A {@link DeviceFilter} indicating which types of scanners should be returned.
         * @since Chrome 125
         */
        export function getScannerList(filter: DeviceFilter): Promise<GetScannerListResponse>;
        export function getScannerList(
            filter: DeviceFilter,
            callback: (response: GetScannerListResponse) => void,
        ): void;

        /**
         * Opens a scanner for exclusive access and returns a Promise that resolves with an {@link OpenScannerResponse} object. If a callback is passed to this function, returned data is passed to it instead.
         * @param scannerId The ID of a scanner to be opened. This value is one returned from a previous call to {@link getScannerList}.
         * @since Chrome 125
         */
        export function openScanner<T = string>(scannerId: T): Promise<OpenScannerResponse<T>>;
        export function openScanner<T = string>(
            scannerId: T,
            callback: (response: OpenScannerResponse<T>) => void,
        ): void;

        /**
         * Reads the next chunk of available image data from an active job handle, and returns a Promise that resolves with a {@link ReadScanDataResponse} object. If a callback is used, the object is passed to it instead.
         *
         * **Note:**It is valid for a response result to be `SUCCESS` with a zero-length `data` member. This means the scanner is still working but does not yet have additional data ready. The caller should wait a short time and try again.
         *
         * When the scan job completes, the response will have the result value of `EOF`. This response may contain a final non-zero `data` member.
         * @param job Active job handle previously returned from {@link startScan}.
         * @since Chrome 125
         */
        export function readScanData<T = string>(job: T): Promise<ReadScanDataResponse<T>>;
        export function readScanData<T = string>(job: T, callback: (response: ReadScanDataResponse<T>) => void): void;

        /**
         * Performs a document scan and returns a Promise that resolves with a {@link ScanResults} object. If a callback is passed to this function, the returned data is passed to it instead.
         * @param options An object containing scan parameters.
         */
        export function scan(options: ScanOptions): Promise<ScanResults>;
        export function scan(options: ScanOptions, callback: (result: ScanResults) => void): void;

        /**
         * Sets options on the specified scanner and returns a Promise that resolves with a {@link SetOptionsResponse} object containing the result of trying to set every value in the order of the passed-in {@link OptionSetting} object. If a callback is used, the object is passed to it instead.
         * @param scannerHandle The handle of the scanner to set options on. This should be a value previously returned from a call to {@link openScanner}.
         * @param options A list of `OptionSetting` objects to be applied to the scanner.
         * @since Chrome 125
         */
        export function setOptions<T = string>(
            scannerHandle: T,
            options: OptionSetting[],
        ): Promise<SetOptionsResponse<T>>;
        export function setOptions<T = string>(
            scannerHandle: T,
            options: OptionSetting[],
            callback: (response: SetOptionsResponse<T>) => void,
        ): void;

        /**
         * Starts a scan on the specified scanner and returns a Promise that resolves with a {@link StartScanResponse}. If a callback is used, the object is passed to it instead. If the call was successful, the response includes a job handle that can be used in subsequent calls to read scan data or cancel a scan.
         * @param scannerHandle The handle of an open scanner. This should be a value previously returned from a call to {@link openScanner}.
         * @param options A {@link StartScanOptions} object indicating the options to be used for the scan. The `StartScanOptions.format` property must match one of the entries returned in the scanner's `ScannerInfo`.
         * @since Chrome 125
         */
        export function startScan<T = string>(
            scannerHandle: T,
            options: StartScanOptions,
        ): Promise<StartScanResponse<T>>;
        export function startScan<T = string>(
            scannerHandle: T,
            options: StartScanOptions,
            callback: (response: StartScanResponse<T>) => void,
        ): void;
    }

    ////////////////////
    // DOM
    ////////////////////
    /**
     * Use the `chrome.dom` API to access special DOM APIs for Extensions
     * @since Chrome 88
     */
    export namespace dom {
        /**
         * @since Chrome 88
         * Requests chrome to return the open/closed shadow roots else return null.
         * @param element reference of HTMLElement.
         */
        export function openOrClosedShadowRoot(element: HTMLElement): ShadowRoot | null;
    }

    ////////////////////
    // Downloads
    ////////////////////
    /**
     * Use the `chrome.downloads` API to programmatically initiate, monitor, manipulate, and search for downloads.
     *
     * Permissions: "downloads"
     */
    export namespace downloads {
        export interface HeaderNameValuePair {
            /** Name of the HTTP header. */
            name: string;
            /** Value of the HTTP header. */
            value: string;
        }

        export enum FilenameConflictAction {
            /** To avoid duplication, the filename is changed to include a counter before the filename extension. */
            UNIQUIFY = "uniquify",
            /** The existing file will be overwritten with the new file. */
            OVERWRITE = "overwrite",
            /** The user will be prompted with a file chooser dialog. */
            PROMPT = "prompt",
        }

        export enum HttpMethod {
            GET = "GET",
            POST = "POST",
        }

        export interface DownloadOptions {
            /** Post body. */
            body?: string | undefined;
            /** Use a file-chooser to allow the user to select a filename regardless of whether `filename` is set or already exists. */
            saveAs?: boolean | undefined;
            /** The URL to download. */
            url: string;
            /** A file path relative to the Downloads directory to contain the downloaded file, possibly containing subdirectories. Absolute paths, empty paths, and paths containing back-references ".." will cause an error. {@link onDeterminingFilename} allows suggesting a filename after the file's MIME type and a tentative filename have been determined. */
            filename?: string | undefined;
            /** Extra HTTP headers to send with the request if the URL uses the HTTP[s] protocol. Each header is represented as a dictionary containing the keys `name` and either `value` or `binaryValue`, restricted to those allowed by XMLHttpRequest. */
            headers?: HeaderNameValuePair[] | undefined;
            /** The HTTP method to use if the URL uses the HTTP[S] protocol. */
            method?: `${HttpMethod}` | undefined;
            /** The action to take if `filename` already exists. */
            conflictAction?: `${FilenameConflictAction}` | undefined;
        }

        export interface DownloadDelta {
            /** The id of the {@link DownloadItem} that changed. */
            id: number;
            /** The change in `danger`, if any. */
            danger?: StringDelta | undefined;
            /** The change in `url`, if any. */
            url?: StringDelta | undefined;
            /**
             * The change in `finalUrl`, if any.
             * @since Chrome 54
             */
            finalUrl?: StringDelta | undefined;
            /** The change in `totalBytes`, if any. */
            totalBytes?: DoubleDelta | undefined;
            /** The change in `filename`, if any. */
            filename?: StringDelta | undefined;
            /** The change in `paused`, if any. */
            paused?: BooleanDelta | undefined;
            /** The change in `state`, if any. */
            state?: StringDelta | undefined;
            /** The change in `mime`, if any. */
            mime?: StringDelta | undefined;
            /** The change in `fileSize`, if any. */
            fileSize?: DoubleDelta | undefined;
            /** The change in `startTime`, if any. */
            startTime?: StringDelta | undefined;
            /** The change in `error`, if any. */
            error?: StringDelta | undefined;
            /** The change in `endTime`, if any. */
            endTime?: StringDelta | undefined;
            /** The change in `canResume`, if any. */
            canResume?: BooleanDelta | undefined;
            /** The change in `exists`, if any. */
            exists?: BooleanDelta | undefined;
        }

        export interface BooleanDelta {
            current?: boolean | undefined;
            previous?: boolean | undefined;
        }

        export interface DoubleDelta {
            current?: number | undefined;
            previous?: number | undefined;
        }

        export interface StringDelta {
            current?: string | undefined;
            previous?: string | undefined;
        }

        export enum InterruptReason {
            FILE_FAILED = "FILE_FAILED",
            FILE_ACCESS_DENIED = "FILE_ACCESS_DENIED",
            FILE_NO_SPACE = "FILE_NO_SPACE",
            FILE_NAME_TOO_LONG = "FILE_NAME_TOO_LONG",
            FILE_TOO_LARGE = "FILE_TOO_LARGE",
            FILE_VIRUS_INFECTED = "FILE_VIRUS_INFECTED",
            FILE_TRANSIENT_ERROR = "FILE_TRANSIENT_ERROR",
            FILE_BLOCKED = "FILE_BLOCKED",
            FILE_SECURITY_CHECK_FAILED = "FILE_SECURITY_CHECK_FAILED",
            FILE_TOO_SHORT = "FILE_TOO_SHORT",
            FILE_HASH_MISMATCH = "FILE_HASH_MISMATCH",
            FILE_SAME_AS_SOURCE = "FILE_SAME_AS_SOURCE",
            NETWORK_FAILED = "NETWORK_FAILED",
            NETWORK_TIMEOUT = "NETWORK_TIMEOUT",
            NETWORK_DISCONNECTED = "NETWORK_DISCONNECTED",
            NETWORK_SERVER_DOWN = "NETWORK_SERVER_DOWN",
            NETWORK_INVALID_REQUEST = "NETWORK_INVALID_REQUEST",
            SERVER_FAILED = "SERVER_FAILED",
            SERVER_NO_RANGE = "SERVER_NO_RANGE",
            SERVER_BAD_CONTENT = "SERVER_BAD_CONTENT",
            SERVER_UNAUTHORIZED = "SERVER_UNAUTHORIZED",
            SERVER_CERT_PROBLEM = "SERVER_CERT_PROBLEM",
            SERVER_FORBIDDEN = "SERVER_FORBIDDEN",
            SERVER_UNREACHABLE = "SERVER_UNREACHABLE",
            SERVER_CONTENT_LENGTH_MISMATCH = "SERVER_CONTENT_LENGTH_MISMATCH",
            SERVER_CROSS_ORIGIN_REDIRECT = "SERVER_CROSS_ORIGIN_REDIRECT",
            USER_CANCELED = "USER_CANCELED",
            USER_SHUTDOWN = "USER_SHUTDOWN",
            CRASH = "CRASH",
        }

        export enum State {
            /** The download is currently receiving data from the server. */
            IN_PROGRESS = "in_progress",
            /** An error broke the connection with the file host. */
            INTERRUPTED = "interrupted",
            /** The download completed successfully. */
            COMPLETE = "complete",
        }

        export enum DangerType {
            /** The download's filename is suspicious. */
            FILE = "file",
            /** The download's URL is known to be malicious. */
            URL = "url",
            /** The downloaded file is known to be malicious. */
            CONTENT = "content",
            /** The download's URL is not commonly downloaded and could be dangerous. */
            UNCOMMON = "uncommon",
            /** The download came from a host known to distribute malicious binaries and is likely dangerous. */
            HOST = "host",
            /** The download is potentially unwanted or unsafe. E.g. it could make changes to browser or computer settings. */
            UNWANTED = "unwanted",
            /** The download presents no known danger to the user's computer. */
            SAFE = "safe",
            /** The user has accepted the dangerous download. */
            ACCEPTED = "accepted",
            /** Enterprise-related values. */
            ALLOWLISTED_BY_POLICY = "allowlistedByPolicy",
            ASYNC_SCANNING = "asyncScanning",
            ASYNC_LOCAL_PASSWORD_SCANNING = "asyncLocalPasswordScanning",
            PASSWORD_PROTECTED = "passwordProtected",
            BLOCKED_TOO_LARGE = "blockedTooLarge",
            SENSITIVE_CONTENT_WARNING = "sensitiveContentWarning",
            SENSITIVE_CONTENT_BLOCK = "sensitiveContentBlock",
            DEEP_SCANNED_FAILED = "deepScannedFailed",
            DEEP_SCANNED_SAFE = "deepScannedSafe",
            DEEP_SCANNED_OPENED_DANGEROUS = "deepScannedOpenedDangerous",
            PROMPT_FOR_SCANNING = "promptForScanning",
            PROMPT_FOR_LOCAL_PASSWORD_SCANNING = "promptForLocalPasswordScanning",
            ACCOUNT_COMPROMISE = "accountCompromise",
            BLOCKED_SCAN_FAILED = "blockedScanFailed",
            /** For use by the Secure Enterprise Browser extension. When required, Chrome will block the download to disc and download the file directly to Google Drive. */
            FORCE_SAVE_TO_GDRIVE = "forceSaveToGdrive",
            /** For use by the Secure Enterprise Browser extension. When required, Chrome will block the download to disc and download the file directly to OneDrive. */
            FORCE_SAVE_TO_ONEDRIVE = "forceSaveToOnedrive",
        }

        export interface DownloadItem {
            /** Number of bytes received so far from the host, without considering file compression. */
            bytesReceived: number;
            /** Indication of whether this download is thought to be safe or known to be suspicious. */
            danger: `${DangerType}`;
            /** The absolute URL that this download initiated from, before any redirects. */
            url: string;
            /**
             * The absolute URL that this download is being made from, after all redirects.
             * @since Chrome 54
             */
            finalUrl: string;
            /** Number of bytes in the whole file, without considering file compression, or -1 if unknown. */
            totalBytes: number;
            /** Absolute local path. */
            filename: string;
            /** True if the download has stopped reading data from the host, but kept the connection open. */
            paused: boolean;
            /** Indicates whether the download is progressing, interrupted, or complete. */
            state: `${State}`;
            /** The file's MIME type. */
            mime: string;
            /** Number of bytes in the whole file post-decompression, or -1 if unknown. */
            fileSize: number;
            /** The time when the download began in ISO 8601 format. May be passed directly to the Date constructor: `chrome.downloads.search({}, function(items){items.forEach(function(item){console.log(new Date(item.startTime))})})` */
            startTime: string;
            /** Why the download was interrupted. Several kinds of HTTP errors may be grouped under one of the errors beginning with `SERVER_`. Errors relating to the network begin with `NETWORK_`, errors relating to the process of writing the file to the file system begin with `FILE_`, and interruptions initiated by the user begin with `USER_`. */
            error?: `${InterruptReason}` | undefined;
            /** The time when the download ended in ISO 8601 format. May be passed directly to the Date constructor: `chrome.downloads.search({}, function(items){items.forEach(function(item){if (item.endTime) console.log(new Date(item.endTime))})})` */
            endTime?: string | undefined;
            /** An identifier that is persistent across browser sessions. */
            id: number;
            /** False if this download is recorded in the history, true if it is not recorded. */
            incognito: boolean;
            /** Absolute URL. */
            referrer: string;
            /** Estimated time when the download will complete in ISO 8601 format. May be passed directly to the Date constructor: `chrome.downloads.search({}, function(items){items.forEach(function(item){if (item.estimatedEndTime) console.log(new Date(item.estimatedEndTime))})})` */
            estimatedEndTime?: string | undefined;
            /** True if the download is in progress and paused, or else if it is interrupted and can be resumed starting from where it was interrupted. */
            canResume: boolean;
            /** Whether the downloaded file still exists. This information may be out of date because Chrome does not automatically watch for file removal. Call {@link search}() in order to trigger the check for file existence. When the existence check completes, if the file has been deleted, then an {@link onChanged} event will fire. Note that {@link search}() does not wait for the existence check to finish before returning, so results from {@link search}() may not accurately reflect the file system. Also, {@link search}() may be called as often as necessary, but will not check for file existence any more frequently than once every 10 seconds. */
            exists: boolean;
            /** The identifier for the extension that initiated this download if this download was initiated by an extension. Does not change once it is set. */
            byExtensionId?: string | undefined;
            /** The localized name of the extension that initiated this download if this download was initiated by an extension. May change if the extension changes its name or if the user changes their locale. */
            byExtensionName?: string | undefined;
        }

        export interface GetFileIconOptions {
            /** The size of the returned icon. The icon will be square with dimensions size * size pixels. The default and largest size for the icon is 32x32 pixels. The only supported sizes are 16 and 32. It is an error to specify any other size. */
            size?: 16 | 32 | undefined;
        }

        export interface DownloadQuery {
            /** Set elements of this array to {@link DownloadItem} properties in order to sort search results. For example, setting `orderBy=['startTime']` sorts the {@link DownloadItem} by their start time in ascending order. To specify descending order, prefix with a hyphen: '-startTime'. */
            orderBy?: string[] | undefined;
            /** Limits results to {@link DownloadItem} whose `url` matches the given regular expression. */
            urlRegex?: string | undefined;
            /** Limits results to {@link DownloadItem} that ended before the time in ISO 8601 format. */
            endedBefore?: string | undefined;
            /** Limits results to {@link DownloadItem} whose `totalBytes` is greater than the given integer. */
            totalBytesGreater?: number | undefined;
            /** Indication of whether this download is thought to be safe or known to be suspicious. */
            danger?: `${DangerType}` | undefined;
            /** Number of bytes in the whole file, without considering file compression, or -1 if unknown. */
            totalBytes?: number | undefined;
            /** True if the download has stopped reading data from the host, but kept the connection open. */
            paused?: boolean | undefined;
            /** Limits results to {@link DownloadItem} whose `filename` matches the given regular expression. */
            filenameRegex?: string | undefined;
            /**
             * The absolute URL that this download is being made from, after all redirects.
             * @since Chrome 54
             */
            finalUrl?: string;
            /**
             * Limits results to {@link DownloadItem} whose `finalUrl` matches the given regular expression.
             * @since Chrome 54
             */
            finalUrlRegex?: string;
            /** This array of search terms limits results to {@link DownloadItem} whose `filename` or `url` or `finalUrl` contain all of the search terms that do not begin with a dash '-' and none of the search terms that do begin with a dash. */
            query?: string[] | undefined;
            /** Limits results to {@link DownloadItem} whose `totalBytes` is less than the given integer. */
            totalBytesLess?: number | undefined;
            /** The `id` of the {@link DownloadItem} to query. */
            id?: number | undefined;
            /** Number of bytes received so far from the host, without considering file compression. */
            bytesReceived?: number | undefined;
            /** Limits results to {@link DownloadItem} that ended after the time in ISO 8601 format. */
            endedAfter?: string | undefined;
            /** Absolute local path. */
            filename?: string | undefined;
            /** Indicates whether the download is progressing, interrupted, or complete. */
            state?: `${State}` | undefined;
            /** Limits results to {@link DownloadItem} that started after the time in ISO 8601 format. */
            startedAfter?: string | undefined;
            /** The file's MIME type. */
            mime?: string | undefined;
            /** Number of bytes in the whole file post-decompression, or -1 if unknown. */
            fileSize?: number | undefined;
            /** The time when the download began in ISO 8601 format. */
            startTime?: string | undefined;
            /** The absolute URL that this download initiated from, before any redirects. */
            url?: string | undefined;
            /** Limits results to {@link DownloadItem} that started before the time in ISO 8601 format. */
            startedBefore?: string | undefined;
            /** The maximum number of matching {@link DownloadItem} returned. Defaults to 1000. Set to 0 in order to return all matching {@link DownloadItem}. See {@link search} for how to page through results. */
            limit?: number | undefined;
            /** Why a download was interrupted. */
            error?: `${InterruptReason}` | undefined;
            /** The time when the download ended in ISO 8601 format. */
            endTime?: string | undefined;
            /** Whether the downloaded file exists; */
            exists?: boolean | undefined;
        }

        export interface FilenameSuggestion {
            /** The {@link DownloadItem}'s new target {@link DownloadItem.filename}, as a path relative to the user's default Downloads directory, possibly containing subdirectories. Absolute paths, empty paths, and paths containing back-references ".." will be ignored. `filename` is ignored if there are any {@link onDeterminingFilename} listeners registered by any extensions. */
            filename: string;
            /** The action to take if `filename` already exists. */
            conflictAction?: `${FilenameConflictAction}` | undefined;
        }

        /** @since Chrome 105 */
        export interface UiOptions {
            /** Enable or disable the download UI. */
            enabled: boolean;
        }

        /**
         * Find {@link DownloadItem}. Set `query` to the empty object to get all {@link DownloadItem}. To get a specific {@link DownloadItem}, set only the `id` field. To page through a large number of items, set `orderBy: ['-startTime']`, set `limit` to the number of items per page, and set `startedAfter` to the `startTime` of the last item from the last page.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function search(query: DownloadQuery): Promise<DownloadItem[]>;
        export function search(query: DownloadQuery, callback: (results: DownloadItem[]) => void): void;

        /**
         * Pause the download. If the request was successful the download is in a paused state. Otherwise {@link runtime.lastError} contains an error message. The request will fail if the download is not active.
         * @param downloadId The id of the download to pause.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function pause(downloadId: number): Promise<void>;
        export function pause(downloadId: number, callback: () => void): void;

        /**
         * Retrieve an icon for the specified download. For new downloads, file icons are available after the {@link onCreated} event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, {@link runtime.lastError} will contain an error message.
         * @param downloadId The identifier for the download.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getFileIcon(downloadId: number, options?: GetFileIconOptions): Promise<string | undefined>;
        export function getFileIcon(downloadId: number, callback: (iconURL?: string) => void): void;
        export function getFileIcon(
            downloadId: number,
            options: GetFileIconOptions,
            callback: (iconURL?: string) => void,
        ): void;

        /**
         * Resume a paused download. If the request was successful the download is in progress and unpaused. Otherwise {@link runtime.lastError} contains an error message. The request will fail if the download is not active.
         * @param downloadId The id of the download to resume.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function resume(downloadId: number): Promise<void>;
        export function resume(downloadId: number, callback: () => void): void;

        /**
         * Cancel a download. When `callback` is run, the download is cancelled, completed, interrupted or doesn't exist anymore.
         * @param downloadId The id of the download to cancel.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function cancel(downloadId: number): Promise<void>;
        export function cancel(downloadId: number, callback: () => void): void;

        /**
         * Download a URL. If the URL uses the HTTP[S] protocol, then the request will include all cookies currently set for its hostname. If both `filename` and `saveAs` are specified, then the Save As dialog will be displayed, pre-populated with the specified `filename`. If the download started successfully, `callback` will be called with the new {@link DownloadItem}'s `downloadId`. If there was an error starting the download, then `callback` will be called with `downloadId=undefined` and {@link runtime.lastError} will contain a descriptive string. The error strings are not guaranteed to remain backwards compatible between releases. Extensions must not parse it.
         * @param options What to download and how.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function download(options: DownloadOptions): Promise<number>;
        export function download(options: DownloadOptions, callback: (downloadId: number) => void): void;

        /**
         * Opens the downloaded file now if the {@link DownloadItem} is complete; otherwise returns an error through {@link runtime.lastError}. This method requires the `"downloads.open"` permission in addition to the `"downloads"` permission. An {@link onChanged} event fires when the item is opened for the first time. This method can only be called in response to a user gesture.
         * @param downloadId The identifier for the downloaded file.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 123.
         */
        export function open(downloadId: number): Promise<void>;
        export function open(
            downloadId: number,
            /** @since Chrome 123 */
            callback: () => void,
        ): void;

        /**
         * Show the downloaded file in its folder in a file manager.
         * @param downloadId The identifier for the downloaded file.
         */
        export function show(downloadId: number): void;

        /** Show the default Downloads folder in a file manager. */
        export function showDefaultFolder(): void;

        /**
         * Erase matching {@link DownloadItem} from history without deleting the downloaded file. An {@link onErased} event will fire for each {@link DownloadItem} that matches `query`, then `callback` will be called.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function erase(query: DownloadQuery): Promise<number[]>;
        export function erase(query: DownloadQuery, callback: (erasedIds: number[]) => void): void;

        /**
         * Remove the downloaded file if it exists and the {@link DownloadItem} is complete; otherwise return an error through {@link runtime.lastError}.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function removeFile(downloadId: number): Promise<void>;
        export function removeFile(downloadId: number, callback: () => void): void;

        /**
         * Prompt the user to accept a dangerous download. Can only be called from a visible context (tab, window, or page/browser action popup). Does not automatically accept dangerous downloads. If the download is accepted, then an {@link onChanged} event will fire, otherwise nothing will happen. When all the data is fetched into a temporary file and either the download is not dangerous or the danger has been accepted, then the temporary file is renamed to the target filename, the `state` changes to 'complete', and {@link onChanged} fires.
         * @param downloadId The identifier for the {@link DownloadItem}.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function acceptDanger(downloadId: number): Promise<void>;
        export function acceptDanger(downloadId: number, callback: () => void): void;

        /**
         * Enable or disable the gray shelf at the bottom of every window associated with the current browser profile. The shelf will be disabled as long as at least one extension has disabled it. Enabling the shelf while at least one other extension has disabled it will return an error through {@link runtime.lastError}. Requires the `"downloads.shelf"` permission in addition to the `"downloads"` permission.
         * @deprecated since Chrome 117. Use {@link setUiOptions} instead.
         */
        export function setShelfEnabled(enabled: boolean): void;

        /**
         * Change the download UI of every window associated with the current browser profile. As long as at least one extension has set {@link UiOptions.enabled} to false, the download UI will be hidden. Setting {@link UiOptions.enabled} to true while at least one other extension has disabled it will return an error through {@link runtime.lastError}. Requires the `"downloads.ui"` permission in addition to the `"downloads"` permission.
         * @since Chrome 105
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 105.
         */
        export function setUiOptions(options: UiOptions): Promise<void>;
        export function setUiOptions(options: UiOptions, callback: () => void): void;

        /** When any of a {@link DownloadItem}'s properties except `bytesReceived` and `estimatedEndTime` changes, this event fires with the `downloadId` and an object containing the properties that changed. */
        export const onChanged: events.Event<(downloadDelta: DownloadDelta) => void>;

        /** This event fires with the {@link DownloadItem} object when a download begins. */
        export const onCreated: events.Event<(downloadItem: DownloadItem) => void>;

        /** Fires with the `downloadId` when a download is erased from history. */
        export const onErased: events.Event<(downloadId: number) => void>;

        /** During the filename determination process, extensions will be given the opportunity to override the target {@link DownloadItem.filename}. Each extension may not register more than one listener for this event. Each listener must call `suggest` exactly once, either synchronously or asynchronously. If the listener calls `suggest` asynchronously, then it must return `true`. If the listener neither calls `suggest` synchronously nor returns `true`, then `suggest` will be called automatically. The {@link DownloadItem} will not complete until all listeners have called `suggest`. Listeners may call `suggest` without any arguments in order to allow the download to use `downloadItem.filename` for its filename, or pass a `suggestion` object to `suggest` in order to override the target filename. If more than one extension overrides the filename, then the last extension installed whose listener passes a `suggestion` object to `suggest` wins. In order to avoid confusion regarding which extension will win, users should not install extensions that may conflict. If the download is initiated by {@link download} and the target filename is known before the MIME type and tentative filename have been determined, pass `filename` to {@link download} instead. */
        export const onDeterminingFilename: events.Event<
            (downloadItem: DownloadItem, suggest: (suggestion?: FilenameSuggestion) => void) => void
        >;
    }

    ////////////////////
    // Enterprise Platform Keys
    ////////////////////
    /**
     * Use the `chrome.enterprise.platformKeys` API to generate keys and install certificates for these keys. The certificates will be managed by the platform and can be used for TLS authentication, network access or by other extension through {@link chrome.platformKeys}.
     *
     * Permissions: "enterprise.platformKeys"
     *
     * Note: Only available to policy installed extensions.
     * @platform ChromeOS only
     */
    export namespace enterprise.platformKeys {
        export interface Token {
            /**
             * Uniquely identifies this Token.
             * Static IDs are `user` and `system`, referring to the platform's user-specific and the system-wide hardware token, respectively. Any other tokens (with other identifiers) might be returned by enterprise.platformKeys.getTokens.
             */
            id: string;
            /**
             * Implements the WebCrypto's SubtleCrypto interface. The cryptographic operations, including key generation, are hardware-backed.
             * Only non-extractable keys can be generated. The supported key types are RSASSA-PKCS1-V1_5 and RSA-OAEP (on Chrome versions 134+) with `modulusLength` up to 2048 and ECDSA with `namedCurve` P-256. Each RSASSA-PKCS1-V1_5 and ECDSA key can be used for signing data at most once, unless the extension is allowlisted through the KeyPermissions policy, in which case the key can be used indefinitely. RSA-OAEP keys are supported since Chrome version 134 and can be used by extensions allowlisted through that same policy to unwrap other keys.
             * Keys generated on a specific `Token` cannot be used with any other Tokens, nor can they be used with `window.crypto.subtle`. Equally, `Key` objects created with `window.crypto.subtle` cannot be used with this interface.
             */
            subtleCrypto: SubtleCrypto;
            /**
             * Implements the WebCrypto's SubtleCrypto interface. The cryptographic operations, including key generation, are software-backed.
             * Protection of the keys, and thus implementation of the non-extractable property, is done in software, so the keys are less protected than hardware-backed keys.
             * Only non-extractable keys can be generated. The supported key types are RSASSA-PKCS1-V1_5 and RSA-OAEP (on Chrome versions 134+) with `modulusLength` up to 2048. Each RSASSA-PKCS1-V1_5 key can be used for signing data at most once, unless the extension is allowlisted through the KeyPermissions policy, in which case the key can be used indefinitely. RSA-OAEP keys are supported since Chrome version 134 and can be used by extensions allowlisted through that same policy to unwrap other keys.
             * Keys generated on a specific `Token` cannot be used with any other Tokens, nor can they be used with `window.crypto.subtle`. Equally, `Key` objects created with `window.crypto.subtle` cannot be used with this interface.
             * @since Chrome 97
             */
            softwareBackedSubtleCrypto: SubtleCrypto;
        }

        /** @since Chrome 110 */
        export interface ChallengeKeyOptions {
            /**
             * A challenge as emitted by the Verified Access Web API.
             */
            challenge: ArrayBuffer;
            /**
             * Which Enterprise Key to challenge.
             * @since Chrome 110
             */
            scope: `${Scope}`;
            /**
             * If present, registers the challenged key with the specified scope's token.
             * The key can then be associated with a certificate and used like any other signing key.
             * Subsequent calls to this function will then generate a new Enterprise Key in the specified scope.
             */
            registerKey?: RegisterKeyOptions | undefined;
        }

        /** @since Chrome 110 */
        export interface RegisterKeyOptions {
            /**
             * Which algorithm the registered key should use.
             */
            algorithm: `${Algorithm}`;
        }

        /**
         * Type of key to generate.
         * @since Chrome 110
         */
        export enum Algorithm {
            ECDSA = "ECDSA",
            RSA = "RSA",
        }

        /**
         * Whether to use the Enterprise User Key or the Enterprise Machine Key.
         * @since Chrome 110
         */
        export enum Scope {
            USER = "USER",
            MACHINE = "MACHINE",
        }

        /**
         * Returns the available Tokens. In a regular user's session the list will always contain the user's token with id "user". If a system-wide TPM token is available, the returned list will also contain the system-wide token with id "system". The system-wide token will be the same for all sessions on this device (device in the sense of e.g. a Chromebook).
         *
         * Can return its result via Promise since Chrome 131.
         */
        export function getTokens(): Promise<Token[]>;
        export function getTokens(callback: (tokens: Token[]) => void): void;

        /**
         * Returns the list of all client certificates available from the given token. Can be used to check for the existence and expiration of client certificates that are usable for a certain authentication.
         * @param tokenId The id of a Token returned by getTokens.
         *
         * Can return its result via Promise since Chrome 131.
         */
        export function getCertificates(tokenId: string): Promise<ArrayBuffer[]>;
        export function getCertificates(tokenId: string, callback: (certificates: ArrayBuffer[]) => void): void;

        /**
         * Imports `certificate` to the given token if the certified key is already stored in this token. After a successful certification request, this function should be used to store the obtained certificate and to make it available to the operating system and browser for authentication.
         * @param tokenId The id of a Token returned by getTokens.
         * @param certificate The DER encoding of a X.509 certificate.
         *
         * Can return its result via Promise since Chrome 131.
         */
        export function importCertificate(tokenId: string, certificate: ArrayBuffer): Promise<void>;
        export function importCertificate(tokenId: string, certificate: ArrayBuffer, callback: () => void): void;

        /**
         * Removes `certificate` from the given token if present. Should be used to remove obsolete certificates so that they are not considered during authentication and do not clutter the certificate choice. Should be used to free storage in the certificate store.
         * @param tokenId The id of a Token returned by getTokens.
         * @param certificate The DER encoding of a X.509 certificate.
         *
         * Can return its result via Promise since Chrome 131.
         */
        export function removeCertificate(tokenId: string, certificate: ArrayBuffer): Promise<void>;
        export function removeCertificate(tokenId: string, certificate: ArrayBuffer, callback: () => void): void;

        /**
         * Similar to `challengeMachineKey` and `challengeUserKey`, but allows specifying the algorithm of a registered key. Challenges a hardware-backed Enterprise Machine Key and emits the response as part of a remote attestation protocol. Only useful on ChromeOS and in conjunction with the Verified Access Web API which both issues challenges and verifies responses.
         *
         * A successful verification by the Verified Access Web API is a strong signal that the current device is a legitimate ChromeOS device, the current device is managed by the domain specified during verification, the current signed-in user is managed by the domain specified during verification, and the current device state complies with enterprise device policy. For example, a policy may specify that the device must not be in developer mode. Any device identity emitted by the verification is tightly bound to the hardware of the current device. If `user` Scope is specified, the identity is also tightly bound to the current signed-in user.
         *
         * This function is highly restricted and will fail if the current device is not managed, the current user is not managed, or if this operation has not explicitly been enabled for the caller by enterprise device policy. The challenged key does not reside in the `system` or `user` token and is not accessible by any other API.
         *
         * @param options Object containing the fields defined in {@link ChallengeKeyOptions}.
         *
         * Can return its result via Promise since Chrome 131.
         * @since Chrome 110
         */
        export function challengeKey(options: ChallengeKeyOptions): Promise<ArrayBuffer>;
        export function challengeKey(options: ChallengeKeyOptions, callback: (response: ArrayBuffer) => void): void;

        /**
         * @deprecated Deprecated since Chrome 110, use {@link challengeKey} instead.
         *
         * Challenges a hardware-backed Enterprise Machine Key and emits the response as part of a remote attestation protocol. Only useful on Chrome OS and in conjunction with the Verified Access Web API which both issues challenges and verifies responses. A successful verification by the Verified Access Web API is a strong signal of all of the following:
         *
         * * The current device is a legitimate ChromeOS device.
         * * The current device is managed by the domain specified during verification.
         * * The current signed-in user is managed by the domain specified during verification.
         * * The current device state complies with enterprise device policy. For example, a policy may specify that the device must not be in developer mode.
         * * Any device identity emitted by the verification is tightly bound to the hardware of the current device.
         *
         * This function is highly restricted and will fail if the current device is not managed, the current user is not managed, or if this operation has not explicitly been enabled for the caller by enterprise device policy. The Enterprise Machine Key does not reside in the `system` token and is not accessible by any other API.
         * @param challenge A challenge as emitted by the Verified Access Web API.
         * @param registerKey If set, the current Enterprise Machine Key is registered with the `system` token and relinquishes the Enterprise Machine Key role. The key can then be associated with a certificate and used like any other signing key. This key is 2048-bit RSA. Subsequent calls to this function will then generate a new Enterprise Machine Key. Since Chrome 59.
         *
         * Can return its result via Promise since Chrome 131.
         * @since Chrome 50
         */
        export function challengeMachineKey(challenge: ArrayBuffer): Promise<ArrayBuffer>;
        export function challengeMachineKey(challenge: ArrayBuffer, registerKey: boolean): Promise<ArrayBuffer>;
        export function challengeMachineKey(challenge: ArrayBuffer, callback: (response: ArrayBuffer) => void): void;
        export function challengeMachineKey(
            challenge: ArrayBuffer,
            registerKey: boolean,
            callback: (response: ArrayBuffer) => void,
        ): void;

        /**
         * @deprecated Deprecated since Chrome 110, use {@link challengeKey} instead.
         *
         * Challenges a hardware-backed Enterprise User Key and emits the response as part of a remote attestation protocol. Only useful on ChromeOS and in conjunction with the Verified Access Web API which both issues challenges and verifies responses. A successful verification by the Verified Access Web API is a strong signal of all of the following:
         *
         * * The current device is a legitimate ChromeOS device.
         * * The current device is managed by the domain specified during verification.
         * * The current signed-in user is managed by the domain specified during verification.
         * * The current device state complies with enterprise user policy. For example, a policy may specify that the device must not be in developer mode.
         * * The public key emitted by the verification is tightly bound to the hardware of the current device and to the current signed-in user.
         *
         * This function is highly restricted and will fail if the current device is not managed, the current user is not managed, or if this operation has not explicitly been enabled for the caller by enterprise user policy. The Enterprise User Key does not reside in the `user` token and is not accessible by any other API.
         * @param challenge A challenge as emitted by the Verified Access Web API.
         * @param registerKey If set, the current Enterprise User Key is registered with the `user` token and relinquishes the Enterprise User Key role. The key can then be associated with a certificate and used like any other signing key. This key is 2048-bit RSA. Subsequent calls to this function will then generate a new Enterprise User Key.
         * @param callback Called back with the challenge response.
         * @since Chrome 50
         */
        export function challengeUserKey(challenge: ArrayBuffer, registerKey: boolean): Promise<ArrayBuffer>;
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
     * Use the `chrome.enterprise.deviceAttributes` API to read device attributes.
     *
     * Permissions: "enterprise.deviceAttributes"
     *
     * Note: Only available to policy installed extensions.
     * @platform ChromeOS only
     * @since Chrome 46
     */
    export namespace enterprise.deviceAttributes {
        /**
         * Fetches the value of the device identifier of the directory API, that is generated by the server and identifies the cloud record of the device for querying in the cloud directory API. If the current user is not affiliated, returns an empty string.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getDirectoryDeviceId(): Promise<string>;
        export function getDirectoryDeviceId(callback: (deviceId: string) => void): void;

        /**
         * Fetches the device's serial number. Please note the purpose of this API is to administrate the device (e.g. generating Certificate Sign Requests for device-wide certificates). This API may not be used for tracking devices without the consent of the device's administrator. If the current user is not affiliated, returns an empty string.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @since Chrome 66
         */
        export function getDeviceSerialNumber(): Promise<string>;
        export function getDeviceSerialNumber(callback: (serialNumber: string) => void): void;

        /**
         * Fetches the administrator-annotated Asset Id. If the current user is not affiliated or no Asset Id has been set by the administrator, returns an empty string.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @since Chrome 66
         */
        export function getDeviceAssetId(): Promise<string>;
        export function getDeviceAssetId(callback: (assetId: string) => void): void;

        /**
         * Fetches the administrator-annotated Location. If the current user is not affiliated or no Annotated Location has been set by the administrator, returns an empty string.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @since Chrome 66
         */
        export function getDeviceAnnotatedLocation(): Promise<string>;
        export function getDeviceAnnotatedLocation(callback: (annotatedLocation: string) => void): void;

        /**
         * Fetches the device's hostname as set by DeviceHostnameTemplate policy. If the current user is not affiliated or no hostname has been set by the enterprise policy, returns an empty string.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @since Chrome 82
         */
        export function getDeviceHostname(): Promise<string>;
        export function getDeviceHostname(callback: (hostname: string) => void): void;
    }

    ////////////////////
    // Enterprise Hardware Platform
    ////////////////////
    /**
     * Use the `chrome.enterprise.hardwarePlatform` API to get the manufacturer and model of the hardware platform where the browser runs.
     *
     * Permissions: "enterprise.hardwarePlatform"
     *
     * Note: Only available to policy installed extensions.
     * @since Chrome 71
     */
    export namespace enterprise.hardwarePlatform {
        export interface HardwarePlatformInfo {
            manufacturer: string;
            model: string;
        }

        /**
         * Obtains the manufacturer and model for the hardware platform and, if the extension is authorized, returns it via callback.
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getHardwarePlatformInfo(): Promise<HardwarePlatformInfo>;
        export function getHardwarePlatformInfo(callback: (info: HardwarePlatformInfo) => void): void;
    }

    ////////////////////
    // Enterprise Login
    ////////////////////
    /**
     * Use the `chrome.enterprise.login` API to exit Managed Guest sessions. Note: This API is only available to extensions installed by enterprise policy in ChromeOS Managed Guest sessions.
     *
     * Permissions: "enterprise.login"
     *
     * Note: Only available to policy installed extensions.
     * @platform ChromeOS only
     * @since Chrome 139
     */
    export namespace enterprise.login {
        /** Exits the current managed guest session. */
        export function exitCurrentManagedGuestSession(): Promise<void>;
        export function exitCurrentManagedGuestSession(callback: () => void): void;
    }

    ////////////////////
    // Enterprise Networking Attributes
    ////////////////////
    /**
     * Use the `chrome.enterprise.networkingAttributes` API to read information about your current network. Note: This API is only available to extensions force-installed by enterprise policy.
     *
     * Permissions: "enterprise.networkingAttributes"
     *
     * Note: Only available to policy installed extensions.
     * @platform ChromeOS only
     * @since Chrome 85
     */
    export namespace enterprise.networkingAttributes {
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
     * The `chrome.events` namespace contains common types used by APIs dispatching events to notify you when something interesting happens.
     */
    export namespace events {
        /** Filters URLs for various criteria. See event filtering. All criteria are case sensitive. */
        export interface UrlFilter {
            /**
             * Matches if the host part of the URL is an IP address and is contained in any of the CIDR blocks specified in the array.
             * @since Chrome 123
             */
            cidrBlocks?: string[] | undefined;
            /** Matches if the scheme of the URL is equal to any of the schemes specified in the array. */
            schemes?: string[] | undefined;
            /** Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax. */
            urlMatches?: string | undefined;
            /** Matches if the path segment of the URL contains a specified string. */
            pathContains?: string | undefined;
            /** Matches if the host name of the URL ends with a specified string. */
            hostSuffix?: string | undefined;
            /** Matches if the host name of the URL starts with a specified string. */
            hostPrefix?: string | undefined;
            /** Matches if the host name of the URL contains a specified string. To test whether a host name component has a prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the beginning of the host name. Similarly, hostContains can be used to match against component suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last components need to be done separately using hostSuffix, because no implicit dot is added at the end of the host name. */
            hostContains?: string | undefined;
            /** Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number. */
            urlContains?: string | undefined;
            /** Matches if the query segment of the URL ends with a specified string. */
            querySuffix?: string | undefined;
            /** Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number. */
            urlPrefix?: string | undefined;
            /** Matches if the host name of the URL is equal to a specified string. */
            hostEquals?: string | undefined;
            /** Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number. */
            urlEquals?: string | undefined;
            /** Matches if the query segment of the URL contains a specified string. */
            queryContains?: string | undefined;
            /** Matches if the path segment of the URL starts with a specified string. */
            pathPrefix?: string | undefined;
            /** Matches if the path segment of the URL is equal to a specified string. */
            pathEquals?: string | undefined;
            /** Matches if the path segment of the URL ends with a specified string. */
            pathSuffix?: string | undefined;
            /** Matches if the query segment of the URL is equal to a specified string. */
            queryEquals?: string | undefined;
            /** Matches if the query segment of the URL starts with a specified string. */
            queryPrefix?: string | undefined;
            /** Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number. */
            urlSuffix?: string | undefined;
            /** Matches if the port of the URL is contained in any of the specified port lists. For example `[80, 443, [1000, 1200]]` matches all requests on port 80, 443 and in the range 1000-1200. */
            ports?: Array<number | number[]> | undefined;
            /** Matches if the URL without query segment and fragment identifier matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax. */
            originAndPathMatches?: string | undefined;
        }

        export interface Event<T extends (...args: any) => void> {
            /**
             * Registers an event listener callback to an event.
             * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
             */
            addListener(callback: T): void;

            /**
             * Returns currently registered rules.
             * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are returned.
             */
            getRules(
                /** @param rules Rules that were registered, the optional parameters are filled with values */
                callback: (rules: Rule[]) => void,
            ): void;
            getRules(
                ruleIdentifiers: string[],
                /** @param rules Rules that were registered, the optional parameters are filled with values */
                callback: (rules: Rule[]) => void,
            ): void;

            /**
             * @param callback Listener whose registration status shall be tested.
             * @returns True if _callback_ is registered to the event.
             */
            hasListener(callback: T): boolean;

            /**
             * Unregisters currently registered rules.
             * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are unregistered.
             */
            removeRules(ruleIdentifiers: string[] | undefined, callback?: () => void): void;
            removeRules(callback?: () => void): void;

            /**
             * Registers rules to handle events.
             * @param rules Rules to be registered. These do not replace previously registered rules.
             * @param callback Called with registered rules.
             */
            addRules(
                rules: Rule[],
                /** @param rules Rules that were registered, the optional parameters are filled with values */
                callback?: (rules: Rule[]) => void,
            ): void;

            /**
             * Deregisters an event listener callback from an event.
             * @param callback Listener that shall be unregistered.
             */
            removeListener(callback: T): void;

            /** @returns True if any event listeners are registered to the event. */
            hasListeners(): boolean;
        }

        /** Description of a declarative rule for handling events. */
        export interface Rule {
            /** Optional priority of this rule. Defaults to 100. */
            priority?: number | undefined;
            /** List of conditions that can trigger the actions. */
            conditions: any[];
            /** Optional identifier that allows referencing this rule. */
            id?: string | undefined;
            /** List of actions that are triggered if one of the conditions is fulfilled. */
            actions: any[];
            /** Tags can be used to annotate rules and perform operations on sets of rules. */
            tags?: string[] | undefined;
        }
    }

    ////////////////////
    // Extension
    ////////////////////
    /**
     * The `chrome.extension` API has utilities that can be used by any extension page. It includes support for exchanging messages between an extension and its content scripts or between extensions, as described in detail in Message Passing.
     */
    export namespace extension {
        /**
         * The type of extension view.
         * @since Chrome 44
         */
        export enum ViewType {
            TAB = "tab",
            POPUP = "popup",
        }

        export interface FetchProperties {
            /**
             * Find a view according to a tab id. If this field is omitted, returns all views.
             * @since Chrome 54
             */
            tabId?: number | undefined;
            /** The window to restrict the search to. If omitted, returns all views. */
            windowId?: number | undefined;
            /** The type of view to get. If omitted, returns all views (including background pages and tabs). */
            type?: `${ViewType}` | undefined;
        }

        /** True for content scripts running inside incognito tabs, and for extension pages running inside an incognito process. The latter only applies to extensions with 'split' incognito_behavior. */
        export const inIncognitoContext: boolean;

        /**
         * Set for the lifetime of a callback if an ansychronous extension api has resulted in an error. If no error has occurred lastError will be `undefined`.
         * @deprecated since Chrome 58. Please use {@link runtime.lastError}
         */
        export const lastError: runtime.LastError | undefined;

        /** Returns the JavaScript 'window' object for the background page running inside the current extension. Returns null if the extension has no background page. */
        export function getBackgroundPage(): Window | null;

        /**
         * Converts a relative path within an extension install directory to a fully-qualified URL.
         * @param path A path to a resource within an extension expressed relative to its install directory.
         * @deprecated since Chrome 58. Please use {@link runtime.getURL}
         */
        export function getURL(path: string): string;

        /** Sets the value of the ap CGI parameter used in the extension's update URL. This value is ignored for extensions that are hosted in the Chrome Extension Gallery. */
        export function setUpdateUrlData(data: string): void;

        /** Returns an array of the JavaScript 'window' objects for each of the pages running inside the current extension. */
        export function getViews(fetchProperties?: FetchProperties): Window[];

        /**
         * Retrieves the state of the extension's access to the 'file://' scheme. This corresponds to the user-controlled per-extension 'Allow access to File URLs' setting accessible via the `chrome://extensions` page.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 99.
         */
        export function isAllowedFileSchemeAccess(): Promise<boolean>;
        export function isAllowedFileSchemeAccess(callback: (isAllowedAccess: boolean) => void): void;

        /**
         * Retrieves the state of the extension's access to Incognito-mode. This corresponds to the user-controlled per-extension 'Allowed in Incognito' setting accessible via the `chrome://extensions` page.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 99.
         */
        export function isAllowedIncognitoAccess(): Promise<boolean>;
        export function isAllowedIncognitoAccess(callback: (isAllowedAccess: boolean) => void): void;

        /**
         * Sends a single request to other listeners within the extension. Similar to {@link runtime.connect}, but only sends a single request with an optional response. The {@link extension.onRequest} event is fired in each page of the extension.
         *
         * MV2 only
         * @param extensionId The extension ID of the extension you want to connect to. If omitted, default is your own extension.
         * @deprecated Please use {@link runtime.sendMessage}
         */
        export function sendRequest<Request = any, Response = any>(
            extensionId: string | undefined,
            request: Request,
            callback?: (response: Response) => void,
        ): void;
        export function sendRequest<Request = any, Response = any>(
            request: Request,
            callback?: (response: Response) => void,
        ): void;

        /**
         * Returns an array of the JavaScript 'window' objects for each of the tabs running inside the current extension. If `windowId` is specified, returns only the 'window' objects of tabs attached to the specified window.
         *
         * MV2 only
         * @deprecated Please use {@link extension.getViews} `{type: "tab"}`.
         */
        export function getExtensionTabs(windowId?: number): Window[];

        /**
         * Fired when a request is sent from either an extension process or a content script.
         *
         * MV2 only
         * @deprecated Please use {@link runtime.onMessage}.
         */
        export const onRequest: chrome.events.Event<
            | ((request: any, sender: runtime.MessageSender, sendResponse: (response: any) => void) => void)
            | ((sender: runtime.MessageSender, sendResponse: (response: any) => void) => void)
        >;

        /**
         * Fired when a request is sent from another extension.
         *
         * MV2 only
         * @deprecated Please use {@link runtime.onMessageExternal}.
         */
        export const onRequestExternal: chrome.events.Event<
            | ((request: any, sender: runtime.MessageSender, sendResponse: (response: any) => void) => void)
            | ((sender: runtime.MessageSender, sendResponse: (response: any) => void) => void)
        >;
    }

    ////////////////////
    // Extension Types
    ////////////////////
    /** The `chrome.extensionTypes` API contains type declarations for Chrome extensions. */
    export namespace extensionTypes {
        /** @since Chrome 139 */
        export type ColorArray = [number, number, number, number];

        /**
         * The origin of injected CSS.
         * @since Chrome 66
         */
        export type CSSOrigin = "author" | "user";

        /**
         * The document lifecycle of the frame.
         * @since Chrome 106
         */
        export type DocumentLifecycle = "prerender" | "active" | "cached" | "pending_deletion";

        /**
         * The type of frame.
         * @since Chrome 106
         */
        export type FrameType = "outermost_frame" | "fenced_frame" | "sub_frame";

        /** Details about the format and quality of an image. */
        export interface ImageDetails {
            /** The format of the resulting image. Default is `"jpeg"`. */
            format?: ImageFormat | undefined;
            /** When format is `"jpeg"`, controls the quality of the resulting image. This value is ignored for PNG images. As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed to store it will decrease. */
            quality?: number | undefined;
        }

        /**
         * The format of an image.
         * @since Chrome 44
         */
        export type ImageFormat = "jpeg" | "png";

        /** Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time. */
        export interface InjectDetails {
            /** If allFrames is `true`, implies that the JavaScript or CSS should be injected into all frames of current page. By default, it's `false` and is only injected into the top frame. If `true` and `frameId` is set, then the code is inserted in the selected frame and all of its child frames. */
            allFrames?: boolean | undefined;
            /**
             * JavaScript or CSS code to inject.
             *
             * **Warning:** Be careful using the `code` parameter. Incorrect use of it may open your extension to cross site scripting attacks
             */
            code?: string | undefined;
            /**
             * The origin of the CSS to inject. This may only be specified for CSS, not JavaScript. Defaults to `"author"`.
             * @since Chrome 66
             */
            cssOrigin?: CSSOrigin | undefined;
            /** JavaScript or CSS file to inject. */
            file?: string | undefined;
            /**
             * The frame where the script or CSS should be injected. Defaults to 0 (the top-level frame).
             * @since Chrome 50
             */
            frameId?: number | undefined;
            /** If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is `false`. */
            matchAboutBlank?: boolean;
            /** The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle". */
            runAt?: RunAt | undefined;
        }

        /**
         * The soonest that the JavaScript or CSS will be injected into the tab.
         *
         * "document_start" : Script is injected after any files from css, but before any other DOM is constructed or any other script is run.
         *
         * "document_end" : Script is injected immediately after the DOM is complete, but before subresources like images and frames have loaded.
         *
         * "document_idle" : The browser chooses a time to inject the script between "document_end" and immediately after the `window.onload` event fires. The exact moment of injection depends on how complex the document is and how long it is taking to load, and is optimized for page load speed. Content scripts running at "document_idle" don't need to listen for the `window.onload` event; they are guaranteed to run after the DOM completes. If a script definitely needs to run after `window.onload`, the extension can check if `onload` has already fired by using the `document.readyState` property.
         * @since Chrome 44
         */
        export type RunAt = "document_start" | "document_end" | "document_idle";
    }

    ////////////////////
    // File Browser Handler
    ////////////////////
    /**
     * Use the `chrome.fileBrowserHandler` API to extend the Chrome OS file browser. For example, you can use this API to enable users to upload files to your website.
     *
     * Permissions: "fileBrowserHandler"
     * @platform ChromeOS only
     */
    export namespace fileBrowserHandler {
        /** Event details payload for fileBrowserHandler.onExecute event. */
        export interface FileHandlerExecuteEventDetails {
            /** The ID of the tab that raised this event. Tab IDs are unique within a browser session. */
            tab_id?: number;
            /** Array of Entry instances representing files that are targets of this action (selected in ChromeOS file browser). */
            entries: any[];
        }

        /** Fired when file system action is executed from ChromeOS file browser. */
        export const onExecute: events.Event<(id: string, details: FileHandlerExecuteEventDetails) => void>;
    }

    ////////////////////
    // File System Provider
    ////////////////////
    /**
     * Use the `chrome.fileSystemProvider` API to create file systems, that can be accessible from the file manager on Chrome OS.
     *
     * Permissions: "fileSystemProvider"
     * @platform ChromeOS only
     */
    export namespace fileSystemProvider {
        export interface AbortRequestedOptions {
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** An ID of the request to be aborted. */
            operationRequestId: number;
            /** The unique identifier of this request. */
            requestId: number;
        }

        /** @since Chrome 45 */
        export interface Action {
            /** The identifier of the action. Any string or {@link CommonActionId} for common actions. */
            id: string;
            /** The title of the action. It may be ignored for common actions. */
            title?: string;
        }

        export interface AddWatcherRequestedOptions {
            /** The path of the entry to be observed. */
            entryPath: string;
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** Whether observing should include all child entries recursively. It can be true for directories only. */
            recursive: boolean;
            /** The unique identifier of this request. */
            requestId: number;
        }

        export interface Change {
            /** The type of the change which happened to the entry. */
            changeType: `${ChangeType}`;
            /**
             * Information relating to the file if backed by a cloud file system.
             * @since Chrome 125
             */
            cloudFileInfo?: CloudFileInfo;
            /** The path of the changed entry. */
            entryPath: string;
        }

        /** Type of a change detected on the observed directory. */
        export enum ChangeType {
            CHANGED = "CHANGED",
            DELETED = "DELETED",
        }

        export interface CloseFileRequestedOptions {
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** A request ID used to open the file. */
            openRequestId: number;
            /** The unique identifier of this request. */
            requestId: number;
        }

        /** @since Chrome 125 */
        export interface CloudFileInfo {
            /** A tag that represents the version of the file. */
            versionTag?: string;
        }

        /** @since Chrome 117 */
        export interface CloudIdentifier {
            /** The provider's identifier for the given file/directory. */
            id: string;
            /** Identifier for the cloud storage provider (e.g. 'drive.google.com'). */
            providerName: string;
        }

        /**
         * List of common actions. `"SHARE"` is for sharing files with others. `"SAVE_FOR_OFFLINE"` for pinning (saving for offline access). `"OFFLINE_NOT_NECESSARY"` for notifying that the file doesn't need to be stored for offline access anymore. Used by {@link onGetActionsRequested} and {@link onExecuteActionRequested}.
         * @since Chrome 45
         */
        export enum CommonActionId {
            SAVE_FOR_OFFLINE = "SAVE_FOR_OFFLINE",
            OFFLINE_NOT_NECESSARY = "OFFLINE_NOT_NECESSARY",
            SHARE = "SHARE",
        }

        /** @since Chrome 44 */
        export interface ConfigureRequestedOptions {
            /** The identifier of the file system to be configured. */
            fileSystemId: string;
            /** The unique identifier of this request. */
            requestId: number;
        }

        export interface CopyEntryRequestedOptions {
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** The unique identifier of this request. */
            requestId: number;
            /** The source path of the entry to be copied. */
            sourcePath: string;
            /** The destination path for the copy operation. */
            targetPath: string;
        }

        export interface CreateDirectoryRequestedOptions {
            /** The path of the directory to be created. */
            directoryPath: string;
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** Whether the operation is recursive (for directories only). */
            recursive: boolean;
            /** The unique identifier of this request. */
            requestId: number;
        }

        export interface CreateFileRequestedOptions {
            /** The path of the file to be created. */
            filePath: string;
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** The unique identifier of this request. */
            requestId: number;
        }

        export interface DeleteEntryRequestedOptions {
            /** The path of the entry to be deleted. */
            entryPath: string;
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** Whether the operation is recursive (for directories only). */
            recursive: boolean;
            /** The unique identifier of this request. */
            requestId: number;
        }

        export interface EntryMetadata {
            /**
             * Information that identifies a specific file in the underlying cloud file system. Must be provided if requested in `options` and the file is backed by cloud storage.
             * @since Chrome 125
             */
            cloudFileInfo?: CloudFileInfo;
            /**
             * Cloud storage representation of this entry. Must be provided if requested in `options` and the file is backed by cloud storage. For local files not backed by cloud storage, it should be undefined when requested.
             * @since Chrome 117
             */
            cloudIdentifier?: CloudIdentifier;
            /** True if it is a directory. Must be provided if requested in `options`. */
            isDirectory?: boolean;
            /** Mime type for the entry. Always optional, but should be provided if requested in `options`. */
            mimeType?: string;
            /** The last modified time of this entry. Must be provided if requested in `options`. */
            modificationTime?: Date;
            /** Name of this entry (not full path name). Must not contain '/'. For root it must be empty. Must be provided if requested in `options`. */
            name?: string;
            /** File size in bytes. Must be provided if requested in `options`. */
            size?: number;
            /** Thumbnail image as a data URI in either PNG, JPEG or WEBP format, at most 32 KB in size. Optional, but can be provided only when explicitly requested by the {@link onGetMetadataRequested} event. */
            thumbnail?: string;
        }

        /** @since Chrome 45 */
        export interface ExecuteActionRequestedOptions {
            /** The identifier of the action to be executed. */
            actionId: string;
            /**
             * The set of paths of the entries to be used for the action.
             * @since Chrome 47
             */
            entryPaths: string[];
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** The unique identifier of this request. */
            requestId: number;
        }

        export interface FileSystemInfo {
            /** A human-readable name for the file system. */
            displayName: string;
            /** The identifier of the file system. */
            fileSystemId: string;
            /** List of currently opened files. */
            openedFiles: OpenedFile[];
            /** The maximum number of files that can be opened at once. If 0, then not limited. */
            openedFilesLimit: number;
            /**
             * Whether the file system supports the `tag` field for observing directories.
             * @since Chrome 45
             */
            supportsNotifyTag?: boolean;
            /**
             * List of watchers.
             * @since Chrome 45
             */
            watchers: Watcher[];
            /** Whether the file system supports operations which may change contents of the file system (such as creating, deleting or writing to files). */
            writable: boolean;
        }

        /** @since Chrome 45 */
        export interface GetActionsRequestedOptions {
            /**
             * List of paths of entries for the list of actions.
             * @since Chrome 47
             */
            entryPaths: string[];
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** The unique identifier of this request. */
            requestId: number;
        }

        export interface GetMetadataRequestedOptions {
            /**
             * Set to `true` if `cloudFileInfo` value is requested.
             * @since Chrome 125
             */
            cloudFileInfo: boolean;
            /**
             * Set to `true` if `cloudIdentifier` value is requested.
             * @since Chrome 117
             */
            cloudIdentifier: boolean;
            /** The path of the entry to fetch metadata about. */
            entryPath: string;
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /**
             * Set to `true` if `is_directory` value is requested.
             * @since Chrome 49
             */
            isDirectory: boolean;
            /**
             * Set to `true` if `mimeType` value is requested.
             * @since Chrome 49
             */
            mimeType: boolean;
            /**
             * Set to `true` if `modificationTime` value is requested.
             * @since Chrome 49
             */
            modificationTime: boolean;
            /**
             * Set to `true` if `name` value is requested.
             * @since Chrome 49
             */
            name: boolean;
            /** The unique identifier of this request. */
            requestId: number;
            /**
             * Set to `true` if `size` value is requested.
             * @since Chrome 49
             */
            size: boolean;
            /** Set to `true` if `thumbnail` value is requested. */
            thumbnail: boolean;
        }

        export interface MountOptions {
            /** A human-readable name for the file system. */
            displayName: string;
            /** The string identifier of the file system. Must be unique per each extension. */
            fileSystemId: string;
            /** The maximum number of files that can be opened at once. If not specified, or 0, then not limited. */
            openedFilesLimit?: number;
            /**
             * Whether the framework should resume the file system at the next sign-in session. True by default.
             * @since Chrome 64
             */
            persistent?: boolean;
            /**
             * Whether the file system supports the `tag` field for observed directories.
             * @since Chrome 45
             */
            supportsNotifyTag?: boolean;
            /** Whether the file system supports operations which may change contents of the file system (such as creating, deleting or writing to files). */
            writable?: boolean;
        }

        export interface MoveEntryRequestedOptions {
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** The unique identifier of this request. */
            requestId: number;
            /** The source path of the entry to be moved into a new place. */
            sourcePath: string;
            /** The destination path for the copy operation. */
            targetPath: string;
        }

        export interface NotifyOptions {
            /** The type of the change which happened to the observed entry. If it is DELETED, then the observed entry will be automatically removed from the list of observed entries. */
            changeType: `${ChangeType}`;
            /** List of changes to entries within the observed directory (including the entry itself) */
            changes?: Change[];
            /** The identifier of the file system related to this change. */
            fileSystemId: string;
            /** The path of the observed entry. */
            observedPath: string;
            /** Mode of the observed entry. */
            recursive: boolean;
            /** Tag for the notification. Required if the file system was mounted with the `supportsNotifyTag` option. Note, that this flag is necessary to provide notifications about changes which changed even when the system was shutdown. */
            tag?: string;
        }

        export interface OpenedFile {
            /** The path of the opened file. */
            filePath: string;
            /** Whether the file was opened for reading or writing. */
            mode: `${OpenFileMode}`;
            /** A request ID to be be used by consecutive read/write and close requests. */
            openRequestId: number;
        }

        /** Mode of opening a file. Used by {@link onOpenFileRequested}. */
        export enum OpenFileMode {
            READ = "READ",
            WRITE = "WRITE",
        }

        export interface OpenFileRequestedOptions {
            /** The path of the file to be opened. */
            filePath: string;
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** Whether the file will be used for reading or writing. */
            mode: `${OpenFileMode}`;
            /** A request ID which will be used by consecutive read/write and close requests. */
            requestId: number;
        }

        /** Error codes used by providing extensions in response to requests as well as in case of errors when calling methods of the API. For success, `"OK"` must be used.*/
        export enum ProviderError {
            OK = "OK",
            FAILED = "FAILED",
            IN_USE = "IN_USE",
            EXISTS = "EXISTS",
            NOT_FOUND = "NOT_FOUND",
            ACCESS_DENIED = "ACCESS_DENIED",
            TOO_MANY_OPENED = "TOO_MANY_OPENED",
            NO_MEMORY = "NO_MEMORY",
            NO_SPACE = "NO_SPACE",
            NOT_A_DIRECTORY = "NOT_A_DIRECTORY",
            INVALID_OPERATION = "INVALID_OPERATION",
            SECURITY = "SECURITY",
            ABORT = "ABORT",
            NOT_A_FILE = "NOT_A_FILE",
            NOT_EMPTY = "NOT_EMPTY",
            INVALID_URL = "INVALID_URL",
            IO = "IO",
        }

        export interface ReadDirectoryRequestedOptions {
            /** The path of the directory which contents are requested. */
            directoryPath: string;
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /**
             * Set to `true` if `is_directory` value is requested.
             * @since Chrome 49
             */
            isDirectory: boolean;
            /**
             * Set to `true` if `mimeType` value is requested.
             * @since Chrome 49
             */
            mimeType: boolean;
            /**
             * Set to `true` if `modificationTime` value is requested.
             * @since Chrome 49
             */
            modificationTime: boolean;
            /**
             * Set to `true` if `name` value is requested.
             * @since Chrome 49
             */
            name: boolean;
            /** The unique identifier of this request. */
            requestId: number;
            /**
             * Set to `true` if `size` value is requested.
             * @since Chrome 49
             */
            size: boolean;
            /**
             * Set to `true` if `thumbnail` value is requested.
             * @since Chrome 49
             */
            thumbnail: boolean;
        }

        export interface ReadFileRequestedOptions {
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** Number of bytes to be returned. */
            length: number;
            /** Position in the file (in bytes) to start reading from. */
            offset: number;
            /** A request ID used to open the file. */
            openRequestId: number;
            /** The unique identifier of this request. */
            requestId: number;
        }

        export interface RemoveWatcherRequestedOptions {
            /** The path of the watched entry. */
            entryPath: string;
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** Mode of the watcher. */
            recursive: boolean;
            /** The unique identifier of this request. */
            requestId: number;
        }

        export interface TruncateRequestedOptions {
            /** The path of the file to be truncated. */
            filePath: string;
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** Number of bytes to be retained after the operation completes. */
            length: number;
            /** The unique identifier of this request. */
            requestId: number;
        }

        export interface UnmountOptions {
            /** The identifier of the file system to be unmounted. */
            fileSystemId: string;
        }

        export interface UnmountRequestedOptions {
            /** The identifier of the file system to be unmounted. */
            fileSystemId: string;
            /** The unique identifier of this request. */
            requestId: number;
        }

        export interface Watcher {
            /** The path of the entry being observed. */
            entryPath: string;
            /** Tag used by the last notification for the watcher. */
            lastTag?: string;
            /** Whether watching should include all child entries recursively. It can be true for directories only. */
            recursive: boolean;
        }

        export interface WriteFileRequestedOptions {
            /** Buffer of bytes to be written to the file. */
            data: ArrayBuffer;
            /** The identifier of the file system related to this operation. */
            fileSystemId: string;
            /** Position in the file (in bytes) to start writing the bytes from. */
            offset: number;
            /** A request ID used to open the file. */
            openRequestId: number;
            /** The unique identifier of this request. */
            requestId: number;
        }

        /**
         * Returns information about a file system with the passed `fileSystemId`.
         *
         * Can return its result via Promise since Chrome 96.
         */
        export function get(fileSystemId: string): Promise<FileSystemInfo>;
        export function get(fileSystemId: string, callback: (fileSystem: FileSystemInfo) => void): void;

        /**
         * Returns all file systems mounted by the extension.
         *
         * Can return its result via Promise since Chrome 96.
         */
        export function getAll(): Promise<FileSystemInfo[]>;
        export function getAll(callback: (fileSystems: FileSystemInfo[]) => void): void;

        /**
         * Mounts a file system with the given `fileSystemId` and `displayName`. `displayName` will be shown in the left panel of the Files app. `displayName` can contain any characters including '/', but cannot be an empty string. `displayName` must be descriptive but doesn't have to be unique. The `fileSystemId` must not be an empty string.
         *
         * Depending on the type of the file system being mounted, the `source` option must be set appropriately.
         *
         * In case of an error, {@link runtime.lastError} will be set with a corresponding error code.
         *
         * Can return its result via Promise since Chrome 96.
         */
        export function mount(options: MountOptions): Promise<void>;
        export function mount(options: MountOptions, callback: () => void): void;

        /**
         * Notifies about changes in the watched directory at `observedPath` in `recursive` mode. If the file system is mounted with `supportsNotifyTag`, then `tag` must be provided, and all changes since the last notification always reported, even if the system was shutdown. The last tag can be obtained with {@link getAll}.
         *
         * To use, the `file_system_provider.notify` manifest option must be set to true.
         *
         * Value of `tag` can be any string which is unique per call, so it's possible to identify the last registered notification. Eg. if the providing extension starts after a reboot, and the last registered notification's tag is equal to "123", then it should call {@link notify} for all changes which happened since the change tagged as "123". It cannot be an empty string.
         *
         * Not all providers are able to provide a tag, but if the file system has a changelog, then the tag can be eg. a change number, or a revision number.
         *
         * Note that if a parent directory is removed, then all descendant entries are also removed, and if they are watched, then the API must be notified about the fact. Also, if a directory is renamed, then all descendant entries are in fact removed, as there is no entry under their original paths anymore.
         *
         * In case of an error, {@link runtime.lastError} will be set will a corresponding error code.
         *
         * Can return its result via Promise since Chrome 96.
         * @since Chrome 45
         */
        export function notify(options: NotifyOptions): Promise<void>;
        export function notify(options: NotifyOptions, callback: () => void): void;

        /**
         * Unmounts a file system with the given `fileSystemId`. It must be called after {@link onUnmountRequested} is invoked. Also, the providing extension can decide to perform unmounting if not requested (eg. in case of lost connection, or a file error).
         *
         * In case of an error, {@link runtime.lastError} will be set with a corresponding error code.
         *
         * Can return its result via Promise since Chrome 96.
         */
        export function unmount(options: UnmountOptions): Promise<void>;
        export function unmount(options: UnmountOptions, callback: () => void): void;

        /** Raised when aborting an operation with `operationRequestId` is requested. The operation executed with `operationRequestId` must be immediately stopped and `successCallback` of this abort request executed. If aborting fails, then `errorCallback` must be called. Note, that callbacks of the aborted operation must not be called, as they will be ignored. Despite calling `errorCallback`, the request may be forcibly aborted. */
        export const onAbortRequested: events.Event<
            (
                options: AbortRequestedOptions,
                successCallback: () => void,
                errorCallback: (error: `${ProviderError}`) => void,
            ) => void
        >;

        /**
         * Raised when setting a new directory watcher is requested. If an error occurs, then `errorCallback` must be called.
         * @since Chrome 45
         */
        export const onAddWatcherRequested: events.Event<
            (
                options: AddWatcherRequestedOptions,
                successCallback: () => void,
                errorCallback: (error: `${ProviderError}`) => void,
            ) => void
        >;

        /** Raised when opening a file previously opened with `openRequestId` is requested to be closed.*/
        export const onCloseFileRequested: events.Event<
            (
                options: CloseFileRequestedOptions,
                successCallback: () => void,
                errorCallback: (error: `${ProviderError}`) => void,
            ) => void
        >;

        /**
         * Raised when showing a configuration dialog for `fileSystemId` is requested. If it's handled, the `file_system_provider.configurable` manifest option must be set to true.
         * @since Chrome 44
         */
        export const onConfigureRequested: events.Event<
            (
                options: ConfigureRequestedOptions,
                successCallback: () => void,
                errorCallback: (error: `${ProviderError}`) => void,
            ) => void
        >;

        /** Raised when copying an entry (recursively if a directory) is requested. If an error occurs, then `errorCallback` must be called. */
        export const onCopyEntryRequested: events.Event<
            (
                options: CopyEntryRequestedOptions,
                successCallback: () => void,
                errorCallback: (error: `${ProviderError}`) => void,
            ) => void
        >;

        /** Raised when creating a directory is requested. The operation must fail with the EXISTS error if the target directory already exists. If `recursive` is true, then all of the missing directories on the directory path must be created. */
        export const onCreateDirectoryRequested: events.Event<
            (
                options: CreateDirectoryRequestedOptions,
                successCallback: () => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /** Raised when creating a file is requested. If the file already exists, then `errorCallback` must be called with the `"EXISTS"` error code. */
        export const onCreateFileRequested: events.Event<
            (
                options: CreateFileRequestedOptions,
                successCallback: () => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /** Raised when deleting an entry is requested. If `recursive` is true, and the entry is a directory, then all of the entries inside must be recursively deleted as well. */
        export const onDeleteEntryRequested: events.Event<
            (
                options: DeleteEntryRequestedOptions,
                successCallback: () => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /**
         * Raised when executing an action for a set of files or directories is\\ requested. After the action is completed, `successCallback` must be called. On error, `errorCallback` must be called.
         * @since Chrome 48
         */
        export const onExecuteActionRequested: events.Event<
            (
                options: ExecuteActionRequestedOptions,
                successCallback: () => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /**
         * Raised when a list of actions for a set of files or directories at `entryPaths` is requested. All of the returned actions must be applicable to each entry. If there are no such actions, an empty array should be returned. The actions must be returned with the `successCallback` call. In case of an error, `errorCallback` must be called.
         * @since Chrome 48
         */
        export const onGetActionsRequested: events.Event<
            (
                options: GetActionsRequestedOptions,
                successCallback: (
                    actions: Action[],
                ) => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /** Raised when metadata of a file or a directory at `entryPath` is requested. The metadata must be returned with the `successCallback` call. In case of an error, `errorCallback` must be called. */
        export const onGetMetadataRequested: events.Event<
            (
                options: GetMetadataRequestedOptions,
                successCallback: (
                    metadata: EntryMetadata,
                ) => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /**
         * Raised when showing a dialog for mounting a new file system is requested. If the extension/app is a file handler, then this event shouldn't be handled. Instead `app.runtime.onLaunched` should be handled in order to mount new file systems when a file is opened. For multiple mounts, the `file_system_provider.multiple_mounts` manifest option must be set to true.
         * @since Chrome 44
         */
        export const onMountRequested: events.Event<
            (
                successCallback: () => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /** Raised when moving an entry (recursively if a directory) is requested. If an error occurs, then `errorCallback` must be called. */
        export const onMoveEntryRequested: events.Event<
            (
                options: MoveEntryRequestedOptions,
                successCallback: () => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /** Raised when opening a file at `filePath` is requested. If the file does not exist, then the operation must fail. Maximum number of files opened at once can be specified with `MountOptions`. */
        export const onOpenFileRequested: events.Event<
            (
                options: OpenFileRequestedOptions,
                successCallback: (
                    /**
                     * @since Chrome 125
                     */
                    metadata?: EntryMetadata,
                ) => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /** Raised when contents of a directory at `directoryPath` are requested. The results must be returned in chunks by calling the `successCallback` several times. In case of an error, `errorCallback` must be called. */
        export const onReadDirectoryRequested: events.Event<
            (
                options: ReadDirectoryRequestedOptions,
                successCallback: (
                    entries: EntryMetadata[],
                    hasMore: boolean,
                ) => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /** Raised when reading contents of a file opened previously with `openRequestId` is requested. The results must be returned in chunks by calling `successCallback` several times. In case of an error, `errorCallback` must be called. */
        export const onReadFileRequested: events.Event<
            (
                options: ReadFileRequestedOptions,
                successCallback: (
                    data: ArrayBuffer,
                    hasMore: boolean,
                ) => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /**
         * Raised when the watcher should be removed. If an error occurs, then `errorCallback` must be called.
         * @since Chrome 45
         */
        export const onRemoveWatcherRequested: events.Event<
            (
                options: RemoveWatcherRequestedOptions,
                successCallback: () => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /** Raised when truncating a file to a desired length is requested. If an error occurs, then `errorCallback` must be called. */
        export const onTruncateRequested: events.Event<
            (
                options: TruncateRequestedOptions,
                successCallback: () => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /** Raised when unmounting for the file system with the `fileSystemId` identifier is requested. In the response, the {@link unmount} API method must be called together with `successCallback`. If unmounting is not possible (eg. due to a pending operation), then `errorCallback` must be called. */
        export const onUnmountRequested: events.Event<
            (
                options: UnmountRequestedOptions,
                successCallback: () => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;

        /** Raised when writing contents to a file opened previously with `openRequestId` is requested. */
        export const onWriteFileRequested: events.Event<
            (
                options: WriteFileRequestedOptions,
                successCallback: () => void,
                errorCallback: (
                    error: `${ProviderError}`,
                ) => void,
            ) => void
        >;
    }

    ////////////////////
    // Font Settings
    ////////////////////
    /**
     * Use the `chrome.fontSettings` API to manage Chrome's font settings.
     *
     * Permissions: "fontSettings"
     */
    export namespace fontSettings {
        /** Represents a font name. */
        export interface FontName {
            /** The display name of the font. */
            displayName: string;
            /** The font ID. */
            fontId: string;
        }

        /** A CSS generic font family. */
        export enum GenericFamily {
            STANDARD = "standard",
            SANSSERIF = "sansserif",
            SERIF = "serif",
            FIXED = "fixed",
            CURSIVE = "cursive",
            FANTASY = "fantasy",
            MATH = "math",
        }

        export enum LevelOfControl {
            /** Cannot be controlled by any extension */
            NOT_CONTROLLABLE = "not_controllable",
            /** Controlled by extensions with higher precedence */
            CONTROLLED_BY_OTHER_EXTENSIONS = "controlled_by_other_extensions",
            /** Can be controlled by this extension */
            CONTROLLABLE_BY_THIS_EXTENSION = "controllable_by_this_extension",
            /** Controlled by this extension */
            CONTROLLED_BY_THIS_EXTENSION = "controlled_by_this_extension",
        }

        /** An ISO 15924 script code. The default, or global, script is represented by script code "Zyyy". */
        export enum ScriptCode {
            AFAK = "Afak",
            ARAB = "Arab",
            ARMI = "Armi",
            ARMN = "Armn",
            AVST = "Avst",
            BALI = "Bali",
            BAMU = "Bamu",
            BASS = "Bass",
            BATK = "Batk",
            BENG = "Beng",
            BLIS = "Blis",
            BOPO = "Bopo",
            BRAH = "Brah",
            BRAI = "Brai",
            BUGI = "Bugi",
            BUHD = "Buhd",
            CAKM = "Cakm",
            CANS = "Cans",
            CARI = "Cari",
            CHAM = "Cham",
            CHER = "Cher",
            CIRT = "Cirt",
            COPT = "Copt",
            CPRT = "Cprt",
            CYRL = "Cyrl",
            CYRS = "Cyrs",
            DEVA = "Deva",
            DSRT = "Dsrt",
            DUPL = "Dupl",
            EGYD = "Egyd",
            EGYH = "Egyh",
            EGYP = "Egyp",
            ELBA = "Elba",
            ETHI = "Ethi",
            GEOK = "Geok",
            GEOR = "Geor",
            GLAG = "Glag",
            GOTH = "Goth",
            GRAN = "Gran",
            GREK = "Grek",
            GUJR = "Gujr",
            GURU = "Guru",
            HANG = "Hang",
            HANI = "Hani",
            HANO = "Hano",
            HANS = "Hans",
            HANT = "Hant",
            HEBR = "Hebr",
            HLUW = "Hluw",
            HMNG = "Hmng",
            HUNG = "Hung",
            INDS = "Inds",
            ITAL = "Ital",
            JAVA = "Java",
            JPAN = "Jpan",
            JURC = "Jurc",
            KALI = "Kali",
            KHAR = "Khar",
            KHMR = "Khmr",
            KHOJ = "Khoj",
            KNDA = "Knda",
            KPEL = "Kpel",
            KTHI = "Kthi",
            LANA = "Lana",
            LAOO = "Laoo",
            LATF = "Latf",
            LATG = "Latg",
            LATN = "Latn",
            LEPC = "Lepc",
            LIMB = "Limb",
            LINA = "Lina",
            LINB = "Linb",
            LISU = "Lisu",
            LOMA = "Loma",
            LYCI = "Lyci",
            LYDI = "Lydi",
            MAND = "Mand",
            MANI = "Mani",
            MAYA = "Maya",
            MEND = "Mend",
            MERC = "Merc",
            MERO = "Mero",
            MLYM = "Mlym",
            MONG = "Mong",
            MOON = "Moon",
            MROO = "Mroo",
            MTEI = "Mtei",
            MYMR = "Mymr",
            NARB = "Narb",
            NBAT = "Nbat",
            NKGB = "Nkgb",
            NKOO = "Nkoo",
            NSHU = "Nshu",
            OGAM = "Ogam",
            OLCK = "Olck",
            ORKH = "Orkh",
            ORYA = "Orya",
            OSMA = "Osma",
            PALM = "Palm",
            PERM = "Perm",
            PHAG = "Phag",
            PHLI = "Phli",
            PHLP = "Phlp",
            PHLV = "Phlv",
            PHNX = "Phnx",
            PLRD = "Plrd",
            PRTI = "Prti",
            RJNG = "Rjng",
            RORO = "Roro",
            RUNR = "Runr",
            SAMR = "Samr",
            SARA = "Sara",
            SARB = "Sarb",
            SAUR = "Saur",
            SGNW = "Sgnw",
            SHAW = "Shaw",
            SHRD = "Shrd",
            SIND = "Sind",
            SINH = "Sinh",
            SORA = "Sora",
            SUND = "Sund",
            SYLO = "Sylo",
            SYRC = "Syrc",
            SYRE = "Syre",
            SYRJ = "Syrj",
            SYRN = "Syrn",
            TAGB = "Tagb",
            TAKR = "Takr",
            TALE = "Tale",
            TALU = "Talu",
            TAML = "Taml",
            TANG = "Tang",
            TAVT = "Tavt",
            TELU = "Telu",
            TENG = "Teng",
            TFNG = "Tfng",
            TGLG = "Tglg",
            THAA = "Thaa",
            THAI = "Thai",
            TIBT = "Tibt",
            TIRH = "Tirh",
            UGAR = "Ugar",
            VAII = "Vaii",
            VISP = "Visp",
            WARA = "Wara",
            WOLE = "Wole",
            XPEO = "Xpeo",
            XSUX = "Xsux",
            YIII = "Yiii",
            ZMTH = "Zmth",
            ZSYM = "Zsym",
            ZYYY = "Zyyy",
        }

        export interface ClearFontDetails {
            /** The generic font family for which the font should be cleared. */
            genericFamily: `${GenericFamily}`;
            /** The script for which the font should be cleared. If omitted, the global script font setting is cleared. */
            script?: `${ScriptCode}` | undefined;
        }

        export interface GetFontDetails {
            /** The generic font family for which the font should be retrieved. */
            genericFamily: `${GenericFamily}`;
            /** The script for which the font should be retrieved. If omitted, the font setting for the global script (script code "Zyyy") is retrieved. */
            script?: `${ScriptCode}` | undefined;
        }

        export interface SetFontDetails {
            /** The font ID. The empty string means to fallback to the global script font setting. */
            fontId: string;
            /** The generic font family for which the font should be set. */
            genericFamily: `${GenericFamily}`;
            /** The script code which the font should be set. If omitted, the font setting for the global script (script code "Zyyy") is set. */
            script?: `${ScriptCode}` | undefined;
        }

        export interface FontChangedResult {
            /** The generic font family for which the font setting has changed. */
            genericFamily: `${GenericFamily}`;
            /** The level of control this extension has over the setting. */
            levelOfControl: `${LevelOfControl}`;
            /** Optional. The script code for which the font setting has changed.  */
            script?: `${ScriptCode}`;
            /** The font ID. See the description in {@link getFont}. */
            fontId: string;
        }

        export interface FontResult {
            /** The level of control this extension has over the setting. */
            levelOfControl: `${LevelOfControl}`;
            /** The font ID. Rather than the literal font ID preference value, this may be the ID of the font that the system resolves the preference value to. So, `fontId` can differ from the font passed to {@link setFont}, if, for example, the font is not available on the system. The empty string signifies fallback to the global script font setting. */
            fontId: string;
        }

        export interface FontSizeResult {
            /** The font size in pixels. */
            pixelSize: number;
            /** The level of control this extension has over the setting. */
            levelOfControl: `${LevelOfControl}`;
        }

        export interface FontSizeDetails {
            /** The font size in pixels. */
            pixelSize: number;
        }

        /**
         * Sets the default font size.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function setDefaultFontSize(details: FontSizeDetails): Promise<void>;
        export function setDefaultFontSize(details: FontSizeDetails, callback: () => void): void;

        /**
         * Gets the font for a given script and generic font family.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getFont(details: GetFontDetails): Promise<FontResult>;
        export function getFont(details: GetFontDetails, callback: (details: FontResult) => void): void;

        /**
         * Gets the default font size.
         * @param details This parameter is currently unused.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getDefaultFontSize(details?: { [key: string]: unknown }): Promise<FontSizeResult>;
        export function getDefaultFontSize(callback: (options: FontSizeResult) => void): void;
        export function getDefaultFontSize(
            details: { [key: string]: unknown } | undefined,
            callback: (options: FontSizeResult) => void,
        ): void;

        /**
         * Gets the minimum font size.
         * @param details This parameter is currently unused.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getMinimumFontSize(details?: { [key: string]: unknown }): Promise<FontSizeResult>;
        export function getMinimumFontSize(callback: (options: FontSizeResult) => void): void;
        export function getMinimumFontSize(
            details: { [key: string]: unknown } | undefined,
            callback: (options: FontSizeResult) => void,
        ): void;

        /**
         * Sets the minimum font size.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function setMinimumFontSize(details: FontSizeDetails): Promise<void>;
        export function setMinimumFontSize(details: FontSizeDetails, callback: () => void): void;

        /**
         * Gets the default size for fixed width fonts.
         * @param details This parameter is currently unused.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getDefaultFixedFontSize(details?: { [key: string]: unknown }): Promise<FontSizeResult>;
        export function getDefaultFixedFontSize(callback: (details: FontSizeResult) => void): void;
        export function getDefaultFixedFontSize(
            details: { [key: string]: unknown } | undefined,
            callback: (details: FontSizeResult) => void,
        ): void;

        /**
         * Clears the default font size set by this extension, if any.
         * @param details This parameter is currently unused.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function clearDefaultFontSize(details?: { [key: string]: unknown }): Promise<void>;
        export function clearDefaultFontSize(callback: () => void): void;
        export function clearDefaultFontSize(
            details: { [key: string]: unknown } | undefined,
            callback: () => void,
        ): void;

        /**
         * Sets the default size for fixed width fonts.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function setDefaultFixedFontSize(details: FontSizeDetails): Promise<void>;
        export function setDefaultFixedFontSize(details: FontSizeDetails, callback: () => void): void;

        /**
         * Clears the font set by this extension, if any.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function clearFont(details: ClearFontDetails): Promise<void>;
        export function clearFont(details: ClearFontDetails, callback: () => void): void;

        /**
         * Sets the font for a given script and generic font family.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function setFont(details: SetFontDetails): Promise<void>;
        export function setFont(details: SetFontDetails, callback: () => void): void;

        /**
         * Clears the minimum font size set by this extension, if any.
         * @param details This parameter is currently unused.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function clearMinimumFontSize(details?: { [key: string]: unknown }): Promise<void>;
        export function clearMinimumFontSize(callback: () => void): void;
        export function clearMinimumFontSize(
            details: { [key: string]: unknown } | undefined,
            callback: () => void,
        ): void;

        /**
         * Gets a list of fonts on the system.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getFontList(): Promise<FontName[]>;
        export function getFontList(callback: (results: FontName[]) => void): void;

        /**
         * Clears the default fixed font size set by this extension, if any.
         * @param details This parameter is currently unused.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function clearDefaultFixedFontSize(details?: { [key: string]: unknown }): Promise<void>;
        export function clearDefaultFixedFontSize(callback: () => void): void;
        export function clearDefaultFixedFontSize(
            details: { [key: string]: unknown } | undefined,
            callback: () => void,
        ): void;

        /** Fired when the default fixed font size setting changes. */
        export const onDefaultFixedFontSizeChanged: events.Event<(details: FontSizeResult) => void>;

        /** Fired when the default font size setting changes. */
        export const onDefaultFontSizeChanged: events.Event<(details: FontSizeResult) => void>;

        /** Fired when the minimum font size setting changes. */
        export const onMinimumFontSizeChanged: events.Event<(details: FontSizeResult) => void>;

        /** Fired when a font setting changes. */
        export const onFontChanged: events.Event<(details: FontChangedResult) => void>;
    }

    ////////////////////
    // Google Cloud Messaging
    ////////////////////
    /**
     * Use `chrome.gcm` to enable apps and extensions to send and receive messages through Firebase Cloud Messaging (FCM).
     *
     * Permissions: "gcm"
     */
    export namespace gcm {
        export interface OutgoingMessage {
            /** The ID of the server to send the message to as assigned by Google API Console. */
            destinationId: string;
            /** The ID of the message. It must be unique for each message in scope of the applications. See the Cloud Messaging documentation for advice for picking and handling an ID. */
            messageId: string;
            /** Time-to-live of the message in seconds. If it is not possible to send the message within that time, an onSendError event will be raised. A time-to-live of 0 indicates that the message should be sent immediately or fail if it's not possible. The default value of time-to-live is 86,400 seconds (1 day) and the maximum value is 2,419,200 seconds (28 days). */
            timeToLive?: number | undefined;
            /** Message data to send to the server. Case-insensitive `goog.` and `google`, as well as case-sensitive `collapse_key` are disallowed as key prefixes. Sum of all key/value pairs should not exceed {@link gcm.MAX_MESSAGE_SIZE}. */
            data: { [key: string]: unknown };
        }

        /** The maximum size (in bytes) of all key/value pairs in a message. */
        export const MAX_MESSAGE_SIZE: 4096;

        /**
         * Registers the application with FCM. The registration ID will be returned by the `callback`. If `register` is called again with the same list of `senderIds`, the same registration ID will be returned.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         * @param senderIds A list of server IDs that are allowed to send messages to the application. It should contain at least one and no more than 100 sender IDs.
         */
        export function register(senderIds: string[]): Promise<string>;
        export function register(senderIds: string[], callback: (registrationId: string) => void): void;

        /**
         * Unregister the application from FCM.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         */
        export function unregister(): Promise<void>;
        export function unregister(callback: () => void): void;

        /**
         * Sends a message according to its contents.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         * @param message A message to send to the other party via FCM.
         */
        export function send(message: OutgoingMessage): Promise<string>;
        export function send(message: OutgoingMessage, callback: (messageId: string) => void): void;

        /** Fired when a message is received through FCM. */
        export const onMessage: events.Event<
            (message: {
                /** The collapse key of a message. See the Non-collapsible and collapsible messages for details. */
                collapseKey?: string;
                /** The message data. */
                data: { [key: string]: unknown };
                /** The sender who issued the message. */
                from?: string;
            }) => void
        >;

        /** Fired when a FCM server had to delete messages sent by an app server to the application. See Lifetime of a message for details on handling this event. */
        export const onMessagesDeleted: events.Event<() => void>;

        /** Fired when it was not possible to send a message to the FCM server. */
        export const onSendError: events.Event<
            (error: {
                /** Additional details related to the error, when available. */
                details: { [key: string]: unknown };
                /** The error message describing the problem. */
                errorMessage: string;
                /** The ID of the message with this error, if error is related to a specific message. */
                messageId?: string;
            }) => void
        >;
    }

    ////////////////////
    // History
    ////////////////////
    /**
     * Use the `chrome.history` API to interact with the browser's record of visited pages. You can add, remove, and query for URLs in the browser's history. To override the history page with your own version, see Override Pages.
     *
     * Permissions: "history"
     */
    export namespace history {
        /** An object encapsulating one visit to a URL. */
        export interface VisitItem {
            /** The transition type for this visit from its referrer. */
            transition: `${TransitionType}`;
            /**
             * True if the visit originated on this device. False if it was synced from a different device
             * @since Chrome 115
             */
            isLocal: boolean;
            /** When this visit occurred, represented in milliseconds since the epoch. */
            visitTime?: number;
            /** The unique identifier for this visit. */
            visitId: string;
            /** The visit ID of the referrer. */
            referringVisitId: string;
            /** The unique identifier for the corresponding {@link history.HistoryItem}. */
            id: string;
        }

        /** An object encapsulating one result of a history query. */
        export interface HistoryItem {
            /** The number of times the user has navigated to this page by typing in the address. */
            typedCount?: number;
            /** The title of the page when it was last loaded. */
            title?: string;
            /** The URL navigated to by a user. */
            url?: string;
            /** When this page was last loaded, represented in milliseconds since the epoch. */
            lastVisitTime?: number;
            /** The number of times the user has navigated to this page. */
            visitCount?: number;
            /** The unique identifier for the item. */
            id: string;
        }

        /**
         * The transition type for this visit from its referrer.
         * @since Chrome 44
         */
        export enum TransitionType {
            /** The user arrived at this page by clicking a link on another page. */
            LINK = "link",
            /** The user arrived at this page by typing the URL in the address bar. This is also used for other explicit navigation actions. */
            TYPED = "typed",
            /** The user arrived at this page through a suggestion in the UI, for example, through a menu item. */
            AUTO_BOOKMARK = "auto_bookmark",
            /** The user arrived at this page through subframe navigation that they didn't request, such as through an ad loading in a frame on the previous page. These don't always generate new navigation entries in the back and forward menus. */
            AUTO_SUBFRAME = "auto_subframe",
            /** The user arrived at this page by selecting something in a subframe. */
            MANUAL_SUBFRAME = "manual_subframe",
            /** The user arrived at this page by typing in the address bar and selecting an entry that didn't look like a URL, such as a Google Search suggestion. For example, a match might have the URL of a Google Search result page, but it might appear to the user as "Search Google for ...". These are different from typed navigations because the user didn't type or see the destination URL. They're also related to keyword navigations. */
            GENERATED = "generated",
            /** The page was specified in the command line or is the start page. */
            AUTO_TOPLEVEL = "auto_toplevel",
            /** The user arrived at this page by filling out values in a form and submitting the form. Not all form submissions use this transition type. */
            FORM_SUBMIT = "form_submit",
            /** The user reloaded the page, either by clicking the reload button or by pressing Enter in the address bar. Session restore and Reopen closed tab also use this transition type. */
            RELOAD = "reload",
            /** The URL for this page was generated from a replaceable keyword other than the default search provider. */
            KEYWORD = "keyword",
            /** Corresponds to a visit generated for a keyword. */
            KEYWORD_GENERATED = "keyword_generated",
        }

        export interface HistoryQuery {
            /** A free-text query to the history service. Leave this empty to retrieve all pages. */
            text: string;
            /** The maximum number of results to retrieve. Defaults to 100. */
            maxResults?: number | undefined;
            /** Limit results to those visited after this date, represented in milliseconds since the epoch. If property is not specified, it will default to 24 hours. */
            startTime?: number | undefined;
            /** Limit results to those visited before this date, represented in milliseconds since the epoch. */
            endTime?: number | undefined;
        }

        /** @since Chrome 88 */
        export interface UrlDetails {
            /** The URL for the operation. It must be in the format as returned from a call to {@link history.search}. */
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
            urls?: string[];
        }

        /**
         * Searches the history for the last visit time of each page matching the query.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function search(query: HistoryQuery): Promise<HistoryItem[]>;
        export function search(query: HistoryQuery, callback: (results: HistoryItem[]) => void): void;

        /**
         * Adds a URL to the history at the current time with a transition type of "link".
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function addUrl(details: UrlDetails): Promise<void>;
        export function addUrl(details: UrlDetails, callback: () => void): void;

        /**
         * Removes all items within the specified date range from the history. Pages will not be removed from the history unless all visits fall within the range.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function deleteRange(range: Range): Promise<void>;
        export function deleteRange(range: Range, callback: () => void): void;

        /**
         * Deletes all items from the history.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function deleteAll(): Promise<void>;
        export function deleteAll(callback: () => void): void;

        /**
         * Retrieves information about visits to a URL.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getVisits(details: UrlDetails): Promise<VisitItem[]>;
        export function getVisits(details: UrlDetails, callback: (results: VisitItem[]) => void): void;

        /**
         * Removes all occurrences of the given URL from the history.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function deleteUrl(details: UrlDetails): Promise<void>;
        export function deleteUrl(details: UrlDetails, callback: () => void): void;

        /** Fired when a URL is visited, providing the {@link HistoryItem} data for that URL. This event fires before the page has loaded. */
        export const onVisited: events.Event<(result: HistoryItem) => void>;

        /** Fired when one or more URLs are removed from history. When all visits have been removed the URL is purged from history. */
        export const onVisitRemoved: events.Event<(removed: RemovedResult) => void>;
    }

    ////////////////////
    // i18n
    ////////////////////
    /**
     * Use the `chrome.i18n` infrastructure to implement internationalization across your whole app or extension.
     *
     * Manifest: "default_locale"
     */
    export namespace i18n {
        export interface DetectedLanguage {
            language: string;
            /** The percentage of the detected language */
            percentage: number;
        }

        /** Holds detected language reliability and array of {@link DetectedLanguage} */
        export interface LanguageDetectionResult {
            /** CLD detected language reliability */
            isReliable: boolean;
            /** Array of detectedLanguage */
            languages: DetectedLanguage[];
        }

        /** @since Chrome 79 */
        export interface GetMessageOptions {
            /** Escape `<` in translation to `&lt;`. This applies only to the message itself, not to the placeholders. Developers might want to use this if the translation is used in an HTML context. Closure Templates used with Closure Compiler generate this automatically. */
            escapeLt?: boolean | undefined;
        }

        /**
         * Gets the accept-languages of the browser. This is different from the locale used by the browser; to get the locale, use {@link i18n.getUILanguage}.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 99.
         */
        export function getAcceptLanguages(): Promise<string[]>;
        export function getAcceptLanguages(callback: (languages: string[]) => void): void;

        /**
         * Gets the localized string for the specified message. If the message is missing, this method returns an empty string (''). If the format of the `getMessage()` call is wrong — for example, messageName is not a string or the substitutions array has more than 9 elements — this method returns `undefined`.
         * @param messageName The name of the message, as specified in the `messages.json` file.
         * @param substitutions Up to 9 substitution strings, if the message requires any.
         */
        export function getMessage(messageName: string, substitutions?: string | Array<string | number>): string;
        export function getMessage(
            messageName: string,
            substitutions: string | Array<string | number> | undefined,
            options?: GetMessageOptions,
        ): string;

        /** Gets the browser UI language of the browser. This is different from {@link i18n.getAcceptLanguages} which returns the preferred user languages. */
        export function getUILanguage(): string;

        /** Detects the language of the provided text using CLD.
         * @param text User input string to be translated.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 99.
         * @since Chrome 47
         */
        export function detectLanguage(text: string): Promise<LanguageDetectionResult>;
        export function detectLanguage(text: string, callback: (result: LanguageDetectionResult) => void): void;
    }

    ////////////////////
    // Identity
    ////////////////////
    /**
     * Use the `chrome.identity` API to get OAuth2 access tokens.
     *
     * Permissions: "identity"
     */
    export namespace identity {
        export interface AccountInfo {
            /** A unique identifier for the account. This ID will not change for the lifetime of the account. */
            id: string;
        }

        /** @since Chrome 84 */
        export enum AccountStatus {
            /** Specifies that Sync is enabled for the primary account. */
            SYNC = "SYNC",
            /** Specifies the existence of a primary account, if any. */
            ANY = "ANY",
        }

        /** @since Chrome 84 */
        export interface ProfileDetails {
            /** A status of the primary account signed into a profile whose `ProfileUserInfo` should be returned. Defaults to `SYNC` account status. */
            accountStatus?: `${AccountStatus}`;
        }

        export interface TokenDetails {
            /** Fetching a token may require the user to sign-in to Chrome, or approve the application's requested scopes. If the interactive flag is `true`, `getAuthToken` will prompt the user as necessary. When the flag is `false` or omitted, `getAuthToken` will return failure any time a prompt would be required. */
            interactive?: boolean;
            /** The account ID whose token should be returned. If not specified, the function will use an account from the Chrome profile: the Sync account if there is one, or otherwise the first Google web account. */
            account?: AccountInfo;
            /**
             * The `enableGranularPermissions` flag allows extensions to opt-in early to the granular permissions consent screen, in which requested permissions are granted or denied individually.
             * @since Chrome 87
             */
            enableGranularPermissions?: boolean;
            /**
             * A list of OAuth2 scopes to request.
             *
             * When the `scopes` field is present, it overrides the list of scopes specified in manifest.json.
             */
            scopes?: string[];
        }

        export interface ProfileUserInfo {
            /** An email address for the user account signed into the current profile. Empty if the user is not signed in or the `identity.email` manifest permission is not specified. */
            email: string;
            /** A unique identifier for the account. This ID will not change for the lifetime of the account. Empty if the user is not signed in or (in M41+) the `identity.email` manifest permission is not specified. */
            id: string;
        }

        export interface InvalidTokenDetails {
            /** The specific token that should be removed from the cache. */
            token: string;
        }

        export interface WebAuthFlowDetails {
            /** The URL that initiates the auth flow. */
            url: string;

            /**
             * Whether to launch auth flow in interactive mode.
             *
             * Since some auth flows may immediately redirect to a result URL, `launchWebAuthFlow` hides its web view until the first navigation either redirects to the final URL, or finishes loading a page meant to be displayed.
             *
             * If the `interactive` flag is `true`, the window will be displayed when a page load completes. If the flag is `false` or omitted, `launchWebAuthFlow` will return with an error if the initial navigation does not complete the flow.
             *
             * For flows that use JavaScript for redirection, `abortOnLoadForNonInteractive` can be set to `false` in combination with setting `timeoutMsForNonInteractive` to give the page a chance to perform any redirects.
             */
            interactive?: boolean;
            /**
             * Whether to terminate `launchWebAuthFlow` for non-interactive requests after the page loads. This parameter does not affect interactive flows.
             *
             * When set to `true` (default) the flow will terminate immediately after the page loads. When set to `false`, the flow will only terminate after the `timeoutMsForNonInteractive` passes. This is useful for identity providers that use JavaScript to perform redirections after the page loads.
             * @since Chrome 113
             */
            abortOnLoadForNonInteractive?: boolean;
            /**
             * The maximum amount of time, in milliseconds, `launchWebAuthFlow` is allowed to run in non-interactive mode in total. Only has an effect if `interactive` is `false`.
             * @since Chrome 113
             */
            timeoutMsForNonInteractive?: number;
        }

        /** @since Chrome 105 */
        export interface GetAuthTokenResult {
            /** A list of OAuth2 scopes granted to the extension. */
            grantedScopes?: string[];
            /** The specific token associated with the request. */
            token?: string;
        }

        /**
         * Resets the state of the Identity API:
         *
         *  * Removes all OAuth2 access tokens from the token cache
         *  * Removes user's account preferences
         *  * De-authorizes the user from all auth flows
         *
         * Can return its result via Promise since Chrome 106.
         * @since Chrome 87
         */
        export function clearAllCachedAuthTokens(): Promise<void>;
        export function clearAllCachedAuthTokens(callback: () => void): void;

        /**
         * Retrieves a list of AccountInfo objects describing the accounts present on the profile.
         *
         * getAccounts is only supported on dev channel.
         */
        export function getAccounts(): Promise<AccountInfo[]>;
        export function getAccounts(callback: (accounts: AccountInfo[]) => void): void;

        /**
         * Gets an OAuth2 access token using the client ID and scopes specified in the oauth2 section of manifest.json.
         *
         * The Identity API caches access tokens in memory, so it's ok to call getAuthToken non-interactively any time a token is required. The token cache automatically handles expiration.
         *
         * For a good user experience it is important interactive token requests are initiated by UI in your app explaining what the authorization is for. Failing to do this will cause your users to get authorization requests, or Chrome sign in screens if they are not signed in, with with no context. In particular, do not use getAuthToken interactively when your app is first launched.
         * @param details Token options.
         *
         * Can return its result via Promise since Chrome 105.
         */
        export function getAuthToken(details?: TokenDetails): Promise<GetAuthTokenResult>;
        export function getAuthToken(details: TokenDetails, callback: (result: GetAuthTokenResult) => void): void;
        export function getAuthToken(callback: (result: GetAuthTokenResult) => void): void;

        /**
         * Retrieves email address and obfuscated gaia id of the user signed into a profile.
         *
         * Requires the `identity.email` manifest permission. Otherwise, returns an empty result.
         *
         * This API is different from identity.getAccounts in two ways. The information returned is available offline, and it only applies to the primary account for the profile.
         * @param details Profile options.
         *
         * Can return its result via Promise since Chrome 105.
         */
        export function getProfileUserInfo(details?: ProfileDetails): Promise<ProfileUserInfo>;
        export function getProfileUserInfo(
            details: ProfileDetails,
            callback: (userInfo: ProfileUserInfo) => void,
        ): void;
        export function getProfileUserInfo(callback: (userInfo: ProfileUserInfo) => void): void;

        /**
         * Removes an OAuth2 access token from the Identity API's token cache.
         *
         * If an access token is discovered to be invalid, it should be passed to removeCachedAuthToken to remove it from the cache. The app may then retrieve a fresh token with `getAuthToken`.
         * @param details Token information.
         *
         * Can return its result via Promise since Chrome 105.
         */
        export function removeCachedAuthToken(details: InvalidTokenDetails): Promise<void>;
        export function removeCachedAuthToken(details: InvalidTokenDetails, callback: () => void): void;

        /**
         * Starts an auth flow at the specified URL.
         *
         * This method enables auth flows with non-Google identity providers by launching a web view and navigating it to the first URL in the provider's auth flow. When the provider redirects to a URL matching the pattern `https://<app-id>.chromiumapp.org/*`, the window will close, and the final redirect URL will be passed to the `callback` function.
         *
         * For a good user experience it is important interactive auth flows are initiated by UI in your app explaining what the authorization is for. Failing to do this will cause your users to get authorization requests with no context. In particular, do not launch an interactive auth flow when your app is first launched.
         * @param details WebAuth flow options.
         *
         * Can return its result via Promise since Chrome 106
         */
        export function launchWebAuthFlow(details: WebAuthFlowDetails): Promise<string | undefined>;
        export function launchWebAuthFlow(details: WebAuthFlowDetails, callback: (responseUrl?: string) => void): void;

        /**
         * Generates a redirect URL to be used in `launchWebAuthFlow`.
         *
         * The generated URLs match the pattern `https://<app-id>.chromiumapp.org/*`.
         * @param path The path appended to the end of the generated URL.
         */
        export function getRedirectURL(path?: string): string;

        /** Fired when signin state changes for an account on the user's profile. */
        export const onSignInChanged: chrome.events.Event<(account: AccountInfo, signedIn: boolean) => void>;
    }

    ////////////////////
    // Idle
    ////////////////////
    /**
     * Use the `chrome.idle` API to detect when the machine's idle state changes.
     *
     * Permissions: "idle"
     */
    export namespace idle {
        /** @since Chrome 44 */
        export enum IdleState {
            ACTIVE = "active",
            IDLE = "idle",
            LOCKED = "locked",
        }

        /**
         * Returns "locked" if the system is locked, "idle" if the user has not generated any input for a specified number of seconds, or "active" otherwise.
         * @param detectionIntervalInSeconds The system is considered idle if detectionIntervalInSeconds seconds have elapsed since the last user input detected.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         */
        export function queryState(detectionIntervalInSeconds: number): Promise<`${IdleState}`>;
        export function queryState(
            detectionIntervalInSeconds: number,
            callback: (newState: `${IdleState}`) => void,
        ): void;

        /**
         * Sets the interval, in seconds, used to determine when the system is in an idle state for onStateChanged events. The default interval is 60 seconds.
         * @param intervalInSeconds Threshold, in seconds, used to determine when the system is in an idle state.
         */
        export function setDetectionInterval(intervalInSeconds: number): void;

        /**
         * Gets the time, in seconds, it takes until the screen is locked automatically while idle. Returns a zero duration if the screen is never locked automatically.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         * @since Chrome 73
         * @platform ChromeOS only
         */
        export function getAutoLockDelay(): Promise<number>;
        export function getAutoLockDelay(callback: (delay: number) => void): void;

        /** Fired when the system changes to an active, idle or locked state. The event fires with "locked" if the screen is locked or the screensaver activates, "idle" if the system is unlocked and the user has not generated any input for a specified number of seconds, and "active" when the user generates input on an idle system. */
        export const onStateChanged: events.Event<(newState: `${IdleState}`) => void>;
    }

    ////////////////////
    // Input - IME
    ////////////////////
    /**
     * Use the `chrome.input.ime` API to implement a custom IME for Chrome OS. This allows your extension to handle keystrokes, set the composition, and manage the candidate window.
     *
     * Permissions: "input"
     * @platform ChromeOS only
     */
    export namespace input.ime {
        /** See https://www.w3.org/TR/uievents/#events-KeyboardEvent */
        export interface KeyboardEvent {
            /** Whether or not the SHIFT key is pressed. */
            shiftKey?: boolean | undefined;
            /** Whether or not the ALT key is pressed. */
            altKey?: boolean | undefined;
            /**
             * Whether or not the ALTGR key is pressed.
             * @since Chrome 79
             */
            altgrKey?: boolean | undefined;
            /**
             * The ID of the request
             * @deprecated Use the `requestId` param from the `onKeyEvent` event instead.
             */
            requestId?: string | undefined;
            /** Value of the key being pressed. */
            key: string;
            /** Whether or not the CTRL key is pressed. */
            ctrlKey?: boolean | undefined;
            /** One of keyup or keydown. */
            type: `${KeyboardEventType}`;
            /** The extension ID of the sender of this keyevent. */
            extensionId?: string | undefined;
            /** Value of the physical key being pressed. The value is not affected by current keyboard layout or modifier state. */
            code: string;
            /** The deprecated HTML keyCode, which is system- and implementation-dependent numerical code signifying the unmodified identifier associated with the key pressed. */
            keyCode?: number | undefined;
            /** Whether or not the CAPS_LOCK is enabled. */
            capsLock?: boolean | undefined;
        }

        /** @since Chrome 44 */
        export enum KeyboardEventType {
            KEYUP = "keyup",
            KEYDOWN = "keydown",
        }

        /**
         * The auto-capitalize type of the text field.
         * @since Chrome 69
         */
        export enum AutoCapitalizeType {
            CHARACTERS = "characters",
            WORDS = "words",
            SENTENCES = "sentences",
        }

        /**
         * Type of value this text field edits, (Text, Number, URL, etc)
         * @since Chrome 44
         */
        export enum InputContextType {
            TEXT = "text",
            SEARCH = "search",
            TEL = "tel",
            URL = "url",
            EMAIL = "email",
            NUMBER = "number",
            PASSWORD = "password",
            NULL = "null",
        }

        /** Describes an input Context */
        export interface InputContext {
            /** This is used to specify targets of text field operations. This ID becomes invalid as soon as onBlur is called. */
            contextID: number;
            /** Type of value this text field edits, (Text, Number, URL, etc) */
            type: `${InputContextType}`;
            /** Whether the text field wants auto-correct. */
            autoCorrect: boolean;
            /** Whether the text field wants auto-complete. */
            autoComplete: boolean;
            /** Whether the text field wants spell-check. */
            spellCheck: boolean;
            /**
             * The auto-capitalize type of the text field.
             * @since Chrome 69
             */
            autoCapitalize: `${AutoCapitalizeType}`;
            /**
             * Whether text entered into the text field should be used to improve typing suggestions for the user.
             * @since Chrome 68
             */
            shouldDoLearning: boolean;
        }

        /** A menu item used by an input method to interact with the user from the language menu. */
        export interface MenuItem {
            /** String that will be passed to callbacks referencing this MenuItem. */
            id: string;
            /** Text displayed in the menu for this item. */
            label?: string | undefined;
            /** The type of menu item. */
            style?: `${MenuItemStyle}` | undefined;
            /** Indicates this item is visible. */
            visible?: boolean | undefined;
            /** Indicates this item should be drawn with a check. */
            checked?: boolean | undefined;
            /** Indicates this item is enabled. */
            enabled?: boolean | undefined;
        }

        /**
         * The type of menu item. Radio buttons between separators are considered grouped.
         * @since Chrome 44
         */
        export enum MenuItemStyle {
            CHECK = "check",
            RADIO = "radio",
            SEPARATOR = "separator",
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
            /** The id to add these candidates under */
            parentId?: number | undefined;
            /** Short string displayed to next to the candidate, often the shortcut key or index */
            label?: string | undefined;
            /** Additional text describing the candidate */
            annotation?: string | undefined;
            /** The usage or detail description of word. */
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
            style: `${UnderlineStyle}`;
        }

        export interface CompositionParameters {
            /** ID of the context where the composition text will be set */
            contextID: number;
            /** Text to set */
            text: string;
            /** List of segments and their associated types. */
            segments?: CompositionParameterSegment[] | undefined;
            /** Position in the text of the cursor. */
            cursor: number;
            /** Position in the text that the selection starts at. */
            selectionStart?: number | undefined;
            /** Position in the text that the selection ends at. */
            selectionEnd?: number | undefined;
        }

        /** @since Chrome 88 */
        export interface MenuParameters {
            /** MenuItems to add or update. They will be added in the order they exist in the array. */
            items: MenuItem[];
            /** ID of the engine to use. */
            engineID: string;
        }

        /**
         * Which mouse buttons was clicked.
         * @since Chrome 44
         */
        export enum MouseButton {
            LEFT = "left",
            MIDDLE = "middle",
            RIGHT = "right",
        }

        /**
         * The screen type under which the IME is activated.
         * @since Chrome 44
         */
        export enum ScreenType {
            NORMAL = "normal",
            LOGIN = "login",
            LOCK = "lock",
            SECONDARY_LOGIN = "secondary-login",
        }

        /**
         * The type of the underline to modify this segment.
         * @since Chrome 44
         */
        export enum UnderlineStyle {
            UNDERLINE = "underline",
            DOUBLE_UNDERLINE = "doubleUnderline",
            NO_UNDERLINE = "noUnderline",
        }

        /**
         * Where to display the candidate window. If set to 'cursor', the window follows the cursor. If set to 'composition', the window is locked to the beginning of the composition.
         * @since Chrome 44
         */
        export enum WindowPosition {
            CURSOR = "cursor",
            COMPOSITION = "composition",
        }

        /** Type of assistive window. */
        export enum AssistiveWindowType {
            UNDO = "undo",
        }

        /**
         * ID of a button in an assistive window.
         * @since Chrome 85
         */
        export enum AssistiveWindowButton {
            UNDO = "undo",
            ADD_TO_DICTIONARY = "addToDictionary",
        }

        /**
         * Properties of the assistive window.
         * @since Chrome 85
         */
        export interface AssistiveWindowProperties {
            type: `${AssistiveWindowType}`;
            /** Sets true to show AssistiveWindow, sets false to hide. */
            visible: boolean;
            /** Strings for ChromeVox to announce */
            announceString?: string | undefined;
        }

        export interface CandidateWindowParameterProperties {
            /** True to show the cursor, false to hide it. */
            cursorVisible?: boolean | undefined;
            /** True if the candidate window should be rendered vertical, false to make it horizontal. */
            vertical?: boolean | undefined;
            /** The number of candidates to display per page. */
            pageSize?: number | undefined;
            /** True to display the auxiliary text, false to hide it. */
            auxiliaryTextVisible?: boolean | undefined;
            /** Text that is shown at the bottom of the candidate window. */
            auxiliaryText?: string | undefined;
            /** True to show the Candidate window, false to hide it. */
            visible?: boolean | undefined;
            /** Where to display the candidate window. */
            windowPosition?: `${WindowPosition}` | undefined;
            /**
             * The index of the current chosen candidate out of total candidates.
             * @since Chrome 84
             */
            currentCandidateIndex?: number | undefined;
            /**
             * The total number of candidates for the candidate window.
             * @since Chrome 84
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

        export interface AssistiveWindowButtonHighlightedParameters {
            /** The text for the screenreader to announce. */
            announceString?: string | undefined;
            /** The ID of the button */
            buttonID: `${AssistiveWindowButton}`;
            /** ID of the context owning the assistive window. */
            contextID: number;
            /** Whether the button should be highlighted. */
            highlighted: boolean;
            /** The window type the button belongs to. */
            windowType: `${AssistiveWindowType}`;
        }

        export interface AssistiveWindowPropertiesParameters {
            /** ID of the context owning the assistive window. */
            contextID: number;
            /** Properties of the assistive window. */
            properties: AssistiveWindowProperties;
        }

        export interface SurroundingTextInfo {
            /** The text around the cursor. This is only a subset of all text in the input field. */
            text: string;
            /** The ending position of the selection. This value indicates caret position if there is no selection. */
            focus: number;
            /**
             * The offset position of `text`. Since `text` only includes a subset of text around the cursor, offset indicates the absolute position of the first character of `text`.
             * @since Chrome 46
             */
            offset: number;
            /** The beginning position of the selection. This value indicates caret position if there is no selection. */
            anchor: number;
        }

        export interface AssistiveWindowButtonClickedDetails {
            /** The ID of the button clicked. */
            buttonID: `${AssistiveWindowButton}`;
            /** The type of the assistive window. */
            windowType: `${AssistiveWindowType}`;
        }

        /**
         * Adds the provided menu items to the language menu when this IME is active.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 111.
         */
        export function setMenuItems(parameters: MenuParameters): Promise<void>;
        export function setMenuItems(parameters: MenuParameters, callback: () => void): void;

        /**
         * Commits the provided text to the current input.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 111.
         */
        export function commitText(parameters: CommitTextParameters): Promise<boolean>;
        export function commitText(parameters: CommitTextParameters, callback: (success: boolean) => void): void;

        /**
         * Sets the current candidate list. This fails if this extension doesn't own the active IME
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 111.
         */
        export function setCandidates(parameters: CandidatesParameters): Promise<boolean>;
        export function setCandidates(parameters: CandidatesParameters, callback: (success: boolean) => void): void;

        /**
         * Set the current composition. If this extension does not own the active IME, this fails.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 111.
         */
        export function setComposition(parameters: CompositionParameters): Promise<boolean>;
        export function setComposition(parameters: CompositionParameters, callback: (success: boolean) => void): void;

        /**
         * Updates the state of the MenuItems specified
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 111.
         */
        export function updateMenuItems(parameters: MenuParameters): Promise<void>;
        export function updateMenuItems(parameters: MenuParameters, callback: () => void): void;

        /**
         * Shows/Hides an assistive window with the given properties.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 111.
         */
        export function setAssistiveWindowProperties(
            parameters: AssistiveWindowPropertiesParameters,
        ): Promise<boolean>;
        export function setAssistiveWindowProperties(
            parameters: AssistiveWindowPropertiesParameters,
            callback: (success: boolean) => void,
        ): void;

        /**
         * Highlights/Unhighlights a button in an assistive window.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 111.
         */
        export function setAssistiveWindowButtonHighlighted(
            parameters: AssistiveWindowButtonHighlightedParameters,
        ): Promise<void>;
        export function setAssistiveWindowButtonHighlighted(
            parameters: AssistiveWindowButtonHighlightedParameters,
            callback: () => void,
        ): void;

        /**
         * Sets the properties of the candidate window. This fails if the extension doesn't own the active IME
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 111.
         */
        export function setCandidateWindowProperties(parameters: CandidateWindowParameter): Promise<boolean>;
        export function setCandidateWindowProperties(
            parameters: CandidateWindowParameter,
            callback: (success: boolean) => void,
        ): void;

        /**
         * Clear the current composition. If this extension does not own the active IME, this fails.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 111.
         */
        export function clearComposition(parameters: ClearCompositionParameters): Promise<boolean>;
        export function clearComposition(
            parameters: ClearCompositionParameters,
            callback: (success: boolean) => void,
        ): void;

        /**
         * Set the position of the cursor in the candidate window. This is a no-op if this extension does not own the active IME.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 111.
         */
        export function setCursorPosition(
            parameters: CursorPositionParameters,
        ): Promise<boolean>;
        export function setCursorPosition(
            parameters: CursorPositionParameters,
            callback: (success: boolean) => void,
        ): void;

        /**
         * Sends the key events. This function is expected to be used by virtual keyboards. When key(s) on a virtual keyboard is pressed by a user, this function is used to propagate that event to the system.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 111.
         */
        export function sendKeyEvents(parameters: SendKeyEventParameters): Promise<void>;
        export function sendKeyEvents(parameters: SendKeyEventParameters, callback: () => void): void;

        /** Hides the input view window, which is popped up automatically by system. If the input view window is already hidden, this function will do nothing. */
        export function hideInputView(): void;

        /**
         * Deletes the text around the caret.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 111.
         */
        export function deleteSurroundingText(parameters: DeleteSurroundingTextParameters): Promise<void>;
        export function deleteSurroundingText(parameters: DeleteSurroundingTextParameters, callback: () => void): void;

        /**
         * Indicates that the key event received by onKeyEvent is handled. This should only be called if the onKeyEvent listener is asynchronous.
         * @param requestId Request id of the event that was handled. This should come from keyEvent.requestId
         * @param response True if the keystroke was handled, false if not
         */
        export function keyEventHandled(requestId: string, response: boolean): void;

        /** This event is sent when focus leaves a text box. It is sent to all extensions that are listening to this event, and enabled by the user. */
        export const onBlur: events.Event<(contextID: number) => void>;

        /**
         * This event is sent when a button in an assistive window is clicked.
         * @since Chrome 85
         */
        export const onAssistiveWindowButtonClicked: events.Event<
            (details: AssistiveWindowButtonClickedDetails) => void
        >;

        /** This event is sent if this extension owns the active IME. */
        export const onCandidateClicked: events.Event<
            (engineID: string, candidateID: number, button: `${MouseButton}`) => void
        >;

        /** Fired when a key event is sent from the operating system. The event will be sent to the extension if this extension owns the active IME. The listener function should return true if the event was handled false if it was not. If the event will be evaluated asynchronously, this function must return undefined and the IME must later call keyEventHandled() with the result. */
        export const onKeyEvent: events.Event<(engineID: string, keyData: KeyboardEvent, requestId: string) => void>;

        /** This event is sent when an IME is deactivated. It signals that the IME will no longer be receiving onKeyPress events. */
        export const onDeactivated: events.Event<(engineID: string) => void>;

        /** This event is sent when the properties of the current InputContext change, such as the the type. It is sent to all extensions that are listening to this event, and enabled by the user. */
        export const onInputContextUpdate: events.Event<(context: InputContext) => void>;

        /** This event is sent when an IME is activated. It signals that the IME will be receiving onKeyPress events. */
        export const onActivate: events.Event<(engineID: string, screen: `${ScreenType}`) => void>;

        // /** This event is sent when focus enters a text box. It is sent to all extensions that are listening to this event, and enabled by the user. */
        export const onFocus: events.Event<(context: InputContext) => void>;

        /** Called when the user selects a menu item */
        export const onMenuItemActivated: events.Event<(engineID: string, name: string) => void>;

        /** Called when the editable string around caret is changed or when the caret position is moved. The text length is limited to 100 characters for each back and forth direction. */
        export const onSurroundingTextChanged: events.Event<
            (engineID: string, surroundingInfo: SurroundingTextInfo) => void
        >;

        /** This event is sent when chrome terminates ongoing text input session. */
        export const onReset: events.Event<(engineID: string) => void>;
    }

    ////////////////////
    // Instance ID
    ////////////////////
    /**
     * Use `chrome.instanceID` to access the Instance ID service.
     *
     * Permissions: "gcm"
     * @since Chrome 44
     */
    export namespace instanceID {
        /**
         * Resets the app instance identifier and revokes all tokens associated with it.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function deleteID(): Promise<void>;
        export function deleteID(callback: () => void): void;

        /** Parameters for {@link deleteToken}. */
        interface DeleteTokenParams {
            /**
             * The authorized entity that is used to obtain the token.
             * @since Chrome 46
             */
            authorizedEntity: string;
            /**
             * The scope that is used to obtain the token.
             * @since Chrome 46
             */
            scope: string;
        }

        /**
         * Revokes a granted token.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function deleteToken(deleteTokenParams: DeleteTokenParams): Promise<void>;
        export function deleteToken(
            deleteTokenParams: DeleteTokenParams,
            callback: () => void,
        ): void;

        /**
         * Retrieves the time when the InstanceID has been generated.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @return The time when the Instance ID has been generated, represented in milliseconds since the epoch.
         */
        export function getCreationTime(): Promise<number>;
        export function getCreationTime(callback: (creationTime: number) => void): void;

        /**
         * Retrieves an identifier for the app instance.
         * The same ID will be returned as long as the application identity has not been revoked or expired.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @return An Instance ID assigned to the app instance.
         */
        export function getID(): Promise<string>;
        export function getID(callback: (instanceID: string) => void): void;

        /** Parameters for {@link getToken}. */
        interface GetTokenParams {
            /**
             * Identifies the entity that is authorized to access resources associated with this Instance ID. It can be a project ID from Google developer console.
             * @since Chrome 46
             */
            authorizedEntity: string;
            /**
             * Allows including a small number of string key/value pairs that will be associated with the token and may be used in processing the request.
             * @deprecated since Chrome 89. `options` are deprecated and will be ignored.
             */
            options?: { [key: string]: string };
            /**
             * Identifies authorized actions that the authorized entity can take. E.g. for sending GCM messages, `GCM` scope should be used.
             * @since Chrome 46
             */
            scope: string;
        }
        /**
         * Return a token that allows the authorized entity to access the service defined by scope.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @return A token assigned by the requested service.
         */
        export function getToken(getTokenParams: GetTokenParams): Promise<string>;
        export function getToken(getTokenParams: GetTokenParams, callback: (token: string) => void): void;

        export const onTokenRefresh: events.Event<() => void>;
    }

    ////////////////////
    // LoginState
    ////////////////////
    /**
     * Use the `chrome.loginState` API to read and monitor the login state.
     *
     * Permissions: "loginState"
     * @platform ChromeOS only
     * @since Chrome 78
     */
    export namespace loginState {
        export enum ProfileType {
            /** Specifies that the extension is in the signin profile. */
            SIGNIN_PROFILE = "SIGNIN_PROFILE",
            /** Specifies that the extension is in the user profile. */
            USER_PROFILE = "USER_PROFILE",
            /** Specifies that the extension is in the lock screen profile. */
            LOCK_PROFILE = "LOCK_PROFILE",
        }

        export enum SessionState {
            /** Specifies that the session state is unknown. */
            UNKNOWN = "UNKNOWN",
            /** Specifies that the user is in the out-of-box-experience screen. */
            IN_OOBE_SCREEN = "IN_OOBE_SCREEN",
            /** Specifies that the user is in the login screen. */
            IN_LOGIN_SCREEN = "IN_LOGIN_SCREEN",
            /** Specifies that the user is in the session. */
            IN_SESSION = "IN_SESSION",
            /** Specifies that the user is in the lock screen. */
            IN_LOCK_SCREEN = "IN_LOCK_SCREEN",
            /** Specifies that the device is in RMA mode, finalizing repairs. */
            IN_RMA_SCREEN = "IN_RMA_SCREEN",
        }

        /**
         * Gets the type of the profile the extension is in.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getProfileType(): Promise<`${ProfileType}`>;
        export function getProfileType(callback: (result: `${ProfileType}`) => void): void;

        /**
         * Gets the current session state.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getSessionState(): Promise<`${SessionState}`>;
        export function getSessionState(callback: (sessionState: `${SessionState}`) => void): void;

        /** Dispatched when the session state changes. `sessionState` is the new session state.*/
        export const onSessionStateChanged: events.Event<(sessionState: `${SessionState}`) => void>;
    }

    ////////////////////
    // Management
    ////////////////////
    /**
     * The `chrome.management` API provides ways to manage installed apps and extensions.
     *
     * Permissions: "management"
     */
    export namespace management {
        /**
         * A reason the item is disabled.
         * @since Chrome 44
         */
        export enum ExtensionDisabledReason {
            UNKNOWN = "unknown",
            PERMISSIONS_INCREASE = "permissions_increase",
        }

        /** Information about an installed extension, app, or theme. */
        export interface ExtensionInfo {
            /** A reason the item is disabled. */
            disabledReason?: `${ExtensionDisabledReason}`;
            /** The launch url (only present for apps). */
            appLaunchUrl?: string;
            /** The description of this extension, app, or theme. */
            description: string;
            /** Returns a list of API based permissions. */
            permissions: string[];
            /** A list of icon information. Note that this just reflects what was declared in the manifest, and the actual image at that url may be larger or smaller than what was declared, so you might consider using explicit width and height attributes on img tags referencing these images. See the manifest documentation on icons for more details. */
            icons?: IconInfo[];
            /** Returns a list of host based permissions. */
            hostPermissions: string[];
            /** Whether it is currently enabled or disabled. */
            enabled: boolean;
            /** The URL of the homepage of this extension, app, or theme. */
            homepageUrl?: string;
            /** Whether this extension can be disabled or uninstalled by the user. */
            mayDisable: boolean;
            /**
             * Whether this extension can be enabled by the user. This is only returned for extensions which are not enabled.
             * @since Chrome 62
             */
            mayEnable?: boolean;
            /** How the extension was installed. */
            installType: `${ExtensionInstallType}`;
            /** The version of this extension, app, or theme. */
            version: string;
            /**
             * The version name of this extension, app, or theme if the manifest specified one.
             * @since Chrome 50
             */
            versionName?: string;
            /** The extension's unique identifier. */
            id: string;
            /** Whether the extension, app, or theme declares that it supports offline. */
            offlineEnabled: boolean;
            /** The update URL of this extension, app, or theme. */
            updateUrl?: string;
            /** The type of this extension, app, or theme. */
            type: `${ExtensionType}`;
            /** The url for the item's options page, if it has one. */
            optionsUrl: string;
            /** The name of this extension, app, or theme. */
            name: string;
            /** A short version of the name of this extension, app, or theme. */
            shortName: string;
            /**
             * True if this is an app.
             * @deprecated since Chrome 33. Please use {@link management.ExtensionInfo.type}.
             */
            isApp: boolean;
            /** The app launch type (only present for apps). */
            launchType?: `${LaunchType}`;
            /** The currently available launch types (only present for apps). */
            availableLaunchTypes?: `${LaunchType}`[];
        }

        /**
         * How the extension was installed
         * @since Chrome 44
         */
        export enum ExtensionInstallType {
            /** The extension was installed because of an administrative policy. */
            ADMIN = "admin",
            /** The extension was loaded unpacked in developer mode. */
            DEVELOPMENT = "development",
            /** The extension was installed normally via a .crx file. */
            NORMAL = "normal",
            /** The extension was installed by other software on the machine. */
            SIDELOAD = "sideload",
            /** The extension was installed by other means. */
            OTHER = "other",
        }

        /**
         * The type of this extension, app, or theme.
         * @since Chrome 44
         */
        export enum ExtensionType {
            EXTENSION = "extension",
            HOSTED_APP = "hosted_app",
            PACKAGE_APP = "package_app",
            LEGACY_PACKAGED_APP = "legacy_packaged_app",
            THEME = "theme",
            LOGIN_SCREEN_EXTENSION = "login_screen_extension",
        }

        /** Information about an icon belonging to an extension, app, or theme. */
        export interface IconInfo {
            /** The URL for this icon image. To display a grayscale version of the icon (to indicate that an extension is disabled, for example), append `?grayscale=true` to the URL. */
            url: string;
            /** A number representing the width and height of the icon. Likely values include (but are not limited to) 128, 48, 24, and 16. */
            size: number;
        }

        /** These are all possible app launch types. */
        export enum LaunchType {
            OPEN_AS_REGULAR_TAB = "OPEN_AS_REGULAR_TAB",
            OPEN_AS_PINNED_TAB = "OPEN_AS_PINNED_TAB",
            OPEN_AS_WINDOW = "OPEN_AS_WINDOW",
            OPEN_FULL_SCREEN = "OPEN_FULL_SCREEN",
        }

        /**
         * Options for how to handle the extension's uninstallation.
         * @since Chrome 88
         */
        export interface UninstallOptions {
            /** Whether or not a confirm-uninstall dialog should prompt the user. Defaults to false for self uninstalls. If an extension uninstalls another extension, this parameter is ignored and the dialog is always shown. */
            showConfirmDialog?: boolean | undefined;
        }

        /**
         * Enables or disables an app or extension. In most cases this function must be called in the context of a user gesture (e.g. an onclick handler for a button), and may present the user with a native confirmation UI as a way of preventing abuse.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param id This should be the id from an item of {@link management.ExtensionInfo}.
         * @param enabled Whether this item should be enabled or disabled.
         */
        export function setEnabled(id: string, enabled: boolean): Promise<void>;
        export function setEnabled(id: string, enabled: boolean, callback: () => void): void;

        /**
         * Returns a list of permission warnings for the given extension id.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param id The ID of an already installed extension.
         */
        export function getPermissionWarningsById(id: string): Promise<string[]>;
        export function getPermissionWarningsById(id: string, callback: (permissionWarnings: string[]) => void): void;

        /**
         * Returns information about the installed extension, app, or theme that has the given ID.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param id The ID from an item of {@link management.ExtensionInfo}.
         */
        export function get(id: string): Promise<ExtensionInfo>;
        export function get(id: string, callback: (result: ExtensionInfo) => void): void;

        /**
         * Returns a list of information about installed extensions and apps.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function getAll(): Promise<ExtensionInfo[]>;
        export function getAll(callback: (result: ExtensionInfo[]) => void): void;

        /**
         * Returns a list of permission warnings for the given extension manifest string. Note: This function can be used without requesting the 'management' permission in the manifest.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param manifestStr Extension manifest JSON string.
         */
        export function getPermissionWarningsByManifest(manifestStr: string): Promise<string[]>;
        export function getPermissionWarningsByManifest(
            manifestStr: string,
            callback: (permissionWarnings: string[]) => void,
        ): void;

        /**
         * Launches an application.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param id The extension id of the application.
         */
        export function launchApp(id: string): Promise<void>;
        export function launchApp(id: string, callback: () => void): void;

        /**
         * Uninstalls a currently installed app or extension. Note: This function does not work in managed environments when the user is not allowed to uninstall the specified extension/app. If the uninstall fails (e.g. the user cancels the dialog) the promise will be rejected or the callback will be called with {@link runtime.lastError} set.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param id This should be the id from an item of {@link management.ExtensionInfo}.
         */
        export function uninstall(id: string, options?: UninstallOptions): Promise<void>;
        export function uninstall(id: string, callback: () => void): void;
        export function uninstall(id: string, options: UninstallOptions | undefined, callback: () => void): void;

        /**
         * Returns information about the calling extension, app, or theme. Note: This function can be used without requesting the 'management' permission in the manifest.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function getSelf(): Promise<ExtensionInfo>;
        export function getSelf(callback: (result: ExtensionInfo) => void): void;

        /**
         * Launches the replacement_web_app specified in the manifest. Prompts the user to install if not already installed.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @since Chrome 77
         */
        export function installReplacementWebApp(): Promise<void>;
        export function installReplacementWebApp(callback: () => void): void;

        /**
         * Uninstalls the calling extension. Note: This function can be used without requesting the 'management' permission in the manifest. This function does not work in managed environments when the user is not allowed to uninstall the specified extension/app.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function uninstallSelf(options?: UninstallOptions): Promise<void>;
        export function uninstallSelf(callback: () => void): void;
        export function uninstallSelf(options: UninstallOptions | undefined, callback: () => void): void;

        /**
         * Display options to create shortcuts for an app. On Mac, only packaged app shortcuts can be created.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param id This should be the id from an app item of {@link management.ExtensionInfo}.
         */
        export function createAppShortcut(id: string): Promise<void>;
        export function createAppShortcut(id: string, callback: () => void): void;

        /**
         * Set the launch type of an app.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param id This should be the id from an app item of {@link management.ExtensionInfo}.
         * @param launchType The target launch type. Always check and make sure this launch type is in {@link ExtensionInfo.availableLaunchTypes}, because the available launch types vary on different platforms and configurations.
         */
        export function setLaunchType(id: string, launchType: `${LaunchType}`): Promise<void>;
        export function setLaunchType(id: string, launchType: `${LaunchType}`, callback: () => void): void;

        /**
         * Generate an app for a URL. Returns the generated bookmark app.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param url The URL of a web page. The scheme of the URL can only be "http" or "https".
         * @param title The title of the generated app.
         */
        export function generateAppForLink(url: string, title: string): Promise<ExtensionInfo>;
        export function generateAppForLink(url: string, title: string, callback: (result: ExtensionInfo) => void): void;

        /** Fired when an app or extension has been disabled. */
        export const onDisabled: events.Event<(info: ExtensionInfo) => void>;

        /** Fired when an app or extension has been uninstalled. */
        export const onUninstalled: events.Event<(id: string) => void>;

        /** Fired when an app or extension has been installed. */
        export const onInstalled: events.Event<(info: ExtensionInfo) => void>;

        /** Fired when an app or extension has been enabled. */
        export const onEnabled: events.Event<(info: ExtensionInfo) => void>;
    }

    ////////////////////
    // Notifications
    ////////////////////
    /**
     * Use the `chrome.notifications` API to create rich notifications using templates and show these notifications to users in the system tray.
     *
     * Permissions: "notifications"
     */
    export namespace notifications {
        export interface NotificationButton {
            /** @deprecated since Chrome 59. Button icons not visible for Mac OS X users. */
            iconUrl?: string;
            title: string;
        }

        export interface NotificationItem {
            /** Additional details about this item. */
            message: string;
            /** Title of one item of a list notification. */
            title: string;
        }

        export interface NotificationOptions {
            /**
             * A URL to the app icon mask. URLs have the same restrictions as {@link notifications.NotificationOptions.iconUrl iconUrl}.
             *
             * The app icon mask should be in alpha channel, as only the alpha channel of the image will be considered.
             * @deprecated since Chrome 59. The app icon mask is not visible for Mac OS X users.
             */
            appIconMaskUrl?: string;
            /** Text and icons for up to two notification action buttons. */
            buttons?: NotificationButton[];
            /** Alternate notification content with a lower-weight font. */
            contextMessage?: string;
            /** A timestamp associated with the notification, in milliseconds past the epoch (e.g. `Date.now() + n`). */
            eventTime?: number;
            /**
             * A URL to the sender's avatar, app icon, or a thumbnail for image notifications.
             *
             * URLs can be a data URL, a blob URL, or a URL relative to a resource within this extension's .crx file
             *
             * **Note:** This value is required for the {@link notifications.create}() method.
             */
            iconUrl?: string;
            /**
             * A URL to the image thumbnail for image-type notifications. URLs have the same restrictions as {@link notifications.NotificationOptions.iconUrl iconUrl}.
             * @deprecated since Chrome 59. The image is not visible for Mac OS X users.
             */
            imageUrl?: string;
            /** @deprecated since Chrome 67. This UI hint is ignored as of Chrome 67 */
            isClickable?: boolean;
            /** Items for multi-item notifications. Users on Mac OS X only see the first item. */
            items?: NotificationItem[];
            /**
             * Main notification content.
             *
             * **Note:** This value is required for the {@link notifications.create}() method.
             */
            message?: string;
            /** Priority ranges from -2 to 2. -2 is lowest priority. 2 is highest. Zero is default. On platforms that don't support a notification center (Windows, Linux & Mac), -2 and -1 result in an error as notifications with those priorities will not be shown at all. */
            priority?: number;
            /** Current progress ranges from 0 to 100. */
            progress?: number;
            /**
             * Indicates that the notification should remain visible on screen until the user activates or dismisses the notification. This defaults to false.
             * @since Chrome 50
             */
            requireInteraction?: boolean;
            /**
             * Indicates that no sounds or vibrations should be made when the notification is being shown. This defaults to false.
             * @since Chrome 70
             */
            silent?: boolean;
            /**
             * Title of the notification (e.g. sender name for email).
             *
             * **Note:** This value is required for the {@link notifications.create}() method.
             */
            title?: string;
            /** Which type of notification to display.
             *
             * **Note:** This value is required for the {@link notifications.create}() method.
             */
            type?: `${TemplateType}`;
        }

        type NotificationCreateOptions = SetRequired<NotificationOptions, "type" | "title" | "message" | "iconUrl">;

        export enum PermissionLevel {
            /** Specifies that the user has elected to show notifications from the app or extension. This is the default at install time. */
            GRANTED = "granted",
            /** Specifies that the user has elected not to show notifications from the app or extension. */
            DENIED = "denied",
        }

        export enum TemplateType {
            /** Contains an icon, title, message, expandedMessage, and up to two buttons. */
            BASIC = "basic",
            /** Contains an icon, title, message, expandedMessage, image, and up to two buttons. */
            IMAGE = "image",
            /** Contains an icon, title, message, items, and up to two buttons. Users on Mac OS X only see the first item. */
            LIST = "list",
            /** Contains an icon, title, message, progress, and up to two buttons. */
            PROGRESS = "progress",
        }

        /**
         * Clears the specified notification.
         * @param notificationId The id of the notification to be cleared. This is returned by {@link notifications.create} method.
         *
         * Can return its result via Promise since Chrome 116
         */
        export function clear(notificationId: string): Promise<boolean>;
        export function clear(notificationId: string, callback: (wasCleared: boolean) => void): void;

        /**
         * Creates and displays a notification.
         * @param notificationId Identifier of the notification. If not set or empty, an ID will automatically be generated. If it matches an existing notification, this method first clears that notification before proceeding with the create operation. The identifier may not be longer than 500 characters.
         *
         * The `notificationId` parameter is required before Chrome 42.
         * @param options Contents of the notification.
         *
         * Can return its result via Promise since Chrome 116
         */
        export function create(notificationId: string, options: NotificationCreateOptions): Promise<string>;
        export function create(options: NotificationCreateOptions): Promise<string>;
        export function create(
            notificationId: string,
            options: NotificationCreateOptions,
            callback: (notificationId: string) => void,
        ): void;
        export function create(options: NotificationCreateOptions, callback: (notificationId: string) => void): void;

        /**
         * Retrieves all the notifications of this app or extension.
         *
         * Can return its result via Promise since Chrome 116
         */
        export function getAll(): Promise<{ [key: string]: true }>;
        export function getAll(callback: (notifications: { [key: string]: true }) => void): void;

        /**
         * Retrieves whether the user has enabled notifications from this app or extension.
         *
         * Can return its result via Promise since Chrome 116
         */
        export function getPermissionLevel(): Promise<`${PermissionLevel}`>;
        export function getPermissionLevel(callback: (level: `${PermissionLevel}`) => void): void;

        /**
         * Updates an existing notification.
         * @param notificationId The id of the notification to be updated. This is returned by {@link notifications.create} method.
         * @param options Contents of the notification to update to.
         *
         * Can return its result via Promise since Chrome 116
         */
        export function update(notificationId: string, options: NotificationOptions): Promise<boolean>;
        export function update(
            notificationId: string,
            options: NotificationOptions,
            callback: (wasUpdated: boolean) => void,
        ): void;

        /** The user pressed a button in the notification. */
        export const onButtonClicked: events.Event<(notificationId: string, buttonIndex: number) => void>;

        /** The user clicked in a non-button area of the notification. */
        export const onClicked: events.Event<(notificationId: string) => void>;

        /** The notification closed, either by the system or by user action. */
        export const onClosed: events.Event<(notificationId: string, byUser: boolean) => void>;

        /** The user changes the permission level. As of Chrome 47, only ChromeOS has UI that dispatches this event. */
        export const onPermissionLevelChanged: events.Event<(level: `${PermissionLevel}`) => void>;

        /**
         * The user clicked on a link for the app's notification settings. As of Chrome 47, only ChromeOS has UI that dispatches this event. As of Chrome 65, that UI has been removed from ChromeOS, too.
         * @deprecated since Chrome 65. Custom notification settings button is no longer supported.
         */
        export const onShowSettings: events.Event<() => void>;
    }

    ////////////////////
    // Offscreen
    ////////////////////
    /**
     * Use the `offscreen` API to create and manage offscreen documents.
     *
     * Permissions: "offscreen"
     * @since Chrome 109, MV3
     */
    export namespace offscreen {
        /** The reason(s) the extension is creating the offscreen document. */
        export enum Reason {
            /** A reason used for testing purposes only. */
            TESTING = "TESTING",
            /** Specifies that the offscreen document is responsible for playing audio. */
            AUDIO_PLAYBACK = "AUDIO_PLAYBACK",
            /** Specifies that the offscreen document needs to embed and script an iframe in order to modify the iframe's content. */
            IFRAME_SCRIPTING = "IFRAME_SCRIPTING",
            /** Specifies that the offscreen document needs to embed an iframe and scrape its DOM to extract information. */
            DOM_SCRAPING = "DOM_SCRAPING",
            /** Specifies that the offscreen document needs to interact with Blob objects (including `URL.createObjectURL()`). */
            BLOBS = "BLOBS",
            /** Specifies that the offscreen document needs to use the DOMParser API. */
            DOM_PARSER = "DOM_PARSER",
            /** Specifies that the offscreen document needs to interact with media streams from user media (e.g. `getUserMedia()`). */
            USER_MEDIA = "USER_MEDIA",
            /** Specifies that the offscreen document needs to interact with media streams from display media (e.g. `getDisplayMedia()`). */
            DISPLAY_MEDIA = "DISPLAY_MEDIA",
            /** Specifies that the offscreen document needs to use WebRTC APIs. */
            WEB_RTC = "WEB_RTC",
            /** Specifies that the offscreen document needs to interact with the Clipboard API. */
            CLIPBOARD = "CLIPBOARD",
            /** Specifies that the offscreen document needs access to localStorage. */
            LOCAL_STORAGE = "LOCAL_STORAGE",
            /** Specifies that the offscreen document needs to spawn workers. */
            WORKERS = "WORKERS",
            /** Specifies that the offscreen document needs to use navigator.getBattery. */
            BATTERY_STATUS = "BATTERY_STATUS",
            /** Specifies that the offscreen document needs to use window.matchMedia. */
            MATCH_MEDIA = "MATCH_MEDIA",
            /** Specifies that the offscreen document needs to use navigator.geolocation. */
            GEOLOCATION = "GEOLOCATION",
        }

        export interface CreateParameters {
            /** The reason(s) the extension is creating the offscreen document. */
            reasons: `${Reason}`[];
            /** The (relative) URL to load in the document. */
            url: string;
            /** A developer-provided string that explains, in more detail, the need for the background context. The user agent _may_ use this in display to the user. */
            justification: string;
        }

        /**
         * Creates a new offscreen document for the extension.
         * @param parameters The parameters describing the offscreen document to create.
         *
         * Can return its result via Promise in Manifest V3.
         */
        export function createDocument(parameters: CreateParameters): Promise<void>;
        export function createDocument(parameters: CreateParameters, callback: () => void): void;

        /**
         * Closes the currently-open offscreen document for the extension.
         *
         * Can return its result via Promise in Manifest V3.
         */
        export function closeDocument(): Promise<void>;
        export function closeDocument(callback: () => void): void;

        /**
         * Determines whether the extension has an active document.
         *
         * Can return its result via Promise in Manifest V3.
         */
        export function hasDocument(): Promise<boolean>;
        export function hasDocument(callback: (result: boolean) => void): void;
    }

    ////////////////////
    // Omnibox
    ////////////////////
    /**
     * The omnibox API allows you to register a keyword with Google Chrome's address bar, which is also known as the omnibox.
     *
     * Manifest: "omnibox"
     */
    export namespace omnibox {
        /** A suggest result. */
        export interface SuggestResult {
            /** The text that is put into the URL bar, and that is sent to the extension when the user chooses this entry. */
            content: string;
            /** The text that is displayed in the URL dropdown. Can contain XML-style markup for styling. The supported tags are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query), and 'dim' (for dim helper text). The styles can be nested, eg. dimmed match. You must escape the five predefined entities to display them as text: stackoverflow.com/a/1091953/89484 */
            description: string;
            /**
             * Whether the suggest result can be deleted by the user.
             * @since Chrome 63
             */
            deletable?: boolean | undefined;
        }

        /** A suggest result. */
        export interface DefaultSuggestResult {
            /** The text that is displayed in the URL dropdown. Can contain XML-style markup for styling. The supported tags are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query), and 'dim' (for dim helper text). The styles can be nested, eg. dimmed match. */
            description: string;
        }

        /**
         * The style type.
         * @since Chrome 44
         */
        export enum DescriptionStyleType {
            URL = "url",
            MATCH = "match",
            DIM = "dim",
        }

        /**
         * The window disposition for the omnibox query. This is the recommended context to display results. For example, if the omnibox command is to navigate to a certain URL, a disposition of 'newForegroundTab' means the navigation should take place in a new selected tab.
         * @since Chrome 44
         */
        export enum OnInputEnteredDisposition {
            CURRENT_TAB = "currentTab",
            NEW_FOREGROUND_TAB = "newForegroundTab",
            NEW_BACKGROUND_TAB = "newBackgroundTab",
        }

        /**
         * Sets the description and styling for the default suggestion. The default suggestion is the text that is displayed in the first suggestion row underneath the URL bar.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 100
         * @param suggestion A partial SuggestResult object, without the 'content' parameter.
         */
        export function setDefaultSuggestion(suggestion: DefaultSuggestResult): Promise<void>;
        export function setDefaultSuggestion(suggestion: DefaultSuggestResult, callback: () => void): void;

        /** User has accepted what is typed into the omnibox. */
        export const onInputEntered: events.Event<(text: string, disposition: `${OnInputEnteredDisposition}`) => void>;

        /** User has changed what is typed into the omnibox. */
        export const onInputChanged: events.Event<
            (text: string, suggest: (suggestResults: SuggestResult[]) => void) => void
        >;

        /** User has started a keyword input session by typing the extension's keyword. This is guaranteed to be sent exactly once per input session, and before any onInputChanged events. */
        export const onInputStarted: events.Event<() => void>;

        /** User has ended the keyword input session without accepting the input. */
        export const onInputCancelled: events.Event<() => void>;

        /**
         * User has deleted a suggested result
         * @since Chrome 63
         */
        export const onDeleteSuggestion: events.Event<(text: string) => void>;
    }

    ////////////////////
    // Page Action
    ////////////////////
    /**
     * Use the `chrome.pageAction` API to put icons in the main Google Chrome toolbar, to the right of the address bar. Page actions represent actions that can be taken on the current page, but that aren't applicable to all pages. Page actions appear grayed out when inactive.
     *
     * Manifest: "page_action"
     *
     * MV2 only
     */
    export namespace pageAction {
        export interface TitleDetails {
            /** The id of the tab for which you want to modify the page action. */
            tabId: number;
            /** The tooltip string. */
            title: string;
        }

        export interface TabDetails {
            /** The ID of the tab to query state for. */
            tabId: number;
        }

        export interface PopupDetails {
            /** The id of the tab for which you want to modify the page action. */
            tabId: number;
            /** The relative path to the HTML file to show in a popup. If set to the empty string (`''`), no popup is shown. */
            popup: string;
        }

        export type IconDetails =
            & {
                /** @deprecated This argument is ignored. */
                iconIndex?: number | undefined;
                /** The id of the tab for which you want to modify the page action. */
                tabId: number;
            }
            & (
                | {
                    /** Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` \* n will be selected, where n is the size of the icon in the UI. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'16': foo}' */
                    imageData: ImageData | { [index: number]: ImageData };
                    /** Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` \* n will be selected, where n is the size of the icon in the UI. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.path = {'16': foo}' */
                    path?: string | { [index: string]: string } | undefined;
                }
                | {
                    /** Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` \* n will be selected, where n is the size of the icon in the UI. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'16': foo}' */
                    imageData?: ImageData | { [index: number]: ImageData } | undefined;
                    /** Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` \* n will be selected, where n is the size of the icon in the UI. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.path = {'16': foo}' */
                    path: string | { [index: string]: string };
                }
            );

        /**
         * Hides the page action. Hidden page actions still appear in the Chrome toolbar, but are grayed out.
         * @param tabId The id of the tab for which you want to modify the page action.
         * @param callback Since Chrome 67
         */
        export function hide(tabId: number, callback?: () => void): void;

        /**
         * Shows the page action. The page action is shown whenever the tab is selected.
         * @param tabId The id of the tab for which you want to modify the page action.
         * @param callback Since Chrome 67
         */
        export function show(tabId: number, callback?: () => void): void;

        /**
         * Sets the title of the page action. This is displayed in a tooltip over the page action.
         * @param callback Since Chrome 67
         */
        export function setTitle(details: TitleDetails, callback?: () => void): void;

        /**
         * Sets the HTML document to be opened as a popup when the user clicks on the page action's icon.
         * @param callback Since Chrome 67
         */
        export function setPopup(details: PopupDetails, callback?: () => void): void;

        /** Gets the title of the page action. */
        export function getTitle(details: TabDetails, callback: (result: string) => void): void;

        /** Gets the html document set as the popup for this page action. */
        export function getPopup(details: TabDetails, callback: (result: string) => void): void;

        /** Sets the icon for the page action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the path or the imageData property must be specified. */
        export function setIcon(details: IconDetails, callback?: () => void): void;

        /** Fired when a page action icon is clicked. This event will not fire if the page action has a popup. */
        export const onClicked: events.Event<(tab: chrome.tabs.Tab) => void>;
    }

    ////////////////////
    // Page Capture
    ////////////////////
    /**
     * Use the `chrome.pageCapture` API to save a tab as MHTML.
     *
     * Permissions: "pageCapture"
     */
    export namespace pageCapture {
        export interface SaveDetails {
            /** The id of the tab to save as MHTML. */
            tabId: number;
        }

        /**
         * Saves the content of the tab with given id as MHTML.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         */
        export function saveAsMHTML(details: SaveDetails): Promise<Blob | undefined>;
        export function saveAsMHTML(details: SaveDetails, callback: (mhtmlData?: Blob) => void): void;
    }

    ////////////////////
    // Permissions
    ////////////////////
    /**
     * Use the `chrome.permissions` API to request declared optional permissions at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary.
     */
    export namespace permissions {
        export interface Permissions {
            /** The list of host permissions, including those specified in the `optional_permissions` or `permissions` keys in the manifest, and those associated with [Content Scripts](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts). */
            origins?: string[];
            /** List of named permissions (does not include hosts or origins). */
            permissions?: chrome.runtime.ManifestPermission[];
        }

        export interface AddHostAccessRequest {
            /** The id of a document where host access requests can be shown. Must be the top-level document within a tab. If provided, the request is shown on the tab of the specified document and is removed when the document navigates to a new origin. Adding a new request will override any existent request for `tabId`. This or `tabId` must be specified. */
            documentId?: string;
            /** The URL pattern where host access requests can be shown. If provided, host access requests will only be shown on URLs that match this pattern. */
            pattern?: string;
            /** The id of the tab where host access requests can be shown. If provided, the request is shown on the specified tab and is removed when the tab navigates to a new origin. Adding a new request will override an existent request for `documentId`. This or `documentId` must be specified. */
            tabId?: number;
        }

        /**
         * Adds a host access request. Request will only be signaled to the user if extension can be granted access to the host in the request. Request will be reset on cross-origin navigation. When accepted, grants persistent access to the site’s top origin
         * @since Chrome 133
         */
        export function addHostAccessRequest(request: AddHostAccessRequest): Promise<void>;
        export function addHostAccessRequest(request: AddHostAccessRequest, callback: () => void): void;

        /**
         * Checks if the extension has the specified permissions.
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function contains(permissions: Permissions): Promise<boolean>;
        export function contains(permissions: Permissions, callback: (result: boolean) => void): void;

        /**
         * Gets the extension's current set of permissions.
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getAll(): Promise<Permissions>;
        export function getAll(callback: (permissions: Permissions) => void): void;

        /**
         * Requests access to the specified permissions, displaying a prompt to the user if necessary.
         * These permissions must either be defined in the optional_permissions field of the manifest or be required permissions that were withheld by the user.
         * Paths on origin patterns will be ignored.
         * You can request subsets of optional origin permissions; for example, if you specify `*://*\/*` in the `optional_permissions` section of the manifest, you can request `http://example.com/`.
         * If there are any problems requesting the permissions, {@link runtime.lastError} will be set.
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function request(permissions: Permissions): Promise<boolean>;
        export function request(permissions: Permissions, callback: (granted: boolean) => void): void;

        /**
         * Removes access to the specified permissions. If there are any problems removing the permissions, {@link runtime.lastError} will be set.
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function remove(permissions: Permissions): Promise<boolean>;
        export function remove(permissions: Permissions, callback: (removed: boolean) => void): void;

        export interface RemoveHostAccessRequest {
            /** The id of a document where host access request will be removed. Must be the top-level document within a tab. This or `tabId` must be specified. */
            documentId?: string;
            /** The URL pattern where host access request will be removed. If provided, this must exactly match the pattern of an existing host access request. */
            pattern?: string;
            /** The id of the tab where host access request will be removed. This or `documentId` must be specified. */
            tabId?: number;
        }

        /**
         * Removes a host access request, if existent.
         * @since Chrome 133
         */
        export function removeHostAccessRequest(request: RemoveHostAccessRequest): Promise<void>;
        export function removeHostAccessRequest(request: RemoveHostAccessRequest, callback: () => void): void;

        /** Fired when access to permissions has been removed from the extension. */
        export const onRemoved: chrome.events.Event<(permissions: Permissions) => void>;

        /** Fired when the extension acquires new permissions. */
        export const onAdded: chrome.events.Event<(permissions: Permissions) => void>;
    }

    ////////////////////
    // Platform Keys
    ////////////////////
    /**
     * Use the `chrome.platformKeys` API to access client certificates managed by the platform. If the user or policy grants the permission, an extension can use such a certficate in its custom authentication protocol. E.g. this allows usage of platform managed certificates in third party VPNs (see chrome.vpnProvider).
     *
     * Permissions: "platformKeys"
     * @platform ChromeOS only
     * @since Chrome 45
     */
    export namespace platformKeys {
        export interface Match {
            /** The DER encoding of a X.509 certificate. */
            certificate: ArrayBuffer;
            /** The KeyAlgorithm of the certified key. This contains algorithm parameters that are inherent to the key of the certificate (e.g. the key length). Other parameters like the hash function used by the sign function are not included. */
            keyAlgorithm: KeyAlgorithm;
        }

        export interface ClientCertificateRequest {
            /** This field is a list of the types of certificates requested, sorted in order of the server's preference. Only certificates of a type contained in this list will be retrieved. If `certificateTypes` is the empty list, however, certificates of any type will be returned. */
            certificateTypes: `${ClientCertificateType}`[];
            /** List of distinguished names of certificate authorities allowed by the server. Each entry must be a DER-encoded X.509 DistinguishedName. */
            certificateAuthorities: ArrayBuffer[];
        }

        export enum ClientCertificateType {
            ECDSA_SIGN = "ecdsaSign",
            RAS_SIGN = "rasSign",
        }

        export interface SelectDetails {
            /** Only certificates that match this request will be returned. */
            request: ClientCertificateRequest;
            /** If given, the `selectClientCertificates` operates on this list. Otherwise, obtains the list of all certificates from the platform's certificate stores that are available to this extensions. Entries that the extension doesn't have permission for or which doesn't match the request, are removed. */
            clientCerts?: ArrayBuffer[] | undefined;
            /** If true, the filtered list is presented to the user to manually select a certificate and thereby granting the extension access to the certificate(s) and key(s). Only the selected certificate(s) will be returned. If is false, the list is reduced to all certificates that the extension has been granted access to (automatically or manually). */
            interactive: boolean;
        }

        export interface VerificationDetails {
            /** Each chain entry must be the DER encoding of a X.509 certificate, the first entry must be the server certificate and each entry must certify the entry preceding it. */
            serverCertificateChain: ArrayBuffer[];
            /** The hostname of the server to verify the certificate for, e.g. the server that presented the `serverCertificateChain`. */
            hostname: string;
        }

        export interface VerificationResult {
            /** The result of the trust verification: true if trust for the given verification details could be established and false if trust is rejected for any reason. */
            trusted: boolean;
            /**
             * If the trust verification failed, this array contains the errors reported by the underlying network layer. Otherwise, this array is empty.
             *
             * Note: This list is meant for debugging only and may not contain all relevant errors. The errors returned may change in future revisions of this API, and are not guaranteed to be forwards or backwards compatible.
             */
            debug_errors: string[];
        }

        /**
         * This method filters from a list of client certificates the ones that are known to the platform, match `request` and for which the extension has permission to access the certificate and its private key. If `interactive` is true, the user is presented a dialog where they can select from matching certificates and grant the extension access to the certificate. The selected/filtered client certificates will be passed to `callback`.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 121.
         */
        export function selectClientCertificates(details: SelectDetails): Promise<Match[]>;
        export function selectClientCertificates(
            details: SelectDetails,
            callback: (matches: Match[]) => void,
        ): void;

        /**
         * Passes the key pair of `certificate` for usage with {@link platformKeys.subtleCrypto} to `callback`.
         * @param certificate The certificate of a {@link Match} returned by {@link selectClientCertificates}.
         * @param parameters Determines signature/hash algorithm parameters additionally to the parameters fixed by the key itself. The same parameters are accepted as by WebCrypto's importKey function, e.g. `RsaHashedImportParams` for a RSASSA-PKCS1-v1_5 key and `EcKeyImportParams` for EC key. Additionally for RSASSA-PKCS1-v1_5 keys, hashing algorithm name parameter can be specified with one of the following values: "none", "SHA-1", "SHA-256", "SHA-384", or "SHA-512", e.g. `{"hash": { "name": "none" } }`. The sign function will then apply PKCS#1 v1.5 padding but not hash the given data.
         *
         * Currently, this method only supports the "RSASSA-PKCS1-v1\_5" and "ECDSA" algorithms.
         */
        export function getKeyPair(
            certificate: ArrayBuffer,
            parameters: { [key: string]: unknown },
            callback: (publicKey: CryptoKey, privateKey: CryptoKey | null) => void,
        ): void;

        /**
         * Passes the key pair identified by `publicKeySpkiDer` for usage with {@link platformKeys.subtleCrypto} to `callback`.
         *
         * @param publicKeySpkiDer A DER-encoded X.509 SubjectPublicKeyInfo, obtained e.g. by calling WebCrypto's exportKey function with format="spki".
         * @param parameters Provides signature and hash algorithm parameters, in addition to those fixed by the key itself. The same parameters are accepted as by WebCrypto's [importKey](https://www.w3.org/TR/WebCryptoAPI/#SubtleCrypto-method-importKey) function, e.g. `RsaHashedImportParams` for a RSASSA-PKCS1-v1\_5 key. For RSASSA-PKCS1-v1\_5 keys, we need to also pass a "hash" parameter `{ "hash": { "name": string } }`. The "hash" parameter represents the name of the hashing algorithm to be used in the digest operation before a sign. It is possible to pass "none" as the hash name, in which case the sign function will apply PKCS#1 v1.5 padding and but not hash the given data.
         *
         * Currently, this method supports the "ECDSA" algorithm with named-curve P-256 and "RSASSA-PKCS1-v1\_5" algorithm with one of the hashing algorithms "none", "SHA-1", "SHA-256", "SHA-384", and "SHA-512".
         * @since Chrome 85
         */
        export function getKeyPairBySpki(
            publicKeySpkiDer: ArrayBuffer,
            parameters: { [key: string]: unknown },
            callback: (publicKey: CryptoKey, privateKey: CryptoKey | null) => void,
        ): void;

        /** An implementation of WebCrypto's SubtleCrypto that allows crypto operations on keys of client certificates that are available to this extension. */
        export function subtleCrypto(): SubtleCrypto | undefined;

        /**
         * Checks whether `details.serverCertificateChain` can be trusted for `details.hostname` according to the trust settings of the platform. Note: The actual behavior of the trust verification is not fully specified and might change in the future. The API implementation verifies certificate expiration, validates the certification path and checks trust by a known CA. The implementation is supposed to respect the EKU serverAuth and to support subject alternative names.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 121.
         */
        export function verifyTLSServerCertificate(details: VerificationDetails): Promise<VerificationResult>;
        export function verifyTLSServerCertificate(
            details: VerificationDetails,
            callback: (result: VerificationResult) => void,
        ): void;
    }

    ////////////////////
    // Power
    ////////////////////
    /**
     * Use the `chrome.power` API to override the system's power management features.
     *
     * Permissions: "power"
     */
    export namespace power {
        export enum Level {
            /** Prevents the display from being turned off or dimmed, or the system from sleeping in response to user inactivity */
            DISPLAY = "display",
            /** Prevents the system from sleeping in response to user inactivity. */
            SYSTEM = "system",
        }

        /** Requests that power management be temporarily disabled. `level` describes the degree to which power management should be disabled. If a request previously made by the same app is still active, it will be replaced by the new request. */
        export function requestKeepAwake(level: `${Level}`): void;

        /** Releases a request previously made via requestKeepAwake(). */
        export function releaseKeepAwake(): void;

        /**
         * Reports a user activity in order to awake the screen from a dimmed or turned off state or from a screensaver. Exits the screensaver if it is currently active.
         * Can return its result via Promise in Manifest V3 or later.
         * @platform ChromeOS only
         * @since Chrome 113
         */
        export function reportActivity(): Promise<void>;
        export function reportActivity(callback: () => void): void;
    }

    ////////////////////
    // Printer Provider
    ////////////////////
    /**
     * The `chrome.printerProvider` API exposes events used by print manager to query printers controlled by extensions, to query their capabilities and to submit print jobs to these printers.
     *
     * Permissions: "printerProvider"
     * @since Chrome 44
     */
    export namespace printerProvider {
        export interface PrinterInfo {
            /** Unique printer ID. */
            id: string;
            /** Printer's human readable name. */
            name: string;
            /** Printer's human readable description. */
            description?: string | undefined;
        }

        /** Error codes returned in response to {@link onPrintRequested} event. */
        export enum PrintError {
            /** Specifies that the operation was completed successfully. */
            OK = "OK",
            /** Specifies that a general failure occured. */
            FAILED = "FAILED",
            /** Specifies that the print ticket is invalid. For example, the ticket is inconsistent with some capabilities, or the extension is not able to handle all settings from the ticket. */
            INVALID_TICKET = "INVALID_TICKET",
            /** Specifies that the document is invalid. For example, data may be corrupted or the format is incompatible with the extension. */
            INVALID_DATA = "INVALID_DATA",
        }

        export interface PrinterCapabilities {
            /** Device capabilities in CDD format. */
            capabilities: { [key: string]: unknown };
        }

        export interface PrintJob {
            /** ID of the printer which should handle the job. */
            printerId: string;
            /** The print job title. */
            title: string;
            /** Print ticket in CJT format. */
            ticket: { [key: string]: unknown };
            /** The document content type. Supported formats are `application/pdf` and `image/pwg-raster`. */
            contentType: string;
            /** Blob containing the document data to print. Format must match `contentType`. */
            document: Blob;
        }

        /** from https://developer.chrome.com/docs/apps/reference/usb#type-Device */
        export interface Device {
            /** An opaque ID for the USB device. It remains unchanged until the device is unplugged. */
            device: number;
            /**
             * The iManufacturer string read from the device, if available.
             * @since Chrome 46
             */
            manufacturerName: string;
            /** The product ID. */
            productId: number;
            /**
             * The iProduct string read from the device, if available.
             * @since Chrome 46
             */
            productName: string;
            /**
             * The iSerialNumber string read from the device, if available.
             * @since Chrome 46
             */
            serialNumber: string;
            /** The device vendor ID. */
            vendorId: number;
            /**
             * The device version (bcdDevice field).
             * @since Chrome 51
             */
            version: number;
        }

        /** Event fired when print manager requests printers provided by extensions. */
        export const onGetPrintersRequested: events.Event<
            (resultCallback: (printerInfo: PrinterInfo[]) => void) => void
        >;

        /**
         * Event fired when print manager requests information about a USB device that may be a printer.
         *
         * Note: An application should not rely on this event being fired more than once per device. If a connected device is supported it should be returned in the {@link onGetPrintersRequested} event.
         * @since Chrome 45
         */
        export const onGetUsbPrinterInfoRequested: events.Event<
            (device: Device, resultCallback: (printerInfo?: PrinterInfo) => void) => void
        >;

        /** Event fired when print manager requests printer capabilities. */
        export const onGetCapabilityRequested: events.Event<
            (printerId: string, resultCallback: (capabilities: PrinterCapabilities) => void) => void
        >;

        /** Event fired when print manager requests printing. */
        export const onPrintRequested: events.Event<
            (printJob: PrintJob, resultCallback: (result: `${PrintError}`) => void) => void
        >;
    }

    ////////////////////
    // Printing
    ////////////////////
    /**
     * Use the `chrome.printing` API to send print jobs to printers installed on Chromebook.

    * Permissions: "printing"
    * @platform ChromeOS only
    * @since Chrome 81
    */
    export namespace printing {
        export interface GetPrinterInfoResponse {
            /** Printer capabilities in [CDD format](https://developers.google.com/cloud-print/docs/cdd#cdd-example). The property may be missing. */
            capabilities?: { [key: string]: unknown };
            /** The status of the printer. */
            status: PrinterStatus;
        }

        /** Status of the print job. */
        export enum JobStatus {
            /** Print job is received on Chrome side but was not processed yet. */
            PENDING = "PENDING",
            /** Print job is sent for printing. */
            IN_PROGRESS = "IN_PROGRESS",
            /** Print job was interrupted due to some error. */
            FAILED = "FAILED",
            /** Print job was canceled by the user or via API. */
            CANCELED = "CANCELED",
            /** Print job was printed without any errors. */
            PRINTED = "PRINTED",
        }

        export interface Printer {
            /** The human-readable description of the printer. */
            description: string;
            /** The printer's identifier; guaranteed to be unique among printers on the device. */
            id: string;
            /** The flag which shows whether the printer fits DefaultPrinterSelection rules. Note that several printers could be flagged. */
            isDefault: boolean;
            /** The name of the printer. */
            name: string;
            /**
             * The value showing how recent the printer was used for printing from Chrome.
             * The lower the value is the more recent the printer was used.
             * The minimum value is 0.
             * Missing value indicates that the printer wasn't used recently.
             * This value is guaranteed to be unique amongst printers.
             */
            recentlyUsedRank?: number;
            /** The source of the printer (user or policy configured). */
            source: PrinterSource;
            /** The printer URI. This can be used by extensions to choose the printer for the user. */
            uri: string;
        }

        /** The source of the printer. */
        export enum PrinterSource {
            /** Printer was added by user. */
            USER = "USER",
            /** Printer was added via policy. */
            POLICY = "POLICY",
        }

        /** The status of the printer. */
        export enum PrinterStatus {
            /** The door of the printer is open. Printer still accepts print jobs. */
            DOOR_OPEN = "DOOR_OPEN",
            /** The tray of the printer is missing. Printer still accepts print jobs. */
            TRAY_MISSING = "TRAY_MISSING",
            /** The printer is out of ink. Printer still accepts print jobs. */
            OUT_OF_INK = "OUT_OF_INK",
            /** The printer is out of paper. Printer still accepts print jobs. */
            OUT_OF_PAPER = "OUT_OF_PAPER",
            /** The output area of the printer (e.g. tray) is full. Printer still accepts print jobs. */
            OUTPUT_FULL = "OUTPUT_FULL",
            /** The printer has a paper jam. Printer still accepts print jobs. */
            PAPER_JAM = "PAPER_JAM",
            /** Some generic issue. Printer still accepts print jobs. */
            GENERIC_ISSUE = "GENERIC_ISSUE",
            /** The printer is stopped and doesn't print but still accepts print jobs. */
            STOPPED = "STOPPED",
            /** The printer is unreachable and doesn't accept print jobs. */
            UNREACHABLE = "UNREACHABLE",
            /** The SSL certificate is expired. Printer accepts jobs but they fail. */
            EXPIRED_CERTIFICATE = "EXPIRED_CERTIFICATE",
            /** The printer is available. */
            AVAILABLE = "AVAILABLE",
        }

        export interface SubmitJobRequest {
            /**
             * The print job to be submitted.
             * Supported content types are "application/pdf" and "image/png". The Cloud Job Ticket shouldn't include `FitToPageTicketItem`, `PageRangeTicketItem` and `ReverseOrderTicketItem` fields since they are irrelevant for native printing. `VendorTicketItem` is optional
             * All other fields must be present.
             */
            job: chrome.printerProvider.PrintJob;
        }

        export interface SubmitJobResponse {
            /** The id of created print job. This is a unique identifier among all print jobs on the device. If status is not OK, jobId will be null. */
            jobId: string | null;
            /** The status of the request. */
            status: SubmitJobStatus;
        }

        /** The status of submitJob request. */
        export enum SubmitJobStatus {
            /** Sent print job request is accepted. */
            OK = "OK",
            /** Sent print job request is rejected by the user. */
            USER_REJECTED = "USER_REJECTED",
        }

        /** The maximum number of times that getPrinterInfo can be called per minute. */
        export const MAX_GET_PRINTER_INFO_CALLS_PER_MINUTE: 20;

        /** The maximum number of times that submitJob can be called per minute. */
        export const MAX_SUBMIT_JOB_CALLS_PER_MINUTE: 40;

        /**
         * Cancels previously submitted job.
         * Can return its result via Promise in Manifest V3 or later since Chrome 100.
         */
        export function cancelJob(jobId: string): Promise<void>;
        export function cancelJob(jobId: string, callback: () => void): void;

        /**
         * Returns the status of the print job. This call will fail with a runtime error if the print job with the given `jobId` doesn't exist. `jobId`: The id of the print job to return the status of. This should be the same id received in a {@link SubmitJobResponse}.
         * @since Chrome 135
         */
        export function getJobStatus(jobId: string): Promise<`${JobStatus}`>;
        export function getJobStatus(jobId: string, callback: (status: `${JobStatus}`) => void): void;

        /**
         * Returns the status and capabilities of the printer in CDD format. This call will fail with a runtime error if no printers with given id are installed.
         * Can return its result via Promise in Manifest V3 or later since Chrome 100.
         */
        export function getPrinterInfo(printerId: string): Promise<GetPrinterInfoResponse>;
        export function getPrinterInfo(printerId: string, callback: (response: GetPrinterInfoResponse) => void): void;

        /**
         * Returns the list of available printers on the device. This includes manually added, enterprise and discovered printers.
         * Can return its result via Promise in Manifest V3 or later since Chrome 100.
         */
        export function getPrinters(): Promise<Printer[]>;
        export function getPrinters(callback: (printers: Printer[]) => void): void;

        /**
         * Submits the job for printing. If the extension is not listed in the PrintingAPIExtensionsAllowlist policy, the user is prompted to accept the print job.
         * Can return its result via Promise in Manifest V3 or later since Chrome 120.
         */
        export function submitJob(request: SubmitJobRequest): Promise<SubmitJobResponse>;
        export function submitJob(request: SubmitJobRequest, callback: (response: SubmitJobResponse) => void): void;

        /**
         * Event fired when the status of the job is changed. This is only fired for the jobs created by this extension.
         */
        export const onJobStatusChanged: chrome.events.Event<(jobId: string, status: `${JobStatus}`) => void>;
    }

    ////////////////////
    // Printing Metrics
    ////////////////////
    /**
     * Use the `chrome.printingMetrics` API to fetch data about printing usage.
     *
     * Permissions: "printingMetrics"
     *
     * Note: Only available to policy installed extensions.
     * @platform ChromeOS only
     * @since Chrome 79
     */
    export namespace printingMetrics {
        export enum ColorMode {
            /** Specifies that black and white mode was used. */
            BLACK_AND_WHITE = "BLACK_AND_WHITE",
            /** Specifies that color mode was used. */
            COLOR = "COLOR",
        }

        export enum DuplexMode {
            /** Specifies that one-sided printing was used. */
            ONE_SIDED = "ONE_SIDED",
            /** Specifies that two-sided printing was used, flipping on long edge. */
            TWO_SIDED_LONG_EDGE = "TWO_SIDED_LONG_EDGE",
            /** Specifies that two-sided printing was used, flipping on short edge. */
            TWO_SIDED_SHORT_EDGE = "TWO_SIDED_SHORT_EDGE",
        }

        export interface MediaSize {
            /** Height (in micrometers) of the media used for printing. */
            height: number;
            /**
             * Vendor-provided ID, e.g. "iso_a3_297x420mm" or "na_index-3x5_3x5in".
             * Possible values are values of "media" IPP attribute and can be found on [IANA page](https://www.iana.org/assignments/ipp-registrations/ipp-registrations.xhtml).
             */
            vendorId: string;
            /** Width (in micrometers) of the media used for printing. */
            width: number;
        }

        export interface Printer {
            /** Displayed name of the printer. */
            name: string;
            /** The source of the printer. */
            source: PrinterSource;
            /** The full path for the printer. Contains protocol, hostname, port, and queue. */
            uri: string;
        }

        /** The source of the printer. */
        export enum PrinterSource {
            /** Specifies that the printer was added by user. */
            USER = "USER",
            /** Specifies that the printer was added via policy. */
            POLICY = "POLICY",
        }

        export interface PrintJobInfo {
            /** The job completion time (in milliseconds past the Unix epoch). */
            completionTime: number;
            /** The job creation time (in milliseconds past the Unix epoch). */
            creationTime: number;
            /** The ID of the job. */
            id: string;
            /** The number of pages in the document. */
            numberOfPages: number;
            /** The info about the printer which printed the document. */
            printer: Printer;
            /**
             * The status of the printer.
             * @since Chrome 85
             */
            printer_status: chrome.printing.PrinterStatus;
            /** The settings of the print job. */
            settings: PrintSettings;
            /** Source showing who initiated the print job. */
            source: PrintJobSource;
            /** ID of source. Null if source is PRINT_PREVIEW or ANDROID_APP. */
            sourceId: string | null;
            /** The final status of the job. */
            status: PrintJobStatus;
            /** The title of the document which was printed. */
            title: string;
        }

        /** The source of the print job. */
        export enum PrintJobSource {
            /** Specifies that the job was created from the Print Preview page initiated by the user. */
            PRINT_PREVIEW = "PRINT_PREVIEW",
            /** Specifies that the job was created from an Android App. */
            ANDROID_APP = "ANDROID_APP",
            /** Specifies that the job was created by extension via Chrome API. */
            EXTENSION = "EXTENSION",
            /** Specifies that the job was created by an Isolated Web App via API. */
            ISOLATED_WEB_APP = "ISOLATED_WEB_APP",
        }

        /** Specifies the final status of the print job. */
        export enum PrintJobStatus {
            /** Specifies that the print job was interrupted due to some error. */
            FAILED = "FAILED",
            /** Specifies that the print job was canceled by the user or via API. */
            CANCELED = "CANCELED",
            /** Specifies that the print job was printed without any errors. */
            PRINTED = "PRINTED",
        }

        export interface PrintSettings {
            /** The requested color mode. */
            color: ColorMode;
            /** The requested number of copies. */
            copies: number;
            /** The requested duplex mode. */
            duplex: DuplexMode;
            /** The requested media size. */
            mediaSize: MediaSize;
        }

        /**
         * Returns the list of the finished print jobs.
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getPrintJobs(): Promise<PrintJobInfo[]>;
        export function getPrintJobs(callback: (jobs: PrintJobInfo[]) => void): void;

        /** Event fired when the print job is finished. This includes any of termination statuses: FAILED, CANCELED and PRINTED. */
        export const onPrintJobFinished: chrome.events.Event<(jobInfo: PrintJobInfo) => void>;
    }

    ////////////////////
    // Privacy
    ////////////////////
    /**
     * Use the `chrome.privacy` API to control usage of the features in Chrome that can affect a user's privacy. This API relies on the ChromeSetting prototype of the type API for getting and setting Chrome's configuration.
     * Note: The Chrome Privacy Whitepaper gives background detail regarding the features which this API can control.
     *
     * Permissions: "privacy"
     */
    export namespace privacy {
        /**
         * The IP handling policy of WebRTC.
         * @since Chrome 48
         */
        export enum IPHandlingPolicy {
            DEFAULT = "default",
            DEFAULT_PUBLIC_AND_PRIVATE_INTERFACES = "default_public_and_private_interfaces",
            DEFAULT_PUBLIC_INTERFACE_ONLY = "default_public_interface_only",
            DISABLE_NON_PROXIED_UDP = "disable_non_proxied_udp",
        }

        /** Settings that enable or disable features that require third-party network services provided by Google and your default search provider. */
        export const services: {
            /**
             * If enabled, Chrome uses a web service to help resolve navigation errors.
             * This preference's value is a boolean, defaulting to `true`.
             */
            alternateErrorPagesEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If enabled, Chrome offers to automatically fill in addresses and other form data.
             * This preference's value is a boolean, defaulting to `true`.
             * @since Chrome 70
             */
            autofillAddressEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If enabled, Chrome offers to automatically fill in credit card forms.
             * This preference's value is a boolean, defaulting to `true`.
             * @since Chrome 70
             */
            autofillCreditCardEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If enabled, Chrome offers to automatically fill in forms.
             * This preference's value is a boolean, defaulting to `true`.
             * @deprecated since Chrome 70. Please use privacy.services.autofillAddressEnabled and privacy.services.autofillCreditCardEnabled. This remains for backward compatibility in this release and will be removed in the future */
            autofillEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If enabled, the password manager will ask if you want to save passwords.
             * This preference's value is a boolean, defaulting to `true`.
             */
            passwordSavingEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If enabled, Chrome does its best to protect you from phishing and malware.
             * This preference's value is a boolean, defaulting to `true`.
             */
            safeBrowsingEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If enabled, Chrome will send additional information to Google when SafeBrowsing blocks a page, such as the content of the blocked page.
             * This preference's value is a boolean, defaulting to `false`.
             */
            safeBrowsingExtendedReportingEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If enabled, Chrome sends the text you type into the Omnibox to your default search engine, which provides predictions of websites and searches that are likely completions of what you've typed so far.
             * This preference's value is a boolean, defaulting to `true`.
             */
            searchSuggestEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If enabled, Chrome uses a web service to help correct spelling errors.
             * This preference's value is a boolean, defaulting to `false`.
             */
            spellingServiceEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If enabled, Chrome offers to translate pages that aren't in a language you read.
             * This preference's value is a boolean, defaulting to `true`.
             */
            translationServiceEnabled: chrome.types.ChromeSetting<boolean>;
        };

        /** Settings that influence Chrome's handling of network connections in general. */
        export const network: {
            /**
             * If enabled, Chrome attempts to speed up your web browsing experience by pre-resolving DNS entries and preemptively opening TCP and SSL connections to servers.
             * This preference only affects actions taken by Chrome's internal prediction service. It does not affect webpage-initiated prefectches or preconnects.
             * This preference's value is a boolean, defaulting to `true`.
             */
            networkPredictionEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * Allow users to specify the media performance/privacy tradeoffs which impacts how WebRTC traffic will be routed and how much local address information is exposed.
             * This preference's value is of type IPHandlingPolicy, defaulting to `default`.
             *  @since Chrome 48
             */
            webRTCIPHandlingPolicy: chrome.types.ChromeSetting<`${IPHandlingPolicy}`>;
        };

        /** Settings that determine what information Chrome makes available to websites. */
        export const websites: {
            /**
             * If disabled, the Attribution Reporting API and Private Aggregation API are deactivated.
             * The value of this preference is of type boolean, and the default value is `true`.
             * Extensions may only disable these APIs by setting the value to `false`. If you try setting these APIs to `true`, it will throw an error.
             * @since Chrome 111
             */
            adMeasurementEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If enabled, Chrome sends 'Do Not Track' (`DNT: 1`) header with your requests.
             * The value of this preference is of type boolean, and the default value is `false`.
             * @since Chrome 65
             */
            doNotTrackEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If disabled, the Fledge API is deactivated.
             * The value of this preference is of type boolean, and the default value is `true`.
             * Extensions may only disable this API by setting the value to `false`. If you try setting this API to `true`, it will throw an error.
             * @since Chrome 111
             */
            fledgeEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If enabled, Chrome sends auditing pings when requested by a website (`<a ping>`).
             * The value of this preference is of type boolean, and the default value is `true`.
             */
            hyperlinkAuditingEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If enabled, Chrome provides a unique ID to plugins in order to run protected content.
             * The value of this preference is of type boolean, and the default value is `true`.
             * @platform Windows and ChromeOS only
             */
            protectedContentEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If enabled, Chrome sends `referer` headers with your requests. Yes, the name of this preference doesn't match the misspelled header. No, we're not going to change it.
             * The value of this preference is of type boolean, and the default value is `true`.
             */
            referrersEnabled: chrome.types.ChromeSetting<boolean>;

            /**
             * If disabled, Related Website Sets is deactivated.
             * The value of this preference is of type boolean, and the default value is `true`.
             * Extensions may only disable this API by setting the value to `false`. If you try setting this API to `true`, it will throw an error.
             * @since Chrome 121
             */
            relatedWebsiteSetsEnabled: chrome.types.ChromeSetting<boolean>;

            /** If disabled, Chrome blocks third-party sites from setting cookies. The value of this preference is of type boolean, and the default value is `true`. Extensions may not enable this API in Incognito mode, where third-party cookies are blocked and can only be allowed at the site level. If you try setting this API to true in Incognito, it will throw an error. */
            thirdPartyCookiesAllowed: chrome.types.ChromeSetting<boolean>;

            /**
             * If disabled, the Topics API is deactivated.
             * The value of this preference is of type boolean, and the default value is `true`.
             * Extensions may only disable this API by setting the value to `false`. If you try setting this API to `true`, it will throw an error.
             * @since Chrome 111
             */
            topicsEnabled: chrome.types.ChromeSetting<boolean>;
        };
    }

    ////////////////////
    // Proxy
    ////////////////////
    /**
     * Use the `chrome.proxy` API to manage Chrome's proxy settings. This API relies on the ChromeSetting prototype of the type API for getting and setting the proxy configuration.
     *
     * Permissions: "proxy"
     */
    export namespace proxy {
        /** @since Chrome 54 */
        export enum Mode {
            /** Never use a proxy */
            DIRECT = "direct",
            /** Auto detect proxy settings */
            AUTO_DETECT = "auto_detect",
            /** Use specified PAC script */
            PAC_SCRIPT = "pac_script",
            /** Manually specify proxy servers */
            FIXED_SERVERS = "fixed_servers",
            /** Use system proxy settings */
            SYSTEM = "system",
        }

        /** An object holding proxy auto-config information. Exactly one of the fields should be non-empty. */
        export interface PacScript {
            /** URL of the PAC file to be used. */
            url?: string | undefined;
            /** If true, an invalid PAC script will prevent the network stack from falling back to direct connections. Defaults to false. */
            mandatory?: boolean | undefined;
            /** A PAC script. */
            data?: string | undefined;
        }

        /** An object encapsulating a complete proxy configuration. */
        export interface ProxyConfig {
            /** The proxy rules describing this configuration. Use this for 'fixed_servers' mode. */
            rules?: ProxyRules | undefined;
            /** The proxy auto-config (PAC) script for this configuration. Use this for 'pac_script' mode. */
            pacScript?: PacScript | undefined;
            mode: `${Mode}`;
        }

        /** An object encapsulating a single proxy server's specification. */
        export interface ProxyServer {
            /** The hostname or IP address of the proxy server. Hostnames must be in ASCII (in Punycode format). IDNA is not supported, yet. */
            host: string;
            /** The scheme (protocol) of the proxy server itself. Defaults to 'http'. */
            scheme?: `${Scheme}` | undefined;
            /** The port of the proxy server. Defaults to a port that depends on the scheme. */
            port?: number | undefined;
        }

        /** An object encapsulating the set of proxy rules for all protocols. Use either 'singleProxy' or (a subset of) 'proxyForHttp', 'proxyForHttps', 'proxyForFtp' and 'fallbackProxy'. */
        export interface ProxyRules {
            /** The proxy server to be used for FTP requests. */
            proxyForFtp?: ProxyServer | undefined;
            /** The proxy server to be used for HTTP requests. */
            proxyForHttp?: ProxyServer | undefined;
            /** The proxy server to be used for everything else or if any of the specific proxyFor... is not specified. */
            fallbackProxy?: ProxyServer | undefined;
            /** The proxy server to be used for all per-URL requests (that is http, https, and ftp). */
            singleProxy?: ProxyServer | undefined;
            /** The proxy server to be used for HTTPS requests. */
            proxyForHttps?: ProxyServer | undefined;
            /** List of servers to connect to without a proxy server. */
            bypassList?: string[] | undefined;
        }

        /** @since Chrome 54 */
        export enum Scheme {
            HTTP = "http",
            HTTPS = "https",
            QUIC = "quic",
            SOCKS4 = "socks4",
            SOCKS5 = "socks5",
        }

        export interface ErrorDetails {
            /** Additional details about the error such as a JavaScript runtime error. */
            details: string;
            /** The error description. */
            error: string;
            /** If true, the error was fatal and the network transaction was aborted. Otherwise, a direct connection is used instead. */
            fatal: boolean;
        }

        /** Proxy settings to be used. The value of this setting is a ProxyConfig object. */
        export const settings: types.ChromeSetting<ProxyConfig>;

        /** Notifies about proxy errors. */
        export const onProxyError: events.Event<(details: ErrorDetails) => void>;
    }

    ////////////////////
    // ReadingList
    ////////////////////
    /**
     * Use the `chrome.readingList` API to read from and modify the items in the Reading List.
     *
     * Permissions: "readingList"
     * @since Chrome 120, MV3
     */
    export namespace readingList {
        export interface AddEntryOptions {
            /** Will be `true` if the entry has been read. */
            hasBeenRead: boolean;
            /** The title of the entry. */
            title: string;
            /** The url of the entry. */
            url: string;
        }

        export interface QueryInfo {
            /** Indicates whether to search for read (`true`) or unread (`false`) items. */
            hasBeenRead?: boolean | undefined;
            /** A title to search for. */
            title?: string | undefined;
            /** A url to search for. */
            url?: string | undefined;
        }

        export interface ReadingListEntry {
            /** The time the entry was created. Recorded in milliseconds since Jan 1, 1970. */
            creationTime: number;
            /** Will be `true` if the entry has been read. */
            hasBeenRead: boolean;
            /** The last time the entry was updated. This value is in milliseconds since Jan 1, 1970. */
            lastUpdateTime: number;
            /** The title of the entry. */
            title: string;
            /** The url of the entry. */
            url: string;
        }

        export interface RemoveOptions {
            /** The url to remove. */
            url: string;
        }

        export interface UpdateEntryOptions {
            /** The updated read status. The existing status remains if a value isn't provided. */
            hasBeenRead?: boolean | undefined;
            /** The new title. The existing tile remains if a value isn't provided. */
            title?: string | undefined;
            /** The url that will be updated. */
            url: string;
        }

        /**
         * Adds an entry to the reading list if it does not exist.
         *
         * Can return its result via Promise.
         * @param entry The entry to add to the reading list.
         */
        export function addEntry(entry: AddEntryOptions): Promise<void>;
        export function addEntry(entry: AddEntryOptions, callback: () => void): void;

        /**
         * Retrieves all entries that match the `QueryInfo` properties. Properties that are not provided will not be matched.
         *
         * Can return its result via Promise.
         * @param info The properties to search for.
         */
        export function query(info: QueryInfo): Promise<ReadingListEntry[]>;
        export function query(info: QueryInfo, callback: (entries: ReadingListEntry[]) => void): void;

        /**
         * Removes an entry from the reading list if it exists.
         *
         * Can return its result via Promise.
         * @param info The entry to remove from the reading list.
         */
        export function removeEntry(info: RemoveOptions): Promise<void>;
        export function removeEntry(info: RemoveOptions, callback: () => void): void;

        /**
         * Updates a reading list entry if it exists.
         *
         * Can return its result via Promise.
         * @param info The entry to update.
         */
        export function updateEntry(info: UpdateEntryOptions): Promise<void>;
        export function updateEntry(info: UpdateEntryOptions, callback: () => void): void;

        /** Triggered when a `ReadingListEntry` is added to the reading list. */
        export const onEntryAdded: events.Event<(entry: ReadingListEntry) => void>;

        /** Triggered when a `ReadingListEntry` is removed from the reading list. */
        export const onEntryRemoved: events.Event<(entry: ReadingListEntry) => void>;

        /** Triggered when a `ReadingListEntry` is updated in the reading list. */
        export const onEntryUpdated: events.Event<(entry: ReadingListEntry) => void>;
    }

    ////////////////////
    // Search
    ////////////////////
    /**
     * Use the `chrome.search` API to search via the default provider.
     *
     * Permissions: "search"
     * @since Chrome 87
     */
    export namespace search {
        export enum Disposition {
            /** Specifies that the search results display in the calling tab or the tab from the active browser. */
            CURRENT_TAB = "CURRENT_TAB",
            /** Specifies that the search results display in a new tab. */
            NEW_TAB = "NEW_TAB",
            /** Specifies that the search results display in a new window. */
            NEW_WINDOW = "NEW_WINDOW",
        }

        export type QueryInfo =
            & {
                /** String to query with the default search provider. */
                text?: string | undefined;
            }
            & (
                | {
                    /** Location where search results should be displayed. `CURRENT_TAB` is the default. */
                    disposition?: `${Disposition}` | undefined;
                    /** Location where search results should be displayed. `tabId` cannot be used with `disposition`. */
                    tabId?: undefined;
                }
                | {
                    /** Location where search results should be displayed. `CURRENT_TAB` is the default. */
                    disposition?: undefined;
                    /** Location where search results should be displayed. `tabId` cannot be used with `disposition`. */
                    tabId?: number | undefined;
                }
            );

        /**
         * Used to query the default search provider. In case of an error, {@link runtime.lastError} will be set.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function query(options: QueryInfo): Promise<void>;
        export function query(options: QueryInfo, callback: () => void): void;
    }

    ////////////////////
    // Runtime
    ////////////////////
    /**
     * Use the `chrome.runtime` API to retrieve the service worker, return details about the manifest, and listen for and respond to events in the extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs.
     */
    export namespace runtime {
        export interface LastError {
            /** Details about the error which occurred.  */
            message?: string;
        }

        /** Populated with an error message if calling an API function fails; otherwise undefined. This is only defined within the scope of that function's callback. If an error is produced, but `runtime.lastError` is not accessed within the callback, a message is logged to the console listing the API function that produced the error. API functions that return promises do not set this property. */
        export const lastError: LastError | undefined;

        /** The ID of the extension/app. */
        export const id: string;

        /**
         * The operating system Chrome is running on.
         * @since Chrome 44
         */
        export enum PlatformOs {
            /** Specifies the MacOS operating system. */
            MAC = "mac",
            /** Specifies the Windows operating system. */
            WIN = "win",
            /** Specifies the Android operating system. */
            ANDROID = "android",
            /** Specifies the Chrome operating system. */
            CROS = "cros",
            /** Specifies the Linux operating system. */
            LINUX = "linux",
            /** Specifies the OpenBSD operating system. */
            OPENBSD = "openbsd",
            /** Specifies the Fuchsia operating system. */
            FUCHSIA = "fuchsia",
        }

        /**
         * The machine's processor architecture.
         * @since Chrome 44
         */
        export enum PlatformArch {
            /** Specifies the processer architecture as arm. */
            ARM = "arm",
            /** Specifies the processer architecture as arm64. */
            ARM64 = "arm64",
            /** Specifies the processer architecture as x86-32. */
            X86_32 = "x86-32",
            /** Specifies the processer architecture as x86-64. */
            X86_64 = "x86-64",
            /** Specifies the processer architecture as mips. */
            MIPS = "mips",
            /** Specifies the processer architecture as mips64. */
            MIPS64 = "mips64",
            /** Specifies the processer architecture as riscv64. */
            RISCV64 = "riscv64",
        }

        /**
         * The native client architecture. This may be different from arch on some platforms.
         * @since Chrome 44
         */
        export enum PlatformNaclArch {
            /** Specifies the native client architecture as arm. */
            ARM = "arm",
            /** Specifies the native client architecture as x86-32. */
            X86_32 = "x86-32",
            /** Specifies the native client architecture as x86-64. */
            X86_64 = "x86-64",
            /** Specifies the native client architecture as mips. */
            MIPS = "mips",
            /** Specifies the native client architecture as mips64. */
            MIPS64 = "mips64",
        }

        /** @since Chrome 114 */
        export enum ContextType {
            /** Specifies the context type as a tab */
            TAB = "TAB",
            /** Specifies the context type as an extension popup window */
            POPUP = "POPUP",
            /** Specifies the context type as a service worker. */
            BACKGROUND = "BACKGROUND",
            /** Specifies the context type as an offscreen document. */
            OFFSCREEN_DOCUMENT = "OFFSCREEN_DOCUMENT",
            /** Specifies the context type as a side panel. */
            SIDE_PANEL = "SIDE_PANEL",
            /** Specifies the context type as developer tools. */
            DEVELOPER_TOOLS = "DEVELOPER_TOOLS",
        }

        /**
         * The reason that this event is being dispatched.
         * @since Chrome 44
         */
        export enum OnInstalledReason {
            /** Specifies the event reason as an installation. */
            INSTALL = "install",
            /** Specifies the event reason as an extension update. */
            UPDATE = "update",
            /** Specifies the event reason as a Chrome update. */
            CHROME_UPDATE = "chrome_update",
            /** Specifies the event reason as an update to a shared module. */
            SHARED_MODULE_UPDATE = "shared_module_update",
        }

        /**
         * The reason that the event is being dispatched. 'app_update' is used when the restart is needed because the application is updated to a newer version. 'os_update' is used when the restart is needed because the browser/OS is updated to a newer version. 'periodic' is used when the system runs for more than the permitted uptime set in the enterprise policy.
         * @since Chrome 44
         */
        export enum OnRestartRequiredReason {
            /** Specifies the event reason as an update to the app. */
            APP_UPDATE = "app_update",
            /** Specifies the event reason as an update to the operating system. */
            OS_UPDATE = "os_update",
            /** Specifies the event reason as a periodic restart of the app. */
            PERIODIC = "periodic",
        }

        /**
         * A filter to match against certain extension contexts. Matching contexts must match all specified filters; any filter that is not specified matches all available contexts. Thus, a filter of `{}` will match all available contexts.
         * @since Chrome 114
         */
        export interface ContextFilter {
            contextIds?: string[] | undefined;
            contextTypes?: `${ContextType}`[] | undefined;
            documentIds?: string[] | undefined;
            documentOrigins?: string[] | undefined;
            documentUrls?: string[] | undefined;
            frameIds?: number[] | undefined;
            incognito?: boolean | undefined;
            tabIds?: number[] | undefined;
            windowIds?: number[] | undefined;
        }

        export interface ConnectInfo {
            /** Will be passed into onConnect for processes that are listening for the connection event. */
            name?: string | undefined;
            /** Whether the TLS channel ID will be passed into onConnectExternal for processes that are listening for the connection event. */
            includeTlsChannelId?: boolean | undefined;
        }

        export interface InstalledDetails {
            /** The reason that this event is being dispatched. */
            reason: `${OnInstalledReason}`;
            /** Indicates the previous version of the extension, which has just been updated. This is present only if 'reason' is 'update'. */
            previousVersion?: string;
            /** Indicates the ID of the imported shared module extension which updated. This is present only if 'reason' is 'shared_module_update'. */
            id?: string;
        }

        /**
         * A context hosting extension content.
         * @since Chrome 114
         */
        export interface ExtensionContext {
            /** A unique identifier for this context */
            contextId: string;
            /** The type of context this corresponds to. */
            contextType: `${ContextType}`;
            /** A UUID for the document associated with this context, or undefined if this context is hosted not in a document.*/
            documentId?: string;
            /** The origin of the document associated with this context, or undefined if the context is not hosted in a document. */
            documentOrigin?: string;
            /** The URL of the document associated with this context, or undefined if the context is not hosted in a document. */
            documentUrl?: string;
            /** The ID of the frame for this context, or `-1` if this context is not hosted in a frame. */
            frameId: number;
            /** Whether the context is associated with an incognito profile. */
            incognito: boolean;
            /** The ID of the tab for this context, or `-1` if this context is not hosted in a tab. */
            tabId: number;
            /** The ID of the window for this context, or `-1` if this context is not hosted in a window. */
            windowId: number;
        }

        export interface MessageOptions {
            /** Whether the TLS channel ID will be passed into onMessageExternal for processes that are listening for the connection event. */
            includeTlsChannelId?: boolean | undefined;
        }

        /** An object containing information about the script context that sent a message or request */
        export interface MessageSender {
            /** The ID of the extension that opened the connection, if any. */
            id?: string;
            /** The {@link tabs.Tab} which opened the connection, if any. This property will **only** be present when the connection was opened from a tab (including content scripts), and **only** if the receiver is an extension, not an app. */
            tab?: chrome.tabs.Tab;
            /**
             * The name of the native application that opened the connection, if any.
             * @since Chrome 74
             */
            nativeApplication?: string;
            /** The frame that opened the connection. 0 for top-level frames, positive for child frames. This will only be set when tab is set. */
            frameId?: number;
            /** The URL of the page or frame that opened the connection. If the sender is in an iframe, it will be iframe's URL not the URL of the page which hosts it. */
            url?: string;
            /** The TLS channel ID of the page or frame that opened the connection, if requested by the extension, and if available */
            tlsChannelId?: string;
            /**
             * The origin of the page or frame that opened the connection. It can vary from the url property (e.g., about:blank) or can be opaque (e.g., sandboxed iframes). This is useful for identifying if the origin can be trusted if we can't immediately tell from the URL.
             * @since Chrome 80
             */
            origin?: string;
            /**
             * The lifecycle the document that opened the connection is in at the time the port was created. Note that the lifecycle state of the document may have changed since port creation.
             * @since Chrome 106
             */
            documentLifecycle?: extensionTypes.DocumentLifecycle;
            /**
             * A UUID of the document that opened the connection.
             * @since Chrome 106
             */
            documentId?: string;
        }

        /** An object containing information about the current platform. */
        export interface PlatformInfo {
            /** The operating system Chrome is running on. */
            os: `${PlatformOs}`;
            /** The machine's processor architecture. */
            arch: `${PlatformArch}`;
            /** The native client architecture. This may be different from arch on some platforms. */
            nacl_arch?: `${PlatformNaclArch}`;
        }

        /** An object which allows two way communication with other pages. */
        export interface Port {
            /** Send a message to the other end of the port. If the port is disconnected, an error is thrown. */
            postMessage: (message: any) => void;
            /** Immediately disconnect the port. Calling `disconnect()` on an already-disconnected port has no effect. When a port is disconnected, no new events will be dispatched to this port. */
            disconnect: () => void;
            /** This property will **only** be present on ports passed to {@link runtime.onConnect onConnect} / {@link runtime.onConnectExternal onConnectExternal} / {@link runtime.onConnectExternal onConnectNative} listeners. */
            sender?: MessageSender;
            /** Fired when the port is disconnected from the other end(s). {@link runtime.lastError} may be set if the port was disconnected by an error. If the port is closed via {@link Port.disconnect disconnect}, then this event is _only_ fired on the other end. This event is fired at most once (see also Port lifetime). */
            onDisconnect: events.Event<(port: Port) => void>;
            /** This event is fired when {@link Port.postMessage postMessage} is called by the other end of the port. */
            onMessage: events.Event<(message: any, port: Port) => void>;
            /** The name of the port, as specified in the call to {@link runtime.connect}. */
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

        /**
         * Result of the update check.
         * @since Chrome 44
         */
        export enum RequestUpdateCheckStatus {
            /** Specifies that the status check has been throttled. This can occur after repeated checks within a short amount of time. */
            THROTTLED = "throttled",
            /** Specifies that there are no available updates to install. */
            NO_UPDATE = "no_update",
            /** Specifies that there is an available update to install. */
            UPDATE_AVAILABLE = "update_available",
        }

        export interface RequestUpdateCheckResult {
            /** Result of the update check. */
            status: `${RequestUpdateCheckStatus}`;
            /** If an update is available, this contains the version of the available update. */
            version?: string;
        }

        export interface ManifestIcons {
            [size: number]: string;
        }

        export interface ManifestAction {
            default_icon?: ManifestIcons | undefined;
            default_title?: string | undefined;
            default_popup?: string | undefined;
        }

        /** Source: https://developer.chrome.com/docs/extensions/reference/permissions-list */
        export type ManifestPermission =
            | "accessibilityFeatures.modify"
            | "accessibilityFeatures.read"
            | "activeTab"
            | "alarms"
            | "audio"
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
            | "downloads.open"
            | "downloads.shelf"
            | "downloads.ui"
            | "enterprise.deviceAttributes"
            | "enterprise.hardwarePlatform"
            | "enterprise.login"
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
            | "readingList"
            | "scripting"
            | "search"
            | "sessions"
            | "sidePanel"
            | "storage"
            | "system.cpu"
            | "system.display"
            | "system.memory"
            | "system.storage"
            | "systemLog"
            | "tabCapture"
            | "tabGroups"
            | "tabs"
            | "topSites"
            | "tts"
            | "ttsEngine"
            | "unlimitedStorage"
            | "userScripts"
            | "vpnProvider"
            | "wallpaper"
            | "webAuthenticationProxy"
            | "webNavigation"
            | "webRequest"
            | "webRequestBlocking"
            | "webRequestAuthProvider";

        /**
         * @deprecated Use `ManifestPermission` instead.
         */
        export type ManifestPermissions = ManifestPermission;

        /** Source : https://developer.chrome.com/docs/extensions/reference/api/permissions */
        export type ManifestOptionalPermission = Exclude<
            ManifestPermission,
            | "debugger"
            | "declarativeNetRequest"
            | "devtools"
            | "experimental"
            | "fontSettings"
            | "geolocation"
            | "proxy"
            | "tts"
            | "ttsEngine"
            | "unlimitedStorage"
            | "wallpaper"
            | "webAuthenticationProxy"
        >;

        /**
         * @deprecated Use `ManifestOptionalPermission` instead.
         */
        export type ManifestOptionalPermissions = ManifestOptionalPermission;

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
            author?: {
                email: string;
            } | undefined;
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
            content_scripts?:
                | Array<{
                    matches?: string[] | undefined;
                    exclude_matches?: string[] | undefined;
                    css?: string[] | undefined;
                    js?: string[] | undefined;
                    run_at?: string | undefined;
                    all_frames?: boolean | undefined;
                    match_about_blank?: boolean | undefined;
                    include_globs?: string[] | undefined;
                    exclude_globs?: string[] | undefined;
                }>
                | undefined;
            converted_from_user_script?: boolean | undefined;
            current_locale?: string | undefined;
            devtools_page?: string | undefined;
            event_rules?:
                | Array<{
                    event?: string | undefined;
                    actions?:
                        | Array<{
                            type: string;
                        }>
                        | undefined;
                    conditions?: chrome.declarativeContent.PageStateMatcherProperties[] | undefined;
                }>
                | undefined;
            externally_connectable?: {
                ids?: string[] | undefined;
                matches?: string[] | undefined;
                accepts_tls_channel_id?: boolean | undefined;
            } | undefined;
            file_browser_handlers?:
                | Array<{
                    id?: string | undefined;
                    default_title?: string | undefined;
                    file_filters?: string[] | undefined;
                }>
                | undefined;
            file_system_provider_capabilities?: {
                configurable?: boolean | undefined;
                watchable?: boolean | undefined;
                multiple_mounts?: boolean | undefined;
                source?: string | undefined;
            } | undefined;
            homepage_url?: string | undefined;
            import?:
                | Array<{
                    id: string;
                    minimum_version?: string | undefined;
                }>
                | undefined;
            export?: {
                whitelist?: string[] | undefined;
            } | undefined;
            incognito?: string | undefined;
            input_components?:
                | Array<{
                    name?: string | undefined;
                    type?: string | undefined;
                    id?: string | undefined;
                    description?: string | undefined;
                    language?: string[] | string | undefined;
                    layouts?: string[] | undefined;
                    indicator?: string | undefined;
                }>
                | undefined;
            key?: string | undefined;
            minimum_chrome_version?: string | undefined;
            nacl_modules?:
                | Array<{
                    path: string;
                    mime_type: string;
                }>
                | undefined;
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
            platforms?:
                | Array<{
                    nacl_arch?: string | undefined;
                    sub_package_path: string;
                }>
                | undefined;
            plugins?:
                | Array<{
                    path: string;
                }>
                | undefined;
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
                voices: Array<{
                    voice_name: string;
                    lang?: string | undefined;
                    gender?: string | undefined;
                    event_types?: string[] | undefined;
                }>;
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
            optional_permissions?: (ManifestOptionalPermission | string)[] | undefined;
            permissions?: (ManifestPermission | string)[] | undefined;
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
            content_scripts?:
                | Array<{
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
                }>
                | undefined;
            content_security_policy?: {
                extension_pages?: string;
                sandbox?: string;
            };
            host_permissions?: string[] | undefined;
            optional_permissions?: ManifestOptionalPermission[] | undefined;
            optional_host_permissions?: string[] | undefined;
            permissions?: ManifestPermission[] | undefined;
            web_accessible_resources?:
                | Array<
                    & {
                        resources: string[];
                        use_dynamic_url?: boolean | undefined;
                    }
                    & (
                        | { extension_ids: string[]; matches?: string[] | undefined }
                        | { matches: string[]; extension_ids?: string[] | undefined }
                    )
                >
                | undefined;
        }

        export type Manifest = ManifestV2 | ManifestV3;

        /**
         * Attempts to connect listeners within an extension (such as the background page), or other extensions/apps. This is useful for content scripts connecting to their extension processes, inter-app/extension communication, and web messaging. Note that this does not connect to any listeners in a content script. Extensions may connect to content scripts embedded in tabs via {@link tabs.connect}.
         *
         * @param extensionId The ID of the extension to connect to. If omitted, a connection will be attempted with your own extension. Required if sending messages from a web page for web messaging.
         * @returns Port through which messages can be sent and received. The port's {@link Port onDisconnect} event is fired if the extension does not exist.
         */
        export function connect(connectInfo?: ConnectInfo): Port;
        export function connect(extensionId: string | undefined, connectInfo?: ConnectInfo): Port;

        /**
         * Connects to a native application in the host machine. This method requires the `"nativeMessaging"` permission. See Native Messaging for more information.
         * @param application The name of the registered application to connect to.
         */
        export function connectNative(application: string): Port;
        /**
         * Retrieves the JavaScript 'window' object for the background page running inside the current extension/app. If the background page is an event page, the system will ensure it is loaded before calling the callback. If there is no background page, an error is set.
         *
         * Foreground only
         *
         * Can return its result via Promise since Chrome 99.
         * @deprecated since Chrome 133. Background pages do not exist in MV3 extensions.
         */
        export function getBackgroundPage(): Promise<Window | undefined>;
        export function getBackgroundPage(callback: (backgroundPage?: Window) => void): void;

        /**
         * Fetches information about active contexts associated with this extension
         * @param filter A filter to find matching contexts. A context matches if it matches all specified fields in the filter. Any unspecified field in the filter matches all contexts.
         * @since Chrome 116 MV3.
         */
        export function getContexts(filter: ContextFilter): Promise<ExtensionContext[]>;
        export function getContexts(filter: ContextFilter, callback: (contexts: ExtensionContext[]) => void): void;

        /**
         * Returns details about the app or extension from the manifest. The object returned is a serialization of the full manifest file.
         * @return The manifest details.
         */
        export function getManifest(): Manifest;

        /**
         * Returns a DirectoryEntry for the package directory.
         *
         * Foreground only
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 122.
         */
        export function getPackageDirectoryEntry(): Promise<DirectoryEntry>;
        export function getPackageDirectoryEntry(callback: (directoryEntry: DirectoryEntry) => void): void;

        /**
         * Returns information about the current platform.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 99.
         */
        export function getPlatformInfo(): Promise<PlatformInfo>;
        export function getPlatformInfo(callback: (platformInfo: PlatformInfo) => void): void;

        /**
         * Converts a relative path within an app/extension install directory to a fully-qualified URL.
         * @param path A path to a resource within an app/extension expressed relative to its install directory.
         * @returns The fully-qualified URL to the resource.
         */
        export function getURL(path: string): string;

        /**
         * Returns the extension's version as declared in the manifest.
         * @returns The extension's version.
         * @since Chrome 143
         */
        export function getVersion(): string;

        /** Reloads the app or extension. This method is not supported in kiosk mode. For kiosk mode, use {@link chrome.runtime.restart()} method. */
        export function reload(): void;

        /**
         * Requests an immediate update check be done for this app/extension.
         *
         * **Important**: Most extensions/apps should **not** use this method, since Chrome already does automatic checks every few hours, and you can listen for the {@link runtime.onUpdateAvailable} event without needing to call requestUpdateCheck.
         *
         * This method is only appropriate to call in very limited circumstances, such as if your extension talks to a backend service, and the backend service has determined that the client extension version is very far out of date and you'd like to prompt a user to update. Most other uses of requestUpdateCheck, such as calling it unconditionally based on a repeating timer, probably only serve to waste client, network, and server resources.
         *
         * Note: When called with a callback, instead of returning an object this function will return the two properties as separate arguments passed to the callback.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 109.
         */
        export function requestUpdateCheck(): Promise<RequestUpdateCheckResult>;
        export function requestUpdateCheck(
            callback: (status: `${RequestUpdateCheckStatus}`, details?: UpdateCheckDetails) => void,
        ): void;

        /** Restart the ChromeOS device when the app runs in kiosk mode. Otherwise, it's no-op. */
        export function restart(): void;

        /**
         * Restart the ChromeOS device when the app runs in kiosk mode after the given seconds. If called again before the time ends, the reboot will be delayed. If called with a value of `-1`, the reboot will be cancelled. It's a no-op in non-kiosk mode. It's only allowed to be called repeatedly by the first extension to invoke this API.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 99.
         * @since Chrome 53
         */
        export function restartAfterDelay(seconds: number): Promise<void>;
        export function restartAfterDelay(seconds: number, callback: () => void): void;

        /**
         * Sends a single message to event listeners within your extension or a different extension/app. Similar to {@link runtime.connect} but only sends a single message, with an optional response. If sending to your extension, the {@link runtime.onMessage} event will be fired in every frame of your extension (except for the sender's frame), or {@link runtime.onMessageExternal}, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use {@link tabs.sendMessage}.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 99.
         * @param extensionId The ID of the extension to send the message to. If omitted, the message will be sent to your own extension/app. Required if sending messages from a web page for web messaging.
         * @param message The message to send. This message should be a JSON-ifiable object.
         */
        export function sendMessage<M = any, R = any>(message: M, options?: MessageOptions): Promise<R>;
        export function sendMessage<M = any, R = any>(message: M, callback: (response: R) => void): void;
        export function sendMessage<M = any, R = any>(
            message: M,
            options: MessageOptions | undefined,
            callback: (response: R) => void,
        ): void;
        export function sendMessage<M = any, R = any>(
            extensionId: string | undefined | null,
            message: M,
            options?: MessageOptions,
        ): Promise<R>;
        export function sendMessage<M = any, R = any>(
            extensionId: string | undefined | null,
            message: M,
            callback: (response: R) => void,
        ): void;
        export function sendMessage<M = any, R = any>(
            extensionId: string | undefined | null,
            message: M,
            options: MessageOptions | undefined,
            callback: (response: R) => void,
        ): void;

        /**
         * Send a single message to a native application. This method requires the `"nativeMessaging"` permission
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 99.
         * @param application The name of the native messaging host.
         * @param message The message that will be passed to the native messaging host.
         */
        export function sendNativeMessage(application: string, message: object): Promise<any>;
        export function sendNativeMessage(
            application: string,
            message: object,
            callback: (response: any) => void,
        ): void;

        /**
         * Sets the URL to be visited upon uninstallation. This may be used to clean up server-side data, do analytics, and implement surveys. Maximum 1023 characters.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 99.
         * @param url URL to be opened after the extension is uninstalled. This URL must have an http: or https: scheme. Set an empty string to not open a new tab upon uninstallation.
         */
        export function setUninstallURL(url: string): Promise<void>;
        export function setUninstallURL(url: string, callback: () => void): void;

        /**
         * Open your Extension's options page, if possible.
         *
         * The precise behavior may depend on your manifest's options_ui or options_page key, or what Chrome happens to support at the time. For example, the page may be opened in a new tab, within chrome://extensions, within an App, or it may just focus an open options page. It will never cause the caller page to reload.
         *
         * If your Extension does not declare an options page, or Chrome failed to create one for some other reason, the callback will set {@link runtime.lastError lastError} .
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 99
         */
        export function openOptionsPage(): Promise<void>;
        export function openOptionsPage(callback: () => void): void;

        /** Fired when a connection is made from either an extension process or a content script (by {@link runtime.connect}). */
        export const onConnect: events.Event<(port: Port) => void>;

        /** Fired when a connection is made from another extension (by {@link runtime.connect}), or from an externally connectable web site. */
        export const onConnectExternal: events.Event<(port: Port) => void>;

        /**
         * Fired when a connection is made from a native application. This event requires the `"nativeMessaging"` permission. It is only supported on Chrome OS.
         * @since Chrome 76
         */
        export const onConnectNative: events.Event<(port: Port) => void>;

        /** Sent to the event page just before it is unloaded. This gives the extension opportunity to do some clean up. Note that since the page is unloading, any asynchronous operations started while handling this event are not guaranteed to complete. If more activity for the event page occurs before it gets unloaded the onSuspendCanceled event will be sent and the page won't be unloaded. */
        export const onSuspend: events.Event<() => void>;

        /** Fired when a profile that has this extension installed first starts up. This event is not fired when an incognito profile is started, even if this extension is operating in 'split' incognito mode. */
        export const onStartup: events.Event<() => void>;

        /** Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version. */
        export const onInstalled: events.Event<(details: InstalledDetails) => void>;

        /** Sent after onSuspend to indicate that the app won't be unloaded after all. */
        export const onSuspendCanceled: events.Event<() => void>;

        /** Fired when a message is sent from either an extension process (by {@link runtime.sendMessage}) or a content script (by {@link tabs.sendMessage}). */
        export const onMessage: events.Event<
            (message: any, sender: MessageSender, sendResponse: (response?: any) => void) => void
        >;

        /** Fired when a message is sent from another extension (by {@link runtime.sendMessage}). Cannot be used in a content script. */
        export const onMessageExternal: events.Event<
            (message: any, sender: MessageSender, sendResponse: (response?: any) => void) => void
        >;

        /** Fired when an app or the device that it runs on needs to be restarted. The app should close all its windows at its earliest convenient time to let the restart to happen. If the app does nothing, a restart will be enforced after a 24-hour grace period has passed. Currently, this event is only fired for Chrome OS kiosk apps. */
        export const onRestartRequired: events.Event<(reason: `${OnRestartRequiredReason}`) => void>;

        /** Fired when an update is available, but isn't installed immediately because the app is currently running. If you do nothing, the update will be installed the next time the background page gets unloaded, if you want it to be installed sooner you can explicitly call chrome.runtime.reload(). If your extension is using a persistent background page, the background page of course never gets unloaded, so unless you call chrome.runtime.reload() manually in response to this event the update will not get installed until the next time Chrome itself restarts. If no handlers are listening for this event, and your extension has a persistent background page, it behaves as if chrome.runtime.reload() is called in response to this event. */
        export const onUpdateAvailable: events.Event<(details: UpdateAvailableDetails) => void>;

        /**
         * Fired when a Chrome update is available, but isn't installed immediately because a browser restart is required.
         * @deprecated Please use {@link runtime.onRestartRequired}.
         */
        export const onBrowserUpdateAvailable: events.Event<() => void>;

        /**
         * Fired when a connection is made from a user script from this extension.
         * @since chrome 115 MV3
         */
        export const onUserScriptConnect: events.Event<(port: Port) => void>;

        /**
         * Fired when a message is sent from a user script associated with the same extension.
         * @since chrome 115, MV3
         */
        export const onUserScriptMessage: events.Event<
            (message: any, sender: MessageSender, sendResponse: (response?: any) => void) => void
        >;
    }

    ////////////////////
    // Scripting
    ////////////////////
    /**
     * Use the `chrome.scripting` API to execute script in different contexts.
     *
     * Permissions: "scripting"
     * @since Chrome 88, MV3
     */
    export namespace scripting {
        /** The origin for a style change. See style origins for more info. */
        export enum StyleOrigin {
            AUTHOR = "AUTHOR",
            USER = "USER",
        }

        /**
         * The JavaScript world for a script to execute within.
         * @since Chrome 95
         */
        export enum ExecutionWorld {
            /** Specifies the isolated world, which is the execution environment unique to this extension. */
            ISOLATED = "ISOLATED",
            /** Specifies the main world of the DOM, which is the execution environment shared with the host page's JavaScript. */
            MAIN = "MAIN",
        }

        export interface InjectionResult<T extends any = any> {
            /**
             * The document associated with the injection.
             * @since Chrome 106
             */
            documentId: string;
            /**
             * The frame associated with the injection.
             * @since Chrome 90
             */
            frameId: number;
            /** The result of the script execution. */
            result?: T;
        }

        export type InjectionTarget =
            & {
                /** The ID of the tab into which to inject. */
                tabId: number;
            }
            & (
                | {
                    /** Whether the script should inject into all frames within the tab. Defaults to false. This must not be true if `frameIds` or `documentIds` is specified. */
                    allFrames?: boolean | undefined;
                    /**
                     * The IDs of specific documentIds to inject into. This must not be set if `frameIds` is set.
                     * @since Chrome 106
                     */
                    documentIds?: never | undefined;
                    /** The IDs of specific frames to inject into. */
                    frameIds?: never | undefined;
                }
                | {
                    /** Whether the script should inject into all frames within the tab. Defaults to false. This must not be true if `frameIds` or `documentIds` is specified. */
                    allFrames?: false | undefined;
                    /**
                     * The IDs of specific documentIds to inject into. This must not be set if `frameIds` is set.
                     * @since Chrome 106
                     */
                    documentIds?: never | undefined;
                    /** The IDs of specific frames to inject into. */
                    frameIds: number[] | undefined;
                }
                | {
                    /** Whether the script should inject into all frames within the tab. Defaults to false. This must not be true if `frameIds` or `documentIds` is specified. */
                    allFrames?: false | undefined;
                    /**
                     * The IDs of specific documentIds to inject into. This must not be set if `frameIds` is set.
                     * @since Chrome 106
                     */
                    documentIds?: string[] | undefined;
                    /** The IDs of specific frames to inject into. */
                    frameIds?: never | undefined;
                }
            );

        export type CSSInjection =
            & {
                /** The style origin for the injection. Defaults to `'AUTHOR'`. */
                origin?: `${StyleOrigin}` | undefined;
                /** Details specifying the target into which to insert the CSS. */
                target: InjectionTarget;
            }
            & (
                | {
                    /** A string containing the CSS to inject. Exactly one of `files` and `css` must be specified. */
                    css: string;
                    /** The path of the CSS files to inject, relative to the extension's root directory. Exactly one of `files` and `css` must be specified. */
                    files?: never | undefined;
                }
                | {
                    /** A string containing the CSS to inject. Exactly one of `files` and `css` must be specified. */
                    css?: never | undefined;
                    /** The path of the CSS files to inject, relative to the extension's root directory. Exactly one of `files` and `css` must be specified. */
                    files: string[];
                }
            );

        export type ScriptInjection<Args extends any[], Result> =
            & {
                /** Details specifying the target into which to inject the script. */
                target: InjectionTarget;
                /** The JavaScript "world" to run the script in. Defaults to `ISOLATED`. */
                world?: `${ExecutionWorld}`;
                /**
                 * Whether the injection should be triggered in the target as soon as possible. Note that this is not a guarantee that injection will occur prior to page load, as the page may have already loaded by the time the script reaches the target.
                 * @since Chrome 102
                 */
                injectImmediately?: boolean;
            }
            & (
                | {
                    /** A JavaScript function to inject. This function will be serialized, and then deserialized for injection. This means that any bound parameters and execution context will be lost. Exactly one of `files` or `func` must be specified. */
                    func?: never | undefined;
                    /** The path of the JS or CSS files to inject, relative to the extension's root directory. Exactly one of files or func must be specified. */
                    files: string[];
                }
                | ({
                    /** A JavaScript function to inject. This function will be serialized, and then deserialized for injection. This means that any bound parameters and execution context will be lost. Exactly one of `files` or `func` must be specified. */
                    func: () => Result;
                    /** The path of the JS or CSS files to inject, relative to the extension's root directory. Exactly one of files or func must be specified. */
                    files?: never | undefined;
                } | {
                    /** The arguments to pass to the provided function. This is only valid if the `func` parameter is specified. These arguments must be JSON-serializable. */
                    args: Args;
                    /** A JavaScript function to inject. This function will be serialized, and then deserialized for injection. This means that any bound parameters and execution context will be lost. Exactly one of `files` or `func` must be specified. */
                    func: (...args: Args) => Result;
                    /** The path of the JS or CSS files to inject, relative to the extension's root directory. Exactly one of files or func must be specified. */
                    files?: never | undefined;
                })
            );

        type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

        /** @since Chrome 96 */
        type RegisteredContentScript =
            & {
                /** The id of the content script, specified in the API call. Must not start with a '_' as it's reserved as a prefix for generated script IDs. */
                id: string;
                /** If specified true, it will inject into all frames, even if the frame is not the top-most frame in the tab. Each frame is checked independently for URL requirements; it will not inject into child frames if the URL requirements are not met. Defaults to false, meaning that only the top frame is matched. */
                allFrames?: boolean | undefined;
                /** Excludes pages that this content script would otherwise be injected into. See Match Patterns for more details on the syntax of these strings. */
                excludeMatches?: string[] | undefined;
                /**
                 * Indicates whether the script can be injected into frames where the URL contains an unsupported scheme; specifically: about:, data:, blob:, or filesystem:. In these cases, the URL's origin is checked to determine if the script should be injected. If the origin is `null` (as is the case for data: URLs) then the used origin is either the frame that created the current frame or the frame that initiated the navigation to this frame. Note that this may not be the parent frame.
                 * @since Chrome 119
                 */
                matchOriginAsFallback?: boolean | undefined;
                /** Specifies which pages this content script will be injected into. See Match Patterns for more details on the syntax of these strings. Must be specified for {@link registerContentScripts}. */
                matches?: string[] | undefined;
                /** Specifies if this content script will persist into future sessions. The default is true. */
                persistAcrossSessions?: boolean | undefined;
                /** Specifies when JavaScript files are injected into the web page. The preferred and default value is `document_idle`. */
                runAt?: extensionTypes.RunAt | undefined;
                /** The JavaScript "world" to run the script in. Defaults to `ISOLATED`. */
                world?: `${ExecutionWorld}` | undefined;
            }
            & (
                | {
                    /** The list of JavaScript files to be injected into matching pages. These are injected in the order they appear in this array. */
                    js: string[];
                    /** The list of CSS files to be injected into matching pages. These are injected in the order they appear in this array, before any DOM is constructed or displayed for the page. */
                    css?: string[] | undefined;
                }
                | {
                    /** The list of JavaScript files to be injected into matching pages. These are injected in the order they appear in this array. */
                    js?: string[] | undefined;
                    /** The list of CSS files to be injected into matching pages. These are injected in the order they appear in this array, before any DOM is constructed or displayed for the page. */
                    css: string[];
                }
            );

        /** @since Chrome 96 */
        export interface ContentScriptFilter {
            /** If specified, {@link getRegisteredContentScripts} will only return scripts with an id specified in this list. */
            ids?: string[] | undefined;
        }

        /**
         * Injects a script into a target context. By default, the script will be run at `document_idle`, or immediately if the page has already loaded. If the `injectImmediately` property is set, the script will inject without waiting, even if the page has not finished loading. If the script evaluates to a promise, the browser will wait for the promise to settle and return the resulting value.
         *
         * Can return its result via Promise since Chrome 90.
         * @param injection The details of the script which to inject.
         */
        export function executeScript<Args extends any[], Result>(
            injection: ScriptInjection<Args, Result>,
        ): Promise<Array<InjectionResult<Awaited<Result>>>>;
        export function executeScript<Args extends any[], Result>(
            injection: ScriptInjection<Args, Result>,
            callback: (results: Array<InjectionResult<Awaited<Result>>>) => void,
        ): void;

        /**
         * Inserts a CSS stylesheet into a target context. If multiple frames are specified, unsuccessful injections are ignored.
         *
         * Can return its result via Promise since Chrome 90.
         * @param injection The details of the styles to insert.
         */
        export function insertCSS(injection: CSSInjection): Promise<void>;
        export function insertCSS(injection: CSSInjection, callback: () => void): void;

        /**
         * Removes a CSS stylesheet that was previously inserted by this extension from a target context.
         * @param injection The details of the styles to remove. Note that the `css`, `files`, and `origin` properties must exactly match the stylesheet inserted through {@link insertCSS}. Attempting to remove a non-existent stylesheet is a no-op.
         * @since Chrome 90
         */
        export function removeCSS(injection: CSSInjection): Promise<void>;
        export function removeCSS(injection: CSSInjection, callback: () => void): void;

        /**
         * Registers one or more content scripts for this extension
         * @param scripts Contains a list of scripts to be registered. If there are errors during script parsing/file validation, or if the IDs specified already exist, then no scripts are registered.
         * @since Chrome 96
         */
        export function registerContentScripts(scripts: RegisteredContentScript[]): Promise<void>;
        export function registerContentScripts(scripts: RegisteredContentScript[], callback: () => void): void;

        /**
         * Unregisters content scripts for this extension.
         * @param filter If specified, only unregisters dynamic content scripts which match the filter. Otherwise, all of the extension's dynamic content scripts are unregistered.
         * @since Chrome 96
         */
        export function unregisterContentScripts(filter?: ContentScriptFilter): Promise<void>;
        export function unregisterContentScripts(callback: () => void): void;
        export function unregisterContentScripts(filter: ContentScriptFilter | undefined, callback: () => void): void;

        /**
         * Returns all dynamically registered content scripts for this extension that match the given filter.
         * @param filter An object to filter the extension's dynamically registered scripts.
         * @since Chrome 96
         */
        export function getRegisteredContentScripts(filter?: ContentScriptFilter): Promise<RegisteredContentScript[]>;
        export function getRegisteredContentScripts(callback: (scripts: RegisteredContentScript[]) => void): void;
        export function getRegisteredContentScripts(
            filter: ContentScriptFilter | undefined,
            callback: (scripts: RegisteredContentScript[]) => void,
        ): void;

        /**
         * Updates one or more content scripts for this extension.
         * @param scripts Contains a list of scripts to be updated. A property is only updated for the existing script if it is specified in this object. If there are errors during script parsing/file validation, or if the IDs specified do not correspond to a fully registered script, then no scripts are updated.
         * @since Chrome 96
         */
        export function updateContentScripts(scripts: RegisteredContentScript[]): Promise<void>;
        export function updateContentScripts(scripts: RegisteredContentScript[], callback: () => void): void;
    }

    ////////////////////
    // Sessions
    ////////////////////
    /**
     * Use the `chrome.sessions` API to query and restore tabs and windows from a browsing session.
     *
     * Permissions: "sessions"
     */
    export namespace sessions {
        export interface Filter {
            /** The maximum number of entries to be fetched in the requested list. Omit this parameter to fetch the maximum number of entries ({@link sessions.MAX_SESSION_RESULTS}). */
            maxResults?: number | undefined;
        }

        export interface Session {
            /** The time when the window or tab was closed or modified, represented in seconds since the epoch. */
            lastModified: number;
            /** The {@link tabs.Tab}, if this entry describes a tab. Either this or {@link sessions.Session.window} will be set. */
            tab?: tabs.Tab | undefined;
            /** The {@link windows.Window}, if this entry describes a window. Either this or {@link sessions.Session.tab} will be set. */
            window?: windows.Window | undefined;
        }

        export interface Device {
            /** The name of the foreign device. */
            deviceName: string;
            /** A list of open window sessions for the foreign device, sorted from most recently to least recently modified session. */
            sessions: Session[];
        }

        /** The maximum number of {@link sessions.Session} that will be included in a requested list. */
        export const MAX_SESSION_RESULTS: 25;

        /**
         * Gets the list of recently closed tabs and/or windows.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getRecentlyClosed(filter?: Filter): Promise<Session[]>;
        export function getRecentlyClosed(callback: (sessions: Session[]) => void): void;
        export function getRecentlyClosed(filter: Filter | undefined, callback: (sessions: Session[]) => void): void;

        /**
         * Retrieves all devices with synced sessions.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function getDevices(filter?: Filter): Promise<Device[]>;
        export function getDevices(callback: (devices: Device[]) => void): void;
        export function getDevices(filter: Filter | undefined, callback: (devices: Device[]) => void): void;

        /**
         * Reopens a {@link windows.Window} or {@link tabs.Tab}, with an optional callback to run when the entry has been restored.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @param sessionId The {@link windows.Window.sessionId}, or {@link tabs.Tab.sessionId} to restore. If this parameter is not specified, the most recently closed session is restored.
         */
        export function restore(sessionId?: string): Promise<Session>;
        export function restore(callback: (restoredSession: Session) => void): void;
        export function restore(sessionId: string | undefined, callback: (restoredSession: Session) => void): void;

        /** Fired when recently closed tabs and/or windows are changed. This event does not monitor synced sessions changes. */
        export const onChanged: events.Event<() => void>;
    }

    ////////////////////
    // Storage
    ////////////////////
    /**
     * Use the `chrome.storage` API to store, retrieve, and track changes to user data.
     *
     * Permissions: "storage"
     */
    export namespace storage {
        /** NoInfer for old TypeScript versions */
        type NoInferX<T> = T[][T extends any ? 0 : never];
        // The next line prevents things without the export keyword from being automatically exported (like NoInferX)
        export {};

        export interface StorageArea {
            /**
             * Gets the amount of space (in bytes) being used by one or more items.
             * @param keys A single key or list of keys to get the total usage for. An empty list will return 0. Pass in `null` to get the total usage of all of storage.
             *
             * Can return its result via Promise in Manifest V3 or later since Chrome 95.
             */
            getBytesInUse<T = { [key: string]: any }>(keys?: keyof T | Array<keyof T> | null): Promise<number>;
            getBytesInUse<T = { [key: string]: any }>(callback: (bytesInUse: number) => void): void;
            getBytesInUse<T = { [key: string]: any }>(
                keys: keyof T | Array<keyof T> | null | undefined,
                callback: (bytesInUse: number) => void,
            ): void;

            /**
             * Removes all items from storage.
             *
             * Can return its result via Promise in Manifest V3 or later since Chrome 95.
             */
            clear(): Promise<void>;
            clear(callback: () => void): void;

            /**
             * Sets multiple items.
             * @param items An object which gives each key/value pair to update storage with. Any other key/value pairs in storage will not be affected. Primitive values such as numbers will serialize as expected. Values with a `typeof` `object` and `function` will typically serialize to `{}`, with the exception of `Array` (serializes as expected), `Date`, and `Regex` (serialize using their `String` representation).
             *
             * Can return its result via Promise in Manifest V3 or later since Chrome 95.
             */
            set<T = { [key: string]: any }>(items: Partial<T>): Promise<void>;
            set<T = { [key: string]: any }>(items: Partial<T>, callback: () => void): void;

            /**
             * Removes one or more items from storage.
             * @param keys A single key or a list of keys for items to remove.
             *
             * Can return its result via Promise in Manifest V3 or later since Chrome 95.
             */
            remove<T = { [key: string]: any }>(keys: keyof T | Array<keyof T>): Promise<void>;
            remove<T = { [key: string]: any }>(keys: keyof T | Array<keyof T>, callback: () => void): void;

            /**
             * Gets one or more items from storage.
             * @param keys A single key to get, list of keys to get, or a dictionary specifying default values (see description of the object). An empty list or object will return an empty result object. Pass in `null` to get the entire contents of storage.
             *
             * Can return its result via Promise in Manifest V3 or later since Chrome 95.
             */
            get<T = { [key: string]: unknown }>(
                keys?: NoInferX<keyof T> | Array<NoInferX<keyof T>> | Partial<NoInferX<T>> | null,
            ): Promise<T>;
            get<T = { [key: string]: unknown }>(callback: (items: T) => void): void;
            get<T = { [key: string]: unknown }>(
                keys: NoInferX<keyof T> | Array<NoInferX<keyof T>> | Partial<NoInferX<T>> | null | undefined,
                callback: (items: T) => void,
            ): void;

            /**
             * Sets the desired access level for the storage area. By default, session storage is restricted to trusted contexts (extension pages and service workers), while `managed`, `local`, and `sync` storage allow access from both trusted and untrusted contexts.
             * @param accessOptions The access level of the storage area.
             *
             * Can return its result via Promise in Manifest V3 or later.
             * @since Chrome 102
             */
            setAccessLevel(accessOptions: { accessLevel: `${AccessLevel}` }): Promise<void>;
            setAccessLevel(accessOptions: { accessLevel: `${AccessLevel}` }, callback: () => void): void;

            /** Fired when one or more items change. */
            onChanged: events.Event<(changes: { [key: string]: StorageChange }) => void>;

            /**
             * Gets all keys from storage.
             *
             * Can return its result via Promise in Manifest V3 or later.
             * @since Chrome 130
             */
            getKeys(): Promise<string[]>;
            getKeys(callback: (keys: string[]) => void): void;
        }

        export interface StorageChange {
            /** The new value of the item, if there is a new value. */
            newValue?: unknown;
            /** The old value of the item, if there was an old value. */
            oldValue?: unknown;
        }

        export interface LocalStorageArea extends StorageArea {
            /** The maximum amount (in bytes) of data that can be stored in local storage, as measured by the JSON stringification of every value plus every key's length. This value will be ignored if the extension has the unlimitedStorage permission. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError when using a callback, or a rejected Promise if using async/await. */
            QUOTA_BYTES: 10485760;
        }

        export interface SyncStorageArea extends StorageArea {
            /** @deprecated The storage.sync API no longer has a sustained write operation quota. */
            MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: 1000000;
            /** The maximum total amount (in bytes) of data that can be stored in sync storage, as measured by the JSON stringification of every value plus every key's length. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError when using a callback, or when a Promise is rejected. */
            QUOTA_BYTES: 102400;
            /** The maximum size (in bytes) of each individual item in sync storage, as measured by the JSON stringification of its value plus its key length. Updates containing items larger than this limit will fail immediately and set runtime.lastError when using a callback, or when a Promise is rejected. */
            QUOTA_BYTES_PER_ITEM: 8192;
            /** The maximum number of items that can be stored in sync storage. Updates that would cause this limit to be exceeded will fail immediately and set runtime.lastError when using a callback, or when a Promise is rejected. */
            MAX_ITEMS: 512;
            /**
             * The maximum number of `set`, `remove`, or `clear` operations that can be performed each hour. This is 1 every 2 seconds, a lower ceiling than the short term higher writes-per-minute limit.
             *
             * Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError when using a callback, or when a Promise is rejected.
             */
            MAX_WRITE_OPERATIONS_PER_HOUR: 1800;
            /**
             * The maximum number of `set`, `remove`, or `clear` operations that can be performed each minute. This is 2 per second, providing higher throughput than writes-per-hour over a shorter period of time.
             *
             * Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError when using a callback, or when a Promise is rejected.
             */
            MAX_WRITE_OPERATIONS_PER_MINUTE: 120;
        }

        export interface SessionStorageArea extends StorageArea {
            /** The maximum amount (in bytes) of data that can be stored in memory, as measured by estimating the dynamically allocated memory usage of every value and key. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError when using a callback, or when a Promise is rejected. */
            QUOTA_BYTES: 10485760;
        }

        export type AreaName = "sync" | "local" | "managed" | "session";

        /**
         * The storage area's access level.
         * @since Chrome 102
         */
        export enum AccessLevel {
            /** Specifies contexts originating from the extension itself. */
            TRUSTED_CONTEXTS = "TRUSTED_CONTEXTS",
            /** Specifies contexts originating from outside the extension. */
            TRUSTED_AND_UNTRUSTED_CONTEXTS = "TRUSTED_AND_UNTRUSTED_CONTEXTS",
        }

        /** Items in the `local` storage area are local to each machine. */
        export const local: LocalStorageArea;

        /** Items in the `sync` storage area are synced using Chrome Sync. */
        export const sync: SyncStorageArea;

        /** Items in the `managed` storage area are set by an enterprise policy configured by the domain administrator, and are read-only for the extension; trying to modify this namespace results in an error. For information on configuring a policy, see Manifest for storage areas. */
        export const managed: StorageArea;

        /**
         * Items in the `session` storage area are stored in-memory and will not be persisted to disk.
         *
         * MV3 only
         * @since Chrome 102
         */
        export const session: SessionStorageArea;

        /** Fired when one or more items change. */
        export const onChanged: events.Event<(changes: { [key: string]: StorageChange }, areaName: AreaName) => void>;
    }

    ////////////////////
    // System CPU
    ////////////////////
    /**
     * Use the `system.cpu` API to query CPU metadata.
     *
     * Permissions: "system.cpu"
     */
    export namespace system.cpu {
        export interface CpuTime {
            /** The cumulative time used by userspace programs on this processor. */
            user: number;
            /** The cumulative time used by kernel programs on this processor. */
            kernel: number;
            /** The cumulative time spent idle by this processor. */
            idle: number;
            /** The total cumulative time for this processor. This value is equal to user + kernel + idle. */
            total: number;
        }

        /** @deprecated Use {@link CpuTime} instead. */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ProcessorUsage extends CpuTime {}

        export interface ProcessorInfo {
            /** Cumulative usage info for this logical processor. */
            usage: CpuTime;
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
            /**
             * List of CPU temperature readings from each thermal zone of the CPU. Temperatures are in degrees Celsius.
             * @since Chrome 60
             */
            temperatures: number[];
        }

        /**
         * Queries basic CPU information of the system.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         */
        export function getInfo(): Promise<CpuInfo>;
        export function getInfo(callback: (info: CpuInfo) => void): void;
    }

    ////////////////////
    // System Memory
    ////////////////////
    /**
     * The `chrome.system.memory` API.
     *
     * Permissions: "system.memory"
     */
    export namespace system.memory {
        export interface MemoryInfo {
            /** The total amount of physical memory capacity, in bytes. */
            capacity: number;
            /** The amount of available capacity, in bytes. */
            availableCapacity: number;
        }

        /**
         * Get physical memory information.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         */
        export function getInfo(): Promise<MemoryInfo>;
        export function getInfo(callback: (info: MemoryInfo) => void): void;
    }

    ////////////////////
    // System Storage
    ////////////////////
    /**
     * Use the `chrome.system.storage` API to query storage device information and be notified when a removable storage device is attached and detached.
     *
     * Permissions: "system.storage"
     */
    export namespace system.storage {
        export enum EjectDeviceResultCode {
            /** The ejection command is successful -- the application can prompt the user to remove the device. */
            SUCCESS = "success",
            /** The device is in use by another application. The ejection did not succeed; the user should not remove the device until the other application is done with the device. */
            IN_USE = "in_use",
            /** There is no such device known. */
            NO_SUCH_DEVICE = "no_such_device",
            /** The ejection command failed. */
            FAILURE = "failure",
        }

        export interface StorageUnitInfo {
            /** The transient ID that uniquely identifies the storage device. This ID will be persistent within the same run of a single application. It will not be a persistent identifier between different runs of an application, or between different applications. */
            id: string;
            /** The name of the storage unit. */
            name: string;
            /** The media type of the storage unit. */
            type: `${StorageUnitType}`;
            /** The total amount of the storage space, in bytes. */
            capacity: number;
        }

        export enum StorageUnitType {
            /** The storage has fixed media, e.g. hard disk or SSD. */
            FIXED = "fixed",
            /** The storage is removable, e.g. USB flash drive. */
            REMOVABLE = "removable",
            /** The storage type is unknown. */
            UNKNOWN = "unknown",
        }

        export interface StorageAvailableCapacityInfo {
            /** A copied `id` of getAvailableCapacity function parameter `id`. */
            id: string;
            /** The available capacity of the storage device, in bytes. */
            availableCapacity: number;
        }

        /**
         * Get the storage information from the system. The argument passed to the callback is an array of StorageUnitInfo objects.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         */
        export function getInfo(): Promise<StorageUnitInfo[]>;
        export function getInfo(callback: (info: StorageUnitInfo[]) => void): void;

        /**
         * Ejects a removable storage device.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         */
        export function ejectDevice(id: string): Promise<`${EjectDeviceResultCode}`>;
        export function ejectDevice(id: string, callback: (result: `${EjectDeviceResultCode}`) => void): void;

        /**
         * Get the available capacity of a specified `id` storage device. The `id` is the transient device ID from StorageUnitInfo.
         *
         * Can return its result via Promise in Manifest V3.
         * @since Dev channel only.
         */
        export function getAvailableCapacity(id: string): Promise<StorageAvailableCapacityInfo>;
        export function getAvailableCapacity(id: string, callback: (info: StorageAvailableCapacityInfo) => void): void;

        /** Fired when a new removable storage is attached to the system. */
        export const onAttached: events.Event<(info: StorageUnitInfo) => void>;

        /** Fired when a removable storage is detached from the system. */
        export const onDetached: events.Event<(id: string) => void>;
    }

    ////////////////////
    // System Display //
    ////////////////////
    /**
     * Use the `system.display` API to query display metadata.
     *
     * Permissions: "system.display"
     */
    export namespace system.display {
        export enum LayoutPosition {
            TOP = "top",
            RIGHT = "right",
            BOTTOM = "bottom",
            LEFT = "left",
        }

        /**
         * Mirror mode, i.e. different ways of how a display is mirrored to other displays.
         * @since Chrome 65
         */
        export enum MirrorMode {
            /** Specifies the default mode (extended or unified desktop). */
            OFF = "off",
            /** Specifies that the default source display will be mirrored to all other displays. */
            NORMAL = "normal",
            /**
             * Specifies that the specified source display will be mirrored to the provided destination displays.
             * All other connected displays will be extended.
             */
            MIXED = "mixed",
        }

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

        /** @since Chrome 57 */
        export interface Point {
            /** The x-coordinate of the point. */
            x: number;
            /** The y-coordinate of the point. */
            y: number;
        }

        /** @since Chrome 57 */
        export interface TouchCalibrationPair {
            /** The coordinates of the display point. */
            displayPoint: Point;
            /** The coordinates of the touch point corresponding to the display point. */
            touchPoint: Point;
        }

        /** @since Chrome 52 */
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
             * True if this mode is interlaced, false if not provided.
             * @since Chrome 74
             */
            isInterlaced?: boolean;
            /**
             * The display mode UI scale factor.
             * @deprecated Deprecated since Chrome 70. Use `displayZoomFactor`
             */
            uiScale?: number;
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

        /** @since Chrome 53 */
        export interface DisplayLayout {
            /** The unique identifier of the display. */
            id: string;
            /** The unique identifier of the parent display. Empty if this is the root. */
            parentId: string;
            /**
             * The layout position of this display relative to the parent.
             * This will be ignored for the root.
             */
            position: `${LayoutPosition}`;
            /** The offset of the display along the connected edge. 0 indicates that the topmost or leftmost corners are aligned. */
            offset: number;
        }

        /** The pairs of point used to calibrate the display. */
        export interface TouchCalibrationPairQuad {
            /** First pair of touch and display point required for touch calibration. */
            pair1: TouchCalibrationPair;
            /** Second pair of touch and display point required for touch calibration. */
            pair2: TouchCalibrationPair;
            /** Third pair of touch and display point required for touch calibration. */
            pair3: TouchCalibrationPair;
            /** Fourth pair of touch and display point required for touch calibration. */
            pair4: TouchCalibrationPair;
        }

        export interface DisplayProperties {
            /**
             * If set to true, changes the display mode to unified desktop (see `enableUnifiedDesktop` for details).
             * If set to false, unified desktop mode will be disabled.
             * This is only valid for the primary display.
             * If provided, mirroringSourceId must not be provided and other properties will be ignored.
             * This is has no effect if not provided.
             * @platform ChromeOS only
             * @since Chrome 59
             */
            isUnified?: boolean | undefined;
            /**
             * If set and not empty, enables mirroring for this display only.
             * Otherwise disables mirroring for all displays.
             * This value should indicate the id of the source display to mirror, which must not be the same as the id passed to setDisplayProperties.
             * If set, no other property may be set.
             * @platform ChromeOS only
             * @deprecated Deprecated since Chrome 68. Use ´setMirrorMode´
             */
            mirroringSourceId?: string | undefined;
            /**
             * If set to true, makes the display primary.
             * No-op if set to false.
             * Note: If set, the display is considered primary for all other properties (i.e. `isUnified` may be set and bounds origin may not).
             */
            isPrimary?: boolean | undefined;
            /**
             * If set, sets the display's overscan insets to the provided values.
             * Note that overscan values may not be negative or larger than a half of the screen's size.
             * Overscan cannot be changed on the internal monitor.
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
             * If set, updates the display's logical bounds origin along the x-axis.
             * Applied together with `boundsOriginY`.
             * Defaults to the current value if not set and `boundsOriginY` is set.
             * Note that when updating the display origin, some constraints will be applied, so the final bounds origin may be different than the one set.
             * The final bounds can be retrieved using `getInfo`.
             * The bounds origin cannot be changed on the primary display.
             */
            boundsOriginX?: number | undefined;
            /**
             * If set, updates the display's logical bounds origin along the y-axis.
             * See documentation for `boundsOriginX` parameter.
             */
            boundsOriginY?: number | undefined;
            /**
             * If set, updates the display mode to the mode matching this value.
             * If other parameters are invalid, this will not be applied.
             * If the display mode is invalid, it will not be applied and an error will be set, but other properties will still be applied.
             * @since Chrome 52
             */
            displayMode?: DisplayMode | undefined;
            /**
             * If set, updates the zoom associated with the display.
             * This zoom performs re-layout and repaint thus resulting in a better quality zoom than just performing a pixel by pixel stretch enlargement.
             * @since Chrome 65
             */
            displayZoomFactor?: number | undefined;
        }

        /**
         * Options affecting how the information is returned.
         * @since Chrome 59
         */
        export interface GetInfoFlags {
            /**
             * If set to true, only a single `DisplayUnitInfo` will be returned by `getInfo` when in unified desktop mode (see `enableUnifiedDesktop`).
             * @default false
             */
            singleUnified?: boolean | undefined;
        }

        /**
         * An enum to tell if the display is detected and used by the system.
         * The display is considered 'inactive', if it is not detected by the system (maybe disconnected, or considered disconnected due to sleep mode, etc).
         * This state is used to keep existing display when the all displays are disconnected, for example.
         * @since Chrome 117
         */
        export enum ActiveState {
            ACTIVE = "active",
            INACTIVE = "inactive",
        }

        export interface DisplayUnitInfo {
            /**
             * Active if the display is detected and used by the system.
             * @since Chrome 117
             */
            activeState: `${ActiveState}`;
            /** The unique identifier of the display. */
            id: string;
            /** The user-friendly name (e.g. 'HP LCD monitor'). */
            name: string;
            /**
             * @platform ChromeOS and Web UI only
             * @since Chrome 67
             */
            edid?: Edid;
            /**
             * Identifier of the display that is being mirrored if mirroring is enabled, otherwise empty.
             * This will be set for all displays (including the display being mirrored).
             * @platform ChromeOS only
             */
            mirroringSourceId: string;
            /**
             * Identifiers of the displays to which the source display is being mirrored.
             * Empty if no displays are being mirrored.
             * This must not include `mirroringSourceId`.
             * @platform ChromeOS only
             * @since Chrome 64
             */
            mirroringDestinationIds: string[];
            /** True if this is the primary display. */
            isPrimary: boolean;
            /** True if this is an internal display. */
            isInternal: boolean;
            /** True if this display is enabled. */
            isEnabled: boolean;
            /**
             * True for all displays when in unified desktop mode. See documentation for `enableUnifiedDesktop`.
             * @since Chrome 59
             */
            isUnified: boolean;
            /** The number of pixels per inch along the x-axis. */
            dpiX: number;
            /** The number of pixels per inch along the y-axis. */
            dpiY: number;
            /** The display's clockwise rotation in degrees relative to the vertical position.
             * Currently exposed only on ChromeOS. Will be set to 0 on other platforms.
             * A value of -1 will be interpreted as auto-rotate when the device is in a physical tablet state.
             * @platform ChromeOS only
             */
            rotation: number;
            /** The display's logical bounds. */
            bounds: Bounds;
            /**
             * The display's insets within its screen's bounds.
             * Currently exposed only on ChromeOS. Will be set to empty insets on other platforms.
             * @platform ChromeOS only
             */
            overscan: Insets;
            /**
             * The usable work area of the display within the display bounds.
             * The work area excludes areas of the display reserved for OS, for example taskbar and launcher.
             */
            workArea: Bounds;
            /**
             * The list of available display modes.
             * The current mode will have isSelected=true.
             * Will be set to an empty array on other platforms.
             * @platform ChromeOS only
             * @since Chrome 52
             */
            modes: DisplayMode[];
            /**
             * True if this display has a touch input device associated with it.
             * @since Chrome 57
             */
            hasTouchSupport: boolean;
            /**
             * A list of zoom factor values that can be set for the display.
             * @since Chrome 67
             */
            availableDisplayZoomFactors: number[];
            /**
             * The ratio between the display's current and default zoom.
             * For example, value 1 is equivalent to 100% zoom, and value 1.5 is equivalent to 150% zoom.
             * @since Chrome 65
             */
            displayZoomFactor: number;
        }

        /** @since Chrome 67 */
        export interface Edid {
            /** 3 character manufacturer code. */
            manufacturerId: string;
            /** 2 byte manufacturer-assigned code. */
            productId: string;
            /** Year of manufacturer. */
            yearOfManufacture: number;
        }

        export interface MirrorModeInfo {
            /** The mirror mode that should be set. */
            mode?: `${MirrorMode}`;
        }

        export interface MirrorModeInfoMixed extends MirrorModeInfo {
            /** The mirror mode that should be set. */
            mode: "mixed";
            /** The id of the mirroring source display. */
            mirroringSourceId?: string | undefined;
            /** The ids of the mirroring destination displays. */
            mirroringDestinationIds?: string[] | undefined;
        }

        /**
         * Requests the information for all attached display devices.
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         * @param flags Options affecting how the information is returned.
         */
        export function getInfo(callback: (displayInfo: DisplayUnitInfo[]) => void): void;
        export function getInfo(flags: GetInfoFlags, callback: (displayInfo: DisplayUnitInfo[]) => void): void;
        export function getInfo(): Promise<DisplayUnitInfo[]>;
        export function getInfo(flags: GetInfoFlags): Promise<DisplayUnitInfo[]>;

        /**
         * Requests the layout info for all displays
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         * @platform ChromeOS and Web UI only
         * @since Chrome 53
         */
        export function getDisplayLayout(callback: (layouts: DisplayLayout[]) => void): void;
        export function getDisplayLayout(): Promise<DisplayLayout[]>;

        /**
         * requires(CrOS Kiosk apps | WebUI) This is only available to Chrome OS Kiosk apps and Web UI.
         * @description
         * Updates the properties for the display specified by `id`,
         * according to the information provided in `info`.
         * On failure, `runtime.lastError` will be set.
         * @platform ChromeOS and Web UI only
         * @param id The display's unique identifier.
         * @param info The information about display properties that should be changed. A property will be changed only if a new value for it is specified in `info`.
         */
        export function setDisplayProperties(id: string, info: DisplayProperties, callback: () => void): void;
        export function setDisplayProperties(id: string, info: DisplayProperties): Promise<void>;

        /**
         * Set the layout for all displays.
         * Any display not included will use the default layout.
         * If a layout would overlap or be otherwise invalid it will be adjusted to a valid layout.
         * After layout is resolved, an onDisplayChanged event will be triggered.
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         * @platform ChromeOS and Web UI only
         * @since Chrome 53
         * @param layouts The layout information, required for all displays except the primary display.
         */
        export function setDisplayLayout(layouts: DisplayLayout[], callback: () => void): void;
        export function setDisplayLayout(layouts: DisplayLayout[]): Promise<void>;

        /**
         * Enables/disables the unified desktop feature.
         * If enabled while mirroring is active, the desktop mode will not change until mirroring is turned off.
         * Otherwise, the desktop mode will switch to unified immediately.
         * @since Chrome 46
         * @platform ChromeOS and Web UI only
         * @param enabled True if unified desktop should be enabled.
         */
        export function enableUnifiedDesktop(enabled: boolean): void;

        /**
         * Starts overscan calibration for a display.
         * This will show an overlay on the screen indicating the current overscan insets.
         * If overscan calibration for display `id` is in progress this will reset calibration.
         * @since Chrome 53
         * @param id The display's unique identifier.
         */
        export function overscanCalibrationStart(id: string): void;

        /**
         * Adjusts the current overscan insets for a display.
         * Typically this should either move the display along an axis (e.g. left+right have the same value)
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
         * Displays the native touch calibration UX for the display with `id` as display id.
         * This will show an overlay on the screen with required instructions on how to proceed.
         * The callback will be invoked in case of successful calibration only.
         * If the calibration fails, this will throw an error.
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         * @since Chrome 57
         * @param id The display's unique identifier.
         */
        export function showNativeTouchCalibration(id: string, callback: (success: boolean) => void): void;
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
         * These `pairs` would be used to calibrate the touch screen for display with `id` called in startCustomTouchCalibration().
         * Always call `startCustomTouchCalibration` before calling this method.
         * If another touch calibration is already in progress this will throw an error.
         * @since Chrome 57
         * @param pairs The pairs of point used to calibrate the display.
         * @param bounds Bounds of the display when the touch calibration was performed. `bounds.left` and `bounds.top` values are ignored.
         * @throws Error
         */
        export function completeCustomTouchCalibration(pairs: TouchCalibrationPairQuad, bounds: Bounds): void;

        /**
         * Resets the touch calibration for the display and brings it back to its default state by clearing any touch calibration data associated with the display.
         * @since Chrome 57
         * @param id The display's unique identifier.
         */
        export function clearTouchCalibration(id: string): void;

        /**
         * Sets the display mode to the specified mirror mode.
         * Each call resets the state from previous calls.
         * Calling setDisplayProperties() will fail for the mirroring destination displays.
         * @platform ChromeOS and Web UI only
         * @param info The information of the mirror mode that should be applied to the display mode.
         * @since Chrome 65
         */
        export function setMirrorMode(info: MirrorModeInfo | MirrorModeInfoMixed, callback: () => void): void;
        export function setMirrorMode(info: MirrorModeInfo | MirrorModeInfoMixed): Promise<void>;

        /** Fired when anything changes to the display configuration. */
        export const onDisplayChanged: chrome.events.Event<() => void>;
    }

    ////////////////////
    // SystemLog
    ////////////////////
    /**
     * Use the `chrome.systemLog` API to record Chrome system logs from extensions.
     *
     * Permissions: "systemLog"
     *
     * Note: Only available to policy installed extensions.
     * @platform ChromeOS only
     * @since Chrome 125
     */
    export namespace systemLog {
        export interface MessageOptions {
            message: string;
        }

        /**
         * Adds a new log record.
         * Can return its result via Promise in Manifest V3 or later.
         */
        export function add(options: MessageOptions): Promise<void>;
        export function add(options: MessageOptions, callback: () => void): void;
    }

    ////////////////////
    // TabCapture
    ////////////////////
    /**
     * Use the `chrome.tabCapture` API to interact with tab media streams.
     *
     * Permissions: "tabCapture"
     */
    export namespace tabCapture {
        export interface CaptureInfo {
            /** The id of the tab whose status changed. */
            tabId: number;
            /** The new capture status of the tab. */
            status: `${TabCaptureState}`;
            /** Whether an element in the tab being captured is in fullscreen mode. */
            fullscreen: boolean;
        }

        export interface MediaStreamConstraint {
            mandatory: object;
            optional?: object | undefined;
        }

        export interface CaptureOptions {
            audio?: boolean | undefined;
            video?: boolean | undefined;
            audioConstraints?: MediaStreamConstraint | undefined;
            videoConstraints?: MediaStreamConstraint | undefined;
        }

        /** @since Chrome 71 */
        export interface GetMediaStreamOptions {
            /** Optional tab id of the tab which will later invoke `getUserMedia()` to consume the stream. If not specified then the resulting stream can be used only by the calling extension. The stream can only be used by frames in the given tab whose security origin matches the consumber tab's origin. The tab's origin must be a secure origin, e.g. HTTPS. */
            consumerTabId?: number | undefined;
            /** Optional tab id of the tab which will be captured. If not specified then the current active tab will be selected. Only tabs for which the extension has been granted the `activeTab` permission can be used as the target tab. */
            targetTabId?: number | undefined;
        }

        export enum TabCaptureState {
            PENDING = "pending",
            ACTIVE = "active",
            STOPPED = "stopped",
            ERROR = "error",
        }

        /**
         * Captures the visible area of the currently active tab. Capture can only be started on the currently active tab after the extension has been invoked, similar to the way that activeTab works. Capture is maintained across page navigations within the tab, and stops when the tab is closed, or the media stream is closed by the extension.
         * @param options Configures the returned media stream.
         */
        export function capture(options: CaptureOptions, callback: (stream: MediaStream | null) => void): void;

        /**
         * Returns a list of tabs that have requested capture or are being captured, i.e. status != stopped and status != error. This allows extensions to inform the user that there is an existing tab capture that would prevent a new tab capture from succeeding (or to prevent redundant requests for the same tab).
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         */
        export function getCapturedTabs(): Promise<CaptureInfo[]>;
        export function getCapturedTabs(callback: (result: CaptureInfo[]) => void): void;

        /**
         * Creates a stream ID to capture the target tab. Similar to chrome.tabCapture.capture() method, but returns a media stream ID, instead of a media stream, to the consumer tab.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         */
        export function getMediaStreamId(options?: GetMediaStreamOptions): Promise<string>;
        export function getMediaStreamId(callback: (streamId: string) => void): void;
        export function getMediaStreamId(
            options: GetMediaStreamOptions | undefined,
            callback: (streamId: string) => void,
        ): void;

        /** Event fired when the capture status of a tab changes. This allows extension authors to keep track of the capture status of tabs to keep UI elements like page actions in sync. */
        export const onStatusChanged: events.Event<(info: CaptureInfo) => void>;
    }

    ////////////////////
    // Tabs
    ////////////////////
    /**
     * Use the `chrome.tabs` API to interact with the browser's tab system. You can use this API to create, modify, and rearrange tabs in the browser.
     *
     * Permissions: The majority of the chrome.tabs API can be used without declaring any permission. However, the "tabs" permission is required in order to populate the url, title, and favIconUrl properties of Tab.
     */
    export namespace tabs {
        /**
         * The tab's muted state and the reason for the last state change.
         * @since Chrome 46
         */
        export interface MutedInfo {
            /** Whether the tab is muted (prevented from playing sound). The tab may be muted even if it has not played or is not currently playing sound. Equivalent to whether the 'muted' audio indicator is showing. */
            muted: boolean;
            /* The reason the tab was muted or unmuted. Not set if the tab's mute state has never been changed. */
            reason?: `${MutedInfoReason}` | undefined;
            /** The ID of the extension that changed the muted state. Not set if an extension was not the reason the muted state last changed. */
            extensionId?: string | undefined;
        }

        /**
         * An event that caused a muted state change.
         * @since Chrome 46
         */
        export enum MutedInfoReason {
            /** A user input action set the muted state. */
            USER = "user",
            /** Tab capture was started, forcing a muted state change. */
            CAPTURE = "capture",
            /** An extension set the muted state. */
            EXTENSION = "extension",
        }

        export interface Tab {
            /** The tab's loading status. */
            status?: `${TabStatus}` | undefined;
            /** The zero-based index of the tab within its window. */
            index: number;
            /** The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists. */
            openerTabId?: number | undefined;
            /** The title of the tab. This property is only present if the extension has the `"tabs"` permission or has host permissions for the page. */
            title?: string | undefined;
            /** The last committed URL of the main frame of the tab. This property is only present if the extension has the `"tabs"` permission or has host permissions for the page. May be an empty string if the tab has not yet committed. See also {@link Tab.pendingUrl}. */
            url?: string | undefined;
            /**
             * The URL the tab is navigating to, before it has committed. This property is only present if the extension has the `"tabs"` permission or has host permissions for the page and there is a pending navigation.
             * @since Chrome 79
             */
            pendingUrl?: string | undefined;
            /** Whether the tab is pinned. */
            pinned: boolean;
            /** Whether the tab is highlighted. */
            highlighted: boolean;
            /** The ID of the window that contains the tab. */
            windowId: number;
            /** Whether the tab is active in its window. Does not necessarily mean the window is focused. */
            active: boolean;
            /** The URL of the tab's favicon. This property is only present if the extension has the `tabs` permission or has host permissions for the page. It may also be an empty string if the tab is loading. */
            favIconUrl?: string | undefined;
            /**
             * Whether the tab is frozen. A frozen tab cannot execute tasks, including event handlers or timers. It is visible in the tab strip and its content is loaded in memory. It is unfrozen on activation.
             * @since Chrome 132
             */
            frozen: boolean;
            /** The ID of the tab. Tab IDs are unique within a browser session. Under some circumstances a tab may not be assigned an ID; for example, when querying foreign tabs using the {@link sessions} API, in which case a session ID may be present. Tab ID can also be set to `chrome.tabs.TAB_ID_NONE` for apps and devtools windows. */
            id?: number | undefined;
            /** Whether the tab is in an incognito window. */
            incognito: boolean;
            /**
             * Whether the tab is selected.
             * @deprecated since Chrome 33. Please use {@link Tab.highlighted}.
             */
            selected: boolean;
            /**
             * Whether the tab has produced sound over the past couple of seconds (but it might not be heard if also muted). Equivalent to whether the 'speaker audio' indicator is showing.
             * @since Chrome 45
             */
            audible?: boolean | undefined;
            /**
             * Whether the tab is discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content is reloaded the next time it is activated.
             * @since Chrome 54
             */
            discarded: boolean;
            /**
             * Whether the tab can be discarded automatically by the browser when resources are low.
             * @since Chrome 54
             */
            autoDiscardable: boolean;
            /**
             * The tab's muted state and the reason for the last state change.
             * @since Chrome 46
             */
            mutedInfo?: MutedInfo | undefined;
            /** The width of the tab in pixels. */
            width?: number | undefined;
            /** The height of the tab in pixels. */
            height?: number | undefined;
            /** The session ID used to uniquely identify a tab obtained from the {@link sessions} API. */
            sessionId?: string | undefined;
            /**
             * The ID of the group that the tab belongs to.
             * @since Chrome 88
             */
            groupId: number;
            /**
             * The last time the tab became active in its window as the number of milliseconds since epoch.
             * @since Chrome 121
             */
            lastAccessed?: number | undefined;
        }

        /** The tab's loading status. */
        export enum TabStatus {
            UNLOADED = "unloaded",
            LOADING = "loading",
            COMPLETE = "complete",
        }

        /** The type of window. */
        export enum WindowType {
            NORMAL = "normal",
            POPUP = "popup",
            PANEL = "panel",
            APP = "app",
            DEVTOOLS = "devtools",
        }

        /** Defines how zoom changes in a tab are handled and at what scope. */
        export interface ZoomSettings {
            /** Defines how zoom changes are handled, i.e., which entity is responsible for the actual scaling of the page; defaults to `automatic`. */
            mode?: `${ZoomSettingsMode}` | undefined;
            /** Defines whether zoom changes persist for the page's origin, or only take effect in this tab; defaults to `per-origin` when in `automatic` mode, and `per-tab` otherwise. */
            scope?: `${ZoomSettingsScope}` | undefined;
            /**
             * Used to return the default zoom level for the current tab in calls to {@link tabs.getZoomSettings}.
             * @since Chrome 43
             */
            defaultZoomFactor?: number | undefined;
        }

        /**
         * Defines how zoom changes are handled, i.e., which entity is responsible for the actual scaling of the page; defaults to `automatic`.
         * @since Chrome 44
         */
        export enum ZoomSettingsMode {
            /** Zoom changes are handled automatically by the browser. */
            AUTOMATIC = "automatic",
            /** Overrides the automatic handling of zoom changes. The `onZoomChange` event will still be dispatched, and it is the extension's responsibility to listen for this event and manually scale the page. This mode does not support `per-origin` zooming, and thus ignores the `scope` zoom setting and assumes `per-tab`. */
            MANUAL = "manual",
            /** Disables all zooming in the tab. The tab reverts to the default zoom level, and all attempted zoom changes are ignored. */
            DISABLED = "disabled",
        }

        /**
         * Defines whether zoom changes persist for the page's origin, or only take effect in this tab; defaults to `per-origin` when in `automatic` mode, and `per-tab` otherwise.
         * @since Chrome 44
         */
        export enum ZoomSettingsScope {
            /** Zoom changes persist in the zoomed page's origin, i.e., all other tabs navigated to that same origin are zoomed as well. Moreover, `per-origin` zoom changes are saved with the origin, meaning that when navigating to other pages in the same origin, they are all zoomed to the same zoom factor. The `per-origin` scope is only available in the `automatic` mode. */
            PER_ORIGIN = "per-origin",
            /** Zoom changes only take effect in this tab, and zoom changes in other tabs do not affect the zooming of this tab. Also, `per-tab` zoom changes are reset on navigation; navigating a tab always loads pages with their `per-origin` zoom factors. */
            PER_TAB = "per-tab",
        }

        /**
         * The maximum number of times that {@link captureVisibleTab} can be called per second. {@link captureVisibleTab} is expensive and should not be called too often.
         * @since Chrome 92
         */
        export const MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND = 2;

        /**
         * An ID that represents the absence of a browser tab.
         * @since Chrome 46
         */
        export const TAB_ID_NONE = -1;

        /**
         * An index that represents the absence of a tab index in a tab_strip.
         * @since Chrome 123
         */
        export const TAB_INDEX_NONE = -1;

        export interface CreateProperties {
            /** The position the tab should take in the window. The provided value is clamped to between zero and the number of tabs in the window. */
            index?: number | undefined;
            /** The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly created tab. */
            openerTabId?: number | undefined;
            /** The URL to initially navigate the tab to. Fully-qualified URLs must include a scheme (i.e., 'http://www.google.com', not 'www.google.com'). Relative URLs are relative to the current page within the extension. Defaults to the New Tab Page. */
            url?: string | undefined;
            /** Whether the tab should be pinned. Defaults to `false` */
            pinned?: boolean | undefined;
            /** The window in which to create the new tab. Defaults to the current window. */
            windowId?: number | undefined;
            /** Whether the tab should become the active tab in the window. Does not affect whether the window is focused (see {@link windows.update}). Defaults to `true`. */
            active?: boolean | undefined;
            /**
             * Whether the tab should become the selected tab in the window. Defaults to `true`
             * @deprecated since Chrome 33. Please use {@link CreateProperties.active active}.
             */
            selected?: boolean | undefined;
        }

        export interface MoveProperties {
            /** The position to move the window to. Use `-1` to place the tab at the end of the window. */
            index: number;
            /** Defaults to the window the tab is currently in. */
            windowId?: number | undefined;
        }

        export interface UpdateProperties {
            /** Whether the tab should be pinned. */
            pinned?: boolean | undefined;
            /** The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab. */
            openerTabId?: number | undefined;
            /** A URL to navigate the tab to. JavaScript URLs are not supported; use {@link scripting.executeScript} instead. */
            url?: string | undefined;
            /** Adds or removes the tab from the current selection. */
            highlighted?: boolean | undefined;
            /** Whether the tab should be active. Does not affect whether the window is focused (see {@link windows.update}).*/
            active?: boolean | undefined;
            /**
             * Whether the tab should be selected.
             * @deprecated since Chrome 33. Please use {@link highlighted}.
             */
            selected?: boolean | undefined;
            /**
             * Whether the tab should be muted.
             * @since Chrome 45
             */
            muted?: boolean | undefined;
            /**
             * Whether the tab should be discarded automatically by the browser when resources are low.
             * @since Chrome 54
             */
            autoDiscardable?: boolean | undefined;
        }

        export interface ReloadProperties {
            /** Whether to bypass local caching. Defaults to `false`. */
            bypassCache?: boolean | undefined;
        }

        export interface ConnectInfo {
            /** Is passed into onConnect for content scripts that are listening for the connection event. */
            name?: string | undefined;
            /** Open a port to a specific frame identified by `frameId` instead of all frames in the tab. */
            frameId?: number | undefined;
            /**
             * Open a port to a specific document identified by `documentId` instead of all frames in the tab.
             * @since Chrome 106
             */
            documentId?: string;
        }

        export interface MessageSendOptions {
            /** Send a message to a specific frame identified by `frameId` instead of all frames in the tab. */
            frameId?: number | undefined;
            /**
             * Send a message to a specific document identified by `documentId` instead of all frames in the tab.
             * @since Chrome 106
             */
            documentId?: string;
        }

        export interface GroupOptions {
            /** Configurations for creating a group. Cannot be used if groupId is already specified. */
            createProperties?: {
                /** The window of the new group. Defaults to the current window. */
                windowId?: number | undefined;
            } | undefined;
            /** The ID of the group to add the tabs to. If not specified, a new group will be created. */
            groupId?: number | undefined;
            /** The tab ID or list of tab IDs to add to the specified group. */
            tabIds?: number | [number, ...number[]] | undefined;
        }

        export interface HighlightInfo {
            /** One or more tab indices to highlight. */
            tabs: number | number[];
            /** The window that contains the tabs. */
            windowId?: number | undefined;
        }

        export interface QueryInfo {
            /** The tab loading status. */
            status?: `${TabStatus}` | undefined;
            /** Whether the tabs are in the last focused window. */
            lastFocusedWindow?: boolean | undefined;
            /** The ID of the parent window, or {@link windows.WINDOW_ID_CURRENT} for the current window. */
            windowId?: number | undefined;
            /** The type of window the tabs are in. */
            windowType?: `${WindowType}` | undefined;
            /** Whether the tabs are active in their windows. */
            active?: boolean | undefined;
            /** The position of the tabs within their windows. */
            index?: number | undefined;
            /** Match page titles against a pattern. This property is ignored if the extension does not have the `"tabs"` permission or host permissions for the page. */
            title?: string | undefined;
            /** Match tabs against one or more URL patterns. Fragment identifiers are not matched. This property is ignored if the extension does not have the `"tabs"` permission or host permissions for the page. */
            url?: string | string[] | undefined;
            /** Whether the tabs are in the current window. */
            currentWindow?: boolean | undefined;
            /** Whether the tabs are highlighted. */
            highlighted?: boolean | undefined;
            /**
             * Whether the tabs are discarded. A discarded tab is one whose content has been unloaded from memory, but is still visible in the tab strip. Its content is reloaded the next time it is activated.
             * @since Chrome 54
             */
            discarded?: boolean | undefined;
            /**
             * Whether the tabs are frozen. A frozen tab cannot execute tasks, including event handlers or timers. It is visible in the tab strip and its content is loaded in memory. It is unfrozen on activation.
             * @since Chrome 132
             */
            frozen?: boolean | undefined;
            /**
             * Whether the tabs can be discarded automatically by the browser when resources are low.
             * @since Chrome 54
             */
            autoDiscardable?: boolean | undefined;
            /** Whether the tabs are pinned. */
            pinned?: boolean | undefined;
            /**
             * The ID of the Split View that the tabs are in, or `tabs.SPLIT_VIEW_ID_NONE` for tabs that aren't in a Split View.
             * @since Chrome 140
             */
            splitViewId?: number | undefined;
            /**
             * Whether the tabs are audible.
             * @since Chrome 45
             */
            audible?: boolean | undefined;
            /**
             * Whether the tabs are muted.
             * @since Chrome 45
             */
            muted?: boolean | undefined;
            /**
             * The ID of the group that the tabs are in, or {@link chrome.tabGroups.TAB_GROUP_ID_NONE} for ungrouped tabs.
             * @since Chrome 88
             */
            groupId?: number | undefined;
        }

        export interface OnHighlightedInfo {
            /** All highlighted tabs in the window. */
            tabIds: number[];
            /** The window whose tabs changed. */
            windowId: number;
        }

        export interface OnRemovedInfo {
            /** True when the tab was closed because its parent window was closed. */
            isWindowClosing: boolean;
            /** The window whose tab is closed */
            windowId: number;
        }

        export interface OnUpdatedInfo {
            /** The tab's new audible state. */
            audible?: boolean;
            /**
             * The tab's new auto-discardable state.
             * @since Chrome 54
             */
            autoDiscardable?: boolean;
            /**
             * The tab's new discarded state.
             * @since Chrome 54
             */
            discarded?: boolean;
            /** The tab's new favicon URL. */
            favIconUrl?: string;
            /**
             * The tab's new frozen state.
             * @since Chrome 132
             */
            frozen?: boolean;
            /**
             * The tab's new group.
             * @since Chrome 88
             */
            groupId?: number;
            /**
             * The tab's new muted state and the reason for the change.
             * @since Chrome 46
             */
            mutedInfo?: MutedInfo;
            /** The tab's new pinned state. */
            pinned?: boolean;
            /**
             * The tab's new Split View.
             * @since Chrome 140
             */
            splitViewId?: number;
            /** The tab's loading status. */
            status?: `${TabStatus}`;
            /**
             * The tab's new title.
             * @since Chrome 48
             */
            title?: string;
            /** The tab's URL if it has changed. */
            url?: string;
        }

        export interface OnAttachedInfo {
            newPosition: number;
            newWindowId: number;
        }

        export interface OnMovedInfo {
            fromIndex: number;
            toIndex: number;
            windowId: number;
        }

        export interface OnDetachedInfo {
            oldPosition: number;
            oldWindowId: number;
        }

        export interface OnActivatedInfo {
            /** The ID of the tab that has become active. */
            tabId: number;
            /** The ID of the window the active tab changed inside of. */
            windowId: number;
        }

        export interface OnSelectionChangedInfo {
            /** The ID of the window the selected tab changed inside of. */
            windowId: number;
        }

        export interface OnActiveChangedInfo {
            /** The ID of the window the selected tab changed inside of. */
            windowId: number;
        }

        export interface OnHighlightChangedInfo {
            /** All highlighted tabs in the window. */
            tabIds: number[];
            /** The window whose tabs changed. */
            windowId: number;
        }

        export interface OnZoomChangeInfo {
            newZoomFactor: number;
            oldZoomFactor: number;
            tabId: number;
            zoomSettings: ZoomSettings;
        }

        /**
         * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts doc.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         *
         * MV2 only
         * @param tabId The ID of the tab in which to run the script; defaults to the active tab of the current window.
         * @param details Details of the script to run. Either the code or the file property must be set, but both may not be set at the same time
         * @deprecated since Chrome 99. Replaced by {@link scripting.executeScript} in Manifest V3.
         */
        export function executeScript(details: extensionTypes.InjectDetails): Promise<any[] | undefined>;
        export function executeScript(
            tabId: number | undefined,
            details: extensionTypes.InjectDetails,
        ): Promise<any[] | undefined>;
        export function executeScript(details: extensionTypes.InjectDetails, callback: (result?: any[]) => void): void;
        export function executeScript(
            tabId: number | undefined,
            details: extensionTypes.InjectDetails,
            callback: (result?: any[]) => void,
        ): void;

        /**
         * Retrieves details about the specified tab
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function get(tabId: number): Promise<Tab>;
        export function get(tabId: number, callback: (tab: Tab) => void): void;

        /**
         * Gets details about all tabs in the specified window.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         *
         * MV2 only
         * @deprecated Please use {@link tabs.query} `{windowId: windowId}`.
         */
        export function getAllInWindow(windowId?: number): Promise<Tab[]>;
        export function getAllInWindow(callback: (tabs: Tab[]) => void): void;
        export function getAllInWindow(windowId: number | undefined, callback: (tabs: Tab[]) => void): void;

        /**
         * Gets the tab that this script call is being made from. Returns `undefined` if called from a non-tab context (for example, a background page or popup view).
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function getCurrent(): Promise<Tab | undefined>;
        export function getCurrent(callback: (tab?: Tab) => void): void;

        /**
         * Gets the tab that is selected in the specified window.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         *
         * MV2 only
         * @param windowId Defaults to the current window.
         * @deprecated Please use {@link tabs.query} `{active: true}`.
         */
        export function getSelected(windowId?: number): Promise<Tab>;
        export function getSelected(callback: (tab: Tab) => void): void;
        export function getSelected(windowId: number | undefined, callback: (tab: Tab) => void): void;

        /**
         * Creates a new tab.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function create(createProperties: CreateProperties): Promise<Tab>;
        export function create(createProperties: CreateProperties, callback: (tab: Tab) => void): void;

        /**
         * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
         * @param tabId The tab ID to move.
         * @param tabIds List of tab IDs to move.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function move(tabId: number, moveProperties: MoveProperties): Promise<Tab>;
        export function move(tabIds: number[], moveProperties: MoveProperties): Promise<Tab[]>;
        export function move(tabId: number, moveProperties: MoveProperties, callback: (tab: Tab) => void): void;
        export function move(tabIds: number[], moveProperties: MoveProperties, callback: (tabs: Tab[]) => void): void;

        /**
         * Modifies the properties of a tab. Properties that are not specified in `updateProperties` are not modified.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param tabId Defaults to the selected tab of the current window.
         */
        export function update(updateProperties: UpdateProperties): Promise<Tab | undefined>;
        export function update(tabId: number | undefined, updateProperties: UpdateProperties): Promise<Tab | undefined>;
        export function update(updateProperties: UpdateProperties, callback: (tab?: Tab) => void): void;
        export function update(
            tabId: number | undefined,
            updateProperties: UpdateProperties,
            callback: (tab?: Tab) => void,
        ): void;

        /**
         * Closes one or more tabs.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param tabId The tab ID to close.
         * @param tabIds List of tab IDs to close.
         */
        export function remove(tabId: number): Promise<void>;
        export function remove(tabIds: number[]): Promise<void>;
        export function remove(tabId: number, callback: () => void): void;
        export function remove(tabIds: number[], callback: () => void): void;

        /**
         * Captures the visible area of the currently active tab in the specified window. In order to call this method, the extension must have either the [<all\_urls>](https://developer.chrome.com/extensions/develop/concepts/declare-permissions) permission or the [activeTab](https://developer.chrome.com/docs/extensions/develop/concepts/activeTab) permission. In addition to sites that extensions can normally access, this method allows extensions to capture sensitive sites that are otherwise restricted, including chrome:-scheme pages, other extensions' pages, and data: URLs. These sensitive sites can only be captured with the activeTab permission. File URLs may be captured only if the extension has been granted file access.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param windowId The target window. Defaults to the current window.
         */
        export function captureVisibleTab(): Promise<string>;
        export function captureVisibleTab(windowId: number): Promise<string>;
        export function captureVisibleTab(options: extensionTypes.ImageDetails): Promise<string>;
        export function captureVisibleTab(windowId: number, options: extensionTypes.ImageDetails): Promise<string>;
        export function captureVisibleTab(callback: (dataUrl: string) => void): void;
        export function captureVisibleTab(windowId: number, callback: (dataUrl: string) => void): void;
        export function captureVisibleTab(
            options: extensionTypes.ImageDetails,
            callback: (dataUrl: string) => void,
        ): void;
        export function captureVisibleTab(
            windowId: number,
            options: extensionTypes.ImageDetails,
            callback: (dataUrl: string) => void,
        ): void;

        /**
         * Reload a tab.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param tabId The ID of the tab to reload; defaults to the selected tab of the current window.
         */
        export function reload(): Promise<void>;
        export function reload(tabId: number): Promise<void>;
        export function reload(reloadProperties: ReloadProperties): Promise<void>;
        export function reload(tabId: number, reloadProperties: ReloadProperties): Promise<void>;
        export function reload(callback: () => void): void;
        export function reload(tabId: number | undefined, callback: () => void): void;
        export function reload(reloadProperties: ReloadProperties | undefined, callback: () => void): void;
        export function reload(
            tabId: number | undefined,
            reloadProperties: ReloadProperties | undefined,
            callback: () => void,
        ): void;

        /**
         * Duplicates a tab.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param tabId The ID of the tab to duplicate.
         */
        export function duplicate(tabId: number): Promise<Tab | undefined>;
        export function duplicate(tabId: number, callback: (tab?: Tab) => void): void;

        /**
         * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The {@link runtime.onMessage} event is fired in each content script running in the specified tab for the current extension.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 99.
         */
        export function sendMessage<M = any, R = any>(
            tabId: number,
            message: M,
            options?: MessageSendOptions,
        ): Promise<R>;
        export function sendMessage<M = any, R = any>(
            tabId: number,
            message: M,
            /** @since Chrome 99 */
            callback: (response: R) => void,
        ): void;
        export function sendMessage<M = any, R = any>(
            tabId: number,
            message: M,
            options: MessageSendOptions | undefined,
            /** @since Chrome 99 */
            callback: (response: R) => void,
        ): void;

        /**
         * Sends a single request to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The {@link extension.onRequest} event is fired in each content script running in the specified tab for the current extension.
         *
         * MV2 only
         * @deprecated Please use {@link runtime.sendMessage}.
         */
        export function sendRequest<Request = any, Response = any>(
            tabId: number,
            request: Request,
        ): Promise<Response>;
        export function sendRequest<Request = any, Response = any>(
            tabId: number,
            request: Request,
            /** @since Chrome 99 */
            callback?: (response: Response) => void,
        ): void;

        /**
         * Connects to the content script(s) in the specified tab. The {@link runtime.onConnect} event is fired in each content script running in the specified tab for the current extension.
         * @returns A port that can be used to communicate with the content scripts running in the specified tab. The port's {@link runtime.Port} event is fired if the tab closes or does not exist.
         */
        export function connect(tabId: number, connectInfo?: ConnectInfo): runtime.Port;

        /**
         * Injects CSS into a page. Styles inserted with this method can be removed with {@link scripting.removeCSS}`. For details, see the programmatic injection section of the content scripts doc.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         *
         * MV2 only
         * @param tabId The ID of the tab in which to insert the CSS; defaults to the active tab of the current window.
         * @param details Details of the CSS text to insert. Either the code or the file property must be set, but both may not be set at the same time.
         * @deprecated since Chrome 99. Replaced by {@link scripting.insertCSS} in Manifest V3.
         */
        export function insertCSS(details: extensionTypes.InjectDetails): Promise<void>;
        export function insertCSS(tabId: number | undefined, details: extensionTypes.InjectDetails): Promise<void>;
        export function insertCSS(details: extensionTypes.InjectDetails, callback: () => void): void;
        export function insertCSS(tabId: number | undefined, details: extensionTypes.InjectDetails): Promise<void>;
        export function insertCSS(tabId: number, details: extensionTypes.InjectDetails, callback: () => void): void;

        /**
         * Highlights the given tabs and focuses on the first of group. Will appear to do nothing if the specified tab is currently active.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function highlight(highlightInfo: HighlightInfo): Promise<windows.Window>;
        export function highlight(highlightInfo: HighlightInfo, callback: (window: windows.Window) => void): void;

        /** Gets all tabs that have the specified properties, or all tabs if no properties are specified. */
        export function query(queryInfo: QueryInfo): Promise<Tab[]>;
        export function query(queryInfo: QueryInfo, callback: (result: Tab[]) => void): void;

        /**
         * Detects the primary language of the content in a tab.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param tabId The ID of the tab to get the current zoom factor from; defaults to the active tab of the current window.
         */
        export function detectLanguage(tabId?: number): Promise<string>;
        export function detectLanguage(callback: (language: string) => void): void;
        export function detectLanguage(tabId: number | undefined, callback: (language: string) => void): void;

        /**
         * Zooms a specified tab.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param tabId The ID of the tab to zoom; defaults to the active tab of the current window.
         * @param zoomFactor The new zoom factor. A value of `0` sets the tab to its current default zoom factor. Values greater than 0 specify a (possibly non-default) zoom factor for the tab.
         */
        export function setZoom(zoomFactor: number): Promise<void>;
        export function setZoom(tabId: number | undefined, zoomFactor: number): Promise<void>;
        export function setZoom(zoomFactor: number, callback: () => void): void;
        export function setZoom(tabId: number | undefined, zoomFactor: number, callback: () => void): void;

        /**
         * Gets the current zoom factor of a specified tab.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param tabId The ID of the tab to get the current zoom factor from; defaults to the active tab of the current window.
         */
        export function getZoom(tabId?: number): Promise<number>;
        export function getZoom(callback: (zoomFactor: number) => void): void;
        export function getZoom(tabId: number | undefined, callback: (zoomFactor: number) => void): void;

        /**
         * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param tabId The ID of the tab to change the zoom settings for; defaults to the active tab of the current window.
         * @param zoomSettings Defines how zoom changes are handled and at what scope.
         */
        export function setZoomSettings(zoomSettings: ZoomSettings): Promise<void>;
        export function setZoomSettings(tabId: number | undefined, zoomSettings: ZoomSettings): Promise<void>;
        export function setZoomSettings(zoomSettings: ZoomSettings, callback: () => void): void;
        export function setZoomSettings(
            tabId: number | undefined,
            zoomSettings: ZoomSettings,
            callback: () => void,
        ): void;

        /**
         * Gets the current zoom settings of a specified tab.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param tabId The ID of the tab to get the current zoom settings from; defaults to the active tab of the current window.
         */
        export function getZoomSettings(tabId?: number): Promise<ZoomSettings>;
        export function getZoomSettings(callback: (zoomSettings: ZoomSettings) => void): void;
        export function getZoomSettings(
            tabId: number | undefined,
            callback: (zoomSettings: ZoomSettings) => void,
        ): void;

        /**
         * Discards a tab from memory. Discarded tabs are still visible on the tab strip and are reloaded when activated.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param tabId The ID of the tab to be discarded. If specified, the tab is discarded unless it is active or already discarded. If omitted, the browser discards the least important tab. This can fail if no discardable tabs exist..
         * @since Chrome 54
         */
        export function discard(tabId?: number): Promise<Tab | undefined>;
        export function discard(callback: (tab?: Tab) => void): void;
        export function discard(tabId: number | undefined, callback: (tab?: Tab) => void): void;

        /**
         * Go forward to the next page, if one is available.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param tabId The ID of the tab to navigate forward; defaults to the selected tab of the current window.
         * @since Chrome 72
         */
        export function goForward(tabId?: number): Promise<void>;
        export function goForward(callback: () => void): void;
        export function goForward(tabId: number | undefined, callback: () => void): void;

        /**
         * Go back to the previous page, if one is available.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param tabId The ID of the tab to navigate back; defaults to the selected tab of the current window.
         * @since Chrome 72
         */
        export function goBack(tabId?: number): Promise<void>;
        export function goBack(callback: () => void): void;
        export function goBack(tabId: number | undefined, callback: () => void): void;

        /**
         * Adds one or more tabs to a specified group, or if no group is specified, adds the given tabs to a newly created group.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @since Chrome 88
         */
        export function group(options: GroupOptions): Promise<number>;
        export function group(options: GroupOptions, callback: (groupId: number) => void): void;

        /**
         * Removes one or more tabs from their respective groups. If any groups become empty, they are deleted
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         * @param tabIds The tab ID or list of tab IDs to remove from their respective groups.
         * @since Chrome 88
         */
        export function ungroup(tabIds: number | [number, ...number[]]): Promise<void>;
        export function ungroup(tabIds: number | [number, ...number[]], callback: () => void): void;

        /** Fired when the highlighted or selected tabs in a window changes */
        export const onHighlighted: events.Event<
            (highlightInfo: OnHighlightedInfo) => void
        >;

        /** Fired when a tab is closed. */
        export const onRemoved: events.Event<
            (tabId: number, removeInfo: OnRemovedInfo) => void
        >;

        /** Fired when a tab is updated. */
        export const onUpdated: events.Event<
            (tabId: number, changeInfo: OnUpdatedInfo, tab: Tab) => void
        >;

        /** Fired when a tab is attached to a window, for example because it was moved between windows. */
        export const onAttached: events.Event<
            (tabId: number, attachInfo: OnAttachedInfo) => void
        >;

        /** Fired when a tab is moved within a window. Only one move event is fired, representing the tab the user directly moved. Move events are not fired for the other tabs that must move in response to the manually-moved tab. This event is not fired when a tab is moved between windows; for details, see {@link tabs.onDetached}. */
        export const onMoved: events.Event<
            (tabId: number, moveInfo: OnMovedInfo) => void
        >;

        /** Fired when a tab is detached from a window; for example, because it was moved between windows. */
        export const onDetached: events.Event<
            (tabId: number, detachInfo: OnDetachedInfo) => void
        >;

        /** Fired when a tab is created. Note that the tab's URL and tab group membership may not be set at the time this event is fired, but you can listen to onUpdated events so as to be notified when a URL is set or the tab is added to a tab group. */
        export const onCreated: events.Event<(tab: Tab) => void>;

        /** Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events so as to be notified when a URL is set */
        export const onActivated: events.Event<
            (activeInfo: OnActivatedInfo) => void
        >;

        /** Fired when a tab is replaced with another tab due to prerendering or instant */
        export const onReplaced: events.Event<
            (addedTabId: number, removedTabId: number) => void
        >;

        /**
         * Fires when the selected tab in a window changes.
         *
         * MV2 only
         * @deprecated Please use {@link tabs.onActivated}.
         */
        export const onSelectionChanged: events.Event<
            (tabId: number, selectInfo: OnSelectionChangedInfo) => void
        >;

        /**
         * Fires when the selected tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to {@link tabs.onUpdated} events so as to be notified when a URL is set.
         *
         * MV2 only
         * @deprecated Please use {@link tabs.onActivated}.
         */
        export const onActiveChanged: events.Event<
            (tabId: number, selectInfo: OnActiveChangedInfo) => void
        >;

        /**
         * Fired when the highlighted or selected tabs in a window changes.
         *
         * MV2 only
         * @deprecated Please use {@link tabs.onHighlighted}.
         */
        export const onHighlightChanged: events.Event<
            (selectInfo: OnHighlightChangedInfo) => void
        >;

        /** Fired when a tab is zoomed */
        export const onZoomChange: events.Event<
            (ZoomChangeInfo: OnZoomChangeInfo) => void
        >;
    }

    ////////////////////
    // Tab Groups
    ////////////////////
    /**
     * Use the `chrome.tabGroups` API to interact with the browser's tab grouping system. You can use this API to modify and rearrange tab groups in the browser. To group and ungroup tabs, or to query what tabs are in groups, use the `chrome.tabs` API.
     *
     * Permissions: "tabGroups"
     * @since Chrome 89, MV3
     */
    export namespace tabGroups {
        /** An ID that represents the absence of a group. */
        export const TAB_GROUP_ID_NONE: -1;

        /** The group's color. */
        export enum Color {
            BLUE = "blue",
            CYAN = "cyan",
            GREEN = "green",
            GREY = "grey",
            ORANGE = "orange",
            PINK = "pink",
            PURPLE = "purple",
            RED = "red",
            YELLOW = "yellow",
        }

        export interface TabGroup {
            /** Whether the group is collapsed. A collapsed group is one whose tabs are hidden. */
            collapsed: boolean;
            /** The group's color. */
            color: `${Color}`;
            /** The ID of the group. Group IDs are unique within a browser session. */
            id: number;
            /**
             * Whether the group is shared.
             * @since Chrome 137
             */
            shared: boolean;
            /** The title of the group. */
            title?: string;
            /** The ID of the window that contains the group. */
            windowId: number;
        }

        export interface MoveProperties {
            /** The position to move the group to. Use `-1` to place the group at the end of the window. */
            index: number;
            /** The window to move the group to. Defaults to the window the group is currently in. Note that groups can only be moved to and from windows with {@link windows.windowTypeEnum windows.windowType} type `"normal"`. */
            windowId?: number;
        }

        export interface QueryInfo {
            /** Whether the groups are collapsed. */
            collapsed?: boolean | undefined;
            /** The color of the groups. */
            color?: `${Color}` | undefined;
            /**
             * Whether the group is shared.
             * @since Chrome 137
             */
            shared?: boolean | undefined;
            /** Match group titles against a pattern. */
            title?: string | undefined;
            /** The ID of the parent window, or {@link windows.WINDOW_ID_CURRENT} for the current window. */
            windowId?: number | undefined;
        }

        export interface UpdateProperties {
            /** Whether the group should be collapsed. */
            collapsed?: boolean;
            /** The color of the group. */
            color?: `${Color}`;
            /** The title of the group. */
            title?: string;
        }

        /**
         * Retrieves details about the specified group.
         *
         * Can return its result via Promise since Chrome 90.
         */
        export function get(groupId: number): Promise<TabGroup>;
        export function get(groupId: number, callback: (group: TabGroup) => void): void;

        /**
         * Moves the group and all its tabs within its window, or to a new window.
         * @param groupId The ID of the group to move.
         *
         * Can return its result via Promise since Chrome 90.
         */
        export function move(groupId: number, moveProperties: MoveProperties): Promise<TabGroup | undefined>;
        export function move(
            groupId: number,
            moveProperties: MoveProperties,
            callback: (group?: TabGroup) => void,
        ): void;

        /**
         * Gets all groups that have the specified properties, or all groups if no properties are specified.
         *
         * Can return its result via Promise since Chrome 90.
         */
        export function query(queryInfo: QueryInfo): Promise<TabGroup[]>;
        export function query(queryInfo: QueryInfo, callback: (result: TabGroup[]) => void): void;

        /**
         * Modifies the properties of a group. Properties that are not specified in `updateProperties` are not modified.
         * @param groupId The ID of the group to modify.
         *
         * Can return its result via Promise since Chrome 90.
         */
        export function update(groupId: number, updateProperties: UpdateProperties): Promise<TabGroup | undefined>;
        export function update(
            groupId: number,
            updateProperties: UpdateProperties,
            callback: (group?: TabGroup) => void,
        ): void;

        /** Fired when a group is created. */
        export const onCreated: events.Event<(group: TabGroup) => void>;
        /** Fired when a group is moved within a window. Move events are still fired for the individual tabs within the group, as well as for the group itself. This event is not fired when a group is moved between windows; instead, it will be removed from one window and created in another. */
        export const onMoved: events.Event<(group: TabGroup) => void>;
        /** Fired when a group is closed, either directly by the user or automatically because it contained zero tabs. */
        export const onRemoved: events.Event<(group: TabGroup) => void>;
        /** Fired when a group is updated. */
        export const onUpdated: events.Event<(group: TabGroup) => void>;
    }

    ////////////////////
    // Top Sites
    ////////////////////
    /**
     * Use the `chrome.topSites` API to access the top sites (i.e. most visited sites) that are displayed on the new tab page. These do not include shortcuts customized by the user.
     *
     * Permissions: "topSites"
     */
    export namespace topSites {
        /** An object encapsulating a most visited URL, such as the default shortcuts on the new tab page. */
        export interface MostVisitedURL {
            /** The most visited URL. */
            url: string;
            /** The title of the page */
            title: string;
        }

        /**
         * Gets a list of top sites.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function get(): Promise<MostVisitedURL[]>;
        export function get(callback: (data: MostVisitedURL[]) => void): void;
    }

    ////////////////////
    // Text to Speech
    ////////////////////
    /**
     * Use the `chrome.tts` API to play synthesized text-to-speech (TTS). See also the related {@link ttsEngine} API, which allows an extension to implement a speech engine.
     *
     * Permissions: "tts"
     */
    export namespace tts {
        /** @since Chrome 54 */
        export enum EventType {
            START = "start",
            END = "end",
            WORD = "word",
            SENTENCE = "sentence",
            MARKER = "marker",
            INTERRUPTED = "interrupted",
            CANCELLED = "cancelled",
            ERROR = "error",
            PAUSE = "pause",
            RESUME = "resume",
        }

        /** An event from the TTS engine to communicate the status of an utterance. */
        export interface TtsEvent {
            /** The index of the current character in the utterance. For word events, the event fires at the end of one word and before the beginning of the next. The `charIndex` represents a point in the text at the beginning of the next word to be spoken. */
            charIndex?: number;
            /** The error description, if the event type is `error`. */
            errorMessage?: string;
            /**
             * The length of the next part of the utterance. For example, in a `word` event, this is the length of the word which will be spoken next. It will be set to -1 if not set by the speech engine.
             * @since Chrome 74
             */
            length?: number;
            /** The type can be `start` as soon as speech has started, `word` when a word boundary is reached, `sentence` when a sentence boundary is reached, `marker` when an SSML mark element is reached, `end` when the end of the utterance is reached, `interrupted` when the utterance is stopped or interrupted before reaching the end, `cancelled` when it's removed from the queue before ever being synthesized, or `error` when any other error occurs. When pausing speech, a `pause` event is fired if a particular utterance is paused in the middle, and `resume` if an utterance resumes speech. Note that pause and resume events may not fire if speech is paused in-between utterances. */
            type: `${EventType}`;
        }

        /**
         * The speech options for the TTS engine.
         * @since Chrome 77
         */
        export interface TtsOptions {
            /** The TTS event types that you are interested in listening to. If missing, all event types may be sent. */
            desiredEventTypes?: string[];
            /** If true, enqueues this utterance if TTS is already in progress. If false (the default), interrupts any current speech and flushes the speech queue before speaking this new utterance. */
            enqueue?: boolean;
            /** The extension ID of the speech engine to use, if known. */
            extensionId?: string;
            /**
             * Gender of voice for synthesized speech.
             * @deprecated since Chrome 77. Gender is deprecated and will be ignored.
             */
            gender?: `${VoiceGender}`;
            /** The language to be used for synthesis, in the form _language_\-_region_. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'. */
            lang?: string;
            /** Speaking pitch between 0 and 2 inclusive, with 0 being lowest and 2 being highest. 1.0 corresponds to a voice's default pitch. */
            pitch?: number;
            /** Speaking rate relative to the default rate for this voice. 1.0 is the default rate, normally around 180 to 220 words per minute. 2.0 is twice as fast, and 0.5 is half as fast. Values below 0.1 or above 10.0 are strictly disallowed, but many voices will constrain the minimum and maximum rates further—for example a particular voice may not actually speak faster than 3 times normal even if you specify a value larger than 3.0. */
            rate?: number;
            /** The TTS event types the voice must support. */
            requiredEventTypes?: string[];
            /** The name of the voice to use for synthesis. If empty, uses any available voice. */
            voiceName?: string;
            /** Speaking volume between 0 and 1 inclusive, with 0 being lowest and 1 being highest, with a default of 1.0. */
            volume?: number;
            /**
             * This function is called with events that occur in the process of speaking the utterance.
             * @param event The update event from the text-to-speech engine indicating the status of this utterance.
             */
            onEvent?: (
                event: TtsEvent,
            ) => void;
        }

        /** A description of a voice available for speech synthesis. */
        export interface TtsVoice {
            /** All of the callback event types that this voice is capable of sending. */
            eventTypes?: `${EventType}`[];
            /** The ID of the extension providing this voice. */
            extensionId?: string;
            /**
             * This voice's gender.
             * @deprecated since Chrome 70. Gender is deprecated and will be ignored.
             */
            gender?: `${VoiceGender}`;
            /** The language that this voice supports, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'. */
            lang?: string;
            /** If true, the synthesis engine is a remote network resource. It may be higher latency and may incur bandwidth costs. */
            remote?: boolean;
            /** The name of the voice. */
            voiceName?: string;
        }

        /** @deprecated since Chrome 70. Gender is deprecated and is ignored.*/
        export enum VoiceGender {
            FEMALE = "female",
            MALE = "male",
        }

        /**
         * Gets an array of all available voices.
         *
         * Can return its result via Promise since Chrome Chrome 101
         */
        export function getVoices(): Promise<TtsVoice[]>;
        export function getVoices(callback: (voices: TtsVoice[]) => void): void;

        /**
         * Checks whether the engine is currently speaking. On Mac OS X, the result is true whenever the system speech engine is speaking, even if the speech wasn't initiated by Chrome.
         *
         * Can return its result via Promise since Chrome Chrome 101
         */
        export function isSpeaking(): Promise<boolean>;
        export function isSpeaking(callback: (speaking: boolean) => void): void;

        /** Pauses speech synthesis, potentially in the middle of an utterance. A call to resume or stop will un-pause speech. */
        export function pause(): void;

        /** If speech was paused, resumes speaking where it left off. */
        export function resume(): void;

        /**
         * Speaks text using a text-to-speech engine.
         * @param utterance The text to speak, either plain text or a complete, well-formed SSML document. Speech engines that do not support SSML will strip away the tags and speak the text. The maximum length of the text is 32,768 characters.
         * @param options Optional. The speech options.

         * Can return its result via Promise since Chrome Chrome 101
         */
        export function speak(utterance: string, options?: TtsOptions): Promise<void>;
        export function speak(utterance: string, callback: () => void): void;
        export function speak(utterance: string, options: TtsOptions, callback: () => void): void;

        /** Stops any current speech and flushes the queue of any pending utterances. In addition, if speech was paused, it will now be un-paused for the next call to speak. */
        export function stop(): void;

        /**
         * Called when the list of {@link TtsVoice} that would be returned by getVoices has changed.
         * @since Chrome 124
         */
        const onVoicesChanged: chrome.events.Event<() => void>;
    }

    ////////////////////
    // Text to Speech Engine
    ////////////////////
    /**
     * Use the `chrome.ttsEngine` API to implement a text-to-speech(TTS) engine using an extension. If your extension registers using this API, it will receive events containing an utterance to be spoken and other parameters when any extension or Chrome App uses the {@link tts} API to generate speech. Your extension can then use any available web technology to synthesize and output the speech, and send events back to the calling function to report the status.
     *
     * Permissions: "ttsEngine"
     */
    export namespace ttsEngine {
        /**
         * Parameters containing an audio buffer and associated data.
         * @since Chrome 92
         */
        export interface AudioBuffer {
            /** The audio buffer from the text-to-speech engine. It should have length exactly audioStreamOptions.bufferSize and encoded as mono, at audioStreamOptions.sampleRate, and as linear pcm, 32-bit signed float i.e. the Float32Array type in javascript. */
            audioBuffer: ArrayBuffer;
            /** The character index associated with this audio buffer. */
            charIndex?: number;
            /** True if this audio buffer is the last for the text being spoken. */
            isLastBuffer?: boolean;
        }
        /**
         * Contains the audio stream format expected to be produced by an engine.
         * @since Chrome 92
         */
        export interface AudioStreamOptions {
            /** The number of samples within an audio buffer. */
            bufferSize: number;
            /** The sample rate expected in an audio buffer. */
            sampleRate: number;
        }

        /**
         * The install status of a voice.
         * @since Chrome 132
         */
        export enum LanguageInstallStatus {
            FAILED = "failed",
            INSTALLED = "installed",
            INSTALLING = "installing",
            NOT_INSTALLED = "notInstalled",
        }

        /**
         * Install status of a language.
         * @since Chrome 132
         */
        export interface LanguageStatus {
            /** Detail about installation failures. Optionally populated if the language failed to install. */
            error?: string;
            /** Installation status. */
            installStatus: `${LanguageInstallStatus}`;
            /** Language string in the form of language code-region code, where the region may be omitted. Examples are en, en-AU, zh-CH. */
            lang: string;
        }

        /**
         * Options for uninstalling a given language.
         * @since Chrome 132
         */
        export interface LanguageUninstallOptions {
            /** True if the TTS client wants the language to be immediately uninstalled. The engine may choose whether or when to uninstall the language, based on this parameter and the requestor information. If false, it may use other criteria, such as recent usage, to determine when to uninstall. */
            uninstallImmediately: boolean;
        }

        /**
         * Options specified to the tts.speak() method.
         * @since Chrome 92
         */
        export interface SpeakOptions {
            /** The language to be used for synthesis, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'. */
            lang?: string;
            /** The name of the voice to use for synthesis. */
            voiceName?: string;
            /**
             * Gender of voice for synthesized speech.
             * @deprecated Gender is deprecated since Chrome 92 and will be ignored.
             */
            gender?: `${VoiceGender}`;
            /** Speaking volume between 0 and 1 inclusive, with 0 being lowest and 1 being highest, with a default of 1.0. */
            volume?: number;
            /** Speaking rate relative to the default rate for this voice. 1.0 is the default rate, normally around 180 to 220 words per minute. 2.0 is twice as fast, and 0.5 is half as fast. This value is guaranteed to be between 0.1 and 10.0, inclusive. When a voice does not support this full range of rates, don't return an error. Instead, clip the rate to the range the voice supports. */
            rate?: number;
            /** Speaking pitch between 0 and 2 inclusive, with 0 being lowest and 2 being highest. 1.0 corresponds to this voice's default pitch. */
            pitch?: number;
        }

        /**
         * Identifier for the client requesting status.
         * @since Chrome 131
         */
        export interface TtsClient {
            /** Client making a language management request. For an extension, this is the unique extension ID. For Chrome features, this is the human-readable name of the feature. */
            id: string;
            /** Type of requestor. */
            source: `${TtsClientSource}`;
        }

        /**
         * Type of requestor.
         * @since Chrome 131
         */
        export enum TtsClientSource {
            CHROMEFEATURE = "chromefeature",
            EXTENSION = "extension",
        }

        /**
         * @since Chrome 54
         * @deprecated Gender is deprecated and will be ignored.
         */
        export enum VoiceGender {
            MALE = "male",
            FEMALE = "female",
        }

        /**
         * Called by an engine when a language install is attempted, and when a language is uninstalled. Also called in response to a status request from a client. When a voice is installed or uninstalled, the engine should also call ttsEngine.updateVoices to register the voice.
         * @since Chrome 132
         */
        export function updateLanguage(status: LanguageStatus): void;

        /**
         * Called by an engine to update its list of voices. This list overrides any voices declared in this extension's manifest.
         * @since Chrome 66
         */
        export function updateVoices(voices: tts.TtsVoice[]): void;

        /**
         * Fired when a TTS client requests to install a new language. The engine should attempt to download and install the language, and call ttsEngine.updateLanguage with the result. On success, the engine should also call ttsEngine.updateVoices to register the newly available voices.
         * @since Chrome 131
         */
        export const onInstallLanguageRequest: chrome.events.Event<(requestor: TtsClient, lang: string) => void>;

        /**
         * Fired when a TTS client requests the install status of a language.
         * @since Chrome 132
         */
        export const onLanguageStatusRequest: chrome.events.Event<(requestor: TtsClient, lang: string) => void>;

        /** Optional: if an engine supports the pause event, it should pause the current utterance being spoken, if any, until it receives a resume event or stop event. Note that a stop event should also clear the paused state. */
        export const onPause: chrome.events.Event<() => void>;

        /** Optional: if an engine supports the pause event, it should also support the resume event, to continue speaking the current utterance, if any. Note that a stop event should also clear the paused state. */
        export const onResume: chrome.events.Event<() => void>;

        /** Called when the user makes a call to tts.speak() and one of the voices from this extension's manifest is the first to match the options object. */
        export const onSpeak: chrome.events.Event<
            (utterance: string, options: SpeakOptions, sendTtsEvent: (event: chrome.tts.TtsEvent) => void) => void
        >;

        /**
         * Called when the user makes a call to tts.speak() and one of the voices from this extension's manifest is the first to match the options object. Differs from ttsEngine.onSpeak in that Chrome provides audio playback services and handles dispatching tts events.
         * @since Chrome 92
         */

        export const onSpeakWithAudioStream: chrome.events.Event<
            (
                utterance: string,
                options: SpeakOptions,
                audioStreamOptions: AudioStreamOptions,
                sendTtsAudio: (audioBufferParams: AudioBuffer) => void,
                sendError: (errorMessage?: string) => void,
            ) => void
        >;

        /** Fired when a call is made to tts.stop and this extension may be in the middle of speaking. If an extension receives a call to onStop and speech is already stopped, it should do nothing (not raise an error). If speech is in the paused state, this should cancel the paused state. */
        export const onStop: chrome.events.Event<() => void>;

        /**
         * Fired when a TTS client indicates a language is no longer needed.
         * @since Chrome 132
         */
        export const onUninstallLanguageRequest: chrome.events.Event<
            (requestor: TtsClient, lang: string, uninstallOptions: LanguageUninstallOptions) => void
        >;
    }

    ////////////////////
    // Types
    ////////////////////
    /**
     * The `chrome.types` API contains type declarations for Chrome.
     */
    export namespace types {
        /**
         * The scope of the ChromeSetting. One of
         * * `regular`: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
         * * `regular_only`: setting for the regular profile only (not inherited by the incognito profile),
         * * `incognito_persistent`: setting for the incognito profile that survives browser restarts (overrides regular preferences)
         * * `incognito_session_only`: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
         * @since Chrome 44
         */
        export type ChromeSettingScope = "regular" | "regular_only" | "incognito_persistent" | "incognito_session_only";

        /**
         * One of
         * * `not_controllable`: cannot be controlled by any extension
         * * `controlled_by_other_extensions`: controlled by extensions with higher precedence
         * * `controllable_by_this_extension`: can be controlled by this extension
         * * `controlled_by_this_extension`: controlled by this extension
         * @since Chrome 44
         */
        export type LevelOfControl =
            | "not_controllable"
            | "controlled_by_other_extensions"
            | "controllable_by_this_extension"
            | "controlled_by_this_extension";

        /** Which setting to change. */
        export interface ChromeSettingSetDetails<T> {
            /**
             * The value of the setting.
             * Note that every setting has a specific value type, which is described together with the setting. An extension should not set a value of a different type.
             */
            value: T;
            /** Where to set the setting (default: regular). */
            scope?: ChromeSettingScope | undefined;
        }

        /** Which setting to consider. */
        export interface ChromeSettingGetDetails {
            /** Whether to return the value that applies to the incognito session (default false). */
            incognito?: boolean | undefined;
        }

        /** Details of the currently effective value. */
        export interface ChromeSettingGetResult<T> {
            /** The level of control of the setting. */
            levelOfControl: LevelOfControl;
            /** The value of the setting. */
            value: T;
            /**
             * Whether the effective value is specific to the incognito session.
             * This property will only be present if the `incognito` property in the `details` parameter of `get()` was true.
             */
            incognitoSpecific?: boolean;
        }

        /** Which setting to clear. */
        export interface ChromeSettingClearDetails {
            /** Where to clear the setting (default: regular). */
            scope?: ChromeSettingScope | undefined;
        }

        /** Details of the currently effective value. */
        export interface ChromeSettingOnChangeDetails<T> {
            /** Whether the value that has changed is specific to the incognito session. This property will only be present if the user has enabled the extension in incognito mode. */
            incognitoSpecific?: boolean;
            /** The value of the setting after the change. */
            value: T;
            /** The level of control of the setting. */
            levelOfControl: LevelOfControl;
        }

        /**
         * An interface that allows access to a Chrome browser setting.
         * See {@link chrome.accessibilityFeatures} for an example.
         */
        export interface ChromeSetting<T> {
            /**
             * Sets the value of a setting.
             *
             * Can return its result via Promise in Manifest V3 or later since Chrome 96.
             */
            set(details: ChromeSettingSetDetails<T>): Promise<void>;
            set(details: ChromeSettingSetDetails<T>, callback: () => void): void;

            /**
             * Gets the value of a setting.
             *
             * Can return its result via Promise in Manifest V3 or later since Chrome 96.
             */
            get(details: ChromeSettingGetDetails): Promise<ChromeSettingGetResult<T>>;
            get(details: ChromeSettingGetDetails, callback: (details: ChromeSettingGetResult<T>) => void): void;

            /**
             * Clears the setting, restoring any default value.
             *
             * Can return its result via Promise in Manifest V3 or later since Chrome 96.
             */
            clear(details: ChromeSettingClearDetails): Promise<void>;
            clear(details: ChromeSettingClearDetails, callback: () => void): void;

            /** Fired after the setting changes. */
            onChange: events.Event<(details: ChromeSettingOnChangeDetails<T>) => void>;
        }
    }

    ////////////////////
    // VPN Provider
    ////////////////////
    /**
     * Use the `chrome.vpnProvider` API to implement a VPN client.
     *
     * Permissions: "vpnProvider"
     * @platform ChromeOS only
     * @since Chrome 43
     */
    export namespace vpnProvider {
        export interface Parameters {
            /** IP address for the VPN interface in CIDR notation. IPv4 is currently the only supported mode. */
            address: string;
            /** Broadcast address for the VPN interface. (default: deduced from IP address and mask) */
            broadcastAddress?: string | undefined;
            /** MTU setting for the VPN interface. (default: 1500 bytes) */
            mtu?: string | undefined;
            /** Exclude network traffic to the list of IP blocks in CIDR notation from the tunnel. This can be used to bypass traffic to and from the VPN server. When many rules match a destination, the rule with the longest matching prefix wins. Entries that correspond to the same CIDR block are treated as duplicates. Such duplicates in the collated (exclusionList + inclusionList) list are eliminated and the exact duplicate entry that will be eliminated is undefined. */
            exclusionList: string[];
            /** Include network traffic to the list of IP blocks in CIDR notation to the tunnel. This parameter can be used to set up a split tunnel. By default no traffic is directed to the tunnel. Adding the entry "0.0.0.0/0" to this list gets all the user traffic redirected to the tunnel. When many rules match a destination, the rule with the longest matching prefix wins. Entries that correspond to the same CIDR block are treated as duplicates. Such duplicates in the collated (exclusionList + inclusionList) list are eliminated and the exact duplicate entry that will be eliminated is undefined. */
            inclusionList: string[];
            /** A list of search domains. (default: no search domain) */
            domainSearch?: string[] | undefined;
            /** A list of IPs for the DNS servers. */
            dnsServers: string[];
            /**
             * Whether or not the VPN extension implements auto-reconnection.
             *
             * If true, the `linkDown`, `linkUp`, `linkChanged`, `suspend`, and `resume` platform messages will be used to signal the respective events. If false, the system will forcibly disconnect the VPN if the network topology changes, and the user will need to reconnect manually. (default: false)
             *
             * This property is new in Chrome 51; it will generate an exception in earlier versions. try/catch can be used to conditionally enable the feature based on browser support.
             * @since Chrome 51
             */
            reconnect?: string | undefined;
        }

        /** @deprecated Use {@link Parameters} instead */
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface VpnSessionParameters extends Parameters {}

        /** The enum is used by the platform to notify the client of the VPN session status. */
        export enum PlatformMessage {
            /** Indicates that the VPN configuration connected. */
            CONNECTED = "connected",
            /** Indicates that the VPN configuration disconnected. */
            DISCONNECTED = "disconnected",
            /** Indicates that an error occurred in VPN connection, for example a timeout. A description of the error is given as the error argument to onPlatformMessage. */
            ERROR = "error",
            /** Indicates that the default physical network connection is down. */
            LINK_DOWN = "linkDown",
            /** Indicates that the default physical network connection is back up. */
            LINK_UP = "linkUp",
            /** Indicates that the default physical network connection changed, e.g. wifi->mobile. */
            LINK_CHANGED = "linkChanged",
            /** Indicates that the OS is preparing to suspend, so the VPN should drop its connection. The extension is not guaranteed to receive this event prior to suspending. */
            SUSPEND = "suspend",
            /** Indicates that the OS has resumed and the user has logged back in, so the VPN should try to reconnect. */
            RESUME = "resume",
        }

        /** The enum is used by the platform to indicate the event that triggered {@link onUIEvent}. */
        export enum UIEvent {
            /** Requests that the VPN client show the add configuration dialog box to the user. */
            SHOW_ADD_DIALOG = "showAddDialog",
            /** Requests that the VPN client show the configuration settings dialog box to the user. */
            SHOW_CONFIGURE_DIALOG = "showConfigureDialog",
        }

        /** The enum is used by the VPN client to inform the platform of its current state. This helps provide meaningful messages to the user. */
        export enum VpnConnectionState {
            /** Specifies that VPN connection was successful. */
            CONNECTED = "connected",
            /** Specifies that VPN connection has failed. */
            FAILURE = "failure",
        }

        /**
         * Creates a new VPN configuration that persists across multiple login sessions of the user.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @param name The name of the VPN configuration.
         */
        export function createConfig(name: string): Promise<string>;
        export function createConfig(name: string, callback: (id: string) => void): void;

        /**
         * Destroys a VPN configuration created by the extension.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @param id ID of the VPN configuration to destroy.
         */
        export function destroyConfig(id: string): Promise<void>;
        export function destroyConfig(id: string, callback: () => void): void;

        /**
         * Sets the parameters for the VPN session. This should be called immediately after `"connected"` is received from the platform. This will succeed only when the VPN session is owned by the extension.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @param parameters The parameters for the VPN session.
         */
        export function setParameters(parameters: Parameters): Promise<void>;
        export function setParameters(parameters: Parameters, callback: () => void): void;

        /**
         * Sends an IP packet through the tunnel created for the VPN session. This will succeed only when the VPN session is owned by the extension.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @param data The IP packet to be sent to the platform.
         */
        export function sendPacket(data: ArrayBuffer): Promise<void>;
        export function sendPacket(data: ArrayBuffer, callback: () => void): void;

        /**
         * Notifies the VPN session state to the platform. This will succeed only when the VPN session is owned by the extension.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         * @param state The VPN session state of the VPN client.
         */
        export function notifyConnectionStateChanged(state: `${VpnConnectionState}`): Promise<void>;
        export function notifyConnectionStateChanged(state: `${VpnConnectionState}`, callback: () => void): void;

        /** Triggered when a message is received from the platform for a VPN configuration owned by the extension. */
        export const onPlatformMessage: events.Event<
            (id: string, message: `${PlatformMessage}`, error: string) => void
        >;

        /** Triggered when an IP packet is received via the tunnel for the VPN session owned by the extension. */
        export const onPacketReceived: events.Event<(data: ArrayBuffer) => void>;

        /** Triggered when a configuration created by the extension is removed by the platform. */
        export const onConfigRemoved: events.Event<(id: string) => void>;

        // /** Triggered when a configuration is created by the platform for the extension. */
        export const onConfigCreated: events.Event<
            (id: string, name: string, data: { [key: string]: unknown }) => void
        >;

        /** Triggered when there is a UI event for the extension. UI events are signals from the platform that indicate to the app that a UI dialog needs to be shown to the user. */
        export const onUIEvent: events.Event<(event: `${UIEvent}`, id?: string) => void>;
    }

    ////////////////////
    // Wallpaper
    ////////////////////
    /**
     * Use the `chrome.wallpaper` API to change the ChromeOS wallpaper.
     *
     * Permissions: "wallpaper"
     * @platform ChromeOS only
     * @since Chrome 43
     */
    export namespace wallpaper {
        /**
         * The supported wallpaper layouts.
         * @since Chrome 44
         */
        export enum WallpaperLayout {
            STRETCH = "STRETCH",
            CENTER = "CENTER",
            CENTER_CROPPED = "CENTER_CROPPED",
        }

        export interface WallpaperDetails {
            /** The jpeg or png encoded wallpaper image as an ArrayBuffer. */
            data?: ArrayBuffer | undefined;
            /** The URL of the wallpaper to be set (can be relative). */
            url?: string | undefined;
            /** The supported wallpaper layouts. */
            layout: `${WallpaperLayout}`;
            /** The file name of the saved wallpaper. */
            filename: string;
            /** True if a 128x60 thumbnail should be generated. Layout and ratio are not supported yet. */
            thumbnail?: boolean | undefined;
        }

        /**
         * Sets wallpaper to the image at url or wallpaperData with the specified layout
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 96.
         */
        export function setWallpaper(details: WallpaperDetails): Promise<ArrayBuffer | undefined>;
        export function setWallpaper(details: WallpaperDetails, callback: (thumbnail?: ArrayBuffer) => void): void;
    }

    ////////////////////
    // Web Authentication Proxy
    ////////////////////
    /**
     * The `chrome.webAuthenticationProxy` API lets remote desktop software running on a remote host intercept Web Authentication API (WebAuthn) requests in order to handle them on a local client.
     *
     * Permissions: "webAuthenticationProxy"
     * @since Chrome 115, MV3
     */
    export namespace webAuthenticationProxy {
        export interface CreateRequest {
            /** The `PublicKeyCredentialCreationOptions` passed to `navigator.credentials.create()`, serialized as a JSON string. The serialization format is compatible with [`PublicKeyCredential.parseCreationOptionsFromJSON()`](https://w3c.github.io/webauthn/#sctn-parseCreationOptionsFromJSON). */
            requestDetailsJson: string;
            /** An opaque identifier for the request. */
            requestId: number;
        }

        export interface CreateResponseDetails {
            /** The `DOMException` yielded by the remote request, if any. */
            error?: DOMExceptionDetails | undefined;
            /** The `requestId` of the `CreateRequest`. */
            requestId: number;
            /** The `PublicKeyCredential`, yielded by the remote request, if any, serialized as a JSON string by calling [`PublicKeyCredential.toJSON()`](https://w3c.github.io/webauthn/#dom-publickeycredential-tojson). */
            responseJson?: string | undefined;
        }

        export interface DOMExceptionDetails {
            name: string;
            message: string;
        }

        export interface GetRequest {
            /** The `PublicKeyCredentialRequestOptions` passed to `navigator.credentials.get()`, serialized as a JSON string. The serialization format is compatible with [`PublicKeyCredential.parseRequestOptionsFromJSON()`](https://w3c.github.io/webauthn/#sctn-parseRequestOptionsFromJSON). */
            requestDetailsJson: string;
            /**  An opaque identifier for the request. */
            requestId: number;
        }

        export interface GetResponseDetails {
            /** The `DOMException` yielded by the remote request, if any. */
            error?: DOMExceptionDetails | undefined;
            /** The `requestId` of the `CreateRequest`. */
            requestId: number;
            /** The `PublicKeyCredential`, yielded by the remote request, if any, serialized as a JSON string by calling [`PublicKeyCredential.toJSON()`](https://w3c.github.io/webauthn/#dom-publickeycredential-tojson). */
            responseJson?: string | undefined;
        }

        export interface IsUvpaaRequest {
            /** An opaque identifier for the request. */
            requestId: number;
        }

        export interface IsUvpaaResponseDetails {
            isUvpaa: boolean;
            requestId: number;
        }

        /**
         * Makes this extension the active Web Authentication API request proxy.
         *
         * Remote desktop extensions typically call this method after detecting attachment of a remote session to this host. Once this method returns without error, regular processing of WebAuthn requests is suspended, and events from this extension API are raised.
         *
         * This method fails with an error if a different extension is already attached.
         *
         * The attached extension must call `detach()` once the remote desktop session has ended in order to resume regular WebAuthn request processing. Extensions automatically become detached if they are unloaded.
         *
         * Refer to the `onRemoteSessionStateChange` event for signaling a change of remote session attachment from a native application to to the (possibly suspended) extension.
         */
        export function attach(): Promise<string | undefined>;
        export function attach(callback: (error?: string | undefined) => void): void;

        /** Reports the result of a `navigator.credentials.create()` call. The extension must call this for every `onCreateRequest` event it has received, unless the request was canceled (in which case, an `onRequestCanceled` event is fired). */
        export function completeCreateRequest(details: CreateResponseDetails): Promise<void>;
        export function completeCreateRequest(details: CreateResponseDetails, callback: () => void): void;

        /** Reports the result of a `navigator.credentials.get()` call. The extension must call this for every `onGetRequest` event it has received, unless the request was canceled (in which case, an `onRequestCanceled` event is fired). */
        export function completeGetRequest(details: GetResponseDetails): Promise<void>;
        export function completeGetRequest(details: GetResponseDetails, callback: () => void): void;

        /** Reports the result of a `PublicKeyCredential.isUserVerifyingPlatformAuthenticator()` call. The extension must call this for every `onIsUvpaaRequest` event it has received. */
        export function completeIsUvpaaRequest(details: IsUvpaaResponseDetails): Promise<void>;
        export function completeIsUvpaaRequest(details: IsUvpaaResponseDetails, callback: () => void): void;

        /**
         * Removes this extension from being the active Web Authentication API request proxy.
         *
         * This method is typically called when the extension detects that a remote desktop session was terminated. Once this method returns, the extension ceases to be the active Web Authentication API request proxy.
         *
         * Refer to the `onRemoteSessionStateChange` event for signaling a change of remote session attachment from a native application to to the (possibly suspended) extension.
         */
        export function detach(): Promise<string | undefined>;
        export function detach(callback: (error?: string | undefined) => void): void;

        /** Fires when a WebAuthn `navigator.credentials.create()` call occurs. The extension must supply a response by calling `completeCreateRequest()` with the `requestId` from `requestInfo`. */
        export const onCreateRequest: events.Event<(requestInfo: CreateRequest) => void>;

        /** Fires when a WebAuthn `navigator.credentials.get()` call occurs. The extension must supply a response by calling `completeGetRequest()` with the `requestId` from `requestInfo` */
        export const onGetRequest: events.Event<(requestInfo: GetRequest) => void>;

        /** Fires when a `PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()` call occurs. The extension must supply a response by calling `completeIsUvpaaRequest()` with the `requestId` from `requestInfo` */
        export const onIsUvpaaRequest: events.Event<(requestInfo: IsUvpaaRequest) => void>;

        /**
         * A native application associated with this extension can cause this event to be fired by writing to a file with a name equal to the extension's ID in a directory named `WebAuthenticationProxyRemoteSessionStateChange` inside the [default user data directory](https://chromium.googlesource.com/chromium/src/+/main/docs/user_data_dir.md#default-location)
         *
         * The contents of the file should be empty. I.e., it is not necessary to change the contents of the file in order to trigger this event.
         *
         * The native host application may use this event mechanism to signal a possible remote session state change (i.e. from detached to attached, or vice versa) while the extension service worker is possibly suspended. In the handler for this event, the extension can call the `attach()` or `detach()` API methods accordingly.
         *
         * The event listener must be registered synchronously at load time.
         */
        export const onRemoteSessionStateChange: events.Event<() => void>;

        /** Fires when a `onCreateRequest` or `onGetRequest` event is canceled (because the WebAuthn request was aborted by the caller, or because it timed out). When receiving this event, the extension should cancel processing of the corresponding request on the client side. Extensions cannot complete a request once it has been canceled. */
        export const onRequestCanceled: events.Event<(requestId: number) => void>;
    }

    ////////////////////
    // Web Navigation
    ////////////////////
    /**
     * Use the `chrome.webNavigation` API to receive notifications about the status of navigation requests in-flight.
     *
     * Permissions: "webNavigation"
     */
    export namespace webNavigation {
        /** @since Chrome 44 */
        export enum TransitionQualifier {
            CLIENT_REDIRECT = "client_redirect",
            SERVER_REDIRECT = "server_redirect",
            FORWARD_BACK = "forward_back",
            FROM_ADDRESS_BAR = "from_address_bar",
        }

        /**
         * Cause of the navigation. The same transition types as defined in the history API are used. These are the same transition types as defined in the history API except with `"start_page"` in place of `"auto_toplevel"` (for backwards compatibility).
         * @since Chrome 44
         */
        export enum TransitionType {
            LINK = "link",
            TYPED = "typed",
            AUTO_BOOKMARK = "auto_bookmark",
            AUTO_SUBFRAME = "auto_subframe",
            MANUAL_SUBFRAME = "manual_subframe",
            GENERATED = "generated",
            START_PAGE = "start_page",
            FORM_SUBMIT = "form_submit",
            RELOAD = "reload",
            KEYWORD = "keyword",
            KEYWORD_GENERATED = "keyword_generated",
        }

        export type GetFrameDetails =
            & ({
                /**
                 * The ID of the process that runs the renderer for this tab.
                 * @deprecated since Chrome 49. Frames are now uniquely identified by their tab ID and frame ID; the process ID is no longer needed and therefore ignored.
                 */
                processId?: number | undefined;
            })
            & (
                {
                    /** The ID of the tab in which the frame is. */
                    tabId?: number | undefined;
                    /** The ID of the frame in the given tab. */
                    frameId?: number | undefined;
                    /**
                     * The UUID of the document. If the frameId and/or tabId are provided they will be validated to match the document found by provided document ID.
                     * @since Chrome 106
                     */
                    documentId: string;
                } | {
                    /** The ID of the tab in which the frame is. */
                    tabId: number;
                    /** The ID of the frame in the given tab. */
                    frameId: number;
                    /**
                     * The UUID of the document. If the frameId and/or tabId are provided they will be validated to match the document found by provided document ID.
                     * @since Chrome 106
                     */
                    documentId?: string | undefined;
                }
            );

        export interface GetFrameResultDetails {
            /** The URL currently associated with this frame, if the frame identified by the frameId existed at one point in the given tab. The fact that an URL is associated with a given frameId does not imply that the corresponding frame still exists. */
            url: string;
            /** A UUID of the document loaded. */
            documentId: string;
            /**
             * The lifecycle the document is in.
             * @since Chrome 106
             */
            documentLifecycle: extensionTypes.DocumentLifecycle;
            /** True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired. */
            errorOccurred: boolean;
            /** The type of frame the navigation occurred in. */
            frameType: extensionTypes.FrameType;
            /**
             * A UUID of the parent document owning this frame. This is not set if there is no parent.
             * @since Chrome 106
             */
            parentDocumentId?: string | undefined;
            /** The ID of the parent frame, or `-1` if this is the main frame. */
            parentFrameId: number;
        }

        export interface GetAllFrameDetails {
            /** The ID of the tab. */
            tabId: number;
        }

        /** A list of frames in the given tab, null if the specified tab ID is invalid. */
        export interface GetAllFrameResultDetails extends GetFrameResultDetails {
            /** The ID of the process that runs the renderer for this frame. */
            processId: number;
            /** The ID of the frame. 0 indicates that this is the main frame; a positive value indicates the ID of a subframe. */
            frameId: number;
        }

        export interface WebNavigationReplacementCallbackDetails {
            /** The ID of the tab that was replaced. */
            replacedTabId: number;
            /** The ID of the tab that replaced the old tab. */
            tabId: number;
            /** The time when the replacement happened, in milliseconds since the epoch. */
            timeStamp: number;
        }

        export interface WebNavigationBaseCallbackDetails {
            /** The lifecycle the document is in. */
            documentLifecycle: extensionTypes.DocumentLifecycle;
            /** 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique within a tab. */
            frameId: number;
            /** The type of frame the navigation occurred in. */
            frameType: extensionTypes.FrameType;
            /** A UUID of the parent document owning this frame. This is not set if there is no parent. */
            parentDocumentId?: string;
            /** The ID of the parent frame, or `-1` if this is the main frame. */
            parentFrameId: number;
            /** The ID of the process that runs the renderer for this frame. */
            processId: number;
            /** The ID of the tab in which the navigation occurs. */
            tabId: number;
            /** The time when the browser was about to start the navigation, in milliseconds since the epoch */
            timeStamp: number;
            url: string;
        }

        export interface WebNavigationFramedCallbackDetails extends WebNavigationBaseCallbackDetails {
            /**
             * A UUID of the document loaded.
             * @since Chrome 106
             */
            documentId: string;
        }

        export interface WebNavigationFramedErrorCallbackDetails extends WebNavigationBaseCallbackDetails {
            /**
             * A UUID of the document loaded.
             * @since Chrome 106
             */
            documentId: string;
            /** The error description. */
            error: string;
        }

        export interface WebNavigationSourceCallbackDetails {
            /** The ID of the frame with sourceTabId in which the navigation is triggered. 0 indicates the main frame. */
            sourceFrameId: number;
            /** The ID of the process that runs the renderer for the source frame. */
            sourceProcessId: number;
            /** The ID of the tab in which the navigation is triggered. */
            sourceTabId: number;
            /** The ID of the tab in which the url is opened */
            tabId: number;
            /** The time when the browser was about to create a new view, in milliseconds since the epoch. */
            timeStamp: number;
            /** The URL to be opened in the new window. */
            url: string;
        }

        export interface WebNavigationTransitionCallbackDetails extends WebNavigationBaseCallbackDetails {
            /**
             * A UUID of the document loaded.
             * @since Chrome 106
             */
            documentId: string;
            /** Cause of the navigation. */
            transitionType: `${TransitionType}`;
            /** A list of transition qualifiers.*/
            transitionQualifiers: `${TransitionQualifier}`[];
        }

        export interface WebNavigationEventFilter {
            /** Conditions that the URL being navigated to must satisfy. The 'schemes' and 'ports' fields of UrlFilter are ignored for this event. */
            url: chrome.events.UrlFilter[];
        }

        interface WebNavigationEvent<T extends (...args: any) => void>
            extends Omit<chrome.events.Event<T>, "addListener">
        {
            addListener(callback: T, filters?: WebNavigationEventFilter): void;
        }

        /**
         * Retrieves information about the given frame. A frame refers to an <iframe> or a <frame> of a web page and is identified by a tab ID and a frame ID.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 93.
         * @param details Information about the frame to retrieve information about.
         */
        export function getFrame(
            details: GetFrameDetails,
        ): Promise<GetFrameResultDetails | null>;
        export function getFrame(
            details: GetFrameDetails,
            callback: (details: GetFrameResultDetails | null) => void,
        ): void;

        /**
         * Retrieves information about all frames of a given tab.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 93.
         * @param details Information about the tab to retrieve all frames from.
         */
        export function getAllFrames(
            details: GetAllFrameDetails,
        ): Promise<GetAllFrameResultDetails[] | null>;
        export function getAllFrames(
            details: GetAllFrameDetails,
            callback: (details: GetAllFrameResultDetails[] | null) => void,
        ): void;

        /** Fired when the reference fragment of a frame was updated. All future events for that frame will use the updated URL. */
        export const onReferenceFragmentUpdated: WebNavigationEvent<
            (details: WebNavigationTransitionCallbackDetails) => void
        >;

        /** Fired when a document, including the resources it refers to, is completely loaded and initialized. */
        export const onCompleted: WebNavigationEvent<(details: WebNavigationFramedCallbackDetails) => void>;

        // /** Fired when the frame's history was updated to a new URL. All future events for that frame will use the updated URL. */
        export const onHistoryStateUpdated: WebNavigationEvent<
            (details: WebNavigationTransitionCallbackDetails) => void
        >;

        /** Fired when a new window, or a new tab in an existing window, is created to host a navigation. */
        export const onCreatedNavigationTarget: WebNavigationEvent<
            (details: WebNavigationSourceCallbackDetails) => void
        >;

        /** Fired when the contents of the tab is replaced by a different (usually previously pre-rendered) tab*/
        export const onTabReplaced: events.Event<(details: WebNavigationReplacementCallbackDetails) => void>;

        /** Fired when a navigation is about to occur. */
        export const onBeforeNavigate: WebNavigationEvent<(details: WebNavigationBaseCallbackDetails) => void>;

        /** Fired when a navigation is committed. The document (and the resources it refers to, such as images and subframes) might still be downloading, but at least part of the document has been received from the server and the browser has decided to switch to the new document. */
        export const onCommitted: WebNavigationEvent<(details: WebNavigationTransitionCallbackDetails) => void>;

        /** Fired when the page's DOM is fully constructed, but the referenced resources may not finish loading. */
        export const onDOMContentLoaded: WebNavigationEvent<(details: WebNavigationFramedCallbackDetails) => void>;

        /** Fired when an error occurs and the navigation is aborted. This can happen if either a network error occurred, or the user aborted the navigation. */
        export const onErrorOccurred: WebNavigationEvent<(details: WebNavigationFramedErrorCallbackDetails) => void>;
    }

    ////////////////////
    // Web Request
    ////////////////////
    /**
     * Use the `chrome.webRequest` API to observe and analyze traffic and to intercept, block, or modify requests in-flight.
     *
     * Permissions: "webRequest"
     *
     * Manifest: "host_permissions"
     */
    export namespace webRequest {
        interface WebRequestEvent<T extends (...args: any) => void, U extends string[]>
            extends Omit<chrome.events.Event<T>, "addListener">
        {
            addListener(callback: T, filter: RequestFilter, extraInfoSpec?: U | undefined): void;
        }

        export interface AuthCredentials {
            username: string;
            password: string;
        }

        /** An HTTP Header, represented as an object containing a key and either a value or a binaryValue. */
        export interface HttpHeader {
            /** Name of the HTTP header. */
            name: string;
            /** Value of the HTTP header if it can be represented by UTF-8. */
            value?: string | undefined;
            /** Value of the HTTP header if it cannot be represented by UTF-8, stored as individual byte values (0..255). */
            binaryValue?: ArrayBuffer | undefined;
        }

        /** Returns value for event handlers that have the 'blocking' extraInfoSpec applied. Allows the event handler to modify network requests. */
        export interface BlockingResponse {
            /** If true, the request is cancelled. This prevents the request from being sent. This can be used as a response to the onBeforeRequest, onBeforeSendHeaders, onHeadersReceived and onAuthRequired events. */
            cancel?: boolean | undefined;
            /** Only used as a response to the onBeforeRequest and onHeadersReceived events. If set, the original request is prevented from being sent/completed and is instead redirected to the given URL. Redirections to non-HTTP schemes such as `data:` are allowed. Redirects initiated by a redirect action use the original request method for the redirect, with one exception: If the redirect is initiated at the onHeadersReceived stage, then the redirect will be issued using the GET method. Redirects from URLs with `ws://` and `wss://` schemes are **ignored**. */
            redirectUrl?: string | undefined;
            /** Only used as a response to the onHeadersReceived event. If set, the server is assumed to have responded with these response headers instead. Only return `responseHeaders` if you really want to modify the headers in order to limit the number of conflicts (only one extension may modify `responseHeaders` for each request). */
            responseHeaders?: HttpHeader[] | undefined;
            /** Only used as a response to the onAuthRequired event. If set, the request is made using the supplied credentials. */
            authCredentials?: AuthCredentials | undefined;
            /** Only used as a response to the onBeforeSendHeaders event. If set, the request is made with these request headers instead. */
            requestHeaders?: HttpHeader[] | undefined;
        }

        /**
         * Contains data passed within form data. For urlencoded form it is stored as string if data is utf-8 string and as ArrayBuffer otherwise. For form-data it is ArrayBuffer. If form-data represents uploading file, it is string with filename, if the filename is provided.
         * @since Chrome 66
         */
        export type FormDataItem = string | ArrayBuffer;

        /** @since Chrome 70 */
        export enum IgnoredActionType {
            AUTH_CREDENTIALS = "auth_credentials",
            REDIRECT = "redirect",
            REQUEST_HEADERS = "request_headers",
            RESPONSE_HEADERS = "response_headers",
        }

        /** @since Chrome 44 */
        export enum OnAuthRequiredOptions {
            /** Specifies that the response headers should be included in the event. */
            RESPONSE_HEADERS = "responseHeaders",
            /** Specifies the request is blocked until the callback function returns. */
            BLOCKING = "blocking",
            /** Specifies that the callback function is handled asynchronously. */
            ASYNC_BLOCKING = "asyncBlocking",
            /** Specifies that headers can violate Cross-Origin Resource Sharing (CORS). */
            EXTRA_HEADERS = "extraHeaders",
        }

        /** @since Chrome 44 */
        export enum OnBeforeRedirectOptions {
            /** Specifies that the response headers should be included in the event. */
            RESPONSE_HEADERS = "responseHeaders",
            /** Specifies that headers can violate Cross-Origin Resource Sharing (CORS). */
            EXTRA_HEADERS = "extraHeaders",
        }

        /** @since Chrome 44 */
        export enum OnBeforeRequestOptions {
            /** Specifies the request is blocked until the callback function returns. */
            BLOCKING = "blocking",
            /** Specifies that the request body should be included in the event. */
            REQUEST_BODY = "requestBody",
            /** Specifies that headers can violate Cross-Origin Resource Sharing (CORS). */
            EXTRA_HEADERS = "extraHeaders",
        }

        /** @since Chrome 44 */
        export enum OnBeforeSendHeadersOptions {
            /** Specifies that the request header should be included in the event. */
            REQUEST_HEADERS = "requestHeaders",
            /** Specifies the request is blocked until the callback function returns. */
            BLOCKING = "blocking",
            /** Specifies that headers can violate Cross-Origin Resource Sharing (CORS). */
            EXTRA_HEADERS = "extraHeaders",
        }

        /** @since Chrome 44 */
        export enum OnCompletedOptions {
            /** Specifies that the response headers should be included in the event. */
            RESPONSE_HEADERS = "responseHeaders",
            /** Specifies that headers can violate Cross-Origin Resource Sharing (CORS). */
            EXTRA_HEADERS = "extraHeaders",
        }

        /** @since Chrome 44 */
        export enum OnErrorOccurredOptions {
            /** Specifies that headers can violate Cross-Origin Resource Sharing (CORS). */
            EXTRA_HEADERS = "extraHeaders",
        }

        /** @since Chrome 44 */
        export enum OnHeadersReceivedOptions {
            /** Specifies the request is blocked until the callback function returns. */
            BLOCKING = "blocking",
            /** Specifies that headers can violate Cross-Origin Resource Sharing (CORS). */
            EXTRA_HEADERS = "extraHeaders",
            /** Specifies that the response headers should be included in the event. */
            RESPONSE_HEADERS = "responseHeaders",
            /** Specifies that the SecurityInfo should be included in the event. */
            SECURITY_INFO = "securityInfo",
            /** Specifies that the SecurityInfo with raw bytes of certificates should be included in the event. */
            SECURITY_INFO_RAW_DER = "securityInfoRawDer",
        }

        /** @since Chrome 44 */
        export enum OnResponseStartedOptions {
            /** Specifies that the response headers should be included in the event. */
            RESPONSE_HEADERS = "responseHeaders",
            /** Specifies that headers can violate Cross-Origin Resource Sharing (CORS). */
            EXTRA_HEADERS = "extraHeaders",
        }

        /** @since Chrome 44 */
        export enum OnSendHeadersOptions {
            /** Specifies that the request header should be included in the event. */
            REQUEST_HEADERS = "requestHeaders",
            /** Specifies that headers can violate Cross-Origin Resource Sharing (CORS). */
            EXTRA_HEADERS = "extraHeaders",
        }

        /** An object describing filters to apply to webRequest events. */
        export interface RequestFilter {
            tabId?: number | undefined;
            /** A list of request types. Requests that cannot match any of the types will be filtered out. */
            types?: `${ResourceType}`[] | undefined;
            /** A list of URLs or URL patterns. Requests that cannot match any of the URLs will be filtered out. */
            urls: string[];
            windowId?: number | undefined;
        }

        /** @since Chrome 44 */
        export enum ResourceType {
            /** Specifies the resource as the main frame. */
            MAIN_FRAME = "main_frame",
            /** Specifies the resource as a sub frame. */
            SUB_FRAME = "sub_frame",
            /** Specifies the resource as a stylesheet. */
            STYLESHEET = "stylesheet",
            /** Specifies the resource as a script. */
            SCRIPT = "script",
            /** Specifies the resource as an image. */
            IMAGE = "image",
            /** Specifies the resource as a font. */
            FONT = "font",
            /** Specifies the resource as an object. */
            OBJECT = "object",
            /** Specifies the resource as an XMLHttpRequest. */
            XMLHTTPREQUEST = "xmlhttprequest",
            /** Specifies the resource as a ping. */
            PING = "ping",
            /** Specifies the resource as a Content Security Policy (CSP) report. */
            CSP_REPORT = "csp_report",
            /** Specifies the resource as a media object. */
            MEDIA = "media",
            /** Specifies the resource as a WebSocket. */
            WEBSOCKET = "websocket",
            /** Specifies the resource as a WebBundle. */
            WEBBUNDLE = "webbundle",
            /** Specifies the resource as a type not included in the listed types. */
            OTHER = "other",
        }

        /** @since Chrome 144 */
        export interface SecurityInfo {
            /** A list of certificates */
            certificates: {
                /** Fingerprints of the certificate. */
                fingerprint: {
                    /** sha256 fingerprint of the certificate. */
                    sha256: string;
                };
                /** Raw bytes of DER encoded server certificate */
                rawDER?: ArrayBuffer;
            }[];

            /** State of the connection. One of secure, insecure, broken. */
            state: string;
        }

        /** Contains data uploaded in a URL request. */
        export interface UploadData {
            /** An ArrayBuffer with a copy of the data. */
            bytes?: ArrayBuffer;
            /** A string with the file's path and name. */
            file?: string;
        }

        /** The maximum number of times that `handlerBehaviorChanged` can be called per 10 minute sustained interval. `handlerBehaviorChanged` is an expensive function call that shouldn't be called often. */
        export const MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: 20;

        /** Common properties for all webRequest events (except {@link onActionIgnored}). */
        export interface WebRequestDetails {
            /**
             * The UUID of the document making the request.
             * @since Chrome 106
             */
            documentId?: string;
            /**
             * The lifecycle the document is in.
             * @since Chrome 106
             */
            documentLifecycle: extensionTypes.DocumentLifecycle;
            /** The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab. */
            frameId: number;
            /**
             * The type of frame the request occurred in.
             * @since Chrome 106
             */
            frameType: extensionTypes.FrameType;
            /**
             * The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used.
             * @since Chrome 63
             */
            initiator?: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The UUID of the parent document owning this frame. This is not set if there is no parent.
             * @since Chrome 106
             */
            parentDocumentId?: string;
            /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
            parentFrameId: number;
            /** The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request. */
            requestId: string;
            /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
            tabId: number;
            /** The time when this signal is triggered, in milliseconds since the epoch. */
            timeStamp: number;
            /** How the requested resource will be used. */
            type: `${ResourceType}`;
            url: string;
        }

        export interface OnAuthRequiredDetails extends WebRequestDetails {
            /** The server requesting authentication. */
            challenger: {
                host: string;
                port: number;
            };
            /** True for Proxy-Authenticate, false for WWW-Authenticate. */
            isProxy: boolean;
            /** The authentication realm provided by the server, if there is one. */
            realm?: string;
            /** The HTTP response headers that were received along with this response. */
            responseHeaders?: HttpHeader[];
            /** The authentication scheme, e.g. Basic or Digest. */
            scheme: string;
            /**
             * Standard HTTP status code returned by the server.
             * @since Chrome 43
             */
            statusCode: number;
            /** HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers.*/
            statusLine: string;
        }

        export interface OnBeforeRedirectDetails extends WebRequestDetails {
            /** Indicates if this response was fetched from disk cache. */
            fromCache: boolean;
            /** The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address. */
            ip?: string;
            /** The new URL. */
            redirectUrl: string;
            /** The HTTP response headers that were received along with this redirect. */
            responseHeaders?: HttpHeader[];
            /** Standard HTTP status code returned by the server. */
            statusCode: number;
            /** HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers.*/
            statusLine: string;
        }

        export interface OnBeforeRequestDetails
            extends SetPartial<WebRequestDetails, "documentId" | "documentLifecycle" | "frameType">
        {
            /** Contains the HTTP request body data. Only provided if extraInfoSpec contains 'requestBody'. */
            requestBody: {
                /** Errors when obtaining request body data. */
                error?: string;
                /** If the request method is POST and the body is a sequence of key-value pairs encoded in UTF8, encoded as either multipart/form-data, or application/x-www-form-urlencoded, this dictionary is present and for each key contains the list of all values for that key. If the data is of another media type, or if it is malformed, the dictionary is not present. An example value of this dictionary is {'key': \['value1', 'value2'\]}. */
                formData?: { [key: string]: FormDataItem[] };
                /** If the request method is PUT or POST, and the body is not already parsed in formData, then the unparsed request body elements are contained in this array. */
                raw?: UploadData[];
            } | undefined;
        }

        export interface OnBeforeSendHeadersDetails extends WebRequestDetails {
            /** The HTTP request headers that are going to be sent out with this request. */
            requestHeaders?: HttpHeader[];
        }

        export interface OnCompletedDetails extends WebRequestDetails {
            /** Indicates if this response was fetched from disk cache. */
            fromCache: boolean;
            /** The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address. */
            ip?: string;
            /** The HTTP response headers that were received along with this response. */
            responseHeaders?: HttpHeader[];
            /** Standard HTTP status code returned by the server. */
            statusCode: number;
            /** HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers.*/
            statusLine: string;
        }

        export interface OnErrorOccurredDetails extends WebRequestDetails {
            /** The error description. This string is _not_ guaranteed to remain backwards compatible between releases. You must not parse and act based upon its content. */
            error: string;
            /** Indicates if this response was fetched from disk cache. */
            fromCache: boolean;
            /** The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address. */
            ip?: string;
        }

        export interface OnHeadersReceivedDetails extends WebRequestDetails {
            /** The HTTP response headers that have been received with this response. */
            responseHeaders?: HttpHeader[];
            /**
             * Information about the TLS/QUIC connection used for the underlying connection. Only provided if `securityInfo` is specified in the `extraInfoSpec` parameter.
             * @since Chrome 144
             */
            securityInfo?: SecurityInfo;
            /** Standard HTTP status code returned by the server. */
            statusCode: number;
            /** HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers.*/
            statusLine: string;
        }

        export interface OnResponseStartedDetails extends WebRequestDetails {
            /** Indicates if this response was fetched from disk cache. */
            fromCache: boolean;
            /** The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address. */
            ip?: string;
            /** The HTTP response headers that were received along with this response. */
            responseHeaders?: HttpHeader[];
            /** Standard HTTP status code returned by the server. */
            statusCode: number;
            /** HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers. */
            statusLine: string;
        }

        export interface OnSendHeadersDetails extends WebRequestDetails {
            /** The HTTP request headers that have been sent out with this request. */
            requestHeaders?: HttpHeader[];
        }

        /**
         * Needs to be called when the behavior of the webRequest handlers has changed to prevent incorrect handling due to caching. This function call is expensive. Don't call it often.
         * Can return its result via Promise in Manifest V3 or later since Chrome 116.
         */
        export function handlerBehaviorChanged(): Promise<void>;
        export function handlerBehaviorChanged(callback: () => void): void;

        export const onActionIgnored: events.Event<
            (details: {
                // The proposed action which was ignored.
                action: `${IgnoredActionType}`;
                // The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request.
                requestId: string;
            }) => void
        >;

        /** Fired when a request is about to occur. */
        export const onBeforeRequest: WebRequestEvent<
            (details: OnBeforeRequestDetails) => BlockingResponse | undefined,
            `${OnBeforeRequestOptions}`[]
        >;

        /** Fired before sending an HTTP request, once the request headers are available. This may occur after a TCP connection is made to the server, but before any HTTP data is sent. */
        export const onBeforeSendHeaders: WebRequestEvent<
            // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
            (details: OnBeforeSendHeadersDetails) => BlockingResponse | undefined,
            `${OnBeforeSendHeadersOptions}`[]
        >;

        /** Fired just before a request is going to be sent to the server (modifications of previous onBeforeSendHeaders callbacks are visible by the time onSendHeaders is fired). */
        export const onSendHeaders: WebRequestEvent<
            (details: OnSendHeadersDetails) => void,
            `${OnSendHeadersOptions}`[]
        >;

        /** Fired when HTTP response headers of a request have been received. */
        export const onHeadersReceived: WebRequestEvent<
            (details: OnHeadersReceivedDetails) => BlockingResponse | undefined,
            `${OnHeadersReceivedOptions}`[]
        >;

        /**
         * Fired when an authentication failure is received.
         * The listener has three options: it can provide authentication credentials, it can cancel the request and display the error page, or it can take no action on the challenge.
         * If bad user credentials are provided, this may be called multiple times for the same request.
         * Note, only one of `blocking` or `asyncBlocking` modes must be specified in the extraInfoSpec parameter.
         *
         * Requires the `webRequestAuthProvider` permission.
         */
        export const onAuthRequired: WebRequestEvent<
            (
                details: OnAuthRequiredDetails,
                /** @since Chrome 58 */
                asyncCallback?: (response: BlockingResponse) => void,
            ) => BlockingResponse | undefined,
            `${OnAuthRequiredOptions}`[]
        >;
        // export const onAuthRequired: WebAuthenticationChallengeEvent;

        /** Fired when the first byte of the response body is received. For HTTP requests, this means that the status line and response headers are available. */
        export const onResponseStarted: WebRequestEvent<
            (details: OnResponseStartedDetails) => void,
            `${OnResponseStartedOptions}`[]
        >;

        /** Fired when a server-initiated redirect is about to occur. */
        export const onBeforeRedirect: WebRequestEvent<
            (details: OnBeforeRedirectDetails) => void,
            `${OnBeforeRedirectOptions}`[]
        >;

        /** Fired when a request is completed. */
        export const onCompleted: WebRequestEvent<
            (details: OnCompletedDetails) => void,
            `${OnCompletedOptions}`[]
        >;

        /** Fired when an error occurs. */
        export const onErrorOccurred: WebRequestEvent<
            (details: OnErrorOccurredDetails) => void,
            `${OnErrorOccurredOptions}`[]
        >;
    }

    ////////////////////
    // Windows
    ////////////////////
    /**
     * Use the `chrome.windows` API to interact with browser windows. You can use this API to create, modify, and rearrange windows in the browser.
     *
     * Permissions: The chrome.windows API can be used without declaring any permission. However, the "tabs" permission is required in order to populate the url, title, and favIconUrl properties of Tab objects.
     */
    export namespace windows {
        interface WindowsEvent<T extends (...args: any) => void> extends Omit<chrome.events.Event<T>, "addListener"> {
            addListener(callback: T, filter?: {
                windowTypes: `${WindowType}`[];
            }): void;
        }

        export interface Window {
            /** Array of {@link tabs.Tab} objects representing the current tabs in the window. */
            tabs?: chrome.tabs.Tab[] | undefined;
            /** The offset of the window from the top edge of the screen in pixels. In some circumstances a window may not be assigned a `top` property; for example, when querying closed windows from the {@link sessions} API. */
            top?: number | undefined;
            /** The height of the window, including the frame, in pixels. In some circumstances a window may not be assigned a `height` property, for example when querying closed windows from the {@link sessions} API. */
            height?: number | undefined;
            /** The width of the window, including the frame, in pixels. In some circumstances a window may not be assigned a `width` property; for example, when querying closed windows from the {@link sessions} API. */
            width?: number | undefined;
            /** The state of this browser window. */
            state?: `${WindowState}` | undefined;
            /** Whether the window is currently the focused window. */
            focused: boolean;
            /** Whether the window is set to be always on top. */
            alwaysOnTop: boolean;
            /** Whether the window is incognito. */
            incognito: boolean;
            /** The type of browser window this is. */
            type?: `${WindowType}` | undefined;
            /** The ID of the window. Window IDs are unique within a browser session. In some circumstances a window may not be assigned an `ID` property; for example, when querying windows using the {@link sessions} API, in which case a session ID may be present. */
            id?: number | undefined;
            /** The offset of the window from the left edge of the screen in pixels. In some circumstances a window may not be assigned a `left` property; for example, when querying closed windows from the {@link sessions} API. */
            left?: number | undefined;
            /** The session ID used to uniquely identify a window, obtained from the {@link sessions} API. */
            sessionId?: string | undefined;
        }

        /** @since Chrome 88 */
        export interface QueryOptions {
            /** If true, the {@link windows.Window} object has a `tabs` property that contains a list of the {@link tabs.Tab} objects. The `Tab` objects only contain the `url`, `pendingUrl`, `title`, and `favIconUrl` properties if the extension's manifest file includes the `"tabs"` permission. */
            populate?: boolean | undefined;
            /** If set, the {@link windows.Window} returned is filtered based on its type. If unset, the default filter is set to `['normal', 'popup']`. */
            windowTypes?: `${WindowType}`[] | undefined;
        }

        export interface CreateData {
            /** The ID of the tab to add to the new window. */
            tabId?: number | undefined;
            /** A URL or array of URLs to open as tabs in the window. Fully-qualified URLs must include a scheme, e.g., 'http://www.google.com', not 'www.google.com'. Non-fully-qualified URLs are considered relative within the extension. Defaults to the New Tab Page. */
            url?: string | string[] | undefined;
            /** The number of pixels to position the new window from the top edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels. */
            top?: number | undefined;
            /** The height in pixels of the new window, including the frame. If not specified, defaults to a natural height. */
            height?: number | undefined;
            /** The width in pixels of the new window, including the frame. If not specified, defaults to a natural width. */
            width?: number | undefined;
            /** If `true`, opens an active window. If `false`, opens an inactive window. */
            focused?: boolean | undefined;
            /** Whether the new window should be an incognito window. */
            incognito?: boolean | undefined;
            /** Specifies what type of browser window to create. */
            type?: `${CreateType}` | undefined;
            /** The number of pixels to position the new window from the left edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels. */
            left?: number | undefined;
            /**
             * The initial state of the window. The `minimized`, `maximized`, and `fullscreen` states cannot be combined with `left`, `top`, `width`, or `height`.
             * @since Chrome 44
             */
            state?: `${WindowState}` | undefined;
            /**
             * If `true`, the newly-created window's 'window.opener' is set to the caller and is in the same [unit of related browsing contexts](https://www.w3.org/TR/html51/browsers.html#unit-of-related-browsing-contexts) as the caller.
             * @since Chrome 64
             */
            setSelfAsOpener?: boolean | undefined;
        }

        export interface UpdateInfo {
            /** The offset from the top edge of the screen to move the window to in pixels. This value is ignored for panels. */
            top?: number | undefined;
            /** If `true`, causes the window to be displayed in a manner that draws the user's attention to the window, without changing the focused window. The effect lasts until the user changes focus to the window. This option has no effect if the window already has focus. Set to `false` to cancel a previous `drawAttention` request. */
            drawAttention?: boolean | undefined;
            /** The height to resize the window to in pixels. This value is ignored for panels. */
            height?: number | undefined;
            /** The width to resize the window to in pixels. This value is ignored for panels. */
            width?: number | undefined;
            /** The new state of the window. The 'minimized', 'maximized', and 'fullscreen' states cannot be combined with 'left', 'top', 'width', or 'height'. */
            state?: `${WindowState}` | undefined;
            /** If `true`, brings the window to the front; cannot be combined with the state 'minimized'. If `false`, brings the next window in the z-order to the front; cannot be combined with the state 'fullscreen' or 'maximized'. */
            focused?: boolean | undefined;
            /** The offset from the left edge of the screen to move the window to in pixels. This value is ignored for panels. */
            left?: number | undefined;
        }

        /**
         * Specifies what type of browser window to create.
         * 'panel' is deprecated and is available only to existing whitelisted extensions on Chrome OS.
         * @since Chrome 44
         */
        export enum CreateType {
            /** Specifies the window as a standard window. */
            NORMAL = "normal",
            /** Specifies the window as a popup window. */
            POPUP = "popup",
            /** @deprecated Specifies the window as a panel. */
            PANEL = "panel",
        }

        /**
         * The state of this browser window. In some circumstances a window may not be assigned a `state` property; for example, when querying closed windows from the {@link sessions} API.
         * @since Chrome 44
         */
        export enum WindowState {
            /** Normal window state (not minimized, maximized, or fullscreen). */
            NORMAL = "normal",
            /** Minimized window state. */
            MINIMIZED = "minimized",
            /** Maximized window state. */
            MAXIMIZED = "maximized",
            /** Fullscreen window state. */
            FULLSCREEN = "fullscreen",
            /** Locked fullscreen window state. This fullscreen state cannot be exited by user action and is available only to allowlisted extensions on Chrome OS. */
            LOCKED_FULLSCREEN = "locked-fullscreen",
        }

        /**
         * The type of browser window this is. In some circumstances a window may not be assigned a `type` property; for example, when querying closed windows from the {@link sessions} API.
         * @since Chrome 44
         */
        export enum WindowType {
            /** A normal browser window. */
            NORMAL = "normal",
            /** A browser popup. */
            POPUP = "popup",
            /** @deprecated A Chrome App panel-style window. Extensions can only see their own panel windows. */
            PANEL = "panel",
            /** @deprecated A Chrome App window. Extensions can only see their app own windows. */
            APP = "app",
            /** A Developer Tools window. */
            DEVTOOLS = "devtools",
        }

        /** The windowId value that represents the current window. */
        export const WINDOW_ID_CURRENT: -2;

        /** The windowId value that represents the absence of a Chrome browser window */
        export const WINDOW_ID_NONE: -1;

        /**
         * Gets details about a window.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function get(windowId: number, queryOptions?: QueryOptions): Promise<Window>;
        export function get(windowId: number, callback: (window: Window) => void): void;
        export function get(
            windowId: number,
            queryOptions: QueryOptions | undefined,
            callback: (window: Window) => void,
        ): void;

        /**
         * Gets the current window.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function getCurrent(queryOptions?: QueryOptions): Promise<Window>;
        export function getCurrent(callback: (window: Window) => void): void;
        export function getCurrent(queryOptions: QueryOptions | undefined, callback: (window: Window) => void): void;

        /**
         * Creates (opens) a new browser window with any optional sizing, position, or default URL provided.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function create(createData?: CreateData): Promise<Window | undefined>;
        export function create(callback: (window?: Window) => void): void;
        export function create(createData: CreateData | undefined, callback: (window?: Window) => void): void;

        /**
         * Gets all windows.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function getAll(queryOptions?: QueryOptions): Promise<Window[]>;
        export function getAll(callback: (windows: Window[]) => void): void;
        export function getAll(queryOptions: QueryOptions | undefined, callback: (windows: Window[]) => void): void;

        /**
         * Updates the properties of a window. Specify only the properties that to be changed; unspecified properties are unchanged.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function update(windowId: number, updateInfo: UpdateInfo): Promise<Window>;
        export function update(windowId: number, updateInfo: UpdateInfo, callback: (window: Window) => void): void;

        /**
         * Removes (closes) a window and all the tabs inside it.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function remove(windowId: number): Promise<void>;
        export function remove(windowId: number, callback: () => void): void;

        /**
         * Gets the window that was most recently focused — typically the window 'on top'.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 88.
         */
        export function getLastFocused(queryOptions?: QueryOptions): Promise<Window>;
        export function getLastFocused(callback: (window: Window) => void): void;
        export function getLastFocused(
            queryOptions: QueryOptions | undefined,
            callback: (window: Window) => void,
        ): void;

        /** Fired when a window is removed (closed). */
        export const onRemoved: WindowsEvent<(windowId: number) => void>;

        /** Fired when a window is created. */
        export const onCreated: WindowsEvent<(window: Window) => void>;

        /** Fired when the currently focused window changes. Returns `chrome.windows.WINDOW_ID_NONE` if all Chrome windows have lost focus. **Note:** On some Linux window managers, `WINDOW_ID_NONE` is always sent immediately preceding a switch from one Chrome window to another. */
        export const onFocusChanged: WindowsEvent<(windowId: number) => void>;

        /**
         * Fired when a window has been resized; this event is only dispatched when the new bounds are committed, and not for in-progress changes.
         * @since Chrome 86
         */
        export const onBoundsChanged: events.Event<(window: Window) => void>;
    }

    ////////////////////
    // declarativeNetRequest
    ////////////////////
    /**
     * The `chrome.declarativeNetRequest` API is used to block or modify network requests by specifying declarative rules. This lets extensions modify network requests without intercepting them and viewing their content, thus providing more privacy.
     *
     * Permissions: "declarativeNetRequest", "declarativeNetRequestWithHostAccess", "declarativeNetRequestFeedback"
     *
     * Manifest: "host_permissions"
     * @since Chrome 84
     */
    export namespace declarativeNetRequest {
        /** Ruleset ID for the dynamic rules added by the extension. */
        export const DYNAMIC_RULESET_ID: "_dynamic";

        /**
         * Time interval within which `MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL getMatchedRules` calls can be made, specified in minutes.
         * Additional calls will fail immediately and set {@link runtime.lastError}.
         * Note: `getMatchedRules` calls associated with a user gesture are exempt from the quota.
         */
        export const GETMATCHEDRULES_QUOTA_INTERVAL: 10;

        /**
         * The minimum number of static rules guaranteed to an extension across its enabled static rulesets.
         * Any rules above this limit will count towards the global rule limit.
         * @since Chrome 89
         */
        export const GUARANTEED_MINIMUM_STATIC_RULES: 30000;

        /** The number of times `getMatchedRules` can be called within a period of `GETMATCHEDRULES_QUOTA_INTERVAL`. */
        export const MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL: 20;

        /** The maximum number of dynamic rules that an extension can add. */
        export const MAX_NUMBER_OF_DYNAMIC_RULES: 30000;

        /**
         * The maximum number of static `Rulesets` an extension can enable at any one time.
         * @since Chrome 94
         */
        export const MAX_NUMBER_OF_ENABLED_STATIC_RULESETS: 50;

        /** The maximum number of combined dynamic and session scoped rules an extension can add. */
        export const MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES: 5000;

        /**
         * The maximum number of regular expression rules that an extension can add.
         * This limit is evaluated separately for the set of dynamic rules and those specified in the rule resources file.
         */
        export const MAX_NUMBER_OF_REGEX_RULES: 1000;

        /**
         * The maximum number of session scoped rules that an extension can add.
         * @since Chrome 120
         */
        export const MAX_NUMBER_OF_SESSION_RULES: 5000;

        /** The maximum number of static `Rulesets` an extension can specify as part of the `"rule_resources"` manifest key. */
        export const MAX_NUMBER_OF_STATIC_RULESETS: 100;

        /**
         * The maximum number of "unsafe" dynamic rules that an extension can add.
         * @since Chrome 120
         */
        export const MAX_NUMBER_OF_UNSAFE_DYNAMIC_RULES: 5000;

        /**
         * The maximum number of "unsafe" session scoped rules that an extension can add.
         * @since Chrome 120
         */
        export const MAX_NUMBER_OF_UNSAFE_SESSION_RULES: 5000;

        /**
         * Ruleset ID for the session-scoped rules added by the extension.
         * @since Chrome 90
         */
        export const SESSION_RULESET_ID: "_session";

        /**
         * This describes the HTTP request method of a network request.
         * @since Chrome 91
         */
        export enum RequestMethod {
            CONNECT = "connect",
            DELETE = "delete",
            GET = "get",
            HEAD = "head",
            OPTIONS = "options",
            PATCH = "patch",
            POST = "post",
            PUT = "put",
            OTHER = "other",
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
            WEBTRANSPORT = "webtransport",
            WEBBUNDLE = "webbundle",
            OTHER = "other",
        }

        /** Describes the kind of action to take if a given RuleCondition matches. */
        export enum RuleActionType {
            /** Block the network request. */
            BLOCK = "block",
            /** Redirect the network request. */
            REDIRECT = "redirect",
            /** Allow the network request. The request won't be intercepted if there is an allow rule which matches it. */
            ALLOW = "allow",
            /** Upgrade the network request url's scheme to https if the request is http or ftp. */
            UPGRADE_SCHEME = "upgradeScheme",
            /** Modify request/response headers from the network request. */
            MODIFY_HEADERS = "modifyHeaders",
            /** Allow all requests within a frame hierarchy, including the frame request itself. */
            ALLOW_ALL_REQUESTS = "allowAllRequests",
        }

        /**
         * Describes the reason why a given regular expression isn't supported.
         * @since Chrome 87
         */
        export enum UnsupportedRegexReason {
            /** The regular expression is syntactically incorrect, or uses features not available in the RE2 syntax. */
            SYNTAX_ERROR = "syntaxError",
            /** The regular expression exceeds the memory limit. */
            MEMORY_LIMIT_EXCEEDED = "memoryLimitExceeded",
        }

        /**
         * This describes whether the request is first or third party to the frame in which it originated.
         * A request is said to be first party if it has the same domain (eTLD+1) as the frame in which the request originated.
         */
        export enum DomainType {
            /** The network request is first party to the frame in which it originated. */
            FIRST_PARTY = "firstParty",
            /* The network request is third party to the frame in which it originated. */
            THIRD_PARTY = "thirdParty",
        }

        /**
         * This describes the possible operations for a "modifyHeaders" rule.
         * @since Chrome 86
         */
        export enum HeaderOperation {
            /** Adds a new entry for the specified header. When modifying the headers of a request, this operation is only supported for specific headers. */
            APPEND = "append",
            /** Sets a new value for the specified header, removing any existing headers with the same name. */
            SET = "set",
            /** Removes all entries for the specified header. */
            REMOVE = "remove",
        }

        export interface RequestDetails {
            /**
             * The unique identifier for the frame's document, if this request is for a frame.
             * @since Chrome 106
             */
            documentId?: string | undefined;
            /**
             * The lifecycle of the frame's document, if this request is for a frame.
             * @since Chrome 106
             */
            documentLifecycle?: extensionTypes.DocumentLifecycle | undefined;
            /** The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab. */
            frameId: number;
            /**
             * The type of the frame, if this request is for a frame.
             * @since Chrome 106
             */
            frameType?: extensionTypes.FrameType | undefined;
            /** The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used. */
            initiator?: string | undefined;
            /** Standard HTTP method. */
            method: string;
            /**
             * The unique identifier for the frame's parent document, if this request is for a frame and has a parent.
             * @since Chrome 106
             */
            parentDocumentId?: string | undefined;
            /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
            parentFrameId: number;
            /** The ID of the request. Request IDs are unique within a browser session. */
            requestId: string;
            /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
            tabId: number;
            /** The resource type of the request. */
            type: `${ResourceType}`;
            /** The URL of the request. */
            url: string;
        }

        export interface Rule {
            /** The action to take if this rule is matched. */
            action: RuleAction;
            /** The condition under which this rule is triggered. */
            condition: RuleCondition;
            /** An id which uniquely identifies a rule. Mandatory and should be >= 1. */
            id: number;
            /** Rule priority. Defaults to 1. When specified, should be >= 1. */
            priority?: number | undefined;
        }

        export interface RuleAction {
            /** Describes how the redirect should be performed. Only valid for redirect rules. */
            redirect?: Redirect | undefined;
            /**
             * The request headers to modify for the request. Only valid if RuleActionType is "modifyHeaders".
             * @since Chrome 86
             */
            requestHeaders?: ModifyHeaderInfo[] | undefined;
            /**
             * The response headers to modify for the request. Only valid if RuleActionType is "modifyHeaders".
             * @since Chrome 86
             */
            responseHeaders?: ModifyHeaderInfo[] | undefined;
            /** The type of action to perform. */
            type: `${RuleActionType}`;
        }

        export interface RuleCondition {
            /**
             * Specifies whether the network request is first-party or third-party to the domain from which it originated.
             * If omitted, all requests are accepted.
             */
            domainType?: `${DomainType}` | undefined;

            /**
             * The rule will only match network requests originating from the list of `domains`.
             * @deprecated since Chrome 101. Use {@link initiatorDomains} instead
             */
            domains?: string[] | undefined;

            /**
             * The rule will not match network requests originating from the list of `excludedDomains`.
             * @deprecated since Chrome 101. Use {@link excludedInitiatorDomains} instead
             */
            excludedDomains?: string[] | undefined;

            /**
             * The rule will only match network requests originating from the list of `initiatorDomains`.
             * If the list is omitted, the rule is applied to requests from all domains.
             * An empty list is not allowed.
             *
             * Notes:
             * Sub-domains like "a.example.com" are also allowed.
             * The entries must consist of only ascii characters.
             * Use punycode encoding for internationalized domains.
             * This matches against the request initiator and not the request url.
             * @since Chrome 101
             */
            initiatorDomains?: string[] | undefined;

            /**
             * The rule will not match network requests originating from the list of `excludedInitiatorDomains`.
             * If the list is empty or omitted, no domains are excluded.
             * This takes precedence over `initiatorDomains`.
             *
             * Notes:
             * Sub-domains like "a.example.com" are also allowed.
             * The entries must consist of only ascii characters.
             * Use punycode encoding for internationalized domains.
             * This matches against the request initiator and not the request url.
             * @since Chrome 101
             */
            excludedInitiatorDomains?: string[] | undefined;

            /**
             * The rule will only match network requests when the domain matches one from the list of `requestDomains`.
             * If the list is omitted, the rule is applied to requests from all domains.
             * An empty list is not allowed.
             *
             * Notes:
             * Sub-domains like "a.example.com" are also allowed.
             * The entries must consist of only ascii characters.
             * Use punycode encoding for internationalized domains.
             * @since Chrome 101
             */
            requestDomains?: string[] | undefined;

            /**
             * The rule will not match network requests when the domains matches one from the list of `excludedRequestDomains`.
             * If the list is empty or omitted, no domains are excluded.
             * This takes precedence over `requestDomains`.
             *
             * Notes:
             * Sub-domains like "a.example.com" are also allowed.
             * The entries must consist of only ascii characters.
             * Use punycode encoding for internationalized domains.
             * @since Chrome 101
             */
            excludedRequestDomains?: string[] | undefined;

            /**
             * List of request methods which the rule won't match.
             * Only one of `requestMethods` and `excludedRequestMethods` should be specified.
             * If neither of them is specified, all request methods are matched.
             * @since Chrome 91
             */
            excludedRequestMethods?: `${RequestMethod}`[] | undefined;

            /**
             * List of resource types which the rule won't match.
             * Only one of `resourceTypes` and `excludedResourceTypes` should be specified.
             * If neither of them is specified, all resource types except "main_frame" are blocked.
             */
            excludedResourceTypes?: `${ResourceType}`[] | undefined;

            /**
             * List of {@link tabs.Tab.id} which the rule should not match.
             * An ID of {@link tabs.TAB_ID_NONE} excludes requests which don't originate from a tab.
             * Only supported for session-scoped rules.
             * @since Chrome 92
             */
            excludedTabIds?: number[] | undefined;

            /**
             * The rule will only match network requests when the associated top-level frame's domain matches one from the list of `topDomains`. If the list is omitted, the rule is applied to requests associated with all top-level frame domains. An empty list is not allowed.
             *
             * Notes:
             * - Sub-domains like "a.example.com" are also allowed.
             * - The entries must consist of only ascii characters.
             * - Use punycode encoding for internationalized domains.
             * - Sub-domains of the listed domains are also matched.
             * - For requests with no associated top-level frame (e.g. ServiceWorker initiated requests, the request initiator's domain is considered instead.
             * @since Chrome 141
             */
            topDomains?: string[] | undefined;

            /**
             * The rule will not match network requests when the associated top-level frame's domain matches one from the list of `excludedTopDomains`. If the list is empty or omitted, no domains are excluded. This takes precedence over `topDomains`.
             *
             * Notes:
             * - Sub-domains like "a.example.com" are also allowed.
             * - The entries must consist of only ascii characters.
             * - Use punycode encoding for internationalized domains.
             * - Sub-domains of the listed domains are also excluded.
             * - For requests with no associated top-level frame (e.g. ServiceWorker initiated requests, the request initiator's domain is considered instead.
             * @since Chrome 141
             */
            excludedTopDomains?: string[] | undefined;

            /** Whether the `urlFilter` or `regexFilter` (whichever is specified) is case sensitive. Default is false. */
            isUrlFilterCaseSensitive?: boolean | undefined;

            /**
             * Regular expression to match against the network request url.
             * This follows the RE2 syntax.
             *
             * Note: Only one of `urlFilter` or `regexFilter` can be specified.
             *
             * Note: The `regexFilter` must be composed of only ASCII characters.
             * This is matched against a url where the host is encoded in the punycode format (in case of internationalized domains) and any other non-ascii characters are url encoded in utf-8.
             */
            regexFilter?: string | undefined;

            /**
             * List of HTTP request methods which the rule can match. An empty list is not allowed.
             *
             * Note: Specifying a `requestMethods` rule condition will also exclude non-HTTP(s) requests, whereas specifying `excludedRequestMethods` will not.
             */
            requestMethods?: `${RequestMethod}`[] | undefined;

            /**
             * List of {@link tabs.Tab.id} which the rule should match.
             * An ID of {@link tabs.TAB_ID_NONE} matches requests which don't originate from a tab.
             * An empty list is not allowed. Only supported for session-scoped rules.
             * @since Chrome 92
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
             * Therefore `urlFilter` is composed of the following parts: (optional Left/Domain name anchor) + pattern + (optional Right anchor).
             *
             * If omitted, all urls are matched. An empty string is not allowed.
             *
             * A pattern beginning with || is not allowed. Use instead.
             *
             * Note: Only one of `urlFilter` or `regexFilter` can be specified.
             *
             * Note: The `urlFilter` must be composed of only ASCII characters.
             * This is matched against a url where the host is encoded in the punycode format (in case of internationalized domains) and any other non-ascii characters are url encoded in utf-8.
             * For example, when the request url is http://abc.рф?q=ф, the `urlFilter` will be matched against the url http://abc.xn--p1ai/?q=%D1%84.
             */
            urlFilter?: string | undefined;

            /**
             * List of resource types which the rule can match.
             * An empty list is not allowed.
             *
             * Note: this must be specified for `allowAllRequests` rules and may only include the `sub_frame` and `main_frame` resource types.
             */
            resourceTypes?: `${ResourceType}`[] | undefined;

            /**
             * Rule does not match if the request matches any response header condition in this list (if specified). If both `excludedResponseHeaders` and `responseHeaders` are specified, then the `excludedResponseHeaders` property takes precedence.
             * @since Chrome 128
             */
            excludedResponseHeaders?: HeaderInfo[];

            /**
             * Rule matches if the request matches any response header condition in this list (if specified).
             * @since Chrome 128
             */
            responseHeaders?: HeaderInfo[];
        }

        export interface MatchedRule {
            /** A matching rule's ID. */
            ruleId: number;
            /** ID of the {@link Ruleset} this rule belongs to. For a rule originating from the set of dynamic rules, this will be equal to {@link DYNAMIC_RULESET_ID}. */
            rulesetId: string;
        }

        export interface MatchedRuleInfo {
            rule: MatchedRule;
            /** The tabId of the tab from which the request originated if the tab is still active. Else -1. */
            tabId: number;
            /** The time the rule was matched. Timestamps will correspond to the Javascript convention for times, i.e. number of milliseconds since the epoch. */
            timeStamp: number;
        }

        export interface MatchedRulesFilter {
            /** If specified, only matches rules after the given timestamp. */
            minTimeStamp?: number | undefined;
            /** If specified, only matches rules for the given tab. Matches rules not associated with any active tab if set to -1. */
            tabId?: number | undefined;
        }

        /** @since Chrome 128 */
        export interface HeaderInfo {
            /** If specified, this condition is not matched if the header exists but its value contains at least one element in this list. This uses the same match pattern syntax as `values`. */
            excludedValues?: string[];
            /** The name of the header. This condition matches on the name only if both `values` and `excludedValues` are not specified. */
            header: string;
            /**
             * If specified, this condition matches if the header's value matches at least one pattern in this list. This supports case-insensitive header value matching plus the following constructs:
             *
             * **'\*'** : Matches any number of characters.
             *
             * **'?'** : Matches zero or one character(s).
             *
             * **'\*'** and **'?'** can be escaped with a backslash, e.g. **'\\\*'** and **'\\?'**
             */
            values?: string[];
        }

        /** @since Chrome 86 */
        export interface ModifyHeaderInfo {
            /** The name of the header to be modified. */
            header: string;
            /** The operation to be performed on a header. */
            operation: `${HeaderOperation}`;
            /** The new value for the header. Must be specified for `append` and `set` operations. */
            value?: string | undefined;
        }

        export interface QueryKeyValue {
            key: string;
            /**
             * If true, the query key is replaced only if it's already present. Otherwise, the key is also added if it's missing. Defaults to false.
             * @since Chrome 94
             */
            replaceOnly?: boolean | undefined;
            value: string;
        }

        export interface QueryTransform {
            /** The list of query key-value pairs to be added or replaced. */
            addOrReplaceParams?: QueryKeyValue[] | undefined;
            /** The list of query keys to be removed. */
            removeParams?: string[] | undefined;
        }

        export interface URLTransform {
            /** The new fragment for the request. Should be either empty, in which case the existing fragment is cleared; or should begin with '#'. */
            fragment?: string | undefined;
            /** The new host for the request. */
            host?: string | undefined;
            /** The new password for the request. */
            password?: string | undefined;
            /** The new path for the request. If empty, the existing path is cleared. */
            path?: string | undefined;
            /** The new port for the request. If empty, the existing port is cleared. */
            port?: string | undefined;
            /** The new query for the request. Should be either empty, in which case the existing query is cleared; or should begin with '?'. */
            query?: string | undefined;
            /** Add, remove or replace query key-value pairs. */
            queryTransform?: QueryTransform | undefined;
            /** The new scheme for the request. Allowed values are "http", "https", "ftp" and "chrome-extension". */
            scheme?: string | undefined;
            /** The new username for the request. */
            username?: string | undefined;
        }

        /** @since Chrome 87 */
        export interface RegexOptions {
            /** Whether the `regex` specified is case sensitive. Default is true. */
            isCaseSensitive?: boolean | undefined;
            /** The regular expression to check. */
            regex: string;
            /** Whether the `regex` specified requires capturing. Capturing is only required for redirect rules which specify a `regexSubstitution` action. The default is false. */
            requireCapturing?: boolean | undefined;
        }

        /** @since Chrome 87 */
        export interface IsRegexSupportedResult {
            isSupported: boolean;
            /** Specifies the reason why the regular expression is not supported. Only provided if `isSupported` is false. */
            reason?: `${UnsupportedRegexReason}`;
        }

        /** @since Chrome 89 */
        export interface TabActionCountUpdate {
            /** The amount to increment the tab's action count by. Negative values will decrement the count. */
            increment: number;
            /** The tab for which to update the action count. */
            tabId: number;
        }

        /** @since Chrome 88 */
        export interface ExtensionActionOptions {
            /**
             * Whether to automatically display the action count for a page as the extension's badge text.
             * This preference is persisted across sessions.
             */
            displayActionCountAsBadgeText?: boolean | undefined;
            /** Details of how the tab's action count should be adjusted. */
            tabUpdate?: TabActionCountUpdate | undefined;
        }

        /** @since Chrome 111 */
        export interface GetDisabledRuleIdsOptions {
            /** The id corresponding to a static {@link Ruleset}. */
            rulesetId: string;
        }

        /** @since Chrome 111 */
        export interface GetRulesFilter {
            /** If specified, only rules with matching IDs are included. */
            ruleIds?: number[] | undefined;
        }

        export interface Redirect {
            /** Path relative to the extension directory. Should start with '/'. */
            extensionPath?: string | undefined;
            /**
             * Substitution pattern for rules which specify a `regexFilter`.
             * The first match of `regexFilter` within the url will be replaced with this pattern.
             * Within `regexSubstitution`, backslash-escaped digits (\1 to \9) can be used to insert the corresponding capture groups.
             * \0 refers to the entire matching text.
             */
            regexSubstitution?: string | undefined;
            /** Url transformations to perform. */
            transform?: URLTransform | undefined;
            /** The redirect url. Redirects to JavaScript urls are not allowed. */
            url?: string | undefined;
        }

        /** @since Chrome 87 */
        export interface UpdateRuleOptions {
            /** Rules to add. */
            addRules?: Rule[] | undefined;
            /**
             * IDs of the rules to remove.
             * Any invalid IDs will be ignored.
             */
            removeRuleIds?: number[] | undefined;
        }

        /** @since Chrome 111 */
        export interface UpdateStaticRulesOptions {
            /** Set of ids corresponding to rules in the {@link Ruleset} to disable. */
            disableRuleIds?: number[];
            /** Set of ids corresponding to rules in the {@link Ruleset} to enable. */
            enableRuleIds?: number[];
            /** The id corresponding to a static {@link Ruleset}. */
            rulesetId: string;
        }

        /** @since Chrome 87 */
        export interface UpdateRulesetOptions {
            /** The set of ids corresponding to a static {@link Ruleset} that should be disabled. */
            disableRulesetIds?: string[] | undefined;
            /** The set of ids corresponding to a static {@link Ruleset} that should be enabled. */
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
            /** A non-empty string uniquely identifying the ruleset. IDs beginning with '_' are reserved for internal use. */
            id: string;
            /** The path of the JSON ruleset relative to the extension directory. */
            path: string;
        }

        export interface RulesMatchedDetails {
            /** Rules matching the given filter. */
            rulesMatchedInfo: MatchedRuleInfo[];
        }

        /** @since Chrome 103 */
        export interface TestMatchOutcomeResult {
            /** The rules (if any) that match the hypothetical request. */
            matchedRules: MatchedRule[];
        }

        /** @since Chrome 103 */
        export interface TestMatchRequestDetails {
            /** The initiator URL (if any) for the hypothetical request. */
            initiator?: string;
            /** Standard HTTP method of the hypothetical request. Defaults to "get" for HTTP requests and is ignored for non-HTTP requests. */
            method?: `${RequestMethod}`;
            /**
             * The headers provided by a hypothetical response if the request does not get blocked or redirected before it is sent. Represented as an object which maps a header name to a list of string values. If not specified, the hypothetical response would return empty response headers, which can match rules which match on the non-existence of headers. E.g. `{"content-type": ["text/html; charset=utf-8", "multipart/form-data"]}`
             * @since Chrome 129
             */
            responseHeaders?: { [name: string]: unknown };
            /** The ID of the tab in which the hypothetical request takes place. Does not need to correspond to a real tab ID. Default is -1, meaning that the request isn't related to a tab. */
            tabId?: number;
            /** The resource type of the hypothetical request. */
            type: `${ResourceType}`;
            /** The URL of the hypothetical request. */
            url: string;
        }

        /**
         * Returns the number of static rules an extension can enable before the global static rule limit is reached.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         * @since Chrome 89
         */
        export function getAvailableStaticRuleCount(): Promise<number>;
        export function getAvailableStaticRuleCount(callback: (count: number) => void): void;

        /**
         * Returns the list of static rules in the given {@link Ruleset} that are currently disabled.
         *
         * Can return its result via Promise in Manifest V3.
         * @param options Specifies the ruleset to query.
         * @since Chrome 111
         */
        export function getDisabledRuleIds(options: GetDisabledRuleIdsOptions): Promise<number[]>;
        export function getDisabledRuleIds(
            options: GetDisabledRuleIdsOptions,
            callback: (disabledRuleIds: number[]) => void,
        ): void;

        /**
         * Returns the current set of dynamic rules for the extension. Callers can optionally filter the list of fetched rules by specifying a `filter`.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         * @param filter An object to filter the list of fetched rules.
         */
        export function getDynamicRules(filter?: GetRulesFilter): Promise<Rule[]>;
        export function getDynamicRules(callback: (rules: Rule[]) => void): void;
        export function getDynamicRules(filter: GetRulesFilter | undefined, callback: (rules: Rule[]) => void): void;

        /**
         * Returns the ids for the current set of enabled static rulesets.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         */
        export function getEnabledRulesets(): Promise<string[]>;
        export function getEnabledRulesets(callback: (rulesetIds: string[]) => void): void;

        /**
         * Returns all rules matched for the extension. Callers can optionally filter the list of matched rules by specifying a `filter`. This method is only available to extensions with the `"declarativeNetRequestFeedback"` permission or having the `"activeTab"` permission granted for the `tabId` specified in `filter`. Note: Rules not associated with an active document that were matched more than five minutes ago will not be returned.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         * @param filter An object to filter the list of matched rules.
         */
        export function getMatchedRules(filter?: MatchedRulesFilter): Promise<RulesMatchedDetails>;
        export function getMatchedRules(callback: (details: RulesMatchedDetails) => void): void;
        export function getMatchedRules(
            filter: MatchedRulesFilter | undefined,
            callback: (details: RulesMatchedDetails) => void,
        ): void;

        /**
         * Returns the current set of session scoped rules for the extension. Callers can optionally filter the list of fetched rules by specifying a `filter`.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         * @param filter An object to filter the list of fetched rules.
         * @since Chrome 90
         */
        export function getSessionRules(filter?: GetRulesFilter): Promise<Rule[]>;
        export function getSessionRules(callback: (rules: Rule[]) => void): void;
        export function getSessionRules(filter: GetRulesFilter | undefined, callback: (rules: Rule[]) => void): void;

        /**
         * Checks if the given regular expression will be supported as a `regexFilter` rule condition.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         * @param regexOptions The regular expression to check.
         * @since Chrome 87
         */
        export function isRegexSupported(regexOptions: RegexOptions): Promise<IsRegexSupportedResult>;
        export function isRegexSupported(
            regexOptions: RegexOptions,
            callback: (result: IsRegexSupportedResult) => void,
        ): void;

        /**
         * Configures if the action count for tabs should be displayed as the extension action's badge text and provides a way for that action count to be incremented.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         * @since Chrome 88
         */
        export function setExtensionActionOptions(options: ExtensionActionOptions): Promise<void>;
        export function setExtensionActionOptions(options: ExtensionActionOptions, callback: () => void): void;

        /**
         * Checks if any of the extension's declarativeNetRequest rules would match a hypothetical request. Note: Only available for unpacked extensions as this is only intended to be used during extension development.
         *
         * Can return its result via Promise in Manifest V3.
         * @since Chrome 103
         */
        export function testMatchOutcome(request: TestMatchRequestDetails): Promise<TestMatchOutcomeResult>;
        export function testMatchOutcome(
            request: TestMatchRequestDetails,
            callback: (result: TestMatchOutcomeResult) => void,
        ): void;

        /**
         * Modifies the current set of dynamic rules for the extension. The rules with IDs listed in `options.removeRuleIds` are first removed, and then the rules given in `options.addRules` are added. Notes:
         *
         * *   This update happens as a single atomic operation: either all specified rules are added and removed, or an error is returned.
         * *   These rules are persisted across browser sessions and across extension updates.
         * *   Static rules specified as part of the extension package can not be removed using this function.
         * *   {@link MAX_NUMBER_OF_DYNAMIC_RULES} is the maximum number of dynamic rules an extension can add. The number of [unsafe rules](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#safe_rules) must not exceed {@link MAX_NUMBER_OF_UNSAFE_DYNAMIC_RULES}.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         */
        export function updateDynamicRules(options: UpdateRuleOptions): Promise<void>;
        export function updateDynamicRules(options: UpdateRuleOptions, callback: () => void): void;

        /**
         * Updates the set of enabled static rulesets for the extension. The rulesets with IDs listed in `options.disableRulesetIds` are first removed, and then the rulesets listed in `options.enableRulesetIds` are added.
         * Note that the set of enabled static rulesets is persisted across sessions but not across extension updates, i.e. the `rule_resources` manifest key will determine the set of enabled static rulesets on each extension update.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         */
        export function updateEnabledRulesets(options: UpdateRulesetOptions): Promise<void>;
        export function updateEnabledRulesets(options: UpdateRulesetOptions, callback: () => void): void;

        /**
         * Modifies the current set of session scoped rules for the extension. The rules with IDs listed in `options.removeRuleIds` are first removed, and then the rules given in `options.addRules` are added. Notes:
         *
         * *   This update happens as a single atomic operation: either all specified rules are added and removed, or an error is returned.
         * *   These rules are not persisted across sessions and are backed in memory.
         * *   {@link MAX_NUMBER_OF_SESSION_RULES} is the maximum number of session rules an extension can add.
         *
         * Can return its result via Promise in Manifest V3 or later since Chrome 91.
         * @since Chrome 90
         */
        export function updateSessionRules(options: UpdateRuleOptions): Promise<void>;
        export function updateSessionRules(options: UpdateRuleOptions, callback: () => void): void;

        /**
         * Disables and enables individual static rules in a {@link Ruleset}. Changes to rules belonging to a disabled {@link Ruleset} will take effect the next time that it becomes enabled.
         *
         * Can return its result via Promise in Manifest V3.
         * @since Chrome 111
         */
        export function updateStaticRules(options: UpdateStaticRulesOptions): Promise<void>;
        export function updateStaticRules(options: UpdateStaticRulesOptions, callback?: () => void): void;

        /** Fired when a rule is matched with a request. Only available for unpacked extensions with the `declarativeNetRequestFeedback` permission as this is intended to be used for debugging purposes only. */
        export const onRuleMatchedDebug: events.Event<(info: MatchedRuleInfoDebug) => void>;
    }

    ////////////////////
    // SidePanel
    ////////////////////
    /**
     * Use the `chrome.sidePanel` API to host content in the browser's side panel alongside the main content of a webpage.
     *
     * Permissions: "sidePanel"
     * @since Chrome 114, MV3
     */
    export namespace sidePanel {
        /** @since Chrome 141 */
        export type CloseOptions =
            | {
                /** The tab in which to close the side panel. If a tab-specific side panel is open in the specified tab, it will be closed for that tab. At least one of this or `windowId` must be provided.  */
                tabId: number;
                /** The window in which to close the side panel. If a global side panel is open in the specified window, it will be closed for all tabs in that window where no tab-specific panel is active. At least one of this or `tabId` must be provided. */
                windowId?: number | undefined;
            }
            | {
                /** The tab in which to close the side panel. If a tab-specific side panel is open in the specified tab, it will be closed for that tab. At least one of this or `windowId` must be provided.  */
                tabId?: number | undefined;
                /** The window in which to close the side panel. If a global side panel is open in the specified window, it will be closed for all tabs in that window where no tab-specific panel is active. At least one of this or `tabId` must be provided. */
                windowId: number;
            };

        export interface GetPanelOptions {
            /**
             * If specified, the side panel options for the given tab will be returned.
             * Otherwise, returns the default side panel options (used for any tab that doesn't have specific settings).
             */
            tabId?: number | undefined;
        }

        /** @since Chrome 116 */
        export type OpenOptions =
            & {
                /**
                 * The tab in which to open the side panel.
                 * If the corresponding tab has a tab-specific side panel, the panel will only be open for that tab.
                 * If there is not a tab-specific panel, the global panel will be open in the specified tab and any other tabs without a currently-open tab- specific panel.
                 * This will override any currently-active side panel (global or tab-specific) in the corresponding tab.
                 * At least one of this and `windowId` must be provided. */
                tabId?: number | undefined;
                /**
                 * The window in which to open the side panel.
                 * This is only applicable if the extension has a global (non-tab-specific) side panel or `tabId` is also specified.
                 * This will override any currently-active global side panel the user has open in the given window.
                 * At least one of this and `tabId` must be provided.
                 */
                windowId?: number | undefined;
            }
            & ({
                tabId: number;
            } | {
                windowId: number;
            });

        export interface PanelBehavior {
            /** Whether clicking the extension's icon will toggle showing the extension's entry in the side panel. Defaults to false. */
            openPanelOnActionClick?: boolean | undefined;
        }

        /** @since Chrome 142 */
        export interface PanelClosedInfo {
            /** The path of the local resource within the extension package whose content is displayed in the panel. */
            path: string;
            /** The optional ID of the tab where the side panel was closed. This is provided only when the panel is tab-specific. */
            tabId?: number;
            /** The ID of the window where the side panel was closed. This is available for both global and tab-specific panels. */
            windowId: number;
        }

        /** @since Chrome 140 */
        export interface PanelLayout {
            side: `${Side}`;
        }

        /** @since Chrome 141 */
        export interface PanelOpenedInfo {
            /** The path of the local resource within the extension package whose content is displayed in the panel. */
            path: string;
            /** The optional ID of the tab where the side panel is opened. This is provided only when the panel is tab-specific. */
            tabId?: number;
            /** The ID of the window where the side panel is opened. This is available for both global and tab-specific panels. */
            windowId: number;
        }

        export interface PanelOptions {
            /** Whether the side panel should be enabled. This is optional. The default value is true. */
            enabled?: boolean | undefined;
            /** The path to the side panel HTML file to use. This must be a local resource within the extension package. */
            path?: string | undefined;
            /**
             * If specified, the side panel options will only apply to the tab with this id.
             * If omitted, these options set the default behavior (used for any tab that doesn't have specific settings).
             * Note: if the same path is set for this tabId and the default tabId, then the panel for this tabId will be a different instance than the panel for the default tabId.
             */
            tabId?: number | undefined;
        }

        /**
         * Defines the possible alignment for the side panel in the browser UI.
         * @since Chrome 140
         */
        export enum Side {
            LEFT = "left",
            RIGHT = "right",
        }

        export interface SidePanel {
            /** Developer specified path for side panel display. */
            default_path: string;
        }

        /**
         * Closes the extension's side panel. This is a no-op if the panel is already closed.
         * @param options Specifies the context in which to close the side panel.
         * @since Chrome 141
         */
        export function close(options: CloseOptions): Promise<void>;
        export function close(options: CloseOptions, callback: () => void): void;

        /**
         * Returns the side panel's current layout.
         * @since Chrome 140
         */
        export function getLayout(): Promise<PanelLayout>;
        export function getLayout(callback: (layout: PanelLayout) => void): void;

        /**
         * Returns the active panel configuration.
         *
         * Can return its result via Promise.
         * @param options Specifies the context to return the configuration for.
         */
        export function getOptions(options: GetPanelOptions): Promise<PanelOptions>;
        export function getOptions(options: GetPanelOptions, callback: (options: PanelOptions) => void): void;

        /**
         * Returns the extension's current side panel behavior.
         *
         * Can return its result via Promise.
         */
        export function getPanelBehavior(): Promise<PanelBehavior>;
        export function getPanelBehavior(callback: (behavior: PanelBehavior) => void): void;

        /**
         * Opens the side panel for the extension. This may only be called in response to a user action.
         *
         * Can return its result via Promise.
         * @param options Specifies the context in which to open the side panel.
         * @since Chrome 116
         */
        export function open(options: OpenOptions): Promise<void>;
        export function open(options: OpenOptions, callback: () => void): void;

        /**
         * Configures the side panel.
         *
         * Can return its result via Promise.
         * @param options The configuration options to apply to the panel.
         */
        export function setOptions(options: PanelOptions): Promise<void>;
        export function setOptions(options: PanelOptions, callback: () => void): void;

        /**
         * Configures the extension's side panel behavior. This is an upsert operation.
         *
         * Can return its result via Promise.
         * @param behavior The new behavior to be set.
         */
        export function setPanelBehavior(behavior: PanelBehavior): Promise<void>;
        export function setPanelBehavior(behavior: PanelBehavior, callback: () => void): void;

        /**
         * Fired when the extension's side panel is closed.
         * @since Chrome 142
         */
        const onClosed: events.Event<(info: PanelClosedInfo) => void>;

        /**
         * Fired when the extension's side panel is opened.
         * @since Chrome 141
         */
        const onOpened: events.Event<(info: PanelOpenedInfo) => void>;
    }

    ////////////////////
    // User Scripts
    ////////////////////
    /**
     * Use the `userScripts` API to execute user scripts in the User Scripts context.
     *
     * Permissions: "userScripts"
     * @since Chrome 120, MV3
     */
    export namespace userScripts {
        /** The JavaScript world for a user script to execute within. */
        export enum ExecutionWorld {
            /** Specifies the execution environment of the DOM, which is the execution environment shared with the host page's JavaScript. */
            MAIN = "MAIN",
            /** Specifies the execution environment that is specific to user scripts and is exempt from the page's CSP. */
            USER_SCRIPT = "USER_SCRIPT",
        }

        /** @since Chrome 135 */
        export type InjectionResult<T = unknown> =
            & {
                /** The document associated with the injection. */
                documentId: string;
                /** The frame associated with the injection. */
                frameId: number;
            }
            & (
                | {
                    /** The error, if any */
                    error?: never;
                    /** The result of the script execution. */
                    result: T;
                }
                | {
                    /** The error, if any */
                    error: string;
                    /** The result of the script execution. */
                    result?: never;
                }
            );

        export interface WorldProperties {
            /** Specifies the world csp. The default is the `ISOLATED` world csp. */
            csp?: string | undefined;
            /** Specifies whether messaging APIs are exposed. The default is `false`.*/
            messaging?: boolean | undefined;
            /**
             * Specifies the ID of the specific user script world to update. If not provided, updates the properties of the default user script world. Values with leading underscores (`_`) are reserved.
             * @since Chrome 133
             */
            worldId?: string | undefined;
        }

        export interface UserScriptFilter {
            /** {@link getScripts} only returns scripts with the IDs specified in this list. */
            ids?: string[] | undefined;
        }

        // /** @since Chrome 135 */
        export type InjectionTarget =
            & {
                /** The ID of the tab into which to inject. */
                tabId: number;
            }
            & (
                | {
                    /** Whether the script should inject into all frames within the tab. Defaults to false. */
                    allFrames?: boolean | undefined;
                    /** The IDs of specific documentIds to inject into. */
                    documentIds?: never;
                    /** The IDs of specific frames to inject into. */
                    frameIds?: never;
                }
                | {
                    /** Whether the script should inject into all frames within the tab. Defaults to false. */
                    allFrames?: false | undefined;
                    /** The IDs of specific documentIds to inject into. */
                    documentIds?: never;
                    /** The IDs of specific frames to inject into. */
                    frameIds: number[] | undefined;
                }
                | {
                    /** Whether the script should inject into all frames within the tab. Defaults to false. */
                    allFrames?: false | undefined;
                    /** The IDs of specific documentIds to inject into. */
                    documentIds?: string[] | undefined;
                    /** The IDs of specific frames to inject into. */
                    frameIds?: never;
                }
            );

        export interface RegisteredUserScript {
            /** If true, it will inject into all frames, even if the frame is not the top-most frame in the tab. Each frame is checked independently for URL requirements; it will not inject into child frames if the URL requirements are not met. Defaults to false, meaning that only the top frame is matched. */
            allFrames?: boolean | undefined;
            /** Specifies wildcard patterns for pages this user script will NOT be injected into. */
            excludeGlobs?: string[] | undefined;
            /**Excludes pages that this user script would otherwise be injected into. See Match Patterns for more details on the syntax of these strings. */
            excludeMatches?: string[] | undefined;
            /** The ID of the user script specified in the API call. This property must not start with a '_' as it's reserved as a prefix for generated script IDs. */
            id: string;
            /** Specifies wildcard patterns for pages this user script will be injected into. */
            includeGlobs?: string[] | undefined;
            /** The list of ScriptSource objects defining sources of scripts to be injected into matching pages. This property must be specified for {@link register}, and when specified it must be a non-empty array.*/
            js: ScriptSource[];
            /** Specifies which pages this user script will be injected into. See Match Patterns for more details on the syntax of these strings. This property must be specified for {@link register}. */
            matches?: string[] | undefined;
            /** Specifies when JavaScript files are injected into the web page. The preferred and default value is `document_idle` */
            runAt?: extensionTypes.RunAt | undefined;
            /** The JavaScript execution environment to run the script in. The default is `USER_SCRIPT` */
            world?: `${ExecutionWorld}` | undefined;
            /**
             * Specifies the user script world ID to execute in. If omitted, the script will execute in the default user script world. Only valid if `world` is omitted or is `USER_SCRIPT`. Values with leading underscores (`_`) are reserved.
             * @since Chrome 133
             */
            worldId?: string | undefined;
        }

        /** @since Chrome 135 */
        export interface UserScriptInjection {
            /** Whether the injection should be triggered in the target as soon as possible. Note that this is not a guarantee that injection will occur prior to page load, as the page may have already loaded by the time the script reaches the target. */
            injectImmediately?: boolean | undefined;
            /** The list of ScriptSource objects defining sources of scripts to be injected into the target. */
            js: [ScriptSource, ...ScriptSource[]];
            /** Details specifying the target into which to inject the script. */
            target: InjectionTarget;
            /** The JavaScript "world" to run the script in. The default is `USER_SCRIPT`. */
            world?: `${ExecutionWorld}` | undefined;
            /** Specifies the user script world ID to execute in. If omitted, the script will execute in the default user script world. Only valid if `world` is omitted or is `USER_SCRIPT`. Values with leading underscores (`_`) are reserved. */
            worldId?: string | undefined;
        }

        export type ScriptSource = {
            /** A string containing the JavaScript code to inject. */
            code: string;
            /** The path of the JavaScript file to inject relative to the extension's root directory. */
            file?: undefined;
        } | {
            /** A string containing the JavaScript code to inject. */
            code?: undefined;
            /** The path of the JavaScript file to inject relative to the extension's root directory. */
            file: string;
        };

        /**
         * Configures the `USER_SCRIPT` execution environment.
         *
         * Can return its result via Promise.
         * @param properties Contains the user script world configuration.
         */
        export function configureWorld(properties: WorldProperties): Promise<void>;
        export function configureWorld(properties: WorldProperties, callback: () => void): void;

        /**
         * Returns all dynamically-registered user scripts for this extension.
         *
         * Can return its result via Promise.
         * @param filter If specified, this method returns only the user scripts that match it.
         */
        export function getScripts(filter?: UserScriptFilter): Promise<RegisteredUserScript[]>;
        export function getScripts(callback: (scripts: RegisteredUserScript[]) => void): void;
        export function getScripts(
            filter: UserScriptFilter | undefined,
            callback: (scripts: RegisteredUserScript[]) => void,
        ): void;

        /**
         * Retrieves all registered world configurations.
         *
         * Can return its result via Promise.
         * @since Chrome 133
         */
        export function getWorldConfigurations(): Promise<WorldProperties[]>;
        export function getWorldConfigurations(callback: (worlds: WorldProperties[]) => void): void;

        /**
         * Injects a script into a target context. By default, the script will be run at `document_idle`, or immediately if the page has already loaded. If the `injectImmediately` property is set, the script will inject without waiting, even if the page has not finished loading. If the script evaluates to a promise, the browser will wait for the promise to settle and return the resulting value.
         *
         * Can return its result via Promise.
         * @since Chrome 135
         */
        export function execute<T>(injection: UserScriptInjection): Promise<InjectionResult<T>[]>;
        export function execute<T>(
            injection: UserScriptInjection,
            callback: (result: InjectionResult<T>[]) => void,
        ): void;

        /**
         * Registers one or more user scripts for this extension.
         *
         * Can return its result via Promise.
         * @param scripts - Contains a list of user scripts to be registered.
         */
        export function register(scripts: RegisteredUserScript[]): Promise<void>;
        export function register(scripts: RegisteredUserScript[], callback: () => void): void;

        /**
         * Resets the configuration for a user script world. Any scripts that inject into the world with the specified ID will use the default world configuration.
         * @param worldId The ID of the user script world to reset. If omitted, resets the default world's configuration.
         */
        export function resetWorldConfiguration(worldId?: string): Promise<void>;
        export function resetWorldConfiguration(callback: () => void): void;
        export function resetWorldConfiguration(worldId: string | undefined, callback: () => void): void;

        /**
         * Unregisters all dynamically-registered user scripts for this extension.
         *
         * Can return its result via Promise.
         * @param filter If specified, this method unregisters only the user scripts that match it.
         */
        export function unregister(filter?: UserScriptFilter): Promise<void>;
        export function unregister(callback: () => void): void;
        export function unregister(filter: UserScriptFilter | undefined, callback: () => void): void;

        /**
         * Updates one or more user scripts for this extension.
         *
         * Can return its result via Promise.
         * @param scripts Contains a list of user scripts to be updated. A property is only updated for the existing script if it is specified in this object. If there are errors during script parsing/file validation, or if the IDs specified do not correspond to a fully registered script, then no scripts are updated.
         */
        export function update(scripts: RegisteredUserScript[]): Promise<void>;
        export function update(scripts: RegisteredUserScript[], callback: () => void): void;
    }
}
