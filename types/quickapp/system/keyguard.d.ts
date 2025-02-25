/**
 * 锁屏 keyguard 1090+
 * 实现系统锁屏的相关功能
 * 接口声明: { "name": "system.keyguard" }
 */
declare module "@system.keyguard" {
    interface GetKeyguardLockedStatusOptions {
        /**
         * 成功回调，返回值为一个对象
         */
        success?: (data: GetKeyguardLockedStatusSuccessOptions) => void;
        /**
         * 失败的回调函数
         */
        fail?: (data: string, code: number) => void;
    }

    interface GetKeyguardLockedStatusSuccessOptions {
        /**
         * true 当前快应用在锁屏状态；false 当前快应用在非锁屏状态
         */
        isKeyguardLocked: boolean;
    }

    /**
     * 获取快应用当前环境是否为锁屏状态
     */
    function getKeyguardLockedStatus(obj?: GetKeyguardLockedStatusOptions): void;
}

declare module "quickapp:@system.keyguard" {
    export * from "@system.keyguard";
}
