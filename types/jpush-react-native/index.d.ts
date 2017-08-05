// Type definitions for jpush-react-native 2.0
// Project: https://github.com/jpush/jpush-react-native
// Definitions by: HuHuanming <https://github.com/huhuanming>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface JInfoMap {
    myAppKey: string;
    myImei: string;
    myPackageName: string;
    myDeviceId: string;
    myVersion: string;
}

type JSuccessCallback<T = undefined> = (result: T) => void;
type JFailCallback = (result: { errorCode: number }) => void;
type JResultCallback<T = undefined>= (result: T) => void;

declare class JPush {
    /**
     * Android only
     * 初始化JPush 必须先初始化才能执行其他操作
     */
    static initPush(): void;

    /**
     * Android Only
     */
    static stopPush(): void;

    /**
     * Android Only
     */
    static resumePush(): void;

    /**
     * Android Only
     */
    static notifyJSDidLoad(cb: JResultCallback<number>): void;

    /**
     * Android Only
     */
    static clearAllNotifications(): void;

    /**
     * Android Only
     */
    static clearNotificationById(id: string): void;

    /**
     * Android Only
     */
    static getInfo(cb: (infoMap: JInfoMap) => void): void;

    /**
     * 获取当前连接状态
     * 如果连接状态变更为已连接返回 true
     * 如果连接状态变更为断开连接连接返回 false
     */
    static getConnectionState(cb: JResultCallback<boolean>): void;

    /**
     * 重新设置 Tag
     */
    static setTags(tags: string[], callback: JSuccessCallback<{ tags: string[] }> | JFailCallback): void;

    /**
     * 在原有 tags 的基础上添加 tags
     */
    static addTags(tags: string[], callback: JSuccessCallback<{ tags: string[] }> | JFailCallback): void;

    /**
     * 删除指定的 tags
     */
    static deleteTags(tags: string[], callback: JSuccessCallback<{ tags: string[] }> | JFailCallback): void;

    /**
     * 清空所有 tags
     */
    static cleanTags(callback: JSuccessCallback<{ tags: string[] }> | JFailCallback): void;

    /**
     * 获取所有已有标签
     */
    static getAllTags(callback: JSuccessCallback<{ tags: string[] }> | JFailCallback): void;

    /**
     * 检查当前设备是否绑定该 tag
     */
    static checkTagBindState(tags: string, callback: JSuccessCallback<{ isBind: boolean }> | JFailCallback): void;

    /**
     * 重置 alias
     */
    static setAlias(alias: string, callback: JSuccessCallback<{ alias: string }> | JFailCallback): void;

    /**
     * 删除原有 alias
     */
    static deleteAlias(callback: JSuccessCallback<{ alias: string }> | JFailCallback): void;

    /**
     * 获取当前设备 alias
     */
    static getAlias(callback: JSuccessCallback<{ alias: string }> | JFailCallback): void;

    /**
     * Android Only
     */
    static setStyleBasic(): void;

    /**
     * Android Only
     */
    static setStyleCustom(): void;

    /**
     * Android Only
     */
    static jumpToPushActivity(activityName: string): void;

    /**
     * Android Only
     */
    static finishActivity(): void;

    /**
     * Android Only
     */
    static addReceiveCustomMsgListener(cb: JSuccessCallback<any>): void;

    /**
     * Android Only
     */
    static removeReceiveCustomMsgListener(cb: JSuccessCallback<any>): void;

    /**
     * iOS Only
     */
    static addOpenNotificationLaunchAppListener(cb: JSuccessCallback<string>): void;

    /**
     * iOS Only
     */
    static removeOpenNotificationLaunchAppEventListener(cb: JSuccessCallback): void;

    /**
     * iOS Only
     *
     * 监听：应用连接已登录
     */
    static addnetworkDidLoginListener(cb: JSuccessCallback<string>): void;

    /**
     * iOS Only
     *
     * 取消监听：应用连接已登录
     */
    static removenetworkDidLoginListener(cb: JSuccessCallback): void;

    /**
     * 监听：接收推送事件
     */
    static addReceiveNotificationListener(cb: JSuccessCallback<any>): void;

    /**
     * 取消监听：接收推送事件
     */
    static removeReceiveNotificationListener(cb: JSuccessCallback): void;

    /**
     * 监听：点击推送事件
     */
    static addReceiveOpenNotificationListener(cb: JSuccessCallback<any>): void;

    /**
     * 取消监听：点击推送事件
     */
    static removeReceiveOpenNotificationListener(cb: JSuccessCallback): void;

    /**
     * Android Only
     *
     * If device register succeed, the server will return registrationId
     */
    static addGetRegistrationIdListener(cb: JSuccessCallback<string>): void;

    /**
     * Android Only
     */
    static removeGetRegistrationIdListener(cb: JSuccessCallback): void;

    /**
     * 监听：连接状态变更
     */
    static addConnectionChangeListener(cb: JSuccessCallback<boolean>): void;

    /**
     * 监听：连接状态变更
     */
    static removeConnectionChangeListener(cb: JSuccessCallback<boolean>): void;

    /**
     * 获取 RegistrationId
     */
    static getRegistrationID(cb: JSuccessCallback<number>): void;

    /**
     * iOS Only
     * 初始化 JPush SDK 代码,
     * NOTE: 如果已经在原生 SDK 中添加初始化代码则无需再调用 （通过脚本配置，会自动在原生中添加初始化，无需额外调用）
     */
    static setupPush(): void;

    /**
     * iOS Only
     */
    static getAppkeyWithcallback(cb: JSuccessCallback<string>): void;

    /**
     * iOS Only
     * 设置本地推送
     * @param {Date} date  触发本地推送的时间
     * @param {String} textContain 推送消息体内容
     * @param {Int} badge  本地推送触发后 应用 Badge（小红点）显示的数字
     * @param {String} alertAction 弹框的按钮显示的内容（IOS 8默认为"打开", 其他默认为"启动"）
     * @param {String} notificationKey  本地推送标示符
     * @param {Object} userInfo 推送的附加字段 选填
     * @param {String} soundName 自定义通知声音，设置为 null 为默认声音
     */
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
     * iOS Only
     * 设置应用 Badge（小红点）
     */
    static setBadge(badge: number, callback: JSuccessCallback<number[]>): void;
}

export default JPush;
