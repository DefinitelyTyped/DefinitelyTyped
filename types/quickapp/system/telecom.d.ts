/**
 * 通信信息
 * 接口声明: { "name": "system.telecom" }
 */
declare module '@system.telecom' {
    /**
     * 获取设备通信信息
     * @param obj
     */
    function getTelecomInfo(obj: {
        /**
         * 成功回调
         */
        success: (data: {
            /**
             * 是否是5G设备
             */
            is5GDevice: boolean;
            /**
             * 5G开关是否已打开
             */
            is5GSwitchOpened: boolean;
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
