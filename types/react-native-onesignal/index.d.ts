// Type definitions for react-native-onesignal 3.2
// Project: https://github.com/geektimecoil/react-native-onesignal#readme
// Definitions by: Krystof Celba <https://github.com/krystofcelba>
//                 Fabian Meul <https://github.com/FabianMeul>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export enum InFocusDisplayOption {
    none = 0,
    inAppAlert = 1,
    notification = 2,
}

export enum LogLevel {
    None = 0,
    Fatal = 1,
    Errors = 2,
    Warnings = 3,
    Info = 4,
    Debug = 5,
    Verbose = 6,
}

export type oneSignalEvents = 'received' | 'opened' | 'ids';

export interface Settings {
    kOSSettingsKeyAutoPrompt: boolean;
    kOSSettingsKeyInAppLaunchURL: boolean;
    kOSSSettingsKeyPromptBeforeOpeningPushURL: boolean;
    kOSSettingsKeyInFocusDisplayOption: InFocusDisplayOption;
}

export interface PushData {
    notificationID: string;
    contentAvailable: boolean;
    badge?: number;
    sound: string;
    title: string;
    body: string;
    launchURL?: string;
    additionalData?: object;
    p2p_notification?: any[];
}

export interface OpenResult {
    notification: {
        payload: PushData;
        isAppInFocus: boolean;
    };
}

export interface Permissions {
    alert: boolean;
    badge: boolean;
    sound: boolean;
}

/**
 * shown If the notification was displayed to the user or not
 * payload the push data
 * displayType The display method of a received notification
 * silentNotification Wether the received notification was a silent one
 */
export interface ReceivedNotification {
    shown: boolean;
    payload: PushData;
    displayType: InFocusDisplayOption;
    silentNotification: boolean;
}

export interface OneSignal {
    /**
     * Initialize Onesignal
     */
    init(appId: string, settings?: Settings): void;

    /**
     * Undocumented function.
     */
    Configure(undocumentedParam1?: any, undocumentedParam2?: any): void;

    /**
     * You can set tag for user with this function.
     */
    sendTag(key: string, value: string): void;

    /**
     * You can set multiple tags for user with this function.
     */
    sendTags(tags: object): void;

    /**
     * Getting the tags from the server and use the received object
     */
    getTags(handler: (receivedTags: any) => {}): void;

    /**
     * Allows you to check whether notifications are enabled for the app, whether user is subscribed to notifications through OneSignal,and what the user's in-app subscription preference is.
     * It also provides access to pushToken and userId
     */
    getPermissionSubscriptionState(handler: (status: any) => {}): void;

    /**
     * You can delete tag from user with this function.
     */
    deleteTag(key: string): void;

    /**
     * OneSignal now allows you to send emails to your userbase. This email can be set using the OneSignal react-native SDK.
     */
    setEmail(email: string, emailAuthCode: string, callback: (error?: any) => {}): void;

    /**
     * If you don't want to implement email auth hashing on your backend (which is heavily recommended), you can still use the OneSignal email feature in an unauthenticated state with this function.
     */
    setEmail(email: string, callback: (error?: any) => {}): void;

    /**
     * If your application implements logout functionality, you can logout of the OneSignal email for this user using the logout function.
     */
    logoutEmail(callback: (error?: any) => {}): void;

    /**
     * You can call this from your UI from a button press for example to give your user's options for your notifications.
     * By default OneSignal always vibrates the device when a notification is displayed unless the device is in a total silent mode.
     * Passing false means that the device will only vibrate lightly when the device is in it's vibrate only mode.
     */
    enableVibrate(setTo: boolean): void;

    /**
     * You can call this from your UI from a button press for example to give your user's options for your notifications.
     * By default OneSignal plays the system's default notification sound when the device's notification system volume is turned on.
     * Passing false means that the device will only vibrate unless the device is set to a total silent mode.
     */
    enableSound(setTo: boolean): void;

    /**
     * You can call this method with false to opt users out of receiving all notifications through OneSignal.
     * You can pass true later to opt users back into notifications
     */
    setSubscription(setTo: boolean): void;

    /**
     * Promts location permission to user.
     */
    promptLocation(): void;

    /**
     * Removes all OneSignal notifications from the Notification Shade.
     */
    clearOneSignalNotifications(): void;

    /**
     * Disable or enable location collection (defaults to enabled if your app has location permission).
     */
    setLocationShared(setTo: boolean): void;

    /**
     * Prompts the user for location permissions. This allows for geotagging so you can send notifications to users based on location.
     *
     * Note: Make sure you also have the required location permission in your AndroidManifest.xml.
     * For iOS, make sure you set the NSLocationWhenInUseUsageDescription or the NSLocationAlwaysUsageDescription in your info.plist.
     * (Location Always also requires the location background mode capability)
     */
    inFocusDisplaying(setTo: InFocusDisplayOption): void;

    /**
     * P2P notification
     */
    postNotification(contents: object, data: any[], playerId: string, otherParameters?: object): void;

    /**
     * Cancels a single OneSignal notification based on its Android notification integer id.
     * You can get the notification Id when invoking OneSignal.onNotificationOpened while receiving a notification.
     */
    cancelNotification(notificationId: string): void;

    /**
     * See what push permissions are currently enabled. callback will be invoked with a permissions object (currently supported only on iOS).
     */
    checkPermissions(callback: (permissions: any) => {}): void;

    /**
     * Requests Push Notification Permissions (iOS Only)
     */
    requestPermissions(permissions: Permissions): void;

    /**
     * Call when you want to prompt the user to accept push notifications. Only call once and only if you passed @NO to kOSSettingsKeyAutoPrompt on init.
     */
    registerForPushNotifications(): void;

    /**
     * IMPORTANT: Use this function before OneSignal.init
     *
     * Allows you to delay the initialization of the SDK until the user provides privacy consent. The SDK will not be fully initialized until the provideUserConsent(true) method is called.
     *
     * If you set this to be true, the SDK will not fully initialize until consent is provided.
     * You can still call OneSignal methods, but nothing will happen, and the user will not be registered for push notifications.
     */
    setRequiresUserPrivacyConsent(wtf: boolean): void;

    /**
     * Will initialize the SDK and register for push notifications.
     */
    provideUserConsent(wtf: boolean): void;

    /**
     * Enable logging to help debug if you run into an issue setting up OneSignal.
     */
    setLogLevel(logLevel: LogLevel, visualLevel: LogLevel): void;

    /**
     * You can bind events with this function.
     */
    addEventListener(type: oneSignalEvents, handler: () => void): void;

    /**
     * You can remove binded events with this function.
     */
    removeEventListener(type: oneSignalEvents, handler?: () => void): void;
}

declare const OneSignal: OneSignal;

export default OneSignal;
