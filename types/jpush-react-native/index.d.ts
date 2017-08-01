// Type definitions for jpush-react-native 1.6
// Project: https://github.com/jpush/jpush-react-native
// Definitions by: HuHuanming <https://github.com/huhuanming>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class JPush {
    /**
     * Android only
     * 初始化JPush 必须先初始化才能执行其他操作
     */
    static initPush(): void;

    /**
     * Android
     */
    static stopPush(): void;

    /**
     * Android
     */
    static resumePush(): void;

    /**
     * Android
     */
    static clearAllNotifications(): void;

    /**
     * Android
     */
    static clearNotificationById(id: string): void;

    /**
     * Android
     */
    static getInfo(cb: (map: any) => void): void;

    static setTags(tags: string[], successCallback: () => void, failedCallback: () => void): void;

    static setAlias(alias: string, successCallback: () => void, failedCallback: () => void): void;

    static setAliasAndTags(alias: string, tag: string[], successCallback: () => void, failedCallback: () => void): void;

    /**
     * Android
     */
    static setStyleBasic(): void;

    /**
     * Android
     */
    static setStyleCustom(): void;

    /**
     * Android
     */
    static addReceiveCustomMsgListener(cb: (message: string) => void): void;

    /**
     * Android
     */
    static removeReceiveCustomMsgListener(cb: any): void;

    /**
     * Android
     */
    static addReceiveNotificationListener(cb: (map: any) => void): void;

    /**
     * Android
     */
    static removeReceiveNotificationListener(cb: any): void;

    /**
     * Android
     */
    static addReceiveOpenNotificationListener(cb: (message: string) => void): void;

    /**
     * Android
     */
    static removeReceiveOpenNotificationListener(cb: any): void;

    /**
     * Android
     * If device register succeed, the server will return registrationId
     */
    static addGetRegistrationIdListener(cb: (registrationId: string) => void): void;

    static removeGetRegistrationIdListener(cb: any): void;

    /**
     * iOS,  Android
     */
    static getRegistrationID(cb: (registrationId: string) => void): void;

    /**
     * iOS
     */
    static setupPush(): void;

    /**
     * iOS
     */
    static getAppkeyWithcallback(cb: (appKey: string) => void): void;

    // iOS Only
    static setLocalNotification(
        date: Date,
        alertBody: string,
        badge?: number,
        alertAction?: string,
        notificationKey?: string,
        userInfo?: any,
        soundName?: string
    ): void;

    /**
     * iOS
     */
    static setBadge(badge: number, callback: (isSuccess: boolean) => void): void;
}
