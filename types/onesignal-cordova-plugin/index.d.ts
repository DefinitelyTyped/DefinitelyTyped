// Type definitions for onesignal-cordova-plugin 2.6
// Project: https://github.com/onesignal/OneSignal-Cordova-SDK#readme
// Definitions by: David Broder-Rodgers <https://github.com/broder>
//                Vaclav Novotny <https://github.com/vaclavnovotny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

interface Window {
    plugins: CordovaPlugins;
}

interface CordovaPlugins {
    OneSignal: OneSignalCordovaPlugin.OneSignalCordovaPlugin;
}

declare namespace OneSignalCordovaPlugin {
    interface OneSignalCordovaPlugin {
        OSInFocusDisplayOption: { None: 0; InAppAlert: 1; Notification: 2 };
        OSNotificationPermission: { NotDetermined: 0; Authorized: 1; Denied: 2 };
        addEmailSubscriptionObserver(
            callback: (change: { from: OSEmailSubscriptionState; to: OSEmailSubscriptionState }) => void,
        ): void;
        /**
         *  The passed in function will be fired when a notification permission
         *  setting changes.
         */
        addPermissionObserver(callback: (change: { from: OSPermissionState; to: OSPermissionState }) => void): void;
        /**
         *  The passed in function will be fired when a notification subscription
         *  property changes.
         */
        addSubscriptionObserver(
            callback: (change: { from: OSSubscriptionState; to: OSSubscriptionState }) => void,
        ): void;
        /**
         *  Add a trigger, may show an In-App Message if its triggers conditions
         *  were met.
         */
        addTrigger(key: string, value: string | number): void;
        /**
         *  Add a key-value Object of triggers, may show an In-App Message if
         *  its triggers conditions were met.
         */
        addTriggers(triggers: Record<string, string | number>): void;
        /** Clear all notifications sent from OneSignal */
        clearOneSignalNotifications(): void;
        /**
         *  Deletes a single tag that was previously set on a user with sendTag
         *  or sendTags. Use deleteTags if you need to delete more than one.
         */
        deleteTag(key: string): void;
        /**
         *  Deletes one or more tags that were previously set on a user with
         *  sendTag or sendTags.
         */
        deleteTags(keys: string[]): void;
        enableNotificationsWhenActive(enable: boolean): void;
        /**
         *  By default OneSignal plays the system's default notification sound
         *  when the device's notification system volume is turned on. You may
         *  also set custom sounds on notifications. Passing false means that the
         *  device will only vibrate unless the device is set to a total silent
         *  mode.
         */
        enableSound(enable: boolean): void;
        /**
         *  By default OneSignal always vibrates the device when a notification
         *  is displayed unless the device is in a total silent mode. Passing
         *  false means that the device will only vibrate lightly when the
         *  device is in it's vibrate only mode.
         */
        enableVibrate(enable: boolean): void;
        getIds(IdsReceivedCallBack: (id: { userId: string; pushToken: string }) => void): void;
        /**
         *  Get the current notification and permission state. Returns an object
         *  of OSPermissionSubscriptionState type described below.
         */
        getPermissionSubscriptionState(callback: (status: OSPermissionSubscriptionState) => void): void;
        /**
         *  Retrieve a list of tags that have been set on the user from the
         *  OneSignal server.
         */
        getTags(callback: (tags: any) => void): void;
        /** Gets a trigger value for a provided trigger key. */
        getTriggerValueForKey(key: string, callback: (value: any) => void): void;
        /**
         *  Sets a In-App Message clicked handler. The instance will be called
         *  when an In-App Message action is tapped on.
         */
        handleInAppMessageClicked(handler: (action: OSNotificationAction) => void): void;
        /**
         *  If your app implements logout functionality, you can call logoutEmail
         *  to dissociate the email from the device:
         */
        logoutEmail(onSuccess: (success: any) => void, onFailure: (error: any) => void): void;
        /**
         *  Allows you to temporarily pause all In-App Messages. You may want to
         *  do this while the user is watching a video playing a match in your
         *  game to make sure they don't get interrupted at a bad time.
         */
        pauseInAppMessages(pause: boolean): void;
        /**
         *  Allows you to send notifications from user to user or schedule ones
         *  in the future to be delivered to the current device.
         */
        postNotification(
            notificationObj: Partial<OSNotification>,
            onSuccess: (json: any) => void,
            onFailure: (json: any) => void,
        ): void;
        /**
         *  Prompt the user for notification permissions. Callback fires as soon
         *  as the user accepts or declines notifications.
         */
        promptForPushNotificationsWithUserResponse(callback: (accepted: boolean) => void): void;
        /**
         *  Prompts the user for location permissions. This allows for
         *  geotagging so you can send notifications to users based on location.
         */
        promptLocation(): void;
        /**
         *  If your application is set to require the user's privacy consent,
         *  you can provide this consent using this method. Until you call
         *  provideUserConsent(true), the SDK will not fully initialize and will
         *  not send any data to OneSignal.
         */
        provideUserConsent(granted: boolean): void;
        registerForPushNotifications(): void;
        /**
         *  If your user logs out of your app and you would like to disassociate
         *  their custom user ID from your system with their OneSignal user ID,
         *  you will want to call this method.
         */
        removeExternalUserId(): void;
        /**
         *  Removes a single trigger for the given key, may show an In-App
         *  Message if its triggers conditions were met.
         */
        removeTriggerForKey(key: string): void;
        /**
         *  Removes a list of triggers based on a collection of keys, may show
         *  an In-App Message if its triggers conditions were met.
         */
        removeTriggersForKeys(keys: string[]): void;
        /**
         *  Tag a user based on an app event of your choosing so later you can
         *  create segments in Segments to target these users. Use sendTags if
         *  you need to set more than one tag on a user at a time.
         */
        sendTag(key: string, value: string): void;
        /**
         *  Tag a user based on an app event of your choosing so later you can
         *  create segments in Segments to target these users.
         */
        sendTags(tags: { [key: string]: string }): void;
        /** Allows you to set the user's email address with the OneSignal SDK */
        setEmail(email: string): void;
        /**
         *  If you have a backend server, we strongly recommend using Identity
         *  Verification with your users. Your backend can generate an email
         *  authentication token and send it to your app. The following code
         *  also includes callbacks:
         */
        setEmail(
            email: string,
            emailAuthToken: string,
            onSuccess: (success: any) => void,
            onFailure: (error: any) => void,
        ): void;
        /**
         *  If your system assigns unique identifiers to users, it can be
         *  annoying to have to also remember their OneSignal user ID's as well.
         *  To make things easier, OneSignal now allows you to set an
         *  external_id for your users. Simply call this method, pass in your
         *  custom user ID (as a string), and from now on when you send a push
         *  notification, you can use include_external_user_ids instead of
         *  include_player_ids.
         */
        setExternalUserId(userId: string): void;
        setInFocusDisplaying(displayType: OSDisplayType): void;
        setLocationShared(shared: any): void;
        /**
         *  Enable logging to help debug if you run into an issue setting up
         *  OneSignal.
         */
        setLogLevel(logLevel: { logLevel: OSLogLevel; visualLevel: OSLogLevel }): void;
        /**
         *  Allows you to delay the initialization of the SDK until the user
         *  provides privacy consent. The SDK will not be fully initialized
         *  until the provideUserConsent(true) method is called. If you set this
         *  to be true, the SDK will not fully initialize until consent is
         *  provided. You can still call OneSignal methods, but nothing will
         *  happen, and the user will not be registered for push notifications.
         */
        setRequiresUserPrivacyConsent(required: boolean): void;
        /**
         *  You can call this method with false to opt users out of receiving
         *  all notifications through OneSignal. You can pass true later to opt
         *  users back into notifications. This unsubscribes the user from
         *  OneSignal, but the device will still show as subscribed to push.
         *  This method is helpful if you need to unsubscribe users momentarily
         *  or provide the option in a "settings" page.
         */
        setSubscription(enable: boolean): void;
        /**
         *  Starts initialization of OneSignal, call this from the deviceready
         *  event.
         */
        startInit(appId: string, googleProjectNumber?: string): OneSignalBuilder;
        syncHashedEmail(email: string): void;
        /**
         *  Accepts a callback, which returns a boolean variable indicating if
         *  the user has given privacy consent yet.
         */
        userProvidedPrivacyConsent(callback: (providedConsent: boolean) => void): void;
    }

    interface OneSignalBuilder {
        endInit(): void;
        handleNotificationOpened(callback: (json: OSNotificationOpenedResult) => void): OneSignalBuilder;
        handleNotificationReceived(callback: (json: OSNotification) => void): OneSignalBuilder;
        inFocusDisplaying(displayOption: OSDisplayType): OneSignalBuilder;
        iOSSettings(settings: {
            kOSSettingsKeyAutoPrompt: boolean;
            kOSSettingsKeyInAppLaunchURL: boolean;
        }): OneSignalBuilder;
    }

    interface OSNotification {
        isAppInFocus: boolean;
        shown: boolean;
        androidNotificationId?: number;
        payload: OSNotificationPayload;
        displayType: OSDisplayType;
        groupedNotifications?: OSNotificationPayload[];
        app_id?: string;
        contents: any;
        headings?: any;
        isIos?: boolean;
        isAndroid?: boolean;
        isWP?: boolean;
        isWP_WNS?: boolean;
        isAdm?: boolean;
        isChrome?: boolean;
        isChromeWeb?: boolean;
        isSafari?: boolean;
        isAnyWeb?: boolean;
        included_segments?: string[];
        excluded_segments?: string[];
        include_player_ids?: string[];
        include_ios_tokens?: string[];
        include_android_reg_ids?: string[];
        include_wp_uris?: string[];
        include_wp_wns_uris?: string[];
        include_amazon_reg_ids?: string[];
        include_chrome_reg_ids?: string[];
        include_chrome_web_reg_ids?: string[];
        app_ids?: string[];
        tags?: any[];
        ios_badgeType?: string;
        ios_badgeCount?: number;
        ios_sound?: string;
        android_sound?: string;
        adm_sound?: string;
        wp_sound?: string;
        wp_wns_sound?: string;
        data?: any;
        buttons?: any;
        small_icon?: string;
        large_icon?: string;
        big_picture?: string;
        adm_small_icon?: string;
        adm_large_icon?: string;
        adm_big_picture?: string;
        chrome_icon?: string;
        chrome_big_picture?: string;
        chrome_web_icon?: string;
        firefox_icon?: string;
        url?: string;
        send_after?: string;
        delayed_option?: string;
        delivery_time_of_day?: string;
        android_led_color?: string;
        android_accent_color?: string;
        android_visibility?: number;
        content_available?: boolean;
        amazon_background_data?: boolean;
        template_id?: string;
        android_group?: string;
        android_group_message?: any;
        adm_group?: string;
        adm_group_message?: any;
        ttl?: number;
        priority?: number;
        ios_category?: string;
    }

    interface OSNotificationPayload {
        notificationID: string;
        title: string;
        body: string;
        additionalData?: any;
        smallIcon?: string;
        largeIcon?: string;
        bigPicture?: string;
        smallIconAccentColor?: string;
        launchURL?: string;
        sound: string;
        ledColor?: string;
        lockScreenVisibility?: OSLockScreenVisibility;
        groupKey?: string;
        groupMessage?: string;
        actionButtons: OSActionButton[];
        fromProjectNumber?: string;
        backgroundImageLayout?: OSBackgroundImageLayout;
        priority?: number;
        rawPayload: string;
    }

    interface OSNotificationAction {
        type: 'Opened' | 'ActionTaken';
        actionID: string;
    }

    interface OSEmailSubscriptionState {
        emailUserId: string;
        emailAddress: string;
    }

    interface OSActionButton {
        id: string;
        text: string;
        icon: string;
    }

    interface OSPermissionState {
        hasPrompted: boolean;
        provisional: boolean;
        state: OSNotificationPermissionState;
        status: OSNotificationPermission;
    }

    interface OSSubscriptionState {
        subscribed: boolean;
        userSubscriptionSetting: boolean;
        userId: string;
        pushToken: string;
    }

    interface OSPermissionSubscriptionState {
        emailSubscriptionStatus: OSEmailSubscriptionState;
        permissionStatus: OSPermissionState;
        subscriptionStatus: OSSubscriptionState;
    }

    interface OSBackgroundImageLayout {
        image: string;
        titleTextColor: string;
        bodyTextColor: string;
    }

    interface OSNotificationOpenedResult {
        action: {
            type: OSActionType;
            actionID?: string;
        };
        notification: OSNotification;
    }

    const enum OSLockScreenVisibility {
        Public = 1,
        Private = 0,
        Secret = -1,
    }

    const enum OSDisplayType {
        None = 0,
        InAppAlert = 1,
        Notification = 2,
    }

    const enum OSActionType {
        Opened = 0,
        ActionTake = 1,
    }

    const enum OSInFocusDisplayOption {
        None = 0,
        InAppAlert = 1,
        Notification = 2,
    }

    /**
     * iOS only
     */
    const enum OSNotificationPermission {
        NotDetermined = 0,
        Denied = 1,
        Authorized = 2,
    }

    /**
     *  Android only
     */
    const enum OSNotificationPermissionState {
        Authorized = 1,
        Denied = 2,
    }

    const enum OSLogLevel {
        None,
        Fatal,
        Errors,
        Warnings,
        Info,
        Debug,
        Verbose,
    }
}
