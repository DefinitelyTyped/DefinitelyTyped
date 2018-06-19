// Type definitions for Chrome packaged application development
// Project: http://developer.chrome.com/apps/
// Definitions by: Nikolai Ommundsen <https://github.com/niikoo>, Adam Lay <https://github.com/AdamLay>, MIZUNE Pine <https://github.com/pine613>, MIZUSHIMA Junki <https://github.com/mzsm>, Ingvar Stepanyan <https://github.com/RReverser>, Adam Pyle <https://github.com/pyle>, Matthew Kimber <https://github.com/matthewkimber>, otiai10 <https://github.com/otiai10>, couven92 <https://github.com/couven92>, RReverser <https://github.com/rreverser>, sreimer15 <https://github.com/sreimer15>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types='filesystem'/>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WebView ref                                                                                                    //
// https://chromium.googlesource.com/chromium/src/+/68.0.3432.1/chrome/common/extensions/api/webview_tag.json     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare namespace chrome {
    ////////////////////
    // Accessibility Features
    ////////////////////
    /**
     * Use the chrome.accessibilityFeatures API to manage Chrome's accessibility features.
     * This API relies on the ChromeSetting prototype of the type API for getting and setting individual accessibility features.
     * In order to get feature states the extension must request accessibilityFeatures.read permission.
     * For modifying feature state, the extension needs accessibilityFeatures.modify permission.
     * Note that accessibilityFeatures.modify does not imply accessibilityFeatures.read permission.
     * Permissions: 'accessibilityFeatures.read' (For read access); 'accessibilityFeatures.modify' (For modifications; Note that accessibilityFeatures.modify does not imply accessibilityFeatures.read permission.)
     * Important: This API works only on Chrome OS.
     * @since Availability: Since Chrome 37.
     */
    namespace accessibilityFeatures {
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
            levelOfControl: 'not_controllable' | 'controlled_by_other_extensions' | 'controllable_by_this_extension' | 'controlled_by_this_extension';
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
            scope?: 'regular' | 'regular_only' | 'incognito_persistent' | 'incognito_session_only';
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
            scope?: 'regular' | 'regular_only' | 'incognito_persistent' | 'incognito_session_only';
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

        /**
         * Spoken feedback (text-to-speech). The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
         */
        export var spokenFeedback: AccessibilityFeaturesSetting;
        /**
         * Enlarged cursor. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
         */
        export var largeCursor: AccessibilityFeaturesSetting;
        /**
         * Sticky modifier keys (like shift or alt). The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
         */
        export var stickyKeys: AccessibilityFeaturesSetting;
        /**
         * High contrast rendering mode. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
         */
        export var highContrast: AccessibilityFeaturesSetting;
        /**
         * Full screen magnification. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
         */
        export var screenMagnifier: AccessibilityFeaturesSetting;
        /**
         * Auto mouse click after mouse stops moving. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
         */
        export var autoclick: AccessibilityFeaturesSetting;
        /**
         * Virtual on-screen keyboard. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
         */
        export var virtualKeyboard: AccessibilityFeaturesSetting;
        /**
         * Caret highlighting. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
         * @since Since Chrome 51.
         */
        export var caretHighlight: AccessibilityFeaturesSetting;
        /**
         * Cursor highlighting. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
         * @since Since Chrome 51.
         */
        export var cursorHighlight: AccessibilityFeaturesSetting;
        /**
         * Focus highlighting. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
         * @since Since Chrome 51.
         */
        export var focusHighlight: AccessibilityFeaturesSetting;
        /**
         * Select-to-speak. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
         * @since Since Chrome 51.
         */
        export var selectToSpeak: AccessibilityFeaturesSetting;
        /**
         * Switch access. The value indicates whether the feature is enabled or not. get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
         * @since Since Chrome 51.
         */
        export var switchAccess: AccessibilityFeaturesSetting;
        /**
         * get() requires accessibilityFeatures.read permission. set() and clear() require accessibilityFeatures.modify permission.
         * @since Since Chrome 42.
         */
        export var animationPolicy: AccessibilityFeaturesSetting;
    }

    ////////////////////
    // Alarms
    ////////////////////
    /**
     * Use the chrome.alarms API to schedule code to run periodically or at a specified time in the future.
     * Permissions:  'alarms'
     * @since Availability: Since Chrome 22.
     */
    namespace alarms {
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

        interface AlarmEvent extends chrome.events.Event<(alarm: Alarm) => void> { }

        /**
         * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
         * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more.
         * That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning.
         * `when` can be set to less than 1 minute after 'now' without warning but won't actually cause the alarm to fire for at least 1 minute.
         * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
         * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
         */
        export function create(alarmInfo: AlarmCreateInfo): void;
        /**
         * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired.
         * If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
         * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more.
         * That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning.
         * `when` can be set to less than 1 minute after 'now' without warning but won't actually cause the alarm to fire for at least 1 minute.
         * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
         * @param name Optional name to identify this alarm. Defaults to the empty string.
         * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes.
         */
        export function create(name: string, alarmInfo: AlarmCreateInfo): void;
        /**
         * Gets an array of all the alarms.
         * @param callback The callback parameter should be a function that looks like this:
         * @example function(array of Alarm alarms) {...};
         */
        export function getAll(callback: (alarms: Alarm[]) => void): void;
        /**
         * Clears all alarms.
         * @param callback If you specify the callback parameter, it should be a function that looks like this:
         * @example function(boolean wasCleared) {...};
         */
        export function clearAll(callback?: (wasCleared: boolean) => void): void;
        /**
         * Clears the alarm with the given name.
         * @param name The name of the alarm to clear. Defaults to the empty string.
         * @param callback If you specify the callback parameter, it should be a function that looks like this:
         * @example function(boolean wasCleared) {...};
         */
        export function clear(name?: string, callback?: (wasCleared: boolean) => void): void;
        /**
         * Clears the alarm without a name.
         * @param callback If you specify the callback parameter, it should be a function that looks like this:
         * @example function(boolean wasCleared) {...};
         */
        export function clear(callback: (wasCleared: boolean) => void): void;
        /**
         * Retrieves details about the specified alarm.
         * @param callback The callback parameter should be a function that looks like this:
         * @example function( Alarm alarm) {...};
         */
        export function get(callback: (alarm: Alarm) => void): void;
        /**
         * Retrieves details about the specified alarm.
         * @param name The name of the alarm to get. Defaults to the empty string.
         * @param callback The callback parameter should be a function that looks like this:
         * @example function( Alarm alarm) {...};
         */
        export function get(name: string, callback: (alarm: Alarm) => void): void;

        /** Fired when an alarm has elapsed. Useful for event pages. */
        export var onAlarm: AlarmEvent;
    }

    ////////////////////
    // App Runtime
    ////////////////////

    /**
     * Use the chrome.app.runtime API to manage the app lifecycle.
     * The app runtime manages app installation, controls the event page, and can shut down the app at anytime.
     * @since Availability: Since Chrome 24.
     */
    namespace app.runtime {
        type LaunchSource = 'untracked' | 'app_launcher' | 'new_tab_page' | 'reload' | 'restart' |
            'load_and_launch' | 'command_line' | 'file_handler' | 'url_handler' | 'system_tray' |
            'about_page' | 'keyboard' | 'extensions_page' | 'management_api' | 'ephemeral_app' |
            'background' | 'kiosk' | 'chrome_internal' | 'test' | 'installed_notification' | 'context_menu';

        interface EmbedRequest {
            /**
             * Optional developer specified data that the app to be embedded can use when making an embedding decision.
             */
            data?: any;
            /**
             * Allows embedderId to embed this app in an <appview> element. The url specifies the content to embed.
             */
            allow: (url: string) => void;
            /**
             * Prevents embedderId from embedding this app in an <appview> element.
             */
            deny: () => void;
        }

        type actionType = 'new_note';

        interface LaunchData {
            /**
             * The ID of the file or URL handler that the app is being invoked with.
             * Handler IDs are the top-level keys in the file_handlers and/or url_handlers dictionaries in the manifest.
             */
            id?: string;
            /**
             * The file entries for the onLaunched event triggered by a matching file handler in the file_handlers manifest key.
             */
            items?: LaunchDataItem[];
            /**
             * The URL for the onLaunched event triggered by a matching URL handler in the url_handlers manifest key.
             */
            url?: string;
            /**
             * The referrer URL for the onLaunched event triggered by a matching URL handler in the url_handlers manifest key.
             */
            referrerUrl?: string;
            /**
             * Whether the app is being launched in a Chrome OS kiosk session.
             */
            isKioskSession?: boolean;
            /**
             * Whether the app is being launched in a Chrome OS public session.
             * @since Since Chrome 47.
             */
            isPublicSession?: boolean;
            /**
             * Where the app is launched from.
             */
            source?: LaunchSource;
            /**
             * Contains data that specifies the ActionType this app was launched with. This is null if the app was not launched with a specific action intent.
             *  ______________________________________________________________________________
             * | enum of 'new_note' | actionType | new_note                                   |
             * |                    |            | The user wants to quickly take a new note. |
             * |____________________|____________|____________________________________________|
             * @since Since Chrome 54.
             */
            actionData?: actionType;
        }

        interface LaunchDataItem {
            /**
             * Entry for the item
             */
            entry: FileEntry;
            /**
             * The MIME type of the file.
             */
            type?: string;
        }

        interface EmbedRequestedEvent extends chrome.events.Event<(request: EmbedRequest) => void> { }

        interface LaunchedEvent extends chrome.events.Event<(launchData: LaunchData) => void> { }

        interface RestartedEvent extends chrome.events.Event<() => void> { }

        /**
         * Fired when an embedding app requests to embed this app. This event is only available on dev channel with the flag --enable-app-view.
         * @since Since Chrome 38.
         */
        export var onEmbedRequest: EmbedRequestedEvent;
        /**
         * Fired when an app is launched from the launcher.
         */
        export var onLaunched: LaunchedEvent;
        /**
         * Fired at Chrome startup to apps that were running when Chrome last shut down,
         * or when apps have been requested to restart from their previous state for other reasons
         * (e.g. when the user revokes access to an app's retained files the runtime will restart the app).
         * In these situations if apps do not have an onRestarted handler they will be sent an onLaunched event instead.
         */
        export var onRestarted: RestartedEvent;
    }

    ////////////////////
    // App Window
    ////////////////////
    /**
     * Use the chrome.app.window API to create windows.
     * Windows have an optional frame with title bar and size controls.
     * They are not associated with any Chrome browser windows.
     * See the Window State Sample for a demonstration of these options.
     * @since Availability: Since Chrome 24.
     */
    namespace app.window {
        interface ContentBounds {
            left?: number;
            top?: number;
            width?: number;
            height?: number;
        }

        interface BoundsSpecification {
            /** The X coordinate of the content or window. */
            left?: number;
            /** The Y coordinate of the content or window. */
            top?: number;
            /** The width of the content or window. */
            width?: number;
            /** The height of the content or window. */
            height?: number;
            /** The minimum width of the content or window. */
            minWidth?: number;
            /** The minimum height of the content or window. */
            minHeight?: number;
            /** The maximum width of the content or window. */
            maxWidth?: number;
            /** The maximum height of the content or window. */
            maxHeight?: number;
        }

        interface Bounds {
            /** This property can be used to read or write the current X coordinate of the content or window. */
            left: number;
            /** This property can be used to read or write the current Y coordinate of the content or window. */
            top: number;
            /** This property can be used to read or write the current width of the content or window. */
            width: number;
            /** This property can be used to read or write the current height of the content or window. */
            height: number;
            /** This property can be used to read or write the current minimum width of the content or window. A value of null indicates 'unspecified'. */
            minWidth?: number | null;
            /** This property can be used to read or write the current minimum height of the content or window. A value of null indicates 'unspecified'. */
            minHeight?: number | null;
            /** This property can be used to read or write the current maximum width of the content or window. A value of null indicates 'unspecified'. */
            maxWidth?: number | null;
            /** This property can be used to read or write the current maximum height of the content or window. A value of null indicates 'unspecified'. */
            maxHeight?: number | null;
            /** Set the left and top position of the content or window. */
            setPosition(left: number, top: number): void;
            /** Set the width and height of the content or window. */
            setSize(width: number, height: number): void;
            /** Set the minimum size constraints of the content or window.
             * The minimum width or height can be set to null to remove the constraint.
             * A value of undefined will leave a constraint unchanged.
             **/
            setMinimumSize(minWidth: number | null | undefined, minHeight: number | null | undefined): void;
            /**
             * Set the maximum size constraints of the content or window.
             * The maximum width or height can be set to null to remove the constraint.
             * A value of undefined will leave a constraint unchanged.
             */
            setMaximumSize(maxWidth: number | null | undefined, maxHeight: number | null | undefined): void;
        }
        interface FrameOptions {
            /**
             * Frame type: none or chrome (defaults to chrome).
             *
             * For none, the -webkit-app-region CSS property can be used to apply draggability to the app's window.
             * -webkit-app-region: drag can be used to mark regions draggable. no-drag can be used to disable this style on nested elements.
             */
            type: 'none';
        }
        interface FrameOptionsChrome {
            /**
             * Frame type: none or chrome (defaults to chrome).
             *
             * For none, the -webkit-app-region CSS property can be used to apply draggability to the app's window.
             * -webkit-app-region: drag can be used to mark regions draggable. no-drag can be used to disable this style on nested elements.
             */
            type?: 'chrome';
            /**
             * Allows the frame color to be set. Frame coloring is only available if the frame type is chrome.
             * @since Frame coloring is new in Chrome 36.
             */
            color?: string;
            /**
             * Allows the frame color of the window when active to be set. Frame coloring is only available if the frame type is chrome.
             * Frame coloring is only available if the frame type is chrome.
             * @since Frame coloring is new in Chrome 36.
             */
            activeColor?: string;
            /**
             * Allows the frame color of the window when inactive to be set differently to the active color. Frame coloring is only available if the frame type is chrome.
             * inactiveColor must be used in conjunction with color.
             * @since Frame coloring is new in Chrome 36.
             */
            inactiveColor?: string;
        }

        interface CreateWindowOptions {
            /**
             * Id to identify the window.
             *
             * This will be used to remember the size and position of the window and restore that geometry when a window with the same id is later opened.
             * If a window with a given id is created while another window with the same id already exists,
             * the currently opened window will be focused instead of creating a new window.
             */
            id?: string;
            /**
             * Used to specify the initial position, initial size and constraints of the window's content (excluding window decorations).
             * If an id is also specified and a window with a matching id has been shown before, the remembered bounds will be used instead.
             * Note that the padding between the inner and outer bounds is determined by the OS.
             * Therefore setting the same bounds property for both the innerBounds and outerBounds will result in an error.
             * @since This property is new in Chrome 36.
             */
            innerBounds?: BoundsSpecification;
            /**
             * Used to specify the initial position, initial size and constraints of the window (including window decorations such as the title bar and frame).
             * If an id is also specified and a window with a matching id has been shown before, the remembered bounds will be used instead.
             * Note that the padding between the inner and outer bounds is determined by the OS.
             * Therefore setting the same bounds property for both the innerBounds and outerBounds will result in an error.
             * @since This property is new in Chrome 36.
             */
            outerBounds?: BoundsSpecification;
            /**
             * Minimum width of the window.
             * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
             */
            minWidth?: number;
            /**
             * Minimum height of the window.
             * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
             */
            minHeight?: number;
            /**
             * Maximum width of the window.
             * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
             */
            maxWidth?: number;
            /**
             * Maximum height of the window.
             * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
             */
            maxHeight?: number;
            /** Type of window to create */
            type?: 'shell';
            /**
             * If true, the window will have its own shelf icon.
             * Otherwise the window will be grouped in the shelf with other windows that are associated with the app.
             * Defaults to false.
             * If showInShelf is set to true you need to specify an id for the window.
             * @since Since Chrome 54.
             */
            showInShelf?: boolean;
            /**
             * URL of the window icon. A window can have its own icon when showInShelf is set to true. The URL should be a global or an extension local URL.
             * @since Since Chrome 54.
             */
            icon?: string;
            /**
             * Frame type: none or chrome (defaults to chrome).
             * For none, the -webkit-app-region CSS property can be used to apply draggability to the app's window.
             * -webkit-app-region: drag can be used to mark regions draggable. no-drag can be used to disable this style on nested elements.
             * @since Use of FrameOptions is new in M36.
             */
            frame?: 'none' | 'chrome' | FrameOptions | FrameOptionsChrome;
            /**
             * Size and position of the content in the window (excluding the titlebar).
             * If an id is also specified and a window with a matching id has been shown before,
             * the remembered bounds of the window will be used instead.
             * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
             */
            bounds?: ContentBounds;
            /**
             * The initial state of the window, allowing it to be created already fullscreen, maximized, or minimized. Defaults to 'normal'.
             */
            state?: 'normal' | 'fullscreen' | 'maximized' | 'minimized';
            /**
             * If true, the window will be created in a hidden state. Call show() on the window to show it once it has been created. Defaults to false.
             */
            hidden?: boolean;
            /**
             * If true, the window will be resizable by the user. Defaults to true.
             */
            resizable?: boolean;
            /**
             * @deprecated Deprecated since Chrome 34. Multiple windows with the same id is no longer supported.
             * By default if you specify an id for the window,
             * the window will only be created if another window with the same id doesn't already exist.
             * If a window with the same id already exists that window is activated instead.
             * If you do want to create multiple windows with the same id, you can set this property to false.
             */
            singleton?: boolean;
            /**
             * If true, the window will stay above most other windows.
             * If there are multiple windows of this kind, the currently focused window will be in the foreground.
             * @requires alwaysOnTopWindows-permission.
             * Defaults to false.
             * Call setAlwaysOnTop() on the window to change this property after creation.
             */
            alwaysOnTop?: boolean;
            /** If true, the window will be focused when created. Defaults to true. */
            focused?: boolean;
            /**
             * If true, and supported by the platform, the window will be visible on all workspaces.
             * @since Since Chrome 39.
             */
            visibleOnAllWorkspaces?: boolean;
        }

        interface AppWindow {
            /** Focus the window. */
            focus: () => void;
            /**
             * Fullscreens the window.
             * The user will be able to restore the window by pressing ESC.
             * An application can prevent the fullscreen state to be left when ESC is pressed by requesting the
             * app.window.fullscreen.overrideEsc permission and canceling the event by calling .preventDefault(),
             * in the keydown and keyup handlers, like this:
             * @example window.onkeydown = window.onkeyup = function(e) { if (e.keyCode == 27 <<--``ESC``) { e.preventDefault(); }
             * Note window.fullscreen() will cause the entire window to become fullscreen and does not require a user gesture.
             * The HTML5 fullscreen API can also be used to enter fullscreen mode(see Web APIs for more details).
             **/
            fullscreen: () => void;
            /** Is the window fullscreen? This will be true if the window has been created fullscreen or was made fullscreen via the AppWindow or HTML5 fullscreen APIs. */
            isFullscreen: () => boolean;
            /** Minimize the window. */
            minimize: () => void;
            /** Is the window minimized? */
            isMinimized: () => boolean;
            /** Maximize the window. */
            maximize: () => void;
            /** Is the window maximized? */
            isMaximized: () => boolean;
            /** Restore the window, exiting a maximized, minimized, or fullscreen state. */
            restore: () => void;
            /**
             * Move the window to the position (|left|, |top|).
             * @deprecated Deprecated since Chrome 43. Use outerBounds.
             */
            moveTo: (left: number, top: number) => void;
            /**
             * Resize the window to |width|x|height| pixels in size.
             * @deprecated Deprecated since Chrome 43. Use outerBounds.
             */
            resizeTo: (width: number, height: number) => void;
            /** Draw attention to the window. */
            drawAttention: () => void;
            /** Clear attention to the window. */
            clearAttention: () => void;
            /** Close the window. */
            close: () => void;
            /** Show the window. Does nothing if the window is already visible. Focus the window if |focused| is set to true or omitted. */
            show: (focused?: boolean) => void;
            /** Hide the window. Does nothing if the window is already hidden. */
            hide: () => void;
            /**
             * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
             * @description Get the window's inner bounds as a ContentBounds object.
             */
            getBounds: () => ContentBounds;
            /**
             * Set the window's inner bounds.
             * @deprecated Deprecated since Chrome 36. Use innerBounds or outerBounds.
             */
            setBounds: (bounds: ContentBounds) => void;
            /** Is the window always on top? */
            isAlwaysOnTop: () => boolean;
            /** Set whether the window should stay above most other windows. Requires the alwaysOnTopWindows permission. */
            setAlwaysOnTop: (alwaysOnTop: boolean) => void;
            /** Set whether the window is visible on all workspaces. (Only for platforms that support this). */
            setVisibleOnAllWorkspaces: (alwaysVisible: boolean) => void;
            /** The JavaScript 'window' object for the created child. */
            contentWindow: Window;
            /** The id the window was created with. */
            id: string;
            /**
             * The position, size and constraints of the window's content, which does not include window decorations.
             * @since This property is new in Chrome 36.
             * */
            innerBounds: Bounds;
            /**
             * The position, size and constraints of the window, which includes window decorations, such as the title bar and frame.
             * @since This property is new in Chrome 36.
             */
            outerBounds: Bounds;


            /** Fired when the window is resized. */
            onBoundsChanged: WindowEvent;
            /**
             * Fired when the window is closed.
             * Note, this should be listened to from a window other than the window being closed, for example from the background page.
             * This is because the window being closed will be in the process of being torn down when the event is fired,
             * which means not all APIs in the window's script context will be functional.
             */
            onClosed: WindowEvent;
            /** Fired when the window is fullscreened (either via the AppWindow or HTML5 APIs). */
            onFullscreened: WindowEvent;
            /** Fired when the window is maximized. */
            onMaximized: WindowEvent;
            /** Fired when the window is minimized. */
            onMinimized: WindowEvent;
            /** Fired when the window is restored from being minimized or maximized. */
            onRestored: WindowEvent;
        }
        interface WindowEvent extends chrome.events.Event<() => void> { }
        /**
         * The size and position of a window can be specified in a number of different ways. The most simple option is not specifying anything at all, in which case a default size and platform dependent position will be used.
         * To set the position, size and constraints of the window, use the innerBounds or outerBounds properties. Inner bounds do not include window decorations. Outer bounds include the window's title bar and frame. Note that the padding between the inner and outer bounds is determined by the OS. Therefore setting the same property for both inner and outer bounds is considered an error (for example, setting both innerBounds.left and outerBounds.left).
         * To automatically remember the positions of windows you can give them ids. If a window has an id, This id is used to remember the size and position of the window whenever it is moved or resized. This size and position is then used instead of the specified bounds on subsequent opening of a window with the same id. If you need to open a window with an id at a location other than the remembered default, you can create it hidden, move it to the desired location, then show it.
         *
         * @param url
         * @param [options]
         * @param [callback] Called in the creating window (parent) before the load event is called in the created window (child). The parent can set fields or functions on the child usable from onload. E.g. background.js: function(createdWindow) { createdWindow.contentWindow.foo = function () { }; }; window.js: window.onload = function () { foo(); } If you specify the callback parameter, it should be a function that looks like this: function(AppWindow createdWindow) {...};
         */
        export function create(url: string, options?: CreateWindowOptions, callback?: (created_window: AppWindow) => void): void;
        /**
         * Returns an AppWindow object for the current script context (ie JavaScript 'window' object). This can also be called on a handle to a script context for another page, for example: otherWindow.chrome.app.window.current().
         */
        export function current(): AppWindow;
        /**
         * Gets an AppWindow with the given id. If no window with the given id exists null is returned. This method is new in Chrome 33.
         */
        export function get(id: string): AppWindow;
        /**
         * Gets an array of all currently created app windows. This method is new in Chrome 33.
         */
        export function getAll(): AppWindow[];
        /**
         * Whether the current platform supports windows being visible on all workspaces.
         */
        export function canSetVisibleOnAllWorkspaces(): boolean;
    }


    ////////////////////
    // Audio
    ////////////////////
    /**
     * The chrome.audio API is provided to allow users to get information about and control the audio devices attached to the system.
     * This API is currently only implemented for ChromeOS.
     * @since Since Chrome 59.
     */
    namespace audio {
        export type StreamType = 'INPUT' | 'OUTPUT';
        interface AudioDeviceInfo {
            /** The unique identifier of the audio device. */
            id: string;
            /** Stream type associated with this device. */
            streamType: StreamType;
            /** Type of the device. */
            deviceType: 'HEADPHONE' | 'MIC' | 'USB' | 'BLUETOOTH' | 'HDMI' | 'INTERNAL_SPEAKER' | 'INTERNAL_MIC' | 'FRONT_MIC' | 'REAR_MIC' | 'KEYBOARD_MIC' | 'HOTWORD' | 'LINEOUT' | 'POST_MIX_LOOPBACK' | 'POST_DSP_LOOPBACK' | 'OTHER';
            /** The user-friendly name (e.g. 'USB Microphone'). */
            displayName: string;
            /** Device name. */
            deviceName: string;
            /** True if this is the current active device. */
            isActive: boolean;
            /** The sound level of the device, volume for output, gain for input. */
            level: number;
            /** The stable/persisted device id string when available. */
            stableDeviceId?: string;
        }
        interface DeviceIdLists {
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
        interface SetDeviceProperties {
            /**
             * The audio device's desired sound level. Defaults to the device's current sound level.
             * If used with audio input device, represents audio device gain.
             * If used with audio output device, represents audio device volume.
             *
             * Type: integer
             */
            level?: number;
        }
        interface OnLevelChangedEvent {
            /**
             * The callback parameter should be a function that looks like this:
             *   function(object event) {...};
             * @param {(event: {
             *             deviceId: string,
             *             level: number
             *         }) => void} callback
             */
            addListener(callback: (event: {
                deviceId: string,
                level: number
            }) => void): void;
        }
        interface OnMuteChangedEvent {
            /**
             * The callback parameter should be a function that looks like this:
             * function(object event) {...};
             */
            addListener(callback: (event: {
                streamType: StreamType[],
                isMuted: boolean
            }) => void): void;
        }
        interface OnDeviceListChangedEvent {
            /**
             * The callback parameter should be a function that looks like this:
             *   function(array of AudioDeviceInfo devices) {...};
             * @param {(devices: AudioDeviceInfo[]) => void} callback `devices` contains a list of all present audio devices after the change.
             */
            addListener(callback: (devices: AudioDeviceInfo[]) => void): void;
        }
        /**
         * Device properties by which to filter the list of returned audio devices. If the filter is not set or set to {}, returned device list will contain all available audio devices.
         */
        interface Filter {
            /**
             * If set, only audio devices whose stream type is included in this list will satisfy the filter.
             */
            streamTypes?: StreamType[];
            /**
             * If set, only audio devices whose active state matches this value will satisfy the filter.
             */
            isActive?: boolean;
        }
        /**
         * @description Gets a list of audio devices filtered based on |filter|.
         */
        export function getDevices(filter: Filter, callback: (devices: AudioDeviceInfo[]) => void): void;
        export function getDevices(callback: (devices: AudioDeviceInfo[]) => void): void;
        /** Sets lists of active input and/or output devices. */
        export function setDevices(ids: DeviceIdLists[] | string[], callback: () => void): void;
        /** Sets the properties for the input or output device. */
        export function setProperties(id: string, properties: SetDeviceProperties, callback: () => void): void;
        /**
         * @description Gets the system-wide mute state for the specified stream type.
         * @param {StreamType} streamType Stream type for which mute state should be fetched.
         * @param {(value: boolean) => {}} callback Callback reporting whether mute is set or not for specified stream type.
         */
        export function getMute(streamType: StreamType, callback: (value: boolean) => void): void;
        /**
         * @description Sets mute state for a stream type. The mute state will apply to all audio devices with the specified audio stream type.
         * @param {StreamType} streamType Stream type for which mute state should be set.
         * @param {boolean} isMuted New mute value.
         * @param {() => {}} [callback] If you specify the callback parameter, it should be a function that looks like this: function() {...};
         */
        export function setMute(streamType: StreamType, isMuted: boolean, callback?: () => void): void;
        /** Fired when sound level changes for an active audio device. */
        export var onLevelChanged: OnLevelChangedEvent;
        /** Fired when the mute state of the audio input or output changes. Note that mute state is system-wide and the new value applies to every audio device with specified stream type. */
        export var onMuteChanged: OnMuteChangedEvent;
        /** Fired when audio devices change, either new devices being added, or existing devices being removed. */
        export var onDeviceListChanged: OnDeviceListChangedEvent;
    }

    ////////////////////
    // Bluetooth
    ////////////////////
    /**
     * Use the chrome.bluetooth API to connect to a Bluetooth device. All functions report failures via chrome.runtime.lastError.
     * Manifest: 'bluetooth': {...}
     * @since Chrome 37
     */
    namespace bluetooth {
        interface AdapterState {
            /** The address of the adapter, in the format 'XX:XX:XX:XX:XX:XX'. */
            address: string;
            /** The human-readable name of the adapter. */
            name: string;
            /** Indicates whether or not the adapter has power. */
            powered: boolean;
            /** Indicates whether or not the adapter is available (i.e. enabled). */
            available: boolean;
            /** Indicates whether or not the adapter is currently discovering. */
            discovering: boolean;
        }
        interface Device {
            /** The address of the device, in the format 'XX:XX:XX:XX:XX:XX'. */
            address: string;
            /** The human-readable name of the device. */
            name?: string;
            /** The class of the device, a bit-field defined by http://www.bluetooth.org/en-us/specification/assigned-numbers/baseband. */
            deviceClass?: number;
            /** The Device ID record of the device, where available. */
            vendorIdSource?: 'bluetooth' | 'usb';
            vendorId?: number;
            productId?: number;
            deviceId?: number;
            /**
             * The type of the device, if recognized by Chrome.
             * This is obtained from the |deviceClass| field and only represents a small fraction of the possible device types.
             * When in doubt you should use the |deviceClass| field directly.
             */
            type?: 'computer' | 'phone' | 'modem' | 'audio' | 'carAudio' | 'video' | 'peripheral' | 'joystick' | 'gamepad' | 'keyboard' | 'mouse' | 'tablet' | 'keyboardMouseCombo';
            /** Indicates whether or not the device is paired with the system. */
            paired?: boolean;
            /** Indicates whether the device is currently connected to the system. */
            connected?: boolean;
            /**
             * Indicates whether the device is currently connecting to the system.
             * @since Chrome 48
             */
            connecting?: boolean;
            /**
             * Indicates whether the device is connectable.
             * @since Chrome 48
             */
            connectable?: boolean;
            /**
             * UUIDs of protocols, profiles and services advertised by the device.
             * For classic Bluetooth devices, this list is obtained from EIR data and SDP tables.
             * For Low Energy devices, this list is obtained from AD and GATT primary services.
             * For dual mode devices this may be obtained from both.
             */
            uuids?: string[];
            /**
             * The received signal strength, in dBm. This field is avaliable and valid only during discovery. Outside of discovery it's value is not specified.
             * @since Chrome 44
             */
            inquiryRssi: number;
            /**
             * The transmitted power level. This field is avaliable only for LE devices that include this field in AD. It is avaliable and valid only during discovery.
             * @since Chrome 44
             */
            inquiryTxPower: number;
        }

        interface BluetoothEvent<T> {
            addListener(callback: (event: T) => void): void;
        }

        /**
         * Some criteria to filter the list of returned bluetooth devices. If the filter is not set or set to {}, returned device list will contain all bluetooth devices. Right now this is only supported in ChromeOS, for other platforms, a full list is returned.
         */
        interface DeviceFilter {
            /** Type of filter to apply to the device list. Default is all. */
            filterType?: 'all' | 'known';
            /** Maximum number of bluetoth devices to return. Default is 0 (no limit) if unspecified. */
            limit?: number;
        }
        /** Get information about the Bluetooth adapter. */
        export function getAdapterState(callback: (adapterInfo: AdapterState) => void): void;
        /** Get information about a Bluetooth device known to the system. */
        export function getDevice(deviceAddress: string, callback: (deviceInfo: Device) => void): void;
        /**
         * Get a list of Bluetooth devices known to the system, including paired and recently discovered devices.
         * @param filter Since Chrome 67. Some criteria to filter the list of returned bluetooth devices. If the filter is not set or set to {}, returned device list will contain all bluetooth devices. Right now this is only supported in ChromeOS, for other platforms, a full list is returned.
         * @param callback Called when the search is completed.
         */
        export function getDevices(filter: DeviceFilter, callback: (deviceInfo: Device) => void): void;
        /**
         * Start discovery. Newly discovered devices will be returned via the onDeviceAdded event. Previously discovered devices already known to the adapter must be obtained using getDevices and will only be updated using the |onDeviceChanged| event if information about them changes.
         * Discovery will fail to start if this application has already called startDiscovery. Discovery can be resource intensive: stopDiscovery should be called as soon as possible.
         */
        export function startDiscovery(callback: () => void): void;
        /** Stop discovery. */
        export function stopDiscovery(callback: () => void): void;
        /** Fired when the state of the Bluetooth adapter changes. */
        export var onAdapterStateChanged: BluetoothEvent<AdapterState>;
        /** Fired when information about a new Bluetooth device is available. */
        export var onDeviceAdded: BluetoothEvent<Device>;
        /** Fired when information about a known Bluetooth device has changed. */
        export var onDeviceChanged: BluetoothEvent<Device>;
        /** Fired when a Bluetooth device that was previously discovered has been out of range for long enough to be considered unavailable again, and when a paired device is removed. */
        export var onDeviceRemoved: BluetoothEvent<Device>;
    }
    /**
     * The chrome.bluetoothLowEnergy API is used to communicate with Bluetooth Smart (Low Energy) devices using the Generic Attribute Profile (GATT).
     * Manifest: 'bluetooth': {...}
     * @since Chrome 37
     * Important: This API works only on Chrome OS.
     * Note: With Chrome 56, users can select nearby Bluetooth Low Energy devices to provide to web sites that use the Web Bluetooth API.
     */
    namespace bluetoothLowEnergy {
        interface Service {
            /** The UUID of the service, e.g. 0000180d-0000-1000-8000-00805f9b34fb. */
            uuid: string;
            /** Indicates whether the type of this service is primary or secondary. */
            isPrimary: boolean;
            /**
             * Returns the identifier assigned to this service.
             * Use the instance ID to distinguish between services from a peripheral with the same UUID and to make function calls that take in a service identifier.
             * Present, if this instance represents a remote service.
             **/
            instanceId?: string;
            /**
             * The device address of the remote peripheral that the GATT service belongs to.
             * Present, if this instance represents a remote service.
             */
            deviceAddress?: string;
        }
        enum CharacteristicProperties {
            'broadcast',
            'read',
            'writeWithoutResponse',
            'write',
            'notify',
            'indicate',
            'authenticatedSignedWrites',
            'extendedProperties',
            'reliableWrite',
            'writableAuxiliaries',
            'encryptRead',
            'encryptWrite',
            'encryptAuthenticatedRead',
            'encryptAuthenticatedWrite'
        }
        interface Characteristic {
            /** The UUID of the characteristic, e.g. 00002a37-0000-1000-8000-00805f9b34fb. */
            uuid: string;
            /** The GATT service this characteristic belongs to. */
            service?: Service;
            /** The properties of this characteristic. */
            properties: CharacteristicProperties[];
            /** Returns the identifier assigned to this characteristic. Use the instance ID to distinguish between characteristics from a peripheral with the same UUID and to make function calls that take in a characteristic identifier. Present, if this instance represents a remote characteristic. */
            instanceId?: string;
            /** The currently cached characteristic value. This value gets updated when the value of the characteristic is read or updated via a notification or indication. */
            value?: ArrayBuffer;
        }
        enum DescriptorPermissions {
            'read',
            'write',
            'encryptedRead',
            'encryptedWrite',
            'encryptedAuthenticatedRead',
            'encryptedAuthenticatedWrite'
        }
        interface Descriptor {
            /** The UUID of the characteristic descriptor, e.g. 00002902-0000-1000-8000-00805f9b34fb. */
            uuid: string;
            /** The GATT characteristic this descriptor belongs to. */
            characteristic?: Characteristic;
            /**
             * The permissions of this descriptor.
             * @since Since Chrome 52.
             */
            permissions: DescriptorPermissions[];
            /** Returns the identifier assigned to this descriptor. Use the instance ID to distinguish between descriptors from a peripheral with the same UUID and to make function calls that take in a descriptor identifier. Present, if this instance represents a remote characteristic. */
            instanceId?: string;
            /** The currently cached descriptor value. This value gets updated when the value of the descriptor is read. */
            value?: ArrayBuffer;
        }
        interface RequestDevice {
            /** The address of the device, in the format 'XX:XX:XX:XX:XX:XX'. */
            address: string;
            /** The human-readable name of the device. */
            name?: string;
            /** The class of the device, a bit - field defined by:
             * @see [Specs]{@link http://www.bluetooth.org/en-us/specification/assigned-numbers/baseband}
             **/
            deviceClass?: number;
        }
        interface Request {
            /** Unique ID for this request. Use this ID when responding to this request. */
            requestId: number;
            /** Device that send this request. */
            device: RequestDevice;
            /** Value to write (if this is a write request). */
            value?: ArrayBuffer;
        }
        interface IProperties {
            /**
             * Flag indicating whether a connection to the device is left open when the event page of the application is unloaded. The default value is false.
             * @see [HowToManageAppLifecycle]{@link https://developer.chrome.com/apps/app_lifecycle}
             * @default false
             */
            persistent: boolean;
        }
        interface INotification {
            /** New value of the characteristic. */
            value: ArrayBuffer;
            /** Optional flag for sending an indication instead of a notification. */
            shouldIndicate: boolean;
        }
        enum AdvertisementType {
            'broadcast', 'peripheral'
        }
        interface Advertisement {
            /** Type of advertisement. */
            type: AdvertisementType;
            /** List of UUIDs to include in the 'Service UUIDs' field of the Advertising Data. These UUIDs can be of the 16bit, 32bit or 128 formats. */
            serviceUuids?: string[];
            /** List of manufacturer specific data to be included in 'Manufacturer Specific Data' fields of the advertising data. */
            manufacturerData?: { id: number, data: number[] };
            /** List of UUIDs to include in the 'Solicit UUIDs' field of the Advertising Data. These UUIDs can be of the 16bit, 32bit or 128 formats. */
            solicitUuids?: string[];
            /** List of service data to be included in 'Service Data' fields of the advertising data. */
            serviceData: { uuid: string, data: number[] };
        }
        interface IResponse {
            /** Id of the request this is a response to. */
            requestId: number;
            /** If this is an error response, this should be true. */
            isError: boolean;
            /** Response value. Write requests and error responses will ignore this parameter. */
            value?: ArrayBuffer;
        }
        /**
         * Establishes a connection between the application and the device with the given address. A device may be already connected and its GATT services available without calling connect, however, an app that wants to access GATT services of a device should call this function to make sure that a connection to the device is maintained. If the device is not connected, all GATT services of the device will be discovered after a successful call to connect.
         * @param deviceAddress The Bluetooth address of the remote device to which a GATT connection should be opened.
         * @param callback Called when the connect request has completed.
         */
        function connect(deviceAddress: string, callback: () => void): void;
        /**
         * Establishes a connection between the application and the device with the given address. A device may be already connected and its GATT services available without calling connect, however, an app that wants to access GATT services of a device should call this function to make sure that a connection to the device is maintained. If the device is not connected, all GATT services of the device will be discovered after a successful call to connect.
         * @param deviceAddress The Bluetooth address of the remote device to which a GATT connection should be opened.
         * @param properties Connection properties (optional).
         * @param callback Called when the connect request has completed.
         */
        function connect(deviceAddress: string, properties: IProperties, callback: () => void): void;
        /**
         * Closes the app's connection to the device with the given address. Note that this will not always destroy the physical link itself, since there may be other apps with open connections.
         * @param deviceAddress The Bluetooth address of the remote device.
         * @param [callback] Called when the disconnect request has completed.
         */
        function disconnect(deviceAddress: string, callback?: () => void): void;
        /**
         * Get the GATT service with the given instance ID.
         * @param serviceId The instance ID of the requested GATT service.
         * @param callback Called with the requested Service object.
         */
        function getService(serviceId: string, callback: (result: Service) => void): void;
        /**
         * @description Create a locally hosted GATT service. This service can be registered to be available on a local GATT server. This function is only available if the app has both the bluetooth:low_energy and the bluetooth:peripheral permissions set to true. The peripheral permission may not be available to all apps.
         * @since Since Chrome 52.
         * @param service The service to create.
         * @param callback Called with the created services's unique ID.
         */
        function createService(service: Service, callback: () => void): void;
        /**
         * Get all the GATT services that were discovered on the remote device with the given device address.
         * Note: If service discovery is not yet complete on the device, this API will return a subset (possibly empty) of services. A work around is to add a time based delay and/or call repeatedly until the expected number of services is returned.
         * @param deviceAddress The Bluetooth address of the remote device whose GATT services should be returned.
         * @param callback Called with the list of requested Service objects.
         */
        function getServices(deviceAddress: string, callback: (result: Service[]) => void): void;
        /**
         * Get the GATT characteristic with the given instance ID that belongs to the given GATT service, if the characteristic exists.
         * @param characteristicId The instance ID of the requested GATT characteristic.
         * @param callback Called with the requested Characteristic object.
         */
        function getCharacteristic(characteristicId: string, callback: (result: Characteristic) => void): void;
        /**
         * @description Create a locally hosted GATT characteristic. This characteristic must be hosted under a valid service. If the service ID is not valid, the lastError will be set. This function is only available if the app has both the bluetooth:low_energy and the bluetooth:peripheral permissions set to true. The peripheral permission may not be available to all apps.
         * @since Since Chrome 52.
         * @param characteristic The characteristic to create.
         * @param serviceId ID of the service to create this characteristic for.
         * @param callback Called with the created characteristic's unique ID.
         */
        function createCharacteristic(characteristic: Characteristic, serviceId: string, callback: (characteristicId: string) => void): void;
        /**
         * Get a list of all discovered GATT characteristics that belong to the given service.
         * @param serviceId The instance ID of the GATT service whose characteristics should be returned.
         * @param callback Called with the list of characteristics that belong to the given service.
         */
        function getCharacteristics(serviceId: string, callback: (result: Characteristic[]) => void): void;
        /**
         * Get a list of GATT services that are included by the given service.
         * @param serviceId The instance ID of the GATT service whose included services should be returned.
         * @param callback Called with the list of GATT services included from the given service.
         */
        function getIncludedServices(serviceId: string, callback: (result: Service[]) => void): void;
        /**
         * Get the GATT characteristic descriptor with the given instance ID.
         * @param descriptorId The instance ID of the requested GATT characteristic descriptor.
         * @param callback Called with the requested Descriptor object.
         */
        function getDescriptor(descriptorId: string, callback: (result: Descriptor) => void): void;
        /**
         * Create a locally hosted GATT descriptor. This descriptor must be hosted under a valid characteristic. If the characteristic ID is not valid, the lastError will be set. This function is only available if the app has both the bluetooth:low_energy and the bluetooth:peripheral permissions set to true. The peripheral permission may not be available to all apps.
         * @since Since Chrome 52.
         * @param descriptor The descriptor to create.
         * @param characteristicId ID of the characteristic to create this descriptor for.
         * @param callback Called with the created desciptor's unique ID.
         */
        function createDescriptor(descriptor: Descriptor, characteristicId: string, callback: (descriptorId: string) => void): void;
        /**
         * Get a list of GATT characteristic descriptors that belong to the given characteristic.
         * @param characteristicId The instance ID of the GATT characteristic whose descriptors should be returned.
         * @param callback Called with the list of descriptors that belong to the given characteristic.
         */
        function getDescriptors(characteristicId: string, callback: (result: Descriptor[]) => void): void;
        /**
         * Retrieve the value of a specified characteristic from a remote peripheral.
         * @param characteristicId The instance ID of the GATT characteristic whose value should be read from the remote device.
         * @param callback Called with the Characteristic object whose value was requested. The value field of the returned Characteristic object contains the result of the read request.
         */
        function readCharacteristicValue(characteristicId: string, callback: (result: Characteristic) => void): void;
        /**
         * Write the value of a specified characteristic from a remote peripheral.
         * @param characteristicId The instance ID of the GATT characteristic whose value should be written to.
         * @param value The value that should be sent to the remote characteristic as part of the write request.
         * @param callback Called when the write request has completed.
         */
        function writeCharacteristicValue(characteristicId: string, value: ArrayBuffer, callback: () => void): void;
        /**
         * Enable value notifications/indications from the specified characteristic. Once enabled, an application can listen to notifications using the onCharacteristicValueChanged event.
         * @see onCharacteristicValueChanged
         * @param characteristicId The instance ID of the GATT characteristic that notifications should be enabled on.
         * @param callback Called when the request has completed.
         */
        function startCharacteristicNotifications(characteristicId: string, callback: () => void): void;
        /**
         * Enable value notifications/indications from the specified characteristic. Once enabled, an application can listen to notifications using the onCharacteristicValueChanged event.
         * @see onCharacteristicValueChanged
         * @param characteristicId The instance ID of the GATT characteristic that notifications should be enabled on.
         * @param properties Notification session properties (optional).
         * @param callback Called when the request has completed.
         */
        function startCharacteristicNotifications(characteristicId: string, properties: IProperties, callback: () => void): void;
        /**
         * Disable value notifications/indications from the specified characteristic. After a successful call, the application will stop receiving notifications/indications from this characteristic.
         * @param characteristicId The instance ID of the GATT characteristic on which this app's notification session should be stopped.
         * @param [callback] Called when the request has completed (optional).
         */
        function stopCharacteristicNotifications(characteristicId: string, callback?: () => void): void;
        /**
         * Notify a remote device of a new value for a characteristic.
         * If the shouldIndicate flag in the notification object is true, an indication will be sent instead of a notification.
         * Note, the characteristic needs to correctly set the 'notify' or 'indicate' property during creation for this call to succeed.
         * This function is only available if the app has both the bluetooth:low_energy and the bluetooth:peripheral permissions set to true.
         * The peripheral permission may not be available to all apps.
         * @since Since Chrome 52.
         * @param characteristicId The characteristic to send the notication for.
         * @param notification Notification object
         * @param callback Callback called once the notification or indication has been sent successfully.
         */
        function notifyCharacteristicValueChanged(characteristicId: string, notification: INotification, callback: () => void): void;
        /**
         * Retrieve the value of a specified characteristic descriptor from a remote peripheral.
         * @param descriptorId The instance ID of the GATT characteristic descriptor whose value should be read from the remote device.
         * @param callback Called with the Descriptor object whose value was requested. The value field of the returned Descriptor object contains the result of the read request.
         */
        function readDescriptorValue(descriptorId: string, callback: (result: Descriptor) => void): void;
        /**
         * Write the value of a specified characteristic descriptor from a remote peripheral.
         * @param descriptorId The instance ID of the GATT characteristic descriptor whose value should be written to.
         * @param value The value that should be sent to the remote descriptor as part of the write request.
         * @param callback Called when the write request has completed.
         */
        function writeDescriptorValue(descriptorId: string, value: ArrayBuffer, callback: () => void): void;
        /**
         * Register the given service with the local GATT server.
         * If the service ID is invalid, the lastError will be set.
         * This function is only available if the app has both
         *   the bluetooth:low_energy and the bluetooth:peripheral permissions set to true.
         * The peripheral permission may not be available to all apps.
         * @since Since Chrome 52.
         * @param serviceId Unique ID of a created service.
         * @param callback Callback with the result of the register operation.
         */
        function registerService(serviceId: string, callback: () => void): void;
        /**
         * Unregister the given service with the local GATT server.
         * If the service ID is invalid, the lastError will be set.
         * This function is only available if the app has both
         *   the bluetooth:low_energy and the bluetooth:peripheral permissions set to true.
         * The peripheral permission may not be available to all apps.
         * @since Since Chrome 52.
         * @param serviceId Unique ID of a current registered service.
         * @param callback Callback with the result of the register operation.
         */
        function unregisterService(serviceId: string, callback: () => void): void;
        /**
         * Remove the specified service, unregistering it if it was registered.
         * If the service ID is invalid, the lastError will be set.
         * This function is only available if the app has both
         *   the bluetooth:low_energy and the bluetooth:peripheral permissions set to true.
         * The peripheral permission may not be available to all apps.
         * @since Since Chrome 52.
         * @param serviceId Unique ID of a current registered service.
         * @param [callback] Callback called once the service is removed.
         */
        function removeService(serviceId: string, callback?: () => void): void;
        /**
         * Create an advertisement and register it for advertising.
         * To call this function, the app must have
         *  the bluetooth:low_energy and bluetooth:peripheral permissions set to true.
         * Additionally this API is only available to auto launched apps in Kiosk Mode
         *  of by setting the 'enable-ble-advertising-in-apps' flag.
         *  See https://developer.chrome.com/apps/manifest/bluetooth
         * Note: On some hardware, central and peripheral modes at the same time
         *  is supported but on hardware that doesn't support this,
         *  making this call will switch the device to peripheral mode.
         * In the case of hardware which does not support both central and peripheral mode,
         *  attempting to use the device in both modes will lead to undefined behavior
         *  or prevent other central-role applications from behaving correctly
         *  (including the discovery of Bluetooth Low Energy devices).
         * @since Since Chrome 47.
         * @param advertisement The advertisement to advertise.
         * @param callback Called once the registeration is done and we've started advertising. Returns the id of the created advertisement.
         */
        function registerAdvertisement(advertisement: Advertisement, callback: (advertisementId: number) => void): void;
        /**
         * Unregisters an advertisement and stops its advertising.
         * If the advertisement fails to unregister the only way
         *  to stop advertising might be to restart the device.
         * @since Since Chrome 47.
         * @param advertisementId Id of the advertisement to unregister.
         * @param callback Called once the advertisement is unregistered and is no longer being advertised.
         */
        function unregisterAdvertisement(advertisementId: number, callback: () => void): void;
        /**
         * Resets advertising on the current device. It will unregister and stop all existing advertisements.
         * @since Since Chrome 61.
         * @param callback Called once the advertisements are reset.
         */
        function resetAdvertising(callback: () => void): void;
        /**
         * Set's the interval betweeen two consecutive advertisements.
         * Note: This is a best effort.
         * The actual interval may vary non-trivially from the requested intervals.
         * On some hardware, there is a minimum interval of 100ms.
         * The minimum and maximum values cannot exceed the the range allowed by the Bluetooth 4.2 specification.
         * @since Since Chrome 55.
         * @param minInterval Minimum interval between advertisments (in milliseconds). This cannot be lower than 20ms (as per the spec).
         * @param maxInterval Maximum interval between advertisments (in milliseconds). This cannot be more than 10240ms (as per the spec).
         * @param callback Called once the interval has been set.
         */
        function setAdvertisingInterval(minInterval: number, maxInterval: number, callback: () => void): void;
        /**
         * Sends a response for a characteristic or descriptor read/write request. This function is only available if the app has both the bluetooth:low_energy and the bluetooth:peripheral permissions set to true. The peripheral permission may not be available to all apps.
         * @since Since Chrome 52.
         * @param response The response to the request.
         */
        function sendRequestResponse(response: IResponse): void;
        /** Fired whan a new GATT service has been discovered on a remote device. */
        var onServiceAdded: chrome.events.Event<(service: Service) => void>;
        /**
         * Fired when the state of a remote GATT service changes.
         * This involves any characteristics and/or descriptors
         *   that get added or removed from the service, as well as
         *   "ServiceChanged" notifications from the remote device.
         */
        var onServiceChanged: chrome.events.Event<(service: Service) => void>;
        /** Fired when a GATT service that was previously discovered on a remote device has been removed. */
        var onServiceRemoved: chrome.events.Event<(service: Service) => void>;
        /**
         * Fired when the value of a remote GATT characteristic changes,
         *   either as a result of a read request,
         *   or a value change notification/indication.
         * This event will only be sent if the app has enabled notifications
         *   by calling startCharacteristicNotifications.
         */
        var onCharacteristicValueChanged: chrome.events.Event<(characteristic: Characteristic) => void>;
        /**
         * Fired when the value of a remote GATT characteristic descriptor changes,
         *   usually as a result of a read request.
         * This event exists mostly for convenience and will always be sent after
         *   a successful call to readDescriptorValue.
         */
        var onDescriptorValueChanged: chrome.events.Event<(descriptor: Descriptor) => void>;
        /**
         * Fired when a connected central device requests to read the value of
         *   a characteristic registered on the local GATT server.
         * Not responding to this request for a long time may lead to a disconnection.
         * This event is only available if the app has both the bluetooth:low_energy
         *   and the bluetooth:peripheral permissions set to true.
         * The peripheral permission may not be available to all apps.
         * @since Since Chrome 52.
         */
        var onCharacteristicReadRequest: chrome.events.Event<(characteristic: Characteristic) => void>;
        /**
         * Fired when a connected central device requests to write the value of
         *   a characteristic registered on the local GATT server.
         * Not responding to this request for a long time may lead to a disconnection.
         * This event is only available if the app has both the bluetooth:low_energy
         *   and the bluetooth:peripheral permissions set to true.
         * The peripheral permission may not be available to all apps.
         * @since Since Chrome 52.
         */
        var onCharacteristicWriteRequest: chrome.events.Event<(characteristic: Characteristic) => void>;
        /**
         * Fired when a connected central device requests to read the value of
         *   a descriptor registered on the local GATT server.
         * Not responding to this request for a long time may lead to a disconnection.
         * This event is only available if the app has both the bluetooth:low_energy
         *   and the bluetooth:peripheral permissions set to true.
         * The peripheral permission may not be available to all apps.
         * @since Since Chrome 52.
         */
        var onDescriptorReadRequest: chrome.events.Event<(descriptor: Descriptor) => void>;
        /**
         * Fired when a connected central device requests to write the value of
         *   a descriptor registered on the local GATT server.
         * Not responding to this request for a long time may lead to a disconnection.
         * This event is only available if the app has both the bluetooth:low_energy
         *   and the bluetooth:peripheral permissions set to true.
         * The peripheral permission may not be available to all apps.
         */
        var onDescriptorWriteRequest: chrome.events.Event<(descriptor: Descriptor) => void>;
    }
    /**
     * Use the chrome.bluetoothSocket API to send and receive data to Bluetooth devices using RFCOMM and L2CAP connections.
     * @since Chrome 37
     * Manifest: 'bluetooth': {...}
     * Important: This API works only on OS X, Windows and Chrome OS.
     */
    namespace bluetoothSocket {
        /* NOT IMPLEMENTED YET */
    }

    ////////////////////
    // Browser
    ////////////////////
    /**
     * Use the chrome.browser API to interact with the Chrome browser associated with
     * the current application and Chrome profile.
     */
    namespace browser {
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
    // Commands
    ////////////////////
    /**
     * Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example, an action to open the browser action or send a command to the extension.
     * Availability: Since Chrome 25.
     * Manifest:  'commands': {...}
     */
    namespace commands {
        interface Command {
            /** Optional. The name of the Extension Command  */
            name?: string;
            /** Optional. The Extension Command description  */
            description?: string;
            /** Optional. The shortcut active for this command, or blank if not active.  */
            shortcut?: string;
        }

        interface CommandEvent extends chrome.events.Event<(command: string) => void> { }

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
    // Context Menus
    ////////////////////
    /**
     * Use the chrome.contextMenus API to add items to Google Chrome's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.
     * Availability: Since Chrome 6.
     * Permissions:  'contextMenus'
     */
    namespace contextMenus {
        /**
        * The different contexts a menu can appear in. Specifying 'all' is equivalent to the combination of all other contexts except for 'launcher'. The 'launcher' context is only supported by apps and is used to add menu items to the context menu that appears when clicking on the app icon in the launcher/taskbar/dock/etc. Different platforms might put limitations on what is actually supported in a launcher context menu.
        **/
        export type ContextType = 'all' | 'page' | 'frame' | 'selection' | 'link' | 'editable' | 'image' | 'video' | 'audio' | 'launcher' | 'browser_action' | 'page_action';
        /**
        * The type of menu item.
        **/
        export type ItemType = 'normal' | 'checkbox' | 'radio' | 'separator';

        interface OnClickData {
            /**
             * Optional.
             * @since Since Chrome 35.
             * The text for the context selection, if any.
             */
            selectionText?: string;
            /**
             * Optional.
             * @since Since Chrome 35.
             * A flag indicating the state of a checkbox or radio item after it is clicked.
             */
            checked?: boolean;
            /**
             * @since Since Chrome 35.
             * The ID of the menu item that was clicked.
             */
            menuItemId: any;
            /**
             * Optional.
             * @since Since Chrome 35.
             * The URL of the frame of the element where the context menu was clicked, if it was in a frame.
             */
            frameUrl?: string;
            /**
             * @since Since Chrome 35.
             * A flag indicating whether the element is editable (text input, textarea, etc.).
             */
            editable: boolean;
            /**
             * Optional.
             * @since Since Chrome 35.
             * One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.
             */
            mediaType?: string;
            /**
             * Optional.
             * @since Since Chrome 35.
             * A flag indicating the state of a checkbox or radio item before it was clicked.
             */
            wasChecked?: boolean;
            /**
             * @since Since Chrome 35.
             * The URL of the page where the menu item was clicked. This property is not set if the click occured in a context where there is no current page, such as in a launcher context menu.
             */
            pageUrl: string;
            /**
             * Optional.
             * @since Since Chrome 35.
             * If the element is a link, the URL it points to.
             */
            linkUrl?: string;
            /**
             * Optional.
             * @since Since Chrome 35.
             * The parent ID, if any, for the item clicked.
             */
            parentMenuItemId?: any;
            /**
             * Optional.
             * @since Since Chrome 35.
             * Will be present for elements with a 'src' URL.
             */
            srcUrl?: string;
        }

        interface CreateProperties {
            /** Optional. Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see Match Patterns.  */
            documentUrlPatterns?: string[];
            /** Optional. The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items.  */
            checked?: boolean;
            /** Optional. The text to be displayed in the item; this is required unless type is 'separator'. When the context is 'selection', you can use %s within the string to show the selected text. For example, if this parameter's value is 'Translate '%s' to Pig Latin' and the user selects the word 'cool', the context menu item for the selection is 'Translate 'cool' to Pig Latin'.  */
            title?: string;
            /** Optional. List of contexts this menu item will appear in. Defaults to ['page'] if not specified.  */
            contexts?: string[];
            /**
             * Optional.
             * Whether this context menu item is enabled or disabled. Defaults to true.
             * @since Since Chrome 20.
             */
            enabled?: boolean;
            /** Optional. Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.  */
            targetUrlPatterns?: string[];
            /**
             * Optional.
             * A function that will be called back when the menu item is clicked. Event pages cannot use this; instead, they should register a listener for chrome.contextMenus.onClicked.
             * @param info Information sent when a context menu item is clicked.
             */
            onclick?: (info: OnClickData) => void;
            /** Optional. The ID of a parent menu item; this makes the item a child of a previously added item.  */
            parentId?: any;
            /** Optional. The type of menu item. Defaults to 'normal' if not specified.  */
            type?: string;
            /**
             * Optional.
             * @since Since Chrome 21.
             * @description The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension.
             */
            id?: string;
            /**
             * @description Whether the item is visible in the menu.
             * @since Since Chrome 62
             */
            visible?: boolean;
        }

        interface UpdateProperties {
            documentUrlPatterns?: string[];
            checked?: boolean;
            title?: string;
            contexts?: string[];
            /**
             * @since Chrome 20
             **/
            enabled?: boolean;
            targetUrlPatterns?: string[];
            onclick?: (info: OnClickData) => void;
            /** Optional. Note: You cannot change an item to be a child of one of its own descendants.  */
            parentId?: any;
            type?: string;
            /**
             * @description Whether the item is visible or not.
             * @since Since Chrome 62
             */
            visible?: boolean;
        }

        interface MenuClickedEvent extends chrome.events.Event<(info: OnClickData) => void> { }

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
    // Document Scan
    ////////////////////
    /**
     * Use the chrome.documentScan API to discover and retrieve images from attached paper document scanners.
     * Availability: Since Chrome 44.
     * Permissions:  'documentScan'
     * Important: This API works only on Chrome OS.
     */
    namespace documentScan {
        interface DocumentScanOptions {
            /** Optional. The MIME types that are accepted by the caller.  */
            mimeTypes?: string[];
            /** Optional. The number of scanned images allowed (defaults to 1).  */
            maxImages?: number;
        }

        interface DocumentScanCallbackArg {
            /** The data image URLs in a form that can be passed as the 'src' value to an image tag. */
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
    // Events
    ////////////////////
    /**
     * The chrome.events namespace  contains common types used by APIs dispatching events to notify you when something interesting happens.
     * Availability: Since Chrome 21.
     */
    namespace events {
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
        interface Event<T> {
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
    // Extension Types
    ////////////////////

    /**
     * Primary for extensions, but also used in apps.
     * https://developer.chrome.com/extensions/extensionTypes#type-ImageDetails
     **/
    namespace extensionTypes {
        /**
         * The format of an image.
         **/
        export type ImageFormat = 'jpeg' | 'png';
        /**
         * Details about the format and quality of an image.
         */
        interface ImageDetails {
            /**
             * @description The format of the resulting image. Default is 'jpeg'.
             * @type {ImageFormat}
             * @memberof ImageDetails
             */
            format?: ImageFormat;
            /**
             * @description When format is 'jpeg', controls the quality of the resulting image. This value is ignored for PNG images. As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed to store it will decrease.
             * @type {number}
             * @memberof ImageDetails
             */
            quality?: number;
        }
        /**
         * The soonest that the JavaScript or CSS will be injected into the tab.
         **/
        export type RunAt = 'document_start' | 'document_end' | 'document_idle';
        /**
         * The origin of injected CSS.
         **/
        export type CSSOrigin = 'author' | 'user';
        /**
         * @description Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
         * @interface InjectDetails
         */
        interface InjectDetails {
            /**
             * JavaScript or CSS code to inject.
             * Warning:
             * Be careful using the code parameter. Incorrect use of it may open your extension to cross site scripting attacks.
             * @type {string}
             * @memberof InjectDetails
             */
            code?: string;
            /**
             * @description JavaScript or CSS file to inject.
             * @type {string}
             * @memberof InjectDetails
             */
            file?: string;
            /**
             * @description If allFrames is true, implies that the JavaScript or CSS should be injected into all frames of current page. By default, it's false and is only injected into the top frame. If true and frameId is set, then the code is inserted in the selected frame and all of its child frames.
             * @type {boolean}
             * @memberof InjectDetails
             */
            allFrames?: boolean;
            /**
             * @description The frame where the script or CSS should be injected. Defaults to 0 (the top-level frame).
             * @since Since Chrome 50.
             * @type {number}
             * @memberof InjectDetails
             */
            frameId?: number;
            /**
             * @description If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is false.
             * @type {boolean}
             * @memberof InjectDetails
             */
            matchAboutBlank?: boolean;
            /**
             * @description The soonest that the JavaScript or CSS will be injected into the tab. Defaults to 'document_idle'.
             * @type {RunAt}
             * @memberof InjectDetails
             */
            runAt: RunAt;
            /**
             * @description The origin of the CSS to inject. This may only be specified for CSS, not JavaScript. Defaults to 'author'.
             * @since Since Chrome 66.
             * @type {CSSOrigin}
             * @memberof InjectDetails
             */
            cssOrigin: CSSOrigin;
        }
    }

    ////////////////////
    // FileSystem
    ////////////////////
    /**
     * Use the chrome.fileSystem API to create, read, navigate, and write to the user's local file system.
     * With this API, Chrome Apps can read and write to a user-selected location.
     * For example, a text editor app can use the API to read and write local documents.
     * All failures are notified via chrome.runtime.lastError.
     */
    namespace fileSystem {

        interface AcceptOptions {
            /**
             * This is the optional text description for this option.
             * If not present, a description will be automatically generated;
             * typically containing an expanded list of valid extensions (e.g. 'text/html' may expand to '*.html, *.htm').
             */
            description?: string;
            /**
             * Mime-types to accept, e.g. 'image/jpeg' or 'audio/*'. One of mimeTypes or extensions must contain at least one valid element.
             */
            mimeTypes?: string[];
            /**
             * Extensions to accept, e.g. 'jpg' | 'gif' | 'crx'.
             */
            extensions?: string[];
        }

        interface ChooseEntryOptions {
            /**
             * Type of the prompt to show. The default is 'openFile'.
             * openFile
             *  - Prompts the user to open an existing file and returns a FileEntry on success. From Chrome 31 onwards, the FileEntry will be writable if the application has the 'write' permission under 'fileSystem'; otherwise, the FileEntry will be read-only.
             * openWritableFile
             *  - Prompts the user to open an existing file and returns a writable FileEntry on success. Calls using this type will fail with a runtime error if the application doesn't have the 'write' permission under 'fileSystem'.
             * saveFile
             *  - Prompts the user to open an existing file or a new file and returns a writable FileEntry on success. Calls using this type will fail with a runtime error if the application doesn't have the 'write' permission under 'fileSystem'.
             * openDirectory
             *  - Prompts the user to open a directory and returns a DirectoryEntry on success. Calls using this type will fail with a runtime error if the application doesn't have the 'directory' permission under 'fileSystem'. If the application has the 'write' permission under 'fileSystem', the returned DirectoryEntry will be writable; otherwise it will be read-only. New in Chrome 31.
             */
            type?: 'openFile' | 'openWritableFile' | 'saveFile' | 'openDirectory';
            /** The suggested file name that will be presented to the user as the default name to read or write. This is optional. */
            suggestedName?: string;
            /** The optional list of accept options for this file opener. Each option will be presented as a unique group to the end-user. */
            accepts?: AcceptOptions[];
            /**
             * Whether to accept all file types, in addition to the options specified in the accepts argument.
             * The default is true. If the accepts field is unset or contains no valid entries, this will always be reset to true.
             */
            acceptsAllTypes?: boolean;
            /**
             * Whether to accept multiple files. This is only supported for openFile and openWritableFile.
             * The callback to chooseEntry will be called with a list of entries if this is set to true. Otherwise it will be called with a single Entry.
             */
            acceptsMultiple?: boolean;
        }

        type ChildChangeType = 'created' | 'removed' | 'changed';

        interface Volume {
            /** The ID of the requested volume. */
            volumeId: string;
            /** Whether the requested file system should be writable. The default is read-only. */
            writable?: boolean;
        }

        /**
         * Get the display path of an Entry object.
         * The display path is based on the full path of the file or directory on the local file system, but may be made more readable for display purposes.
         */
        export function getDisplayPath(entry: Entry, callback: (displayPath: string) => void): void;
        /**
         * Get a writable Entry from another Entry. This call will fail with a runtime error if the application does not have the 'write' permission under 'fileSystem'.
         * If entry is a DirectoryEntry, this call will fail if the application does not have the 'directory' permission under 'fileSystem'.
         */
        export function getWritableEntry(entry: Entry, callback: (entry: Entry) => void): void;
        /** Gets whether this Entry is writable or not. */
        export function isWritableEntry(entry: Entry, callback: (isWritable: boolean) => void): void;
        /** Ask the user to choose a file or directory. */
        export function chooseEntry(callback: (entry: Entry) => void): void;
        /** Ask the user to choose a file or directory. */
        export function chooseEntry(callback: (fileEntries: FileEntry[]) => void): void;
        /** Ask the user to choose a file or directory. */
        export function chooseEntry(options: ChooseEntryOptions, callback: (entry: Entry) => void): void;
        /** Ask the user to choose a file or directory. */
        export function chooseEntry(options: ChooseEntryOptions, callback: (fileEntries: FileEntry[]) => void): void;
        /** Returns the file entry with the given id if it can be restored. This call will fail with a runtime error otherwise. */
        export function restoreEntry(id: string, callback: (entry: Entry) => void): void;
        /** Returns whether the app has permission to restore the entry with the given id. */
        export function isRestorable(id: string, callback: (isRestorable: boolean) => void): void;
        /**
         * Returns an id that can be passed to restoreEntry to regain access to a given file entry.
         * Only the 500 most recently used entries are retained, where calls to retainEntry and restoreEntry count as use.
         * If the app has the 'retainEntries' permission under 'fileSystem', entries are retained indefinitely.
         * Otherwise, entries are retained only while the app is running and across restarts.
         * */
        export function retainEntry(entry: Entry): string;
        /**
         * Requests access to a file system for a volume represented by options.volumeId.
         * If options.writable is set to true, then the file system will be writable.
         * Otherwise, it will be read-only.
         * The writable option requires the 'fileSystem': {'write'} permission in the manifest.
         * Available to kiosk apps running in kiosk session only.
         * For manual-launch kiosk mode, a confirmation dialog will be shown on top of the active app window.
         * In case of an error, fileSystem will be undefined, and chrome.runtime.lastError will be set.
         */
        export function requestFileSystem(options: Volume, callback: (fileSystem: FileSystem) => void): void;
        /**
         * Returns a list of volumes available for requestFileSystem().
         * The 'fileSystem': {'requestFileSystem'} manifest permission is required.
         * Available to kiosk apps running in the kiosk session only.
         * In case of an error, volumes will be undefined, and chrome.runtime.lastError will be set.
         */
        export function getVolumeList(callback: (volumes: Volume[]) => void): void;
        export var onVolumeListChanged: chrome.events.Event<(object: Volume[]) => void>;
    }


    ////////////////////
    // File System Provider
    ////////////////////
    /**
     * Use the chrome.fileSystemProvider API to create file systems, that can be accessible from the file manager on Chrome OS.
     * Availability: Since Chrome 40.
     * Permissions:  'fileSystemProvider'
     * Important: This API works only on Chrome OS.
     */
    namespace fileSystemProvider {
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
            modificationTime: any;
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

        interface RequestedEvent extends chrome.events.Event<(options: RequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void> { }

        interface MetadataRequestedEvent extends chrome.events.Event<(options: MetadataRequestedEventOptions, successCallback: (metadata: EntryMetadata) => void, errorCallback: (error: string) => void) => void> { }

        interface DirectoryPathRequestedEvent extends chrome.events.Event<(options: DirectoryPathRequestedEventOptions, successCallback: (entries: EntryMetadata[], hasMore: boolean) => void, errorCallback: (error: string) => void) => void> { }

        interface OpenFileRequestedEvent extends chrome.events.Event<(options: OpenFileRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void> { }

        interface OpenedFileRequestedEvent extends chrome.events.Event<(options: OpenedFileRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void> { }

        interface OpenedFileOffsetRequestedEvent extends chrome.events.Event<(options: OpenedFileOffsetRequestedEventOptions, successCallback: (data: ArrayBuffer, hasMore: boolean) => void, errorCallback: (error: string) => void) => void> { }

        interface DirectoryPathRecursiveRequestedEvent extends chrome.events.Event<(options: DirectoryPathRecursiveRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void> { }

        interface EntryPathRecursiveRequestedEvent extends chrome.events.Event<(options: EntryPathRecursiveRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void> { }

        interface FilePathRequestedEvent extends chrome.events.Event<(options: FilePathRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void> { }

        interface SourceTargetPathRequestedEvent extends chrome.events.Event<(options: SourceTargetPathRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void> { }

        interface FilePathLengthRequestedEvent extends chrome.events.Event<(options: FilePathLengthRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void> { }

        interface OpenedFileIoRequestedEvent extends chrome.events.Event<(options: OpenedFileIoRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void> { }

        interface OperationRequestedEvent extends chrome.events.Event<(options: OperationRequestedEventOptions, successCallback: Function, errorCallback: (error: string) => void) => void> { }

        interface OptionlessRequestedEvent extends chrome.events.Event<(successCallback: Function, errorCallback: (error: string) => void) => void> { }

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
         * Value of tag can be any string which is unique per call, so it's possible to identify the last registered notification. Eg. if the providing extension starts after a reboot, and the last registered notification's tag is equal to '123', then it should call notify for all changes which happened since the change tagged as '123'. It cannot be an empty string.
         * Not all providers are able to provide a tag, but if the file system has a changelog, then the tag can be eg. a change number, or a revision number.
         * Note that if a parent directory is removed, then all descendant entries are also removed, and if they are watched, then the API must be notified about the fact. Also, if a directory is renamed, then all descendant entries are in fact removed, as there is no entry under their original paths anymore.
         * In case of an error, runtime.lastError will be set will a corresponding error code.
         * @param callback A generic result callback to indicate success or failure.
         * If you specify the callback parameter, it should be a function that looks like this:
         * function() {...};
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
        /** Raised when creating a file is requested. If the file already exists, then errorCallback must be called with the 'EXISTS' error code. */
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
    }

    ////////////////////
    // Google Cloud Messaging
    ////////////////////
    /**
     * Use chrome.gcm to enable apps and extensions to send and receive messages through the Google Cloud Messaging Service.
     * Availability: Since Chrome 35.
     * Permissions:  'gcm'
     */
    namespace gcm {
        interface IGCMData {
            'collapse_key'?: never;
            'goog'?: never;
            'goog.'?: never;
            'google'?: never;
            'GOOGLE'?: never;
            [key: string]: any;
        }
        interface OutgoingMessage {
            /** The ID of the server to send the message to as assigned by Google API Console. */
            destinationId: string;
            /** The ID of the message. It must be unique for each message in scope of the applications. See the Cloud Messaging documentation for advice for picking and handling an ID. */
            messageId: string;
            /** Optional. Time-to-live of the message in seconds. If it is not possible to send the message within that time, an onSendError event will be raised. A time-to-live of 0 indicates that the message should be sent immediately or fail if it's not possible. The maximum and a default value of time-to-live is 86400 seconds (1 day). */
            timeToLive?: number;
            /**
             * @description Message data to send to the server. Case-insensitive goog. and google, as well as case-sensitive collapse_key are disallowed as key prefixes. Sum of all key/value pairs should not exceed gcm.MAX_MESSAGE_SIZE.
             **/
            data: IGCMData;
        }

        interface IncomingMessage {
            /** The message data. */
            data: IGCMData;
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

        interface MessageReceptionEvent extends chrome.events.Event<(message: IncomingMessage) => void> { }

        interface MessageDeletionEvent extends chrome.events.Event<() => void> { }

        interface GcmErrorEvent extends chrome.events.Event<(error: GcmError) => void> { }

        /** The maximum size (in bytes) of all key/value pairs in a message. Default: 4096 */
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
    // HID
    ////////////////////
    /**
     * Use the chrome.hid API to interact with connected HID devices. This API provides access to HID operations from within the context of an app. Using this API, apps can function as drivers for hardware devices. Errors generated by this API are reported by setting runtime.lastError and executing the function's regular callback. The callback's regular parameters will be undefined in this case.
     * @since Chrome 38
     */
    namespace hid {
        /** NOT YET IMPLEMENTED */
    }

    ////////////////////
    // i18n
    ////////////////////
    /**
     * Use the chrome.i18n infrastructure to implement internationalization across your whole app or extension.
     * @since Chrome 5.
     */
    namespace i18n {
        /** Holds detected ISO language code and its percentage in the input string */
        interface DetectedLanguage {
            /**
             * @description An ISO language code such as 'en' or 'fr'.
             * @description For a complete list of languages supported by this method:
             * @see [kLanguageInfoTable]{@link https://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc}.
             * @description For an unknown language, 'und' will be returned, which means that [percentage] of the text is unknown to CLD */
            language: string;

            /** The percentage of the detected language */
            percentage: number;
        }

        /** Holds detected language reliability and array of DetectedLanguage */
        interface LanguageDetectionResult {
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
        export function getMessage(messageName: string, substitutions?: any): string | undefined;
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
    // Identity
    ////////////////////
    /**
     * Use the chrome.identity API to get OAuth2 access tokens.
     * Permissions:  'identity'
     * @since Chrome 29.
     */
    namespace identity {
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
             * account is only supported when the 'enable-new-profile-management' flag is set.
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

        interface SignInChangeEvent extends chrome.events.Event<(account: AccountInfo, signedIn: boolean) => void> { }

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
     * Permissions:  'idle'
     * @since Chrome 6.
     */
    namespace idle {
        interface IdleStateChangedEvent extends chrome.events.Event<(newState: string) => void> { }

        /**
         * Returns 'locked' if the system is locked, 'idle' if the user has not generated any input for a specified number of seconds, or 'active' otherwise.
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

        /** Fired when the system changes to an active, idle or locked state. The event fires with 'locked' if the screen is locked or the screensaver activates, 'idle' if the system is unlocked and the user has not generated any input for a specified number of seconds, and 'active' when the user generates input on an idle system. */
        export var onStateChanged: IdleStateChangedEvent;
    }

    ////////////////////
    // InstanceID
    ////////////////////
    /**
     * Use chrome.instanceID to access the Instance ID service.
     * @since Chrome 46
     */
    namespace instanceID {
        /** NOT YET IMPLEMENTED */
    }

    ////////////////////
    // mDNS
    ////////////////////
    /**
     * 	Use the chrome.mdns API to discover services over mDNS. This comprises a subset of the features of the NSD spec: http://www.w3.org/TR/discovery-api/
     * @since Chrome 31
     */
    namespace mdns {
        /** NOT YET IMPLEMENTED */
    }

    ////////////////////
    // Media Galleries
    ////////////////////
    namespace mediaGalleries {
        interface MediaFileSystemsOptions {
            interactive?: 'no' | 'yes' | 'if_needed';
        }

        interface MediaFileSystemMetadata {
            name: string;
            galleryId: string;
            deviceId?: string;
            isRemovable: boolean;
            isMediaDevice: boolean;
            isAvailable: boolean;
        }

        interface MetadataOptions {
            metadataType: 'all' | 'mimeTypeAndTags' | 'mimeTypeOnly';
        }

        interface RawTag {
            type: string;
            tags: { [name: string]: string; };
        }

        interface Metadata {
            // The browser sniffed mime type.
            mimeType: string;
            // Defined for images and video. In pixels.
            height?: number;
            width?: number;
            // Defined for images only.
            xResolution?: number;
            yResolution?: number;
            // Defined for audio and video. In seconds.
            duration?: number;
            // Defined for images and video. In degrees.
            rotation?: number;
            // Defined for images only.
            cameraMake?: string;
            cameraModel?: string;
            exposureTimeSeconds?: number;
            flashFired?: boolean;
            fNumber?: number;
            focalLengthMm?: number;
            isoEquivalent?: number;
            // Defined for audio and video only.
            album?: string;
            artist?: string;
            comment?: string;
            copyright?: string;
            disc?: number;
            genre?: string;
            language?: string;
            title?: string;
            track?: number;
            // All the metadata in the media file. For formats with multiple streams, stream order will be preserved. Container metadata is the first element.
            rawTags: RawTag[];
            // The images embedded in the media file's metadata. This is most often used for album art or video thumbnails.
            attachedImages: Blob[];
        }

        interface GalleryWatchResult {
            galleryId: string;
            success: boolean;
        }

        interface GalleryChangedEventArgs {
            type: 'contents_changed' | 'watch_dropped';
            galleryId: string;
        }

        interface ScanProgressEventArgs {
            // The type of progress event, i.e. start, finish, etc.
            type: 'start' | 'cancel' | 'finish' | 'error';
            // The number of Galleries found.
            galleryCount?: number;
            // Appoximate number of media files found; some file types can be either audio or video and are included in both counts.
            audioCount?: number;
            imageCount?: number;
            videoCount?: number;
        }

        export function getMediaFileSystems(callback: (mediaFileSystems: FileSystem[]) => void): void;
        export function getMediaFileSystems(options: MediaFileSystemsOptions, callback: (mediaFileSystems: FileSystem[]) => void): void;
        export function addUserSelectedFolder(callback: (mediaFileSystems: FileSystem[], selectedFileSystemName: string) => void): void;
        export function dropPermissionForMediaFileSystem(galleryId: string, callback?: () => void): void;
        export function startMediaScan(): void;
        export function cancelMediaScan(): void;
        export function addScanResults(callback: (mediaFileSystems: FileSystem[]) => void): void;
        export function getMediaFileSystemMetadata(mediaFileSystem: FileSystem): MediaFileSystemMetadata;
        export function getAllMediaFileSystemMetadata(callback: (metadatas: MediaFileSystemMetadata[]) => void): void;
        export function getMetadata(mediaFile: Blob, callback: (metadata: Metadata) => void): void;
        export function getMetadata(mediaFile: Blob, options: MetadataOptions, callback: (metadata: Metadata) => void): void;
        export function addGalleryWatch(galleryId: string, callback: (result: GalleryWatchResult) => void): void;
        export function removeGalleryWatch(galleryId: string): void;
        export function getAllGalleryWatch(callback: (galleryIds: string[]) => void): void;
        export function removeAllGalleryWatch(): void;

        export var onGalleryChanged: chrome.events.Event<(args: GalleryChangedEventArgs) => void>;
        export var onScanProgress: chrome.events.Event<(args: ScanProgressEventArgs) => void>;
    }

    ////////////////////////////////////
    // Open Network Configuration (ONC)
    ////////////////////////////////////
    /**
     * The chrome.networking.onc API is used for configuring network connections (Cellular, Ethernet, VPN, WiFi or WiMAX). This API is available in Chrome OS kiosk sessions.
     * Network connection configurations are specified following Open Network Configuration (ONC) specification.
     * NOTE: Most dictionary properties and enum values use UpperCamelCase to match the ONC specification instead of the JavaScript lowerCamelCase convention.
     */
    namespace networking.onc {
        export type ActivationStateType = 'Activated' | 'Activating' | 'NotActivated' | 'PartiallyActivated';
        export type CaptivePortalStatus = 'Unknown' | 'Offline' | 'Online' | 'Portal' | 'ProxyAuthRequired';
        export type ConnectionStateType = 'Connected' | 'Connecting' | 'NotConnected';
        export type IPConfigType = 'DHCP' | 'Static';
        export type NetworkType = 'All' | 'Cellular' | 'Ethernet' | 'VPN' | 'Wireless' | 'WiFi' | 'WiMAX';
        export type ProxySettingsType = 'Direct' | 'Manual' | 'PAC' | 'WPAD';
        interface ManagedBoolean {
            /**
             * @description The active value currently used by the network configuration manager (e.g. Shill).
             * @type {boolean}
             * @memberof ManagedBoolean
             */
            Active?: boolean,
            /**
             * @description The source from which the effective property value was determined.
             * @type {string}
             * @memberof ManagedBoolean
             */
            Effective?: string,
            /**
             * @description The property value provided by the user policy.
             * @type {boolean}
             * @memberof ManagedBoolean
             */
            UserPolicy?: boolean,
            /**
             * @description The property value provided by the device policy.
             * @type {boolean}
             * @memberof ManagedBoolean
             */
            DevicePolicy?: boolean,
            /**
             * @description The property value set by the logged in user. Only provided if |UserEditable| is true.
             * @type {boolean}
             * @memberof ManagedBoolean
             */
            UserSettings?: boolean,
            /**
             * @description The value set for all users of the device. Only provided if |DeviceEditiable| is true.
             * @type {boolean}
             * @memberof ManagedBoolean
             */
            SharedSettings?: boolean,
            /**
             * @description Whether a UserPolicy for the property exists and allows the property to be edited (i.e. the policy set recommended property value). Defaults to false.
             * @type {boolean}
             * @memberof ManagedBoolean
             */
            UserEditable?: boolean,
            /**
             * @description Whether a DevicePolicy for the property exists and allows the property to be edited (i.e. the policy set recommended property value). Defaults to false.
             * @type {boolean}
             * @memberof ManagedBoolean
             */
            DeviceEditable?: boolean
        }
        interface ManagedLong {
            /**
             * @description The active value currently used by the network configuration manager (e.g. Shill).
             * @type {number}
             * @memberof ManagedLong
             */
            Active?: number,
            /**
             * @description The source from which the effective property value was determined.
             * @type {string}
             * @memberof ManagedLong
             */
            Effective?: string,
            /**
             * @description The property value provided by the user policy.
             * @type {number}
             * @memberof ManagedLong
             */
            UserPolicy?: number,
            /**
             * @description The property value provided by the device policy.
             * @type {number}
             * @memberof ManagedLong
             */
            DevicePolicy?: number,
            /**
             * @description The property value set by the logged in user. Only provided if |UserEditable| is true.
             * @type {number}
             * @memberof ManagedLong
             */
            UserSettings?: number,
            /**
             * @description The value set for all users of the device. Only provided if |DeviceEditiable| is true.
             * @type {number}
             * @memberof ManagedLong
             */
            SharedSettings?: number,
            /**
             * @description Whether a UserPolicy for the property exists and allows the property to be edited (i.e. the policy set recommended property value). Defaults to false.
             * @type {boolean}
             * @memberof ManagedLong
             */
            UserEditable?: boolean,
            /**
             * @description Whether a DevicePolicy for the property exists and allows the property to be edited (i.e. the policy set recommended property value). Defaults to false.
             * @type {boolean}
             * @memberof ManagedLong
             */
            DeviceEditable?: boolean
        }
    }

    ////////////////////
    // Notifications
    // https://developer.chrome.com/extensions/notifications
    ////////////////////
    /**
     * Use the chrome.notifications API to create rich notifications using templates and show these notifications to users in the system tray.
     * Permissions:  'notifications'
     * @since Chrome 28.
     */
    namespace notifications {
        interface ButtonOptions {
            title: string;
            iconUrl?: string;
        }

        interface ItemOptions {
            /** Title of one item of a list notification. */
            title: string;
            /** Additional details about this item. */
            message: string;
        }

        interface NotificationOptions {
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

        interface NotificationClosedEvent extends chrome.events.Event<(notificationId: string, byUser: boolean) => void> { }

        interface NotificationClickedEvent extends chrome.events.Event<(notificationId: string) => void> { }

        interface NotificationButtonClickedEvent extends chrome.events.Event<(notificationId: string, buttonIndex: number) => void> { }

        interface NotificationPermissionLevelChangedEvent extends chrome.events.Event<(level: string) => void> { }

        interface NotificationShowSettingsEvent extends chrome.events.Event<() => void> { }

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
    // Permissions
    ////////////////////
    /**
     * Use the chrome.permissions API to request declared optional permissions at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary.
     * @since Chrome 16.
     */
    namespace permissions {
        interface Permissions {
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

        interface PermissionsRemovedEvent {
            /**
             * @param callback The callback parameter should be a function that looks like this:
             * function( Permissions permissions) {...};
             * Parameter permissions: The permissions that have been removed.
             */
            addListener(callback: (permissions: Permissions) => void): void;
        }

        interface PermissionsAddedEvent {
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
     * Use the chrome.power API to override the system's power management features.
     * Permissions:  'power'
     * @since Chrome 27.
     */
    namespace power {
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
     * Permissions:  'printerProvider'
     * @since Chrome 44.
     */
    namespace printerProvider {
        interface PrinterInfo {
            /** Unique printer ID. */
            id: string;
            /** Printer's human readable name. */
            name: string;
            /** Optional. Printer's human readable description. */
            description?: string;
        }

        interface PrinterCapabilities {
            /** Device capabilities in CDD format. */
            capabilities: any;
        }

        interface PrintJob {
            /** ID of the printer which should handle the job. */
            printerId: string;
            /** The print job title. */
            title: string;
            /** Print ticket in  CJT format. */
            ticket: Object;
            /** The document content type. Supported formats are 'application/pdf' and 'image/pwg-raster'. */
            contentType: string;
            /** Blob containing the document data to print. Format must match |contentType|. */
            document: Blob;
        }

        interface PrinterRequestedEvent extends chrome.events.Event<(resultCallback: (printerInfo: PrinterInfo[]) => void) => void> { }

        interface PrinterInfoRequestedEvent extends chrome.events.Event<(device: any, resultCallback: (printerInfo?: PrinterInfo) => void) => void> { }

        interface CapabilityRequestedEvent extends chrome.events.Event<(printerId: string, resultCallback: (capabilities: PrinterCapabilities) => void) => void> { }

        interface PrintRequestedEvent extends chrome.events.Event<(printJob: PrintJob, resultCallback: (result: string) => void) => void> { }

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
    // Runtime
    ////////////////////
    /**
     * Use the chrome.runtime API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs.
     * @since Chrome 22
     */
    namespace runtime {
        /** This will be defined during an API method callback if there was an error */
        export var lastError: LastError | undefined;
        /** The ID of the extension/app. */
        export var id: string;

        interface LastError {
            /** Optional. Details about the error which occurred.  */
            message?: string;
        }

        interface ConnectInfo {
            name?: string;
        }

        interface InstalledDetails {
            /**
             * The reason that this event is being dispatched.
             * One of: 'install', 'update', 'chrome_update', or 'shared_module_update'
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

        interface MessageOptions {
            /** Whether the TLS channel ID will be passed into onMessageExternal for processes that are listening for the connection event. */
            includeTlsChannelId?: boolean;
        }

        /**
         * An object containing information about the script context that sent a message or request.
         * @since Chrome 26.
         */
        interface MessageSender {
            /** The ID of the extension or app that opened the connection, if any. */
            id?: string;
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
        interface PlatformInfo {
            /**
             * The operating system chrome is running on.
             * One of: 'mac', 'win', 'android', 'cros', 'linux', or 'openbsd'
             */
            os: string;
            /**
             * The machine's processor architecture.
             * One of: 'arm', 'x86-32', or 'x86-64'
             */
            arch: string;
            /**
             * The native client architecture. This may be different from arch on some platforms.
             * One of: 'arm', 'x86-32', or 'x86-64'
             */
            nacl_arch: string;
        }

        /**
         * An object which allows two way communication with other pages.
         * @since Chrome 26.
         */
        interface Port {
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

        interface UpdateAvailableDetails {
            /** The version number of the available update. */
            version: string;
        }

        interface UpdateCheckDetails {
            /** The version of the available update. */
            version: string;
        }

        interface PortDisconnectEvent extends chrome.events.Event<(port: Port) => void> { }

        interface PortMessageEvent extends chrome.events.Event<(message: any, port: Port) => void> { }

        interface ExtensionMessageEvent extends chrome.events.Event<(message: any, sender: MessageSender, sendResponse: (response: any) => void) => void> { }

        interface ExtensionConnectEvent extends chrome.events.Event<(port: Port) => void> { }

        interface RuntimeInstalledEvent extends chrome.events.Event<(details: InstalledDetails) => void> { }

        interface RuntimeEvent extends chrome.events.Event<() => void> { }

        interface RuntimeRestartRequiredEvent extends chrome.events.Event<(reason: string) => void> { }

        interface RuntimeUpdateAvailableEvent extends chrome.events.Event<(details: UpdateAvailableDetails) => void> { }

        interface ManifestIcons {
            [size: number]: string;
        }

        interface ManifestAction {
            default_icon?: ManifestIcons;
            default_title?: string;
            default_popup?: string;
        }

        interface SearchProvider {
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

        interface Manifest {
            /** Required */
            app: {
                background: {
                    scripts?: string[];
                }
            }
            /** Should be set to 2 */
            manifest_version: number;
            name: string;
            version: string;

            // Recommended
            default_locale?: string;
            description?: string;
            icons?: ManifestIcons;
            // Optional
            action_handlers?: string[];
            author?: any;
            automation?: any;
            bluetooth?: {
                uuids?: string[];
                socket?: boolean;
                low_energy?: boolean;
                peripheral?: boolean;
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
            current_locale?: string;
            event_rules?: {
                event?: string;
                actions?: {
                    type: string;
                }[];
                conditions?: {
                    type: string,
                    css?: string[]
                }[];
            }[];
            file_handlers?: {
                [key: string]: {
                    extensions?: Array<'*' | string | { include_directories: boolean }>;
                    types?: Array<'*' | string | { include_directories: boolean }>;
                }
            }[];
            file_system_provider_capabilities?: {
                configurable?: boolean;
                multiple_mounts?: boolean;
                source?: string;
            };
            import?: {
                id: string;
            }[];
            key?: string;
            kiosk?: {
                always_update: any;
                required_platform_version: any;
            };
            kiosk_enabled?: boolean,
            kiosk_only?: boolean,
            kiosk_secondary_apps: any;
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
            optional_permissions?: string[];
            permissions?: string[];
            platforms?: {
                nacl_arch?: string;
                sub_package_path: string;
            }[];
            /**
             * Technologies required by the app or extension. Hosting sites such as the Chrome Web Store may use this list to dissuade users from installing apps or extensions that will not work on their computer. Supported requirements currently include '3D' and 'plugins'; additional requirements checks may be added in the future.
             */
            requirements?: {
                /**
                 * The '3D' requirement denotes GPU hardware acceleration. The 'webgl' requirement refers to the WebGL API. For more information on Chrome 3D graphics support, see the help article on WebGL and 3D graphics. You can list the 3D-related features your app requires, as demonstrated in the following example:
                 * 'requirements': {
                 *   '3D': {
                 *     'features': ['webgl']
                 *   }
                 * }
                 */
                '3D'?: {
                    features?: Array<string | 'webgl'>;
                };
                /**
                 * The 'plugins' requirement indicates if an app or extension requires NPAPI to run. This requirement is enabled by default when the manifest includes the 'plugins' field. For apps and extensions that still work when plugins aren't available, you can disable this requirement by setting NPAPI to false. You can also enable this requirement manually, by setting NPAPI to true, as shown in this example:
                 * 'requirements': {
                 *   'plugins': {
                 *     'npapi': true
                 *   }
                 * }
                 */
                plugins?: {
                    npapi?: boolean;
                }

                [key: string]: any;
            };
            /**
             * @deprecated Warning: Starting in version 57, Chrome will no longer allow external web content (including embedded frames and scripts) inside sandboxed pages. Please use a webview instead.
             */
            sandbox?: {
                pages: string[];
                content_security_policy?: string;
            };
            short_name?: string;
            signature?: any;
            sockets?: {
                tcp?: {
                    connect: string | '*';
                };
                udp?: {
                    send: string | '*';
                }
            };
            storage?: {
                managed_schema: string
            };
            system_indicator?: any;
            update_url?: string;
            url_handlers?: {
                [name: string]: {
                    matches: string[];
                    title?: string;
                }
            };
            usb_printers?: {
                filters: {
                    vendorId?: number;
                    productId?: number;
                    interfaceClass?: number;
                    interfaceSubclass?: number;
                    interfaceProtocol?: number;
                }[]
            };
            version_name?: string;
            webview?: {
                partitions?: {
                    name: string;
                    accessible_resources: string[];
                }[]
            }
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
         * Parameter status: Result of the update check. One of: 'throttled', 'no_update', or 'update_available'
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
    // Serial
    ////////////////////
    /**
     * Use the chrome.serial API to read from and write to a device connected to a serial port.
     * @since Chrome 23
     */
    namespace serial {
        /** NOT YET IMPLEMENTED */
    }

    ////////////////////
    // Socket
    ////////////////////
    namespace socket {
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

    namespace sockets.tcp {
        interface CreateInfo {
            socketId: number;
        }

        interface SendInfo {
            resultCode: number;
            bytesSent?: number;
        }

        interface ReceiveEventArgs {
            socketId: number;
            data: ArrayBuffer;
        }

        interface ReceiveErrorEventArgs {
            socketId: number;
            resultCode: number;
        }

        interface SocketProperties {
            persistent?: boolean;
            name?: string;
            bufferSize?: number;
        }

        interface SocketInfo {
            socketId: number;
            persistent: boolean;
            name?: string;
            bufferSize?: number;
            paused: boolean;
            connected: boolean;
            localAddress?: string;
            localPort?: number;
            peerAddress?: string;
            peerPort?: number;
        }

        export function create(callback: (createInfo: CreateInfo) => void): void;
        export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void;

        export function update(socketId: number, properties: SocketProperties, callback?: () => void): void;
        export function setPaused(socketId: number, paused: boolean, callback?: () => void): void;

        export function setKeepAlive(socketId: number,
            enable: boolean, callback: (result: number) => void): void;
        export function setKeepAlive(socketId: number,
            enable: boolean, delay: number, callback: (result: number) => void): void;

        export function setNoDelay(socketId: number, noDelay: boolean, callback: (result: number) => void): void;
        export function connect(socketId: number,
            peerAddress: string, peerPort: number, callback: (result: number) => void): void;
        export function disconnect(socketId: number, callback?: () => void): void;
        export function send(socketId: number, data: ArrayBuffer, callback: (sendInfo: SendInfo) => void): void;
        export function close(socketId: number, callback?: () => void): void;
        export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void;
        export function getSockets(callback: (socketInfos: SocketInfo[]) => void): void;

        export var onReceive: chrome.events.Event<(args: ReceiveEventArgs) => void>;
        export var onReceiveError: chrome.events.Event<(args: ReceiveErrorEventArgs) => void>;
    }

    /**
     * Use the chrome.sockets.tcpServer API to create server applications using TCP
     * connections. This API supersedes the TCP functionality previously found in
     * the chrome.socket API.
     *
     * @since Chrome 33
     * @see https://developer.chrome.com/apps/sockets_tcpServer
     */
    namespace sockets.tcpServer {
        interface CreateInfo {
            socketId: number;
        }

        interface AcceptEventArgs {
            socketId: number;
            clientSocketId: number;
        }

        interface AcceptErrorEventArgs {
            socketId: number;
            resultCode: number;
        }

        /**
         * @see https://developer.chrome.com/apps/sockets_tcpServer#type-SocketProperties
         */
        interface SocketProperties {
            /**
             * Flag indicating if the socket remains open when the event page of the
             * application is unloaded. The default value is 'false.' When the
             * application is loaded, any sockets previously opened with
             * persistent=true can be fetched with getSockets.
             *
             * @see http://developer.chrome.com/apps/app_lifecycle.html
             */
            persistent?: boolean;

            /** An application-defined string associated with the socket. */
            name?: string;
        }

        /**
         * @see https://developer.chrome.com/apps/sockets_tcpServer#type-SocketInfo
         */
        interface SocketInfo {
            /** The socket identifier. */
            socketId: number;

            /**
             * Flag indicating if the socket remains open when the event page of the
             * application is unloaded (see SocketProperties.persistent). The
             * default value is 'false'.
             */
            persistent: boolean;

            /** Application-defined string associated with the socket. */
            name?: string;

            /**
             * Flag indicating whether connection requests on a listening socket are
             * dispatched through the onAccept event or queued up in the listen
             * queue backlog. See setPaused. The default value is 'false'
             */
            paused: boolean;

            /** If the socket is listening, contains its local IPv4/6 address. */
            localAddress?: string;

            /** If the socket is listening, contains its local port. */
            localPort?: number;
        }

        /**
         * Creates a TCP server socket.
         *
         * @see https://developer.chrome.com/apps/sockets_tcpServer#method-create
         * @param callback Called when the socket has been created.
         */
        export function create(callback: (createInfo: CreateInfo) => void): void;

        /**
         * Creates a TCP server socket.
         *
         * @see https://developer.chrome.com/apps/sockets_tcpServer#method-create
         * @param properties The socket properties.
         * @param callback   Called when the socket has been created.
         */
        export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void;

        /**
         * Updates the socket properties.
         *
         * @see https://developer.chrome.com/apps/sockets_tcpServer#method-update
         * @param socketId   The socket identifier.
         * @param properties The properties to update.
         * @param callback   Called when the properties are updated.
         */
        export function update(socketId: number, properties: SocketProperties, callback?: () => void): void;

        /**
         * Enables or disables a listening socket from accepting new connections.
         * When paused, a listening socket accepts new connections until its backlog
         * (see listen function) is full then refuses additional connection
         * requests. onAccept events are raised only when the socket is un-paused.
         *
         * @see https://developer.chrome.com/apps/sockets_tcpServer#method-setPaused
         * @param callback Callback from the setPaused method.
         */
        export function setPaused(socketId: number, paused: boolean, callback?: () => void): void;

        /**
         * Listens for connections on the specified port and address. If the
         * port/address is in use, the callback indicates a failure.
         *
         * @see https://developer.chrome.com/apps/sockets_tcpServer#method-listen
         * @param socketId The socket identifier.
         * @param address  The address of the local machine.
         * @param port     The port of the local machine. When set to 0, a free port
         *                 is chosen dynamically. The dynamically allocated port can
         *                 be found by calling getInfo.
         * @param backlog  Length of the socket's listen queue. The default value
         *                 depends on the Operating System (SOMAXCONN), which
         *                 ensures a reasonable queue length for most applications.
         * @param callback Called when listen operation completes.
         */
        export function listen(socketId: number, address: string, port: number, backlog: number, callback: (result: number) => void): void;

        /**
         * Listens for connections on the specified port and address. If the
         * port/address is in use, the callback indicates a failure.
         *
         * @see https://developer.chrome.com/apps/sockets_tcpServer#method-listen
         * @param socketId The socket identifier.
         * @param address  The address of the local machine.
         * @param port     The port of the local machine. When set to 0, a free port
         *                 is chosen dynamically. The dynamically allocated port can
         *                 be found by calling getInfo.
         * @param callback Called when listen operation completes.
         */
        export function listen(socketId: number, address: string, port: number, callback: (result: number) => void): void;

        /**
         * Disconnects the listening socket, i.e. stops accepting new connections
         * and releases the address/port the socket is bound to. The socket
         * identifier remains valid, e.g. it can be used with listen to accept
         * connections on a new port and address.
         *
         * @see https://developer.chrome.com/apps/sockets_tcpServer#method-disconnect
         * @param socketId The socket identifier.
         * @param callback Called when the disconnect attempt is complete.
         */
        export function disconnect(socketId: number, callback?: () => void): void;

        /**
         * Disconnects and destroys the socket. Each socket created should be closed
         * after use. The socket id is no longer valid as soon at the function is
         * called. However, the socket is guaranteed to be closed only when the
         * callback is invoked.
         *
         * @see https://developer.chrome.com/apps/sockets_tcpServer#method-close
         * @param socketId The socket identifier.
         * @param callback Called when the close operation completes.
         */
        export function close(socketId: number, callback?: () => void): void;

        /**
         * Retrieves the state of the given socket.
         *
         * @see https://developer.chrome.com/apps/sockets_tcpServer#method-getInfo
         * @param socketId The socket identifier.
         * @param callback Called when the socket state is available.
         */
        export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void;

        /**
         * Retrieves the list of currently opened sockets owned by the application.
         *
         * @see https://developer.chrome.com/apps/sockets_tcpServer#method-getSockets
         * @param callback Called when the list of sockets is available.
         */
        export function getSockets(callback: (socketInfos: SocketInfo[]) => void): void;

        /**
         * Event raised when a connection has been made to the server socket.
         *
         * @see https://developer.chrome.com/apps/sockets_tcpServer#event-onAccept
         */
        export var onAccept: chrome.events.Event<(args: AcceptEventArgs) => void>;

        /**
         * Event raised when a network error occured while the runtime was waiting
         * for new connections on the socket address and port. Once this event is
         * raised, the socket is set to paused and no more onAccept events are
         * raised for this socket until the socket is resumed.
         *
         * @see https://developer.chrome.com/apps/sockets_tcpServer#event-onAcceptError
         */
        export var onAcceptError: chrome.events.Event<(args: AcceptErrorEventArgs) => void>;
    }

    /**
     * Use the chrome.sockets.udp API to send and receive data over the network
     * using UDP connections. This API supersedes the UDP functionality previously
     * found in the 'socket' API.
     *
     * @since Chrome 33
     * @see https://developer.chrome.com/apps/sockets_udp
     */
    namespace sockets.udp {
        interface CreateInfo {
            socketId: number;
        }

        interface SendInfo {
            resultCode: number;
            bytesSent?: number;
        }

        interface ReceiveEventArgs {
            socketId: number;
            data: ArrayBuffer;
            remoteAddress: string;
            remotePort: number;
        }

        interface ReceiveErrorEventArgs {
            socketId: number;
            resultCode: number;
        }

        /**
         * @see https://developer.chrome.com/apps/sockets_udp#type-SocketProperties
         */
        interface SocketProperties {
            /**
             * Flag indicating if the socket is left open when the event page of the
             * application is unloaded. The default value is 'false.' When the
             * application is loaded, any sockets previously opened with
             * persistent=true can be fetched with getSockets.
             * @see http://developer.chrome.com/apps/app_lifecycle.html
             */
            persistent?: boolean;

            /** An application-defined string associated with the socket. */
            name?: string;

            /**
             * The size of the buffer used to receive data. If the buffer is too
             * small to receive the UDP packet, data is lost. The default value is
             * 4096.
             */
            bufferSize?: number;
        }

        /**
         * @see https://developer.chrome.com/apps/sockets_udp#type-SocketInfo
         */
        interface SocketInfo {
            /** The socket identifier. */
            socketId: number;

            /**
             * Flag indicating whether the socket is left open when the application
             * is suspended (see SocketProperties.persistent).
             */
            persistent: boolean;

            /** Application-defined string associated with the socket. */
            name?: string;

            /**
             * The size of the buffer used to receive data. If no buffer size ha
             * been specified explictly, the value is not provided.
             */
            bufferSize?: number;

            /**
             * Flag indicating whether the socket is blocked from firing onReceive
             * events.
             */
            paused: boolean;

            /**
             * If the underlying socket is bound, contains its local IPv4/6 address.
             */
            localAddress?: string;

            /**
             * If the underlying socket is bound, contains its local port.
             */
            localPort?: number;
        }

        /**
         * Creates a UDP socket with default properties.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-create
         * @param createInfo.socketId The ID of the newly created socket.
         */
        export function create(callback: (createInfo: CreateInfo) => void): void;

        /**
         * Creates a UDP socket with the given properties.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-create
         * @param properties          The socket properties.
         * @param createInfo.socketId The ID of the newly created socket.
         */
        export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void;

        /**
         * Updates the socket properties.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-update
         * @param socketId   The socket ID.
         * @param properties The properties to update.
         * @param callback   Called when the properties are updated.
         */
        export function update(socketId: number, properties: SocketProperties, callback?: () => void): void;

        /**
         * Pauses or unpauses a socket. A paused socket is blocked from firing
         * onReceive events.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-setPaused
         * @param socketId The socket ID.
         * @param paused   Flag to indicate whether to pause or unpause.
         * @param callback Called when the socket has been successfully paused or
         *                 unpaused.
         */
        export function setPaused(socketId: number, paused: boolean, callback?: () => void): void;

        /**
         * Binds the local address and port for the socket. For a client socket, it
         * is recommended to use port 0 to let the platform pick a free port.
         *
         * Once the bind operation completes successfully, onReceive events are
         * raised when UDP packets arrive on the address/port specified -- unless
         * the socket is paused.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-bind
         * @param socketId The socket ID.
         * @param address  The address of the local machine. DNS name, IPv4 and IPv6
         *                 formats are supported. Use '0.0.0.0' to accept packets
         *                 from all local available network interfaces.
         * @param port     The port of the local machine. Use '0' to bind to a free
         *                 port.
         * @param callback Called when the bind operation completes.
         */
        export function bind(socketId: number, address: string, port: number, callback: (result: number) => void): void;

        /**
         * Sends data on the given socket to the given address and port. The socket
         * must be bound to a local port before calling this method.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-send
         * @param socketId The socket ID.
         * @param data     The data to send.
         * @param address  The address of the remote machine.
         * @param port     The port of the remote machine.
         * @param callback Called when the send operation completes.
         */
        export function send(socketId: number, data: ArrayBuffer, address: string, port: number, callback: (sendInfo: SendInfo) => void): void;

        /**
         * Closes the socket and releases the address/port the socket is bound to.
         * Each socket created should be closed after use. The socket id is no
         * longer valid as soon at the function is called. However, the socket is
         * guaranteed to be closed only when the callback is invoked.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-close
         * @param socketId The socket ID.
         * @param callback Called when the close operation completes.
         */
        export function close(socketId: number, callback?: () => void): void;

        /**
         * Retrieves the state of the given socket.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-getInfo
         * @param socketId The socket ID.
         * @param callback Called when the socket state is available.
         */
        export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void;

        /**
         * Retrieves the list of currently opened sockets owned by the application.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-getSockets
         * @param callback Called when the list of sockets is available.
         */
        export function getSockets(callback: (socketInfos: SocketInfo[]) => void): void;

        /**
         * Joins the multicast group and starts to receive packets from that group.
         * The socket must be bound to a local port before calling this method.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-joinGroup
         * @param socketId The socket ID.
         * @param address  The group address to join. Domain names are not supported.
         * @param callback Called when the joinGroup operation completes.
         */
        export function joinGroup(socketId: number, address: string, callback: (result: number) => void): void;

        /**
         * Leaves the multicast group previously joined using joinGroup. This is
         * only necessary to call if you plan to keep using the socket afterwards,
         * since it will be done automatically by the OS when the socket is closed.
         *
         * Leaving the group will prevent the router from sending multicast
         * datagrams to the local host, presuming no other process on the host is
         * still joined to the group.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-leaveGroup
         * @param socketId The socket ID.
         * @param address  The group address to leave. Domain names are not
         *                 supported.
         * @param callback Called when the leaveGroup operation completes.
         */
        export function leaveGroup(socketId: number, address: string, callback: (result: number) => void): void;

        /**
         * Sets the time-to-live of multicast packets sent to the multicast group.
         *
         * Calling this method does not require multicast permissions.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-setMulticastTimeToLive
         * @param socketId The socket ID.
         * @param ttl      The time-to-live value.
         * @param callback Called when the configuration operation completes.
         */
        export function setMulticastTimeToLive(socketId: number, ttl: number, callback: (result: number) => void): void;

        /**
         * Sets whether multicast packets sent from the host to the multicast group
         * will be looped back to the host.
         *
         * Note: the behavior of setMulticastLoopbackMode is slightly different
         * between Windows and Unix-like systems. The inconsistency happens only
         * when there is more than one application on the same host joined to the
         * same multicast group while having different settings on multicast
         * loopback mode. On Windows, the applications with loopback off will not
         * RECEIVE the loopback packets; while on Unix-like systems, the
         * applications with loopback off will not SEND the loopback packets to
         * other applications on the same host.
         * @see MSDN: http://goo.gl/6vqbj
         *
         * Calling this method does not require multicast permissions.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-setMulticastLoopbackMode
         * @param socketId The socket ID.
         * @param enabled  Indicate whether to enable loopback mode.
         * @param callback Called when the configuration operation completes.
         */
        export function setMulticastLoopbackMode(socketId: number, enabled: boolean, callback: (result: number) => void): void;

        /**
         * Gets the multicast group addresses the socket is currently joined to.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#method-getJoinedGroups
         * @param socketId The socket ID.
         * @param callback Called with an array of strings of the result.
         */
        export function getJoinedGroups(socketId: number, callback: (groups: string[]) => void): void;

        /**
         * Enables or disables broadcast packets on this socket.
         *
         * @since Chrome 44
         * @see https://developer.chrome.com/apps/sockets_udp#method-setBroadcast
         * @param socketId The socket ID.
         * @param enabled  true to enable broadcast packets, false to disable them.
         * @param callback Callback from the setBroadcast method.
         */
        export function setBroadcast(socketId: number, enabled: boolean, callback?: (result: number) => void): void;

        /**
         * Event raised when a UDP packet has been received for the given socket.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#event-onReceive
         */
        export var onReceive: chrome.events.Event<(args: ReceiveEventArgs) => void>;

        /**
         * Event raised when a network error occured while the runtime was waiting
         * for data on the socket address and port. Once this event is raised, the
         * socket is paused and no more onReceive events will be raised for this
         * socket until the socket is resumed.
         *
         * @see https://developer.chrome.com/apps/sockets_udp#event-onReceiveError
         */
        export var onReceiveError: chrome.events.Event<(args: ReceiveErrorEventArgs) => void>;
    }

    ////////////////////
    // Storage
    ////////////////////
    /**
     * Use the chrome.storage API to store, retrieve, and track changes to user data.
     * Permissions:  'storage'
     * @since Chrome 20.
     */
    namespace storage {
        interface StorageArea {
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
             * Primitive values such as numbers will serialize as expected. Values with a typeof 'object' and 'function' will typically serialize to {}, with the exception of Array (serializes as expected), Date, and Regex (serialize using their String representation).
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

        interface StorageChange {
            /** Optional. The new value of the item, if there is a new value. */
            newValue?: any;
            /** Optional. The old value of the item, if there was an old value. */
            oldValue?: any;
        }

        interface LocalStorageArea extends StorageArea {
            /** The maximum amount (in bytes) of data that can be stored in local storage, as measured by the JSON stringification of every value plus every key's length. This value will be ignored if the extension has the unlimitedStorage permission. Updates that would cause this limit to be exceeded fail immediately and set runtime.lastError. */
            QUOTA_BYTES: number;
        }

        interface SyncStorageArea extends StorageArea {
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

        interface StorageChangedEvent extends chrome.events.Event<(changes: { [key: string]: StorageChange }, areaName: string) => void> { }

        /** Items in the local storage area are local to each machine. */
        export var local: LocalStorageArea;
        /** Items in the sync storage area are synced using Chrome Sync. */
        export var sync: SyncStorageArea;

        /**
         * Items in the managed storage area are set by the domain administrator, and are read-only for the extension; trying to modify this namespace  results in an error.
         * @since Chrome 33.
         */
        export var managed: StorageArea;

        /** Fired when one or more items change. */
        export var onChanged: StorageChangedEvent;
    }

    ////////////////////
    // SyncFileSystem
    ////////////////////
    /**
     * Use the chrome.syncFileSystem API to save and synchronize data on Google Drive. This API is NOT for accessing arbitrary user docs stored in Google Drive. It provides app-specific syncable storage for offline and caching usage so that the same data can be available across different clients. Read Manage Data for more on using this API.
     * @since Chrome 27
     */
    namespace syncFileSystem {
        /** NOT YET IMPLEMENTED */
    }


    ////////////////////
    // System CPU
    ////////////////////
    /**
     * Use the system.cpu API to query CPU metadata.
     * Permissions: 'system.cpu'
     * @since Chrome 32.
     */
    namespace system.cpu {
        interface ProcessorUsage {
            /** The cumulative time used by userspace programs on this processor. */
            user: number;
            /** The cumulative time used by kernel programs on this processor. */
            kernel: number;
            /** The cumulative time spent idle by this processor. */
            idle: number;
            /** The total cumulative time for this processor. This value is equal to user + kernel + idle. */
            total: number;
        }

        interface ProcessorInfo {
            /** Cumulative usage info for this logical processor. */
            usage: ProcessorUsage;
        }

        interface CpuInfo {
            /** The number of logical processors. */
            numOfProcessors: number;
            /** The architecture name of the processors. */
            archName: string;
            /** The model name of the processors. */
            modelName: string;
            /**
             * A set of feature codes indicating some of the processor's capabilities.
             * The currently supported codes are 'mmx', 'sse', 'sse2', 'sse3', 'ssse3', 'sse4_1', 'sse4_2', and 'avx'.
             */
            features: string[];
            /** Information about each logical processor. */
            processors: ProcessorInfo[];
        }

        /** Queries basic CPU information of the system. */
        export function getInfo(callback: (info: CpuInfo) => void): void;
    }

    ////////////////////
    // System Display
    ////////////////////
    /**
     * Use the system.display API to query display metadata.
     * Permissions: 'system.display'
     * @since Chrome 30.
     */
    namespace system.display {
        interface Bounds {
            /**  The x-coordinate of the upper-left corner. */
            left: number;
            /**  The y-coordinate of the upper-left corner. */
            top: number;
            /** The width of the display in pixels. */
            width: number;
            /** The height of the display in pixels. */
            height: number;
        }

        interface Insets {
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
        interface Point {
            /** The x-coordinate of the point. */
            x: number;
            /** The y-coordinate of the point. */
            y: number;
        }

        /**
         * @since Chrome 57
         */
        interface TouchCalibrationPair {
            /**	The coordinates of the display point. */
            displayPoint: Point;
            /** The coordinates of the touch point corresponding to the display point. */
            touchPoint: Point;
        }

        /**
         * @since Chrome 52
         */
        interface DisplayMode {
            /** The display mode width in device independent (user visible) pixels. */
            width: number;

            /** The display mode height in device independent (user visible) pixels. */
            height: number;

            /** The display mode width in native pixels. */
            widthInNativePixels: number;

            /** The display mode height in native pixels. */
            heightInNativePixels: number;

            /** The display mode UI scale factor. */
            uiScale: number;

            /** The display mode device scale factor. */
            deviceScaleFactor: number;

            /** True if the mode is the display's native mode. */
            isNative: boolean;

            /** True if the display mode is currently selected. */
            isSelected: boolean;
        }

        /**
         * @since Chrome 53
         */
        interface DisplayLayout {
            /** The unique identifier of the display. */
            id: string;
            /** The unique identifier of the parent display. Empty if this is the root. */
            parentId: string;
            /** The layout position of this display relative to the parent. This will be ignored for the root. */
            position: 'top' | 'right' | 'bottom' | 'left';
            /** The offset of the display along the connected edge. 0 indicates that the topmost or leftmost corners are aligned. */
            offset: number;
        }

        /**
         * @description The pairs of point used to calibrate the display.
         * @export
         * @interface TouchCalibrationPairs
         */
        interface TouchCalibrationPairs {
            /** First pair of touch and display point required for touch calibration. */
            pair1: TouchCalibrationPair,
            /** Second pair of touch and display point required for touch calibration. */
            pair2: TouchCalibrationPair,
            /** Third pair of touch and display point required for touch calibration. */
            pair3: TouchCalibrationPair,
            /** Fourth pair of touch and display point required for touch calibration. */
            pair4: TouchCalibrationPair
        }

        /**
         * @description Representation of info data to be used in chrome.system.display.setDisplayProperties()
         * @export
         * @interface DisplayPropertiesInfo
         */
        interface DisplayPropertiesInfo {
            /**
             * @description Chrome OS only. If set to true, changes the display mode to unified desktop (see enableUnifiedDesktop for details). If set to false, unified desktop mode will be disabled. This is only valid for the primary display. If provided, mirroringSourceId must not be provided and other properties may not apply. This is has no effect if not provided.
             * @since Chrome 59
             * */
            isUnified?: boolean;

            /**
             * Chrome OS only. If set and not empty, enables mirroring for this display. Otherwise disables mirroring for this display. This value should indicate the id of the source display to mirror, which must not be the same as the id passed to setDisplayProperties. If set, no other property may be set.
             */
            mirroringSourceId?: string;

            /** If set to true, makes the display primary. No-op if set to false. */
            isPrimary?: boolean;

            /** If set, sets the display's overscan insets to the provided values. Note that overscan values may not be negative or larger than a half of the screen's size. Overscan cannot be changed on the internal monitor. It's applied after isPrimary parameter. */
            overscan?: Insets;

            /** If set, updates the display's rotation. Legal values are [0, 90, 180, 270]. The rotation is set clockwise, relative to the display's vertical position. It's applied after overscan paramter. */
            rotation?: 0 | 90 | 180 | 270;

            /** If set, updates the display's logical bounds origin along x-axis. Applied together with boundsOriginY, if boundsOriginY is set. Note that, when updating the display origin, some constraints will be applied, so the final bounds origin may be different than the one set. The final bounds can be retrieved using getInfo. The bounds origin is applied after rotation. The bounds origin cannot be changed on the primary display. Note that is also invalid to set bounds origin values if isPrimary is also set (as isPrimary parameter is applied first). */
            boundsOriginX?: number;

            /** If set, updates the display's logical bounds origin along y-axis. See documentation for boundsOriginX parameter. */
            boundsOriginY: number;

            /**
             * @since Chrome 52
             * @description If set, updates the display mode to the mode matching this value.
             */
            displayMode?: DisplayMode;
        }

        /**
         * @description Options affecting how the information is returned.
         * @since Chrome 59
         * @export
         * @interface DisplayInfoFlags
         */
        interface DisplayInfoFlags {
            /**
             * @description If set to true, only a single DisplayUnitInfo will be returned by getInfo when in unified desktop mode (see enableUnifiedDesktop). Defaults to false.
             * @type {boolean}
             * @memberof DisplayInfoFlags
             */
            singleUnified?: boolean;
        }

        /** Information about display properties. */
        interface DisplayInfo {
            /** The unique identifier of the display. */
            id: string;
            /** The user-friendly name (e.g. 'HP LCD monitor'). */
            name: string;
            /** Identifier of the display that is being mirrored on the display unit. If mirroring is not in progress, set to an empty string. Currently exposed only on ChromeOS. Will be empty string on other platforms. */
            mirroringSourceId: string;
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
        }

        /** The information about display properties that should be changed. A property will be changed only if a new value for it is specified in |info|. */
        interface DisplayProps {
            /** If set and not empty, starts mirroring between this and the display with the provided id (the system will determine which of the displays is actually mirrored). If set and not empty, stops mirroring between this and the display with the specified id (if mirroring is in progress). If set, no other parameter may be set. */
            mirroringSourceId?: string;
            /** If set to true, makes the display primary. No-op if set to false. */
            isPrimary?: boolean;
            /** If set, sets the display's overscan insets to the provided values. Note that overscan values may not be negative or larger than a half of the screen's size. Overscan cannot be changed on the internal monitor. It's applied after isPrimary parameter. */
            overscan?: Insets;
            /** If set, updates the display's rotation. Legal values are [0, 90, 180, 270]. The rotation is set clockwise, relative to the display's vertical position. It's applied after overscan paramter. */
            rotation?: number;
            /** If set, updates the display's logical bounds origin along x-axis. Applied together with boundsOriginY, if boundsOriginY is set. Note that, when updating the display origin, some constraints will be applied, so the final bounds origin may be different than the one set. The final bounds can be retrieved using getInfo. The bounds origin is applied after rotation. The bounds origin cannot be changed on the primary display. Note that is also invalid to set bounds origin values if isPrimary is also set (as isPrimary parameter is applied first). */
            boundsOriginX?: number;
            /** If set, updates the display's logical bounds origin along y-axis. See documentation for boundsOriginX parameter. */
            boundsOriginY?: number;
        }

        /**
         * @description Fired when anything changes to the display configuration.
         * @export
         * @interface DisplayChangedEvent
         * @extends {chrome.events.Event<() => void>}
         */
        interface DisplayChangedEvent extends chrome.events.Event<() => void> { }

        /**
         * @description Requests the information for all attached display devices.
         * @export
         * @param {(info: DisplayInfo[]) => void} callback The callback to invoke with the results.
         */
        export function getInfo(callback: (info: DisplayInfo[]) => void): void;
        /**
         * @description Requests the information for all attached display devices.
         * @export
         * @since Chrome 59
         * @param {DisplayInfoFlags} [flags] Options affecting how the information is returned.
         * @param {(info: DisplayInfo[]) => void} callback The callback to invoke with the results.
         */
        export function getInfo(flags: DisplayInfoFlags, callback: (info: DisplayInfo[]) => void): void;

        /**
         * @description Requests the layout info for all displays. NOTE: This is only available to Chrome OS Kiosk apps and Web UI.
         * @since Chrome 53
         * @export
         * @param {(layouts: DisplayLayout[]) => void} callback The callback to invoke with the results.
         */
        export function getDisplayLayout(callback: (layouts: DisplayLayout[]) => void): void;

        /**
         * @description Updates the properties for the display specified by |id|, according to the information provided in |info|. On failure, runtime.lastError will be set. NOTE: This is only available to Chrome OS Kiosk apps and Web UI.
         * @export
         * @param {string} id The display's unique identifier.
         * @param {DisplayPropertiesInfo} info The information about display properties that should be changed. A property will be changed only if a new value for it is specified in |info|.
         * @param {() => void} [callback] Empty function called when the function finishes. To find out whether the function succeeded, runtime.lastError should be queried.
         */
        export function setDisplayProperties(id: string, info: DisplayPropertiesInfo, callback?: () => void): void;

        /**
         * @description Set the layout for all displays. Any display not included will use the default layout. If a layout would overlap or be otherwise invalid it will be adjusted to a valid layout. After layout is resolved, an onDisplayChanged event will be triggered. NOTE: This is only available to Chrome OS Kiosk apps and Web UI.
         * @since Chrome 53
         * @export
         * @param {DisplayLayout[]} layouts The layout information, required for all displays except the primary display.
         * @param {() => void} callback Empty function called when the function finishes. To find out whether the function succeeded, runtime.lastError should be queried.
         */
        export function setDisplayLayout(layouts: DisplayLayout[], callback?: () => void): void;

        /**
         * @description Enables/disables the unified desktop feature. Note that this simply enables the feature, but will not change the actual desktop mode. (That is, if the desktop is in mirror mode, it will stay in mirror mode) NOTE: This is only available to Chrome OS Kiosk apps and Web UI.
         * @since Chrome 46
         * @export
         * @param {boolean} enabled True if unified desktop should be enabled.
         */
        export function enableUnifiedDesktop(enabled: boolean): void;
        /**
         * @description Starts overscan calibration for a display. This will show an overlay on the screen indicating the current overscan insets. If overscan calibration for display |id| is in progress this will reset calibration.
         * @since Chrome 53
         * @export
         * @param {string} id The display's unique identifier.
         */
        export function overscanCalibrationStart(id: string): void;
        /**
         * @description Adjusts the current overscan insets for a display. Typically this should etiher move the display along an axis (e.g. left+right have the same value) or scale it along an axis (e.g. top+bottom have opposite values). Each Adjust call is cumulative with previous calls since Start.
         * @since Chrome 53
         * @export
         * @param {string} id The display's unique identifier.
         * @param {Insets} delta The amount to change the overscan insets.
         */
        export function overscanCalibrationAdjust(id: string, delta: Insets): void;

        /**
         * @description Resets the overscan insets for a display to the last saved value (i.e before Start was called).
         * @since Chrome 53
         * @export
         * @param {string} id The display's unique identifier.
         */
        export function overscanCalibrationReset(id: string): void;

        /**
         * @description Complete overscan adjustments for a display by saving the current values and hiding the overlay.
         * @since Chrome 53
         * @export
         * @param {string} id The display's unique identifier.
         */
        export function overscanCalibrationComplete(id: string): void;

        /**
         * @description Displays the native touch calibration UX for the display with |id| as display id. This will show an overlay on the screen with required instructions on how to proceed. The callback will be invoked in case of successful calibraion only. If the calibration fails, this will throw an error.
         * @since Chrome 57
         * @export
         * @param {string} id The display's unique identifier.
         * @param {(success) => void} callback Optional callback to inform the caller that the touch calibration has ended. The argument of the callback informs if the calibration was a success or not.
         */
        export function showNativeTouchCalibration(id: string, callback: (success: boolean) => void): void;

        /**
         * @description Starts custom touch calibration for a display. This should be called when using a custom UX for collecting calibration data. If another touch calibration is already in progress this will throw an error.
         * @since Chrome 57
         * @export
         * @param {string} id The display's unique identifier.
         */
        export function startCustomTouchCalibration(id: string): void;

        /**
         * @description Sets the touch calibration pairs for a display. These |pairs| would be used to calibrate the touch screen for display with |id| called in startCustomTouchCalibration(). Always call |startCustomTouchCalibration| before calling this method. If another touch calibration is already in progress this will throw an error.
         * @since Chrome 57
         * @export
         * @param {TouchCalibrationPairs} pairs The pairs of point used to calibrate the display.
         * @param {Bounds} bounds Bounds of the display when the touch calibration was performed. |bounds.left| and |bounds.top| values are ignored.
         */
        export function completeCustomTouchCalibration(pairs: TouchCalibrationPairs, bounds: Bounds): void;
        /**
         * @description Resets the touch calibration for the display and brings it back to its default state by clearing any touch calibration data associated with the display.
         * @since Chrome 57
         * @export
         * @param {string} id The display's unique identifier.
         */
        export function clearTouchCalibration(id: string): void;

        /**
         * @description Fired when anything changes to the display configuration.
         * @export
         */
        export var onDisplayChanged: DisplayChangedEvent;
    }

    ////////////////////
    // System Memory
    ////////////////////
    /**
     * The chrome.system.memory API.
     * Permissions:  'system.memory'
     * @since Chrome 32.
     */
    namespace system.memory {
        interface MemoryInfo {
            /** The total amount of physical memory capacity, in bytes. */
            capacity: number;
            /** The amount of available capacity, in bytes. */
            availableCapacity: number;
        }

        /** Get physical memory information. */
        export function getInfo(callback: (info: MemoryInfo) => void): void;
    }

    ////////////////////
    // System - Network
    ////////////////////
    namespace system.network {
        interface NetworkInterface {
            name: string;
            address: string;
            prefixLength: number;
        }

        export function getNetworkInterfaces(callback: (networkInterfaces: NetworkInterface[]) => void): void;
    }

    ////////////////////
    // System Storage
    ////////////////////
    /**
     * Use the chrome.system.storage API to query storage device information and be notified when a removable storage device is attached and detached.
     * Permissions:  'system.storage'
     * @since Chrome 30.
     */
    namespace system.storage {
        interface StorageUnitInfo {
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

        interface StorageCapacityInfo {
            /** A copied |id| of getAvailableCapacity function parameter |id|. */
            id: string;
            /** The available capacity of the storage device, in bytes. */
            availableCapacity: number;
        }

        interface SystemStorageAttachedEvent extends chrome.events.Event<(info: StorageUnitInfo) => void> { }

        interface SystemStorageDetachedEvent extends chrome.events.Event<(id: string) => void> { }

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
    // Text to Speech
    ////////////////////
    /**
     * Use the chrome.tts API to play synthesized text-to-speech (TTS). See also the related ttsEngine API, which allows an extension to implement a speech engine.
     * Permissions:  'tts'
     * @since Chrome 14.
     */
    namespace tts {
        /** An event from the TTS engine to communicate the status of an utterance. */
        interface TtsEvent {
            /** Optional. The index of the current character in the utterance. */
            charIndex?: number;
            /** Optional. The error description, if the event type is 'error'. */
            errorMessage?: string;
            /**
             * The type can be 'start' as soon as speech has started, 'word' when a word boundary is reached, 'sentence' when a sentence boundary is reached, 'marker' when an SSML mark element is reached, 'end' when the end of the utterance is reached, 'interrupted' when the utterance is stopped or interrupted before reaching the end, 'cancelled' when it's removed from the queue before ever being synthesized, or 'error' when any other error occurs. When pausing speech, a 'pause' event is fired if a particular utterance is paused in the middle, and 'resume' if an utterance resumes speech. Note that pause and resume events may not fire if speech is paused in-between utterances.
             * One of: 'start', 'end', 'word', 'sentence', 'marker', 'interrupted', 'cancelled', 'error', 'pause', or 'resume'
             */
            type: string;
        }

        /** A description of a voice available for speech synthesis. */
        interface TtsVoice {
            /** Optional. The language that this voice supports, in the form language-region. Examples: 'en', 'en-US', 'en-GB', 'zh-CN'. */
            lang?: string;
            /**
             * Optional. This voice's gender.
             * One of: 'male', or 'female'
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

        interface SpeakOptions {
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
             * One of: 'male', or 'female'
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
    // Types
    ////////////////////
    /**
     * The chrome.types API contains type declarations for Chrome.
     * @since Chrome 13.
     */
    namespace types {
        interface ChromeSettingClearDetails {
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

        interface ChromeSettingSetDetails extends ChromeSettingClearDetails {
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

        interface ChromeSettingGetDetails {
            /** Optional. Whether to return the value that applies to the incognito session (default false). */
            incognito?: boolean;
        }

        /**
         * @param details Details of the currently effective value.
         */
        export type DetailsCallback = (details: ChromeSettingGetResultDetails) => void;

        interface ChromeSettingGetResultDetails {
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

        interface ChromeSettingChangedEvent extends chrome.events.Event<DetailsCallback> { }

        /** An interface that allows access to a Chrome browser setting. See accessibilityFeatures for an example. */
        interface ChromeSetting {
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
    // USB
    ////////////////////
    namespace usb {
        type Direction = 'in' | 'out';

        interface Device {
            device: number,
            vendorId: number,
            productId: number,
            productName: string,
            manufacturerName: string,
            serialNumber: string
        }

        interface ConnectionHandle {
            handle: number,
            vendorId: number,
            productId: number
        }

        interface EndpointDescriptor {
            address: number,
            type: 'control' | 'interrupt' | 'isochronous' | 'bulk',
            direction: Direction,
            maximumPacketSize: number,
            synchronization?: 'asynchronous' | 'adaptive' | 'synchronous',
            usage?: 'data' | 'feedback' | 'explicitFeedback',
            pollingInterval?: number,
            extra_data: ArrayBuffer
        }

        interface InterfaceDescriptor {
            interfaceNumber: number,
            alternateSetting: number,
            interfaceClass: number,
            interfaceSubclass: number,
            interfaceProtocol: number,
            description?: string,
            endpoints: EndpointDescriptor[],
            extra_data: ArrayBuffer
        }

        interface ConfigDescriptor {
            active: boolean,
            configurationValue: number,
            description?: string,
            selfPowered: boolean,
            remoteWakeup: boolean,
            maxPower: number,
            interfaces: InterfaceDescriptor[],
            extra_data: ArrayBuffer
        }

        interface GenericTransferInfo {
            direction: Direction,
            endpoint: number,
            length?: number,
            data?: ArrayBuffer,
            timeout?: number
        }

        interface TransferResultInfo {
            resultCode: number,
            data?: ArrayBuffer
        }

        interface DeviceFilter {
            vendorId?: number,
            productId?: number,
            interfaceClass?: number,
            interfaceSubclass?: number,
            interfaceProtocol?: number
        }

        interface TransferInfo {
            direction: Direction;
            recipient: 'device' | 'interface' | 'endpoint' | 'other';
            requestType: 'standard' | 'class' | 'vendor' | 'reserved';
            request: number;
            value: number;
            index: number;
            length?: number;
            data?: ArrayBuffer;
            timeout?: number;
        }

        interface DeviceEvent extends chrome.events.Event<(device: Device) => void> { }

        export var onDeviceAdded: DeviceEvent;
        export var onDeviceRemoved: DeviceEvent;

        export function getDevices(options: { vendorId?: number, productId?: number, filters?: DeviceFilter[] }, callback: (devices: Device[]) => void): void;
        export function getUserSelectedDevices(options: { multiple?: boolean, filters?: DeviceFilter[] }, callback: (devices: Device[]) => void): void;
        export function getConfigurations(device: Device, callback: (configs: ConfigDescriptor[]) => void): void;
        export function requestAccess(device: Device, interfaceId: number, callback: (success: boolean) => void): void;
        export function openDevice(device: Device, callback: (handle: ConnectionHandle) => void): void;
        export function findDevices(options: { vendorId: number, productId: number, interfaceId?: number }, callback: (handles: ConnectionHandle[]) => void): void;
        export function closeDevice(handle: ConnectionHandle, callback?: () => void): void;
        export function setConfiguration(handle: ConnectionHandle, configurationValue: number, callback: () => void): void;
        export function getConfiguration(handle: ConnectionHandle, callback: (config: ConfigDescriptor) => void): void;
        export function listInterfaces(handle: ConnectionHandle, callback: (descriptors: InterfaceDescriptor[]) => void): void;
        export function claimInterface(handle: ConnectionHandle, interfaceNumber: number, callback: () => void): void;
        export function releaseInterface(handle: ConnectionHandle, interfaceNumber: number, callback: () => void): void;
        export function setInterfaceAlternateSetting(handle: ConnectionHandle, interfaceNumber: number, alternateSetting: number, callback: () => void): void;
        export function controlTransfer(handle: ConnectionHandle, transferInfo: TransferInfo, callback: (info: TransferResultInfo) => void): void;
        export function bulkTransfer(handle: ConnectionHandle, transferInfo: GenericTransferInfo, callback: (info: TransferResultInfo) => void): void;
        export function interruptTransfer(handle: ConnectionHandle, transferInfo: GenericTransferInfo, callback: (info: TransferResultInfo) => void): void;
        export function isochronousTransfer(handle: ConnectionHandle, transferInfo: { transferInfo: GenericTransferInfo, packets: number, packetLength: number }, callback: (info: TransferResultInfo) => void): void;
        export function resetDevice(handle: ConnectionHandle, callback: (success: boolean) => void): void;
    }


    ////////////////////
    // VPN Provider
    ////////////////////
    /**
     * Use the chrome.vpnProvider API to implement a VPN client.
     * Permissions:  'vpnProvider'
     * Important: This API works only on Chrome OS.
     * @since Chrome 43.
     */
    namespace vpnProvider {
        interface VpnSessionParameters {
            /** IP address for the VPN interface in CIDR notation. IPv4 is currently the only supported mode. */
            address: string;
            /** Optional. Broadcast address for the VPN interface. (default: deduced from IP address and mask) */
            broadcastAddress?: string;
            /** Optional. MTU setting for the VPN interface. (default: 1500 bytes) */
            mtu?: string;
            /**
             * Exclude network traffic to the list of IP blocks in CIDR notation from the tunnel. This can be used to bypass traffic to and from the VPN server. When many rules match a destination, the rule with the longest matching prefix wins. Entries that correspond to the same CIDR block are treated as duplicates. Such duplicates in the collated (exclusionList + inclusionList) list are eliminated and the exact duplicate entry that will be eliminated is undefined.
             */
            exclusionList: string[];
            /**
             * Include network traffic to the list of IP blocks in CIDR notation to the tunnel. This parameter can be used to set up a split tunnel. By default no traffic is directed to the tunnel. Adding the entry '0.0.0.0/0' to this list gets all the user traffic redirected to the tunnel. When many rules match a destination, the rule with the longest matching prefix wins. Entries that correspond to the same CIDR block are treated as duplicates. Such duplicates in the collated (exclusionList + inclusionList) list are eliminated and the exact duplicate entry that will be eliminated is undefined.
             */
            inclusionList: string[];
            /** Optional. A list of search domains. (default: no search domain) */
            domainSearch?: string[];
            /** A list of IPs for the DNS servers. */
            dnsServer: string[];
        }

        interface VpnPlatformMessageEvent extends chrome.events.Event<(id: string, message: string, error: string) => void> { }

        interface VpnPacketReceptionEvent extends chrome.events.Event<(data: ArrayBuffer) => void> { }

        interface VpnConfigRemovalEvent extends chrome.events.Event<(id: string) => void> { }

        interface VpnConfigCreationEvent extends chrome.events.Event<(id: string, name: string, data: Object) => void> { }

        interface VpnUiEvent extends chrome.events.Event<(event: string, id?: string) => void> { }

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
         * Sets the parameters for the VPN session. This should be called immediately after 'connected' is received from the platform. This will succeed only when the VPN session is owned by the extension.
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
     * Permissions:  'wallpaper'
     * Important: This API works only on Chrome OS.
     * @since Chrome 43.
     */
    namespace wallpaper {
        interface WallpaperDetails {
            /** Optional. The jpeg or png encoded wallpaper image. */
            data?: any;
            /** Optional. The URL of the wallpaper to be set. */
            url?: string;
            /**
             * The supported wallpaper layouts.
             * One of: 'STRETCH', 'CENTER', or 'CENTER_CROPPED'
             */
            layout: string;
            /** The file name of the saved wallpaper. */
            filename: string;
            /** Optional. True if a 128x60 thumbnail should be generated. */
            thumbnail?: boolean;
        }

        /**
         * Sets wallpaper to the image at url or wallpaperData with the specified layout
         * @param callback
         * Optional parameter thumbnail: The jpeg encoded wallpaper thumbnail. It is generated by resizing the wallpaper to 128x60.
         */
        export function setWallpaper(details: WallpaperDetails, callback: (thumbnail: any) => void): void;
    }


    ///////////////////
    // Webview Tag
    ///////////////////
    /**
     * Use the webview tag to actively load live content from the web over the network and embed it in your Chrome App. Your app can control the appearance of the <code>webview</code> and interact with the web content, initiate navigations in an embedded web page, react to error events that happen within it, and more (see <a href=\'#usage\'>Usage</a>).
     */
    namespace webview {
        /** Options that determine what data should be cleared by `clearData`. */
        interface ClearDataOptions {
            /** Clear data accumulated on or after this date, represented in milliseconds since the epoch (accessible via the getTime method of the JavaScript <code>Date</code> object). If absent, defaults to <code>0</code> (which would remove all browsing data). */
            since?: number;
        }
        interface WindowEvent extends chrome.events.Event<() => void> { }

        interface ConsoleEvent extends Event {
            /**
             * @description The severity level of the log message. Ranges from 0 to 4.
             * @type {number}
             * @memberof ConsoleEvent
             */
            level: number;
            /**
             * @description The logged message contents.
             * @type {string}
             * @memberof ConsoleEvent
             */
            message: string;
            /**
             * @description The line number of the message source.
             * @type {number}
             * @memberof ConsoleEvent
             */
            line: number;
            /**
             * @description A string identifying the resource which logged the message.
             * @type {string}
             * @memberof ConsoleEvent
             */
            sourceId: string;
        }

        interface ExitEvent extends Event {
            /**
             * @description Chrome's internal ID of the process that exited.
             * @type {number}
             * @memberof ExitEvent
             */
            processID: number;
            /**
             * @description String indicating the reason for the exit.
             * @type {string}
             * @memberof ExitEvent
             */
            reason: 'normal' | 'abnormal' | 'crash' | 'kill';
        }

        /** Description of a declarative rule for handling events. */
        interface Rule {
            /** Optional priority of this rule. Defaults to 100.  */
            priority?: number;
            /** List of conditions that can trigger the actions. */
            conditions: any[];
            /** Optional. Optional identifier that allows referencing this rule.  */
            id?: string;
            /** List of actions that are triggered if one of the condtions is fulfilled. */
            actions: any[];
            /**
             * @description Tags can be used to annotate rules and perform operations on sets of rules.¨
             * @since Chrome 28
             * @type {string[]}
             * @memberof Rule
             */
            tags?: string[];
        }

        /**
         * @description Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
         * @export
         * @interface InjectDetails
         */
        interface InjectDetails {
            /**
             * @description JavaScript or CSS code to inject.<br><br><b>Warning:</b><br>Be careful using the <code>code</code> parameter. Incorrect use of it may open your app to <a href=\'https://en.wikipedia.org/wiki/Cross-site_scripting\'>cross site scripting</a> attacks.
             * @type {string}
             * @memberof InjectDetails
             */
            code?: string,
            /**
             * @description JavaScript or CSS file to inject.
             * @type {string}
             * @memberof InjectDetails
             */
            file?: string
        }

        /**
         * @description WebView element from html
         */
        interface HTMLWebViewElement extends Element {
            /**
             * This sets the guest content's window.name object.
             */
            name: string;
            /**
             * Returns the visible URL. Mirrors the logic in the browser's omnibox: either returning a pending new navigation if initiated by the embedder page, or the last committed navigation. Writing to this attribute initiates top-level navigation.
             * Assigning src its own value will reload the current page.
             * The src attribute cannot be cleared or removed once it has been set, unless the webview is removed from the DOM.
             * The src attribute can also accept data URLs, such as 'data:text/plain,Hello, world!'.
             */
            src: string;
            /**
             * Storage partition ID used by the webview tag. If the storage partition ID starts with persist: (partition='persist:googlepluswidgets'), the webview will use a persistent storage partition available to all guests in the app with the same storage partition ID. If the ID is unset or if there is no 'persist': prefix, the webview will use an in-memory storage partition. This value can only be modified before the first navigation, since the storage partition of an active renderer process cannot change. Subsequent attempts to modify the value will fail with a DOM exception. By assigning the same partition ID, multiple webviews can share the same storage partition.
             */
            partition?: string;
            /**
             * If present, portions of the embedder could be visible through the webview, where the contents are transparent. Without allowtransparency enabled, no part of the embedder will be shown through the webview, even if elements exist that are specified as transparent.
             * This does not affect transparency within the contents of the webview itself.
             */
            allowtransparency?: boolean;
            /**
             * If 'on', the webview container will automatically resize within the bounds specified by the attributes minwidth, minheight, maxwidth, and maxheight.
             * These constraints do not impact the webview UNLESS autosize is enabled.
             * When autosize is enabled, the webview container size cannot be less than the minimum values or greater than the maximum.
             */
            autosize?: 'on';
            /**
             * Object reference which can be used to post messages into the guest page.
             */
            contentWindow: ContentWindow;
            /** Interface which provides access to webRequest events on the guest page. */
            request: WebRequestEventInterface;
            /** Similar to chrome's ContextMenus API, but applies to webview instead of browser. Use the webview.contextMenus API to add items to webview's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages. */
            contextMenus: webview.ContextMenus;
            /**
             * Fired when the guest window attempts to close itself.
             * The following example code navigates the webview to about:blank when the guest attempts to close itself.
             */
            addEventListener(type: 'close', listener: (this: HTMLWebViewElement) => void, useCapture?: boolean): void;
            /**
             * Fired when the guest window logs a console message.
             * The following example code forwards all log messages to the embedder's console without regard for log level or other properties.
             */
            addEventListener(type: 'consolemessage', listener: (this: HTMLWebViewElement, ev: IConsoleMessage) => void, useCapture?: boolean): void;
            /**
             * Fired when the guest window fires a load event, i.e., when a new document is loaded. This does not include page navigation within the current document or asynchronous resource loads.
             * The following example code modifies the default font size of the guest's body element after the page loads:
             * @example
             * webview.addEventListener('contentload', function() {
             *  webview.executeScript({ code: 'document.body.style.fontSize = '42px'' })
             * });
             */
            addEventListener(type: 'contentload', listener: (this: HTMLWebViewElement) => void, useCapture?: boolean): void;
            /**
             * Fired when the guest window attempts to open a modal dialog via window.alert, window.confirm, or window.prompt.
             * Handling this event will block the guest process until each event listener returns or the dialog object becomes unreachable (if preventDefault() was called.)
             * The default behavior is to cancel the dialog.
             */
            addEventListener(type: 'dialog', listener: (this: HTMLWebViewElement, ev: IDialog) => void, useCapture?: boolean): void;
            /**
             * Fired when the process rendering the guest web content has exited.
             */
            addEventListener(type: 'exit', listener: (this: HTMLWebViewElement, ev: IExit) => void, useCapture?: boolean): void;
            /**
             * Fired when new find results are available for an active find request. This might happen multiple times for a single find request as matches are found.
             */
            addEventListener(type: 'findupdate', listener: (this: HTMLWebViewElement, ev: IFindupdate) => void, useCapture?: boolean): void;
            /**
             * Fired when a top-level load has aborted without committing. An error message will be printed to the console unless the event is default-prevented.
             * Note: When a resource load is aborted, a loadabort event will eventually be followed by a loadstop event, even if all committed loads since the last loadstop event (if any) were aborted.
             * Note: When the load of either an about URL or a JavaScript URL is aborted, loadabort will be fired and then the webview will be navigated to 'about:blank'.
             */
            addEventListener(type: 'loadabort', listener: (this: HTMLWebViewElement, ev: ILoadabort) => void, useCapture?: boolean): void;
            /**
             * Fired when a load has committed. This includes navigation within the current document as well as subframe document-level loads, but does not include asynchronous resource loads.
             */
            addEventListener(type: 'loadcommit', listener: (this: HTMLWebViewElement, ev: ILoadcommit) => void, useCapture?: boolean): void;
            /**
             * Fired when a top-level load request has redirected to a different URL.
             */
            addEventListener(type: 'loadredirect', listener: (this: HTMLWebViewElement, ev: ILoadredirect) => void, useCapture?: boolean): void;
            /**
             * Fired when a load has begun.
             */
            addEventListener(type: 'loadstart', listener: (this: HTMLWebViewElement, ev: ILoadstart) => void, useCapture?: boolean): void;
            /**
             * Fired when all frame-level loads in a guest page (including all its subframes) have completed.
             * This includes navigation within the current document as well as subframe document-level loads, but does not include asynchronous resource loads.
             * This event fires every time the number of document-level loads transitions from one (or more) to zero. For example, if a page that has already finished loading (i.e., loadstop already fired once) creates a new iframe which loads a page, then a second loadstop will fire when the iframe page load completes.
             * This pattern is commonly observed on pages that load ads.
             * Note: When a committed load is aborted, a loadstop event will eventually follow a loadabort event, even if all committed loads since the last loadstop event (if any) were aborted.
             */
            addEventListener(type: 'loadstop', listener: (this: HTMLWebViewElement) => void, useCapture?: boolean): void;
            /**
             * Fired when the guest page attempts to open a new browser window.
             * The following example code will create and navigate a new webview in the embedder for each requested new window:
             * @example
             * webview.addEventListener('newwindow', function(e) {
             *  var newWebview = document.createElement('webview');
             *  document.body.appendChild(newWebview);
             *  e.window.attach(newWebview);
             * });
             */
            addEventListener(type: 'newwindow', listener: (this: HTMLWebViewElement, ev: INewwindow) => void, useCapture?: boolean): void;
            /**
             * Fired when the guest page needs to request special permission from the embedder.
             * The following example code will grant the guest page access to the webkitGetUserMedia API.
             * Note that an app using this example code must itself specify audioCapture and/or videoCapture manifest permissions:
             * @example
             * webview.addEventListener('permissionrequest', function(e) {
             *  if (e.permission === 'media') {
             *      e.request.allow();
             *  }
             * });
             */
            addEventListener(type: 'permissionrequest', listener: (this: HTMLWebViewElement, ev: IPermissionrequest) => void, useCapture?: boolean): void;
            /** Fired when the process rendering the guest web content has become responsive again after being unresponsive. */
            addEventListener(type: 'response', listener: (this: HTMLWebViewElement, ev: IResponsive) => void, useCapture?: boolean): void;
            /** Fired when the embedded web content has been resized via autosize. Only fires if autosize is enabled. */
            addEventListener(type: 'sizechanged', listener: (this: HTMLWebViewElement, ev: ISizechanged) => void, useCapture?: boolean): void;
            /** Fired when the process rendering the guest web content has become unresponsive. This event will be generated once with a matching responsive event if the guest begins to respond again. */
            addEventListener(type: 'unresponsive', listener: (this: HTMLWebViewElement, ev: IUnresponsive) => void, useCapture?: boolean): void;
            /** Fired when the page's zoom changes. */
            addEventListener(type: 'zoomchange', listener: (this: HTMLWebViewElement, ev: IZoomchange) => void, useCapture?: boolean): void;
            /**
            * @description Queries audio state.
            */
            getAudioState(callback: (audible: boolean) => void): void;

            /**
            * @description Sets audio mute state of the webview.
            * @param {boolean} mute Mute audio value
             */
            setAudioMuted(mute: boolean): void;

            /**
            * @description Queries whether audio is muted.
             */
            isAudioMuted(callback: (muted: boolean) => void): void;

            /**
             * @description Captures the visible region of the webview.
             * @param {(dataUrl: string) => void} callback A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
             */
            captureVisibleRegion(callback: (dataUrl: string) => void): void;
            /**
             * @description Captures the visible region of the webview.
             * @param {*} options
             * @param {(dataUrl: string) => void} callback
             */
            captureVisibleRegion(options: chrome.extensionTypes.ImageDetails, callback: (dataUrl: string) => void): void;

            /**
            * Adds content script injection rules to the webview.
            * When the webview navigates to a page matching one or more rules, the associated scripts will be injected.
            * You can programmatically add rules or update existing rules.
            * The following example adds two rules to the webview: 'myRule' and 'anotherRule'.
            * webview.addContentScripts([
            * {
            *    name: 'myRule',
            *    matches: ['http://www.foo.com/*'],
            *    css: { files: ['mystyles.css'] },
            *    js: { files: ['jquery.js', 'myscript.js'] },
            *    run_at: 'document_start'
            *  },
            *  {
            *    name: 'anotherRule',
            *    matches: ['http://www.bar.com/*'],
            *    js: { code: 'document.body.style.backgroundColor = 'red';' },
            *    run_at: 'document_end'
            *  }]);
            * ...
            *
            * // Navigates webview.
            * webview.src = 'http://www.foo.com';
            * You can defer addContentScripts call until you needs to inject scripts.
            * The following example shows how to overwrite an existing rule.
            *
            * webview.addContentScripts([{
            *    name: 'rule',
            *    matches: ['http://www.foo.com/*'],
            *    js: { files: ['scriptA.js'] },
            *    run_at: 'document_start'}]);
            *
            * // Do something.
            * webview.src = 'http://www.foo.com/*';
            * ...
            * // Overwrite 'rule' defined before.
            * webview.addContentScripts([{
            *   name: 'rule',
            *   matches: ['http://www.bar.com/*'],
            *   js: { files: ['scriptB.js'] },
            *   run_at: 'document_end'}]);
            * If webview has been naviagted to the origin (e.g., foo.com) and calls webview.addContentScripts to add 'myRule',
            * you need to wait for next navigation to make the scripts injected.
            * If you want immediate injection, executeScript will do the right thing.
            * Rules are preserved even if the guest process crashes or is killed or even if the webview is reparented.
            * Refer to the /extensions/content_scripts documentation for more details.
            * @param {ContentScriptDetails[]} contentScriptList Details of the content scripts to add.
            */
            addContentScripts(contentScriptList: ContentScriptDetails[]): void;

            /**
            * @description Navigates backward one history entry if possible. Equivalent to go(-1).
            * @param {(success: boolean) => void} [callback] Called after the navigation has either failed or completed successfully. Success parameter indicates whether the navigation was successful.
             */
            back(callback?: (success: boolean) => void): void;

            /**
            * @description Indicates whether or not it is possible to navigate backward through history. The state of this function is cached, and updated before each loadcommit, so the best place to call it is on loadcommit.
             */
            canGoBack(): void;

            /**
            * @description Indicates whether or not it is possible to navigate forward through history. The state of this function is cached, and updated before each loadcommit, so the best place to call it is on loadcommit.
             */
            canGoForward(): void;

            /**
            * @description <p>Clears browsing data for the webview partition.</p>
            * @param options Options determining which data to clear.
            * @param types The types of data to be cleared.
            * @param callback
             */
            clearData(options: ClearDataOptions, types: ClearDataTypeSet, callback?: () => void): void;

            /**
            * @description <p>Injects JavaScript code into the guest page.</p><p>The following sample code uses script injection to set the guest page's background color to red:</p><pre>webview.executeScript({ code: 'document.body.style.backgroundColor = 'red'' });</pre>
            * @param details Details of the script to run.
            * @param callback
             */
            executeScript(details: InjectDetails, callback?: (result?: any[]) => void): void;

            /**
            * @description Initiates a find-in-page request.
            * @param {string} searchText The string to find in the page.
            * @param options Options for the find request.
            * @param callback
             */
            find(searchText: string, options?: FindOptions, callback?: (results?: any) => void): void;

            /**
            * @description Navigates forward one history entry if possible. Equivalent to go(1).
            * @param callback
             */
            forward(callback?: (success: boolean) => void): void;

            /**
            * @description Returns Chrome's internal process ID for the guest web page's current process, allowing embedders to know how many guests would be affected by terminating the process. Two guests will share a process only if they belong to the same app and have the same <a href='#partition'>storage partition ID</a>. The call is synchronous and returns the embedder's cached notion of the current process ID. The process ID isn't the same as the operating system's process ID.
             */
            getProcessId(): void;

            /**
            * @description Returns the user agent string used by the webview for guest page requests.
             */
            getUserAgent(): void;

            /**
            * @description Gets the current zoom factor.
            * @param callback
             */
            getZoom(callback: (zoomFactor: number) => void): void;

            /**
            * @description Gets the current zoom mode.
            * @param callback
             */
            getZoomMode(callback: (ZoomMode: any) => void): void;

            /**
            * @description Navigates to a history entry using a history index relative to the current navigation. If the requested navigation is impossible, this method has no effect.
            * @param {number} relativeIndex Relative history index to which the webview should be navigated. For example, a value of 2 will navigate forward 2 history entries if possible; a value of -3 will navigate backward 3 entries.
            * @param callback
             */
            go(relativeIndex: number, callback?: (success: boolean) => void): void;

            /**
            * @description Injects CSS into the guest page.
            * @param details Details of the CSS to insert.
            * @param callback
             */
            insertCSS(details: InjectDetails, callback?: () => void): void;

            /**
            * @description Indicates whether or not the webview's user agent string has been overridden by $(ref:webviewTag.setUserAgentOverride).
             */
            isUserAgentOverridden(): void;

            /**
            * @description Prints the contents of the webview. This is equivalent to calling scripted print function from the webview itself.
             */
            print(): void;

            /**
            * @description Reloads the current top-level page.
             */
            reload(): void;

            /**
            * @description Removes content scripts from a webview.
            * @description The following example removes 'myRule' which was added before.
            * @example webview.removeContentScripts(['myRule']);
            * @description You can remove all the rules by calling:
            * @example webview.removeContentScripts();
            * @param {any[]} scriptNameList A list of names of content scripts that will be removed. If the list is empty, all the content scripts added to the webview will be removed.
             */
            removeContentScripts(scriptNameList?: any[]): void;

            /**
            * @description Override the user agent string used by the webview for guest page requests.
            * @param {string} userAgent The user agent string to use.
             */
            setUserAgentOverride(userAgent: string): void;

            /**
            * @description Changes the zoom factor of the page. The scope and persistence of this change are determined by the webview's current zoom mode (see $(ref:webviewTag.ZoomMode)).
            * @param {number} zoomFactor The new zoom factor.
            * @param callback
             */
            setZoom(zoomFactor: number, callback?: () => void): void;

            /**
            * @description Sets the zoom mode of the webview.
            * @param ZoomMode Defines how zooming is handled in the webview.
            * @param callback
             */
            setZoomMode(ZoomMode: ZoomMode, callback?: () => void): void;

            /**
            * @description Stops loading the current webview navigation if in progress.
             */
            stop(): void;

            /**
            * @description Ends the current find session (clearing all highlighting) and cancels all find requests in progress.
            * @param {string} action Determines what to do with the active match after the find session has ended. clear will clear the highlighting over the active match; keep will keep the active match highlighted; activate will keep the active match highlighted and simulate a user click on that match. The default action is keep.
             */
            stopFinding(action?: string): void;

            /**
            * @description Loads a data URL with a specified base URL used for relative links. Optionally, a virtual URL can be provided to be shown to the user instead of the data URL.
            * @param {string} dataUrl The data URL to load.
            * @param {string} baseUrl The base URL that will be used for relative links.
            * @param {string} virtualUrl The URL that will be displayed to the user (in the address bar).
             */
            loadDataWithBaseUrl(dataUrl: string, baseUrl: string, virtualUrl?: string): void;

            /**
            * @description Forcibly kills the guest web page's renderer process. This may affect multiple webview tags in the current app if they share the same process, but it will not affect webview tags in other apps.
             */
            terminate(): void;

            /**
            * @description Fired when the guest window attempts to close itself.<p>The following example code navigates the webview to about:blank when the guest attempts to close itself.</p><pre>webview.addEventListener('close', function() {
              webview.src = 'about:blank';
            });</pre>
             */

            close(event: chrome.events.Event<Event>): void;

            /**
            * @description Fired when the guest window logs a console message.<p>The following example code forwards all log messages to the embedder's console without regard for log level or other properties.</p><pre>webview.addEventListener('consolemessage', function(e) {
              console.log('Guest page logged a message: ', e.message);
            });</pre>
            * @param callback
             */

            consolemessage: chrome.events.Event<IConsoleMessage>;

            /**
            * @description Fired when the guest window fires a load event, i.e., when a new document is loaded. This does <em>not</em> include page navigation within the current document or asynchronous resource loads. <p>The following example code modifies the default font size of the guest's body element after the page loads:</p><pre>webview.addEventListener('contentload', function() {
              webview.executeScript({ code: 'document.body.style.fontSize = '42px'' });
            });</pre>
             */

            contentload: (event: chrome.events.Event<Event>) => void;

            /**
            * @description Fired when the guest window attempts to open a modal dialog via window.alert, window.confirm, or window.prompt.<p>Handling this event will block the guest process until each event listener returns or the dialog object becomes unreachable (if preventDefault() was called.)</p><p>The default behavior is to cancel the dialog.</p>
            * @param callback
             */

            dialog: chrome.events.Event<IDialog>;

            /**
            * @description Fired when the process rendering the guest web content has exited.<p>The following example code will show a farewell message whenever the guest page crashes:</p><pre>webview.addEventListener('exit', function(e) {
              if (e.reason === 'crash') {
                webview.src = 'data:text/plain,Goodbye, world!';
              }
            });</pre>
            * @param callback
             */

            exit: chrome.events.Event<IExit>;

            /**
            * @description Fired when new find results are available for an active find request. This might happen multiple times for a single find request as matches are found.
            * @param callback
             */

            findupdate: chrome.events.Event<IFindupdate>;

            /**
            * @description Fired when a top-level load has aborted without committing. An error message will be printed to the console unless the event is default-prevented. <p class='note'><strong>Note:</strong> When a resource load is aborted, a loadabort event will eventually be followed by a loadstop event, even if all committed loads since the last loadstop event (if any) were aborted.</p><p class='note'><strong>Note:</strong> When the load of either an about URL or a JavaScript URL is aborted, loadabort will be fired and then the webview will be navigated to 'about:blank'.</p>
            * @param callback
             */

            loadabort: chrome.events.Event<ILoadabort>;

            /**
            * @description Fired when a load has committed. This includes navigation within the current document as well as subframe document-level loads, but does <em>not</em> include asynchronous resource loads.
            * @param callback
             */

            loadcommit: chrome.events.Event<chrome.webview.ILoadcommit>;

            /**
            * @description Fired when a top-level load request has redirected to a different URL.
            * @param callback
             */

            loadredirect: chrome.events.Event<chrome.webview.ILoadredirect>;

            /**
            * @description Fired when a load has begun.
            * @param callback
             */

            loadstart: chrome.events.Event<chrome.webview.ILoadstart>;

            /**
            * @description Fired when all frame-level loads in a guest page (including all its subframes) have completed. This includes navigation within the current document as well as subframe document-level loads, but does <em>not</em> include asynchronous resource loads. This event fires every time the number of document-level loads transitions from one (or more) to zero. For example, if a page that has already finished loading (i.e., loadstop already fired once) creates a new iframe which loads a page, then a second loadstop will fire when the iframe page load completes. This pattern is commonly observed on pages that load ads. <p class='note'><strong>Note:</strong> When a committed load is aborted, a loadstop event will eventually follow a loadabort event, even if all committed loads since the last loadstop event (if any) were aborted.</p>
             */

            loadstop(event: chrome.events.Event<Event>): void;

            /**
            * @description Fired when the guest page attempts to open a new browser window.<p>The following example code will create and navigate a new webview in the embedder for each requested new window:</p><pre>webview.addEventListener('newwindow', function(e) {
              var newWebview = document.createElement('webview');
              document.body.appendChild(newWebview);
              e.window.attach(newWebview);
            });</pre>
            * @param callback
             */

            newwindow: chrome.events.Event<INewwindow>;

            /**
            * @description Fired when the guest page needs to request special permission from the embedder.<p>The following example code will grant the guest page access to the webkitGetUserMedia API. Note that an app using this example code must itself specify audioCapture and/or videoCapture manifest permissions:</p><pre>webview.addEventListener('permissionrequest', function(e) {
              if (e.permission === 'media') {
                e.request.allow();
              }
            });</pre>
            * @param callback
             */

            permissionrequest: chrome.events.Event<IPermissionrequest>;

            /**
            * @description Fired when the process rendering the guest web content has become responsive again after being unresponsive.<p>The following example code will fade the webview element in or out as it becomes responsive or unresponsive:</p><pre>webview.style.webkitTransition = 'opacity 250ms';
            webview.addEventListener('unresponsive', function() {
              webview.style.opacity = '0.5';
            });
            webview.addEventListener('responsive', function() {
              webview.style.opacity = '1';
            });</pre>
            * @param callback
             */

            responsive: chrome.events.Event<chrome.webview.IResponsive>;

            /**
            * @description Fired when the embedded web content has been resized via autosize. Only fires if autosize is enabled.
            * @param callback
             */

            sizechanged: chrome.events.Event<chrome.webview.ISizechanged>;

            /**
            * @description Fired when the process rendering the guest web content has become unresponsive. This event will be generated once with a matching responsive event if the guest begins to respond again.
            * @param callback
             */

            unresponsive: chrome.events.Event<chrome.webview.IUnresponsive>;

            /**
            * @description Fired when the page's zoom changes.
            * @param callback
             */

            zoomchange: chrome.events.Event<chrome.webview.IZoomchange>;
        }

        /**Options that determine what data should be cleared by clearData. */
        interface ClearDataOptions {

            /**
            * @description Clear data accumulated on or after this date, represented in milliseconds since the epoch (accessible via the getTime method of the JavaScript Date object). If absent, defaults to 0 (which would remove all browsing data).
             */
            since?: number;
        }
        /**A set of data types. Missing properties are interpreted as false. */
        interface ClearDataTypeSet {

            /**
            * @description Websites' appcaches.
             */
            appcache?: boolean

            /**
            * @description Since Chrome 43. The browser's cache. Note: when removing data, this clears the entire cache; it is not limited to the range you specify.
             */
            cache?: boolean

            /**
            * @description The partition's cookies.
             */
            cookies?: boolean

            /**
            * @description The partition's session cookies.
             */
            sessionCookies?: boolean

            /**
            * @description The partition's persistent cookies.
             */
            persistentCookies?: boolean

            /**
            * @description Websites' filesystems.
             */
            fileSystems?: boolean

            /**
            * @description Websites' IndexedDB data.
             */
            indexedDB?: boolean

            /**
            * @description Websites' local storage data.
             */
            localStorage?: boolean

            /**
            * @description Websites' WebSQL data.
             */
            webSQL?: boolean
        }
        /**
        * The different contexts a menu can appear in. Specifying 'all' is equivalent to the combination of all other contexts.
        * Enum values:
        * 'all'
        * 'page'
        * 'frame'
        * 'selection'
        * 'link'
        * 'editable'
        * 'image'
        * 'video'
        * 'audio' */
        export type ContextType = 'all' | 'page' | 'frame' | 'selection' | 'link' | 'editable' | 'image' | 'video' | 'audio';
        /**Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time. */
        interface InjectDetails {

            /**
            * @description JavaScript or CSS code to inject.   Warning:  Be careful using the code parameter. Incorrect use of it may open your app to <a href='https://en.wikipedia.org/wiki/Cross-site_scripting'>cross site scripting</a> attacks.
             */
            code?: string

            /**
            * @description JavaScript or CSS file to inject.
             */
            file?: string
        }
        /**The type of injection item: code or a set of files. */
        interface InjectionItems {

            /**
            * @description JavaScript code or CSS to be injected into matching pages.
             */
            code?: string

            /**
            * @description The list of JavaScript or CSS files to be injected into matching pages. These are injected in the order they appear in this array.
             */
            files?: any[]
        }
        /**Details of the content script to inject. Refer to the <a href='/extensions/content_scripts'>content scripts</a> documentation for more details. */
        interface ContentScriptDetails {

            /**
            * @description The name of the content script to inject.
             */
            name: string

            /**
            * @description Specifies which pages this content script will be injected into.
             */
            matches: any[]

            /**
            * @description Excludes pages that this content script would otherwise be injected into.
             */
            exclude_matches?: any[]

            /**
            * @description Whether to insert the content script on about:blank and about:srcdoc. Content scripts will only be injected on pages when their inherit URL is matched by one of the declared patterns in the matches field. The inherit URL is the URL of the document that created the frame or window. Content scripts cannot be inserted in sandboxed frames.
             */
            match_about_blank?: boolean

            /**
            * @description The CSS code or a list of CSS files to be injected into matching pages. These are injected in the order they appear, before any DOM is constructed or displayed for the page.
             */
            css?: InjectionItems

            /**
            * @description The JavaScript code or a list of JavaScript files to be injected into matching pages. These are injected in the order they appear.
             */
            js?: InjectionItems

            /**
            * @description The soonest that the JavaScript or CSS will be injected into the tab. Defaults to 'document_idle'.
             */
            run_at?: chrome.extensionTypes.RunAt;

            /**
            * @description If all_frames is true, this implies that the JavaScript or CSS should be injected into all frames of current page. By default, all_frames is false and the JavaScript or CSS is only injected into the top frame.
             */
            all_frames?: boolean;

            /**
            * @description Applied after matches to include only those URLs that also match this glob. Intended to emulate the @include Greasemonkey keyword.
             */
            include_globs?: string[];

            /**
            * @description Applied after matches to exclude URLs that match this glob. Intended to emulate the @exclude Greasemonkey keyword.
             */
            exclude_globs?: string[];
        }
        /**@todo Add documentation */
        interface ContextMenuCreateProperties {

            /**
            * @description The type of menu item. Defaults to 'normal' if not specified.
             */
            type?: chrome.contextMenus.ItemType

            /**
            * @description The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension.
             */
            id?: string

            /**
            * @description The text to be displayed in the item; this is <em>required</em> unless type is 'separator'. When the context is 'selection', you can use %s within the string to show the selected text. For example, if this parameter's value is 'Translate '%s' to Pig Latin' and the user selects the word 'cool', the context menu item for the selection is 'Translate 'cool' to Pig Latin'.
             */
            title?: string

            /**
            * @description The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items.
             */
            checked?: boolean

            /**
            * @description List of contexts this menu item will appear in. Defaults to ['page'] if not specified.
             */
            contexts?: any[]

            /**
            * @description A function that will be called back when the menu item is clicked.
            * @param callback
             */
            onclick?: (info: any) => void

            /**
            * @description The ID of a parent menu item; this makes the item a child of a previously added item.
             */
            parentId?: number | string

            /**
            * @description Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see <a href='match_patterns'>Match Patterns</a>.
             */
            documentUrlPatterns?: any[]

            /**
            * @description Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.
             */
            targetUrlPatterns?: any[]

            /**
            * @description Whether this context menu item is enabled or disabled. Defaults to true.
             */
            enabled?: boolean
        }
        /**@todo Add documentation */
        interface ContextMenuUpdateProperties {

            /**
            * @description The type of menu item.
             */
            type?: chrome.webview.ContextType;

            /**
            * @description The text to be displayed in the item
             */
            title?: string

            /**
            * @description The state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items.
             */
            checked?: boolean

            /**
            * @description List of contexts this menu item will appear in.
             */
            contexts?: any[]

            /**
            * @description A function that will be called back when the menu item is clicked.
            * @param callback
             */
            onclick?: (info: any) => void

            /**
            * @description The ID of a parent menu item; this makes the item a child of a previously added item. <em>Note:</em> You cannot change an item to be a child of one of its own descendants.
             */
            parentId?: number | string

            /**
            * @description Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see <a href='match_patterns'>Match Patterns</a>.
             */
            documentUrlPatterns?: any[]

            /**
            * @description Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.
             */
            targetUrlPatterns?: any[]

            /**
            * @description Whether this context menu item is enabled or disabled.
             */
            enabled?: boolean
        }
        interface ContextMenus {

            /**
            * @description Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in chrome.runtime.lastError).
            * @param {object} createProperties The properties used to create the item
            * @param callback
             */
            create(createProperties: object, callback?: () => void): void;

            /**
            * @description Updates a previously created context menu item.
            * @param id The ID of the item to update.
            * @param {object} updateProperties The properties to update. Accepts the same values as the create function.
            * @param callback
             */
            update(id: number | string, updateProperties: object, callback?: () => void): void;

            /**
            * @description Removes a context menu item.
            * @param menuItemId The ID of the context menu item to remove.
            * @param callback
             */
            remove(menuItemId: number | string, callback?: () => void): void;

            /**
            * @description Removes all context menu items added to this webview.
            * @param callback
             */
            removeAll(callback?: () => void): void;


            /**
            * @description Fired before showing a context menu on this webview. Can be used to disable this context menu by calling event.preventDefault().
             */
            onShow: chrome.events.Event<chrome.webview.IOnShowEvent>;

        }
        interface IOnShowEvent {
            /**
             * @description Call this to prevent showing the context menu.
             * @memberof IOnShowEvent
             */
            preventDefault: () => void;
        }
        interface ContentWindow {

            /**
            * @description <p>Posts a message to the embedded web content as long as the embedded content is displaying a page from the target origin. This method is available once the page has completed loading. Listen for the <a href='#event-contentload'>contentload</a> event and then call the method.</p><p>The guest will be able to send replies to the embedder by posting message to event.source on the message event it receives.</p><p>This API is identical to the <a href='https://developer.mozilla.org/en-US/docs/DOM/window.postMessage'>HTML5 postMessage API</a> for communication between web pages. The embedder may listen for replies by adding a message event listener to its own frame.</p>
            * @param message Message object to send to the guest.
            * @param {string} targetOrigin Specifies what the origin of the guest window must be for the event to be dispatched.
             */
            postMessage(message: any, targetOrigin: string): void;

        }
        interface DialogController {

            /**
            * @description Accept the dialog. Equivalent to clicking OK in an alert, confirm, or prompt dialog.
            * @param {string} response The response string to provide to the guest when accepting a prompt dialog.
             */
            ok(response?: string): void;

            /**
            * @description Reject the dialog. Equivalent to clicking Cancel in a confirm or prompt dialog.
             */
            cancel(): void;

        }
        /**Contains all of the results of the find request. */
        interface FindCallbackResults {

            /**
            * @description The number of times searchText was matched on the page.
             */
            numberOfMatches: number

            /**
            * @description The ordinal number of the current match.
             */
            activeMatchOrdinal: number

            /**
            * @description Describes a rectangle around the active match in screen coordinates.
             */
            selectionRect: SelectionRect

            /**
            * @description Indicates whether this find request was canceled.
             */
            canceled: boolean
        }
        /**Options for the find request. */
        interface FindOptions {

            /**
            * @description Flag to find matches in reverse order. The default value is false.
             */
            backward?: boolean

            /**
            * @description Flag to match with case-sensitivity. The default value is false.
             */
            matchCase?: boolean
        }
        interface NewWindow {

            /**
            * @description Attach the requested target page to an existing webview element.
            * @param {object} webview The webview element to which the target page should be attached.
             */
            attach(webview: object): void;

            /**
            * @description Cancel the new window request.
             */
            discard(): void;

        }
        interface MediaPermissionRequest {

            /**
            * @description Allow the permission request.
             */
            allow(): void;

            /**
            * @description Deny the permission request. This is the default behavior if allow is not called.
             */
            deny(): void;

        }
        interface GeolocationPermissionRequest {

            /**
            * @description Allow the permission request.
             */
            allow(): void;

            /**
            * @description Deny the permission request. This is the default behavior if allow is not called.
             */
            deny(): void;

        }
        interface PointerLockPermissionRequest {

            /**
            * @description Allow the permission request.
             */
            allow(): void;

            /**
            * @description Deny the permission request. This is the default behavior if allow is not called.
             */
            deny(): void;

        }
        interface DownloadPermissionRequest {

            /**
            * @description Allow the permission request.
             */
            allow(): void;

            /**
            * @description Deny the permission request. This is the default behavior if allow is not called.
             */
            deny(): void;

        }
        interface FileSystemPermissionRequest {

            /**
            * @description Allow the permission request.
             */
            allow(): void;

            /**
            * @description Deny the permission request.
             */
            deny(): void;

        }
        interface FullscreenPermissionRequest {

            /**
            * @description Allow the permission request.
             */
            allow(): void;

            /**
            * @description Deny the permission request.
             */
            deny(): void;

        }
        interface LoadPluginPermissionRequest {

            /**
            * @description Allow the permission request. This is the default behavior if deny is not called..
             */
            allow(): void;

            /**
            * @description Deny the permission request.
             */
            deny(): void;

        }
        /**
         * Fescribes a rectangle in screen coordinates.
         * The containment semantics are array-like; that is, the coordinate (left, top) is considered to be contained by the rectangle,
         * but the coordinate (left + width, top) is not.
         **/
        interface SelectionRect {

            /**
            * @description Distance from the left edge of the screen to the left edge of the rectangle.
             */
            left: number

            /**
            * @description Distance from the top edge of the screen to the top edge of the rectangle.
             */
            top: number

            /**
            * @description Width of the rectangle.
             */
            width: number

            /**
            * @description Height of the rectangle.
             */
            height: number
        }
        /**
         * @description Interface which provides access to webRequest events on the guest page. See the <a href='http://developer.chrome.com/extensions/webRequest'>chrome.webRequest</a> extensions API for details on webRequest life cycle and related concepts.<p>To illustrate how usage differs from the extensions webRequest API, consider the following example code which blocks any guest requests for URLs which match *://www.evil.com/*:</p><pre>webview.request.onBeforeRequest.addListener(
         * @example function(details) { return {cancel: true}; }, {urls: ['*://www.evil.com/*']}, ['blocking']);
         * @description Additionally, this interface supports declarative webRequest rules through onRequest and onMessage events.
         * @see http://developer.chrome.com/extensions/declarativeWebRequest.htmldeclarativeWebRequest
         * @description Note that conditions and actions for declarative webview webRequests should be instantiated from their chrome.webViewRequest.* counterparts. The following example code declaratively blocks all requests to 'example.com' on the webview myWebview:
         * @example var rule = { conditions: [ new chrome.webViewRequest.RequestMatcher({ url: { hostSuffix: 'example.com' } }) ], actions: [ new chrome.webViewRequest.CancelRequest() ] }; myWebview.request.onRequest.addRules([rule]);
         **/
        interface WebRequestEventInterface {
        }
        /**
        * Defines the how zooming is handled in the webview.
        * Enum values:
        * 'per-origin'
        * * Zoom changes will persist in the zoomed page's origin, i.e. all other webviews in the same partition that are navigated to that same origin will be zoomed as well. Moreover, per-origin zoom changes are saved with the origin, meaning that when navigating to other pages in the same origin, they will all be zoomed to the same zoom factor.
        * 'per-view'
        * * Zoom changes only take effect in this webview, and zoom changes in other webviews will not affect the zooming of this webview. Also, per-view zoom changes are reset on navigation; navigating a webview will always load pages with their per-origin zoom factors (within the scope of the partition).
        * 'disabled'
        * * Disables all zooming in the webview. The content will revert to the default zoom level, and all attempted zoom changes will be ignored. */
        export type ZoomMode = 'per-origin' | 'per-view' | 'disabled';

        export enum ConsoleMessageLevel {
            LOG_VERBOSE = -1,
            LOG_INFO = 0,
            LOG_WARNING = 1,
            LOG_ERROR = 2
        }
        interface IConsoleMessage {

            /**
            * @description The severity level of the log message. Ranges from -1 to 2. LOG_VERBOSE (console.debug) = -1, LOG_INFO (console.log, console.info) = 0, LOG_WARNING (console.warn) = 1, LOG_ERROR (console.error) = 2.
             */
            level: ConsoleMessageLevel;

            /**
            * @description The logged message contents.
             */
            message: string

            /**
            * @description The line number of the message source.
             */
            line: number

            /**
            * @description A string identifying the resource which logged the message.
             */
            sourceId: string
        }
        interface IDialog {

            /**
            * @description The type of modal dialog requested by the guest.
             */
            messageType: 'alert' | 'confirm' | 'prompt'

            /**
            * @description The text the guest attempted to display in the modal dialog.
             */
            messageText: string

            /**
            * @description An interface that can be used to respond to the guest's modal request.
             */
            dialog: DialogController
        }
        interface IExit {

            /**
            * @description Chrome's internal ID of the process that exited.
             */
            processID: number

            /**
            * @description String indicating the reason for the exit.
             */
            reason: 'normal' | 'abnormal' | 'crash' | 'kill'
        }
        interface IFindupdate {

            /**
            * @description The string that is being searched for in the page.
             */
            searchText: string

            /**
            * @description The number of matches found for searchText on the page so far.
             */
            numberOfMatches: number

            /**
            * @description The ordinal number of the current active match, if it has been found. This will be 0 until then.
             */
            activeMatchOrdinal: number

            /**
            * @description Describes a rectangle around the active match, if it has been found, in screen coordinates.
             */
            selectionRect: SelectionRect

            /**
            * @description Indicates whether the find request was canceled.
             */
            canceled: boolean

            /**
            * @description Indicates that all find requests have completed and that no more findupdate events will be fired until more find requests are made.
             */
            finalUpdate: string
        }
        interface ILoadabort {

            /**
            * @description Requested URL.
             */
            url: string

            /**
            * @description Whether the load was top-level or in a subframe.
             */
            isTopLevel: boolean

            /**
            * @description Unique integer ID for the type of abort. Note that this ID is <em>not</em> guaranteed to remain backwards compatible between releases. You must not act based upon this specific integer.
             */
            code: number

            /**
            * @description String indicating what type of abort occurred. This string is <em>not</em> guaranteed to remain backwards compatible between releases. You must not parse and act based upon its content. It is also possible that, in some cases, an error not listed here could be reported.
             */
            reason: 'ERR_ABORTED' | 'ERR_INVALID_URL' | 'ERR_DISALLOWED_URL_SCHEME' | 'ERR_BLOCKED_BY_CLIENT' | 'ERR_ADDRESS_UNREACHABLE' | 'ERR_EMPTY_RESPONSE' | 'ERR_FILE_NOT_FOUND' | 'ERR_UNKNOWN_URL_SCHEME'
        }
        interface ILoadcommit {

            /**
            * @description The URL that committed.
             */
            url: string

            /**
            * @description Whether the load is top-level or in a subframe.
             */
            isTopLevel: boolean
        }
        /**ILoadredirect (Auto generated interface) */
        interface ILoadredirect {

            /**
            * @description The requested URL before the redirect.
             */
            oldUrl: string

            /**
            * @description The new URL after the redirect.
             */
            newUrl: string

            /**
            * @description Whether or not the redirect happened at top-level or in a subframe.
             */
            isTopLevel: boolean
        }
        /**ILoadstart (Auto generated interface) */
        interface ILoadstart {

            /**
            * @description Requested URL.
             */
            url: string

            /**
            * @description Whether the load is top-level or in a subframe.
             */
            isTopLevel: boolean
        }
        /**INewwindow (Auto generated interface) */
        interface INewwindow {

            /**
            * @description An interface that can be used to either attach the requested target page to an existing webview element or explicitly discard the request.
             */
            window: NewWindow

            /**
            * @description The target URL requested for the new window.
             */
            targetUrl: string

            /**
            * @description The initial width requested for the new window.
             */
            initialWidth: number

            /**
            * @description The initial height requested for the new window.
             */
            initialHeight: number

            /**
            * @description The requested name of the new window.
             */
            name: string

            /**
            * @description The requested disposition of the new window.
             */
            windowOpenDisposition: 'ignore' | 'save_to_disk' | 'current_tab' | 'new_background_tab' | 'new_foreground_tab' | 'new_window' | 'new_popup'
        }
        interface IPermissionrequest {

            /**
            * @description The type of permission being requested.
             */
            permission: 'media' | 'geolocation' | 'pointerLock' | 'download' | 'loadplugin' | 'filesystem' | 'fullscreen'

            /**
            * @description An object which holds details of the requested permission. Depending on the type of permission requested, this may be a $(ref:webviewTag.MediaPermissionRequest), $(ref:webviewTag.GeolocationPermissionRequest), $(ref:webviewTag.PointerLockPermissionRequest), $(ref:webviewTag.DownloadPermissionRequest), $(ref:webviewTag.LoadPluginPermissionRequest), or $(ref:webviewTag.FullscreenPermissionRequest).
             */
            request: GeolocationPermissionRequest | PointerLockPermissionRequest | DownloadPermissionRequest | LoadPluginPermissionRequest | FullscreenPermissionRequest;
        }

        /**IResponsive (Auto generated interface) */
        interface IResponsive {

            /**
            * @description Chrome's internal ID of the process that became responsive.
             */
            processID: number
        }
        /**ISizechanged (Auto generated interface) */
        interface ISizechanged {

            /**
            * @description Old width of embedded web content.
             */
            oldWidth: number

            /**
            * @description Old height of embedded web content.
             */
            oldHeight: number

            /**
            * @description New width of embedded web content.
             */
            newWidth: number

            /**
            * @description New height of embedded web content.
             */
            newHeight: number
        }
        /**IUnresponsive (Auto generated interface) */
        interface IUnresponsive {

            /**
            * @description Chrome's internal ID of the process that has become unresponsive.
             */
            processID: number
        }
        /**IZoomchange (Auto generated interface) */
        interface IZoomchange {

            /**
            * @description The page's previous zoom factor.
             */
            oldZoomFactor: number

            /**
            * @description The new zoom factor that the page was zoomed to.
             */
            newZoomFactor: number
        }

    }

}

/////////////////////
// EXPORT
/////////////////////
interface Window {
    chrome: typeof chrome;
}
