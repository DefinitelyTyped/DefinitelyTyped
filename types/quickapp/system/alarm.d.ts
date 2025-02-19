/**
 * 闹钟接口 [1040+]
 * 接口声明: {"name": "system.alarm"}
 */
declare module "@system.alarm" {
    interface SetAlarmOptions {
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
         * - 默认是一次性闹钟
         * - [0,1,2,3,4,5,6] 每天
         * - [0,1,2,3,4]周一到周五
         * - [0,6]（0表示周一 6表示周日
         */
        days?: number[];
        /**
         * 默认铃声随系统，文件路径为数据文件或应用内的资源
         */
        ringtone?: string;
        /**
         * 成功回调
         */
        success?: () => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |201|用户拒绝|
         * |202|参数错误|
         * |203|闹钟能力不可用 [1120+]|
         * |207|用户拒绝并勾选不再询问复选框 [1100+]|
         * |300|I/O 错误|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调（调用成功、失败都会执行）
         */
        complete?: () => void;
    }

    /**
     * 设置闹钟，每次添加弹出提示框，同意后调用接口添加
     */
    function setAlarm(obj: SetAlarmOptions): void;

    /**
     * 获取服务提供商
     * @returns 服务提供商的代号，如厂商的英文品牌名称，假如无此服务则返回空字符串
     */
    function getProvider(): string;

    interface IsAvailableOptions {
        /**
         * 成功回调
         */
        success?: (data: IsAvailableSuccessOptions) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调（调用成功、失败都会执行）
         */
        complete?: () => void;
    }

    interface IsAvailableSuccessOptions {
        /**
         * 是否可用
         */
        isAvailable: boolean;
    }

    /**
     * 获取闹钟能力可用状态
     * [1120+]
     */
    function isAvailable(obj?: IsAvailableOptions): void;
}

declare module "quickapp:@system.alarm" {
    export * from "@system.alarm";
}
