export interface SettingsAppStartupOptions {
    /**
     * The maximum number of milliseconds
     * to wait until the app has started
     * @default 5000
     */
    timeout?: number;
}

export interface Location {
    longitude: number | string;
    latitude: number | string;
    altitude?: number | string;
}

export interface SmsListOptions {
    /**
     * The maximum count of recent messages to retrieve
     * @default 100
     */
    max?: number;
}

export interface StatusBarNotification {
    isGroup: boolean;
    packageName: string;
    isClearable: boolean;
    isOngoing: boolean;
    id: number;
    tag: string | null;
    notification: {
        title: string | null;
        bigTitle: string | null;
        text: string | null;
        bigText: string | null;
        tickerText: string | null;
        subText: string | null;
        infoText: string | null;
        template: string | null;
    };
    userHandle: number;
    groupKey: string;
    overrideGroupKey: string | null;
    postTime: number;
    key: string;
    isRemoved: boolean;
}

export interface SmsItem {
    id: string;
    address: string;
    person: string | null;
    date: string;
    read: string;
    status: string;
    type: string;
    subject: string | null;
    body: string;
    serviceCenter: string | null;
}

declare const commands: SettingsClientCommands;
export default commands;

interface SettingsClientCommands {
    /**
     * Ensures that Appium Settings helper application is running
     * and starts it if necessary
     *
     * @param opts
     * @throws If Appium Settings has failed to start
     * @returns self instance for chaining
     */
    requireRunningSettingsApp(opts?: SettingsAppStartupOptions): Promise<this>;

    /**
     * Change the state of WiFi on the device under test.
     *
     * @param on - True to enable and false to disable it.
     * @param isEmulator [false] - Set it to true if the device under test
     *                                       is an emulator rather than a real device.
     */
    setWifiState(on: boolean, isEmulator?: boolean): Promise<void>;

    /**
     * Change the state of Data transfer on the device under test.
     *
     * @param on - True to enable and false to disable it.
     * @param isEmulator [false] - Set it to true if the device under test
     *                                       is an emulator rather than a real device.
     */
    setDataState(on: boolean, isEmulator?: boolean): Promise<void>;

    /**
     * Change the state of animation on the device under test.
     * Animation on the device is controlled by the following global properties:
     * [ANIMATOR_DURATION_SCALE]{@link https://developer.android.com/reference/android/provider/Settings.Global.html#ANIMATOR_DURATION_SCALE},
     * [TRANSITION_ANIMATION_SCALE]{@link https://developer.android.com/reference/android/provider/Settings.Global.html#TRANSITION_ANIMATION_SCALE},
     * [WINDOW_ANIMATION_SCALE]{@link https://developer.android.com/reference/android/provider/Settings.Global.html#WINDOW_ANIMATION_SCALE}.
     * This method sets all this properties to 0.0 to disable (1.0 to enable) animation.
     *
     * Turning off animation might be useful to improve stability
     * and reduce tests execution time.
     *
     * @param on - True to enable and false to disable it.
     */
    setAnimationState(on: boolean): Promise<void>;

    /**
     * Change the locale on the device under test. Don't need to reboot the device after changing the locale.
     * This method sets an arbitrary locale following:
     *   https://developer.android.com/reference/java/util/Locale.html
     *   https://developer.android.com/reference/java/util/Locale.html#Locale(java.lang.String,%20java.lang.String)
     *
     * @param language - Language. e.g. en, ja
     * @param country - Country. e.g. US, JP
     * @param script - Script. e.g. Hans in `zh-Hans-CN`
     */
    setDeviceSysLocaleViaSettingApp(language: string, country: string, script?: string): Promise<void>;

    /**
     * Emulate geolocation coordinates on the device under test.
     *
     * @param location - Location object. The `altitude` value is ignored
     * while mocking the position.
     * @param isEmulator [false] - Set it to true if the device under test
     *                                       is an emulator rather than a real device.
     */
    setGeoLocation(location: Location, isEmulator?: boolean): Promise<void>;

    /**
     * Get the current cached GPS location from the device under test.
     *
     * @returns The current location
     * @throws If the current location cannot be retrieved
     */
    getGeoLocation(): Promise<Location>;

    /**
     * Sends an async request to refresh the GPS cache.
     * This feature only works if the device under test has
     * Google Play Services installed. In case the vanilla
     * LocationManager is used the device API level must be at
     * version 30 (Android R) or higher.
     *
     * @param timeoutMs [20000] The maximum number of milliseconds
     * to block until GPS cache is refreshed. Providing zero or a negative
     * value to it skips waiting completely.
     *
     * @throws If the GPS cache cannot be refreshed.
     */
    refreshGeoLocationCache(timeoutMs?: number): Promise<void>;

    /**
     * Performs the given editor action on the focused input field.
     * This method requires Appium Settings helper to be installed on the device.
     * No exception is thrown if there was a failure while performing the action.
     * You must investigate the logcat output if something did not work as expected.
     *
     * @param action - Either action code or name. The following action
     *                                 names are supported: `normal, unspecified, none,
     *                                 go, search, send, next, done, previous`
     */
    performEditorAction(action: string | number): Promise<void>;

    /**
     * Retrieves the text content of the device's clipboard.
     * The method works for Android below and above 29.
     * It temorarily enforces the IME setting in order to workaround
     * security limitations if needed.
     * This method only works if Appium Settings v. 2.15+ is installed
     * on the device under test
     *
     * @returns The actual content of the main clipboard as
     * base64-encoded string or an empty string if the clipboard is empty
     * @throws If there was a problem while getting the
     * clipboard contant
     */
    getClipboard(): Promise<string>;

    /**
     * Retrieves Android notifications via Appium Settings helper.
     * Appium Settings app itself must be *manually* granted to access notifications
     * under device Settings in order to make this feature working.
     * Appium Settings helper keeps all the active notifications plus
     * notifications that appeared while it was running in the internal buffer,
     * but no more than 100 items altogether. Newly appeared notifications
     * are always added to the head of the notifications array.
     * The `isRemoved` flag is set to `true` for notifications that have been removed.
     *
     * See https://developer.android.com/reference/android/service/notification/StatusBarNotification
     * and https://developer.android.com/reference/android/app/Notification.html
     * for more information on available notification properties and their values.
     *
     * @returns The example output is:
     * ```json
     * {
     *   "statusBarNotifications":[
     *     {
     *       "isGroup":false,
     *       "packageName":"io.appium.settings",
     *       "isClearable":false,
     *       "isOngoing":true,
     *       "id":1,
     *       "tag":null,
     *       "notification":{
     *         "title":null,
     *         "bigTitle":"Appium Settings",
     *         "text":null,
     *         "bigText":"Keep this service running, so Appium for Android can properly interact with several system APIs",
     *         "tickerText":null,
     *         "subText":null,
     *         "infoText":null,
     *         "template":"android.app.Notification$BigTextStyle"
     *       },
     *       "userHandle":0,
     *       "groupKey":"0|io.appium.settings|1|null|10133",
     *       "overrideGroupKey":null,
     *       "postTime":1576853518850,
     *       "key":"0|io.appium.settings|1|null|10133",
     *       "isRemoved":false
     *     }
     *   ]
     * }
     * ```
     * @throws If there was an error while getting the notifications list
     */
    getNotifications(): Promise<{ statusBarNotifications: StatusBarNotification[] }>;

    /**
     * Retrieves the list of the most recent SMS
     * properties list via Appium Settings helper.
     * Messages are sorted by date in descending order.
     *
     * @param opts
     * @returns The example output is:
     * ```json
     * {
     *   "items":[
     *     {
     *       "id":"2",
     *       "address":"+123456789",
     *       "person":null,
     *       "date":"1581936422203",
     *       "read":"0",
     *       "status":"-1",
     *       "type":"1",
     *       "subject":null,
     *       "body":"\"text message2\"",
     *       "serviceCenter":null
     *     },
     *     {
     *       "id":"1",
     *       "address":"+123456789",
     *       "person":null,
     *       "date":"1581936382740",
     *       "read":"0",
     *       "status":"-1",
     *       "type":"1",
     *       "subject":null,
     *       "body":"\"text message\"",
     *       "serviceCenter":null
     *     }
     *   ],
     *   "total":2
     * }
     * ```
     * @throws If there was an error while getting the SMS list
     */
    getSmsList(opts?: SmsListOptions): Promise<{ items: SmsItem[]; total: number }>;

    /**
     * Types the given Unicode string.
     * It is expected that the focus is already put
     * to the destination input field before this method is called.
     *
     * @param text The string to type
     * @returns `true` if the input text has been successfully sent to adb
     */
    typeUnicode(text: string): Promise<boolean>;

    /**
     * Performs recursive media scan at the given destination.
     * All successfully scanned items are being added to the device's
     * media library.
     *
     * @param destination File/folder path on the remote device.
     * @throws If there was an unexpected error by scanning.
     */
    scanMedia(destination: string): Promise<void>;
}
