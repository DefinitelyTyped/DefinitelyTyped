// Type definitions for react-native-push-notification 3.0
// Project: https://github.com/zo0r/react-native-push-notification#readme
// Definitions by: Paito Anderson <https://github.com/PaitoAnderson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module "react-native-push-notification" {

    interface PushNotificationPermissions {
        alert?: boolean
        badge?: boolean
        sound?: boolean
    }

    interface IPushNotification {
        foreground: boolean;
        userInteraction: boolean;
        message: string|Object;
        data: Object;
        badge: number;
        alert: Object;
        sound: string;
    }

    export class PushNotificationOptions {
        onRegister?: (token: { os: string, token: string }) => void;
        onNotification?: (notification: IPushNotification) => void;
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
        Date: Date;
    }

    export default class PushNotification {
        static configure(options: PushNotificationOptions): void;
        static unregister(): void;
        static localNotification(details: PushNotificationObject): void;
        static localNotificationSchedule(details: PushNotificationScheduleObject): void;
        static requestPermissions(): void;
        static presentLocalNotification(details: PushNotificationObject): void;
        static scheduleLocalNotification(details: PushNotificationScheduleObject): void;
        static cancelLocalNotifications(details: object): void;
        static cancelAllLocalNotifications(): void;
        static setApplicationIconBadgeNumber(badgeCount: number): void;
        static getApplicationIconBadgeNumber(callback: (badgeCount: number) => void): void
        static popInitialNotification(): Promise<IPushNotification>;
        static abandonPermissions(): void;
        static checkPermissions(callback: (permissions: PushNotificationPermissions) => void): void
        static registerNotificationActions(actions: string[]): void;
        static clearAllNotifications(): void;
    }
}
