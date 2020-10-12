// Type definitions for react-native-push-notification 5.0
// Project: https://github.com/zo0r/react-native-push-notification#readme
// Definitions by: Paito Anderson <https://github.com/PaitoAnderson>
//                 Tom Sawkins <https://github.com/tomSawkins>
//                 Andrew Li <https://github.com/Li357>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface PushNotificationPermissions {
    alert?: boolean;
    badge?: boolean;
    sound?: boolean;
}

export interface PushNotification {
    foreground: boolean;
    userInteraction: boolean;
    message: string | object;
    data: object;
    subText?: string;
    badge: number;
    alert: object;
    sound: string;
    id: number;
    finish: (fetchResult: string) => void;
}

export interface PushNotificationOptions {
    onRegister?: (token: { os: string; token: string }) => void;
    onNotification?: (notification: PushNotification) => void;
    onAction?: (notification: PushNotification) => void;
    onRegistrationError?: (error: any) => void;
    onRemoteFetch?: (notificationData: any) => void;
    permissions?: PushNotificationPermissions;
    popInitialNotification?: boolean;
    requestPermissions?: boolean;
}

export class PushNotificationObject {
    /* Android only properties */
    ticker?: string;
    showWhen?: boolean;
    autoCancel?: boolean;
    largeIcon?: string;
    largeIconUrl?: string;
    smallIcon?: string;
    bigText?: string;
    subText?: string;
    bigPictureUrl?: string;
    color?: string;
    vibrate?: boolean;
    vibration?: number;
    tag?: string;
    group?: string;
    groupSummary?: boolean;
    ongoing?: boolean;
    priority?: "max" | "high" | "low" | "min" | "default";
    visibility?: "private" | "public" | "secret";
    importance?: "default" | "max" | "high" | "low" | "min" | "none" | "unspecified";
    ignoreInForeground?: boolean;
    shortcutId?: string;
    channelId?: string;
    onlyAlertOnce?: boolean;
    allowWhileIdle?: boolean;

    messageId?: string;

    actions?: string;
    invokeApp?: boolean;

    /* iOS only properties */
    alertAction?: any;
    category?: any;

    /* iOS and Android properties */
    id?: number;
    title?: string;
    message: string;
    userInfo?: any;
    playSound?: boolean;
    soundName?: string;
    number?: string | number;
    repeatType?: "week" | "day" | "hour" | "minute" | "time";
    repeatTime?: number;
}

export class PushNotificationScheduleObject extends PushNotificationObject {
    date: Date;
    allowWhileIdle?: boolean;
}

export class PushNotificationDeliveredObject {
    identifier: string;
    title: string;
    body: string;
    tag: string;
    group: string;
}

export class PushNotificationScheduledLocalObject {
    id: number;
    date: Date;
    title: string;
    body: string;
    soundName: string;
    repeatInterval: number;
    number: number;
}

export class ChannelObject {
    channelId: string;
    channelName: string;
    channelDescription?: string;
    soundName?: string;
    importance?: number;
    vibrate?: boolean;
}

export interface PushNotification {
    configure(options: PushNotificationOptions): void;
    unregister(): void;
    localNotification(notification: PushNotificationObject): void;
    localNotificationSchedule(notification: PushNotificationScheduleObject): void;
    requestPermissions(
        permissions?: Array<"alert" | "badge" | "sound">
    ): Promise<PushNotificationPermissions>;
    subscribeToTopic(topic: string): void;
    unsubscribeFromTopic(topic: string): void;
    presentLocalNotification(notification: PushNotificationObject): void;
    scheduleLocalNotification(notification: PushNotificationScheduleObject): void;
    cancelLocalNotifications(details: { id: string }): void;
    clearLocalNotification(tag: string, notificationID: number): void;
    cancelAllLocalNotifications(): void;
    setApplicationIconBadgeNumber(badgeCount: number): void;
    getApplicationIconBadgeNumber(
        callback: (badgeCount: number) => void
    ): void;
    popInitialNotification(
        callback: (notification: PushNotification | null) => void
    ): void;
    abandonPermissions(): void;
    checkPermissions(
        callback: (permissions: PushNotificationPermissions) => void
    ): void;
    clearAllNotifications(): void;
    removeAllDeliveredNotifications(): void;
    getDeliveredNotifications(
        callback: (notifications: PushNotificationDeliveredObject[]) => void
    ): void;
    getScheduledLocalNotifications(
        callback: (notifications: PushNotificationScheduledLocalObject[]) => void
    ): void;
    removeDeliveredNotifications(identifiers: string[]): void;
    invokeApp(notification: PushNotificationObject): void;
    getChannels(
        callback: (channel_ids: string[]) => void
    ): void;
    channelExists(
        channel_id: string,
        callback: (exists: boolean) => void
    ): void;
    createChannel(
        channel: ChannelObject,
        callback: (created: boolean) => void
    ): void;
    channelBlocked(
        channel_id: string,
        callback: (blocked: boolean) => void
    ): void;
    deleteChannel(channel_id: string): void;
}

declare const PushNotification: PushNotification;

export default PushNotification;
