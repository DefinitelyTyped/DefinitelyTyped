/**
 * 电量信息 [1000+]
 * 接口声明: {"name": "system.battery"}
 */
declare module '@system.battery' {
    /**
     * 获取当前设备的电量信息
     * @param obj
     */
    function getStatus(obj: {
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 是否正在充电
             */
            charging: boolean;
            /**
             * 当前电量，0.0 - 1.0 之间
             */
            level: number;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;
}
