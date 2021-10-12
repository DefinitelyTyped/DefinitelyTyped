/**
 * 蓝牙接口 [1040+]
 * 接口声明: {"name": "system.alarm"}
 */
declare module '@system.alarm' {
    /**
     * 设置闹钟，每次添加弹出提示框，同意后调用接口添加
     * @param obj
     *  hour 设置起闹小时[0，23]
     *  minute 设置起闹分钟[0，59]
     *  message 闹钟名,建议长度不超过10字符,以保证最佳显示效果
     *  vibrate 是否震动，默认true
     *  days 重复周期
     *  ringtone 默认铃声随系统，文件路径为数据文件或应用内的资源
     *  success 成功回调
     *  fail 失败回调
     *  complete 执行结束后的回调
     */
    function setAlarm(obj: {
        /**
         * 设置起闹小时[0，23]
         */
        hour: number;
        /**
         * 设置起闹分钟[0，59]
         */
        minute: number;
        /**
         * 闹钟名,建议长度不超过10字符,以保证最佳显示效果
         */
        message?: string;
        /**
         * 是否震动，默认true
         */
        vibrate?: boolean;
        /**
         * 重复周期
         * 默认是一次性闹钟
         * [0,1,2,3,4,5,6] 每天
         * [0,1,2,3,4]周一到周五
         * [0,6]（0表示周一 6表示周日
         */
        days?: number[];
        /**
         * 默认铃声随系统，文件路径为数据文件或应用内的资源
         */
        ringtone: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * 201: 用户拒绝
         * 202: 参数错误
         * 300: I/O 错误
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调（调用成功、失败都会执行）
         */
        complete?: () => void;
    }): void;

    /**
     * 获取服务提供商
     * @returns string 服务提供商的代号，如厂商的英文品牌名称，假如无此服务则返回空字符串
     */
    function getProvider(): string;
}
