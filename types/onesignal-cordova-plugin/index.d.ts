// Type definitions for onesignal-cordova-plugin 2.2
// Project: https://github.com/onesignal/OneSignal-Cordova-SDK#readme
// Definitions by: David Broder-Rodgers <https://github.com/broder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Window {
    plugins: { OneSignal: OneSignalCordovaPlugin.OneSignalCordovaPlugin };
}

declare namespace OneSignalCordovaPlugin {
    interface OneSignalCordovaPlugin {
        startInit(appId: string): OneSignalBuilder;
        promptForPushNotificationsWithUserResponse(callback: (accepted: boolean) => void): void;
        getPermissionSubscriptionState(callback: (status: OSPermissionSubscriptionState) => void): void;
        addPermissionObserver(callback: (state: OSPermissionState) => void): void;
        addSubscriptionObserver(callback: (state: OSSubscriptionState) => void): void;
        getTags(callback: (tags: any) => void): void;
        sendTag(key: string, value: string): void;
        sendTags(tags: { [key: string]: string }): void;
        deleteTag(key: string): void;
        deleteTags(keys: string[]): void;
        promptLocation(): void;
        syncHashedEmail(email: string): void;
        postNotification(notificationObj: any, onSuccess: (json: any) => void, onFailure: (json: any) => void): void;
        clearOneSignalNotifications(): void;
        setSubscription(enable: boolean): void;
        enableVibrate(enable: boolean): void;
        enableSound(enable: boolean): void;
        setLogLevel(logLevel: { logLevel: number, visualLevel: number }): void;
        getIds(callback: (id: { userId: string; pushToken: string }) => void): void;
        registerForPushNotifications(): void;
    }

    interface OneSignalBuilder {
        handleNotificationReceived(callback: (json: OSNotification) => void): OneSignalBuilder;
        handleNotificationOpened(callback: (json: OSNotificationOpenedResult) => void): OneSignalBuilder;
        inFocusDisplaying(displayOption: OSDisplayType): OneSignalBuilder;
        iOSSettings(settings: {
            kOSSettingsKeyAutoPrompt: boolean;
            kOSSettingsKeyInAppLaunchURL: boolean;
        }): OneSignalBuilder;
        endInit(): void;
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

    interface OSActionButton {
        id: string;
        text: string;
        icon: string;
    }

    interface OSPermissionState {
        hasPrompted: boolean;
        status: OSNotificationPermission;
    }

    interface OSSubscriptionState {
        subscribed: boolean;
        userSubscriptionSetting: any;
        userId: any;
        pushToken: any;
    }

    interface OSPermissionSubscriptionState {
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
        Secret = -1
    }

    const enum OSDisplayType {
        None = 0,
        InAppAlert = 1,
        Notification = 2
    }

    const enum OSActionType {
        Opened = 0,
        ActionTake = 1
    }

    const enum OSInFocusDisplayOption {
        None = 0,
        InAppAlert = 1,
        Notification = 2
    }

    const enum OSNotificationPermission {
        NotDetermined = 0,
        Authorized = 1,
        Denied = 2,
    }
}
