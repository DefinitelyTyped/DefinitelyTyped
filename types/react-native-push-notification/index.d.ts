// Type definitions for react-native-push-notification 3.0
// Project: https://github.com/zo0r/react-native-push-notification#readme
// Definitions by: Paito Anderson <https://github.com/PaitoAnderson>
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
    message: string|object;
    data: object;
    badge: number;
    alert: object;
    sound: string;
}

export class PushNotificationOptions {
    onRegister?: (token: { os: string, token: string }) => void;
    onNotification?: (notification: PushNotification) => void;
    senderID?: string;
    popInitialNotification?: boolean;
    requestPermissions?: boolean;
}

export type RepeatType = 'week' | 'day' | 'hour' | 'minute' | 'time';

export class PushNotificationObject {
    /* Android only properties */
    id?: string;
    ticker?: string;
    autoCancel?: boolean;
    largeIcon?: string;
    smallIcon?: string;
    bigText?: string;
    subText?: string;
    color?: string;
    vibrate?: boolean;
    vibration?: number;
    tag?: string;
    group?: string;
    ongoing?: boolean;

    /* iOS only properties */
    alertAction?: any;
    category?: any;
    userInfo?: any;

    /* iOS and Android properties */
    title?: string;
    message: string;
    playSound?: boolean;
    soundName?: string;
    number?: string;
    repeatType?: RepeatType;
    actions?: string;
}

export class PushNotificationScheduleObject extends PushNotificationObject {
    date: Date;
}

export interface PushNotification {
    configure(options: PushNotificationOptions): void;
    unregister(): void;
    localNotification(details: PushNotificationObject): void;
    localNotificationSchedule(details: PushNotificationScheduleObject): void;
    requestPermissions(): void;
    presentLocalNotification(details: PushNotificationObject): void;
    scheduleLocalNotification(details: PushNotificationScheduleObject): void;
    cancelLocalNotifications(details: object): void;
    cancelAllLocalNotifications(): void;
    setApplicationIconBadgeNumber(badgeCount: number): void;
    getApplicationIconBadgeNumber(callback: (badgeCount: number) => void): void;
    popInitialNotification(): Promise<PushNotification>;
    abandonPermissions(): void;
    checkPermissions(callback: (permissions: PushNotificationPermissions) => void): void;
    registerNotificationActions(actions: string[]): void;
    clearAllNotifications(): void;
}

declare const PushNotification: PushNotification;

export default PushNotification;
