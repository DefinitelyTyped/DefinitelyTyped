/**
 * 1090+
 * 实现系统锁屏的相关功能
 * 接口声明: { "name": "system.keyguard" }
 */
declare module '@system.keyguard' {
    /**
     * 获取快应用当前环境是否为锁屏状态
     * @param obj
     */
    function getKeyguardLockedStatus(obj: {
        /**
         * 成功回调，返回值为一个对象
         */
        success?: (data: {
            /**
             * true 当前快应用在锁屏状态；false 当前快应用在非锁屏状态
             */
            isKeyguardLocked: boolean;
        }) => void;
        /**
         * 失败的回调函数
         */
        fail?: (data: string, code: number) => void;
    }): void;
}
