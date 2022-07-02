// Type definitions for react-native-push-notification 8.1
// Project: https://github.com/zo0r/react-native-push-notification#readme
// Definitions by: Paito Anderson <https://github.com/PaitoAnderson>
//                 Tom Sawkins <https://github.com/tomSawkins>
//                 Andrew Li <https://github.com/Li357>
//                 Clément Rucheton <https://github.com/rucheton>
//                 alternacrow <https://github.com/alternacrow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export interface PushNotificationPermissions {
    alert?: boolean | undefined;
    badge?: boolean | undefined;
    sound?: boolean | undefined;
}

export interface ReceivedNotification {
    foreground: boolean;
    userInteraction: boolean;
    message: string | object;
    data: Record<string, any>;
    userInfo: Record<string, any>;
    subText?: string | undefined;
    badge: number;
    alert: object;
    sound: string;
    id: string;
    action?: string | undefined;
    finish: (fetchResult: string) => void;
}

export interface PushNotificationOptions {
    onRegister?: ((token: { os: string; token: string }) => void) | undefined;
    onNotification?: ((notification: Omit<ReceivedNotification, 'userInfo'>) => void) | undefined;
    onAction?: ((notification: ReceivedNotification) => void) | undefined;
    onRegistrationError?: ((error: any) => void) | undefined;
    onRemoteFetch?: ((notificationData: any) => void) | undefined;
    permissions?: PushNotificationPermissions | undefined;
    popInitialNotification?: boolean | undefined;
    requestPermissions?: boolean | undefined;
}

export class PushNotificationObject {
    /* Android only properties */
    ticker?: string | undefined;
    showWhen?: boolean | undefined;
    autoCancel?: boolean | undefined;
    largeIcon?: string | undefined;
    largeIconUrl?: string | undefined;
    smallIcon?: string | undefined;
    bigText?: string | undefined;
    subText?: string | undefined;
    bigPictureUrl?: string | undefined;
    bigLargeIcon?: string | undefined;
    bigLargeIconUrl?: string | undefined;
    color?: string | undefined;
    vibrate?: boolean | undefined;
    vibration?: number | undefined;
    tag?: string | undefined;
    group?: string | undefined;
    groupSummary?: boolean | undefined;
    ongoing?: boolean | undefined;
    priority?: 'max' | 'high' | 'low' | 'min' | 'default' | undefined;
    visibility?: 'private' | 'public' | 'secret' | undefined;
    importance?: 'default' | 'max' | 'high' | 'low' | 'min' | 'none' | 'unspecified' | undefined;
    ignoreInForeground?: boolean | undefined;
    shortcutId?: string | undefined;
    channelId?: string | undefined;
    onlyAlertOnce?: boolean | undefined;
    allowWhileIdle?: boolean | undefined;
    timeoutAfter?: number | null | undefined;
    messageId?: string | undefined;

    when?: number | null | undefined;
    usesChronometer?: boolean | undefined;

    actions?: string[] | undefined;
    invokeApp?: boolean | undefined;

    /* iOS only properties */
    category?: any;

    /* iOS and Android properties */
    id?: string | number | undefined;
    title?: string | undefined;
    message: string;
    picture?: string | undefined;
    userInfo?: any;
    playSound?: boolean | undefined;
    soundName?: string | undefined;
    number?: string | number | undefined;
    repeatType?: 'week' | 'day' | 'hour' | 'minute' | 'time' | undefined;
    repeatTime?: number | undefined;
}

export class PushNotificationScheduleObject extends PushNotificationObject {
    date: Date;
    allowWhileIdle?: boolean | undefined;
}

export class PushNotificationDeliveredObject {
    identifier: string;
    title: string;
    body: string;
    tag: string;
    group: string;
    category?: string | undefined;
    userInfo?: any;
}

export class PushNotificationScheduledLocalObject {
    id: string;
    date: Date;
    title: string;
    message: string;
    soundName: string;
    repeatInterval: number;
    number: number;
    data: Record<string, any>;
}

export enum Importance {
    DEFAULT = 3,
    HIGH = 4,
    LOW = 2,
    MIN = 1,
    NONE = 0,
    UNSPECIFIED = -1000,
}

export class ChannelObject {
    channelId: string;
    channelName: string;
    channelDescription?: string | undefined;
    soundName?: string | undefined;
    importance?: Importance | undefined;
    vibrate?: boolean | undefined;
    playSound?: boolean | undefined;
}

export interface PushNotification {
    configure(options: PushNotificationOptions): void;
    unregister(): void;
    localNotification(notification: PushNotificationObject): void;
    localNotificationSchedule(notification: PushNotificationScheduleObject): void;
    requestPermissions(permissions?: Array<'alert' | 'badge' | 'sound'>): Promise<PushNotificationPermissions>;
    subscribeToTopic(topic: string): void;
    unsubscribeFromTopic(topic: string): void;
    presentLocalNotification(notification: PushNotificationObject): void;
    scheduleLocalNotification(notification: PushNotificationScheduleObject): void;

    /**
     * @deprecated use cancelLocalNotification method
     */
    cancelLocalNotifications(details: { id: string }): void;
    cancelLocalNotification(notificationId: string): void;
    clearLocalNotification(tag: string, notificationID: number): void;
    cancelAllLocalNotifications(): void;
    setApplicationIconBadgeNumber(badgeCount: number): void;
    getApplicationIconBadgeNumber(callback: (badgeCount: number) => void): void;
    popInitialNotification(callback: (notification: ReceivedNotification | null) => void): void;
    abandonPermissions(): void;
    checkPermissions(callback: (permissions: PushNotificationPermissions) => void): void;
    clearAllNotifications(): void;
    removeAllDeliveredNotifications(): void;
    getDeliveredNotifications(callback: (notifications: PushNotificationDeliveredObject[]) => void): void;
    getScheduledLocalNotifications(callback: (notifications: PushNotificationScheduledLocalObject[]) => void): void;
    removeDeliveredNotifications(identifiers: string[]): void;
    invokeApp(notification: PushNotificationObject): void;
    getChannels(callback: (channel_ids: string[]) => void): void;
    channelExists(channel_id: string, callback: (exists: boolean) => void): void;
    createChannel(channel: ChannelObject, callback: (created: boolean) => void): void;
    channelBlocked(channel_id: string, callback: (blocked: boolean) => void): void;
    deleteChannel(channel_id: string): void;
}

declare const PushNotification: PushNotification;

export default PushNotification;
